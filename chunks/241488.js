function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return H
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("394846"),
        d = n("118810"),
        c = n("446674"),
        f = n("551042"),
        m = n("77078"),
        p = n("452804"),
        h = n("901582"),
        x = n("594203"),
        E = n("244201"),
        y = n("716241"),
        g = n("86678"),
        S = n("873622"),
        C = n("277855"),
        T = n("191191"),
        _ = n("256860"),
        I = n("364685"),
        v = n("889701"),
        A = n("168973"),
        N = n("983782"),
        R = n("659500"),
        O = n("791776"),
        M = n("538282"),
        k = n("13030"),
        L = n("49111"),
        P = n("115279"),
        b = n("958706"),
        j = n("560241"),
        U = n("782340"),
        D = n("213524");
    let w = k.MIN_EXPRESSION_PICKER_WIDTH + P.EmojiSize.MEDIUM,
        F = l.memo(function(e) {
            let {
                isActive: t,
                className: n,
                viewType: l,
                autoFocus: a = !1,
                "aria-controls": r,
                ...o
            } = e;
            return (0, i.jsx)(m.Button, {
                role: "tab",
                autoFocus: a,
                "aria-controls": t ? r : void 0,
                ...o,
                onClick: () => {
                    y.default.trackWithMetadata(L.AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, {
                        tab: l,
                        badged: !1
                    }), (0, M.setExpressionPickerView)(l)
                },
                "aria-current": t ? "page" : void 0,
                className: s(n, D.navButton, D.navItem, {
                    [D.navButtonActive]: t
                }),
                look: m.Button.Looks.BLANK,
                size: m.Button.Sizes.NONE
            })
        }),
        G = e => {
            let {
                positionContainerRef: t,
                drawerRef: n,
                orientation: i
            } = e, a = (0, c.useStateFromStores)([A.default], () => A.default.expressionPickerWidth), [s, r] = l.useState(window.innerWidth), [u, d] = l.useState(null != a ? a : k.ExpressionPickerWidths.MIN), f = l.useMemo(() => {
                switch (u) {
                    case k.ExpressionPickerWidths.MIN:
                        return k.MIN_EXPRESSION_PICKER_WIDTH;
                    case k.ExpressionPickerWidths.MAX:
                        return null;
                    default:
                        return u
                }
            }, [u]), m = l.useCallback(e => {
                let t = e >= s ? k.ExpressionPickerWidths.MAX : e <= k.MIN_EXPRESSION_PICKER_WIDTH ? k.ExpressionPickerWidths.MIN : e;
                null == t && null != n.current && (n.current.style.width = ""), p.default.updatedUnsyncedSettings({
                    expressionPickerWidth: t
                }), d(t)
            }, [n, s]), h = (0, x.default)({
                initialElementDimension: f,
                maxDimension: s,
                minDimension: k.MIN_EXPRESSION_PICKER_WIDTH,
                resizableDomNodeRef: n,
                onElementResize: m,
                orientation: i
            });
            l.useEffect(() => {
                let e = o.debounce(() => {
                    null != t.current && r(t.current.offsetWidth)
                }, 500);
                return window.addEventListener("resize", e), () => {
                    window.removeEventListener("resize", e)
                }
            }, [t]), l.useLayoutEffect(() => {
                null != t.current && r(t.current.offsetWidth)
            }, [t]);
            let E = l.useCallback(e => {
                e.stopPropagation(), null != t.current && r(t.current.offsetWidth), h(e)
            }, [t, h]);
            return {
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: E
            }
        };
    var H = l.memo(function(e) {
        var t, n, a;
        let {
            positionTargetRef: r,
            hideGifFavorites: o,
            includeCreateEmojiButton: p,
            onSelectGIF: A,
            onSelectEmoji: H,
            onSelectSticker: B,
            onSelectSound: V,
            channel: K,
            type: W,
            position: Y,
            align: z,
            positionLayerClassName: Q,
            closeOnModalOuterClick: Z = !1,
            parentModalKey: q
        } = e, J = l.useRef(null), X = l.useRef(!1), $ = l.useRef(), ee = l.useRef(null), et = "left" === z ? x.ResizeOrientation.HORIZONTAL_RIGHT : x.ResizeOrientation.HORIZONTAL_LEFT, {
            drawerWidth: en,
            handleDrawerResizeHandleMouseDown: ei
        } = G({
            positionContainerRef: J,
            drawerRef: ee,
            orientation: et
        }), el = (0, M.useExpressionPickerStore)(e => e.activeView), ea = (0, _.useHasSendableSticker)(K), {
            renderWindow: es,
            windowDispatch: er
        } = l.useContext(E.default), eo = (0, c.useStateFromStores)([I.default], () => !I.default.hasLoadedStickerPacks), eu = (0, C.useSoundmojiExperiment)("expression_picker"), ed = null != q, ec = (0, f.useIsModalAtTop)(null != q ? q : ""), ef = l.useCallback(e => {
            var t;
            if (!ed && (0, f.hasAnyModalOpen)() || ed && !(ec && Z)) return;
            let {
                target: n
            } = e;
            if ((0, d.isElement)(n) && null != n.closest("." + k.CHAT_INPUT_BUTTON_CLASSNAME)) return;
            for (;
                (0, d.isElement)(n);) {
                if (n === ee.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                n = n.parentNode
            }(0, M.closeExpressionPicker)();
            let i = null === (t = (0, O.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
            (null == i || "BODY" === i.tagName) && R.ComponentDispatch.dispatchToLastSubscribed(L.ComponentActions.TEXTAREA_FOCUS)
        }, [Z, ec, ed]), em = l.useCallback(() => {
            (0, M.closeExpressionPicker)()
        }, []);
        l.useLayoutEffect(() => {
            let e = () => {
                el === k.ExpressionPickerViewType.GIF && (0, M.closeExpressionPicker)()
            };
            return es.addEventListener("mousedown", ef), es.addEventListener("contextmenu", ef), er.subscribe(L.ComponentActions.POPOUT_CLOSE, em), R.ComponentDispatch.subscribe(L.ComponentActions.CLOSE_GIF_PICKER, e), () => {
                es.removeEventListener("mousedown", ef), es.removeEventListener("contextmenu", ef), er.unsubscribe(L.ComponentActions.POPOUT_CLOSE, em), R.ComponentDispatch.unsubscribe(L.ComponentActions.CLOSE_GIF_PICKER, e)
            }
        }, [el, em, ef, es, er]), (0, m.useFocusLock)(J), l.useEffect(() => {
            (0, M.setSearchQuery)("")
        }, []), l.useEffect(() => {
            (!ed && (0, f.hasAnyModalOpen)() || ed && !ec) && (0, M.closeExpressionPicker)()
        }, [ec, ed]), l.useEffect(() => {
            if (null != ee.current && !X.current) {
                var e, t, n, i;
                el === k.ExpressionPickerViewType.EMOJI ? (null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == $ || null === (t = $.current) || void 0 === t || t.onPickerOpen(), X.current = !0) : el === k.ExpressionPickerViewType.STICKER ? (null == $ ? void 0 : null === (n = $.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !eo && (null == $ || null === (i = $.current) || void 0 === i || i.onPickerOpen(), X.current = !0) : (y.default.trackWithMetadata(L.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: ee.current.offsetWidth,
                    tab: el,
                    badged: !1
                }), X.current = !0)
            }
        });
        let ep = (null === (t = W.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.isMobile && null != A,
            eh = (null === (n = W.stickers) || void 0 === n ? void 0 : n.allowSending) && null != B,
            ex = !(null === (a = W.expressionPicker) || void 0 === a ? void 0 : a.onlyEmojis) && (ep || eh),
            eE = "left" === z ? "right" : "left",
            ey = null != Q ? Q : "left" === z ? D.positionLayerDefaultAlignLeft : D.positionLayerDefaultAlignRight;
        return (0, i.jsx)(h.default, {
            section: L.AnalyticsSections.EXPRESSION_PICKER,
            children: (0, i.jsx)(N.AppReferencePositionLayer, {
                className: s(D.positionLayer, ey),
                reference: r,
                position: Y,
                align: z,
                spacing: 8,
                autoInvert: !0,
                children: e => {
                    let {
                        isPositioned: t
                    } = e;
                    return (0, i.jsx)("section", {
                        className: s(D.positionContainer, {
                            [D.positionContainerOnlyEmoji]: !ex
                        }),
                        ref: J,
                        role: "dialog",
                        "aria-label": U.default.Messages.EXPRESSION_PICKER,
                        children: t ? (0, i.jsxs)("div", {
                            className: D.drawerSizingWrapper,
                            style: {
                                width: null == en ? void 0 : en,
                                [z]: 0
                            },
                            ref: ee,
                            children: [(0, i.jsx)("div", {
                                className: D.resizeHandle,
                                onMouseDown: ei,
                                style: {
                                    [eE]: -2
                                }
                            }), (0, i.jsxs)("div", {
                                className: D.contentWrapper,
                                children: [ex ? (0, i.jsx)("nav", {
                                    className: D.nav,
                                    children: (0, i.jsxs)("div", {
                                        className: D.navList,
                                        role: "tablist",
                                        "aria-label": U.default.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                                        children: [ep ? (0, i.jsx)(F, {
                                            id: P.GIF_PICKER_TAB_ID,
                                            "aria-controls": P.GIF_PICKER_TAB_PANEL_ID,
                                            "aria-selected": el === k.ExpressionPickerViewType.GIF,
                                            isActive: el === k.ExpressionPickerViewType.GIF,
                                            viewType: k.ExpressionPickerViewType.GIF,
                                            children: U.default.Messages.EXPRESSION_PICKER_GIF
                                        }) : null, eh ? (0, i.jsx)(F, {
                                            id: j.STICKER_PICKER_TAB_ID,
                                            "aria-controls": j.STICKER_PICKER_TAB_PANEL_ID,
                                            "aria-selected": el === k.ExpressionPickerViewType.STICKER,
                                            isActive: el === k.ExpressionPickerViewType.STICKER,
                                            autoFocus: !ea,
                                            viewType: k.ExpressionPickerViewType.STICKER,
                                            children: (0, i.jsx)("div", {
                                                className: D.stickersNavItem,
                                                children: U.default.Messages.EXPRESSION_PICKER_STICKER
                                            })
                                        }) : null, (0, i.jsx)(F, {
                                            id: P.EMOJI_PICKER_TAB_ID,
                                            "aria-controls": P.EMOJI_PICKER_TAB_PANEL_ID,
                                            "aria-selected": el === k.ExpressionPickerViewType.EMOJI,
                                            isActive: el === k.ExpressionPickerViewType.EMOJI,
                                            viewType: k.ExpressionPickerViewType.EMOJI,
                                            children: U.default.Messages.EXPRESSION_PICKER_EMOJI
                                        }), eu && null != V && (0, i.jsx)(F, {
                                            id: P.SOUNDBOARD_PICKER_TAB_ID,
                                            "aria-controls": P.SOUNDBOARD_PICKER_TAB_PANEL_ID,
                                            "aria-selected": el === k.ExpressionPickerViewType.SOUNDBOARD,
                                            isActive: el === k.ExpressionPickerViewType.SOUNDBOARD,
                                            viewType: k.ExpressionPickerViewType.SOUNDBOARD,
                                            children: "Sounds"
                                        })]
                                    })
                                }) : null, el === k.ExpressionPickerViewType.STICKER && eh ? (0, i.jsx)(v.default, {
                                    isLoading: eo,
                                    channel: K,
                                    containerWidth: en,
                                    onSelectSticker: B,
                                    closePopout: em,
                                    ref: e => {
                                        $.current = e
                                    }
                                }) : null, el === k.ExpressionPickerViewType.GIF && ep ? (0, i.jsx)(S.default, {
                                    onSelectGIF: A,
                                    hideFavorites: o,
                                    persistSearch: !0
                                }) : null, el === k.ExpressionPickerViewType.EMOJI ? (0, i.jsx)(g.default, {
                                    hasTabWrapper: !0,
                                    persistSearch: !0,
                                    channel: K,
                                    containerWidth: en,
                                    includeCreateEmojiButton: p,
                                    emojiSize: null != en && en < w ? P.EmojiSize.MEDIUM : P.EmojiSize.LARGE,
                                    pickerIntention: b.EmojiIntention.CHAT,
                                    closePopout: em,
                                    onSelectEmoji: H,
                                    ref: e => {
                                        $.current = e
                                    }
                                }) : null, el === k.ExpressionPickerViewType.SOUNDBOARD ? (0, i.jsx)("div", {
                                    className: D.soundboardContainer,
                                    children: (0, i.jsx)(T.default, {
                                        guildId: K.guild_id,
                                        channel: K,
                                        containerWidth: en,
                                        onClose: em,
                                        onSelect: V,
                                        analyticsSource: "expression-picker",
                                        autoWidth: !0
                                    })
                                }) : null]
                            })]
                        }) : null
                    })
                }
            })
        })
    })
}