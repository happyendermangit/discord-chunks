function(t, e, s) {
    s("70102");
    var r = s("285162"),
        i = s("271388"),
        n = s("16282"),
        c = Math.max,
        o = Math.min;
    t.exports = function(t, e, s) {
        var f, u, a, d, p, b, h = 0,
            l = !1,
            g = !1,
            v = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");

        function x(e) {
            var s = f,
                r = u;
            return f = u = void 0, h = e, d = t.apply(r, s)
        }
        e = n(e) || 0, r(s) && (l = !!s.leading, a = (g = "maxWait" in s) ? c(n(s.maxWait) || 0, e) : a, v = "trailing" in s ? !!s.trailing : v);

        function m(t) {
            var s = t - b,
                r = t - h;
            return void 0 === b || s >= e || s < 0 || g && r >= a
        }

        function y() {
            var t, s, r, n, c = i();
            if (m(c)) return _(c);
            p = setTimeout(y, (s = (t = c) - b, r = t - h, n = e - s, g ? o(n, a - r) : n))
        }

        function _(t) {
            return (p = void 0, v && f) ? x(t) : (f = u = void 0, d)
        }

        function w() {
            var t, s = i(),
                r = m(s);
            if (f = arguments, u = this, b = s, r) {
                if (void 0 === p) {
                    ;
                    return h = t = b, p = setTimeout(y, e), l ? x(t) : d
                }
                if (g) return clearTimeout(p), p = setTimeout(y, e), x(b)
            }
            return void 0 === p && (p = setTimeout(y, e)), d
        }
        return w.cancel = function() {
            void 0 !== p && clearTimeout(p), h = 0, f = b = u = p = void 0
        }, w.flush = function() {
            return void 0 === p ? d : _(i())
        }, w
    }
}