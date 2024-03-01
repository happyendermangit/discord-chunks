function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, {
        WELCOME_MESSAGE_MIN_LENGTH: function() {
            return d
        },
        WELCOME_MESSAGE_MAX_LENGTH: function() {
            return c
        },
        NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
            return s
        },
        NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
            return E
        },
        NEW_MEMBER_ACTION_MAX: function() {
            return _
        },
        RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
            return f
        },
        RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
            return h
        },
        RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
            return m
        },
        RESOURCE_CHANNEL_MAX: function() {
            return C
        },
        NewMemberActionTypes: function() {
            return i
        },
        newMemberActionFromServer: function() {
            return p
        },
        resourceChannelFromServer: function() {
            return T
        },
        settingsFromServer: function() {
            return N
        },
        settingsToServer: function() {
            return g
        },
        actionsFromServer: function() {
            return v
        },
        isWelcomeMessageEmpty: function() {
            return I
        },
        isSettingsEmpty: function() {
            return S
        },
        isSettingsValid: function() {
            return A
        },
        isChannelValidForResourceChannel: function() {
            return M
        },
        isChannelValidForNewMemberAction: function() {
            return L
        }
    });
    var l, i, r = t("42203"),
        o = t("449008"),
        u = t("991170"),
        a = t("49111");
    let d = 7,
        c = 300,
        s = 7,
        E = 60,
        _ = 5,
        f = 1,
        h = 30,
        m = 200,
        C = 7;

    function p(e) {
        var n;
        return {
            channelId: e.channel_id,
            actionType: e.action_type,
            title: e.title,
            description: e.description,
            emoji: null == e.emoji ? null : {
                id: e.emoji.id,
                name: e.emoji.name,
                animated: e.emoji.animated
            },
            icon: null !== (n = e.icon) && void 0 !== n ? n : null
        }
    }

    function T(e) {
        var n, t;
        return {
            channelId: e.channel_id,
            title: e.title,
            description: null !== (n = e.description) && void 0 !== n ? n : "",
            emoji: null == e.emoji ? null : {
                id: e.emoji.id,
                name: e.emoji.name,
                animated: e.emoji.animated
            },
            icon: null !== (t = e.icon) && void 0 !== t ? t : null
        }
    }

    function N(e) {
        if (null == e) return null;
        let {
            welcome_message: n,
            new_member_actions: t,
            resource_channels: l,
            enabled: i
        } = e, u = {
            authorIds: n.author_ids,
            message: n.message
        }, a = t.filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channel_id))).map(p), d = l.filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channel_id))).map(T);
        return {
            welcomeMessage: u,
            newMemberActions: a,
            resourceChannels: d,
            enabled: i
        }
    }

    function g(e, n) {
        var t, l;
        if (null == n) return null;
        let {
            welcomeMessage: i,
            newMemberActions: u,
            resourceChannels: a,
            enabled: d
        } = n, c = {
            author_ids: null !== (t = null == i ? void 0 : i.authorIds) && void 0 !== t ? t : [],
            message: null !== (l = null == i ? void 0 : i.message) && void 0 !== l ? l : ""
        }, s = (null != u ? u : []).filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
            var n, t, l, i, r, o, u;
            return {
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                    id: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : void 0,
                    name: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : void 0,
                    animated: null !== (o = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== o ? o : void 0
                },
                icon: null !== (u = e.icon) && void 0 !== u ? u : void 0
            }
        }), E = (null != a ? a : []).filter(e => (0, o.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
            var n, t, l, i, r, o, u;
            return {
                channel_id: e.channelId,
                title: e.title,
                description: e.description,
                emoji: {
                    id: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : void 0,
                    name: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : void 0,
                    animated: null !== (o = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== o ? o : void 0
                },
                icon: null !== (u = e.icon) && void 0 !== u ? u : void 0
            }
        });
        return {
            guild_id: e,
            welcome_message: c,
            new_member_actions: s,
            resource_channels: E,
            enabled: d
        }
    }(l = i || (i = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
    let v = e => {
        if (null == e) return null;
        let n = {};
        for (let t in e.channel_actions) n[t] = e.channel_actions[t].completed;
        return n
    };

    function I(e) {
        return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
    }

    function S(e) {
        return null == e || !!I(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
    }

    function A(e) {
        var n, t;
        return null != e && (!!S(e) || (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.message) != null && !(e.welcomeMessage.message.length < d) && (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
    }

    function M(e) {
        return e.type === a.ChannelTypes.GUILD_TEXT && !u.default.canEveryoneRole(a.Permissions.SEND_MESSAGES, e) && u.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e)
    }

    function L(e) {
        switch (e.type) {
            case a.ChannelTypes.GUILD_TEXT:
            case a.ChannelTypes.GUILD_ANNOUNCEMENT:
            case a.ChannelTypes.GUILD_FORUM:
            case a.ChannelTypes.GUILD_MEDIA:
                return u.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e);
            default:
                return !1
        }
    }
}