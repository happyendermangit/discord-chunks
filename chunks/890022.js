function(e, t, r) {
    e.exports = function(e, t, r) {
        var n = -1,
            i = e.length;
        t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var o = Array(i); ++n < i;) o[n] = e[n + t];
        return o
    }
}