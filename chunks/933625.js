function(t, r, e) {
    var n = e("844291"),
        o = e("611835"),
        i = e("662650"),
        a = e("978283"),
        u = e("773640");

    function s(t) {
        var r = -1,
            e = null == t ? 0 : t.length;
        for (this.clear(); ++r < e;) {
            var n = t[r];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = u, t.exports = s
}