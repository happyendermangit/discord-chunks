function(t, r, n) {
    var e = n("146007"),
        o = n("354069");
    t.exports = function(t, r, n, i) {
        var u = n.length,
            c = u,
            a = !i;
        if (null == t) return !c;
        for (t = Object(t); u--;) {
            var f = n[u];
            if (a && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1
        }
        for (; ++u < c;) {
            var s = (f = n[u])[0],
                p = t[s],
                v = f[1];
            if (a && f[2]) {
                if (void 0 === p && !(s in t)) return !1
            } else {
                var l = new e;
                if (i) var h = i(p, v, s, t, r, l);
                if (!(void 0 === h ? o(v, p, 3, i, l) : h)) return !1
            }
        }
        return !0
    }
}