function(t, e, s) {
    "use strict";
    var r = s("911718")("%TypeError%"),
        i = s("228140"),
        n = s("970788"),
        c = s("583608");
    t.exports = function(t, e, s) {
        if ("Object" !== c(t)) throw new r("Assertion failed: Type(O) is not Object");
        if (!i(e)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
        return n(t, e, {
            "[[Configurable]]": !0,
            "[[Enumerable]]": !0,
            "[[Value]]": s,
            "[[Writable]]": !0
        })
    }
}