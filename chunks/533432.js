function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("143927"),
        l = n("260866"),
        u = n("461745"),
        d = n("806966"),
        _ = n("28546"),
        c = n("149203"),
        E = n("981631"),
        I = n("689938"),
        T = n("776464");
    let f = r.forwardRef(function(e, t) {
        let {
            emojiListRef: n,
            gridNavigatorId: s,
            isFullRow: f,
            onKeyDown: S,
            onFocus: h,
            autoFocus: A,
            className: m,
            defaultSearchPlaceholder: N
        } = e, O = r.useRef(null), p = (0, _.useExpressionPickerStore)(e => e.searchQuery), [R, C] = d.EmojiPickerStore.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], o.default), g = r.useCallback(e => {
            var t;
            d.EmojiPickerStore.setActiveCategoryIndex("" === e ? 0 : c.INACTIVE_CATEGORY_INDEX), d.EmojiPickerStore.setInspectedExpressionPosition(0, 0), d.EmojiPickerStore.setSearchPlaceholder(null), (0, _.setSearchQuery)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0)
        }, [n]), L = r.useCallback(() => {
            (0, _.setSearchQuery)("")
        }, []);
        return r.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = O.current) || void 0 === e ? void 0 : e.focus()
            }
        })), (0, i.jsx)(u.default, {
            autoFocus: A,
            query: p,
            ref: O,
            size: u.default.Sizes.MEDIUM,
            placeholder: null != C ? C : N,
            onClear: L,
            onKeyDown: e => {
                switch (e.keyCode) {
                    case E.KeyboardKeys.ARROW_LEFT:
                    case E.KeyboardKeys.ARROW_RIGHT:
                    case E.KeyboardKeys.ARROW_UP:
                    case E.KeyboardKeys.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault()
                }
                S(e)
            },
            onFocus: h,
            onQueryChange: g,
            className: a()(m, {
                [T.searchBarFullRow]: f
            }),
            preventEscapePropagation: !1,
            useKeyboardNavigation: !1,
            inputProps: {
                "aria-label": I.default.Messages.SEARCH_EMOJIS,
                "aria-haspopup": "grid",
                "aria-controls": s,
                "aria-expanded": !0,
                "aria-activedescendant": (0, l.makeGridId)(s, R.columnIndex, R.rowIndex)
            }
        })
    });
    t.default = r.memo(f)
}