function(t, e, s) {
    "use strict";
    s("70102"), s("424973");
    var r = Array.prototype.slice,
        i = Object.prototype.toString;
    t.exports = function(t) {
        var e, s = this;
        if ("function" != typeof s || "[object Function]" !== i.call(s)) throw TypeError("Function.prototype.bind called on incompatible " + s);
        for (var n = r.call(arguments, 1), c = Math.max(0, s.length - n.length), o = [], f = 0; f < c; f++) o.push("$" + f);
        if (e = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                if (!(this instanceof e)) return s.apply(t, n.concat(r.call(arguments)));
                var i = s.apply(this, n.concat(r.call(arguments)));
                return Object(i) === i ? i : this
            }), s.prototype) {
            var u = function() {};
            u.prototype = s.prototype, e.prototype = new u, u.prototype = null
        }
        return e
    }
}