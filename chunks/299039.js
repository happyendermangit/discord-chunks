function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISCORD_EPOCH: function() {
            return s.DISCORD_EPOCH
        },
        default: function() {
            return o
        }
    });
    var i = n("917351"),
        r = n.n(i),
        s = n("249654");

    function a(e) {
        return e
    }
    var o = {
        age: function(e) {
            return s.default.age(e)
        },
        extractTimestamp: function(e) {
            return s.default.extractTimestamp(e)
        },
        compare: function(e, t) {
            return s.default.compare(e, t)
        },
        atPreviousMillisecond: function(e) {
            return s.default.atPreviousMillisecond(e)
        },
        fromTimestamp: function(e) {
            return s.default.fromTimestamp(e)
        },
        keys: function(e) {
            return Object.keys(e)
        },
        forEach: function(e, t) {
            r.forEach(e, (e, n) => t(e, n))
        },
        forEachKey: function(e, t) {
            for (let n in e) t(n)
        },
        entries: function(e) {
            return Object.entries(e)
        },
        castChannelIdAsMessageId: function(e) {
            return e
        },
        castMessageIdAsChannelId: function(e) {
            return e
        },
        castGuildIdAsEveryoneGuildRoleId: function(e) {
            return e
        },
        castGuildIdAsReadStateChannelId: function(e) {
            return e
        },
        castUserIdAsReadStateChannelId: function(e) {
            return e
        },
        castSnowflakeAsUserId: function(e) {
            return e
        }
    }
}