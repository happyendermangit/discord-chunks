function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        combineKey: function() {
            return r
        },
        combineKeyPrefix: function() {
            return s
        }
    }), n("47120"), n("411104");
    var i = n("503461");

    function r(e, t) {
        let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
        if (n.length >= 1 && n.length <= i.MAXIMUM_KEY_BITS) return n;
        throw Error("combination results in an invalid key that has ".concat(n.length, " elements: ").concat(JSON.stringify(n)))
    }

    function s(e, t) {
        let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
        if (n.length <= i.MAXIMUM_KEY_BITS) return n;
        throw Error("combination results in an invalid prefix key that has ".concat(n.length, " elements: ").concat(JSON.stringify(n)))
    }
}