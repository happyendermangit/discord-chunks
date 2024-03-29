function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("28546"),
        a = n("98528"),
        o = n("429155"),
        l = n("810462"),
        u = n("339917");

    function d(e) {
        let {
            categories: t,
            collapsedCategories: n,
            containerWidth: d,
            store: _,
            onSelectItem: c,
            onSearchExpressions: E,
            hasSearchResults: I,
            defaultSearchPlaceholder: T,
            emptySearchPlaceholder: f,
            renderEmptyState: S,
            renderRow: h,
            renderSection: A,
            renderSectionHeader: m,
            renderSectionFooter: N,
            renderInspector: O,
            renderEmptySearchState: p,
            renderCategoryList: R,
            renderHeaderAccessories: C,
            rowHeight: g,
            sectionHeaderHeight: L,
            sectionFooterHeight: D,
            itemNodeWidth: v,
            listPaddingRight: M,
            itemNodeMargin: y,
            listPadding: P,
            gridNavigatorId: U,
            gridNotice: b,
            renderHeader: G
        } = e, w = r.useRef(null), k = r.useRef(null), B = r.useRef(null), V = 0 === t.length, F = (0, s.useExpressionPickerStore)(e => e.searchQuery), x = _.useStore(e => e.inspectedExpressionPosition), H = (0, a.useExpressionPickerGridWidth)({
            gridWrapperRef: w,
            containerWidth: d,
            showingEmptyState: V
        }), {
            expressionsGrid: Y,
            rowCount: j,
            rowCountBySection: W,
            columnCounts: K,
            gutterWidth: z
        } = (0, a.useExpressionGrid)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: M,
            itemNodeWidth: v,
            itemNodeMargin: y
        }), {
            getItemProps: X,
            getRowProps: Q,
            gridContainerProps: q,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: Z
        } = (0, a.useKeyboardNavigation)({
            columnCounts: K,
            expressionsListRef: k,
            expressionsGrid: Y,
            onSelectItem: c,
            store: _,
            gridNavigatorId: U
        }), $ = r.useCallback(e => h(Y[e], Q(e), {
            isUsingKeyboardNavigation: Z.current,
            gutterWidth: z,
            rowIndex: e
        }, t => X(e, t), t => _.setInspectedExpressionPosition(t, e)), [Y, X, Q, z, Z, h, _]), ee = r.useCallback(e => null == A ? void 0 : A(t[e]), [t, A]), et = r.useCallback(e => null == m ? void 0 : m(t[e], e), [t, m]), en = r.useCallback(e => null == N ? void 0 : N(t[e]), [t, N]), ei = r.useCallback(() => {
            var e;
            return null == O ? void 0 : O(null == Y ? void 0 : null === (e = Y[x.rowIndex]) || void 0 === e ? void 0 : e[x.columnIndex])
        }, [Y, x.columnIndex, x.rowIndex, O]);
        r.useEffect(() => {
            E(F)
        }, [E, F]), r.useEffect(() => _.resetStoreState, [_.resetStoreState]), r.useLayoutEffect(() => {
            var e;
            null === (e = B.current) || void 0 === e || e.focus()
        }, []);
        let er = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.default, {
                ref: B,
                store: _,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: k,
                gridNavigatorId: U,
                defaultSearchPlaceholder: T,
                emptySearchPlaceholder: f
            }), null == C ? void 0 : C()]
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [null != G ? G(er) : (0, i.jsxs)("div", {
                className: u.header,
                children: [" ", er, " "]
            }), V && null != S ? S(u.emptyState) : (0, i.jsxs)(i.Fragment, {
                children: [R(k), null != b && (0, i.jsx)("div", {
                    className: u.gridNoticeWrapper,
                    children: b
                }), (0, i.jsx)("div", {
                    ref: w,
                    className: u.listWrapper,
                    id: U,
                    ...q,
                    children: null != H ? (0, i.jsx)(o.default, {
                        ref: k,
                        store: _,
                        hasSearchResults: I,
                        listPadding: P,
                        renderRow: $,
                        renderSection: null != A ? ee : void 0,
                        renderSectionHeader: null != m ? et : void 0,
                        renderSectionFooter: null != N ? en : void 0,
                        renderInspector: null != O ? ei : void 0,
                        renderEmptySearchState: p,
                        rowCount: j,
                        rowCountBySection: W,
                        rowHeight: g,
                        sectionHeaderHeight: L,
                        sectionFooterHeight: D
                    }) : null
                })]
            })]
        })
    }
}