function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUMMARY_POLL_INTERVAL: function() {
            return _
        },
        SummariesSidebarToggledSource: function() {
            return a
        },
        SummariesTopicClickedSource: function() {
            return o
        },
        SummaryFeedbackReasons: function() {
            return l
        },
        getSummaryFeedbackReasons: function() {
            return c
        }
    });
    var i, r, s, a, o, l, u = n("70956"),
        d = n("689938");
    let _ = 5 * u.default.Millis.SECOND;

    function c() {
        return [{
            value: "DUPLICATED",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_DUPLICATED
        }, {
            value: "TOO_GENERIC",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_GENERIC
        }, {
            value: "TOO_MANY",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_MANY
        }, {
            value: "INACCURATE",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_INACCURATE
        }, {
            value: "NOT_USEFUL",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_NOT_USEFUL
        }, {
            value: "OTHER",
            label: d.default.Messages.SUMMARIES_FEEDBACK_OPTION_OTHER
        }]
    }(i = a || (a = {})).TOOLBAR_BUTTON = "toolbar button", i.PILL = "pill", (r = o || (o = {})).SIDEBAR = "sidebar", r.PILL_DROPDOWN = "pill dropdown", r.PILL_NEXT_ARROW = "pill next arrow", r.PILL_PREVIOUS_ARROW = "pill previous arrow", (s = l || (l = {})).DUPLICATED = "DUPLICATED", s.TOO_GENERIC = "TOO_GENERIC", s.TOO_MANY = "TOO_MANY", s.INACCURATE = "INACCURATE", s.NOT_USEFUL = "NOT_USEFUL", s.OTHER = "OTHER"
}