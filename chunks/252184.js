function(t, r, n) {
    var e = n("603108");
    t.exports = function(t, r) {
        return function(n, o) {
            if (null == n) return n;
            if (!e(n)) return t(n, o);
            for (var i = n.length, u = r ? i : -1, c = Object(n);
                (r ? u-- : ++u < i) && !1 !== o(c[u], u, c););
            return n
        }
    }
}