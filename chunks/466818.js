function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canAccessMemberSafetyPage: function() {
            return _
        },
        useCanAccessMemberSafetyPage: function() {
            return g
        },
        useCanAccessBulkBanningFeature: function() {
            return m
        },
        useCanAccessInviteCodeFeature: function() {
            return h
        },
        useCanBulkBanUser: function() {
            return v
        },
        canBulkBanUser: function() {
            return E
        }
    }), n("222007");
    var s = n("316693"),
        i = n("446674"),
        r = n("305961"),
        a = n("957255"),
        o = n("697218"),
        d = n("991170"),
        u = n("562980"),
        l = n("49111");
    let f = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, o.default],
                [n, s] = t,
                i = n.getGuild(e),
                a = s.getCurrentUser();
            return {
                user: a,
                guild: i
            }
        },
        _ = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, o.default],
                n = f(e, t);
            if (null == n) return !1;
            let i = s.default.hasAny(d.default.computePermissions({
                user: n.user,
                context: n.guild,
                checkElevated: !1
            }), u.MemberSafetyPagePermissions);
            return i
        },
        c = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, o.default],
                n = f(e, t);
            return null != n && a.default.can(l.Permissions.MANAGE_GUILD, n.guild) && a.default.can(l.Permissions.BAN_MEMBERS, n.guild)
        };

    function g(e) {
        let t = (0, i.useStateFromStores)([r.default, o.default], () => _(e, [r.default, o.default]), [e]);
        return t
    }

    function m(e) {
        let t = g(e),
            n = (0, i.useStateFromStores)([r.default, o.default], () => c(e, [r.default, o.default]), [e]);
        return t && n
    }

    function h(e) {
        return (0, i.useStateFromStores)([r.default, a.default], () => {
            let t = r.default.getGuild(e);
            return null != t && a.default.can(l.Permissions.MANAGE_GUILD, t)
        }, [e])
    }

    function v(e, t, n) {
        return (0, i.useStateFromStores)([a.default, r.default], () => {
            let s = r.default.getGuild(e);
            return null != s && t && a.default.canManageUser(l.Permissions.BAN_MEMBERS, n, s)
        }, [t, e, n])
    }

    function E(e, t, n) {
        let s = r.default.getGuild(e);
        return null != s && t && a.default.canManageUser(l.Permissions.BAN_MEMBERS, n, s)
    }
}