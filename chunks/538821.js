function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        era: "era",
        year: "year",
        month: "month",
        day: "day",
        hour: "hour",
        minute: "minute",
        second: "second",
        dayPeriod: "AM/PM",
        calendar: "Calendar",
        startDate: "Start Date",
        endDate: "End Date",
        weekday: "day of the week",
        timeZoneName: "time zone",
        selectedDateDescription: e => "Selected Date: ".concat(e.date),
        selectedRangeDescription: e => "Selected Range: ".concat(e.startDate, " to ").concat(e.endDate),
        selectedTimeDescription: e => "Selected Time: ".concat(e.time)
    }
}