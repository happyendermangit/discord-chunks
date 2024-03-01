function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return Y
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("308472"),
        u = n("77078"),
        d = n("272030"),
        c = n("96386"),
        f = n("685665"),
        m = n("917764"),
        p = n("986632"),
        h = n("538282"),
        E = n("522096"),
        g = n("845579"),
        C = n("697218"),
        S = n("800762"),
        T = n("476765"),
        v = n("461380"),
        I = n("93393"),
        _ = n("153769"),
        N = n("671434"),
        A = n("229915"),
        x = n("368121"),
        y = n("719923"),
        O = n("389480"),
        R = n("78581"),
        M = n("262439"),
        L = n("557585"),
        P = n("553372"),
        b = n("122557"),
        j = n("478477"),
        U = n("181021"),
        D = n("299069"),
        k = n("569717"),
        w = n("49111"),
        F = n("782340"),
        G = n("851289");
    let B = [8, 0, 8, 8];

    function H(e) {
        return 0 === e ? 16 : 32
    }

    function V(e) {
        let {
            categoryInfo: t,
            collapsed: n,
            toggleCollapsed: i,
            index: a
        } = e;
        return (0, l.jsxs)(u.Clickable, {
            className: s(G.sectionHeader, {
                [G.notFirstSectionHeader]: 0 !== a
            }),
            onClick: i,
            children: [function() {
                switch (t.type) {
                    case O.SoundboardSoundGridSectionType.FAVORITES:
                        return (0, l.jsx)(N.default, {
                            className: G.headerIcon
                        });
                    case O.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return (0, l.jsx)(I.default, {
                            className: G.headerIcon
                        });
                    case O.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return (0, l.jsx)(o.AnalyticsIcon, {
                            className: G.headerIcon
                        });
                    case O.SoundboardSoundGridSectionType.GUILD:
                        return (0, l.jsx)(m.default, {
                            guild: t.guild,
                            height: 16,
                            width: 16
                        });
                    case O.SoundboardSoundGridSectionType.DEFAULTS:
                        return (0, l.jsx)(_.default, {
                            className: G.headerIcon
                        });
                    case O.SoundboardSoundGridSectionType.SEARCH:
                        return (0, l.jsx)(A.default, {
                            className: G.headerIcon
                        })
                }
            }(), (0, l.jsx)(u.Heading, {
                variant: "eyebrow",
                color: "none",
                className: G.sectionTitle,
                children: function() {
                    switch (t.type) {
                        case O.SoundboardSoundGridSectionType.FAVORITES:
                            return F.default.Messages.FAVORITES;
                        case O.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                            return F.default.Messages.RECENTLY_HEARD;
                        case O.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                            return F.default.Messages.FREQUENTLY_USED;
                        case O.SoundboardSoundGridSectionType.GUILD:
                            return t.guild.name;
                        case O.SoundboardSoundGridSectionType.DEFAULTS:
                            return F.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                        case O.SoundboardSoundGridSectionType.SEARCH:
                            return F.default.Messages.SEARCH_RESULTS_SECTION_LABEL
                    }
                }()
            }), (0, l.jsx)(v.default, {
                className: G.headerIcon,
                direction: n ? v.default.Directions.RIGHT : v.default.Directions.DOWN
            })]
        })
    }

    function K() {
        return (0, l.jsx)(c.default, {
            message: F.default.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
        })
    }

    function W(e) {
        let {
            descriptors: t,
            soundButtonProps: n,
            rowIndex: a,
            isUsingKeyboardNavigation: s,
            suppressPlaySound: r,
            gridRowProps: o,
            getItemProps: u,
            onSelectItem: d,
            onItemMouseEnter: c,
            buttonOverlay: f
        } = e, m = p.SoundboardPickerStore.useStore(e => e.inspectedExpressionPosition);
        return (0, l.jsx)("ul", {
            ...o,
            className: G.soundRow,
            children: t.map((e, t) => {
                let l = "item-".concat(t),
                    o = s && m.rowIndex === a && m.columnIndex === t;
                switch (e.item.type) {
                    case O.SoundboardSoundItemType.SOUND:
                        return (0, i.createElement)(P.default, {
                            ...u(t),
                            ...n,
                            key: "".concat(l, "-").concat(e.item.sound.soundId),
                            sound: e.item.sound,
                            suppressPlaySound: r,
                            focused: o,
                            onMouseEnter: () => c(t),
                            onSelectItem: () => d(e),
                            enableSecondaryActions: !0,
                            buttonOverlay: f
                        });
                    case O.SoundboardSoundItemType.ADD_SOUND:
                        return (0, i.createElement)(b.default, {
                            ...u(t),
                            key: l,
                            guild: e.item.guild,
                            focused: o
                        })
                }
            })
        })
    }

    function Y(e) {
        let {
            guildId: t,
            channel: a,
            containerWidth: s,
            onClose: o,
            onSelect: c,
            suppressPlaySound: m = !1,
            shouldShowUpsell: v = !0,
            gridNotice: I,
            soundButtonOverlay: _,
            listPadding: N,
            renderHeader: A,
            defaultSoundsOnly: P = !1
        } = e, {
            analyticsLocations: b
        } = (0, f.default)(), [Y, z] = i.useState(null), Z = (0, r.useStateFromStores)([C.default], () => C.default.getCurrentUser()), J = (0, r.useStateFromStores)([S.default], () => {
            var e;
            return S.default.getVoiceState(t, null !== (e = null == Z ? void 0 : Z.id) && void 0 !== e ? e : w.EMPTY_STRING_SNOWFLAKE_ID)
        }), q = (null == J ? void 0 : J.selfDeaf) || (null == J ? void 0 : J.mute) || (null == J ? void 0 : J.suppress), X = (0, h.useExpressionPickerStore)(e => e.searchQuery), Q = (0, T.useUID)(), {
            categories: $
        } = (0, L.default)(a, void 0, P), [ee, et] = i.useState([]), en = (0, L.useSearchCategories)($, ee, X), el = g.SoundboardPickerCollapsedSections.useSetting(), ei = i.useMemo(() => new Set(el), [el]), ea = null == a, es = y.default.canUseCustomCallSounds(Z), er = i.useCallback(e => {
            let t = !ei.has(e);
            t ? ei.add(e) : ei.delete(e), g.SoundboardPickerCollapsedSections.updateSetting(Array.from(ei))
        }, [ei]), eo = i.useCallback((e, t) => {
            if (!m && (0, R.canUseSoundboardSound)(Z, e, a, !1)) {
                var n;
                (0, R.playSound)(e, null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : w.EMPTY_STRING_SNOWFLAKE_ID, t)
            } else {
                if ((0, R.canUseSoundboardSound)(Z, e, a)) return;
                v && z(e)
            }
        }, [m, Z, a, v]), eu = i.useCallback(e => {
            switch (e.item.type) {
                case O.SoundboardSoundItemType.SOUND:
                    return null == c || c(e.item.sound), eo(e.item.sound, b);
                case O.SoundboardSoundItemType.ADD_SOUND:
                    return (0, k.default)(e.item.guild.id)
            }
        }, [b, eo, c]), ed = i.useCallback((e, t, n, i, s) => (0, l.jsx)(W, {
            descriptors: e,
            rowIndex: n.rowIndex,
            isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
            gridRowProps: t,
            getItemProps: i,
            onItemMouseEnter: s,
            suppressPlaySound: m,
            onSelectItem: eu,
            soundButtonProps: {
                channel: a,
                interactive: ea ? es : !q,
                forceSecondaryActions: ea,
                analyticsLocations: b
            },
            buttonOverlay: _
        }, "row-".concat(t["aria-rowindex"])), [eu, a, q, m, b, ea, es, _]), ec = i.useCallback((e, t) => {
            let n = "".concat(e.key);
            return (0, l.jsx)(V, {
                categoryInfo: e.categoryInfo,
                toggleCollapsed: () => er(n),
                collapsed: ei.has(n),
                index: t
            }, "header-".concat(n))
        }, [ei, er]), ef = i.useCallback(e => et((0, M.default)(e, $, Z, a)), [a, Z, $]), em = i.useCallback(e => {
            (0, d.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("136137").then(n.bind(n, "136137"));
                return t => (0, l.jsx)(e, {
                    ...t
                })
            })
        }, []), ep = i.useCallback(() => (0, l.jsx)(u.Clickable, {
            tabIndex: 0,
            className: G.settingsClickArea,
            onClick: em,
            "aria-label": F.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
            children: (0, l.jsx)(x.default, {
                className: G.settingsIcon
            })
        }), [em]), eh = i.useCallback(e => (0, l.jsx)(j.default, {
            soundboardListRef: e,
            categories: $,
            listPadding: N
        }), [$, N]), eE = i.useCallback(e => {
            if ((null == e ? void 0 : e.item.type) === O.SoundboardSoundItemType.SOUND) {
                var t;
                return (0, l.jsx)(U.default, {
                    closePicker: o,
                    soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                })
            }
            return null
        }, [o]);
        return (0, l.jsxs)(l.Fragment, {
            children: [null != Y && (0, l.jsx)(D.default, {
                onClose: () => z(null),
                closePopout: o,
                sound: Y,
                channel: a
            }), (0, l.jsx)(E.default, {
                categories: en,
                collapsedCategories: ei,
                containerWidth: s,
                store: p.SoundboardPickerStore,
                onSelectItem: eu,
                onSearchExpressions: ef,
                hasSearchResults: ee.length > 0,
                defaultSearchPlaceholder: F.default.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                renderRow: ed,
                renderSectionHeader: ec,
                renderCategoryList: eh,
                renderHeaderAccessories: ep,
                rowHeight: 48,
                sectionHeaderHeight: H,
                listPadding: B,
                itemNodeWidth: 150,
                gridNavigatorId: Q,
                renderEmptySearchState: K,
                renderInspector: eE,
                gridNotice: I,
                renderHeader: A
            })]
        })
    }
}