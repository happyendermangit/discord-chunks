function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        ReadStateTypes: function() {
            return i
        },
        UnreadSetting: function() {
            return r
        }
    }), (s = i || (i = {}))[s.CHANNEL = 0] = "CHANNEL", s[s.GUILD_EVENT = 1] = "GUILD_EVENT", s[s.NOTIFICATION_CENTER = 2] = "NOTIFICATION_CENTER", s[s.GUILD_HOME = 3] = "GUILD_HOME", s[s.GUILD_ONBOARDING_QUESTION = 4] = "GUILD_ONBOARDING_QUESTION", (a = r || (r = {}))[a.UNSET = 0] = "UNSET", a[a.ALL_MESSAGES = 1] = "ALL_MESSAGES", a[a.ONLY_MENTIONS = 2] = "ONLY_MENTIONS"
}