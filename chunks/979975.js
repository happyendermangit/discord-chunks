function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var l = n("599110"),
        i = n("793237"),
        a = n("49111");

    function s(e) {
        let {
            summary: t,
            guildId: n,
            channelId: s,
            rating: r = null,
            problem: o = null,
            feedback: u = "",
            location: d
        } = e;
        (0, i.setSummaryFeedback)(t, r), l.default.track(a.AnalyticEvents.SUMMARIES_REPORT_PROBLEM, {
            reason: o,
            location: d,
            rating: r,
            feedback: u,
            participant_count: t.people.length,
            message_count: t.count,
            start_message_id: t.startId,
            guild_id: n,
            channel_id: s,
            summary_id: t.id,
            summary_source: t.source,
            summary_type: t.type
        })
    }
}