function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SummariesSidebarToggledSource: function() {
            return s
        },
        SummariesTopicClickedSource: function() {
            return r
        },
        SummaryFeedbackReasons: function() {
            return o
        },
        getSummaryFeedbackReasons: function() {
            return d
        }
    });
    var l, i, a, s, r, o, u = n("782340");

    function d() {
        return [{
            value: "DUPLICATED",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_DUPLICATED
        }, {
            value: "TOO_GENERIC",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_GENERIC
        }, {
            value: "TOO_MANY",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_MANY
        }, {
            value: "INACCURATE",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_INACCURATE
        }, {
            value: "NOT_USEFUL",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_NOT_USEFUL
        }, {
            value: "OTHER",
            label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_OTHER
        }]
    }(l = s || (s = {})).TOOLBAR_BUTTON = "toolbar button", l.PILL = "pill", (i = r || (r = {})).SIDEBAR = "sidebar", i.PILL_DROPDOWN = "pill dropdown", i.PILL_NEXT_ARROW = "pill next arrow", i.PILL_PREVIOUS_ARROW = "pill previous arrow", (a = o || (o = {})).DUPLICATED = "DUPLICATED", a.TOO_GENERIC = "TOO_GENERIC", a.TOO_MANY = "TOO_MANY", a.INACCURATE = "INACCURATE", a.NOT_USEFUL = "NOT_USEFUL", a.OTHER = "OTHER"
}