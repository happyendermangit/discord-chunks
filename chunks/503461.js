function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, d;
    n.r(t), n.d(t, {
        ConflictOptions: function() {
            return a
        },
        DatabaseState: function() {
            return s
        },
        MAXIMUM_KEY_BITS: function() {
            return _
        },
        Ordering: function() {
            return r
        },
        TableId: function() {
            return i
        }
    }), (o = i || (i = {})).Kv = "kv", o.KvCache = "kv_cache", o.Messages = "messages";
    let _ = 5;
    (l = r || (r = {}))[l.Ascending = 0] = "Ascending", l[l.Descending = 1] = "Descending", (u = s || (s = {}))[u.Closed = 0] = "Closed", u[u.Open = 1] = "Open", u[u.Disabled = 2] = "Disabled", (d = a || (a = {}))[d.Skip = 0] = "Skip", d[d.Replace = 1] = "Replace"
}