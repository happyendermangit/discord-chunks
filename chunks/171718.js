function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        init: function() {
            return S
        },
        getToken: function() {
            return v
        },
        setToken: function() {
            return T
        },
        hideToken: function() {
            return I
        },
        showToken: function() {
            return A
        },
        removeToken: function() {
            return C
        },
        encryptAndStoreTokens: function() {
            return y
        }
    }), n("222007"), n("808653");
    var r = n("95410"),
        a = n("843455");
    let o = "dQw4w9WgXcQ:";

    function l(e) {
        return [...e].reduce((e, t) => {
            let [n, i] = t;
            return e[n] = i, e
        }, {})
    }
    let u = null,
        d = window.DiscordNative;
    null != d && (u = d.safeStorage);
    let c = !1,
        _ = {},
        f = {},
        E = !1,
        h = !1;

    function g() {
        if (E) {
            r.default.remove(a.TOKEN_KEY), r.default.remove(a.TOKENS_KEY);
            return
        }
        null != s ? r.default.set(a.TOKEN_KEY, s) : r.default.remove(a.TOKEN_KEY), r.default.set(a.TOKENS_KEY, f)
    }

    function m(e) {
        return null == e || 0 === e.length ? {
            decryptedToken: null,
            wasEncrypted: !1
        } : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(o) ? {
            decryptedToken: u.decryptString(e.substring(o.length)),
            wasEncrypted: !0
        } : {
            decryptedToken: e,
            wasEncrypted: !1
        }
    }

    function p(e) {
        return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(o) ? "".concat(o).concat(u.encryptString(e)) : e
    }

    function S() {
        if (h) return;
        s = r.default.get(a.TOKEN_KEY), f = r.default.get(a.TOKENS_KEY) || {};
        let {
            decryptedToken: e,
            wasEncrypted: t
        } = m(s);
        c = t, i = e, _ = l(Object.entries(f).map(e => {
            let [t, n] = e, {
                decryptedToken: i,
                wasEncrypted: s
            } = m(n);
            return c = s || c, [t, i]
        }).filter(e => {
            let [t, n] = e;
            return null != n
        })), h = !0
    }

    function v(e) {
        return (S(), null != e) ? _[e] : i
    }

    function T(e, t) {
        if (null == e) {
            C(t);
            return
        }
        i = e, null != t && (_[t] = e), c ? y() : (s = i, f = _, g())
    }

    function I() {
        !E && (E = !0, g())
    }

    function A() {
        E && (E = !1, g())
    }

    function C(e) {
        let t = i;
        null != e && (t = _[e], delete _[e], delete f[e]), t === i && (i = null, s = null), g()
    }

    function y() {
        (null == u ? void 0 : u.isEncryptionAvailable()) ? (null != i && (s = p(i)), f = l(Object.entries(_).map(e => {
            let [t, n] = e;
            return [t, p(n)]
        })), c = !0) : (s = i, f = _), g()
    }
}