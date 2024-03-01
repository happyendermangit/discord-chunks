function(e, t, n) {
    n("222007"), n("781738"), n("426094"), n("70102"), n("424973");
    var r = "function" == typeof Map && Map.prototype,
        a = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        o = r && a && "function" == typeof a.get ? a.get : null,
        i = r && Map.prototype.forEach,
        s = "function" == typeof Set && Set.prototype,
        u = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        l = s && u && "function" == typeof u.get ? u.get : null,
        c = s && Set.prototype.forEach,
        d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
        f = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
        p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
        h = Boolean.prototype.valueOf,
        m = Object.prototype.toString,
        y = Function.prototype.toString,
        _ = String.prototype.match,
        g = String.prototype.slice,
        v = String.prototype.replace,
        b = String.prototype.toUpperCase,
        M = String.prototype.toLowerCase,
        w = RegExp.prototype.test,
        k = Array.prototype.concat,
        L = Array.prototype.join,
        D = Array.prototype.slice,
        T = Math.floor,
        S = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
        Y = Object.getOwnPropertySymbols,
        x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
        O = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
        E = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === O ? "object" : "symbol") ? Symbol.toStringTag : null,
        P = Object.prototype.propertyIsEnumerable,
        j = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function C(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || w.call(/e/, t)) return t;
        var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if ("number" == typeof e) {
            var r = e < 0 ? -T(-e) : T(e);
            if (r !== e) {
                var a = String(r),
                    o = g.call(t, a.length + 1);
                return v.call(a, n, "$&_") + "." + v.call(v.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return v.call(t, n, "$&_")
    }
    var H = n("246129"),
        F = H.custom,
        A = z(F) ? F : null;

    function I(e, t, n) {
        var r = "double" === (n.quoteStyle || t) ? '"' : "'";
        return r + e + r
    }
    e.exports = function e(t, r, a, s) {
        var u = r || {};
        if (B(u, "quoteStyle") && "single" !== u.quoteStyle && "double" !== u.quoteStyle) throw TypeError('option "quoteStyle" must be "single" or "double"');
        if (B(u, "maxStringLength") && ("number" == typeof u.maxStringLength ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0 : null !== u.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = !B(u, "customInspect") || u.customInspect;
        if ("boolean" != typeof m && "symbol" !== m) throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (B(u, "indent") && null !== u.indent && "	" !== u.indent && !(parseInt(u.indent, 10) === u.indent && u.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (B(u, "numericSeparator") && "boolean" != typeof u.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var b = u.numericSeparator;
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if ("boolean" == typeof t) return t ? "true" : "false";
        if ("string" == typeof t) return function e(t, n) {
            if (t.length > n.maxStringLength) {
                var r = t.length - n.maxStringLength;
                return e(g.call(t, 0, n.maxStringLength), n) + ("... " + r + " more character") + (r > 1 ? "s" : "")
            }
            return I(v.call(v.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, V), "single", n)
        }(t, u);
        if ("number" == typeof t) {
            if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
            var w = String(t);
            return b ? C(t, w) : w
        }
        if ("bigint" == typeof t) {
            var T = String(t) + "n";
            return b ? C(t, T) : T
        }
        var Y = void 0 === u.depth ? 5 : u.depth;
        if (void 0 === a && (a = 0), a >= Y && Y > 0 && "object" == typeof t) return N(t) ? "[Array]" : "[Object]";
        var F = function(e, t) {
            var n;
            if ("	" === e.indent) n = "	";
            else {
                if ("number" != typeof e.indent || !(e.indent > 0)) return null;
                n = L.call(Array(e.indent + 1), " ")
            }
            return {
                base: n,
                prev: L.call(Array(t + 1), n)
            }
        }(u, a);
        if (void 0 === s) s = [];
        else if (K(s, t) >= 0) return "[Circular]";

        function W(t, n, r) {
            if (n && (s = D.call(s)).push(n), r) {
                var o = {
                    depth: u.depth
                };
                return B(u, "quoteStyle") && (o.quoteStyle = u.quoteStyle), e(t, o, a + 1, s)
            }
            return e(t, u, a + 1, s)
        }
        if ("function" == typeof t && !R(t)) {
            var X = function(e) {
                    if (e.name) return e.name;
                    var t = _.call(y.call(e), /^function\s*([\w$]+)/);
                    return t ? t[1] : null
                }(t),
                Z = Q(t, W);
            return "[Function" + (X ? ": " + X : " (anonymous)") + "]" + (Z.length > 0 ? " { " + L.call(Z, ", ") + " }" : "")
        }
        if (z(t)) {
            var ee = O ? v.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : x.call(t);
            return "object" != typeof t || O ? ee : J(ee)
        }
        if (function(e) {
                return !!e && "object" == typeof e && (!!("undefined" != typeof HTMLElement && e instanceof HTMLElement) || "string" == typeof e.nodeName && "function" == typeof e.getAttribute)
            }(t)) {
            for (var et = "<" + M.call(String(t.nodeName)), en = t.attributes || [], er = 0; er < en.length; er++) et += " " + en[er].name + "=" + I(function(e) {
                return v.call(String(e), /"/g, "&quot;")
            }(en[er].value), "double", u);
            return et += ">", t.childNodes && t.childNodes.length && (et += "..."), et += "</" + M.call(String(t.nodeName)) + ">"
        }
        if (N(t)) {
            if (0 === t.length) return "[]";
            var ea = Q(t, W);
            return F && ! function(e) {
                for (var t = 0; t < e.length; t++)
                    if (K(e[t], "\n") >= 0) return !1;
                return !0
            }(ea) ? "[" + $(ea, F) + "]" : "[ " + L.call(ea, ", ") + " ]"
        }
        if (function(e) {
                return "[object Error]" === U(e) && (!E || !("object" == typeof e && E in e))
            }(t)) {
            var eo = Q(t, W);
            return "cause" in Error.prototype || !("cause" in t) || P.call(t, "cause") ? 0 === eo.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + L.call(eo, ", ") + " }" : "{ [" + String(t) + "] " + L.call(k.call("[cause]: " + W(t.cause), eo), ", ") + " }"
        }
        if ("object" == typeof t && m) {
            if (A && "function" == typeof t[A] && H) return H(t, {
                depth: Y - a
            });
            if ("symbol" !== m && "function" == typeof t.inspect) return t.inspect()
        }
        if (function(e) {
                if (!o || !e || "object" != typeof e) return !1;
                try {
                    o.call(e);
                    try {
                        l.call(e)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof Map
                } catch (e) {}
                return !1
            }(t)) {
            var ei = [];
            return i && i.call(t, function(e, n) {
                ei.push(W(n, t, !0) + " => " + W(e, t))
            }), G("Map", o.call(t), ei, F)
        }
        if (function(e) {
                if (!l || !e || "object" != typeof e) return !1;
                try {
                    l.call(e);
                    try {
                        o.call(e)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof Set
                } catch (e) {}
                return !1
            }(t)) {
            var es = [];
            return c && c.call(t, function(e) {
                es.push(W(e, t))
            }), G("Set", l.call(t), es, F)
        }
        if (function(e) {
                if (!d || !e || "object" != typeof e) return !1;
                try {
                    d.call(e, d);
                    try {
                        f.call(e, f)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof WeakMap
                } catch (e) {}
                return !1
            }(t)) return q("WeakMap");
        if (function(e) {
                if (!f || !e || "object" != typeof e) return !1;
                try {
                    f.call(e, f);
                    try {
                        d.call(e, d)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof WeakSet
                } catch (e) {}
                return !1
            }(t)) return q("WeakSet");
        if (function(e) {
                if (!p || !e || "object" != typeof e) return !1;
                try {
                    return p.call(e), !0
                } catch (e) {}
                return !1
            }(t)) return q("WeakRef");
        if (function(e) {
                return "[object Number]" === U(e) && (!E || !("object" == typeof e && E in e))
            }(t)) return J(W(Number(t)));
        if (function(e) {
                if (!e || "object" != typeof e || !S) return !1;
                try {
                    return S.call(e), !0
                } catch (e) {}
                return !1
            }(t)) return J(W(S.call(t)));
        if (function(e) {
                return "[object Boolean]" === U(e) && (!E || !("object" == typeof e && E in e))
            }(t)) return J(h.call(t));
        if (function(e) {
                return "[object String]" === U(e) && (!E || !("object" == typeof e && E in e))
            }(t)) return J(W(String(t)));
        if ("undefined" != typeof window && t === window) return "{ [object Window] }";
        if (t === n.g) return "{ [object globalThis] }";
        if (! function(e) {
                return "[object Date]" === U(e) && (!E || !("object" == typeof e && E in e))
            }(t) && !R(t)) {
            var eu = Q(t, W),
                el = j ? j(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                ec = t instanceof Object ? "" : "null prototype",
                ed = !el && E && Object(t) === t && E in t ? g.call(U(t), 8, -1) : ec ? "Object" : "",
                ef = (el || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (ed || ec ? "[" + L.call(k.call([], ed || [], ec || []), ": ") + "] " : "");
            return 0 === eu.length ? ef + "{}" : F ? ef + "{" + $(eu, F) + "}" : ef + "{ " + L.call(eu, ", ") + " }"
        }
        return String(t)
    };

    function N(e) {
        return "[object Array]" === U(e) && (!E || !("object" == typeof e && E in e))
    }

    function R(e) {
        return "[object RegExp]" === U(e) && (!E || !("object" == typeof e && E in e))
    }

    function z(e) {
        if (O) return e && "object" == typeof e && e instanceof Symbol;
        if ("symbol" == typeof e) return !0;
        if (!e || "object" != typeof e || !x) return !1;
        try {
            return x.call(e), !0
        } catch (e) {}
        return !1
    }
    var W = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function B(e, t) {
        return W.call(e, t)
    }

    function U(e) {
        return m.call(e)
    }

    function K(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
        return -1
    }

    function V(e) {
        var t = e.charCodeAt(0),
            n = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + b.call(t.toString(16))
    }

    function J(e) {
        return "Object(" + e + ")"
    }

    function q(e) {
        return e + " { ? }"
    }

    function G(e, t, n, r) {
        return e + " (" + t + ") {" + (r ? $(n, r) : L.call(n, ", ")) + "}"
    }

    function $(e, t) {
        if (0 === e.length) return "";
        var n = "\n" + t.prev + t.base;
        return n + L.call(e, "," + n) + "\n" + t.prev
    }

    function Q(e, t) {
        var n, r = N(e),
            a = [];
        if (r) {
            a.length = e.length;
            for (var o = 0; o < e.length; o++) a[o] = B(e, o) ? t(e[o], e) : ""
        }
        var i = "function" == typeof Y ? Y(e) : [];
        if (O) {
            n = {};
            for (var s = 0; s < i.length; s++) n["$" + i[s]] = i[s]
        }
        for (var u in e) {
            if (!!B(e, u)) {
                if (!r || String(Number(u)) !== u || !(u < e.length)) {
                    if (O && n["$" + u] instanceof Symbol) continue;
                    else w.call(/[^\w$]/, u) ? a.push(t(u, e) + ": " + t(e[u], e)) : a.push(u + ": " + t(e[u], e))
                }
            }
        }
        if ("function" == typeof Y)
            for (var l = 0; l < i.length; l++) P.call(e, i[l]) && a.push("[" + t(i[l]) + "]: " + t(e[i[l]], e));
        return a
    }
}