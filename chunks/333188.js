function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceCallBackgroundTypes: function() {
            return o
        }
    }), n("222007");
    var i, r, s, a, o, l, u, c, d, f, E = n("773336");
    (l = i || (i = {})).DISMISSED = "dismissed", l.PIP = "pip", l.PIP_EXTERNAL = "pip_external", l.PANEL = "panel";
    let p = {
        mass: .5,
        damping: 80,
        stiffness: 320
    };
    ({
        ...p
    }), ({
        ...p
    }), ({
        ...p
    }), (u = r || (r = {})).USER = "USER", u.STREAM = "STREAM", u.ACTIVITY = "ACTIVIY", (c = s || (s = {})).NO_VIDEO_PARTICIPANTS = "no_video_participants", c.CALLER_DISCONNECTED = "caller_disconnected";
    (d = a || (a = {})).PARTICIPANT = "participant", d.CTA = "cta", (0, E.isAndroid)(), (0, E.isIOS)(), (f = o || (o = {}))[f.EMPTY = 0] = "EMPTY", f[f.GRADIENT = 1] = "GRADIENT"
}