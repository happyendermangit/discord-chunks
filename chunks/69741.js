function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PUBLIC_SUCCESS_MODAL_SEEN_KEY: function() {
            return s
        },
        PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: function() {
            return u
        },
        PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: function() {
            return a
        },
        CREATE_NEW_CHANNEL_VALUE: function() {
            return o
        },
        MODERATOR_PERMISSIONS: function() {
            return E
        },
        MODERATOR_PERMISSIONS_FLAG: function() {
            return _
        },
        COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE: function() {
            return S
        },
        ENABLE_COMMUNITY_FLOW_MODAL_KEY: function() {
            return I
        },
        EnableCommunityModalSteps: function() {
            return l
        }
    }), n("222007");
    var l, i, r = n("316693"),
        d = n("49111");
    let s = "publicSuccessModalSeen",
        u = "667560445975986187",
        a = "669627189624307712",
        o = "1",
        E = [d.Permissions.ADMINISTRATOR, d.Permissions.KICK_MEMBERS, d.Permissions.BAN_MEMBERS, d.Permissions.MANAGE_GUILD, d.Permissions.MANAGE_CHANNELS, d.Permissions.MANAGE_ROLES, d.Permissions.MANAGE_MESSAGES, d.Permissions.MANAGE_GUILD_EXPRESSIONS, d.Permissions.CREATE_GUILD_EXPRESSIONS, d.Permissions.MANAGE_EVENTS, d.Permissions.CREATE_EVENTS, d.Permissions.MODERATE_MEMBERS, d.Permissions.MENTION_EVERYONE],
        _ = r.default.combine(...E),
        S = 1e3,
        I = "Enable Community Modal";
    (i = l || (l = {})).SAFETY_CHECK = "safety_check", i.BASICS = "basics", i.FINISH = "finish"
}