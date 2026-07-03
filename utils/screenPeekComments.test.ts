import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { CharacterProfile, ScreenPeekCard, ScreenPeekDeviceSnapshot, UserProfile } from '../types';
import type { ResolvedApi } from './auxApi';
import {
  appendScreenPeekCommentToCard,
  generateScreenPeekLiveComment,
  parseScreenPeekComment,
  summarizeScreenPeekDeviceSnapshot,
} from './screenPeekComments';
import { llmComplete } from './llmComplete';

vi.mock('./llmComplete', () => ({
  llmComplete: vi.fn(),
}));

const mockedLlmComplete = vi.mocked(llmComplete);

const api: ResolvedApi = {
  baseUrl: 'https://api.example.com/v1',
  apiKey: 'key',
  model: 'vision-test',
  apiRole: 'aux',
  apiBinding: 'test',
};

const char: CharacterProfile = {
  id: 'char-screen',
  name: '阿絮',
  avatar: '',
  description: '嘴上爱吐槽但很关心用户。',
  systemPrompt: '温柔、敏锐、偶尔开玩笑。',
  memories: [],
};

const userProfile = { name: '小秋' } as UserProfile;

const card: ScreenPeekCard = {
  id: 'screen-peek-test',
  charId: char.id,
  charName: char.name,
  generatedAt: 1780000000000,
  title: '阿絮 正在看你的真实手机',
  narrative: '用户授权录屏后，TA 通过悬浮窗看真实手机画面。',
  viewTarget: 'user_phone',
  chats: [],
  browsed: [],
  notes: [],
};

const captureSnapshot: ScreenPeekDeviceSnapshot = {
  source: 'android_screen_capture',
  native: true,
  platform: 'android',
  packageName: 'com.moro.app',
  capturedAt: 1780000001234,
  screenCaptureActive: true,
  overlayPermissionGranted: true,
  screenFrame: {
    source: 'android_media_projection',
    capturedAt: 1780000001234,
    width: 360,
    height: 720,
    mimeType: 'image/jpeg',
    dataUrl: 'data:image/jpeg;base64,ZmFrZQ==',
  },
  currentForegroundApp: {
    appName: '桌面',
    packageName: 'com.android.launcher',
  },
};

describe('screen peek comment parsing', () => {
  it('parses JSON output and normalizes unknown tone', () => {
    expect(parseScreenPeekComment('```json\n{"text":"你这桌面也太热闹了。","tone":"tease"}\n```')).toEqual({
      text: '你这桌面也太热闹了。',
      tone: 'tease',
    });

    expect(parseScreenPeekComment('{"text":"先别让我看验证码。","tone":"secret"}')).toEqual({
      text: '先别让我看验证码。',
      tone: 'soft',
    });
  });

  it('accepts plain text and trims long content', () => {
    const parsed = parseScreenPeekComment('  '.padEnd(130, '很'));
    expect(parsed?.tone).toBe('soft');
    expect(parsed?.text.length).toBeLessThanOrEqual(91);
  });
});

describe('screen peek live comments', () => {
  beforeEach(() => {
    mockedLlmComplete.mockReset();
  });

  it('summarizes authorized screen recording state', () => {
    const summary = summarizeScreenPeekDeviceSnapshot(captureSnapshot);
    expect(summary).toContain('录屏授权');
    expect(summary).toContain('桌面');
    expect(summary).toContain('360x720');
  });

  it('sends the authorized screen frame to the AI and returns a stored comment', async () => {
    mockedLlmComplete.mockResolvedValueOnce('{"text":"你停在桌面发呆这一下，有点可爱。","tone":"soft"}');

    const comment = await generateScreenPeekLiveComment({
      api,
      char,
      userProfile,
      card,
      deviceSnapshot: captureSnapshot,
      trigger: 'manual',
    });

    expect(comment.text).toContain('桌面');
    expect(comment.deviceSnapshotSource).toBe('android_screen_capture');
    expect(comment.observedScreenCapturedAt).toBe(captureSnapshot.screenFrame!.capturedAt);
    const messages = mockedLlmComplete.mock.calls[0][1];
    expect(messages[1].content[1].image_url.url).toBe(captureSnapshot.screenFrame!.dataUrl);
  });

  it('does not fabricate comments when screen capture is unavailable', async () => {
    await expect(generateScreenPeekLiveComment({
      api,
      char,
      userProfile,
      card,
      deviceSnapshot: { source: 'screen_capture_permission_required', unavailableReason: '需要录屏授权' },
      trigger: 'session_start',
    })).rejects.toThrow(/录屏|画面/);

    expect(mockedLlmComplete).not.toHaveBeenCalled();
  });

  it('keeps appended card content stable and capped', () => {
    const filled: ScreenPeekCard = {
      ...card,
      liveComments: Array.from({ length: 12 }, (_, index) => ({
        id: `old-${index}`,
        createdAt: index,
        trigger: 'manual',
        text: `旧评论 ${index}`,
      })),
    };
    const updated = appendScreenPeekCommentToCard(filled, {
      id: 'new',
      createdAt: 99,
      trigger: 'manual',
      text: '新评论',
      deviceSnapshotSource: 'android_screen_capture',
    });

    expect(updated.viewTarget).toBe('user_phone');
    expect(updated.liveComments).toHaveLength(12);
    expect(updated.liveComments?.[updated.liveComments.length - 1]?.id).toBe('new');
    expect(updated.charId).toBe(card.charId);
  });
});
