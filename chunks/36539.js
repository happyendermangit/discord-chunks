function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("954016"),
        i = n("49111");

    function a(e) {
        return null != e && (e.application_id === l.XBOX_ACTIVITY_APPLICATION_ID || e.platform === i.ActivityGamePlatforms.XBOX)
    }
}