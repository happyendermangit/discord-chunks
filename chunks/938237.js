function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        markAnalyticsFeedItemSeen: function() {
            return n
        },
        markAnalyticsFeedItemUnseen: function() {
            return a
        },
        flushAnalyticsFeedItems: function() {
            return d
        }
    });
    var i = s("913144");

    function n(e, t, s) {
        i.default.dispatch({
            type: "ANALYTICS_FEED_ITEM_SEEN",
            id: e,
            feedItemId: t,
            timestampMillis: s
        })
    }

    function a(e, t, s) {
        i.default.dispatch({
            type: "ANALYTICS_FEED_ITEM_UNSEEN",
            id: e,
            feedItemId: t,
            timestampMillis: s
        })
    }

    function d(e, t) {
        i.default.dispatch({
            type: "ANALYTICS_FEED_FLUSH",
            id: e,
            force: t
        })
    }
}