function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForInappropriateConversationWarning: function() {
            return u
        },
        useIsEligibleForInappropriateConversationWarning: function() {
            return d
        }
    });
    var l = n("862205");
    let a = (0, l.createExperiment)({
            kind: "user",
            id: "2024-01_inappropriate_conversation_warning",
            label: "Inappropriate Conversation Warning",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable Inappropriate Conversation Warning",
                config: {
                    enabled: !0
                }
            }]
        }),
        i = (0, l.createExperiment)({
            kind: "user",
            id: "2024-01_inappropriate_conversation_warning_staff_bypass",
            label: "Inappropriate Conversation Warning Staff Bypass",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable Inappropriate Conversation Warning Staff Bypass",
                config: {
                    enabled: !0
                }
            }]
        });

    function u(e) {
        let {
            location: t,
            autoTrackExposure: n = !1
        } = e, {
            enabled: l
        } = a.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        }), {
            enabled: u
        } = i.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        });
        return l || u
    }

    function d(e) {
        let {
            location: t,
            autoTrackExposure: n = !1
        } = e, {
            enabled: l
        } = a.useExperiment({
            location: t
        }, {
            autoTrackExposure: n
        }), {
            enabled: u
        } = i.useExperiment({
            location: t
        }, {
            autoTrackExposure: n
        });
        return l || u
    }
}