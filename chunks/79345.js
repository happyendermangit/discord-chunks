function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUsernameStatus: function() {
            return r
        }
    }), n("222007");
    var s = n("884691"),
        a = n("44984");
    let r = function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
            l = (0, a.useUsernameLiveCheck)(e, t, n),
            [i, o] = s.useState(void 0);
        return s.useEffect(() => {
            "" === e || e === r ? o(void 0) : null != l && o(l)
        }, [l, e, r]), i
    }
}