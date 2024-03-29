function(e, t, n) {
    "use strict";
    var r = n("546299"),
        i = n("261638"),
        a = n("21841"),
        o = r.rotr64_hi,
        s = r.rotr64_lo,
        u = r.shr64_hi,
        c = r.shr64_lo,
        l = r.sum64,
        d = r.sum64_hi,
        f = r.sum64_lo,
        p = r.sum64_4_hi,
        h = r.sum64_4_lo,
        m = r.sum64_5_hi,
        g = r.sum64_5_lo,
        _ = i.BlockHash,
        b = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

    function v() {
        if (!(this instanceof v)) return new v;
        _.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = b, this.W = Array(160)
    }
    r.inherits(v, _), e.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function(e, t) {
        for (var n = this.W, r = 0; r < 32; r++) n[r] = e[t + r];
        for (; r < n.length; r += 2) {
            var i = function(e, t) {
                    var n = o(e, t, 19) ^ o(t, e, 29) ^ u(e, t, 6);
                    return n < 0 && (n += 4294967296), n
                }(n[r - 4], n[r - 3]),
                a = function(e, t) {
                    var n = s(e, t, 19) ^ s(t, e, 29) ^ c(e, t, 6);
                    return n < 0 && (n += 4294967296), n
                }(n[r - 4], n[r - 3]),
                l = n[r - 14],
                d = n[r - 13],
                f = function(e, t) {
                    var n = o(e, t, 1) ^ o(e, t, 8) ^ u(e, t, 7);
                    return n < 0 && (n += 4294967296), n
                }(n[r - 30], n[r - 29]),
                m = function(e, t) {
                    var n = s(e, t, 1) ^ s(e, t, 8) ^ c(e, t, 7);
                    return n < 0 && (n += 4294967296), n
                }(n[r - 30], n[r - 29]),
                g = n[r - 32],
                _ = n[r - 31];
            n[r] = p(i, a, l, d, f, m, g, _), n[r + 1] = h(i, a, l, d, f, m, g, _)
        }
    }, v.prototype._update = function(e, t) {
        this._prepareBlock(e, t);
        var n = this.W,
            r = this.h[0],
            i = this.h[1],
            u = this.h[2],
            c = this.h[3],
            p = this.h[4],
            h = this.h[5],
            _ = this.h[6],
            b = this.h[7],
            v = this.h[8],
            y = this.h[9],
            E = this.h[10],
            S = this.h[11],
            x = this.h[12],
            w = this.h[13],
            T = this.h[14],
            C = this.h[15];
        a(this.k.length === n.length);
        for (var D = 0; D < n.length; D += 2) {
            var O = T,
                M = C,
                A = function(e, t) {
                    var n = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
                    return n < 0 && (n += 4294967296), n
                }(v, y),
                k = function(e, t) {
                    var n = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
                    return n < 0 && (n += 4294967296), n
                }(v, y),
                R = function(e, t, n, r, i) {
                    var a = e & n ^ ~e & i;
                    return a < 0 && (a += 4294967296), a
                }(v, y, E, S, x, w),
                N = function(e, t, n, r, i, a) {
                    var o = t & r ^ ~t & a;
                    return o < 0 && (o += 4294967296), o
                }(v, y, E, S, x, w),
                I = this.k[D],
                L = this.k[D + 1],
                P = n[D],
                F = n[D + 1],
                B = m(O, M, A, k, R, N, I, L, P, F),
                U = g(O, M, A, k, R, N, I, L, P, F);
            O = function(e, t) {
                var n = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
                return n < 0 && (n += 4294967296), n
            }(r, i), M = function(e, t) {
                var n = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
                return n < 0 && (n += 4294967296), n
            }(r, i), A = function(e, t, n, r, i) {
                var a = e & n ^ e & i ^ n & i;
                return a < 0 && (a += 4294967296), a
            }(r, i, u, c, p, h);
            var Y = d(O, M, A, k = function(e, t, n, r, i, a) {
                    var o = t & r ^ t & a ^ r & a;
                    return o < 0 && (o += 4294967296), o
                }(r, i, u, c, p, h)),
                j = f(O, M, A, k);
            T = x, C = w, x = E, w = S, E = v, S = y, v = d(_, b, B, U), y = f(b, b, B, U), _ = p, b = h, p = u, h = c, u = r, c = i, r = d(B, U, Y, j), i = f(B, U, Y, j)
        }
        l(this.h, 0, r, i), l(this.h, 2, u, c), l(this.h, 4, p, h), l(this.h, 6, _, b), l(this.h, 8, v, y), l(this.h, 10, E, S), l(this.h, 12, x, w), l(this.h, 14, T, C)
    }, v.prototype._digest = function(e) {
        return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}