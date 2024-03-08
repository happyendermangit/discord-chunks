function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var i = n("884691"),
        l = n("775560"),
        a = n("446674"),
        s = n("118200"),
        r = n("383018"),
        o = n("850391"),
        u = n("980215"),
        d = n("26989"),
        c = n("957255"),
        f = n("102985"),
        p = n("697218"),
        m = n("234246"),
        h = n("689299"),
        x = n("49111"),
        E = n("680894"),
        y = n("958706");

    function g(e, t, n) {
        var g, S, C, I, T, _, v;
        let {
            channel: N,
            type: A
        } = e, [O, k] = i.useState(() => (0, m.createInitialState)()), M = (0, l.useForceUpdate)(), R = (0, a.useStateFromStores)([d.default], () => {
            if (null != e.guild) {
                var t;
                return null != d.default.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, E.CLYDE_AI_USER_ID)
            }
            return !1
        }), L = (0, u.useClydeEnabled)(e.guild, e.channel) && !R && !(0, u.canUseCustomClydeProfiles)(e.guild), b = (0, a.useStateFromStores)([d.default, p.default], () => {
            var e, t;
            let n = p.default.getCurrentUser();
            return null !== (t = null != N.guild_id && null != n ? null === (e = d.default.getMember(N.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
        }), {
            canMentionEveryone: P,
            hidePersonalInformation: j
        } = (0, a.useStateFromStoresObject)([c.default, f.default], () => {
            let e = N.isPrivate();
            return {
                canMentionEveryone: e || b || A === o.ChatInputTypes.RULES_INPUT || c.default.can(x.Permissions.MENTION_EVERYONE, N),
                hidePersonalInformation: f.default.hidePersonalInformation
            }
        }, [N, A, b]), {
            activeCommand: U,
            activeCommandOption: D
        } = (0, a.useStateFromStoresObject)([r.default], () => ({
            activeCommand: r.default.getActiveCommand(N.id),
            activeCommandOption: r.default.getActiveOption(N.id)
        })), w = (0, h.default)({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: O,
            onFocus: e => G.setSelectedIndex(e)
        }), F = null === (g = e.editorRef.current) || void 0 === g ? void 0 : g.getCurrentWord(), B = {
            ...e,
            navigator: w,
            activeCommand: U,
            activeCommandOption: D,
            canMentionUsers: null !== (T = null === (S = A.users) || void 0 === S ? void 0 : S.allowMentioning) && void 0 !== T && T,
            canMentionEveryone: P,
            canMentionClyde: L,
            hidePersonalInformation: j,
            hideMentionDescription: A === o.ChatInputTypes.RULES_INPUT,
            emojiIntention: A === o.ChatInputTypes.RULES_INPUT ? y.EmojiIntention.COMMUNITY_CONTENT : y.EmojiIntention.CHAT,
            currentWord: null !== (_ = null == F ? void 0 : F.word) && void 0 !== _ ? _ : "",
            currentWordIsAtStart: (null == F ? void 0 : F.isAtStart) === !0,
            optionText: null != D ? (0, s.getString)({
                [D.name]: null !== (v = null === (C = e.editorRef.current) || void 0 === C ? void 0 : C.getCurrentCommandOptionValue()) && void 0 !== v ? v : []
            }, D.name) : ""
        }, [G] = i.useState(() => new m.default(B));
        return i.useEffect(() => {
            G.updateProps(B)
        }), i.useImperativeHandle(t, () => G, [G]), i.useEffect(() => {
            let e = e => k(e);
            return G.on("change", e), G.on("update", M), () => {
                G.off("change", e), G.off("update", M)
            }
        }, [M, G]), i.useEffect(() => {
            var e;
            let t = null === (e = O.query) || void 0 === e ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => G.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e)
                }
            }
        }, [G, null === (I = O.query) || void 0 === I ? void 0 : I.typeInfo]), [O, G, w]
    }
}