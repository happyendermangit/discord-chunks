function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIsEligibleForActivityQuest: function() {
            return r
        }
    });
    let i = (0, n("818083").createExperiment)({
            id: "2024-03_quests_activity_quest",
            kind: "user",
            label: "Activity Quest",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 0,
                label: "Control",
                config: {
                    enabled: !1
                }
            }, {
                id: 1,
                label: "Activity Quest enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        r = e => {
            let {
                location: t,
                autoTrackExposure: n
            } = e;
            return i.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: n
            }).enabled
        }
}