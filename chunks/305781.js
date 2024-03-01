function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        fetchTopEmojis: function() {
            return u
        },
        updateNewlyAddedLastSeen: function() {
            return a
        },
        updateNewlyAddedEmojiSeenAcknowledged: function() {
            return s
        }
    });
    var n = i("872717"),
        r = i("913144"),
        o = i("49111");

    function u(e) {
        r.default.dispatch({
            type: "TOP_EMOJIS_FETCH",
            guildId: e
        }), n.default.get({
            url: o.Endpoints.TOP_EMOJIS_FOR_GUILD(e),
            oldFormErrors: !0
        }).then(t => r.default.dispatch({
            type: "TOP_EMOJIS_FETCH_SUCCESS",
            guildId: e,
            topEmojisMetadata: t.body.items.map(e => ({
                emojiId: e.emoji_id,
                rank: e.emoji_rank
            })).sort((e, t) => e.rank - t.rank)
        }), () => r.default.dispatch({
            type: "TOP_EMOJIS_FETCH_FAILURE",
            guildId: e
        }))
    }

    function a(e, t) {
        r.default.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
        }), null != e && null != t && r.default.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
            guildId: e,
            emojiId: t
        })
    }

    function s(e, t) {
        null != e && null != t && r.default.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
            guildId: e,
            emojiId: t
        })
    }
}