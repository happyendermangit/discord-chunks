function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("862205");
    let i = (0, r.createExperiment)({
        kind: "user",
        id: "2023-07_bogo_marketing_materials_experiment",
        label: "BOGO Marketing Materials",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable BOGO marketing materials",
            config: {
                enabled: !0
            }
        }]
    });
    var l = i
}