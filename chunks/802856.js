function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("701488"),
        r = n("981631");

    function s(e) {
        return null != e && (e.application_id === i.XBOX_ACTIVITY_APPLICATION_ID || e.platform === r.ActivityGamePlatforms.XBOX)
    }
}