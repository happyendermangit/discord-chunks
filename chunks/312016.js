function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        remainingPathFromDiscordHostMatch: function() {
            return G
        },
        default: function() {
            return x
        },
        parseQuestsEmbedCode: function() {
            return B
        },
        parseURLSafely: function() {
            return H
        },
        findCodedLink: function() {
            return Y
        }
    }), n("781738"), n("222007"), n("424973");
    var i, s, r, a, o, l, u = n("746379");
    n("355025");
    var d = n("9294");
    n("42793");
    var c = n("337543"),
        f = n("655518"),
        _ = n("253981"),
        h = n("139514"),
        E = n("49111");
    let g = /^\/([a-zA-Z0-9-]+)$/,
        m = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
        p = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
        S = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
        v = /^\/application-directory\/([0-9-]+)\/?$/,
        T = /^\/activities\/([0-9-]+)\/?$/,
        I = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
        C = /^\/channels\/([0-9]+)\/shop$/,
        A = /^\/clyde-profiles\/([0-9-]+)\/?$/,
        y = /^\/quests\/([0-9-]+)\/?$/,
        N = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
        R = k(window.GLOBAL_ENV.INVITE_HOST),
        O = k(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
        D = k(null !== (i = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== i ? i : "//canary.".concat(E.PRIMARY_DOMAIN)),
        P = k("//canary.".concat(E.PRIMARY_DOMAIN)),
        M = k("//ptb.".concat(E.PRIMARY_DOMAIN)),
        L = k("discordapp.com"),
        b = k("discord.com"),
        U = [f.default.escape(null !== (s = R.host) && void 0 !== s ? s : ""), f.default.escape(null !== (r = O.host) && void 0 !== r ? r : ""), f.default.escape(null !== (a = D.host) && void 0 !== a ? a : ""), f.default.escape(null !== (o = L.host) && void 0 !== o ? o : ""), f.default.escape(null !== (l = b.host) && void 0 !== l ? l : "")].filter(Boolean),
        w = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(U.join("|"), ")"), "g");

    function k(e) {
        if (null == e) return {
            host: null,
            pathPrefix: null
        };
        if (e.indexOf("/") >= 0) {
            let t = (0, u.parse)(e, void 0, !0);
            return {
                host: t.host,
                pathPrefix: t.pathname
            }
        }
        return {
            host: e,
            pathPrefix: null
        }
    }

    function V(e, t) {
        var n, i, s;
        if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
        let r = null !== (i = t.pathname) && void 0 !== i ? i : "",
            a = null !== (s = e.pathPrefix) && void 0 !== s ? s : "";
        if (!r.startsWith(a)) return null;
        let o = r.substring(a.length);
        return "" === o ? null : o
    }

    function G(e) {
        var t, n, i, s;
        return null !== (s = null !== (i = null !== (n = null !== (t = V(D, e)) && void 0 !== t ? t : V(P, e)) && void 0 !== n ? n : V(M, e)) && void 0 !== i ? i : V(L, e)) && void 0 !== s ? s : V(b, e)
    }

    function F(e) {
        var t, n, i, s;
        let r = H(e);
        if (null == r || null == r.pathname) return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
        let a = V(R, r),
            o = V(O, r),
            l = null !== (s = null !== (i = null !== (n = null !== (t = V(D, r)) && void 0 !== t ? t : V(P, r)) && void 0 !== n ? n : V(M, r)) && void 0 !== i ? i : V(L, r)) && void 0 !== s ? s : V(b, r);
        return {
            url: r,
            inviteHostRemainingPath: a,
            templateHostRemainingPath: o,
            primaryHostRemainingPath: l
        }
    }

    function x(e) {
        if (null == e) return [];
        let t = new Set,
            n = [],
            i = (e = e.replace(w, (e, t, n, i) => null == n ? "".concat(t, "http://").concat(i) : e)).match(_.default.URL_REGEX),
            s = e.match(N);
        if (null == (i = (null != i ? i : []).concat(null != s ? s : [])) || 0 === i.length) return [];
        for (let e of i) {
            if (n.length >= 10) break;
            let {
                url: i,
                inviteHostRemainingPath: s,
                templateHostRemainingPath: r,
                primaryHostRemainingPath: a
            } = F(e);
            if (null == i || null == i.pathname) continue;
            let o = (e, i) => {
                !t.has(i) && (t.add(i), n.push({
                    type: e,
                    code: i
                }))
            };
            if ((null == s ? void 0 : s.match(g)) != null) {
                let e = (0, d.generateInviteKeyFromUrlParams)(s.substring(1), i.search);
                c.default.getInvite(e), o(h.CodedLinkType.INVITE, e)
            }(null == r ? void 0 : r.match(g)) != null && o(h.CodedLinkType.TEMPLATE, r.substring(1));
            let l = null == a ? void 0 : a.match(p);
            if (null != l) {
                let e = l[1].toUpperCase();
                if (e === h.CodedLinkType.INVITE) {
                    let e = (0, d.generateInviteKeyFromUrlParams)(l[2], i.search);
                    o(h.CodedLinkType.INVITE, e)
                } else o(e, l[2])
            }(null == a ? void 0 : a.match(m)) != null && o(h.CodedLinkType.CHANNEL_LINK, a.replace("/channels/", ""));
            let u = function(e) {
                if (null == e) return null;
                let t = e.match(S);
                return null != t && t.length >= 4 ? {
                    guildId: t[1],
                    guildEventId: t[2],
                    recurrenceId: t[4]
                } : null
            }(i.pathname);
            null != u && o(h.CodedLinkType.EVENT, "".concat(u.guildId, "-").concat(u.guildEventId) + (null != u.recurrenceId ? "-".concat(u.recurrenceId) : ""));
            let f = null == a ? void 0 : a.match(v);
            if (null != f) {
                let e = f[1];
                o(h.CodedLinkType.APP_DIRECTORY_PROFILE, e)
            }
            let _ = null == a ? void 0 : a.match(A);
            if (null != _) {
                let e = _[1];
                o(h.CodedLinkType.CLYDE_PROFILE, e)
            }
            let E = null == a ? void 0 : a.match(T);
            if (null != E) {
                let e = E[1];
                o(h.CodedLinkType.ACTIVITY_BOOKMARK, e)
            }
            let y = null == a ? void 0 : a.match(I);
            null != y && o(h.CodedLinkType.GUILD_PRODUCT, "".concat(y[1], "-").concat(y[2]));
            let N = null == a ? void 0 : a.match(C);
            null != N && o(h.CodedLinkType.SERVER_SHOP, N[1]);
            let R = B(e);
            null != R && o(h.CodedLinkType.QUESTS_EMBED, R)
        }
        return n
    }

    function B(e) {
        var t, n;
        let i = F(e),
            s = null == i ? void 0 : null === (t = i.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(y);
        return null !== (n = null == s ? void 0 : s[1]) && void 0 !== n ? n : null
    }

    function H(e) {
        try {
            return (0, u.parse)(e)
        } catch (e) {
            return null
        }
    }

    function Y(e) {
        return x(e)[0]
    }
}