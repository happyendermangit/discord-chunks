function(t, r, n) {
    var e = n("354069"),
        o = n("990873"),
        i = n("148946"),
        u = n("812411"),
        c = n("888633"),
        a = n("260739"),
        f = n("754076");
    t.exports = function(t, r) {
        return u(t) && c(r) ? a(f(t), r) : function(n) {
            var u = o(n, t);
            return void 0 === u && u === r ? i(n, t) : e(r, u, 3)
        }
    }
}