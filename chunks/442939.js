function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        useGetOrFetchApplication: function() {
            return u
        }
    });
    var s = n("884691"),
        i = n("446674"),
        r = n("233736"),
        a = n("651057"),
        o = n("299285");

    function d(e) {
        let t = s.useRef([]);
        return s.useEffect(() => {
            !(0, r.areArraysShallowEqual)(e, t.current) && (a.default.fetchApplications(e, !1), t.current = e)
        }, [e]), (0, i.useStateFromStoresArray)([o.default], () => e.map(e => o.default.getApplication(e)))
    }

    function u(e) {
        return d(null != e ? [e] : [])[0]
    }
}