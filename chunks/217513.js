function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return s
        },
        getDisplayProfile: function() {
            return d
        }
    }), i("222007");
    var n = i("446674"),
        r = i("697218"),
        l = i("117362"),
        u = i("811907"),
        o = i("713135");

    function s(e, t) {
        return (0, n.useStateFromStores)([r.default, o.default], () => d(e, t, [r.default, o.default]))
    }
    let a = (0, l.cachedFunction)((e, t) => new u.default(e, t));

    function d(e, t) {
        let [i, n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, o.default], l = i.getUser(e), u = n.getUserProfile(e), s = n.getGuildMemberProfile(e, t);
        return null == l || null == u ? null : a(u, s)
    }
}