function(e, t, n) {
    "use strict";
    var r = n("754793"),
        i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
    e.exports = function(e, t, n, u, c, l, d, f) {
        var p, h, m, g, _, b, v, y, E, S = f.bits,
            x = 0,
            w = 0,
            T = 0,
            C = 0,
            D = 0,
            O = 0,
            M = 0,
            A = 0,
            k = 0,
            R = 0,
            N = null,
            I = 0,
            L = new r.Buf16(16),
            P = new r.Buf16(16),
            F = null,
            B = 0;
        for (x = 0; x <= 15; x++) L[x] = 0;
        for (w = 0; w < u; w++) L[t[n + w]]++;
        for (C = 15, D = S; C >= 1 && 0 === L[C]; C--);
        if (D > C && (D = C), 0 === C) return c[l++] = 20971520, c[l++] = 20971520, f.bits = 1, 0;
        for (T = 1; T < C && 0 === L[T]; T++);
        for (D < T && (D = T), A = 1, x = 1; x <= 15; x++)
            if (A <<= 1, (A -= L[x]) < 0) return -1;
        if (A > 0 && (0 === e || 1 !== C)) return -1;
        for (x = 1, P[1] = 0; x < 15; x++) P[x + 1] = P[x] + L[x];
        for (w = 0; w < u; w++) 0 !== t[n + w] && (d[P[t[n + w]]++] = w);
        if (0 === e ? (N = F = d, b = 19) : 1 === e ? (N = i, I -= 257, F = a, B -= 257, b = 256) : (N = o, F = s, b = -1), R = 0, w = 0, x = T, _ = l, O = D, M = 0, m = -1, g = (k = 1 << D) - 1, 1 === e && k > 852 || 2 === e && k > 592) return 1;
        for (;;) {
            v = x - M, d[w] < b ? (y = 0, E = d[w]) : d[w] > b ? (y = F[B + d[w]], E = N[I + d[w]]) : (y = 96, E = 0), p = 1 << x - M, T = h = 1 << O;
            do c[_ + (R >> M) + (h -= p)] = v << 24 | y << 16 | E | 0; while (0 !== h);
            for (p = 1 << x - 1; R & p;) p >>= 1;
            if (0 !== p ? (R &= p - 1, R += p) : R = 0, w++, 0 == --L[x]) {
                if (x === C) break;
                x = t[n + d[w]]
            }
            if (x > D && (R & g) !== m) {
                for (0 === M && (M = D), _ += T, A = 1 << (O = x - M); O + M < C && !((A -= L[O + M]) <= 0);) {
                    ;
                    O++, A <<= 1
                }
                if (k += 1 << O, 1 === e && k > 852 || 2 === e && k > 592) return 1;
                c[m = R & g] = D << 24 | O << 16 | _ - l | 0
            }
        }
        return 0 !== R && (c[_ + R] = x - M << 24 | 4194304), f.bits = D, 0
    }
}