function(e, t, n) {
    "use strict";
    var r, a = Object.prototype.toString,
        i = Function.prototype.toString,
        o = /^\s*(?:function)?\*/,
        s = n("149384")(),
        c = Object.getPrototypeOf,
        l = function() {
            if (!s) return !1;
            try {
                return Function("return function*() {}")()
            } catch (e) {}
        };
    e.exports = function(e) {
        if ("function" != typeof e) return !1;
        if (o.test(i.call(e))) return !0;
        if (!s) return "[object GeneratorFunction]" === a.call(e);
        if (!c) return !1;
        if (void 0 === r) {
            var t = l();
            r = !!t && c(t)
        }
        return c(e) === r
    }
}