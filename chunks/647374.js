function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        punycodeLink: function() {
            return I
        },
        default: function() {
            return C
        }
    }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("70102");
    var i = n("917351"),
        s = n.n(i),
        r = n("693566"),
        a = n.n(r);
    n("125601");
    var o = n("404828"),
        l = n.n(o),
        u = n("312016"),
        d = n("449008"),
        c = n("891137"),
        f = n("76216");
    let _ = new a({
        max: 50
    });

    function E(e) {
        let t = _.get(e);
        if (null != t) return t;
        let n = (0, f.sanitizeWhitespace)(e),
            i = (0, f.sanitizeUnicodeConfusables)(n),
            s = {
                whitespaceSanitized: n,
                fullySanitized: i
            };
        return _.set(e, s), s
    }
    let h = ["http:", "https:", "discord:"],
        g = [c.AST_KEY.TEXT, c.AST_KEY.UNDERLINE, c.AST_KEY.STRONG, c.AST_KEY.ITALICS, c.AST_KEY.STRIKETHROUGH, c.AST_KEY.INLINE_CODE, c.AST_KEY.SPOILER, c.AST_KEY.LINE_BREAK, c.AST_KEY.TIMESTAMP],
        m = [...g, c.AST_KEY.EMOJI, c.AST_KEY.CUSTOM_EMOJI],
        p = [c.AST_KEY.LIST, c.AST_KEY.HEADING, c.AST_KEY.BLOCK_QUOTE],
        S = [c.AST_KEY.TEXT],
        v = [c.AST_KEY.UNDERLINE, c.AST_KEY.STRONG, c.AST_KEY.ITALICS, c.AST_KEY.STRIKETHROUGH, c.AST_KEY.INLINE_CODE, c.AST_KEY.SPOILER, c.AST_KEY.LINE_BREAK, c.AST_KEY.TIMESTAMP, c.AST_KEY.EMOJI, c.AST_KEY.CUSTOM_EMOJI, c.AST_KEY.LIST, c.AST_KEY.HEADING, c.AST_KEY.BLOCK_QUOTE];

    function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        for (let i of (!Array.isArray(e) && (e = [e]), e)) {
            if (!t.includes(i.type)) return null;
            if (i.type === c.AST_KEY.INLINE_CODE) {
                let e = [...t, ...n];
                if (null == T(i.validationChildContent, e)) return null
            }
            if (Array.isArray(i.content) && null == T(i.content, t)) return null
        }
        return e
    }

    function I(e) {
        try {
            var t;
            let n = new URL(e),
                i = null !== (t = n.protocol) && void 0 !== t ? t : "";
            if (!h.includes(i.toLowerCase())) throw Error("Provided protocol is not allowed: " + i);
            if (("http:" === i || "https:" === i) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
            let s = (0, f.safelyMakeUrlHumanReadable)(n);
            n.username = "", n.password = "";
            let r = (0, f.safelyMakeUrlHumanReadable)(n);
            return {
                target: s,
                displayTarget: r
            }
        } catch (e) {
            return null
        }
    }
    var C = {
        ...l.defaultRules.link,
        match: (e, t, n) => t.allowLinks ? l.defaultRules.link.match(e, t, n) : null,
        parse(e, t, n) {
            let [i, r, a, o] = e, f = () => ({
                type: c.AST_KEY.TEXT,
                content: i
            }), _ = E(a), h = E(r), C = E(null != o ? o : ""), A = _.whitespaceSanitized, y = h.fullySanitized, N = C.fullySanitized, R = y.trim(), O = A.trim();
            if (0 === O.length || 0 === R.length) return f();
            let D = l.unescapeUrl(a),
                P = I(D),
                L = (0, u.default)(r).length > 0 || (0, u.default)(o).length > 0;
            if (null == P || L) return f();
            let M = {
                    ...n,
                    allowEscape: !1,
                    parseInlineCodeChildContent: !0
                },
                b = n.allowEmojiLinks ? m : g,
                U = [...b, ...p],
                w = [...S, ...v],
                k = t(y, M),
                V = T(k, U, [c.AST_KEY.EMOJI]),
                G = t(N, M),
                F = T(G, w);
            if (null == V || null == F) return f();
            let x = function e(t) {
                    let n = "";
                    for (let i of t) switch (i.type) {
                        case c.AST_KEY.TEXT:
                        case c.AST_KEY.INLINE_CODE:
                            n += i.content;
                            break;
                        case c.AST_KEY.CUSTOM_EMOJI:
                            n += i.name;
                            break;
                        case c.AST_KEY.EMOJI:
                            n += i.surrogate;
                            break;
                        case c.AST_KEY.LINE_BREAK:
                            n += "\n";
                            break;
                        case c.AST_KEY.STRONG:
                        case c.AST_KEY.ITALICS:
                        case c.AST_KEY.UNDERLINE:
                        case c.AST_KEY.STRIKETHROUGH:
                        case c.AST_KEY.SPOILER:
                            n += e(i.content);
                            break;
                        case c.AST_KEY.TIMESTAMP:
                            n += "<timestamp>";
                            break;
                        case c.AST_KEY.BLOCK_QUOTE:
                        case c.AST_KEY.LIST:
                        case c.AST_KEY.HEADING:
                            n += "<".concat(i.type, "Content>");
                            break;
                        default:
                            (0, d.assertNever)(i.type)
                    }
                    return n
                }(V),
                B = 0 === x.trim().length;
            if (B) return f();
            let H = s.pick(t.rules, b),
                Y = l.parserFor(H),
                j = Y(h.whitespaceSanitized, M),
                W = C.whitespaceSanitized,
                {
                    target: K
                } = P;
            return {
                content: j,
                target: K,
                title: W
            }
        }
    }
}