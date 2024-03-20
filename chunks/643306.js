function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("917351"),
        r = n.n(s),
        o = n("509043"),
        u = n("446674"),
        d = n("77078"),
        c = n("272030"),
        f = n("888503"),
        p = n("206230"),
        m = n("862205"),
        h = n("895026"),
        x = n("506885"),
        E = n("981601"),
        y = n("42203"),
        g = n("26989"),
        S = n("305961"),
        C = n("697218"),
        _ = n("145131"),
        T = n("666897"),
        I = n("826684"),
        v = n("782340"),
        N = n("665958"),
        A = n("919163");
    let O = (0, m.createExperiment)({
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
            roleId: l,
            channelId: s,
            roleName: m,
            guildId: R,
            children: M,
            inlinePreview: k = !1
        } = e, L = (0, u.useStateFromStores)([p.default], () => p.default.roleStyle), P = null != t && 0 !== t && !k, b = P && "dot" === L, j = e => (0, i.jsxs)(T.default, {
            className: a(A.roleMention),
            color: "username" === L && P ? t : null,
            ...e,
            children: [b && (0, i.jsx)(d.RoleDot, {
                color: (0, o.int2hex)(t),
                className: N.roleDot,
                background: !1,
                tooltip: !1
            }), M]
        }), {
            enabled: U
        } = O.getCurrentConfig({
            location: "2ec235_1"
        }, {
            autoTrackExposure: !1
        });
        return !U || k || null == s || null == R || null == l && "@everyone" !== m ? j() : (0, i.jsx)(d.Popout, {
            preload: async () => {
                null != l && await (0, h.requestMembersForRole)(R, l)
            },
            renderPopout: e => {
                let t = y.default.getChannel(s),
                    a = S.default.getGuild(R),
                    o = g.default.getMembers(a.id),
                    u = S.default.getRole(R, null != l ? l : a.getEveryoneRoleId()),
                    p = r(o).filter(e => {
                        if ("@everyone" === m || e.roles.includes(l)) {
                            let t = C.default.getUser(e.userId);
                            return null != t
                        }
                        return !1
                    }).sortBy(e => {
                        var t;
                        let n = C.default.getUser(e.userId);
                        return (null != n ? null !== (t = e.nick) && void 0 !== t ? t : n.username : "").toLocaleLowerCase()
                    }).map(e => {
                        let l = C.default.getUser(e.userId);
                        return (0, i.jsx)(d.Popout, {
                            preload: () => (0, x.default)(l.id, l.getAvatarURL(t.guild_id, 80), {
                                guildId: t.guild_id,
                                channelId: t.id
                            }),
                            renderPopout: n => (0, i.jsx)(E.default, {
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
                                return (0, i.jsx)(f.default, {
                                    selected: o,
                                    colorString: e.colorString,
                                    colorRoleName: u.name,
                                    user: l,
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
                                            return n => (0, i.jsx)(e, {
                                                ...n,
                                                user: l,
                                                guildId: a.id,
                                                channel: t,
                                                showMediaItems: !0
                                            })
                                        })
                                    },
                                    ...s
                                }, e.userId)
                            }
                        }, l.id)
                    }).value();
                return (0, i.jsx)(_.default, {
                    className: A.rolePopout,
                    ...e,
                    children: (0, i.jsxs)(d.Scroller, {
                        className: A.roleScroller,
                        children: [(0, i.jsx)(I.default, {
                            className: A.roleHeader,
                            "aria-label": v.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                                title: u.name,
                                count: p.length
                            }),
                            children: (0, i.jsxs)("span", {
                                "aria-hidden": !0,
                                children: [u.name, " — ", p.length]
                            })
                        }), p]
                    })
                })
            },
            position: "right",
            children: j
        })
    }
}