function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        getClass: function() {
            return r
        }
    }), l("808653");
    var n = l("159885");

    function r(e, t) {
        for (var l = arguments.length, r = Array(l > 2 ? l - 2 : 0), s = 2; s < l; s++) r[s - 2] = arguments[s];
        let i = r.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
            a = "".concat(t).concat(i),
            o = e[a];
        if (null != o) return o
    }
}