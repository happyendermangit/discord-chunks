function(e, t, n) {
    "use strict";
    var r = n("520462"),
        a = n("745378"),
        i = n("214401"),
        o = n("314970"),
        s = n("293471"),
        c = o("Object.prototype.toString"),
        l = n("149384")(),
        u = "undefined" == typeof globalThis ? n.g : globalThis,
        d = a(),
        p = o("String.prototype.slice"),
        f = Object.getPrototypeOf,
        m = o("Array.prototype.indexOf", !0) || function(e, t) {
            for (var n = 0; n < e.length; n += 1)
                if (e[n] === t) return n;
            return -1
        },
        h = {
            __proto__: null
        };
    l && s && f ? r(d, function(e) {
        var t = new u[e];
        if (Symbol.toStringTag in t) {
            var n = f(t),
                r = s(n, Symbol.toStringTag);
            !r && (r = s(f(n), Symbol.toStringTag)), h["$" + e] = i(r.get)
        }
    }) : r(d, function(e) {
        var t = new u[e];
        h["$" + e] = i(t.slice)
    });
    var v = function(e) {
            var t = !1;
            return r(h, function(n, r) {
                if (!t) try {
                    "$" + n(e) === r && (t = p(r, 1))
                } catch (e) {}
            }), t
        },
        g = function(e) {
            var t = !1;
            return r(h, function(n, r) {
                if (!t) try {
                    n(e), t = p(r, 1)
                } catch (e) {}
            }), t
        };
    e.exports = function(e) {
        if (!e || "object" != typeof e) return !1;
        if (!l) {
            var t = p(c(e), 8, -1);
            return m(d, t) > -1 ? t : "Object" === t && g(e)
        }
        return s ? v(e) : null
    }
}