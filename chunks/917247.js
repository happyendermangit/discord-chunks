function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        usePremiumTrialOffer: function() {
            return a
        }
    });
    var n = r("65597"),
        i = r("340412"),
        l = r("540692"),
        u = r("833516"),
        s = r("646718");

    function a(e) {
        var t, r, a;
        let f = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
            o = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
            _ = (0, u.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([s.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, s.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
            E = (0, u.useTrialOffer)(s.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
            c = (0, n.default)([l.default], () => void 0 === e ? null : l.default.getRelevantUserTrialOffer(e));
        return null !== (a = null !== (r = null !== (t = null != c ? c : f) && void 0 !== t ? t : o) && void 0 !== r ? r : _) && void 0 !== a ? a : E
    }
}