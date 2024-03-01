function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TIMESTAMP_FORMATS: function() {
            return u
        },
        DEFAULT_TIMESTAMP_FORMAT: function() {
            return o
        },
        TIMESTAMP_REGEX: function() {
            return c
        },
        parseTimestamp: function() {
            return d
        },
        unparseTimestamp: function() {
            return f
        }
    });
    var l = n("866227"),
        r = n.n(l),
        a = n("888400"),
        i = n("718517");
    let u = {
            t: e => (0, a.dateFormat)(e, "LT"),
            T: e => (0, a.dateFormat)(e, "LTS"),
            d: e => (0, a.dateFormat)(e, "L"),
            D: e => (0, a.dateFormat)(e, "LL"),
            f: e => (0, a.dateFormat)(e, "LLL"),
            F: e => (0, a.dateFormat)(e, "LLLL"),
            R: e => {
                let t = r.relativeTimeThreshold("s");
                r.relativeTimeThreshold("s", 60);
                let n = r.relativeTimeThreshold("ss");
                r.relativeTimeThreshold("ss", -1);
                let l = r.relativeTimeThreshold("m");
                r.relativeTimeThreshold("m", 60);
                let a = null;
                try {
                    a = r(e.toDate()).fromNow()
                } catch (e) {}
                return r.relativeTimeThreshold("s", t), r.relativeTimeThreshold("ss", n), r.relativeTimeThreshold("m", l), null != a ? a : r(e.toDate()).fromNow()
            }
        },
        o = "f";
    Object.setPrototypeOf(u, null);
    let s = Object.keys(u).join("|"),
        c = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(s, "))?>"));

    function d(e, t) {
        let n = r(Number(e) * i.default.Millis.SECOND);
        if (!n.isValid()) return null;
        let l = null != t ? u[t] : void 0;
        return null == l && (l = u[o]), {
            timestamp: e,
            format: t,
            parsed: n,
            full: u.F(n),
            formatted: l(n)
        }
    }

    function f(e, t) {
        return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
    }
}