function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("862205");
    let i = (0, l.createExperiment)({
        kind: "user",
        id: "2023-02_referral_trials",
        label: "Referral Trials",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Nitro users can send a Nitro trial offer to another user.",
            config: {
                enabled: !0
            }
        }]
    });
    var a = i
}