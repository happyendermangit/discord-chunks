function(e, t, r) {
    e.exports = function(e, t, r) {
        var n = -1,
            u = e.length;
        t < 0 && (t = -t > u ? 0 : u + t), (r = r > u ? u : r) < 0 && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var a = Array(u); ++n < u;) a[n] = e[n + t];
        return a
    }
}