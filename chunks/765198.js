function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTabListState: function() {
            return i
        }
    }), n("222007");
    var r = n("884691"),
        a = n("880523");

    function i(e) {
        var t;
        let n = (0, a.useSingleSelectListState)({
                ...e,
                suppressTextValueWarning: !0,
                defaultSelectedKey: null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : o(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set)
            }),
            {
                selectionManager: i,
                collection: s,
                selectedKey: c
            } = n,
            l = (0, r.useRef)(c);
        return (0, r.useEffect)(() => {
            let e = c;
            (i.isEmpty || !s.getItem(e)) && null != (e = o(s, n.disabledKeys)) && i.setSelectedKeys([e]), (null != e && null == i.focusedKey || !i.isFocused && e !== l.current) && i.setFocusedKey(e), l.current = e
        }), {
            ...n,
            isDisabled: e.isDisabled || !1
        }
    }

    function o(e, t) {
        let n = null;
        if (e) {
            for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey();) n = e.getKeyAfter(n);
            t.has(n) && n === e.getLastKey() && (n = e.getFirstKey())
        }
        return n
    }
}