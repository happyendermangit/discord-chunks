function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSoundmojiExperiment: function() {
            return a
        }
    });
    var i = n("862205");
    let l = (0, i.createExperiment)({
        kind: "user",
        id: "2023-09_soundmoji",
        label: "Soundmoji",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0
            }
        }]
    });

    function a(e) {
        let {
            enabled: t
        } = l.useExperiment({
            location: e
        }, {
            autoTrackExposure: !0
        });
        return t
    }
}