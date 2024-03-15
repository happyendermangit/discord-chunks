function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    }), n("222007"), n("808653");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("96386"),
        d = n("798609"),
        c = n("716241"),
        f = n("296141"),
        p = n("986632"),
        m = n("45961"),
        h = n("515059"),
        x = n("501536"),
        E = n("124299"),
        y = n("476765"),
        g = n("507217"),
        S = n("240249"),
        C = n("972620"),
        I = n("524768"),
        T = n("389153"),
        _ = n("586450"),
        v = n("41884"),
        N = n("355263"),
        A = n("317041"),
        O = n("49111"),
        R = n("782340"),
        M = n("847948"),
        k = n("327769");
    let L = [8, 8, 0, 8],
        b = o.debounce(() => {
            (0, c.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_BROWSER_SCROLLED)
        }, 300);
    var P = l.forwardRef(function(e, t) {
        let {
            channel: n,
            canOnlyUseTextCommands: a
        } = e, r = l.useRef(!1), o = l.useRef(0), [P, U] = l.useState(0), D = l.useRef(null), [w, F] = l.useState(!1), G = p.ApplicationCommandDiscoveryPickerStore.useStore(e => e.activeCategoryIndex);
        l.useEffect(() => {
            (0, c.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_BROWSER_OPENED)
        }, []);
        let {
            sectionDescriptors: B,
            activeSections: H,
            commandsByActiveSection: V,
            hasMoreAfter: K,
            commands: W,
            filteredSectionId: Y,
            scrollDown: z,
            filterSection: Z
        } = S.useDiscovery(n, {
            commandType: d.ApplicationCommandType.CHAT,
            builtIns: a ? C.BuiltInCommandFilter.ONLY_TEXT : C.BuiltInCommandFilter.ALLOW,
            applicationCommands: !a
        }, {
            placeholderCount: 7,
            limit: A.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        }), J = (0, m.useSynchronizedActiveCategoryIndexForScrollPosition)({
            activeCategoryIndex: G,
            isScrolling: r,
            listRef: D,
            onActiveCategoryIndexChange: e => {
                let t = H[e];
                if (null != t) {
                    let e = B.findIndex(e => e.id === t.id);
                    p.ApplicationCommandDiscoveryPickerStore.setActiveCategoryIndex(e)
                }
            },
            scrollOffset: 20,
            searchQuery: ""
        }), q = e => {
            let t = H.length,
                n = V.reduce((e, t) => e + t.data.length, 0) - (K ? 7 : 0);
            K && e + 420 > 48 * t + 56 * n - 512 && z(), J(e), b(), o.current = e
        };
        l.useEffect(() => {
            q(o.current)
        }, [W]);
        let X = l.useCallback(e => {
                let t = e === H.length - 1;
                return t && !K ? 0 : 16
            }, [H.length, K]),
            Q = V.map(e => e.data.length);
        l.useEffect(() => {
            null != D.current && w && null != P && D.current.scrollRowIntoView(P)
        }, [w, P]), l.useLayoutEffect(() => {
            if (null != Y) {
                var e;
                null === (e = D.current) || void 0 === e || e.scrollToSectionTop(0)
            }
        }, [W, Y]);
        let $ = l.useCallback(e => {
                if (e.id === Y || e.id === A.BuiltInSectionId.FRECENCY) {
                    var t;
                    Z(null), null === (t = D.current) || void 0 === t || t.scrollToSectionTop(0)
                } else Z(e.id)
            }, [Z, Y]),
            ee = l.useCallback((e, t, i) => {
                g.setActiveCommand({
                    channelId: n.id,
                    command: e,
                    section: t,
                    location: I.ApplicationCommandTriggerLocations.DISCOVERY,
                    triggerSection: i
                })
            }, [n.id]);
        l.useImperativeHandle(t, () => ({
            onTabOrEnter: e => {
                if (null == P) return !e && (U(0), !0);
                if (null == P) return !1;
                let t = 0,
                    n = 0;
                for (let e of V)
                    if (t = n, P < (n += e.data.length)) {
                        let n = e.data[P - t],
                            i = B.find(e => e.id === n.applicationId);
                        ee(n, i, (0, T.getCommandTriggerSection)(e.section));
                        break
                    } return !0
            },
            onMoveSelection: e => {
                if (0 === W.length) return !0;
                let t = K ? 7 : 0,
                    n = W.length + t,
                    i = null == P ? 0 : P + e;
                return i >= n ? i = n - 1 : i < 0 && (i = 0), U(i), F(!0), !0
            }
        }), [W.length, V, K, B, ee, P]);
        let et = l.useCallback(e => {
                let t = H[e];
                if (null == t) return null;
                let l = (0, N.getIconComponent)(t),
                    a = (0, i.jsx)(l, {
                        channel: n,
                        section: t,
                        width: 16,
                        height: 16,
                        padding: 0
                    });
                return (0, i.jsx)(h.default, {
                    className: M.categoryHeader,
                    icon: a,
                    children: t.name
                }, e)
            }, [n, H]),
            en = l.useCallback((e, t) => {
                let n = e === H.length - 1,
                    l = H[e],
                    {
                        data: a
                    } = V[e];
                return (0, i.jsxs)("ul", {
                    role: "group",
                    "aria-label": l.name,
                    className: s(M.categorySection, {
                        [M.categorySectionLast]: n
                    }),
                    children: [t, 0 === a.length && (0, i.jsx)(u.default, {
                        message: R.default.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
                            applicationName: l.name
                        }),
                        noResultsImageURL: k,
                        className: M.noSearchResults
                    })]
                }, e)
            }, [H, V]),
            ei = l.useCallback((e, t) => {
                var l;
                let a = V[t.sectionIndex],
                    s = a.data[t.sectionRowIndex],
                    r = "".concat(a.section.id, ":").concat(null !== (l = null == s ? void 0 : s.id) && void 0 !== l ? l : e);
                if (null == s || a.section.id !== s.applicationId && a.section.id !== A.BuiltInSectionId.FRECENCY || s.inputType === I.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(v.default, {}, r);
                let o = B.find(e => e.id === s.applicationId);
                return (0, i.jsx)(x.default.NewCommand, {
                    index: e,
                    command: s,
                    channel: n,
                    className: M.itemWrapper,
                    selected: P === e,
                    showImage: a.section.id !== s.applicationId,
                    section: o,
                    onClick: () => ee(s, o, (0, T.getCommandTriggerSection)(a.section)),
                    onHover: () => {
                        U(null), F(!1)
                    }
                }, r)
            }, [n, V, ee, B, P]),
            el = (0, y.useUID)();
        return (0, f.useChannelEditorPopup)(el, !0, (0, x.getAutocompleteRowId)(P)), l.useEffect(() => () => {
            (0, f.dismissChannelEditorPopup)()
        }, []), (0, i.jsxs)(x.default, {
            id: el,
            className: M.outerWrapper,
            innerClassName: M.wrapper,
            onMouseDown: j,
            children: [(0, i.jsx)(_.default, {
                className: M.rail,
                channel: n,
                sections: B,
                filteredSectionId: Y,
                activeCategoryIndex: G,
                onSectionClick: $,
                applicationCommandListRef: D
            }), (0, i.jsx)(E.default, {
                role: "listbox",
                className: M.list,
                listPadding: L,
                onScroll: q,
                renderRow: ei,
                renderSection: en,
                renderSectionHeader: et,
                rowCount: H.length,
                rowCountBySection: Q,
                rowHeight: 56,
                sectionHeaderHeight: 32,
                sectionMarginBottom: X,
                ref: D,
                stickyHeaders: !0
            })]
        })
    });

    function j(e) {
        e.preventDefault()
    }
}