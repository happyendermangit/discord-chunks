function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHigherExpectedValue: function() {
            return l
        },
        getHighestLikelihood: function() {
            return a
        }
    });
    var r = n("716849"),
        i = n("646718");

    function l(e, t, n) {
        return null == e ? i.PremiumTypes.TIER_2 : e[i.PremiumSubscriptionSKUs.TIER_0] * t > e[i.PremiumSubscriptionSKUs.TIER_2] * n ? i.PremiumTypes.TIER_0 : i.PremiumTypes.TIER_2
    }

    function a(e) {
        if (null == e) return i.PremiumTypes.TIER_0;
        let t = e[r.NON_SUBSCRIBER_SENTINEL],
            n = e[i.PremiumSubscriptionSKUs.TIER_0],
            l = e[i.PremiumSubscriptionSKUs.TIER_2];
        return l > n && l > t ? i.PremiumTypes.TIER_2 : i.PremiumTypes.TIER_0
    }
}