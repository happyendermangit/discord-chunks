function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        experiment: function() {
            return i
        },
        usePomeloEligibility: function() {
            return r
        },
        getPomeloEligibility: function() {
            return a
        }
    });
    var s = n("862205");
    let i = (0, s.createExperiment)({
            kind: "user",
            label: "Pomelo",
            id: "2023-03_pomelo",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        r = () => {
            let {
                enabled: e
            } = i.useExperiment({
                location: "faf26d_1"
            }, {
                autoTrackExposure: !1
            });
            return e
        },
        a = () => {
            let {
                enabled: e
            } = i.getCurrentConfig({
                location: "faf26d_2"
            }, {
                autoTrackExposure: !1
            });
            return e
        }
}