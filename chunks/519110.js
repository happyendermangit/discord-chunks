function(e, t, r) {
    var n = r("33426"),
        i = r("226741"),
        o = r("270879"),
        a = Object.prototype,
        u = Function.prototype.toString,
        s = a.hasOwnProperty,
        l = u.call(Object);
    e.exports = function(e) {
        if (!o(e) || "[object Object]" != n(e)) return !1;
        var t = i(e);
        if (null === t) return !0;
        var r = s.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && u.call(r) == l
    }
}