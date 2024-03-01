function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return n
        }
    });
    var t = E("862205");
    let o = (0, t.createExperiment)({
        kind: "user",
        id: "2024-02_emoji_suggestions",
        label: "Emoji Suggestions Experiment",
        defaultConfig: {
            isEmojiSuggestionsEnabled: !1,
            isEmojiCaptionsEnabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enables Emoji Suggestions without Captions",
            config: {
                isEmojiSuggestionsEnabled: !0,
                isEmojiCaptionsEnabled: !1
            }
        }, {
            id: 2,
            label: "Enables Emoji Suggestions with Captions",
            config: {
                isEmojiSuggestionsEnabled: !0,
                isEmojiCaptionsEnabled: !0
            }
        }]
    });
    var n = o
}