function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetVoiceChannelInfoForVoiceActivitySection: function() {
            return S
        },
        default: function() {
            return T
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("446674"),
        a = n("77078"),
        s = n("242740"),
        r = n("42203"),
        o = n("305961"),
        u = n("957255"),
        d = n("945956"),
        c = n("800762"),
        f = n("476263"),
        m = n("368121"),
        p = n("777003"),
        h = n("49111"),
        E = n("782340"),
        g = n("862939"),
        C = n("463147");

    function S(e, t) {
        let n = (0, i.useStateFromStores)([c.default], () => {
                var n;
                return null !== (n = c.default.getVoiceState(t, e)) && void 0 !== n ? n : c.default.getVoiceStateForUser(e)
            }, [t, e]),
            l = (0, i.useStateFromStores)([r.default], () => null != n && null != n.channelId ? r.default.getChannel(n.channelId) : null, [n]),
            a = (0, i.useStateFromStores)([o.default], () => null != l ? o.default.getGuild(l.guild_id) : null, [l]),
            s = (0, i.useStateFromStores)([u.default], () => null != l && u.default.can(h.Permissions.VIEW_CHANNEL, l), [l]),
            d = (0, i.useStateFromStores)([u.default], () => null != l && u.default.can(h.Permissions.CONNECT, l), [l]);
        return s && d && null != l && null != a ? {
            voiceGuild: a,
            voiceChannel: l
        } : null
    }

    function T(e) {
        let {
            voiceGuild: t,
            voiceChannel: n,
            onClose: r,
            color: o
        } = e, u = (0, i.useStateFromStores)([d.default], () => d.default.getChannelId() === n.id), c = u ? E.default.Messages.PROFILE_OPEN_VOICE_CHANNEL : n.isGuildStageVoice() ? E.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.default.Messages.PROFILE_JOIN_VOICE_CHANNEL;
        return (0, l.jsxs)(p.default, {
            children: [(0, l.jsx)(a.Heading, {
                variant: "eyebrow",
                className: g.title,
                children: E.default.Messages.PROFILE_IN_VOICE_CALL
            }), (0, l.jsxs)("div", {
                className: C.voiceDisplayContainer,
                children: [(0, l.jsxs)("div", {
                    className: C.iconContainer,
                    children: [(0, l.jsx)(f.default, {
                        size: f.default.Sizes.SMALL,
                        active: !0,
                        guild: t
                    }), (0, l.jsx)("div", {
                        className: C.speakerIconContainer,
                        children: (0, l.jsx)(m.default, {
                            className: C.speakerIcon
                        })
                    })]
                }), (0, l.jsxs)("div", {
                    className: C.voiceChannelInfo,
                    children: [(0, l.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        children: n.name
                    }), (0, l.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: null == t ? void 0 : t.name
                    })]
                })]
            }), (0, l.jsx)(a.Button, {
                onClick: function() {
                    null != n && (s.default.handleVoiceConnect({
                        channel: n,
                        connected: d.default.getChannelId() === n.id,
                        needSubscriptionToAccess: !1
                    }), null == r || r())
                },
                color: null != o ? o : a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                children: c
            })]
        })
    }
}