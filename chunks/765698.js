function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceActivityProfileExperiment: function() {
            return i
        }
    });
    var l = n("862205");
    let i = (0, l.createExperiment)({
        kind: "user",
        id: "2023-11_voice_activity_in_profile",
        label: "Voice Activity in Profile",
        defaultConfig: {
            showVoiceActivityInProfile: !1
        },
        treatments: [{
            id: 1,
            label: "Voice activity displayed in user profile",
            config: {
                showVoiceActivityInProfile: !0
            }
        }]
    })
}