function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EnhancedHDStreamingRoadblockVariants: function() {
            return i
        },
        GradientVariants: function() {
            return a
        },
        default: function() {
            return o
        }
    });
    var r, i, l = n("862205");
    (r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.VARIANT_1A = 1] = "VARIANT_1A", r[r.VARIANT_1B = 2] = "VARIANT_1B", r[r.VARIANT_2A = 3] = "VARIANT_2A", r[r.VARIANT_2B = 4] = "VARIANT_2B";
    let a = [1, 3],
        s = (0, l.createExperiment)({
            kind: "user",
            id: "2024-01_enhanced_hd_streaming_roadblock",
            label: "Enhanced HD Streaming Roadblock",
            defaultConfig: {
                enabled: !1,
                variant: 0
            },
            treatments: [{
                id: 1,
                label: "Variant 1A",
                config: {
                    enabled: !0,
                    variant: 1
                }
            }, {
                id: 2,
                label: "Variant 1B",
                config: {
                    enabled: !0,
                    variant: 2
                }
            }, {
                id: 3,
                label: "Variant 2A",
                config: {
                    enabled: !0,
                    variant: 3
                }
            }, {
                id: 4,
                label: "Variant 2B",
                config: {
                    enabled: !0,
                    variant: 4
                }
            }]
        });
    var o = s
}