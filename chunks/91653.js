function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return f
        }
    });
    var a = r("884691"),
        n = r("65597"),
        l = r("170313"),
        i = r("424562"),
        u = r("906932"),
        o = r("26989"),
        s = r("790618"),
        c = r("697218"),
        d = r("783142"),
        f = e => {
            let {
                isTryItOut: t,
                analyticsLocations: r,
                guildId: f
            } = e, v = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), C = (0, n.useStateFromStores)([o.default], () => null != f && null != v ? o.default.getMember(f, v.id) : null), E = null != C ? C.avatarDecoration : null == v ? void 0 : v.avatarDecoration, A = (0, l.default)(r), {
                pendingAvatar: T,
                pendingAvatarDecoration: m,
                pendingErrors: g
            } = (0, n.useStateFromStoresObject)([s.default, i.default], () => ({
                pendingAvatar: t ? s.default.getTryItOutAvatar() : null != f ? i.default.getPendingAvatar() : s.default.getPendingAvatar(),
                pendingAvatarDecoration: t ? s.default.getTryItOutAvatarDecoration() : null != f ? i.default.getPendingAvatarDecoration() : s.default.getPendingAvatarDecoration(),
                pendingErrors: null != f ? i.default.getErrors().avatarDecoration : s.default.getErrors().avatarDecoration
            })), I = (0, a.useCallback)(e => (0, u.setNewPendingAvatar)(e, null == v ? void 0 : v.avatar), [null == v ? void 0 : v.avatar]), P = (0, a.useCallback)(e => {
                (0, u.setNewPendingAvatarDecoration)(f, e), null != e && A(e)
            }, [A, f]);
            return {
                pendingAvatar: T,
                pendingAvatarDecoration: m,
                setPendingAvatar: t ? d.setTryItOutAvatar : I,
                setPendingAvatarDecoration: t ? d.setTryItOutAvatarDecoration : P,
                savedAvatarDecoration: E,
                pendingErrors: g
            }
        }
}