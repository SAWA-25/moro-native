import { describe, expect, it } from 'vitest';
import {
  getManualUpdateNotices,
  MANUAL_DESTINATIONS,
  MANUAL_ENTRIES,
  MANUAL_UPDATE_NOTICES,
  flattenManualSettings,
} from '../apps/manual/manualData';
import {
  getLatestManualUpdateNotice,
  getPendingManualUpdateNotice,
  getPendingManualUpdateNotices,
  MANUAL_UPDATE_NOTICE_SEEN_KEY,
  markManualUpdateNoticeSeen,
} from './manualUpdateNotice';

const fakeStorage = () => {
  const data = new Map<string, string>();
  return {
    getItem: (key: string) => data.get(key) ?? null,
    setItem: (key: string, value: string) => { data.set(key, value); },
  };
};

describe('manual update notices', () => {
  it('uses unique ids', () => {
    const ids = MANUAL_UPDATE_NOTICES.map(notice => notice.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has complete user-facing content', () => {
    for (const notice of MANUAL_UPDATE_NOTICES) {
      expect(notice.id.trim()).toBeTruthy();
      expect(Number.isNaN(Date.parse(notice.date))).toBe(false);
      expect(notice.title.trim()).toBeTruthy();
      expect(notice.summary.trim()).toBeTruthy();
      expect(notice.items.length).toBeGreaterThan(0);
      expect(notice.items.every(item => item.trim().length > 0)).toBe(true);
    }
  });

  it('returns notices newest first', () => {
    const sorted = getManualUpdateNotices();

    for (let i = 1; i < sorted.length; i += 1) {
      expect(Date.parse(sorted[i - 1].date)).toBeGreaterThanOrEqual(Date.parse(sorted[i].date));
    }
  });

  it('queues every unseen notice once', () => {
    const storage = fakeStorage();
    const latest = getLatestManualUpdateNotice();
    expect(latest).toBeTruthy();

    expect(getPendingManualUpdateNotices(storage).map(notice => notice.id)).toEqual(
      getManualUpdateNotices().map(notice => notice.id),
    );
    expect(getPendingManualUpdateNotice(storage)?.id).toBe(latest!.id);
    markManualUpdateNoticeSeen(latest!.id, storage);

    expect(JSON.parse(storage.getItem(MANUAL_UPDATE_NOTICE_SEEN_KEY) || '[]')).toContain(latest!.id);
    expect(getPendingManualUpdateNotices(storage).some(notice => notice.id === latest!.id)).toBe(false);
    expect(getPendingManualUpdateNotices(storage).length).toBe(Math.max(0, MANUAL_UPDATE_NOTICES.length - 1));
  });

  it('does not queue already-read notices again on later checks', () => {
    const storage = fakeStorage();
    for (const notice of getManualUpdateNotices()) {
      markManualUpdateNoticeSeen(notice.id, storage);
    }

    expect(getPendingManualUpdateNotice(storage)).toBeNull();
    expect(getPendingManualUpdateNotices(storage)).toEqual([]);
  });

  it('keeps legacy single-id seen storage compatible', () => {
    const storage = fakeStorage();
    const latest = getLatestManualUpdateNotice();
    expect(latest).toBeTruthy();
    storage.setItem(MANUAL_UPDATE_NOTICE_SEEN_KEY, latest!.id);

    expect(getPendingManualUpdateNotices(storage).some(notice => notice.id === latest!.id)).toBe(false);
  });
});

describe('manual guide data', () => {
  it('uses unique entry names', () => {
    const names = MANUAL_ENTRIES.map(entry => entry.app);
    expect(new Set(names).size).toBe(names.length);
  });

  it('has a guide entry for every destination', () => {
    const entryNames = new Set(MANUAL_ENTRIES.map(entry => entry.app));

    for (const destinationName of Object.keys(MANUAL_DESTINATIONS)) {
      expect(entryNames.has(destinationName)).toBe(true);
    }
  });

  it('uses unique setting ids', () => {
    const ids = flattenManualSettings().map(({ setting }) => setting.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('keeps user-facing entries complete enough to read without guessing', () => {
    for (const entry of MANUAL_ENTRIES) {
      if (entry.devOnly) continue;

      expect(entry.summary.trim().length).toBeGreaterThan(12);
      expect(entry.features.length).toBeGreaterThanOrEqual(4);
      expect(entry.beginnerSteps?.length || 0).toBeGreaterThanOrEqual(3);
      expect(entry.commonQuestions?.length || 0).toBeGreaterThanOrEqual(3);
      expect(entry.tips?.length || 0).toBeGreaterThanOrEqual(1);
      expect((entry.settingSections || []).length).toBeGreaterThanOrEqual(1);
      expect((entry.settingSections || []).flatMap(section => section.settings).length).toBeGreaterThanOrEqual(4);
    }
  });

  it('keeps settings descriptive and searchable', () => {
    for (const { entry, section, setting } of flattenManualSettings()) {
      expect(entry.app.trim()).toBeTruthy();
      expect(section.id.trim()).toBeTruthy();
      expect(setting.id.trim()).toBeTruthy();
      expect(setting.title.trim()).toBeTruthy();
      expect(setting.description.trim().length).toBeGreaterThan(8);
      if (setting.path) {
        expect(setting.path.every(step => step.trim().length > 0)).toBe(true);
      }
      if (setting.keywords) {
        expect(setting.keywords.every(keyword => keyword.trim().length > 0)).toBe(true);
      }
    }
  });

  it('documents the default-off Moro preset seed', () => {
    const presetEntry = MANUAL_ENTRIES.find(entry => entry.en === 'Presets');
    const notice = MANUAL_UPDATE_NOTICES.find(item => item.id === '2026-07-03-preset-default-seed');

    expect(notice?.summary).toContain('榛樿涓嶆帴绠¤亰澶?);
    expect(presetEntry?.features.join('\n')).toContain('榛樿鍏抽棴');
    expect(presetEntry?.beginnerSteps?.join('\n')).toContain('榛樿鍏抽棴');
  });

  it('documents the chat hub dashboard entry and destination', () => {
    const chat = MANUAL_ENTRIES.find(entry => entry.app === '绲');
    const dashboard = MANUAL_ENTRIES.find(entry => entry.app === '绲路鎬昏');

    expect(MANUAL_UPDATE_NOTICES.some(notice => notice.id === '2026-07-03-chat-hub-dashboard-v2')).toBe(true);
    expect(chat?.features.join('\n')).toContain('绲鎬昏');
    expect(dashboard?.settingSections?.[0].settings.map(setting => setting.id)).toContain('chat-dashboard-followups');
    expect(MANUAL_DESTINATIONS['绲路鎬昏']?.deepLink?.route).toBe('dashboard');
  });

  it('documents private chat user screen watch boundaries', () => {
    const tools = MANUAL_ENTRIES.find(entry => entry.app === '绲路鍗曡亰宸ュ叿');
    const notice = MANUAL_UPDATE_NOTICES.find(item => item.id === '2026-07-03-chat-user-screen-watch');
    const text = [
      notice?.summary,
      ...(notice?.items || []),
      tools?.summary,
      ...(tools?.features || []),
      ...(tools?.settingSections || []).flatMap(section => section.settings.flatMap(setting => [
        setting.title,
        setting.description,
        ...(setting.options || []).map(option => `${option.label}${option.description}`),
      ])),
      ...(MANUAL_DESTINATIONS['绲路鍗曡亰宸ュ叿']?.details || []),
    ].join('\n');

    expect(notice).toBeTruthy();
    expect(text).toContain('瑙傚睆璇勮');
    expect(text).toContain('涓诲姩鍏变韩');
    expect(text).toContain('Moro 鍐呴儴');
    expect(text).toContain('涓嶄細璇诲彇鐪熷疄绯荤粺鍚庡彴 App 鍒楄〃');
    expect(text).toContain('涓嶄細鍒涘缓 Android 鍏ㄥ眬鎮诞绐?);
  });
});
