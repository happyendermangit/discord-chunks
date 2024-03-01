function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ErrorCodes: function() {
            return r
        },
        parseV8BillingAddressSkemaErrorToBillingError: function() {
            return R
        },
        default: function() {
            return L
        }
    }), n("222007");
    var r, i, l, u, a, o, s, d, E = n("486196"),
        _ = n("614247"),
        c = n("821879"),
        I = n("333805"),
        S = n("782340");
    (a = r || (r = {}))[a.UNKNOWN = 0] = "UNKNOWN", a[a.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", a[a.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", a[a.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", a[a.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", a[a.INVALID_PLAN = 100005] = "INVALID_PLAN", a[a.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", a[a.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", a[a.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", a[a.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", a[a.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", a[a.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", a[a.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", a[a.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", a[a.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", a[a.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", a[a.CARD_DECLINED = 100054] = "CARD_DECLINED", a[a.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", a[a.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", a[a.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", a[a.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", a[a.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", a[a.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", a[a.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", a[a.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", a[a.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", a[a.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", a[a.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (o = i || (i = {})).CARD_NUMBER = "cardNumber", o.CARD_CVC = "cvc", o.CARD_EXPIRATION_DATE = "expirationDate", o.CARD_NAME = "name", o.ADDRESS_NAME = "name", o.ADDRESS_LINE_1 = "line1", o.ADDRESS_LINE_2 = "line2", o.ADDRESS_CITY = "city", o.ADDRESS_STATE = "state", o.ADDRESS_POSTAL_CODE = "postalCode", o.ADDRESS_COUNTRY = "country", (s = l || (l = {})).ADDRESS_LINE_1 = "address_line1", s.ADDRESS_LINE_2 = "address_line2", s.ADDRESS_CITY = "address_city", s.ADDRESS_STATE = "address_state", s.ADDRESS_ZIP = "address_zip", s.ADDRESS_COUNTRY = "address_country", s.CARD_NUMBER = "number", s.CARD_EXPIRATION_DATE = "exp", s.CARD_EXPIRATION_MONTH = "exp_month", s.CARD_EXPIRATION_YEAR = "exp_year";
    let T = Object.freeze({
            address_line1: "line1",
            address_line2: "line2",
            address_city: "city",
            address_state: "state",
            address_zip: "postalCode",
            address_country: "country",
            number: "cardNumber",
            exp: "expirationDate",
            exp_month: "expirationDate",
            exp_year: "expirationDate"
        }),
        f = Object.freeze({
            line_1: "line1",
            line_2: "line2",
            postal_code: "postalCode"
        });
    (d = u || (u = {})).CARD = "card", d.ADDRESS = "address";
    let p = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
        N = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
        A = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

    function R(e) {
        var t, n, r, i, l;
        if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === E.INVALID_FORM_BODY_ERROR_CODE) {
            if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : null === (r = i.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                for (let t in e.body.errors.billing_address) {
                    let n = e.body.errors.billing_address[t];
                    delete e.body.errors.billing_address[t], e.body.errors[t] = n
                }
                delete e.body.errors.billing_address
            }(null === (l = e.body) || void 0 === l ? void 0 : l.errors) != null && (e.body = (0, _.default)(e.body.errors))
        }
        return new C(e)
    }
    class C extends I.default {
        _isInFieldSet(e) {
            for (let t in this.fields)
                if (e.has(t)) return !0
        }
        hasCardError() {
            return 2 === (0, c.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(N) : this._isInFieldSet(p)
        }
        hasAddressError() {
            return this._isInFieldSet(A)
        }
        constructor(e, t) {
            for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = S.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = S.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = S.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = S.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = S.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = S.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = S.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = S.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                let e = T[n] || f[n];
                if (null != e) {
                    let t = this.fields[n];
                    delete this.fields[n], this.fields[e] = t
                }
            }
            null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
        }
    }
    C.ErrorCodes = r, C.Fields = i, C.Sections = u, C.CARD_ERRORS = p, C.ADDRESS_ERRORS = A;
    var L = C
}