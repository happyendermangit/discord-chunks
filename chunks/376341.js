function(e, t, r) {
    var n = r("626785"),
        i = r("809408"),
        o = r("168850"),
        a = r("446288"),
        u = r("330124"),
        s = r("701389"),
        l = r("702820"),
        c = r("552647"),
        d = l(function(e, t) {
            var r = {};
            if (null == e) return r;
            var l = !1;
            t = n(t, function(t) {
                return t = a(t, e), l || (l = t.length > 1), t
            }), u(e, c(e), r), l && (r = i(r, 7, s));
            for (var d = t.length; d--;) o(r, t[d]);
            return r
        });
    e.exports = d
}