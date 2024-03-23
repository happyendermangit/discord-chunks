function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("612039"),
        u = n("858619"),
        d = n("575226"),
        c = n("986632"),
        f = n("592407"),
        p = n("872173"),
        m = n("351825"),
        h = n("642032"),
        x = n("248474"),
        E = n("83017"),
        y = n("458604"),
        g = n("115279"),
        S = n("49111"),
        C = n("782340"),
        T = n("348473"),
        _ = e => {
            let {
                emojiDescriptors: t,
                emojiSize: n,
                onSelect: a,
                onInspect: _,
                surrogateCodePoint: I,
                getEmojiItemProps: v,
                getEmojiRowProps: N,
                isScrolling: A,
                isUsingKeyboardNavigation: O,
                rowIndex: R,
                allowAnimatedEmoji: M,
                showEmojiFavoriteTooltip: k,
                channelGuildId: L,
                category: P,
                selectedItemClassName: b,
                messageId: j,
                isBurstReaction: U,
                inNitroLockedSection: D
            } = e, {
                enabled: w
            } = x.default.useExperiment({
                location: "EmojiPicker"
            }, {
                autoTrackExposure: !1
            }), F = c.EmojiPickerStore.getState(), [G, H] = l.useState(F.inspectedExpressionPosition), [B, V] = (0, o.default)(null, 300), K = l.useRef(null);
            l.useEffect(() => c.EmojiPickerStore.useStore.subscribe(e => H(e), e => e.inspectedExpressionPosition), []), l.useEffect(() => {
                p.FrecencyUserSettingsActionCreators.loadIfNecessary()
            }, []);
            let W = n === g.EmojiSize.LARGE,
                Y = n === g.EmojiSize.MEDIUM,
                z = e => {
                    let t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
                    switch (e.type) {
                        case E.EmojiGridItemTypes.CREATE_EMOJI: {
                            let {
                                visibleRowIndex: n,
                                columnIndex: o
                            } = e, u = G.rowIndex === n && G.columnIndex === o, d = t => {
                                t.stopPropagation(), !A.current && !O.current && (a(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1
                                }), f.default.open(e.guildId, S.GuildSettingsSections.EMOJI, S.AnalyticsSections.EMOJI_PICKER_POPOUT))
                            }, c = () => {
                                !A.current && !O.current && _(e)
                            };
                            return function() {
                                var e;
                                let {
                                    onMouseEnter: n,
                                    onMouseLeave: a
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                                    ref: f,
                                    tabIndex: p,
                                    onFocus: h,
                                    ...x
                                } = null !== (e = v(o, R)) && void 0 !== e ? e : {};
                                return (0, l.createElement)("li", {
                                    ...x,
                                    key: t
                                }, (0, i.jsx)(r.FocusRing, {
                                    children: (0, i.jsx)("button", {
                                        "aria-label": C.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        ref: f,
                                        className: s(T.emojiItem, {
                                            [T.emojiItemLarge]: W,
                                            [T.emojiItemMedium]: Y,
                                            [T.emojiItemSelected]: u,
                                            [null != b ? b : ""]: u,
                                            [T.showPulse]: B === t
                                        }),
                                        onFocus: null != h ? h : c,
                                        onMouseOver: c,
                                        onMouseEnter: n,
                                        onMouseLeave: a,
                                        onClick: d,
                                        tabIndex: p,
                                        children: (0, i.jsx)(m.default, {
                                            className: T.icon,
                                            foreground: T.icon,
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                }))
                            }()
                        }
                        case E.EmojiGridItemTypes.EMOJI: {
                            var n;
                            let {
                                columnIndex: l,
                                visibleRowIndex: s
                            } = e, r = G.rowIndex === s && G.columnIndex === l;
                            return (0, i.jsx)(y.default, {
                                rowIndex: R,
                                descriptor: e,
                                emojiItemKey: t,
                                isInspected: r,
                                isScrolling: A,
                                isUsingKeyboardNavigation: O,
                                surrogateCodePoint: I,
                                allowAnimatedEmoji: M,
                                selectedItemClassName: b,
                                onSelect: a,
                                onInspect: _,
                                channelGuildId: L,
                                getEmojiItemProps: v,
                                isMediumSize: Y,
                                isLargeSize: W,
                                pulseItemKey: B,
                                setPulseItemKey: V,
                                showEmojiFavoriteTooltip: k,
                                messageId: j,
                                isBurstReaction: U,
                                rowPosition: null == K ? void 0 : null === (n = K.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                                inNitroLockedSection: D
                            }, t)
                        }
                    }
                },
                J = e => (0, i.jsx)("ul", {
                    ...N(R),
                    className: s(T.emojiListRow, {
                        [T.emojiListRowLargeSize]: W,
                        [T.emojiListRowMediumSize]: Y
                    }),
                    ref: K,
                    children: e.map(z)
                });
            if (P !== g.EmojiCategoryTypes.TOP_GUILD_EMOJI) return J(t);
            let Z = t.filter(e => !!w && e.type === E.EmojiGridItemTypes.CREATE_EMOJI || e.subCategory === g.EmojiSubCategory.TOP_GUILD_EMOJI || e.subCategory === g.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && !d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
                q = t.filter(e => e.subCategory === g.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
            return 0 === q.length ? J(t) : (0, i.jsxs)("div", {
                className: T.topEmojiSectionContainer,
                children: [(0, i.jsx)("div", {
                    className: s(T.topEmojiContainer, {
                        [T.noEmojis]: 0 === Z.length
                    }),
                    children: J(Z)
                }), (0, i.jsxs)("div", {
                    className: T.newlyAddedHighlightContainer,
                    children: [(0, i.jsx)("div", {
                        className: s(T.newlyAddedHighlight, {
                            [T.oneItem]: 1 === q.length,
                            [T.alignRight]: Z.length > 0
                        }),
                        children: J(q)
                    }), (0, i.jsxs)("div", {
                        className: s(T.newlyAddedBadge, {
                            [T.newlyAddedBadgeLarge]: W,
                            [T.newlyAddedBadgeMedium]: Y,
                            [T.alignRight]: Z.length > 0
                        }),
                        children: [(0, i.jsx)(h.default, {
                            foreground: T.newlyAddedBadgeStar
                        }), (0, i.jsx)(r.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: C.default.Messages.NEW
                        })]
                    })]
                })]
            })
        }
}