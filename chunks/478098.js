function(e, t, r) {
    r("70102");
    var n = r("952133"),
        i = r("645942"),
        o = r("261497"),
        a = Math.max,
        u = Math.min;
    e.exports = function(e, t, r) {
        var s, l, c, d, f, h, p = 0,
            v = !1,
            D = !1,
            g = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");

        function C(t) {
            var r = s,
                n = l;
            return s = l = void 0, p = t, d = e.apply(n, r)
        }
        t = o(t) || 0, n(r) && (v = !!r.leading, c = (D = "maxWait" in r) ? a(o(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g);

        function m(e) {
            var r = e - h,
                n = e - p;
            return void 0 === h || r >= t || r < 0 || D && n >= c
        }

        function y() {
            var e, r, n, o, a = i();
            if (m(a)) return E(a);
            f = setTimeout(y, (r = (e = a) - h, n = e - p, o = t - r, D ? u(o, c - n) : o))
        }

        function E(e) {
            return (f = void 0, g && s) ? C(e) : (s = l = void 0, d)
        }

        function B() {
            var e, r = i(),
                n = m(r);
            if (s = arguments, l = this, h = r, n) {
                if (void 0 === f) {
                    ;
                    return p = e = h, f = setTimeout(y, t), v ? C(e) : d
                }
                if (D) return clearTimeout(f), f = setTimeout(y, t), C(h)
            }
            return void 0 === f && (f = setTimeout(y, t)), d
        }
        return B.cancel = function() {
            void 0 !== f && clearTimeout(f), p = 0, s = h = l = f = void 0
        }, B.flush = function() {
            return void 0 === f ? d : E(i())
        }, B
    }
}