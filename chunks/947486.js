function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        encodeProperties: function() {
            return r
        }
    });
    var i = n("413135").Buffer;

    function r(e) {
        try {
            return i.from(JSON.stringify(e)).toString("base64")
        } catch (e) {
            return null
        }
    }
}