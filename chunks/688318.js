function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return f
        }
    }), r("222007");
    var a = r("884691"),
        l = r("446674"),
        n = r("206230"),
        i = r("91653"),
        u = r("26989"),
        o = r("697218"),
        s = r("471671"),
        c = r("315102"),
        d = r("53708"),
        f = e => {
            var t;
            let {
                user: r,
                guildId: f,
                size: v,
                animateOnHover: C = !1,
                showPending: E = !1,
                showTryItOut: A = !1,
                avatarDecorationOverride: T
            } = e, [g, m] = a.useState(!1), I = (0, l.useStateFromStores)([n.default], () => n.default.useReducedMotion), P = (0, l.useStateFromStores)([s.default], () => s.default.isFocused()), p = (0, l.useStateFromStores)([u.default], () => null != f && null != r ? u.default.getMember(f, r.id) : null), [F, _] = (0, l.useStateFromStoresArray)([o.default], () => {
                var e;
                return [null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, o.default.getUser(null == r ? void 0 : r.id)]
            }), O = null == p ? null == _ ? void 0 : _.avatarDecoration : null === p.avatarDecoration ? null : null !== (t = p.avatarDecoration) && void 0 !== t ? t : null == _ ? void 0 : _.avatarDecoration, {
                pendingAvatarDecoration: y
            } = (0, i.default)({
                isTryItOut: A,
                guildId: f
            }), L = P && (g || !I && !C), R = E && void 0 !== y && void 0 !== F && F === (null == r ? void 0 : r.id), S = null != f && null === y, D = R ? S ? null == r ? void 0 : r.avatarDecoration : null != y ? y : O : null != O ? O : null == r ? void 0 : r.avatarDecoration, b = a.useMemo(() => (0, c.getAvatarDecorationURL)({
                avatarDecoration: void 0 !== T ? T : D,
                canAnimate: L,
                size: v
            }), [D, L, v, T]), h = a.useCallback(() => m(!0), []), M = a.useCallback(() => m(!1), []);
            return {
                avatarPlaceholderSrc: d,
                avatarDecorationSrc: b,
                isAvatarDecorationAnimating: L,
                eventHandlers: {
                    onMouseEnter: h,
                    onMouseLeave: M
                }
            }
        }
}