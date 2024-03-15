function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseConnectionEvent: function() {
            return u.BaseConnectionEvent
        },
        BaseSpeedTesterEvent: function() {
            return d.BaseSpeedTesterEvent
        },
        MediaEngineEvent: function() {
            return c.MediaEngineEvent
        },
        MediaEngineContextTypes: function() {
            return f.MediaEngineContextTypes
        },
        FilterTargetType: function() {
            return a
        },
        FilterSettingsGraph: function() {
            return o
        },
        FilterSettingsKey: function() {
            return l
        },
        determineMediaEngine: function() {
            return E
        },
        initializeMediaEngine: function() {
            return h
        }
    });
    var i, s, r, a, o, l, u = n("947279"),
        d = n("571877"),
        c = n("775766"),
        f = n("353927");

    function _(e) {
        switch (e) {
            case f.MediaEngineImplementations.NATIVE:
                return n("741397").default;
            case f.MediaEngineImplementations.WEBRTC:
                return n("551079").default;
            case f.MediaEngineImplementations.DUMMY:
            default:
                return n("870630").default
        }
    }

    function E() {
        var e;
        return null !== (e = [f.MediaEngineImplementations.NATIVE, f.MediaEngineImplementations.WEBRTC].find(e => _(e).supported())) && void 0 !== e ? e : f.MediaEngineImplementations.DUMMY
    }

    function h(e) {
        let t = _(e);
        return new t
    }(i = a || (a = {})).INPUT_DEVICE = "input_device", i.STREAM = "stream", (s = o || (o = {})).NONE = "", s.BACKGROUND_BLUR = "background_blur", s.BACKGROUND_REPLACEMENT = "background_replacement", (r = l || (l = {})).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview", r.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"
}