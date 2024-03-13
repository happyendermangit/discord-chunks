function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        PurchaseTokenAuthState: function() {
            return r
        },
        default: function() {
            return _
        }
    });
    var i, r, u = n("446674"),
        l = n("913144"),
        a = n("736978"),
        o = n("619443");
    (i = r || (r = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.PENDING = 1] = "PENDING", i[i.SUCCESS = 2] = "SUCCESS", i[i.ERROR = 3] = "ERROR";
    let s = 0,
        c = null,
        d = null;

    function S(t) {
        let {
            error: e
        } = t, n = e instanceof a.default ? e : new a.default(e);
        o.default.isConnected() && n.code === a.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (s = 1)
    }

    function E() {
        s = 0, c = null, d = null
    }
    class f extends u.default.Store {
        get purchaseTokenAuthState() {
            return s
        }
        get purchaseTokenHash() {
            return c
        }
        get expiresAt() {
            return d
        }
    }
    f.displayName = "PurchaseTokenAuthStore";
    var _ = new f(l.default, {
        SKU_PURCHASE_FAIL: S,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: S,
        USER_PAYMENT_CLIENT_ADD: function(t) {
            s = 2, c = t.purchaseTokenHash, d = t.expiresAt
        },
        BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: E,
        BILLING_SUBSCRIPTION_UPDATE_START: E,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: E,
        PREMIUM_PAYMENT_ERROR_CLEAR: E,
        PREMIUM_PAYMENT_MODAL_CLOSE: E,
        PREMIUM_PAYMENT_MODAL_OPEN: E,
        PREMIUM_PAYMENT_SUBSCRIBE_START: E,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: E,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: E,
        SKU_PURCHASE_MODAL_CLOSE: E,
        SKU_PURCHASE_MODAL_OPEN: E,
        SKU_PURCHASE_START: E,
        SKU_PURCHASE_SUCCESS: E
    })
}