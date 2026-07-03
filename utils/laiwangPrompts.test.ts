import { describe, expect, it } from 'vitest';
import {
  AUTONOMOUS_BATCH_SYSTEM,
  AUTONOMOUS_SINGLE_SYSTEM,
  activeMsg2ImportantRules,
  activeMsg2ModeInstruction,
  characterDialogueGuidance,
  livePrivateDraftPromptBody,
  livePrivateInterjectPromptBody,
  proactiveFallbackHint,
  swOfflineProactiveSystemPrompt,
  userScreenWatchCommentSystemPrompt,
  userScreenWatchContextBlock,
} from './laiwangPrompts';

describe('laiwang prompt copy', () => {
  it('explains how character settings become natural dialogue', () => {
    const text = characterDialogueGuidance('灏忓');

    expect(text).toContain('瑙掕壊璁惧畾鐨勮嚜鐒跺璇濇柟寮?);
    expect(text).toContain('鑰屼笉鏄€愭潯澶嶈堪缁欏皬澶忓惉');
    expect(text).toContain('瀵硅瘽绀轰緥鍙敤鏉ュ涔犺璇濊妭濂?);
    expect(text).toContain('瀹冧滑涓嶆槸瀹為檯鍙戠敓杩囩殑鍘嗗彶');
  });

  it('marks live draft text as unsent and not persisted', () => {
    const text = livePrivateDraftPromptBody({
      userName: '灏忓',
      charName: '闃胯繜',
      draftText: '鎴戣繕鍦ㄦ兂鎬庝箞璇?,
    });

    expect(text).toContain('鏈寮忓彂閫?);
    expect(text).toContain('涓嶄細鍐欒繘鑱婂ぉ璁板綍');
    expect(text).toContain('涓嶈惤搴?);
    expect(text).toContain('涓嶈鎶婅崏绋垮綋鎴愬凡缁忚鍑哄彛');
  });

  it('keeps live private interjects out of the current chat window fiction', () => {
    const text = livePrivateInterjectPromptBody({
      userName: '灏忓',
      charName: '闃胯繜',
      sourceCharName: '鏋楁櫄',
      userText: '浠婂ぉ濂藉洶',
      recent: '灏忓: 鏃?,
    });

    expect(text).toContain('涓嶈鍋囪鑷繁鍦ㄥ綋鍓嶇鑱婇噷');
    expect(text).toContain('涓嶈鍋囪鐪嬭浜?);
    expect(text).toContain('涓嶈璇存垚灏忓鎶婂悓涓€鏉℃秷鎭彂缁欎簡浣?);
    expect(text).toContain('淇濆瓨鍒颁綘鑷繁鐨勭鑱婇噷');
  });

  it('keeps autonomous life v2 fields in the JSON examples', () => {
    for (const field of ['eventKind', 'energy', 'intensity', 'shareWillingness', 'thread', 'proactiveAngle']) {
      expect(AUTONOMOUS_SINGLE_SYSTEM).toContain(field);
      expect(AUTONOMOUS_BATCH_SYSTEM).toContain(field);
    }
    expect(AUTONOMOUS_SINGLE_SYSTEM).toContain('proactiveAngle 鍙兘鏄?);
    expect(AUTONOMOUS_BATCH_SYSTEM).toContain('shareWillingness 浣庣殑浜嬩欢涔熷彲浠ュ瓨鍦?);
  });

  it('keeps proactive call instructions conditional in fallback prompts', () => {
    const withCall = proactiveFallbackHint({
      userName: '灏忓',
      timeStr: '7鏈?鏃?20:00',
      timeSinceUser: '3灏忔椂',
      longGap: true,
      proactiveCallAllowed: true,
    });
    const withoutCall = proactiveFallbackHint({
      userName: '灏忓',
      timeStr: '7鏈?鏃?20:00',
      timeSinceUser: '3灏忔椂',
      longGap: true,
      proactiveCallAllowed: false,
    });

    expect(withCall).toContain('[[CALL_USER]]');
    expect(withCall).toContain('绂佹妯℃澘瀵掓殑');
    expect(withCall).toContain('瑙ｉ噴瑙﹀彂鍘熷洜');
    expect(withoutCall).not.toContain('[[CALL_USER]]');
  });

  it('centralizes natural active message rules for active message 2.0 and SW prompts', () => {
    const rules = activeMsg2ImportantRules('灏忓').join('\n');
    const prompted = activeMsg2ModeInstruction('prompted', '浠庝笅闆ㄥ垏鍏?);
    const swPrompt = swOfflineProactiveSystemPrompt({
      charName: '闃胯繜',
      nowText: '7鏈?鏃?鍛ㄤ簲 20:00',
      activity: '鍦ㄦゼ涓嬬瓑闆ㄥ仠',
      userName: '灏忓',
    });

    expect(rules).toContain('绂佹妯℃澘瀵掓殑');
    expect(rules).toContain('鍏冭瘽璇?);
    expect(prompted).toContain('棰濆鎻愮ず锛氫粠涓嬮洦鍒囧叆');
    expect(prompted).toContain('涓嶈鎶婇澶栨彁绀虹収鎶勬垚浠诲姟姹囨姤');
    expect(swPrompt).toContain('鐢熸椿鍒囩墖');
    expect(swPrompt).toContain('涓嶈杈撳嚭 [[CALL_USER]]');
  });

  it('keeps couple space context grounded in natural relationship cues', () => {
    const text = coupleSpaceBlock({
      userName: '灏忓',
      charName: '闃胯繜',
      days: 32,
      anniversaryDate: '2026-06-01',
      intimacy: 42,
      level: 2,
      title: '闈犺繎',
      recentMomentLines: ['灏忓锛氶洦澹板緢濂藉惉'],
      upcomingLines: ['绾康鏃ャ€屼竴璧锋暎姝ャ€嶈繕鏈?3 澶┿€?],
      pendingTaskTitles: ['鍛ㄦ湯涓€璧锋暎姝?],
      pendingWishes: ['鍘荤湅娴?],
      recentQaLines: ['灏忓闂€屼綘浼氬悆閱嬪悧銆嶏紝浣犵瓟銆屼細锛屼絾涓嶄竴瀹氭壙璁ゃ€?],
      plantLine: '鐩嗘牻闀垮嚭鏂拌娊浜?,
      lastUserWhisper: '浠婂ぉ鏈夌偣鎯充綘',
      profileLines: ['鐫″墠浜掗亾鏅氬畨'],
      memoryCardLines: ['闆ㄥぉ灏忚矾锛氫綘浠竴璧疯翰闆?],
      recapLines: ['杩欏懆鎶婃櫘閫氶洦澶╄浣忎簡'],
    });

    expect(text).toContain('鍏崇郴绾跨储');
    expect(text).toContain('涓嶈鐓у康娓呭崟');
    expect(text).toContain('涓嶈纭鐢滆瘽');
    expect(text).toContain('1 涓叿浣撶粏鑺?);
    expect(text).toContain('鑷劧涓嶆槸鍐锋贰');
    expect(text).not.toContain('鎭嬬埍閰歌嚟鍛?);
  });

  it('keeps couple one-shot prompts natural and character-led', () => {
    const text = [
      coupleChatPersonaSystem('闃胯繜', '灏忓', '浜鸿锛氭參鐑紝鍢寸‖銆?),
      coupleCommentUserPrompt('灏忓', '浠婂ぉ闆ㄥ０寰堝ソ鍚?, '锛堝績鎯咃細瀹夐潤锛?),
      coupleWhisperUserPrompt('灏忓', '浠婂ぉ鏈夌偣鎯充綘'),
      coupleInteractionUserPrompt('灏忓', '鎶变竴涓?),
      coupleInnerVoiceUserPrompt('灏忓', true, '浠婂ぉ闆ㄥ０寰堝ソ鍚?),
    ].join('\n');

    expect(text).toContain('鑷劧');
    expect(text).toContain('鍏蜂綋缁嗚妭');
    expect(text).toContain('鍢寸‖');
    expect(text).toContain('杞昏交鍚冮唻');
    expect(text).toContain('鍚搫璇曟帰');
    expect(text).toContain('涓嶈绋嬪紡鍖栨拻绯?);
    expect(text).toContain('涓嶈鍐欐垚瀵?灏忓 琛ㄦ紨鐨勭敎璇?);
  });

  it('keeps couple JSON prompt contracts while refining the copy', () => {
    const text = [
      coupleMomentUserPrompt('灏忓', '锛堜綘浠凡鐩告亱 32 澶╋級'),
      coupleAutoCareUserPrompt({
        userName: '灏忓',
        source: '涓嬬彮璺笂鐪嬪埌鑺卞簵鎵撶儕',
        recent: '鍔ㄦ€侊細鏄ㄥぉ璇存兂鏁ｆ',
        allowRecap: true,
      }),
      coupleRecapUserPrompt({
        userName: '灏忓',
        periodLabel: '鏈懆',
        sourceLines: ['鍔ㄦ€侊細闆ㄥ０寰堝ソ鍚?, '绾﹀畾锛氬懆鏈竴璧锋暎姝?],
      }),
    ].join('\n');

    for (const field of ['"text"', '"mood"', '"media"', '"kind"', '"title"', '"highlights"', '"suggestedTasks"', '"suggestedWishes"']) {
      expect(text).toContain(field);
    }
    expect(text).toContain('moment|wish|task|recap|none');
    expect(text).toContain('voice|music|item');
    expect(text).toContain('涓ユ牸鍙緭鍑?JSON');
    expect(text).toContain('涓嶈鏃犳潵婧愬湴鍐欓噸澶ф壙璇?);
    expect(text).toContain('涓嶈缂栭€犻噸澶т簨浠?);
  });

  it('keeps user screen watch prompts bounded to active user sharing', () => {
    const text = [
      userScreenWatchCommentSystemPrompt({
        charName: '闃胯繜',
        userName: '灏忓',
        frameText: 'Moro 鍐呴儴浣跨敤锛氱诞璇?1鍒嗛挓',
        hasImage: true,
      }),
      userScreenWatchContextBlock({
        charName: '闃胯繜',
        userName: '灏忓',
        lines: ['- 瑙傚睆鐘舵€侊細姝ｅ湪鍏变韩銆?, '- Moro 鍐呴儴 App 鍋滅暀锛氱诞璇?1鍒嗛挓銆?],
      }),
    ].join('\n');

    expect(text).toContain('涓诲姩');
    expect(text).toContain('鍏变韩');
    expect(text).toContain('Moro 鍐呴儴');
    expect(text).toContain('涓嶄唬琛ㄤ綘鑳藉湪鍏变韩缁撴潫鍚庣户缁湅瑙?);
    expect(text).not.toContain('鍚庡彴鐩戞帶');
    expect(text).not.toContain('鏃犻檺鏉冮檺');
  });
});
