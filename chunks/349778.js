function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isForumActivityExperimentEnabled: function() {
            return s
        }
    });
    var i = n("943314"),
        a = n("531869"),
        l = n("49111");

    function s(e) {
        let t = a.default.getCurrentConfig({
                guildId: null != e ? e : l.EMPTY_STRING_SNOWFLAKE_ID,
                location: "3fde52_1"
            }),
            n = i.default.getCurrentConfig({
                location: "3fde52_2"
            });
        return !!(t.enabled || n.enabled)
    }
}