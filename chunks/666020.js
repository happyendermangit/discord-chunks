function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        subscribeMembers: function() {
            return l
        },
        unsubscribeMembers: function() {
            return u
        },
        subscribeToMemberUpdates: function() {
            return o
        },
        unsubscribeFromMemberUpdates: function() {
            return s
        },
        subscribeChannel: function() {
            return a
        },
        subscribeChannelDimensions: function() {
            return d
        }
    }), i("424973");
    var n = i("913144"),
        r = i("696605");

    function l(e, t) {
        n.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
            guildId: e,
            userIds: t
        })
    }

    function u(e, t) {
        n.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
            guildId: e,
            userIds: t
        })
    }

    function o(e) {
        n.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
            guildId: e
        })
    }

    function s(e) {
        n.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
            guildId: e
        })
    }

    function a(e, t, i) {
        n.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_CHANNEL",
            guildId: e,
            channelId: t,
            ranges: i
        })
    }

    function d(e) {
        let {
            guildId: t,
            channelId: i,
            y: n,
            height: l,
            rowHeight: u
        } = e;

        function o(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return Math.max(0, Math.ceil(Math.ceil(e / u)) + t)
        }
        let s = [];

        function d(e) {
            let t = e + (r.MINIMUM_RANGE - 1);
            return s.push([e, t]), t + 1
        }
        let f = o(.5 * l),
            c = o(n, -f),
            h = o(n + l, f);
        for (c > 0 && (c = Math.max(d(0), c)), c = Math.floor(c / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; c <= h;) c = d(c);
        a(t, i, s)
    }
}