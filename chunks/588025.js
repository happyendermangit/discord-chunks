function(e, t, n) {
    "use strict";
    var a, l, s, i;
    n.r(t), n.d(t, {
        QuestRewardCodePlatforms: function() {
            return a
        },
        QUEST_REWARD_CODE_PLATFORMS_SET: function() {
            return r
        },
        QuestContent: function() {
            return l
        }
    }), n("222007"), (s = a || (a = {}))[s.CROSS_PLATFORM = 0] = "CROSS_PLATFORM", s[s.XBOX = 1] = "XBOX", s[s.PLAYSTATION = 2] = "PLAYSTATION", s[s.SWITCH = 3] = "SWITCH", s[s.PC = 4] = "PC";
    let r = new Set(Object.values(a).filter(e => "number" == typeof e));
    (i = l || (l = {}))[i.GIFT_INVENTORY_SETTINGS_BADGE = 0] = "GIFT_INVENTORY_SETTINGS_BADGE", i[i.QUEST_BAR = 1] = "QUEST_BAR", i[i.QUEST_INVENTORY_CARD = 2] = "QUEST_INVENTORY_CARD", i[i.QUESTS_EMBED = 3] = "QUESTS_EMBED", i[i.ACTIVITY_PANEL = 4] = "ACTIVITY_PANEL", i[i.QUEST_LIVE_STREAM = 5] = "QUEST_LIVE_STREAM"
}