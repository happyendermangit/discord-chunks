function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NON_TOKEN_TYPE: function() {
            return r
        },
        Token: function() {
            return o
        },
        default: function() {
            return E
        }
    }), n("222007"), n("702976"), n("424973");
    let a = /.+/g,
        r = "NON_TOKEN";

    function s(e, t, n) {
        if (null == t) return null;
        for (let a = 0; a < t.length; a++) {
            let r;
            let s = t[a],
                u = l(e.match(s.regex), n);
            if (null != u) {
                let {
                    cache: e
                } = s;
                if (null != e && null != (r = e.get(u[0])) && ((r = new o(r)).start = u.index), null == r) {
                    if (r = new o(u, s.type), null != s.validator && !s.validator(r)) continue;
                    null != e && !(null == e ? void 0 : e.has(u[0])) && e.set(u[0], r)
                }
                return r
            }
        }
        return null
    }

    function l(e, t) {
        if (null == e) return null;
        let n = [...e];
        return n.index = t, n
    }
    class u {
        reset(e) {
            this._rules = [], this._followers = {}, this._nonTokenType = null != e ? e : r
        }
        addRule(e) {
            let t;
            let {
                type: n,
                follows: a,
                validator: r
            } = e, {
                regex: s
            } = e;
            if ("^" !== s.source.charAt(0) && (s = new RegExp("^".concat(s.source), s.flags)), null != r && (t = new Map), null == a) {
                this._rules.push({
                    regex: s,
                    type: n,
                    validator: r,
                    cache: t
                });
                return
            }
            a.forEach(e => {
                null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                    regex: s,
                    type: n,
                    validator: r,
                    cache: t
                })
            })
        }
        tokenize(e) {
            let t, n = e,
                r = "",
                s = 0,
                u = [];
            for (; n.length > 0;) {
                let e = this._getMatch(n, t, s + r.length);
                null != e ? (null != r && "" !== r && u.push(new o(l(r.match(a), s), this._nonTokenType)), t = e, u.push(e), s += t.length + r.length, n = n.substring(t.length), r = "") : (r += n[0], n = n.substring(1))
            }
            return null != r && "" !== r && u.push(new o(l(r.match(a), s), this._nonTokenType)), u
        }
        clearCache() {
            for (let e in this._rules.forEach(e => {
                    var t;
                    return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                }), this._followers) {
                let t = this._followers[e];
                t.forEach(e => {
                    var t;
                    return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                })
            }
        }
        _getMatch(e, t, n) {
            let a;
            let r = null != t ? t.type : null;
            return (null == t ? void 0 : t.end) === n && (a = s(e, this._followers[String(r)], n)), null == a && (a = s(e, this._rules, n)), a
        }
        constructor(e = [], t) {
            this._rules = [], this._followers = {}, this._nonTokenType = r, this.reset(t), e.forEach(e => this.addRule(e))
        }
    }
    class o {
        get end() {
            return this.start + this.length
        }
        get length() {
            return this.match[0].length
        }
        valueOf() {
            return this.match[0]
        }
        getFullMatch() {
            return this.match[0]
        }
        getMatch() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return this.match[e]
        }
        setData(e, t) {
            null == this._data && (this._data = new Map), this._data.set(e, t)
        }
        getData(e) {
            if (null != this._data) return this._data.get(e)
        }
        constructor(e, t) {
            if (e instanceof o) this.match = [...e.match], this.start = e.start, this.type = e.type, null != e._data && (this._data = e._data);
            else if (null != e) {
                var n;
                this.match = [...e], this.start = "string" == typeof e ? 0 : null !== (n = e.index) && void 0 !== n ? n : 0, this.type = t
            } else this.match = [], this.start = 0, this.type = t
        }
    }
    u.NON_TOKEN_TYPE = r, u.Token = o;
    var E = u
}