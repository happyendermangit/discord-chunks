function(_, E, e) {
    "use strict";
    var I, o;
    e.r(E), e.d(E, {
        MessageTypes: function() {
            return I
        },
        MessageTypesSets: function() {
            return a
        }
    }), e("47120"), (o = I || (I = {}))[o.DEFAULT = 0] = "DEFAULT", o[o.RECIPIENT_ADD = 1] = "RECIPIENT_ADD", o[o.RECIPIENT_REMOVE = 2] = "RECIPIENT_REMOVE", o[o.CALL = 3] = "CALL", o[o.CHANNEL_NAME_CHANGE = 4] = "CHANNEL_NAME_CHANGE", o[o.CHANNEL_ICON_CHANGE = 5] = "CHANNEL_ICON_CHANGE", o[o.CHANNEL_PINNED_MESSAGE = 6] = "CHANNEL_PINNED_MESSAGE", o[o.USER_JOIN = 7] = "USER_JOIN", o[o.GUILD_BOOST = 8] = "GUILD_BOOST", o[o.GUILD_BOOST_TIER_1 = 9] = "GUILD_BOOST_TIER_1", o[o.GUILD_BOOST_TIER_2 = 10] = "GUILD_BOOST_TIER_2", o[o.GUILD_BOOST_TIER_3 = 11] = "GUILD_BOOST_TIER_3", o[o.CHANNEL_FOLLOW_ADD = 12] = "CHANNEL_FOLLOW_ADD", o[o.GUILD_STREAM = 13] = "GUILD_STREAM", o[o.GUILD_DISCOVERY_DISQUALIFIED = 14] = "GUILD_DISCOVERY_DISQUALIFIED", o[o.GUILD_DISCOVERY_REQUALIFIED = 15] = "GUILD_DISCOVERY_REQUALIFIED", o[o.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16] = "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING", o[o.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17] = "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING", o[o.THREAD_CREATED = 18] = "THREAD_CREATED", o[o.REPLY = 19] = "REPLY", o[o.CHAT_INPUT_COMMAND = 20] = "CHAT_INPUT_COMMAND", o[o.THREAD_STARTER_MESSAGE = 21] = "THREAD_STARTER_MESSAGE", o[o.GUILD_INVITE_REMINDER = 22] = "GUILD_INVITE_REMINDER", o[o.CONTEXT_MENU_COMMAND = 23] = "CONTEXT_MENU_COMMAND", o[o.AUTO_MODERATION_ACTION = 24] = "AUTO_MODERATION_ACTION", o[o.ROLE_SUBSCRIPTION_PURCHASE = 25] = "ROLE_SUBSCRIPTION_PURCHASE", o[o.INTERACTION_PREMIUM_UPSELL = 26] = "INTERACTION_PREMIUM_UPSELL", o[o.STAGE_START = 27] = "STAGE_START", o[o.STAGE_END = 28] = "STAGE_END", o[o.STAGE_SPEAKER = 29] = "STAGE_SPEAKER", o[o.STAGE_RAISE_HAND = 30] = "STAGE_RAISE_HAND", o[o.STAGE_TOPIC = 31] = "STAGE_TOPIC", o[o.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION = 32] = "GUILD_APPLICATION_PREMIUM_SUBSCRIPTION", o[o.PRIVATE_CHANNEL_INTEGRATION_ADDED = 33] = "PRIVATE_CHANNEL_INTEGRATION_ADDED", o[o.PRIVATE_CHANNEL_INTEGRATION_REMOVED = 34] = "PRIVATE_CHANNEL_INTEGRATION_REMOVED", o[o.PREMIUM_REFERRAL = 35] = "PREMIUM_REFERRAL", o[o.GUILD_INCIDENT_ALERT_MODE_ENABLED = 36] = "GUILD_INCIDENT_ALERT_MODE_ENABLED", o[o.GUILD_INCIDENT_ALERT_MODE_DISABLED = 37] = "GUILD_INCIDENT_ALERT_MODE_DISABLED", o[o.GUILD_INCIDENT_REPORT_RAID = 38] = "GUILD_INCIDENT_REPORT_RAID", o[o.GUILD_INCIDENT_REPORT_FALSE_ALARM = 39] = "GUILD_INCIDENT_REPORT_FALSE_ALARM", o[o.GUILD_DEADCHAT_REVIVE_PROMPT = 40] = "GUILD_DEADCHAT_REVIVE_PROMPT", o[o.CUSTOM_GIFT = 41] = "CUSTOM_GIFT", o[o.GUILD_GAMING_STATS_PROMPT = 42] = "GUILD_GAMING_STATS_PROMPT", o[o.PURCHASE_NOTIFICATION = 44] = "PURCHASE_NOTIFICATION", o[o.VOICE_HANGOUT_INVITE = 45] = "VOICE_HANGOUT_INVITE";
    let a = {
        UNDELETABLE: new Set([1, 2, 3, 4, 5, 21]),
        GUILD_DISCOVERY_STATUS: new Set([14, 15, 16, 17]),
        USER_MESSAGE: new Set([0, 19, 20, 23, 26, 35, 41, 45]),
        REPLYABLE: new Set([0, 7, 19, 20, 23, 24, 25, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 45]),
        LAZY_LOADED_MESSAGE_REFERENCES: new Set([19, 21]),
        AVAILABLE_IN_GUILD_FEED: new Set([0, 19]),
        DEADCHAT_PROMPTS: new Set([40, 42]),
        NON_COLLAPSIBLE: new Set([24]),
        NON_PARSED: new Set([4, 12, 18]),
        AUTOMOD_INCIDENT_ACTIONS: new Set([36, 37, 38, 39])
    }
}