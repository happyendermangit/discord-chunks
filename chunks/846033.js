function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        a: function() {
            return eU
        },
        b: function() {
            return e5
        },
        c: function() {
            return e9
        },
        d: function() {
            return tn
        },
        e: function() {
            return ti
        },
        f: function() {
            return to
        },
        g: function() {
            return ta
        },
        h: function() {
            return tu
        },
        i: function() {
            return ts
        },
        j: function() {
            return tl
        },
        k: function() {
            return tc
        },
        l: function() {
            return td
        },
        m: function() {
            return tf
        },
        n: function() {
            return th
        },
        o: function() {
            return tp
        }
    });
    var n, i, o, a, u, s, l, c = r("193809");
    r("511434"), r("313619"), r("654714"), r("287168"), r("956660"), r("222007"), r("70102"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("659510"), r("527135"), r("781738"), r("424973"), r("808653"), r("843762"), r("990131"), r("332822"), r("477315"), r("370692"), r("101997");
    var d = r("446825").Buffer,
        f = {},
        h = function(e, t, r, n, i) {
            var o = new Worker(f[t] || (f[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
                type: "text/javascript"
            }))));
            return o.onmessage = function(e) {
                var t = e.data,
                    r = t.$e$;
                if (r) {
                    var n = Error(r[0]);
                    n.code = r[1], n.stack = r[2], i(n, null)
                } else i(null, t)
            }, o.postMessage(r, n), o
        },
        p = Uint8Array,
        v = Uint16Array,
        D = Int32Array,
        g = new p([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        C = new p([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        m = new p([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        y = function(e, t) {
            for (var r = new v(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
            for (var i = new D(r[30]), n = 1; n < 30; ++n)
                for (var o = r[n]; o < r[n + 1]; ++o) i[o] = o - r[n] << 5 | n;
            return {
                b: r,
                r: i
            }
        },
        E = y(g, 2),
        B = E.b,
        b = E.r;
    B[28] = 258, b[258] = 28;
    var A = y(C, 0).b,
        w = new v(32768);
    for (l = 0; l < 32768; ++l) F = (61680 & (F = (52428 & (F = (43690 & l) >> 1 | (21845 & l) << 1)) >> 2 | (13107 & F) << 2)) >> 4 | (3855 & F) << 4, w[l] = ((65280 & F) >> 8 | (255 & F) << 8) >> 1;
    var F, l, _ = function(e, t, r) {
            for (var n, i = e.length, o = 0, a = new v(t); o < i; ++o) e[o] && ++a[e[o] - 1];
            var u = new v(t);
            for (o = 1; o < t; ++o) u[o] = u[o - 1] + a[o - 1] << 1;
            if (r) {
                n = new v(1 << t);
                var s = 15 - t;
                for (o = 0; o < i; ++o)
                    if (e[o])
                        for (var l = o << 4 | e[o], c = t - e[o], d = u[e[o] - 1]++ << c, f = d | (1 << c) - 1; d <= f; ++d) n[w[d] >> s] = l
            } else
                for (n = new v(i), o = 0; o < i; ++o) e[o] && (n[o] = w[u[e[o] - 1]++] >> 15 - e[o]);
            return n
        },
        O = new p(288);
    for (l = 0; l < 144; ++l) O[l] = 8;
    for (l = 144; l < 256; ++l) O[l] = 9;
    for (l = 256; l < 280; ++l) O[l] = 7;
    for (l = 280; l < 288; ++l) O[l] = 8;
    var l, x = new p(32);
    for (l = 0; l < 32; ++l) x[l] = 5;
    var k = _(O, 9, 1),
        P = _(x, 5, 1),
        S = function(e) {
            for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
            return t
        },
        T = function(e, t, r) {
            var n = t / 8 | 0;
            return (e[n] | e[n + 1] << 8) >> (7 & t) & r
        },
        j = function(e, t) {
            var r = t / 8 | 0;
            return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
        },
        M = function(e) {
            return (e + 7) / 8 | 0
        },
        R = function(e, t, r) {
            (null == t || t < 0) && (t = 0), (null == r || r > e.length) && (r = e.length);
            var n = new p(r - t);
            return n.set(e.subarray(t, r)), n
        },
        I = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
        L = function(e, t, r) {
            var n = Error(t || I[e]);
            if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, L), !r) throw n;
            return n
        },
        N = function(e, t, r, n) {
            var i = e.length,
                o = n ? n.length : 0;
            if (!i || t.f && !t.l) return r || new p(0);
            var a = !r || 2 != t.i,
                u = t.i;
            r || (r = new p(3 * i));
            var s = function(e) {
                    var t = r.length;
                    if (e > t) {
                        var n = new p(Math.max(2 * t, e));
                        n.set(r), r = n
                    }
                },
                l = t.f || 0,
                c = t.p || 0,
                d = t.b || 0,
                f = t.l,
                h = t.d,
                v = t.m,
                D = t.n,
                y = 8 * i;
            do {
                if (!f) {
                    l = T(e, c, 1);
                    var E = T(e, c + 1, 3);
                    if (c += 3, E) {
                        if (1 == E) f = k, h = P, v = 9, D = 5;
                        else if (2 == E) {
                            var b = T(e, c, 31) + 257,
                                w = T(e, c + 10, 15) + 4,
                                F = b + T(e, c + 5, 31) + 1;
                            c += 14;
                            for (var O = new p(F), x = new p(19), I = 0; I < w; ++I) x[m[I]] = T(e, c + 3 * I, 7);
                            c += 3 * w;
                            for (var N = S(x), z = (1 << N) - 1, W = _(x, N, 1), I = 0; I < F;) {
                                var q = W[T(e, c, z)];
                                c += 15 & q;
                                var V = q >> 4;
                                if (V < 16) O[I++] = V;
                                else {
                                    var U = 0,
                                        H = 0;
                                    for (16 == V ? (H = 3 + T(e, c, 3), c += 2, U = O[I - 1]) : 17 == V ? (H = 3 + T(e, c, 7), c += 3) : 18 == V && (H = 11 + T(e, c, 127), c += 7); H--;) O[I++] = U
                                }
                            }
                            var J = O.subarray(0, b),
                                K = O.subarray(b);
                            v = S(J), D = S(K), f = _(J, v, 1), h = _(K, D, 1)
                        } else L(1)
                    } else {
                        var V = M(c) + 4,
                            $ = e[V - 4] | e[V - 3] << 8,
                            X = V + $;
                        if (X > i) {
                            u && L(0);
                            break
                        }
                        a && s(d + $), r.set(e.subarray(V, X), d), t.b = d += $, t.p = c = 8 * X, t.f = l;
                        continue
                    }
                    if (c > y) {
                        u && L(0);
                        break
                    }
                }
                a && s(d + 131072);
                for (var Q = (1 << v) - 1, G = (1 << D) - 1, Y = c;; Y = c) {
                    var U = f[j(e, c) & Q],
                        Z = U >> 4;
                    if ((c += 15 & U) > y) {
                        u && L(0);
                        break
                    }
                    if (U || L(2), Z < 256) r[d++] = Z;
                    else if (256 == Z) {
                        Y = c, f = null;
                        break
                    } else {
                        var ee = Z - 254;
                        if (Z > 264) {
                            var I = Z - 257,
                                et = g[I];
                            ee = T(e, c, (1 << et) - 1) + B[I], c += et
                        }
                        var er = h[j(e, c) & G],
                            en = er >> 4;
                        er || L(3), c += 15 & er;
                        var K = A[en];
                        if (en > 3) {
                            var et = C[en];
                            K += j(e, c) & (1 << et) - 1, c += et
                        }
                        if (c > y) {
                            u && L(0);
                            break
                        }
                        a && s(d + 131072);
                        var ei = d + ee;
                        if (d < K) {
                            var eo = o - K,
                                ea = Math.min(K, ei);
                            for (eo + d < 0 && L(3); d < ea; ++d) r[d] = n[eo + d]
                        }
                        for (; d < ei; d += 4) r[d] = r[d - K], r[d + 1] = r[d + 1 - K], r[d + 2] = r[d + 2 - K], r[d + 3] = r[d + 3 - K];
                        d = ei
                    }
                }
                t.l = f, t.p = Y, t.b = d, t.f = l, f && (l = 1, t.m = v, t.d = h, t.n = D)
            } while (!l);
            return d == r.length ? r : R(r, 0, d)
        },
        z = new p(0),
        W = function(e, t) {
            var r = {};
            for (var n in e) r[n] = e[n];
            for (var n in t) r[n] = t[n];
            return r
        },
        q = function(e, t, r) {
            for (var n = e(), i = e.toString(), o = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(","), a = 0; a < n.length; ++a) {
                var u = n[a],
                    s = o[a];
                if ("function" == typeof u) {
                    t += ";" + s + "=";
                    var l = u.toString();
                    if (u.prototype) {
                        if (-1 != l.indexOf("[native code]")) {
                            var c = l.indexOf(" ", 8) + 1;
                            t += l.slice(c, l.indexOf("(", c))
                        } else
                            for (var d in t += l, u.prototype) t += ";" + s + ".prototype." + d + "=" + u.prototype[d].toString()
                    } else t += l
                } else r[s] = u
            }
            return t
        },
        V = [],
        U = function(e) {
            var t = [];
            for (var r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
            return t
        },
        H = function(e, t, r, n) {
            if (!V[r]) {
                for (var i = "", o = {}, a = e.length - 1, u = 0; u < a; ++u) i = q(e[u], i, o);
                V[r] = {
                    c: q(e[a], i, o),
                    e: o
                }
            }
            var s = W({}, V[r].e);
            return h(V[r].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + t.toString() + "}", r, s, U(s), n)
        },
        J = function() {
            return [p, v, D, g, C, m, B, A, k, P, w, I, _, S, T, j, M, R, L, N, Z, K, $]
        },
        K = function(e) {
            return postMessage(e, [e.buffer])
        },
        $ = function(e) {
            return e && {
                out: e.size && new p(e.size),
                dictionary: e.dictionary
            }
        },
        X = function(e, t, r, n, i, o) {
            var a = H(r, n, i, function(e, t) {
                a.terminate(), o(e, t)
            });
            return a.postMessage([e, t], t.consume ? [e.buffer] : []),
                function() {
                    a.terminate()
                }
        },
        Q = function(e, t) {
            return e[t] | e[t + 1] << 8
        },
        G = function(e, t) {
            return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
        },
        Y = function(e, t) {
            return G(e, t) + 4294967296 * G(e, t + 4)
        };

    function Z(e, t) {
        return N(e, {
            i: 2
        }, t && t.out, t && t.dictionary)
    }
    var ee = "u" > typeof TextDecoder && new TextDecoder,
        et = 0;
    try {
        ee.decode(z, {
            stream: !0
        })
    } catch {}
    var er = function(e) {
        for (var t = "", r = 0;;) {
            var n = e[r++],
                i = (n > 127) + (n > 223) + (n > 239);
            if (r + i > e.length) return {
                s: t,
                r: R(e, r - 1)
            };
            i ? 3 == i ? t += String.fromCharCode(55296 | (n = ((15 & n) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536) >> 10, 56320 | 1023 & n) : 1 & i ? t += String.fromCharCode((31 & n) << 6 | 63 & e[r++]) : t += String.fromCharCode((15 & n) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : t += String.fromCharCode(n)
        }
    };

    function en(e, t) {
        if (t) {
            for (var r = "", n = 0; n < e.length; n += 16384) r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
            return r
        }
        if (ee) return ee.decode(e);
        var i = er(e),
            o = i.s,
            r = i.r;
        return r.length && L(8), o
    }
    var ei = function(e, t, r) {
            var n = Q(e, t + 28),
                i = en(e.subarray(t + 46, t + 46 + n), !(2048 & Q(e, t + 8))),
                o = t + 46 + n,
                a = G(e, t + 20),
                u = r && 4294967295 == a ? eo(e, o) : [a, G(e, t + 24), G(e, t + 42)],
                s = u[0],
                l = u[1],
                c = u[2];
            return [Q(e, t + 10), s, l, i, o + Q(e, t + 30) + Q(e, t + 32), c]
        },
        eo = function(e, t) {
            for (; 1 != Q(e, t); t += 4 + Q(e, t + 2));
            return [Y(e, t + 12), Y(e, t + 4), Y(e, t + 20)]
        },
        ea = "function" == typeof queueMicrotask ? queueMicrotask : "function" == typeof setTimeout ? setTimeout : function(e) {
            e()
        },
        eu = class extends Error {
            constructor(e) {
                var t;
                super(e[0].message), (0, c._)(this, "issues", void 0), this.name = "ValiError", this.issues = e
            }
        };

    function es(e, t, r, n) {
        if (!t || !t.length) return {
            output: e
        };
        let i, o, a = e;
        for (let e of t) {
            let t = e(a);
            if (t.issue) {
                var u, s, l;
                let e = (s = i = i || {
                    reason: n,
                    origin: null == (u = r) ? void 0 : u.origin,
                    abortEarly: null == u ? void 0 : u.abortEarly,
                    abortPipeEarly: null == u ? void 0 : u.abortPipeEarly
                }, l = t.issue, {
                    reason: null == s ? void 0 : s.reason,
                    validation: l.validation,
                    origin: (null == s ? void 0 : s.origin) || "value",
                    message: l.message,
                    input: l.input,
                    abortEarly: null == s ? void 0 : s.abortEarly,
                    abortPipeEarly: null == s ? void 0 : s.abortPipeEarly
                });
                if (o ? o.push(e) : o = [e], i.abortEarly || i.abortPipeEarly) break
            } else a = t.output
        }
        return o ? {
            issues: o
        } : {
            output: a
        }
    }

    function el(e, t) {
        return e && "string" != typeof e ? [void 0, e] : [e, t]
    }

    function ec(e, t, r, n, i, o) {
        return {
            issues: [{
                reason: t,
                validation: r,
                origin: (null == e ? void 0 : e.origin) || "value",
                message: n,
                input: i,
                issues: o,
                abortEarly: null == e ? void 0 : e.abortEarly,
                abortPipeEarly: null == e ? void 0 : e.abortPipeEarly
            }]
        }
    }

    function ed(e, t, r) {
        let [n, i] = el(t, r);
        return {
            schema: "array",
            array: {
                item: e
            },
            async: !1,
            _parse(t, r) {
                if (!Array.isArray(t)) return ec(r, "type", "array", n || "Invalid type", t);
                let o, a = [];
                for (let n = 0; n < t.length; n++) {
                    let i = t[n],
                        u = e._parse(i, r);
                    if (u.issues) {
                        let e = {
                            schema: "array",
                            input: t,
                            key: n,
                            value: i
                        };
                        for (let t of u.issues) t.path ? t.path.unshift(e) : t.path = [e], null == o || o.push(t);
                        if (o || (o = u.issues), null != r && r.abortEarly) break
                    } else a.push(u.output)
                }
                return o ? {
                    issues: o
                } : es(a, i, r, "array")
            }
        }
    }

    function ef(e, t) {
        let [r, n] = el(e, t);
        return {
            schema: "boolean",
            async: !1,
            _parse: (e, t) => "boolean" != typeof e ? ec(t, "type", "boolean", r || "Invalid type", e) : es(e, n, t, "boolean")
        }
    }

    function eh(e, t) {
        return {
            schema: "literal",
            literal: e,
            async: !1,
            _parse: (r, n) => r !== e ? ec(n, "type", "literal", t || "Invalid type", r) : {
                output: r
            }
        }
    }

    function ep(e, t) {
        let [r, n] = el(e, t);
        return {
            schema: "number",
            async: !1,
            _parse: (e, t) => "number" != typeof e ? ec(t, "type", "number", r || "Invalid type", e) : es(e, n, t, "number")
        }
    }

    function ev(e, t, r) {
        let [n, i] = el(t, r), o;
        return {
            schema: "object",
            object: e,
            async: !1,
            _parse(t, r) {
                if (!t || "object" != typeof t) return ec(r, "type", "object", n || "Invalid type", t);
                o = o || Object.entries(e);
                let a, u = {};
                for (let [e, n] of o) {
                    let i = t[e],
                        o = n._parse(i, r);
                    if (o.issues) {
                        let n = {
                            schema: "object",
                            input: t,
                            key: e,
                            value: i
                        };
                        for (let e of o.issues) e.path ? e.path.unshift(n) : e.path = [n], null == a || a.push(e);
                        if (a || (a = o.issues), null != r && r.abortEarly) break
                    } else u[e] = o.output
                }
                return a ? {
                    issues: a
                } : es(u, i, r, "object")
            }
        }
    }

    function eD(e) {
        return {
            schema: "optional",
            wrapped: e,
            async: !1,
            _parse: (t, r) => void 0 === t ? {
                output: t
            } : e._parse(t, r)
        }
    }

    function eg(e, t) {
        let [r, n] = el(e, t);
        return {
            schema: "string",
            async: !1,
            _parse: (e, t) => "string" != typeof e ? ec(t, "type", "string", r || "Invalid type", e) : es(e, n, t, "string")
        }
    }
    var eC = ["__proto__", "prototype", "constructor"];

    function em(e, t, r, n) {
        let [i, o, a] = function(e, t, r) {
            if ("object" == typeof e && !Array.isArray(e)) {
                let [n, i] = el(t, r);
                return [e, n, i]
            }
            let [n, i] = el(e, t);
            return [void 0, n, i]
        }(t, r, n);
        return {
            schema: "tuple",
            tuple: {
                items: e,
                rest: i
            },
            async: !1,
            _parse(t, r) {
                if (!Array.isArray(t) || !i && e.length !== t.length || i && e.length > t.length) return ec(r, "type", "tuple", o || "Invalid type", t);
                let n, u = [];
                for (let i = 0; i < e.length; i++) {
                    let o = t[i],
                        a = e[i]._parse(o, r);
                    if (a.issues) {
                        let e = {
                            schema: "tuple",
                            input: t,
                            key: i,
                            value: o
                        };
                        for (let t of a.issues) t.path ? t.path.unshift(e) : t.path = [e], null == n || n.push(t);
                        if (n || (n = a.issues), null != r && r.abortEarly) break
                    } else u[i] = a.output
                }
                if (i)
                    for (let o = e.length; o < t.length; o++) {
                        let e = t[o],
                            a = i._parse(e, r);
                        if (a.issues) {
                            let i = {
                                schema: "tuple",
                                input: t,
                                key: o,
                                value: e
                            };
                            for (let e of a.issues) e.path ? e.path.unshift(i) : e.path = [i], null == n || n.push(e);
                            if (n || (n = a.issues), null != r && r.abortEarly) break
                        } else u[o] = a.output
                    }
                return n ? {
                    issues: n
                } : es(u, a, r, "tuple")
            }
        }
    }

    function ey(e, t) {
        return {
            schema: "union",
            union: e,
            async: !1,
            _parse(r, n) {
                let i, o;
                for (let t of e) {
                    let e = t._parse(r, n);
                    if (e.issues) {
                        if (i)
                            for (let t of e.issues) i.push(t);
                        else i = e.issues
                    } else {
                        o = [e.output];
                        break
                    }
                }
                return o ? {
                    output: o[0]
                } : ec(n, "type", "union", t || "Invalid type", r, i)
            }
        }
    }

    function eE(e, t, r) {
        let [n, i] = el(t, r);
        return ev(e.reduce((e, t) => ({
            ...e,
            ...t.object
        }), {}), n, i)
    }

    function eB(e, t) {
        return r => r > e ? {
            issue: {
                validation: "max_value",
                message: t || "Invalid value",
                input: r
            }
        } : {
            output: r
        }
    }

    function eb(e, t) {
        return r => r < e ? {
            issue: {
                validation: "min_value",
                message: t || "Invalid value",
                input: r
            }
        } : {
            output: r
        }
    }
    var eA = Object.create,
        ew = Object.defineProperty,
        eF = Object.getOwnPropertyDescriptor,
        e_ = Object.getOwnPropertyNames,
        eO = Object.getPrototypeOf,
        ex = Object.prototype.hasOwnProperty,
        ek = (e, t, r) => t in e ? ew(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        eP = (e, t) => function() {
            return t || (0, e[e_(e)[0]])((t = {
                exports: {}
            }).exports, t), t.exports
        },
        eS = (e, t, r, n) => {
            if (t && "object" == typeof t || "function" == typeof t)
                for (let i of e_(t)) ex.call(e, i) || i === r || ew(e, i, {
                    get: () => t[i],
                    enumerable: !(n = eF(t, i)) || n.enumerable
                });
            return e
        },
        eT = (e, t, r) => (ek(e, "symbol" != typeof t ? t + "" : t, r), r),
        ej = eP({
            "../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.copy = void 0;
                e.copy = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e.width - r,
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e.height - n,
                        a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                        u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
                    if (r |= 0, n |= 0, o |= 0, a |= 0, u |= 0, (i |= 0) <= 0 || o <= 0) return;
                    let s = new Uint32Array(e.data.buffer),
                        l = new Uint32Array(t.data.buffer);
                    for (let c = 0; c < o; c++) {
                        let o = n + c;
                        if (o < 0 || o >= e.height) continue;
                        let d = u + c;
                        if (!(d < 0 || d >= t.height))
                            for (let n = 0; n < i; n++) {
                                let i = r + n;
                                if (i < 0 || i >= e.width) continue;
                                let u = a + n;
                                if (u < 0 || u >= t.width) continue;
                                let c = o * e.width + i;
                                l[d * t.width + u] = s[c]
                            }
                    }
                }
            }
        }),
        eM = eP({
            "../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.CreateImageFactory = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0, 0],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                    if (isNaN(t = Math.floor(t)) || t < 1) throw TypeError("channels should be a positive non-zero number");
                    if (!("length" in e) || e.length < t) throw TypeError("fill should be iterable with at least ".concat(t, " members"));
                    let r = (e = new Uint8ClampedArray(e).slice(0, t)).every(e => 0 === e);
                    return (n, i, o) => {
                        if (void 0 === n || void 0 === i) throw TypeError("Not enough arguments");
                        if (n = Math.floor(n), i = Math.floor(i), isNaN(n) || n < 1 || isNaN(i) || i < 1) throw TypeError("Index or size is negative or greater than the allowed amount");
                        let a = n * i * t;
                        if (void 0 === o && (o = new Uint8ClampedArray(a)), o instanceof Uint8ClampedArray) {
                            if (o.length !== a) throw TypeError("Index or size is negative or greater than the allowed amount");
                            if (!r)
                                for (let r = 0; r < i; r++)
                                    for (let i = 0; i < n; i++) {
                                        let a = (r * n + i) * t;
                                        for (let r = 0; r < t; r++) o[a + r] = e[r]
                                    }
                            return {
                                get width() {
                                    return n
                                },
                                get height() {
                                    return i
                                },
                                get data() {
                                    return o
                                }
                            }
                        }
                        throw TypeError("Expected data to be Uint8ClampedArray or undefined")
                    }
                }, e.createImage = e.CreateImageFactory()
            }
        }),
        eR = eP({
            "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.filters = void 0;
                var t = (e, t) => {
                        if (e <= -t || e >= t || 0 == e) return 0;
                        let r = e * Math.PI;
                        return Math.sin(r) / r * Math.sin(r / t) / (r / t)
                    },
                    r = e => Math.round(16383 * e);
                e.filters = (e, n, i, o, a) => {
                    let u = a ? 2 : 3,
                        s = 1 / i,
                        l = Math.min(1, i),
                        c = u / l,
                        d = new Int16Array((Math.floor((c + 1) * 2) + 2) * n),
                        f = 0;
                    for (let i = 0; i < n; i++) {
                        let a = (i + .5) * s + o,
                            h = Math.max(0, Math.floor(a - c)),
                            p = Math.min(e - 1, Math.ceil(a + c)),
                            v = p - h + 1,
                            D = new Float32Array(v),
                            g = new Int16Array(v),
                            C = 0,
                            m = 0;
                        for (let e = h; e <= p; e++) {
                            let r = t((e + .5 - a) * l, u);
                            C += r, D[m] = r, m++
                        }
                        let y = 0;
                        for (let e = 0; e < D.length; e++) {
                            let t = D[e] / C;
                            y += t, g[e] = r(t)
                        }
                        g[n >> 1] += r(1 - y);
                        let E = 0;
                        for (; E < g.length && 0 === g[E];) E++;
                        let B = g.length - 1;
                        for (; B > 0 && 0 === g[B];) B--;
                        let b = h + E,
                            A = B - E + 1;
                        d[f++] = b, d[f++] = A, d.set(g.subarray(E, B + 1), f), f += A
                    }
                    return d
                }
            }
        }),
        eI = eP({
            "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.convolve = void 0;
                e.convolve = (e, t, r, n, i, o) => {
                    let a = 0,
                        u = 0;
                    for (let s = 0; s < n; s++) {
                        let l = 0;
                        for (let r = 0; r < i; r++) {
                            let r = a + 4 * o[l++] | 0,
                                i = 0,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (let t = o[l++]; t > 0; t--) {
                                let t = o[l++];
                                i = i + t * e[r] | 0, s = s + t * e[r + 1] | 0, c = c + t * e[r + 2] | 0, d = d + t * e[r + 3] | 0, r = r + 4 | 0
                            }
                            t[u] = i + 8192 >> 14, t[u + 1] = s + 8192 >> 14, t[u + 2] = c + 8192 >> 14, t[u + 3] = d + 8192 >> 14, u = u + 4 * n | 0
                        }
                        u = (s + 1) * 4 | 0, a = (s + 1) * r * 4 | 0
                    }
                }
            }
        }),
        eL = eP({
            "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.lanczos2 = e.lanczos = void 0;
                var t = ej(),
                    r = eM(),
                    n = eR(),
                    i = eI(),
                    o = function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = t.width / e.width,
                            a = t.height / e.height,
                            u = n.filters(e.width, t.width, o, 0, r),
                            s = n.filters(e.height, t.height, a, 0, r),
                            l = new Uint8ClampedArray(t.width * e.height * 4);
                        i.convolve(e.data, l, e.width, e.height, t.width, u), i.convolve(l, t.data, e.height, t.width, t.height, s)
                    };
                e.lanczos = function(e, n) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e.width - i,
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e.height - a,
                        l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                        c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
                        d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : n.width - l,
                        f = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : n.height - c;
                    if (i |= 0, a |= 0, s |= 0, l |= 0, c |= 0, d |= 0, f |= 0, (u |= 0) <= 0 || s <= 0 || d <= 0 || f <= 0) return;
                    if (0 === i && 0 === a && u === e.width && s === e.height && 0 === l && 0 === c && d === n.width && f === n.height) {
                        o(e, n);
                        return
                    }
                    let h = r.createImage(u, s),
                        p = r.createImage(d, f);
                    t.copy(e, h, i, a), o(h, p), t.copy(p, n, 0, 0, p.width, p.height, l, c)
                };
                e.lanczos2 = function(e, n) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e.width - i,
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e.height - a,
                        l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                        c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
                        d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : n.width - l,
                        f = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : n.height - c;
                    if (i |= 0, a |= 0, s |= 0, l |= 0, c |= 0, d |= 0, f |= 0, (u |= 0) <= 0 || s <= 0 || d <= 0 || f <= 0) return;
                    if (0 === i && 0 === a && u === e.width && s === e.height && 0 === l && 0 === c && d === n.width && f === n.height) {
                        o(e, n, !0);
                        return
                    }
                    let h = r.createImage(u, s),
                        p = r.createImage(d, f);
                    t.copy(e, h, i, a), o(h, p, !0), t.copy(p, n, 0, 0, p.width, p.height, l, c)
                }
            }
        });
    var eN = (n = eN || {}, n.Bounce = "bounce", n.Normal = "normal", n),
        ez = {
            schema: "native_enum",
            nativeEnum: i = eN,
            async: !1,
            _parse: (e, t) => Object.values(i).includes(e) ? {
                output: e
            } : ec(t, "type", "native_enum", "Invalid type", e)
        },
        eW = ev({
            autoplay: eD(ef()),
            defaultTheme: eD(eg()),
            direction: eD(ey([eh(1), eh(-1)])),
            hover: eD(ef()),
            id: eg(),
            intermission: eD(ep()),
            loop: eD(ey([ef(), ep()])),
            playMode: eD(ez),
            speed: eD(ep()),
            themeColor: eD(eg())
        }),
        eq = ev({
            animations: ed(eg()),
            id: eg()
        }),
        eV = ev({
            activeAnimationId: eD(eg()),
            animations: ed(eW),
            author: eD(eg()),
            custom: eD(function(e, t, r, n) {
                let [i, o, a, u] = function(e, t, r, n) {
                    if ("object" == typeof t && !Array.isArray(t)) {
                        let [i, o] = el(r, n);
                        return [e, t, i, o]
                    }
                    let [i, o] = el(t, r);
                    return [eg(), e, i, o]
                }(e, t, void 0, void 0);
                return {
                    schema: "record",
                    record: {
                        key: i,
                        value: o
                    },
                    async: !1,
                    _parse(e, t) {
                        if (!e || "object" != typeof e) return ec(t, "type", "record", a || "Invalid type", e);
                        let r, n = {};
                        for (let [a, u] of Object.entries(e))
                            if (!eC.includes(a)) {
                                let s, l = i._parse(a, {
                                    origin: "key",
                                    abortEarly: null == t ? void 0 : t.abortEarly,
                                    abortPipeEarly: null == t ? void 0 : t.abortPipeEarly
                                });
                                if (l.issues) {
                                    for (let t of (s = {
                                            schema: "record",
                                            input: e,
                                            key: a,
                                            value: u
                                        }, l.issues)) t.path = [s], null == r || r.push(t);
                                    if (r || (r = l.issues), null != t && t.abortEarly) break
                                }
                                let c = o._parse(u, t);
                                if (c.issues) {
                                    for (let t of (s = s || {
                                            schema: "record",
                                            input: e,
                                            key: a,
                                            value: u
                                        }, c.issues)) t.path ? t.path.unshift(s) : t.path = [s], null == r || r.push(t);
                                    if (r || (r = c.issues), null != t && t.abortEarly) break
                                }
                                l.issues || c.issues || (n[l.output] = c.output)
                            } return r ? {
                            issues: r
                        } : es(n, u, t, "record")
                    }
                }
            }(eg(), function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return {
                    schema: "any",
                    async: !1,
                    _parse: (t, r) => es(t, e, r, "any")
                }
            }())),
            description: eD(eg()),
            generator: eD(eg()),
            keywords: eD(eg()),
            revision: eD(ep()),
            themes: eD(ed(eq)),
            states: eD(ed(eg())),
            version: eD(eg())
        }),
        eU = function(e, t, r, n) {
            let [i, o] = el(void 0, void 0);
            return ev(Object.entries(e.object).reduce((e, r) => {
                let [n, i] = r;
                return t.includes(n) ? e : {
                    ...e,
                    [n]: i
                }
            }, {}), i, o)
        }(eW, ["id"]),
        eH = ev({
            state: eg()
        }),
        eJ = eE([eH, ev({
            ms: ep()
        })]),
        eK = eE([eH, ev({
            count: ep()
        })]),
        e$ = eE([eH, ev({
            threshold: eD(ed(ep([eb(0), eB(1)])))
        })]),
        eX = ev({
            onAfter: eD(eJ),
            onClick: eD(eH),
            onComplete: eD(eH),
            onEnter: eD(eK),
            onMouseEnter: eD(eH),
            onMouseLeave: eD(eH),
            onShow: eD(e$)
        }),
        eQ = eE([eU, ev({
            playOnScroll: eD(em([ep([eb(0), eB(1)]), ep([eb(0), eB(1)])])),
            segments: eD(ey([em([ep(), ep()]), eg()]))
        })]);
    eE([eX, ev({
        animationId: eD(eg()),
        playbackSettings: eQ
    })]);
    var eG = {
            jpeg: "image/jpeg",
            png: "image/png",
            gif: "image/gif",
            bmp: "image/bmp",
            svg: "image/svg+xml",
            webp: "image/webp",
            mpeg: "audio/mpeg",
            mp3: "audio/mp3"
        },
        eY = {
            jpeg: [255, 216, 255],
            png: [137, 80, 78, 71, 13, 10, 26, 10],
            gif: [71, 73, 70],
            bmp: [66, 77],
            webp: [82, 73, 70, 70, 87, 69, 66, 80],
            svg: [60, 63, 120],
            mp3: [73, 68, 51, 3, 0, 0, 0, 0],
            mpeg: [73, 68, 51, 3, 0, 0, 0, 0]
        },
        eZ = e => {
            let t = null,
                r = [];
            if (!e) return null;
            let n = e.substring(e.indexOf(",") + 1);
            t = typeof window > "u" ? d.from(n, "base64").toString("binary") : atob(n);
            let i = new Uint8Array(t.length);
            for (let e = 0; e < t.length; e += 1) i[e] = t.charCodeAt(e);
            for (let e in r = Array.from(i.subarray(0, 8)), eY) {
                let t = eY[e];
                if (t && r.every((e, r) => e === t[r])) return eG[e]
            }
            return null
        },
        e0 = class extends Error {
            constructor(e, t) {
                super(e), eT(this, "code"), this.name = "[dotlottie-js]", this.code = t
            }
        };

    function e1(e) {
        let t;
        if (typeof window > "u") t = d.from(e).toString("base64");
        else {
            let r = Array.prototype.map.call(e, e => String.fromCharCode(e)).join("");
            t = window.btoa(r)
        }
        return "data:".concat(eZ(t), ";base64,").concat(t)
    }

    function e2(e) {
        return "w" in e && "h" in e && !("xt" in e) && "p" in e
    }

    function e3(e) {
        return !("h" in e) && !("w" in e) && "p" in e && "e" in e && "u" in e && "id" in e
    }
    async function e7(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0;
        if (!(e instanceof Uint8Array)) throw new e0("DotLottie not found", "INVALID_DOTLOTTIE");
        return await new Promise((r, n) => {
            ! function(e, t, r) {
                r || (r = t, t = {}), "function" != typeof r && L(7);
                var n = [],
                    i = function() {
                        for (var e = 0; e < n.length; ++e) n[e]()
                    },
                    o = {},
                    a = function(e, t) {
                        ea(function() {
                            r(e, t)
                        })
                    };
                ea(function() {
                    a = r
                });
                for (var u = e.length - 22; 101010256 != G(e, u); --u)
                    if (!u || e.length - u > 65558) return a(L(13, 0, 1), null), i;
                var s = Q(e, u + 8);
                if (s) {
                    var l = s,
                        c = G(e, u + 16),
                        d = 4294967295 == c || 65535 == l;
                    if (d) {
                        var f = G(e, u - 12);
                        (d = 101075792 == G(e, f)) && (l = s = G(e, f + 32), c = G(e, f + 48))
                    }
                    for (var h = t && t.filter, v = 0; v < l; ++v) ! function(t) {
                        var r = ei(e, c, d),
                            u = r[0],
                            l = r[1],
                            f = r[2],
                            v = r[3],
                            D = r[4],
                            g = r[5],
                            C = (y = e, (E = g) + 30 + Q(y, E + 26) + Q(y, E + 28));
                        c = D;
                        var m = function(e, t) {
                            e ? (i(), a(e, null)) : (t && (o[v] = t), --s || a(null, o))
                        };
                        if (!h || h({
                                name: v,
                                size: l,
                                originalSize: f,
                                compression: u
                            })) {
                            if (u) {
                                if (8 == u) {
                                    var y, E, B, b, A, w = e.subarray(C, C + l);
                                    if (l < 32e4) try {
                                        m(null, Z(w, {
                                            out: new p(f)
                                        }))
                                    } catch (e) {
                                        m(e, null)
                                    } else {
                                        ;
                                        n.push((B = w, b = {
                                            size: f
                                        }, (A = m) || (A = b, b = {}), "function" != typeof A && L(7), X(B, b, [J], function(e) {
                                            return K(Z(e.data[0], $(e.data[1])))
                                        }, 1, A)))
                                    }
                                } else m(L(14, "unknown compression type " + u, 1), null)
                            } else m(null, R(e, C, C + l))
                        } else m(null, null)
                    }(0)
                } else a(null, {});
            }(e, {
                filter: t
            }, (e, t) => {
                e && n(e), r(t)
            })
        })
    }
    async function e4(e, t, r) {
        if (!(e instanceof Uint8Array)) throw new e0("DotLottie not found", "INVALID_DOTLOTTIE");
        return (await e7(e, e => e.name === t && (!r || r(e))))[t]
    }
    async function e5(e) {
        let t = "manifest.json",
            r = (await e7(e, e => e.name === t))[t];
        if (!(typeof r > "u")) return JSON.parse(en(r, !1))
    }
    async function e8(e) {
        var t, r, n, i;
        let o;
        if (!(e instanceof Uint8Array)) return {
            success: !1,
            error: "DotLottie not found"
        };
        let a = await e5(e);
        if (typeof a > "u") return {
            success: !1,
            error: "Invalid .lottie file, manifest.json is missing"
        };
        let u = (t = eV, r = a, (o = t._parse(r, void 0)).issues ? {
            success: !1,
            error: new eu(o.issues),
            issues: o.issues
        } : {
            success: !0,
            data: o.output,
            output: o.output
        });
        return u.success ? {
            success: !0
        } : {
            success: !1,
            error: "Invalid .lottie file, manifest.json structure is invalid, ".concat(JSON.stringify((Array.isArray(i = u.error) ? i : i.issues).reduce((e, t) => {
                if (t.path) {
                    let r = t.path.map(e => {
                        let {
                            key: t
                        } = e;
                        return t
                    }).join(".");
                    e.nested[r] = [...e.nested[r] || [], t.message]
                } else e.root = [...e.root || [], t.message];
                return e
            }, {
                nested: {}
            }).nested, null, 2))
        }
    }
    async function e9(e) {
        let t = new Uint8Array(e),
            r = await e8(t);
        if (r.error) throw new e0(r.error, "INVALID_DOTLOTTIE");
        return t
    }
    async function e6(e, t) {
        let r = await e7(e, e => {
                let r = e.name.replace("audio/", "");
                return e.name.startsWith("audio/") && (!t || t({
                    ...e,
                    name: r
                }))
            }),
            n = {};
        for (let e in r) {
            let t = r[e];
            t instanceof Uint8Array && (n[e.replace("audio/", "")] = e1(t))
        }
        return n
    }
    async function te(e, t) {
        var r;
        let n = new Map;
        for (let [e, i] of Object.entries(t))
            for (let t of i.assets || [])
                if (e3(t)) {
                    let i = t.p;
                    n.has(i) || n.set(i, new Set), null == (r = n.get(i)) || r.add(e)
                } let i = await e6(e, e => n.has(e.name));
        for (let [e, r] of n) {
            let n = i[e];
            if (n)
                for (let i of r) {
                    let r = t[i];
                    for (let t of (null == r ? void 0 : r.assets) || []) e3(t) && t.p === e && (t.p = n, t.u = "", t.e = 1)
                }
        }
    }
    async function tt(e, t) {
        let r = await e7(e, e => {
                let r = e.name.replace("images/", "");
                return e.name.startsWith("images/") && (!t || t({
                    ...e,
                    name: r
                }))
            }),
            n = {};
        for (let e in r) {
            let t = r[e];
            t instanceof Uint8Array && (n[e.replace("images/", "")] = e1(t))
        }
        return n
    }
    async function tr(e, t) {
        var r;
        let n = new Map;
        for (let [e, i] of Object.entries(t))
            for (let t of i.assets || [])
                if (e2(t)) {
                    let i = t.p;
                    n.has(i) || n.set(i, new Set), null == (r = n.get(i)) || r.add(e)
                } let i = await tt(e, e => n.has(e.name));
        for (let [e, r] of n) {
            let n = i[e];
            if (n)
                for (let i of r) {
                    let r = t[i];
                    for (let t of (null == r ? void 0 : r.assets) || []) e2(t) && t.p === e && (t.p = n, t.u = "", t.e = 1)
                }
        }
    }
    async function tn(e, t) {
        let {
            inlineAssets: r
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments.length > 3 ? arguments[3] : void 0, i = await e4(e, "animations/".concat(t, ".json"), n);
        if (typeof i > "u") return;
        let o = JSON.parse(en(i, !1));
        if (!r) return o;
        let a = {
            [t]: o
        };
        return await tr(e, a), await te(e, a), o
    }
    async function ti(e, t, r) {
        let n = await e4(e, "themes/".concat(t, ".lss"), r);
        if (!(typeof n > "u")) return en(n, !1)
    }
    async function to(e, t) {
        let r = {},
            n = await e7(e, e => {
                let r = e.name.replace("states/", "").replace(".json", "");
                return e.name.startsWith("states/") && (!t || t({
                    ...e,
                    name: r
                }))
            });
        for (let e in n) {
            let t = n[e];
            t instanceof Uint8Array && (r[e.replace("states/", "").replace(".json", "")] = en(t, !1))
        }
        return r
    }
    async function ta(e, t, r) {
        let n = await e4(e, "states/".concat(t, ".json"), r);
        return typeof n > "u" ? void 0 : JSON.parse(en(n, !1))
    }

    function tu(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dotLottie-common";
        return Error("[".concat(t, "]: ").concat(e))
    }

    function ts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dotLottie-common";
        for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        console.error("[".concat(t, "]:"), e, ...n)
    }

    function tl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dotLottie-common";
        for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        console.warn("[".concat(t, "]:"), e, ...n)
    }

    function tc() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.trim(),
            r = t.lastIndexOf("/"),
            n = t.substring(r + 1),
            i = n.indexOf(".");
        return -1 !== i ? n.substring(0, i) : n
    }

    function td(e) {
        return ["v", "ip", "op", "layers", "fr", "w", "h"].every(t => Object.prototype.hasOwnProperty.call(e, t))
    }

    function tf(e) {
        let t = e.assets;
        return !!t && t.some(e => e3(e))
    }

    function th(e) {
        try {
            let t = JSON.parse(e);
            return td(t)
        } catch {
            return !1
        }
    }

    function tp(e, t) {
        let r = Object.keys(e).find(r => e[r] === t);
        if (void 0 === r) throw Error("Value not found in the object.");
        return r
    }
    a = eL(), s = null != a ? eA(eO(a)) : {}, eS(a && a.__esModule ? s : ew(s, "default", {
        value: a,
        enumerable: !0
    }), a)
}