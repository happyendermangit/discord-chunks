function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMergedExperimentConfigs: function() {
            return r
        }
    }), n("884691");
    var i = n("917351");

    function r(e, t, n, r) {
        var s, a;
        let o = e.getCurrentConfig(n, r),
            l = t.getCurrentConfig(n, r);
        return s = o, a = l, (0, i.mergeWith)({}, s, a, (e, t) => e || t)
    }
}