function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        hasSkippedObservations: function() {
            return i
        }
    });
    var n = r("243546"),
        i = function() {
            return n.resizeObservers.some(function(e) {
                return e.skippedTargets.length > 0
            })
        }
}