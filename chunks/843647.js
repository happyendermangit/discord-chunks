function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("446674"),
        i = n("697218"),
        l = n("10514"),
        a = n("719923"),
        s = n("716849"),
        o = n("676572"),
        u = n("942377"),
        c = n("917247"),
        d = n("646718");

    function f(e) {
        let {
            autoTrackExposure: t,
            experiment: n,
            location: f
        } = e, m = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser()), _ = (0, c.usePremiumTrialOffer)(), E = null != _, T = null != m && (0, a.isPremium)(m);
        (0, s.useMaybeFetchPremiumLikelihood)(n);
        let {
            enabled: I,
            useExpectedValue: C,
            useLikelihood: p
        } = n.useExperiment({
            location: null != f ? f : "1"
        }, {
            autoTrackExposure: !T && !E && t
        }), {
            premiumLikelihood: S,
            fetched: P
        } = (0, r.useStateFromStoresObject)([o.default], () => {
            let e = o.default.getState();
            return {
                fetched: e.fetched,
                premiumLikelihood: e.premiumLikelihood
            }
        }), R = (0, r.useStateFromStores)([l.default], () => l.default.isLoadedForSKUs([d.PremiumSubscriptionSKUs.TIER_0, d.PremiumSubscriptionSKUs.TIER_2])), L = !T && I && !E && (C ? !P || !R : !P), O = d.PremiumTypes.TIER_2;
        if (E) {
            let e = _.subscription_trial;
            (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_0 ? O = d.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && (O = d.PremiumTypes.TIER_2)
        } else if (!T && !L && I) {
            if (C) {
                let {
                    amount: e
                } = (0, a.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                    amount: t
                } = (0, a.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                O = (0, u.getHigherExpectedValue)(S, e, t)
            } else p && (O = (0, u.getHighestLikelihood)(S))
        }
        return {
            isLoading: L,
            suggestedPremiumType: O
        }
    }
}