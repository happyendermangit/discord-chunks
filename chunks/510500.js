function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useStickerSuggestionResults: function() {
            return g
        },
        useTextChangeHandler: function() {
            return C
        }
    }), n("222007"), n("424973");
    var l = n("884691"),
        i = n("483366"),
        a = n.n(i),
        s = n("446674"),
        r = n("866353"),
        o = n("467094"),
        u = n("256860"),
        d = n("364685"),
        c = n("697218"),
        f = n("25292"),
        m = n("117362"),
        p = n("171209"),
        h = n("721423");
    let E = (0, m.promiseThrottle)(o.fetchStickerPacks, h.REQUEST_THROTTLE_DURATION_MS),
        g = (e, t, n) => {
            let i = (0, u.useHasSendableSticker)(n),
                a = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                o = l.useMemo(() => {
                    let l = (0, p.getQueriesFromUserInput)(e);
                    if (t || null == e || "" === e || l.length > h.MAX_NUM_USER_INPUT_WORDS || !i) return [];
                    let s = [],
                        o = [],
                        u = (0, p.removePunctuation)(e),
                        d = u === l[0] ? l : [u, ...l],
                        c = f.default.queryStickers(d, !1);
                    c.forEach(e => {
                        let {
                            sticker: t
                        } = e, l = (0, r.getStickerSendability)(t, a, n), i = {
                            sticker: t,
                            sendability: l
                        };
                        l === r.StickerSendability.SENDABLE ? s.push(i) : l === r.StickerSendability.SENDABLE_WITH_PREMIUM && o.push(i)
                    });
                    let m = [];
                    return s.length > 0 && (m = s.slice(0, h.MAX_NUM_SUGGESTED_STICKERS), 0 !== o.length && (m.length === h.MAX_NUM_SUGGESTED_STICKERS && m.pop(), m.push(o[0]))), m
                }, [e, n, i, t, a]);
            return o
        },
        C = e => {
            let {
                setTextInputValue: t,
                setHasDismissed: n,
                setHasSelection: i,
                setFocusedSuggestionType: s,
                delayBeforeSuggestions: r
            } = e, o = l.useRef(null), u = l.useRef(!1), c = l.useRef(!1), f = l.useMemo(() => a(t, null != r ? r : h.DELAY_BEFORE_SUGGESTIONS_MS), [t, r]), m = async e => {
                var l;
                if (null == e || "" === e) f.cancel(), null == t || t(""), null == n || n(!1), null == i || i(!1), null == s || s(null), o.current = null, u.current = !1;
                else if (!u.current && e.trim() !== (null === (l = o.current) || void 0 === l ? void 0 : l.trim())) {
                    if (o.current = e, (0, p.getQueriesFromUserInput)(e).length > h.MAX_NUM_USER_INPUT_WORDS) {
                        u.current = !0, f.cancel(), t("");
                        return
                    }
                    if (!0 === c.current) return;
                    !d.default.hasLoadedStickerPacks && (c.current = !0, await E(), c.current = !1), f(o.current)
                }
            };
            return {
                handleTextChange: m,
                debouncedSetTextInputValue: f
            }
        }
}