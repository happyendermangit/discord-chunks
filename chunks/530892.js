function(e, t, n) {
    "use strict";
    var r = {
        current: function(e) {
            return n.g.cancelAnimationFrame(e)
        },
        inject: function(e) {
            r.current = e
        }
    };
    e.exports = r
}