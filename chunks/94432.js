function(e, t, n) {
    "use strict";
    var i, r;
    n.r(t), n.d(t, {
        VOICE_RECORDING_MIN_DURATION_MILLIS: function() {
            return s
        },
        WAVEFORM_WAVE_MAX_VALUE: function() {
            return a
        }
    }), (r = i || (i = {}))[r.SENDING = 0] = "SENDING", r[r.CANCELLING = 1] = "CANCELLING", r[r.LOCKING = 2] = "LOCKING", r[r.LOCKED = 3] = "LOCKED";
    let s = 500,
        a = 255
}