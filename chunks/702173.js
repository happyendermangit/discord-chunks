function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return a
        },
        isPrivateChannelWithEnabledActivities: function() {
            return u
        }
    });
    var n = i("65597"),
        l = i("42203");

    function a(t) {
        var e;
        let i = (0, n.default)([l.default], () => l.default.getChannel(t)),
            a = null !== (e = null == i ? void 0 : i.isPrivate()) && void 0 !== e && e;
        return a
    }

    function u(t) {
        var e;
        if (null == t) return !1;
        let i = l.default.getChannel(t),
            n = null !== (e = null == i ? void 0 : i.isPrivate()) && void 0 !== e && e;
        return n
    }
}