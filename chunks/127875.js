function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var l = n("884691"),
        i = n("371621"),
        a = n("385887");

    function s(e, t, n) {
        l.useEffect(() => {
            let l = i.ReactEditor.findDocumentOrShadowRoot(e),
                s = l.defaultView;
            if ((null == s ? void 0 : s.ResizeObserver) == null) return;
            let r = a.EditorUtils.toDOMNode(e, e),
                o = r.offsetHeight,
                u = new s.ResizeObserver(() => {
                    let l = a.EditorUtils.toDOMNode(e, e).offsetHeight;
                    o !== l && (null != t.current && (t.current.style.height = "".concat(l, "px")), o = l, null == n || n(l))
                });
            return u.observe(r), () => u.disconnect()
        }, [t, e, n])
    }
}