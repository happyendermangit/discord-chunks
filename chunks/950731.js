function(e, t, n) {
    var r = n("599235"),
        i = n("515886"),
        o = n("912065").Buffer,
        s = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        a = Array(160);

    function c() {
        this.init(), this._w = a, i.call(this, 128, 112)
    }

    function u(e, t, n) {
        return n ^ e & (t ^ n)
    }

    function d(e, t, n) {
        return e & t | n & (e | t)
    }

    function l(e, t) {
        return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
    }

    function f(e, t) {
        return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
    }
    r(c, i), c.prototype.init = function() {
        return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
    };

    function p(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0
    }
    c.prototype._update = function(e) {
        for (var t = this._w, n = 0 | this._ah, r = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, a = 0 | this._eh, c = 0 | this._fh, u = 0 | this._gh, d = 0 | this._hh, h = 0 | this._al, v = 0 | this._bl, g = 0 | this._cl, b = 0 | this._dl, m = 0 | this._el, y = 0 | this._fl, x = 0 | this._gl, w = 0 | this._hl, S = 0; S < 32; S += 2) t[S] = e.readInt32BE(4 * S), t[S + 1] = e.readInt32BE(4 * S + 4);
        for (; S < 160; S += 2) {
            var k, E, _, M, D, C, P, T, A = t[S - 30],
                R = t[S - 30 + 1];
            var I = ((k = A) >>> 1 | (E = R) << 31) ^ (k >>> 8 | E << 24) ^ k >>> 7;
            var O = ((_ = R) >>> 1 | (M = A) << 31) ^ (_ >>> 8 | M << 24) ^ (_ >>> 7 | M << 25);
            A = t[S - 4], R = t[S - 4 + 1];
            var j = ((D = A) >>> 19 | (C = R) << 13) ^ (C >>> 29 | D << 3) ^ D >>> 6;
            var L = ((P = R) >>> 19 | (T = A) << 13) ^ (T >>> 29 | P << 3) ^ (P >>> 6 | T << 26),
                N = t[S - 14],
                F = t[S - 14 + 1],
                B = t[S - 32],
                z = t[S - 32 + 1],
                K = O + F | 0,
                V = I + N + p(K, O) | 0;
            V = V + j + p(K = K + L | 0, L) | 0, V = V + B + p(K = K + z | 0, z) | 0, t[S] = V, t[S + 1] = K
        }
        for (var U = 0; U < 160; U += 2) {
            V = t[U], K = t[U + 1];
            var H, q, G, W, Z, Y, X, J, $, Q, ee = (H = n) & (q = r) | i & (H | q);
            var et = (G = h) & (W = v) | g & (G | W),
                en = l(n, h),
                er = l(h, n),
                ei = f(a, m),
                eo = f(m, a),
                es = s[U],
                ea = s[U + 1];
            var ec = (Z = a, Y = c, (X = u) ^ Z & (Y ^ X));
            var eu = (J = m, $ = y, (Q = x) ^ J & ($ ^ Q)),
                ed = w + eo | 0,
                el = d + ei + p(ed, w) | 0;
            el = el + ec + p(ed = ed + eu | 0, eu) | 0, el = el + es + p(ed = ed + ea | 0, ea) | 0, el = el + V + p(ed = ed + K | 0, K) | 0;
            var ef = er + et | 0,
                ep = en + ee + p(ef, er) | 0;
            d = u, w = x, u = c, x = y, c = a, y = m, a = o + el + p(m = b + ed | 0, b) | 0, o = i, b = g, i = r, g = v, r = n, v = h, n = el + ep + p(h = ed + ef | 0, ed) | 0
        }
        this._al = this._al + h | 0, this._bl = this._bl + v | 0, this._cl = this._cl + g | 0, this._dl = this._dl + b | 0, this._el = this._el + m | 0, this._fl = this._fl + y | 0, this._gl = this._gl + x | 0, this._hl = this._hl + w | 0, this._ah = this._ah + n + p(this._al, h) | 0, this._bh = this._bh + r + p(this._bl, v) | 0, this._ch = this._ch + i + p(this._cl, g) | 0, this._dh = this._dh + o + p(this._dl, b) | 0, this._eh = this._eh + a + p(this._el, m) | 0, this._fh = this._fh + c + p(this._fl, y) | 0, this._gh = this._gh + u + p(this._gl, x) | 0, this._hh = this._hh + d + p(this._hl, w) | 0
    }, c.prototype._hash = function() {
        var e = o.allocUnsafe(64);

        function t(t, n, r) {
            e.writeInt32BE(t, r), e.writeInt32BE(n, r + 4)
        }
        return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
    }, e.exports = c
}