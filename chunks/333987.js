function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("884691");

    function l(e) {
        let t = i.useRef(null),
            n = i.useCallback(n => {
                null != e && ("function" == typeof e ? e(n) : e.current = n, t.current = n)
            }, [e]);
        return [t, n]
    }
}