function(t, e, o) {
    "use strict";
    o.r(e), o.d(e, {
        default: function() {
            return u
        }
    });
    var n = o("446674"),
        d = o("913144");
    let r = !1,
        l = !1,
        i = {},
        a = null;
    class s extends n.default.Store {
        hasConsented(t) {
            return null != i[t] && i[t].consented
        }
        get fetchedConsents() {
            return r
        }
        get receivedConsentsInConnectionOpen() {
            return l
        }
        getAuthenticationConsentRequired() {
            return a
        }
    }
    s.displayName = "ConsentStore";
    var u = new s(d.default, {
        CONNECTION_OPEN: function(t) {
            let {
                consents: e
            } = t;
            null != e && (i = {
                ...i,
                ...e
            }, l = !0)
        },
        UPDATE_CONSENTS: function(t) {
            let {
                consents: e
            } = t;
            i = {
                ...e
            }, r = !0
        },
        SET_CONSENT_REQUIRED: function(t) {
            a = t.consentRequired
        },
        LOGOUT: function() {
            a = null
        }
    })
}