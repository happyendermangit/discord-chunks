function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearPurchaseTokenAuthState: function() {
            return s
        }
    });
    var i = n("913144");

    function s() {
        i.default.dispatch({
            type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
        })
    }
}