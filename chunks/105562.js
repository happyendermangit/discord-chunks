function(t, e, s) {
    "use strict";
    s("70102");
    var r = s("911718"),
        i = s("214401"),
        n = r("%Promise.resolve%", !0),
        c = n && i(n);
    t.exports = function(t, e) {
        if (!c) throw SyntaxError("This environment does not support Promises.");
        return c(t, e)
    }
}