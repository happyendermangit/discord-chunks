function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowFraudMenuVariant: function() {
            return l
        }
    });
    let a = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2023-08_iar_fraud_impersonation",
        label: "In App Reports Fruad & Impersonation",
        defaultConfig: {
            showFraudMenuVariant: !1
        },
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                showFraudMenuVariant: !0
            }
        }]
    });

    function l() {
        let {
            showFraudMenuVariant: e
        } = a.getCurrentConfig({
            location: "159afe_2"
        }, {
            autoTrackExposure: !0
        });
        return e
    }
}