function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("224706"),
        r = n("978085"),
        s = n("147913"),
        a = n("283595"),
        o = n("358085");
    class l extends s.default {
        handlePostConnectionOpen() {
            (0, o.isDesktop)() && (!a.default.fetched && (0, r.fetchLibrary)(), i.default.getDetectableGames())
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new l
}