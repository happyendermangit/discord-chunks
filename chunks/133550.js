function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragSourceMonitor: function() {
            return o
        }
    });
    var r = n("884691"),
        a = n("29150"),
        i = n("119076");

    function o() {
        var e = (0, i.useDragDropManager)();
        return (0, r.useMemo)(function() {
            return new a.DragSourceMonitorImpl(e)
        }, [e])
    }
}