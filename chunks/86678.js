function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ed
        }
    }), n("222007"), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("483366"),
        o = n.n(r),
        u = n("880317"),
        d = n("446674"),
        c = n("151426"),
        f = n("769846"),
        m = n("77078"),
        p = n("150021"),
        h = n("901582"),
        x = n("997289"),
        E = n("812204"),
        y = n("685665"),
        g = n("384997"),
        S = n("385976"),
        C = n("575226"),
        T = n("305781"),
        _ = n("986632"),
        I = n("538282"),
        v = n("246511"),
        A = n("45961"),
        N = n("802894"),
        R = n("592407"),
        O = n("139321"),
        M = n("716849"),
        k = n("552917"),
        L = n("845579"),
        P = n("923959"),
        b = n("697218"),
        j = n("599110"),
        U = n("764364"),
        D = n("159885"),
        w = n("788506"),
        F = n("352046"),
        G = n("260211"),
        H = n("964611"),
        B = n("420489"),
        V = n("920514"),
        K = n("83017"),
        W = n("729873"),
        Y = n("640076"),
        z = n("851111"),
        Q = n("282566"),
        Z = n("115279"),
        q = n("49111"),
        J = n("994428"),
        X = n("958706"),
        $ = n("296323");
    let ee = (0, D.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
        et = (0, D.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        en = e => e.stopPropagation(),
        ei = (e, t) => {
            _.EmojiPickerStore.setInspectedExpressionPosition(e, t, v.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
        },
        el = e => {
            let {
                analyticsLocation: t,
                pickerIntention: n,
                columnCounts: i,
                onSelectEmoji: a,
                emojiGrid: s,
                emojiList: r,
                channelGuildId: o,
                isBurstReaction: c
            } = e, f = (0, d.useStateFromStores)([S.default], () => S.default.getDisambiguatedEmojiContext(o), [o]), m = l.useCallback((e, i) => {
                switch (e.type) {
                    case K.EmojiGridItemTypes.CREATE_EMOJI:
                        a(void 0, !0), R.default.open(e.guildId, q.GuildSettingsSections.EMOJI);
                        return;
                    case K.EmojiGridItemTypes.EMOJI: {
                        if (null != e.emoji && i.altKey) {
                            f.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, p.unfavoriteEmoji)(e.emoji) : ((0, w.trackEmojiFavorited)({
                                emoji: e.emoji,
                                location: {
                                    ...t,
                                    object: q.AnalyticsObjects.EMOJI
                                }
                            }), (0, p.favoriteEmoji)(e.emoji));
                            return
                        }
                        let l = {
                            page: null != o ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
                            section: q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: q.AnalyticsObjects.EMOJI
                        };
                        c && (l = {
                            page: null != o ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
                            section: q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: q.AnalyticsObjects.EMOJI
                        }), (0, w.trackEmojiSelect)({
                            emoji: e.emoji,
                            location: l,
                            pickerIntention: n,
                            category: e.category,
                            subCategory: e.subCategory,
                            newlyAddedHighlight: e.subCategory === Z.EmojiSubCategory.NEWLY_ADDED_EMOJI && C.default.isNewerThanLastSeen(o, e.emoji.id)
                        }), a(e.emoji, !i.shiftKey, c)
                    }
                }
            }, [a, o, n, f, t, c]), {
                gridDispatch: h,
                getItemProps: x,
                getRowProps: E,
                gridContainerProps: y,
                handleGridContainerKeyDown: g,
                isUsingKeyboardNavigation: T
            } = (0, A.useExpressionPickerGridKeyboardNavigation)({
                columnCounts: i,
                gridNavigatorId: Z.GRID_NAVIGATOR_ID,
                itemGrid: s,
                itemList: r,
                onGridNavigatorItemSelect: m,
                onGridNavigatorPositionChange: ei
            });
            return l.useEffect(() => _.EmojiPickerStore.useStore.subscribe(e => {
                if (null == e) return;
                let {
                    columnIndex: t,
                    rowIndex: n,
                    source: i
                } = e;
                i !== v.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && h({
                    type: u.GridActionType.SET_FOCUSED_POSITION,
                    x: t,
                    y: n
                })
            }, e => e.inspectedExpressionPosition), [h]), {
                getItemProps: x,
                getRowProps: E,
                gridContainerProps: y,
                handleGridContainerKeyDown: g,
                isUsingKeyboardNavigation: T
            }
        },
        ea = (e, t) => {
            let [n, i] = l.useState(null);
            l.useEffect(() => {
                if (null != n) {
                    var e;
                    null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), i(null)
                }
            }, [t, n]), l.useEffect(() => {
                i(_.EmojiPickerStore.getState().activeCategoryIndex)
            }, [e])
        },
        es = (e, t, n, i) => {
            l.useLayoutEffect(() => {
                if (i) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.focus()
                }
            }, [e, t, n, i])
        },
        er = o(w.trackEmojiSearchEmpty, 200),
        eo = o(w.trackEmojiSearchResultsViewed, 200),
        eu = {
            section: void 0,
            openPopoutType: void 0
        };
    var ed = l.memo(l.forwardRef(function(e, t) {
        var n, a;
        let r, {
                pickerIntention: o,
                channel: u,
                guildId: f,
                closePopout: p,
                emojiSize: v = Z.EmojiSize.MEDIUM,
                hasTabWrapper: R = !1,
                includeCreateEmojiButton: D,
                onSelectEmoji: ei,
                containerWidth: ed,
                onNavigateAway: ec,
                persistSearch: ef,
                className: em,
                headerClassName: ep,
                analyticsOverride: eh = eu,
                searchProps: ex = {},
                wrapper: eE,
                shouldHidePickerActions: ey = !1,
                messageId: eg,
                renderHeader: eS,
                listHeaderClassName: eC
            } = e,
            {
                onFocus: eT,
                onKeyDown: e_,
                autoFocus: eI = !0,
                accessory: ev
            } = ex,
            eA = (0, d.useStateFromStores)([P.default], () => null != f ? P.default.getDefaultChannel(f) : null, [f]),
            [eN, eR] = l.useState(null),
            eO = l.useRef(""),
            eM = (0, I.useExpressionPickerStore)(e => e.searchQuery),
            ek = l.useRef(null),
            eL = l.useRef(null),
            eP = l.useRef(null);
        null == u && null != eA && (u = eA);
        let eb = null !== (a = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : f) && void 0 !== a ? a : null,
            [ej, eU] = l.useState(!1),
            eD = b.default.getCurrentUser(),
            ew = (0, U.isPremium)(eD);
        l.useImperativeHandle(t, () => ({
            onPickerOpen: e2
        }));
        let {
            location: eF
        } = (0, x.useAnalyticsContext)(), {
            page: eG,
            section: eH,
            object: eB,
            openPopoutType: eV
        } = eh, eK = l.useMemo(() => ({
            ...eF,
            section: null != eH ? eH : q.AnalyticsSections.EMOJI_PICKER_POPOUT
        }), [eF, eH]), {
            analyticsLocations: eW
        } = (0, y.default)(E.default.EMOJI_PICKER), {
            diversitySurrogate: eY
        } = (0, d.useStateFromStoresObject)([S.default], () => ({
            diversitySurrogate: S.default.diversitySurrogate
        })), ez = (0, w.useEmojiSearchResults)(eM, u, o), eQ = null == ez ? 0 : ez.locked.length + ez.unlocked.length, eZ = L.EmojiPickerCollapsedSections.useSetting(), eq = l.useMemo(() => new Set(eZ), [eZ]), eJ = l.useCallback(e => {
            L.EmojiPickerCollapsedSections.updateSetting(Array.from(e))
        }, []), eX = (0, A.useExpressionPickerGridWidth)({
            gridWrapperRef: ek,
            containerWidth: ed,
            listPaddingLeft: et,
            listScrollbarWidth: 8
        }), {
            rowCountBySection: e$,
            sectionDescriptors: e0,
            emojiGrid: e1,
            columnCounts: e3
        } = (0, K.useEmojiGrid)({
            gridWidth: eX,
            channel: u,
            includeCreateEmojiButton: D,
            pickerIntention: o,
            emojiSearchResults: ez,
            collapsedSections: eq,
            emojiPaddingHorizontal: ee,
            emojiSpriteSize: v
        }), {
            newlyAddedEmojis: e7
        } = (0, F.default)(eb, o), {
            trackOnPickerOpen: e6
        } = (0, w.useTrackEmojiPickerOpened)({
            intention: o,
            isBurstReaction: ej,
            analyticsObject: eB
        });
        (0, M.useMaybeFetchPremiumLikelihood)(k.default);
        let e2 = l.useCallback(() => {
                let e = e7.length > 0 ? e7[0].id : null;
                (0, T.updateNewlyAddedLastSeen)(eb, e), e6()
            }, [e6, e7, eb]),
            e8 = (0, K.useEmojiSelectHandler)({
                pickerIntention: o,
                selectedChannel: u,
                closePopout: p,
                onSelectEmoji: ei,
                setUpsellConfigs: eR,
                emojiSelectAnalytics: e => {
                    "" !== eM ? (0, w.trackEmojiSearchSelect)({
                        emoji: e.emoji,
                        location: {
                            ...eK,
                            object: q.AnalyticsObjects.EMOJI
                        },
                        searchQuery: eM,
                        intention: o
                    }) : (0, w.trackEmojiSelect)({
                        emoji: e.emoji,
                        location: {
                            ...eK,
                            object: null != eB ? eB : q.AnalyticsObjects.EMOJI,
                            ...null != eG && {
                                page: eG
                            }
                        },
                        pickerIntention: o,
                        category: e.category,
                        subCategory: e.subCategory,
                        position: e.columnIndex + 1,
                        newlyAddedHighlight: e.subCategory === Z.EmojiSubCategory.NEWLY_ADDED_EMOJI && C.default.isNewerThanLastSeen(eb, e.emoji.id),
                        isBurstReaction: ej
                    })
                },
                trackEmojiFavorited: e => {
                    (0, w.trackEmojiFavorited)({
                        emoji: e.emoji,
                        location: {
                            ...eK,
                            object: q.AnalyticsObjects.EMOJI
                        }
                    })
                }
            }),
            e4 = l.useCallback(() => {
                p(), null == ec || ec()
            }, [p, ec]),
            {
                getItemProps: e5,
                getRowProps: e9,
                gridContainerProps: te,
                handleGridContainerKeyDown: tt,
                isUsingKeyboardNavigation: tn
            } = el({
                pickerIntention: o,
                analyticsLocation: eK,
                columnCounts: e3,
                onSelectEmoji: ei,
                emojiGrid: e1,
                emojiList: eL,
                channelGuildId: eb,
                isBurstReaction: ej
            });
        ea(ed, eL), es(ed, eY, eP, eI), l.useEffect(() => {
            !ef && (0, I.setSearchQuery)("")
        }, [ef]), l.useEffect(() => (j.default.track(q.AnalyticEvents.OPEN_POPOUT, {
            type: null != eV ? eV : "Emoji Picker",
            guild_id: eb
        }), _.EmojiPickerStore.resetStoreState), [eV, eb]), l.useEffect(() => () => (0, O.hideHotspot)(O.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), l.useLayoutEffect(() => {
            var e;
            let {
                columnIndex: t,
                rowIndex: n
            } = _.EmojiPickerStore.getState().inspectedExpressionPosition;
            (null === (e = e1[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && _.EmojiPickerStore.setInspectedExpressionPosition(0, 0)
        }, [e1]), l.useEffect(() => {
            if ("" === eO.current && "" !== eM && (0, w.trackEmojiSearchStart)(eK, o), 0 === eQ && "" !== eM) er(eK, eM);
            else if ("" !== eM && eO.current !== eM) {
                var e;
                eo(eQ, null !== (e = null == ez ? void 0 : ez.locked.length) && void 0 !== e ? e : 0, eK, eM, o)
            }
            eO.current = eM
        }, [eM, eK, eQ, ez, o]);
        let ti = null != eE ? eE : R ? "div" : m.Dialog,
            tl = null != eX;
        (null == eN ? void 0 : eN.type) === K.EmojiUpsellType.PREMIUM ? r = (0, i.jsx)(Q.default, {
            onLearnMore: e4,
            emojiDescriptor: eN.emojiDescriptor,
            pickerIntention: o,
            analyticsLocation: eK,
            onClose: () => eR(null),
            channel: u
        }) : (null == eN ? void 0 : eN.type) === K.EmojiUpsellType.ROLE_SUBSCRIPTION ? r = (0, i.jsx)(N.default, {
            onClose: () => eR(null),
            guildId: eN.guildId,
            emojiId: eN.emojiId
        }) : ej && !ew && (r = (0, i.jsx)(G.default, {
            onDismiss: () => eU(!1)
        }));
        let ta = (0, i.jsx)(V.default, {
                pickerIntention: o,
                emojiListRef: eL,
                onKeyDown: e => {
                    null == tt || tt(e), null == e_ || e_(e)
                },
                searchBarRef: eP,
                onFocus: eT,
                autoFocus: eI,
                accessory: ev,
                headerClassName: ep,
                hasTabWrapper: R,
                diversitySurrogate: eY,
                isBurstReaction: ej,
                onBurstReactionToggle: () => eU(!ej),
                renderHeader: eS
            }),
            ts = [];
        o === X.EmojiIntention.REACTION && ts.push(c.DismissibleContent.SUPER_REACTIONS_NITRO_MARKETING), !S.default.hasFavoriteEmojis(eb) && ts.push(c.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tr = (0, i.jsx)(h.default, {
            ...eK,
            children: (0, i.jsxs)(ti, {
                id: Z.EMOJI_PICKER_TAB_PANEL_ID,
                "aria-labelledby": R ? Z.EMOJI_PICKER_TAB_ID : void 0,
                role: R ? "tabpanel" : void 0,
                className: s($.wrapper, {
                    [$.emojiPickerHasTabWrapper]: R,
                    [$.isBurstReactionPicker]: ej && ew
                }),
                children: [R ? null : ta, (0, i.jsxs)("div", {
                    className: s($.emojiPicker, em),
                    onScroll: en,
                    children: [R ? ta : null, (0, i.jsxs)("div", {
                        className: $.bodyWrapper,
                        ref: ek,
                        children: [(0, i.jsx)(z.default, {
                            channel: u,
                            closePopout: p
                        }), (0, i.jsx)(g.default, {
                            contentTypes: ts,
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: n
                                } = e;
                                if (t === c.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, i.jsx)(B.default, {
                                    markAsDismissed: () => n(J.ContentDismissActionType.UNKNOWN)
                                })
                            }
                        }), ey ? null : (0, i.jsx)("div", {
                            className: $.emojiPickerListWrapper,
                            id: Z.GRID_NAVIGATOR_ID,
                            ...te,
                            children: tl ? (0, i.jsx)(Y.default, {
                                collapsedSections: eq,
                                diversitySurrogate: eY,
                                emojiGrid: e1,
                                emojiListRef: eL,
                                emojiSize: v,
                                getEmojiItemProps: e5,
                                getEmojiRowProps: e9,
                                gridWidth: eX,
                                isUsingKeyboardNavigation: tn,
                                onEmojiSelect: (e, t) => {
                                    e8(e, {
                                        ...t,
                                        isBurst: ej
                                    })
                                },
                                rowCount: e1.length,
                                rowCountBySection: e$,
                                sectionDescriptors: e0,
                                setCollapsedSections: eJ,
                                channelGuildId: eb,
                                messageId: eg,
                                isBurstReaction: ej,
                                listHeaderClassName: eC
                            }) : null
                        })]
                    }), (0, i.jsx)(W.EmojiPickerInspector, {
                        emojiGrid: e1,
                        className: $.inspector,
                        guildId: eb,
                        pickerIntention: o,
                        channel: u
                    }), r]
                }), ey ? null : (0, i.jsx)(H.default, {
                    className: $.categoryList,
                    emojiListRef: eL,
                    sectionDescriptors: e0,
                    intention: o,
                    channel: u
                })]
            })
        });
        return (0, i.jsx)(y.AnalyticsLocationProvider, {
            value: eW,
            children: tr
        })
    }))
}