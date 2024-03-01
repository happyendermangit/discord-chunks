function(e, t, r) {
    "use strict";

    function n(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(e) {
            return "'" + e + "'"
        }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
    }

    function i(e) {
        return !!e && !!e[q]
    }

    function o(e) {
        var t;
        return !!e && (function(e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return r === Object || "function" == typeof r && Function.toString.call(r) === V
        }(e) || Array.isArray(e) || !!e[W] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[W]) || c(e) || d(e))
    }

    function a(e, t, r) {
        void 0 === r && (r = !1), 0 === u(e) ? (r ? Object.keys : U)(e).forEach(function(n) {
            r && "symbol" == typeof n || t(n, e[n], e)
        }) : e.forEach(function(r, n) {
            return t(n, r, e)
        })
    }

    function u(e) {
        var t = e[q];
        return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : c(e) ? 2 : d(e) ? 3 : 0
    }

    function s(e, t) {
        return 2 === u(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
    }
    r.r(t), r.d(t, {
        createDraft: function() {
            return G
        },
        finishDraft: function() {
            return Y
        },
        isDraft: function() {
            return i
        },
        produce: function() {
            return Q
        }
    }), r("70102"), r("222007"), r("424973"), r("843762"), r("426094");

    function l(e, t, r) {
        var n = u(e);
        2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
    }

    function c(e) {
        return I && e instanceof Map
    }

    function d(e) {
        return L && e instanceof Set
    }

    function f(e) {
        return e.o || e.t
    }

    function h(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = H(e);
        delete t[q];
        for (var r = U(t), n = 0; n < r.length; n++) {
            var i = r[n],
                o = t[i];
            !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[i] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: e[i]
            })
        }
        return Object.create(Object.getPrototypeOf(e), t)
    }

    function p(e, t) {
        return void 0 === t && (t = !1), D(e) || i(e) || !o(e) || (u(e) > 1 && (e.set = e.add = e.clear = e.delete = v), Object.freeze(e), t && a(e, function(e, t) {
            return p(t, !0)
        }, !0)), e
    }

    function v() {
        n(2)
    }

    function D(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e)
    }

    function g(e) {
        var t = J[e];
        return t || n(18, e), t
    }

    function C() {
        return M
    }

    function m(e, t) {
        t && (g("Patches"), e.u = [], e.s = [], e.v = t)
    }

    function y(e) {
        E(e), e.p.forEach(b), e.p = null
    }

    function E(e) {
        e === M && (M = e.l)
    }

    function B(e) {
        return M = {
            p: [],
            l: M,
            h: e,
            m: !0,
            _: 0
        }
    }

    function b(e) {
        var t = e[q];
        0 === t.i || 1 === t.i ? t.j() : t.g = !0
    }

    function A(e, t) {
        t._ = t.p.length;
        var r = t.p[0],
            i = void 0 !== e && e !== r;
        return t.h.O || g("ES5").S(t, e, i), i ? (r[q].P && (y(t), n(4)), o(e) && (e = w(t, e), t.l || _(t, e)), t.u && g("Patches").M(r[q].t, e, t.u, t.s)) : e = w(t, r, []), y(t), t.u && t.v(t.u, t.s), e !== z ? e : void 0
    }

    function w(e, t, r) {
        if (D(t)) return t;
        var n = t[q];
        if (!n) return a(t, function(i, o) {
            return F(e, n, t, i, o, r)
        }, !0), t;
        if (n.A !== e) return t;
        if (!n.P) return _(e, n.t, !0), n.t;
        if (!n.I) {
            n.I = !0, n.A._--;
            var i = 4 === n.i || 5 === n.i ? n.o = h(n.k) : n.o,
                o = i,
                u = !1;
            3 === n.i && (o = new Set(i), i.clear(), u = !0), a(o, function(t, o) {
                return F(e, n, i, t, o, r, u)
            }), _(e, i, !1), r && e.u && g("Patches").N(n, r, e.u, e.s)
        }
        return n.o
    }

    function F(e, t, r, n, a, u, c) {
        if (i(a)) {
            var d = w(e, a, u && t && 3 !== t.i && !s(t.R, n) ? u.concat(n) : void 0);
            if (l(r, n, d), !i(d)) return;
            e.m = !1
        } else c && r.add(a);
        if (o(a) && !D(a)) {
            if (!e.h.D && e._ < 1) return;
            w(e, a), t && t.A.l || _(e, a)
        }
    }

    function _(e, t, r) {
        void 0 === r && (r = !1), !e.l && e.h.D && e.m && p(t, r)
    }

    function O(e, t) {
        var r = e[q];
        return (r ? f(r) : e)[t]
    }

    function x(e, t) {
        if (t in e)
            for (var r = Object.getPrototypeOf(e); r;) {
                var n = Object.getOwnPropertyDescriptor(r, t);
                if (n) return n;
                r = Object.getPrototypeOf(r)
            }
    }

    function k(e) {
        e.P || (e.P = !0, e.l && k(e.l))
    }

    function P(e) {
        e.o || (e.o = h(e.t))
    }

    function S(e, t, r) {
        var n, i, o, a, u, s, l, f, h, p = c(t) ? g("MapSet").F(t, r) : d(t) ? g("MapSet").T(t, r) : e.O ? (n = t, i = r, u = a = {
            i: (o = Array.isArray(n)) ? 1 : 0,
            A: i ? i.A : M,
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: n,
            k: null,
            o: null,
            j: null,
            C: !1
        }, s = K, o && (u = [a], s = $), f = (l = Proxy.revocable(u, s)).revoke, h = l.proxy, a.k = h, a.j = f, h) : g("ES5").J(t, r);
        return (r ? r.A : M).p.push(p), p
    }

    function T(e, t) {
        switch (t) {
            case 2:
                return new Map(e);
            case 3:
                return Array.from(e)
        }
        return h(e)
    }
    var j, M, R = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        I = "undefined" != typeof Map,
        L = "undefined" != typeof Set,
        N = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
        z = R ? Symbol.for("immer-nothing") : ((j = {})["immer-nothing"] = !0, j),
        W = R ? Symbol.for("immer-draftable") : "__$immer_draftable",
        q = R ? Symbol.for("immer-state") : "__$immer_state",
        V = "" + Object.prototype.constructor,
        U = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : Object.getOwnPropertyNames,
        H = Object.getOwnPropertyDescriptors || function(e) {
            var t = {};
            return U(e).forEach(function(r) {
                t[r] = Object.getOwnPropertyDescriptor(e, r)
            }), t
        },
        J = {},
        K = {
            get: function(e, t) {
                if (t === q) return e;
                var r, n, i, a = f(e);
                if (!s(a, t)) {
                    ;
                    return r = e, (i = x(a, t)) ? "value" in i ? i.value : null === (n = i.get) || void 0 === n ? void 0 : n.call(r.k) : void 0
                }
                var u = a[t];
                return e.I || !o(u) ? u : u === O(e.t, t) ? (P(e), e.o[t] = S(e.A.h, u, e)) : u
            },
            has: function(e, t) {
                return t in f(e)
            },
            ownKeys: function(e) {
                return Reflect.ownKeys(f(e))
            },
            set: function(e, t, r) {
                var n = x(f(e), t);
                if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
                if (!e.P) {
                    var i, o, a = O(f(e), t),
                        u = null == a ? void 0 : a[q];
                    if (u && u.t === r) return e.o[t] = r, e.R[t] = !1, !0;
                    if (((i = r) === (o = a) ? 0 !== i || 1 / i == 1 / o : i != i && o != o) && (void 0 !== r || s(e.t, t))) return !0;
                    P(e), k(e)
                }
                return e.o[t] === r && (void 0 !== r || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0
            },
            deleteProperty: function(e, t) {
                return void 0 !== O(e.t, t) || t in e.t ? (e.R[t] = !1, P(e), k(e)) : delete e.R[t], e.o && delete e.o[t], !0
            },
            getOwnPropertyDescriptor: function(e, t) {
                var r = f(e),
                    n = Reflect.getOwnPropertyDescriptor(r, t);
                return n ? {
                    writable: !0,
                    configurable: 1 !== e.i || "length" !== t,
                    enumerable: n.enumerable,
                    value: r[t]
                } : n
            },
            defineProperty: function() {
                n(11)
            },
            getPrototypeOf: function(e) {
                return Object.getPrototypeOf(e.t)
            },
            setPrototypeOf: function() {
                n(12)
            }
        },
        $ = {};
    a(K, function(e, t) {
        $[e] = function() {
            return arguments[0] = arguments[0][0], t.apply(this, arguments)
        }
    }), $.deleteProperty = function(e, t) {
        return $.set.call(this, e, t, void 0)
    }, $.set = function(e, t, r) {
        return K.set.call(this, e[0], t, r, e[0])
    };
    var X = new(function() {
            function e(e) {
                var t = this;
                this.O = N, this.D = !0, this.produce = function(e, r, i) {
                    if ("function" == typeof e && "function" != typeof r) {
                        var a, u = r;
                        return r = e,
                            function(e) {
                                var n = this;
                                void 0 === e && (e = u);
                                for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                                return t.produce(e, function(e) {
                                    var t;
                                    return (t = r).call.apply(t, [n, e].concat(o))
                                })
                            }
                    }
                    if ("function" != typeof r && n(6), void 0 !== i && "function" != typeof i && n(7), o(e)) {
                        var s = B(t),
                            l = S(t, e, void 0),
                            c = !0;
                        try {
                            a = r(l), c = !1
                        } finally {
                            c ? y(s) : E(s)
                        }
                        return "undefined" != typeof Promise && a instanceof Promise ? a.then(function(e) {
                            return m(s, i), A(e, s)
                        }, function(e) {
                            throw y(s), e
                        }) : (m(s, i), A(a, s))
                    }
                    if (!e || "object" != typeof e) {
                        if (void 0 === (a = r(e)) && (a = e), a === z && (a = void 0), t.D && p(a, !0), i) {
                            var d = [],
                                f = [];
                            g("Patches").M(e, a, d, f), i(d, f)
                        }
                        return a
                    }
                    n(21, e)
                }, this.produceWithPatches = function(e, r) {
                    if ("function" == typeof e) return function(r) {
                        for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                        return t.produceWithPatches(r, function(t) {
                            return e.apply(void 0, [t].concat(i))
                        })
                    };
                    var n, i, o = t.produce(e, r, function(e, t) {
                        n = e, i = t
                    });
                    return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(e) {
                        return [e, n, i]
                    }) : [o, n, i]
                }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
            }
            var t = e.prototype;
            return t.createDraft = function(e) {
                o(e) || n(8), i(e) && (i(t = e) || n(22, t), e = function e(t) {
                    if (!o(t)) return t;
                    var r, n = t[q],
                        i = u(t);
                    if (n) {
                        if (!n.P && (n.i < 4 || !g("ES5").K(n))) return n.t;
                        n.I = !0, r = T(t, i), n.I = !1
                    } else r = T(t, i);
                    return a(r, function(t, i) {
                        var o, a;
                        n && (o = n.t, a = t, (2 === u(o) ? o.get(a) : o[a]) === i) || l(r, t, e(i))
                    }), 3 === i ? new Set(r) : r
                }(t));
                var t, r = B(this),
                    s = S(this, e, void 0);
                return s[q].C = !0, E(r), s
            }, t.finishDraft = function(e, t) {
                var r = (e && e[q]).A;
                return m(r, t), A(void 0, r)
            }, t.setAutoFreeze = function(e) {
                this.D = e
            }, t.setUseProxies = function(e) {
                e && !N && n(20), this.O = e
            }, t.applyPatches = function(e, t) {
                for (r = t.length - 1; r >= 0; r--) {
                    var r, n = t[r];
                    if (0 === n.path.length && "replace" === n.op) {
                        e = n.value;
                        break
                    }
                }
                r > -1 && (t = t.slice(r + 1));
                var o = g("Patches").$;
                return i(e) ? o(e, t) : this.produce(e, function(e) {
                    return o(e, t)
                })
            }, e
        }()),
        Q = X.produce,
        G = (X.produceWithPatches.bind(X), X.setAutoFreeze.bind(X), X.setUseProxies.bind(X), X.applyPatches.bind(X), X.createDraft.bind(X)),
        Y = X.finishDraft.bind(X)
}