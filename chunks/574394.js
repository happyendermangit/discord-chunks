function(e, t, n) {
    "use strict";
    var i = "_erd";

    function r(e) {
        return e[i]
    }
    e.exports = {
        initState: function(e) {
            return e[i] = {},
                function(e) {
                    return e[i]
                }(e)
        },
        getState: r,
        cleanState: function(e) {
            delete e[i]
        }
    }
}