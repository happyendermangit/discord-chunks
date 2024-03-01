function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClydeExperimentState: function() {
            return r
        },
        default: function() {
            return u
        }
    });
    var l, r, a = n("862205");
    (l = r || (r = {}))[l.None = 0] = "None", l[l.DefaultOn = 1] = "DefaultOn", l[l.DefaultOff = 2] = "DefaultOff", l[l.ComingSoon = 3] = "ComingSoon", l[l.ClydeProfiles = 4] = "ClydeProfiles";
    let i = (0, a.createExperiment)({
        kind: "guild",
        id: "2023-03_clyde_ai",
        label: "ClydeAI",
        defaultConfig: {
            experimentState: 0
        },
        treatments: [{
            id: 1,
            label: "Enabled (Default Off)",
            config: {
                experimentState: 2
            }
        }, {
            id: 3,
            label: "Enabled (Default On)",
            config: {
                experimentState: 1
            }
        }, {
            id: 4,
            label: "Coming Soon",
            config: {
                experimentState: 3
            }
        }, {
            id: 5,
            label: "Clyde Profiles",
            config: {
                experimentState: 4
            }
        }]
    });
    var u = i
}