function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addReactionPickerAnimation: function() {
            return i
        },
        clearReactionPickerAnimation: function() {
            return a
        }
    });
    var l = n("913144");

    function i(e, t, n, i) {
        l.default.dispatch({
            type: "BURST_REACTION_PICKER_ANIMATION_ADD",
            messageId: e,
            emojiName: t,
            emojiId: n,
            startPosition: i
        })
    }

    function a(e, t, n) {
        l.default.dispatch({
            type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
            messageId: e,
            emojiName: t,
            emojiId: n
        })
    }
}