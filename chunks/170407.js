function(e, t, n) {
    "use strict";
    n("426094");
    var r, a, i = Function.prototype.toString,
        o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
    if ("function" == typeof o && "function" == typeof Object.defineProperty) try {
        r = Object.defineProperty({}, "length", {
            get: function() {
                throw a
            }
        }), a = {}, o(function() {
            throw 42
        }, null, r)
    } catch (e) {
        e !== a && (o = null)
    } else o = null;
    var s = /^\s*class\b/,
        c = function(e) {
            try {
                var t = i.call(e);
                return s.test(t)
            } catch (e) {
                return !1
            }
        },
        l = function(e) {
            try {
                if (c(e)) return !1;
                return i.call(e), !0
            } catch (e) {
                return !1
            }
        },
        u = Object.prototype.toString,
        d = "function" == typeof Symbol && !!Symbol.toStringTag,
        p = !(0 in [, ]),
        f = function() {
            return !1
        };
    if ("object" == typeof document) {
        var m = document.all;
        u.call(m) === u.call(document.all) && (f = function(e) {
            if ((p || !e) && (void 0 === e || "object" == typeof e)) try {
                var t = u.call(e);
                return ("[object HTMLAllCollection]" === t || "[object HTML document.all class]" === t || "[object HTMLCollection]" === t || "[object Object]" === t) && null == e("")
            } catch (e) {}
            return !1
        })
    }
    e.exports = o ? function(e) {
        if (f(e)) return !0;
        if (!e || "function" != typeof e && "object" != typeof e) return !1;
        try {
            o(e, null, r)
        } catch (e) {
            if (e !== a) return !1
        }
        return !c(e) && l(e)
    } : function(e) {
        if (f(e)) return !0;
        if (!e || "function" != typeof e && "object" != typeof e) return !1;
        if (d) return l(e);
        if (c(e)) return !1;
        var t = u.call(e);
        return !!("[object Function]" === t || "[object GeneratorFunction]" === t || /^\[object HTML/.test(t)) && l(e)
    }
}