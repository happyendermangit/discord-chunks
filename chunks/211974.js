function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        broadcastActiveObservations: function() {
            return u
        }
    }), r("424973");
    var n = r("243546"),
        i = r("987291"),
        o = r("909639"),
        a = r("334935"),
        u = function() {
            var e = 1 / 0,
                t = [];
            n.resizeObservers.forEach(function(r) {
                if (0 !== r.activeTargets.length) {
                    var n = [];
                    r.activeTargets.forEach(function(t) {
                        var r = new i.ResizeObserverEntry(t.target),
                            u = (0, o.calculateDepthForNode)(t.target);
                        n.push(r), t.lastReportedSize = (0, a.calculateBoxSize)(t.target, t.observedBox), u < e && (e = u)
                    }), t.push(function() {
                        r.callback.call(r.observer, n, r.observer)
                    }), r.activeTargets.splice(0, r.activeTargets.length)
                }
            });
            for (var r = 0; r < t.length; r++)(0, t[r])();
            return e
        }
}