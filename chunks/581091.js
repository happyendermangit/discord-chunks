function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAbbreviatedFormatter: function() {
            return l
        },
        getFullFormatter: function() {
            return f
        },
        default: function() {
            return _
        }
    });
    var s = n("866227"),
        i = n.n(s),
        r = n("782340");
    let a = 3600,
        o = 24 * a,
        d = 30 * o,
        u = 12 * d,
        l = () => ({
            minutes: r.default.Messages.DURATION_MINUTES_SHORT,
            hours: r.default.Messages.DURATION_HOURS_SHORT,
            days: r.default.Messages.DURATION_DAYS_SHORT,
            months: r.default.Messages.DURATION_MONTHS_SHORT,
            years: r.default.Messages.DURATION_YEARS_SHORT
        }),
        f = () => ({
            minutes: r.default.Messages.DURATION_MINUTES_AGO,
            hours: r.default.Messages.DURATION_HOURS_AGO,
            days: r.default.Messages.DURATION_DAYS_AGO,
            months: r.default.Messages.DURATION_MONTHS_AGO,
            years: r.default.Messages.DURATION_YEARS_AGO
        });

    function _(e) {
        let {
            since: t,
            getFormatter: n
        } = e, s = i().diff(i(t), "s");
        return function(e) {
            let {
                seconds: t,
                getFormatter: n
            } = e, s = n(), i = "";
            return i = t < 60 ? s.minutes.format({
                minutes: 1
            }) : t < a ? s.minutes.format({
                minutes: Math.floor(t / 60)
            }) : t < o ? s.hours.format({
                hours: Math.floor(t / a)
            }) : t < d ? s.days.format({
                days: Math.floor(t / o)
            }) : t < u ? s.months.format({
                months: Math.floor(t / d)
            }) : s.years.format({
                years: Math.floor(t / u)
            })
        }({
            seconds: s,
            getFormatter: n
        })
    }
}