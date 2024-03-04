function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChromeVersion: function() {
            return f
        },
        getFirefoxVersion: function() {
            return E
        },
        canUseWebp: function() {
            return m
        },
        supportsHEVCAlpha: function() {
            return p
        }
    });
    var i, s, r, a, o, l = n("597755"),
        u = n.n(l);
    let d = (null !== (i = u.name) && void 0 !== i ? i : "unknown").toLowerCase(),
        c = "chrome" === d.toLowerCase() ? parseInt(null !== (s = u.version) && void 0 !== s ? s : "", 10) : -1;

    function f() {
        return c
    }
    let _ = "electron" === d.toLowerCase() ? parseInt(null !== (r = u.version) && void 0 !== r ? r : "", 10) : -1,
        h = "firefox" === d.toLowerCase() ? parseInt(null !== (a = u.version) && void 0 !== a ? a : "", 10) : -1;

    function E() {
        return h
    }
    let g = "edge" === d.toLowerCase() ? parseInt(null !== (o = u.version) && void 0 !== o ? o : "", 10) : -1;

    function m() {
        return -1 !== c || -1 !== _ || -1 !== h || -1 !== g
    }

    function p() {
        var e;
        let t = window.navigator,
            n = t.userAgent.toLowerCase(),
            i = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null,
            s = -1 !== n.indexOf("safari") && !(-1 !== n.indexOf("chrome")) && -1 !== n.indexOf("version/");
        return s && i
    }
}