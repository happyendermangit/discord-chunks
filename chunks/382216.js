function(t, e, s) {
    "use strict";
    var r = s("109033");
    t.exports = function(t) {
        return ("number" == typeof t || "bigint" == typeof t) && !r(t) && t !== 1 / 0 && t !== -1 / 0
    }
}