function(t, r, n) {
    "use strict";
    var e = n("959318"),
        o = n("552028"),
        i = RangeError;
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var r = e(t),
            n = o(r);
        if (r !== n) throw i("Wrong length or index");
        return n
    }
}