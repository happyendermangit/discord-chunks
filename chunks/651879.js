function(e, t, n) {
    "use strict";
    let l;
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("424973");
    var r = n("917351"),
        a = n.n(r),
        i = n("693566"),
        u = n.n(i),
        o = n("851387"),
        s = n("305961"),
        c = n("697218"),
        d = n("718517"),
        f = n("158998"),
        p = n("782340");
    let h = new u({
        maxAge: 1 * d.default.Millis.MINUTE
    });

    function m(e, t, n) {
        null != l && clearTimeout(l), l = setTimeout(() => {
            let l = [],
                r = e => {
                    l.push(e.id)
                };
            if (null == e) a.forEach(s.default.getGuilds(), r);
            else if (Array.isArray(e)) e.forEach(e => {
                let t = s.default.getGuild(e);
                null != t && r(t)
            });
            else {
                let t = s.default.getGuild(e);
                null != t && r(t)
            }
            l.length > 0 && o.default.requestMembers(l, t.toLocaleLowerCase(), n)
        }, 200)
    }

    function g(e, t) {
        let n = "".concat(null != e ? e : "", ":").concat(t),
            l = h.get(n);
        if (null != l) return l;
        h.set(n, !0)
    }
    var E = {
        getGuildNameSuggestion: function(e) {
            let t = c.default.getCurrentUser(),
                n = f.getName(t);
            return null == n || 0 === n.length ? "" : p.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
            })
        },
        requestMembers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                l = Array.isArray(e),
                r = [],
                a = !1;
            if (l) e.forEach(e => {
                let n = g(e, t);
                null == n && r.push(e)
            });
            else {
                let n = g(e, t);
                null == n && (a = !0)
            }
            r.length > 0 && l ? m(r, t, n) : a && m(e, t, n)
        }
    }
}