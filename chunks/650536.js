function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        gatherActiveObservationsAtDepth: function() {
            return o
        }
    }), r("424973");
    var n = r("243546"),
        i = r("909639"),
        o = function(e) {
            n.resizeObservers.forEach(function(t) {
                t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(r) {
                    r.isActive() && ((0, i.calculateDepthForNode)(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r))
                })
            })
        }
}