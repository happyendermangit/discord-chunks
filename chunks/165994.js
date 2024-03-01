function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        matchSorter: function() {
            return c
        }
    }), n("222007"), n("808653"), n("424973");
    var r = n("261438"),
        a = n("433165"),
        i = n.n(a),
        o = {
            CASE_SENSITIVE_EQUAL: 7,
            EQUAL: 6,
            STARTS_WITH: 5,
            WORD_STARTS_WITH: 4,
            CONTAINS: 3,
            ACRONYM: 2,
            MATCHES: 1,
            NO_MATCH: 0
        };
    c.rankings = o;
    var s = function(e, t) {
        return String(e.rankedValue).localeCompare(String(t.rankedValue))
    };

    function c(e, t, n) {
        void 0 === n && (n = {});
        var a = n,
            i = a.keys,
            c = a.threshold,
            u = void 0 === c ? o.MATCHES : c,
            p = a.baseSort,
            f = void 0 === p ? s : p,
            m = a.sorter;
        return (void 0 === m ? function(e) {
            return e.sort(function(e, t) {
                return function(e, t, n) {
                    var r = e.rank,
                        a = e.keyIndex,
                        i = t.rank,
                        o = t.keyIndex;
                    return r !== i ? r > i ? -1 : 1 : a === o ? n(e, t) : a < o ? -1 : 1
                }(e, t, f)
            })
        } : m)(e.reduce(function(e, a, s) {
            var c = function(e, t, n, a) {
                    return t ? (function(e, t) {
                        for (var n = [], a = 0, i = t.length; a < i; a++) {
                            for (var o = t[a], s = function(e) {
                                    return "string" == typeof e ? d : (0, r.default)({}, d, e)
                                }(o), c = function(e, t) {
                                    var n;
                                    if ("object" == typeof t && (t = t.key), "function" == typeof t) n = t(e);
                                    else if (null == e) n = null;
                                    else if (Object.hasOwnProperty.call(e, t)) n = e[t];
                                    else {
                                        if (t.includes(".")) return function(e, t) {
                                            for (var n = e.split("."), r = [t], a = 0, i = n.length; a < i; a++) {
                                                for (var o = n[a], s = [], c = 0, l = r.length; c < l; c++) {
                                                    var u = r[c];
                                                    if (null != u) {
                                                        if (Object.hasOwnProperty.call(u, o)) {
                                                            var d = u[o];
                                                            null != d && s.push(d)
                                                        } else "*" === o && (s = s.concat(u))
                                                    }
                                                }
                                                r = s
                                            }
                                            if (Array.isArray(r[0])) {
                                                var p = [];
                                                return p.concat.apply(p, r)
                                            }
                                            return r
                                        }(t, e);
                                        n = null
                                    }
                                    return null == n ? [] : Array.isArray(n) ? n : [String(n)]
                                }(e, o), l = 0, u = c.length; l < u; l++) n.push({
                                itemValue: c[l],
                                attributes: s
                            })
                        }
                        return n
                    })(e, t).reduce(function(e, t, r) {
                        var i = e.rank,
                            s = e.rankedValue,
                            c = e.keyIndex,
                            u = e.keyThreshold,
                            d = t.itemValue,
                            p = t.attributes,
                            f = l(d, n, a),
                            m = s,
                            h = p.minRanking,
                            v = p.maxRanking,
                            g = p.threshold;
                        return f < h && f >= o.MATCHES ? f = h : f > v && (f = v), f > i && (i = f, c = r, u = g, m = d), {
                            rankedValue: m,
                            rank: i,
                            keyIndex: c,
                            keyThreshold: u
                        }
                    }, {
                        rankedValue: e,
                        rank: o.NO_MATCH,
                        keyIndex: -1,
                        keyThreshold: a.threshold
                    }) : {
                        rankedValue: e,
                        rank: l(e, n, a),
                        keyIndex: -1,
                        keyThreshold: a.threshold
                    }
                }(a, i, t, n),
                p = c.rank,
                f = c.keyThreshold;
            return p >= (void 0 === f ? u : f) && e.push((0, r.default)({}, c, {
                item: a,
                index: s
            })), e
        }, [])).map(function(e) {
            return e.item
        })
    }

    function l(e, t, n) {
        return (e = u(e, n), (t = u(t, n)).length > e.length) ? o.NO_MATCH : e === t ? o.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), e === (t = t.toLowerCase())) ? o.EQUAL : e.startsWith(t) ? o.STARTS_WITH : e.includes(" " + t) ? o.WORD_STARTS_WITH : e.includes(t) ? o.CONTAINS : 1 === t.length ? o.NO_MATCH : (function(e) {
            var t = "";
            return e.split(" ").forEach(function(e) {
                e.split("-").forEach(function(e) {
                    t += e.substr(0, 1)
                })
            }), t
        })(e).includes(t) ? o.ACRONYM : function(e, t) {
            var n, r, a = 0,
                i = 0;

            function s(e, t, n) {
                for (var r = n, i = t.length; r < i; r++)
                    if (t[r] === e) return a += 1, r + 1;
                return -1
            }
            var c = s(t[0], e, 0);
            if (c < 0) return o.NO_MATCH;
            i = c;
            for (var l = 1, u = t.length; l < u; l++)
                if (!((i = s(t[l], e, i)) > -1)) return o.NO_MATCH;
            return n = i - c, r = a / t.length, o.MATCHES + r * (1 / n)
        }(e, t)
    }

    function u(e, t) {
        var n = t.keepDiacritics;
        return e = "" + e, !n && (e = i(e)), e
    }
    var d = {
        maxRanking: 1 / 0,
        minRanking: -1 / 0
    }
}