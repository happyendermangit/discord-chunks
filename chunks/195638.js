function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("16470"),
        s = n("74139"),
        r = n("137223"),
        o = n("986632"),
        u = n("538282"),
        d = n("535260");
    let c = i.forwardRef(function(e, t) {
        let {
            store: n,
            hasSendableExpressions: c,
            onKeyDown: f,
            gridNavigatorId: m,
            expressionsListRef: p,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: E
        } = e, g = i.useRef(null), [C, S] = (0, u.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], a.default), T = n.useStore(e => e.searchPlaceholder), v = n.useStore(e => e.inspectedExpressionPosition, a.default), I = i.useCallback(e => {
            var t;
            n.setActiveCategoryIndex("" === e ? 0 : o.INACTIVE_CATEGORY_INDEX), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = p.current) || void 0 === t || t.scrollTo(0)
        }, [p, n]), _ = i.useCallback(() => {
            (0, u.setSearchQuery)("")
        }, []);
        return i.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
            }
        })), i.useLayoutEffect(() => {
            if (S) {
                var e;
                null === (e = g.current) || void 0 === e || e.focus()
            }
        }, [S]), (0, l.jsx)("div", {
            className: d.wrapper,
            children: (0, l.jsx)(r.default, {
                autoFocus: c,
                disabled: !c,
                query: C,
                ref: g,
                size: r.default.Sizes.MEDIUM,
                placeholder: null != T ? T : c || null == E ? h : E,
                onClear: _,
                onKeyDown: f,
                onQueryChange: I,
                className: d.searchBar,
                preventEscapePropagation: !1,
                useKeyboardNavigation: !1,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": m,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, s.makeGridId)(m, v.columnIndex, v.rowIndex)
                }
            })
        })
    });
    var f = c
}