function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStreamerActivity: function() {
            return d
        },
        getStreamerApplication: function() {
            return u
        },
        useGetStreamApplication: function() {
            return f
        }
    });
    var s = n("446674"),
        i = n("233736"),
        r = n("824563"),
        a = n("49111");

    function o(e) {
        return e.type === a.ActivityTypes.PLAYING
    }

    function d(e, t) {
        var n;
        return null != e ? (n = e.ownerId, t.findActivity(n, o)) : null
    }

    function u(e, t) {
        if (null == e) return null;
        let n = d(e, t);
        return null == n ? null : {
            id: n.application_id,
            name: n.name
        }
    }

    function l(e, t) {
        return e === t || null != e && null != t && (0, i.default)(e, t)
    }

    function f(e) {
        return (0, s.useStateFromStores)([r.default], () => u(e, r.default), [e], l)
    }
}