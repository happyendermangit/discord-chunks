function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return u
        }
    });
    var n = i("845579"),
        l = i("42887"),
        a = i("829536");

    function u(e) {
        let t = function() {
                var e;
                let t = n.SoundboardSettings.getSetting();
                return (0, a.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
            }(),
            i = Math.min(l.default.getOutputVolume() / 100, 1);
        return Math.min(e * t * i, 1)
    }
}