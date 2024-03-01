function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("16470"),
        o = n("74139"),
        u = n("137223"),
        d = n("986632"),
        c = n("538282"),
        f = n("115279"),
        m = n("49111"),
        p = n("782340"),
        h = n("296323");
    let E = i.forwardRef(function(e, t) {
        let {
            emojiListRef: n,
            gridNavigatorId: a,
            isFullRow: E,
            onKeyDown: g,
            onFocus: C,
            autoFocus: S,
            className: T,
            defaultSearchPlaceholder: v
        } = e, I = i.useRef(null), _ = (0, c.useExpressionPickerStore)(e => e.searchQuery), [N, A] = d.EmojiPickerStore.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], r.default), x = i.useCallback(e => {
            var t;
            d.EmojiPickerStore.setActiveCategoryIndex("" === e ? 0 : f.INACTIVE_CATEGORY_INDEX), d.EmojiPickerStore.setInspectedExpressionPosition(0, 0), d.EmojiPickerStore.setSearchPlaceholder(null), (0, c.setSearchQuery)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0)
        }, [n]), y = i.useCallback(() => {
            (0, c.setSearchQuery)("")
        }, []);
        return i.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = I.current) || void 0 === e ? void 0 : e.focus()
            }
        })), (0, l.jsx)(u.default, {
            autoFocus: S,
            query: _,
            ref: I,
            size: u.default.Sizes.MEDIUM,
            placeholder: null != A ? A : v,
            onClear: y,
            onKeyDown: e => {
                switch (e.keyCode) {
                    case m.KeyboardKeys.ARROW_LEFT:
                    case m.KeyboardKeys.ARROW_RIGHT:
                    case m.KeyboardKeys.ARROW_UP:
                    case m.KeyboardKeys.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault()
                }
                g(e)
            },
            onFocus: C,
            onQueryChange: x,
            className: s(T, {
                [h.searchBarFullRow]: E
            }),
            preventEscapePropagation: !1,
            useKeyboardNavigation: !1,
            inputProps: {
                "aria-label": p.default.Messages.SEARCH_EMOJIS,
                "aria-haspopup": "grid",
                "aria-controls": a,
                "aria-expanded": !0,
                "aria-activedescendant": (0, o.makeGridId)(a, N.columnIndex, N.rowIndex)
            }
        })
    });
    var g = i.memo(E)
}