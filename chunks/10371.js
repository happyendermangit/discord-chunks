function(t, r, e) {
    var n, o;
    t = e.nmd(t), e("854508"), e("70102"), e("424973"), e("808653"), e("222007"), n = this, o = function() {
        "use strict";
        for (var t = function(t, r, e) {
                return void 0 === r && (r = 0), void 0 === e && (e = 1), t < r ? r : t > e ? e : t
            }, r = {}, e = 0, n = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; e < n.length; e += 1) {
            var o = n[e];
            r["[object " + o + "]"] = o.toLowerCase()
        }
        var i = function(t) {
                return r[Object.prototype.toString.call(t)] || "object"
            },
            a = Math.PI,
            u = {
                clip_rgb: function(r) {
                    r._clipped = !1, r._unclipped = r.slice(0);
                    for (var e = 0; e <= 3; e++) e < 3 ? ((r[e] < 0 || r[e] > 255) && (r._clipped = !0), r[e] = t(r[e], 0, 255)) : 3 === e && (r[e] = t(r[e], 0, 1));
                    return r
                },
                limit: t,
                type: i,
                unpack: function(t, r) {
                    return (void 0 === r && (r = null), t.length >= 3) ? Array.prototype.slice.call(t) : "object" == i(t[0]) && r ? r.split("").filter(function(r) {
                        return void 0 !== t[0][r]
                    }).map(function(r) {
                        return t[0][r]
                    }) : t[0]
                },
                last: function(t) {
                    if (t.length < 2) return null;
                    var r = t.length - 1;
                    return "string" == i(t[r]) ? t[r].toLowerCase() : null
                },
                TWOPI: 2 * a,
                PITHIRD: a / 3,
                DEG2RAD: a / 180,
                RAD2DEG: 180 / a
            },
            s = {
                format: {},
                autodetect: []
            },
            f = u.last,
            c = u.clip_rgb,
            l = u.type,
            h = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("object" === l(t[0]) && t[0].constructor && t[0].constructor === this.constructor) return t[0];
                var e = f(t),
                    n = !1;
                if (!e) {
                    n = !0, !s.sorted && (s.autodetect = s.autodetect.sort(function(t, r) {
                        return r.p - t.p
                    }), s.sorted = !0);
                    for (var o = 0, i = s.autodetect; o < i.length; o += 1) {
                        var a = i[o];
                        if (e = a.test.apply(a, t)) break
                    }
                }
                if (s.format[e]) {
                    var u = s.format[e].apply(null, n ? t : t.slice(0, -1));
                    this._rgb = c(u)
                } else throw Error("unknown format: " + t);
                3 === this._rgb.length && this._rgb.push(1)
            };
        h.prototype.toString = function() {
            return "function" == l(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
        };
        var p = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(p.Color, [null].concat(t)))
        };
        p.Color = h, p.version = "2.4.2";
        var v = u.unpack,
            d = Math.max,
            g = u.unpack,
            b = u.unpack,
            y = u.type,
            m = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = v(t, "rgb"),
                    n = e[0],
                    o = e[1],
                    i = e[2],
                    a = 1 - d(n /= 255, d(o /= 255, i /= 255)),
                    u = a < 1 ? 1 / (1 - a) : 0;
                return [(1 - n - a) * u, (1 - o - a) * u, (1 - i - a) * u, a]
            };
        h.prototype.cmyk = function() {
            return m(this._rgb)
        }, p.cmyk = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["cmyk"])))
        }, s.format.cmyk = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var e = (t = g(t, "cmyk"))[0],
                n = t[1],
                o = t[2],
                i = t[3],
                a = t.length > 4 ? t[4] : 1;
            return 1 === i ? [0, 0, 0, a] : [e >= 1 ? 0 : 255 * (1 - e) * (1 - i), n >= 1 ? 0 : 255 * (1 - n) * (1 - i), o >= 1 ? 0 : 255 * (1 - o) * (1 - i), a]
        }, s.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === y(t = b(t, "cmyk")) && 4 === t.length) return "cmyk"
            }
        });
        var w = u.unpack,
            _ = u.last,
            k = function(t) {
                return Math.round(100 * t) / 100
            },
            x = u.unpack,
            E = function() {
                for (var t, r, e = [], n = arguments.length; n--;) e[n] = arguments[n];
                var o = (e = x(e, "rgba"))[0],
                    i = e[1],
                    a = e[2],
                    u = Math.min(o /= 255, i /= 255, a /= 255),
                    s = Math.max(o, i, a),
                    f = (s + u) / 2;
                return (s === u ? (t = 0, r = Number.NaN) : t = f < .5 ? (s - u) / (s + u) : (s - u) / (2 - s - u), o == s ? r = (i - a) / (s - u) : i == s ? r = 2 + (a - o) / (s - u) : a == s && (r = 4 + (o - i) / (s - u)), (r *= 60) < 0 && (r += 360), e.length > 3 && void 0 !== e[3]) ? [r, t, f, e[3]] : [r, t, f]
            },
            S = u.unpack,
            M = u.last,
            R = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = w(t, "hsla"),
                    n = _(t) || "lsa";
                return e[0] = k(e[0] || 0), e[1] = k(100 * e[1]) + "%", e[2] = k(100 * e[2]) + "%", "hsla" === n || e.length > 3 && e[3] < 1 ? (e[3] = e.length > 3 ? e[3] : 1, n = "hsla") : e.length = 3, n + "(" + e.join(",") + ")"
            },
            O = Math.round,
            j = u.unpack,
            A = Math.round,
            N = function() {
                for (var t, r, e, n, o = [], i = arguments.length; i--;) o[i] = arguments[i];
                var a = (o = j(o, "hsl"))[0],
                    u = o[1],
                    s = o[2];
                if (0 === u) r = e = n = 255 * s;
                else {
                    var f = [0, 0, 0],
                        c = [0, 0, 0],
                        l = s < .5 ? s * (1 + u) : s + u - s * u,
                        h = 2 * s - l,
                        p = a / 360;
                    f[0] = p + 1 / 3, f[1] = p, f[2] = p - 1 / 3;
                    for (var v = 0; v < 3; v++) f[v] < 0 && (f[v] += 1), f[v] > 1 && (f[v] -= 1), 6 * f[v] < 1 ? c[v] = h + (l - h) * 6 * f[v] : 2 * f[v] < 1 ? c[v] = l : 3 * f[v] < 2 ? c[v] = h + (l - h) * (2 / 3 - f[v]) * 6 : c[v] = h;
                    r = (t = [A(255 * c[0]), A(255 * c[1]), A(255 * c[2])])[0], e = t[1], n = t[2]
                }
                return o.length > 3 ? [r, e, n, o[3]] : [r, e, n, 1]
            },
            P = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            I = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            q = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            U = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            L = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            B = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            T = Math.round,
            C = function(t) {
                if (t = t.toLowerCase().trim(), s.format.named) try {
                    return s.format.named(t)
                } catch (t) {}
                if (r = t.match(P)) {
                    for (var r, e = r.slice(1, 4), n = 0; n < 3; n++) e[n] = +e[n];
                    return e[3] = 1, e
                }
                if (r = t.match(I)) {
                    for (var o = r.slice(1, 5), i = 0; i < 4; i++) o[i] = +o[i];
                    return o
                }
                if (r = t.match(q)) {
                    for (var a = r.slice(1, 4), u = 0; u < 3; u++) a[u] = T(2.55 * a[u]);
                    return a[3] = 1, a
                }
                if (r = t.match(U)) {
                    for (var f = r.slice(1, 5), c = 0; c < 3; c++) f[c] = T(2.55 * f[c]);
                    return f[3] = +f[3], f
                }
                if (r = t.match(L)) {
                    var l = r.slice(1, 4);
                    l[1] *= .01, l[2] *= .01;
                    var h = N(l);
                    return h[3] = 1, h
                }
                if (r = t.match(B)) {
                    var p = r.slice(1, 4);
                    p[1] *= .01, p[2] *= .01;
                    var v = N(p);
                    return v[3] = +r[4], v
                }
            };
        C.test = function(t) {
            return P.test(t) || I.test(t) || q.test(t) || U.test(t) || L.test(t) || B.test(t)
        };
        var z = u.type,
            D = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = S(t, "rgba"),
                    n = M(t) || "rgb";
                return "hsl" == n.substr(0, 3) ? R(E(e), n) : (e[0] = O(e[0]), e[1] = O(e[1]), e[2] = O(e[2]), ("rgba" === n || e.length > 3 && e[3] < 1) && (e[3] = e.length > 3 ? e[3] : 1, n = "rgba"), n + "(" + e.slice(0, "rgb" === n ? 3 : 4).join(",") + ")")
            };
        h.prototype.css = function(t) {
            return D(this._rgb, t)
        }, p.css = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["css"])))
        }, s.format.css = C, s.autodetect.push({
            p: 5,
            test: function(t) {
                for (var r = [], e = arguments.length - 1; e-- > 0;) r[e] = arguments[e + 1];
                if (!r.length && "string" === z(t) && C.test(t)) return "css"
            }
        });
        var F = u.unpack;
        s.format.gl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var e = F(t, "rgba");
            return e[0] *= 255, e[1] *= 255, e[2] *= 255, e
        }, p.gl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["gl"])))
        }, h.prototype.gl = function() {
            var t = this._rgb;
            return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]]
        };
        var H = u.unpack,
            Z = u.unpack,
            $ = Math.floor,
            G = u.unpack,
            J = u.type,
            V = function() {
                for (var t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
                var n = H(r, "rgb"),
                    o = n[0],
                    i = n[1],
                    a = n[2],
                    u = Math.min(o, i, a),
                    s = Math.max(o, i, a),
                    f = s - u;
                return 0 === f ? t = Number.NaN : (o === s && (t = (i - a) / f), i === s && (t = 2 + (a - o) / f), a === s && (t = 4 + (o - i) / f), (t *= 60) < 0 && (t += 360)), [t, 100 * f / 255, u / (255 - f) * 100]
            };
        h.prototype.hcg = function() {
            return V(this._rgb)
        }, p.hcg = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hcg"])))
        }, s.format.hcg = function() {
            for (var t, r, e, n, o, i, a, u, s, f = [], c = arguments.length; c--;) f[c] = arguments[c];
            var l = (f = Z(f, "hcg"))[0],
                h = f[1],
                p = f[2];
            p *= 255;
            var v = 255 * h;
            if (0 === h) a = u = s = p;
            else {
                360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
                var d = $(l /= 60),
                    g = l - d,
                    b = p * (1 - h),
                    y = b + v * (1 - g),
                    m = b + v * g,
                    w = b + v;
                switch (d) {
                    case 0:
                        a = (t = [w, m, b])[0], u = t[1], s = t[2];
                        break;
                    case 1:
                        a = (r = [y, w, b])[0], u = r[1], s = r[2];
                        break;
                    case 2:
                        a = (e = [b, w, m])[0], u = e[1], s = e[2];
                        break;
                    case 3:
                        a = (n = [b, y, w])[0], u = n[1], s = n[2];
                        break;
                    case 4:
                        a = (o = [m, b, w])[0], u = o[1], s = o[2];
                        break;
                    case 5:
                        a = (i = [w, b, y])[0], u = i[1], s = i[2]
                }
            }
            return [a, u, s, f.length > 3 ? f[3] : 1]
        }, s.autodetect.push({
            p: 1,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === J(t = G(t, "hcg")) && 3 === t.length) return "hcg"
            }
        });
        var Y = u.unpack,
            W = u.last,
            X = Math.round,
            Q = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = Y(t, "rgba"),
                    n = e[0],
                    o = e[1],
                    i = e[2],
                    a = e[3],
                    u = W(t) || "auto";
                void 0 === a && (a = 1), "auto" === u && (u = a < 1 ? "rgba" : "rgb"), n = X(n), o = X(o);
                var s = "000000" + (n << 16 | o << 8 | (i = X(i))).toString(16);
                s = s.substr(s.length - 6);
                var f = "0" + X(255 * a).toString(16);
                switch (f = f.substr(f.length - 2), u.toLowerCase()) {
                    case "rgba":
                        return "#" + s + f;
                    case "argb":
                        return "#" + f + s;
                    default:
                        return "#" + s
                }
            },
            K = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
            tr = function(t) {
                if (t.match(K)) {
                    (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                    var r = parseInt(t, 16);
                    return [r >> 16, r >> 8 & 255, 255 & r, 1]
                }
                if (t.match(tt)) {
                    (5 === t.length || 9 === t.length) && (t = t.substr(1)), 4 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
                    var e = parseInt(t, 16);
                    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, Math.round((255 & e) / 255 * 100) / 100]
                }
                throw Error("unknown hex color: " + t)
            },
            te = u.type;
        h.prototype.hex = function(t) {
            return Q(this._rgb, t)
        }, p.hex = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hex"])))
        }, s.format.hex = tr, s.autodetect.push({
            p: 4,
            test: function(t) {
                for (var r = [], e = arguments.length - 1; e-- > 0;) r[e] = arguments[e + 1];
                if (!r.length && "string" === te(t) && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) return "hex"
            }
        });
        var tn = u.unpack,
            to = u.TWOPI,
            ti = Math.min,
            ta = Math.sqrt,
            tu = Math.acos,
            ts = u.unpack,
            tf = u.limit,
            tc = u.TWOPI,
            tl = u.PITHIRD,
            th = Math.cos,
            tp = u.unpack,
            tv = u.type,
            td = function() {
                for (var t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
                var n = tn(r, "rgb"),
                    o = n[0],
                    i = n[1],
                    a = n[2],
                    u = ti(o /= 255, i /= 255, a /= 255),
                    s = (o + i + a) / 3,
                    f = s > 0 ? 1 - u / s : 0;
                return 0 === f ? t = NaN : (t = tu(t = (o - i + (o - a)) / 2 / ta((o - i) * (o - i) + (o - a) * (i - a))), a > i && (t = to - t), t /= to), [360 * t, f, s]
            };
        h.prototype.hsi = function() {
            return td(this._rgb)
        }, p.hsi = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hsi"])))
        }, s.format.hsi = function() {
            for (var t, r, e, n = [], o = arguments.length; o--;) n[o] = arguments[o];
            var i = (n = ts(n, "hsi"))[0],
                a = n[1],
                u = n[2];
            return isNaN(i) && (i = 0), isNaN(a) && (a = 0), i > 360 && (i -= 360), i < 0 && (i += 360), (i /= 360) < 1 / 3 ? r = 1 - ((e = (1 - a) / 3) + (t = (1 + a * th(tc * i) / th(tl - tc * i)) / 3)) : i < 2 / 3 ? (i -= 1 / 3, e = 1 - ((t = (1 - a) / 3) + (r = (1 + a * th(tc * i) / th(tl - tc * i)) / 3))) : (i -= 2 / 3, t = 1 - ((r = (1 - a) / 3) + (e = (1 + a * th(tc * i) / th(tl - tc * i)) / 3))), t = tf(u * t * 3), r = tf(u * r * 3), [255 * t, 255 * r, 255 * (e = tf(u * e * 3)), n.length > 3 ? n[3] : 1]
        }, s.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === tv(t = tp(t, "hsi")) && 3 === t.length) return "hsi"
            }
        });
        var tg = u.unpack,
            tb = u.type;
        h.prototype.hsl = function() {
            return E(this._rgb)
        }, p.hsl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hsl"])))
        }, s.format.hsl = N, s.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === tb(t = tg(t, "hsl")) && 3 === t.length) return "hsl"
            }
        });
        var ty = u.unpack,
            tm = Math.min,
            tw = Math.max,
            t_ = u.unpack,
            tk = Math.floor,
            tx = u.unpack,
            tE = u.type,
            tS = function() {
                for (var t, r, e = [], n = arguments.length; n--;) e[n] = arguments[n];
                var o = (e = ty(e, "rgb"))[0],
                    i = e[1],
                    a = e[2],
                    u = tm(o, i, a),
                    s = tw(o, i, a),
                    f = s - u;
                return 0 === s ? (t = Number.NaN, r = 0) : (r = f / s, o === s && (t = (i - a) / f), i === s && (t = 2 + (a - o) / f), a === s && (t = 4 + (o - i) / f), (t *= 60) < 0 && (t += 360)), [t, r, s / 255]
            };
        h.prototype.hsv = function() {
            return tS(this._rgb)
        }, p.hsv = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hsv"])))
        }, s.format.hsv = function() {
            for (var t, r, e, n, o, i, a, u, s, f = [], c = arguments.length; c--;) f[c] = arguments[c];
            var l = (f = t_(f, "hsv"))[0],
                h = f[1],
                p = f[2];
            if (p *= 255, 0 === h) a = u = s = p;
            else {
                360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
                var v = tk(l /= 60),
                    d = l - v,
                    g = p * (1 - h),
                    b = p * (1 - h * d),
                    y = p * (1 - h * (1 - d));
                switch (v) {
                    case 0:
                        a = (t = [p, y, g])[0], u = t[1], s = t[2];
                        break;
                    case 1:
                        a = (r = [b, p, g])[0], u = r[1], s = r[2];
                        break;
                    case 2:
                        a = (e = [g, p, y])[0], u = e[1], s = e[2];
                        break;
                    case 3:
                        a = (n = [g, b, p])[0], u = n[1], s = n[2];
                        break;
                    case 4:
                        a = (o = [y, g, p])[0], u = o[1], s = o[2];
                        break;
                    case 5:
                        a = (i = [p, g, b])[0], u = i[1], s = i[2]
                }
            }
            return [a, u, s, f.length > 3 ? f[3] : 1]
        }, s.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === tE(t = tx(t, "hsv")) && 3 === t.length) return "hsv"
            }
        });
        var tM = {
                Kn: 18,
                Xn: .95047,
                Yn: 1,
                Zn: 1.08883,
                t0: .137931034,
                t1: .206896552,
                t2: .12841855,
                t3: .008856452
            },
            tR = u.unpack,
            tO = Math.pow,
            tj = function(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : tO((t + .055) / 1.055, 2.4)
            },
            tA = function(t) {
                return t > tM.t3 ? tO(t, 1 / 3) : t / tM.t2 + tM.t0
            },
            tN = function(t, r, e) {
                return t = tj(t), r = tj(r), [tA((.4124564 * t + .3575761 * r + .1804375 * (e = tj(e))) / tM.Xn), tA((.2126729 * t + .7151522 * r + .072175 * e) / tM.Yn), tA((.0193339 * t + .119192 * r + .9503041 * e) / tM.Zn)]
            },
            tP = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = tR(t, "rgb"),
                    n = tN(e[0], e[1], e[2]),
                    o = n[0],
                    i = n[1],
                    a = n[2],
                    u = 116 * i - 16;
                return [u < 0 ? 0 : u, 500 * (o - i), 200 * (i - a)]
            },
            tI = u.unpack,
            tq = Math.pow,
            tU = function(t) {
                return 255 * (t <= .00304 ? 12.92 * t : 1.055 * tq(t, 1 / 2.4) - .055)
            },
            tL = function(t) {
                return t > tM.t1 ? t * t * t : tM.t2 * (t - tM.t0)
            },
            tB = function() {
                for (var t, r, e, n, o, i = [], a = arguments.length; a--;) i[a] = arguments[a];
                var u = (i = tI(i, "lab"))[0],
                    s = i[1],
                    f = i[2];
                return r = (u + 16) / 116, t = isNaN(s) ? r : r + s / 500, e = isNaN(f) ? r : r - f / 200, r = tM.Yn * tL(r), t = tM.Xn * tL(t), n = tU(3.2404542 * t - 1.5371385 * r - .4985314 * (e = tM.Zn * tL(e))), o = tU(-.969266 * t + 1.8760108 * r + .041556 * e), [n, o, tU(.0556434 * t - .2040259 * r + 1.0572252 * e), i.length > 3 ? i[3] : 1]
            },
            tT = u.unpack,
            tC = u.type;
        h.prototype.lab = function() {
            return tP(this._rgb)
        }, p.lab = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["lab"])))
        }, s.format.lab = tB, s.autodetect.push({
            p: 2,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === tC(t = tT(t, "lab")) && 3 === t.length) return "lab"
            }
        });
        var tz = u.unpack,
            tD = u.RAD2DEG,
            tF = Math.sqrt,
            tH = Math.atan2,
            tZ = Math.round,
            t$ = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = tz(t, "lab"),
                    n = e[0],
                    o = e[1],
                    i = e[2],
                    a = tF(o * o + i * i),
                    u = (tH(i, o) * tD + 360) % 360;
                return 0 === tZ(1e4 * a) && (u = Number.NaN), [n, a, u]
            },
            tG = u.unpack,
            tJ = u.unpack,
            tV = u.DEG2RAD,
            tY = Math.sin,
            tW = Math.cos,
            tX = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = tJ(t, "lch"),
                    n = e[0],
                    o = e[1],
                    i = e[2];
                return isNaN(i) && (i = 0), [n, tW(i *= tV) * o, tY(i) * o]
            },
            tQ = u.unpack,
            tK = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = tX((t = tQ(t, "lch"))[0], t[1], t[2]),
                    n = tB(e[0], e[1], e[2]);
                return [n[0], n[1], n[2], t.length > 3 ? t[3] : 1]
            },
            t0 = u.unpack,
            t1 = u.unpack,
            t2 = u.type,
            t5 = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = tG(t, "rgb"),
                    n = tP(e[0], e[1], e[2]);
                return t$(n[0], n[1], n[2])
            };
        h.prototype.lch = function() {
            return t5(this._rgb)
        }, h.prototype.hcl = function() {
            return t5(this._rgb).reverse()
        }, p.lch = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["lch"])))
        }, p.hcl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["hcl"])))
        }, s.format.lch = tK, s.format.hcl = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var e = t0(t, "hcl").reverse();
            return tK.apply(void 0, e)
        }, ["lch", "hcl"].forEach(function(t) {
            return s.autodetect.push({
                p: 2,
                test: function() {
                    for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
                    if ("array" === t2(r = t1(r, t)) && 3 === r.length) return t
                }
            })
        });
        var t6 = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflower: "#6495ed",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                laserlemon: "#ffff54",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrod: "#fafad2",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                maroon2: "#7f0000",
                maroon3: "#b03060",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                purple2: "#7f007f",
                purple3: "#a020f0",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            },
            t3 = u.type;
        h.prototype.name = function() {
            for (var t = Q(this._rgb, "rgb"), r = 0, e = Object.keys(t6); r < e.length; r += 1) {
                var n = e[r];
                if (t6[n] === t) return n.toLowerCase()
            }
            return t
        }, s.format.named = function(t) {
            if (t6[t = t.toLowerCase()]) return tr(t6[t]);
            throw Error("unknown color name: " + t)
        }, s.autodetect.push({
            p: 5,
            test: function(t) {
                for (var r = [], e = arguments.length - 1; e-- > 0;) r[e] = arguments[e + 1];
                if (!r.length && "string" === t3(t) && t6[t.toLowerCase()]) return "named"
            }
        });
        var t7 = u.unpack,
            t4 = u.type,
            t8 = u.type,
            t9 = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = t7(t, "rgb");
                return (e[0] << 16) + (e[1] << 8) + e[2]
            };
        h.prototype.num = function() {
            return t9(this._rgb)
        }, p.num = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["num"])))
        }, s.format.num = function(t) {
            if ("number" == t4(t) && t >= 0 && t <= 16777215) return [t >> 16, t >> 8 & 255, 255 & t, 1];
            throw Error("unknown num color: " + t)
        }, s.autodetect.push({
            p: 5,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if (1 === t.length && "number" === t8(t[0]) && t[0] >= 0 && t[0] <= 16777215) return "num"
            }
        });
        var rt = u.unpack,
            rr = u.type,
            re = Math.round;
        h.prototype.rgb = function(t) {
            return (void 0 === t && (t = !0), !1 === t) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(re)
        }, h.prototype.rgba = function(t) {
            return void 0 === t && (t = !0), this._rgb.slice(0, 4).map(function(r, e) {
                return e < 3 ? !1 === t ? r : re(r) : r
            })
        }, p.rgb = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["rgb"])))
        }, s.format.rgb = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var e = rt(t, "rgba");
            return void 0 === e[3] && (e[3] = 1), e
        }, s.autodetect.push({
            p: 3,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === rr(t = rt(t, "rgba")) && (3 === t.length || 4 === t.length && "number" == rr(t[3]) && t[3] >= 0 && t[3] <= 1)) return "rgb"
            }
        });
        var rn = Math.log,
            ro = function(t) {
                var r, e, n, o = t / 100;
                return o < 66 ? (r = 255, e = o < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (e = o - 2) + 104.49216199393888 * rn(e), n = o < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (n = o - 10) + 115.67994401066147 * rn(n)) : (r = 351.97690566805693 + .114206453784165 * (r = o - 55) - 40.25366309332127 * rn(r), e = 325.4494125711974 + .07943456536662342 * (e = o - 50) - 28.0852963507957 * rn(e), n = 255), [r, e, n, 1]
            },
            ri = u.unpack,
            ra = Math.round,
            ru = function() {
                for (var t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
                for (var n = ri(r, "rgb"), o = n[0], i = n[2], a = 1e3, u = 4e4; u - a > .4;) {
                    var s = ro(t = (u + a) * .5);
                    s[2] / s[0] >= i / o ? u = t : a = t
                }
                return ra(t)
            };
        h.prototype.temp = h.prototype.kelvin = h.prototype.temperature = function() {
            return ru(this._rgb)
        }, p.temp = p.kelvin = p.temperature = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["temp"])))
        }, s.format.temp = s.format.kelvin = s.format.temperature = ro;
        var rs = u.unpack,
            rf = Math.cbrt,
            rc = Math.pow,
            rl = Math.sign,
            rh = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = rs(t, "rgb"),
                    n = e[0],
                    o = e[1],
                    i = e[2],
                    a = [rp(n / 255), rp(o / 255), rp(i / 255)],
                    u = a[0],
                    s = a[1],
                    f = a[2],
                    c = rf(.4122214708 * u + .5363325363 * s + .0514459929 * f),
                    l = rf(.2119034982 * u + .6806995451 * s + .1073969566 * f),
                    h = rf(.0883024619 * u + .2817188376 * s + .6299787005 * f);
                return [.2104542553 * c + .793617785 * l - .0040720468 * h, 1.9779984951 * c - 2.428592205 * l + .4505937099 * h, .0259040371 * c + .7827717662 * l - .808675766 * h]
            };

        function rp(t) {
            var r = Math.abs(t);
            return r < .04045 ? t / 12.92 : (rl(t) || 1) * rc((r + .055) / 1.055, 2.4)
        }
        var rv = u.unpack,
            rd = Math.pow,
            rg = Math.sign,
            rb = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = (t = rv(t, "lab"))[0],
                    n = t[1],
                    o = t[2],
                    i = rd(e + .3963377774 * n + .2158037573 * o, 3),
                    a = rd(e - .1055613458 * n - .0638541728 * o, 3),
                    u = rd(e - .0894841775 * n - 1.291485548 * o, 3);
                return [255 * ry(4.0767416621 * i - 3.3077115913 * a + .2309699292 * u), 255 * ry(-1.2684380046 * i + 2.6097574011 * a - .3413193965 * u), 255 * ry(-.0041960863 * i - .7034186147 * a + 1.707614701 * u), t.length > 3 ? t[3] : 1]
            };

        function ry(t) {
            var r = Math.abs(t);
            return r > .0031308 ? (rg(t) || 1) * (1.055 * rd(r, 1 / 2.4) - .055) : 12.92 * t
        }
        var rm = u.unpack,
            rw = u.type;
        h.prototype.oklab = function() {
            return rh(this._rgb)
        }, p.oklab = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["oklab"])))
        }, s.format.oklab = rb, s.autodetect.push({
            p: 3,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === rw(t = rm(t, "oklab")) && 3 === t.length) return "oklab"
            }
        });
        var r_ = u.unpack,
            rk = u.unpack,
            rx = u.unpack,
            rE = u.type,
            rS = function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                var e = r_(t, "rgb"),
                    n = rh(e[0], e[1], e[2]);
                return t$(n[0], n[1], n[2])
            };
        h.prototype.oklch = function() {
            return rS(this._rgb)
        }, p.oklch = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            return new(Function.prototype.bind.apply(h, [null].concat(t, ["oklch"])))
        }, s.format.oklch = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            var e = tX((t = rk(t, "lch"))[0], t[1], t[2]),
                n = rb(e[0], e[1], e[2]);
            return [n[0], n[1], n[2], t.length > 3 ? t[3] : 1]
        }, s.autodetect.push({
            p: 3,
            test: function() {
                for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                if ("array" === rE(t = rx(t, "oklch")) && 3 === t.length) return "oklch"
            }
        });
        var rM = u.type;
        h.prototype.alpha = function(t, r) {
            if (void 0 === r && (r = !1), void 0 !== t && "number" === rM(t)) return r ? (this._rgb[3] = t, this) : new h([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb");
            return this._rgb[3]
        };
        h.prototype.clipped = function() {
            return this._rgb._clipped || !1
        };
        h.prototype.darken = function(t) {
            void 0 === t && (t = 1);
            var r = this.lab();
            return r[0] -= tM.Kn * t, new h(r, "lab").alpha(this.alpha(), !0)
        }, h.prototype.brighten = function(t) {
            return void 0 === t && (t = 1), this.darken(-t)
        }, h.prototype.darker = h.prototype.darken, h.prototype.brighter = h.prototype.brighten;
        h.prototype.get = function(t) {
            var r = t.split("."),
                e = r[0],
                n = r[1],
                o = this[e]();
            if (!n) return o;
            var i = e.indexOf(n) - ("ok" === e.substr(0, 2) ? 2 : 0);
            if (i > -1) return o[i];
            throw Error("unknown channel " + n + " in mode " + e)
        };
        var rR = u.type,
            rO = Math.pow;
        h.prototype.luminance = function(t) {
            if (void 0 !== t && "number" === rR(t)) {
                if (0 === t) return new h([0, 0, 0, this._rgb[3]], "rgb");
                if (1 === t) return new h([255, 255, 255, this._rgb[3]], "rgb");
                var r = this.luminance(),
                    e = 20,
                    n = function(r, o) {
                        var i = r.interpolate(o, .5, "rgb"),
                            a = i.luminance();
                        return !(1e-7 > Math.abs(t - a)) && e-- ? a > t ? n(r, i) : n(i, o) : i
                    },
                    o = (r > t ? n(new h([0, 0, 0]), this) : n(this, new h([255, 255, 255]))).rgb();
                return new h(o.concat([this._rgb[3]]))
            }
            return rj.apply(void 0, this._rgb.slice(0, 3))
        };
        var rj = function(t, r, e) {
                return t = rA(t), r = rA(r), .2126 * t + .7152 * r + .0722 * (e = rA(e))
            },
            rA = function(t) {
                return (t /= 255) <= .03928 ? t / 12.92 : rO((t + .055) / 1.055, 2.4)
            },
            rN = {},
            rP = u.type,
            rI = function(t, r, e) {
                void 0 === e && (e = .5);
                for (var n = [], o = arguments.length - 3; o-- > 0;) n[o] = arguments[o + 3];
                var i = n[0] || "lrgb";
                if (!rN[i] && !n.length && (i = Object.keys(rN)[0]), !rN[i]) throw Error("interpolation mode " + i + " is not defined");
                return "object" !== rP(t) && (t = new h(t)), "object" !== rP(r) && (r = new h(r)), rN[i](t, r, e).alpha(t.alpha() + e * (r.alpha() - t.alpha()))
            };
        h.prototype.mix = h.prototype.interpolate = function(t, r) {
            void 0 === r && (r = .5);
            for (var e = [], n = arguments.length - 2; n-- > 0;) e[n] = arguments[n + 2];
            return rI.apply(void 0, [this, t, r].concat(e))
        };
        h.prototype.premultiply = function(t) {
            void 0 === t && (t = !1);
            var r = this._rgb,
                e = r[3];
            return t ? (this._rgb = [r[0] * e, r[1] * e, r[2] * e, e], this) : new h([r[0] * e, r[1] * e, r[2] * e, e], "rgb")
        };
        h.prototype.saturate = function(t) {
            void 0 === t && (t = 1);
            var r = this.lch();
            return r[1] += tM.Kn * t, r[1] < 0 && (r[1] = 0), new h(r, "lch").alpha(this.alpha(), !0)
        }, h.prototype.desaturate = function(t) {
            return void 0 === t && (t = 1), this.saturate(-t)
        };
        var rq = u.type;
        h.prototype.set = function(t, r, e) {
            void 0 === e && (e = !1);
            var n = t.split("."),
                o = n[0],
                i = n[1],
                a = this[o]();
            if (!i) return a;
            var u = o.indexOf(i) - ("ok" === o.substr(0, 2) ? 2 : 0);
            if (u > -1) {
                if ("string" == rq(r)) switch (r.charAt(0)) {
                        case "+":
                        case "-":
                            a[u] += +r;
                            break;
                        case "*":
                            a[u] *= +r.substr(1);
                            break;
                        case "/":
                            a[u] /= +r.substr(1);
                            break;
                        default:
                            a[u] = +r
                    } else if ("number" === rq(r)) a[u] = r;
                    else throw Error("unsupported value for Color.set");
                var s = new h(a, o);
                return e ? (this._rgb = s._rgb, this) : s
            }
            throw Error("unknown channel " + i + " in mode " + o)
        };
        rN.rgb = function(t, r, e) {
            var n = t._rgb,
                o = r._rgb;
            return new h(n[0] + e * (o[0] - n[0]), n[1] + e * (o[1] - n[1]), n[2] + e * (o[2] - n[2]), "rgb")
        };
        var rU = Math.sqrt,
            rL = Math.pow;
        rN.lrgb = function(t, r, e) {
            var n = t._rgb,
                o = n[0],
                i = n[1],
                a = n[2],
                u = r._rgb,
                s = u[0],
                f = u[1],
                c = u[2];
            return new h(rU(rL(o, 2) * (1 - e) + rL(s, 2) * e), rU(rL(i, 2) * (1 - e) + rL(f, 2) * e), rU(rL(a, 2) * (1 - e) + rL(c, 2) * e), "rgb")
        };
        rN.lab = function(t, r, e) {
            var n = t.lab(),
                o = r.lab();
            return new h(n[0] + e * (o[0] - n[0]), n[1] + e * (o[1] - n[1]), n[2] + e * (o[2] - n[2]), "lab")
        };
        var rB = function(t, r, e, n) {
                var o, i, a, u, s, f, c, l, p, v, d, g, b, y;
                return "hsl" === n ? (a = t.hsl(), u = r.hsl()) : "hsv" === n ? (a = t.hsv(), u = r.hsv()) : "hcg" === n ? (a = t.hcg(), u = r.hcg()) : "hsi" === n ? (a = t.hsi(), u = r.hsi()) : "lch" === n || "hcl" === n ? (n = "hcl", a = t.hcl(), u = r.hcl()) : "oklch" === n && (a = t.oklch().reverse(), u = r.oklch().reverse()), ("h" === n.substr(0, 1) || "oklch" === n) && (s = (o = a)[0], c = o[1], p = o[2], f = (i = u)[0], l = i[1], v = i[2]), isNaN(s) || isNaN(f) ? isNaN(s) ? isNaN(f) ? g = Number.NaN : (g = f, (1 == p || 0 == p) && "hsv" != n && (d = l)) : (g = s, (1 == v || 0 == v) && "hsv" != n && (d = c)) : (y = f > s && f - s > 180 ? f - (s + 360) : f < s && s - f > 180 ? f + 360 - s : f - s, g = s + e * y), void 0 === d && (d = c + e * (l - c)), b = p + e * (v - p), "oklch" === n ? new h([b, d, g], n) : new h([g, d, b], n)
            },
            rT = function(t, r, e) {
                return rB(t, r, e, "lch")
            };
        rN.lch = rT, rN.hcl = rT;
        rN.num = function(t, r, e) {
            var n = t.num();
            return new h(n + e * (r.num() - n), "num")
        };
        rN.hcg = function(t, r, e) {
            return rB(t, r, e, "hcg")
        };
        rN.hsi = function(t, r, e) {
            return rB(t, r, e, "hsi")
        };
        rN.hsl = function(t, r, e) {
            return rB(t, r, e, "hsl")
        };
        rN.hsv = function(t, r, e) {
            return rB(t, r, e, "hsv")
        };
        rN.oklab = function(t, r, e) {
            var n = t.oklab(),
                o = r.oklab();
            return new h(n[0] + e * (o[0] - n[0]), n[1] + e * (o[1] - n[1]), n[2] + e * (o[2] - n[2]), "oklab")
        };
        rN.oklch = function(t, r, e) {
            return rB(t, r, e, "oklch")
        };
        var rC = u.clip_rgb,
            rz = Math.pow,
            rD = Math.sqrt,
            rF = Math.PI,
            rH = Math.cos,
            rZ = Math.sin,
            r$ = Math.atan2,
            rG = function(t, r) {
                for (var e = t.length, n = [0, 0, 0, 0], o = 0; o < t.length; o++) {
                    var i = t[o],
                        a = r[o] / e,
                        u = i._rgb;
                    n[0] += rz(u[0], 2) * a, n[1] += rz(u[1], 2) * a, n[2] += rz(u[2], 2) * a, n[3] += u[3] * a
                }
                return n[0] = rD(n[0]), n[1] = rD(n[1]), n[2] = rD(n[2]), n[3] > .9999999 && (n[3] = 1), new h(rC(n))
            },
            rJ = u.type,
            rV = Math.pow,
            rY = function(t) {
                var r = "rgb",
                    e = p("#ccc"),
                    n = 0,
                    o = [0, 1],
                    i = [],
                    a = [0, 0],
                    u = !1,
                    s = [],
                    f = !1,
                    c = 0,
                    l = 1,
                    h = !1,
                    v = {},
                    d = !0,
                    g = 1,
                    b = function(t) {
                        if (t = t || ["#fff", "#000"], "string" === rJ(t) && p.brewer && p.brewer[t.toLowerCase()] && (t = p.brewer[t.toLowerCase()]), "array" === rJ(t)) {
                            1 === t.length && (t = [t[0], t[0]]), t = t.slice(0);
                            for (var r = 0; r < t.length; r++) t[r] = p(t[r]);
                            i.length = 0;
                            for (var e = 0; e < t.length; e++) i.push(e / (t.length - 1))
                        }
                        return k(), s = t
                    },
                    y = function(t) {
                        if (null != u) {
                            for (var r = u.length - 1, e = 0; e < r && t >= u[e];) e++;
                            return e - 1
                        }
                        return 0
                    },
                    m = function(t) {
                        return t
                    },
                    w = function(t) {
                        return t
                    },
                    _ = function(t, n) {
                        if (null == n && (n = !1), isNaN(t) || null === t) return e;
                        if (n) f = t;
                        else if (u && u.length > 2) {
                            var o, f;
                            f = y(t) / (u.length - 2)
                        } else f = l !== c ? (t - c) / (l - c) : 1;
                        f = w(f), !n && (f = m(f)), 1 !== g && (f = rV(f, g));
                        var h = Math.floor(1e4 * (f = Math.min(1, Math.max(0, f = a[0] + f * (1 - a[0] - a[1])))));
                        if (d && v[h]) o = v[h];
                        else {
                            if ("array" === rJ(s))
                                for (var b = 0; b < i.length; b++) {
                                    var _ = i[b];
                                    if (f <= _ || f >= _ && b === i.length - 1) {
                                        o = s[b];
                                        break
                                    }
                                    if (f > _ && f < i[b + 1]) {
                                        f = (f - _) / (i[b + 1] - _), o = p.interpolate(s[b], s[b + 1], f, r);
                                        break
                                    }
                                } else "function" === rJ(s) && (o = s(f));
                            d && (v[h] = o)
                        }
                        return o
                    },
                    k = function() {
                        return v = {}
                    };
                b(t);
                var x = function(t) {
                    var r = p(_(t));
                    return f && r[f] ? r[f]() : r
                };
                return x.classes = function(t) {
                    if (null != t) {
                        if ("array" === rJ(t)) u = t, o = [t[0], t[t.length - 1]];
                        else {
                            var r = p.analyze(o);
                            u = 0 === t ? [r.min, r.max] : p.limits(r, "e", t)
                        }
                        return x
                    }
                    return u
                }, x.domain = function(t) {
                    if (!arguments.length) return o;
                    c = t[0], l = t[t.length - 1], i = [];
                    var r = s.length;
                    if (t.length === r && c !== l)
                        for (var e = 0, n = Array.from(t); e < n.length; e += 1) {
                            var a = n[e];
                            i.push((a - c) / (l - c))
                        } else {
                            for (var u = 0; u < r; u++) i.push(u / (r - 1));
                            if (t.length > 2) {
                                var f = t.map(function(r, e) {
                                        return e / (t.length - 1)
                                    }),
                                    h = t.map(function(t) {
                                        return (t - c) / (l - c)
                                    });
                                !h.every(function(t, r) {
                                    return f[r] === t
                                }) && (w = function(t) {
                                    if (t <= 0 || t >= 1) return t;
                                    for (var r = 0; t >= h[r + 1];) r++;
                                    var e = (t - h[r]) / (h[r + 1] - h[r]);
                                    return f[r] + e * (f[r + 1] - f[r])
                                })
                            }
                        }
                    return o = [c, l], x
                }, x.mode = function(t) {
                    return arguments.length ? (r = t, k(), x) : r
                }, x.range = function(t, r) {
                    return b(t), x
                }, x.out = function(t) {
                    return f = t, x
                }, x.spread = function(t) {
                    return arguments.length ? (n = t, x) : n
                }, x.correctLightness = function(t) {
                    return null == t && (t = !0), h = t, k(), m = h ? function(t) {
                        for (var r = _(0, !0).lab()[0], e = _(1, !0).lab()[0], n = r > e, o = _(t, !0).lab()[0], i = r + (e - r) * t, a = o - i, u = 0, s = 1, f = 20; Math.abs(a) > .01 && f-- > 0;) n && (a *= -1), a < 0 ? (u = t, t += (s - t) * .5) : (s = t, t += (u - t) * .5), a = (o = _(t, !0).lab()[0]) - i;
                        return t
                    } : function(t) {
                        return t
                    }, x
                }, x.padding = function(t) {
                    return null != t ? ("number" === rJ(t) && (t = [t, t]), a = t, x) : a
                }, x.colors = function(r, e) {
                    arguments.length < 2 && (e = "hex");
                    var n = [];
                    if (0 == arguments.length) n = s.slice(0);
                    else if (1 === r) n = [x(.5)];
                    else if (r > 1) {
                        var i = o[0],
                            a = o[1] - i;
                        n = (function(t, r, e) {
                            for (var n = [], o = t < r, i = e ? o ? r + 1 : r - 1 : r, a = t; o ? a < i : a > i; o ? a++ : a--) n.push(a);
                            return n
                        })(0, r, !1).map(function(t) {
                            return x(i + t / (r - 1) * a)
                        })
                    } else {
                        t = [];
                        var f = [];
                        if (u && u.length > 2)
                            for (var c = 1, l = u.length, h = 1 <= l; h ? c < l : c > l; h ? c++ : c--) f.push((u[c - 1] + u[c]) * .5);
                        else f = o;
                        n = f.map(function(t) {
                            return x(t)
                        })
                    }
                    return p[e] && (n = n.map(function(t) {
                        return t[e]()
                    })), n
                }, x.cache = function(t) {
                    return null != t ? (d = t, x) : d
                }, x.gamma = function(t) {
                    return null != t ? (g = t, x) : g
                }, x.nodata = function(t) {
                    return null != t ? (e = p(t), x) : e
                }, x
            },
            rW = function(t) {
                for (var r = [1, 1], e = 1; e < t; e++) {
                    for (var n = [1], o = 1; o <= r.length; o++) n[o] = (r[o] || 0) + r[o - 1];
                    r = n
                }
                return r
            },
            rX = function(t) {
                var r, e, n, o, i, a, u, s, f, c, l;
                if (2 === (t = t.map(function(t) {
                        return new h(t)
                    })).length) i = (r = t.map(function(t) {
                    return t.lab()
                }))[0], a = r[1], o = function(t) {
                    return new h([0, 1, 2].map(function(r) {
                        return i[r] + t * (a[r] - i[r])
                    }), "lab")
                };
                else if (3 === t.length) i = (e = t.map(function(t) {
                    return t.lab()
                }))[0], a = e[1], u = e[2], o = function(t) {
                    return new h([0, 1, 2].map(function(r) {
                        return (1 - t) * (1 - t) * i[r] + 2 * (1 - t) * t * a[r] + t * t * u[r]
                    }), "lab")
                };
                else if (4 === t.length) i = (n = t.map(function(t) {
                    return t.lab()
                }))[0], a = n[1], u = n[2], s = n[3], o = function(t) {
                    return new h([0, 1, 2].map(function(r) {
                        return (1 - t) * (1 - t) * (1 - t) * i[r] + 3 * (1 - t) * (1 - t) * t * a[r] + 3 * (1 - t) * t * t * u[r] + t * t * t * s[r]
                    }), "lab")
                };
                else if (t.length >= 5) f = t.map(function(t) {
                    return t.lab()
                }), c = rW(l = t.length - 1), o = function(t) {
                    var r = 1 - t;
                    return new h([0, 1, 2].map(function(e) {
                        return f.reduce(function(n, o, i) {
                            return n + c[i] * Math.pow(r, l - i) * Math.pow(t, i) * o[e]
                        }, 0)
                    }), "lab")
                };
                else throw RangeError("No point in running bezier with only one color.");
                return o
            },
            rQ = function(t, r, e) {
                if (!rQ[e]) throw Error("unknown blend mode " + e);
                return rQ[e](t, r)
            },
            rK = function(t) {
                return function(r, e) {
                    var n = p(e).rgb(),
                        o = p(r).rgb();
                    return p.rgb(t(n, o))
                }
            },
            r0 = function(t) {
                return function(r, e) {
                    var n = [];
                    return n[0] = t(r[0], e[0]), n[1] = t(r[1], e[1]), n[2] = t(r[2], e[2]), n
                }
            };
        rQ.normal = rK(r0(function(t) {
            return t
        })), rQ.multiply = rK(r0(function(t, r) {
            return t * r / 255
        })), rQ.screen = rK(r0(function(t, r) {
            return 255 * (1 - (1 - t / 255) * (1 - r / 255))
        })), rQ.overlay = rK(r0(function(t, r) {
            return r < 128 ? 2 * t * r / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - r / 255))
        })), rQ.darken = rK(r0(function(t, r) {
            return t > r ? r : t
        })), rQ.lighten = rK(r0(function(t, r) {
            return t > r ? t : r
        })), rQ.dodge = rK(r0(function(t, r) {
            return 255 === t ? 255 : (t = 255 * (r / 255) / (1 - t / 255)) > 255 ? 255 : t
        })), rQ.burn = rK(r0(function(t, r) {
            return 255 * (1 - (1 - r / 255) / (t / 255))
        }));
        for (var r1 = u.type, r2 = u.clip_rgb, r5 = u.TWOPI, r6 = Math.pow, r3 = Math.sin, r7 = Math.cos, r4 = Math.floor, r8 = Math.random, r9 = Math.log, et = Math.pow, er = Math.floor, ee = Math.abs, en = function(t, r) {
                void 0 === r && (r = null);
                var e = {
                    min: Number.MAX_VALUE,
                    max: -1 * Number.MAX_VALUE,
                    sum: 0,
                    values: [],
                    count: 0
                };
                return "object" === i(t) && (t = Object.values(t)), t.forEach(function(t) {
                    r && "object" === i(t) && (t = t[r]), null != t && !isNaN(t) && (e.values.push(t), e.sum += t, t < e.min && (e.min = t), t > e.max && (e.max = t), e.count += 1)
                }), e.domain = [e.min, e.max], e.limits = function(t, r) {
                    return eo(e, t, r)
                }, e
            }, eo = function(t, r, e) {
                void 0 === r && (r = "equal"), void 0 === e && (e = 7), "array" == i(t) && (t = en(t));
                var n = t.min,
                    o = t.max,
                    a = t.values.sort(function(t, r) {
                        return t - r
                    });
                if (1 === e) return [n, o];
                var u = [];
                if ("c" === r.substr(0, 1) && (u.push(n), u.push(o)), "e" === r.substr(0, 1)) {
                    u.push(n);
                    for (var s = 1; s < e; s++) u.push(n + s / e * (o - n));
                    u.push(o)
                } else if ("l" === r.substr(0, 1)) {
                    if (n <= 0) throw Error("Logarithmic scales are only possible for values > 0");
                    var f = Math.LOG10E * r9(n),
                        c = Math.LOG10E * r9(o);
                    u.push(n);
                    for (var l = 1; l < e; l++) u.push(et(10, f + l / e * (c - f)));
                    u.push(o)
                } else if ("q" === r.substr(0, 1)) {
                    u.push(n);
                    for (var h = 1; h < e; h++) {
                        var p = (a.length - 1) * h / e,
                            v = er(p);
                        if (v === p) u.push(a[v]);
                        else {
                            var d = p - v;
                            u.push(a[v] * (1 - d) + a[v + 1] * d)
                        }
                    }
                    u.push(o)
                } else if ("k" === r.substr(0, 1)) {
                    var g, b = a.length,
                        y = Array(b),
                        m = Array(e),
                        w = !0,
                        _ = 0,
                        k = null;
                    (k = []).push(n);
                    for (var x = 1; x < e; x++) k.push(n + x / e * (o - n));
                    for (k.push(o); w;) {
                        for (var E = 0; E < e; E++) m[E] = 0;
                        for (var S = 0; S < b; S++) {
                            for (var M = a[S], R = Number.MAX_VALUE, O = void 0, j = 0; j < e; j++) {
                                var A = ee(k[j] - M);
                                A < R && (R = A, O = j), m[O]++, y[S] = O
                            }
                        }
                        for (var N = Array(e), P = 0; P < e; P++) N[P] = null;
                        for (var I = 0; I < b; I++) null === N[g = y[I]] ? N[g] = a[I] : N[g] += a[I];
                        for (var q = 0; q < e; q++) N[q] *= 1 / m[q];
                        w = !1;
                        for (var U = 0; U < e; U++)
                            if (N[U] !== k[U]) {
                                w = !0;
                                break
                            } k = N, ++_ > 200 && (w = !1)
                    }
                    for (var L = {}, B = 0; B < e; B++) L[B] = [];
                    for (var T = 0; T < b; T++) L[g = y[T]].push(a[T]);
                    for (var C = [], z = 0; z < e; z++) C.push(L[z][0]), C.push(L[z][L[z].length - 1]);
                    C = C.sort(function(t, r) {
                        return t - r
                    }), u.push(C[0]);
                    for (var D = 1; D < C.length; D += 2) {
                        var F = C[D];
                        !isNaN(F) && -1 === u.indexOf(F) && u.push(F)
                    }
                }
                return u
            }, ei = {
                analyze: en,
                limits: eo
            }, ea = Math.sqrt, eu = Math.pow, es = Math.min, ef = Math.max, ec = Math.atan2, el = Math.abs, eh = Math.cos, ep = Math.sin, ev = Math.exp, ed = Math.PI, eg = {
                OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
                Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
                RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
                PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
                PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
                RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
                BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
                RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
                PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
                Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
                Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
                Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
                Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
            }, eb = 0, ey = Object.keys(eg); eb < ey.length; eb += 1) {
            var em = ey[eb];
            eg[em.toLowerCase()] = eg[em]
        }
        return p.average = function(t, r, e) {
            void 0 === r && (r = "lrgb"), void 0 === e && (e = null);
            var n = t.length;
            !e && (e = Array.from(Array(n)).map(function() {
                return 1
            }));
            var o = n / e.reduce(function(t, r) {
                return t + r
            });
            if (e.forEach(function(t, r) {
                    e[r] *= o
                }), t = t.map(function(t) {
                    return new h(t)
                }), "lrgb" === r) return rG(t, e);
            for (var i = t.shift(), a = i.get(r), u = [], s = 0, f = 0, c = 0; c < a.length; c++)
                if (a[c] = (a[c] || 0) * e[0], u.push(isNaN(a[c]) ? 0 : e[0]), "h" === r.charAt(c) && !isNaN(a[c])) {
                    var l = a[c] / 180 * rF;
                    s += rH(l) * e[0], f += rZ(l) * e[0]
                } var p = i.alpha() * e[0];
            t.forEach(function(t, n) {
                var o = t.get(r);
                p += t.alpha() * e[n + 1];
                for (var i = 0; i < a.length; i++)
                    if (!isNaN(o[i])) {
                        if (u[i] += e[n + 1], "h" === r.charAt(i)) {
                            var c = o[i] / 180 * rF;
                            s += rH(c) * e[n + 1], f += rZ(c) * e[n + 1]
                        } else a[i] += o[i] * e[n + 1]
                    }
            });
            for (var v = 0; v < a.length; v++)
                if ("h" === r.charAt(v)) {
                    for (var d = r$(f / u[v], s / u[v]) / rF * 180; d < 0;) d += 360;
                    for (; d >= 360;) d -= 360;
                    a[v] = d
                } else a[v] = a[v] / u[v];
            return p /= n, new h(a, r).alpha(p > .99999 ? 1 : p, !0)
        }, p.bezier = function(t) {
            var r = rX(t);
            return r.scale = function() {
                return rY(r)
            }, r
        }, p.blend = rQ, p.cubehelix = function(t, r, e, n, o) {
            void 0 === t && (t = 300), void 0 === r && (r = -1.5), void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === o && (o = [0, 1]);
            var i, a = 0;
            "array" === r1(o) ? i = o[1] - o[0] : (i = 0, o = [o, o]);
            var u = function(u) {
                var s = r5 * ((t + 120) / 360 + r * u),
                    f = r6(o[0] + i * u, n),
                    c = (0 !== a ? e[0] + u * a : e) * f * (1 - f) / 2,
                    l = r7(s),
                    h = r3(s);
                return p(r2([255 * (f + c * (-.14861 * l + 1.78277 * h)), 255 * (f + c * (-.29227 * l - .90649 * h)), 255 * (f + c * (1.97294 * l)), 1]))
            };
            return u.start = function(r) {
                return null == r ? t : (t = r, u)
            }, u.rotations = function(t) {
                return null == t ? r : (r = t, u)
            }, u.gamma = function(t) {
                return null == t ? n : (n = t, u)
            }, u.hue = function(t) {
                return null == t ? e : ("array" === r1(e = t) ? 0 == (a = e[1] - e[0]) && (e = e[1]) : a = 0, u)
            }, u.lightness = function(t) {
                return null == t ? o : ("array" === r1(t) ? (o = t, i = t[1] - t[0]) : (o = [t, t], i = 0), u)
            }, u.scale = function() {
                return p.scale(u)
            }, u.hue(e), u
        }, p.mix = p.interpolate = rI, p.random = function() {
            for (var t = "#", r = 0; r < 6; r++) t += "0123456789abcdef".charAt(r4(16 * r8()));
            return new h(t, "hex")
        }, p.scale = rY, p.analyze = ei.analyze, p.contrast = function(t, r) {
            t = new h(t), r = new h(r);
            var e = t.luminance(),
                n = r.luminance();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
        }, p.deltaE = function(t, r, e, n, o) {
            void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === o && (o = 1);
            var i = function(t) {
                    return 360 * t / (2 * ed)
                },
                a = function(t) {
                    return 2 * ed * t / 360
                };
            t = new h(t), r = new h(r);
            var u = Array.from(t.lab()),
                s = u[0],
                f = u[1],
                c = u[2],
                l = Array.from(r.lab()),
                p = l[0],
                v = l[1],
                d = l[2],
                g = (s + p) / 2,
                b = (ea(eu(f, 2) + eu(c, 2)) + ea(eu(v, 2) + eu(d, 2))) / 2,
                y = .5 * (1 - ea(eu(b, 7) / (eu(b, 7) + eu(25, 7)))),
                m = f * (1 + y),
                w = v * (1 + y),
                _ = ea(eu(m, 2) + eu(c, 2)),
                k = ea(eu(w, 2) + eu(d, 2)),
                x = (_ + k) / 2,
                E = i(ec(c, m)),
                S = i(ec(d, w)),
                M = E >= 0 ? E : E + 360,
                R = S >= 0 ? S : S + 360,
                O = el(M - R) > 180 ? (M + R + 360) / 2 : (M + R) / 2,
                j = 1 - .17 * eh(a(O - 30)) + .24 * eh(a(2 * O)) + .32 * eh(a(3 * O + 6)) - .2 * eh(a(4 * O - 63)),
                A = R - M;
            A = 180 >= el(A) ? A : R <= M ? A + 360 : A - 360, A = 2 * ea(_ * k) * ep(a(A) / 2);
            var N = k - _,
                P = 1 + .015 * eu(g - 50, 2) / ea(20 + eu(g - 50, 2)),
                I = 1 + .045 * x,
                q = 1 + .015 * x * j,
                U = 30 * ev(-eu((O - 275) / 25, 2)),
                L = -(2 * ea(eu(x, 7) / (eu(x, 7) + eu(25, 7)))) * ep(2 * a(U));
            return ef(0, es(100, ea(eu((p - s) / (e * P), 2) + eu(N / (n * I), 2) + eu(A / (o * q), 2) + L * (N / (n * I)) * (A / (o * q)))))
        }, p.distance = function(t, r, e) {
            void 0 === e && (e = "lab"), t = new h(t), r = new h(r);
            var n = t.get(e),
                o = r.get(e),
                i = 0;
            for (var a in n) {
                var u = (n[a] || 0) - (o[a] || 0);
                i += u * u
            }
            return Math.sqrt(i)
        }, p.limits = ei.limits, p.valid = function() {
            for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
            try {
                return new(Function.prototype.bind.apply(h, [null].concat(t))), !0
            } catch (t) {
                return !1
            }
        }, p.scales = {
            cool: function() {
                return rY([p.hsl(180, 1, .9), p.hsl(250, .7, .4)])
            },
            hot: function() {
                return rY(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
            }
        }, p.colors = t6, p.brewer = eg, p
    }, "object" == typeof r && void 0 !== t ? t.exports = o() : "function" == typeof define && define.amd ? define(o) : (n = "undefined" != typeof globalThis ? globalThis : n || self).chroma = o()
}