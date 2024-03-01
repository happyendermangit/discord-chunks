function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MemberRole: function() {
            return F
        },
        default: function() {
            return K
        }
    }), n("222007"), n("70102");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("627445"),
        o = n.n(r),
        u = n("748820"),
        d = n("974667"),
        c = n("509043"),
        f = n("446674"),
        m = n("669491"),
        p = n("77078"),
        h = n("272030"),
        E = n("851387"),
        g = n("737960"),
        C = n("206230"),
        S = n("454273"),
        T = n("339023"),
        v = n("405645"),
        I = n("592407"),
        _ = n("26989"),
        N = n("957255"),
        A = n("697218"),
        x = n("145131"),
        y = n("476765"),
        O = n("945330"),
        R = n("907566"),
        M = n("151185"),
        L = n("483093"),
        P = n("991170"),
        b = n("487311"),
        j = n("49111"),
        U = n("782340"),
        D = n("556248");
    let k = () => Promise.resolve();

    function w(e) {
        let {
            userRoles: t,
            position: n,
            ...i
        } = e, a = (0, y.useUID)();
        return (0, l.jsxs)(p.Dialog, {
            className: s(D.overflowRolesPopout, {
                [D.popoutBottom]: "bottom" === n,
                [D.popoutTop]: "top" === n
            }),
            "aria-labelledby": a,
            children: [(0, l.jsx)("div", {
                className: D.overflowRolesPopoutArrowWrapper,
                children: (0, l.jsx)("div", {
                    className: D.overflowRolesPopoutArrow
                })
            }), (0, l.jsxs)(x.default, {
                className: D.overflowRolesPopoutHeader,
                align: x.default.Align.CENTER,
                children: [(0, l.jsx)(R.default, {
                    color: m.default.unsafe_rawColors.PRIMARY_400.css,
                    className: D.overflowRolesPopoutHeaderIcon
                }), (0, l.jsx)("div", {
                    className: D.overflowRolesPopoutHeaderText,
                    id: a,
                    children: U.default.Messages.ROLES_LIST.format({
                        numRoles: t.length
                    })
                })]
            }), (0, l.jsx)(H, {
                ...i,
                wrap: !0,
                userRoles: t
            })]
        })
    }
    let F = i.forwardRef(function(e, t) {
        var a, r, o;
        let u;
        let {
            canRemove: E,
            className: g,
            role: S,
            onRemove: I,
            guildId: _,
            disableBorderColor: N,
            onMouseDown: A
        } = e, {
            tabIndex: x,
            ...y
        } = (0, d.useListItem)(S.id), R = (0, v.useRoleIcon)({
            roleId: S.id,
            size: 16,
            guildId: _
        }), M = (0, f.useStateFromStores)([C.default], () => C.default.roleStyle), P = (null === (a = S.tags) || void 0 === a ? void 0 : a.guild_connections) === null, b = i.useCallback(e => {
            (0, h.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("443070").then(n.bind(n, "443070"));
                return t => (0, l.jsx)(e, {
                    ...t,
                    id: S.id,
                    label: U.default.Messages.COPY_ID_ROLE
                })
            })
        }, [S.id]), j = (0, p.useToken)(m.default.unsafe_rawColors.PRIMARY_300).hsl(), k = null !== (r = S.colorString) && void 0 !== r ? r : j, w = null !== (o = (0, c.hex2rgb)(k, .6)) && void 0 !== o ? o : void 0, F = m.default.unsafe_rawColors.WHITE_500.css, G = (0, c.hex2int)(k);
        null != G && .3 > (0, c.getDarkness)(G) && (F = m.default.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, l.jsx)(T.default, {
            className: D.roleFlowerStar,
            iconClassName: E ? D.roleVerifiedIcon : void 0,
            color: k,
            size: 14
        }) : "dot" === M ? (0, l.jsx)(p.RoleDot, {
            className: D.roleDot,
            color: k,
            background: !1,
            tooltip: !1
        }) : (0, l.jsx)(p.RoleCircle, {
            color: k
        });
        let B = i.useMemo(() => {
            var t;
            return {
                borderColor: N ? void 0 : w,
                ...null !== (t = e.style) && void 0 !== t ? t : {}
            }
        }, [w, N, e.style]);
        return (0, l.jsx)(p.FocusRing, {
            children: (0, l.jsxs)("div", {
                ref: t,
                className: s(D.role, g),
                style: B,
                onContextMenu: b,
                onMouseDown: A,
                "aria-label": S.name,
                tabIndex: x,
                ...y,
                children: [(0, l.jsxs)(p.Clickable, {
                    className: D.roleRemoveButton,
                    onClick: E ? I : void 0,
                    tabIndex: E ? x : -1,
                    focusProps: {
                        focusClassName: D.roleRemoveIconFocused
                    },
                    "aria-hidden": !E,
                    "aria-label": U.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                        roleName: S.name
                    }),
                    children: [u, E ? (0, l.jsx)(O.default, {
                        color: F,
                        className: D.roleRemoveIcon,
                        "aria-hidden": !0
                    }) : null]
                }), null != R ? (0, l.jsx)(L.default, {
                    className: D.roleIcon,
                    ...R,
                    enableTooltip: !1
                }) : null, (0, l.jsx)("div", {
                    "aria-hidden": !0,
                    className: D.roleName,
                    children: (0, l.jsx)(p.Text, {
                        variant: "text-xs/medium",
                        className: D.roleNameOverflow,
                        children: S.name
                    })
                })]
            })
        })
    });

    function G(e) {
        let {
            user: t,
            numRolesHidden: n,
            roleClassName: i
        } = e, a = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
        return (0, l.jsx)(p.Popout, {
            renderPopout: t => {
                let {
                    position: n
                } = t;
                return (0, l.jsx)(w, {
                    ...e,
                    position: null != n ? n : "top"
                })
            },
            position: "top",
            align: "center",
            children: e => (0, l.jsx)(p.FocusRing, {
                children: (0, l.jsx)("button", {
                    ...e,
                    className: s(D.overflowButton, i),
                    ...a,
                    children: "+".concat(n)
                })
            })
        })
    }

    function B(e) {
        let {
            guild: t,
            user: n,
            handleAddRole: i,
            roleClassName: a
        } = e, r = (0, d.useListItem)("overflow-add-roles-".concat(n.id)), o = (0, f.useStateFromStores)([C.default], () => C.default.roleStyle), u = N.default.getHighestRole(t), c = _.default.getMember(t.id, n.id), m = e => (0, S.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && N.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
        return (0, l.jsx)(p.Popout, {
            renderPopout: e => {
                let {
                    closePopout: n
                } = e;
                return (0, l.jsx)(b.default, {
                    guild: t,
                    roleStyle: o,
                    roleFilter: m,
                    onSelect: i,
                    onClose: n
                })
            },
            position: "bottom",
            align: "center",
            children: e => (0, l.jsx)(p.FocusRing, {
                children: (0, l.jsx)("button", {
                    ...e,
                    className: s(D.addButton, a),
                    "aria-label": U.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                    type: "button",
                    ...r,
                    children: (0, l.jsx)(M.default, {
                        className: D.addButtonIcon,
                        "aria-hidden": !0
                    })
                })
            })
        })
    }

    function H(e) {
        let t;
        let {
            user: n,
            guild: a,
            userRoles: r,
            wrap: c = !0,
            width: f,
            className: m,
            readOnly: p,
            roleClassName: h,
            disableBorderColor: g
        } = e, C = i.useRef({}), S = i.useCallback(e => {
            var t;
            let l = r.filter(t => t !== e.id);
            (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? E.default.unassignGuildRoleConnection(a.id, e.id) : I.default.updateMemberRoles(a.id, n.id, l, [], [e.id])
        }, [r, a.id, n.id]), T = i.useCallback(e => {
            let t = r; - 1 === t.indexOf(e) && (t = t.concat([e])), I.default.updateMemberRoles(a.id, n.id, t, [e], [])
        }, [r, a.id, n.id]), [v, _] = i.useState(null), x = i.useMemo(() => {
            let e = Object.values(a.roles).filter(e => r.includes(e.id)).sort((e, t) => {
                var n, l;
                let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    a = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
                return i && !a ? 1 : !i && a ? -1 : 0
            });
            return null != v ? e.slice(0, v) : e
        }, [a.roles, v, r]), y = r.length - x.length;
        i.useLayoutEffect(() => {
            if (c) return;
            if ("number" != typeof f) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = f - 30 - 4;
            for (let l = 0; l < x.length; l++) {
                let i = x[l],
                    a = C.current[i.id];
                if (null == a) continue;
                let s = a.offsetWidth;
                if ((t += s + 4) > n) break;
                e++
            }
            _(t => e < x.length ? e : t)
        }, [c, f, x]);
        let O = A.default.getCurrentUser();
        o(null != O, "MemberRolesList: currentUser cannot be undefined");
        let R = !p && N.default.can(j.Permissions.MANAGE_ROLES, a),
            M = P.default.getHighestRole(a, O.id),
            L = i.useMemo(() => "roles-".concat((0, u.v4)()), []),
            b = (0, d.default)({
                id: L,
                isEnabled: !0,
                scrollToStart: k,
                scrollToEnd: k,
                wrap: !0
            }),
            w = x.map(e => {
                var t;
                return (0, l.jsx)(F, {
                    className: h,
                    role: e,
                    canRemove: R && P.default.isRoleHigher(a, O.id, M, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === O.id,
                    onRemove: () => S(e),
                    ref: t => {
                        var n, l;
                        return n = e.id, void(null != (l = t) ? C.current[n] = l : delete C.current[n])
                    },
                    guildId: a.id,
                    disableBorderColor: g
                }, e.id)
            });
        return null != v && 0 !== y ? t = (0, l.jsx)(G, {
            ...e,
            numRolesHidden: y
        }) : R && (t = (0, l.jsx)(B, {
            ...e,
            handleAddRole: T
        })), (0, l.jsx)(d.ListNavigatorProvider, {
            navigator: b,
            children: (0, l.jsx)(d.ListNavigatorContainer, {
                children: e => {
                    let {
                        ref: n,
                        ...i
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: s(D.root, m),
                        "aria-label": U.default.Messages.ROLES_LIST.format({
                            numRoles: r.length
                        }),
                        ref: n,
                        ...i,
                        children: [w, t]
                    })
                }
            })
        })
    }
    let V = (0, g.default)(H);

    function K(e) {
        return (0, f.useStateFromStores)([N.default], () => {
            var t;
            return N.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
        }), !1 === e.wrap ? (0, l.jsx)(V, {
            ...e
        }) : (0, l.jsx)(H, {
            ...e
        })
    }
}