function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("917351"),
        r = n.n(s),
        o = n("509043"),
        u = n("446674"),
        d = n("77078"),
        c = n("272030"),
        f = n("888503"),
        m = n("206230"),
        p = n("862205"),
        h = n("895026"),
        E = n("506885"),
        g = n("981601"),
        C = n("42203"),
        S = n("26989"),
        T = n("305961"),
        I = n("697218"),
        v = n("145131"),
        _ = n("666897"),
        N = n("826684"),
        A = n("782340"),
        x = n("665958"),
        y = n("919163");
    let O = (0, p.createExperiment)({
        kind: "user",
        id: "2021-07_role_popout",
        label: "Role Popout",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Popout",
            config: {
                enabled: !0
            }
        }]
    });

    function R(e) {
        let {
            roleColor: t,
            roleId: i,
            channelId: s,
            roleName: p,
            guildId: R,
            children: M,
            inlinePreview: L = !1
        } = e, P = (0, u.useStateFromStores)([m.default], () => m.default.roleStyle), b = null != t && 0 !== t && !L, j = b && "dot" === P, U = e => (0, l.jsxs)(_.default, {
            className: a(y.roleMention),
            color: "username" === P && b ? t : null,
            ...e,
            children: [j && (0, l.jsx)(d.RoleDot, {
                color: (0, o.int2hex)(t),
                className: x.roleDot,
                background: !1,
                tooltip: !1
            }), M]
        }), {
            enabled: D
        } = O.getCurrentConfig({
            location: "2ec235_1"
        }, {
            autoTrackExposure: !1
        });
        return !D || L || null == s || null == R || null == i && "@everyone" !== p ? U() : (0, l.jsx)(d.Popout, {
            preload: async () => {
                null != i && await (0, h.requestMembersForRole)(R, i)
            },
            renderPopout: e => {
                let t = C.default.getChannel(s),
                    a = T.default.getGuild(R),
                    o = S.default.getMembers(a.id),
                    u = null == i ? a.roles[a.getEveryoneRoleId()] : a.roles[i],
                    m = r(o).filter(e => {
                        if ("@everyone" === p || e.roles.includes(i)) {
                            let t = I.default.getUser(e.userId);
                            return null != t
                        }
                        return !1
                    }).sortBy(e => {
                        var t;
                        let n = I.default.getUser(e.userId);
                        return (null != n ? null !== (t = e.nick) && void 0 !== t ? t : n.username : "").toLocaleLowerCase()
                    }).map(e => {
                        let i = I.default.getUser(e.userId);
                        return (0, l.jsx)(d.Popout, {
                            preload: () => (0, E.default)(i.id, i.getAvatarURL(t.guild_id, 80), {
                                guildId: t.guild_id,
                                channelId: t.id
                            }),
                            renderPopout: n => (0, l.jsx)(g.default, {
                                ...n,
                                userId: e.userId,
                                guildId: a.id,
                                channelId: t.id
                            }),
                            spacing: 14,
                            children: (s, r) => {
                                let {
                                    isShown: o
                                } = r;
                                return (0, l.jsx)(f.default, {
                                    selected: o,
                                    colorString: e.colorString,
                                    colorRoleName: u.name,
                                    user: i,
                                    isOwner: e.userId === a.ownerId,
                                    nick: e.nick,
                                    premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                    channel: t,
                                    guildId: a.id,
                                    onContextMenu: e => {
                                        (0, c.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("834247").then(n.bind(n, "834247"));
                                            return n => (0, l.jsx)(e, {
                                                ...n,
                                                user: i,
                                                guildId: a.id,
                                                channel: t,
                                                showMediaItems: !0
                                            })
                                        })
                                    },
                                    ...s
                                }, e.userId)
                            }
                        }, i.id)
                    }).value();
                return (0, l.jsx)(v.default, {
                    className: y.rolePopout,
                    ...e,
                    children: (0, l.jsxs)(d.Scroller, {
                        className: y.roleScroller,
                        children: [(0, l.jsx)(N.default, {
                            className: y.roleHeader,
                            "aria-label": A.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                                title: u.name,
                                count: m.length
                            }),
                            children: (0, l.jsxs)("span", {
                                "aria-hidden": !0,
                                children: [u.name, " — ", m.length]
                            })
                        }), m]
                    })
                })
            },
            position: "right",
            children: U
        })
    }
}