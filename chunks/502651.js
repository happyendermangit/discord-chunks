function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var l = n("954016"),
        i = n("49111");

    function a(e) {
        return e.type === i.ActivityTypes.STREAMING && null != e.url && l.validStreamURL.test(e.url)
    }

    function s(e) {
        return null != e && (Array.isArray(e) ? e.some(a) : a(e))
    }
}