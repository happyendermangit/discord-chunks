function(t, e, s) {
    "use strict";
    var r = s("911718"),
        i = s("786413"),
        n = r("%TypeError%");
    t.exports = function(t) {
        if ("number" != typeof t && "bigint" != typeof t) throw new n("argument must be a Number or a BigInt");
        var e = t < 0 ? -i(-t) : i(t);
        return 0 === e ? 0 : e
    }
}