function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return R
        }
    }), r("222007");
    var n = r("446674"),
        i = r("913144"),
        l = r("697218"),
        u = r("719923"),
        s = r("521012"),
        a = r("646718");
    let f = {
            userOffersLastFetchedAtDate: void 0,
            userTrialOffers: {},
            userDiscountOffers: {},
            userDiscounts: void 0
        },
        o = f;

    function c() {
        o.userTrialOffers = {}, o.userDiscountOffers = {}, o.userOffersLastFetchedAtDate = void 0
    }
    let _ = () => !0;

    function E() {
        let e = s.default.getPremiumTypeSubscription();
        return null != e && (o.userTrialOffers = {}, o.userDiscountOffers = {}, !0)
    }
    class d extends n.default.PersistedStore {
        initialize(e) {
            o = null != e ? e : f, this.waitFor(l.default), this.syncWith([l.default], _), this.syncWith([s.default], E)
        }
        getUserTrialOffer(e) {
            if (null !== e) return o.userTrialOffers[e]
        }
        getUserDiscountOffer(e) {
            if (null !== e) return o.userDiscountOffers[e]
        }
        getAnyOfUserTrialOfferId(e) {
            for (let t of e)
                if (null != o.userTrialOffers[t]) return t;
            return null
        }
        hasFetchedOffer() {
            return null != o.userOffersLastFetchedAtDate
        }
        shouldFetchOffer() {
            let e = o.userOffersLastFetchedAtDate;
            return null == e || Date.now() - 1728e5 > e
        }
        getAlmostExpiringTrialOffers(e) {
            let t = Object.values(a.SubscriptionTrials).map(e => e.id),
                r = l.default.getCurrentUser();
            return (0, u.isPremium)(r) ? [] : Object.values(o.userTrialOffers).filter(r => t.includes(r.trial_id) && null != r.expires_at && null != r.subscription_trial && e.includes(r.subscription_trial.sku_id) && Date.parse(r.expires_at) < Date.now() + a.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
        }
        getAcknowledgedOffers(e) {
            let t = l.default.getCurrentUser();
            return (0, u.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
        }
        getUnacknowledgedDiscountOffers() {
            var e;
            let t = l.default.getCurrentUser();
            return (0, u.isPremium)(t) ? [] : Object.values(null !== (e = o.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at)
        }
        getUnacknowledgedOffers(e) {
            let t = l.default.getCurrentUser();
            return (0, u.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
        }
        hasAnyUnexpiredOffer() {
            return Object.values(o.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
        }
        getState() {
            return o
        }
        forceReset() {
            c()
        }
    }
    d.displayName = "UserOfferStore", d.persistKey = "UserOfferStore", d.migrations = [e => {
        let t = null == e ? void 0 : e.userDiscounts;
        if (null != t) return {
            ...e,
            userDiscountOffers: t
        }
    }];
    var R = new d(i.default, {
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? o.userTrialOffers[t.trial_id] = t : c(), o.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? o.userTrialOffers[t.trial_id] = t : o.userTrialOffers = {}, o.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: r,
                userDiscountOffer: n
            } = e;
            null == t && null == r && null == n && c(), null != t ? (o.userTrialOffers[t.trial_id] = t, o.userDiscountOffers = {}) : null != r ? (o.userDiscountOffers[r.discount_id] = r, o.userTrialOffers = {}) : null != n && (o.userDiscountOffers[n.discount_id] = n, o.userTrialOffers = {}), o.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: r,
                userDiscountOffer: n
            } = e;
            null != t ? o.userTrialOffers[t.trial_id] = t : o.userTrialOffers = {}, null != r ? o.userDiscountOffers[r.discount_id] = r : null != n ? o.userDiscountOffers[n.discount_id] = n : o.userDiscountOffers = {}, o.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_FAIL: function() {
            c(), o.userOffersLastFetchedAtDate = Date.now()
        },
        LOGOUT: c
    })
}