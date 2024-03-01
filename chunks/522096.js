function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("538282"),
        s = n("45961"),
        r = n("794707"),
        o = n("195638"),
        u = n("890832");

    function d(e) {
        let {
            categories: t,
            collapsedCategories: n,
            containerWidth: d,
            store: c,
            onSelectItem: f,
            onSearchExpressions: m,
            hasSearchResults: p,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: E,
            renderEmptyState: g,
            renderRow: C,
            renderSection: S,
            renderSectionHeader: T,
            renderSectionFooter: v,
            renderInspector: I,
            renderEmptySearchState: _,
            renderCategoryList: N,
            renderHeaderAccessories: A,
            rowHeight: x,
            sectionHeaderHeight: y,
            sectionFooterHeight: O,
            itemNodeWidth: R,
            listPaddingRight: M,
            itemNodeMargin: L,
            listPadding: P,
            gridNavigatorId: b,
            gridNotice: j,
            renderHeader: U
        } = e, D = i.useRef(null), k = i.useRef(null), w = i.useRef(null), F = 0 === t.length, G = (0, a.useExpressionPickerStore)(e => e.searchQuery), B = c.useStore(e => e.inspectedExpressionPosition), H = (0, s.useExpressionPickerGridWidth)({
            gridWrapperRef: D,
            containerWidth: d,
            showingEmptyState: F
        }), {
            expressionsGrid: V,
            rowCount: K,
            rowCountBySection: W,
            columnCounts: Y,
            gutterWidth: z
        } = (0, s.useExpressionGrid)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: M,
            itemNodeWidth: R,
            itemNodeMargin: L
        }), {
            getItemProps: Z,
            getRowProps: J,
            gridContainerProps: q,
            handleGridContainerKeyDown: X,
            isUsingKeyboardNavigation: Q
        } = (0, s.useKeyboardNavigation)({
            columnCounts: Y,
            expressionsListRef: k,
            expressionsGrid: V,
            onSelectItem: f,
            store: c,
            gridNavigatorId: b
        }), $ = i.useCallback(e => {
            let t = V[e];
            return C(t, J(e), {
                isUsingKeyboardNavigation: Q.current,
                gutterWidth: z,
                rowIndex: e
            }, t => Z(e, t), t => c.setInspectedExpressionPosition(t, e))
        }, [V, Z, J, z, Q, C, c]), ee = i.useCallback(e => null == S ? void 0 : S(t[e]), [t, S]), et = i.useCallback(e => null == T ? void 0 : T(t[e], e), [t, T]), en = i.useCallback(e => null == v ? void 0 : v(t[e]), [t, v]), el = i.useCallback(() => {
            var e;
            return null == I ? void 0 : I(null == V ? void 0 : null === (e = V[B.rowIndex]) || void 0 === e ? void 0 : e[B.columnIndex])
        }, [V, B.columnIndex, B.rowIndex, I]);
        i.useEffect(() => {
            m(G)
        }, [m, G]), i.useEffect(() => c.resetStoreState, [c.resetStoreState]), i.useLayoutEffect(() => {
            var e;
            null === (e = w.current) || void 0 === e || e.focus()
        }, []);
        let ei = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.default, {
                ref: w,
                store: c,
                hasSendableExpressions: !0,
                onKeyDown: X,
                expressionsListRef: k,
                gridNavigatorId: b,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: E
            }), null == A ? void 0 : A()]
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [null != U ? U(ei) : (0, l.jsxs)("div", {
                className: u.header,
                children: [" ", ei, " "]
            }), F && null != g ? g(u.emptyState) : (0, l.jsxs)(l.Fragment, {
                children: [N(k), null != j && (0, l.jsx)("div", {
                    className: u.gridNoticeWrapper,
                    children: j
                }), (0, l.jsx)("div", {
                    ref: D,
                    className: u.listWrapper,
                    id: b,
                    ...q,
                    children: null != H ? (0, l.jsx)(r.default, {
                        ref: k,
                        store: c,
                        hasSearchResults: p,
                        listPadding: P,
                        renderRow: $,
                        renderSection: null != S ? ee : void 0,
                        renderSectionHeader: null != T ? et : void 0,
                        renderSectionFooter: null != v ? en : void 0,
                        renderInspector: null != I ? el : void 0,
                        renderEmptySearchState: _,
                        rowCount: K,
                        rowCountBySection: W,
                        rowHeight: x,
                        sectionHeaderHeight: y,
                        sectionFooterHeight: O
                    }) : null
                })]
            })]
        })
    }
}