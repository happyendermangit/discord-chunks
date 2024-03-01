function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var l = n("404828"),
        r = n.n(l),
        a = n("203288"),
        i = n("679653"),
        u = n("848848"),
        o = n("361572"),
        s = n("42203"),
        c = n("305961"),
        d = n("957255"),
        f = n("27618"),
        p = n("697218"),
        h = n("315102"),
        m = n("404008"),
        g = n("159885"),
        E = n("82300"),
        C = n("290689"),
        y = n("49111"),
        L = n("782340");
    let A = e => {
        let t = s.default.getChannel(e);
        return null == t ? void 0 : t.getGuildId()
    };

    function S(e) {
        return {
            type: "guild",
            guildId: e.id,
            content: (0, g.truncateText)(e.name, 32),
            icon: h.default.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 40
            })
        }
    }

    function _(e, t) {
        let n;
        let l = v((0, g.truncateText)(e.name, 32));
        return {
            type: "channel",
            content: [n = "italics" === t ? {
                type: "em",
                content: [l]
            } : l],
            channelType: e.type,
            iconType: e.iconType
        }
    }

    function T(e) {
        return {
            type: "channel",
            content: [v("")],
            iconType: e ? "post" : "message"
        }
    }

    function I(e, t) {
        var n;
        let l = s.default.getChannel(e),
            r = (0, u.getChannelRoleSubscriptionStatus)(e, s.default, a.default, d.default).isSubscriptionGated,
            c = null !== (n = (0, m.getMentionIconType)(l)) && void 0 !== n ? n : "text";
        if (null != t) {
            let n = t.find(t => t.id === e);
            if (null != n) return {
                type: n.type,
                id: n.id,
                guildId: n.guild_id,
                name: n.name,
                isDm: null != l && l.isPrivate(),
                isForumPost: null != l && l.isForumPost(),
                isMentionable: !0,
                canViewChannel: !0,
                roleSubscriptionGated: r,
                iconType: c,
                parentId: null == l ? void 0 : l.parent_id
            }
        }
        return null != l ? {
            type: l.type,
            id: l.id,
            guildId: l.guild_id,
            name: (0, i.computeChannelName)(l, p.default, f.default),
            isDm: l.isPrivate(),
            isForumPost: l.isForumPost(),
            isMentionable: (0, E.isChannelTypeMentionable)(l.type),
            canViewChannel: (0, o.canViewChannel)(l),
            roleSubscriptionGated: r,
            iconType: c,
            parentId: l.parent_id
        } : null
    }

    function N(e) {
        return {
            type: "link",
            content: [{
                type: "text",
                content: e
            }],
            target: e,
            title: void 0
        }
    }

    function v(e) {
        return {
            type: "text",
            content: e
        }
    }

    function R(e, t, n, l, r) {
        let a = c.default.getGuild(e),
            i = (null == a ? void 0 : a.id) === l;
        return {
            type: "channelMention",
            guildId: e,
            channelId: t,
            messageId: n,
            originalLink: r,
            inContent: null == a || i ? null : [S(a)],
            content: [_({
                name: L.default.Messages.UNKNOWN_CHANNEL,
                type: y.ChannelTypes.UNKNOWN,
                iconType: "text"
            }, "italics")]
        }
    }

    function b(e, t, n, l) {
        if (!e.canViewChannel) return function(e, t) {
            let n = {
                type: "channel",
                content: [v(e.roleSubscriptionGated ? e.name : L.default.Messages.NO_ACCESS)],
                channelType: e.roleSubscriptionGated ? e.type : y.ChannelTypes.UNKNOWN,
                iconType: "locked"
            };
            return {
                type: "channelMention",
                guildId: e.guildId,
                channelId: e.id,
                messageId: t,
                inContent: null,
                content: [n]
            }
        }(e, t);
        if (!e.isMentionable) return v("#".concat(e.name));
        let r = {
                type: "channelMention",
                channelId: e.id,
                guildId: e.guildId,
                messageId: t,
                originalLink: l
            },
            a = c.default.getGuild(e.guildId);
        if (null == a) {
            var i;
            if (e.isDm) return {
                ...r,
                guildId: y.ME,
                inContent: [_(e)],
                content: [T(!1)]
            };
            return null != (i = l) ? N(i) : v("#".concat(L.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
        }
        let u = e.guildId === n;
        return {
            ...r,
            ... function(e, t, n, l) {
                let r = S(e),
                    a = _(t),
                    i = T(t.isForumPost);
                if (n && l) {
                    if (t.isForumPost) {
                        let e = s.default.getChannel(t.parentId);
                        if (null != e) {
                            var u;
                            return {
                                inContent: [_({
                                    name: e.name,
                                    type: e.type,
                                    iconType: null !== (u = (0, m.getMentionIconType)(e)) && void 0 !== u ? u : "forum"
                                })],
                                content: [a]
                            }
                        }
                    }
                    return {
                        inContent: [a],
                        content: [i]
                    }
                }
                if (n && !l) return {
                    inContent: null,
                    content: [a]
                };
                if (!n && l) return {
                    inContent: [r],
                    content: [t.isForumPost ? a : i]
                };
                else if (!n && !l) return {
                    inContent: [r],
                    content: [a]
                }
            }(a, e, u, null != t)
        }
    }
    let M = {
            order: C.default.order,
            requiredFirstCharacters: ["<"],
            match: e => /^<#(\d+)>/.exec(e),
            parse(e, t, n) {
                let l = e[1];
                if (n.returnMentionIds) return {
                    type: "channelMention",
                    id: l
                };
                let r = I(l, n.mentionChannels);
                return null == r ? R(null, l, null, A(n.channelId)) : b(r, null, A(n.channelId))
            }
        },
        x = {
            order: r.defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match(e) {
                let t = o.CHANNEL_OR_MESSAGES_URL_RE.exec(e);
                return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
            },
            parse(e, t, n) {
                let l = e[0],
                    r = e[1],
                    a = e[2],
                    i = e[3];
                if (null == a) return N(l);
                let u = I(a, null);
                return null == u ? R(r, a, i, A(n.channelId), l) : b(u, i, A(n.channelId), l)
            }
        },
        U = {
            order: r.defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match: e => o.MEDIA_POST_URL_RE.exec(e),
            parse(e, t, n) {
                let l = e[0],
                    r = e[1],
                    a = e[2],
                    i = e[3],
                    u = e[4];
                if (null == a || null == i) return N(l);
                let o = I(i, null);
                if (null != o) return b(o, u, A(n.channelId), l);
                let s = I(a, null);
                return null != s ? b(s, u, A(n.channelId), l) : R(r, a, u, A(n.channelId), l)
            }
        };
    var O = {
        channelMention: M,
        channelOrMessageUrl: x,
        mediaPostLink: U
    }
}