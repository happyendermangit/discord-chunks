function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("914010"),
        s = n("558217"),
        a = n("185923");
    class o extends i.default {
        handleInteraction(e) {
            let {
                interaction: t
            } = e;
            if ([a.EmojiInteractionPoint.EmojiButtonMouseEntered].includes(t)) {
                let e = r.default.getGuildId();
                (0, s.maybeFetchTopEmojisByGuild)(e)
            }
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                EMOJI_INTERACTION_INITIATED: this.handleInteraction
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new o
}