function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        resolveThunk: function() {
            return r
        }
    });
    var s = n("917351"),
        i = n.n(s);
    let r = e => "function" == typeof e ? e() : e;
    i.curry((e, t, n) => r(t) ? e(n) : n({}))
}