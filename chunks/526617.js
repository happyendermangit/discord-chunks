function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return K
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("552075"),
        u = n("481060"),
        d = n("239091"),
        _ = n("788911"),
        c = n("906732"),
        E = n("880949"),
        I = n("806966"),
        T = n("28546"),
        f = n("468954"),
        S = n("695346"),
        h = n("594174"),
        A = n("979651"),
        m = n("153124"),
        N = n("259580"),
        O = n("855693"),
        p = n("68972"),
        R = n("887208"),
        C = n("664800"),
        g = n("632184"),
        L = n("74538"),
        D = n("697426"),
        v = n("242291"),
        M = n("421673"),
        y = n("663215"),
        P = n("409673"),
        U = n("347072"),
        b = n("835648"),
        G = n("650743"),
        w = n("394740"),
        k = n("343747"),
        B = n("981631"),
        V = n("689938"),
        F = n("6503");
    let x = [8, 0, 8, 8];

    function H(e) {
        return 0 === e ? 16 : 32
    }

    function Y(e) {
        let {
            categoryInfo: t,
            collapsed: n,
            toggleCollapsed: r,
            index: s
        } = e;
        return (0, i.jsxs)(u.Clickable, {
            className: a()(F.sectionHeader, {
                [F.notFirstSectionHeader]: 0 !== s
            }),
            onClick: r,
            children: [function() {
                switch (t.type) {
                    case D.SoundboardSoundGridSectionType.FAVORITES:
                        return (0, i.jsx)(R.default, {
                            className: F.headerIcon
                        });
                    case D.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return (0, i.jsx)(O.default, {
                            className: F.headerIcon
                        });
                    case D.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return (0, i.jsx)(l.AnalyticsIcon, {
                            className: F.headerIcon
                        });
                    case D.SoundboardSoundGridSectionType.GUILD:
                        return (0, i.jsx)(E.default, {
                            guild: t.guild,
                            height: 16,
                            width: 16
                        });
                    case D.SoundboardSoundGridSectionType.DEFAULTS:
                        return (0, i.jsx)(p.default, {
                            className: F.headerIcon
                        });
                    case D.SoundboardSoundGridSectionType.SEARCH:
                        return (0, i.jsx)(C.default, {
                            className: F.headerIcon
                        })
                }
            }(), (0, i.jsx)(u.Heading, {
                variant: "eyebrow",
                color: "none",
                className: F.sectionTitle,
                children: function() {
                    switch (t.type) {
                        case D.SoundboardSoundGridSectionType.FAVORITES:
                            return V.default.Messages.FAVORITES;
                        case D.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                            return V.default.Messages.RECENTLY_HEARD;
                        case D.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                            return V.default.Messages.FREQUENTLY_USED;
                        case D.SoundboardSoundGridSectionType.GUILD:
                            return t.guild.name;
                        case D.SoundboardSoundGridSectionType.DEFAULTS:
                            return V.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                        case D.SoundboardSoundGridSectionType.SEARCH:
                            return V.default.Messages.SEARCH_RESULTS_SECTION_LABEL
                    }
                }()
            }), (0, i.jsx)(N.default, {
                className: F.headerIcon,
                direction: n ? N.default.Directions.RIGHT : N.default.Directions.DOWN
            })]
        })
    }

    function j() {
        return (0, i.jsx)(_.default, {
            message: V.default.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
        })
    }

    function W(e) {
        let {
            descriptors: t,
            soundButtonProps: n,
            rowIndex: s,
            isUsingKeyboardNavigation: a,
            suppressPlaySound: o,
            gridRowProps: l,
            getItemProps: u,
            onSelectItem: d,
            onItemMouseEnter: _,
            buttonOverlay: c
        } = e, E = I.SoundboardPickerStore.useStore(e => e.inspectedExpressionPosition);
        return (0, i.jsx)("ul", {
            ...l,
            className: F.soundRow,
            children: t.map((e, t) => {
                let i = "item-".concat(t),
                    l = a && E.rowIndex === s && E.columnIndex === t;
                switch (e.item.type) {
                    case D.SoundboardSoundItemType.SOUND:
                        return (0, r.createElement)(P.default, {
                            ...u(t),
                            ...n,
                            key: "".concat(i, "-").concat(e.item.sound.soundId),
                            sound: e.item.sound,
                            suppressPlaySound: o,
                            focused: l,
                            onMouseEnter: () => _(t),
                            onSelectItem: () => d(e),
                            enableSecondaryActions: !0,
                            buttonOverlay: c
                        });
                    case D.SoundboardSoundItemType.ADD_SOUND:
                        return (0, r.createElement)(U.default, {
                            ...u(t),
                            key: i,
                            guild: e.item.guild,
                            focused: l
                        })
                }
            })
        })
    }

    function K(e) {
        let {
            guildId: t,
            channel: s,
            containerWidth: a,
            onClose: l,
            onSelect: _,
            suppressPlaySound: E = !1,
            shouldShowUpsell: N = !0,
            gridNotice: O,
            soundButtonOverlay: p,
            listPadding: R,
            renderHeader: C,
            defaultSoundsOnly: P = !1
        } = e, {
            analyticsLocations: U
        } = (0, c.default)(), [K, z] = r.useState(null), X = (0, o.useStateFromStores)([h.default], () => h.default.getCurrentUser()), Q = (0, o.useStateFromStores)([A.default], () => {
            var e;
            return A.default.getVoiceState(t, null !== (e = null == X ? void 0 : X.id) && void 0 !== e ? e : B.EMPTY_STRING_SNOWFLAKE_ID)
        }), q = (null == Q ? void 0 : Q.selfDeaf) || (null == Q ? void 0 : Q.mute) || (null == Q ? void 0 : Q.suppress), J = (0, T.useExpressionPickerStore)(e => e.searchQuery), Z = (0, m.useUID)(), {
            categories: $
        } = (0, y.default)(s, void 0, P), [ee, et] = r.useState([]), en = (0, y.useSearchCategories)($, ee, J), ei = S.SoundboardPickerCollapsedSections.useSetting(), er = r.useMemo(() => new Set(ei), [ei]), es = null == s, ea = L.default.canUseCustomCallSounds(X), eo = r.useCallback(e => {
            er.has(e) ? er.delete(e) : er.add(e), S.SoundboardPickerCollapsedSections.updateSetting(Array.from(er))
        }, [er]), el = r.useCallback((e, t) => {
            if (!E && (0, v.canUseSoundboardSound)(X, e, s, !1)) {
                var n;
                (0, v.playSound)(e, null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : B.EMPTY_STRING_SNOWFLAKE_ID, t)
            } else {
                if ((0, v.canUseSoundboardSound)(X, e, s)) return;
                N && z(e)
            }
        }, [E, X, s, N]), eu = r.useCallback(e => {
            switch (e.item.type) {
                case D.SoundboardSoundItemType.SOUND:
                    return null == _ || _(e.item.sound), el(e.item.sound, U);
                case D.SoundboardSoundItemType.ADD_SOUND:
                    return (0, k.default)(e.item.guild.id)
            }
        }, [U, el, _]), ed = r.useCallback((e, t, n, r, a) => (0, i.jsx)(W, {
            descriptors: e,
            rowIndex: n.rowIndex,
            isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
            gridRowProps: t,
            getItemProps: r,
            onItemMouseEnter: a,
            suppressPlaySound: E,
            onSelectItem: eu,
            soundButtonProps: {
                channel: s,
                interactive: es ? ea : !q,
                forceSecondaryActions: es,
                analyticsLocations: U
            },
            buttonOverlay: p
        }, "row-".concat(t["aria-rowindex"])), [eu, s, q, E, U, es, ea, p]), e_ = r.useCallback((e, t) => {
            let n = "".concat(e.key);
            return (0, i.jsx)(Y, {
                categoryInfo: e.categoryInfo,
                toggleCollapsed: () => eo(n),
                collapsed: er.has(n),
                index: t
            }, "header-".concat(n))
        }, [er, eo]), ec = r.useCallback(e => et((0, M.default)(e, $, X, s)), [s, X, $]), eE = r.useCallback(e => {
            (0, d.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("56049").then(n.bind(n, "338991"));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            })
        }, []), eI = r.useCallback(() => (0, i.jsx)(u.Clickable, {
            tabIndex: 0,
            className: F.settingsClickArea,
            onClick: eE,
            "aria-label": V.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
            children: (0, i.jsx)(g.default, {
                className: F.settingsIcon
            })
        }), [eE]), eT = r.useCallback(e => (0, i.jsx)(b.default, {
            soundboardListRef: e,
            categories: $,
            listPadding: R
        }), [$, R]), ef = r.useCallback(e => {
            if ((null == e ? void 0 : e.item.type) === D.SoundboardSoundItemType.SOUND) {
                var t;
                return (0, i.jsx)(G.default, {
                    closePicker: l,
                    soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                })
            }
            return null
        }, [l]);
        return (0, i.jsxs)(i.Fragment, {
            children: [null != K && (0, i.jsx)(w.default, {
                onClose: () => z(null),
                closePopout: l,
                sound: K,
                channel: s
            }), (0, i.jsx)(f.default, {
                categories: en,
                collapsedCategories: er,
                containerWidth: a,
                store: I.SoundboardPickerStore,
                onSelectItem: eu,
                onSearchExpressions: ec,
                hasSearchResults: ee.length > 0,
                defaultSearchPlaceholder: V.default.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                renderRow: ed,
                renderSectionHeader: e_,
                renderCategoryList: eT,
                renderHeaderAccessories: eI,
                rowHeight: 48,
                sectionHeaderHeight: H,
                listPadding: x,
                itemNodeWidth: 150,
                gridNavigatorId: Z,
                renderEmptySearchState: j,
                renderInspector: ef,
                gridNotice: O,
                renderHeader: C
            })]
        })
    }
}