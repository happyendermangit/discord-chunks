function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AVATAR_DECORATION_PADDING: function() {
            return N
        },
        default: function() {
            return A
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("769846"),
        o = n("77078"),
        u = n("502651"),
        d = n("390886"),
        c = n("357021"),
        f = n("106435"),
        p = n("79798"),
        m = n("982475"),
        h = n("928201"),
        x = n("118503"),
        E = n("11056"),
        y = n("159885"),
        g = n("158998"),
        S = n("943722"),
        C = n("49111"),
        _ = n("988268"),
        T = n("39141"),
        I = n("782340"),
        v = n("591665");
    let N = (0, y.cssValueToNumber)(r.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
    var A = function(e) {
        let {
            selected: t = !1,
            colorString: n,
            colorRoleName: a,
            isOwner: r,
            ownerTooltipText: y,
            lostPermissionTooltipText: N,
            isTyping: A = !1,
            nick: O,
            user: R,
            currentUser: M,
            activities: k,
            applicationStream: L,
            status: P,
            shouldAnimateStatus: b = !1,
            isMobile: j,
            premiumSince: U,
            channel: D,
            guildId: w,
            className: F,
            onMouseDown: G,
            onKeyDown: H,
            onClick: B,
            onContextMenu: V,
            onClickPremiumGuildIcon: K,
            onFocus: W,
            "aria-controls": Y,
            "aria-expanded": z,
            "aria-posinset": Z,
            "aria-setsize": J,
            id: q,
            tabIndex: X,
            itemProps: Q
        } = e, $ = g.default.useName(R), [ee, et] = l.useState(!1), [en, ei] = l.useState(null), {
            avatarDecorationSrc: el,
            avatarSrc: ea,
            eventHandlers: es
        } = (0, f.default)({
            user: R,
            size: o.AvatarSizes.SIZE_32,
            animateOnHover: !(t || ee),
            guildId: w
        }), er = e => {
            ei(e)
        }, eo = () => null != r && r && null == N ? (0, i.jsx)(o.Tooltip, {
            text: null != y ? y : I.default.Messages.GUILD_OWNER,
            children: e => (0, i.jsx)(h.default, {
                ...e,
                className: v.ownerIcon
            })
        }) : null, eu = () => null == U ? null : (0, i.jsx)(o.Tooltip, {
            text: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                date: U
            }),
            children: e => (0, i.jsx)(o.Clickable, {
                onClick: K,
                tabIndex: -1,
                children: (0, i.jsx)(x.default, {
                    ...e,
                    className: v.premiumIcon
                })
            })
        }), ed = () => {
            let e = (null == R ? void 0 : R.isClyde()) ? _.BotTagTypes.AI : _.BotTagTypes.BOT;
            return null != R && R.bot ? (0, i.jsx)(p.default, {
                className: v.botTag,
                type: e,
                verified: R.isVerifiedBot()
            }) : null
        }, ec = () => (0, i.jsx)(o.NameWithRole, {
            roleName: a,
            color: null != n ? n : void 0,
            name: null != O ? O : $
        }), ef = P === C.StatusTypes.OFFLINE;
        return null == R ? (0, i.jsx)(m.default, {
            avatarSize: o.AvatarSizes.SIZE_32,
            className: v.placeholder
        }) : (0, i.jsx)(E.default, {
            selected: t,
            className: s(v.member, F, {
                [v.offline]: ef && !t
            }),
            innerClassName: v.memberInner,
            onClick: B,
            onKeyDown: H,
            onMouseDown: G,
            onContextMenu: V,
            onMouseEnter: () => {
                et(!0)
            },
            onMouseLeave: () => {
                et(!1)
            },
            name: null == N ? (0, i.jsx)("span", {
                className: v.username,
                children: ec()
            }) : (0, i.jsx)(o.Tooltip, {
                text: N,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: s(v.username, v.lostPermission),
                    children: ec()
                })
            }),
            avatar: ((e, t) => {
                let n = b ? o.AnimatedAvatar : o.Avatar,
                    l = (0, u.default)(k) ? C.StatusTypes.STREAMING : P;
                return l = t ? void 0 : l, (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(n, {
                        ...es,
                        size: o.AvatarSizes.SIZE_32,
                        src: ea,
                        isMobile: j,
                        isTyping: A,
                        status: l,
                        "aria-label": e.username,
                        statusTooltip: !0,
                        avatarDecoration: el,
                        typingIndicatorRef: er
                    }), (0, i.jsx)(c.default, {
                        confettiSpawnRef: en,
                        shouldFire: A && null != M && e.id !== M.id,
                        confettiLocation: T.ConfettiLocation.MEMBER_USER
                    })]
                })
            })(R, ef),
            subText: (() => {
                let e = null != k ? k.find(e => e.type === C.ActivityTypes.CUSTOM_STATUS) : null,
                    t = null != e && null != R && (0, d.default)(e, R, D);
                return (0, i.jsx)(S.default, {
                    className: v.activity,
                    textClassName: v.activityText,
                    emojiClassName: v.activityEmoji,
                    activities: k,
                    applicationStream: L,
                    animate: ee,
                    hideEmoji: !t,
                    hideTooltip: !0,
                    user: R
                })
            })(),
            decorators: (0, i.jsxs)(i.Fragment, {
                children: [ed(), eo(), eu()]
            }),
            "aria-controls": Y,
            "aria-expanded": z,
            "aria-setsize": J,
            "aria-posinset": Z,
            id: q,
            tabIndex: X,
            onFocus: W,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                }
            },
            ...Q
        })
    }
}