function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s, a, o, l = n("442837"),
        u = n("570140"),
        d = n("594190"),
        _ = n("77498");
    class c extends(o = l.default.Store) {
        getGameForPID(e) {
            var t;
            if (__OVERLAY__ || null == e) return null;
            let n = null === (t = d.default.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
            return _.default.getGameByName(n)
        }
        getGame() {
            return __OVERLAY__ ? i : null
        }
    }
    a = "OverlayRunningGameStore", (s = "displayName") in(r = c) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new c(u.default, {
        OVERLAY_INITIALIZE: function(e) {
            i = e.currentGame
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            i = e.associatedGame
        }
    })
}