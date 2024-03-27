function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var i = n("917351"),
        l = n.n(i),
        a = n("933805"),
        s = n("52140"),
        r = n("888198"),
        o = n("788554");
    let u = null;

    function d(e, t) {
        let n = {};
        return null != e.mention && null != u && (n = {
            mention: u
        }), (0, o.default)([e, ...t, n])
    }
    u = n("236180").default;
    let c = {
            enableBuildOverrides: !1,
            enableEmojiClick: !0
        },
        f = d(r.default.RULES, [(0, s.default)({
            enableBuildOverrides: !0
        })]),
        m = l.omit(d(r.default.RULES, [(0, s.default)(c)]), "paragraph", "newline"),
        p = d(r.default.CHANNEL_TOPIC_RULES, [(0, s.default)({
            ...c,
            emojiTooltipPosition: "bottom"
        }), {
            codeBlock: {
                react: r.default.RULES.text.react
            }
        }]),
        h = d(r.default.VOICE_CHANNEL_STATUS_RULES, [(0, s.default)({
            ...c,
            enableEmojiClick: !1
        })]),
        x = d(r.default.EMBED_TITLE_RULES, [(0, s.default)(c)]),
        E = d(r.default.INLINE_REPLY_RULES, [(0, s.default)(c)]),
        y = d(r.default.GUILD_VERIFICATION_FORM_RULES, [(0, s.default)(c)]),
        g = d(r.default.GUILD_EVENT_RULES, [(0, s.default)(c)]),
        S = d(r.default.INLINE_REPLY_RULES, [(0, s.default)({
            ...c,
            emoji: {
                height: 14,
                width: 14,
                lineHeight: 18
            }
        })]),
        C = d(r.default.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.default)(c)]),
        T = l.omit(d(r.default.RULES, [(0, s.default)({
            ...c,
            emoji: {
                height: 14,
                width: 14
            }
        })]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading"),
        _ = {
            text: r.default.RULES.text
        };
    var I = {
        combineAndInjectMentionRule: d,
        createReactRules: s.default,
        defaultReactRuleOptions: c,
        defaultRules: f,
        guildEventRules: g,
        notifCenterV2MessagePreviewRules: T,
        lockscreenWidgetMessageRules: _,
        astParserFor: a.astParserFor,
        reactParserFor: a.reactParserFor,
        parse: a.reactParserFor(f),
        parseTopic: a.reactParserFor(p),
        parseVoiceChannelStatus: a.reactParserFor(h),
        parseEmbedTitle: a.reactParserFor(x),
        parseInlineReply: a.reactParserFor(E),
        parseGuildVerificationFormRule: a.reactParserFor(y),
        parseGuildEventDescription: a.reactParserFor(g),
        parseAutoModerationSystemMessage: a.reactParserFor(C),
        parseForumPostGuidelines: a.reactParserFor(m),
        parseForumPostMostRecentMessage: a.reactParserFor(S),
        parseNotifCenterMessagePreview: a.reactParserFor(T),
        parseToAST: a.astParserFor(f),
        parseTopicToAST: a.astParserFor(p),
        parseEmbedTitleToAST: a.astParserFor(x),
        parseInlineReplyToAST: a.astParserFor(E),
        parseAutoModerationSystemMessageToAST: a.astParserFor(C)
    }
}