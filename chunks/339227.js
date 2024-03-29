function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parse: function() {
            return M
        }
    }), n("47120"), n("411104"), n("757143"), n("653041");
    var i = n("512722"),
        r = n.n(i),
        s = n("31775"),
        a = n.n(s),
        o = n("302454"),
        l = n("25209"),
        u = n("710845"),
        d = n("772096"),
        _ = n("428595"),
        c = n("594199"),
        E = n("364458"),
        I = n("70956"),
        T = n("40786"),
        f = n("362092");
    let S = {
            link: {
                type: "skip"
            },
            highlight: {
                type: "skip"
            },
            blockQuote: {
                type: "skip"
            },
            codeBlock: {
                type: "skip"
            },
            list: {
                type: "skip"
            },
            heading: {
                type: "skip"
            },
            channelOrMessageUrl: {
                type: "skip"
            },
            mediaPostLink: {
                type: "skip"
            },
            attachmentLink: {
                type: "skip"
            },
            newline: {
                type: "verbatim"
            },
            br: {
                type: "verbatim"
            },
            paragraph: {
                type: "verbatim"
            },
            text: {
                type: "verbatim"
            },
            emoticon: {
                type: "verbatim"
            },
            mention: {
                type: "inlineObject"
            },
            roleMention: {
                type: "inlineObject"
            },
            commandMention: {
                type: "inlineObject"
            },
            channelMention: {
                type: "inlineObject"
            },
            emoji: {
                type: "inlineObject"
            },
            customEmoji: {
                type: "inlineObject"
            },
            em: {
                type: "inlineStyle",
                before: "*",
                after: "*"
            },
            looseEm: {
                type: "inlineStyle",
                before: "*",
                after: " *"
            },
            autolink: {
                type: "inlineStyle",
                before: "<",
                after: ">"
            },
            strong: {
                type: "inlineStyle",
                before: "**",
                after: "**"
            },
            u: {
                type: "inlineStyle",
                before: "__",
                after: "__"
            },
            s: {
                type: "inlineStyle",
                before: "~~",
                after: "~~"
            },
            escape: {
                type: "inlineStyle",
                before: "\\",
                after: ""
            },
            inlineCode: {
                type: "inlineStyle",
                before: "`",
                after: "`"
            },
            staticRouteLink: {
                type: "inlineStyle",
                before: "<id:",
                after: ">"
            },
            soundboard: {
                type: "inlineStyle",
                before: "<sound:",
                after: ">"
            },
            spoiler: {
                type: "inlineStyle",
                before: "||",
                after: "||"
            },
            url: {
                type: "inlineStyle",
                before: "",
                after: ""
            },
            codeBlockText: {
                type: "inlineStyle",
                before: "",
                after: ""
            },
            codeBlockSyntax: {
                type: "inlineStyle",
                before: "",
                after: ""
            },
            codeBlockLang: {
                type: "inlineStyle",
                before: "",
                after: ""
            },
            timestamp: {
                type: "inlineObject"
            }
        },
        h = new Set(["*", "_", "\\"]),
        A = {},
        m = {};
    for (let e in _.default.RULES) {
        if (!(e in S)) throw Error("Slate: Unknown markdown rule: ".concat(e, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
        let t = S[e];
        "skip" !== t.type && (A[e] = N(_.default.RULES[e])), "skip" !== t.type && "inlineObject" !== t.type && (m[e] = N("text" === e ? c.default : _.default.RULES[e]))
    }

    function N(e) {
        r()(null != e.parse, "Slate: rule must have a parse function");
        let t = e.parse;
        return {
            ...e,
            parse(e, n, i) {
                let r = t.call(this, e, n, i);
                return !(r instanceof Array) && (r.originalMatch = e), r
            }
        }
    }
    let O = {
            url: {
                parse: e => null == (0, d.punycodeLink)(e[1]) ? {
                    type: "text",
                    content: e[0],
                    originalMatch: e
                } : {
                    type: "link",
                    content: e[1],
                    originalMatch: e
                }
            },
            autolink: {
                parse: e => null == (0, d.punycodeLink)(e[1]) ? {
                    type: "text",
                    content: e[0],
                    originalMatch: e
                } : {
                    type: "autolink",
                    content: e[1],
                    originalMatch: e
                }
            },
            codeBlockSyntax: {
                order: o.defaultRules.inlineCode.order - .1,
                match: e => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
                parse: e => null != e[2] && "" !== e[2] && f.isKnownLang(e[2]) ? [{
                    type: "codeBlockSyntax",
                    content: e[1],
                    originalMatch: e
                }, {
                    type: "codeBlockLang",
                    content: e[2],
                    originalMatch: e
                }] : {
                    type: "codeBlockSyntax",
                    content: e[0],
                    originalMatch: e
                }
            }
        },
        p = (0, E.default)([A, O]),
        R = (0, E.default)([m, O]),
        C = l.astParserFor(p),
        g = l.astParserFor(R),
        L = {
            max: 1 / 0,
            maxAge: 1 * I.default.Millis.MINUTE,
            updateAgeOnGet: !0
        },
        D = new(a())(L),
        v = new(a())(L);

    function M(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = f.findBackticks(e);
        if (r.push(e.length), 1 === r.length && n) return [];
        let s = 0,
            a = n,
            o = [];
        for (let n of r) {
            if (a) o.push({
                text: e.substring(s, n),
                start: s,
                attributes: ["codeBlockText"],
                data: void 0
            });
            else {
                let a = n === r[r.length - 2] ? e.substring(n + 3) : "";
                n += 3 + (null != a.match(f.caseInsensitiveLangRegex) ? a : "").length;
                let l = e.substring(s, n);
                "" !== l && (function(e, t, n) {
                    let i = [],
                        r = n ? v : D,
                        s = r.get(e);
                    if (null != s) return s;
                    let a = e.replace(/\r\n/g, " \n").replace(/[\r\f]/g, " ").replace(/\t/g, " ") + "\n\n",
                        o = {
                            originalMatch: {
                                index: 0,
                                0: ""
                            },
                            type: "paragraph",
                            content: (n ? g : C)(a, !1, {
                                returnMentionIds: !0,
                                disableAutoBlockNewlines: !0,
                                guildId: t
                            })
                        };
                    y(i, a, o, 0, []);
                    let l = function(e) {
                        if (0 === (e = e.filter(e => e.text.length > 0)).length) return e;
                        let t = [e[0]];
                        for (let n = 1; n < e.length; n++) {
                            let i = t[t.length - 1],
                                r = i.start + i.text.length,
                                s = e[n];
                            s.start === r && null == i.data && null == s.data && i.attributes.join("-") === s.attributes.join("-") ? i.text += s.text : t.push(s)
                        }
                        return t
                    }(i);
                    return r.set(e, l), l
                })(l, t, i).forEach(e => {
                    o.push({
                        ...e,
                        start: e.start + s
                    })
                })
            }
            a = !a, s = n
        }
        return o
    }

    function y(e, t, n, i, s) {
        let {
            content: a,
            type: o,
            originalMatch: l
        } = n;
        switch (r()(null != l, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), o) {
            case "newline":
            case "br":
            case "paragraph":
            case "text":
            case "emoticon":
                return P(e, t, a || "", i, s);
            case "emoji":
            case "customEmoji": {
                let r = t.substring(i);
                if (!r.startsWith(l[0]) && (i = w(e, t, i, t.length), r = t.substring(i)), r.startsWith(l[0])) return b({
                    result: e,
                    sourceText: t,
                    text: l[0],
                    originalStart: i,
                    attributes: [o],
                    data: n
                });
                throw Error("Slate: Unable to find emoji: ".concat(l[0], " in ").concat(t, " at ").concat(i))
            }
            case "mention":
            case "roleMention":
            case "channelMention":
            case "commandMention":
            case "staticRouteLink":
            case "soundboard":
            case "channel": {
                let {
                    text: s,
                    id: a
                } = n;
                if (null != s) return r()(s === l[0], "Slate: text mentions must exactly match the regex match"), b({
                    result: e,
                    sourceText: t,
                    text: s,
                    originalStart: i,
                    attributes: ["textMention"],
                    data: {
                        text: s
                    }
                });
                return b({
                    result: e,
                    sourceText: t,
                    text: l[0],
                    originalStart: i,
                    attributes: [o],
                    data: {
                        id: a
                    }
                })
            }
            case "timestamp":
                if (T.default.getCurrentConfig({
                        location: "c70cbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled) return b({
                    result: e,
                    sourceText: t,
                    text: l[0],
                    originalStart: i,
                    attributes: [o],
                    data: n
                });
                return P(e, t, l[0], i, s);
            case "em":
            case "autolink":
            case "strong":
            case "u":
            case "s":
            case "escape":
            case "inlineCode":
            case "codeBlockSyntax":
            case "codeBlockLang":
            case "spoiler":
            case "url":
            case "link": {
                i = G(t, i);
                let {
                    before: n,
                    after: r
                } = function(e, t, n, i) {
                    if ("inlineCode" === t) return {
                        before: i[1],
                        after: i[1]
                    };
                    if ("em" === t && "_" === e.substring(n, n + 1)) return {
                        before: "_",
                        after: "_"
                    };
                    let r = S["link" === t ? "url" : t];
                    if ("inlineStyle" === r.type) return r;
                    throw Error("Slate: rule must be an inlineStyle")
                }(t, o, i, l);
                return i = U(e, t, n, i, "syntaxBefore"), s.push(o), i = P(e, t, null != a ? a : "", i, s), s.pop(), i = U(e, t, r, i, "syntaxAfter"), G(t, i)
            }
            default:
                throw Error("Slate: Unknown rule type: ".concat(o))
        }
    }

    function P(e, t, n, i, r) {
        return "string" == typeof n ? i = b({
            result: e,
            sourceText: t,
            text: n,
            originalStart: i,
            attributes: r,
            data: null
        }) : (!(n instanceof Array) && (n = [n]), n.forEach(n => {
            i = y(e, t, n, i, r)
        })), G(t, i)
    }

    function U(e, t, n, i, s) {
        if (n.length > 0) {
            let a = t.indexOf(n, i),
                o = t.substring(i, a + n.length);
            r()(a >= 0, "Slate: Unable to find syntax characters"), e.push({
                text: o,
                attributes: [s],
                start: i,
                data: null
            }), i = a + n.length
        }
        return i
    }

    function b(e) {
        let {
            result: t,
            sourceText: n,
            text: i,
            originalStart: r,
            attributes: s,
            data: a
        } = e, o = G(n, r);
        for (;
            "\n" === i.charAt(0) || " " === i.charAt(0);) i = i.substring(1);
        let l = n.indexOf(i, o);
        if (l !== o ? o = r = w(t, n, o, l) : "\\" === i && "\\" === n.charAt(l + 1) && (l++, r = ++o), l !== o) throw new u.default("MarkdownToSlate").error(JSON.stringify({
            sourceText: n,
            searchText: i,
            searchStartsAt: n.substring(o),
            startPos: o
        })), Error("Slate: Unable to find content in source text!");
        let d = o + i.length,
            _ = n.substring(r, d);
        return t.push({
            text: _,
            attributes: s.slice(),
            start: r,
            data: a
        }), d
    }

    function G(e, t) {
        for (;
            "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
        return t
    }

    function w(e, t, n, i) {
        for (; n < i;)
            if (h.has(t[n])) n = U(e, t, t[n], n, "syntaxBefore"), n = G(t, n);
            else break;
        return n
    }
}