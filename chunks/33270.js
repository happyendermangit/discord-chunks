function(e, t, n) {
    "use strict";
    var r = n("418855"),
        a = n("472960"),
        o = n("379792");
    e.exports = function(e, t) {
        if (r(e), a(t) && t.constructor === e) return t;
        var n = o.f(e);
        return (0, n.resolve)(t), n.promise
    }
}