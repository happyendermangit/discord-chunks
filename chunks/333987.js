function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var l = n("884691");

    function i(e) {
        let t = l.useRef(null),
            n = l.useCallback(n => {
                null != e && ("function" == typeof e ? e(n) : e.current = n, t.current = n)
            }, [e]);
        return [t, n]
    }
}