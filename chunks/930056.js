function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NONE: function() {
            return a
        },
        ALL: function() {
            return i
        },
        areDirty: function() {
            return o
        }
    });
    var r = n("125692"),
        a = [],
        i = [];

    function o(e, t) {
        return e !== a && (e === i || void 0 === t || (0, r.intersection)(t, e).length > 0)
    }
    a.__IS_NONE__ = !0, i.__IS_ALL__ = !0
}