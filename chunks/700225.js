function(e, t, n) {
    "use strict";
    var r = n("859514"),
        a = n("427191").findLast,
        o = n("505713");
    r({
        target: "Array",
        proto: !0
    }, {
        findLast: function(e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("findLast")
}