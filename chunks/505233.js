function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NitroBadgeOnEmojiHoverExperiment: function() {
            return i
        }
    });
    var l = n("862205");
    let i = (0, l.createExperiment)({
        kind: "user",
        id: "2024-02_nitro_badge_on_emoji_hover",
        label: "Nitro Badge on Emoji Hover",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Users see Nitro badge when hovering the cursor on a custom emoji and clicking a custom emoji",
            config: {
                enabled: !0
            }
        }]
    })
}