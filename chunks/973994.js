function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDialog: function() {
            return s
        }
    });
    var r = n("240849"),
        a = n("447259"),
        i = n("884691"),
        o = n("195711");

    function s(e, t) {
        let {
            role: n = "dialog"
        } = e, s = (0, r.useSlotId)();
        s = e["aria-label"] ? void 0 : s;
        let c = (0, i.useRef)(!1);
        return (0, i.useEffect)(() => {
            if (t.current && !t.current.contains(document.activeElement)) {
                (0, a.focusSafely)(t.current);
                let e = setTimeout(() => {
                    document.activeElement === t.current && (c.current = !0, t.current && (t.current.blur(), (0, a.focusSafely)(t.current)), c.current = !1)
                }, 500);
                return () => {
                    clearTimeout(e)
                }
            }
        }, [t]), (0, o.useOverlayFocusContain)(), {
            dialogProps: {
                ...(0, r.filterDOMProps)(e, {
                    labelable: !0
                }),
                role: n,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || s,
                onBlur: e => {
                    c.current && e.stopPropagation()
                }
            },
            titleProps: {
                id: s
            }
        }
    }
}