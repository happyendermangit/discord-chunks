function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isMetricsEndpointV2Enabled: function() {
            return r
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
        kind: "user",
        id: "2024-03_metrics_endpoint_v2",
        label: "Metrics V2 Endpoint Rollout",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enables sending metrics to the v2 endpoint which accepts a new data format",
            config: {
                enabled: !0
            }
        }]
    });

    function r(e) {
        let {
            enabled: t
        } = s.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        });
        return t
    }
}