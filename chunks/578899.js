function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, {
        SimpleDeadchatPromptExperiment: function() {
            return i
        }
    });
    var l = t("862205");
    let i = (0, l.createExperiment)({
        kind: "guild",
        id: "2023-08_deadchat_simple_prompt_guild",
        label: "Simple deadchat prompt",
        defaultConfig: {
            triggerDeadchat: !1,
            enableDeadchat: !1
        },
        treatments: [{
            id: 0,
            label: "Control",
            config: {
                triggerDeadchat: !0,
                enableDeadchat: !1
            }
        }, {
            id: 1,
            label: "trigger deadchat upon connection open",
            config: {
                triggerDeadchat: !0,
                enableDeadchat: !0
            }
        }]
    })
}