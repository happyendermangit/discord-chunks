function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        UserProfileSections: function() {
            return s
        },
        UserProfileTypes: function() {
            return o
        },
        TrackUserProfileProperties: function() {
            return E
        },
        getBadgeAsset: function() {
            return A
        }
    });
    var n, l, a, r, u, d, s, o, c, E, _, f, I = i("49111");

    function A(t) {
        let {
            API_ENDPOINT: e,
            CDN_HOST: i
        } = window.GLOBAL_ENV;
        return null != i ? "".concat(location.protocol, "//").concat(i, "/badge-icons/").concat(t, ".png") : "".concat(location.protocol).concat(e).concat(I.Endpoints.BADGE_ICON(t))
    }(n = s || (s = {})).USER_INFO = "USER_INFO", n.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", n.ACTIVITY = "ACTIVITY", n.MUTUAL_GUILDS = "MUTUAL_GUILDS", n.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", n.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", n.RECENT_GAMES = "RECENT_GAMES", (l = o || (o = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL", (a = c || (c = {})).POPOUT = "POPOUT", a.MODAL = "MODAL", a.DM_PANEL = "DM_PANEL", a.ACCOUNT_POPOUT = "ACCOUNT_POPOUT", a.ACTION_SHEET = "ACTION_SHEET", (r = E || (E = {}))[r.NICKNAME = 0] = "NICKNAME", r[r.PRONOUNS = 1] = "PRONOUNS", r[r.AVATAR = 2] = "AVATAR", r[r.ANIMATED_AVATAR = 3] = "ANIMATED_AVATAR", r[r.BANNER = 4] = "BANNER", r[r.ANIMATED_BANNER = 5] = "ANIMATED_BANNER", r[r.BIO = 6] = "BIO", r[r.THEME = 7] = "THEME", r[r.AVATAR_DECORATION = 8] = "AVATAR_DECORATION", r[r.PROFILE_EFFECT = 9] = "PROFILE_EFFECT", (u = _ || (_ = {})).VIEW = "VIEW", u.SEND_MESSAGE = "SEND_MESSAGE", u.SEND_DIRECT_MESSAGE = "SEND_DIRECT_MESSAGE", u.SEND_FRIEND_REQUEST = "SEND_FRIEND_REQUEST", u.ACCEPT_FRIEND_REQUEST = "ACCEPT_FRIEND_REQUEST", u.IGNORE_FRIEND_REQUEST = "IGNORE_FRIEND_REQUEST", u.CANCEL_FRIEND_REQUEST = "CANCEL_FRIEND_REQUEST", u.REMOVE_FRIEND = "REMOVE_FRIEND", u.BLOCK = "BLOCK", u.UNBLOCK = "UNBLOCK", u.REPORT = "REPORT", u.COPY_USERNAME = "COPY_USERNAME", u.COPY_USER_ID = "COPY_USER_ID", u.PRESS_VIEW_PROFILE = "PRESS_VIEW_PROFILE", u.PRESS_OPTIONS = "PRESS_OPTIONS", u.PRESS_BADGE = "PRESS_BADGE", u.PRESS_SECTION = "PRESS_SECTION", u.PRESS_PREMIUM_UPSELL = "PRESS_PREMIUM_UPSELL", u.PRESS_SET_STATUS = "PRESS_SET_STATUS", u.PRESS_SET_CUSTOM_STATUS = "PRESS_SET_CUSTOM_STATUS", u.PRESS_SWITCH_ACCOUNTS = "PRESS_SWITCH_ACCOUNTS", u.JOIN_ACTIVITY = "JOIN_ACTIVITY", u.SET_NOTE = "SET_NOTE", u.SET_FRIEND_NICKNAME = "SET_FRIEND_NICKNAME", u.EDIT_PROFILE = "EDIT_PROFILE", u.EDIT_GUILD_PROFILE = "EDIT_GUILD_PROFILE", u.GIFT_PREMIUM = "GIFT_PREMIUM", u.VOICE_CALL = "VOICE_CALL", u.VIDEO_CALL = "VIDEO_CALL", u.SET_VOLUME = "SET_VOLUME", u.MUTE = "MUTE", u.MUTE_SOUNDBOARD = "MUTE_SOUNDBOARD", u.DISABLE_VIDEO = "DISABLE_VIDEO", u.DEAFEN = "DEAFEN", u.DISCONNECT = "DISCONNECT", (d = f || (f = {})).VOICE = "VOICE", d.PLAYING = "PLAYING", d.STREAMING = "STREAMING", d.LISTENING = "LISTENING", d.WATCHING = "WATCHING", d.CUSTOM_STATUS = "CUSTOM_STATUS", d.COMPETING = "COMPETING", d.HANG_STATUS = "HANG_STATUS"
}