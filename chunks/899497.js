function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResizeObserverEntry: function() {
            return i
        }
    });
    var r = n("229579"),
        i = function(e) {
            var t = (0, r.calculateBoxSizes)(e);
            this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = [t.borderBoxSize], this.contentBoxSize = [t.contentBoxSize], this.devicePixelContentBoxSize = [t.devicePixelContentBoxSize]
        }
}