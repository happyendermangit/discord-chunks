function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("888400"),
        i = n("718517"),
        l = n("333805"),
        u = n("782340");
    class a extends l.default {
        _getMessageFromRateLimit(e) {
            let t = e.body.retry_after,
                n = (0, r.diffAsUnits)(0, t * i.default.Millis.SECOND);
            return (0, r.unitsAsStrings)(n, {
                days: u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                hours: u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                minutes: u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
            })
        }
        constructor(e, t) {
            super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
        }
    }
    var o = a
}