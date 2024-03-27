function(e, t, n) {
    var r = function(e) {
            return String(Number(e)) === e ? Number(e) : e
        },
        i = function(e, t, n, i) {
            if (i && !n) t[i] = r(e[1]);
            else
                for (var a = 0; a < n.length; a += 1) null != e[a + 1] && (t[n[a]] = r(e[a + 1]))
        },
        a = function(e, t, n) {
            var r = e.name && e.names;
            e.push && !t[e.push] ? t[e.push] = [] : r && !t[e.name] && (t[e.name] = {});
            var a = e.push ? {} : r ? t[e.name] : t;
            i(n.match(e.reg), a, e.names, e.name), e.push && t[e.push].push(a)
        },
        o = n("767172"),
        s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
    t.parse = function(e) {
        var t = {},
            n = [],
            r = t;
        return e.split(/(\r\n|\r|\n)/).filter(s).forEach(function(e) {
            var t = e[0],
                i = e.slice(2);
            "m" === t && (n.push({
                rtp: [],
                fmtp: []
            }), r = n[n.length - 1]);
            for (var s = 0; s < (o[t] || []).length; s += 1) {
                var u = o[t][s];
                if (u.reg.test(i)) return a(u, r, i)
            }
        }), t.media = n, t
    };
    var u = function(e, t) {
        var n = t.split(/=(.+)/, 2);
        return 2 === n.length && (e[n[0]] = r(n[1])), e
    };
    t.parseParams = function(e) {
        return e.split(/\;\s?/).reduce(u, {})
    }, t.parseFmtpConfig = t.parseParams, t.parsePayloads = function(e) {
        return e.split(" ").map(Number)
    }, t.parseRemoteCandidates = function(e) {
        for (var t = [], n = e.split(" ").map(r), i = 0; i < n.length; i += 3) t.push({
            component: n[i],
            ip: n[i + 1],
            port: n[i + 2]
        });
        return t
    }, t.parseImageAttributes = function(e) {
        return e.split(" ").map(function(e) {
            return e.substring(1, e.length - 1).split(",").reduce(u, {})
        })
    }, t.parseSimulcastStreamList = function(e) {
        return e.split(";").map(function(e) {
            return e.split(",").map(function(e) {
                var t, n = !1;
                return "~" !== e[0] ? t = r(e) : (t = r(e.substring(1, e.length)), n = !0), {
                    scid: t,
                    paused: n
                }
            })
        })
    }
}