function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHereMentionCallback: function() {
            return f
        }
    }), n("222007");
    var l = n("884691"),
        i = n("917351"),
        a = n.n(i),
        s = n("666020"),
        r = n("696605"),
        o = n("217535"),
        u = n("19766");
    let d = "@here";

    function c(e) {
        return !!(e.length > 1) || !(1 === e.length && "GROUP" === e[0].type && "unknown" === e[0].id)
    }

    function f(e, t, n) {
        let i = (0, o.default)(),
            [f, m] = l.useState(!1),
            p = l.useMemo(() => a.debounce(e => {
                (function(e, t, n, l) {
                    let i = u.default.getProps(n, l).groups;
                    return !!c(i) || !(e.length < d.length) && !(e.length > t) && -1 !== e.indexOf(d) && ((0, s.subscribeChannel)(n, l, r.DEFAULT_RANGES), !0)
                })(e, i, t, n) && m(!0)
            }, 200, {
                maxWait: 500
            }), [i, t, n]);
        l.useEffect(() => {
            let l = u.default.getProps(t, n).groups;
            if (null != t && !c(l) && !f) return e.addListener("text-changed", p), () => {
                e.removeListener("text-changed", p), p.cancel()
            }
        }, [f, p, e, t, n])
    }
}