function(t, r, n) {
    n("424973");
    var e = n("488063"),
        o = n("862167"),
        i = n("430272");
    t.exports = function(t, r, n, u, c, a) {
        var f = 1 & n,
            s = t.length,
            p = r.length;
        if (s != p && !(f && p > s)) return !1;
        var v = a.get(t);
        if (v && a.get(r)) return v == r;
        var l = -1,
            h = !0,
            _ = 2 & n ? new e : void 0;
        for (a.set(t, r), a.set(r, t); ++l < s;) {
            var y = t[l],
                b = r[l];
            if (u) var x = f ? u(b, y, l, r, t, a) : u(y, b, l, t, r, a);
            if (void 0 !== x) {
                if (x) continue;
                h = !1;
                break
            }
            if (_) {
                if (!o(r, function(t, r) {
                        if (!i(_, r) && (y === t || c(y, t, n, u, a))) return _.push(r)
                    })) {
                    h = !1;
                    break
                }
            } else if (!(y === b || c(y, b, n, u, a))) {
                h = !1;
                break
            }
        }
        return a.delete(t), a.delete(r), h
    }
}