function(e, t, n) {
    var r, a;
    e = n.nmd(e), n("424973"), n("70102"), n("808653"), n("781738"), n("843762"), r = this, a = function(e) {
        "use strict";

        function t(e) {
            return e >= 48 && e <= 57
        }

        function n(e) {
            this.index = 0, this.path = e, this.max = e.length, this.result = [], this.param = 0, this.err = "", this.segmentStart = 0, this.data = []
        }

        function r(e) {
            for (var t; e.index < e.max && (10 === (t = e.path.charCodeAt(e.index)) || 13 === t || 8232 === t || 8233 === t || 32 === t || 9 === t || 11 === t || 12 === t || 160 === t || t >= 5760 && ei.indexOf(t) >= 0);) e.index++
        }

        function a(e) {
            n = (t = e.path[e.segmentStart]).toLowerCase();
            var t, n, r = e.data;
            if ("m" === n && r.length > 2 && (e.result.push([t, r[0], r[1]]), r = r.slice(2), n = "l", t = "m" === t ? "l" : "L"), "r" === n) e.result.push([t].concat(r));
            else
                for (; r.length >= ea[n] && (e.result.push([t].concat(r.splice(0, ea[n]))), ea[n]););
        }

        function i() {
            if (!(this instanceof i)) return new i;
            this.queue = [], this.cache = null
        }

        function o(e, t, n, r) {
            var a = (e * n + t * r) / (Math.sqrt(e * e + t * t) * Math.sqrt(e * e + t * t));
            return a > 1 && (a = 1), a < -1 && (a = -1), (e * r - t * n < 0 ? -1 : 1) * Math.acos(a)
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t, n);
            this.rx = e, this.ry = t, this.ax = n
        }

        function c(e) {
            if (!(this instanceof c)) return new c(e);
            var t = eo(e);
            this.segments = t.segments, this.err = t.err, this.__stack = []
        }

        function l(e, t, n, r, a, i, o, s) {
            this.a = {
                x: e,
                y: t
            }, this.b = {
                x: n,
                y: r
            }, this.c = {
                x: a,
                y: i
            }, this.d = {
                x: o,
                y: s
            }, null != o && null != s ? (this.getArcLength = g, this.getPoint = m, this.getDerivative = d) : (this.getArcLength = h, this.getPoint = f, this.getDerivative = u), this.init()
        }

        function u(e, t, n) {
            return {
                x: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
                y: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1])
            }
        }

        function d(e, t, n) {
            return f([3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])], [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])], n)
        }

        function p(e, t, n, r, a) {
            for (var i = 1, o = e / t, s = (e - n(r, a, o)) / t; i > .001;) {
                var c = n(r, a, o + s),
                    l = n(r, a, o - s),
                    u = Math.abs(e - c) / t,
                    d = Math.abs(e - l) / t;
                u < i ? (i = u, o += s) : d < i ? (i = d, o -= s) : s /= 2
            }
            return o
        }

        function f(e, t, n) {
            return {
                x: (1 - n) * (1 - n) * e[0] + 2 * (1 - n) * n * e[1] + n * n * e[2],
                y: (1 - n) * (1 - n) * t[0] + 2 * (1 - n) * n * t[1] + n * n * t[2]
            }
        }

        function m(e, t, n) {
            return {
                x: (1 - n) * (1 - n) * (1 - n) * e[0] + 3 * (1 - n) * (1 - n) * n * e[1] + 3 * (1 - n) * n * n * e[2] + n * n * n * e[3],
                y: (1 - n) * (1 - n) * (1 - n) * t[0] + 3 * (1 - n) * (1 - n) * n * t[1] + 3 * (1 - n) * n * n * t[2] + n * n * n * t[3]
            }
        }

        function h(e, t, n) {
            void 0 === n && (n = 1);
            var r = e[0] - 2 * e[1] + e[2],
                a = t[0] - 2 * t[1] + t[2],
                i = 2 * e[1] - 2 * e[0],
                o = 2 * t[1] - 2 * t[0],
                s = 4 * (r * r + a * a);
            if (0 === s) return n * Math.sqrt(Math.pow(e[2] - e[0], 2) + Math.pow(t[2] - t[0], 2));
            var c = 4 * (r * i + a * o) / (2 * s),
                l = n + c,
                u = (i * i + o * o) / s - c * c;
            return Math.sqrt(s) / 2 * (l * Math.sqrt(l * l + u) - c * Math.sqrt(c * c + u) + u * Math.log(Math.abs((l + Math.sqrt(l * l + u)) / (c + Math.sqrt(c * c + u)))))
        }

        function v(e, t, n) {
            var r, a, i, o, s, c = n.length - 1;
            if (0 === c) return 0;
            if (0 === e) {
                for (o = 0, s = 0; s <= c; s++) {
                    ;
                    o += (r = c, a = s, ew[r][a] * Math.pow(1 - t, c - s) * Math.pow(t, s) * n[s])
                }
                return o
            }
            for (i = Array(c), s = 0; s < c; s++) i[s] = c * (n[s + 1] - n[s]);
            return v(e - 1, t, i)
        }

        function g(e, t, n) {
            var r, a, i, o;
            for (void 0 === n && (n = 1), r = n / 2, a = 0, i = 0; i < 20; i++) o = r * ex[20][i] + r, a += eS[20][i] * function(e, t, n) {
                var r = v(1, n, e),
                    a = v(1, n, t);
                return Math.sqrt(r * r + a * a)
            }(e, t, o);
            return r * a
        }

        function y(e, t, n, r) {
            var a = e * n + t * r;
            return a > 1 && (a = 1), a < -1 && (a = -1), (e * r - t * n < 0 ? -1 : 1) * Math.acos(a)
        }

        function b(e, t, n, r, a, i, o, s, c) {
            var l = 0,
                u = [],
                d = [];
            eC(e, t, n, r, a, i, o, s, c).forEach(function(e) {
                var t = new eb(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]),
                    n = t.getTotalLength();
                l += n, u.push(n), d.push(t)
            }), this.length = l, this.partialLengths = u, this.curves = d
        }

        function x(e, t, n, r) {
            this.x0 = e, this.x1 = t, this.y0 = n, this.y1 = r
        }

        function S(e, t) {
            return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
        }

        function w(e, t, n) {
            return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n]
        }

        function D(e, t, n) {
            var r = e.map(function(e, n) {
                return function(e, t) {
                    return function(n) {
                        return e.map(function(e, r) {
                            return e + n * (t[r] - e)
                        })
                    }
                }(e, t[n])
            });
            return function(e) {
                var t = r.map(function(t) {
                    return t(e)
                });
                return n ? T(t) : t
            }
        }

        function C(e) {
            return "number" == typeof e && isFinite(e)
        }

        function k(e) {
            return function(e) {
                for (var t = 0; t < e.length - 2; t++) {
                    var n = e[t],
                        r = e[t + 1],
                        a = e[t + 2];
                    if (n[0] * (r[1] - a[1]) + r[0] * (a[1] - n[1]) + a[0] * (n[1] - r[1])) return !0
                }
                return !1
            }(e) ? en(e) : [(e[0][0] + e[e.length - 1][0]) / 2, (e[0][1] + e[e.length - 1][1]) / 2]
        }

        function P(e) {
            return new em(e).abs()
        }

        function E(e) {
            return e.toString().split("M").map(function(e, t) {
                return e = e.trim(), t && e ? "M" + e : e
            }).filter(function(e) {
                return e
            })
        }

        function T(e) {
            return "M" + e.join("L") + "Z"
        }

        function M(e, t) {
            for (var n = e.length + t, r = er(e) / t, a = 0, i = 0, o = r / 2; e.length < n;) {
                var s = e[a],
                    c = e[(a + 1) % e.length],
                    l = S(s, c);
                o <= i + l ? (e.splice(a + 1, 0, l ? w(s, c, (o - i) / l) : s.slice(0)), o += r) : (i += l, a++)
            }
        }

        function R(e, t) {
            if ("string" == typeof e) {
                var n, r, a, i, o, s, c = (i = e, o = t, function(e) {
                    var t = e.segments || [],
                        n = [];
                    if (!t.length || "M" !== t[0][0]) return !1;
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r],
                            i = a[0],
                            o = a[1],
                            s = a[2];
                        if ("M" === i && r || "Z" === i) break;
                        if ("M" === i || "L" === i) n.push([o, s]);
                        else if ("H" === i) n.push([o, n[n.length - 1][1]]);
                        else {
                            if ("V" !== i) return !1;
                            n.push([n[n.length - 1][0], o])
                        }
                    }
                    return !!n.length && {
                        ring: n
                    }
                }(s = P(i)) || function(e, t) {
                    var n, r, a = E(e)[0],
                        i = [],
                        o = 3;
                    if (!a) throw TypeError(eT);
                    n = (r = function(e) {
                        if ("undefined" != typeof window && window && window.document) try {
                            var t = window.document.createElementNS("http://www.w3.org/2000/svg", "path");
                            return t.setAttributeNS(null, "d", e), t
                        } catch (e) {}
                        return eE(e)
                    }(a)).getTotalLength(), t && C(t) && t > 0 && (o = Math.max(o, Math.ceil(n / t)));
                    for (var s = 0; s < o; s++) {
                        var c = r.getPointAtLength(n * s / o);
                        i.push([c.x, c.y])
                    }
                    return {
                        ring: i,
                        skipBisect: !0
                    }
                }(s, o));
                e = c.ring, a = c.skipBisect
            } else if (!Array.isArray(e)) throw TypeError(eT);
            if (! function(e) {
                    return e.every(function(e) {
                        return Array.isArray(e) && e.length >= 2 && C(e[0]) && C(e[1])
                    })
                }(r = e.slice(0))) throw TypeError(eT);
            return r.length > 1 && (n = r[0], 1e-9 > S(n, r[r.length - 1])) && r.pop(), et(r) > 0 && r.reverse(), !a && t && C(t) && t > 0 && function(e, t) {
                void 0 === t && (t = 1 / 0);
                for (var n = 0; n < e.length; n++)
                    for (var r = e[n], a = n === e.length - 1 ? e[0] : e[n + 1]; S(r, a) > t;) a = w(r, a, .5), e.splice(n + 1, 0, a)
            }(r, t), r
        }

        function I(e, t, n) {
            var r;
            return r = e.length - t.length, M(e, r < 0 ? -1 * r : 0), M(t, r > 0 ? r : 0), eR(e, t), D(e, t, n)
        }

        function O(e, t, n) {
            n = n || 2;
            var r, a, i, o, s, c, l, u = t && t.length,
                d = u ? t[0] * n : e.length,
                p = A(e, 0, d, n, !0),
                f = [];
            if (!p) return f;
            if (u && (p = function(e, t, n, r) {
                    var a, i, o, s, c, l = [];
                    for (a = 0, i = t.length; a < i; a++) o = t[a] * r, s = a < i - 1 ? t[a + 1] * r : e.length, (c = A(e, o, s, r, !1)) === c.next && (c.steiner = !0), l.push(function(e) {
                        var t = e,
                            n = e;
                        do t.x < n.x && (n = t), t = t.next; while (t !== e);
                        return n
                    }(c));
                    for (l.sort(F), a = 0; a < l.length; a++)(function(e, t) {
                        if (t = function(e, t) {
                                var n, r = t,
                                    a = e.x,
                                    i = e.y,
                                    o = -Infinity;
                                do {
                                    if (i <= r.y && i >= r.next.y) {
                                        var s = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                                        if (s <= a && s > o) {
                                            if (o = s, s === a) {
                                                if (i === r.y) return r;
                                                if (i === r.next.y) return r.next
                                            }
                                            n = r.x < r.next.x ? r : r.next
                                        }
                                    }
                                    r = r.next
                                } while (r !== t);
                                if (!n) return null;
                                if (a === o) return n.prev;
                                var c, l = n,
                                    u = n.x,
                                    d = n.y,
                                    p = 1 / 0;
                                for (r = n.next; r !== l;) a >= r.x && r.x >= u && K(i < d ? a : o, i, u, d, i < d ? o : a, i, r.x, r.y) && ((c = Math.abs(i - r.y) / (a - r.x)) < p || c === p && r.x > n.x) && B(r, e) && (n = r, p = c), r = r.next;
                                return n
                            }(e, t)) {
                            var n = U(t, e);
                            L(n, n.next)
                        }
                    })(l[a], n), n = L(n, n.next);
                    return n
                }(e, t, p, n)), e.length > 80 * n) {
                r = i = e[0], a = o = e[1];
                for (var m = n; m < d; m += n) s = e[m], c = e[m + 1], s < r && (r = s), c < a && (a = c), s > i && (i = s), c > o && (o = c);
                l = Math.max(i - r, o - a)
            }
            return N(p, f, n, r, a, l), f
        }

        function A(e, t, n, r, a) {
            var i, o;
            if (a === q(e, t, n, r) > 0)
                for (i = t; i < n; i += r) o = H(i, e[i], e[i + 1], o);
            else
                for (i = n - r; i >= t; i -= r) o = H(i, e[i], e[i + 1], o);
            return o && V(o, o.next) && (G(o), o = o.next), o
        }

        function L(e, t) {
            if (!e) return e;
            t || (t = e);
            var n, r = e;
            do
                if (n = !1, r.steiner || !V(r, r.next) && 0 !== _(r.prev, r, r.next)) r = r.next;
                else {
                    if (G(r), (r = t = r.prev) === r.next) return null;
                    n = !0
                } while (n || r !== t);
            return t
        }

        function N(e, t, n, r, a, i, o) {
            if (e) {
                !o && i && function(e, t, n, r) {
                    var a = e;
                    do null === a.z && (a.z = j(a.x, a.y, t, n, r)), a.prevZ = a.prev, a.nextZ = a.next, a = a.next; while (a !== e);
                    a.prevZ.nextZ = null, a.prevZ = null,
                        function(e) {
                            var t, n, r, a, i, o, s, c, l = 1;
                            do {
                                for (n = e, e = null, i = null, o = 0; n;) {
                                    for (o++, r = n, s = 0, t = 0; t < l && (s++, r = r.nextZ); t++);
                                    for (c = l; s > 0 || c > 0 && r;) 0 === s ? (a = r, r = r.nextZ, c--) : 0 !== c && r ? n.z <= r.z ? (a = n, n = n.nextZ, s--) : (a = r, r = r.nextZ, c--) : (a = n, n = n.nextZ, s--), i ? i.nextZ = a : e = a, a.prevZ = i, i = a;
                                    n = r
                                }
                                i.nextZ = null, l *= 2
                            } while (o > 1);
                        }(a)
                }(e, r, a, i);
                for (var s, c, l = e; e.prev !== e.next;)
                    if (s = e.prev, c = e.next, i ? function(e, t, n, r) {
                            var a = e.prev,
                                i = e.next;
                            if (_(a, e, i) >= 0) return !1;
                            for (var o = a.x < e.x ? a.x < i.x ? a.x : i.x : e.x < i.x ? e.x : i.x, s = a.y < e.y ? a.y < i.y ? a.y : i.y : e.y < i.y ? e.y : i.y, c = a.x > e.x ? a.x > i.x ? a.x : i.x : e.x > i.x ? e.x : i.x, l = a.y > e.y ? a.y > i.y ? a.y : i.y : e.y > i.y ? e.y : i.y, u = j(o, s, t, n, r), d = j(c, l, t, n, r), p = e.nextZ; p && p.z <= d;) {
                                if (p !== e.prev && p !== e.next && K(a.x, a.y, e.x, e.y, i.x, i.y, p.x, p.y) && _(p.prev, p, p.next) >= 0) return !1;
                                p = p.nextZ
                            }
                            for (p = e.prevZ; p && p.z >= u;) {
                                if (p !== e.prev && p !== e.next && K(a.x, a.y, e.x, e.y, i.x, i.y, p.x, p.y) && _(p.prev, p, p.next) >= 0) return !1;
                                p = p.prevZ
                            }
                            return !0
                        }(e, r, a, i) : function(e) {
                            var t = e.prev,
                                n = e.next;
                            if (_(t, e, n) >= 0) return !1;
                            for (var r = e.next.next; r !== e.prev;) {
                                if (K(t.x, t.y, e.x, e.y, n.x, n.y, r.x, r.y) && _(r.prev, r, r.next) >= 0) return !1;
                                r = r.next
                            }
                            return !0
                        }(e)) t.push(s.i / n), t.push(e.i / n), t.push(c.i / n), G(e), e = c.next, l = c.next;
                    else if ((e = c) === l) {
                    o ? 1 === o ? N(e = function(e, t, n) {
                        var r = e;
                        do {
                            var a = r.prev,
                                i = r.next.next;
                            !V(a, i) && z(a, r, r.next, i) && B(a, i) && B(i, a) && (t.push(a.i / n), t.push(r.i / n), t.push(i.i / n), G(r), G(r.next), r = e = i), r = r.next
                        } while (r !== e);
                        return r
                    }(e, t, n), t, n, r, a, i, 2) : 2 === o && function(e, t, n, r, a, i) {
                        var o = e;
                        do {
                            for (var s = o.next.next; s !== o.prev;) {
                                if (o.i !== s.i && function(e, t) {
                                        return e.next.i !== t.i && e.prev.i !== t.i && ! function(e, t) {
                                            var n = e;
                                            do {
                                                if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && z(n, n.next, e, t)) return !0;
                                                n = n.next
                                            } while (n !== e);
                                            return !1
                                        }(e, t) && B(e, t) && B(t, e) && function(e, t) {
                                            var n = e,
                                                r = !1,
                                                a = (e.x + t.x) / 2,
                                                i = (e.y + t.y) / 2;
                                            do n.y > i != n.next.y > i && a < (n.next.x - n.x) * (i - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next; while (n !== e);
                                            return r
                                        }(e, t)
                                    }(o, s)) {
                                    var c = U(o, s);
                                    return o = L(o, o.next), c = L(c, c.next), N(o, t, n, r, a, i), void N(c, t, n, r, a, i)
                                }
                                s = s.next
                            }
                            o = o.next
                        } while (o !== e)
                    }(e, t, n, r, a, i) : N(L(e), t, n, r, a, i, 1);
                    break
                }
            }
        }

        function F(e, t) {
            return e.x - t.x
        }

        function j(e, t, n, r, a) {
            return e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) / a) | e << 8)) | e << 4)) | e << 2)) | e << 1), e | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) / a) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
        }

        function K(e, t, n, r, a, i, o, s) {
            return (a - o) * (t - s) - (e - o) * (i - s) >= 0 && (e - o) * (r - s) - (n - o) * (t - s) >= 0 && (n - o) * (i - s) - (a - o) * (r - s) >= 0
        }

        function _(e, t, n) {
            return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
        }

        function V(e, t) {
            return e.x === t.x && e.y === t.y
        }

        function z(e, t, n, r) {
            return !!(V(e, t) && V(n, r) || V(e, r) && V(n, t)) || _(e, t, n) > 0 != _(e, t, r) > 0 && _(n, r, e) > 0 != _(n, r, t) > 0
        }

        function B(e, t) {
            return 0 > _(e.prev, e, e.next) ? _(e, t, e.next) >= 0 && _(e, e.prev, t) >= 0 : 0 > _(e, t, e.prev) || 0 > _(e, e.next, t)
        }

        function U(e, t) {
            var n = new W(e.i, e.x, e.y),
                r = new W(t.i, t.x, t.y),
                a = e.next,
                i = t.prev;
            return e.next = t, t.prev = e, n.next = a, a.prev = n, r.next = n, n.prev = r, i.next = r, r.prev = i, r
        }

        function H(e, t, n, r) {
            var a = new W(e, t, n);
            return r ? (a.next = r.next, a.prev = r, r.next.prev = a, r.next = a) : (a.prev = a, a.next = a), a
        }

        function G(e) {
            e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
        }

        function W(e, t, n) {
            this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }

        function q(e, t, n, r) {
            for (var a = 0, i = t, o = n - r; i < n; i += r) a += (e[o] - e[i]) * (e[i + 1] + e[o + 1]), o = i;
            return a
        }

        function Z(e, t) {
            var n = t.id,
                r = t.bbox,
                a = null == t.properties ? {} : t.properties,
                i = Y(e, t);
            return null == n && null == r ? {
                type: "Feature",
                properties: a,
                geometry: i
            } : null == r ? {
                type: "Feature",
                id: n,
                properties: a,
                geometry: i
            } : {
                type: "Feature",
                id: n,
                bbox: r,
                properties: a,
                geometry: i
            }
        }

        function Y(e, t) {
            function n(e) {
                return o(e)
            }

            function r(e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) ! function(e, t) {
                    t.length && t.pop();
                    for (var n = s[e < 0 ? ~e : e], r = 0, a = n.length; r < a; ++r) t.push(o(n[r], r));
                    e < 0 && eL(t, a)
                }(e[n], t);
                return t.length < 2 && t.push(t[0]), t
            }

            function a(e) {
                for (var t = r(e); t.length < 4;) t.push(t[0]);
                return t
            }

            function i(e) {
                return e.map(a)
            }
            var o = eA(e.transform),
                s = e.arcs;
            return function e(t) {
                var a, o = t.type;
                switch (o) {
                    case "GeometryCollection":
                        return {
                            type: o, geometries: t.geometries.map(e)
                        };
                    case "Point":
                        a = n(t.coordinates);
                        break;
                    case "MultiPoint":
                        a = t.coordinates.map(n);
                        break;
                    case "LineString":
                        a = r(t.arcs);
                        break;
                    case "MultiLineString":
                        a = t.arcs.map(r);
                        break;
                    case "Polygon":
                        a = i(t.arcs);
                        break;
                    case "MultiPolygon":
                        a = t.arcs.map(i);
                        break;
                    default:
                        return null
                }
                return {
                    type: o,
                    coordinates: a
                }
            }(t)
        }

        function X(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var a = n.string;
            void 0 === a && (a = !0);
            var i = n.single;
            void 0 === i && (i = !1);
            var o = R(e, r);
            o.length < t.length + 2 && M(o, t.length + 2 - o.length);
            var s, c = ez(o, t.length),
                l = t.map(function(e) {
                    return R(e, r)
                }),
                u = "string" == typeof e && e;
            return i && !t.every(function(e) {
                return "string" == typeof e
            }) || (s = t.slice(0)), J(c, l, {
                match: !0,
                string: a,
                single: i,
                t0: u,
                t1: s
            })
        }

        function J(e, t, n) {
            void 0 === n && (n = {});
            var r = n.string,
                a = n.single,
                i = n.t0,
                o = n.t1,
                s = n.match,
                c = s ? eB(e, t) : e.map(function(e, t) {
                    return t
                }),
                l = c.map(function(n, a) {
                    return I(e[n], t[a], r)
                });
            if (s && Array.isArray(i) && (i = c.map(function(e) {
                    return i[e]
                })), a && r && (Array.isArray(i) && (i = i.join(" ")), Array.isArray(o) && (o = o.join(" "))), a) {
                var u = r ? function(e) {
                    return l.map(function(t) {
                        return t(e)
                    }).join(" ")
                } : function(e) {
                    return l.map(function(t) {
                        return t(e)
                    })
                };
                return r && (i || o) ? function(e) {
                    return e < 1e-4 && i || 1 - e < 1e-4 && o || u(e)
                } : u
            }
            return r ? (i = Array.isArray(i) ? i.map(function(e) {
                return "string" == typeof e && e
            }) : [], o = Array.isArray(o) ? o.map(function(e) {
                return "string" == typeof e && e
            }) : [], l.map(function(e, t) {
                return i[t] || o[t] ? function(n) {
                    return n < 1e-4 && i[t] || 1 - n < 1e-4 && o[t] || e(n)
                } : e
            })) : l
        }

        function $(e, t, n, r, a) {
            return ee(function(e, t, n) {
                return function(r) {
                    var a = k(r),
                        i = er(r.concat([r[0]])),
                        o = Math.atan2(r[0][1] - a[1], r[0][0] - a[0]),
                        s = 0;
                    return r.map(function(a, c) {
                        var l;
                        return c && (s += S(a, r[c - 1])), [Math.cos(l = o + 2 * Math.PI * (i ? s / i : c / r.length)) * n + e, Math.sin(l) * n + t]
                    })
                }
            }(e, t, n), r, function(e, t, n) {
                var r = e - n + "," + t,
                    a = "A" + n + "," + n + ",0,1,1,";
                return "M" + r + a + (e + n + ",") + t + a + r + "Z"
            }(e, t, n), 2 * Math.PI * n, a)
        }

        function Q(e, t, n, r, a, i) {
            return ee(function(e, t, n, r) {
                return function(a) {
                    var i = k(a),
                        o = er(a.concat([a[0]])),
                        s = Math.atan2(a[0][1] - i[1], a[0][0] - i[0]),
                        c = 0;
                    s < 0 && (s = 2 * Math.PI + s);
                    var l = s / (2 * Math.PI);
                    return a.map(function(i, s) {
                        s && (c += S(i, a[s - 1]));
                        var u = function(e) {
                            return e <= 1 / 8 ? [1, .5 + 4 * e] : e <= 3 / 8 ? [1.5 - 4 * e, 1] : e <= 5 / 8 ? [0, 2.5 - 4 * e] : e <= 7 / 8 ? [4 * e - 2.5, 0] : [1, 4 * e - 3.5]
                        }((l + (o ? c / o : s / a.length)) % 1);
                        return [e + u[0] * n, t + u[1] * r]
                    })
                }
            }(e, t, n, r), a, function(e, t, n, r) {
                var a = e + n,
                    i = t + r;
                return "M" + e + "," + t + "L" + a + "," + t + "L" + a + "," + i + "L" + e + "," + i + "Z"
            }(e, t, n, r), 2 * n + 2 * r, i)
        }

        function ee(e, t, n, r, a) {
            void 0 === a && (a = {});
            var i = a.maxSegmentLength;
            void 0 === i && (i = 10);
            var o = a.string;
            void 0 === o && (o = !0);
            var s, c = R(t, i);
            return C(r) && c.length < r / i && M(c, Math.ceil(r / i - c.length)), s = D(e(c), c, o), o ? function(e) {
                return e < 1e-4 ? n : s(e)
            } : s
        }
        var et = function(e) {
                for (var t, n = -1, r = e.length, a = e[r - 1], i = 0; ++n < r;) t = a, a = e[n], i += t[1] * a[0] - t[0] * a[1];
                return i / 2
            },
            en = function(e) {
                for (var t, n, r = -1, a = e.length, i = 0, o = 0, s = e[a - 1], c = 0; ++r < a;) t = s, s = e[r], c += n = t[0] * s[1] - s[0] * t[1], i += (t[0] + s[0]) * n, o += (t[1] + s[1]) * n;
                return [i / (c *= 3), o / c]
            },
            er = function(e) {
                for (var t, n, r = -1, a = e.length, i = e[a - 1], o = i[0], s = i[1], c = 0; ++r < a;) t = o, n = s, o = (i = e[r])[0], s = i[1], t -= o, n -= s, c += Math.sqrt(t * t + n * n);
                return c
            },
            ea = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            ei = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
            eo = function(e) {
                var i = new n(e),
                    o = i.max;
                for (r(i); i.index < o && !i.err.length;) ! function(e) {
                    var n, i, o, s, c = e.max;
                    if (e.segmentStart = e.index, ! function(e) {
                            switch (32 | e) {
                                case 109:
                                case 122:
                                case 108:
                                case 104:
                                case 118:
                                case 99:
                                case 115:
                                case 113:
                                case 116:
                                case 97:
                                case 114:
                                    return !0
                            }
                            return !1
                        }(e.path.charCodeAt(e.index))) return void(e.err = "SvgPath: bad command " + e.path[e.index] + " (at pos " + e.index + ")");
                    if (o = ea[e.path[e.index].toLowerCase()], e.index++, r(e), e.data = [], !o) return void a(e);
                    for (i = !1;;) {
                        for (s = o; s > 0; s--) {
                            if (function(e) {
                                    var n, r = e.index,
                                        a = r,
                                        i = e.max,
                                        o = !1,
                                        s = !1,
                                        c = !1,
                                        l = !1;
                                    if (a >= i) return void(e.err = "SvgPath: missed param (at pos " + a + ")");
                                    if (43 !== (n = e.path.charCodeAt(a)) && 45 !== n || (n = ++a < i ? e.path.charCodeAt(a) : 0), !t(n) && 46 !== n) return void(e.err = "SvgPath: param should start with 0..9 or `.` (at pos " + a + ")");
                                    if (46 !== n) {
                                        if (o = 48 === n, n = ++a < i ? e.path.charCodeAt(a) : 0, o && a < i && n && t(n)) return void(e.err = "SvgPath: numbers started with `0` such as `09` are ilegal (at pos " + r + ")");
                                        for (; a < i && t(e.path.charCodeAt(a));) a++, s = !0;
                                        n = a < i ? e.path.charCodeAt(a) : 0
                                    }
                                    if (46 === n) {
                                        for (l = !0, a++; t(e.path.charCodeAt(a));) a++, c = !0;
                                        n = a < i ? e.path.charCodeAt(a) : 0
                                    }
                                    if (101 === n || 69 === n) {
                                        if (l && !s && !c || (43 !== (n = ++a < i ? e.path.charCodeAt(a) : 0) && 45 !== n || a++, !(a < i && t(e.path.charCodeAt(a))))) return void(e.err = "SvgPath: invalid float exponent (at pos " + a + ")");
                                        for (; a < i && t(e.path.charCodeAt(a));) a++
                                    }
                                    e.index = a, e.param = parseFloat(e.path.slice(r, a)) + 0
                                }(e), e.err.length) return;
                            e.data.push(e.param), r(e), i = !1, e.index < c && 44 === e.path.charCodeAt(e.index) && (e.index++, r(e), i = !0)
                        }
                        if (!i) {
                            ;
                            if (e.index >= e.max) break;
                            if (!((n = e.path.charCodeAt(e.index)) >= 48 && n <= 57 || 43 === n || 45 === n || 46 === n)) break
                        }
                    }
                    a(e)
                }(i);
                return i.err.length ? i.result = [] : i.result.length && (0 > "mM".indexOf(i.result[0][0]) ? (i.err = "SvgPath: string should start with `M` or `m`", i.result = []) : i.result[0][0] = "M"), {
                    err: i.err,
                    segments: i.result
                }
            };
        i.prototype.matrix = function(e) {
            return 1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5] || (this.cache = null, this.queue.push(e)), this
        }, i.prototype.translate = function(e, t) {
            return 0 === e && 0 === t || (this.cache = null, this.queue.push([1, 0, 0, 1, e, t])), this
        }, i.prototype.scale = function(e, t) {
            return 1 === e && 1 === t || (this.cache = null, this.queue.push([e, 0, 0, t, 0, 0])), this
        }, i.prototype.rotate = function(e, t, n) {
            var r, a, i;
            return 0 !== e && (this.translate(t, n), a = Math.cos(r = e * Math.PI / 180), i = Math.sin(r), this.queue.push([a, i, -i, a, 0, 0]), this.cache = null, this.translate(-t, -n)), this
        }, i.prototype.skewX = function(e) {
            return 0 !== e && (this.cache = null, this.queue.push([1, 0, Math.tan(e * Math.PI / 180), 1, 0, 0])), this
        }, i.prototype.skewY = function(e) {
            return 0 !== e && (this.cache = null, this.queue.push([1, Math.tan(e * Math.PI / 180), 0, 1, 0, 0])), this
        }, i.prototype.toArray = function() {
            if (this.cache) return this.cache;
            if (!this.queue.length) return this.cache = [1, 0, 0, 1, 0, 0], this.cache;
            if (this.cache = this.queue[0], 1 === this.queue.length) return this.cache;
            for (var e, t, n = 1; n < this.queue.length; n++) {
                ;
                this.cache = (e = this.cache, t = this.queue[n], [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]])
            }
            return this.cache
        }, i.prototype.calc = function(e, t, n) {
            var r;
            return this.queue.length ? (this.cache || (this.cache = this.toArray()), [e * (r = this.cache)[0] + t * r[2] + (n ? 0 : r[4]), e * r[1] + t * r[3] + (n ? 0 : r[5])]) : [e, t]
        };
        var es = {
                matrix: !0,
                scale: !0,
                rotate: !0,
                translate: !0,
                skewX: !0,
                skewY: !0
            },
            ec = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
            el = /[\s,]+/,
            eu = function(e) {
                var t, n, r = new i;
                return e.split(ec).forEach(function(e) {
                    if (e.length) {
                        if (void 0 !== es[e]) return void(t = e);
                        switch (n = e.split(el).map(function(e) {
                                return +e || 0
                            }), t) {
                            case "matrix":
                                return void(6 === n.length && r.matrix(n));
                            case "scale":
                                return void(1 === n.length ? r.scale(n[0], n[0]) : 2 === n.length && r.scale(n[0], n[1]));
                            case "rotate":
                                return void(1 === n.length ? r.rotate(n[0], 0, 0) : 3 === n.length && r.rotate(n[0], n[1], n[2]));
                            case "translate":
                                return void(1 === n.length ? r.translate(n[0], 0) : 2 === n.length && r.translate(n[0], n[1]));
                            case "skewX":
                                return void(1 === n.length && r.skewX(n[0]));
                            case "skewY":
                                return void(1 === n.length && r.skewY(n[0]))
                        }
                    }
                }), r
            },
            ed = 2 * Math.PI,
            ep = function(e, t, n, r, a, i, s, c, l) {
                var u, d, p, f, m, h, v, g, y, b, x, S, w, D, C, k, P, E, T, M, R, I, O, A = Math.sin(l * ed / 360),
                    L = Math.cos(l * ed / 360),
                    N = L * (e - n) / 2 + A * (t - r) / 2,
                    F = -A * (e - n) / 2 + L * (t - r) / 2;
                if (0 === N && 0 === F || 0 === s || 0 === c) return [];
                s = Math.abs(s);
                var j = N * N / (s * s) + F * F / ((c = Math.abs(c)) * c);
                j > 1 && (s *= Math.sqrt(j), c *= Math.sqrt(j));
                var K = (u = e, d = t, p = n, f = r, m = a, h = i, v = s, g = c, y = A, x = (b = L) * (u - p) / 2 + y * (d - f) / 2, S = -y * (u - p) / 2 + b * (d - f) / 2, w = v * v, D = g * g, C = x * x, (P = w * D - w * (k = S * S) - D * C) < 0 && (P = 0), P /= w * k + D * C, E = (P = Math.sqrt(P) * (m === h ? -1 : 1)) * v / g * S, T = -(P * g) / v * x, I = o(1, 0, M = (x - E) / v, R = (S - T) / g), O = o(M, R, (-x - E) / v, (-S - T) / g), 0 === h && O > 0 && (O -= ed), 1 === h && O < 0 && (O += ed), [b * E - y * T + (u + p) / 2, y * E + b * T + (d + f) / 2, I, O]),
                    _ = [],
                    V = K[2],
                    z = K[3],
                    B = Math.max(Math.ceil(Math.abs(z) / (ed / 4)), 1);
                z /= B;
                for (var U = 0; U < B; U++) _.push(function(e, t) {
                    var n = 4 / 3 * Math.tan(t / 4),
                        r = Math.cos(e),
                        a = Math.sin(e),
                        i = Math.cos(e + t),
                        o = Math.sin(e + t);
                    return [r, a, r - a * n, a + r * n, i + o * n, o - i * n, i, o]
                }(V, z)), V += z;
                return _.map(function(e) {
                    for (var t = 0; t < e.length; t += 2) {
                        var n = e[t + 0],
                            r = e[t + 1];
                        n *= s;
                        var a = L * n - A * (r *= c),
                            i = A * n + L * r;
                        e[t + 0] = a + K[0], e[t + 1] = i + K[1]
                    }
                    return e
                })
            },
            ef = Math.PI / 180;
        s.prototype.transform = function(e) {
            var t = Math.cos(this.ax * ef),
                n = Math.sin(this.ax * ef),
                r = [this.rx * (e[0] * t + e[2] * n), this.rx * (e[1] * t + e[3] * n), this.ry * (-e[0] * n + e[2] * t), this.ry * (-e[1] * n + e[3] * t)],
                a = r[0] * r[0] + r[2] * r[2],
                i = r[1] * r[1] + r[3] * r[3],
                o = ((r[0] - r[3]) * (r[0] - r[3]) + (r[2] + r[1]) * (r[2] + r[1])) * ((r[0] + r[3]) * (r[0] + r[3]) + (r[2] - r[1]) * (r[2] - r[1])),
                s = (a + i) / 2;
            if (o < 1e-10 * s) return this.rx = this.ry = Math.sqrt(s), this.ax = 0, this;
            var c = r[0] * r[1] + r[2] * r[3],
                l = s + (o = Math.sqrt(o)) / 2,
                u = s - o / 2;
            return this.ax = 1e-10 > Math.abs(c) && 1e-10 > Math.abs(l - i) ? 90 : 180 * Math.atan(Math.abs(c) > Math.abs(l - i) ? (l - a) / c : c / (l - i)) / Math.PI, this.ax >= 0 ? (this.rx = Math.sqrt(l), this.ry = Math.sqrt(u)) : (this.ax += 90, this.rx = Math.sqrt(u), this.ry = Math.sqrt(l)), this
        }, s.prototype.isDegenerate = function() {
            return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx
        };
        c.prototype.__matrix = function(e) {
            var t, n = this;
            e.queue.length && this.iterate(function(r, a, i, o) {
                var c, l, u, d;
                switch (r[0]) {
                    case "v":
                        l = 0 === (c = e.calc(0, r[1], !0))[0] ? ["v", c[1]] : ["l", c[0], c[1]];
                        break;
                    case "V":
                        l = (c = e.calc(i, r[1], !1))[0] === e.calc(i, o, !1)[0] ? ["V", c[1]] : ["L", c[0], c[1]];
                        break;
                    case "h":
                        l = 0 === (c = e.calc(r[1], 0, !0))[1] ? ["h", c[0]] : ["l", c[0], c[1]];
                        break;
                    case "H":
                        l = (c = e.calc(r[1], o, !1))[1] === e.calc(i, o, !1)[1] ? ["H", c[0]] : ["L", c[0], c[1]];
                        break;
                    case "a":
                    case "A":
                        var p = e.toArray(),
                            f = s(r[1], r[2], r[3]).transform(p);
                        if (p[0] * p[3] - p[1] * p[2] < 0 && (r[5] = r[5] ? "0" : "1"), c = e.calc(r[6], r[7], "a" === r[0]), "A" === r[0] && r[6] === i && r[7] === o || "a" === r[0] && 0 === r[6] && 0 === r[7]) {
                            l = ["a" === r[0] ? "l" : "L", c[0], c[1]];
                            break
                        }
                        l = f.isDegenerate() ? ["a" === r[0] ? "l" : "L", c[0], c[1]] : [r[0], f.rx, f.ry, f.ax, r[4], r[5], c[0], c[1]];
                        break;
                    case "m":
                        d = a > 0, l = ["m", (c = e.calc(r[1], r[2], d))[0], c[1]];
                        break;
                    default:
                        for (l = [u = r[0]], d = u.toLowerCase() === u, t = 1; t < r.length; t += 2) c = e.calc(r[t], r[t + 1], d), l.push(c[0], c[1])
                }
                n.segments[a] = l
            }, !0)
        }, c.prototype.__evaluateStack = function() {
            var e, t;
            if (this.__stack.length) {
                if (1 === this.__stack.length) return this.__matrix(this.__stack[0]), void(this.__stack = []);
                for (e = i(), t = this.__stack.length; --t >= 0;) e.matrix(this.__stack[t].toArray());
                this.__matrix(e), this.__stack = []
            }
        }, c.prototype.toString = function() {
            var e, t, n = [];
            this.__evaluateStack();
            for (var r = 0; r < this.segments.length; r++) t = this.segments[r][0], e = r > 0 && "m" !== t && "M" !== t && t === this.segments[r - 1][0], n = n.concat(e ? this.segments[r].slice(1) : this.segments[r]);
            return n.join(" ").replace(/ ?([achlmqrstvz]) ?/gi, "$1").replace(/ \-/g, "-").replace(/zm/g, "z m")
        }, c.prototype.translate = function(e, t) {
            return this.__stack.push(i().translate(e, t || 0)), this
        }, c.prototype.scale = function(e, t) {
            return this.__stack.push(i().scale(e, t || 0 === t ? t : e)), this
        }, c.prototype.rotate = function(e, t, n) {
            return this.__stack.push(i().rotate(e, t || 0, n || 0)), this
        }, c.prototype.skewX = function(e) {
            return this.__stack.push(i().skewX(e)), this
        }, c.prototype.skewY = function(e) {
            return this.__stack.push(i().skewY(e)), this
        }, c.prototype.matrix = function(e) {
            return this.__stack.push(i().matrix(e)), this
        }, c.prototype.transform = function(e) {
            return e.trim() && this.__stack.push(eu(e)), this
        }, c.prototype.round = function(e) {
            var t, n = 0,
                r = 0,
                a = 0,
                i = 0;
            return e = e || 0, this.__evaluateStack(), this.segments.forEach(function(o) {
                var s = o[0].toLowerCase() === o[0];
                switch (o[0]) {
                    case "H":
                    case "h":
                        return s && (o[1] += a), a = o[1] - o[1].toFixed(e), void(o[1] = +o[1].toFixed(e));
                    case "V":
                    case "v":
                        return s && (o[1] += i), i = o[1] - o[1].toFixed(e), void(o[1] = +o[1].toFixed(e));
                    case "Z":
                    case "z":
                        return a = n, void(i = r);
                    case "M":
                    case "m":
                        return s && (o[1] += a, o[2] += i), a = o[1] - o[1].toFixed(e), i = o[2] - o[2].toFixed(e), n = a, r = i, o[1] = +o[1].toFixed(e), void(o[2] = +o[2].toFixed(e));
                    case "A":
                    case "a":
                        return s && (o[6] += a, o[7] += i), a = o[6] - o[6].toFixed(e), i = o[7] - o[7].toFixed(e), o[1] = +o[1].toFixed(e), o[2] = +o[2].toFixed(e), o[3] = +o[3].toFixed(e + 2), o[6] = +o[6].toFixed(e), void(o[7] = +o[7].toFixed(e));
                    default:
                        return t = o.length, s && (o[t - 2] += a, o[t - 1] += i), a = o[t - 2] - o[t - 2].toFixed(e), i = o[t - 1] - o[t - 1].toFixed(e), void o.forEach(function(t, n) {
                            n && (o[n] = +o[n].toFixed(e))
                        })
                }
            }), this
        }, c.prototype.iterate = function(e, t) {
            var n, r, a, i = this.segments,
                o = {},
                s = !1,
                c = 0,
                l = 0,
                u = 0,
                d = 0;
            if (t || this.__evaluateStack(), i.forEach(function(t, n) {
                    var r = e(t, n, c, l);
                    Array.isArray(r) && (o[n] = r, s = !0);
                    var a = t[0] === t[0].toLowerCase();
                    switch (t[0]) {
                        case "m":
                        case "M":
                            return c = t[1] + (a ? c : 0), l = t[2] + (a ? l : 0), u = c, void(d = l);
                        case "h":
                        case "H":
                            return void(c = t[1] + (a ? c : 0));
                        case "v":
                        case "V":
                            return void(l = t[1] + (a ? l : 0));
                        case "z":
                        case "Z":
                            return c = u, void(l = d);
                        default:
                            c = t[t.length - 2] + (a ? c : 0), l = t[t.length - 1] + (a ? l : 0)
                    }
                }), !s) return this;
            for (a = [], n = 0; n < i.length; n++)
                if (void 0 !== o[n])
                    for (r = 0; r < o[n].length; r++) a.push(o[n][r]);
                else a.push(i[n]);
            return this.segments = a, this
        }, c.prototype.abs = function() {
            return this.iterate(function(e, t, n, r) {
                var a, i = e[0],
                    o = i.toUpperCase();
                if (i !== o) switch (e[0] = o, i) {
                    case "v":
                        return void(e[1] += r);
                    case "a":
                        return e[6] += n, void(e[7] += r);
                    default:
                        for (a = 1; a < e.length; a++) e[a] += a % 2 ? n : r
                }
            }, !0), this
        }, c.prototype.rel = function() {
            return this.iterate(function(e, t, n, r) {
                var a, i = e[0],
                    o = i.toLowerCase();
                if (i !== o && (0 !== t || "M" !== i)) switch (e[0] = o, i) {
                    case "V":
                        return void(e[1] -= r);
                    case "A":
                        return e[6] -= n, void(e[7] -= r);
                    default:
                        for (a = 1; a < e.length; a++) e[a] -= a % 2 ? n : r
                }
            }, !0), this
        }, c.prototype.unarc = function() {
            return this.iterate(function(e, t, n, r) {
                var a, i, o, s = [],
                    c = e[0];
                return "A" !== c && "a" !== c ? null : ("a" === c ? (i = n + e[6], o = r + e[7]) : (i = e[6], o = e[7]), 0 === (a = ep(n, r, i, o, e[4], e[5], e[1], e[2], e[3])).length ? [
                    ["a" === e[0] ? "l" : "L", e[6], e[7]]
                ] : (a.forEach(function(e) {
                    s.push(["C", e[2], e[3], e[4], e[5], e[6], e[7]])
                }), s))
            }), this
        }, c.prototype.unshort = function() {
            var e, t, n, r, a, i = this.segments;
            return this.iterate(function(o, s, c, l) {
                var u, d = o[0],
                    p = d.toUpperCase();
                s && ("T" === p ? (u = "t" === d, "Q" === (n = i[s - 1])[0] ? (e = n[1] - c, t = n[2] - l) : "q" === n[0] ? (e = n[1] - n[3], t = n[2] - n[4]) : (e = 0, t = 0), r = -e, a = -t, u || (r += c, a += l), i[s] = [u ? "q" : "Q", r, a, o[1], o[2]]) : "S" === p && (u = "s" === d, "C" === (n = i[s - 1])[0] ? (e = n[3] - c, t = n[4] - l) : "c" === n[0] ? (e = n[3] - n[5], t = n[4] - n[6]) : (e = 0, t = 0), r = -e, a = -t, u || (r += c, a += l), i[s] = [u ? "c" : "C", r, a, o[1], o[2], o[3], o[4]]))
            }), this
        };
        var em = c,
            eh = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            ev = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
            eg = function(e) {
                var t = [];
                return e.replace(ev, function(e, n, r) {
                    var a, i = n.toLowerCase();
                    for (r = (a = r.match(ey)) ? a.map(Number) : [], "m" === i && r.length > 2 && (t.push([n].concat(r.splice(0, 2))), i = "l", n = "m" === n ? "l" : "L"); r.length >= 0;) {
                        if (r.length === eh[i]) return r.unshift(n), t.push(r);
                        if (r.length < eh[i]) throw Error("malformed path data");
                        t.push([n].concat(r.splice(0, eh[i])))
                    }
                }), t
            },
            ey = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,
            eb = function(e, t, n, r, a, i, o, s) {
                return new l(e, t, n, r, a, i, o, s)
            };
        l.prototype = {
            constructor: l,
            init: function() {
                this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y])
            },
            getTotalLength: function() {
                return this.length
            },
            getPointAtLength: function(e) {
                var t = p(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
                return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t)
            },
            getTangentAtLength: function(e) {
                var t = p(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                    n = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t),
                    r = Math.sqrt(n.x * n.x + n.y * n.y);
                return r > 0 ? {
                    x: n.x / r,
                    y: n.y / r
                } : {
                    x: 0,
                    y: 0
                }
            },
            getPropertiesAtLength: function(e) {
                var t, n = p(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                    r = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n),
                    a = Math.sqrt(r.x * r.x + r.y * r.y);
                t = a > 0 ? {
                    x: r.x / a,
                    y: r.y / a
                } : {
                    x: 0,
                    y: 0
                };
                var i = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n);
                return {
                    x: i.x,
                    y: i.y,
                    tangentX: t.x,
                    tangentY: t.y
                }
            }
        };
        var ex = [
                [],
                [],
                [-.5773502691896257, .5773502691896257],
                [0, -.7745966692414834, .7745966692414834],
                [-.33998104358485626, .33998104358485626, -.8611363115940526, .8611363115940526],
                [0, -.5384693101056831, .5384693101056831, -.906179845938664, .906179845938664],
                [.6612093864662645, -.6612093864662645, -.2386191860831969, .2386191860831969, -.932469514203152, .932469514203152],
                [0, .4058451513773972, -.4058451513773972, -.7415311855993945, .7415311855993945, -.9491079123427585, .9491079123427585],
                [-.1834346424956498, .1834346424956498, -.525532409916329, .525532409916329, -.7966664774136267, .7966664774136267, -.9602898564975363, .9602898564975363],
                [0, -.8360311073266358, .8360311073266358, -.9681602395076261, .9681602395076261, -.3242534234038089, .3242534234038089, -.6133714327005904, .6133714327005904],
                [-.14887433898163122, .14887433898163122, -.4333953941292472, .4333953941292472, -.6794095682990244, .6794095682990244, -.8650633666889845, .8650633666889845, -.9739065285171717, .9739065285171717],
                [0, -.26954315595234496, .26954315595234496, -.5190961292068118, .5190961292068118, -.7301520055740494, .7301520055740494, -.8870625997680953, .8870625997680953, -.978228658146057, .978228658146057],
                [-.1252334085114689, .1252334085114689, -.3678314989981802, .3678314989981802, -.5873179542866175, .5873179542866175, -.7699026741943047, .7699026741943047, -.9041172563704749, .9041172563704749, -.9815606342467192, .9815606342467192],
                [0, -.2304583159551348, .2304583159551348, -.44849275103644687, .44849275103644687, -.6423493394403402, .6423493394403402, -.8015780907333099, .8015780907333099, -.9175983992229779, .9175983992229779, -.9841830547185881, .9841830547185881],
                [-.10805494870734367, .10805494870734367, -.31911236892788974, .31911236892788974, -.5152486363581541, .5152486363581541, -.6872929048116855, .6872929048116855, -.827201315069765, .827201315069765, -.9284348836635735, .9284348836635735, -.9862838086968123, .9862838086968123],
                [0, -.20119409399743451, .20119409399743451, -.3941513470775634, .3941513470775634, -.5709721726085388, .5709721726085388, -.7244177313601701, .7244177313601701, -.8482065834104272, .8482065834104272, -.937273392400706, .937273392400706, -.9879925180204854, .9879925180204854],
                [-.09501250983763744, .09501250983763744, -.2816035507792589, .2816035507792589, -.45801677765722737, .45801677765722737, -.6178762444026438, .6178762444026438, -.755404408355003, .755404408355003, -.8656312023878318, .8656312023878318, -.9445750230732326, .9445750230732326, -.9894009349916499, .9894009349916499],
                [0, -.17848418149584785, .17848418149584785, -.3512317634538763, .3512317634538763, -.5126905370864769, .5126905370864769, -.6576711592166907, .6576711592166907, -.7815140038968014, .7815140038968014, -.8802391537269859, .8802391537269859, -.9506755217687678, .9506755217687678, -.9905754753144174, .9905754753144174],
                [-.0847750130417353, .0847750130417353, -.2518862256915055, .2518862256915055, -.41175116146284263, .41175116146284263, -.5597708310739475, .5597708310739475, -.6916870430603532, .6916870430603532, -.8037049589725231, .8037049589725231, -.8926024664975557, .8926024664975557, -.9558239495713977, .9558239495713977, -.9915651684209309, .9915651684209309],
                [0, -.16035864564022537, .16035864564022537, -.31656409996362983, .31656409996362983, -.46457074137596094, .46457074137596094, -.600545304661681, .600545304661681, -.7209661773352294, .7209661773352294, -.8227146565371428, .8227146565371428, -.9031559036148179, .9031559036148179, -.96020815213483, .96020815213483, -.9924068438435844, .9924068438435844],
                [-.07652652113349734, .07652652113349734, -.22778585114164507, .22778585114164507, -.37370608871541955, .37370608871541955, -.5108670019508271, .5108670019508271, -.636053680726515, .636053680726515, -.7463319064601508, .7463319064601508, -.8391169718222188, .8391169718222188, -.912234428251326, .912234428251326, -.9639719272779138, .9639719272779138, -.9931285991850949, .9931285991850949],
                [0, -.1455618541608951, .1455618541608951, -.2880213168024011, .2880213168024011, -.4243421202074388, .4243421202074388, -.5516188358872198, .5516188358872198, -.6671388041974123, .6671388041974123, -.7684399634756779, .7684399634756779, -.8533633645833173, .8533633645833173, -.9200993341504008, .9200993341504008, -.9672268385663063, .9672268385663063, -.9937521706203895, .9937521706203895],
                [-.06973927331972223, .06973927331972223, -.20786042668822127, .20786042668822127, -.34193582089208424, .34193582089208424, -.469355837986757, .469355837986757, -.5876404035069116, .5876404035069116, -.6944872631866827, .6944872631866827, -.7878168059792081, .7878168059792081, -.8658125777203002, .8658125777203002, -.926956772187174, .926956772187174, -.9700604978354287, .9700604978354287, -.9942945854823992, .9942945854823992],
                [0, -.1332568242984661, .1332568242984661, -.26413568097034495, .26413568097034495, -.3903010380302908, .3903010380302908, -.5095014778460075, .5095014778460075, -.6196098757636461, .6196098757636461, -.7186613631319502, .7186613631319502, -.8048884016188399, .8048884016188399, -.8767523582704416, .8767523582704416, -.9329710868260161, .9329710868260161, -.9725424712181152, .9725424712181152, -.9947693349975522, .9947693349975522],
                [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213]
            ],
            eS = [
                [],
                [],
                [1, 1],
                [.8888888888888888, .5555555555555556, .5555555555555556],
                [.6521451548625461, .6521451548625461, .34785484513745385, .34785484513745385],
                [.5688888888888889, .47862867049936647, .47862867049936647, .23692688505618908, .23692688505618908],
                [.3607615730481386, .3607615730481386, .46791393457269104, .46791393457269104, .17132449237917036, .17132449237917036],
                [.4179591836734694, .3818300505051189, .3818300505051189, .27970539148927664, .27970539148927664, .1294849661688697, .1294849661688697],
                [.362683783378362, .362683783378362, .31370664587788727, .31370664587788727, .22238103445337448, .22238103445337448, .10122853629037626, .10122853629037626],
                [.3302393550012598, .1806481606948574, .1806481606948574, .08127438836157441, .08127438836157441, .31234707704000286, .31234707704000286, .26061069640293544, .26061069640293544],
                [.29552422471475287, .29552422471475287, .26926671930999635, .26926671930999635, .21908636251598204, .21908636251598204, .1494513491505806, .1494513491505806, .06667134430868814, .06667134430868814],
                [.2729250867779006, .26280454451024665, .26280454451024665, .23319376459199048, .23319376459199048, .18629021092773426, .18629021092773426, .1255803694649046, .1255803694649046, .05566856711617366, .05566856711617366],
                [.24914704581340277, .24914704581340277, .2334925365383548, .2334925365383548, .20316742672306592, .20316742672306592, .16007832854334622, .16007832854334622, .10693932599531843, .10693932599531843, .04717533638651183, .04717533638651183],
                [.2325515532308739, .22628318026289723, .22628318026289723, .2078160475368885, .2078160475368885, .17814598076194574, .17814598076194574, .13887351021978725, .13887351021978725, .09212149983772845, .09212149983772845, .04048400476531588, .04048400476531588],
                [.2152638534631578, .2152638534631578, .2051984637212956, .2051984637212956, .18553839747793782, .18553839747793782, .15720316715819355, .15720316715819355, .12151857068790319, .12151857068790319, .08015808715976021, .08015808715976021, .03511946033175186, .03511946033175186],
                [.2025782419255613, .19843148532711158, .19843148532711158, .1861610000155622, .1861610000155622, .16626920581699392, .16626920581699392, .13957067792615432, .13957067792615432, .10715922046717194, .10715922046717194, .07036604748810812, .07036604748810812, .03075324199611727, .03075324199611727],
                [.1894506104550685, .1894506104550685, .18260341504492358, .18260341504492358, .16915651939500254, .16915651939500254, .14959598881657674, .14959598881657674, .12462897125553388, .12462897125553388, .09515851168249279, .09515851168249279, .062253523938647894, .062253523938647894, .027152459411754096, .027152459411754096],
                [.17944647035620653, .17656270536699264, .17656270536699264, .16800410215645004, .16800410215645004, .15404576107681028, .15404576107681028, .13513636846852548, .13513636846852548, .11188384719340397, .11188384719340397, .08503614831717918, .08503614831717918, .0554595293739872, .0554595293739872, .02414830286854793, .02414830286854793],
                [.1691423829631436, .1691423829631436, .16427648374583273, .16427648374583273, .15468467512626524, .15468467512626524, .14064291467065065, .14064291467065065, .12255520671147846, .12255520671147846, .10094204410628717, .10094204410628717, .07642573025488905, .07642573025488905, .0497145488949698, .0497145488949698, .02161601352648331, .02161601352648331],
                [.1610544498487837, .15896884339395434, .15896884339395434, .15276604206585967, .15276604206585967, .1426067021736066, .1426067021736066, .12875396253933621, .12875396253933621, .11156664554733399, .11156664554733399, .09149002162245, .09149002162245, .06904454273764123, .06904454273764123, .0448142267656996, .0448142267656996, .019461788229726478, .019461788229726478],
                [.15275338713072584, .15275338713072584, .14917298647260374, .14917298647260374, .14209610931838204, .14209610931838204, .13168863844917664, .13168863844917664, .11819453196151841, .11819453196151841, .10193011981724044, .10193011981724044, .08327674157670475, .08327674157670475, .06267204833410907, .06267204833410907, .04060142980038694, .04060142980038694, .017614007139152118, .017614007139152118],
                [.14608113364969041, .14452440398997005, .14452440398997005, .13988739479107315, .13988739479107315, .13226893863333747, .13226893863333747, .12183141605372853, .12183141605372853, .10879729916714838, .10879729916714838, .09344442345603386, .09344442345603386, .0761001136283793, .0761001136283793, .057134425426857205, .057134425426857205, .036953789770852494, .036953789770852494, .016017228257774335, .016017228257774335],
                [.13925187285563198, .13925187285563198, .13654149834601517, .13654149834601517, .13117350478706238, .13117350478706238, .12325237681051242, .12325237681051242, .11293229608053922, .11293229608053922, .10041414444288096, .10041414444288096, .08594160621706773, .08594160621706773, .06979646842452049, .06979646842452049, .052293335152683286, .052293335152683286, .03377490158481415, .03377490158481415, .0146279952982722, .0146279952982722],
                [.13365457218610619, .1324620394046966, .1324620394046966, .12890572218808216, .12890572218808216, .12304908430672953, .12304908430672953, .11499664022241136, .11499664022241136, .10489209146454141, .10489209146454141, .09291576606003515, .09291576606003515, .07928141177671895, .07928141177671895, .06423242140852585, .06423242140852585, .04803767173108467, .04803767173108467, .030988005856979445, .030988005856979445, .013411859487141771, .013411859487141771],
                [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872]
            ],
            ew = [
                [1],
                [1, 1],
                [1, 2, 1],
                [1, 3, 3, 1]
            ],
            eD = 2 * Math.PI,
            eC = function(e, t, n, r, a, i, o, s, c) {
                var l, u, d, p, f, m, h, v, g, b, x, S, w, D, C, k, P, E, T, M, R, I, O, A = Math.sin(a * eD / 360),
                    L = Math.cos(a * eD / 360),
                    N = L * (e - s) / 2 + A * (t - c) / 2,
                    F = -A * (e - s) / 2 + L * (t - c) / 2;
                if (0 === N && 0 === F || 0 === n || 0 === r) return [];
                n = Math.abs(n);
                var j = N * N / (n * n) + F * F / ((r = Math.abs(r)) * r);
                j > 1 && (n *= Math.sqrt(j), r *= Math.sqrt(j));
                var K = (l = e, u = t, d = s, p = c, f = i, m = o, h = n, v = r, g = A, x = (b = L) * (l - d) / 2 + g * (u - p) / 2, S = -g * (l - d) / 2 + b * (u - p) / 2, w = h * h, D = v * v, C = x * x, (P = w * D - w * (k = S * S) - D * C) < 0 && (P = 0), P /= w * k + D * C, E = (P = Math.sqrt(P) * (f === m ? -1 : 1)) * h / v * S, T = -(P * v) / h * x, I = y(1, 0, M = (x - E) / h, R = (S - T) / v), O = y(M, R, (-x - E) / h, (-S - T) / v), 0 === m && O > 0 && (O -= eD), 1 === m && O < 0 && (O += eD), [b * E - g * T + (l + d) / 2, g * E + b * T + (u + p) / 2, I, O]),
                    _ = [],
                    V = K[2],
                    z = K[3],
                    B = Math.max(Math.ceil(Math.abs(z) / (eD / 4)), 1);
                z /= B;
                for (var U = 0; U < B; U++) _.push(function(e, t) {
                    var n = 4 / 3 * Math.tan(t / 4),
                        r = Math.cos(e),
                        a = Math.sin(e),
                        i = Math.cos(e + t),
                        o = Math.sin(e + t);
                    return [r, a, r - a * n, a + r * n, i + o * n, o - i * n, i, o]
                }(V, z)), V += z;
                return _.map(function(e) {
                    for (var t = 0; t < e.length; t += 2) {
                        var a = e[t + 0],
                            i = e[t + 1];
                        a *= n;
                        var o = L * a - A * (i *= r),
                            s = A * a + L * i;
                        e[t + 0] = o + K[0], e[t + 1] = s + K[1]
                    }
                    return e
                })
            },
            ek = function(e, t, n, r, a, i, o, s, c) {
                return new b(e, t, n, r, a, i, o, s, c)
            };
        b.prototype = {
            constructor: b,
            init: function() {},
            getTotalLength: function() {
                return this.length
            },
            getPointAtLength: function(e) {
                e < 0 ? e = 0 : e > this.length && (e = this.length);
                for (var t = this.partialLengths.length - 1; this.partialLengths[t] >= e && this.partialLengths[t] > 0;) t--;
                t < this.partialLengths.length - 1 && t++;
                for (var n = 0, r = 0; r < t; r++) n += this.partialLengths[r];
                return this.curves[t].getPointAtLength(e - n)
            },
            getTangentAtLength: function(e) {
                e < 0 ? e = 0 : e > this.length && (e = this.length);
                for (var t = this.partialLengths.length - 1; this.partialLengths[t] >= e && this.partialLengths[t] > 0;) t--;
                t < this.partialLengths.length - 1 && t++;
                for (var n = 0, r = 0; r < t; r++) n += this.partialLengths[r];
                return this.curves[t].getTangentAtLength(e - n)
            },
            getPropertiesAtLength: function(e) {
                var t = this.getTangentAtLength(e),
                    n = this.getPointAtLength(e);
                return {
                    x: n.x,
                    y: n.y,
                    tangentX: t.x,
                    tangentY: t.y
                }
            }
        };
        var eP = function(e, t, n, r) {
            return new x(e, t, n, r)
        };
        x.prototype.getTotalLength = function() {
            return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2))
        }, x.prototype.getPointAtLength = function(e) {
            var t = e / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)),
                n = (this.x1 - this.x0) * t,
                r = (this.y1 - this.y0) * t;
            return {
                x: this.x0 + n,
                y: this.y0 + r
            }
        }, x.prototype.getTangentAtLength = function() {
            var e = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) + (this.y1 - this.y0) * (this.y1 - this.y0));
            return {
                x: (this.x1 - this.x0) / e,
                y: (this.y1 - this.y0) / e
            }
        }, x.prototype.getPropertiesAtLength = function(e) {
            var t = this.getPointAtLength(e),
                n = this.getTangentAtLength();
            return {
                x: t.x,
                y: t.y,
                tangentX: n.x,
                tangentY: n.y
            }
        };
        var eE = function(e) {
                function t(e) {
                    if (!e) return null;
                    for (var i, o = eg(e), s = [0, 0], c = [0, 0], l = 0; l < o.length; l++) "M" === o[l][0] ? (s = [o[l][1], o[l][2]], a.push(null)) : "m" === o[l][0] ? (s = [o[l][1] + s[0], o[l][2] + s[1]], a.push(null)) : "L" === o[l][0] ? (n += Math.sqrt(Math.pow(s[0] - o[l][1], 2) + Math.pow(s[1] - o[l][2], 2)), a.push(new eP(s[0], o[l][1], s[1], o[l][2])), s = [o[l][1], o[l][2]]) : "l" === o[l][0] ? (n += Math.sqrt(Math.pow(o[l][1], 2) + Math.pow(o[l][2], 2)), a.push(new eP(s[0], o[l][1] + s[0], s[1], o[l][2] + s[1])), s = [o[l][1] + s[0], o[l][2] + s[1]]) : "H" === o[l][0] ? (n += Math.abs(s[0] - o[l][1]), a.push(new eP(s[0], o[l][1], s[1], s[1])), s[0] = o[l][1]) : "h" === o[l][0] ? (n += Math.abs(o[l][1]), a.push(new eP(s[0], s[0] + o[l][1], s[1], s[1])), s[0] = o[l][1] + s[0]) : "V" === o[l][0] ? (n += Math.abs(s[1] - o[l][1]), a.push(new eP(s[0], s[0], s[1], o[l][1])), s[1] = o[l][1]) : "v" === o[l][0] ? (n += Math.abs(o[l][1]), a.push(new eP(s[0], s[0], s[1], s[1] + o[l][1])), s[1] = o[l][1] + s[1]) : "z" === o[l][0] || "Z" === o[l][0] ? (n += Math.sqrt(Math.pow(o[0][1] - s[0], 2) + Math.pow(o[0][2] - s[1], 2)), a.push(new eP(s[0], o[0][1], s[1], o[0][2])), s = [o[0][1], o[0][2]]) : "C" === o[l][0] ? (i = new eb(s[0], s[1], o[l][1], o[l][2], o[l][3], o[l][4], o[l][5], o[l][6]), n += i.getTotalLength(), s = [o[l][5], o[l][6]], a.push(i)) : "c" === o[l][0] ? (i = new eb(s[0], s[1], s[0] + o[l][1], s[1] + o[l][2], s[0] + o[l][3], s[1] + o[l][4], s[0] + o[l][5], s[1] + o[l][6]), n += i.getTotalLength(), s = [o[l][5] + s[0], o[l][6] + s[1]], a.push(i)) : "S" === o[l][0] ? (i = l > 0 && ["C", "c", "S", "s"].indexOf(o[l - 1][0]) > -1 ? new eb(s[0], s[1], 2 * s[0] - o[l - 1][o[l - 1].length - 4], 2 * s[1] - o[l - 1][o[l - 1].length - 3], o[l][1], o[l][2], o[l][3], o[l][4]) : new eb(s[0], s[1], s[0], s[1], o[l][1], o[l][2], o[l][3], o[l][4]), n += i.getTotalLength(), s = [o[l][3], o[l][4]], a.push(i)) : "s" === o[l][0] ? (i = l > 0 && ["C", "c", "S", "s"].indexOf(o[l - 1][0]) > -1 ? new eb(s[0], s[1], s[0] + i.d.x - i.c.x, s[1] + i.d.y - i.c.y, s[0] + o[l][1], s[1] + o[l][2], s[0] + o[l][3], s[1] + o[l][4]) : new eb(s[0], s[1], s[0], s[1], s[0] + o[l][1], s[1] + o[l][2], s[0] + o[l][3], s[1] + o[l][4]), n += i.getTotalLength(), s = [o[l][3] + s[0], o[l][4] + s[1]], a.push(i)) : "Q" === o[l][0] ? (i = new eb(s[0], s[1], o[l][1], o[l][2], o[l][3], o[l][4]), n += i.getTotalLength(), a.push(i), s = [o[l][3], o[l][4]], c = [o[l][1], o[l][2]]) : "q" === o[l][0] ? (i = new eb(s[0], s[1], s[0] + o[l][1], s[1] + o[l][2], s[0] + o[l][3], s[1] + o[l][4]), n += i.getTotalLength(), c = [s[0] + o[l][1], s[1] + o[l][2]], s = [o[l][3] + s[0], o[l][4] + s[1]], a.push(i)) : "T" === o[l][0] ? (i = l > 0 && ["Q", "q", "T", "t"].indexOf(o[l - 1][0]) > -1 ? new eb(s[0], s[1], 2 * s[0] - c[0], 2 * s[1] - c[1], o[l][1], o[l][2]) : new eP(s[0], o[l][1], s[1], o[l][2]), a.push(i), n += i.getTotalLength(), c = [2 * s[0] - c[0], 2 * s[1] - c[1]], s = [o[l][1], o[l][2]]) : "t" === o[l][0] ? (i = l > 0 && ["Q", "q", "T", "t"].indexOf(o[l - 1][0]) > -1 ? new eb(s[0], s[1], 2 * s[0] - c[0], 2 * s[1] - c[1], s[0] + o[l][1], s[1] + o[l][2]) : new eP(s[0], s[0] + o[l][1], s[1], s[1] + o[l][2]), n += i.getTotalLength(), c = [2 * s[0] - c[0], 2 * s[1] - c[1]], s = [o[l][1] + s[0], o[l][2] + s[0]], a.push(i)) : "A" === o[l][0] ? (i = new ek(s[0], s[1], o[l][1], o[l][2], o[l][3], o[l][4], o[l][5], o[l][6], o[l][7]), n += i.getTotalLength(), s = [o[l][6], o[l][7]], a.push(i)) : "a" === o[l][0] && (i = new ek(s[0], s[1], o[l][1], o[l][2], o[l][3], o[l][4], o[l][5], s[0] + o[l][6], s[1] + o[l][7]), n += i.getTotalLength(), s = [s[0] + o[l][6], s[1] + o[l][7]], a.push(i)), r.push(n);
                    return t
                }
                var n = 0,
                    r = [],
                    a = [];
                t.getTotalLength = function() {
                    return n
                }, t.getPointAtLength = function(e) {
                    var t = i(e);
                    return a[t.i].getPointAtLength(t.fraction)
                }, t.getTangentAtLength = function(e) {
                    var t = i(e);
                    return a[t.i].getTangentAtLength(t.fraction)
                }, t.getPropertiesAtLength = function(e) {
                    var t = i(e);
                    return a[t.i].getPropertiesAtLength(t.fraction)
                };
                var i = function(e) {
                    e < 0 ? e = 0 : e > n && (e = n);
                    for (var t = r.length - 1; r[t] >= e && r[t] > 0;) t--;
                    return {
                        fraction: e - r[++t - 1],
                        i: t
                    }
                };
                return t(e)
            },
            eT = 'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',
            eM = "flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).",
            eR = function(e, t) {
                for (var n, r, a, i = e.length, o = 1 / 0, s = 0; s < i; s++) ! function(a) {
                    r = 0, t.forEach(function(t, n) {
                        var o = S(e[(a + n) % i], t);
                        r += o * o
                    }), r < o && (o = r, n = a)
                }(s);
                n && (a = e.splice(0, n), e.splice.apply(e, [e.length, 0].concat(a)))
            },
            eI = O;
        O.deviation = function(e, t, n, r) {
            var a = t && t.length,
                i = a ? t[0] * n : e.length,
                o = Math.abs(q(e, 0, i, n));
            if (a)
                for (var s = 0, c = t.length; s < c; s++) {
                    var l = t[s] * n,
                        u = s < c - 1 ? t[s + 1] * n : e.length;
                    o -= Math.abs(q(e, l, u, n))
                }
            var d = 0;
            for (s = 0; s < r.length; s += 3) {
                var p = r[s] * n,
                    f = r[s + 1] * n,
                    m = r[s + 2] * n;
                d += Math.abs((e[p] - e[m]) * (e[f + 1] - e[p + 1]) - (e[p] - e[f]) * (e[m + 1] - e[p + 1]))
            }
            return 0 === o && 0 === d ? 0 : Math.abs((d - o) / o)
        }, O.flatten = function(e) {
            for (var t = e[0][0].length, n = {
                    vertices: [],
                    holes: [],
                    dimensions: t
                }, r = 0, a = 0; a < e.length; a++) {
                for (var i = 0; i < e[a].length; i++)
                    for (var o = 0; o < t; o++) n.vertices.push(e[a][i][o]);
                a > 0 && (r += e[a - 1].length, n.holes.push(r))
            }
            return n
        };
        var eO = function(e) {
                return e
            },
            eA = function(e) {
                if (null == e) return eO;
                var t, n, r = e.scale[0],
                    a = e.scale[1],
                    i = e.translate[0],
                    o = e.translate[1];
                return function(e, s) {
                    s || (t = n = 0);
                    var c = 2,
                        l = e.length,
                        u = Array(l);
                    for (u[0] = (t += e[0]) * r + i, u[1] = (n += e[1]) * a + o; c < l;) u[c] = e[c], ++c;
                    return u
                }
            },
            eL = function(e, t) {
                for (var n, r = e.length, a = r - t; a < --r;) n = e[a], e[a++] = e[r], e[r] = n
            },
            eN = function(e, t) {
                return "GeometryCollection" === t.type ? {
                    type: "FeatureCollection",
                    features: t.geometries.map(function(t) {
                        return Z(e, t)
                    })
                } : Z(e, t)
            },
            eF = function(e, t) {
                function n(e, t) {
                    for (var n in e) {
                        var a = e[n];
                        delete t[a.start], delete a.start, delete a.end, a.forEach(function(e) {
                            r[e < 0 ? ~e : e] = 1
                        }), o.push(a)
                    }
                }
                var r = {},
                    a = {},
                    i = {},
                    o = [],
                    s = -1;
                return t.forEach(function(n, r) {
                    var a, i = e.arcs[n < 0 ? ~n : n];
                    !(i.length < 3) || i[1][0] || i[1][1] || (a = t[++s], t[s] = n, t[r] = a)
                }), t.forEach(function(t) {
                    var n, r, o, s, c, l, u = (n = t, s = (o = e.arcs[n < 0 ? ~n : n])[0], e.transform ? (r = [0, 0], o.forEach(function(e) {
                            r[0] += e[0], r[1] += e[1]
                        })) : r = o[o.length - 1], n < 0 ? [r, s] : [s, r]),
                        d = u[0],
                        p = u[1];
                    if (c = i[d]) {
                        if (delete i[c.end], c.push(t), c.end = p, l = a[p]) {
                            delete a[l.start];
                            var f = l === c ? c : c.concat(l);
                            a[f.start = c.start] = i[f.end = l.end] = f
                        } else a[c.start] = i[c.end] = c
                    } else if (c = a[p]) {
                        if (delete a[c.start], c.unshift(t), c.start = d, l = i[d]) {
                            delete i[l.end];
                            var m = l === c ? c : l.concat(c);
                            a[m.start = l.start] = i[m.end = c.end] = m
                        } else a[c.start] = i[c.end] = c
                    } else a[(c = [t]).start = d] = i[c.end = p] = c
                }), n(i, a), n(a, i), t.forEach(function(e) {
                    r[e < 0 ? ~e : e] || o.push([e])
                }), o
            },
            ej = function(e, t) {
                for (var n = 0, r = e.length; n < r;) {
                    var a = n + r >>> 1;
                    e[a] < t ? n = a + 1 : r = a
                }
                return n
            },
            eK = function(e) {
                function t(e, t) {
                    e.forEach(function(e) {
                        e < 0 && (e = ~e);
                        var n = r[e];
                        n ? n.push(t) : r[e] = [t]
                    })
                }

                function n(e, n) {
                    e.forEach(function(e) {
                        t(e, n)
                    })
                }
                var r = {},
                    a = e.map(function() {
                        return []
                    }),
                    i = {
                        LineString: t,
                        MultiLineString: n,
                        Polygon: n,
                        MultiPolygon: function(e, t) {
                            e.forEach(function(e) {
                                n(e, t)
                            })
                        }
                    };
                for (var o in e.forEach(function e(t, n) {
                        "GeometryCollection" === t.type ? t.geometries.forEach(function(t) {
                            e(t, n)
                        }) : t.type in i && i[t.type](t.arcs, n)
                    }), r)
                    for (var s = r[o], c = s.length, l = 0; l < c; ++l)
                        for (var u = l + 1; u < c; ++u) {
                            var d, p = s[l],
                                f = s[u];
                            (d = a[p])[o = ej(d, f)] !== f && d.splice(o, 0, f), (d = a[f])[o = ej(d, p)] !== p && d.splice(o, 0, p)
                        }
                return a
            },
            e_ = function(e, t) {
                return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
            },
            eV = function(e) {
                var t;
                return 1 === e.length && (t = e, e = function(e, n) {
                    return e_(t(e), n)
                }), {
                    left: function(t, n, r, a) {
                        for (null == r && (r = 0), null == a && (a = t.length); r < a;) {
                            var i = r + a >>> 1;
                            0 > e(t[i], n) ? r = i + 1 : a = i
                        }
                        return r
                    },
                    right: function(t, n, r, a) {
                        for (null == r && (r = 0), null == a && (a = t.length); r < a;) {
                            var i = r + a >>> 1;
                            e(t[i], n) > 0 ? a = i : r = i + 1
                        }
                        return r
                    }
                }
            },
            ez = (eV(e_).right, function(e, t) {
                var n, r, a, i;
                return function(e, t) {
                    for (var n = e.objects.triangles.geometries, r = eV(function(e) {
                            return e.area
                        }).left; n.length > t;) ! function() {
                        var t = n[0],
                            a = eK(n)[0][0],
                            i = n[a],
                            o = function(e, t) {
                                function n(e) {
                                    e.forEach(function(t) {
                                        t.forEach(function(t) {
                                            (a[t = t < 0 ? ~t : t] || (a[t] = [])).push(e)
                                        })
                                    }), i.push(e)
                                }

                                function r(t) {
                                    return function(e) {
                                        for (var t, n = -1, r = e.length, a = e[r - 1], i = 0; ++n < r;) t = a, a = e[n], i += t[0] * a[1] - t[1] * a[0];
                                        return Math.abs(i)
                                    }(Y(e, {
                                        type: "Polygon",
                                        arcs: [t]
                                    }).coordinates[0])
                                }
                                var a = {},
                                    i = [],
                                    o = [];
                                return t.forEach(function e(t) {
                                    switch (t.type) {
                                        case "GeometryCollection":
                                            t.geometries.forEach(e);
                                            break;
                                        case "Polygon":
                                            n(t.arcs);
                                            break;
                                        case "MultiPolygon":
                                            t.arcs.forEach(n)
                                    }
                                }), i.forEach(function(e) {
                                    if (!e._) {
                                        var t = [],
                                            n = [e];
                                        for (e._ = 1, o.push(t); e = n.pop();) t.push(e), e.forEach(function(e) {
                                            e.forEach(function(e) {
                                                a[e < 0 ? ~e : e].forEach(function(e) {
                                                    e._ || (e._ = 1, n.push(e))
                                                })
                                            })
                                        })
                                    }
                                }), i.forEach(function(e) {
                                    delete e._
                                }), {
                                    type: "MultiPolygon",
                                    arcs: o.map(function(t) {
                                        var n, i = [];
                                        if (t.forEach(function(e) {
                                                e.forEach(function(e) {
                                                    e.forEach(function(e) {
                                                        a[e < 0 ? ~e : e].length < 2 && i.push(e)
                                                    })
                                                })
                                            }), (n = (i = eF(e, i)).length) > 1)
                                            for (var o, s, c = 1, l = r(i[0]); c < n; ++c)(o = r(i[c])) > l && (s = i[0], i[0] = i[c], i[c] = s, l = o);
                                        return i
                                    })
                                }
                            }(e, [t, i]);
                        o.area = t.area + i.area, o.type = "Polygon", o.arcs = o.arcs[0], n.splice(a, 1), n.shift(), n.splice(r(n, o.area), 0, o)
                    }();
                    if (t > n.length) throw RangeError("Can't collapse topology into " + t + " pieces.");
                    return eN(e, e.objects.triangles).features.map(function(e) {
                        return e.geometry.coordinates[0].pop(), e.geometry.coordinates[0]
                    })
                }((n = function(e) {
                    for (var t = eI(e.reduce(function(e, t) {
                            return e.concat([t[0]], [t[1]])
                        }, [])), n = [], r = 0, a = t.length; r < a; r += 3) n.push([
                        [t[r], t[r + 1]],
                        [t[r + 1], t[r + 2]],
                        [t[r + 2], t[r]]
                    ]);
                    return n
                }(e), r = e, a = {}, i = {
                    type: "Topology",
                    objects: {
                        triangles: {
                            type: "GeometryCollection",
                            geometries: []
                        }
                    },
                    arcs: []
                }, n.forEach(function(e) {
                    var t = [];
                    e.forEach(function(e, n) {
                        var o = e[0] < e[1] ? e.join(",") : e[1] + "," + e[0],
                            s = e.map(function(e) {
                                return r[e]
                            });
                        o in a ? t.push(~a[o]) : (t.push(a[o] = i.arcs.length), i.arcs.push(s))
                    }), i.objects.triangles.geometries.push({
                        type: "Polygon",
                        area: Math.abs(et(e.map(function(e) {
                            return r[e[0]]
                        }))),
                        arcs: [t]
                    })
                }), i.objects.triangles.geometries.sort(function(e, t) {
                    return e.area - t.area
                }), i), t)
            }),
            eB = function(e, t) {
                if (e.length > 8) return e.map(function(e, t) {
                    return t
                });
                var n, r, a, i, o, s = e.map(function(e) {
                    return t.map(function(t) {
                        var n, r, a;
                        return n = e, r = t, (a = S(k(n), k(r))) * a
                    })
                });
                return n = e, r = 0, a = s, i = 1 / 0,
                    function e(t, n, r) {
                        void 0 === n && (n = []), void 0 === r && (r = 0);
                        for (var s = 0; s < t.length; s++) {
                            var c = t.splice(s, 1),
                                l = a[c[0]][n.length];
                            r + l < i && (t.length ? e(t.slice(), n.concat(c), r + l) : (i = r + l, o = n.concat(c))), t.length && t.splice(s, 0, c[0])
                        }
                    }(o = n.map(function(e, t) {
                        return t
                    })), o
            };
        e.interpolate = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var a = n.string;
            void 0 === a && (a = !0);
            var i = I(R(e, r), R(t, r), a);
            return a && ("string" == typeof e || "string" == typeof t) ? function(n) {
                return n < 1e-4 && "string" == typeof e ? e : 1 - n < 1e-4 && "string" == typeof t ? t : i(n)
            } : i
        }, e.separate = X, e.combine = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var a = n.string;
            void 0 === a && (a = !0);
            var i = n.single;
            void 0 === i && (i = !1);
            var o = X(t, e, {
                maxSegmentLength: r,
                string: a,
                single: i
            });
            return i ? function(e) {
                return o(1 - e)
            } : o.map(function(e) {
                return function(t) {
                    return e(1 - t)
                }
            })
        }, e.interpolateAll = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var a = n.string;
            void 0 === a && (a = !0);
            var i = n.single;
            if (void 0 === i && (i = !1), !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length || !e.length) throw TypeError(eM);
            var o, s, c = function(e) {
                    return R(e, r)
                },
                l = e.map(c),
                u = t.map(c);
            return i ? (e.every(function(e) {
                return "string" == typeof e
            }) && (o = e.slice(0)), t.every(function(e) {
                return "string" == typeof e
            }) && (s = t.slice(0))) : (o = e.slice(0), s = t.slice(0)), J(l, u, {
                string: a,
                single: i,
                t0: o,
                t1: s,
                match: !1
            })
        }, e.splitPathString = function(e) {
            return E(P(e))
        }, e.toPathString = T, e.fromCircle = $, e.toCircle = function(e, t, n, r, a) {
            var i = $(t, n, r, e, a);
            return function(e) {
                return i(1 - e)
            }
        }, e.fromRect = Q, e.toRect = function(e, t, n, r, a, i) {
            var o = Q(t, n, r, a, e, i);
            return function(e) {
                return o(1 - e)
            }
        }, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, "object" == typeof t && void 0 !== e ? a(t) : "function" == typeof define && define.amd ? define(["exports"], a) : a(r.flubber = r.flubber || {})
}