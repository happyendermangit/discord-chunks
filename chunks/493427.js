function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = function() {
        for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (t = function e(t) {
            var n, r, a = "";
            if ("string" == typeof t || "number" == typeof t) a += t;
            else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                    var i = t.length;
                    for (n = 0; n < i; n++) t[n] && (r = e(t[n])) && (a && (a += " "), a += r)
                } else
                    for (r in t) t[r] && (a && (a += " "), a += r)
            }
            return a
        }(e)) && (r && (r += " "), r += t);
        return r
    }
}