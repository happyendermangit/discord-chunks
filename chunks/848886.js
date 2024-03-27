function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "guild",
        id: "2024-01_nvencadaptivekeyframe",
        label: "nvenc adaptive key frame interval",
        defaultConfig: {
            enableAdaptiveKeyFrame: !1
        },
        treatments: [{
            id: 1,
            label: "enable adaptive key frame for nvenc",
            config: {
                enableAdaptiveKeyFrame: !0
            }
        }]
    })
}