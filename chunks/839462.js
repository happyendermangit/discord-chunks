function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var l = n("404828"),
        r = n.n(l),
        a = n("385976"),
        i = n("867805"),
        u = n("402671"),
        o = n("290689");
    let s = {
        s: {
            requiredFirstCharacters: ["~"],
            match: r.inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
        },
        highlight: {
            order: o.default.order,
            match: () => null
        },
        emoji: {
            order: o.default.order,
            requiredFirstCharacters: [":"],
            match(e) {
                let t = i.default.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
                return null != t && "" !== i.default.convertNameToSurrogate(t[1]) ? t : null
            },
            parse(e) {
                let [t, n] = e, l = i.default.convertNameToSurrogate(n);
                return null == l || "" === l ? {
                    type: "text",
                    content: t
                } : {
                    name: ":".concat(n, ":"),
                    surrogate: l,
                    src: u.default.getURL(l)
                }
            }
        },
        customEmoji: {
            order: r.defaultRules.codeBlock.order,
            requiredFirstCharacters: ["<"],
            match: e => /^<(a)?:(\w+):(\d+)>/.exec(e),
            parse(e, t, n) {
                let [l, r, i, u] = e, {
                    guildId: o
                } = n, s = a.default.getDisambiguatedEmojiContext(o).getById(u), c = null == s || s.require_colons;
                return null != s && (i = s.name), {
                    emojiId: u,
                    name: c ? ":".concat(i, ":") : i,
                    animated: "a" === r
                }
            }
        },
        text: {
            parse(e) {
                let t = i.default.findInlineEmojisFromSurrogates(e[0]),
                    n = 0;
                return t.map(e => {
                    if ("text" === e.type) {
                        let t = {
                            index: n,
                            0: e.text
                        };
                        return n += e.text.length, {
                            type: "text",
                            content: e.text,
                            originalMatch: t
                        }
                    } {
                        let t = {
                            index: n,
                            0: e.surrogate
                        };
                        return n += e.surrogate.length, {
                            type: "emoji",
                            name: e.emojiName,
                            surrogate: e.surrogate,
                            src: u.default.getURL(e.surrogate),
                            originalMatch: t
                        }
                    }
                })
            }
        },
        looseEm: {
            ...r.defaultRules.em,
            match: r.inlineRegex(RegExp("^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)")),
            parse: (e, t, n) => ({
                type: "em",
                content: t(e[1], n),
                originalMatch: e
            })
        }
    };
    var c = s
}