function(_, E, I) {
    "use strict";

    function e(_) {
        let E = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            I = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            e = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
            a = null != _ ? "?redirect_to=".concat(encodeURIComponent(_)) : "";
        return 0 !== I.length && (I = 0 === a.length ? "?".concat(I) : "&".concat(I)), "".concat(E ? e : "", "/login").concat(a).concat(I)
    }
    I.r(E), I.d(E, {
        getLoginPath: function() {
            return e
        },
        wrapPaths: function() {
            return a
        }
    }), I("222007");

    function a(_, E) {
        let I = {};
        for (let e of Object.keys(_)) {
            let a = _[e];
            if ("function" != typeof a) {
                I[e] = a;
                continue
            }
            I[e] = function() {
                for (var _ = arguments.length, I = Array(_), e = 0; e < _; e++) I[e] = arguments[e];
                return a(... function(_, E) {
                    return _.map(_ => null == _ ? _ : null == E ? encodeURIComponent(_) : String(_).split("").map(_ => null != E && E.includes(_) ? _ : encodeURIComponent(_)).join(""))
                }(I, E))
            }
        }
        return I
    }
}