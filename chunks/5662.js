function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDropTarget: function() {
            return i
        }
    });
    var r = n("884691"),
        a = n("598085");

    function i(e, t) {
        var n = (0, r.useMemo)(function() {
            return new a.DropTargetImpl(e, t)
        }, [t]);
        return (0, r.useEffect)(function() {
            n.spec = e
        }, [e]), n
    }
}