function(t, r, n) {
    "use strict";
    var e = n("49693"),
        o = n("959318"),
        i = RangeError;
    t.exports = function(t, r, n, u) {
        var f = e(t),
            c = o(n),
            a = c < 0 ? f + c : c;
        if (a >= f || a < 0) throw i("Incorrect index");
        for (var s = new r(f), y = 0; y < f; y++) s[y] = y === a ? u : t[y];
        return s
    }
}