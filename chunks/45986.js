function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trustDomain: function() {
            return r
        },
        trustProtocol: function() {
            return s
        }
    });
    var i = n("570140");

    function r(e) {
        i.default.dispatch({
            type: "MASKED_LINK_ADD_TRUSTED_DOMAIN",
            url: e
        })
    }

    function s(e) {
        i.default.dispatch({
            type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
            url: e
        })
    }
}