function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragSource: function() {
            return i
        }
    });
    var r = n("884691"),
        a = n("184087");

    function i(e, t, n) {
        var i = (0, r.useMemo)(function() {
            return new a.DragSourceImpl(e, t, n)
        }, [t, n]);
        return (0, r.useEffect)(function() {
            i.spec = e
        }, [e]), i
    }
}