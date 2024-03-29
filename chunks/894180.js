function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2024-02_h265_for_windows_with_amd",
        label: "Test H.265 on Windows with the AMD hardware encoder",
        defaultConfig: {
            signalH265SupportAMD: !1
        },
        treatments: [{
            id: 1,
            label: "Use H.265 for AMD on Windows",
            config: {
                signalH265SupportAMD: !0
            }
        }]
    })
}