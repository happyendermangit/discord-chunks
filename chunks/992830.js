function(e, t, n) {
    "use strict";

    function i(e) {
        let t = Promise.resolve(null),
            n = [],
            i = !1,
            {
                onContention: s,
                onContentionResolved: r,
                onTimeout: a,
                timeoutMs: o
            } = e,
            l = function(e, l) {
                n.length > 0 ? (s(l, n), i = !0) : i && (r(), i = !1), n.push(l);
                let u = null == o || null == a ? null : setTimeout(() => a(l, n), o);
                return new Promise((i, s) => {
                    t = t.then(e).then(i, s).then(() => n.splice(0, 1)), null != u && (t = t.then(() => clearTimeout(u)))
                })
            };
        return l.isMutexHeld = () => n.length > 0, l.getLockHolders = () => n, l
    }
    n.r(t), n.d(t, {
        createObservableLock: function() {
            return i
        }
    }), n("424973")
}