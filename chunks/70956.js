function(_, E, e) {
    "use strict";
    e.r(E);
    let I = Object.freeze({
            HALF_SECOND: 500,
            SECOND: 1e3,
            MINUTE: 6e4,
            HOUR: 36e5,
            DAY: 864e5,
            WEEK: 6048e5,
            DAYS_30: 2592e6
        }),
        o = Object.freeze({
            SECOND: 1,
            MINUTE: 60,
            HOUR: 3600,
            DAY: 86400,
            DAYS_30: 2592e3
        });
    E.default = {
        Millis: I,
        Seconds: o
    }
}