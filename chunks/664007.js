function(t, r, n) {
    var e = n("679991"),
        o = n("169789"),
        i = n("406449"),
        u = n("66703"),
        c = n("245510");

    function a(t) {
        var r = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++r < n;) {
            var e = t[r];
            this.set(e[0], e[1])
        }
    }
    a.prototype.clear = e, a.prototype.delete = o, a.prototype.get = i, a.prototype.has = u, a.prototype.set = c, t.exports = a
}