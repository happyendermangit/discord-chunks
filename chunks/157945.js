function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var a = n("884691"),
        l = n("917351"),
        i = n("446674"),
        o = n("827560"),
        r = n("244201"),
        s = n("206230"),
        d = n("659500"),
        u = n("49111");
    let c = (0, l.debounce)(e => {
        setTimeout(() => {
            var t;
            null === (t = e.current) || void 0 === t || t.focus()
        }, 0)
    }, 50);

    function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
            l = (0, i.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled),
            p = (0, o.default)(),
            [f, m] = a.useState(!1),
            h = (0, r.useWindowDispatch)();
        return a.useEffect(() => {
            if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

            function e() {
                p && (h.dispatch(u.ComponentActions.POPOUT_CLOSE), d.ComponentDispatch.dispatch(u.ComponentActions.CONTEXT_MENU_CLOSE))
            }
        }, [n, p, t, h]), a.useEffect(() => {
            var a, i, o;
            if (l || !f || !t) return;
            let r = p;

            function s(t) {
                let n = t.relatedTarget;
                setTimeout(() => {
                    (null == n || "BUTTON" === n.tagName) && !r && c(e)
                }, 100)
            }
            return null === (a = e.current) || void 0 === a || a.addEventListener("focusout", s), (null === (i = n.document.activeElement) || void 0 === i ? void 0 : i.tagName) !== "IFRAME" && !r && (null === (o = e.current) || void 0 === o || o.focus()), () => {
                var t;
                null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", s), r = !0
            }
        }, [t, f, l, e, n, p]), m
    }
}