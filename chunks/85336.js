function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        Step: function() {
            return i
        },
        COLLAPSED_PAYMENT_BREADCRUMB_STEPS: function() {
            return E
        },
        getLabelForStep: function() {
            return d
        },
        errorToStep: function() {
            return f
        },
        usePurchaseStateForStep: function() {
            return _
        }
    }), n("222007"), n("70102");
    var i, u, r = n("884691"),
        l = n("448993"),
        a = n("605250"),
        o = n("745279"),
        s = n("286350"),
        c = n("782340");
    let S = new a.default("PaymentSteps");
    (u = i || (i = {})).PAYMENT_TYPE = "payment_type", u.CREDIT_CARD_INFORMATION = "credit_card_information", u.PAYPAL_INFORMATION = "paypal_information", u.VENMO_INFORMATION = "venmo_information", u.SOFORT_INFORMATION = "sofort_information", u.PRZELEWY24_INFORMATION = "przelewy24_information", u.EPS_INFORMATION = "eps_information", u.IDEAL_INFORMATION = "ideal_information", u.CASH_APP_INFORMATION = "cash_app_information", u.PAYMENT_REQUEST_INFORMATION = "payment_request_information", u.ADDRESS = "address", u.AWAITING_AUTHENTICATION = "awaiting_authentication", u.SKU_SELECT = "sku_select", u.PLAN_SELECT = "plan_select", u.PREMIUM_UPSELL = "premium_upsell", u.PREMIUM_GUILD_UPSELL = "premium_guild_upsell", u.REVIEW = "review", u.CONFIRM = "confirm", u.CLAIM_FREE_SKU = "claim_free_sku", u.SKU_PREVIEW = "sku_preview", u.LOADING_PAYMENT_SOURCES = "loading_payment_sources", u.SHOP = "shop", u.PROMOTION_INFO = "promotion_info", u.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth", u.BENEFITS = "benefits", u.WHAT_YOU_LOSE = "what_you_lose", u.ADD_PAYMENT_STEPS = "add_payment_steps", u.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout", u.GIFT_CUSTOMIZATION = "gift_customization";
    let E = new Set(["credit_card_information", "payment_request_information", "paypal_information", "venmo_information", "cash_app_information", "address", "claim_free_sku", "sku_preview", "premium_upsell", "sofort_information", "przelewy24_information"]);

    function d(t) {
        switch (t) {
            case "plan_select":
                return c.default.Messages.BILLING_STEP_SELECT_PLAN;
            case "payment_type":
            case "add_payment_steps":
                return c.default.Messages.BILLING_STEP_PAYMENT;
            case "awaiting_purchase_token_auth":
            case "review":
                return c.default.Messages.BILLING_STEP_REVIEW;
            case "shop":
                return c.default.Messages.BILLING_STEP_SHOP;
            case "payment_request_information":
                return c.default.Messages.BILLING_STEP_PAYMENT_INFO;
            case "credit_card_information":
                return c.default.Messages.PAYMENT_SOURCE_INFORMATION;
            case "address":
                return c.default.Messages.BILLING_ADDRESS;
            case "paypal_information":
                return c.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
            case "venmo_information":
                return c.default.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
            case "sofort_information":
                return c.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
            case "przelewy24_information":
                return c.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
            case "cash_app_information":
                return c.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS;
            case "gift_customization":
                return c.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER
        }
        throw Error("Unexpected step: ".concat(t))
    }

    function f(t) {
        if (null != t) {
            if (!(t instanceof l.BillingError)) throw S.error(t), (0, o.captureBillingException)(t), Error("Unexpected error type");
            if (t.hasCardError()) return "credit_card_information";
            if (t.hasAddressError()) return "address"
        }
        return null
    }

    function _(t, e, n) {
        r.useEffect(() => {
            null != t && "review" !== t && e !== s.PurchaseState.WAITING && e !== s.PurchaseState.COMPLETED && n(s.PurchaseState.WAITING)
        }, [t, e, n])
    }
}