function(t, r, n) {
    "use strict";
    var e = n("622281"),
        o = String,
        i = TypeError;
    t.exports = function(t) {
        if (e(t)) return t;
        throw i(o(t) + " is not an object")
    }
}