function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CreateGuildPollsExperiment: function() {
            return l
        },
        CreateGDMPollsExperiment: function() {
            return s
        },
        PollsUserExperiment: function() {
            return i
        }
    });
    var a = n("862205");
    let l = (0, a.createExperiment)({
            kind: "guild",
            id: "2023-09_guild_polls",
            label: "Create Guild Polls",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enables creation of polls within a guild",
                config: {
                    enabled: !0
                }
            }]
        }),
        s = (0, a.createExperiment)({
            kind: "user",
            id: "2024-01_create_gdm_polls",
            label: "Create GDM Polls",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enables creation of polls within a GDM",
                config: {
                    enabled: !0
                }
            }]
        }),
        i = (0, a.createExperiment)({
            kind: "user",
            id: "2023-10_poll_users",
            label: "Polls User Experiment",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enables poll messages",
                config: {
                    enabled: !0
                }
            }]
        })
}