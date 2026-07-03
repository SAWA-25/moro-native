
export enum AppID {
  Launcher = 'launcher',
  Settings = 'settings',
  Character = 'character',
  Chat = 'chat',
  GroupChat = 'group_chat', 
  Gallery = 'gallery',
  Music = 'music',
  Browser = 'browser',
  ThemeMaker = 'thememaker',
  Appearance = 'appearance',
  Date = 'date',
  Journal = 'journal',
  Schedule = 'schedule',
  Room = 'room',
  CheckPhone = 'check_phone',
  Social = 'social',
  Study = 'study',
  Game = 'game',
  Worldbook = 'worldbook', 
  Novel = 'novel', 
  Bank = 'bank', // New App
  XhsStock = 'xhs_stock', // XHS image stock for publishing
  SpecialMoments = 'special_moments', // Valentine's Day & future events
  XhsFreeRoam = 'xhs_free_roam', // Character autonomous XHS activity
  Songwriting = 'songwriting', // Songwriting / Lyric creation app
  Call = 'call', // 璇煶鐢佃瘽娴嬭瘯锛圡iniMax TTS锛?
  VoiceDesigner = 'voice_designer', // 鎹忓０闊?鈥?MiniMax 闊宠壊璁捐鍣?
  Guidebook = 'guidebook', // 鏀荤暐鏈?鈥?瑙掕壊鏀荤暐鐢ㄦ埛灏忔父鎴?
  LifeSim = 'lifesim', // 妯℃嫙浜虹敓 鈥?涓庤鑹插叡鍚岀粡钀ョ殑灏忎笘鐣?
  MemoryPalace = 'memory_palace', // 璁板繂瀹 鈥?涓冧釜鎴块棿鍙鍖?
  Handbook = 'handbook', // 鎵嬭处 鈥?璺ㄨ鑹茶仛鍚堢殑鐢熸椿鐣欑棔鏈紙LLM 浠ｇ瑪 + 瑙掕壊鐢熸椿娴侀櫔浼达級
  QQBridge = 'qq_bridge', // QQ 妗ユ帴 鈥?閫氳繃 NapCat 鎶?QQ 绉佽亰鎺ュ叆褰撳墠瑙掕壊锛屽叡浜?IndexedDB 涓婁笅鏂?
  HotNews = 'hot_news', // 鐑偣 鈥?鍒嗘椂娈靛彫鍥炵殑澶氬钩鍙扮儹姒滃彲瑙嗗寲锛堝喅瀹氳鑹插彲鑳借亰璧风殑璇濋锛?
  VRWorld = 'vrworld', // 椤靛 鈥?瑙掕壊鑷富鐧诲叆鐨勮櫄鎷熶笘鐣岋紙瀹氭椂椹卞姩锛屾埧闂撮噷鐪嬪皬璇?鍚瓕/鐣欒█锛屼骇鍑烘椿鍔ㄥ崱娉ㄥ叆鑱婂ぉ+璁板繂锛?
  CharCreatorDev = 'char_creator_dev', // 鎹忚劯绯荤粺寮€鍙戞ā寮?鈥?浠呭紑鍙戞ā寮忓彲瑙侊紝鍚戞崗浜哄櫒鎸囧畾绫荤洰杩藉姞鑷畾涔夐儴浠?
  Phone = 'phone', // 鐢佃瘽 鈥?鎷ㄥ彿閿洏 / 閫氳瘽璁板綍锛堟嫧鍑郝锋帴鍚锋湭鎺ワ級/ 閫氳瘽褰曢煶鍥炴斁涓庨€愬瓧绋?
  ExchangeDiary = 'exchange_diary', // 鏃ヨ绀?鈥?澶氳鑹蹭氦鎹㈡棩璁版湰锛堣鑹茶瑙掓棩璁?+ 姣忔棩瀵硅瘽鎬荤粨锛?
  Presets = 'presets', // 棰勮 鈥?SillyTavern 寮?Chat Completion 棰勮锛堟彁绀鸿瘝绠＄悊鍣?+ 閲囨牱鍙傛暟锛屽彲瀵煎叆閰掗棰勮 JSON锛?
  Personas = 'personas', // 浜鸿 鈥?SillyTavern 寮忕敤鎴蜂汉璁剧鐞嗭紙澶氬鐢ㄦ埛韬唤锛屽彲缁戝畾瑙掕壊 / 榛樿 / 涓栫晫涔︼紝鎻忚堪鎸変綅缃敞鍏?prompt锛?
  Regex = 'regex', // 姝ｅ垯 鈥?SillyTavern 寮忔鍒欒剼鏈紙鍏ㄥ眬/瑙掕壊灞€閮紝浣滅敤浜庣敤鎴疯緭鍏?AI 杈撳嚭/鎻愮ず璇?鏄剧ず锛屽彲瀵煎叆閰掗姝ｅ垯 JSON锛?
  Creative = 'creative', // 鍒涗綔绀?鈥?銆岀瑪鍙嬩細銆嶏紙鍏卞垱灏忚锛変笌銆屽啓姝屻€嶏紙鍏卞垱姝屾洸锛夊悎骞跺叆鍙ｏ紝棣栭〉閫夋ā寮忓悗杩涘叆瀵瑰簲鍒涗綔鍙?
  Theater = 'theater', // 鎶樺瓙鎴?鈥?銆屾敾鐣ユ湰銆?galgame 鎭嬬埍鏀荤暐) 涓庛€孴RPG銆?璺戝洟鍐掗櫓) 鍚堝苟鍏ュ彛锛屽皝闈㈤〉閫夋ā寮忓悗杩涘叆瀵瑰簲鍓х洰锛圙uidebook/Game 瀛?App 淇濈暀璺敱鍏煎锛?
  Almanac = 'almanac', // 宀佹椂璁?鈥?銆屾椂鍏夊绾︺€?鏃ョ▼/蹇冩効鍗?绾康鏃ュ€掓暟) 涓庛€岀壒鍒椂鍏夈€?鑺傛棩璁板繂娲诲姩) 鍚堝苟鍏ュ彛锛屽皝闈㈤〉閫夋ā寮忓悗杩涘叆瀵瑰簲椤碉紙Schedule/SpecialMoments 瀛?App 淇濈暀璺敱鍏煎锛?
  Takeout = 'takeout', // 澶栧崠 鈥?鍙傝€冪編鍥細鏈湴鐢熸垚搴楅摵鐐硅彍涓嬪崟銆侀厤閫佽繘搴︺€佸拰楠戞墜/鍟嗗鑱婂ぉ銆佽嚜浠?浠ｄ粯锛屽苟涓庢潵寰€鑱斿姩锛堢粰瑙掕壊鐐瑰崟/浠ｄ粯锛?
  Shop = 'shop', // 璐墿鍟嗗煄 鈥?铏氭嫙绀肩墿鍟嗗煄锛氫拱绀肩墿閫佽鑹诧紙鑱婂ぉ閲岃惤绀肩墿鍗?+ 瑙掕壊鍥炲簲/鎰熻阿淇★級锛岃鑹蹭篃浼氳嚜宸遍€涳紙鑷喘/鍥炶禒锛夛紝鏌ヨ鑹茶喘鐗╁皬绁?
  Harem = 'harem', // 妞掓埧璁?鈥?AI 鍚庡鏂囨父锛欰I 瀹炴椂鐢熸垚鍚庡鎭嬬埍鍓ф儏鐨勪簰鍔ㄥ皬璇达紝鐜╁鐢ㄩ€夋嫨褰卞搷濂芥劅/淇′换/瀚夊/璁板繂/浜嬩欢flag/缁撳眬锛屽惈闀挎湡璁板繂路瑙掕壊鐙珛璁板繂路澶氬懆鐩?
  Forum = 'forum', // 鑼惰瘽浜?鈥?鍙祻瑙堢殑璁哄潧锛氭澘鍧?甯栧瓙/璺熷笘锛岀敤鎴峰彂甯栧洖甯栵紝瑙掕壊涓庡尶鍚嶇綉鍙嬶紙鍓?API锛夋潵鐩栨ゼ/寮€甯?
  Twitter = 'twitter', // 鎺ㄧ壒 鈥?鏈湴 AI 鐢熸垚鐨?X/Twitter 寮忔椂闂寸嚎锛岃鑹?NPC 鑷敱鍙戞帹浜掑姩
  VideoCall = 'video_call', // 瑙嗛閫氳瘽 鈥?鑱婂ぉ閲屽彂璧风殑瑙嗛閫氳瘽锛氳鑹蹭晶鐢ㄩ€氳瘽绔嬬粯锛岀敤鎴蜂晶鍙嚜閫夊紑/鍏虫憚鍍忓ご锛堝彧寮€涓€涓嬪氨鍏筹級锛岀炕杞暅澶?
  Xunji = 'xunji', // 寰抗 鈥?瑙掕壊 Screenlife 婕斿嚭 + 寮傚湴鎭嬪紡鐩戣/鎶ュ妯℃嫙锛宭ocal-first 钀藉簱
  DesktopPet = 'desktop_pet', // 妗屽疇 鈥?DyberPet 妗岄潰瀹犵墿锛氬杺椋熴€佹懜鎽搞€佹彁閱掑拰璺?App 鎮诞
  Health = 'health', // 鍋ュ悍 鈥?缁忔湡璁板綍銆侀娴嬩笌鎻愰啋
  Manual = 'manual', // 璇存槑涔?鈥?鎸?App 鍒嗙被鏀剁撼鐢ㄦ埛鍙搷浣滃姛鑳借鏄?
}

// =====================================================================
// 姝ｅ垯鑴氭湰锛圫illyTavern Regex Script 瀹屾暣绉绘锛?
// =====================================================================

/**
 * 鍗曟潯姝ｅ垯鑴氭湰銆傚瓧娈典笌 SillyTavern 鐨?RegexScriptData 涓€涓€瀵瑰簲锛?
 * 瀵煎叆閰掗姝ｅ垯 JSON锛堝崟鏉″璞℃垨鏁扮粍锛夊彲鏃犳崯钀藉簱銆?
 * - findRegex 鏀寔 "/pattern/flags" 涓庤８ pattern 涓ょ鍐欐硶
 * - placement 鍙栧€艰 utils/regex/engine.ts 鐨?regex_placement
 * - markdownOnly = 浠呮敼鑱婂ぉ鏄剧ず锛堜笉鍔ㄦ秷鎭師鏂囷級锛沺romptOnly = 浠呮敼鍙戠粰 LLM 鐨勬彁绀鸿瘝
 * - 涓よ€呴兘涓嶅嬀 = 鐩存帴鏀瑰啓娑堟伅鍘熸枃锛堣惤搴撳墠鐢熸晥锛?
 */
export interface RegexScriptData {
  id: string;
  scriptName: string;
  findRegex: string;
  replaceString: string;
  trimStrings: string[];
  placement: number[];
  disabled: boolean;
  markdownOnly: boolean;
  promptOnly: boolean;
  runOnEdit: boolean;
  /** 0=涓嶆浛鎹㈠畯 1=鍘熸牱鏇挎崲 {{user}}/{{char}} 2=鏇挎崲鍚庡仛姝ｅ垯杞箟 */
  substituteRegex: number;
  /** 鏈€灏忔繁搴︼紙-1/null = 涓嶉檺锛夛紝depth 0 = 鏈€鍚庝竴鏉℃秷鎭?*/
  minDepth?: number | null;
  maxDepth?: number | null;
}

// =====================================================================
// --- 浜鸿锛圫illyTavern Persona Management 绉绘锛?---
// 涓?ST 鐨?power_user.personas / persona_descriptions 瀵归綈锛?
// 涓€濂椾汉璁?= 鍚嶅瓧 + 澶村儚 + 鎻忚堪 + 娉ㄥ叆浣嶇疆 (+ 涓栫晫涔︾粦瀹?+ 瑙掕壊缁戝畾)銆?
// 婵€娲讳汉璁炬椂鎶?name/avatar/description 鍐欏叆 UserProfile锛堝叏閾捐矾绔嬪嵆鐢熸晥锛夛紝
// 浣嶇疆 / 娣卞害 / 涓栫晫涔︾瓑楂樼骇璇箟鐢?utils/personas.ts 鐨?PersonaRuntime 鍦?
// 涓昏亰澶╅摼璺紙buildChatRequestPayload锛夐噷瑙ｆ瀽銆?
// =====================================================================

/**
 * 浜鸿鎻忚堪娉ㄥ叆浣嶇疆锛堜繚鐣?ST persona_description_positions 鐨勫師濮嬫暟鍊硷級銆?
 * Moro 娌℃湁浣滆€呮敞閲婏紙Author's Note锛夛紝ST 鐨?2锛堥《閮級/ 3锛堝簳閮級瀵煎叆鏃堕檷绾т负 0銆?
 */
export const PERSONA_POSITION = {
    /** 宓屽叆鎻愮ず璇嶏紙榛樿锛夛細杩涙牳蹇冧笂涓嬫枃鐨勩€屼簰鍔ㄥ璞°€嶅潡 / 棰勮鐨?personaDescription marker */
    IN_PROMPT: 0,
    /** @Depth 娉ㄥ叆锛氫互鎸囧畾 role 鎻掑埌鑱婂ぉ鍘嗗彶鐨勫搴旀繁搴︼紙鍚屼笘鐣屼功 @D 璇箟锛?*/
    AT_DEPTH: 4,
    /** 涓嶆敞鍏ワ細鎻忚堪涓嶈繘 prompt锛堝悕瀛椾粛閫氳繃 {{user}} 涓庛€屼簰鍔ㄥ璞°€嶅潡鐢熸晥锛?*/
    NONE: 9,
} as const;

/** @Depth 娉ㄥ叆鏃剁殑娑堟伅 role锛堝悓 ST persona_description_role锛夛細0=system 1=user 2=assistant */
export type PersonaDepthRole = 0 | 1 | 2;

export interface PersonaConnection {
    type: 'character' | 'group';
    id: string;
}

export interface Persona {
    id: string;
    /** 浜鸿鍚嶏紙鑱婂ぉ閲屼綔涓虹敤鎴峰悕锛寋{user}} 瀹忕殑瑙ｆ瀽鍊硷級 */
    name: string;
    /** 浠呭睍绀虹敤灏忔爣棰橈紙ST 鐨?title锛夛紝涓嶈繘 prompt */
    title?: string;
    avatar: string;
    /** 浜鸿鎻忚堪锛堣繘 prompt锛涙敮鎸?{{char}} / {{user}} 瀹忥級 */
    description: string;
    /** 娉ㄥ叆浣嶇疆锛圥ERSONA_POSITION 鏁板€硷紱鍏煎瀵煎叆鐨?ST 澶囦唤閲屽嚭鐜扮殑 1/2/3 鈫?瑙嗕负 0锛?*/
    position: number;
    /** @Depth 娉ㄥ叆娣卞害锛堜粎 position=4 鐢熸晥锛夛紝榛樿 2锛堝悓 ST锛?*/
    depth?: number;
    /** @Depth 娉ㄥ叆 role锛堜粎 position=4 鐢熸晥锛夛紝榛樿 0=system */
    role?: PersonaDepthRole;
    /** 缁戝畾鐨勪笘鐣屼功鍒嗙粍鍚嶏紙=ST 浜鸿涓栫晫涔︼級锛氭縺娲绘椂璇ョ粍鏉＄洰鎸夊悇鑷綅缃?寮€鍏虫敞鍏ヤ富鑱婂ぉ */
    lorebookCategory?: string;
    /** 缁戝畾鐨勮鑹?缇わ紙=ST connections锛夛細杩涘叆瀵瑰簲鑱婂ぉ鏃惰嚜鍔ㄥ垏鎹㈠埌鏈汉璁?*/
    connections?: PersonaConnection[];
    createdAt: number;
    updatedAt: number;
}

// =====================================================================
// --- LLM 棰勮锛圫illyTavern Chat Completion 棰勮绉绘锛?---
// 瀛楁鍚嶄笌 SillyTavern 棰勮 JSON 瀹屽叏瀵归綈锛坰nake_case锛夛紝瀵煎叆瀵煎嚭闆惰浆鎹€?
// 璇﹁ utils/presets.ts 鐨勫鍏?/ 缁勮閫昏緫銆?
// =====================================================================

export type PresetPromptRole = 'system' | 'user' | 'assistant';
export type PresetScopeKey =
    | 'chat.private'
    | 'chat.proactive'
    | 'chat.groupText'
    | 'chat.groupVoice'
    | 'chat.phoneText'
    | 'role.scene'
    | 'creative.text'
    | 'structured.tool';

/** 棰勮閲岀殑涓€鏉℃彁绀鸿瘝锛堜笌 ST PromptManager 鐨?Prompt 瀵归綈锛夈€?*/
export interface PresetPrompt {
    /** 鍞竴鏍囪瘑銆傚唴缃」鏄浐瀹氬悕锛坢ain / jailbreak / chatHistory鈥︼級锛岀敤鎴疯嚜寤洪」鏄?UUID */
    identifier: string;
    name: string;
    /** ST 璇箟锛歵rue = 绯荤粺鍐呯疆鎻愮ず璇嶏紱false/缂虹渷 = 鐢ㄦ埛鑷缓 */
    system_prompt?: boolean;
    role?: PresetPromptRole;
    content?: string;
    /** marker = 鐢辩郴缁熷～鍏呯殑鍗犱綅绗︼紙chatHistory / charDescription 绛夛級锛宑ontent 涓嶅彲缂栬緫 */
    marker?: boolean;
    /** 娉ㄥ叆浣嶇疆锛? = 鐩稿锛堟寜鍒楄〃椤哄簭鎺掕繘娑堟伅娴侊級锛? = 缁濆锛園Depth 娉ㄥ叆鑱婂ぉ鍘嗗彶锛?*/
    injection_position?: number;
    /** 缁濆娉ㄥ叆鏃惰窛鑱婂ぉ鍘嗗彶鏈熬鐨勬繁搴︼紙0 = 绱ц窡鏈€鍚庝竴鏉℃秷鎭箣鍓嶏級锛岄粯璁?4 */
    injection_depth?: number;
    /** 鍚屾繁搴﹀唴鐨勪紭鍏堢骇锛屽ぇ鐨勬洿闈犺繎鏈熬锛岄粯璁?100 */
    injection_order?: number;
    /** ST锛氱姝㈣鑹插崱瑕嗙洊锛坢ain / jailbreak 鐢級銆侻oro 鏃犺鑹插崱瑕嗙洊鏈哄埗锛屼粎淇濈暀瀛楁 */
    forbid_overrides?: boolean;
    /** ST锛氶檺瀹氳繖鏉℃彁绀鸿瘝鍦ㄥ摢绫?generation 瑙﹀彂锛涚┖ / 缂虹渷 = 鍏ㄩ儴瑙﹀彂銆?*/
    injection_trigger?: string[];
    /** 涓埆 ST 瀵煎嚭浼氭妸寮€鍏崇洿鎺ュ啓鍦?prompt 涓婏紱姝ｅ紡寮€鍏冲湪 prompt_order 閲?*/
    enabled?: boolean;
}

export interface PresetPromptOrderEntry {
    identifier: string;
    enabled: boolean;
}

/** ST 绾﹀畾锛歝haracter_id 100000 = 鍗曡亰榛樿锛?00001 = 缇よ亰榛樿銆?*/
export interface PresetPromptOrderCharacter {
    character_id: number;
    order: PresetPromptOrderEntry[];
}

/** 涓€浠藉畬鏁撮璁俱€傞噰鏍峰瓧娈靛悕涓?ST 涓€鑷达紱鍏朵綑 ST 瀛楁杩?raw 鍏滃簳锛屽鍑烘椂鍚堝苟鍥炲幓銆?*/
export interface TavernPreset {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    // 鈥斺€?閲囨牱鍙傛暟锛堜笌 ST 瀛楁鍚屽悕锛?鈥斺€?
    temperature?: number;
    frequency_penalty?: number;
    presence_penalty?: number;
    top_p?: number;
    top_k?: number;
    top_a?: number;
    min_p?: number;
    repetition_penalty?: number;
    /** 涓婁笅鏂囩獥鍙?token 鏁帮紙ST openai_max_context锛夈€侻oro 鎸夋潯鏁版埅鍘嗗彶锛屾鍊间粎瀛樻。灞曠ず */
    openai_max_context?: number;
    /** 鍥炲 max_tokens锛圫T openai_max_tokens锛?*/
    openai_max_tokens?: number;
    /**
     * 缁戝畾鐨?Moro API 棰勮 id锛堣缃?App 閲屼繚瀛樼殑 os_api_presets 鏉＄洰锛夈€?
     * 婵€娲绘湰棰勮鏃惰嚜鍔ㄥ鐢ㄥ搴?API 閰嶇疆锛坆aseUrl/key/model锛夛紝绫讳技 ST 鐨?
     * 杩炴帴閰嶇疆鍒囨崲銆侻oro 鏈湴瀛楁锛屼笉闅忛厭棣?JSON 瀵煎嚭銆?
     */
    moroApiPresetId?: string;
    /**
     * Moro 鏈湴浣滅敤鑼冨洿寮€鍏炽€傛渶缁堟槸鍚︾敓鏁?= 鍏ㄥ眬鍏佽鑼冨洿 AND 褰撳墠棰勮鑼冨洿銆?
     * 涓嶉殢 SillyTavern JSON 瀵煎嚭銆?
     */
    moroScopes?: Partial<Record<PresetScopeKey, boolean>>;
    // 鈥斺€?鎻愮ず璇嶇鐞嗗櫒 鈥斺€?
    prompts: PresetPrompt[];
    prompt_order: PresetPromptOrderCharacter[];
    /**
     * 棰勮鑷甫鐨勬鍒欒剼鏈紙SillyTavern PRESET 浣滅敤鍩燂紝瀛樺湪棰勮 JSON 鐨?
     * extensions.regex_scripts 閲岋級銆傚鍏ユ椂瑙ｆ瀽濉厖锛屼粎褰撴湰棰勮琚縺娲讳笖鍗板潑寮€鍗版椂
     * 鐢熸晥锛堟墽琛岄『搴忥細鍏ㄥ眬 鈫?棰勮 鈫?瑙掕壊灞€閮級锛屽鍑烘椂鍐欏洖 extensions.regex_scripts銆?
     */
    regexScripts?: RegexScriptData[];
    /** 瀵煎叆鏃剁殑鍘熷 JSON 鍏ㄩ噺鍏滃簳锛坲tility prompts / 妯″瀷閫夋嫨绛夋湭鏄犲皠瀛楁锛夛紝瀵煎嚭鏃跺師鏍峰悎骞?*/
    raw?: Record<string, any>;
}

export interface SystemLog {
    id: string;
    timestamp: number;
    type: 'error' | 'network' | 'system';
    source: string;
    message: string;
    detail?: string;
}

export interface AppConfig {
  id: AppID;
  name: string;
  icon: string;
  color: string;
}

export interface DesktopDecoration {
  id: string;
  type: 'image' | 'preset';
  content: string; // data URI for image, SVG data URI or emoji for preset
  x: number;       // percentage 0-100
  y: number;       // percentage 0-100
  scale: number;   // multiplier (0.2 - 3)
  rotation: number; // degrees (-180 to 180)
  opacity: number;  // 0-1
  zIndex: number;
  flip?: boolean;
}

export interface OSTheme {
  hue: number;
  saturation: number;
  lightness: number;
  wallpaper: string;
  darkMode: boolean;
  contentColor?: string;
  /** 妗岄潰鏁翠綋鐨偆銆傚姩妫毊鑲ゅ凡涓嬬嚎锛屼粎淇濈暀 'default'锛堟棫瀛樻。涓殑 'animalcrossing' 浼氬湪鍔犺浇鏃惰縼绉伙級銆?*/
  skin?: 'default';
  launcherWidgetImage?: string; // DEPRECATED: always stripped on load 鈥?never renders.
  launcherWidgets?: Record<string, string>; // slots: 'tl' | 'tr' | 'wide' | 'dsq' (legacy 'bl' / 'br' are banned)
  desktopDecorations?: DesktopDecoration[];
  customFont?: string;
  hideStatusBar?: boolean;
  desktopIconShape?: 'rounded' | 'squircle' | 'circle' | 'stamp';
  desktopIconSurface?: 'paper' | 'glass' | 'solid' | 'minimal';
  desktopIconScale?: 'sm' | 'md' | 'lg';
  desktopIconLabelMode?: 'show' | 'fade' | 'hide';
  desktopDockStyle?: 'glass' | 'paper' | 'solid' | 'minimal';
  desktopDragMode?: 'gentle' | 'balanced' | 'snappy';
  desktopEditEffect?: 'wiggle' | 'breathe' | 'none';
  /** 鎮诞绐楀揩鎹疯彍鍗曪細鍏ㄥ眬鍙嫋鍔ㄧ殑鎮诞鐞冿紝鐐瑰紑鏄父鐢?App 蹇嵎鍏ュ彛銆倁ndefined 瑙嗕负寮€鍚紱鏄惧紡 false 鍏抽棴銆?*/
  floatingQuickMenu?: boolean;
  floatingQuickMenuStyle?: FloatingQuickMenuStyle;
  // Chat UI customization (global)
  chatAvatarShape?: 'circle' | 'rounded' | 'square';
  chatAvatarSize?: 'small' | 'medium' | 'large';
  chatAvatarMode?: 'grouped' | 'every_message';
  chatBubbleStyle?: 'modern' | 'flat' | 'outline' | 'shadow' | 'wechat' | 'ios' | 'plain';
  chatMessageSpacing?: 'compact' | 'default' | 'spacious';
  chatShowTimestamp?: 'always' | 'hover' | 'never';
  chatHeaderStyle?: 'default' | 'minimal' | 'gradient' | 'wechat' | 'telegram' | 'discord' | 'pixel';
  chatInputStyle?: 'default' | 'rounded' | 'flat' | 'wechat' | 'ios' | 'telegram' | 'discord' | 'pixel';
  chatChromeStyle?: 'soft' | 'flat' | 'floating' | 'pixel';
  chatBackgroundStyle?: 'plain' | 'grid' | 'paper' | 'mesh';
  /** 缇よ亰閫氱敤鑳屾櫙銆傚崟涓兢鑻ヨ缃簡 chatBackgroundImage锛屽垯浼樺厛浣跨敤鍗曠兢鑳屾櫙銆?*/
  groupChatBackgroundStyle?: 'plain' | 'grid' | 'paper' | 'mesh';
  chatHeaderAlign?: 'left' | 'center';
  chatHeaderDensity?: 'compact' | 'default' | 'airy';
  chatStatusStyle?: 'subtle' | 'pill' | 'dot';
  chatSendButtonStyle?: 'circle' | 'pill' | 'minimal';
  /** 鑱婂ぉ銆岃緭鍏ュ姩鏁堛€嶏細鍦ㄨ緭鍏ユ爮涓婂彔涓€灞傝楗板姩鐢?鈥斺€?涓婁紶鍥剧墖锛堝惈鍔ㄥ浘锛夋垨璁?AI 鍐欎竴娈?SVG銆?*/
  chatInputAnimation?: {
    kind: 'image' | 'svg';
    data: string;             // 鍥剧墖 data URL锛屾垨 SVG 婧愮爜瀛楃涓?
    position?: 'corner' | 'top' | 'background';
    opacity?: number;         // 0..1锛岄粯璁?0.9
  };
  /** Instant Push 鐢ㄦ埛姘旀场宸︿晶鐨?鍑嗗涓?鍦嗙偣鍔ㄧ敾銆傞粯璁ゅ紑鍚€?*/
  chatPendingIndicator?: boolean;
  /** 鑱婂ぉ銆岀櫧妗嗐€嶈嚜瀹氫箟 CSS锛氫綔鐢ㄤ簬 .moro-chat-header / .moro-chat-inputbar / .moro-chat-root锛?
   *  浠ュ強椤舵爮鍚勯浂浠?.moro-chat-back / .moro-chat-avatar / .moro-chat-name / .moro-chat-status /
   *  .moro-chat-buffs / .moro-chat-token / .moro-chat-trigger銆傚彲鎹㈣壊 / 璐村浘 / 鏀瑰褰?/ 鎸綅銆?*/
  chatChromeCustomCss?: string;
  /** 闅愯棌椤舵爮鐨勬儏缁?buff 鏍忋€?*/
  chatHideHeaderBuffs?: boolean;
  /** 鍏ㄥ眬鑷畾涔?CSS锛氭敞鍏ユ暣鏈猴紙妗岄潰 / 閿佸睆 / 鎵€鏈?App锛夛紝閰嶅悎 .moro-* 閽╁瓙绫伙紙moro-clock-card /
   *  moro-character-card / moro-app-tile / moro-dock / moro-status-bar / moro-lock-screen 绛夛級鍋氬叏灞€缇庡寲銆?
   *  鍦ㄣ€屼富棰?鈫?鑷畾涔?CSS銆嶇紪杈戯紝瀹炴椂鐢熸晥銆?*/
  globalCustomCss?: string;
  /** 鍗?App 鑷畾涔?CSS锛歬ey = AppID銆傛瘡涓?App 澶栧３閮芥湁 .moro-app-shell / .moro-app-shell-<id> /
   *  [data-moro-app="<id>"] 閽╁瓙锛岄€傚悎鎶婃煇涓?App 鍗曠嫭鏀规垚鍙︿竴濂楃毊鑲ゃ€?*/
  appCustomCss?: Partial<Record<AppID, string>>;
  /** 妗岄潰灏忕粍浠惰嚜瀹氫箟锛坘ey = widget id锛歝lock / weather / character / schedule / music / image / imgtl / imgtr / imgwide / text锛夈€?
   *  鍦ㄣ€屼富棰?鈫?妗岄潰灏忕粍浠躲€嶇紪杈戯細闅愯棌锛堝垹闄わ級銆佹敼缃戞牸灏哄锛堟í鐗?绔栫増/鏂瑰舰锛夈€佹敞鍏ュ皬缁勪欢鑷畾涔?CSS銆?*/
  desktopWidgetPrefs?: Record<string, DesktopWidgetPref>;
  /** 鏂囧瓧灏忕粍浠跺唴瀹癸紙妗岄潰渚跨锛夛細鏍囬 + 姝ｆ枃锛岀偣灏忕粍浠跺嵆鍙紪杈戙€?*/
  textWidget?: { title?: string; body?: string };
  /** 鐏靛姩宀涙牱寮忚嚜瀹氫箟锛堣儗鏅?/ 鏂囧瓧鑹?/ 鍦嗚 / 鑷畾涔?CSS锛夛紝鍦ㄣ€屼富棰?鈫?鐏靛姩宀涖€嶇紪杈戙€?*/
  dynamicIslandStyle?: DynamicIslandStyle;
  /** 閿佸睆鏍峰紡鑷畾涔夛紙涓撳睘澹佺焊 / 鏃堕挓瀛椾綋 / 閫氱煡鍗￠鏍?/ 瑙ｉ攣鍔ㄧ敾 / 鑷畾涔?CSS锛夛紝鍦ㄣ€屼富棰?鈫?閿佸睆銆嶇紪杈戙€?*/
  lockScreenStyle?: LockScreenStyle;
  offlineModeStyle?: OfflineModeStyle;
  /** 鍗犲崪鐗岄潰缇庡寲锛堟姌瀛愭垙路鍗犲崪璇昏繖閲屾覆鏌撶墝闈級锛氱墝鑳屽浘 / 杈规椋庢牸 / 娓叉煋椋庢牸銆?*/
  tarotSkin?: {
    cardBack?: string;                                  // 鐗岃儗鍥?dataURL锛堢墝闈㈡湭缈诲紑 / 鍗犱綅鏃舵樉绀猴級
    frame?: 'none' | 'gold' | 'ink' | 'film';           // 杈规锛氭棤 / 鎻忛噾 / 姘村ⅷ / 鑳剁墖
    renderStyle?: 'classic' | 'minimal' | 'mystic';     // 娓叉煋椋庢牸锛氬彜鍏?/ 鏋佺畝 / 绁炵
  };
}

/** 鍗曚釜妗岄潰灏忕粍浠剁殑鑷畾涔夐」 */
export interface DesktopWidgetPref {
  /** 浠庢闈㈢Щ闄わ紙涓嶆覆鏌撱€佷笉鍗犳牸锛?*/
  hidden?: boolean;
  /** 缃戞牸瀹藉害瑕嗙洊锛?-4 鍒楋級銆備笌 h 鎼厤瀹炵幇妯増 / 绔栫増 / 鏂瑰舰 */
  w?: number;
  /** 缃戞牸楂樺害瑕嗙洊锛?-12 琛岋級 */
  h?: number;
  /** 娉ㄥ叆妗岄潰鐨勫師鐢?CSS锛岄厤鍚?.moro-widget-<id> 閽╁瓙绫伙紙濡?.moro-widget-clock锛夎嚜瀹氫箟鏍峰紡 */
  customCss?: string;
}

/** 鐏靛姩宀涙牱寮忚嚜瀹氫箟 */
export interface DynamicIslandStyle {
  /** 鑳跺泭鑳屾櫙锛圕SS color / gradient锛夛紝榛樿 #0b0b12 */
  background?: string;
  /** 鏂囧瓧棰滆壊锛岄粯璁ょ櫧 */
  textColor?: string;
  /** 鍦嗚 px銆傜己鐪佷负鍏ㄥ渾鑳跺泭 */
  radius?: number;
  /** 娉ㄥ叆鐨勫師鐢?CSS锛堥厤鍚?.moro-dynamic-island 閽╁瓙绫伙級 */
  customCss?: string;
}

/** 閿佸睆鏍峰紡鑷畾涔?*/
export interface FloatingQuickMenuStyle {
  bubbleBackground?: string;
  menuBackground?: string;
  pawColor?: string;
  textColor?: string;
  borderColor?: string;
  radius?: number;
  customCss?: string;
}

export interface LockScreenStyle {
  /** 閿佸睆涓撳睘澹佺焊锛堢己鐪佹部鐢ㄦ闈㈠绾革級 */
  wallpaper?: string;
  /** 鏃堕挓瀛椾綋椋庢牸 */
  clockFont?: 'serif' | 'sans' | 'mono' | 'hand';
  clockTop?: number;
  clockScale?: number;
  dateText?: string;
  greetingText?: string;
  unlockHintText?: string;
  /** 娑堟伅閫氱煡鍗￠鏍硷細鐜荤拑鎷熸€?/ 绾搁潰鎵嬪笎 / 澧ㄨ壊 */
  notifCardStyle?: 'glass' | 'paper' | 'ink';
  showNotifications?: boolean;
  /** 瑙ｉ攣杩涘叆妗岄潰鐨勮繃娓″姩鐢?*/
  unlockAnimation?: 'slide' | 'fade' | 'zoom' | 'none';
  passcodeStyle?: 'glass' | 'paper' | 'ink';
  passcodeTitleText?: string;
  passcodeErrorText?: string;
  passcodeCancelText?: string;
  /** 娉ㄥ叆鐨勫師鐢?CSS锛堥厤鍚?.moro-lock-screen / .moro-lock-clock / .moro-lock-notif 閽╁瓙绫伙級 */
  customCss?: string;
}

export interface OfflineModeStyle {
  background?: string;
  textColor?: string;
  accentColor?: string;
  radius?: number;
  customCss?: string;
}

export interface AppearancePreset {
  id: string;
  name: string;
  createdAt: number;
  theme: OSTheme;
  customIcons?: Record<string, string>;
  chatThemes?: ChatTheme[];
  chatLayout?: ChatLayoutPreset;
}

export interface ChatLayoutPreset {
  id: string;
  name: string;
  createdAt: number;
  chatBg?: string;
  chatBgOpacity?: number;
  headerStyle?: 'default' | 'minimal' | 'immersive';
  inputStyle?: 'default' | 'rounded' | 'flat';
  avatarShape?: 'circle' | 'rounded' | 'square';
  avatarSize?: 'small' | 'medium' | 'large';
  messageLayout?: 'default' | 'compact' | 'spacious';
  showTimestamp?: 'always' | 'hover' | 'never';
  bubbleThemeId?: string;
}

export interface TranslationConfig {
  enabled: boolean;
  sourceLang: string; // e.g. '鏃ユ湰瑾? - the language messages are displayed in (閫?
  targetLang: string; // e.g. '涓枃' - the language to translate into (璇?
}

export interface VirtualTime {
  hours: number;
  minutes: number;
  day: string;
}

export type MinimaxRegion = 'domestic' | 'overseas';

export interface APIConfig {
  baseUrl: string;
  apiKey: string;
  minimaxApiKey?: string;
  minimaxGroupId?: string;
  // 'domestic' 鈫?https://api.minimaxi.com (鍥藉唴绔?
  // 'overseas' 鈫?https://api.minimax.io  (娴峰绔?
  // Missing / unknown falls back to domestic.
  minimaxRegion?: MinimaxRegion;
  // Replicate token (r8_xxx) for ACE-Step song generation in 鍐欐瓕 App.
  aceStepApiKey?: string;
  model: string;
  // Per-API streaming toggle. Some endpoints only support stream:true.
  // Missing 鈫?false (榛樿闈炴祦寮?.
  stream?: boolean;
  // Per-API temperature for chat / 绾︿細 main calls. Missing 鈫?0.85.
  temperature?: number;
}

/**
 * 鍓?API锛堝叏灞€锛夛細璐熻矗澶勭悊銆屼富 API 鑱婂ぉ浠ュ銆嶇殑鍔熻兘鈥斺€旀棩绋嬬敓鎴?鍗忚皟銆佽鑹茬敓娲讳晶鍐欍€?
 * 锛堝悗缁級绾︿細涓栫晫寮曟搸绛夊悗鍙?杈呭姪 LLM 浠诲姟銆傚湪銆屾枃鍏风洅銆嶉噷閰嶇疆锛屾墍鏈夎鑹插叡鐢ㄣ€?
 * 鍏抽棴鎴栨湭濉椂锛岀浉鍏冲姛鑳藉洖閫€鍒颁富 apiConfig锛堣 utils/auxApi.ts resolveAuxApi锛夈€?
 */
export interface AuxApiConfig {
  enabled: boolean;
  baseUrl: string;
  apiKey: string;
  model: string;
}

export interface InstantPushConfig {
  enabled: boolean;
  workerUrl: string;        // https://your-instant.workers.dev
  // VAPID 鍏閽ュ凡杩佺Щ鍒?utils/pushVapid.ts (push_vapid_v1)锛屼笌 Proactive Push
  // 鍏变韩鍚屼竴浠斤紝閬垮厤涓よ竟浜掔浉 unsubscribe 鎶㈠悓涓€涓?pushManager 璁㈤槄銆?
  clientToken?: string;     // 瀵瑰簲 Worker 鐨?AMSG_CLIENT_TOKEN
  // 鍙戦€佹枃鏈悗鏄惁鑷姩瑙﹀彂 AI 鍥炲 (worker 绔窇 + push 鍥炲啓). 浠呮帶鍒?鑷姩瑙﹀彂"杩欎欢浜?
  // 涓嶆敼鍙?instant push 鏈韩鐨勫紑鍏冲惈涔? 鍏抽棴鏃?instant 妯″紡涔熶繚鐣欐墜鍔?鈿? 璺熸湰鍦版ā寮忎竴鑷?
  // 缂虹渷 (undefined) 瑙嗕负鍏抽棴 鈥?閬垮厤"鍚敤 instant = 鑷姩鍥炲"鐨勫弽鐩磋寮虹粦瀹?
  autoTriggerOnSend?: boolean;
  // 澶?payload 鐨勪紶杈撴柟寮忛粯璁よ蛋 multipart銆傚彧鏈夎繛鎺ユ祴璇曠‘璁?Worker 缁戝畾浜嗗彲鐢?D1 鍚?
  // 鍓嶅彴鎵嶅厑璁哥敤鎴锋墦寮€ D1 envelope銆?
  useD1BlobStore?: boolean;
  d1Available?: boolean;
  d1CheckedAt?: number;
  d1CheckedWorkerUrl?: string;
  updatedAt?: number;
}

export type InstantOversizeTransport = 'multipart' | 'd1';

export type ActiveMsg2DbDriver = 'pg' | 'neon';
export type ActiveMsg2Mode = 'fixed' | 'auto' | 'prompted';
export type ActiveMsg2Recurrence = 'none' | 'daily' | 'weekly';

export interface ActiveMsg2ApiConfig {
  baseUrl: string;
  apiKey: string;
  model: string;
}

export interface ActiveMsg2GlobalConfig {
  userId: string;
  driver: ActiveMsg2DbDriver;
  databaseUrl: string;
  initSecret?: string;
  tenantId?: string;
  tenantToken?: string;
  cronToken?: string;
  cronWebhookUrl?: string;
  masterKeyFingerprint?: string;
  initializedAt?: number;
  updatedAt?: number;
}

export interface ActiveMsg2CharacterConfig {
  enabled: boolean;
  mode: ActiveMsg2Mode;
  firstSendTime: string;
  recurrenceType: ActiveMsg2Recurrence;
  userMessage?: string;
  promptHint?: string;
  maxTokens?: number;
  taskUuid?: string;
  remoteStatus?: 'idle' | 'scheduled' | 'sent' | 'error';
  useSecondaryApi?: boolean;
  secondaryApi?: ActiveMsg2ApiConfig;
  lastSyncedAt?: number;
  lastError?: string;
}

export interface ActiveMsg2InboxMessage {
  messageId: string;
  charId: string;
  charName: string;
  body: string;
  previewBody?: string;
  avatarUrl?: string;
  source?: string;
  messageType?: string;
  messageSubtype?: string;
  taskId?: string | null;
  metadata?: Record<string, any>;
  sentAt?: number;
  receivedAt: number;
}

// Phase 2 Round 1 鈥?Instant Push agentic loop session state, written client-side
// before /instant and consumed by /continue. See plans/instant-push-agentic-loop-phase2.md
export interface InstantPushOutboundSession {
  sessionId: string;
  charId: string;
  /** Conversation messages snapshot at /instant call time 鈥?fed to /continue as agentic-loop history. */
  messages: any[];
  /** API credentials needed to resume via /continue when worker calls back. */
  apiCredentials: { baseUrl: string; apiKey: string; model: string };
  createdAt: number;
}

// Phase 2 Round 2 鈥?SW will populate these stores; Round 1 just defines schema (empty).
export interface InstantPushPendingToolCall {
  sessionId: string;
  charId: string;
  /** OpenAI-shape tool_calls from worker LLM emit, ready to dispatch via agenticTools. */
  toolCalls: Array<{ id: string; type: 'function'; function: { name: string; arguments: string } }>;
  /** Pre-tool-call LLM text output, used to prefix assistant-side content if needed. */
  llmOutputText: string;
  /**
   * Agentic-loop iteration that produced this tool_request (0-indexed at worker side, see
   * amsg-instant SessionContext.iteration). Client POST /continue must use iteration + 1,
   * worker rejects non-incrementing values with HTTP 400. Default 0 for safety when the
   * push didn't carry metadata.iteration (e.g. legacy worker).
   */
  iteration: number;
  createdAt: number;
}

/**
 * SW writes reasoning_buffer when amsg-instant emits ReasoningPush.
 * 0.8.0-next.2 璧? ReasoningPush 鑷甫 (messageIndex, totalMessages, chunkIndex,
 * totalChunks) 鍥涗釜瀛楁 鈥?long reasoning_content 浼氳 amsg-instant 鎸?UTF-8
 * 瀛楄妭鑷姩鍒囧 push (榛樿 reasoningChunkBytes=2000), 澶?push 閫氳繃 chunks[]
 * 绱Н, claimReasoning 鎸?(messageIndex, chunkIndex) 鎺掑簭鍚庢嫾鎺ユ垚瀹屾暣 reasoning.
 *
 * `reasoningContent` 瀛楁鏄?claimReasoning 杈撳嚭 (鍚戝悗鍏煎鑰?Round 1 buffer 褰㈡€?.
 * `chunks` 瀛楁鏄?SW 绱Н褰㈡€?(鏂?push 杩涙潵 read-modify-write 杩藉姞涓€鏉?.
 */
export interface InstantPushReasoningBufferEntry {
  sessionId: string;
  charId: string;
  /** 鎷兼帴鍚庣殑瀹屾暣 reasoning. claimReasoning 杈撳嚭鏃跺～杩欎釜瀛楁; SW 鍐欏叆鏃跺彲鐪佺暐. */
  reasoningContent?: string;
  /** SW 绱Н寮?buffer 鈥?姣忔潯 ReasoningPush 杩涙潵杩藉姞涓€鏉? */
  chunks?: Array<{
    messageIndex: number;
    chunkIndex: number;
    reasoningContent: string;
  }>;
  receivedAt: number;
}

export interface ApiPreset {
  id: string;
  name: string;
  config: APIConfig;
}

export interface CharacterBuff {
  id: string;
  name: string;      // internal key, e.g. 'reconciliation_fragile'
  label: string;     // display text, e.g. '鑴嗗急鐨勫拰濂?
  intensity: 1 | 2 | 3;
  emoji?: string;
  color?: string;    // hex, e.g. '#f87171'
  description?: string;  // 鐢ㄦ埛鍙鐨勭畝鐭鏄庯紙缁欑敤鎴风湅鐨勶紝涓嶆槸缁橝I鐨勶級
}

// 瀹炴椂涓婁笅鏂囬厤缃?- 璁〢I瑙掕壊鎰熺煡鐪熷疄涓栫晫
export interface RealtimeConfig {
  // 澶╂皵閰嶇疆
  weatherEnabled: boolean;
  /** 鍙栨暟鏂瑰紡锛?geo'锛堥粯璁わ紝娴忚鍣ㄥ畾浣?+ Open-Meteo 鍏嶅瘑閽ワ級/ 'manual'锛堟棫鐗堟墜濉?OpenWeatherMap Key + 鍩庡競锛?*/
  weatherMode?: 'geo' | 'manual';
  weatherApiKey: string;  // OpenWeatherMap API Key锛堜粎 manual 妯″紡闇€瑕侊級
  weatherCity: string;    // 鍩庡競鍚嶏紙浠?manual 妯″紡鐢級

  // 鏂伴椈閰嶇疆
  newsEnabled: boolean;
  newsApiKey?: string;
  newsPlatforms?: string[];  // hot_news 鐑骞冲彴 key 鍒楄〃锛堥粯璁や富婧愶紝鍏嶉壌鏉冿級锛岀暀绌虹敤鍐呯疆榛樿

  // Notion 閰嶇疆
  notionEnabled: boolean;
  notionApiKey: string;   // Notion Integration Token
  notionDatabaseId: string; // 鏃ヨ鏁版嵁搴揑D
  notionNotesDatabaseId?: string; // 鐢ㄦ埛绗旇鏁版嵁搴揑D锛堝彲閫夛紝璁╄鑹茶鍙栫敤鎴风殑鏃ュ父绗旇锛?

  // 椋炰功閰嶇疆 (涓浗鍖?Notion 鏇夸唬)
  feishuEnabled: boolean;
  feishuAppId: string;      // 椋炰功搴旂敤 App ID
  feishuAppSecret: string;  // 椋炰功搴旂敤 App Secret
  feishuBaseId: string;     // 澶氱淮琛ㄦ牸 App Token
  feishuTableId: string;    // 鏁版嵁琛?Table ID

  // 灏忕孩涔﹂厤缃?(MCP / Skills 鍙屾ā寮忔祻瑙堝櫒鑷姩鍖?
  xhsEnabled: boolean;
  xhsMcpConfig?: XhsMcpConfig;

  // 缂撳瓨閰嶇疆
  cacheMinutes: number;
}

// 鐑偣鍗曟潯锛堜笌 realtimeContext 鐨?NewsItem 缁撴瀯涓€鑷达紝鍗曠嫭鏀惧湪 types 閲岄伩鍏嶅惊鐜緷璧栵級
export interface HotNewsItem {
  title: string;
  source?: string;  // 骞冲彴灞曠ず鍚嶏紝濡傘€屽井鍗氥€?
  url?: string;
  desc?: string;    // 鐑偣绠€浠嬶紙API 鐨?desc 瀛楁锛屽彲鑳戒负绌猴級
}

// 鍒嗘椂娈电儹鐐瑰揩鐓э細姣忓ぉ姣忔椂娈碉紙0-8/8-16/16-24锛夋渶澶氭媺涓€娆★紝鍏ㄨ鑹插叡浜?
export interface HotNewsSnapshot {
  id: string;          // `${date}#${slot}`锛屽 2026-05-20#1
  date: string;        // YYYY-MM-DD
  slot: number;        // 0=鏃╅棿 1=鍗堥棿 2=鏅氶棿
  slotLabel: string;   // 鏃╅棿 / 鍗堥棿 / 鏅氶棿
  items: HotNewsItem[];
  platforms: string[]; // 鏈鍙洖鐢ㄧ殑骞冲彴 key 鍒楄〃
  fetchedAt: number;   // 鎷夊彇鏃堕棿鎴?
}

export interface MemoryPalaceBackupConfig {
  embedding: {
    model: string;
    dimensions: number;
  };
}

export interface MemoryFragment {
  id: string;
  date: string;
  summary: string;
  mood?: string;
}

export interface SpriteConfig {
  scale: number;
  x: number;
  y: number;
}

export interface SkinSet {
  id: string;
  name: string;
  sprites: Record<string, string>; // emotion -> image URL or base64
}

export interface RoomItem {
    id: string;
    name: string;
    type: 'furniture' | 'decor';
    image: string;
    x: number;
    y: number;
    scale: number;
    rotation: number;
    isInteractive: boolean;
    descriptionPrompt?: string;
}

export interface RoomTodo {
    id: string;
    charId: string;
    date: string;
    /** byUser=true 琛ㄧず杩欐潯鏄敤鎴疯嚜宸卞姞杩涙竻鍗曠殑锛堟爾灞呭織路浠婃棩娓呭崟鑷富鍕剧敾锛夛紝浼氬悓姝ョ粰瑙掕壊 */
    items: { text: string; done: boolean; byUser?: boolean }[];
    generatedAt: number;
}

export interface RoomNote {
    id: string;
    charId: string;
    timestamp: number;
    content: string;
    type: 'lyric' | 'doodle' | 'thought' | 'search' | 'gossip';
    relatedMessageId?: number; 
}

export interface ScheduleSlot {
    startTime: string;    // "08:00"
    endTime?: string;     // "09:00" 璇ユ椂娈靛ぇ鑷寸粨鏉熸椂闂达紙鍙€夛紝浠呭睍绀虹敤锛?
    activity: string;     // "鏅ㄨ窇"
    description?: string; // "鍦ㄦ渤杈规參璺?
    emoji?: string;       // "馃弮"
    location?: string;    // "娌宠竟"
    /** 璇ユ椂娈电殑鎯呯华鍩鸿皟锛?-4瀛楋紝濡?鏉惧紱""涓撴敞""鐑﹁簛""鏈熷緟"锛夛紝鐢ㄤ簬鍗＄墖灏忔爣绛?*/
    mood?: string;
    /** 璇ユ椂娈电殑鑳介噺姘村钩 1-5锛? 鍥颁箯 / 5 婊＄數锛夛紝鐢ㄤ簬鍗＄墖灏忔寚绀?*/
    energy?: number;
    innerThought?: string; // 璇ユ椂娈电殑鍐呭績鐙櫧锛岀敓鎴愭椂鐢盇I鍐欏ソ锛岃繍琛屾椂鐩存帴娉ㄥ叆
    /**
     * 鏃ョ▼閿氱偣鏉ユ簮锛?
     * - 'self'锛堥粯璁?缂虹渷锛夛細瑙掕壊鑷繁瀹夋帓鐨勬椿鍔?
     * - 'chat'锛氫粠鑱婂ぉ閲屽崗璋冨嚭鏉ョ殑绾﹀畾/鍙樻洿锛堝"鏅氫笂鍏偣涓€璧风湅鐢靛奖"锛夆€斺€旇繖绫绘槸銆屾棩绋嬮敋鐐广€嶏紝
     *   浼樺厛绾ф渶楂橈紝瑙掕壊浼氬洿鐫€瀹冨畨鎺掑叾瀹冩椂娈点€?
     */
    source?: 'self' | 'chat';
    /** 鏄惁涓洪敋瀹氭椂娈碉細鑱婂ぉ閲屾槑纭害瀹氥€佽鑹插簲褰撻伒瀹堛€佷笉搴旈殢鎰忔敼鍔ㄧ殑浜嬮」 */
    anchored?: boolean;
}

export interface DailySchedule {
    id: string;           // `${charId}_${date}`
    charId: string;
    date: string;         // YYYY-MM-DD
    slots: ScheduleSlot[];
    generatedAt: number;
    coverImage?: string;  // 鐢ㄦ埛鑷畾涔夎鑹茬湅鏉垮浘 (鎸佷箙鍖?
    /**
     * 鎸夋椂娈电敓鎴愮殑鎰忚瘑娴佺嫭鐧姐€?
     * key = slot 鐨?startTime锛堝 "08:00"锛夛紝value = 鎴璇ユ椂娈电殑瀹屾暣鍐呭績鐙櫧銆?
     * 娉ㄥ叆鏃舵牴鎹綋鍓嶆椂闂存壘鍒版渶杩戠殑 key锛岀洿鎺ヤ娇鐢ㄦ暣娈垫枃鏈紝涓嶅仛鎷兼帴銆?
     */
    flowNarrative?: Record<string, string>;
}

export interface RoomGeneratedState {
    actorStatus: string;
    welcomeMessage: string;
    items: Record<string, { description: string; reaction: string }>;
    actorAction?: string; // e.g. 'idle', 'sleep'
}

export interface BubbleStyle {
    textColor: string;
    backgroundColor: string;
    backgroundImage?: string;
    backgroundImageOpacity?: number;
    borderRadius: number;
    opacity: number;
    
    decoration?: string;
    decorationX?: number;
    decorationY?: number;
    decorationScale?: number;
    decorationRotate?: number;

    avatarDecoration?: string;
    avatarDecorationX?: number;
    avatarDecorationY?: number;
    avatarDecorationScale?: number;
    avatarDecorationRotate?: number;

    voiceBarBg?: string;
    voiceBarActiveBg?: string;
    voiceBarBtnColor?: string;
    voiceBarWaveColor?: string;
    voiceBarTextColor?: string;
}

export interface ChatTheme {
    id: string;
    name: string;
    type: 'preset' | 'custom';
    user: BubbleStyle;
    ai: BubbleStyle;
    customCss?: string;
}

export interface PhoneCustomApp {
    id: string;
    name: string;
    icon: string;
    color: string;
    prompt: string;
}

export type PhoneEvidenceSource = 'generated' | 'xunji' | 'user_action' | 'custom';
export type PhoneEvidenceRisk = 'normal' | 'private' | 'suspicious';

export interface PhoneEvidenceMeta {
    source?: PhoneEvidenceSource;
    appName?: string;
    tags?: string[];
    risk?: PhoneEvidenceRisk;
    relatedXunjiRunId?: string;
    relatedXunjiSnapshotId?: string;
    relatedReportId?: string;
    participants?: string[];
    locationLabel?: string;
    amount?: string;
    status?: string;
}

export interface PhoneEvidence {
    id: string;
    type: 'chat' | 'order' | 'social' | 'delivery' | string;
    title: string;
    detail: string;
    timestamp: number;
    systemMessageId?: number;
    value?: string;
    meta?: PhoneEvidenceMeta;
}

export interface PhoneLockQuestion {
    id: string;
    text: string;
}

export interface PhoneLockSubmission {
    passcodeInput?: string;
    answers?: string[];
    reply?: string;
    mood?: string;
}

export interface PhoneLockAttemptRecord {
    at: number;
    passcodeInput: string;
    answers: string[];
    result: 'passcode' | 'question' | 'both' | 'none';
    completedQuestionId?: string;
    reply?: string;
    mood?: string;
}

export interface PhoneLockState {
    id: string;
    active: boolean;
    createdAt: number;
    unlockedAt?: number;
    unlockedBy?: 'passcode' | 'question' | 'both';
    ownerUserName: string;
    charName: string;
    /** 榛戝睆閿佹満涓婃柟绯荤粺鎻愮ず锛氱暀瑷€鎾畬鍚庝粛鍙樉绀鸿繖寮犻攣灞忋€?*/
    message: string;
    /** 鐢ㄦ埛鐣欑粰瑙掕壊鐪嬬殑閿佸睆鐣欒█銆?*/
    note: string;
    /** 鐢ㄦ埛璁剧疆鐨勫彛浠ょ瓟妗堬紱瑙掕壊鏍规嵁鎻愮ず绛斿鍗冲彲瑙ｉ攣銆?*/
    passcode: string;
    /** 鐢ㄦ埛瀹屽叏鑷畾涔夌殑棰樼洰锛涜鑹插畬鎴愪换鎰忎竴棰樺嵆鍙В閿併€?*/
    questions: PhoneLockQuestion[];
    attempts: PhoneLockAttemptRecord[];
}

/**
 * 鏌ュ矖路瑙掕壊涓撳睘鎵嬫満鐨偆锛堟瘡涓鑹蹭竴濂楋紝璁?缈?TA 鎵嬫満"鐨勬闈㈠崈浜哄崈闈級銆?
 * 涓昏鐢?char.id 纭畾鎬ф淳鐢燂紙閰嶈壊/鎺掔増锛夛紝鍙€夊湴鐢?LLM 鐢熸垚涓€浠芥洿璐翠汉璁剧殑銆屾墜鏈轰晶鍐欍€?
 * 锛堣澶囧悕 / 妗岄潰鍓爣 / 涓€鍙ヨ瘽 vibe / 涓€缁勮创浜鸿鐨?App锛夛紝鐢熸垚鍚庣紦瀛樺湪 phoneState.profile銆?
 */
export interface PhoneProfile {
    /** 璁惧鍚嶏紙妗岄潰椤堕儴锛屽銆孍than 鐨?iPhone銆嶏級 */
    deviceName?: string;
    /** 妗岄潰鍓爣棰?/ 涓€鍙ヨ瘽鐘舵€?*/
    tagline?: string;
    /** 澹佺焊锛欳SS 娓愬彉涓叉垨鍥剧墖 url锛堢己鐪佹椂鎸?char.id 娲剧敓娓愬彉锛?*/
    wallpaper?: string;
    /** 涓婚寮鸿皟鑹?hex */
    accent?: string;
    /** 閰嶈壊鏂规 id锛堢‘瀹氭€ф淳鐢燂紝鍐冲畾娣辨祬/鑹茬浉锛?*/
    paletteId?: string;
    /** LLM 鐢熸垚鐨勪竴缁勮创浜鸿 App锛堣鐩栭粯璁?App 闆嗙殑灞曠ず鍚?鍥炬爣/鍙栨暟鎸囦护锛?*/
    apps?: Array<{ id: string; name: string; icon: string; color: string; kind: string; prompt?: string }>;
    /** 鏄惁鐢?LLM 鐢熸垚杩囷紙鐢ㄤ簬鎸夐挳鏂囨 鉁?瑁呯偣 / 鈫?閲嶆柊瑁呯偣锛?*/
    generated?: boolean;
    generatedAt?: number;
}

/** 鍥炴湜灏忔姤锛堟槰鏃ユ潵淇?/ 鍥炴湜路鍛ㄧ珷 / 鍥炴湜路鏈堢珷锛夛細鎶婅繃鍘讳竴娈垫椂闂存暣鐞嗘垚濞变箰灏忔姤 */
export interface Tabloid {
    /** 'day' 鏄ㄦ棩鏉ヤ俊 / 'week' 鍥炴湜路鍛ㄧ珷 / 'month' 鍥炴湜路鏈堢珷 */
    period: 'day' | 'week' | 'month';
    /** 灏忔姤澶存潯澶ф爣棰?*/
    headline: string;
    /** 鍓爣 / 鏈熷彿灏忓瓧 */
    subhead?: string;
    /** 涓荤瑪锛堣鑹诧級瀵勮锛氬儚缂栬緫鎵嬭涓€鏍风殑寮€鍦虹櫧 */
    editorNote?: string;
    /** 鏍忕洰锛氭瘡鏉℃槸涓€涓ū涔愮増鍧?*/
    sections: Array<{ tag: string; title: string; body: string; quote?: string }>;
    /** 鑺辩诞 / 杈规爮灏忔枡 */
    sidebar?: string[];
    /** 缁撳熬绛惧悕 */
    signoff?: string;
    /** 瑕嗙洊鐨勬椂闂寸獥鍙?[from, to) */
    rangeFrom: number;
    rangeTo: number;
    generatedAt: number;
}

/**
 * SillyTavern 瑙掕壊鍗″唴宓屼笘鐣屼功 (character_book / lorebook) 鐨勫師濮嬭瀹氥€?
 * Moro 鐨勪笘鐣屼功鏄€屾寕杞藉嵆鍏ㄦ枃娉ㄥ叆銆嶏紝娌℃湁 ST 鐨勫叧閿瘝鎵弿婵€娲绘満鍒讹紝
 * 瀵煎叆鏃舵妸鏉＄洰绾э紙灞€閮級+ 涔︾骇锛堝叏灞€锛夎缃師鏍蜂繚鐣欏湪杩欓噷锛?
 * 涓€鏉ヤ繚璇併€屽叏閮ㄨ瀹氫俊鎭€嶄笉涓紝浜屾潵涓轰互鍚庡疄鐜板叧閿瘝婵€娲荤暀濂芥暟鎹€?
 */
export interface WorldbookSTData {
    // ---- 涔︾骇锛堝叏灞€锛夎缃?----
    bookName?: string;
    bookDescription?: string;
    scanDepth?: number;
    tokenBudget?: number;
    recursiveScanning?: boolean;
    bookExtensions?: Record<string, any>;
    // ---- 鏉＄洰绾э紙灞€閮級璁剧疆 ----
    entry?: {
        id?: number | string;
        name?: string;
        comment?: string;
        keys?: string[];           // 瑙﹀彂鍏抽敭璇?
        secondaryKeys?: string[];  // 浜岀骇杩囨护璇?
        selective?: boolean;       // 闇€鍚屾椂鍛戒腑浜岀骇璇?
        constant?: boolean;        // 甯搁┗锛堣摑鐏級
        enabled?: boolean;         // ST 閲屾槸鍚﹀惎鐢?
        insertionOrder?: number;   // 鎻掑叆椤哄簭
        caseSensitive?: boolean;
        priority?: number;
        position?: string | number; // 'before_char' / 'after_char' / ST 鍐呴儴鏁板瓧浣?
        extensions?: Record<string, any>; // ST 绉佹湁瀛楁锛坉epth/probability 绛夛級鍏ㄩ噺鍏滃簳
    };
}

/**
 * 涓栫晫涔︽潯鐩殑鎻掑叆浣嶇疆锛堝榻?SillyTavern 鐨?position 璇箟锛夛細
 * - 'before_char'锛氳鑹插畾涔夛紙### 浣犵殑韬唤锛変箣鍓?
 * - 'after_char'锛氳鑹插畾涔変箣鍚庯紙榛樿锛屽嵆鐜版湁銆屾墿灞曡瀹氶泦銆嶅潡鐨勪綅缃級
 * - 'depth_system' / 'depth_user' / 'depth_assistant'锛氫互鎸囧畾 role 娉ㄥ叆鍒拌亰澶╁巻鍙?
 *   鍊掓暟绗?depth 鏉℃秷鎭锛園Depth锛夈€備粎涓昏亰澶╅摼璺湡姝ｆ寜娣卞害鎻掓秷鎭紱
 *   鍏朵粬鍙骇鍑哄崟鏉?system prompt 鐨勮皟鐢ㄦ柟浼氬唴鑱旈檷绾у埌 after_char 鍧椼€?
 */
export type WorldbookPosition =
    | 'before_char'
    | 'after_char'
    | 'depth_system'
    | 'depth_user'
    | 'depth_assistant';

export interface Worldbook {
    id: string;
    title: string;
    content: string;
    category: string;
    createdAt: number;
    updatedAt: number;
    /**
     * 鏉＄洰寮€鍏筹細false = 鍏抽棴锛堜换浣曞満鏅兘涓嶆敞鍏ワ級銆倁ndefined 瑙嗕负 true锛堝悜鍚庡吋瀹癸級銆?
     * 鏁存湰涔︾殑寮€鍏充笉瀛樺湪鏉＄洰涓?鈥斺€?鎸?category 瀛樺湪 localStorage
     * 锛堣 utils/worldbookRuntime.ts 鐨?GROUP_TOGGLES_KEY锛夈€?
     */
    enabled?: boolean;
    /**
     * 鏃х増鏉＄洰绾т綔鐢ㄥ煙瀛楁锛屼粎涓哄鍏?澶囦唤鍏煎淇濈暀銆?
     * 褰撳墠杩愯鏃剁殑鍏ㄥ眬/灞€閮ㄧ敱銆屾暣鏈笘鐣屼功鍒嗙粍銆嶅喅瀹氾細
     * 瑙?utils/worldbookRuntime.ts 鐨?GROUP_SCOPES_KEY銆?
     */
    scope?: 'local' | 'global';
    /** 鎻掑叆浣嶇疆锛寀ndefined = 'after_char' */
    position?: WorldbookPosition;
    /** position 涓?depth_* 鏃剁殑娉ㄥ叆娣卞害锛堝€掓暟绗嚑鏉℃秷鎭墠锛夛紝榛樿 4锛堝悓 ST锛?*/
    depth?: number;
    /** 鍚屼竴浣嶇疆鍐呯殑鎻掑叆椤哄簭锛屽皬鐨勫湪鍓嶏紙鍚?ST 鐨勬渶缁堢敓鏁堥『搴忥級锛岄粯璁?100 */
    order?: number;
    /**
     * 婵€娲绘柟寮忥紙ST 鍏抽敭璇嶆壂鎻忕Щ妞嶏級锛?
     * - 'always'锛堥粯璁わ紝鍗?ST 鐨勫父椹?钃濈伅 馃數锛夛細鍙寮€鍏冲紑鐫€灏辨敞鍏?
     * - 'keyword'锛圫T 鐨勭豢鐏?馃煝锛夛細鎵弿鏈€杩戠殑鑱婂ぉ娑堟伅锛屽懡涓叧閿瘝鎵嶆敞鍏ャ€?
     *   浠呬富鑱婂ぉ閾捐矾锛坆uildChatRequestPayload 璁剧疆鎵弿涓婁笅鏂囷級鎵ц鎵弿锛?
     *   娌℃湁鑱婂ぉ涓婁笅鏂囩殑璋冪敤鏂癸紙绾︿細绛夊崟 prompt 鍦烘櫙锛変笉娉ㄥ叆鍏抽敭璇嶆潯鐩€?
     */
    activation?: 'always' | 'keyword';
    /** 瑙﹀彂鍏抽敭璇嶏紙浠讳竴鍛戒腑鍗虫縺娲伙級锛宎ctivation='keyword' 鏃剁敓鏁?*/
    keys?: string[];
    /** 浜岀骇杩囨护璇嶏紙selective=true 鏃堕渶鍚屾椂鍛戒腑浠讳竴锛?*/
    secondaryKeys?: string[];
    /** 闇€鍚屾椂鍛戒腑浜岀骇杩囨护璇嶏紙鍚?ST selective锛?*/
    selective?: boolean;
    /** 鍏抽敭璇嶅尮閰嶅ぇ灏忓啓鏁忔劅锛岄粯璁や笉鏁忔劅锛堝悓 ST case_sensitive锛?*/
    caseSensitive?: boolean;
    /** 鍏抽敭璇嶆壂鎻忔繁搴︼細鎵渶杩?N 鏉℃秷鎭紝榛樿 4锛堝悓 ST scan_depth 璇箟锛?*/
    scanDepth?: number;
    /** 'sillytavern' = 浠?SillyTavern 瑙掕壊鍗″鍏ョ殑鏉＄洰 */
    source?: 'sillytavern';
    /** SillyTavern 鍘熷璁惧畾淇℃伅锛堜粎 source === 'sillytavern' 鏃跺瓨鍦級 */
    stData?: WorldbookSTData;
}

// --- NOVEL / CO-WRITING TYPES ---
export interface NovelProtagonist {
    id: string;
    name: string;
    role: string; // e.g. "Protagonist", "Villain"
    description: string;
}

export interface NovelSegment {
    id: string;
    role?: 'writer' | 'commenter' | 'analyst'; 
    type: 'discussion' | 'story' | 'analysis'; 
    authorId: string; 
    content: string;
    timestamp: number;
    focus?: string; 
    targetSegId?: string;
    meta?: {
        tone?: string;
        suggestion?: string;
        reaction?: string;
        technique?: string;
        mood?: string;
    };
}

export interface NovelBook {
    id: string;
    title: string;
    subtitle?: string; 
    summary: string;
    coverStyle: string; 
    coverImage?: string; 
    worldSetting: string;
    collaboratorIds: string[]; 
    protagonists: NovelProtagonist[];
    segments: NovelSegment[];
    createdAt: number;
    lastActiveAt: number;
}

// =====================================================================
// --- VR WORLD ("椤靛") TYPES ---
// 瑙掕壊鑷富鐧诲叆鐨勮櫄鎷熶笘鐣屻€傚畾鏃跺櫒椹卞姩姣忎釜瑙掕壊鐙珛璋冪敤涓€娆?LLM锛屽湪鏌愪釜鎴块棿
// 瀹屾垚涓€娆℃椿鍔紙v1锛氬浘涔﹂鐪嬪皬璇达級锛屼骇鍑轰竴寮犳椿鍔ㄥ崱娉ㄥ叆璇ヨ鑹茬殑 1v1 鑱婂ぉ锛?
// 澶╃劧琚笂涓嬫枃涓庤蹇嗘€荤粨鎹曟崏銆?
// =====================================================================

/** 铏氭嫙涓栫晫閲岀殑鎴块棿銆?*/
export type VRRoomId = 'plaza' | 'library' | 'music' | 'guestbook' | 'gym' | 'postoffice' | 'theater';

/** 鍏ㄥ眬灏忚搴撻噷鐨勪竴鏈功锛堟墍鏈夎鑹插叡浜師鏂囷紝鍚勮嚜鐣欐壒娉ㄣ€佸悇鑷功绛撅級銆?*/
export interface VRWorldNovel {
    id: string;
    title: string;
    author?: string;
    /** 绠€浠嬶紝鍠傜粰瑙掕壊褰撹儗鏅紝涔熺敤浜?UI 灞曠ず */
    summary?: string;
    /** 鍘熸枃鎸夐槄璇诲崟鍏冨垏濂界殑娈佃惤鍧楋紙姣忓潡 ~鏁扮櫨瀛楋紝渚夸簬瀹氫綅鎵规敞涓庢帹杩涗功绛撅級銆?*/
    segments: VRNovelSegment[];
    /** 鎬诲瓧鏁帮紙缂撳瓨锛孶I 灞曠ず鐢級 */
    totalChars: number;
    createdAt: number;
    updatedAt: number;
}

/** 灏忚閲岀殑涓€涓槄璇诲崟鍏冿紙鍘熸枃娈佃惤鍧楋級銆?*/
export interface VRNovelSegment {
    /** 娈佃惤绱㈠紩锛?-based锛岀瓑浜庡湪 segments 鏁扮粍閲岀殑浣嶇疆锛屾寔涔呭寲浠ラ槻閲嶆帓锛?*/
    idx: number;
    /** 鍘熸枃鍐呭 */
    text: string;
    /** 瀛楁暟锛堢紦瀛橈級 */
    chars: number;
}

/**
 * 涓€鏉℃壒娉ㄣ€傛寕鍦?(novelId, segIdx) 涓婏紝鍙浠讳綍瑙掕壊鍚愭Ы锛坱argetAnnotationId 鎸囧悜琚悙妲界殑鎵规敞锛夈€?
 * 鍏ㄥ眬瀛樺湪 VRWorldNovel 涔嬪鐨勭嫭绔嬮泦鍚堥噷鈥斺€旇 db 鐨?vr_annotations 瀛楁銆?
 */
export interface VRNovelAnnotation {
    id: string;
    novelId: string;
    /** 鎵规敞閿氬畾鐨勬钀界储寮?*/
    segIdx: number;
    /** 浣滆€呰鑹?id锛坲ser 鐣欐壒娉ㄦ椂涓?'user'锛?*/
    authorId: string;
    /** 浣滆€呭睍绀哄悕锛堣惤搴撳啑浣欙紝閬垮厤瑙掕壊鍒犻櫎鍚庝涪鍚嶏級 */
    authorName: string;
    /** 鎵规敞/鍚愭Ы姝ｆ枃 */
    content: string;
    /** 鑻ユ槸"鍚愭Ы鍒汉鐨勫悙妲?锛屾寚鍚戣鍚愭Ы鐨勬壒娉?id */
    targetAnnotationId?: string;
    createdAt: number;
}

/** 瑙掕壊鍦ㄨ櫄鎷熶笘鐣岄噷鐨勪釜浜虹姸鎬侊紙鎸傚湪 CharacterProfile.vrState锛夈€?*/
export interface VRWorldCharState {
    /** 鏄惁鍚敤璇ヨ鑹茬殑鑷富鐧诲叆锛堢嫭绔嬩簬涓诲姩鍙戞秷鎭?proactiveConfig锛?*/
    enabled: boolean;
    /** 鑷富鐧诲叆闂撮殧锛堝垎閽燂紝30 瀵归綈锛涢粯璁?120 = 2h锛?*/
    intervalMinutes: number;
    /**
     * 姣忔湰灏忚鐨勭嫭绔嬩功绛撅細novelId -> 涓嬩竴娆¤浠庣鍑犱釜 segment 寮€濮嬭銆?
     * 杩欐槸"姣忎釜瑙掕壊涔︾涓嶄竴鏍?鐨勮惤鐐广€?
     */
    novelBookmarks?: Record<string, number>;
    /** 鏈€杩戜竴娆℃椿鍔ㄨ惤鍦ㄥ摢涓埧闂达紙UI 绔嬬粯绔欎綅鐢級 */
    currentRoom?: VRRoomId;
    /** 鏈€杩戜竴娆℃椿鍔ㄦ椂闂存埑锛圲I / 璋冨害灞曠ず鐢級 */
    lastActiveAt?: number;
    /** 璇ヨ鑹蹭笓灞?API 瑕嗙洊锛堢敤鎴峰彲鍗曠嫭涓恒€岄〉澶栥€嶆椿鍔ㄩ厤 api锛夛紱涓嶈鍒欏洖钀藉叏灞€ apiConfig銆?*/
    api?: { baseUrl: string; apiKey: string; model: string };
    /**
     * 瑙掕壊鍦ㄣ€岄〉澶栥€嶉噷鐨?chibi 褰㈣薄锛圦鐗堝皬浜猴級銆傚惎鐢ㄨ嚜涓荤櫥鍏ユ椂瑕佹眰璁惧畾锛屽彲闅忔椂缂栬緫銆?
     * img 涓嶈鏃跺洖閫€鍒拌鑹茬珛缁?澶村儚銆?
     */
    chibi?: VRChibi;
    /** 宸插瓨鐨勫濂楀舰璞★紙鎹㈣浣嶏級锛氶殢鏃朵竴閿垏鎹紱鍒囨崲浼氭妸閫変腑閭ｅ鍐欏洖 chibi銆?*/
    chibiLooks?: VRChibi[];
}

/** 涓€濂?chibi 褰㈣薄锛圦鐗堝皬浜猴級銆傛崗灏忎汉鍔熻兘涓庛€屼笘鐣屾埧闂淬€嶆崲瑁呭叡鐢ㄣ€?*/
export interface VRChibi {
    /** 褰㈣薄鍥撅紙閫忔槑鑳屾櫙 PNG锛屾潵鑷崗浜哄櫒 transparentDataUrl锛?*/
    img: string;
    /** 鎹忎汉鍣ㄥ鍑虹殑瀹屾暣鐘舵€侊紝鍥炲～鐢ㄤ簬鍐嶇紪杈戯紙state.selected 鍙綔涓?presets锛?*/
    state?: any;
    /** 绔欎綅缂╂斁锛堥粯璁?1锛?*/
    scale?: number;
    /** 鍨傜洿寰皟锛坧x锛岃礋鏁颁笂绉伙紝榛樿 0锛?*/
    offsetY?: number;
    /** 姘村钩寰皟锛坧x锛岃礋鏁板乏绉伙紝榛樿 0锛?*/
    offsetX?: number;
    /** 鏃嬭浆瑙掑害锛坉eg锛岄粯璁?0锛?*/
    rotate?: number;
    /** 閫忔槑搴︼紙0.35~1锛岄粯璁?1锛?*/
    opacity?: number;
    /** 鏄惁鏄剧ず鎶曞奖锛堥粯璁?true锛?*/
    shadow?: boolean;
    /** 鑴氫笅/韬悗鍏夌幆鏍峰紡 */
    halo?: 'none' | 'soft' | 'mint' | 'violet' | 'warm';
    /** 鏄惁姘村钩缈昏浆 */
    flip?: boolean;
    /** 鎴块棿鍐呭Э鍔?鍔ㄧ敾锛?idle' | 'bob' | 'wiggle' | 'spin' | 'jump' | 'nod'鈥︼級锛岄┍鍔ㄥ皬浜哄湪涓栫晫閲屾洿鐢熷姩銆?*/
    pose?: string;
    /** 璐寸焊瑁呴グ锛坋moji锛屾寕鍦ㄥ皬浜哄ご椤讹級锛屾墜璐︽嫾璐村懗銆?*/
    sticker?: string;
    /** 璐寸焊姘村钩鍋忕Щ锛坧x锛?*/
    stickerX?: number;
    /** 璐寸焊鍨傜洿鍋忕Щ锛坧x锛?*/
    stickerY?: number;
    /** 璐寸焊缂╂斁锛堥粯璁?1锛?*/
    stickerSize?: number;
    /** 鏄惁鏄剧ず鍦ㄧ嚎鍚嶇墝锛堥粯璁?true锛?*/
    nameVisible?: boolean;
    /** 杩欏褰㈣薄鐨勫懡鍚嶏紙鎹㈣浣嶆爣绛撅紝閫夊～锛夈€?*/
    name?: string;
}

/** 娉ㄥ叆鑱婂ぉ鐨?vr_card 娑堟伅鐨?metadata 缁撴瀯銆?*/
export interface VRCardMeta {
    vrCard: true;
    room: VRRoomId;
    /** 娲诲姩姒傝堪锛坰team 鎻愮ず寮忥紝UI 鏍囬锛?*/
    activity: string;
    novelId?: string;
    novelTitle?: string;
    /** 鏈璇诲埌鐨勬钀借寖鍥?[from, to)锛堜粎 library锛?*/
    segRange?: [number, number];
    /** 鏈鍐欎笅鐨勬壒娉ㄦ憳瑕侊紙淇濈暀姝ｆ枃锛屽師鏂囩渷鐣ワ級 */
    annotationExcerpts?: string[];
    /** 甯︽钀介敋鐐圭殑鎵规敞寮曠敤锛堢敤浜庝粠鍔ㄦ€佺偣鍥炲師鏂囪烦杞級 */
    annotationRefs?: { segIdx: number; text: string }[];
    // --- 鍚瓕鎴夸笓鐢?---
    /** 鏈璇?鍚殑褰撳墠姝岋紙鍚?- 姝屾墜锛?*/
    songLabel?: string;
    /** 鏈鐐?鎺掕繘闃熷垪鐨勮嚜宸辩殑姝?*/
    queuedLabel?: string;
    /** 姝ゅ埢鐨勮涓烘弿杩帮紙鐩潃璺?璺熷敱/缁檜ser褰曗€︼紱濞变箰瀹や篃鐢級 */
    behavior?: string;
    // --- 鐣欒█绨夸笓鐢?---
    /** 鏈鍙戝埌鐣欒█绨跨殑璇濓紙淇濈暀姝ｆ枃锛?*/
    boardPost?: string;
    /** 鏈鍙戝埌鐣欒█绨跨殑鎵€鏈夊彂瑷€锛堝師鏍凤紝鍚洖澶嶅璞★級锛岀敤浜庡悓姝ヨ繘 1v1 鑱婂ぉ/璁板繂 */
    boardPosts?: { content: string; replyToName?: string }[];
    /** 鍥炲浜嗚皝 */
    boardReplyToName?: string;
    /** 杩欐潯鍗＄墖鏄?鐢ㄦ埛鍦ㄧ暀瑷€绨垮彂瑷€"骞挎挱缁欒 char 鐨?*/
    userBoardPost?: boolean;
    // --- 閭眬涓撶敤 ---
    /** 鏈鍐欎俊/鍥炰俊鐨勬鏂囨憳瑕?*/
    letterExcerpt?: string;
}

/** 閭眬锛氫竴灏佷俊鏀跺埌鐨勫洖澶嶏紙鐣欐。鐢級銆?*/
export interface VRLetterReply {
    pen: string;
    content: string;
    createdAt: number;
}

/**
 * 閭眬淇′欢锛堟湰鍦板瓨妗?+ 闃熷垪锛夈€?
 * box='outbox'锛氭垜鏂硅鑹插啓鐨勬紓娴佷俊锛堝緟瀵勫嚭鈫掑凡瀵勫嚭鈫掓敹鍒板洖澶嶇暀妗ｏ級銆?
 * box='inbox' 锛氫粠鍒殑鐢ㄦ埛閭ｆ娊鍒扮殑淇★紙寰呭洖淇♀啋寰呭彂閫佸洖淇♀啋宸插彂閫侊級銆?
 */
export interface VRLetter {
    id: string;                 // 鏈湴 id
    box: 'outbox' | 'inbox';
    pen: string;                // 绗斿悕锛堝啓淇¤鑹插悕 / 杩滅瀵勪俊鏂圭瑪鍚嶏級
    content: string;
    createdAt: number;
    charId?: string;            // 鍐欒繖灏佷俊/鍥炰俊鐨勮鑹?

    // outbox
    status?: 'queued' | 'sent' | 'archived' | 'sealed';  // 寰呭瘎鍑?/ 宸插瘎鍑?/ 鏀跺埌鍥炲鐣欐。 / 瑙掕壊宸茶骞跺皝瀛?
    remoteId?: string;          // 瀵勫嚭鍚庢湇鍔＄鍒嗛厤鐨勮繙绔?id
    released?: boolean;         // 浣滆€呭凡銆屽仠姝紶鎾€嶏細鍚庣宸插垹銆侀€€鍑哄叕鍏辨睜锛屾湰鍦颁粛鐣欐。
    sentAt?: number;
    repliesReceived?: VRLetterReply[];
    /** 鍘熶綔鑰呰鑹茶杩囧洖淇″悗鐨勬劅瑙︼紙鍐欏畬鍗冲皝瀛橈紝浣垮懡瀹屾垚锛?*/
    reaction?: { content: string; createdAt: number };

    // inbox
    remoteLetterId?: string;    // 杩滅淇?id锛堝洖淇℃椂鐢級
    replyStatus?: 'none' | 'queued' | 'sent'; // 鏈洖 / 寰呭彂閫佸洖淇?/ 宸插彂閫?
    reply?: { charId: string; pen: string; content: string; createdAt: number; userNote?: string };
    fetchedAt?: number;

    // 浜掑姩鐑害缂撳瓨锛堟湇鍔＄涓哄噯锛沀I 鍗虫椂鍙嶉鐢級
    likes?: number;             // 鐐硅禐鏁?
    dislikes?: number;          // 鐐硅俯(=涓炬姤)鏁?
    views?: number;             // 琚娊鍒?娴忚娆℃暟
    myVote?: 1 | -1 | 0;        // 鎴戝杩欏皝淇＄殑鎶曠エ锛坕nbox 鎶藉埌鐨勪俊锛?
}

/** 鍚瓕鎴块槦鍒楅」銆?*/
export interface VRMusicQueueItem {
    song: CharPlaylistSong;
    charId: string;
    charName: string;
}

/** 鐣欒█绨匡紙鍏变韩鐗堣亰澧欙級鐨勪竴鏉＄暀瑷€銆?*/
export interface VRGuestbookMessage {
    id: string;
    /** 'user' = 鐢ㄦ埛鏈汉锛屽叾浣欎负 charId */
    authorId: string;
    authorName: string;
    content: string;
    /** 鑻ユ槸鍥炲鏌愭潯鐣欒█ */
    replyToId?: string;
    replyToName?: string;
    createdAt: number;
}

/** 鐣欒█绨垮叡浜姸鎬侊紙鍗曚緥锛屾墍鏈夎鑹?+ 鐢ㄦ埛鍏辩敤涓€闈㈠锛夈€?*/
export interface VRGuestbookState {
    id: string; // 'board' 鍗曚緥
    messages: VRGuestbookMessage[];
    updatedAt: number;
}

/** 鍚瓕鎴垮叡浜姸鎬侊紙鍗曚緥锛屾墍鏈夎鑹插叡鐢ㄤ竴涓惊鐜槦鍒楋級銆?*/
export interface VRMusicRoomState {
    id: string; // 'state' 鍗曚緥
    nowPlaying?: {
        song: CharPlaylistSong;
        charId: string;
        charName: string;
        /** 閫夋洸蹇冨/鐞嗙敱 */
        vibe?: string;
        since: number;
    };
    queue: VRMusicQueueItem[];
    updatedAt: number;
}

// ============ 鍓ч櫌 / 璇濆墽閮ㄩ棬 ============

/** 鍓ф湰閲岀殑涓€涓櫥鍦鸿鑹诧紙鍚嶅瓧 + 澶ц嚧鎬ф牸锛屼緵閫夎鍖归厤/婕旂粠鐢級銆?*/
export interface VRPlayRole {
    name: string;
    persona: string;
}

/** 涓€浠芥姇绋垮墽鏈紙瑙掕壊鍒涗綔 / 鐢ㄦ埛鍐?/ LLM 浠ｅ啓 / 涓婁紶锛夈€?*/
export interface VRScript {
    id: string;
    title: string;
    /** 涓€鍙ヨ瘽绠€浠嬶紙"鍒涗綔浜嗗叧浜?xxx 鐨勮垶鍙板墽"鐢級 */
    logline: string;
    roles: VRPlayRole[];
    /** 瀹屾暣鍓ф湰姝ｆ枃锛堝浐瀹氭牸寮忥細骞?鍦?+ 瑙掕壊鍙拌瘝 + 锛堟梺鐧斤級锛?*/
    body: string;
    /** 浣滆€?id锛?user' | charId | 'llm' */
    authorId: string;
    authorName: string;
    source: 'char' | 'user' | 'llm' | 'upload';
    createdAt: number;
}

/** 缂栨帓鏃剁殑 LLM 璋冪敤妯″紡锛氶€愯鑹插悇璋冧竴娆★紙绮惧噯锛孨 娆★級/ 鍥哄畾涓ゆ锛堢渷锛屽彲鑳?OOC锛夈€?*/
export type VRStageMode = 'per-role' | 'two-call';

/** 閫夎锛氬墽鏈鑹?鈫?婕斿憳锛坈har 鎴?涓存椂 NPC锛夈€?*/
export interface VRCastAssign {
    roleName: string;
    actorId: string;   // charId | npc_xxx
    actorName: string;
    isNpc: boolean;
    /** NPC 鐨勬崗鑴哥珛缁橈紙閫忔槑 PNG dataUrl锛?*/
    npcChibi?: string;
}

/** 鏌愭紨鍛樿瀹屽墽鏈悗缁欏婕旂殑鎰忚锛堝悙妲?/ 鏀瑰彴璇嶅姩浣?/ 閰嶄笉閰嶅悎锛夈€?*/
export interface VRActorNote {
    actorId: string;
    actorName: string;
    roleName: string;
    /** 涓€鍙ュ悙妲?/ 鎯虫硶锛圲I 灞曠ず锛?*/
    note: string;
    /** 瑙掕壊鎸夎嚜宸辨湰鑹查噸鍐欒繃鐨?鎴戣繖閮ㄥ垎鍙拌瘝 / 鎬庝箞婕?锛堝彲绌?= 鐓у師鏈紨锛?*/
    lines?: string;
    /** 缁濆绂佸繉锛氬婕旂粷涓嶈兘璁╄瑙掕壊鍋氱殑浜嬶紙纭孩绾匡紝鍙┖锛?*/
    taboo?: string;
    /** 缁欏婕旂殑鍐欎綔鎸囧锛堣繖鏉＄嚎璇ユ€庝箞澶勭悊锛屽彲绌猴級 */
    direction?: string;
    /** 鎬佸害鍏夎氨锛氭鐒?/ 閰嶅悎 / 鍕夊己 / 闅愬繊 / 鎶佃Е / 鎷掓紨锛堟寜瑙掕壊鎬у瓙鑷劧钀界偣锛屼笉蹇呴兘纭垰锛?*/
    attitude?: string;
    /** 鏄惁閰嶅悎锛堢敱 attitude 鎺ㄥ锛氭姷瑙?鎷掓紨 = false锛?*/
    cooperative: boolean;
}

/** 鏈€缁堟紨鍑鸿剼鏈殑涓€鎷嶏紙鍙拌瘝姘旀场 / 鏃佺櫧 / 涓婂満 / 涓嬪満锛夈€?*/
export interface VRStageLine {
    kind: 'line' | 'narration' | 'enter' | 'exit';
    /** line/enter/exit 鏃舵槸璋?*/
    actorName?: string;
    /** 鍙拌瘝姘旀场鍐呭 / 鏃佺櫧鏂囧瓧 */
    text: string;
}

/** 涓€鍦哄凡鏀跺綍鐨勬紨鍑猴紙瀵兼紨鏁村悎鍚庣殑鎴愬搧 + 瑙備紬閿愯瘎 + 璇勭骇锛夈€?*/
export interface VRStagedPlay {
    id: string;
    scriptId: string;
    title: string;
    logline: string;
    cast: VRCastAssign[];
    notes: VRActorNote[];
    /** 瀵兼紨鏁村悎鍚庣殑鍙紨鍑鸿剼鏈?*/
    stage: VRStageLine[];
    /** 璧涘崥瑙備紬閿愯瘎 */
    reviews: { critic: string; text: string }[];
    /** 璇勭骇锛堝 S / A / 鈽呪槄鈽呪槄鈽嗭級 */
    rating: string;
    createdAt: number;
}

/**
 * 鎹忚劯绯荤粺鑷畾涔夐儴浠讹紙寮€鍙戞ā寮忚拷鍔狅級銆傝繍琛屾椂鐢?CreatorIframe 璇诲嚭锛岄殢 like520_init
 * 浠?extraItems 娉ㄥ叆鎹忎汉鍣紝鍚堝苟杩涘搴旂被鐩殑 PARTS銆?20 / 椤靛 閮戒細鎷垮埌銆?
 */
export interface CustomCreatorPart {
    id: string;
    /** 褰掑睘绫荤洰 key锛堝 skin / fronthair / outfit 鈥︼紝椤讳笌鎹忎汉鍣?PARTS 鐨?key 瀵瑰簲锛?*/
    categoryKey: string;
    /** 闈㈡澘閲屾樉绀虹殑鍚嶅瓧 */
    name: string;
    /** 閮ㄤ欢鍥撅紙閫忔槑 PNG 鐨?data URL锛岄』涓庢崗浜哄櫒鐢诲竷鍚屽昂瀵?鍚岄敋鐐癸級 */
    src: string;
    /** 鏄惁鍙鎹㈣壊锛堝搴?item.tintable锛?*/
    tintable?: boolean;
    createdAt: number;
}

// --- SONGWRITING APP TYPES ---
export type SongMood = 'happy' | 'sad' | 'romantic' | 'angry' | 'chill' | 'epic' | 'nostalgic' | 'dreamy';
export type SongGenre = 'pop' | 'rock' | 'ballad' | 'rap' | 'folk' | 'electronic' | 'jazz' | 'rnb' | 'free';

export interface SongLine {
    id: string;
    authorId: string; // 'user' or charId
    content: string;
    section: 'intro' | 'verse' | 'pre-chorus' | 'chorus' | 'bridge' | 'outro' | 'free';
    annotation?: string; // AI guidance note on this line
    timestamp: number;
    isDraft?: boolean; // true = not selected as final lyrics, kept as draft record
}

export interface SongComment {
    id: string;
    authorId: string; // charId
    type: 'guidance' | 'praise' | 'suggestion' | 'teaching' | 'reaction';
    content: string;
    targetLineId?: string; // which line this comment is about
    timestamp: number;
}

export interface ChordInfo {
    root: string;       // e.g. 'C', 'D', 'Ab'
    quality: string;    // e.g. 'maj', 'min', '7', 'maj7', 'sus4'
    display: string;    // e.g. 'C', 'Am', 'G7', 'Fmaj7'
    midi: number;       // root note MIDI number (for audio)
}

export interface MelodyNote {
    midi: number;       // MIDI note number
    duration: number;   // in beats
    vowel: number;      // index into vowel formant table (0=a,1=o,2=e,3=i,4=u)
}

export interface SectionArrangement {
    section: string;            // matches SongLine.section
    chords: ChordInfo[];        // one chord per line in this section
    melodies?: MelodyNote[][];  // melodies[lineIdx] = notes for that line
}

export interface SongArrangement {
    rootNote: string;           // e.g. 'C', 'A'
    scale: 'major' | 'minor';
    bpm: number;
    sections: SectionArrangement[];
    instruments: {
        piano: boolean;
        bass: boolean;
        drums: boolean;
        melody: boolean;
    };
    drumPattern: 'basic' | 'upbeat' | 'halftime' | 'shuffle';
}

// Provider identifier for AI-generated audio. Each one has its own pricing
// / length cap / API path; the actual call site decides which to use.
//   - 'minimax-free' 鈫?music-2.6-free, free tier, 60s cap
//   - 'minimax-paid' 鈫?music-2.6, Token-Plan price, 60s cap
//   - 'ace-step'     鈫?Replicate lucataco/ace-step, $0.015/song, 4-min cap
export type MusicProvider = 'minimax-free' | 'minimax-paid' | 'ace-step';

// AI-rendered audio attached to a SongSheet.
// Audio blob lives in the IndexedDB assets store keyed by `assetKey`,
// so the sheet itself stays small and JSON-serializable for sync/export.
export interface SongAudio {
    assetKey: string;          // DB.getAssetRaw / saveAssetRaw key
    mimeType: string;          // e.g. "audio/mpeg", "audio/wav"
    durationSec?: number;
    generatedAt: number;
    provider: MusicProvider;
    // Snapshot of the inputs used so we can show "regenerate when lyrics changed"
    promptHash: string;
    tagsUsed: string;
    lyricsLineCount: number;
}

export interface SongSheet {
    id: string;
    title: string;
    subtitle?: string;
    genre: SongGenre;
    mood: SongMood;
    bpm?: number;
    key?: string; // e.g. "C major", "A minor"
    collaboratorId: string; // the character guiding the user
    lines: SongLine[];
    comments: SongComment[];
    status: 'draft' | 'completed';
    coverStyle: string; // gradient/color identifier
    createdAt: number;
    lastActiveAt: number;
    completedAt?: number;
    arrangement?: SongArrangement;
    audio?: SongAudio;
    // Custom style prompt 鈥?when set, overrides the preset/genre/mood-derived tags.
    // Plain comma-separated English string the user (or LLM helper) authored.
    // Reused by both ACE-Step (`tags` field) and MiniMax music (`prompt` field).
    aceStepCustomTags?: string;
    // Last-used music provider for this song 鈥?drives the modal's default selection.
    musicProvider?: MusicProvider;
    // Lyric structure template chosen at creation. Drives the structure-guide
    // banner shown in the write view so user/char don't write randomly.
    lyricTemplate?: string;
}

// --- DATE APP TYPES ---
export interface DialogueItem {
    text: string;
    emotion?: string;
}

export interface DateState {
    dialogueQueue: DialogueItem[];
    dialogueBatch: DialogueItem[];
    currentText: string;
    bgImage: string;
    currentSprite: string;
    isNovelMode: boolean;
    timestamp: number;
    peekStatus: string; 
}


export interface SpecialMomentRecord {
    content: string;
    image?: string; // base64 PNG (stored separately so export tools can handle it)
    timestamp: number;
    source?: 'generated' | 'migrated';
    /** Free-form per-event extra data (e.g. like520 captureface state, anchors, etc.) */
    customData?: Record<string, any>;
}

// --- BANK / SHOP GAME TYPES (NEW) ---
export interface BankTransaction {
    id: string;
    amount: number;
    category: string;
    note: string;
    timestamp: number;
    dateStr: string; // YYYY-MM-DD
    /** 杩涜处 / 鏀嚭銆傞粯璁?expense锛堝吋瀹规棫鏁版嵁锛?*/
    type?: 'income' | 'expense';
    /** 鑷姩娴佹按鏉ユ簮锛屽鐢熸椿鎷?/ 蹇冩剰閾?/ 楗エ / 鑱婂ぉ銆?*/
    sourceApp?: string;
    /** 鏉ユ簮涓氬姟 id锛屽璁㈠崟 id銆佸矖浣?id銆佽偂绁ㄤ唬鐮併€?*/
    sourceId?: string;
    /** 鏇寸粏鐨勮祫閲戞祦绫诲瀷锛歴alary / shop / stock / loan / company / shopping 绛夈€?*/
    kind?: string;
    /** 鏄惁鐢遍挶鍖呭彉鍔ㄨ嚜鍔ㄧ敓鎴愩€?*/
    auto?: boolean;
    /** 杩欑瑪鍙樺姩鍚庣殑閽卞寘浣欓銆?*/
    balanceAfter?: number;
    /** 鍒涘缓鑰咃細user 鎵嬪姩 / system 鑷姩 / character 瑙掕壊渚х敓鎴愩€?*/
    createdBy?: 'user' | 'system' | 'character';
    /** 鍏宠仈瀹炰綋 id锛屽鍏徃 id銆佽捶娆?id銆佹寔浠撲唬鐮併€?*/
    relatedEntityId?: string;
    /** 瑙掕壊瀵硅繖绗旂幇瀹炶处鐩殑鐐硅瘎锛圓I 鐢熸垚锛屼竴绗斾竴鏉★級 */
    charComment?: { charId: string; charName: string; text: string; ts: number };
}

export interface AdjustBalanceMeta {
    note?: string;
    category?: string;
    sourceApp?: string;
    sourceId?: string;
    kind?: string;
    relatedEntityId?: string;
    createdBy?: 'user' | 'system' | 'character';
    /** false = 鍙敼浣欓锛屼笉鑷姩鐢熸垚鐢熸椿鎷熸祦姘淬€?*/
    ledger?: boolean;
}

/** 璐︽湰閲屼竴鏉¤瘎璁猴紙鐢ㄦ埛 鈫?瑙掕壊浜掕瘎锛?*/
export interface LedgerComment {
    author: 'user' | 'character';
    text: string;
    ts: number;
}

/**
 * 瑙掕壊璐︽湰锛氳鑹叉寜浜鸿缁欒嚜宸辫鐨勪竴鏉¤处锛圓I 鐢熸垚鐨勮繘璐?鏀嚭锛夛紝
 * 鐢ㄦ埛鍙湪涓嬮潰鐣欒█璇勮锛岃鑹蹭細 AI 鍥炲銆備笌鐢ㄦ埛閽卞寘銆佸簵閾哄潎鏃犲叧銆?
 */
export interface CharLedgerEntry {
    id: string;
    charId: string;
    type: 'income' | 'expense';
    amount: number;
    note: string;
    dateStr: string;   // YYYY-MM-DD
    ts: number;
    comments?: LedgerComment[];
}

export interface SavingsGoal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number; 
    icon: string;
    isCompleted: boolean;
}

export interface ShopStaff {
    id: string;
    name: string;
    avatar: string; // Emoji or URL
    role: 'manager' | 'waiter' | 'chef';
    fatigue: number; // 0-100, >80 stops working
    maxFatigue: number;
    hireDate: number;
    personality?: string; // New: Custom personality
    x?: number; // New: Position X (0-100)
    y?: number; // New: Position Y (0-100)
    // Pet System
    ownerCharId?: string; // If set, this staff is a "pet" belonging to this character
    isPet?: boolean; // Flag to indicate this is a pet
    scale?: number; // Display scale (0.4-2)
}

export interface ShopRecipe {
    id: string;
    name: string;
    icon: string;
    cost: number; // AP cost to unlock
    appeal: number; // Contribution to shop appeal
    isUnlocked: boolean;
    /** 鍞环锛氳惀涓氭椂姣忓崠鍑轰竴浠界殑鏀跺叆锛堣繘閽卞寘锛夈€傛湭璁惧垯鐢?appeal 浼扮畻銆?*/
    price?: number;
}

/** 涓€鏉￠【瀹㈣瘎浠凤紙钀ヤ笟鏃剁敱 NPC / 瑙掕壊椤惧鐣欎笅锛屽奖鍝嶅簵閾哄彛纰戯級 */
export interface ShopReview {
    id: string;
    authorName: string;
    avatar: string;       // emoji 鎴?URL
    rating: number;       // 1~5 鏄?
    text: string;
    productName?: string; // 鐐圭殑浠€涔?
    ts: number;
    isNpc?: boolean;
    aiPending?: boolean;  // 宸叉彁浜?AI 娑﹁壊銆佺瓑寰呰繑鍥烇紙UI 鍙樉绀恒€屽浜烘鍦ㄥ啓鈥︺€嶏級
}

/** 鍥炲ご瀹?/ VIP锛氱疮璁″埌璁匡紙鎴愬姛娑堣垂锛夎秺澶氾紝瓒婂繝璇氣€斺€斿父瀹㈠皬璐规洿楂樸€佽瘎鍒嗘洿绋炽€?*/
export interface ShopRegular {
    id: string;        // 'npc:鍚嶅瓧' 鎴?'char:瑙掕壊id'
    name: string;
    avatar: string;    // emoji 鎴?URL
    isNpc: boolean;
    visits: number;    // 绱鎴愬姛娑堣垂娆℃暟
}

export interface BankConfig {
    dailyBudget: number;
    currencySymbol: string;
}

export interface BankGuestbookItem {
    id: string;
    authorName: string;
    avatar?: string;
    content: string;
    isChar: boolean;
    charId?: string;
    timestamp: number;
    systemMessageId?: number; // Linked system message ID for deletion
}

// --- DOLLHOUSE / ROOM DECORATION TYPES ---
export interface DollhouseSticker {
    id: string;
    url: string;       // image URL or emoji
    x: number;         // % position within the surface
    y: number;
    scale: number;
    rotation: number;
    zIndex: number;
    surface: 'floor' | 'leftWall' | 'rightWall';
}

export interface DollhouseRoom {
    id: string;
    name: string;
    floor: number;         // 0 = ground floor, 1 = second floor
    position: 'left' | 'right';
    isUnlocked: boolean;
    layoutId: string;      // references a RoomLayout template
    wallpaperLeft?: string;  // CSS gradient or image URL
    wallpaperRight?: string;
    floorStyle?: string;     // CSS gradient or image URL
    roomTextureUrl?: string; // optional full-room overlay image
    roomTextureScale?: number;
    stickers: DollhouseSticker[];
    staffIds: string[];      // staff assigned to this room
}

export interface RoomLayout {
    id: string;
    name: string;
    icon: string;
    description: string;
    apCost: number;
    floorWidthRatio: number;   // relative width (0-1)
    floorDepthRatio: number;   // relative depth (0-1)
    hasCounter: boolean;
    hasWindow: boolean;
}

export interface DollhouseState {
    rooms: DollhouseRoom[];
    activeRoomId: string | null;   // currently zoomed-in room
    selectedLayoutId?: string;
}

export interface BankShopState {
    actionPoints: number;
    shopName: string;
    shopLevel: number;
    appeal: number; // Total Appeal
    background: string; // Custom BG
    staff: ShopStaff[];
    unlockedRecipes: string[]; // IDs
    activeVisitor?: {
        charId: string;
        message: string;
        timestamp: number;
        giftAp?: number; // Optional gift from visitor
        roomId?: string;
        x?: number;
        y?: number;
        scale?: number;
    };
    guestbook?: BankGuestbookItem[];
    dollhouse?: DollhouseState;
    /** 涓婃銆岃惀涓氥€嶇粨绠楃殑鏃堕棿鎴筹紙鐢ㄤ簬钀ヤ笟鍐峰嵈锛?*/
    lastBusinessAt?: number;
    /** 搴楅摵绱钀ヤ笟棰濓紙杩涜繃閽卞寘鐨勬€绘敹鍏ワ紝浠呬綔灞曠ず缁熻锛?*/
    totalRevenue?: number;
    /** 椤惧璇勪环锛堟渶杩戣嫢骞叉潯锛岃惀涓氭椂浜х敓锛屽喅瀹氬彛纰戣瘎鍒嗭級 */
    reviews?: ShopReview[];
    /** 鍚勫晢鍝佸簱瀛橈紙recipeId 鈫?鍓╀綑浠芥暟锛夈€傝惀涓氬崠鍑烘墸鍑忥紝杩涜揣鑺遍挶琛ュ厖銆?*/
    stock?: Record<string, number>;
    /** 鍥炲ご瀹?/ VIP锛坕dentity id 鈫?璁板綍锛夈€傝惀涓氭椂绱鍒拌锛屽父瀹細鍥炲ご鍏夐【銆?*/
    regulars?: Record<string, ShopRegular>;
    /** 鎸傛満钀ヤ笟棰濓細绂诲簵鏈熼棿鎸佺画绱銆佺偣閲戝竵鏀惰繘閽卞寘锛堜笂闄愯 IDLE_CAP_HOURS锛夈€?*/
    pendingRevenue?: number;
    /** 涓婃鎶婃祦閫濇椂闂存姌绠楁垚 pendingRevenue 鐨勯敋鐐规椂闂存埑銆?*/
    lastAccrualAt?: number;
    /** 褰撳墠澶╂皵/闄愭椂浜嬩欢锛堝奖鍝嶅娴佷笌鎸傛満浜у嚭锛夛紝鍒版湡鍚庨殢鏈哄垏鎹€?*/
    weather?: { id: string; until: number };
}

export type BankJobPayCycle = 'daily' | 'monthly';
export type BankJobApplicationStatus = 'hired' | 'trial' | 'rejected' | 'scammed';
export type BankJobApplicationStage = 'submitted' | 'screening' | 'assessment' | 'interview' | 'offer' | 'hired' | 'trial' | 'rejected' | 'scammed';
export type BankLoanChannel = 'bank' | 'formal' | 'shady';
export type BankLifeSeason = 'spring' | 'summer' | 'autumn' | 'winter';
export type BankLifePlanKind = 'work' | 'shop' | 'interview' | 'company' | 'loan' | 'invest' | 'rest';

export interface BankLifeDailyPlanItem {
    id: string;
    kind: BankLifePlanKind;
    label: string;
    detail: string;
    done?: boolean;
    tone?: 'good' | 'warn' | 'bad' | 'info';
}

export interface BankBusinessTemplate {
    id: string;
    name: string;
    icon: string;
    vibe: string;
    customerGroups: string[];
    margin: number;
    risk: 1 | 2 | 3 | 4 | 5;
    products: { id: string; name: string; price: number; cost: number; appeal: number }[];
    events: string[];
}

export interface BankLifeShopProduct {
    id: string;
    name: string;
    price: number;
    cost: number;
    stock: number;
    appeal: number;
}

export interface BankJobPosting {
    id: string;
    category: string;
    title: string;
    employer: string;
    salaryMin: number;
    salaryMax: number;
    payCycle: BankJobPayCycle;
    payDay?: number;
    intensity: number; // 1-5
    requirements: string[];
    benefits: string[];
    riskTags: string[];
    description: string;
    location?: string;
    education?: string;
    experienceRequired?: string;
    workTime?: string;
    companySize?: string;
    tags?: string[];
    bossName?: string;
    bossTitle?: string;
    companyIntro?: string;
    black?: boolean;
    successBias?: number;
}

export interface BankJobEmployment extends BankJobPosting {
    startedAt: string;
    accruedWage: number;
    daysWorked: number;
    trialUntil?: string;
}

export interface BankJobApplication {
    id: string;
    postingId: string;
    title: string;
    employer: string;
    status: BankJobApplicationStatus;
    stage?: BankJobApplicationStage;
    score?: number;
    questions?: { id: string; question: string; answer?: string; score?: number }[];
    offerSalary?: number;
    riskNote?: string;
    chatMessages?: { role: 'boss' | 'user' | 'system'; content: string; at: string }[];
    resumeSnapshot?: BankResumeProfile;
    aiReview?: { score: number; strengths: string[]; weaknesses: string[]; suggestion: string };
    dateStr: string;
    message: string;
}

export interface BankPendingWage {
    id: string;
    title: string;
    employer: string;
    amount: number;
    payDate: string;
    note: string;
}

export interface BankStockQuote {
    symbol: string;
    name: string;
    industry: string;
    price: number;
    previousPrice: number;
    changePct: number;
    trend: 'up' | 'flat' | 'down';
    risk: 1 | 2 | 3 | 4 | 5;
    news: string;
    eventTags?: string[];
    open?: number;
    high?: number;
    low?: number;
    marketCap?: number;
    pe?: number;
    turnoverRate?: number;
    bidAsk?: { bid: number; ask: number; bidVolume: number; askVolume: number };
    newsList?: { id: string; title: string; source: string; dateStr: string; tone?: 'good' | 'warn' | 'bad' | 'info' }[];
    history?: { dateStr: string; open: number; high: number; low: number; close: number; volume: number }[];
    intraday?: { time: string; price: number; volume: number }[];
    aiReason?: string;
}

export interface BankStockHolding {
    symbol: string;
    shares: number;
    avgCost: number;
}

export interface BankCompanyState {
    id: string;
    name: string;
    direction: string;
    cash: number;
    reputation: number;
    employees: number;
    stress: number;
    cumulativeProfit: number;
    foundedAt: string;
    cashflow?: { dateStr: string; revenue: number; cost: number; profit: number; note: string }[];
    orders?: { id: string; title: string; client: string; value: number; difficulty: number; status: 'open' | 'active' | 'done' | 'lost' }[];
    risks?: string[];
    pendingIssue?: {
        id: string;
        title: string;
        description: string;
        kind?: 'order' | 'employee' | 'marketing' | 'tax' | 'risk' | 'cashflow';
        options: { id: string; label: string; cashDelta: number; reputationDelta: number; stressDelta: number; employeeDelta?: number; orderId?: string }[];
    };
}

export interface BankLoan {
    id: string;
    channel: BankLoanChannel;
    productName?: string;
    principal: number;
    outstanding: number;
    interestDue: number;
    dailyRate: number;
    borrowedAt: string;
    dueDate: string;
    overdueDays: number;
    note: string;
    reviewStatus?: 'approved' | 'rejected' | 'manual';
    contractTerms?: string[];
    repaymentPlan?: { dueDate: string; amount: number; status: 'pending' | 'paid' | 'overdue' }[];
    creditProfile?: BankLoanCreditProfile;
    reviewReason?: string;
    serviceFee?: number;
    collectionRisk?: string;
}

export interface BankLifeEvent {
    id: string;
    dateStr: string;
    title: string;
    detail: string;
    tone?: 'good' | 'warn' | 'bad' | 'info';
    amount?: number;
}

export interface BankLifeAiEvent extends BankLifeEvent {
    source?: 'ai' | 'system';
    category?: 'daily' | 'career' | 'market' | 'company' | 'loan' | 'shop';
    choices?: { id: string; label: string; effectHint: string }[];
}

export interface BankResumeProfile {
    name: string;
    headline: string;
    expectedSalaryMin?: number;
    expectedSalaryMax?: number;
    expectedCategories: string[];
    skills: string[];
    experience: { id: string; title: string; company: string; detail: string }[];
    education?: string;
    selfIntro: string;
    updatedAt: number;
}

export interface BankJobSearchSession {
    id: string;
    query: string;
    category: string;
    filters: {
        salaryMin?: number;
        payCycle?: BankJobPayCycle | 'any';
        risk?: 'any' | 'safe' | 'high-risk';
        location?: string;
    };
    generatedAt: string;
    source: 'preset' | 'ai';
}

export interface BankMarketPulse {
    id: string;
    dateStr: string;
    headline: string;
    summary: string;
    affectedSymbols: string[];
    sentiment: 'bullish' | 'neutral' | 'bearish';
    source: 'ai' | 'system';
}

export interface BankLoanCreditProfile {
    score: number;
    incomeStability: number;
    debtPressure: number;
    repaymentHistory: number;
    riskLevel: 'low' | 'medium' | 'high' | 'danger';
    reasons: string[];
    updatedAt: string;
}

export interface BankLifeState {
    version: number;
    dateStr: string;
    dayIndex: number;
    weekDay: number;
    season: BankLifeSeason;
    mood: number;
    energy: number;
    health: number;
    dailyPlan: BankLifeDailyPlanItem[];
    shopUnlocked: boolean;
    shopBusinessType?: string;
    shopBusinessName?: string;
    shopProducts?: BankLifeShopProduct[];
    shopCustomers?: string[];
    shopEvents?: BankLifeEvent[];
    currentJob?: BankJobEmployment;
    jobHistory: BankJobApplication[];
    pendingWages: BankPendingWage[];
    fatigue: number;
    reputation: number;
    experience: Record<string, number>;
    stockMarket: BankStockQuote[];
    holdings: Record<string, BankStockHolding>;
    watchlist: string[];
    company?: BankCompanyState;
    loans: BankLoan[];
    events: BankLifeEvent[];
    aiEvents?: BankLifeAiEvent[];
    resume?: BankResumeProfile;
    jobSearchSessions?: BankJobSearchSession[];
    aiJobPostings?: BankJobPosting[];
    marketPulses?: BankMarketPulse[];
    creditProfile?: BankLoanCreditProfile;
    aiLastGeneratedAt?: Record<string, string>;
}

export interface BankFullState {
    config: BankConfig;
    shop: BankShopState;
    life?: BankLifeState;
    goals: SavingsGoal[];
    firedStaff?: ShopStaff[]; // Fired staff pool: can rehire or permanently delete
    todaySpent: number;
    lastLoginDate: string;
    dataVersion?: number; // Migration version tracker (undefined = v0/v1 legacy)
}
// ---------------------------------

// --- CHAR MUSIC PROFILE (缃戞槗浜戦鏍?路 瑙掕壊鐨勯煶涔愪汉鏍? ---

/** 瑙掕壊鏈湴姝屽崟閲岀殑杞婚噺姝屾洸蹇収 鈥?瀛楁涓?MusicContext 鐨?Song 瀵归綈锛堟棤杩愯鏃?url锛?*/
export interface CharPlaylistSong {
    id: number;
    name: string;
    artists: string;
    album: string;
    albumPic: string;
    duration: number;
    fee: number;
    /**
     * 'user' = 杩欓鏄粠 user 閭ｉ噷"鎶?杩囨潵鐨勶紙user 鍦ㄥ惉 鈫?char 鍔犺繘鑷繁姝屽崟锛夈€?
     * 'discovered' = char 鑷繁鎺㈢储 / 鍒濆鍖栨椂鎵惧埌鐨勩€?
     * 涓嶅啓榛樿鎸?'discovered' 澶勭悊锛堝悜鍚庡吋瀹瑰凡鏈夋暟鎹級銆?
     * 鐢ㄩ€旓細褰?char 鍚庣画"鍦ㄥ惉"杩欓鏃讹紝prompt 浼氬憡璇?LLM "杩欐槸浠?user 閭ｅ効鏀舵潵鐨?锛?
     * 璁╄蹇?瀵硅瘽鑳借嚜鐒跺甫涓婅繖灞傚叧绯伙紝鑰屼笉鏄綋鎴愪竴棣栦腑绔嬬殑姝屻€?
     */
    source?: 'user' | 'discovered';
    /** 鍔犲叆姝屽崟鏃堕棿锛岀敤鏉ユ帓搴?/ 鏄剧ず"鏈€杩戞敹钘? */
    addedAt?: number;
}

export interface CharPlaylist {
    id: string;                 // 鏈湴 id (涓嶄笌缃戞槗浜?playlistId 鍐茬獊)
    title: string;
    description: string;        // 瑙掕壊鑷繁鍐欑殑姝屽崟绠€浠?
    coverStyle: string;         // 娓愬彉鑹叉爣璇?or 绗竴棣栨瓕灏侀潰
    songs: CharPlaylistSong[];
    mood?: SongMood;
    createdAt: number;
    updatedAt: number;
}

export interface CharPlayRecord {
    song: CharPlaylistSong;
    at: number;                 // 鎾斁鏃堕棿鎴筹紙鐪熷疄鏃堕棿锛?
    context?: string;           // 璇ユ椂鍒荤殑蹇冨澶囨敞锛屽 "澶辩湢鐨勬椂鍊?
}

export interface CharMusicReview {
    id: string;
    targetType: 'song' | 'user_playlist' | 'user_record';
    targetId: string;           // songId or playlistId as string
    targetTitle: string;        // 姝屽悕 / 姝屽崟鍚?
    content: string;            // 璇勮姝ｆ枃
    createdAt: number;
}

/** 杩愯鏃?姝ゅ埢鍦ㄥ惉" 鈥?鏍规嵁 Schedule 鍐冲畾锛屼笉蹇呮寔涔呭寲锛堝彲浠ラ殢鏃?recompute锛?*/
export interface CharCurrentListening {
    songId: number;
    songName: string;
    artists: string;
    albumPic: string;
    /** 蹇冨 / 閫夋洸鐞嗙敱锛堟潵鑷?slot.innerThought 鎴?description锛?*/
    vibe?: string;
    startedAt: number;
}

export interface CharMusicProfile {
    /** 闊充箰鍝佸懗绠€浠嬶紙LLM 鍒濆鍖栫敓鎴愶級 */
    bio: string;
    /** 鏇查鏍囩锛堝彲闅忓惉姝屾紨鍖栵級 */
    genreTags: string[];
    /** 鍋忕埍鐨勮壓浜?*/
    signatureArtists: { name: string; artistId?: number }[];
    /** 鏈湴姝屽崟鍒楄〃 */
    playlists: CharPlaylist[];
    /** 浠?likelist */
    likedSongIds: number[];
    /** 鏈€杩戝湪鍚紙浠?user/record锛?*/
    recentPlays: CharPlayRecord[];
    /** 绉佷汉 FM 鍏抽敭璇嶇瀛愶紙鐣欑粰鏈潵鍋?char FM锛?*/
    fmSeed?: string;
    /** 瑙掕壊瀵规瓕/user 姝屽崟鐨勭偣璇?*/
    reviews?: CharMusicReview[];
    /** 姝ゅ埢鍦ㄥ惉锛圫chedule 杩愯鏃跺～鍏咃紝UI 灞曠ず鐢級 */
    currentListening?: CharCurrentListening;
    /** 鏄惁鍏佽 char 璇诲彇 user 鐨勭綉鏄撲簯鏁版嵁锛堥粯璁?true锛?*/
    canReadUserMusic?: boolean;
    /** 鍦ㄧ嚎涓€璧峰惉寮€鍏筹細寮€鍚椂 char 鍙湪浣犲惉姝屾椂銆屼竴璧峰惉銆嶏紙杈撳嚭 join 鍗＄墖锛夛紱
     *  鍏抽棴鍒欎笉鍐嶆彁渚涗竴璧峰惉閫夐」锛堜粛鍙敹姝?鍒嗕韩锛夈€倁ndefined 瑙嗕负寮€鍚紙榛樿琛屼负锛夈€?*/
    listenTogetherEnabled?: boolean;
    /** 鍒濆鍖栨椂闂?*/
    initializedAt?: number;
    updatedAt: number;
}

/**
 * 瑙掕壊绂荤嚎鑷富鐢熸椿浜嬩欢 鈥斺€?鐢?utils/autonomousLife.ts 鐨?agent 鐢熸垚銆?
 * 瑙掕壊鍦ㄧ敤鎴风绾?/ 娌″湪鑱婂ぉ鏃躲€岃繃鑷繁鐨勬棩瀛愩€嶏紝姣忔潯浜嬩欢浠ｈ〃 TA 姝ｅ湪鎴栧垰鍒氱粡鍘嗙殑
 * 涓€浠跺皬浜嬶紙涓婄彮銆佸悆楗€佽拷鍓с€佸拰鏈嬪弸鍑洪棬銆乪mo鈥︼級銆傝繖浜涗簨浠舵湁涓や釜鍑哄彛锛?
 *  1. 缁欎富鍔ㄦ秷鎭彇鏉?鈥斺€?瑙掕壊鍒嗕韩鑷繁鐨勭敓娲伙紝鑰屼笉鏄弽澶嶅偓鐢ㄦ埛鍥炲锛堜笉鍥寸潃鐢ㄦ埛杞級锛?
 *  2. 鏀掓垚銆屼綘涓嶅湪鏃?TA 缁忓巻浜嗏€︺€嶇殑绂荤嚎鍔ㄦ€佸洖椤炬椂闂寸嚎锛堟潵寰€ App 鍐呭彲鏌ョ湅锛夈€?
 */
export type CharLifeEventKind =
  | 'routine'
  | 'work'
  | 'study'
  | 'social'
  | 'errand'
  | 'rest'
  | 'media'
  | 'food'
  | 'travel'
  | 'health'
  | 'emotion'
  | 'relationship'
  | 'accident'
  | 'other';

export type CharLifeEnergy = 'low' | 'medium' | 'high';

export type CharLifeProactiveAngle =
  | 'share'
  | 'vent'
  | 'ask'
  | 'tease'
  | 'care'
  | 'invite'
  | 'followup'
  | 'silence'
  | 'other';

export type CharLifeTriggerSource = 'proactive' | 'leave' | 'catchup' | 'sw' | 'manual';

export interface CharLifeEvent {
  /** `life_${charId}_${timestamp}_${rand}` */
  id: string;
  charId: string;
  /** 浜嬩欢鍙戠敓鏃跺埢锛坢s锛夈€傚洖椤炬寜瀹冩帓搴?/ 鍒嗙粍銆?*/
  timestamp: number;
  /** 涓€鍙ヨ瘽娲诲姩锛屽銆屽湪鍏徃璧舵柟妗堛€嶃€岀獫鍦ㄦ矙鍙戣拷鍓с€?*/
  activity: string;
  /** 褰撲笅蹇冩儏锛屼竴涓や釜璇嶆垨 emoji锛屽銆屾湁鐐圭疮銆嶃€岎煒?鎯剰銆?*/
  mood?: string;
  /** 鍙€夊湴鐐癸紝濡傘€屽叕鍙搞€嶃€屾ゼ涓嬪挅鍟″簵銆?*/
  location?: string;
  /** 鐢ㄤ簬閫氱煡 / 鍥為【鐨勭畝鐭憳瑕侊紙閫氬父绛変簬 activity锛屾垨鏇村彛璇殑涓€鍙ヨ瘽锛?*/
  summary: string;
  /** 鏄惁宸蹭綔涓轰富鍔ㄦ秷鎭彂缁欑敤鎴凤紙鍥為【閲屾嵁姝ゆ爣娉ㄣ€屽凡缁忚窡浣犺杩囥€嶏紝閬垮厤閲嶅寮鸿皟锛?*/
  surfacedAsMsg?: boolean;
  /** 瀹為檯浣滀负涓诲姩娑堟伅鍙戝嚭鐨勬椂鍒伙紱鏃ф暟鎹彲鑳藉彧鏈?surfacedAsMsg銆?*/
  surfacedAt?: number;
  /** 鐢熸垚鏉ユ簮锛歱roactive 瑙﹀彂鏃堕『甯︾敓鎴?/ 鐢ㄦ埛绂荤嚎鍥炴潵鏃惰ˉ榻?*/
  source: 'proactive' | 'catchup';
  /** v2锛氫簨浠剁被鍨嬶紝鐢ㄤ簬鍥為【鏍囩銆佷富鍔ㄦ秷鎭彇鏉愬拰鍘婚噸銆?*/
  eventKind?: CharLifeEventKind;
  /** v2锛氬綋涓嬭兘閲忥紝褰卞搷涓诲姩娑堟伅鐭績/鐑儓绋嬪害銆?*/
  energy?: CharLifeEnergy;
  /** v2锛氫簨浠跺己搴?0-100锛涜秺楂樿秺瀹规槗鍙樻垚涓诲姩鏉ヤ俊銆?*/
  intensity?: number;
  /** v2锛氬垎浜剰鎰?0-100锛涙櫤鑳借Е鍙戜綆浜庨槇鍊兼椂鍙褰曠敓娲汇€佷笉鎵撴壈鐢ㄦ埛銆?*/
  shareWillingness?: number;
  /** v2锛氳繛缁嚎绱紝渚嬪鈥滄病鐫″ソ->涓嬪崍浣庢皵鍘嬧€濓紝璁╃绾跨敓娲绘洿鍍忓悓涓€澶┿€?*/
  thread?: string;
  /** v2锛氬鏋滆鍙戜富鍔ㄦ秷鎭紝鏇撮€傚悎鐨勫紑鍙ｈ搴︺€?*/
  proactiveAngle?: CharLifeProactiveAngle;
  /** v2锛氳繖鏉′簨浠剁敱鍝被瑙﹀彂浜х敓銆?*/
  triggerSource?: CharLifeTriggerSource;
}

// =====================================================================
// 寰抗 App 鈥?瑙掕壊 Screenlife 婕斿嚭 + 寮傚湴鎭嬬洃瑙?鎶ュ妯℃嫙
// =====================================================================

export type XunjiTab = 'screenlife' | 'monitor' | 'report' | 'settings';
export type XunjiNetworkType = 'wifi' | 'mobile';
export type XunjiCallStatus = 'outgoing' | 'incoming' | 'missed' | 'connected';
export type XunjiBatteryEventType = 'charge_start' | 'charge_end';
export type XunjiDensity = 'light' | 'standard' | 'detailed';
export type XunjiTransport = 'walk' | 'bike' | 'car' | 'subway' | 'bus';
export type XunjiReportSeverity = 'info' | 'notice' | 'warning';
export type XunjiReportType =
  | 'unlock_count'
  | 'network_switch'
  | 'app_open'
  | 'app_close'
  | 'app_hourly'
  | 'charge_start'
  | 'charge_end'
  | 'move_start'
  | 'stay'
  | 'transit'
  | 'arrive'
  | 'call_start'
  | 'call_10min'
  | 'sleep_phone_off'
  | 'sleep_late_reminder'
  | 'sleep_5h'
  | 'sleep_end';

export interface XunjiSocialInference {
  mood: string;
  relationshipPulse: string;
  screenlifeScore: number;
  intimacySignals: string[];
  frictionSignals: string[];
  likelyNeeds: string[];
  nextConversationSeeds: string[];
  whisperHooks: string[];
}

export interface XunjiGeneratedMoment {
  id: string;
  time: number;
  title: string;
  body: string;
  tone: 'soft' | 'busy' | 'private' | 'social' | 'alert';
  relatedApp?: string;
}

export interface XunjiAppUsageSession {
  id: string;
  appName: string;
  icon?: string;
  category?: string;
  startedAt: number;
  endedAt: number;
  note?: string;
}

export interface XunjiNetworkRecord {
  id: string;
  type: XunjiNetworkType;
  name: string;
  timestamp: number;
}

export interface XunjiLocationPoint {
  id: string;
  label: string;
  address: string;
  lat?: number;
  lng?: number;
  arrivedAt: number;
  leftAt?: number;
  moveMinutes?: number;
  stayMinutes?: number;
  transport?: XunjiTransport;
}

export interface XunjiHealthSnapshot {
  timestamp: number;
  stressLabel: string;
  hrvAvg: number;
  hrvCurrent: number;
  hrvTrend: number[];
  heartRateMin: number;
  heartRateMax: number;
  heartRateLatest: number;
  heartRateTrend: number[];
  sleepMinutes: number;
  sleepQuality: string;
  sleep: {
    asleepAt: number;
    awakeAt: number;
    awakeMinutes: number;
    remMinutes: number;
    coreMinutes: number;
    deepMinutes: number;
  };
  steps: number;
  walkingKm: number;
  dayStepTrend: number[];
  weekStepTrend: number[];
}

export interface XunjiCallRecord {
  id: string;
  target: string;
  startedAt: number;
  durationMinutes: number;
  status: XunjiCallStatus;
}

export interface XunjiBatteryEvent {
  id: string;
  type: XunjiBatteryEventType;
  timestamp: number;
  level: number;
}

export interface XunjiScreenlifeRun {
  id: string;
  charId: string;
  createdAt: number;
  rangeStart: number;
  rangeEnd: number;
  density: XunjiDensity;
  writeBack: boolean;
  title: string;
  narrative: string;
  chats: { id: string; time: number; target: string; summary: string; messages: string[] }[];
  browsed: { id: string; time: number; appName: string; title: string; summary: string }[];
  notes: { id: string; time: number; text: string }[];
  appUsage: XunjiAppUsageSession[];
  socialInference?: XunjiSocialInference;
  moments?: XunjiGeneratedMoment[];
}

export interface XunjiMonitorSnapshot {
  id: string;
  charId: string;
  generatedAt: number;
  phoneModel: string;
  batteryLevel: number;
  isCharging: boolean;
  unlockCount: number;
  screenTimeMinutes: number;
  lockPeriods: { id: string; startedAt: number; endedAt: number }[];
  appUsage: XunjiAppUsageSession[];
  networks: XunjiNetworkRecord[];
  locations: XunjiLocationPoint[];
  distanceKm: number;
  health: XunjiHealthSnapshot;
  calls: XunjiCallRecord[];
  batteryEvents: XunjiBatteryEvent[];
}

export interface XunjiReportItem {
  id: string;
  charId: string;
  type: XunjiReportType;
  timestamp: number;
  title: string;
  body: string;
  severity?: XunjiReportSeverity;
  relatedApp?: string;
  acknowledged?: boolean;
  writtenBack?: boolean;
}

export interface XunjiSettings {
  id: 'settings';
  activeCharId?: string;
  writeBackToCharacter: boolean;
  /** 绲鑱斿姩锛氭妸鏈€鏂板惊杩规紨鍑?/ 鐩戣 / 鎶ュ浣滀负瑙掕壊鍙劅鐭ョ殑杩戞湡鐢熸椿鐥曡抗娉ㄥ叆鑱婂ぉ涓婁笅鏂囥€?*/
  chatContextEnabled?: boolean;
  /** 鐐逛寒杩囦竴娆″悗锛屽惊杩逛細鎸夋椂闂翠负璇ヨ鑹茬画涓婃柊鐨勭敓娲荤棔杩广€傞粯璁ゅ紑鍚€?*/
  autoTraceEnabled?: boolean;
  /** per-char 鐨勮嚜鍔ㄧ画鍐欐按浣嶏紝閬垮厤鍚屼竴娈垫椂闂磋閲嶅鐢熸垚銆?*/
  autoTraceLastAtByChar?: Record<string, number>;
  defaultDensity: XunjiDensity;
  locationSource?: 'character' | 'browser';
  customLocation?: string;
  customLocationUpdatedAt?: number;
  browserLocation?: {
    lat: number;
    lng: number;
    accuracy?: number;
    capturedAt: number;
  };
  reportRules: Record<XunjiReportType, boolean>;
}

export type ScreenPeekCommentTrigger = 'session_start' | 'app_switch' | 'dwell' | 'manual' | 'resume' | 'permission';
export type ScreenPeekCommentTone = 'soft' | 'tease' | 'curious' | 'alert' | 'quiet';

export interface ScreenPeekObservedApp {
  appId?: AppID | string;
  appName: string;
  packageName?: string;
  isMoro?: boolean;
  isSystem?: boolean;
  durationMinutes?: number;
  lastTimeUsed?: number;
  startedAt?: number;
  endedAt?: number;
  category?: string;
  note?: string;
}

export interface ScreenPeekCaptureFrame {
  source: 'android_media_projection';
  capturedAt: number;
  width?: number;
  height?: number;
  dataUrl: string;
  mimeType?: string;
}

export interface ScreenPeekDeviceSnapshot {
  source: 'android_screen_capture' | 'android_usage_stats' | 'unsupported' | 'permission_required' | 'screen_capture_permission_required';
  native?: boolean;
  platform?: string;
  packageName?: string;
  capturedAt?: number;
  rangeStart?: number;
  rangeEnd?: number;
  usageAccessGranted?: boolean;
  canOpenUsageAccessSettings?: boolean;
  screenCaptureActive?: boolean;
  overlayPermissionGranted?: boolean;
  canOpenOverlaySettings?: boolean;
  screenFrame?: ScreenPeekCaptureFrame;
  currentForegroundApp?: ScreenPeekObservedApp;
  lastExternalApp?: ScreenPeekObservedApp;
  appUsage?: ScreenPeekObservedApp[];
  batteryLevel?: number;
  isCharging?: boolean;
  networkLabel?: string;
  deviceLabel?: string;
  screenTimeMinutes?: number;
  unlockCount?: number;
  unavailableReason?: string;
}

export interface ScreenPeekLiveComment {
  id: string;
  createdAt: number;
  trigger: ScreenPeekCommentTrigger;
  observedAppId?: string;
  observedAppName?: string;
  observedPackageName?: string;
  observedScreenCapturedAt?: number;
  deviceSnapshotSource?: ScreenPeekDeviceSnapshot['source'];
  text: string;
  tone?: ScreenPeekCommentTone;
}

export interface ScreenPeekCard {
  id: string;
  charId: string;
  charName: string;
  generatedAt: number;
  title: string;
  narrative: string;
  viewTarget?: 'char_phone' | 'user_phone';
  screen?: {
    appKind: 'chat' | 'takeout' | 'browser' | 'notes' | 'gallery' | 'music' | 'map' | 'social' | 'calendar' | 'app' | 'home';
    appName: string;
    title: string;
    subtitle?: string;
    action?: string;
    layout?: 'feed' | 'detail' | 'favorite' | 'search' | 'compose' | 'article' | 'day' | 'month' | 'player' | 'route' | 'store' | 'generic';
    url?: string;
    timeText?: string;
    batteryLevel?: number;
    wallpaper?: string;
    avatar?: string;
    contactName?: string;
    contactAvatar?: string;
    tabs?: string[];
    activeTab?: string;
    messages?: { id: string; side: 'left' | 'right' | 'center'; text?: string; imageUrl?: string; senderName?: string }[];
    rows?: { id: string; title: string; subtitle?: string; body?: string; meta?: string; imageUrl?: string; badge?: string }[];
    notes?: { id: string; text: string; meta?: string }[];
    hero?: { title?: string; subtitle?: string; imageUrl?: string };
  };
  chats: { id: string; time: number; target: string; summary: string; messages: string[] }[];
  browsed: { id: string; time: number; appName: string; title: string; summary: string }[];
  notes: { id: string; time: number; text: string }[];
  moments?: XunjiGeneratedMoment[];
  sourceRunId?: string;
  deviceSnapshot?: ScreenPeekDeviceSnapshot;
  liveComments?: ScreenPeekLiveComment[];
}

export interface ScreenPeekCommentSession {
  id: string;
  messageId: number;
  charId: string;
  charName: string;
  charAvatar?: string;
  startedAt: number;
  card: ScreenPeekCard;
  commentCount: number;
  lastCommentAt?: number;
  collapsed?: boolean;
  status?: 'idle' | 'thinking' | 'error';
  error?: string;
}

export interface UserScreenWatchSettings {
  captureFrames: boolean;
  trackMoroUsage: boolean;
  floatingEnabled: boolean;
  sampleIntervalMs: number;
  commentCooldownMs: number;
}

export interface UserScreenWatchUsageSlice {
  appId: AppID;
  appName: string;
  startedAt: number;
  endedAt: number;
  durationMs: number;
}

export interface UserScreenWatchFrame {
  id: string;
  capturedAt: number;
  imageDataUrl?: string;
  sourceLabel?: string;
  inferredApp?: string;
  summary?: string;
}

export interface UserScreenWatchComment {
  id: string;
  frameId?: string;
  text: string;
  createdAt: number;
  source: 'vision' | 'text' | 'fallback' | 'summary';
}

export interface UserScreenWatchSession {
  id: string;
  charId: string;
  charName: string;
  startedAt: number;
  endedAt?: number;
  updatedAt: number;
  status: 'active' | 'paused' | 'ended' | 'error';
  settings: UserScreenWatchSettings;
  usage: UserScreenWatchUsageSlice[];
  frames: UserScreenWatchFrame[];
  comments: UserScreenWatchComment[];
  summary?: string;
  error?: string;
}

export interface RelationshipNetworkEdge {
  id: string;
  pairKey: string;
  charIds: [string, string];
  nodeMeta?: Record<string, {
    kind: 'character' | 'npc';
    name: string;
    avatar?: string;
    description?: string;
    createdAt?: number;
    updatedAt?: number;
  }>;
  perspectives?: Record<string, {
    ownerId: string;
    targetId: string;
    label: string;
    note?: string;
    summary?: string;
    createdAt: number;
    updatedAt: number;
  }>;
  privateChatSummary?: {
    text: string;
    messageCount: number;
    summarizedUntilAt: number;
    updatedAt: number;
  };
  label: string;
  summary: string;
  confidence: number;
  intimacy: number;
  tension: number;
  signals: {
    intimacy: string[];
    friction: string[];
    conflict: string[];
  };
  source: 'ai' | 'fallback' | 'manual' | 'auto';
  createdAt: number;
  updatedAt: number;
  lastInteractionAt?: number;
}

export interface RelationshipNetworkMessage {
  id: string;
  pairKey: string;
  speakerId: string;
  speakerName: string;
  content: string;
  createdAt: number;
  source: 'manual' | 'auto';
  forwardedByCharIds?: string[];
}

export interface RelationshipNetworkThread {
  id: string;
  pairKey: string;
  charIds: [string, string];
  createdAt: number;
  updatedAt: number;
  lastMessagePreview?: string;
  messageCount?: number;
}

export interface RelationshipNetworkAutoSettings {
  id: 'settings';
  enabled: boolean;
  selectedCharIds: string[];
  intervalMinutes: number;
  charCooldownMinutes: number;
  pairCooldownMinutes: number;
  summaryCompressAfter: number;
  summaryKeepRaw: number;
  nextRunAt: number;
  lastRunAtByChar: Record<string, number>;
  lastRunAtByPair: Record<string, number>;
  forwardedCountByPair: Record<string, number>;
  updatedAt: number;
}

export interface RelationshipNetworkForwardDecision {
  shouldForward: boolean;
  forwarderId?: string;
  reason?: string;
  excerptMessageIds?: string[];
}

export interface RelationshipNetworkGenerationResult {
  messages: RelationshipNetworkMessage[];
  edgePatch?: Partial<RelationshipNetworkEdge>;
  forward?: RelationshipNetworkForwardDecision;
}

export interface SuspendedVideoCallInfo {
  charId: string;
  charName: string;
  charAvatar?: string;
  startedAt: number;
  elapsedSeconds: number;
  chatLines: { id: string; role: 'user' | 'char'; text: string; timestamp: number }[];
  sessionId: string;
  camOn: boolean;
  micOn: boolean;
  facing: 'user' | 'environment';
}

export type SuspendedOfflineSessionInfo =
  | {
      kind: 'private';
      charId: string;
      title: string;
      avatar?: string;
      suspendedAt: number;
      entryCount: number;
    }
  | {
      kind: 'group';
      groupId: string;
      title: string;
      avatar?: string;
      suspendedAt: number;
      entryCount: number;
    };

/**
 * 瑙掕壊鐪熷疄鍩庡競閰嶇疆锛堣 utils/charCity.ts锛夈€?
 * real锛氱幇瀹炰笘鐣岃鑹茬洿鎺ラ€夌湡瀹炲煄甯傦紱virtual锛氭灦绌鸿鑹插彲閫夊師鍨嬪煄甯?+ 铏氭嫙绋嬪害銆?
 */
export interface CharCityConfig {
  mode: 'real' | 'virtual';
  /** mode==='real'锛氱湡瀹炲煄甯傚悕锛堝銆屼笂娴枫€嶏級 */
  realCity?: string;
  /** mode==='virtual'锛氭灦绌哄煄甯傛樉绀哄悕锛堝銆孉 甯傘€嶏級 */
  virtualName?: string;
  /** mode==='virtual'锛氬師鍨嬬湡瀹炲煄甯傦紙濡傘€屼笂娴枫€嶏級 */
  prototypeCity?: string;
  /** mode==='virtual'锛氳櫄鎷熺▼搴?0~100锛? 鍑犱箮璐寸幇瀹炲彲鐩存帴鎸敤锛?00 瀹屽叏鏋剁┖鍙暀绁為煹锛?*/
  fictionLevel?: number;
}

/** 瑙掕壊澶囧繕褰曠殑涓€鏉★細TA 鎵嬫満澶囧繕褰曢噷鐨勫緟鍔?/ 闅忔墜璁?/ 灏忓績浜嬶紙TA 鑷繁鍐欐垨鐢ㄦ埛甯锛夈€傛敞鍏ヨ亰澶╀笂涓嬫枃璁?TA 璁板緱銆?*/
export interface CharMemo {
  id: string;
  text: string;
  createdAt: number;
  /** 璋佸啓鐨勶細'char'=瑙掕壊鑷繁璁扮殑锛堢敓鎴愶級锛?user'=鐢ㄦ埛甯?TA 璁扮殑 */
  by?: 'char' | 'user';
  /** 寰呭姙鍕炬帀锛堝畬鎴愮殑涓嶅啀娉ㄥ叆涓婁笅鏂囷級 */
  done?: boolean;
}

export interface CharacterProfile {
  id: string;
  /** 妯″瀷鍙鐨勭ǔ瀹氳韩浠介敋銆傛棫鏁版嵁缂虹渷鏃剁敱杩愯鏃惰ˉ鎴?id锛涜鑹插崱閲嶅瀵煎叆浼氱敓鎴愭柊鐨勬湰鍦伴敋锛屽畬鏁村浠芥仮澶嶄細淇濈暀鍘熼敋銆?*/
  modelId?: string;
  name: string;
  avatar: string;
  /** 鍓奖闆嗗垪琛ㄥ娉細浠呬緵鐣岄潰灞曠ず涓庢悳绱紝涓嶆敞鍏ヤ换浣?AI 鎻愮ず璇嶃€?*/
  description: string;
  systemPrompt: string;
  worldview?: string;
  /** 瑙掕壊澶囧繕褰曪細TA 鐨勫緟鍔?闅忔墜璁?灏忓績浜嬶紝鑱婂ぉ鏃堕殢韬惡甯︼紙娉ㄥ叆涓婁笅鏂囷級锛孴A 浼氳寰楄嚜宸卞啓杩囩殑浜嬨€?*/
  memos?: CharMemo[];
  /** 澶栬矊 Tag锛歜ooru 椋庢牸鑻辨枃澶栬矊鏍囩锛屽杺鏂囩敓鍥撅紙绔嬬粯/澶村儚/鐩稿唽锛夌敤銆傚彲浠庝汉璁?缁戝畾涓栫晫涔︿竴閿敓鎴愶紙utils/appearanceTags.ts锛夛紝涔熷彲鎵嬫敼銆?*/
  appearanceTags?: string;
  /**
   * 寮€鍦虹櫧锛圫illyTavern 瑙掕壊鍗?first_mes锛夈€備繚鐣欏師濮嬪畯锛坽{user}} / {{char}}锛夛紝
   * 杩涘叆绌鸿亰澶╅€夋嫨寮€鍦虹櫧鏃舵墠鏇挎崲 鈥斺€?鎹汉璁惧悗鍐嶅紑鑱婂ぉ锛屽畯浼氳В鏋愭垚鏂板悕瀛椼€?
   */
  firstMes?: string;
  /** 澶囬€夊紑鍦虹櫧锛堣鑹插崱 alternate_greetings锛夛紝涓?firstMes 涓€璧锋瀯鎴愯繘鍏ヨ亰澶╂椂宸﹀彸鍒囨崲鐨勫€欓€?*/
  alternateGreetings?: string[];
  /**
   * 瀵硅瘽绀轰緥锛圫illyTavern 瑙掕壊鍗?mes_example锛夈€傜嫭绔嬩簬 systemPrompt 瀛樺偍锛?
   * 鏈惎鐢ㄩ璁炬椂浣滀负銆屽璇濈ず渚嬨€嶅潡娉ㄥ叆鏍稿績涓婁笅鏂囷紱鍚敤棰勮鏃惰惤鍦?
   * dialogueExamples 鍗犱綅锛堝彈 marker 寮€鍏虫帶鍒讹級銆?START> 鍒嗛殧澶氭绀轰緥锛圫T 鎯緥锛夈€?
   */
  mesExample?: string;
  /**
   * 瑙掕壊灞€閮ㄦ鍒欒剼鏈紙SillyTavern scoped regex锛夈€傛潵婧愶細
   * - 瑙掕壊鍗?data.extensions.regex_scripts 闅忓崱瀵煎叆
   * - 琛ヤ竵閾猴紙姝ｅ垯 App锛夐噷鎵嬪姩娣诲姞 / 瀵煎叆鍒拌瑙掕壊
   * 涓庡叏灞€鑴氭湰锛堣ˉ涓侀摵銆屾弧閾洪€氱敤銆嶆爣绛撅紝localStorage锛夊彔鍔犵敓鏁堬紝鍏ㄥ眬鍦ㄥ墠銆?
   */
  regexScripts?: RegexScriptData[];
  /** 鏃ョ▼鍗＄墖/妗岄潰灏忕粍浠剁殑涓婚鑹茬浉锛圚SL hue 0~360锛夛紝鏈缃椂鍙栭粯璁ょ传 260 */
  themeColor?: number;
  memories: MemoryFragment[];
  refinedMemories?: Record<string, string>;
  activeMemoryMonths?: string[];
  
  writerPersona?: string;
  writerPersonaGeneratedAt?: number;

  /** 鎸傝浇鐨勪笘鐣屼功鏉＄洰蹇収銆傛敞鍏ユ椂浠ヤ笘鐣屼功 App 鐨?live 璁板綍涓哄噯锛堟寜 id銆侀€€鑰屾寜
   *  鍒嗙粍+鏍囬鍖归厤锛夛紝live 璁板綍涓嶅瓨鍦ㄦ椂鎸夊揩鐓х敓鏁?鈥斺€?enabled 闅?live 鍚屾锛?
   *  淇濊瘉鏉＄洰寮€鍏冲蹇収鍏滃簳璺緞鍚屾牱鐢熸晥 */
  mountedWorldbooks?: { id: string; title: string; content: string; category?: string; enabled?: boolean }[];

  bubbleStyle?: string;
  chatBackground?: string;
  contextLimit?: number;
  hideSystemLogs?: boolean; 
  hideBeforeMessageId?: number; 
  /** 绲绉佽亰妗ｆ锛氬綋鍓嶆墦寮€鐨勮亰澶╄褰曞揩鐓?id銆傚疄闄呮椿璺冩秷鎭粛钀?messages 琛紝鍒囨崲妗ｆ鏃舵仮澶嶃€?*/
  activePrivateChatId?: string;
  
  dateBackground?: string;
  sprites?: Record<string, string>;
  spriteConfig?: SpriteConfig;
  customDateSprites?: string[]; // User-added custom emotion names for date mode (per-character)
  dateLightReading?: boolean;   // Light reading mode for novel/text view in date
  dateSkinSets?: SkinSet[];     // Multiple skin sets for portrait mode
  activeSkinSetId?: string;     // Currently active skin set ID

  savedDateState?: DateState;
  specialMomentRecords?: Record<string, SpecialMomentRecord>;

  // 灏忕孩涔?per-character toggle
  xhsEnabled?: boolean;

  socialProfile?: {
      handle: string;
      bio?: string;
      region?: string; // 鍦板尯锛堣鑹蹭富椤靛睍绀猴紝濡傘€屽畨寰?浜冲窞銆嶏級
  };

  /** 鐪熷疄鍩庡競绯荤粺锛氱湡瀹?鏋剁┖鍩庡競閫夋嫨 + 瀹炴椂淇℃伅鎺ュ湴锛堣 utils/charCity.ts锛?*/
  cityConfig?: CharCityConfig;

  /** 鏈嬪弸璁剧疆锛堣鑹蹭富椤靛彸涓婅 路路路 杩涘叆锛夛細鏄熸爣鏈嬪弸 / 榛戝悕鍗?*/
  starredFriend?: boolean;
  /** 宸茶繘鍏ャ€屽線鏉ャ€嶄細璇濆垪琛細鏂板缓/瀵煎叆鍗崇疆 true锛屾垨棣栨鎵撳紑绉佽亰鏃剁疆 true銆?
   *  璁╄鑹插垱寤?瀵煎叆鍚庢棤闇€鍏堛€屾坊鍔犲ソ鍙嬨€嶅嵆鍙湪寰€鏉ョ洿鎺ュ嚭鐜板苟寮€鑱娿€?*/
  addedToChat?: boolean;
  /** 鐢便€岀敤鎴风ぞ浜ゅ湀銆嶅奖瀛愯仈绯讳汉杞垚鐨勬寮忚鑹层€傘€岄殣钘忓凡鎺ュ叆 NPC 涓庣兢銆嶅紑鍚椂锛岀诞璇垪琛ㄤ細闅愯棌杩欑被 NPC銆?*/
  ambientSocialSource?: {
      entryId: string;
      relation?: AmbientSocialRelation;
      relationLabel?: string;
  };
  /** 鎷嶄竴鎷嶅悗缂€锛堝井淇″紡锛夛細鍒汉銆屾媿浜嗘媿 TA 鐨?鍚庣紑>銆嶉噷鐨勫悗缂€銆傝鑹插彲鐢?[[PAT_SUFFIX: x]] 鑷繁鏀癸紝榛樿銆岃剳琚嬨€嶃€?*/
  patSuffix?: string;
  blacklisted?: boolean;
  /** 鐢ㄦ埛鎷夐粦瑙掕壊鐨勬椂鍒烩€斺€旀鍚庤鑹插彂鏉ョ殑娑堟伅姘旀场鏃佸甫绾㈣壊鎰熷徆鍙?*/
  blacklistedAt?: number;
  /** 琚敤鎴锋媺榛戝悗鐨勩€岃В闄ゆ媺榛戦獙璇併€嶇敵璇夌姸鎬侊細瑙掕壊浼氫富鍔ㄥ彂鏉ラ獙璇佹秷鎭眰瑙ｅ皝锛?
   *  鐢ㄦ埛鍙悓鎰忥紙瑙ｉ櫎鎷夐粦锛夋垨鎷掔粷锛涙嫆缁濆悗瑙掕壊浼氬湪 nextAt 涔嬪悗鍐嶅彂锛岀洿鍒扮敤鎴峰悓鎰忋€?*/
  unblockAppeal?: {
      active: boolean;        // 鎷夐粦鏈熼棿鏄惁浠嶅湪鐢宠瘔锛堝悓鎰?绉诲嚭榛戝悕鍗曞悗缃?false锛?
      awaiting: boolean;      // 宸插彂鍑轰竴鏉＄敵璇夈€佹绛夌敤鎴峰鐞嗭紙true 鏃朵笉鍐嶅彂鏂扮殑锛?
      nextAt: number;         // 涓嬩竴娆″彲鍙戠敵璇夌殑鏃堕棿鎴?
      rejectedCount: number;  // 琚嫆娆℃暟锛堝奖鍝嶆帾杈炰笌涓嬫闂撮殧锛?
  };

  /** 瑙掕壊鎷夐粦鐢ㄦ埛锛圓I 杈撳嚭 [[BLOCK_USER]] 瑙﹀彂锛夛細active 鏈熼棿鐢ㄦ埛鏃犳硶鍙戞秷鎭紝
   *  鍒?unblockAt锛堥殢鏈?30 鍒嗛挓 ~ 24 灏忔椂锛夎嚜鍔ㄨВ闄わ紝鎴栭€氳繃濂藉弸楠岃瘉鎻愬墠鎷夊洖 */
  charBlock?: {
      active: boolean;
      blockedAt: number;
      unblockAt: number;
  };

  /** 浼氳瘽璁剧疆锛堣亰澶╃晫闈?路路路 鈫?鑱婂ぉ璁剧疆锛夛細鏈細璇濅笓灞炵殑灞曠ず / 琛屼负 / 鎻愮ず璇嶉厤缃?*/
  convoSettings?: ConvoSettings;

  roomConfig?: {
      bgImage?: string;
      wallImage?: string;
      floorImage?: string;
      items: RoomItem[];
      wallScale?: number; 
      wallRepeat?: boolean; 
      floorScale?: number;
      floorRepeat?: boolean;
  };
  
  // deprecated: per-character assets migrated to global room_custom_assets_list with assignedCharIds

  lastRoomDate?: string;
  savedRoomState?: RoomGeneratedState;

  phoneState?: {
      records: PhoneEvidence[];
      customApps?: PhoneCustomApp[];
      /** 瑙掕壊涓撳睘鎵嬫満鐨偆锛堢‘瀹氭€ф淳鐢?+ 鍙€?LLM 瑁呯偣锛岃瑙?PhoneProfile锛?*/
      profile?: PhoneProfile;
      /** 鐢ㄦ埛閫氳繃绲銆岄攣鏈恒€嶈繙绋嬮攣浣忚鑹叉墜鏈猴紱瑙掕壊瀹屾垚鍙ｄ护鎴栦换鎰忛鐩悗鑷姩瑙ｉ攣銆?*/
      lock?: PhoneLockState;
  };

  voiceProfile?: {
      provider?: 'minimax' | 'custom';
      voiceId?: string;
      voiceName?: string;
      source?: 'system' | 'voice_cloning' | 'voice_generation' | 'custom';
      model?: string;
      notes?: string;
      timberWeights?: { voice_id: string; weight: number }[];
      voiceModify?: { pitch?: number; intensity?: number; timbre?: number; sound_effects?: string };
      emotion?: string;
      speed?: number;
      vol?: number;
      pitch?: number;
  };

  // 鏃堕棿鎰熺煡寮哄寲锛氬紑鍚紙榛樿锛夋椂浼氬悜涓婁笅鏂囨敞鍏ャ€岃窛绂讳笂娆¤亰澶╁凡杩囧幓澶氫箙銆嶇殑寮哄寲鎻愮ず锛?
  // 璁╄鑹插己鍖栨椂闂磋蹇点€佷富鍔ㄥ尮閰嶇幇瀹炰笘鐣屾椂闂淬€傚叧鎺夊悗涓嶅啀娉ㄥ叆杩欑粍鎻愮ず璇?
  // 锛堟敞鎰忥細鍘嗗彶娑堟伅鏈韩浠嶅甫鏃堕棿鎴筹紝鍏虫帀鍚庡急鍖栫▼搴﹀彇鍐充簬妯″瀷鑷韩鐞嗚В锛夈€?
  // 杩欓噷鎵胯浇銆屾椂闂存祦閫濇劅鐭ャ€嶏細涓ゆ鑱婂ぉ / 鏈夊緟璺熻繘浜嬩欢鏃讹紝TA 鐭ラ亾杩囧幓浜嗗涔呫€?
  timeAwarenessEnabled?: boolean;

  // 鏌旈『濂夊吇锛圫oft Devotion Chat锛夛細寮€鍚悗杩欎釜瑙掕壊鍦ㄨ亰澶╅噷鍏辨儏鑳藉姏澶у箙鎻愬崌鈥斺€?
  // 鏇村亸鐖便€佹洿鑰愬績鍦版帴浣忕敤鎴风殑鏁忔劅銆佹拻濞囧拰涓嶅畨锛堝悜 system prompt 娉ㄥ叆鍏辨儏寮哄寲娈碉級銆?
  softDevotionChatEnabled?: boolean;

  // 鍥炴湜灏忔姤缂撳瓨锛氶敭涓哄懆鏈熸爣璇嗭紙'day-YYYY-MM-DD' / 'week-YYYY-WW' / 'month-YYYY-MM'锛夛紝
  // 鍊间负宸茬敓鎴愮殑濞变箰灏忔姤銆傚紑鍏冲湪浼氳瘽璁剧疆 convoSettings.tabloidEnabled銆?
  generatedTabloids?: Record<string, Tabloid>;

  // Chat & Date voice TTS settings
  chatVoiceEnabled?: boolean;
  chatVoiceLang?: string;
  dateVoiceEnabled?: boolean;
  dateVoiceLang?: string;

  // Cross-session guidebook insights: what char has discovered about user across games
  guidebookInsights?: string[];

  // 涓诲姩娑堟伅閰嶇疆
  proactiveConfig?: {
    enabled: boolean;
    intervalMinutes: number; // 30, 60, 120, 240, etc.
    /** 闅忔満鏃堕棿妯″紡锛氶棿闅旈殢鏈猴紙1 灏忔椂 ~ 1 澶╋級锛屼笖鐢ㄦ埛鍒氬洖杩囨秷鎭椂涓嶆墦鎵帮紝
     *  鍙戜笉鍙戙€佽浠€涔堝畬鍏ㄤ氦缁欒鑹叉€ф牸 */
    randomMode?: boolean;
    /** 绂荤嚎鑷富鐢熸椿锛氬紑鍚悗瑙掕壊鍦ㄥ悗鍙般€岃繃鑷繁鐨勬棩瀛愩€嶏紝涓诲姩娑堟伅浠?TA 姝ｅ湪缁忓巻鐨?
     *  鐢熸椿浜嬩欢鍙栨潗锛堝垎浜嚜宸辩殑鐢熸椿銆佽€屼笉鏄偓鐢ㄦ埛鍥炲锛夛紝绂荤嚎鏈熼棿鐨勬椿鍔ㄤ篃浼氭敀鎴?
     *  涓€浠姐€屼綘涓嶅湪鏃?TA 缁忓巻浜嗏€︺€嶇殑鍥為【鏃堕棿绾匡紙瑙?utils/autonomousLife.ts锛夈€?
     *  undefined 瑙嗕负寮€鍚紙榛樿琛屼负锛夈€?*/
    autonomousLifeEnabled?: boolean;
    /** v2锛氫富鍔ㄦ潵淇″己搴︺€傝秺楂橈紝鏅鸿兘瑙﹀彂瓒婂皯璺宠繃銆佸彛鍚昏秺涓嶅厠鍒躲€?*/
    intensity?: 'quiet' | 'balanced' | 'chatty' | 'unfiltered';
    /** v2锛氱绾跨敓娲诲瘑搴︺€傚奖鍝嶈ˉ榻愪簨浠舵暟閲忋€佺敓娲讳簨浠剁敓鎴?澶嶇敤鑺傚銆?*/
    lifeDensity?: 'sparse' | 'normal' | 'busy';
    /** v2锛氭潵淇″彛鍛炽€傚彧褰卞搷涓诲姩娑堟伅 hint锛屼笉鏀瑰彉鏅€氳亰澶┿€?*/
    messageFlavor?: 'natural' | 'self' | 'warm' | 'playful' | 'moody';
    /** v2锛氫富鍔ㄦ秷鎭彇鏉愭潵婧愶紱鏈缃椂榛樿鍏ㄥ紑銆?*/
    materialSources?: Array<'life' | 'recentChat' | 'schedule' | 'realtime'>;
    /** v2锛氭櫤鑳借Е鍙戝彲璺宠繃銆傚浐瀹氶棿闅斾粛榛樿鍙戯紱闅忔満/鏅鸿兘妯″紡鍙彧璁板綍鐢熸椿涓嶆墦鎵般€?*/
    smartSkipEnabled?: boolean;
    /** v2锛氬嬁鎵版椂娈点€俠ehavior='life_only' 鏃跺彧鎺ㄨ繘鐢熸椿锛屼笉鍙戞秷鎭€?*/
    quietHours?: {
      enabled: boolean;
      start: string; // HH:mm
      end: string;   // HH:mm
      behavior: 'send' | 'life_only' | 'skip';
    };
    useSecondaryApi?: boolean;
    secondaryApi?: {
      baseUrl: string;
      apiKey: string;
      model: string;
    };
  };

  // 鎯呯华Buff绯荤粺
  activeMsg2Config?: ActiveMsg2CharacterConfig;
  activeBuffs?: CharacterBuff[];
  buffInjection?: string;   // 娉ㄥ叆鍒皊ystemPrompt鐨勫彊浜嬪瀷鎯呯华搴曡壊鎻忚堪

  /** 濂芥劅鍊?0~100锛堢偣鑱婂ぉ椤舵爮澶村儚銆屽伔鐪嬪績澹般€嶆椂鐢辨ā鍨嬩竴骞惰瘎浼版洿鏂帮紱璧?utils/relationship 鐨勫姞鍑忔鏋讹紝鏃ュ父灏忓箙寰樺緤銆佸喅瀹氭€т簨浠舵墠澶у箙娉㈠姩锛?*/
  affection?: number;
  /** 褰撳墠蹇冩儏锛堜笌濂芥劅鍊煎悓涓€璇勪及閾捐矾鏇存柊锛夛紝鏄剧ず鍦ㄥ績澹伴潰鏉?*/
  currentMood?: { emoji?: string; label: string; updatedAt: number };
  /** 鍏崇郴鐘舵€侊紙鏉ュ線路鍋风湅蹇冨０ 鐨勫叧绯荤郴缁燂級锛氱敱 AI 渚濇嵁濂芥劅 / 璁惧畾鍏崇郴 / 鍓ф儏鑷姩鏇存柊 */
  relationship?: RelationshipState;
  /** 濠氬Щ鐘舵€侊紙姹傚鎴愬姛鍚庤繘鍏ャ€屽濮荤澶囨湡銆嶏紝钀藉叆宀佹椂璁奥峰枩浜嬮〉锛?*/
  marriage?: MarriageState;
  /** 璐墿鍟嗗煄路瑙掕壊灏忕エ锛氳鑹叉敹鍒扮殑绀肩墿 / 鑷繁涔扮殑 / 鍥炶禒鐢ㄦ埛鐨勫巻鍙诧紙鏈€鏂板湪鍓嶏級銆備緵銆屾煡瑙掕壊璐墿灏忕エ銆嶄笌鑱婂ぉ涓婁笅鏂囥€?*/
  shopReceipts?: ShopReceipt[];
  /** 璐墿鍟嗗煄路瑙掕壊璐墿杞︼細瑙掕壊閫涘晢鍩庢椂鍔犺繘鐨勩€屽績鎰胯喘鐗╄溅銆嶏紝鐢ㄦ埛鍙府 TA 娓呯┖锛堜唬浠橈級銆?*/
  shopCart?: ShopCartLine[];
  /** 鏉ュ線路鎯呬荆绌洪棿锛堝弬鑰?QQ 鎯呬荆绌洪棿锛夛細鎭嬬埍澶╂暟 / 浜插瘑搴?/ 鎯呬荆鍔ㄦ€?/ 绾康鏃?/ 鐩稿唽 / 绾﹀畾 / 鎮勬倓璇濄€?
   *  鎸傚湪瑙掕壊涓婏紙姣忎釜瑙掕壊涓€浠斤級锛岀敱 ChatHub銆屾儏渚ｇ┖闂淬€嶆爣绛鹃〉璇诲啓锛屽苟缁?utils/context.ts 娉ㄥ叆鑱婂ぉ涓婁笅鏂囥€?*/
  coupleSpace?: CoupleSpace;
  emotionConfig?: {
    /** 蹇冩儏 buff 鐙珛寮€鍏筹紱浣滄伅寮€鍚椂锛宖alse 浼氬仠姝㈡儏缁瘎浼般€佹敞鍏ュ拰椤舵爮 buff 灞曠ず銆?*/
    enabled: boolean;
    api?: {
      baseUrl: string;
      apiKey: string;
      model: string;
    };
  };

  // 璁板繂瀹 (Memory Palace)
  memoryPalaceEnabled?: boolean;
  /**
   * 鏄惁鍚敤"palace 鎻愬彇鍚庤嚜鍔ㄥ悓姝ュ綊妗?锛氬紑鍚悗姣忔 buffer 澶勭悊鎴愬姛閮戒細鎶婃柊璁板繂鎸夋棩鏈?
   * 鍚堟垚 YAML MemoryFragment 杩藉姞鍒?char.memories锛屽苟鎺?hideBeforeMessageId 鑷姩闅愯棌
   * 宸插鐞嗙殑鑱婂ぉ銆傞粯璁?false锛坥pt-in锛夆€斺€旈娆″惎鐢ㄥ缓璁鐢ㄦ埛鍋氫竴娆?force 杩藉钩鍘嗗彶銆?
   */
  autoArchiveEnabled?: boolean;
  embeddingConfig?: {
    baseUrl: string;
    apiKey: string;
    model: string;        // 榛樿 text-embedding-3-small
    dimensions: number;   // 榛樿 1024
  };
  personalityStyle?: 'emotional' | 'narrative' | 'imagery' | 'analytical';
  ruminationTendency?: number;  // 鍙嶅垗鍊惧悜 0-1锛岄粯璁?0.3
  memoryPalaceInjection?: string;  // 璁板繂瀹妫€绱㈢粨鏋滐紝娉ㄥ叆鍒?System Prompt锛堣繍琛屾椂濉厖锛屼笉鎸佷箙鍖栵級

  // 鑷垜棰嗘偀璇嶆潯锛氭秷鍖栬繃绋嬩腑 self_room 鍙嶅垗浜х敓鐨勫父椹昏鐭?
  // 鍍忔儏缁?buff 涓€鏍锋敞鍏ュ埌 contextBuilder 鐨勮鑹茶瀹氫笅鏂?
  selfInsights?: string[];

  /**
   * 瑙掕壊鐢熸椿渚у啓锛氫竴浠藉府鍔╄鑹层€屾洿浜嗚В鑷繁銆嶇殑鐢熸椿閫熷啓锛堟棩甯歌妭濂忋€佷範鎯櫀濂姐€佸湪鎰忕殑浜嬨€?
   * 涓庣敤鎴峰叧绯荤殑搴曡壊鈥︹€︼級銆傜敱鍓?API 渚濇嵁浜鸿 + 璁板繂鐢熸垚锛屽彲鎵嬪姩缂栬緫锛屾敞鍏?system prompt銆?
   * 鍏ュ彛鍦?鍓奖闆?鈫?鐧诲満浜虹墿 鈫?瑙掕壊缂栬緫鍣紙搴曠椤碉級銆?
   */
  lifeProfile?: {
    content: string;       // 渚у啓姝ｆ枃锛坢arkdown锛?
    generatedAt: number;
    edited?: boolean;      // 鐢ㄦ埛鏄惁鎵嬪姩鏀硅繃锛堟敼杩囧垯涓嶈銆岄噸鏂扮敓鎴愩€嶉潤榛樿鐩栵級
  };

  /**
   * 鍥炵鏍″噯锛氱敤鎴疯Е鍙戙€屽洖绁炪€嶅悗锛岃鑹插畬鎴愪竴娆¤嚜鎴戝瑙嗭紝寰楀埌涓€鍙ユ牎鍑嗘柟鍚戙€?
   * 鍦ㄦ帴涓嬫潵鐨?turnsLeft 杞?AI 鍥炲閲屾敞鍏?system prompt锛堟倓鎮勮皟鍥炴湰鏉ョ殑鏍峰瓙锛夛紝
   * 姣忓洖澶嶄竴杞?turnsLeft--锛屽綊闆跺嵆娓呴櫎锛岃嚜鐒舵贰鍑哄洖鍒板父鎬併€傝繍琛屾椂瀛楁锛屼細琚寔涔呭寲銆?
   */
  recenterCalibration?: {
    /** 涓€鍙ヨ瘽鏍″噯鏂瑰悜锛堟敞鍏?prompt 鐢級 */
    note: string;
    /** 绗竴浜虹О鍥炵鐙櫧锛堢暀妗?鍙啀灞曠ず锛?*/
    monologue?: string;
    /** 瀵熻鍒扮殑鍋忕Щ鐐?*/
    drift?: string[];
    createdAt: number;
    /** 鍓╀綑鐢熸晥杞暟锛?0 鎵嶆敞鍏ワ級 */
    turnsLeft: number;
  };

  // 闊充箰浜烘牸 鈥?瑙掕壊鑷繁鐨勭綉鏄撲簯寮忔瓕鍗?/ 鍝佸懗 / 姝ｅ湪鍚?
  // 鍦ㄩ煶涔?App 閲屼互"鎷滆"褰㈠紡璁块棶
  musicProfile?: CharMusicProfile;

  /**
   * 鏃ョ▼椋庢牸锛?
   * - 'lifestyle'锛堢敓娲荤郴锛岄粯璁わ級锛氳櫄鏋勮鑹诧紝鎷ユ湁鏃ュ父鐗╃悊鐢熸椿锛堟櫒璺戙€佸仛楗€侀€涜鈥︹€︼級
   * - 'mindful'锛堟剰璇嗙郴锛夛細瑙掕壊璇氬疄闈㈠鑷韩瀛樺湪锛屽唴蹇冩椿鍔ㄥ熀浜庣湡瀹炶兘鍔涳紙鍥炲繂瀵硅瘽銆佹暣鐞嗘兂娉曘€佺瓑寰呯敤鎴封€︹€︼級锛屼笉铏氭瀯鐗╃悊琛屼负
   */
  scheduleStyle?: 'lifestyle' | 'mindful';

  /**
   * 浣滄伅鏃ョ▼鎬诲紑鍏炽€?
   * - true锛氬惎鐢ㄦ棩绋嬬敓鎴愩€佹剰璇嗘祦鍩虹鍜岃亰澶╅噷鐨勬棩绋嬪崗璋冿紙娑堣€楀壇 API锛夈€?
   * - false锛氬叧闂棩绋嬬敓鎴?/ 鍗忚皟 / 娉ㄥ叆锛涜亰澶╁悗鐨勫績鎯?buff 璇勪及涔熼殢浣滄伅鍓嶇疆闂搁棬鍋滀笅銆?
   * - undefined锛氬悜鍚庡吋瀹光€斺€旇嫢 scheduleStyle 宸茶锛堣€佺敤鎴峰凡闅愬紡閫夐鏍硷級瑙嗕负寮€鍚紱鍚﹀垯榛樿鍏抽棴銆?
   */
  scheduleFeatureEnabled?: boolean;

  /**
   * HTML 妯″潡妯″紡锛坧er-character锛夈€?
   * - htmlModeEnabled锛氶粯璁ゅ紑鍚紙undefined 瑙嗕负 true锛屾樉寮?false 鎵嶅叧闂級銆傚紑鍚椂缁?LLM
   *   娉ㄥ叆"鐢?[html]...[/html] 鍖呰９鐨勫瘜 HTML 鍗＄墖"鎻愮ず璇嶏紝
   *   AI 杈撳嚭閲岀殑 [html] 鍧椾細琚В鏋愭垚鍗曠嫭鐨?html_card 娑堟伅锛堟矙鐩?iframe 娓叉煋锛夈€?
   * - htmlModeCustomPrompt锛氱敤鎴疯嚜瀹氫箟鍐呭锛?*杩藉姞**鍦ㄥ唴缃彁绀鸿瘝涔嬪悗锛堜笉浼氳鐩栧唴缃唴瀹癸級銆?
   * - 涓婁笅鏂?/ 褰掓。 鎬荤粨璇诲埌鐨?html_card 娑堟伅鍐呭鏄凡鍓ョ HTML 鐨勭函鏂囧瓧鎽樿锛岄伩鍏?token 娴垂銆?
   */
  htmlModeEnabled?: boolean;
  htmlModeCustomPrompt?: string;
  /** 璇ヨ鑹蹭笓灞炵殑鑱婂ぉ銆岀櫧妗嗐€嶈嚜瀹氫箟 CSS锛堝彔鍔犲湪鍏ㄥ眬 osTheme.chatChromeCustomCss 涔嬩笂锛夈€?*/
  chromeCustomCss?: string;

  /**
   * 鎬濊€冭繃绋嬪睍绀猴紙per-character / 浼氳瘽绾э級銆?
   * - true锛氭妸 LLM 杩斿洖鐨?reasoning_content 涓?<think>...</think> 鎶藉嚭鏉ワ紝
   *   浣滀负 metadata.thinkingChain 钀藉簱鍒?assistant 娑堟伅涓婏紝
   *   MessageItem 鍦ㄦ皵娉￠《閮ㄦ覆鏌撳彲鎶樺彔"馃挱 鎬濊€冭繃绋?鍖哄潡銆?
   * - false / undefined锛氫緷鐒舵寜鏃ч€昏緫鍓ョ锛屼笉灞曠ず銆?
   * - 浠呭奖鍝嶅紑鍏冲垏鍒?true 涔嬪悗浜х敓鐨勬柊娑堟伅锛涙棫娑堟伅娌℃湁 thinkingChain锛?
   *   UI 鑷劧涓嶄細鏄剧ず锛岀鍚?鎵撳紑鍚庢墠鐪?鐨勯鏈熴€?
   */
  showThinkingChain?: boolean;
  /**
   * 鎬濊€冮摼鍗＄墖瑙嗚椋庢牸锛坧er-character锛夈€?
   * - 'echo' (default)锛氭殫绱簳 + 鏆栭噾鎻忚竟銆屽洖鍝嶃€嶄簩娆″厓鍗＄墝
   * - 'whisper'锛氱背鑹茬緤鐨焊銆屽績澹般€嶈交鐩堢増
   * - 'minimal'锛氭棤瑁呴グ鍗曡壊绠€娲佺増
   * - 'custom'锛氫娇鐢?thinkingChainCustomColors 缁欑殑閰嶈壊
   */
  thinkingChainStyle?: 'echo' | 'whisper' | 'minimal' | 'custom';
  /** 鑷畾涔夐鏍肩敤鐨勯厤鑹茬粍锛堜粎 thinkingChainStyle === 'custom' 鐢熸晥锛?*/
  thinkingChainCustomColors?: {
    bg?: string;       // 鍗＄墖鑳屾櫙
    accent?: string;   // 杈规/鏍囬鐐圭紑
    text?: string;     // 姝ｆ枃棰滆壊
  };
  /** 鐢ㄦ埛杩藉姞鐨勬€濊€冩彁绀鸿瘝锛堜笉鏇挎崲鍘熺敓锛屽彧鍦ㄦ渶鍚庤拷鍔犱竴娈点€岀敤鎴烽澶栬姹傘€嶏級 */
  thinkingChainCustomPrompt?: string;

  /**
   * 铏氭嫙涓栫晫銆岄〉澶栥€嶇殑涓汉鐘舵€侊細鏄惁鑷富鐧诲叆銆佺櫥鍏ラ棿闅斻€佸悇鏈皬璇寸殑鐙珛涔︾绛夈€?
   * 鐙珛浜?proactiveConfig锛堜富鍔ㄥ彂娑堟伅锛夛紝浜掍笉鎸ゅ崰瑙﹀彂銆?
   */
  vrState?: VRWorldCharState;
}

/**
 * 鍏崇郴闃舵锛堟潵寰€路鍋风湅蹇冨０ 鐨勫叧绯荤郴缁燂級銆傜敱 AI 渚濇嵁濂芥劅 / 璁惧畾鍏崇郴 / 鍓ф儏鑷姩鏇存柊銆?
 * 椤哄簭澶ц嚧瀵瑰簲銆屼翰瀵嗗害閫掕繘銆嶏紝utils/relationship 鐢ㄥ畠绾︽潫璺冲彉锛堜笉鑳藉嚟绌轰粠闄岀敓璺冲埌宸插锛夈€?
 */
export type RelationshipStage =
  | 'stranger'      // 闄岀敓
  | 'acquaintance'  // 璁よ瘑
  | 'friend'        // 鏈嬪弸
  | 'close'         // 濂藉弸 / 鐭ュ繁
  | 'crush'         // 鏆ф槯锛堥珮濂芥劅浣嗘湭纭珛鎭嬩汉鍏崇郴锛?
  | 'lover'         // 鎭嬩汉锛堢敺濂虫湅鍙嬶級
  | 'engaged'       // 鏈澶锛堟眰濠氭垚鍔?鈫?濠氬Щ绛瑰鏈燂級
  | 'married'       // 宸插锛堥璇?/ 瀹屽锛?
  | 'ex'            // 鍓嶄换锛堝垎鎵嬶級
  | 'estranged';    // 鍐宠 / 褰㈠悓闄岃矾

export interface RelationshipState {
  stage: RelationshipStage;
  /** 灞曠ず鐢ㄥ叧绯诲悕锛堝銆岀敺鏈嬪弸銆嶃€屾湭濠氬銆嶃€屾毀鏄у璞°€嶃€屽墠鐢峰弸銆嶏級锛孉I 缁欍€佽惤鍦板睍绀?*/
  label: string;
  /** 杩涘叆褰撳墠闃舵鐨勬椂闂存埑 */
  since: number;
  updatedAt: number;
  /** 鍏崇郴鍙樻洿绠€鍙诧紙鏈€鏂板湪鍓嶏級锛屼緵鏉ュ線闈㈡澘鍥炵湅 */
  history?: Array<{ stage: RelationshipStage; label: string; at: number; reason?: string }>;
}

/** 濠氬Щ绛瑰闃舵锛氭眰濠氭垚鍔熷悗閫愭鎺ㄨ繘锛屾椂闂翠笌鐜板疄鍖归厤銆?*/
export type MarriageStage =
  | 'engaged'     // 宸茶濠毬风澶囦腑
  | 'planning'    // 宸插晢瀹氬鏈?
  | 'registered'  // 宸查璇?
  | 'wed';        // 宸插畬濠?

export interface MarriageMilestone {
  id: string;
  kind: 'proposal' | 'plan' | 'register' | 'wedding' | 'custom';
  title: string;
  date?: string;       // YYYY-MM-DD锛堜笌鐜板疄鍖归厤锛?
  note?: string;
  by?: 'user' | 'char';
  done?: boolean;
  at: number;
}

/** 濠氬Щ鐘舵€侊紙钀藉叆宀佹椂璁奥峰枩浜嬮〉锛涜亰澶╀笂涓嬫枃鎹璁╄鑹插晢閲忓鏈?/ 棰嗚瘉绛夛級銆?*/
export interface MarriageState {
  active: boolean;
  stage: MarriageStage;
  /** 璋佸厛姹傜殑濠?*/
  proposalBy: 'user' | 'char';
  engagedAt: number;
  /** 鍟嗗畾鐨勫鏈燂紙YYYY-MM-DD锛?*/
  weddingDate?: string;
  /** 棰嗚瘉鏃堕棿鎴?*/
  registeredAt?: number;
  milestones: MarriageMilestone[];
}

// 鈹€鈹€ 鏉ュ線路鎯呬荆绌洪棿锛圦Q 鎯呬荆绌洪棿绉绘锛?鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
/** 鎯呬荆鍔ㄦ€?/ 鐣欒█鏉跨殑涓€鏉¤瘎璁恒€?*/
export interface CoupleComment {
  id: string;
  author: 'user' | 'char';
  text: string;
  at: number;
}

/** 鎯呬荆鍔ㄦ€侀噷鐨勫濯掍綋鍗＄墖绫诲瀷锛氳闊虫潯 / 闊充箰 / 鐗╀欢路鐓х墖锛堢偣鍑昏Е鍙戙€屽績澹般€嶅脊绐楋級銆?*/
export type CoupleMediaKind = 'voice' | 'music' | 'item';

/** 鎯呬荆鍔ㄦ€佺殑澶氬獟浣撻檮浠跺崱鐗囷紙璇煶 / 闊充箰 / 鐗╀欢锛夈€?*/
export interface CoupleMedia {
  kind: CoupleMediaKind;
  /** 鏄剧ず鍚嶏紙璇煶锛氬銆屾櫄瀹夎闊?m4a銆嶏紱闊充箰锛氭瓕鍚嶏紱鐗╀欢锛氬銆岀収鐗嘷绯背绯?jpg銆嶏級 */
  name: string;
  /** 璇煶鏃堕暱灞曠ず锛堝銆?0:15銆嶏級锛屼粎 voice 鐢?*/
  duration?: string;
}

/** 鎯呬荆鍔ㄦ€侊紙鐣欒█鏉匡級锛氬弻鏂瑰彲鍙戞枃瀛?/ 蹇冩儏 / 鍥剧墖 / 澶氬獟浣撳崱鐗囷紝鎸夋椂闂村€掑簭灞曠ず锛屽彲鐐硅禐 + 璇勮銆?*/
export interface CoupleMoment {
  id: string;
  author: 'user' | 'char';
  text?: string;
  /** 蹇冩儏锛坋moji + 鏂囧瓧锛屽彲閫夛級 */
  mood?: string;
  /** 鍥剧墖锛坆ase64 data url锛夛紝涔濆鏍煎睍绀?*/
  images?: string[];
  /** 澶氬獟浣撳崱鐗囷紙璇煶 / 闊充箰 / 鐗╀欢锛夛紱鐐瑰嚮瑙﹀彂銆屽績澹般€嶅脊绐?*/
  media?: CoupleMedia;
  /** 瑙掕壊瀵硅繖鏉″姩鎬佺殑銆屽績澹般€嶇嫭鐧斤紙鐐瑰嚮澶氬獟浣撳潡鏃舵噿鐢熸垚銆佺紦瀛樺悗澶嶇敤锛?*/
  innerVoice?: string;
  createdAt: number;
  /** 鐐硅禐锛氬弻鏂瑰悇鑷槸鍚﹁禐杩?*/
  likedByUser?: boolean;
  likedByChar?: boolean;
  comments: CoupleComment[];
}

/** 绾康鏃?/ 鐢熸棩 / 绾﹀畾鏃ワ細鑷姩鍊掕鏃舵彁閱掋€?*/
export interface CoupleAnniversary {
  id: string;
  title: string;
  /** YYYY-MM-DD */
  date: string;
  kind: 'love' | 'birthday' | 'promise' | 'custom';
  /** 鏄惁姣忓勾閲嶅锛堢敓鏃?/ 鍛ㄥ勾锛夛細鍊掕鏃跺彇銆屼笅涓€娆°€?*/
  repeatYearly?: boolean;
  createdAt: number;
}

/** 鎯呬荆鐩稿唽鐓х墖锛堜節瀹牸灞曠ず锛夈€?*/
export interface CouplePhoto {
  id: string;
  url: string;        // base64 data url
  caption?: string;
  addedBy: 'user' | 'char';
  at: number;
}

/** 鎯呬荆浠诲姟 / 绾﹀畾锛堝畬鎴愭墦鍕?+ 鍔犱翰瀵嗗害锛夈€?*/
export interface CoupleTask {
  id: string;
  title: string;
  done: boolean;
  by?: 'user' | 'char';
  createdAt: number;
  doneAt?: number;
}

/** 鎰挎湜娓呭崟锛氫竴鏉″叡鍚屽績鎰匡紙鎯充竴璧峰仛鐨勪簨 / 鎯宠鐨勪笢瑗匡級锛屽彲琚疄鐜板嬀鎺夈€?*/
export interface CoupleWish {
  id: string;
  text: string;
  by?: 'user' | 'char';
  fulfilled?: boolean;
  createdAt: number;
  fulfilledAt?: number;
}

/** 鎻愰棶绠憋細鐢ㄦ埛闂竴鍙ワ紝瑙掕壊锛圓I锛夌瓟涓€鍙ワ紝涓よ竟鍚堝瓨涓€鏉°€?*/
export interface CoupleQuestion {
  id: string;
  question: string;
  answer: string;
  at: number;
}

/** 鍏荤泦鏍斤細浣犱滑涓€璧峰吇鐨勪竴鏍櫄鎷熸鐗╋紝姣忔棩鐓ф枡鏀掓垚闀垮€笺€侀殢闃舵闀垮ぇ銆?*/
export interface CouplePlant {
  /** 绱鎴愰暱鍊硷紙鍐冲畾闃舵锛?*/
  growth: number;
  /** 涓婃娴囨按 / 鏂借偉 / 鏅掑お闃崇殑鏈湴鏃ユ湡 YYYY-MM-DD锛堟瘡鏃ュ悇涓€娆★級 */
  water?: string;
  fertilize?: string;
  sun?: string;
  createdAt: number;
}

/** 鎮勬倓璇?/ 鐣欒█淇＄锛氫竴鏉＄瀵嗙暀瑷€銆?*/
export interface CoupleWhisper {
  id: string;
  author: 'user' | 'char';
  text: string;
  at: number;
}

/** 姣忔棩浜掑姩绫诲瀷锛氫翰涓€涓?/ 鎶变竴涓?/ 鐗垫墜 / 閫佺ぜ鐗┿€?*/
export type CoupleInteractionKind = 'kiss' | 'hug' | 'hold' | 'gift';

/** 姣忔棩浜掑姩璁板綍锛堜竴閿簰鍔ㄨЕ鍙戝姩鐢?/ 鏂囧瓧鍙嶉骞跺姞浜插瘑搴︼級銆?*/
export interface CoupleInteraction {
  id: string;
  kind: CoupleInteractionKind;
  by: 'user' | 'char';
  /** 瀵规柟鐨勪竴鍙ュ弽棣堟枃瀛楋紙瑙掕壊渚х敱 LLM 鐢熸垚锛涘厹搴曠敤妯℃澘锛?*/
  note?: string;
  at: number;
}

/** 鎯呬荆绌洪棿璁剧疆銆俛utoCareEnabled 涓?undefined 鏃惰涓哄紑鍚紝鍏煎鏃х┖闂撮粯璁よ嚜鍔ㄧ粡钀ャ€?*/
export interface CoupleSpaceSettings {
  autoCareEnabled?: boolean;
  theme?: 'scrapbook';
}

/** 鎯呬荆绌洪棿妗ｆ锛氫袱涓汉缁欒繖涓┖闂寸暀涓嬬殑鍥哄畾璁惧畾涓庡皬涔犳儻銆?*/
export interface CoupleProfile {
  homeName?: string;
  userNickname?: string;
  charNickname?: string;
  rituals?: string[];
  loveLanguage?: string;
  updatedAt?: number;
}

/** 鍙拤浣忕殑鎯呬荆璁板繂鍗★細鏉ヨ嚜绾︿細銆佸鍗栥€佽嚜鍔ㄥ洖椤炬垨鎵嬪姩璁板綍銆?*/
export interface CoupleMemoryCard {
  id: string;
  kind: 'date' | 'takeout' | 'moment' | 'promise' | 'recap' | 'manual' | 'auto';
  title: string;
  text: string;
  sourceId?: string;
  sourceAt?: number;
  imageUrl?: string;
  pinned?: boolean;
  createdAt: number;
}

/** 鍛?鏈堝叧绯诲洖椤惧皬鎶ャ€?*/
export interface CoupleRecap {
  id: string;
  period: 'week' | 'month';
  periodKey: string;
  title: string;
  summary: string;
  highlights: string[];
  suggestedTasks: string[];
  suggestedWishes: string[];
  sourceIds: string[];
  createdAt: number;
}

/** 姣忔棩鎯呬荆鎵撳崱銆?*/
export interface CoupleDailyCheckin {
  id: string;
  ymd: string;
  userMood?: string;
  charMood?: string;
  note?: string;
  createdAt: number;
}

/** 鍚庡彴鑷粡钀ヨ妭娴佺姸鎬併€?*/
export interface CoupleAutoCareState {
  lastRunAt?: number;
  lastMomentAt?: number;
  lastRecapAt?: number;
  lastSource?: string;
  lastSummary?: string;
}

/**
 * 鏉ュ線路鎯呬荆绌洪棿锛堝弬鑰?QQ 鎯呬荆绌洪棿锛夈€傛寕鍦?CharacterProfile 涓婏紙姣忎釜瑙掕壊涓€浠斤級锛?
 * 鐢?ChatHub銆屾儏渚ｇ┖闂淬€嶆爣绛鹃〉璇诲啓锛屽苟缁?utils/context.ts 娉ㄥ叆鑱婂ぉ涓婁笅鏂囷紝
 * 璁╄鑹层€岀煡閬撱€嶆亱鐖卞ぉ鏁?/ 浜插瘑搴?/ 鏈€杩戝姩鎬?/ 寰呭姙绾﹀畾 / 鎮勬倓璇濓紝鎹鎵紨 + 涓诲姩浜掑姩銆?
 */
export interface CoupleSpace {
  /** 鍦ㄤ竴璧风邯蹇垫棩锛圷YYY-MM-DD锛夛細璁＄畻銆屽凡鐩告亱 X 澶┿€?*/
  anniversaryDate?: string;
  /** 浜插瘑搴︼紙闅忎簰鍔ㄥ闀匡紝0 璧枫€佹棤涓婇檺锛沀I 鎸夋瘡 100 涓€绾у睍绀鸿繘搴︽潯锛?*/
  intimacy: number;
  moments: CoupleMoment[];
  anniversaries: CoupleAnniversary[];
  photos: CouplePhoto[];
  tasks: CoupleTask[];
  whispers: CoupleWhisper[];
  /** 鎰挎湜娓呭崟锛氫綘浠殑鍏卞悓蹇冩効锛堝彲閫夛紝鑰佹暟鎹彲鑳界己锛?*/
  wishes?: CoupleWish[];
  /** 鎻愰棶绠憋細浣犻棶 TA 绛旂殑闂瓟璁板綍锛堝彲閫夛紝鑰佹暟鎹彲鑳界己锛?*/
  questions?: CoupleQuestion[];
  /** 鍏荤泦鏍斤細浣犱滑涓€璧峰吇鐨勫皬妞嶇墿锛堝彲閫夛紝棣栨娴囨按鏃跺垱寤猴級 */
  plant?: CouplePlant;
  /** 榛樺澶ц€冮獙路鍘嗗彶鏈€楂橀粯濂戝害锛?~100锛屽彲閫夛級 */
  compatBest?: number;
  /** v2锛氱┖闂磋缃紙鑷姩缁忚惀榛樿寮€锛屼富棰橀粯璁ゆ墜璐︼級銆?*/
  settings?: CoupleSpaceSettings;
  /** v2锛氫袱涓汉鐨勫浐瀹氭。妗?/ 灏忎範鎯€?*/
  profile?: CoupleProfile;
  /** v2锛氫粠绾︿細銆佸鍗栥€佸姩鎬佹垨鍥為【娌夋穩鏉ョ殑璁板繂鍗°€?*/
  memoryCards?: CoupleMemoryCard[];
  /** v2锛氬懆/鏈堝叧绯诲洖椤惧皬鎶ャ€?*/
  recaps?: CoupleRecap[];
  /** v2锛氭瘡鏃ユ儏渚ｆ墦鍗°€?*/
  dailyCheckins?: CoupleDailyCheckin[];
  /** v2锛氬悗鍙拌嚜缁忚惀鑺傛祦鐘舵€併€?*/
  autoCare?: CoupleAutoCareState;
  /** 鏈€杩戠殑姣忔棩浜掑姩璁板綍锛堜繚鐣欒嫢骞叉潯锛?*/
  interactions: CoupleInteraction[];
  createdAt: number;
  updatedAt: number;
}

/**
 * 浼氳瘽璁剧疆锛堣亰澶╄缃潰鏉匡級鈥斺€?鏈細璇濓紙涓庤瑙掕壊鐨勫崟鑱婏級涓撳睘閰嶇疆銆?
 * 灞曠ず绫诲瓧娈靛彧褰卞搷鑱婂ぉ鐣岄潰锛涜涓虹被瀛楁浼氫互銆屼細璇濊瀹氥€嶅潡娉ㄥ叆绯荤粺鎻愮ず璇嶃€?
 */
export type LiveChatOverride = 'inherit' | 'on' | 'off';

export interface LiveChatSettings {
    enabled?: boolean;
    draftAwareness?: boolean;
    draftPauseMs?: number;
    draftMinChars?: number;
    draftCooldownMs?: number;
    interjectMaxTargets?: number;
}

export interface ConvoSettings {
    /** 澶囨敞鍚嶏細鑱婂ぉ鐣岄潰椤舵爮 / 娑堟伅鍒楄〃 / 鑱婂ぉ鍒楄〃鏄剧ず鐨勫悕瀛楋紙涓嶆敼鍙樿鑹叉湰鍚嶏級 */
    remarkName?: string;
    /** TA 瀵规垜鐨勫娉細瑙掕壊瀵圭敤鎴风殑绉板懠锛堟敞鍏ユ彁绀鸿瘝锛岃鑹插钩鏃跺氨杩欎箞鍙敤鎴凤級銆傝鑹插彲閫氳繃 [[SET_USER_REMARK]] 鑷繁鏀广€?*/
    userNickname?: string;
    /** 瑙掕壊鏈€杩戜竴娆′富鍔ㄦ崲澶囨敞锛圼[SET_USER_REMARK]]锛夌殑鍔ㄦ満璇存槑锛堝脊绐?/ 鑱婂ぉ鎵嬪笎閲屽睍绀猴級 */
    userRemarkMotivation?: string;
    /** 瑙掕壊鏈€杩戜竴娆℃崲澶囨敞鐨勬椂闂存埑 */
    userRemarkUpdatedAt?: number;
    /** 瑙掕壊鍘嗘缁欑敤鎴锋崲澶囨敞鐨勮褰曪紙鑱婂ぉ鎵嬪笎銆孴A 鎬庝箞绉板懠浣犮€嶆爮鐩睍绀猴紝鏈€鏂板湪鍓嶏級 */
    userRemarkHistory?: Array<{ remark: string; motivation?: string; at: number }>;
    /** 鍏宠仈缇よ亰璁板繂锛?all' 鎼哄甫鍏ㄩ儴鎵€鍦ㄧ兢鐨勮繎鏈熸椿鍔紙榛樿锛屼笌鏃ц涓轰竴鑷达級/ 'none' 涓嶅叧鑱?/ 'selected' 浠呭叧鑱旀寚瀹氱兢 */
    groupMemoryMode?: 'all' | 'none' | 'selected';
    /** groupMemoryMode='selected' 鏃跺叧鑱旂殑缇?id 鍒楄〃 */
    linkedGroupIds?: string[];
    /** 椤舵爮瑁呴グ鏂囨锛氭樉绀哄湪鑱婂ぉ鐣岄潰鏈€椤堕儴锛堥《鏍忎笂鏂癸級鐨勫眳涓皬瀛?*/
    headerDecorText?: string;
    /** 娑堟伅鍖哄簳閮ㄨ楗版枃妗堬細鏄剧ず鍦ㄦ秷鎭垪琛ㄤ笅鏂广€佽緭鍏ユ爮涓婃柟鐨勫眳涓皬瀛?*/
    footerDecorText?: string;
    /** 杈撳叆妗嗗崰浣嶆枃妗堬細鑷畾涔夎緭鍏ユ placeholder锛堥粯璁?"Message..."锛?*/
    inputPlaceholderText?: string;
    /** 鏃佺櫧妯″紡锛氬厑璁歌鑹插崟鐙緭鍑猴紙鍔ㄤ綔/鍦烘櫙锛夋梺鐧芥皵娉?*/
    narrationMode?: boolean;
    /** 瀹炴椂鑱婂ぉ妯″紡锛歩nherit 璺熼殢鍏ㄥ眬锛沷n/off 瑕嗙洊鍏ㄥ眬銆?*/
    liveChatOverride?: LiveChatOverride;
    /** 蹇冨０鎵嬭寮€鍏筹紙榛樿寮€锛夛細鍏抽棴鍚庤亰澶╅噷鐨勩€屽伔鐪嬪績澹般€嶅叆鍙ｄ笉鍙敤 */
    innerVoiceEnabled?: boolean;
    /** 涓撳睘閾冨０锛氭柊娑堟伅閫氱煡闊筹紙undefined/'none' = 闈欓煶锛岄璁捐 utils/ringtone.ts锛?*/
    ringtone?: 'none' | 'chime' | 'bubble' | 'bell' | 'retro' | 'koto';
    /** 绉佽亰鐗瑰埆鍏冲績锛氬紑鍚悗 TA 鐨勬秷鎭?姝ゅ埢璧扮嫭绔嬫彁閱掋€?*/
    specialCare?: boolean;
    /** 鐗瑰埆鍏冲績涓撳睘鎻愰啋闊筹紱鏈缃椂鍥為€€鍒?ringtone锛屽啀鍥為€€娓呴搩銆?*/
    specialCareRingtone?: 'none' | 'chime' | 'bubble' | 'bell' | 'retro' | 'koto';
    /** 鐗瑰埆鍏冲績鏄惁鎻愰啋娑堟伅涓庢鍒伙紱undefined 瑙嗕负寮€鍚€?*/
    specialCareNotify?: boolean;
    /** 闅愯棌鏃堕棿鎴筹細鏈細璇濊鐩栧叏灞€ chatShowTimestamp */
    hideTimestamp?: boolean;
    /** 鎵€鍦ㄥ湴鍖猴細娉ㄥ叆鎻愮ず璇嶏紝褰卞搷瑙掕壊浣滄伅 / 鏃跺樊 / 璇濋璐村悎 */
    region?: string;
    /** 瀹炴椂鎰熺煡路绾夸笂锛氬湪绾胯亰澶╅噷鏄庣‘鎶娿€屽綋鍓嶇湡瀹炴椂闂淬€嶅憡璇夋ā鍨嬶紙榛樿寮€锛屽叧鎺夊垯涓嶆敞鍏ラ挓鐐癸級銆?*/
    realtimeClockOnline?: boolean;
    /** 瀹炴椂鎰熺煡路绾夸笅锛氱嚎涓嬮潰瀵归潰妯″紡閲屼篃鎶娿€屽綋鍓嶇湡瀹炴椂闂淬€嶅憡璇夋ā鍨嬶紙榛樿鍏筹紝绾夸笅澶氫负鏋剁┖鍦烘櫙锛夈€?*/
    realtimeClockOffline?: boolean;
    /** 鍥炴湜灏忔姤锛氬紑鍚悗鑱婂ぉ閲屽彲鐢熸垚銆屾槰鏃ユ潵淇?/ 鍥炴湜路鍛ㄧ珷 / 鍥炴湜路鏈堢珷銆嶅ū涔愬皬鎶ャ€?*/
    tabloidEnabled?: boolean;
    /** 涓诲姩鏌ヨ锛氬彂娑堟伅鍓嶅厛鐣欐剰褰撳墠鏃堕棿 / 澶╂皵 / 鐑偣绛夊疄鏃朵俊鎭啀寮€鍙ｏ紙鎻愮ず璇嶆敞鍏ワ級 */
    proactiveLookup?: boolean;
    /** 涓诲姩鍙戞秷鎭€岄殢鏈?30 鍒唦10h銆嶆ā寮忔爣璁帮紙intervalMinutes 浠嶆槸璋冨害鍣ㄥ疄闄呰鐨勫€硷級 */
    proactiveRandom?: boolean;
    /** 涓诲姩璇煶閫氳瘽锛氳鑹插湪涓诲姩鎵剧敤鎴锋椂鍙寜浜鸿/鍓ф儏鑷鍐冲畾鐩存帴鎷ㄨ闊崇數璇濓紙闇€涓诲姩鍙戞秷鎭紑鍚級 */
    proactiveCallEnabled?: boolean;
    /** 涓诲姩涓虹敤鎴风偣澶栧崠锛氬紑鍚悗瑙掕壊鍙湪鍚堥€傚満鏅紙楗偣/闄嶆俯/鐢ㄦ埛鍠婇タ鈥︼級涓诲姩鏇跨敤鎴蜂笅鍗曞鍗栧苟浠ｄ粯锛?
     *  鍦ㄨ亰澶╅噷鐢熸垚鍙偣寮€鐨勫鍗栬鍗曞皬绁ㄣ€傚叧闂垯姘镐笉瑙﹀彂璇ヨ涓恒€傞粯璁ゅ叧銆?*/
    proactiveTakeoutOrder?: boolean;
    /** 涓诲姩鍙戞湅鍙嬪湀锛?off' 鍏?/ 'random' 闅忕紭 / 鏁板瓧 = 鑷畾涔夐棿闅斿皬鏃讹紙鎻愮ず璇嶅€惧悜 + 閰嶇疆浣嶏級 */
    momentsAutoPost?: 'off' | 'random' | number;
    /** 鍏佽 char 鐪嬫墜鏈猴細瑙掕壊鍙嚜鐒舵彁鍙婄敤鎴锋墜鏈洪噷鐨勬棩绋?/ 鏈嬪弸鍦?/ 闊充箰鍔ㄦ€侊紙鎻愮ず璇嶆敞鍏ワ級 */
    allowPhoneBrowse?: boolean;
    /** 鑷姩绾夸笅锛氬璇濆彂灞曞埌瑙侀潰鎯呭鏃惰嚜鍔ㄥ垏鎹㈢嚎涓嬮潰瀵归潰妯″紡锛堟彁绀鸿瘝娉ㄥ叆锛?*/
    autoOffline?: boolean;
    /** 鍙戞秷鎭敓鎴愬舰寮忥細'split' 涓€鍙ヤ竴鍙ヨ功锛堥粯璁わ級/ 'whole' 涓€澶ф璇村畬 / 'freeform' 鏃х増鎸変汉璁鹃殢鎰忥紙鍏煎鏃ф暟鎹紝绛夊悓 split + personaDrivenMessageLength锛?*/
    bubbleStyleMode?: 'split' | 'whole' | 'freeform';
    /** 鍥炲闀跨煭鎸変汉璁鹃殢鎰忥細鍙喅瀹氭湰杞澶氳灏戯紝涓嶅喅瀹氭媶鎴愬嚑鏉℃秷鎭?*/
    personaDrivenMessageLength?: boolean;
    /** 杩炲彂涔熼€愭潯鍥烇細鐢ㄦ埛杩炵画鍙戦€佸鏉″彲瑙佹枃鏈秷鎭椂锛岄€愭潯鎺掗槦瑙﹀彂瑙掕壊鍥炲銆傞粯璁ゅ叧銆?*/
    autoReplyEachUserMessage?: boolean;
    /** 琛ㄦ儏鑱旀兂锛氬厑璁歌鑹插湪鍚堥€傛椂鏈鸿仈鎯冲苟鍙戦€佽〃鎯呭寘锛堟彁绀鸿瘝娉ㄥ叆锛?*/
    emojiAssociation?: boolean;
    /** 姣忚疆瀵硅瘽鐢熷浘锛氱敓鍥剧绾块厤缃綅锛堝紑鍚悗姣忚疆鍥炲灏濊瘯閰嶅浘锛岄渶鐢熷浘 API锛?*/
    perTurnImageGen?: boolean;
    /** 璇戞枃椋庢牸锛氬鐓х炕璇戞椂杩藉姞鐨勯鏍艰姹傦紙濡傘€屽彛璇寲銆嶃€屾枃瀛﹁厰銆嶏級 */
    translateStyle?: string;

    // 鈹€鈹€ 绔嬬粯 鈹€鈹€
    /** 瑙掕壊路鏈細璇濆ご鍍忥紙瑕嗙洊 char.avatar锛屼粎鏈細璇濆睍绀猴級 */
    charAvatarOverride?: string;
    /** 鍏佽 TA 鑷富鎶婄敤鎴峰彂鏉ョ殑鍥剧墖璁句负鑷繁鐨勫ご鍍忋€?*/
    allowCharAvatarFromUserImage?: boolean;
    /** 涓绘帶路鏈細璇濆ご鍍忥紙瑕嗙洊鐢ㄦ埛澶村儚锛屼粎鏈細璇濆睍绀猴級 */
    userAvatarOverride?: string;
    /** 瑙掕壊绔嬬粯锛氳亰澶╃晫闈㈠彸涓嬭鍗婇€忔槑绔嬬粯锛坓algame 寮忥級 */
    spriteImage?: string;
    /** 鐢熷浘鍙傝€冨浘锛氫綔涓?img2img / edits 鐨勫弬鑰冨簳鍥鹃厤缃綅 */
    spriteRefImage?: string;
    /** 瑙嗛閫氳瘽路閫氳瘽绔嬬粯锛氭儏缁€?鈫?鍥撅紙'榛樿' 鐢ㄤ綔閫氳瘽鑳屾櫙/褰㈣薄锛?*/
    callSprites?: Record<string, string>;

    // 鈹€鈹€ 鑳屾櫙鍥撅紙娑堟伅鍖鸿儗鏅部鐢?char.chatBackground锛?鈹€鈹€
    /** 椤堕儴路澶村儚鑳屽悗锛氳亰澶╅《鏍忚儗鏅浘 */
    headerBgImage?: string;
    /** 椤堕儴璐磋竟锛氶《鏍忎笅鏂硅楗版í鏉?*/
    headerEdgeImage?: string;
    /** 娑堟伅鍖鸿创杈癸細杈撳叆鏍忎笂鏂硅楗版í鏉?*/
    msgEdgeImage?: string;
    /** 韬唤鍗＄敾鏉匡細瑙掕壊涓婚〉锛堣祫鏂欏崱锛夐《閮ㄨ儗鏅?*/
    idCardImage?: string;
    /** 搴曢儴杈撳叆鏍忚儗鏅浘 */
    inputBarImage?: string;
}

/** 缇ゅ叕鍛婏紙QQ 寮忥級锛氫竴鏉″綋鍓嶇敓鏁堢殑鍏憡锛岀兢涓?绠＄悊鍛樺彲鍙戝竷銆佷慨鏀规垨鎾や笅銆?*/
export interface GroupConvoSettings {
    bubbleStyleMode?: 'split' | 'whole' | 'freeform';
    personaDrivenMessageLength?: boolean;
    liveChatOverride?: LiveChatOverride;
    autoReplyEachUserMessage?: boolean;
    narrationMode?: boolean;
    innerVoiceEnabled?: boolean;
    translationEnabled?: boolean;
    translateSourceLang?: string;
    translateTargetLang?: string;
    translateStyle?: string;
    emojiAssociation?: boolean;
    allowedEmojiCategoryIds?: string[];
    headerDecorText?: string;
    footerDecorText?: string;
    inputPlaceholderText?: string;
    hideTimestamp?: boolean;
    contextLimit?: number;
    mountedWorldbookIds?: string[];
}

export interface GroupAnnouncement {
    /** 鍏憡姝ｆ枃 */
    text: string;
    /** 鍙戝竷鑰咃細'user' 鎴?charId */
    by: string;
    /** 鍙戝竷 / 鏈€鍚庝慨鏀规椂闂达紙ms锛?*/
    at: number;
}

export interface GroupChatRecord {
    id: string;
    title: string;
    createdAt: number;
    updatedAt: number;
    pinned?: boolean;
    messages: Message[];
}

export interface GroupApiConfig {
    baseUrl: string;
    apiKey: string;
    model: string;
}

export interface GroupProfile {
    id: string;
    name: string;
    members: string[];
    avatar?: string;
    createdAt: number;
    convoSettings?: GroupConvoSettings;
    /**
     * 绉佽亰閲?杩戞湡缇ゆ椿鍔?涓婁笅鏂囦粠杩欎釜缇ゆ渶澶氬彇鏈€鍚庡灏戞潯娑堟伅銆?
     * 涓嶈榛樿 80銆傝澶х偣鑳借娲昏穬缇ゆ洿瀹屾暣锛岃灏忕偣鑺傜渷 token銆侀伩鍏嶆煇涓椿璺冪兢鎶婂叾浠栫兢鎸ゆ帀銆?
     */
    privateContextCap?: number;
    /** 缇や富銆?user' = 鐢ㄦ埛鏈汉锛涘巻鍙茬兢娌℃湁璇ュ瓧娈垫椂鎸夌敤鎴锋槸缇や富澶勭悊銆?*/
    ownerId?: string;
    /** 绠＄悊鍛?charId 鍒楄〃锛堢兢涓诲ぉ鐒舵嫢鏈夌鐞嗗憳鏉冮檺锛屼笉闇€瑕侀噸澶嶅垪鍦ㄨ繖閲岋級銆?*/
    adminIds?: string[];
    /** 缇ゅ悕鐗囷細charId锛堟垨 'user'锛夆啋 鍦ㄦ湰缇ゆ樉绀虹殑鏄电О銆傝鑹插彲閫氳繃 [[SET_NICKNAME]] 鑷繁鏀广€?*/
    memberNicknames?: Record<string, string>;
    /** 澶磋锛歝harId锛堟垨 'user'锛夆啋 缇や富/绠＄悊鍛樿缃殑涓撳睘澶磋锛屾樉绀哄湪鍚嶅瓧鏃佺殑灏忓窘绔犮€?*/
    memberTitles?: Record<string, string>;
    /** 瑙掕壊瑙嗚鍏崇郴锛歷iewer charId 鈫?target charId 鈫?鈥滃湪 viewer 鐪奸噷 target 鏄皝 / 浠€涔堝叧绯?/ 鏈夋病鏈夎繃鑺傗€濄€傚彧缁?viewer 鑷繁鍙戣█鏃跺弬鑰冦€?*/
    memberLenses?: Record<string, Record<string, string>>;
    /** 绂佽█锛歝harId 鈫?瑙ｇ鏃堕棿鎴筹紙ms锛夈€傚綋鍓嶆椂闂村皬浜庤鍊兼椂璇ユ垚鍛樿绂佽█銆?*/
    mutedUntil?: Record<string, number>;
    /** 鍏ㄥ憳绂佽█锛氬紑鍚悗鎵€鏈夎鑹叉垚鍛樻湰杞兘涓嶅彂瑷€锛堜粎缇や富/绠＄悊鍛橈紳鐢ㄦ埛鍙彂锛夛紝瀵兼紨鐩存帴璺宠繃銆?*/
    mutedAll?: boolean;
    /** 瑙掕壊鍚勮嚜鍥炲锛氬紑鍚悗缇よ亰姣忚疆鎸夋垚鍛樺垎鍒皟鐢?API锛岃€屼笉鏄竴娆″婕旇皟鐢ㄧ粺绛瑰叏鍦恒€?*/
    replyIndividually?: boolean;
    /** 瀹炴椂鑱婂ぉ妯″紡锛歩nherit 璺熼殢鍏ㄥ眬锛沷n/off 瑕嗙洊鍏ㄥ眬銆?*/
    liveChatOverride?: LiveChatOverride;
    /** 鏈兢涓撳睘 API锛氫粎鍦ㄢ€滆鑹插悇鑷洖澶嶁€濇ā寮忎笅浣滀负鎴愬憳 API 鐨勫洖閫€锛屼笉褰卞搷绉佽亰鎴栧叾浠栫兢銆?*/
    groupApi?: GroupApiConfig;
    /** 鎴愬憳涓撳睘 API锛歝harId 鈫?API 閰嶇疆锛涗粎鍦ㄢ€滆鑹插悇鑷洖澶嶁€濇ā寮忎笅瑕嗙洊鏈兢榛樿 API銆?*/
    memberApis?: Record<string, GroupApiConfig>;
    /** 璁╄鑹茶嚜鍔ㄦ帴璇濓細鐢ㄦ埛鍙戣█鍚庯紝棰濆缁窇鑻ュ共杞鑹蹭箣闂寸殑鑷劧瀵硅瘽銆?*/
    autoContinueEnabled?: boolean;
    /** 鑷姩鎺ヨ瘽杞暟銆傛瘡杞細璁╃兢鎴愬憳鍦ㄧ敤鎴锋梺瑙傜姸鎬佷笅缁х画鎺ヨ瘽涓€娆°€?*/
    autoContinueRounds?: number;
    /**
     * 缇よ亰鑷畾涔夊紑鍦虹櫧銆傜┖缇よ亰杩涘叆鏃舵樉绀洪€夋嫨鍣紱涓€鏉″紑鍦虹櫧鍙啓澶氳锛?
     * 鏀寔銆屾垚鍛樺悕锛氬唴瀹广€嶅墠缂€鎷嗘垚澶氫釜鎴愬憳姘旀场銆?
     */
    openingGreetings?: string[];
    /** 缇ゅ叕鍛婏細缇や富/绠＄悊鍛樺彂甯冿紝杩涘叆缇よ亰鏃剁疆椤跺睍绀猴紝骞舵敞鍏ョ兢鑱婁笂涓嬫枃璁╂垚鍛樼煡鏅撱€傛挙涓嬫椂涓?undefined銆?*/
    announcement?: GroupAnnouncement;
    /** 鑱婂ぉ鍒楄〃缃《銆?*/
    pinned?: boolean;
    /** 鐗瑰埆鍏冲績锛氳繖浜涙垚鍛樺湪缇ら噷鐨勬秷鎭細琚珮浜?鎻愰啋銆?*/
    specialCareMemberIds?: string[];
    /** 鐗瑰埆鍏冲績鏄惁寮€鍚秷鎭彁閱掋€倁ndefined 瑙嗕负寮€鍚€?*/
    specialCareNotify?: boolean;
    /** 鐢便€岀敤鎴风ぞ浜ゅ湀銆嶅奖瀛愮兢鑱婅浆鎴愮殑姝ｅ紡缇ゃ€傘€岄殣钘忓凡鎺ュ叆 NPC 涓庣兢銆嶅紑鍚椂锛岀诞璇垪琛ㄤ細闅愯棌杩欑被缇ゃ€?*/
    ambientSocialSource?: {
        entryId: string;
        relation?: AmbientSocialRelation;
        relationLabel?: string;
    };
    /** 褰撳墠缇よ亰璁板綍鍖呮爣棰橈紝鐢ㄤ簬瀵煎嚭/瀵煎叆鍚庢樉绀猴紝涓嶇瓑鍚屼簬缇ゅ悕銆?*/
    chatArchiveTitle?: string;
    /** 褰撳墠鎵撳紑鐨勭兢鑱婅褰?id銆傛湭璁剧疆鏃舵部鐢ㄩ粯璁ゆ秷鎭祦銆?*/
    activeChatRecordId?: string;
    /** 缇よ亰璁板綍蹇収锛岀敤浜庢柊鑱婂ぉ銆佸垏鎹㈡棫璁板綍銆佹敼鏍囬銆佺疆椤跺拰鍒犻櫎銆?*/
    chatArchives?: GroupChatRecord[];
    /** 鍗曚釜缇よ亰涓撳睘鑳屾櫙鍥撅紙data URL锛夈€?*/
    chatBackgroundImage?: string;
    /** 缇よ亰鍥炲舰閽堛€岃荡涓害銆嶈缃€?*/
    offlineMode?: {
        enabled?: boolean;
        style?: string;
        maxChars?: number;
        openingStrategy?: 'choose' | 'story' | 'skip';
        openingPreset?: 'approach' | 'visit' | 'encounter' | 'appointment' | 'custom';
        customScenario?: string;
    };
    /** 宸茶В鏁ｆ爣璁帮細淇濈暀搴曞眰璁板綍渚涘浠?娓呯悊鍏煎锛屼絾鏅€氳亰澶╁垪琛ㄥ拰鍚嶅唽涓嶅啀鏄剧ず銆?*/
    dissolved?: boolean;
    dissolvedAt?: number;
}

export interface CharacterExportData extends Omit<CharacterProfile, 'id' | 'modelId' | 'memories' | 'refinedMemories' | 'activeMemoryMonths'> {
    version: number;
    type: 'moro_character_card';
    embeddedTheme?: ChatTheme;
}

/** 绲路鐢ㄦ埛绀句氦鑳屾櫙锛氫笉鏄寮忕缁忛摼鎺ヨ鑹诧紝鑰屾槸鐢ㄦ埛浜洪檯鍏崇郴閲岀殑褰卞瓙鑱旂郴浜?缇よ亰銆?*/
export type AmbientSocialRelation =
    | 'family'
    | 'relative'
    | 'friend'
    | 'bestie'
    | 'coworker'
    | 'classmate'
    | 'neighbor'
    | 'crush'
    | 'group';

export interface AmbientSocialContact {
    id: string;
    kind: 'contact';
    name: string;
    relation: AmbientSocialRelation;
    relationLabel: string;
    avatar: string;
    note: string;
    lastMessage: string;
    lastAt: number;
    unread?: number;
    pinned?: boolean;
    hidden?: boolean;
    /** 杞垚姝ｅ紡 CharacterProfile 鍚庡啓鍏ワ紝鍚庣画涓嶅啀褰撳奖瀛愯仈绯讳汉鏄剧ず銆?*/
    linkedCharId?: string;
    createdAt: number;
}

export interface AmbientSocialGroup {
    id: string;
    kind: 'group';
    name: string;
    relation: 'group';
    relationLabel: string;
    avatar: string;
    note: string;
    memberNames: string[];
    lastMessage: string;
    lastAt: number;
    unread?: number;
    pinned?: boolean;
    hidden?: boolean;
    /** 杞垚姝ｅ紡 GroupProfile 鍚庡啓鍏ワ紝鍚庣画涓嶅啀褰撳奖瀛愮兢鑱婃樉绀恒€?*/
    linkedGroupId?: string;
    createdAt: number;
}

export type AmbientSocialEntry = AmbientSocialContact | AmbientSocialGroup;

export interface AmbientSocialState {
    version: number;
    entries: AmbientSocialEntry[];
    seededAt: number;
    lastGrowthAt?: number;
}

export interface UserProfile {
    name: string;
    avatar: string;
    bio: string;
    /**
     * 閽卞寘浣欓锛堝彲鑺辩殑閽憋級銆傞潬缁忚惀搴楅摵銆岃惀涓氥€嶈禋鍙栵紝鐢ㄤ簬銆屽線鏉ャ€嶉噷缁欒鑹茶浆璐?/ 鍙戠孩鍖咃紝
     * 鏀跺埌瑙掕壊绾㈠寘棰嗗彇鍚庡洖鍒伴挶鍖呫€備笌銆岃璐︺€嶏紙璁板綍鐜板疄閲戦挶鐨勬祦姘达級鐩镐簰鐙珛銆佷簰涓嶅奖鍝嶃€?
     */
    balance?: number;
    /** 璐墿鍟嗗煄路鑳屽寘锛氫拱涓嬩絾杩樻病閫佸嚭鍘荤殑绀肩墿銆?*/
    shopInventory?: ShopOwnedItem[];
    /** 璐墿鍟嗗煄路璐墿杞︼細鍔犺喘浣嗚繕娌＄粨绠楃殑鍟嗗搧锛堟窐瀹濆紡锛夈€?*/
    shopCart?: ShopCartLine[];
    /** 璐墿鍟嗗煄路鏀惰棌锛堟窐瀹濆紡鎯宠娓呭崟锛夛細鏀惰棌鐨勫晢鍝?id銆?*/
    shopFavorites?: string[];
    /** 璐墿鍟嗗煄路鎴戠殑璁㈠崟锛堟窐瀹濆紡锛屽惈鐗╂祦杩涘害锛涚‘璁ゆ敹璐у悗鎵嶈繘鑳屽寘锛夈€?*/
    shopOrders?: ShopOrder[];
    /** 璐墿鍟嗗煄路宸查浼樻儬鍒?id锛堟弧鍑忓埜锛岀粨绠楄嚜鍔ㄧ敤鏈€浼樼殑涓€寮狅級銆?*/
    shopCoupons?: string[];
    /** 楗エ(澶栧崠)路宸查骞冲彴绾㈠寘 id锛堟弧鍑忓埜锛岀粨绠楄嚜鍔ㄧ敤鏈€浼樼殑涓€寮狅級銆?*/
    takeoutRedpackets?: string[];
    /** 璐墿鍟嗗煄路鎴戠殑灏忕エ锛氳喘涔?/ 璧犻€?/ 鏀剁ぜ鍘嗗彶锛堟渶鏂板湪鍓嶏級銆?*/
    shopReceipts?: ShopReceipt[];
    /** 璐墿鍟嗗煄路娴忚瓒宠抗锛堟窐瀹濆紡锛夛細鐪嬭繃鐨勫晢鍝?id + 鏃堕棿锛堟渶鏂板湪鍓嶏紝鍘婚噸锛岄檺閲忥級銆?*/
    shopFootprints?: ShopFootprint[];
    /** 璐墿鍟嗗煄路鎴戝啓鐨勮瘎浠凤紙纭鏀惰揣鍚庡鍟嗗搧鐨勩€屾檼鍗曘€嶏紝娉ㄥ叆鍟嗗搧璇︽儏璇勪环鍖虹疆椤讹級銆?*/
    shopReviews?: ShopUserReview[];
    /** 璐墿鍟嗗煄路娣橀噾甯佷綑棰濓紙绛惧埌/涓嬪崟鑾峰緱锛岀粨绠楀彲鎶电幇锛夈€?*/
    shopCoins?: number;
    /** 璐墿鍟嗗煄路涓婃姣忔棩绛惧埌鐨勬椂闂存埑锛堝悓涓€鑷劧鏃ュ彧鑳界鍒颁竴娆★級銆?*/
    shopCheckinAt?: number;
    /**
     * 鐢ㄦ埛鏈汉鎺ュ叆銆岄〉澶栥€嶇殑鐘舵€侊細鎹忕殑 chibi銆佹鍒绘墍鍦ㄦ埧闂淬€佸湪骞插槢銆傚彲闅忔椂鏀广€?
     * enabled=false锛堢櫥鍑猴級鏃讹紝鑱婂ぉ閲岀粰瑙掕壊鐨?鐢ㄦ埛鍦ㄩ〉澶?鎻愮ず璇嶉殢涔嬫秷澶便€?
     */
    vrState?: UserVRState;
    /** 绲路鏄惁寮€鍚敤鎴风ぞ浜ゅ湀锛氬叧闂悗涓嶅啀鑷姩鍑虹幇闅忔満瀹朵汉/鍚屼簨/鏈嬪弸/浜叉垰/缇よ亰绛夎儗鏅細璇濄€?*/
    ambientSocialEnabled?: boolean;
    /** 绲路鏄惁闅愯棌宸茶浆鎴愭寮忚鑹?缇よ亰鐨勭ぞ浜ゅ湀 NPC銆倁ndefined 瑙嗕负闅愯棌銆?*/
    ambientSocialHideConverted?: boolean;
    /** 绲路瀹炴椂鑱婂ぉ妯″紡鍏ㄥ眬榛樿銆傞粯璁ゅ叧闂紱寮€鍚悗浼氳瘽鍙崟鐙户鎵?寮€鍚?鍏抽棴銆?*/
    liveChatSettings?: LiveChatSettings;
    /** 绲路鐢ㄦ埛瀹屾暣绀句氦鍏崇郴锛氶殢鏈哄浜?鍚屼簨/鏈嬪弸/浜叉垰/缇よ亰绛夎儗鏅細璇濓紝闅忓墽鎯呮椂闂磋交寰敓闀裤€?*/
    ambientSocial?: AmbientSocialState;
    /** 鎷嶄竴鎷嶅悗缂€锛堝井淇″紡锛夛細鍒汉銆屾媿浜嗘媿 浣?鐨?鍚庣紑>銆嶉噷鐨勫悗缂€銆傜敤鎴疯嚜瀹氫箟锛岄粯璁ゃ€岃剳琚嬨€嶃€?*/
    patSuffix?: string;
}

export interface UserVRState {
    /** 鏄惁鎺ュ叆椤靛锛堢櫥鍑哄悗涓嶅啀鍚戣鑹叉敞鍏?鐢ㄦ埛鍦ㄩ〉澶?鎻愮ず锛?*/
    enabled: boolean;
    /** 鐢ㄦ埛姝ゅ埢鎶婅嚜宸辨寕鍦ㄥ摢涓埧闂?*/
    currentRoom?: VRRoomId;
    /** 鐢ㄦ埛鑷繁鍐欑殑"鍦ㄩ〉澶栧共鍢?锛屼細娉ㄥ叆鑱婂ぉ鎻愮ず璇?+ 骞挎挱鎴愯涓哄崱鐗?*/
    activity?: string;
    /** 鏈€杩戜竴娆℃洿鏂版椂闂?*/
    updatedAt?: number;
    /** 鐢ㄦ埛鍦ㄩ〉澶栭噷鐨?chibi 褰㈣薄锛堝悓瑙掕壊 chibi 缁撴瀯锛屾潵鑷?mode="user" 鐨勬崗浜哄櫒锛?*/
    chibi?: VRChibi;
    /** 鐢ㄦ埛瀛樼殑澶氬褰㈣薄锛堟崲瑁呬綅锛夈€?*/
    chibiLooks?: VRChibi[];
}

export interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
}

export interface XhsStockImage {
    id: string;
    url: string;           // 鍥惧簥URL (must be public https)
    tags: string[];        // 鏍囩 e.g. ['缇庨','鍜栧暋','涓嬪崍鑼?]
    addedAt: number;       // timestamp
    usedCount: number;     // 琚娇鐢ㄦ鏁?
    lastUsedAt?: number;   // 涓婃浣跨敤鏃堕棿
}

// 鈹€鈹€ 鍗犲崪锛堟姌瀛愭垙路鍗犲崪锛夆攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
/** 涓€寮犲鍏ョ殑鍗犲崪鐗屽浘銆傚缃楁寜 index 0~77銆侀浄璇烘浖鎸?index 1~36 瀵瑰簲鏂囦欢鍚嶃€?*/
export interface DivinationCard {
    id: string;            // `${deck}_${index}`
    deck: 'tarot' | 'lenormand';
    index: number;         // 濉旂綏 0~77 / 闆疯鏇?1~36
    dataUrl: string;       // 鍘嬬缉鍚庣殑鏈湴鍥撅紙dataURL锛屽瓨 IndexedDB锛?
    addedAt: number;
}

/** 涓€娆″崰鍗滆褰曪紙鍙€夋寔涔呭寲锛屼究浜庛€屽彂鍒拌亰澶┿€嶄笌鍥炵湅锛夈€?*/
export interface DivinationSession {
    id: string;
    charId?: string;       // 涓€璧峰崰鍗滅殑瑙掕壊锛堝彲绌猴級
    kind: 'tarot' | 'lenormand' | 'liuyao' | 'meihua';
    question: string;
    /** engines 浜у嚭鐨勭墝闈?鍗﹁薄鎽樿鏂囧瓧 */
    readingText: string;
    /** 瑙ｈ锛氭墜鍔ㄥ啓鐨勬垨 API 鐢熸垚鐨?*/
    interpretation?: string;
    interpretedBy?: 'manual' | 'ai';
    createdAt: number;
}

// 鈹€鈹€ 鐣浠跨湡鍥炬枃锛堟姌瀛愭垙路鐣锛夌粨鏋勫寲鏁版嵁 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
/** 浠垮井淇¤亰澶╂埅鍥?*/
export interface FauxWeChat {
    contactName: string;
    messages: { from: 'user' | 'char'; text: string; time?: string }[];
}
/** 浠垮井淇℃湅鍙嬪湀 */
export interface FauxMoments {
    author: string;
    text: string;
    images?: number;          // 鍗犱綅鍥炬暟閲忥紙浠跨湡鐏板潡锛?
    time: string;
    likes: string[];
    comments: { name: string; text: string }[];
}
/** 浠垮皬绾功鍥炬枃绗旇 */
export interface FauxXhs {
    title: string;
    body: string;
    images?: number;          // 鍗犱綅鍥炬暟閲?
    tags: string[];
    author: string;
    likes: number;
    comments: { name: string; text: string }[];
}
/** 浠垮尶鍚嶈鍧涘笘 */
export interface FauxForum {
    board: string;
    title: string;
    op: { floor: string; text: string };
    replies: { floor: string; text: string }[];
}
export type TheaterFauxKind = 'wechat' | 'moments' | 'xhs' | 'forum' | 'weibo' | 'qzone' | 'douban' | 'campus' | 'memo' | 'schedule' | 'receipt' | 'browser';
/** 浠垮井鍗氱儹鎼?/ 寰崥鍚冪摐椤?*/
export interface FauxWeibo {
    topic: string;
    rank?: string;
    posts: { author: string; text: string; time?: string; likes?: number; reposts?: number; comments?: number }[];
    hotComments?: { name: string; text: string; likes?: number }[];
}
/** 浠?QQ 绌洪棿鍔ㄦ€?*/
export interface FauxQzone {
    owner: string;
    text: string;
    images?: number;
    time: string;
    mood?: string;
    visitors?: string[];
    likes: string[];
    comments: { name: string; text: string }[];
}
/** 浠胯眴鐡ｅ皬缁勮璁?*/
export interface FauxDouban {
    group: string;
    title: string;
    author: string;
    text: string;
    replies: { name: string; text: string; time?: string; likes?: number }[];
}
/** 浠挎牎鍥鎶曠 */
export interface FauxCampus {
    school: string;
    wallName: string;
    title?: string;
    text: string;
    images?: number;
    likes: number;
    comments: { name: string; text: string }[];
}
/** 浠挎墜鏈哄蹇樺綍 */
export interface FauxMemo {
    title: string;
    updatedAt: string;
    lines: string[];
}
/** 浠挎墜鏈烘棩绋嬭〃 */
export interface FauxSchedule {
    title: string;
    date: string;
    items: { time: string; title: string; place?: string; note?: string; done?: boolean }[];
}
/** 浠胯鍗?/ 灏忕エ */
export interface FauxReceipt {
    shopName: string;
    orderNo: string;
    status: string;
    items: { name: string; count?: number; price?: number }[];
    total: number;
    timeline: { time: string; text: string }[];
}
/** 浠挎祻瑙堝櫒鎼滅储椤?*/
export interface FauxBrowser {
    query: string;
    summary: string;
    results: { title: string; snippet: string; url?: string }[];
}
export type FauxScreenData =
    | FauxWeChat | FauxMoments | FauxXhs | FauxForum
    | FauxWeibo | FauxQzone | FauxDouban | FauxCampus
    | FauxMemo | FauxSchedule | FauxReceipt | FauxBrowser;

export interface GalleryImage {
    id: string;
    charId: string;
    url: string;
    timestamp: number;
    review?: string;
    reviewTimestamp?: number;
    savedDate?: string; // YYYY-MM-DD format
    chatContext?: string[]; // Recent chat messages at time of save
}

export interface StickerData {
    id: string;
    url: string;
    x: number;
    y: number;
    rotation: number;
    scale?: number; 
}

export interface DiaryPage {
    text: string;
    paperStyle: string;
    stickers: StickerData[];
}

export interface DiaryEntry {
    id: string;
    charId: string;
    date: string;
    userPage: DiaryPage;
    charPage?: DiaryPage;
    timestamp: number;
    isArchived: boolean;
    /** 瑙掕壊鍥炲浜嗙殑鏃ヨ鑷姩鍙戝埌鑱婂ぉ鍚? 璁板綍閭ｆ潯 score_card 娑堟伅鐨?id, 鐢ㄤ簬鍚庣画 edit/delete 鍚屾 */
    chatCardMessageId?: number;
    /** 鏍囪杩欐潯鏃ヨ鏄?鑷姩鍚屾鑱婂ぉ"鏃朵唬浜х敓鐨?(鏈鏇存柊鍚庢柊寤虹殑). 鑰佹棩璁?(瀛楁鏈)
     *  鎵嶄細鍦ㄥ垪琛ㄩ噷鐪嬪埌鎵嬪姩褰掓。鎸夐挳. 闃叉鐢ㄦ埛瀵瑰凡缁忓湪鑷姩鍚屾涓婄殑鏂版棩璁板啀鐐瑰綊妗ｉ€犳垚閲嶅. */
    autoSync?: boolean;
}

// 鈹€鈹€鈹€ HANDBOOK / 鎵嬭处 (璺ㄨ鑹茶仛鍚埪烽浂璐熸媴鐣欑棔鏈? 鈹€鈹€鈹€
//
// 璁捐鍝插锛坲ser 鍏辫瘑锛?
//   - 涓讳綋鏄?user 鑷繁鐨勪竴澶?LLM 璇讳粖澶╄法瑙掕壊鑱婂ぉ鍚庣敤 user 鐨勫彛鍚绘浛 ta 鍐欎竴浠借崏绋?
//     (user 涓嶅繀妯′豢,鍚庣画浼氫簩娆＄紪杈?
//   - 鍗充究 user 涓€澶╂病璇磋瘽,鐢熸椿绯昏鑹蹭滑涔熶細"杩囪嚜宸辩殑灏忕敓娲?,鑷姩濉竴涓ら〉闄即椤?
//     (缁濅笉鑳藉啓鎴?AI 鎹у満 / 绛?user / 鎯?user)
//   - 鍙嶅畬缇庝富涔?鐣欑櫧鍗崇湡瀹?涓嶅己鍒舵瘡澶╃敓鎴?涓嶆樉绀鸿繛缁ぉ鏁?涓嶅仛 streak
//   - 涓€鏃ヤ竴 entry,id 鐩存帴鏄?'YYYY-MM-DD'
//
// Section / tag 妯″瀷鐣欎綅浣嗘殏涓嶅湪 UI 瀹炶(绛?user 鎯虫竻妤?銆?
export type HandbookPageType =
    | 'user_diary'       // LLM 浠ｇ瑪 user 绗竴浜虹О褰撴棩鏃ヨ
    | 'character_life'   // 鐢熸椿绯昏鑹蹭粖鏃ョ殑鐢熸椿娴?闄即椤?
    | 'user_note'        // user 鑷繁鎵嬪啓/琛ュ厖鐨勪竴椤?
    | 'free';            // 鑷敱鏍煎紡,鏈潵鎵╁睍鐢?

export interface HandbookPage {
    id: string;
    type: HandbookPageType;
    charId?: string;          // type=character_life 鏃剁粦瀹氱殑瑙掕壊
    title?: string;
    content: string;          // 涓讳綋鏂囨湰(涔熸槸缂栬緫/鍏滃簳娓叉煋鐢?
    /**
     * 纰庣墖鍖栧睍绀?LLM 鐢熸垚鏃惰嫢杩斿洖 JSON 鏁扮粍(绀惧獟纰庣蹇典綋),瑙ｆ瀽鍑烘潵瀛樿繖閲屻€?
     * 鍓嶇鏈?fragments 璧?FragmentCollage 鎷艰创娓叉煋,鏃犲垯璧?content 娈佃惤娓叉煋銆?
     * user 缂栬緫鍚庝細娓呯┖ fragments,鍥為€€鍒?content 娈佃惤褰㈡€併€?
     */
    fragments?: HandbookFragment[];
    paperStyle?: string;      // 'plain' | 'grid' | 'lined' | 'dot' | 'pink' | 'dark'
    tags?: string[];          // 棰勭暀:section/鏍囩(鐢熺悊鏈?楗/椤圭洰鈥?,v1 涓嶆覆鏌?
    generatedBy?: 'llm' | 'user';
    generatedAt?: number;
    excluded?: boolean;       // user 鎶婅繖椤垫爣璁颁负涓嶅叆鍐?
    isPinned?: boolean;
}

export interface HandbookFragment {
    id: string;
    text: string;             // 30~80 瀛楃ぞ濯掔纰庡康浣?
    time?: string;            // 鍙€夋椂娈垫爣绛?濡?"涓婂崍 10 鐐? / "涓嬪崍" / "10:23"
    // 鈹€鈹€鈹€ v2 妲戒綅鍏冩暟鎹?(鏂扮増寮忔墠鏈? 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
    /** 鏉ヨ嚜 LayoutTemplate 鐨勬Ы id */
    slotId?: string;
    /** 妲借涔夎鑹?鈥?娓叉煋鏃舵寜杩欎釜鍒嗗彂 */
    slotRole?: SlotRole;
    /** 璋佸啓鐨?鈥?'user' 鎴栨煇 charId */
    authorKind?: 'user' | 'char';
    /** 鑻ユ槸鍙嶅簲鍨嬫Ы (sticky-reaction), 寮曠敤鐨勭洰鏍?slotId */
    refersTo?: string;
    /** 缁撴瀯鍖栨暟鎹?(todo / gratitude / mood-card 绛夐渶瑕? */
    payload?: SlotPayload;
}

/**
 * 缁撴瀯鍖?slot 鏁版嵁銆傛櫘閫氭枃鏈Ы涓嶇敤,
 * 浠?todo/gratitude/mood-card/timeline-plan 杩欑"鍒楄〃/鎵撳垎"鎵嶅～銆?
 */
export type SlotPayload =
    | { kind: 'todo'; items: { text: string; done?: boolean }[] }
    | { kind: 'gratitude'; items: string[] }
    | { kind: 'timeline'; items: { time: string; text: string; emoji?: string }[] }
    | { kind: 'mood'; rating: number; tag?: string }       // rating 1~5
    | { kind: 'photo'; src?: string; caption: string };   // src 鐢?user 璐? 涔熷彲鏆傜己

// 鈹€鈹€鈹€ 鍗曢〉鎷艰创鎺掔増 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
//
// v2 璁捐 (2026-05): "鐗堝紡浼樺厛"銆傚厛 roll 涓€浠?layout template (pre-baked JSON),
// 瀹冨凡鍖呭惈姣忎釜妲界殑 {浣嶇疆, 瑙嗚瑙掕壊, 瀛楁暟棰勭畻, 鍙啓鑰厎 鈥斺€?LLM 鍙～绌?涓嶆帓鐗堛€?
// 瑙掕壊鎸夐『搴忕湅鍒?"宸插～鐨勬Ы + 鍓╀綑妲?+ 鑷繁浜烘牸", 閫変竴涓Ы鍐?鎴?pass銆?
//
// 鏃х殑 'main'|'side'|'corner'|'margin' 浠嶇劧淇濈暀 (鑰佹暟鎹洖鏀惧吋瀹?,
// 鏂扮増寮忕敤鏇磋涔夊寲鐨?SlotRole, 娓叉煋鏃舵寜 role 鍒嗗彂鍒颁笓闂ㄧ粍浠躲€?
//
// 鍧愭爣閮界敤鐧惧垎姣?鍥哄畾姣斾緥鐨勭焊闈?鈫?浠绘剰灏哄涓嬮兘涓嶇牬銆?

/** v1 鏃ц鑹?鈥?浠呬负鍏煎鍘嗗彶 entry 鏁版嵁淇濈暀, 鏂扮増寮忎笉瑕佸啀浜у嚭 */
export type LayoutRole =
    | 'main'        // 涓诲尯,澶у潡,姝ｆ斁鎴栧井鏃嬭浆
    | 'side'        // 渚ф爮,涓瓑灏哄
    | 'corner'      // 瑙掕惤,灏忓崱鐗?澶ф棆杞?
    | 'margin';     // 椤佃竟,鏋佸皬灏哄,鍙互绾靛悜

/**
 * v2 妲借鑹?鈥斺€?涓€涓?role = 涓€绉?"鍐呭绫诲瀷 + 瑙嗚鐨偆 + 鍐欎綔绾︽潫"銆?
 * Renderer 鎸?role 鍒嗗彂, prompt 鎸?role 鍑?hint銆?
 *
 * - hero-diary       涓绘棩璁版湰浣? 褰撳ぉ涓诲彊浜?(80~180 瀛?
 * - timeline-plan    鏃堕棿琛?/ 浠婃棩璁″垝 (6~10 琛?
 * - todo             寰呭姙娓呭崟 (3~6 椤?
 * - gratitude        浠婃棩鎰熸仼 / 涓変欢濂戒簨 (3 椤?
 * - mood-card        蹇冩儏鍗?+ 璇勫垎 (20~50 瀛?+ 1~5 鈽?
 * - photo-caption    鐓х墖 + 鐭弿杩?(8~25 瀛? 鍥剧敱 user 璐?
 * - sticky-reaction  鍙嶅簲渚跨 (15~50 瀛? char-only, 蹇呴』寮曠敤宸插～妲?
 * - corner-note      杈硅鐙櫧灏忓瓧 (6~20 瀛?
 */
export type SlotRole =
    | 'hero-diary'
    | 'timeline-plan'
    | 'todo'
    | 'gratitude'
    | 'mood-card'
    | 'photo-caption'
    | 'sticky-reaction'
    | 'corner-note';

/** 璋佽兘濉繖涓Ы */
export type SlotAuthorKind = 'user' | 'char';

/**
 * 妲藉畾涔?鈥斺€?template 閲岀殑涓€涓┖浣? 娓叉煋鏃朵篃鏄?placement 鐨勬墿灞曘€?
 * 姣?v1 鐨?LayoutPlacement 澶? charBudget / eligibleAuthors / slotRole / hint
 */
export interface SlotDef {
    /** 妲?id, 鍦ㄤ竴浠?template 鍐呭敮涓€ */
    id: string;
    /** 瑙嗚 + 鍐呭绫诲瀷 */
    slotRole: SlotRole;
    /** 瀛楁暟棰勭畻 [min, max] 鈥斺€?缁?LLM, 涔熺粰娓叉煋鍣ㄤ及楂樺害 */
    charBudget: [number, number];
    /** 璋佽兘濉? ['user'] / ['char'] / ['user', 'char'] */
    eligibleAuthors: SlotAuthorKind[];
    /** 缁?LLM 鐨勪竴鍙ヨ瘽鐩殑 (浣滀负 prompt hint) */
    hint: string;
    /** 浣嶇疆 鈥?鏁撮〉鐧惧垎姣?*/
    xPct: number;
    yPct: number;
    widthPct: number;
    /** 楂樺害涓婇檺 (% of page) 鈥?娓叉煋鍣ㄨ秴鍑烘埅鏂? 浼伴珮鐢?*/
    maxHeightPct: number;
    rotate?: number;             // 榛樿 0
    zIndex?: number;             // 榛樿 10
    /** 鏄惁鏈〉 hero 鈥?姣忛〉 鈮?1, 瀛楀彿鏈€澶? 瑙嗚鏉冮噸鏈€楂?*/
    isHero?: boolean;
    /** 瑙嗚鐨偆鍙樹綋 (渚? sticky-reaction 鐨勪究绛惧簳鑹? */
    skinVariant?: string;
}

/** 涓€浠介缃増寮?= 涓€缁?SlotDef + 涓€浜涜瑙夎楗?*/
export interface LayoutTemplate {
    id: string;                  // 'plan-day' / 'reflective-day' / 'photo-day' / ...
    name: string;                // 涓枃鏄剧ず鍚?
    /** 姣忛〉 SlotDef 鍒楄〃; index 0 = page 1, 1 = page 2 ... */
    pages: SlotDef[][];
    /** 鎺ㄨ崘浣跨敤鏉′欢鎻愮ず (orchestrator 閫夋ā鏉跨敤) */
    suitFor?: string;
    /** 榛樿绾稿紶搴曠汗: 'plain' | 'grid' | 'lined' | 'dot' */
    paperStyle?: string;
}

/** v2 placement 鈥斺€?LayoutPlacement 鐨勬墿灞? 鎼哄甫 slot 鍏冩暟鎹€?
 *  鑰佹暟鎹病鏈?slotRole 鏃? 娓叉煋鍣ㄨ蛋 v1 鐨?JournalFragmentCard銆?*/
export interface LayoutPlacement {
    pageId: string;             // 瀵瑰簲 HandbookPage.id
    fragmentId?: string;        // 瀵瑰簲 HandbookFragment.id;鎵嬪啓鏁撮〉鐣欑┖
    xPct: number;               // 0~100,宸︿笂瑙?x
    yPct: number;               // 0~100,宸︿笂瑙?y
    widthPct: number;           // 10~95,鍗＄墖瀹藉害鍗犻〉闈㈢櫨鍒嗘瘮
    rotate: number;             // -10 ~ 10,瑙掕惤鍙埌 卤15
    zIndex: number;             // 瓒婂ぇ瓒婂帇涓婇潰
    role: LayoutRole;           // v1 瑙掕壊 (鍏煎)
    /** 璇ラ〉 hero 鈥?瀛楀彿鏈€澶с€佽瑙夋渶鏄剧溂銆傛瘡椤垫渶澶?1 涓€?*/
    isHero?: boolean;
    // 鈹€鈹€鈹€ v2 瀛楁 (鏂扮増寮忔墠鏈? 鑰佹暟鎹负 undefined) 鈹€鈹€鈹€
    /** 鏉ヨ嚜 template 鐨勬Ы id */
    slotId?: string;
    /** v2 璇箟瑙掕壊 (鏈夊垯鎸?SlotRole 鍒嗗彂娓叉煋) */
    slotRole?: SlotRole;
    /** 楂樺害涓婇檺 % */
    maxHeightPct?: number;
    /** 瑙嗚鍙樹綋 (璺熼殢 SlotDef.skinVariant) */
    skinVariant?: string;
}

export interface HandbookLayout {
    pageNumber: number;         // 涓€寮犵焊,1-based;瓒呴噺鏃跺彲鏈?page 2
    placements: LayoutPlacement[];
    generatedAt: number;
    /** v2 鐗堝紡鏉ユ簮 template id (鐢ㄤ簬閲嶇敓鎴愭椂澶嶇敤鐩稿悓 template) */
    templateId?: string;
}

// 鈹€鈹€鈹€ HANDBOOK TRACKER锛堣嚜瀹氫箟鍋ュ悍/鐢熸椿鎵撳崱寮曟搸锛夆攢鈹€鈹€
//
// 璁捐:
// - Tracker = 鐢ㄦ埛鑷畾涔夌殑"鎵撳崱椤?(鐢熺悊鏈?/ 楗 / 鍠濇按 / 蹇冩儏 / 浣撻噸 / 鏈嶈嵂 / 鑷畾涔夆€︹€?
// - 姣忎釜 Tracker 鏈?schema(瀛楁瀹氫箟),绯荤粺鎻愪緵妯℃澘,user 鍙敼鍙缓
// - TrackerEntry = 鏌?tracker 鍦ㄦ煇澶╃殑涓€鏉℃墦鍗¤褰?values 鎸?schema 瀛?
// - 璺?HandbookPage 瑙ｈ€?tracker 鏄粨鏋勫寲鏁版嵁,page 鏄嚜鐢辨枃鏈?纰庣墖
//
export type TrackerFieldKind =
    | 'rating'       // 1~5 绛夌骇(婊戝潡 / emoji 閫夋嫨)
    | 'number'       // 鏁板瓧(浣撻噸 / ml)
    | 'options'      // 澶氶€?/ 鍗曢€?缁忔湡娴侀噺:鏃?灏?涓?澶?
    | 'photo'        // 涓€寮犲浘(楗鎷嶇収)
    | 'text'         // 涓€鍙ヨ瘽澶囨敞
    | 'boolean';     // 鏄?鍚?浠婂ぉ鏈夋病鏈夊ご鐥?

export interface TrackerField {
    key: string;                     // values 瀛楀吀閲岀殑 key
    label: string;                   // 鏄剧ず鍚?"璇勫垎" / "澶囨敞" / "娴侀噺")
    kind: TrackerFieldKind;
    required?: boolean;
    /** rating: 1~max 鏁存暟;number: 鑷敱鏁板瓧 */
    max?: number;
    min?: number;
    unit?: string;                   // 'kg' / 'ml' / '灏忔椂'
    /** options 鏃剁殑鍙€夐」 */
    choices?: { value: string; label: string; emoji?: string }[];
    placeholder?: string;
}

export interface Tracker {
    id: string;
    name: string;                    // "蹇冩儏" / "缁忔湡" / "浠婂ぉ鏈夋病鏈夊亸澶寸棝"
    icon?: string;                   // emoji 鎴?sticker 鍚?
    color: string;                   // tab/鏍囪 搴曡壊
    schema: TrackerField[];
    createdAt: number;
    updatedAt: number;
    /** 绯荤粺棰勮 vs 鐢ㄦ埛鑷缓锛堢郴缁熼璁?user 鍙鐢ㄤ絾涓嶅彲褰诲簳鍒犻櫎锛?/
    isBuiltin?: boolean;
    /** 鍦ㄦ湀鍘嗗崟鍏冩牸涓婂浣?涓€鐪肩湅鍒?浠婃棩 entry 鈥斺€?榛樿鏄剧ず涓诲瓧娈靛€?*/
    cellRenderField?: string;        // schema field key
    sortOrder?: number;              // 鍦?tab 鍒楄〃閲岀殑鎺掑簭
}

export interface TrackerEntry {
    id: string;
    trackerId: string;
    date: string;                    // YYYY-MM-DD
    values: Record<string, any>;
    note?: string;
    createdAt: number;
    updatedAt: number;
}

export interface HandbookEntry {
    id: string;               // = date 'YYYY-MM-DD'
    date: string;
    pages: HandbookPage[];
    /** 浜屾 LLM 鐢熸垚鐨勬暣椤垫帓鐗?涓€澶╁彲鑳借法澶氬紶绾?*/
    layouts?: HandbookLayout[];
    generatedAt?: number;     // 鏈€鍚庝竴娆¤嚜鍔ㄧ敓鎴愮殑鏃堕棿
    updatedAt: number;
}

export interface Task {
    id: string;
    title: string;
    supervisorId: string;
    tone: 'gentle' | 'strict' | 'tsundere';
    deadline?: string;
    isCompleted: boolean;
    completedAt?: number;
    createdAt: number;
}

export interface Anniversary {
    id: string;
    title: string;
    date: string;
    charId: string;
    aiThought?: string;
    lastThoughtGeneratedAt?: number;
}

/**
 * 宀佹椂璁?路 鏃ュ巻璐寸焊
 * 鐢ㄦ埛 / 瑙掕壊寰€鏌愪竴澶╄创鐨勪竴鏉℃爣璁般€俛uthor='user' 鏄墜鍔ㄨ创鐨勶紱
 * author='character' 鏄鑹叉寜浜鸿鑷繁鎯﹁/鎯冲仛鐨勪簨锛圓I 鐢熸垚锛宑harId 蹇呭～锛夈€?
 */
export interface CalendarMark {
    id: string;
    date: string;            // 'YYYY-MM-DD'
    text: string;
    author: 'user' | 'character';
    charId?: string;         // author==='character' 鏃朵负璇ヨ鑹?id
    color?: string;          // 璐寸焊/鑳跺甫鑹诧紙hex 鎴?tailwind 鍙嬪ソ鐨勮壊鍊硷級
    emoji?: string;          // 鍙€夊皬璐寸焊
    createdAt: number;
}

export interface SocialComment {
    id: string;
    authorName: string;
    authorAvatar?: string;
    content: string;
    likes: number;
    isCharacter?: boolean;
    authorType?: 'user' | 'character' | 'stranger';
    authorCharId?: string;
    /** 鏈嬪弸鍦堬細鍥炲鏌愭潯璇勮锛坣ame 鐢ㄤ簬娓叉煋 "A 鍥炲 B: xxx"锛?*/
    replyTo?: { commentId: string; name: string };
}

export interface SocialPost {
    id: string;
    authorName: string;
    authorAvatar: string;
    title: string;
    content: string;
    images: string[];
    likes: number;
    isCollected: boolean;
    isLiked: boolean;
    comments: SocialComment[];
    timestamp: number;
    tags: string[];
    bgStyle?: string;
    authorType?: 'user' | 'character' | 'stranger';
    authorCharId?: string;
    /** 鏈嬪弸鍦堬細鐐硅禐鍒楄〃锛坕d 涓鸿鑹?id 鎴?'user'锛?*/
    likedBy?: { id: string; name: string }[];
    /** 鏈嬪弸鍦堬細杞彂鐨勫師甯栨憳瑕侊紙宓屽叆鍘熷笘鍐呭锛?*/
    repostOf?: { postId: string; authorName: string; content: string; images?: string[] } | null;
    /** 鏈嬪弸鍦堬細鎵€鍦ㄤ綅缃?*/
    location?: string;
    /** 鏈嬪弸鍦堬細璋佸彲浠ョ湅锛坧rivate = 瑙掕壊涓嶅彲瑙併€佷笉浜掑姩锛?*/
    visibility?: 'public' | 'private';
    /** 鏈嬪弸鍦堬細鎻愰啋璋佺湅锛堣鑹?id 鍒楄〃锛岃鎻愰啋鐨勮鑹蹭繚璇佷簰鍔級 */
    mentionedCharIds?: string[];
}

// --- 鎺ㄧ壒 App锛堟湰鍦?AI 鐢熸垚 X/Twitter 鏃堕棿绾匡級---

export type TwitterAuthorType = 'user' | 'character' | 'npc';
export type TwitterNotificationKind = 'reply' | 'like' | 'retweet' | 'quote' | 'mention' | 'follow' | 'dm';

export interface TwitterTranslation {
    targetLang: string;
    text: string;
    provider?: 'ai' | 'fallback';
    translatedAt: number;
}

export type TwitterMediaType = 'image' | 'video' | 'gif' | 'link-card' | 'quote-card';

export interface TwitterMedia {
    type: TwitterMediaType;
    url?: string;
    alt?: string;
    color?: string;
    title?: string;
    description?: string;
    domain?: string;
    durationMs?: number;
    thumbnailColor?: string;
}

export interface TwitterPollOption {
    id: string;
    label: string;
    votes: number;
}

export interface TwitterPoll {
    id: string;
    question?: string;
    options: TwitterPollOption[];
    votedOptionId?: string;
    closesAt?: number;
    closed?: boolean;
}

export interface TwitterReply {
    id: string;
    accountId?: string;
    authorType: TwitterAuthorType;
    authorName: string;
    authorHandle: string;
    authorAvatar?: string;
    charId?: string;
    content: string;
    language?: string;
    country?: string;
    location?: string;
    translations?: Record<string, TwitterTranslation>;
    likes: number;
    createdAt: number;
    replyToReplyId?: string;
}

export interface TwitterTweet {
    id: string;
    accountId?: string;
    authorType: TwitterAuthorType;
    authorName: string;
    authorHandle: string;
    authorAvatar?: string;
    charId?: string;
    authorBio?: string;
    authorLocation?: string;
    authorVerified?: boolean;
    authorFollowers?: number;
    content: string;
    language?: string;
    country?: string;
    location?: string;
    translations?: Record<string, TwitterTranslation>;
    topics: string[];
    media?: TwitterMedia[];
    poll?: TwitterPoll;
    mentions?: string[];
    replies: TwitterReply[];
    replyCount: number;
    retweets: number;
    quotes: number;
    likes: number;
    views: number;
    liked?: boolean;
    retweeted?: boolean;
    bookmarked?: boolean;
    repostedBy?: string;
    pinned?: boolean;
    visibility?: 'public' | 'followers' | 'circle';
    threadSize?: number;
    createdAt: number;
    sourceTweetId?: string;
    sourceTweet?: {
        id: string;
        accountId?: string;
        authorName: string;
        authorHandle: string;
        content: string;
        language?: string;
    };
    quoteNote?: string;
    threadId?: string;
    threadIndex?: number;
    qualityTags?: string[];
    generated?: boolean;
}

export interface TwitterTrend {
    id: string;
    label: string;
    posts: number;
    blurb?: string;
}

export interface TwitterNotification {
    id: string;
    kind: TwitterNotificationKind;
    tweetId: string;
    actorType: TwitterAuthorType;
    actorName: string;
    actorHandle: string;
    actorAvatar?: string;
    actorCharId?: string;
    snippet: string;
    createdAt: number;
    read?: boolean;
}

export interface TwitterProfile {
    id: 'me';
    displayName: string;
    handle: string;
    avatar?: string;
    bannerColor?: string;
    bio?: string;
    location?: string;
    website?: string;
    birthday?: string;
    joinedAt: number;
    language?: string;
    country?: string;
    followers: number;
    following: number;
    updatedAt: number;
}

export interface TwitterAccount {
    id: string;
    authorType: TwitterAuthorType;
    charId?: string;
    displayName: string;
    handle: string;
    avatar?: string;
    bannerColor?: string;
    bio?: string;
    location?: string;
    website?: string;
    birthday?: string;
    joinedAt: number;
    language?: string;
    country?: string;
    followers: number;
    following: number;
    verified?: boolean;
    postingWeight?: number;
    styleTags?: string[];
    interests?: string[];
    commonContacts?: string[];
    profileSummary?: string;
    relationshipHint?: string;
    recentStatus?: string;
    pinnedTweetId?: string;
    profileTabs?: Array<'posts' | 'replies' | 'media' | 'likes' | 'quotes' | 'about'>;
    lastActiveAt?: number;
    followed?: boolean;
    generated?: boolean;
    updatedAt: number;
}

export interface TwitterSearchRecord {
    id: string;
    query: string;
    resultCount?: number;
    createdAt: number;
}

export interface TwitterDMMessage {
    id: string;
    threadId: string;
    senderType: 'user' | 'account';
    accountId?: string;
    content: string;
    tweetId?: string;
    tweetSnapshot?: Pick<TwitterTweet, 'id' | 'authorName' | 'authorHandle' | 'content' | 'topics' | 'replyCount' | 'retweets' | 'likes' | 'language'>;
    createdAt: number;
    read?: boolean;
    status?: 'sent' | 'read' | 'failed';
}

export interface TwitterDMThread {
    id: string;
    accountId: string;
    accountName: string;
    accountHandle: string;
    accountAvatar?: string;
    participantType: Exclude<TwitterAuthorType, 'user'>;
    participantCharId?: string;
    lastMessage: string;
    updatedAt: number;
    unreadCount: number;
    messages: TwitterDMMessage[];
}

export interface SubAccount {
    id: string;
    handle: string; 
    note: string;   
}

export interface SocialAppProfile {
    name: string;
    avatar: string;
    bio: string;
}

export interface StudyChapter {
    id: string;
    title: string;
    summary: string;
    difficulty: 'easy' | 'normal' | 'hard';
    isCompleted: boolean;
    rawContentRange?: { start: number, end: number }; 
    content?: string; 
}

export type StudyCourseKind = 'standard' | 'language';
export type StudyLanguageLevel = 'zero' | 'beginner' | 'intermediate' | 'advanced' | 'professional';
export type StudyLanguageSource = 'built_in' | 'pdf';
export type StudyLanguagePracticeFocus = 'comprehensive';

export interface StudyLanguageConfig {
    targetLanguage: string;
    instructionLanguage: string;
    level: StudyLanguageLevel;
    goal: string;
    source: StudyLanguageSource;
    practiceFocus: StudyLanguagePracticeFocus;
    customNotes?: string;
}

export interface StudyCourse {
    id: string;
    kind?: StudyCourseKind;
    title: string;
    rawText: string; 
    chapters: StudyChapter[];
    currentChapterIndex: number;
    createdAt: number;
    coverStyle: string; 
    totalProgress: number; 
    preference?: string; 
    languageConfig?: StudyLanguageConfig;
}

export interface StudyTutorPreset {
    id: string;
    name: string;
    prompt: string;
}

// --- QUIZ / PRACTICE BOOK TYPES ---
export interface QuizQuestionNote {
    question: string;
    answer: string;
    timestamp: number;
}

export interface QuizQuestion {
    id: string;
    type: 'choice' | 'true_false' | 'fill_blank';
    stem: string;
    options?: string[];
    answer: string;           // For choice: "A"/"B"/etc, true_false: "true"/"false", fill_blank: the text
    explanation: string;
    userAnswer?: string;
    isCorrect?: boolean;
    notes?: QuizQuestionNote[];  // Follow-up Q&A notes per question
}

export interface QuizSession {
    id: string;
    courseId: string;
    chapterId: string;
    chapterTitle: string;
    courseTitle: string;
    questions: QuizQuestion[];
    score: number;
    totalQuestions: number;
    aiReview: string;         // AI review/commentary full text
    status: 'in_progress' | 'graded';
    createdAt: number;
    gradedAt?: number;
}

export type GameTheme = 'fantasy' | 'cyber' | 'horror' | 'modern';

export type TrpgCampaignMode = 'classic' | 'expanded';
export type TrpgAttribute = 'body' | 'mind' | 'heart' | 'craft' | 'luck';
export type TrpgCheckMode = 'normal' | 'advantage' | 'disadvantage';

export interface TrpgActionCheck {
    attribute: TrpgAttribute;
    skill?: string;
    dc?: number;
    mode?: TrpgCheckMode;
}

export interface GameActionOption {
    label: string;
    type: 'neutral' | 'chaotic' | 'evil';
    check?: TrpgActionCheck;
}

export interface GameLog {
    id: string;
    role: 'gm' | 'player' | 'character' | 'system';
    speakerName?: string;
    content: string;
    timestamp: number;
    diceRoll?: {
        result: number;
        max: number;
        check?: string;
        success?: boolean;
        total?: number;
        dc?: number;
        attribute?: TrpgAttribute;
        skill?: string;
        mode?: TrpgCheckMode;
    };
    // 鑷姩鎬荤粨鍚庯紝琚綊妗ｆ姌鍙犵殑鏃ュ織浼氭爣璁颁负 archived锛堜笉鍒犻櫎锛孶I 鐏版樉鎶樺彔锛?
    archived?: boolean;
}

// 鑷姩鎬荤粨浜у嚭鐨勩€屽墠鎯呮彁瑕併€嶅瓨妗ｏ紝鍍忓啓灏忚涓€鏍疯褰曡捣鍥犵粡杩囩粨鏋滀笌浜虹墿鍏崇郴鍙樺寲
export interface GameSummary {
    id: string;
    content: string;       // 灏忚寮忔€荤粨锛堣捣鍥?缁忚繃/缁撴灉 + 浜虹墿鍏崇郴鍙樺寲锛?
    logCount: number;      // 鏈鎬荤粨瑕嗙洊浜嗗灏戞潯鏃ュ織
    logIds?: string[];     // 鏈鎬荤粨瑕嗙洊鐨勬棩蹇?id锛堢敤浜庢妸鍘熸枃涓庢€荤粨瀵瑰簲灞曠ず锛?
    createdAt: number;
}

export interface TrpgChapter {
    no: number;
    title: string;
    summary?: string;
    goal?: string;
    status?: 'active' | 'completed';
}

export interface TrpgQuest {
    id: string;
    title: string;
    status: 'active' | 'completed' | 'failed';
    summary?: string;
    steps?: string[];
    updatedAt: number;
}

export interface TrpgClue {
    id: string;
    title: string;
    detail: string;
    source?: string;
    tags?: string[];
    discoveredAt: number;
}

export interface TrpgNpc {
    id: string;
    name: string;
    role?: string;
    attitude?: string;
    location?: string;
    notes?: string;
    updatedAt: number;
}

export interface TrpgPartySheet {
    ownerId: string;
    name: string;
    isUser?: boolean;
    role?: string;
    attributes: Record<TrpgAttribute, number>;
    skills: string[];
    hp: number;
    sanity: number;
    xp: number;
    bond: number;
    inventory: string[];
    notes?: string[];
    updatedAt: number;
}

export interface TrpgThreat {
    id: string;
    title: string;
    danger: 'low' | 'medium' | 'high' | 'dire';
    progress: number;
    max: number;
    status: 'active' | 'resolved' | 'failed';
    note?: string;
    updatedAt: number;
}

export interface TrpgEncounter {
    id: string;
    title: string;
    status: 'active' | 'resolved' | 'failed';
    threatIds?: string[];
    summary?: string;
    updatedAt: number;
}

export interface TrpgWorldClock {
    day: number;
    phase: string;
    ticks: number;
}

export interface TrpgMilestone {
    id: string;
    title: string;
    reward?: string;
    createdAt: number;
}

export interface GameSession {
    id: string;
    title: string;
    theme: GameTheme;
    worldSetting: string;
    playerCharIds: string[];
    logs: GameLog[];
    status: {
        location: string;
        health: number;
        sanity: number;
        gold: number;
        inventory: string[];
    };
    sanityLocked?: boolean;
    campaignMode?: TrpgCampaignMode;
    campaignDifficulty?: 'story' | 'normal' | 'hard';
    growthSpeed?: 'slow' | 'standard' | 'fast';
    chapter?: TrpgChapter;
    quests?: TrpgQuest[];
    clues?: TrpgClue[];
    npcs?: TrpgNpc[];
    partySheets?: TrpgPartySheet[];
    threats?: TrpgThreat[];
    encounters?: TrpgEncounter[];
    worldClock?: TrpgWorldClock;
    milestones?: TrpgMilestone[];
    diceDisabled?: boolean;      // 鍏抽棴楠板瓙锛氳鍔ㄤ笉鍐嶈嚜鍔ㄩ D20锛岄粯璁ょ洿鎺ユ垚鍔?
    // 褰掓。妯″紡锛?auto' 婊?0鏉¤嚜鍔ㄦ€荤粨骞堕€佽繘瑙掕壊 chatapp锛?manual' 鑷姩鎬荤粨浣嗕笉閫侊紝浠呮墜鍔ㄥ綊妗ｆ椂閫併€?
    // 鏃у瓨妗ｆ棤姝ゅ瓧娈碉紝鎸?'manual' 澶勭悊锛堜笉姹℃煋鏃ц鑹茬殑鑱婂ぉ涓婁笅鏂囷級銆?
    archiveMode?: 'auto' | 'manual';
    suggestedActions?: GameActionOption[];
    summaries?: GameSummary[];   // 鑷姩鎬荤粨褰掓。鐨勫墠鎯呮彁瑕?
    createdAt: number;
    lastPlayedAt: number;
}

export type MessageType = 'text' | 'image' | 'emoji' | 'interaction' | 'transfer' | 'system' | 'social_card' | 'forum_card' | 'chat_forward' | 'screen_peek_card' | 'screen_watch_card' | 'xhs_card' | 'twitter_card' | 'score_card' | 'music_card' | 'mcd_card' | 'html_card' | 'news_card' | 'vr_card' | 'trpg_card' | 'location' | 'voice' | 'call_log' | 'takeout_card' | 'proposal_card' | 'poll_card' | 'relay_card' | 'checkin_card' | 'gift_card';

export type ChatAlarmKind = 'sleep' | 'wake' | 'custom';
export type ChatAlarmChannel = 'auto' | 'reminder' | 'call';

/** 绲路鍗曡亰闂归挓锛氭寜瑙掕壊淇濆瓨鐨勭潯瑙夌潱淇?/ 璧峰簥鍙啋 / 鑷畾涔夋彁閱掋€?*/
export interface ChatAlarm {
    id: string;
    charId: string;
    label: string;
    kind: ChatAlarmKind;
    /** 24 灏忔椂鍒?HH:mm銆?*/
    timeHHmm: string;
    /** JS Date.getDay() 鍙ｅ緞锛?=鍛ㄦ棩锛?=鍛ㄤ竴 ... 6=鍛ㄥ叚銆傜┖鏁扮粍瑙嗕负姣忓ぉ銆?*/
    weekdays: number[];
    channel: ChatAlarmChannel;
    enabled: boolean;
    nextAt: number;
    /** 闃叉鍚屼竴涓湰鍦版棩鏈?鏃堕棿閲嶅瑙﹀彂锛屾牸寮忕敱 utils/chatAlarms.ts 鐢熸垚銆?*/
    lastFiredKey?: string;
    createdAt: number;
    updatedAt: number;
}

export type PeriodReminderVisibility = 'public' | 'private';
export type PeriodReminderNotifyChannel = 'system' | 'character' | 'both';

/** 鍋ュ悍路缁忔湡鎻愰啋锛氭湰鍦伴娴嬩笌鎻愰啋璁剧疆銆傚彧鍋氱敓娲绘彁閱掞紝涓嶄綔涓哄尰鐤楀垽鏂€?*/
export interface PeriodReminderSettings {
    id: string;
    enabled: boolean;
    /** 鏈€杩戜竴娆＄粡鏈熷紑濮嬫棩锛孻YYY-MM-DD銆備负绌烘椂涓嶆帓绋嬫彁閱掋€?*/
    lastStartDate?: string;
    cycleLength: number;
    periodLength: number;
    /** 鐩稿棰勬祴寮€濮嬫棩鐨勬彁閱掑亸绉伙紝-2=鎻愬墠涓ゅぉ锛?=褰撳ぉ銆?*/
    remindOffsets: number[];
    /** 24 灏忔椂鍒?HH:mm銆?*/
    timeHHmm: string;
    visibility: PeriodReminderVisibility;
    notifyChannel: PeriodReminderNotifyChannel;
    charIds: string[];
    nextAt: number;
    lastFiredKey?: string;
    createdAt: number;
    updatedAt: number;
}

export interface PeriodCycleEvent {
    id: string;
    kind: 'start' | 'end';
    date: string;
    note?: string;
    createdAt: number;
    updatedAt: number;
}

export type HealthModuleId = 'period' | 'sleep' | 'hydration' | 'medication' | 'symptom' | 'mood' | 'movement';
export type HealthPrivacyMode = 'private' | 'summary' | 'reminder' | 'summary_reminder';
export type HealthReminderChannel = 'system' | 'character' | 'both';
export type HealthReminderFrequency = 'once' | 'daily' | 'weekdays' | 'custom';
export type HealthRecordSource = 'manual' | 'period_migration' | 'tracker_sync' | 'reminder';
export type HealthReminderKind = 'period' | 'hydration' | 'medication' | 'sleep' | 'symptom' | 'mood' | 'movement' | 'summary';
export type HealthPlanCadence = 'daily' | 'weekly';
export type HealthSummaryRange = 'day' | 'week';

export interface HealthGoalSettings {
    target?: number;
    unit?: string;
    cadence?: HealthPlanCadence;
}

export interface HealthModuleSettings {
    id: HealthModuleId;
    enabled: boolean;
    privacy: HealthPrivacyMode;
    charIds: string[];
    reminderChannel: HealthReminderChannel;
    goals?: HealthGoalSettings;
    createdAt: number;
    updatedAt: number;
}

export interface HealthRecord {
    id: string;
    moduleId: HealthModuleId;
    date: string;
    timeHHmm?: string;
    value?: number;
    unit?: string;
    label?: string;
    tags: string[];
    note?: string;
    source: HealthRecordSource;
    metadata?: Record<string, any>;
    createdAt: number;
    updatedAt: number;
}

export interface HealthReminder {
    id: string;
    moduleId: HealthModuleId;
    kind: HealthReminderKind;
    title: string;
    body?: string;
    enabled: boolean;
    timeHHmm: string;
    frequency: HealthReminderFrequency;
    weekdays?: number[];
    date?: string;
    privacy: HealthPrivacyMode;
    channel: HealthReminderChannel;
    charIds: string[];
    nextAt: number;
    lastFiredKey?: string;
    createdAt: number;
    updatedAt: number;
}

export interface HealthPlan {
    id: string;
    moduleId: HealthModuleId;
    title: string;
    target: number;
    unit: string;
    cadence: HealthPlanCadence;
    enabled: boolean;
    charIds: string[];
    privacy: HealthPrivacyMode;
    createdAt: number;
    updatedAt: number;
}

export interface HealthSummary {
    id: string;
    range: HealthSummaryRange;
    startDate: string;
    endDate: string;
    moduleIds: HealthModuleId[];
    text: string;
    metrics: Record<string, any>;
    privacy: HealthPrivacyMode;
    charIds: string[];
    createdAt: number;
    updatedAt: number;
}

/** 璐墿鍟嗗煄锛氫竴浠剁ぜ鐗╋紙鍐呯疆鐩綍鏉＄洰锛夈€?*/
export interface ShopItem {
    id: string;
    name: string;
    emoji: string;          // 绀肩墿鍥炬爣锛坋moji锛夛紱娌℃湁鐪熷疄鍥剧墖鏃朵綔涓恒€屾枃瀛楀浘銆嶅睍绀?
    price: number;          // 浠锋牸锛堝厓锛?
    category: string;       // 鍒嗙被 key
    blurb: string;          // 涓€鍙ヨ瘽鎻忚堪
    image?: string;         // 鐪熷疄鍟嗗搧鍥?URL锛圓I 鐢熸垚/鏈夊浘鏃跺～锛屾覆鏌撴椂浼樺厛鐢ㄥ浘锛屽惁鍒欑敤 emoji 鏂囧瓧鍥撅級
    generated?: boolean;    // 鏄惁 AI 瀹炴椂鐢熸垚锛堝尯鍒嗗唴缃厹搴曞晢鍝侊級
    custom?: boolean;       // 鏄惁鐢ㄦ埛鎵嬪姩鏂板鎴栫紪杈戣繃鐨勬湰鍦板晢鍝?
    updatedAt?: number;     // 鐢ㄦ埛缂栬緫淇濆瓨鏃堕棿
    rating?: number;        // 璇勫垎 1.0~5.0锛圓I 鐢熸垚锛屾湁濂芥湁鍧忥紱缂虹渷鏃舵寜 id 纭畾鎬ф淳鐢燂級
}

/** 璐墿鍟嗗煄锛氫紭鎯犲埜锛堟弧鍑忓埜锛夈€傛弧 threshold 鍏冨噺 discount 鍏冦€?*/
export interface ShopCoupon {
    id: string;
    title: string;
    threshold: number;      // 浣跨敤闂ㄦ锛堟弧 X 鍏冿級
    discount: number;       // 绔嬪噺閲戦锛堝厓锛?
}

/** 璐墿鍟嗗煄锛氳儗鍖呴噷鎷ユ湁鐨勪竴浠剁墿鍝侊紙user 涔颁笅浣嗚繕娌￠€佸嚭鍘荤殑锛夈€?*/
export interface ShopOwnedItem {
    uid: string;            // 鍞竴瀹炰緥 id锛堝悓涓€ item 鍙嫢鏈夊浠讹級
    itemId: string;
    name: string;
    emoji: string;
    price: number;
    boughtAt: number;
}

/** 璐墿鍟嗗煄锛氳喘鐗╄溅閲岀殑涓€琛岋紙鏌愬晢鍝?+ 鏁伴噺锛夈€倁ser 涓?char 鍚勬湁涓€涓喘鐗╄溅銆?*/
export interface ShopCartLine {
    itemId: string;
    qty: number;
}

/** 璐墿鍟嗗煄锛氳鍗曢噷鐨勪竴浠跺晢鍝侊紙甯︽暟閲忓揩鐓э級銆?*/
export interface ShopOrderItem {
    itemId: string;
    name: string;
    emoji: string;
    price: number;
    qty: number;
}

/** 璐墿鍟嗗煄锛氫竴绗旇鍗曪紙娣樺疂寮忥紝鍚墿娴侀厤閫佽繘搴︼級銆備笅鍗?鈫?鐗╂祦鎺ㄨ繘 鈫?纭鏀惰揣鍚庤繘鑳屽寘銆?*/
export interface ShopOrder {
    id: string;
    items: ShopOrderItem[];
    total: number;
    /** 'self'=鑷繁浠橈紱'char'=瑙掕壊浠ｄ粯锛坧ayerName 璁拌鑹插悕锛?*/
    paidBy: 'self' | 'char';
    payerName?: string;
    placedAt: number;
    etaAt: number;          // 棰勮閫佽揪鏃堕棿鎴?
    receivedAt?: number;    // 鐢ㄦ埛鐐广€岀‘璁ゆ敹璐с€嶇殑鏃跺埢
    refundedAt?: number;    // 鐢ㄦ埛鐢宠閫€娆撅紙閫€娆?鍞悗锛夋垚鍔熺殑鏃跺埢锛涢€€娆惧悗璁㈠崟涓嶅啀杩涜儗鍖?
    coinDiscount?: number;  // 鏈崟鐢ㄦ窐閲戝竵鎶垫墸鐨勯噾棰濓紙鍏冿紝浠呭睍绀虹敤锛?
}

/** 璐墿鍟嗗煄路娴忚瓒宠抗锛氱湅杩囨煇鍟嗗搧鐨勮褰曘€?*/
export interface ShopFootprint {
    itemId: string;
    at: number;
}

/** 璐墿鍟嗗煄路鎴戝啓鐨勫晢鍝佽瘎浠凤紙纭鏀惰揣鍚庢檼鍗曪紱鎸?orderId+itemId 鍞竴锛夈€?*/
export interface ShopUserReview {
    id: string;
    itemId: string;
    orderId: string;
    stars: number;          // 1~5
    text: string;
    at: number;
}

/** 璐墿鍟嗗煄锛氫竴鏉″皬绁紙璐拱 / 璧犻€?/ 鏀剁ぜ锛夈€倁ser 涓?char 鍚勫瓨涓€浠藉巻鍙层€?*/
export interface ShopReceipt {
    id: string;
    itemId: string;
    name: string;
    emoji: string;
    price: number;
    /** 璋佺殑鍔ㄤ綔锛氱敤鎴?or 瑙掕壊 */
    by: 'user' | 'char';
    /** buy=缁欒嚜宸变拱锛沢ift=閫佸嚭锛況eceive=鏀跺埌瀵规柟閫佺殑 */
    action: 'buy' | 'gift' | 'receive';
    /** 瀵规柟鏄皝锛歝harId / 'user' / 'self'锛堢粰鑷繁涔帮級 */
    counterpartId: string;
    counterpartName: string;
    note?: string;          // 璧犺█ / 瑙掕壊涔板畠鐨勭悊鐢?
    at: number;
}

/**
 * 娑堟伅閫佽揪鐘舵€侊紙Telegram 寮忓洖鎵э紝瀛?metadata.msgStatus锛夛細
 * - 'sent'锛氬凡鍙戝嚭锛堝崟鍕撅級
 * - 'read'锛氬鏂瑰凡璇伙紙鍙屽嬀锛夆€斺€?鐢ㄦ埛娑堟伅鍦ㄨ鑹叉垚鍔熷洖澶嶅悗鏍囪锛涜鑹叉秷鎭湪鐢ㄦ埛鎵撳紑鑱婂ぉ椤垫椂鏍囪
 * - 'failed'锛氬彂閫佸け璐ワ紙绾㈣壊鎰熷徆鍙凤級鈥斺€?鏈湴 API 璋冪敤澶辫触鏃舵爣璁?
 * 鏃ф秷鎭病鏈夎瀛楁鏃朵笉鏄剧ず浠讳綍鍥炴墽銆?
 */
export type MessageDeliveryStatus = 'sent' | 'read' | 'failed';

export interface Message {
    id: number;
    charId: string; 
    groupId?: string; 
    role: 'user' | 'assistant' | 'system';
    type: MessageType;
    content: string;
    timestamp: number;
    metadata?: any; 
    replyTo?: {
        id: number;
        content: string;
        name: string;
    };
}

/** 绲绉佽亰妗ｆ鍐呯殑娑堟伅蹇収銆俰d 浼氬湪鎭㈠鍒版椿璺?messages 琛ㄦ椂閲嶆柊鐢熸垚銆?*/
export interface PrivateChatArchiveMessage {
    originalId?: number;
    charId: string;
    role: 'user' | 'assistant' | 'system';
    type: MessageType;
    content: string;
    timestamp: number;
    metadata?: any;
    replyTo?: {
        id?: number;
        content: string;
        name: string;
    };
}

/** 绲绉佽亰妗ｆ锛氬弬鑰?SillyTavern 鐨?per-character chat file 绠＄悊銆?*/
export interface PrivateChatArchive {
    id: string;
    charId: string;
    title: string;
    pinned?: boolean;
    createdAt: number;
    updatedAt: number;
    messageCount: number;
    lastMessagePreview?: string;
    messages: PrivateChatArchiveMessage[];
    source?: 'moro' | 'sillytavern' | 'manual';
}

/** 鐢佃瘽 App锛氫竴鏉￠€氳瘽璁板綍锛堟嫧鍑?/ 鎺ュ惉 / 鏈帴锛夈€?
 *  涓?CallApp 鐨勯€氳瘽娑堟伅锛坢etadata.callSessionId锛変簰琛ワ細CallApp 钀借缁嗛€愬瓧绋匡紝
 *  杩欓噷鍙惤"閫氳瘽鍙戠敓杩?鐨勮交閲忔潯鐩紝渚涚數璇?App 鐨勯€氳瘽璁板綍鍒楄〃灞曠ず涓庡洖鎷ㄣ€?*/
export interface PhoneCallLog {
    id: string;
    charId?: string;        // 宸茬煡瑙掕壊鏃跺叧鑱旓紱鎵嬪姩鎷ㄩ檶鐢熷彿鐮佹椂涓虹┖
    name: string;           // 鏄剧ず鍚嶏紙瑙掕壊鍚嶆垨鍙风爜鏈韩锛?
    number: string;         // 铏氭嫙鍙风爜锛堣鑹插彿鐮佺敱 charId 纭畾鎬х敓鎴愶級
    direction: 'outgoing' | 'incoming' | 'missed';
    timestamp: number;
    durationSec: number;    // 鏈帴 = 0
    sessionId?: string;     // 鍏宠仈 CallApp 鐨?callSessionId锛堟湁褰曢煶/閫愬瓧绋挎椂鍙烦杞級
    mode?: 'voice' | 'video'; // 榛樿璇煶锛涜棰戣亰澶╄惤搴撴椂鏍囪涓?video
}

/** 鏃ヨ绀撅細涓€绡囨棩璁帮紙鐢ㄦ埛鎴栬鑹茶瑙掞級 */
export interface ExchangeDiaryEntry {
    id: string;
    author: 'user' | 'char';
    charId: string;         // author === 'char' 鏃朵负瑙掕壊 id锛泆ser 绡囪褰?鍐欑粰璋佺湅"鐨勫綋鍓嶆椿璺冭鑹?
    authorName: string;
    avatar?: string;
    mood?: string;          // sunny / rainy / starry / cozy / wild
    seals?: string[];       // secret / gratitude / courage / dream / routine
    content: string;
    date: string;           // YYYY-MM-DD
    timestamp: number;
    isSummary?: boolean;    // 鐢?浠婃棩瀵硅瘽鎬荤粨"鑷姩鐢熸垚鐨勭瘒鐩?
}

/** 鏃ヨ绀撅細涓€鏈瑙掕壊鍏卞啓鐨勪氦鎹㈡棩璁版湰 */
export interface ExchangeDiaryBook {
    id: string;
    title: string;
    charIds: string[];      // 鍙備笌鐨勮鑹?
    activeCharId: string;   // 褰撳墠瀵硅瘽/鍥炲簲鐨勮鑹?
    paperStyle?: string;    // plain / grid / lined / pink / dark
    entries: ExchangeDiaryEntry[];
    createdAt: number;
    updatedAt: number;
}

/** 鍋风湅蹇冨０锛氫竴娆?绐ユ帰瑙掕壊鍐呭績"鐨勭敓鎴愮粨鏋滐紙瑙掕壊涓嶇煡鎯咃紝涓嶈繘鑱婂ぉ涓婁笅鏂囷級 */
export interface InnerVoiceEntry {
    id: string;
    charId: string;
    content: string;
    timestamp: number;
    groupId?: string;
    groupName?: string;
}

export interface EmojiCategory {
    id: string;
    name: string;
    isSystem?: boolean;
    allowedCharacterIds?: string[]; // If set, only these characters can see this category
}

export interface Emoji {
    name: string;
    url: string;
    categoryId?: string;
    /** 鎻忚堪锛氳〃鎯呴潰鏉挎寜鎻忚堪鎼滅储鐢紝鍚屾椂娉ㄥ叆鎻愮ず璇嶅府 AI 閫夎〃鎯呫€?*/
    description?: string;
}

export interface DesktopPetRoleState {
    hp: number;
    fv: number;
    lastFedAt?: number;
    lastPattedAt?: number;
}

export interface DesktopPetReminder {
    id: string;
    title: string;
    note?: string;
    dueAt: number;
    repeat: 'none' | 'daily';
    enabled: boolean;
    createdAt: number;
    lastFiredAt?: number;
}

export interface DesktopPetTalkMessage {
    id: string;
    role: 'user' | 'pet' | 'system';
    text: string;
    createdAt: number;
    source?: 'chat' | 'feed' | 'pat' | 'reminder' | 'idle';
    itemId?: string;
}

export interface DesktopPetState {
    id: 'main';
    activeRoleId: string;
    floatingEnabled: boolean;
    overlay: {
        x: number;
        y: number;
        scale: number;
        dockSide?: 'none' | 'left' | 'right';
    };
    aiEnabled?: boolean;
    fallSpeed?: number;
    rolePrompts?: Record<string, string>;
    dialogueLog?: DesktopPetTalkMessage[];
    lastSpeech?: DesktopPetTalkMessage;
    notificationsEnabled: boolean;
    roleStates: Record<string, DesktopPetRoleState>;
    reminders: DesktopPetReminder[];
    updatedAt: number;
}

export interface FullBackupData {
    timestamp: number;
    version: number;
    theme?: OSTheme;
    apiConfig?: APIConfig;
    instantPushConfig?: InstantPushConfig;
    pushVapid?: { vapidPublicKey: string; vapidPrivateKey: string; vapidEmail?: string; updatedAt?: number; };
    apiPresets?: ApiPreset[];
    availableModels?: string[];
    realtimeConfig?: RealtimeConfig;  // 瀹炴椂鎰熺煡閰嶇疆锛堝ぉ姘?鏂伴椈/Notion锛?
    memoryPalaceConfig?: MemoryPalaceBackupConfig;
    customIcons?: Record<string, string>;
    appearancePresets?: AppearancePreset[];
    characters?: CharacterProfile[];
    groups?: GroupProfile[]; 
    messages?: Message[];
    privateChatArchives?: PrivateChatArchive[];
    chatAlarms?: ChatAlarm[];
    periodReminderSettings?: PeriodReminderSettings[];
    periodCycleEvents?: PeriodCycleEvent[];
    healthModuleSettings?: HealthModuleSettings[];
    healthRecords?: HealthRecord[];
    healthReminders?: HealthReminder[];
    healthPlans?: HealthPlan[];
    healthSummaries?: HealthSummary[];
    customThemes?: ChatTheme[];
    savedEmojis?: Emoji[]; 
    emojiCategories?: EmojiCategory[]; 
    savedJournalStickers?: {name: string, url: string}[]; 
    assets?: { id: string, data: string }[];
    galleryImages?: GalleryImage[];
    userProfile?: UserProfile;
    diaries?: DiaryEntry[];
    tasks?: Task[];
    anniversaries?: Anniversary[];
    roomTodos?: RoomTodo[]; 
    roomNotes?: RoomNote[];
    socialPosts?: SocialPost[]; 
    courses?: StudyCourse[]; 
    games?: GameSession[];
    worldbooks?: Worldbook[]; 
    roomCustomAssets?: { id?: string; name: string; image: string; defaultScale: number; description?: string; visibility?: 'public' | 'character'; assignedCharIds?: string[] }[]; 
    
    novels?: NovelBook[];
    vrNovels?: VRWorldNovel[];          // 铏氭嫙涓栫晫銆岄〉澶栥€嶅叏灞€灏忚搴?
    vrAnnotations?: VRNovelAnnotation[]; // 铏氭嫙涓栫晫灏忚鎵规敞
    customCreatorParts?: CustomCreatorPart[]; // 鎹忚劯绯荤粺鑷畾涔夐儴浠?
    vrMusicRoom?: VRMusicRoomState;            // 鍚瓕鎴垮叡浜姸鎬?
    vrGuestbook?: VRGuestbookState;            // 鐣欒█绨垮叡浜姸鎬?
    vrScripts?: VRScript[];                     // 鍓ч櫌路鎶曠鍓ф湰搴?
    vrStagedPlays?: VRStagedPlay[];             // 鍓ч櫌路鍘嗗彶鑸炲彴鍓?
    vrPresets?: { key: string; name: string; prompt: string; blurb?: string }[]; // 鍓ч櫌路鐢ㄦ埛鑷畾涔夊啓浣滈鏍奸璁?
    vrLetters?: VRLetter[];                    // 閭眬淇′欢锛堟湰鍦板瓨妗?闃熷垪锛?
    vrSettings?: any[];                        // 椤靛璁剧疆锛堢嫭绔?API + 璋冪敤璁板綍锛?
    vrPostOffice?: Record<string, string>;     // 閭眬鏈満閰嶇疆锛氳韩浠?deviceId / 鍚庣鍦板潃锛堝瓨 localStorage锛?
    songs?: SongSheet[]; // Songwriting app data
    phoneCallLogs?: PhoneCallLog[];           // 鐢佃瘽 App 閫氳瘽璁板綍
    phoneCheckSessions?: PhoneCheckSession[]; // 绲鏌ュ矖妗ｆ
    userScreenWatchSessions?: UserScreenWatchSession[]; // 绲瑙傚睆璇勮浼氳瘽
    exchangeDiaryBooks?: ExchangeDiaryBook[]; // 鏃ヨ绀惧瑙掕壊浜ゆ崲鏃ヨ鏈?
    innerVoices?: InnerVoiceEntry[];          // 鍋风湅蹇冨０鍘嗗彶
    llmPresets?: TavernPreset[];              // 棰勮 App锛歋illyTavern 寮?Chat Completion 棰勮
    personas?: Persona[];                     // 浜鸿 App锛歋illyTavern 寮忕敤鎴蜂汉璁?
    relationshipNetworkEdges?: RelationshipNetworkEdge[];
    relationshipNetworkMessages?: RelationshipNetworkMessage[];
    relationshipNetworkAutoSettings?: RelationshipNetworkAutoSettings[];
    desktopPetState?: DesktopPetState;

    // Bank Data
    bankState?: BankFullState;
    bankDollhouse?: DollhouseState;
    bankTransactions?: BankTransaction[];

    socialAppData?: {
        charHandles?: Record<string, SubAccount[]>;
        userProfile?: SocialAppProfile;
        userId?: string;
        userBg?: string;
    };
    
    mediaAssets?: {
        charId: string;
        avatar?: string;
        sprites?: Record<string, string>;
        dateSkinSets?: SkinSet[];
        activeSkinSetId?: string;
        customDateSprites?: string[];
        spriteConfig?: SpriteConfig;
        roomItems?: Record<string, string>;
        backgrounds?: { chat?: string; date?: string; roomWall?: string; roomFloor?: string };
    }[];

    xhsActivities?: XhsActivityRecord[];
    xhsStockImages?: XhsStockImage[];
    twitterTweets?: TwitterTweet[];
    twitterNotifications?: TwitterNotification[];
    twitterProfile?: TwitterProfile;
    twitterAccounts?: TwitterAccount[];
    twitterDMThreads?: TwitterDMThread[];
    twitterSearchRecords?: TwitterSearchRecord[];

    // Study Room settings
    studyApiConfig?: Partial<APIConfig>;
    studyTutorPresets?: StudyTutorPreset[];

    // Quiz / Practice Book
    quizSessions?: QuizSession[];

    // Guidebook (鏀荤暐鏈?
    guidebookSessions?: GuidebookSession[];

    // Theater quiz side stories (鎶樺瓙鎴徛风暘澶栭棶鍗?
    theaterQuizSessions?: TheaterQuizSession[];

    // Theater faux screenshots (鎶樺瓙鎴徛蜂豢鐪熷浘鏂囧巻鍙?
    theaterFauxPieces?: TheaterFauxPiece[];

    // Theater reflections (鎶樺瓙鎴徛峰褰卞唽)
    theaterReflectionSessions?: TheaterReflectionSession[];

    // Almanac collection hall references (宀佹椂璁奥峰吀钘忛鏀跺綍寮曠敤)
    collectionItems?: CollectionItem[];

    // Chat delayed actions
    scheduledMessages?: {
        id: string;
        charId: string;
        content: string;
        dueAt: number;
        createdAt: number;
    }[];

    // LifeSim
    lifeSimState?: LifeSimState | null;

    // Memory Palace (璁板繂瀹)
    memoryNodes?: any[];
    memoryVectors?: any[];
    memoryLinks?: any[];
    topicBoxes?: any[];
    anticipations?: any[];
    eventBoxes?: any[];
    memoryPalaceHighWaterMarks?: Record<string, number>; // charId 鈫?lastProcessedMsgId
    memoryPalaceFlags?: Record<string, string>; // mp_personality_tried_* / mp_first_archive_notice_* 绛?UI 鏍囪
    cloudBackupConfig?: CloudBackupConfig;
    remoteVectorConfig?: { enabled: boolean; supabaseUrl: string; supabaseAnonKey: string; initialized: boolean };

    // Character daily schedule (瑙掕壊鏃ョ▼琛?鈥?daily_schedule store)
    dailySchedules?: DailySchedule[];

    // 鎵嬭处锛堣法瑙掕壊鑱氬悎鐣欑棔鏈?鈥?handbook store锛?
    handbooks?: HandbookEntry[];

    // 鎵嬭处 Tracker锛堝仴搴?鐢熸椿鎵撳崱寮曟搸锛?
    trackers?: Tracker[];
    trackerEntries?: TrackerEntry[];

    // Memory Palace 鎵规澶勭悊鍏冩暟鎹?
    memoryBatches?: any[];

    // Pixel Home锛堝皬灞嬪儚绱犵晫闈級
    pixelHomeAssets?: any[];
    pixelHomeLayouts?: any[];

    // Chat 璁剧疆锛堢炕璇?/ 褰掓。 / 娑﹁壊 prompts锛?
    chatTranslateSourceLang?: string;
    chatTranslateTargetLang?: string;
    chatTranslateSourceLangByChar?: Record<string, string>;
    chatTranslateTargetLangByChar?: Record<string, string>;
    chatTranslateEnabledByChar?: Record<string, boolean>;
    chatArchivePrompts?: any;
    chatActiveArchivePromptId?: string;
    characterRefinePrompts?: any;
    characterActiveRefinePromptId?: string;

    // 鍏跺畠 UI / 鍋忓ソ
    scheduleAppTheme?: string;
    handbookLifestreamDepth?: string;
    groupchatContextLimit?: number;
    browserConfig?: { braveKey?: string; useRealSearch?: boolean };
    bm25Mode?: string;
    lastActiveCharId?: string;
    eventNotifFlags?: Record<string, string>;  // moro_* 浜嬩欢閫氱煡鏍囪
    hotNewsSnapshots?: HotNewsSnapshot[];
}

// --- CLOUD BACKUP TYPES ---
// Two providers share one config: WebDAV (legacy) and GitHub Releases (new,
// no GFW friction for most users 鈥?just paste a Personal Access Token).
export type CloudBackupProvider = 'webdav' | 'github';

export interface CloudBackupConfig {
    enabled: boolean;
    provider?: CloudBackupProvider;     // undefined = 'webdav' (back-compat)

    // WebDAV
    webdavUrl: string;          // e.g. https://dav.jianguoyun.com/dav/
    username: string;
    password: string;           // App-specific password
    remotePath: string;         // e.g. /MoroBackup/

    // GitHub Releases 鈥?uses a Personal Access Token. Owner is resolved from
    // GET /user during connect; repo defaults to 'moro-backup' (private).
    githubToken?: string;
    githubOwner?: string;
    githubRepo?: string;
    githubUseProxy?: boolean;   // route through Cloudflare Worker (for GFW)

    lastBackupTime?: number;    // timestamp
    lastBackupSize?: number;    // bytes
}

export interface CloudBackupFile {
    name: string;
    size: number;
    lastModified: string;       // ISO date string
    href: string;               // WebDAV: remote path. GitHub: 'releaseId:assetId'
}

// --- GUIDEBOOK (鏀荤暐鏈? APP TYPES ---
export type GuidebookPlayStyle = 'classic' | 'slowburn' | 'comedy' | 'dramatic' | 'mindgame';
export type GuidebookDifficulty = 'soft' | 'normal' | 'hard';
export type GuidebookPacing = 'slice' | 'rising' | 'climax';
export type GuidebookScoreVisibility = 'shown' | 'mystery';

export interface GuidebookRules {
    playStyle: GuidebookPlayStyle;
    difficulty: GuidebookDifficulty;
    pacing: GuidebookPacing;
    scoreVisibility: GuidebookScoreVisibility;
    goal?: string;
}

export interface GuidebookOption {
    text: string;
    affinity: number;
}

export interface GuidebookRound {
    id: string;
    roundNumber: number;
    scenario: string;
    options: GuidebookOption[];
    gmNarration: string;
    charInnerThought: string;
    charChoice: number;
    charReaction: string;
    charExploration?: string;
    charInsight?: string;      // what user's scoring reveals about their personality
    prediction?: string;       // char's guess about user scoring / best option
    tacticTag?: string;        // short strategy label for archive/replay
    scoreSpread?: number;      // max(option.affinity) - min(option.affinity)
    affinityBefore: number;
    affinityAfter: number;
    timestamp: number;
}

export interface GuidebookEndCard {
    finalAffinity: number;
    charVerdict: string;
    title: string;
    highlights: string[];
    charSummary?: string;
    charNewInsight?: string;   // the one specific thing char learned about user this session
}

export interface GuidebookSession {
    id: string;
    charId: string;
    initialAffinity: number;
    currentAffinity: number;
    maxRounds: number;
    currentRound: number;
    mode: 'manual' | 'auto';
    scenarioHint?: string;
    rules?: GuidebookRules;
    recentMessageCount?: number;
    rounds: GuidebookRound[];
    openingSequence?: string;
    status: 'setup' | 'opening' | 'playing' | 'ended';
    endCard?: GuidebookEndCard;
    createdAt: number;
    lastPlayedAt: number;
}

// --- XHS FREE ROAM / AUTONOMOUS ACTIVITY TYPES ---

export type XhsActionType = 'post' | 'browse' | 'search' | 'comment' | 'save_topic' | 'idle';

export interface XhsActivityRecord {
    id: string;
    characterId: string;
    timestamp: number;
    actionType: XhsActionType;
    content: {
        title?: string;
        body?: string;
        tags?: string[];
        keyword?: string;
        savedTopics?: { title: string; desc: string; noteId?: string }[];
        notesViewed?: { noteId: string; title: string; desc: string; author: string; likes: number }[];
        commentTarget?: { noteId: string; title: string };
        commentText?: string;
    };
    thinking: string;  // Character's internal monologue / reasoning
    result: 'success' | 'failed' | 'skipped';
    resultMessage?: string;
}

export interface XhsFreeRoamSession {
    id: string;
    characterId: string;
    startedAt: number;
    endedAt?: number;
    activities: XhsActivityRecord[];
    summary?: string;  // AI-generated session summary
}

export interface XhsMcpConfig {
    enabled: boolean;
    serverUrl: string;  // MCP: "http://localhost:18060/mcp" | Skills: "http://localhost:18061/api" | Lite Worker: "https://xhs-lite.<acct>.workers.dev/api"
    cookie?: string;    // Lite 妯″紡锛氱櫥褰曞悗鐨勫皬绾功瀹屾暣 cookie锛堝惈 a1 / web_session锛夈€備粎 lite Worker 鐢ㄣ€?
    loggedInUserId?: string;   // 鐧诲綍鐢ㄦ埛鐨?user_id锛岃繛鎺ユ祴璇曟垚鍔熷悗鑷姩鑾峰彇
    loggedInNickname?: string; // 鐧诲綍鐢ㄦ埛鐨勬樀绉?
    userXsecToken?: string;    // 杩炴帴娴嬭瘯鏃朵粠棣栭〉鎺ㄨ崘鑷姩鎻愬彇鐨?xsec_token
}

// --- XHS 鏈湴鐢熸垚淇℃伅娴侊紙灏忕孩涔?App锛歀LM 鐢熸垚瑙掕壊 + NPC 甯栧瓙锛屾湰鍦版寔涔呭寲锛?--

export interface XhsFeedComment {
    id: string;
    author: string;            // 鏄剧ず鏄电О
    charId?: string;           // 瑙掕壊璇勮鏃朵负瑙掕壊 id锛汵PC 璇勮涓虹┖
    isUser?: boolean;          // 鐢ㄦ埛鑷繁鍙戠殑璇勮
    content: string;
    likes: number;
    timestamp: number;
}

export interface XhsFeedPost {
    id: string;
    authorType: 'character' | 'npc' | 'user';
    charId?: string;           // authorType='character' 鏃剁殑瑙掕壊 id
    author: string;            // 鏄剧ず鏄电О
    authorAvatar?: string;     // 瑙掕壊澶村儚 / 鐢ㄦ埛澶村儚锛汵PC 鐣欑┖璧板瓧姣嶅ご鍍?
    title: string;
    body: string;
    tags: string[];
    coverUrl?: string;         // 灏侀潰鍥撅紙鏉ヨ嚜灏忕孩涔﹀浘搴擄紝鍙┖ 鈫?娓愬彉鍗犱綅锛?
    likes: number;
    liked?: boolean;           // 鐢ㄦ埛宸茬偣璧?
    favs: number;
    faved?: boolean;           // 鐢ㄦ埛宸叉敹钘?
    comments: XhsFeedComment[];
    createdAt: number;
    repostOf?: string;         // 杞彂锛氭簮甯?id
    repostNote?: string;       // 杞彂闄勮█
}

// ============================================================
// 妯℃嫙浜虹敓 (LifeSim) Types 鈥?鐪熶汉绉€娌欑洅鐗?
// ============================================================

export type SimActionType =
    | 'ADD_NPC'        // 鍒涘缓NPC骞朵涪杩涙煇瀹跺涵
    | 'MOVE_NPC'       // 鎶奛PC绉诲埌鍙︿竴涓搴?
    | 'TRIGGER_EVENT'  // 瑙﹀彂浜嬩欢锛堝惖鏋?鑱旇皧/鍑鸿蛋绛夛級
    | 'GO_SOLO'        // NPC鐙珛鎴愬
    | 'DO_NOTHING';    // 瑙傛湜

export type SimEventType =
    | 'fight'          // 鍚垫灦
    | 'party'          // 鑱旇皧/鑱氫細
    | 'gossip'         // 鎼紕鏄潪
    | 'romance'        // 鏆ф槯
    | 'rivalry'        // 绔炰簤
    | 'alliance';      // 缁撶洘

// 浜嬩欢閾炬晥鏋滀唬鐮?
export type SimEffectCode =
    | 'fight_break'           // 鐭涚浘鐖嗗彂锛堢瀹跺嚭璧帮級
    | 'mood_drop'             // 蹇冩儏浣庤惤
    | 'relationship_change'   // 鍏崇郴鍙樺寲
    | 'revenge_plot'          // 澶嶄粐璁″垝
    | 'love_triangle'         // 涓夎鎭?
    | 'jealousy_spiral'       // 瀚夊铻烘棆
    | 'family_feud'           // 瀹舵棌涓栦粐
    | 'betrayal'              // 鑳屽彌
    | 'romantic_confession'   // 娴极鍛婄櫧
    | 'gossip_wildfire'       // 鍏崷閲庣伀
    | 'npc_runaway'           // NPC鍑鸿蛋
    | 'mood_breakdown'        // 鎯呯华宕╂簝
    | 'secret_alliance'       // 绉樺瘑鍚岀洘
    | 'power_shift'           // 鏉冨姏鏇磋凯
    | 'reconciliation';       // 鍜岃В

// NPC 鍐呴┍鍔?
export type NPCDesire =
    | { type: 'socialize'; targetNpcId: string }
    | { type: 'revenge'; targetNpcId: string }
    | { type: 'romance'; targetNpcId: string }
    | { type: 'leave_family' }
    | { type: 'recruit'; targetNpcId: string }
    | { type: 'gossip_about'; targetNpcId: string }
    | { type: 'start_rivalry'; targetNpcId: string };

// 瑙掕壊鍙欎簨灞?
export interface CharNarrative {
    innerThought: string;      // 瑙掕壊鍐呭績鐙櫧锛?00瀛楀唴锛?
    dialogue: string;          // 瑙掕壊璇寸殑璇?鍦烘櫙鎻忓啓锛?50瀛楀唴锛?
    commentOnWorld: string;    // 瀵逛笘鐣岀姸鎬佺殑鍚愭Ы锛?0瀛楀唴锛?
    emotionalTone: 'vengeful' | 'romantic' | 'scheming' | 'chaotic' | 'peaceful' | 'amused' | 'anxious';
}

export type SimStoryKind = 'main_plot' | 'character_drama' | 'ambient' | 'system';
export type SimStoryAttachmentKind = 'image' | 'item' | 'fanfic' | 'evidence';
export type SimStoryAttachmentRarity = 'common' | 'rare' | 'epic';

export interface SimStoryAttachmentDraft {
    kind: SimStoryAttachmentKind;
    title: string;
    summary: string;
    detail?: string;
    visualPrompt?: string;
    rarity?: SimStoryAttachmentRarity;
}

export interface SimStoryAttachment {
    id: string;
    kind: SimStoryAttachmentKind;
    title: string;
    summary: string;
    detail?: string;
    imageUrl?: string;
    rarity?: SimStoryAttachmentRarity;
}

export interface SimAction {
    id: string;
    turnNumber: number;
    actor: string;       // 'user' | char.name
    actorAvatar: string; // char.avatar or '馃'
    actorId: string;     // 'user' | char.id | 'system' | 'autonomous'
    type: SimActionType;
    description: string;      // 鑷劧璇█锛孋HAR浠杩欎釜
    immediateResult: string;  // 鍗虫椂鍚庢灉鎻忚堪
    reasoning?: string;       // 瑙掕壊鍐呭績鐙櫧锛堝畬鏁村師鏂囷級
    reactionToUser?: string;  // 瑙掕壊瀵圭帺瀹舵搷浣滅殑璇勪环
    narrative?: CharNarrative; // 瑙掕壊鍙欎簨灞傦紙LLM鍥炲悎浣跨敤锛?
    chainFromId?: string;     // 鐢卞摢涓簨浠堕摼寮曞彂
    storyKind?: SimStoryKind;
    headline?: string;
    involvedNpcIds?: string[];
    attachments?: SimStoryAttachment[];
    timestamp: number;
}

export interface SimPendingEffect {
    id: string;
    triggerTurn: number;
    npcId?: string;
    familyId?: string;
    description: string;
    effectCode: SimEffectCode;
    effectValue?: number;
    chainFrom?: string;        // 浜х敓姝ゆ晥鏋滅殑浜嬩欢ID
    severity?: number;         // 1-5 涓ラ噸绋嬪害
    involvedNpcIds?: string[]; // 娑夊強鐨凬PC
}

export interface SimNPC {
    id: string;
    name: string;
    emoji: string;       // 瑙掕壊澶村儚 emoji锛堝悗缁浛鎹负鍍忕礌澶村儚seed锛?
    personality: string[]; // ["鏆磋簛","鍠勮壇","濂藉"]
    mood: number;        // -100 ~ 100
    familyId: string | null; // null = 鐙珛
    profession?: SimProfession; // 绾韩浠芥爣绛?
    gold?: number;              // 璐㈠瘜鎸囨爣
    // 浜虹墿鏁呬簨绯荤粺
    gender?: SimGender;         // 鎬у埆锛堟瘡灞€闅忔満锛?
    bio?: string;               // 浜虹墿绠€浠嬶紙1-2鍙ワ級
    backstory?: string;         // 鑳屾櫙鏁呬簨锛?-3鍙ワ級
    // 鍐呴┍鍔涚郴缁?
    desires?: NPCDesire[];      // 褰撳墠娆叉湜
    grudges?: string[];         // 璁颁粐瀵硅薄 NPC IDs
    crushes?: string[];         // 鏆楁亱瀵硅薄 NPC IDs
    // 鍚戝悗鍏煎鏃у瓨妗ｏ紙杩佺Щ鏃跺垹闄わ級
    energy?: number;
    skills?: SimSkills;
    inventory?: Record<string, number>;
    currentActivity?: SimActivity;
    activityResult?: string;
}

export interface SimFamily {
    id: string;
    name: string;
    emoji: string;       // 瀹跺涵鏍囧織 emoji
    memberIds: string[];
    relationships: Record<string, Record<string, number>>; // npcId -> npcId -> [-100,100]
    homeX: number;       // 0-100 percent
    homeY: number;
}

// 鈹€鈹€ LifeSim 鍩虹绫诲瀷 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€

export type SimSeason = 'spring' | 'summer' | 'fall' | 'winter';
export type SimWeather = 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy' | 'windy';
export type SimTimeOfDay = 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night';
export type SimProfession = 'programmer' | 'designer' | 'finance' | 'influencer' | 'lawyer' | 'freelancer' | 'barista' | 'musician'
    | 'internet_troll' | 'fanfic_writer' | 'fan_artist' | 'college_student' | 'tired_worker' | 'old_fashioned' | 'fashion_designer';

export type SimGender = 'male' | 'female' | 'nonbinary';

// 淇濈暀浣嗕笉鍐嶄娇鐢ㄧ殑鏃х被鍨嬶紙瀛樻。鍏煎锛?
export type SimActivity = 'farming' | 'mining' | 'fishing' | 'crafting' | 'socializing' | 'resting' | 'foraging' | 'trading';
export interface SimSkills { farming: number; mining: number; fishing: number; crafting: number; social: number; foraging: number; }
export interface SimBuilding { id: string; type: string; name: string; x: number; y: number; level: number; familyId?: string; }

export interface SimFestival {
    name: string;
    season: SimSeason;
    day: number;
    emoji: string;
    description: string;
    moodBonus: number;
    relBonus: number;
    chaosChange: number;
}

// 绂荤嚎鍥為【浜嬩欢
export interface OfflineRecapEvent {
    day: number;
    season: SimSeason;
    timeOfDay: SimTimeOfDay;
    headline: string;          // 鎴忓墽鎬ф爣棰?
    description: string;       // 浜嬩欢鎻忚堪
    involvedNpcs: { name: string; emoji: string }[];
    eventType: SimEventType | SimEffectCode;
    moodChanges?: Record<string, number>;   // npcId -> delta
    relChanges?: { a: string; b: string; delta: number }[];
    chaosChange?: number;
    narrativeQuote?: string;   // 绂荤嚎妯℃澘鏃佺櫧
}

export interface LifeSimState {
    id: string;
    createdAt: number;
    turnNumber: number;
    currentActorId: string; // 'user' | char.id 鈥?褰撳墠璋佺殑鍥炲悎
    families: SimFamily[];
    npcs: SimNPC[];
    actionLog: SimAction[];  // 瀹屾暣鍘嗗彶
    pendingEffects: SimPendingEffect[];
    chaosLevel: number;      // 0-100锛屼贡搴︽寚鏁?
    charQueue: string[];     // 寰呮墽琛岀殑CHAR id闃熷垪锛堢敤鎴风粨鏉熷悗濉叆锛?
    replayPending: SimAction[]; // 鐢ㄦ埛鍥炴潵鍚庡緟鍥炴斁鐨勮鍔?
    participantCharIds?: string[]; // 鍏佽鍙備笌鏈眬LifeSim鐨勫閮ㄨ鑹?
    useIndependentApiConfig?: boolean;
    independentApiConfig?: Partial<APIConfig>;
    isProcessingCharTurn: boolean;
    gameOver: boolean;
    gameOverReason?: string;
    // 鏃堕棿绯荤粺
    season?: SimSeason;
    day?: number;        // 1-28
    year?: number;
    timeOfDay?: SimTimeOfDay;
    weather?: SimWeather;
    lastFestival?: string;  // 涓婃瑙﹀彂鐨勮妭鏃ュ悕
    // 绂荤嚎妯℃嫙
    lastActiveTimestamp?: number; // 涓婃娲昏穬鏃堕棿
    offlineRecap?: OfflineRecapEvent[]; // 绂荤嚎鍥為【鏁版嵁
    // 鏃у瓧娈碉紙瀛樻。鍏煎锛岃繍琛屾椂蹇界暐锛?
    buildings?: SimBuilding[];
    worldInventory?: Record<string, number>;
    worldGold?: number;
}

// 鈹€鈹€鈹€ 琛楄 路 绾︿細涓栫晫寮曟搸 (Date World Engine) 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// char 甯︾潃 user 鍦ㄤ笉鍚屽満鏅噷婧滆揪鐨勬棩甯搁櫔浼村悜绾︿細銆傚壇 API 褰撲笘鐣屽紩鎿庡仛鍦烘櫙璋冨害锛?
// 鏀寔鍐呯疆/鑷畾涔夊満鏅€佸涓栫晫绾垮垎鏀€佽瘽/鍔ㄤ綔鍒嗚緭鍏ャ€佹皼鍥?BGM銆佹瘡 20 杞€荤粨闅愯棌涓婃枃銆?

/** 绾︿細鍦烘櫙锛堝唴缃垨鑷畾涔夛級 */
export interface DateScene {
  id: string;
  name: string;        // "娴疯竟鏍堥亾"
  emoji: string;       // "馃寠"
  vibe: string;        // 鍩鸿皟/姘涘洿锛堝杺涓栫晫寮曟搸 + BGM 鐢熸垚锛?
  opening: string;     // 寮€鍦烘梺鐧?
  builtin?: boolean;
}

export type DateRole = 'user' | 'char' | 'world';

/** 绾︿細閲岀殑涓€鏉℃秷鎭細user(璇?鍔ㄤ綔) / char(鍥炲簲) / world(涓栫晫寮曟搸鏃佺櫧路鍦烘櫙璋冨害) */
export interface DateMessage {
  id: string;
  role: DateRole;
  speech?: string;     // 璇寸殑璇?
  action?: string;     // 鍋氱殑鍔ㄤ綔 / 鏃佺櫧
  ts: number;
}

/** 涓€鏉′笘鐣岀嚎锛堜竴涓墽鎯呭垎鏀級銆傚涓栫晫绾?= 鍚岃鑹蹭笅澶氭潯 DateWorldline銆?*/
export interface DateWorldline {
  id: string;
  charId: string;
  sceneId: string;
  sceneName: string;
  sceneEmoji: string;
  vibe: string;            // 褰撳墠姘涘洿鍏抽敭璇嶏紙闅忓墽鎯呮洿鏂帮紝鍠?BGM锛?
  title: string;           // 涓栫晫绾挎爣棰橈紙鑷姩鍙栵紝鐢ㄦ埛鍙敼锛?
  createdAt: number;
  updatedAt: number;
  turnCount: number;       // 宸茶繘琛屽洖鍚堟暟锛堢敤浜?20 杞€荤粨锛?
  messages: DateMessage[]; // 褰撳墠鍙娑堟伅锛堟€荤粨闅愯棌鍚庡彧淇濈暀 mark 涔嬪悗鐨勶級
  recap?: string;          // 鎴嚦 recapTurnMark 鐨勫墽鎯呮€荤粨锛堥殣钘忎笂鏂囧悗娉ㄥ叆涓栫晫寮曟搸锛?
  recapTurnMark?: number;
  parentId?: string;       // 浠庡摢鏉′笘鐣岀嚎鍒嗗弶鏉?
  forkedAtTurn?: number;
  bgmAssetKey?: string;    // 宸茬敓鎴愮殑涓撳睘 BGM 璧勬簮 key锛坢inimaxMusic 缂撳瓨锛?
  bgmVibe?: string;        // 鐢熸垚璇?BGM 鏃剁殑姘涘洿
}

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// 鎶樺瓙鎴徛疯皥蹇冿紙heart-to-heart锛夛細璁?user 鏈変釜琚鐪熷€惧惉銆佽瀹夋叞鐨勫湴鏂广€?
// 姣忔璋堝績鏄竴涓?user / char 杞祦鐨勮瘽锛屽彲瀛樻。銆佸彲鏀跺綍杩涘瞾鏃惰路鍏歌棌棣嗐€佸彲杞彂缁欏埆鐨勮鑹层€?
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
export interface TalkTurn {
  role: 'user' | 'char';
  text: string;
  at: number;
}
export type TalkMode = 'hold' | 'untangle' | 'courage' | 'celebrate' | 'letter';
export interface TalkInsight {
  id: string;
  title: string;
  body: string;
  createdAt: number;
}
export interface TalkSession {
  id: string;
  charId: string;
  title: string;          // 鍙栬嚜棣栧彞鎴栦富棰橈紝鍒楄〃灞曠ず鐢?
  mood?: string;          // 璋堝績褰撲笅閫夌殑蹇冩儏 / 涓婚鏍囩
  mode?: TalkMode;        // 璋堝績鏂瑰紡锛氶櫔浼?/ 姊崇悊 / 榧撳姴 / 鍒嗕韩寮€蹇冧簨 / 鍐欎竴灏佷俊
  intention?: string;     // 鐢ㄦ埛寮€鍦哄墠鍐欎笅鐨勬兂琚浣曢櫔浼?
  insights?: TalkInsight[]; // 闃舵鎬у畨鏀惧崱 / 灏忕粨
  turns: TalkTurn[];
  createdAt: number;
  lastActiveAt: number;
}

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// 鎶樺瓙鎴徛峰褰憋紙鏌掞級锛氬悓涓€涓汉鍦ㄤ笉鍚屾椂闂撮噷鐨勪袱涓嚜宸辩浉閫€?
// 鐢熸垚缁撴灉榛樿鍙暀鍦ㄦ姌瀛愭垙锛涚敤鎴蜂富鍔ㄥ彂鍒拌亰澶?/ 鏀惰繘鍏歌棌棣嗗悗鎵嶈繘鍏ュ叾瀹冨嚭鍙ｃ€?
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
export type TheaterReflectionMode = 'moonlight' | 'letter' | 'crossroad' | 'reconcile';
export type TheaterReflectionTone = 'restrained' | 'tender' | 'aching' | 'relieved';
export type TheaterReflectionLength = 'short' | 'standard' | 'long';

export interface TheaterReflectionOptions {
  mode: TheaterReflectionMode;
  tone: TheaterReflectionTone;
  length: TheaterReflectionLength;
  userSeed?: string;
}

export interface TheaterReflectionNodeSnapshot {
  id: string;
  ts: number;
  era: 'before' | 'meeting' | 'after';
  title: string;
  scene: string;
  mood?: string;
  place?: string;
  source?: 'generated' | 'firstMet' | 'lifeEvent';
  when: string;
}

export interface TheaterReflectionLine {
  who: 'past' | 'now' | 'narration' | 'user';
  text: string;
  at?: number;
}

export interface TheaterReflectionScene {
  title: string;
  subtitle?: string;
  lines: TheaterReflectionLine[];
}

export interface TheaterReflectionSession {
  id: string;
  charId: string;
  charName: string;
  userName: string;
  title: string;
  subtitle?: string;
  nodes: {
    past: TheaterReflectionNodeSnapshot;
    now: TheaterReflectionNodeSnapshot;
  };
  options: TheaterReflectionOptions;
  initialScene: TheaterReflectionScene;
  continuationLines: TheaterReflectionLine[];
  createdAt: number;
  updatedAt: number;
}

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// 鎶樺瓙鎴徛风嫾浜烘潃锛堟崒锛夛細鎷変竴妗岀啛浜哄紑涓€灞€鐙间汉鏉€銆?
// user 涓庨€変腑鐨勮鑹插悇鍗犱竴搴э紝AI 鐜╁鎸夊悇鑷韩浠斤紙鐙?/ 棰勮█瀹?/ 濂冲帆 / 鐚庝汉 / 骞虫皯锛?
// 鍦ㄥ閲岃鍔ㄣ€佺櫧澶╁彂瑷€銆佹姇绁ㄦ斁閫愩€侫I 鍙戣█璧板壇 API銆佽创鍚勮嚜浜鸿璇磋瘽銆佷細浼浼氭帹鐞嗐€?
// 涓€灞€瀹屾暣娴佺▼锛堝鈫掓樇鈫掓姇绁級璁板湪 log 閲岋紝鍙瓨妗ｃ€佸洖鐪嬨€佺画灞€銆?
// 馃搶 prompt 鏂囨闆嗕腑鍦?utils/theaterPrompts.ts锛圼鎹宂 鐙间汉鏉€ 鍖烘锛夛紝寮曟搸鍦?utils/theaterWerewolf.ts銆?
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
export type WerewolfRole = 'wolf' | 'seer' | 'witch' | 'hunter' | 'villager';
export type WerewolfPhase = 'setup' | 'night' | 'day' | 'vote' | 'over';
export type WerewolfDeathReason = 'wolf' | 'vote' | 'poison' | 'shot';

export interface WerewolfPlayer {
  seat: number;            // 搴т綅鍙?1..N
  name: string;
  isUser: boolean;
  charId?: string;         // AI 鐜╁瀵瑰簲瑙掕壊锛坲ser 搴т綅鏃狅級
  avatar?: string;
  role: WerewolfRole;
  alive: boolean;
  deadRound?: number;      // 姝讳簬绗嚑杞?
  deadReason?: WerewolfDeathReason;
}

export interface WerewolfLogEntry {
  round: number;
  kind: 'narration' | 'speech' | 'vote' | 'death' | 'result' | 'system' | 'check';
  seat?: number;           // 鍏宠仈鐜╁搴т綅
  name?: string;           // 鍐椾綑瀛樺悕瀛楋紝閬垮厤搴т綅閲嶆帓
  text: string;
  at: number;
  privateToUser?: boolean; // 浠?user 鍙锛堥瑷€瀹舵煡楠岀粨鏋滅瓑锛?
}

export interface WerewolfGame {
  id: string;
  title: string;
  createdAt: number;
  lastActiveAt: number;
  players: WerewolfPlayer[];
  round: number;           // 褰撳墠杩涜鍒扮鍑犺疆锛堢 1 涓鏅?= 1锛?
  phase: WerewolfPhase;
  log: WerewolfLogEntry[];
  witchHealUsed: boolean;  // 濂冲帆瑙ｈ嵂鏄惁宸茬敤
  witchPoisonUsed: boolean;// 濂冲帆姣掕嵂鏄惁宸茬敤
  pendingKill?: number | null;   // 鏈鐙煎垁鐩爣搴т綅锛堢粨绠楀墠鏆傚瓨锛?
  winner?: 'good' | 'wolf' | null;
}

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// 鎶樺瓙鎴徛风湡蹇冭瘽澶у啋闄╋紙鐜栵級锛氬拰瑙掕壊浠洿涓€鍦堢帺杞摱瀛愩€?
// 姣忚疆杞摱瀛愰€変竴涓€屽彈棰樿€呫€嶏紝TA 鎸戠湡蹇冭瘽鎴栧ぇ鍐掗櫓锛涘彟涓€涓汉鍑洪锛屽彈棰樿€呬綔绛?鎵ц銆?
// user 涓?AI 閮借兘褰撳彈棰樿€?/ 鍑洪鑰咃紱AI 璐村悇鑷汉璁惧嚭棰樸€佺瓟棰橈紝鍙皟灏哄害锛堣交鏉?鏆ф槯/澶ц儐锛夈€?
// 涓€灞€锛濅竴涓湀 + 涓€涓插洖鍚堣褰曪紝鍙瓨妗ｃ€佸洖鐪嬨€佺画鐜┿€?
// 馃搶 prompt 鏂囨闆嗕腑鍦?utils/theaterPrompts.ts锛圼鐜朷 鐪熷績璇濆ぇ鍐掗櫓 鍖烘锛夛紝寮曟搸鍦?utils/theaterTruthDare.ts銆?
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
export type TruthDareKind = 'truth' | 'dare';
export type TruthDareSpice = 'light' | 'flirty' | 'bold';

export interface TruthDarePlayer {
  id: string;          // 'user' 鎴?charId
  name: string;
  isUser: boolean;
  charId?: string;
  avatar?: string;
}

export interface TruthDareRound {
  no: number;          // 绗嚑鍥炲悎
  targetId: string;    // 鍙楅鑰?player id
  targetName: string;
  kind: TruthDareKind; // 鐪熷績璇?/ 澶у啋闄?
  poserId: string;     // 鍑洪鑰?player id
  poserName: string;
  challenge: string;   // 棰橀潰
  answer: string;      // 浣滅瓟 / 鎵ц鎻忚堪
  at: number;
}

export interface TruthDareSession {
  id: string;
  title: string;
  createdAt: number;
  lastActiveAt: number;
  players: TruthDarePlayer[];
  spice: TruthDareSpice;    // 灏哄害
  rounds: TruthDareRound[];
}

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// 鎶樺瓙鎴徛风暘澶栭棶鍗凤細鍙繚瀛?缁仛鐨勯棶鍗锋埧闂淬€?
// 姣忛淇濆瓨 user 涓庝竴涓垨澶氫釜瑙掕壊鐨勭瓟妗堬紝鎻愪氦绛旀鍚庤繘鍏ラ鍐呰瘎璁哄尯锛涘彧鏈変富鍔ㄧ偣涓嬩竴棰樻墠鎺ㄨ繘銆?
// 馃搶 prompt 鏂囨闆嗕腑鍦?utils/theaterPrompts.ts锛圼璐癩 鐣 鍖烘锛夛紝鐢熸垚閫昏緫鍦?utils/theaterExtra.ts銆?
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
export type TheaterQuizStatus = 'active' | 'finished';
export type TheaterQuizItemState = 'answering' | 'commenting' | 'complete';
export type TheaterQuizAnswerStatus = 'pending' | 'done' | 'failed';
export type TheaterQuizFlow = 'classic' | 'interview_test';
export type TheaterQuizContentScale = 'mixed';

export interface TheaterQuizSettings {
  flow: TheaterQuizFlow;
  hostEnabled: boolean;
  peerReviewEnabled: boolean;
  resultEnabled: boolean;
  contentScale: TheaterQuizContentScale;
}

export interface TheaterQuizResultDimension {
  key: string;
  label: string;
  score: number;
  summary: string;
}

export interface TheaterQuizResult {
  generatedAt: number;
  title: string;
  summary: string;
  totalScore: number;
  dimensions: TheaterQuizResultDimension[];
  highlights: string[];
  frictions: string[];
  suggestions: string[];
  fallbackText?: string;
}

export interface TheaterQuizAnswer {
  speakerId: string;       // 'user' 鎴?charId
  speakerName: string;
  isUser: boolean;
  charId?: string;
  avatar?: string;
  text: string;
  status: TheaterQuizAnswerStatus;
  error?: string;
  at: number;
}

export interface TheaterQuizComment {
  id: string;
  speakerId: string;       // 'user' 鎴?charId
  speakerName: string;
  isUser: boolean;
  charId?: string;
  avatar?: string;
  text: string;
  targetSpeakerId?: string;
  at: number;
}

export interface TheaterQuizItem {
  no: number;
  question: string;
  hostNote?: string;
  answers: Record<string, TheaterQuizAnswer>;
  comments: TheaterQuizComment[];
  state: TheaterQuizItemState;
  at: number;
  completedAt?: number;
}

export interface TheaterQuizSession {
  id: string;
  title: string;
  topic: string;
  status: TheaterQuizStatus;
  participantIds: string[];
  currentIndex: number;
  total: number;
  items: TheaterQuizItem[];
  settings?: TheaterQuizSettings;
  result?: TheaterQuizResult;
  createdAt: number;
  lastActiveAt: number;
  finishedAt?: number;
}

export interface TheaterFauxPiece {
  id: string;
  kind: TheaterFauxKind;
  charId: string;
  charName: string;
  keyword?: string;
  data: FauxScreenData | null;
  fallbackText: string;
  createdAt: number;
  updatedAt: number;
}

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// 宀佹椂璁奥峰吀钘忛锛氭妸銆岃皥蹇?/ 鍒涗綔绀?/ 鑷範瀹?/ 鎶樺瓙鎴忋€嶉噷瀹屾垚鐨勫唴瀹规敹杩涙潵锛?
// 鍙湪鍏歌棌棣嗛噷鎶婂凡鏀跺綍鐨勫墽鍦哄唴瀹逛笌璋堝績杞彂缁欎换鎰忚鑹诧紙缁?char B 鐪?user & char A 鐨勮褰曪級銆?
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
export type CollectionSourceType = 'talk' | 'novel' | 'song' | 'course' | 'quiz' | 'guidebook' | 'game' | 'reflection' | 'chat';
export interface CollectionItem {
  id: string;                 // = `${sourceType}:${sourceId}`锛屽ぉ鐒跺幓閲?
  sourceType: CollectionSourceType;
  sourceId: string;
  title: string;
  subtitle?: string;          // 鍓爣棰橈細鍙備笌瑙掕壊 / 浣撹 / 蹇冩儏绛?
  excerpt?: string;           // 涓€灏忔棰勮
  charIds?: string[];         // 鍏宠仈瑙掕壊锛堢敤浜庛€屾垜鍜?A 鐨勮褰曘€嶄笌杞彂鎺緸锛?
  cover?: string;             // emoji 鎴栧浘鐗?URL
  collectedAt: number;
}

// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
// 澶栧崠 App锛堝弬鑰冪編鍥級锛歝har 鍙互缁?user 鐐瑰崟銆乽ser 涔熷彲浠ョ粰 char 鐐瑰崟銆?
// 搴楅摵涓烘湰鍦扮敓鎴愶紙姣忔鍒锋柊 10+ 瀹讹紝鍙繘搴楃偣鑿滐級锛岃鍗曞彲鐪嬮厤閫佽繘搴︺€佸拰楠戞墜/鍟嗗鑱婂ぉ锛?
// 浠樻鏀寔鑷繁浠樹笌浠ｄ粯锛屽苟涓庢潵寰€ App 鑱斿姩锛堢粰鏌愯鑹茬偣鍗?浠ｄ粯浼氬湪璇ヨ鑹茶亰澶╅噷鐣欐秷鎭級銆?
// 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
/** 鑿滃搧瑙勬牸缁勶紙鍗曢€夛級锛氬銆屼唤閲忥細鏍囧噯浠?澶т唤(+5)銆嶃€岃荆搴︼細涓嶈荆/寰荆/鐗硅荆銆嶃€傚鏍囩編鍥€岄€夎鏍笺€嶃€?*/
export interface TakeoutDishSpecOption { label: string; priceDelta: number; }
export interface TakeoutDishSpec { name: string; options: TakeoutDishSpecOption[]; }
/** 鑿滃搧鍔犳枡锛堝閫夛紝鎸変唤鍔犱环锛夛細濡傘€屽姞铔?+2銆嶃€屽姞瀹界矇 +3銆嶃€傚鏍囩編鍥€屽姞鏂欍€嶃€?*/
export interface TakeoutDishAddon { label: string; price: number; }
export interface TakeoutDish {
  id: string;
  name: string;
  desc?: string;
  price: number;
  emoji?: string;
  popular?: boolean;       // 鎷涚墝/鐑攢
  /** 鑿滃搧鏈堝敭锛堝睍绀恒€屾湀鍞甆銆嶏級锛屽彲閫夈€?*/
  monthlySales?: number;
  /** 瑙勬牸缁勶紙鍗曢€夛紝鍙缁勶細浠介噺/杈ｅ害/鐢滃害/鍐伴噺鈥︼級锛岄€夐」甯﹀樊浠枫€傚鏍囩編鍥€岄€夎鏍笺€嶃€?*/
  specs?: TakeoutDishSpec[];
  /** 鍔犳枡锛堝閫夛紝鎸変唤鍔犱环锛夈€傚鏍囩編鍥€屽姞鏂欍€嶃€?*/
  addons?: TakeoutDishAddon[];
  /** 鐢ㄦ埛鍦ㄩキ绁ㄩ噷鎵嬪姩鏂板鐨勮彍銆?*/
  userCustom?: boolean;
  /** 鐢ㄦ埛鎵嬪姩鏀硅繃杩欓亾鑿滅殑鍚嶇О銆佷环鏍笺€佽鏍兼垨鍏跺畠瀛楁銆?*/
  userEdited?: boolean;
  /** 浠庘€滄垜鐨勮彍搴撯€濆鍒惰繘褰撳墠搴楅摵鐨勮彍鍝佹潵婧愰敋銆?*/
  libraryDishId?: string;
  /** 鏈€杩戜竴娆℃墜鍔ㄤ繚瀛樻椂闂淬€?*/
  updatedAt?: number;
}
export interface TakeoutStore {
  id: string;
  name: string;
  emoji: string;           // 搴楅摵 logo锛坋moji锛?
  category: string;        // 涓 / 濂惰尪 / 蹇 / 鐢滃搧 鈥?
  rating: number;          // 4.x
  monthlySales: number;    // 鏈堝敭
  deliveryMinutes: number; // 棰勮閰嶉€佸垎閽?
  deliveryFee: number;
  minOrder: number;        // 璧烽€佷环
  distanceKm: number;
  promo?: string;          // 婊″噺 / 棣栧崟浼樻儬鏂囨
  dishes: TakeoutDish[];
  /** AI 鐢熸垚鐨勫簵閾虹畝浠?/ 鎷涚墝涓€鍙ヨ瘽锛堝弬鐓х湡瀹炲鍗栧簵鐨勩€屽簵閾哄叕鍛娿€嶏級銆?*/
  blurb?: string;
  /**
   * 闅愯棌鐨勩€岃壇蹇冨€笺€?~1锛氳秺浣庤秺榛戝績锛堝垎閲忎笉瓒炽€佸崼鐢熷樊銆佸浘鏂囦笉绗︺€佸己鍒剁爫鍗曠殑姒傜巼瓒婇珮锛夈€?
   * 鐜板疄閲屼笅鍗曞墠鐪嬩笉瑙侊紝鍙敤浜庝笅鍗曞悗鎺烽厤閫佷簨浠讹紱UI 涓嶇洿鎺ュ睍绀恒€?
   */
  integrity?: number;
  /** 鐜板疄閲岀湅寰楄鐨勭孩鏃楁彁绀猴紙濡傘€岃繎鏈熷崼鐢熷樊璇勫路璋ㄦ厧涓嬪崟銆嶏級銆傞粦蹇冨簵閲屾湁涓€閮ㄥ垎浼氫寒鏄庯紝姝ｅ父搴椾负绌恒€?*/
  warning?: string;
  /** AI 鐢熸垚鏍囪锛堢敤浜庛€孉I 鐜版悡鐨勫簵銆嶅窘鏍囷級銆?*/
  aiGenerated?: boolean;
  /** 鐢ㄦ埛鎵嬪姩鍒涘缓鐨勯摵瀛愩€?*/
  userCustom?: boolean;
  /** 鐢ㄦ埛鎵嬪姩鏀硅繃杩欏閾哄瓙鐨勮祫鏂欐垨鑿滃崟銆?*/
  userEdited?: boolean;
  /** 鏈€杩戜竴娆℃墜鍔ㄤ繚瀛樻椂闂淬€?*/
  updatedAt?: number;
}
export interface TakeoutOrderItem {
  dishId: string; name: string; price: number; qty: number; emoji?: string;
  /** 鎵€閫夎鏍肩殑鍚堝苟鎻忚堪锛堝銆屽ぇ浠铰峰井杈ｃ€嶏級锛屽鏍囩編鍥€岄€夎鏍笺€嶃€俻rice 宸插惈瑙勬牸/鍔犳枡宸环銆?*/
  spec?: string;
  /** 鎵€閫夊姞鏂欙紙濡傘€屽姞铔嬨€嶃€屽姞鑲犮€嶏級锛屽鏍囩編鍥€屽姞鏂欍€嶃€?*/
  addons?: string[];
}
/** 涓€鏉?NPC / 鍟嗗 瀵硅瘎浠风殑鍥炲簲锛堛€屽叾瀹?npc 璇勮銆嶏級 */
export interface TakeoutReviewReply { name: string; emoji: string; text: string; at: number; isMerchant?: boolean; }
/** 鐢ㄦ埛瀵规煇鍗曠殑璇勪环 */
export interface TakeoutReview {
  rating: number;       // 1~5 鏄?
  text?: string;
  tags?: string[];      // 蹇嵎鏍囩锛堝銆屽垎閲忚冻銆嶃€岄€佸緱蹇€嶏級
  at: number;
  likes?: number;       // 鍏跺畠椋熷鐐圭殑銆屾湁鐢ㄣ€嶆暟
  replies?: TakeoutReviewReply[];  // 鍟嗗 / 鍏跺畠椋熷鐨勮瘎璁?
}
/**
 * 閰嶉€佺姸鎬侊細
 * - preparing 鍟嗗澶囬涓?/ delivering 楠戞墜閰嶉€佷腑锛堟寜鏃堕棿瀹炴椂鎺ㄧ畻锛?
 * - arrived 宸插埌杈韭峰緟鏀惰揣锛坣ow >= etaAt 浣嗙敤鎴峰皻鏈‘璁ゆ敹璐э紱銆屾敹鍒拌揣鎵嶈兘鐐归€佽揪銆嶇殑鍓嶆彁锛?
 * - delivered 宸查€佽揪锛堢敤鎴风偣浜嗙‘璁ゆ敹璐э紝鎴栫粰瑙掕壊鐐圭殑鍗曞埌鏃惰鑹插凡鏀朵笅锛?
 * - cancelled 宸插彇娑?
 */
export type TakeoutStatus = 'preparing' | 'delivering' | 'arrived' | 'delivered' | 'cancelled';
export interface TakeoutChatMsg { role: 'user' | 'rider' | 'store' | 'support'; text: string; at: number; }

/** 榛戝績鍟嗗 / 鍧忛獞鎵嬩細瑙﹀彂鐨勭幇瀹炲寲閰嶉€佷簨鏁呯绫汇€?*/
export type TakeoutIncidentKind =
  | 'short_weight'    // 缂烘枻灏戜袱 / 鍒嗛噺鏄庢樉涓嶈冻
  | 'missing_item'    // 婕忓彂椁愬搧
  | 'wrong_item'      // 閫侀敊椁?/ 涓婇敊鑿?
  | 'foreign_object'  // 椁愰噷鏈夊紓鐗╋紙澶村彂銆佸鏂欌€︼級
  | 'cold_food'       // 椁愬搧鍐板噳鍧ㄦ垚涓€鍥?
  | 'spilled'         // 鎾掓紡 / 鍖呰鐮存崯姹ゆ眮娲掑厜
  | 'severe_late'     // 涓ラ噸瓒呮椂
  | 'rider_ate'       // 楠戞墜鍋峰悆 / 鍔ㄨ繃椁?
  | 'left_at_door'    // 涓嶆墦鐢佃瘽鐩存帴涓㈤棬鍙ｏ紙鐢氳嚦鏀鹃敊鍦版柟锛?
  | 'fake_photo'      // 鍥炬枃涓ラ噸涓嶇锛堝崠瀹剁 vs 涔板绉€锛?
  | 'force_cancel';   // 鍟嗗鏀朵簡閽辫繜杩熶笉鎺ュ崟 / 寮哄埗鐮嶅崟

/** 涓€妗╅厤閫佷簨鏁咃紱涓嬪崟鏃舵寜鑹績鍊?楠戞墜闈犺氨搴︽幏鍑猴紝閫佽揪鍚庢毚闇茬粰鐢ㄦ埛銆?*/
export interface TakeoutIncident {
  kind: TakeoutIncidentKind;
  by: 'store' | 'rider';   // 璐ｄ换鏂?
  title: string;           // 鐭爣棰樸€岀己鏂ゅ皯涓ゃ€?
  detail: string;          // 鐜板疄鍖栨弿杩?
  suggestedRefund: number; // 鍚堢悊璧斾粯閲戦锛堟姇璇夋垚绔嬪悗閫€鍥為挶鍖咃級
}

/** 鎶曡瘔 / 鍞悗澶勭悊鐘舵€併€?*/
export interface TakeoutComplaint {
  filed: boolean;          // 宸插彂璧锋姇璇?
  resolved: boolean;       // 骞冲彴宸茬粨妗?
  outcome?: string;        // 缁撴缁撹鏂囨
  refunded: number;        // 鏈鎶曡瘔閫€鍥為噾棰?
}

export interface TakeoutOrder {
  id: string;
  storeId: string;
  storeName: string;
  storeEmoji: string;
  items: TakeoutOrderItem[];
  subtotal: number;
  deliveryFee: number;
  packFee: number;
  /** 鍙€夛細缁欒窇鑵跨殑灏忚垂锛堢粨绠楁椂鑷€夛紝璁″叆 total锛岃寮哄埗鐮嶅崟鏃堕殢 total 鍘熻矾閫€鍥烇級銆?*/
  tip?: number;
  total: number;
  /** 鏀惰揣浜猴細'me' = 鐢ㄦ埛鏈汉锛屽惁鍒欐槸 charId銆?*/
  recipient: string;
  /** 浠樻浜猴細'me' = 鐢ㄦ埛鑷粯锛屽惁鍒欐槸鏌愯鑹蹭唬浠樸€?*/
  payer: string;
  /** 涓昏鍏宠仈瑙掕壊 id锛堢敤浜庢潵寰€鑱斿姩 / 鍒楄〃灞曠ず锛夛細recipient 鎴?payer 涓偅涓鑹层€?*/
  charId?: string;
  payStatus: 'unpaid' | 'paid';
  /** 钀藉簱鏃剁殑鍩虹鐘舵€侊紱灞曠ず杩涘害鏃舵寜鏃堕棿瀹炴椂鎺ㄧ畻锛坙iveTakeoutStatus锛夈€?*/
  status: TakeoutStatus;
  riderName: string;
  riderEmoji: string;
  address: string;
  note?: string;
  placedAt: number;
  etaAt: number;           // 棰勮閫佽揪鏃堕棿鎴?
  /** 棰勭害閫佽揪鏃堕棿鎴筹紙閫変簡銆岄绾﹂€佽揪銆嶆椂锛涗负绌猴紳灏藉揩閫佽揪锛夈€傚鏍囩編鍥㈤绾︿笅鍗曘€?*/
  scheduledAt?: number;
  /** 椁愬叿浠芥暟锛?锛濇棤闇€椁愬叿鐨勭幆淇濋€夐」锛夈€傚鏍囩編鍥㈤鍏蜂唤鏁般€?*/
  tableware?: number;
  deliveredAt?: number;
  chat: TakeoutChatMsg[];  // 鍜岄獞鎵?鍟嗗/骞冲彴瀹㈡湇鐨勫璇?
  chatTarget?: 'rider' | 'store' | 'support';
  /** 闅愯棌鐨勯獞鎵嬮潬璋卞害 0~1锛氳秺浣庤秺瀹规槗瓒呮椂/鎾掓紡/鍋峰悆/涓嶉€佷笂闂ㄣ€?*/
  riderReliability?: number;
  /** 涓嬪崟鏃舵幏鍑恒€侀€佽揪鍚庢毚闇茬殑閰嶉€佷簨鏁咃紙榛戝績鍟嗗 / 鍧忛獞鎵嬶級銆?*/
  incidents?: TakeoutIncident[];
  /** 鎶曡瘔 / 鍞悗銆?*/
  complaint?: TakeoutComplaint;
  /** 寮哄埗鐮嶅崟鐨勫簵閾猴細琚晢瀹跺崟鏂归潰鍙栨秷锛堥挶宸查€€鍥為挶鍖咃級銆?*/
  cancelledByStore?: boolean;
  /** 鍙戣捣鏂癸細鐢ㄦ埛鍦ㄥ鍗?App / 鑱婂ぉ鍥炲舰閽堢偣鐨?= 'user'锛涜鑹蹭富鍔ㄤ负鐢ㄦ埛鐐圭殑 = 'char'銆?*/
  initiatedBy?: 'user' | 'char';
  /** 鏄惁宸插湪璇ヨ鑹茶亰澶╅噷鐢熸垚銆屽鍗栬鍗曞皬绁ㄣ€嶅崱鐗囷紙閬垮厤閲嶅鐢熸垚锛夈€?*/
  cardPosted?: boolean;
  /** 缁欒鑹茬偣鐨勫崟锛氬埌鏃惰鑹插凡鍦ㄨ亰澶╅噷瀵规敹鍒板鍗栧仛鍑哄弽搴旓紝閬垮厤閲嶅瑙﹀彂銆?*/
  reactionPosted?: boolean;
  /** 鐢ㄦ埛瀵规湰鍗曠殑璇勪环锛堥€佽揪鍚庡彲璇勪环锛涘惈鍟嗗/鍏跺畠椋熷鐨勮瘎璁猴級銆?*/
  review?: TakeoutReview;
}

