function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
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
    t.default = i
}