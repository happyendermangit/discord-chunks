function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return u
        }
    }), E("222007");
    var t = E("579672"),
        o = E.n(t),
        n = E("689988"),
        r = E("709681");
    let a = (0, r.createSound)("vibing_wumpus", "vibing_wumpus", 0),
        i = 0,
        I = 0,
        T = null;

    function s(e, _) {
        let E = Math.round(100 * e),
            t = Math.round(100 * I),
            n = Math.round(100 * i);
        E > 0 && n >= t || E < 0 && n <= t ? (clearInterval(T), 0 === t && null != _ && _()) : (n += E, i = n / 100, a.volume = o(i, 0, .5))
    }

    function S(e) {
        null != T && clearInterval(T), I = 0;
        let _ = R();
        T = setInterval(() => {
            s(_, e)
        }, 100)
    }

    function N() {
        null != T && clearInterval(T), a.loop(), I = .5;
        let e = R();
        T = setInterval(() => s(e), 100)
    }

    function O() {
        S(a.pause.bind(a))
    }

    function A() {
        S(a.stop.bind(a))
    }

    function R() {
        return .2 * (I - i)
    }
    class l extends n.default {
        constructor(...e) {
            super(...e), this.actions = {
                VIBING_WUMPUS_PLAY_MUSIC: N,
                VIBING_WUMPUS_STOP_MUSIC: A,
                VIBING_WUMPUS_PAUSE_MUSIC: O
            }
        }
    }
    var u = new l
}