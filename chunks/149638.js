function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("884691"),
        i = n("627445"),
        l = n.n(i);

    function a(e, t) {
        let n = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
            n.current = e
        }, [e]), (0, r.useEffect)(() => {
            if (null === t) return;
            let e = setInterval(function() {
                l(null != n.current, "Missing callback"), n.current()
            }, t);
            return () => clearInterval(e)
        }, [t])
    }
}