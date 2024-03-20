function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        thumbHashToRGBA: function() {
            return i
        }
    }), n("424973"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var r = n("723251");

    function i(e) {
        let {
            detail: t = 1,
            pop: n = 1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
            PI: i,
            min: l,
            max: a,
            cos: s,
            round: o
        } = Math, u = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & u) / 63, f = (u >> 6 & 63) / 31.5 - 1, m = (u >> 12 & 63) / 31.5 - 1, _ = u >> 23, E = c >> 15, I = a(3, E ? _ ? 5 : 7 : 7 & c), T = a(3, E ? 7 & c : _ ? 5 : 7), p = _ ? (15 & e[5]) / 15 : 1, S = (e[5] >> 4) / 15, P = _ ? 6 : 5, R = 0, C = (t, n, r) => {
            let i = [];
            for (let l = 0; l < n; l++)
                for (let a = l ? 0 : 1; a * n < t * (n - l); a++) i.push(((e[P + (R >> 1)] >> ((1 & R++) << 2) & 15) / 7.5 - 1) * r);
            return i
        }, O = C(I, T, (u >> 18 & 31) / 31 / 2), M = C(3, 3, (c >> 3 & 63) / 63 * n), g = C(3, 3, (c >> 9 & 63) / 63 * n), h = _ ? C(5, 5, S) : [], L = (0, r.thumbHashToApproximateAspectRatio)(e), N = o(L > 1 ? 32 : 32 * L), v = o(L > 1 ? 32 / L : 32), x = new Uint8Array(N * v * 4), A = [], U = [];
        for (let e = 0, n = 0; e < v; e++)
            for (let r = 0; r < N; r++, n += 4) {
                let o = d,
                    u = f,
                    c = m,
                    E = p;
                for (let e = 0, t = a(I, _ ? 5 : 3); e < t; e++) A[e] = s(i / N * (r + .5) * e);
                for (let t = 0, n = a(T, _ ? 5 : 3); t < n; t++) U[t] = s(i / v * (e + .5) * t);
                for (let e = 0, n = 0; e < T; e++)
                    for (let r = e ? 0 : 1, i = 2 * U[e]; r * T < I * (T - e); r++, n++) !(r > t) && !(e > t) && (o += O[n] * A[r] * i);
                for (let e = 0, t = 0; e < 3; e++)
                    for (let n = e ? 0 : 1, r = 2 * U[e]; n < 3 - e; n++, t++) {
                        let e = A[n] * r;
                        u += M[t] * e, c += g[t] * e
                    }
                if (_)
                    for (let e = 0, t = 0; e < 5; e++)
                        for (let n = e ? 0 : 1, r = 2 * U[e]; n < 5 - e; n++, t++) E += h[t] * A[n] * r;
                let S = o - 2 / 3 * u,
                    P = (3 * o - S + c) / 2,
                    R = P - c;
                x[n] = a(0, 255 * l(1, P)), x[n + 1] = a(0, 255 * l(1, R)), x[n + 2] = a(0, 255 * l(1, S)), x[n + 3] = a(0, 255 * l(1, E))
            }
        return {
            w: N,
            h: v,
            rgba: x
        }
    }
}