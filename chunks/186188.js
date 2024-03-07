function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Emoji: function() {
            return A
        },
        CustomEmoji: function() {
            return x
        },
        TextMention: function() {
            return y
        },
        UserMention: function() {
            return O
        },
        RoleMention: function() {
            return R
        },
        ChannelMention: function() {
            return M
        },
        SoundboardMention: function() {
            return L
        },
        StaticRouteMention: function() {
            return P
        },
        CommandMention: function() {
            return b
        },
        Timestamp: function() {
            return j
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("446674"),
        a = n("77078"),
        s = n("430568"),
        r = n("308289"),
        o = n("206230"),
        u = n("980215"),
        d = n("361572"),
        c = n("82300"),
        f = n("235004"),
        m = n("42203"),
        p = n("305961"),
        h = n("102985"),
        E = n("697218"),
        g = n("666897"),
        S = n("404008"),
        C = n("387111"),
        T = n("158998"),
        v = n("680894"),
        I = n("782340"),
        _ = n("918841"),
        N = n("919163");

    function A(e) {
        let {
            emoji: t
        } = e;
        return (0, l.jsx)(a.Tooltip, {
            text: t.name,
            delay: 750,
            position: "top",
            children: e => (0, l.jsx)(s.default, {
                src: t.src,
                emojiName: t.name,
                animated: !1,
                ...e
            })
        })
    }

    function x(e) {
        let {
            emoji: t
        } = e;
        return (0, l.jsx)(a.Tooltip, {
            text: t.name,
            delay: 750,
            position: "top",
            children: e => (0, l.jsx)(s.default, {
                emojiId: t.emojiId,
                emojiName: t.name,
                animated: t.animated,
                ...e
            })
        })
    }

    function y(e) {
        let {
            text: t,
            channelId: n,
            guildId: i
        } = e, a = p.default.getGuild(i), s = m.default.getChannel(n), r = (0, u.useClydeEnabled)(a, s), o = r && "@Clyde" === t ? v.CLYDE_AI_MENTION_COLOR : null;
        return (0, l.jsx)(g.default, {
            color: o,
            children: t
        })
    }

    function O(e) {
        let {
            id: t,
            guildId: n,
            channelId: s
        } = e, o = (0, i.useStateFromStores)([E.default], () => E.default.getUser(t)), u = (0, i.useStateFromStores)([h.default], () => h.default.hidePersonalInformation), d = C.default.useName(n, s, o), c = (0, l.jsx)(g.default, {
            children: null == d ? "<@".concat(t, ">") : "@".concat(d)
        });
        if (null != o) {
            let e = u || o.isPomelo() ? null : "#".concat(o.discriminator);
            return (0, l.jsx)(a.Tooltip, {
                text: (0, l.jsxs)("div", {
                    className: _.userTooltip,
                    children: [(0, l.jsx)(r.default, {
                        user: o,
                        animate: !0,
                        size: a.AvatarSizes.SIZE_16,
                        className: _.avatar
                    }), T.default.getUserTag(o, {
                        mode: "username",
                        identifiable: u ? "never" : "always"
                    }), (0, l.jsx)("span", {
                        className: _.discriminator,
                        children: e
                    })]
                }),
                delay: 750,
                position: "top",
                "aria-label": T.default.getUserTag(o, {
                    decoration: "never"
                }),
                children: e => (0, l.jsx)(a.Clickable, {
                    tag: "span",
                    ...e,
                    children: c
                })
            })
        }
        return c
    }

    function R(e) {
        let {
            id: t,
            guildId: n
        } = e, s = (0, i.useStateFromStores)([p.default], () => {
            let e = p.default.getGuild(n);
            return null == e ? null : e.roles[t]
        }), r = (0, i.useStateFromStores)([o.default], () => o.default.roleStyle);
        if (null == s) return (0, l.jsx)("span", {
            children: "@deleted-role"
        });
        let u = null != s.color && 0 !== s.color;
        return (0, l.jsxs)(g.default, {
            color: "username" === r && u ? s.color : null,
            children: ["dot" === r && (0, l.jsx)(a.RoleDot, {
                color: s.colorString,
                background: !1,
                tooltip: !1
            }), "@", s.name]
        })
    }

    function M(e) {
        let {
            id: t
        } = e, n = (0, i.useStateFromStores)([m.default], () => m.default.getChannel(t)), a = I.default.Messages.UNKNOWN_CHANNEL, s = "text", r = !0;
        if (null != n) {
            var o;
            a = (0, d.canViewChannel)(n) ? n.name : I.default.Messages.NO_ACCESS, s = (0, d.canViewChannel)(n) ? null !== (o = (0, S.getMentionIconType)(n)) && void 0 !== o ? o : "text" : "locked", r = (0, c.isChannelTypeMentionable)(n.type)
        }
        return r ? (0, l.jsx)(g.default, {
            iconType: s,
            children: a
        }) : (0, l.jsx)("span", {
            children: "#" + a
        })
    }

    function L(e) {
        var t;
        let {
            id: n
        } = e, a = (0, i.useStateFromStores)([f.default], () => f.default.getSoundById(n));
        return (0, l.jsx)(g.default, {
            children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : "Sound"
        })
    }

    function P(e) {
        let {
            id: t
        } = e, n = {
            home: I.default.Messages.SERVER_GUIDE,
            guide: I.default.Messages.SERVER_GUIDE,
            browse: I.default.Messages.CHANNEL_BROWSER_TITLE,
            customize: I.default.Messages.CHANNELS_AND_ROLES
        };
        return (0, l.jsx)(g.default, {
            iconType: t,
            children: n[t]
        })
    }

    function b(e) {
        let {
            text: t,
            id: n
        } = e;
        return (0, l.jsxs)(g.default, {
            children: [t, "(", n, ")"]
        })
    }

    function j(e) {
        let {
            timestamp: t
        } = e;
        return (0, l.jsx)("span", {
            className: N.timestamp,
            children: t.formatted
        })
    }
}