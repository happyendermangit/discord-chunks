function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUsernameLiveCheck: function() {
            return d
        }
    });
    var s = n("884691"),
        a = n("917351"),
        i = n("65597"),
        r = n("255403"),
        l = n("947962"),
        o = n("2581"),
        u = n("415133");
    let d = function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            c = (0, i.default)([o.default], () => o.default.validate(e), [e]),
            f = (0, i.default)([o.default], () => o.default.isRateLimited()),
            h = (0, l.usePomeloDebounceDelay)(),
            E = s.useMemo(() => (0, a.debounce)(e => r.default.attemptPomelo(e, n ? "registration" : "modal", n, d), h), [h, n, d]);
        return s.useEffect(() => {
            t && !f && null == c && "" !== e && E(e)
        }, [t, f, c, e, E]), s.useMemo(() => null != c ? (0, u.formatUsernameLiveCheckValidation)(c) : void 0, [c])
    }
}