function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPremiumTier2Entitlement: function() {
            return d
        },
        getTenureRewardBadgeDescription: function() {
            return E
        },
        getTenureRewardEntitlement: function() {
            return _
        },
        isPremiumTier2Entitlement: function() {
            return l
        },
        isUserTenureRewardStatusActive: function() {
            return c
        },
        isValidTenureRewardEntitlement: function() {
            return u
        }
    }), n("580130");
    var i = n("55563"),
        r = n("474936"),
        s = n("735825"),
        a = n("981631"),
        o = n("689938");

    function l(e) {
        return e.type === a.EntitlementTypes.PURCHASE && e.skuId === r.PremiumSubscriptionSKUs.TIER_2 && e.applicationId === r.PREMIUM_SUBSCRIPTION_APPLICATION && e.isValid(null, i.default)
    }

    function u(e) {
        return e.type === a.EntitlementTypes.PREMIUM_PURCHASE && s.ALL_TENURE_REWARD_SKUS.has(e.skuId) && e.applicationId === r.PREMIUM_SUBSCRIPTION_APPLICATION && e.isValid(null, i.default)
    }

    function d(e) {
        if (null != e) return Array.from(e).find(e => l(e))
    }

    function _(e, t) {
        if (null != t) return Array.from(t).find(t => t.type === a.EntitlementTypes.PREMIUM_PURCHASE && e.includes(t.skuId) && t.applicationId === r.PREMIUM_SUBSCRIPTION_APPLICATION && t.isValid(null, i.default))
    }

    function c(e) {
        return null != e.redeemable_at && null != e.next_tenure_reward_id
    }

    function E(e) {
        switch (e) {
            case s.NitroRewardStatus.PENDING:
                return o.default.Messages.REWARD;
            case s.NitroRewardStatus.REDEEMABLE:
                return o.default.Messages.REDEEM;
            case s.NitroRewardStatus.REDEEMED:
            default:
                return null
        }
    }
}