function(e, t, n) {
    "use strict";
    var r = n("503486"),
        o = n("718530"),
        u = n("125359"),
        c = n("210506"),
        a = n("602178"),
        i = n("174669"),
        s = n("459149"),
        l = n("719756"),
        f = n("140925"),
        p = n("693523"),
        d = o && o.prototype,
        m = i("species"),
        y = !1,
        h = u(r.PromiseRejectionEvent),
        v = c("Promise", function() {
            var e = a(o),
                t = e !== String(o);
            if (!t && 66 === p || f && !(d.catch && d.finally)) return !0;
            if (!p || p < 51 || !/native code/.test(e)) {
                var n = new o(function(e) {
                        e(1)
                    }),
                    r = function(e) {
                        e(function() {}, function() {})
                    };
                if ((n.constructor = {})[m] = r, !(y = n.then(function() {}) instanceof r)) return !0
            }
            return !t && (s || l) && !h
        });
    e.exports = {
        CONSTRUCTOR: v,
        REJECTION_EVENT: h,
        SUBCLASSING: y
    }
}