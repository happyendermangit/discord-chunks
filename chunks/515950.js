function(_, E, I) {
    "use strict";
    I.r(E), I.d(E, {
        transformColorForReducedSaturation: function() {
            return t
        },
        transformColorContrast: function() {
            return i
        }
    }), I("222007");
    var e = I("10371"),
        a = I.n(e);

    function o(_, E, I) {
        let [e, a] = _, [o, R] = E, t = (e + a) / 2;
        return I === t ? t : I < t ? o + (I - e) / (t - e) * (t - o) : t + (I - t) / (a - t) * (R - t)
    }
    let R = [0, 2];

    function t(_, E, I) {
        let e = a(_);
        if ("background" !== E) return e.set("hsl.s", "*".concat(I)).hex();
        {
            let _ = function(_, E, I) {
                let [e, a] = _, [o, R] = E;
                return o + (R - o) * ((I - e) / (a - e))
            }([0, 1], [.25, 1], I);
            return e.set("hsl.s", "*".concat(_)).hex()
        }
    }
    let A = [1.3, .7],
        T = [.98, 1],
        r = [.75, 1.5],
        N = [1.45, .45];

    function i(_, E, I, e) {
        switch (E) {
            case "background":
            case "border":
                return a(_).set("hsl.l", "*".concat(o(R, "light" === I ? T : A, e))).hex();
            case "text":
                return a(_).set("hsl.l", "*".concat(o(R, "light" === I ? N : r, e))).hex();
            default:
                return _
        }
    }
}