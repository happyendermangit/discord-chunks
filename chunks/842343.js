function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("974667"),
        o = n("446674"),
        u = n("77078"),
        d = n("296141"),
        c = n("305961"),
        f = n("501536"),
        m = n("476765"),
        p = n("983782"),
        h = n("659186"),
        E = n("418062"),
        g = n("851745"),
        S = n("280214"),
        C = n("497858"),
        T = n("892149"),
        v = i.forwardRef(function(e, t) {
            var n, a, v, I, _;
            let {
                channel: N,
                type: A,
                editorHeight: x,
                onVisibilityChange: y
            } = e, O = (0, m.useUID)(), R = (0, o.useStateFromStores)([c.default], () => {
                var e;
                return null !== (e = c.default.getGuild(N.guild_id)) && void 0 !== e ? e : null
            }, [N.guild_id]), M = i.useRef(), [L, P, b] = (0, C.default)({
                ...e,
                guild: R
            }, t, M), j = (null === (n = A.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? h.default : p.default, U = (0, f.getAutocompleteRowId)(L.selectedIndex);
            (0, d.useChannelEditorPopup)(O, L.isVisible, U), E.default.trackExposure({
                location: "6e9811_1"
            });
            let {
                usePopoutAutocomplete: D
            } = E.default.useExperiment({
                location: "6e9811_2"
            }, {
                autoTrackExposure: !1
            }), k = (0, S.useChannelAutocompleteLayerPosition)({
                editorHeight: x,
                type: A,
                state: L,
                isInPopoutExperiment: D
            }), w = i.useMemo(() => null == k ? "" : String(Date.now()), [null == k ? void 0 : k.top, null == k ? void 0 : k.left, null == k ? void 0 : k.bottom, null == k ? void 0 : k.right]);
            if (i.useEffect(() => {
                    y(L.isVisible)
                }, [y, L.isVisible]), !L.isVisible || null == L.query || void 0 === k) return null;
            let F = null !== (a = L.query.typeInfo.renderResults({
                results: L.query.results,
                selectedIndex: L.selectedIndex,
                channel: N,
                guild: R,
                query: L.query.queryText,
                options: L.query.options,
                onHover: e => P.onResultHover(e),
                onClick: e => P.onResultClick(e)
            })) && void 0 !== a ? a : null;
            if (null == F) return null;
            let G = {
                    [T.autocompleteAttached]: null == k,
                    [T.autocompletePopout]: null != k,
                    [T.bottom]: null == k && "bottom" === e.position
                },
                B = 490;
            null != k && (B = (null === (v = A.autocomplete) || void 0 === v ? void 0 : v.small) ? 200 : (null === (I = L.query) || void 0 === I ? void 0 : I.type) === g.AutocompleteOptionTypes.EMOJIS_AND_STICKERS ? 490 : 245), B = Math.min(window.innerHeight - 175, B);
            let H = (0, l.jsx)(f.default, {
                id: O,
                className: s(T.autocomplete, G),
                innerClassName: T.autocompleteInner,
                onMouseDown: e => e.preventDefault(),
                children: (0, l.jsx)(r.ListNavigatorProvider, {
                    navigator: b,
                    children: (0, l.jsx)(r.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: t,
                                ...n
                            } = e;
                            return (0, l.jsx)(u.AdvancedScrollerThin, {
                                id: O,
                                ref: e => {
                                    var n;
                                    t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, M.current = e
                                },
                                ...n,
                                className: T.scroller,
                                style: {
                                    maxHeight: B
                                },
                                role: "listbox",
                                "aria-labelledby": (0, f.getAutocompleteTitleId)(O),
                                children: F
                            })
                        }
                    })
                })
            });
            return null != k ? (0, l.jsx)(j, {
                children: (0, l.jsx)(u.ReferencePositionLayer, {
                    reference: () => k,
                    positionKey: w,
                    position: null !== (_ = e.position) && void 0 !== _ ? _ : "top",
                    align: "left",
                    spacing: 8,
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    children: () => H
                })
            }) : H
        })
}