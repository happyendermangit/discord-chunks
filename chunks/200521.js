function(e, t, n) {
    "use strict";
    var l, i, a, s;
    n.r(t), n.d(t, {
        FeedbackRating: function() {
            return l
        },
        FEEDBACK_FREEFORM_LENGTH: function() {
            return r
        },
        FeedbackType: function() {
            return i
        },
        FeedbackTypePrecedence: function() {
            return o
        }
    }), n("808653"), (a = l || (l = {})).BAD = "bad", a.NEUTRAL = "neutral", a.GOOD = "good";
    let r = 1024;
    (s = i || (i = {}))[s.VOICE = 0] = "VOICE", s[s.STREAM = 1] = "STREAM", s[s.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", s[s.ACTIVITY = 3] = "ACTIVITY", s[s.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
    let o = [2, 1, 3, 0, 4].reduce((e, t, n) => ({
        ...e,
        [t]: n
    }), {})
}