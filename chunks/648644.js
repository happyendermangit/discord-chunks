function(t, e, s) {
    "use strict";
    var r = s("342646"),
        i = s("37549"),
        n = i("%Function.prototype.apply%"),
        c = i("%Function.prototype.call%"),
        o = i("%Reflect.apply%", !0) || r.call(c, n),
        f = i("%Object.getOwnPropertyDescriptor%", !0),
        u = i("%Object.defineProperty%", !0),
        a = i("%Math.max%");
    if (u) try {
        u({}, "a", {
            value: 1
        })
    } catch (t) {
        u = null
    }
    t.exports = function(t) {
        var e = o(r, c, arguments);
        return f && u && f(e, "length").configurable && u(e, "length", {
            value: 1 + a(0, t.length - (arguments.length - 1))
        }), e
    };
    var d = function() {
        return o(r, n, arguments)
    };
    u ? u(t.exports, "apply", {
        value: d
    }) : t.exports.apply = d
}