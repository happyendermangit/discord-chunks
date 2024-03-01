function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return W
        }
    }), n("781738"), n("424973"), n("222007");
    var l = n("917351"),
        r = n.n(l),
        a = n("404828"),
        i = n.n(a),
        u = n("980215"),
        o = n("867805"),
        s = n("235004"),
        c = n("42203"),
        d = n("305961"),
        f = n("697218"),
        p = n("387111"),
        h = n("158998"),
        m = n("946897"),
        g = n("632886"),
        E = n("270926"),
        C = n("647374"),
        y = n("693078"),
        L = n("290689"),
        A = n("839462"),
        S = n("646630"),
        _ = n("788554"),
        T = n("49111"),
        I = n("317041"),
        N = n("680894"),
        v = n("782340");
    let R = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
        b = /^$|\n *$/,
        M = /^ *>>> ?/,
        x = /^ *> ?/gm;

    function U(e) {
        let t = (0, C.punycodeLink)(e[1]);
        if (null == t) return {
            type: "text",
            content: e[1]
        };
        let {
            displayTarget: n,
            target: l
        } = t;
        return {
            type: "link",
            content: [{
                type: "text",
                content: n
            }],
            target: l,
            title: void 0
        }
    }
    let O = e => {
            let t = c.default.getChannel(e);
            return null == t ? void 0 : t.getGuildId()
        },
        D = e => null != e.guildId ? d.default.getGuild(e.guildId) : null != e.channelId ? d.default.getGuild(O(e.channelId)) : null,
        G = {
            newline: i.defaultRules.newline,
            paragraph: i.defaultRules.paragraph,
            escape: {
                ...i.defaultRules.escape,
                match: (e, t, n) => !1 === t.allowEscape ? null : i.defaultRules.escape.match(e, t, n)
            },
            blockQuote: {
                ...i.defaultRules.blockQuote,
                requiredFirstCharacters: [" ", ">"],
                match(e, t) {
                    let {
                        prevCapture: n,
                        inQuote: l,
                        nested: r
                    } = t;
                    if (l || r) return null;
                    if (null == n) return R.exec(e);
                    let a = n[0];
                    return b.test(a) ? R.exec(e) : null
                },
                parse(e, t, n) {
                    let l = e[0],
                        r = !!M.exec(l),
                        a = l.replace(r ? M : x, ""),
                        i = n.inQuote || !1,
                        u = n.inline || !1;
                    n.inQuote = !0, !r && (n.inline = !0);
                    let o = t(a, n);
                    return n.inQuote = i, n.inline = u, 0 === o.length && o.push({
                        type: "text",
                        content: " "
                    }), {
                        content: o,
                        type: "blockQuote"
                    }
                }
            },
            link: C.default,
            autolink: {
                ...i.defaultRules.autolink,
                parse: U
            },
            url: {
                ...i.defaultRules.url,
                requiredFirstCharacters: ["h", "s"],
                match(e, t) {
                    if (!t.inline) return null;
                    let n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
                    if (null != n) {
                        let e = 0,
                            t = n[0];
                        for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
                            let n = t.indexOf("(", e);
                            if (-1 === n) {
                                t = t.slice(0, t.length - 1);
                                break
                            }
                            e = n + 1
                        }
                        n[0] = n[1] = t
                    }
                    return n
                },
                parse: U
            },
            strong: i.defaultRules.strong,
            em: i.defaultRules.em,
            u: i.defaultRules.u,
            br: i.defaultRules.br,
            text: L.default,
            inlineCode: {
                ...i.defaultRules.inlineCode,
                parse(e, t, n) {
                    let l = i.defaultRules.inlineCode.parse(e, t, n);
                    return !0 === n.parseInlineCodeChildContent ? {
                        ...l,
                        validationChildContent: t(l.content, n)
                    } : l
                }
            },
            emoticon: {
                order: L.default.order,
                requiredFirstCharacters: ["\xaf"],
                match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
                parse: e => ({
                    type: "text",
                    content: e[1]
                })
            },
            codeBlock: {
                order: i.defaultRules.codeBlock.order,
                requiredFirstCharacters: ["`"],
                match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
                parse(e, t, n) {
                    var l, r;
                    return {
                        lang: null !== (l = e[1]) && void 0 !== l ? l : "",
                        content: null !== (r = e[2]) && void 0 !== r ? r : "",
                        inQuote: n.inQuote || !1
                    }
                }
            },
            roleMention: {
                order: L.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<@&(\d+)>/.exec(e),
                parse(e, t, n) {
                    let [l, r] = e;
                    if (n.returnMentionIds) return {
                        type: "roleMention",
                        id: r
                    };
                    let a = D(n),
                        i = null != a ? a.roles[r] : null;
                    return null == i ? {
                        type: "text",
                        content: "@".concat(v.default.Messages.DELETED_ROLE_PLACEHOLDER)
                    } : {
                        type: "mention",
                        channelId: n.channelId,
                        guildId: null != a ? a.id : null,
                        roleId: r,
                        roleColor: i.color,
                        color: i.color,
                        colorString: i.colorString,
                        content: [{
                            type: "text",
                            content: "@".concat(i.name)
                        }]
                    }
                }
            },
            mention: {
                order: L.default.order,
                requiredFirstCharacters: ["<", "@"],
                match(e, t) {
                    let n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                    return null != n && ("@Clyde" !== n[0] || (0, u.getClydeEnabled)(D(t), c.default.getChannel(t.channelId))) ? n : null
                },
                parse(e, t, n) {
                    let l, r;
                    if (n.returnMentionIds) return null == e[1] ? {
                        type: "mention",
                        text: e[0]
                    } : {
                        type: "mention",
                        id: e[1]
                    };
                    let a = f.default.getUser(e[1]),
                        i = c.default.getChannel(n.channelId);
                    if (null != a && (r = a.id, l = a.toString(), null != i)) {
                        var o;
                        l = null !== (o = p.default.getNickname(i.getGuildId(), n.channelId, a)) && void 0 !== o ? o : h.default.getName(a)
                    }
                    null == a && "@Clyde" === e[0] && (0, u.getClydeEnabled)(D(n), i) && (r = N.CLYDE_AI_USER_ID);
                    let s = e[1],
                        d = null != s && T.ID_REGEX.test(s.trim()),
                        m = d && n.unknownUserMentionPlaceholder ? "@".concat(v.default.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                    return {
                        userId: r,
                        channelId: n.channelId,
                        guildId: null == i ? void 0 : i.getGuildId(),
                        roleName: e[2],
                        content: [{
                            type: "text",
                            content: null != l ? "@".concat(l) : m
                        }]
                    }
                }
            },
            channelMention: g.default.channelMention,
            channelOrMessageUrl: g.default.channelOrMessageUrl,
            mediaPostLink: g.default.mediaPostLink,
            attachmentLink: m.default.attachmentLink,
            commandMention: {
                order: i.defaultRules.text.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(e),
                parse(e, t, n) {
                    if (n.returnMentionIds) return {
                        type: "commandMention",
                        id: e[2]
                    };
                    let [, ...l] = e[1].split(" "), r = "".concat(e[2]).concat([...l].map(e => "".concat(I.SUB_COMMAND_KEY_SEPARATOR).concat(e)).join(""));
                    return {
                        channelId: n.channelId,
                        commandId: e[2],
                        commandName: e[1],
                        commandKey: r,
                        content: [{
                            type: "text",
                            content: "".concat(e[1])
                        }]
                    }
                }
            },
            emoji: {
                order: L.default.order,
                requiredFirstCharacters: [":"],
                match(e) {
                    let t = o.default.EMOJI_NAME_RE.exec(e);
                    return null != t && "" !== o.default.convertNameToSurrogate(t[1]) ? t : null
                },
                parse(e) {
                    let t = o.default.convertNameToSurrogate(e[1]);
                    return {
                        type: "text",
                        content: null == t || "" === t ? ":".concat(e[1], ":") : t
                    }
                }
            },
            soundboard: {
                order: L.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<sound:(\d+)>/.exec(e),
                parse(e, t, n) {
                    var l;
                    let r = e[1],
                        a = s.default.getSoundById(r),
                        i = null !== (l = null == a ? void 0 : a.name) && void 0 !== l ? l : r;
                    return {
                        type: "soundboard",
                        id: r,
                        soundId: r,
                        channelId: n.channelId,
                        content: i
                    }
                }
            },
            customEmoji: {
                order: L.default.order,
                requiredFirstCharacters: ["<"],
                match: e => /^<a?:(\w+):(\d+)>/.exec(e),
                parse: e => ({
                    type: "text",
                    content: ":".concat(e[1], ":")
                })
            },
            timestamp: {
                order: L.default.order - 1,
                requiredFirstCharacters: ["<"],
                match: e => S.TIMESTAMP_REGEX.exec(e),
                parse(e) {
                    let [t, n, l] = e, r = (0, S.parseTimestamp)(n, l);
                    return null == r ? {
                        type: "text",
                        content: t
                    } : r
                }
            },
            s: {
                order: i.defaultRules.u.order,
                requiredFirstCharacters: ["~"],
                match: i.inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                parse: i.defaultRules.u.parse
            },
            spoiler: {
                order: L.default.order,
                requiredFirstCharacters: ["|"],
                match: e => T.MARKDOWN_SPOILER_REGEXP.exec(e),
                parse: (e, t, n) => ({
                    content: t(e[1], n),
                    channelId: n.channelId
                })
            },
            staticRouteLink: {
                order: L.default.order,
                requiredFirstCharacters: ["<"],
                match: e => T.MARKDOWN_STATIC_ROUTE_NAME_REGEXP.exec(e),
                parse(e, t, n) {
                    let l = {
                        home: v.default.Messages.SERVER_GUIDE,
                        guide: v.default.Messages.SERVER_GUIDE,
                        browse: v.default.Messages.CHANNEL_BROWSER_TITLE,
                        customize: v.default.Messages.CHANNELS_AND_ROLES
                    };
                    return {
                        content: [{
                            type: "text",
                            content: l[e[1]]
                        }],
                        channelId: e[1],
                        guildId: O(n.channelId),
                        id: e[1]
                    }
                }
            },
            heading: E.default,
            list: y.default
        },
        P = (0, _.default)([G, A.default]),
        w = r.omit(P, ["inlineCode", "codeBlock", "br", "blockQuote"]),
        k = r.omit(P, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
        F = r.omit(P, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink"]),
        q = r.omit((0, _.default)([P, {
            inlineCode: {
                match(e, t, n) {
                    let l = P.codeBlock.match(e, t, n);
                    if (null != l) return l;
                    let r = P.inlineCode.match(e, t, n);
                    if (null != r) return r
                }
            }
        }]), ["blockQuote", "codeBlock", "br"]),
        B = r.omit(P, ["codeBlock", "br", "blockQuote"]),
        H = r.omit(P, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline"]),
        V = r.omit(P, ["codeBlock", "blockQuote", "br"]),
        K = r.omit(P, ["codeBlock", "br", "inlineCode"]);

    function Y(e, t) {
        return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
    }
    let j = (0, _.default)([{
        highlightWord: {
            order: -1,
            match(e, t) {
                if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
                let n = e.indexOf(t.highlightWord);
                if (-1 === n) return null;
                let l = !Y(e, n);
                if (l)
                    do n = e.indexOf(t.highlightWord, n + 1), l = !Y(e, n); while (l && -1 !== n);
                if (-1 === n) return null;
                let r = e.substring(0, n),
                    a = e.substring(n + t.highlightWord.length);
                return [e, t.highlightWord, r, a]
            },
            parse(e, t, n) {
                let l = t(e[2], n),
                    r = t(e[3], n);
                return [...l, {
                    type: "highlight",
                    content: e[1]
                }, ...r]
            }
        }
    }, r.omit(P, ["url"])]);
    var W = {
        RULES: P,
        CHANNEL_TOPIC_RULES: w,
        VOICE_CHANNEL_STATUS_RULES: k,
        EMBED_TITLE_RULES: F,
        INLINE_REPLY_RULES: q,
        GUILD_VERIFICATION_FORM_RULES: B,
        GUILD_EVENT_RULES: V,
        PROFILE_BIO_RULES: H,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: j,
        NATIVE_SEARCH_RESULT_LINK_RULES: K
    }
}