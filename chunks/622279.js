function(t, r, n) {
    "use strict";
    var e = n("868822"),
        i = n("418855"),
        u = n("125359"),
        o = n("745795"),
        c = n("274198"),
        a = TypeError;
    t.exports = function(t, r) {
        var n = t.exec;
        if (u(n)) {
            var s = e(n, t, r);
            return null !== s && i(s), s
        }
        if ("RegExp" === o(t)) return e(c, t, r);
        throw a("RegExp#exec called on incompatible receiver")
    }
}