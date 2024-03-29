function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        getAbbreviatedFormatter: function() {
            return d
        },
        getFullFormatter: function() {
            return _
        }
    });
    var i = n("913527"),
        r = n.n(i),
        s = n("689938");
    let a = 3600,
        o = 86400,
        l = 2592e3,
        u = 31104e3,
        d = () => ({
            minutes: s.default.Messages.DURATION_MINUTES_SHORT,
            hours: s.default.Messages.DURATION_HOURS_SHORT,
            days: s.default.Messages.DURATION_DAYS_SHORT,
            months: s.default.Messages.DURATION_MONTHS_SHORT,
            years: s.default.Messages.DURATION_YEARS_SHORT
        }),
        _ = () => ({
            minutes: s.default.Messages.DURATION_MINUTES_AGO,
            hours: s.default.Messages.DURATION_HOURS_AGO,
            days: s.default.Messages.DURATION_DAYS_AGO,
            months: s.default.Messages.DURATION_MONTHS_AGO,
            years: s.default.Messages.DURATION_YEARS_AGO
        });

    function c(e) {
        let {
            since: t,
            getFormatter: n
        } = e;
        return function(e) {
            let {
                seconds: t,
                getFormatter: n
            } = e, i = n(), r = "";
            return r = t < 60 ? i.minutes.format({
                minutes: 1
            }) : t < a ? i.minutes.format({
                minutes: Math.floor(t / 60)
            }) : t < o ? i.hours.format({
                hours: Math.floor(t / a)
            }) : t < l ? i.days.format({
                days: Math.floor(t / o)
            }) : t < u ? i.months.format({
                months: Math.floor(t / l)
            }) : i.years.format({
                years: Math.floor(t / u)
            })
        }({
            seconds: r()().diff(r()(t), "s"),
            getFormatter: n
        })
    }
}