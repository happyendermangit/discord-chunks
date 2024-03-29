function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("954955"),
        l = n.n(o),
        u = n("739940"),
        d = n("442837"),
        _ = n("524437"),
        c = n("477690"),
        E = n("481060"),
        I = n("80932"),
        T = n("410575"),
        f = n("2052"),
        S = n("100527"),
        h = n("906732"),
        A = n("243778"),
        m = n("339085"),
        N = n("438332"),
        O = n("664437"),
        p = n("806966"),
        R = n("28546"),
        C = n("691251"),
        g = n("98528"),
        L = n("770812"),
        D = n("434404"),
        v = n("536442"),
        M = n("857185"),
        y = n("911200"),
        P = n("695346"),
        U = n("984933"),
        b = n("594174"),
        G = n("626135"),
        w = n("111361"),
        k = n("624138"),
        B = n("543241"),
        V = n("199257"),
        F = n("636411"),
        x = n("380331"),
        H = n("170762"),
        Y = n("22363"),
        j = n("784222"),
        W = n("141507"),
        K = n("669040"),
        z = n("901963"),
        X = n("212263"),
        Q = n("149203"),
        q = n("981631"),
        J = n("921944"),
        Z = n("185923"),
        $ = n("776464");
    let ee = (0, k.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
        et = (0, k.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        en = e => e.stopPropagation(),
        ei = (e, t) => {
            p.EmojiPickerStore.setInspectedExpressionPosition(e, t, C.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
        },
        er = e => {
            let {
                analyticsLocation: t,
                pickerIntention: n,
                columnCounts: i,
                onSelectEmoji: s,
                emojiGrid: a,
                emojiList: o,
                channelGuildId: l,
                isBurstReaction: _
            } = e, c = (0, d.useStateFromStores)([m.default], () => m.default.getDisambiguatedEmojiContext(l), [l]), E = r.useCallback((e, i) => {
                switch (e.type) {
                    case j.EmojiGridItemTypes.CREATE_EMOJI:
                        s(void 0, !0), D.default.open(e.guildId, q.GuildSettingsSections.EMOJI);
                        return;
                    case j.EmojiGridItemTypes.EMOJI: {
                        if (null != e.emoji && i.altKey) {
                            c.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, I.unfavoriteEmoji)(e.emoji) : ((0, B.trackEmojiFavorited)({
                                emoji: e.emoji,
                                location: {
                                    ...t,
                                    object: q.AnalyticsObjects.EMOJI
                                }
                            }), (0, I.favoriteEmoji)(e.emoji));
                            return
                        }
                        let r = {
                            page: null != l ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
                            section: q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: q.AnalyticsObjects.EMOJI
                        };
                        _ && (r = {
                            page: null != l ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
                            section: q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: q.AnalyticsObjects.EMOJI
                        }), (0, B.trackEmojiSelect)({
                            emoji: e.emoji,
                            location: r,
                            pickerIntention: n,
                            category: e.category,
                            subCategory: e.subCategory,
                            newlyAddedHighlight: e.subCategory === Q.EmojiSubCategory.NEWLY_ADDED_EMOJI && N.default.isNewerThanLastSeen(l, e.emoji.id)
                        }), s(e.emoji, !i.shiftKey, _)
                    }
                }
            }, [s, l, n, c, t, _]), {
                gridDispatch: T,
                getItemProps: f,
                getRowProps: S,
                gridContainerProps: h,
                handleGridContainerKeyDown: A,
                isUsingKeyboardNavigation: O
            } = (0, g.useExpressionPickerGridKeyboardNavigation)({
                columnCounts: i,
                gridNavigatorId: Q.GRID_NAVIGATOR_ID,
                itemGrid: a,
                itemList: o,
                onGridNavigatorItemSelect: E,
                onGridNavigatorPositionChange: ei
            });
            return r.useEffect(() => p.EmojiPickerStore.useStore.subscribe(e => {
                if (null == e) return;
                let {
                    columnIndex: t,
                    rowIndex: n,
                    source: i
                } = e;
                i !== C.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && T({
                    type: u.GridActionType.SET_FOCUSED_POSITION,
                    x: t,
                    y: n
                })
            }, e => e.inspectedExpressionPosition), [T]), {
                getItemProps: f,
                getRowProps: S,
                gridContainerProps: h,
                handleGridContainerKeyDown: A,
                isUsingKeyboardNavigation: O
            }
        },
        es = (e, t) => {
            let [n, i] = r.useState(null);
            r.useEffect(() => {
                if (null != n) {
                    var e;
                    null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), i(null)
                }
            }, [t, n]), r.useEffect(() => {
                i(p.EmojiPickerStore.getState().activeCategoryIndex)
            }, [e])
        },
        ea = (e, t, n, i) => {
            r.useLayoutEffect(() => {
                if (i) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.focus()
                }
            }, [e, t, n, i])
        },
        eo = l()(B.trackEmojiSearchEmpty, 200),
        el = l()(B.trackEmojiSearchResultsViewed, 200),
        eu = {
            section: void 0,
            openPopoutType: void 0
        };
    t.default = r.memo(r.forwardRef(function(e, t) {
        var n, s;
        let o, {
                pickerIntention: l,
                channel: u,
                guildId: c,
                closePopout: I,
                emojiSize: C = Q.EmojiSize.MEDIUM,
                hasTabWrapper: D = !1,
                includeCreateEmojiButton: k,
                onSelectEmoji: ei,
                containerWidth: ed,
                onNavigateAway: e_,
                persistSearch: ec,
                className: eE,
                headerClassName: eI,
                analyticsOverride: eT = eu,
                searchProps: ef = {},
                wrapper: eS,
                shouldHidePickerActions: eh = !1,
                messageId: eA,
                renderHeader: em,
                listHeaderClassName: eN
            } = e,
            {
                onFocus: eO,
                onKeyDown: ep,
                autoFocus: eR = !0,
                accessory: eC
            } = ef,
            eg = (0, d.useStateFromStores)([U.default], () => null != c ? U.default.getDefaultChannel(c) : null, [c]),
            [eL, eD] = r.useState(null),
            ev = r.useRef(""),
            eM = (0, R.useExpressionPickerStore)(e => e.searchQuery),
            ey = r.useRef(null),
            eP = r.useRef(null),
            eU = r.useRef(null);
        null == u && null != eg && (u = eg);
        let eb = null !== (s = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : c) && void 0 !== s ? s : null,
            [eG, ew] = r.useState(!1),
            ek = b.default.getCurrentUser(),
            eB = (0, w.isPremium)(ek);
        r.useImperativeHandle(t, () => ({
            onPickerOpen: e7
        }));
        let {
            location: eV
        } = (0, f.useAnalyticsContext)(), {
            page: eF,
            section: ex,
            object: eH,
            openPopoutType: eY
        } = eT, ej = r.useMemo(() => ({
            ...eV,
            section: null != ex ? ex : q.AnalyticsSections.EMOJI_PICKER_POPOUT
        }), [eV, ex]), {
            analyticsLocations: eW
        } = (0, h.default)(S.default.EMOJI_PICKER), {
            diversitySurrogate: eK
        } = (0, d.useStateFromStoresObject)([m.default], () => ({
            diversitySurrogate: m.default.diversitySurrogate
        })), ez = (0, B.useEmojiSearchResults)(eM, u, l), eX = null == ez ? 0 : ez.locked.length + ez.unlocked.length, eQ = P.EmojiPickerCollapsedSections.useSetting(), eq = r.useMemo(() => new Set(eQ), [eQ]), eJ = r.useCallback(e => {
            P.EmojiPickerCollapsedSections.updateSetting(Array.from(e))
        }, []), eZ = (0, g.useExpressionPickerGridWidth)({
            gridWrapperRef: ey,
            containerWidth: ed,
            listPaddingLeft: et,
            listScrollbarWidth: 8
        }), {
            rowCountBySection: e$,
            sectionDescriptors: e0,
            emojiGrid: e1,
            columnCounts: e2
        } = (0, j.useEmojiGrid)({
            gridWidth: eZ,
            channel: u,
            includeCreateEmojiButton: k,
            pickerIntention: l,
            emojiSearchResults: ez,
            collapsedSections: eq,
            emojiPaddingHorizontal: ee,
            emojiSpriteSize: C
        }), {
            newlyAddedEmojis: e3
        } = (0, V.default)(eb, l), {
            trackOnPickerOpen: e4
        } = (0, B.useTrackEmojiPickerOpened)({
            intention: l,
            isBurstReaction: eG,
            analyticsObject: eH
        });
        (0, M.useMaybeFetchPremiumLikelihood)(y.default);
        let e7 = r.useCallback(() => {
                let e = e3.length > 0 ? e3[0].id : null;
                (0, O.updateNewlyAddedLastSeen)(eb, e), e4()
            }, [e4, e3, eb]),
            e6 = (0, j.useEmojiSelectHandler)({
                pickerIntention: l,
                selectedChannel: u,
                closePopout: I,
                onSelectEmoji: ei,
                setUpsellConfigs: eD,
                emojiSelectAnalytics: e => {
                    "" !== eM ? (0, B.trackEmojiSearchSelect)({
                        emoji: e.emoji,
                        location: {
                            ...ej,
                            object: q.AnalyticsObjects.EMOJI
                        },
                        searchQuery: eM,
                        intention: l
                    }) : (0, B.trackEmojiSelect)({
                        emoji: e.emoji,
                        location: {
                            ...ej,
                            object: null != eH ? eH : q.AnalyticsObjects.EMOJI,
                            ...null != eF && {
                                page: eF
                            }
                        },
                        pickerIntention: l,
                        category: e.category,
                        subCategory: e.subCategory,
                        position: e.columnIndex + 1,
                        newlyAddedHighlight: e.subCategory === Q.EmojiSubCategory.NEWLY_ADDED_EMOJI && N.default.isNewerThanLastSeen(eb, e.emoji.id),
                        isBurstReaction: eG
                    })
                },
                trackEmojiFavorited: e => {
                    (0, B.trackEmojiFavorited)({
                        emoji: e.emoji,
                        location: {
                            ...ej,
                            object: q.AnalyticsObjects.EMOJI
                        }
                    })
                }
            }),
            e5 = r.useCallback(() => {
                I(), null == e_ || e_()
            }, [I, e_]),
            {
                getItemProps: e8,
                getRowProps: e9,
                gridContainerProps: te,
                handleGridContainerKeyDown: tt,
                isUsingKeyboardNavigation: tn
            } = er({
                pickerIntention: l,
                analyticsLocation: ej,
                columnCounts: e2,
                onSelectEmoji: ei,
                emojiGrid: e1,
                emojiList: eP,
                channelGuildId: eb,
                isBurstReaction: eG
            });
        es(ed, eP), ea(ed, eK, eU, eR), r.useEffect(() => {
            !ec && (0, R.setSearchQuery)("")
        }, [ec]), r.useEffect(() => (G.default.track(q.AnalyticEvents.OPEN_POPOUT, {
            type: null != eY ? eY : "Emoji Picker",
            guild_id: eb
        }), p.EmojiPickerStore.resetStoreState), [eY, eb]), r.useEffect(() => () => (0, v.hideHotspot)(v.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), r.useLayoutEffect(() => {
            var e;
            let {
                columnIndex: t,
                rowIndex: n
            } = p.EmojiPickerStore.getState().inspectedExpressionPosition;
            (null === (e = e1[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && p.EmojiPickerStore.setInspectedExpressionPosition(0, 0)
        }, [e1]), r.useEffect(() => {
            if ("" === ev.current && "" !== eM && (0, B.trackEmojiSearchStart)(ej, l), 0 === eX && "" !== eM) eo(ej, eM);
            else if ("" !== eM && ev.current !== eM) {
                var e;
                el(eX, null !== (e = null == ez ? void 0 : ez.locked.length) && void 0 !== e ? e : 0, ej, eM, l)
            }
            ev.current = eM
        }, [eM, ej, eX, ez, l]);
        let ti = null != eS ? eS : D ? "div" : E.Dialog,
            tr = null != eZ;
        (null == eL ? void 0 : eL.type) === j.EmojiUpsellType.PREMIUM ? o = (0, i.jsx)(X.default, {
            onLearnMore: e5,
            emojiDescriptor: eL.emojiDescriptor,
            pickerIntention: l,
            analyticsLocation: ej,
            onClose: () => eD(null),
            channel: u
        }) : (null == eL ? void 0 : eL.type) === j.EmojiUpsellType.ROLE_SUBSCRIPTION ? o = (0, i.jsx)(L.default, {
            onClose: () => eD(null),
            guildId: eL.guildId,
            emojiId: eL.emojiId
        }) : eG && !eB && (o = (0, i.jsx)(F.default, {
            onDismiss: () => ew(!1)
        }));
        let ts = (0, i.jsx)(Y.default, {
                pickerIntention: l,
                emojiListRef: eP,
                onKeyDown: e => {
                    null == tt || tt(e), null == ep || ep(e)
                },
                searchBarRef: eU,
                onFocus: eO,
                autoFocus: eR,
                accessory: eC,
                headerClassName: eI,
                hasTabWrapper: D,
                diversitySurrogate: eK,
                isBurstReaction: eG,
                onBurstReactionToggle: () => ew(!eG),
                renderHeader: em
            }),
            ta = [];
        l === Z.EmojiIntention.REACTION && ta.push(_.DismissibleContent.SUPER_REACTIONS_NITRO_MARKETING), !m.default.hasFavoriteEmojis(eb) && ta.push(_.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let to = (0, i.jsx)(T.default, {
            ...ej,
            children: (0, i.jsxs)(ti, {
                id: Q.EMOJI_PICKER_TAB_PANEL_ID,
                "aria-labelledby": D ? Q.EMOJI_PICKER_TAB_ID : void 0,
                role: D ? "tabpanel" : void 0,
                className: a()($.wrapper, {
                    [$.emojiPickerHasTabWrapper]: D,
                    [$.isBurstReactionPicker]: eG && eB
                }),
                children: [D ? null : ts, (0, i.jsxs)("div", {
                    className: a()($.emojiPicker, eE),
                    onScroll: en,
                    children: [D ? ts : null, (0, i.jsxs)("div", {
                        className: $.bodyWrapper,
                        ref: ey,
                        children: [(0, i.jsx)(z.default, {
                            channel: u,
                            closePopout: I
                        }), (0, i.jsx)(A.default, {
                            contentTypes: ta,
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: n
                                } = e;
                                if (t === _.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, i.jsx)(H.default, {
                                    markAsDismissed: () => n(J.ContentDismissActionType.UNKNOWN)
                                })
                            }
                        }), eh ? null : (0, i.jsx)("div", {
                            className: $.emojiPickerListWrapper,
                            id: Q.GRID_NAVIGATOR_ID,
                            ...te,
                            children: tr ? (0, i.jsx)(K.default, {
                                collapsedSections: eq,
                                diversitySurrogate: eK,
                                emojiGrid: e1,
                                emojiListRef: eP,
                                emojiSize: C,
                                getEmojiItemProps: e8,
                                getEmojiRowProps: e9,
                                gridWidth: eZ,
                                isUsingKeyboardNavigation: tn,
                                onEmojiSelect: (e, t) => {
                                    e6(e, {
                                        ...t,
                                        isBurst: eG
                                    })
                                },
                                rowCount: e1.length,
                                rowCountBySection: e$,
                                sectionDescriptors: e0,
                                setCollapsedSections: eJ,
                                channelGuildId: eb,
                                messageId: eA,
                                isBurstReaction: eG,
                                listHeaderClassName: eN
                            }) : null
                        })]
                    }), (0, i.jsx)(W.EmojiPickerInspector, {
                        emojiGrid: e1,
                        className: $.inspector,
                        guildId: eb,
                        pickerIntention: l,
                        channel: u
                    }), o]
                }), eh ? null : (0, i.jsx)(x.default, {
                    className: $.categoryList,
                    emojiListRef: eP,
                    sectionDescriptors: e0,
                    intention: l,
                    channel: u
                })]
            })
        });
        return (0, i.jsx)(h.AnalyticsLocationProvider, {
            value: eW,
            children: to
        })
    }))
}