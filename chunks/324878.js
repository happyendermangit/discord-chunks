function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHasActiveTrial: function() {
            return a
        },
        useCurrentPremiumTrialTier: function() {
            return s
        }
    });
    var r = n("446674"),
        i = n("697218"),
        l = n("521012");
    n("646718");
    let a = () => {
        let e = (0, r.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
        return (null == e ? void 0 : e.trialId) != null
    };

    function s() {
        let e = (0, r.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
            t = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser());
        return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
    }
}