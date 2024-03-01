function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("862205");
    let i = (0, l.createExperiment)({
        kind: "user",
        id: "2024-02_activity_react_reply",
        label: "Activity React Reply",
        defaultConfig: {
            enableActivityReactReply: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Activity React / Reply Buttons",
            config: {
                enableActivityReactReply: !0
            }
        }]
    });
    var a = function() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = i.useExperiment({
                location: "useIsEligibleForActivityReactReply"
            }, {
                autoTrackExposure: e
            });
        return t.enableActivityReactReply
    }
}