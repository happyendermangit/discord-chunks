function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        getEmojiHotrail: function() {
            return o
        },
        default: function() {
            return u
        }
    });
    var n = i("884691"),
        r = i("115279");

    function o(e) {
        let {
            topEmojis: t,
            newlyAddedEmojis: i,
            rowSize: n = r.EMOJI_ROW_SIZE
        } = e, o = t.slice(0, n - i.length);
        return {
            visibleTopEmojis: o,
            visibleNewlyAddedEmojis: i,
            allEmojis: o.concat(i)
        }
    }

    function u(e) {
        return n.useMemo(() => o(e), [e])
    }
}