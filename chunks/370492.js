function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateDevToolsSettings: function() {
            return l
        },
        toggleDisplayDevTools: function() {
            return d
        },
        clearAnalyticsLog: function() {
            return r
        }
    });
    var a = n("913144"),
        i = n("584369");

    function l(e) {
        a.default.dispatch({
            type: "DEV_TOOLS_SETTINGS_UPDATE",
            settings: e
        })
    }

    function d() {
        l({
            displayTools: !i.default.displayTools
        })
    }

    function r() {
        a.default.dispatch({
            type: "ANALYTICS_LOG_CLEAR"
        })
    }
}