function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragType: function() {
            return i
        }
    });
    var r = n("900255"),
        a = n("884691");

    function i(e) {
        return (0, a.useMemo)(function() {
            var t = e.type;
            return (0, r.invariant)(null != t, "spec.type must be defined"), t
        }, [e])
    }
}