function(e, t, n) {
    "use strict";
    var r = n("859514"),
        o = n("868822"),
        u = n("727204"),
        c = n("379792"),
        a = n("952643"),
        i = n("585034");
    r({
        target: "Promise",
        stat: !0,
        forced: n("683229")
    }, {
        allSettled: function(e) {
            var t = this,
                n = c.f(t),
                r = n.resolve,
                s = n.reject,
                l = a(function() {
                    var n = u(t.resolve),
                        c = [],
                        a = 0,
                        s = 1;
                    i(e, function(e) {
                        var u = a++,
                            i = !1;
                        s++, o(n, t, e).then(function(e) {
                            !i && (i = !0, c[u] = {
                                status: "fulfilled",
                                value: e
                            }, --s || r(c))
                        }, function(e) {
                            !i && (i = !0, c[u] = {
                                status: "rejected",
                                reason: e
                            }, --s || r(c))
                        })
                    }), --s || r(c)
                });
            return l.error && s(l.value), n.promise
        }
    })
}