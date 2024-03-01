function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRoleIconProps: function() {
            return r
        },
        useRoleIcon: function() {
            return o
        },
        useRoleIconForPreview: function() {
            return u
        }
    });
    var l = n("884691"),
        i = n("446674"),
        a = n("305961"),
        s = n("689226");

    function r(e, t) {
        var n;
        let {
            customIconSrc: l,
            unicodeEmoji: i
        } = null !== (n = (0, s.getRoleIconData)(e, t)) && void 0 !== n ? n : {};
        if (null != l || null != i) return {
            src: l,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: i
        }
    }
    let o = e => {
            let {
                guildId: t,
                roleId: n,
                size: o = 20
            } = e, u = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(t));
            return l.useMemo(() => {
                if (null == u || null == n) return;
                let e = u.roles[n];
                if ((0, s.canGuildUseRoleIcons)(u, e)) return r(e, o)
            }, [u, n, o])
        },
        u = (e, t) => {
            let n = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(e));
            if (null != n && (0, s.canGuildUseRoleIcons)(n, t)) return r(t)
        }
}