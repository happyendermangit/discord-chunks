function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("70102");
    var r = n("400211");

    function a(e, t) {
        if ("object" !== (0, r.default)(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var a = n.call(e, t || "default");
            if ("object" !== (0, r.default)(a)) return a;
            throw TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }
}