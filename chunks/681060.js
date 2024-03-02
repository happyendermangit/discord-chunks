function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return eu
        }
    }), n("222007"), n("70102");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("44170"),
        o = n("627445"),
        u = n.n(o),
        d = n("16470"),
        c = n("394846"),
        f = n("316693"),
        m = n("446674"),
        p = n("77078"),
        h = n("295426"),
        E = n("206230"),
        g = n("812204"),
        C = n("685665"),
        S = n("996554"),
        T = n("426969"),
        I = n("847352"),
        v = n("383018"),
        _ = n("529190"),
        N = n("829290"),
        A = n("842343"),
        x = n("200197"),
        y = n("538282"),
        O = n("241488"),
        R = n("292936"),
        M = n("791234"),
        L = n("267567"),
        P = n("217535"),
        b = n("558901"),
        j = n("328511"),
        U = n("467094"),
        D = n("24373"),
        k = n("300322"),
        w = n("845579"),
        F = n("26989"),
        G = n("957255"),
        B = n("18494"),
        H = n("769264"),
        V = n("585722"),
        K = n("697218"),
        W = n("378765"),
        Y = n("991170"),
        z = n("773336"),
        Z = n("545054"),
        J = n("850391"),
        q = n("743825"),
        X = n("231868"),
        Q = n("834725"),
        $ = n("537566"),
        ee = n("912823"),
        et = n("376215"),
        en = n("830618"),
        el = n("848471"),
        ei = n("153213"),
        ea = n("49111"),
        es = n("406291"),
        er = n("13030"),
        eo = n("350583"),
        eu = i.memo(i.forwardRef(function(e, t) {
            var a, o, eu, ed, ec, ef, em, ep, eh, eE, eg, eC, eS, eT;
            let {
                textValue: eI,
                richValue: ev,
                className: e_,
                innerClassName: eN,
                editorClassName: eA,
                id: ex,
                required: ey,
                disabled: eO,
                placeholder: eR,
                accessibilityLabel: eM,
                channel: eL,
                type: eP,
                focused: eb,
                renderAttachButton: ej,
                renderAppLauncherButton: eU,
                renderApplicationCommandIcon: eD,
                pendingReply: ek,
                onChange: ew,
                onResize: eF,
                onBlur: eG,
                onFocus: eB,
                onKeyDown: eH,
                onSubmit: eV,
                promptToUpload: eK,
                highlighted: eW,
                canMentionRoles: eY,
                canMentionChannels: ez,
                maxCharacterCount: eZ,
                showRemainingCharsAfterCount: eJ,
                allowNewLines: eq = !0,
                characterCountClassName: eX,
                "aria-describedby": eQ,
                "aria-labelledby": e$,
                setEditorRef: e0,
                autoCompletePosition: e1,
                children: e2,
                disableThemedBackground: e4 = !1,
                emojiPickerCloseOnModalOuterClick: e8,
                parentModalKey: e3
            } = e;
            u(null != eP, "chat input type must be set");
            let {
                AnalyticsLocationProvider: e6
            } = (0, C.default)(g.default.CHANNEL_TEXT_AREA), e9 = function(e) {
                let t = i.useRef(null);
                if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
                return null == e ? t : e
            }(t), e7 = i.useRef(null), e5 = i.useRef(null), te = i.useRef(null), tt = i.useRef(null);
            null == e0 || e0(e5.current);
            let {
                activeCommand: tn,
                activeCommandSection: tl
            } = (0, m.useStateFromStoresObject)([v.default], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = eP.commands) || void 0 === e ? void 0 : e.enabled) ? v.default.getActiveCommand(eL.id) : null,
                    activeCommandSection: (null === (t = eP.commands) || void 0 === t ? void 0 : t.enabled) ? v.default.getActiveCommandSection(eL.id) : null
                }
            }), {
                isLurking: ti,
                isPendingMember: ta,
                disabled: ts,
                canAttachFiles: tr,
                canCreateThreads: to,
                canEveryoneSendMessages: tu
            } = function(e, t, n, l) {
                let i = e.getGuildId(),
                    a = (0, m.useStateFromStores)([L.default], () => null != i && L.default.isLurking(i), [i]),
                    s = (0, m.useStateFromStores)([F.default, K.default], () => {
                        var e, t;
                        let n = K.default.getCurrentUser();
                        return null !== (t = null != i && null != n ? null === (e = F.default.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
                    }),
                    r = (0, m.useStateFromStoresObject)([G.default], () => {
                        var i, a;
                        let r = e.isPrivate(),
                            o = G.default.computePermissions(e),
                            u = f.default.has(o, ea.Permissions.CREATE_PUBLIC_THREADS) || f.default.has(o, ea.Permissions.CREATE_PRIVATE_THREADS),
                            d = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || f.default.has(o, ea.Permissions.SEND_MESSAGES)),
                            c = d && f.default.has(o, ea.Permissions.ATTACH_FILES),
                            m = null != n,
                            p = (0, k.computeIsReadOnlyThread)(e);
                        return {
                            disabled: l || s || !r && !d || p,
                            canAttachFiles: !0 === t.attachments && (r || s || c || m),
                            canCreateThreads: u,
                            canEveryoneSendMessages: Y.default.canEveryoneRole(ea.Permissions.SEND_MESSAGES, e)
                        }
                    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, s]);
                return {
                    isLurking: a,
                    isPendingMember: s,
                    ...r
                }
            }(eL, eP, tn, eO), td = eP.toolbarType === J.SlateToolbarTypes.STATIC, tc = !w.UseLegacyChatInput.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver, tf = !tc || !(null === (a = eP.commands) || void 0 === a ? void 0 : a.enabled) || !eb || eI !== es.COMMAND_SENTINEL, tm = (0, P.default)(), {
                isSubmitButtonEnabled: tp,
                fontSize: th
            } = (0, m.useStateFromStoresObject)([E.default], () => ({
                fontSize: E.default.fontSize,
                isSubmitButtonEnabled: E.default.isSubmitButtonEnabled
            })), tE = (0, m.useStateFromStores)([H.default], () => H.default.isEnabled());
            ! function(e, t) {
                let n = i.useCallback(() => {
                        !t && (0, y.toggleExpressionPicker)(er.ExpressionPickerViewType.EMOJI, e)
                    }, [t, e]),
                    l = i.useCallback(() => {
                        var n;
                        !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, y.toggleExpressionPicker)(er.ExpressionPickerViewType.GIF, e)
                    }, [t, e]),
                    a = i.useCallback(() => {
                        var n;
                        !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, y.toggleExpressionPicker)(er.ExpressionPickerViewType.STICKER, e)
                    }, [t, e]);
                (0, W.useComponentAction)({
                    event: ea.ComponentActions.TOGGLE_EMOJI_POPOUT,
                    handler: n
                }), (0, W.useComponentAction)({
                    event: ea.ComponentActions.TOGGLE_GIF_PICKER,
                    handler: l
                }), (0, W.useComponentAction)({
                    event: ea.ComponentActions.TOGGLE_STICKER_PICKER,
                    handler: a
                })
            }(eP, ts);
            let {
                eventEmitter: tg,
                handleEditorSelectionChanged: tC
            } = function(e, t, n) {
                let [l] = i.useState(() => new r.EventEmitter);
                return i.useEffect(() => {
                    l.emit("text-changed", t, n)
                }, [t, n, l]), {
                    eventEmitter: l,
                    handleEditorSelectionChanged: t => {
                        null != e.current && l.emit("selection-changed", t)
                    }
                }
            }(e5, eI, ev), {
                submitting: tS,
                submit: tT,
                handleSubmit: tI
            } = function(e, t, a, s) {
                let [r, o] = i.useState(!1), u = i.useCallback((i, d, c, f, m) => {
                    var E, g, C;
                    if (r) return;
                    o(!0);
                    let S = null !== (g = null === (E = j.default.getStickerPreview(s, t.drafts.type)) || void 0 === E ? void 0 : E.map(e => e.id)) && void 0 !== g ? g : [],
                        T = null !== (C = V.default.getUploads(s, t.drafts.type)) && void 0 !== C ? C : [];
                    if (null == d && !f && !m && (0, M.shouldShowAddMediaToOriginalPostModal)(T, s)) {
                        o(!1), (0, p.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("67994").then(n.bind(n, "67994"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                threadId: s,
                                attachments: T,
                                sendMessage: () => u(i, void 0, void 0, void 0, !0)
                            })
                        });
                        return
                    }
                    e({
                        value: i,
                        uploads: T,
                        stickers: S,
                        command: d,
                        commandOptionValues: c,
                        isGif: f
                    }).then(e => {
                        var n, l, i, r;
                        let {
                            shouldClear: u,
                            shouldRefocus: d
                        } = e;
                        let c = (n = u, l = t, null !== (r = n && (null === (i = l.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== r && r),
                            f = null != a.current;
                        if (c) {
                            if (s !== B.default.getChannelId()) h.default.saveDraft(s, "", t.drafts.type);
                            else f && a.current.clearValue()
                        }
                        f && (o(!1), (0, y.closeExpressionPicker)(), d && a.current.focus())
                    })
                }, [a, e, r, t, s]), d = i.useCallback(e => {
                    var t;
                    null == a || null === (t = a.current) || void 0 === t || t.submit(e)
                }, []);
                return {
                    submitting: r,
                    submit: u,
                    handleSubmit: d
                }
            }(eV, eP, e5, eL.id), {
                autocompleteRef: tv,
                handleMaybeShowAutocomplete: t_,
                handleHideAutocomplete: tN
            } = function() {
                let e = i.useRef(null),
                    t = i.useCallback(() => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete()
                    }, []),
                    n = i.useCallback(() => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.onHideAutocomplete()
                    }, []);
                return {
                    autocompleteRef: e,
                    handleMaybeShowAutocomplete: t,
                    handleHideAutocomplete: n
                }
            }();
            let tA = (eE = tT, eg = eP, eC = e5, i.useCallback(e => {
                var t, n;
                eg === J.ChatInputTypes.CREATE_FORUM_POST ? null === (n = eC.current) || void 0 === n || n.insertGIF(e) : eE(e.url, void 0, void 0, !0), (0, y.closeExpressionPicker)(), null === (t = eC.current) || void 0 === t || t.focus()
            }, [eC, eE, eg]));
            let tx = (eS = e5, i.useCallback(function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = eS.current;
                    null != e && null != l && l.insertEmoji(e, t, n), t && (0, y.closeExpressionPicker)()
                }, [eS])),
                ty = function(e) {
                    let {
                        editorRef: t,
                        disabled: n,
                        textValue: l,
                        channelId: a,
                        chatInputType: s,
                        submit: r
                    } = e, {
                        analyticsLocations: o
                    } = (0, C.default)();
                    return i.useCallback((e, i) => {
                        var u, d;
                        !n && ((0, D.shouldAttachSticker)(i, l, a, s.drafts.type) ? ((0, Q.trackStickerPreviewSelect)({
                            sticker: e,
                            stickerSelectLocation: i,
                            isReplacement: null != j.default.getStickerPreview(a, s.drafts.type),
                            analyticsLocations: o
                        }), (0, U.addStickerPreview)(a, e, s.drafts.type)) : (r({
                            value: "",
                            uploads: void 0,
                            stickers: [e.id]
                        }), null === (d = t.current) || void 0 === d || d.clearValue()), (0, y.closeExpressionPicker)(), null === (u = t.current) || void 0 === u || u.focus())
                    }, [n, l, a, s.drafts.type, t, o, r])
                }({
                    editorRef: e5,
                    disabled: ts,
                    textValue: eI,
                    channelId: eL.id,
                    chatInputType: eP,
                    submit: eV
                });
            let tO = (eT = e5, i.useCallback(e => {
                    let t = eT.current;
                    null != e && null != t && t.insertSound(e), (0, y.closeExpressionPicker)()
                }, [eT])),
                tR = i.useCallback(() => {
                    var e;
                    return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide()
                }, []),
                {
                    editorHeight: tM,
                    handleResize: tL
                } = function(e) {
                    let [t, n] = i.useState(0), l = i.useCallback(t => {
                        n(null != t ? t : 0), null == e || e(t)
                    }, [e]);
                    return {
                        editorHeight: t,
                        handleResize: l
                    }
                }(eF),
                {
                    handleTab: tP,
                    handleEnter: tb,
                    handleMoveSelection: tj
                } = function(e, t, n) {
                    let l = i.useCallback(() => {
                            var l, i;
                            return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1
                        }, [n]),
                        a = i.useCallback(() => {
                            var l, i;
                            return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1
                        }, [n]),
                        s = i.useCallback(l => {
                            var i, a;
                            return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(l))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onMoveSelection(l)) || !1
                        }, [n]);
                    return {
                        handleTab: l,
                        handleEnter: a,
                        handleMoveSelection: s
                    }
                }(tv, e7, tf),
                {
                    expressionPickerView: tU,
                    shouldHideExpressionPicker: tD,
                    handleAutocompleteVisibilityChange: tk,
                    handleOuterClick: tw
                } = function(e, t, n) {
                    let [l, a] = (0, y.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], d.default);
                    i.useEffect(() => () => {
                        (0, y.closeExpressionPicker)(e)
                    }, [e]);
                    let s = i.useCallback(e => {
                            t.emit("autocomplete-visibility-change", e), e && (0, y.closeExpressionPicker)()
                        }, [t]),
                        r = i.useCallback(() => {
                            var e;
                            null == l && (null === (e = n.current) || void 0 === e || e.handleOuterClick())
                        }, [l]),
                        o = null == l || null == a || a !== e;
                    return {
                        expressionPickerView: l,
                        shouldHideExpressionPicker: o,
                        handleAutocompleteVisibilityChange: s,
                        handleOuterClick: r
                    }
                }(eP, tg, e5),
                tF = S.AppLauncherDesktopExperiment.useExperiment({
                    location: "chat_input"
                }, {
                    autoTrackExposure: !1
                }).enabled,
                tG = (0, m.useStateFromStores)([T.default], () => T.default.shouldShowPopup(), []);
            (0, Z.useHereMentionCallback)(tg, eL.guild_id, eL.id);
            let tB = null != ek,
                tH = ts && !((ti || ta) && tu) || tS && (null === (o = eP.submit) || void 0 === o ? void 0 : o.useDisabledStylesOnSubmit),
                tV = null,
                tK = null;
            null != tn ? tV = null == eD ? void 0 : eD(tn, tl, eo.attachButton) : (!ts || to) && (tV = null == ej ? void 0 : ej(tB, eo.attachButton), tF && (tK = null == eU ? void 0 : eU()));
            let tW = tc && null != ev && !ts && eP.showCharacterCount && null == tn,
                tY = tc && !__OVERLAY__ && null != ev && null == tn,
                tz = function(e, t, n, l) {
                    var i, a;
                    let s = w.ExpressionSuggestionsEnabled.useSetting(),
                        r = (0, m.useStateFromStores)([j.default], () => j.default.getStickerPreview(e.id, t.drafts.type)),
                        o = null != r && r.length > 0;
                    return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !o && (null === (a = l.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n
                }(eL, eP, ev, tv),
                tZ = (0, N.useShouldShowPTONotice)(eL),
                tJ = null != tn || null != ek || tZ,
                tq = !!(null === (eu = eP.emojis) || void 0 === eu ? void 0 : eu.button) && tM <= 44;
            return (0, l.jsx)(x.EventEmitterProvider, {
                value: tg,
                children: (0, l.jsxs)(e6, {
                    children: [tY && td ? (0, l.jsx)(ei.default, {
                        editorRef: e5,
                        options: eP.markdown,
                        channel: eL
                    }) : tY ? (0, l.jsx)(el.default, {
                        ref: tt,
                        editorRef: e5,
                        containerRef: te,
                        options: eP.markdown
                    }) : null, (0, l.jsxs)("div", {
                        ref: e9,
                        className: s(e_, {
                            [eo.channelTextArea]: !0,
                            [eo.channelTextAreaDisabled]: tH,
                            [eo.highlighted]: eW,
                            [eo.textAreaMobileThemed]: c.isMobile
                        }),
                        onMouseDown: tw,
                        children: [(0, l.jsx)($.default, {
                            type: eP,
                            channel: eL,
                            activeCommand: tn,
                            pendingReply: ek
                        }), (0, l.jsxs)("div", {
                            ref: te,
                            onScroll: tR,
                            className: s(eN, {
                                [eo.scrollableContainer]: !0,
                                [eo.themedBackground]: !e4,
                                [eo.webkit]: "Blink" === platform.layout,
                                [eo.hasConnectedBar]: tJ
                            }),
                            children: [(0, l.jsx)(X.default, {
                                channelId: eL.id,
                                chatInputType: eP
                            }), eP.hideAttachmentArea ? null : (0, l.jsx)(et.default, {
                                channelId: eL.id,
                                type: eP,
                                canAttachFiles: tr
                            }), (0, l.jsxs)("div", {
                                className: s(eo.inner, {
                                    [eo.innerDisabled]: tH,
                                    [eo.sansAttachButton]: eP !== J.ChatInputTypes.EDIT && (null != tV || tH && null == tV || ti),
                                    [eo.sansAttachButtonCreateThread]: eP === J.ChatInputTypes.THREAD_CREATION,
                                    [eo.sansAttachButtonCreatePost]: eP === J.ChatInputTypes.CREATE_FORUM_POST
                                }),
                                children: [tV, tK, (0, l.jsx)(p.FocusRing, {
                                    ringTarget: e9,
                                    ringClassName: eo.focusRing,
                                    children: (0, l.jsx)(q.default, {
                                        ref: e5,
                                        id: ex,
                                        focused: eb,
                                        useSlate: tc,
                                        textValue: eI,
                                        richValue: ev,
                                        disabled: ts,
                                        placeholder: eR,
                                        required: ey,
                                        accessibilityLabel: eM,
                                        isPreviewing: (ti || ta) && tu,
                                        channel: eL,
                                        type: eP,
                                        canPasteFiles: tr,
                                        uploadPromptCharacterCount: ea.MAX_MESSAGE_LENGTH_PREMIUM,
                                        maxCharacterCount: null != eZ ? eZ : tm,
                                        allowNewLines: eq,
                                        "aria-describedby": eQ,
                                        onChange: ew,
                                        onResize: tL,
                                        onBlur: eG,
                                        onFocus: eB,
                                        onKeyDown: eH,
                                        onSubmit: tT,
                                        onTab: tP,
                                        onEnter: tb,
                                        onMoveSelection: tj,
                                        onSelectionChanged: tC,
                                        onMaybeShowAutocomplete: t_,
                                        onHideAutocomplete: tN,
                                        promptToUpload: eK,
                                        fontSize: th,
                                        spellcheckEnabled: tE,
                                        canOnlyUseTextCommands: tB,
                                        className: s({
                                            [eo.textAreaThreadCreation]: eP === J.ChatInputTypes.THREAD_CREATION,
                                            [eo.profileBioInput]: eP === J.ChatInputTypes.PROFILE_BIO_INPUT
                                        }, eA),
                                        "aria-labelledby": e$
                                    })
                                }), (0, l.jsx)(ee.default, {
                                    type: eP,
                                    disabled: ts,
                                    channel: eL,
                                    handleSubmit: tI,
                                    isEmpty: 0 === eI.trim().length
                                })]
                            })]
                        }), tf ? null : (0, l.jsx)(_.default, {
                            ref: e7,
                            channel: eL,
                            canOnlyUseTextCommands: tB
                        }), (0, l.jsx)(A.default, {
                            ref: tv,
                            channel: eL,
                            canMentionRoles: eY,
                            canMentionChannels: ez,
                            useNewSlashCommands: tc,
                            canOnlyUseTextCommands: tB,
                            canSendStickers: null === (ed = eP.stickers) || void 0 === ed ? void 0 : ed.allowSending,
                            textValue: eI,
                            focused: eb,
                            expressionPickerView: tU,
                            type: eP,
                            editorRef: e5,
                            onSendMessage: tT,
                            onSendSticker: ty,
                            onVisibilityChange: tk,
                            editorHeight: tM,
                            setValue: (e, t) => null == ew ? void 0 : ew(null, e, t),
                            position: e1
                        }), (0, l.jsx)(b.default, {
                            textValue: eI,
                            editorHeight: tM
                        }), tW ? (0, l.jsx)(en.default, {
                            type: eP,
                            textValue: eI,
                            className: s(eX, {
                                [eo.indentCharacterCount]: tq
                            }),
                            maxCharacterCount: eZ,
                            showRemainingCharsAfterCount: eJ
                        }) : null, tz ? (0, l.jsx)(R.default, {
                            editorRef: e5,
                            channel: eL,
                            isEditorFocused: eb,
                            onSelectSticker: ty,
                            submitButtonVisible: (null === (ec = eP.submit) || void 0 === ec ? void 0 : ec.button) && (null !== (ep = null === (ef = eP.submit) || void 0 === ef ? void 0 : ef.ignorePreference) && void 0 !== ep ? ep : tp),
                            stickerIconVisible: null !== (eh = null === (em = eP.stickers) || void 0 === em ? void 0 : em.button) && void 0 !== eh && eh
                        }) : null, e2]
                    }), tD ? null : (0, l.jsx)(O.default, {
                        positionTargetRef: e9,
                        type: eP,
                        onSelectGIF: tA,
                        onSelectEmoji: tx,
                        onSelectSticker: ty,
                        onSelectSound: tO,
                        channel: eL,
                        closeOnModalOuterClick: e8,
                        parentModalKey: e3,
                        position: "top",
                        align: "right",
                        positionLayerClassName: eo.expressionPickerPositionLayer
                    }), tG ? (0, l.jsx)(I.default, {
                        positionTargetRef: e9,
                        channel: eL,
                        closeOnModalOuterClick: e8,
                        parentModalKey: e3
                    }) : null]
                })
            })
        }))
}