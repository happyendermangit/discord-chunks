function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MonotonicInterpolant: function() {
            return i
        }
    }), n("70102"), n("424973");

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = function() {
        var e, t, n;

        function i(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), a(this, "xs", void 0), a(this, "ys", void 0), a(this, "c1s", void 0), a(this, "c2s", void 0), a(this, "c3s", void 0);
            for (var n, r, o, s = e.length, c = [], l = 0; l < s; l++) c.push(l);
            c.sort(function(t, n) {
                return e[t] < e[n] ? -1 : 1
            });
            for (var u = [], d = [], p = [], f = 0; f < s - 1; f++) n = e[f + 1] - e[f], r = t[f + 1] - t[f], d.push(n), u.push(r), p.push(r / n);
            for (var m = [p[0]], h = 0; h < d.length - 1; h++) {
                var v = p[h],
                    g = p[h + 1];
                if (v * g <= 0) m.push(0);
                else {
                    n = d[h];
                    var y = d[h + 1],
                        b = n + y;
                    m.push(3 * b / ((b + y) / v + (b + n) / g))
                }
            }
            m.push(p[p.length - 1]);
            for (var x = [], S = [], w = 0; w < m.length - 1; w++) {
                o = p[w];
                var D = m[w],
                    C = 1 / d[w],
                    k = D + m[w + 1] - o - o;
                x.push((o - D - k) * C), S.push(k * C * C)
            }
            this.xs = e, this.ys = t, this.c1s = m, this.c2s = x, this.c3s = S
        }
        return e = i, t = [{
            key: "interpolate",
            value: function(e) {
                var t, n = this.xs,
                    r = this.ys,
                    a = this.c1s,
                    i = this.c2s,
                    o = this.c3s,
                    s = n.length - 1;
                if (e === n[s]) return r[s];
                for (var c = 0, l = o.length - 1; c <= l;) {
                    var u = n[t = Math.floor(.5 * (c + l))];
                    if (u < e) c = t + 1;
                    else {
                        if (!(u > e)) return r[t];
                        l = t - 1
                    }
                }
                var d = e - n[s = Math.max(0, l)],
                    p = d * d;
                return r[s] + a[s] * d + i[s] * p + o[s] * d * p
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}