function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007");
    var l = n("884691");

    function i(e, t) {
        let n = e.getBoundingClientRect(),
            l = (t.clientX - n.left) / n.width;
        return Math.min(1, Math.max(0, l))
    }

    function a(e) {
        let {
            ref: t,
            onDrag: n,
            onDragStart: a,
            onDragEnd: s
        } = e, [r, o] = l.useState(!1);
        l.useEffect(() => {
            if (r) return window.addEventListener("mouseup", e), window.addEventListener("mousemove", l), () => {
                window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", l)
            };

            function e() {
                null == s || s(), o(!1)
            }

            function l(e) {
                let l = t.current;
                null != l && (null == n || n(i(l, e)))
            }
        }, [t, r, s, n]);
        let u = l.useCallback(e => {
            e.preventDefault();
            let l = t.current;
            null != l && (o(!0), null == a || a(), null == n || n(i(l, e)))
        }, [t, a, n]);
        return [r, u]
    }
}