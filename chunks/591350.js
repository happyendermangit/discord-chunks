function(t, r, n) {
    t = n.nmd(t);
    var e = n("690516"),
        o = n("221386"),
        i = "object" == typeof r && r && !r.nodeType && r,
        u = i && "object" == typeof t && t && !t.nodeType && t,
        c = u && u.exports === i ? e.Buffer : void 0,
        a = c ? c.isBuffer : void 0;
    t.exports = a || o
}