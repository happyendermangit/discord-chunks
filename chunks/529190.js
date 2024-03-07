function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ITEM_HEIGHT: function() {
            return P
        },
        default: function() {
            return U
        }
    }), n("222007"), n("808653");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("96386"),
        d = n("798609"),
        c = n("716241"),
        f = n("296141"),
        m = n("986632"),
        p = n("45961"),
        h = n("515059"),
        E = n("501536"),
        g = n("124299"),
        S = n("476765"),
        C = n("507217"),
        T = n("240249"),
        v = n("972620"),
        I = n("524768"),
        _ = n("389153"),
        N = n("586450"),
        A = n("41884"),
        x = n("355263"),
        y = n("317041"),
        O = n("49111"),
        R = n("782340"),
        M = n("847948"),
        L = n("327769");
    let P = 56,
        b = [8, 8, 0, 8],
        j = o.debounce(() => {
            (0, c.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_BROWSER_SCROLLED)
        }, 300);
    var U = i.forwardRef(function(e, t) {
        let {
            channel: n,
            canOnlyUseTextCommands: a
        } = e, r = i.useRef(!1), o = i.useRef(0), [U, k] = i.useState(0), w = i.useRef(null), [F, G] = i.useState(!1), B = m.ApplicationCommandDiscoveryPickerStore.useStore(e => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, c.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_BROWSER_OPENED)
        }, []);
        let {
            sectionDescriptors: H,
            activeSections: V,
            commandsByActiveSection: K,
            hasMoreAfter: W,
            commands: Y,
            filteredSectionId: z,
            scrollDown: Z,
            filterSection: J
        } = T.useDiscovery(n, {
            commandType: d.ApplicationCommandType.CHAT,
            builtIns: a ? v.BuiltInCommandFilter.ONLY_TEXT : v.BuiltInCommandFilter.ALLOW,
            applicationCommands: !a
        }, {
            placeholderCount: 7,
            limit: y.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        }), q = (0, p.useSynchronizedActiveCategoryIndexForScrollPosition)({
            activeCategoryIndex: B,
            isScrolling: r,
            listRef: w,
            onActiveCategoryIndexChange: e => {
                let t = V[e];
                if (null != t) {
                    let e = H.findIndex(e => e.id === t.id);
                    m.ApplicationCommandDiscoveryPickerStore.setActiveCategoryIndex(e)
                }
            },
            scrollOffset: 20,
            searchQuery: ""
        }), X = e => {
            let t = V.length,
                n = K.reduce((e, t) => e + t.data.length, 0) - (W ? 7 : 0),
                l = 48 * t + n * P - 512;
            W && e + 420 > l && Z(), q(e), j(), o.current = e
        };
        i.useEffect(() => {
            X(o.current)
        }, [Y]);
        let Q = i.useCallback(e => {
                let t = e === V.length - 1;
                return t && !W ? 0 : 16
            }, [V.length, W]),
            $ = K.map(e => e.data.length);
        i.useEffect(() => {
            null != w.current && F && null != U && w.current.scrollRowIntoView(U)
        }, [F, U]), i.useLayoutEffect(() => {
            if (null != z) {
                var e;
                null === (e = w.current) || void 0 === e || e.scrollToSectionTop(0)
            }
        }, [Y, z]);
        let ee = i.useCallback(e => {
                if (e.id === z || e.id === y.BuiltInSectionId.FRECENCY) {
                    var t;
                    J(null), null === (t = w.current) || void 0 === t || t.scrollToSectionTop(0)
                } else J(e.id)
            }, [J, z]),
            et = i.useCallback((e, t, l) => {
                C.setActiveCommand({
                    channelId: n.id,
                    command: e,
                    section: t,
                    location: I.ApplicationCommandTriggerLocations.DISCOVERY,
                    triggerSection: l
                })
            }, [n.id]);
        i.useImperativeHandle(t, () => ({
            onTabOrEnter: e => {
                if (null == U) return !e && (k(0), !0);
                if (null == U) return !1;
                let t = 0,
                    n = 0;
                for (let e of K)
                    if (t = n, U < (n += e.data.length)) {
                        let n = e.data[U - t],
                            l = H.find(e => e.id === n.applicationId);
                        et(n, l, (0, _.getCommandTriggerSection)(e.section));
                        break
                    } return !0
            },
            onMoveSelection: e => {
                if (0 === Y.length) return !0;
                let t = W ? 7 : 0,
                    n = Y.length + t,
                    l = null == U ? 0 : U + e;
                return l >= n ? l = n - 1 : l < 0 && (l = 0), k(l), G(!0), !0
            }
        }), [Y.length, K, W, H, et, U]);
        let en = i.useCallback(e => {
                let t = V[e];
                if (null == t) return null;
                let i = (0, x.getIconComponent)(t),
                    a = (0, l.jsx)(i, {
                        channel: n,
                        section: t,
                        width: 16,
                        height: 16,
                        padding: 0
                    });
                return (0, l.jsx)(h.default, {
                    className: M.categoryHeader,
                    icon: a,
                    children: t.name
                }, e)
            }, [n, V]),
            el = i.useCallback((e, t) => {
                let n = e === V.length - 1,
                    i = V[e],
                    {
                        data: a
                    } = K[e];
                return (0, l.jsxs)("ul", {
                    role: "group",
                    "aria-label": i.name,
                    className: s(M.categorySection, {
                        [M.categorySectionLast]: n
                    }),
                    children: [t, 0 === a.length && (0, l.jsx)(u.default, {
                        message: R.default.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
                            applicationName: i.name
                        }),
                        noResultsImageURL: L,
                        className: M.noSearchResults
                    })]
                }, e)
            }, [V, K]),
            ei = i.useCallback((e, t) => {
                var i;
                let a = K[t.sectionIndex],
                    s = a.data[t.sectionRowIndex],
                    r = "".concat(a.section.id, ":").concat(null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : e);
                if (null == s || a.section.id !== s.applicationId && a.section.id !== y.BuiltInSectionId.FRECENCY || s.inputType === I.ApplicationCommandInputType.PLACEHOLDER) return (0, l.jsx)(A.default, {}, r);
                let o = H.find(e => e.id === s.applicationId);
                return (0, l.jsx)(E.default.NewCommand, {
                    index: e,
                    command: s,
                    channel: n,
                    className: M.itemWrapper,
                    selected: U === e,
                    showImage: a.section.id !== s.applicationId,
                    section: o,
                    onClick: () => et(s, o, (0, _.getCommandTriggerSection)(a.section)),
                    onHover: () => {
                        k(null), G(!1)
                    }
                }, r)
            }, [n, K, et, H, U]),
            ea = (0, S.useUID)();
        return (0, f.useChannelEditorPopup)(ea, !0, (0, E.getAutocompleteRowId)(U)), i.useEffect(() => () => {
            (0, f.dismissChannelEditorPopup)()
        }, []), (0, l.jsxs)(E.default, {
            id: ea,
            className: M.outerWrapper,
            innerClassName: M.wrapper,
            onMouseDown: D,
            children: [(0, l.jsx)(N.default, {
                className: M.rail,
                channel: n,
                sections: H,
                filteredSectionId: z,
                activeCategoryIndex: B,
                onSectionClick: ee,
                applicationCommandListRef: w
            }), (0, l.jsx)(g.default, {
                role: "listbox",
                className: M.list,
                listPadding: b,
                onScroll: X,
                renderRow: ei,
                renderSection: el,
                renderSectionHeader: en,
                rowCount: V.length,
                rowCountBySection: $,
                rowHeight: P,
                sectionHeaderHeight: 32,
                sectionMarginBottom: Q,
                ref: w,
                stickyHeaders: !0
            })]
        })
    });

    function D(e) {
        e.preventDefault()
    }
}