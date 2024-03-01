function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        remainingPathFromDiscordHostMatch: function() {
            return F
        },
        default: function() {
            return x
        },
        parseQuestsEmbedCode: function() {
            return H
        },
        parseURLSafely: function() {
            return k
        },
        findCodedLink: function() {
            return Y
        }
    }), n("781738"), n("222007"), n("424973");
    var r, i, l, u, a, o, s = n("746379");
    n("355025");
    var d = n("9294");
    n("42793");
    var E = n("337543"),
        _ = n("655518"),
        c = n("253981"),
        I = n("139514"),
        S = n("49111");
    let T = /^\/([a-zA-Z0-9-]+)$/,
        f = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
        p = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
        N = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
        A = /^\/application-directory\/([0-9-]+)\/?$/,
        R = /^\/activities\/([0-9-]+)\/?$/,
        C = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
        L = /^\/channels\/([0-9]+)\/shop$/,
        O = /^\/clyde-profiles\/([0-9-]+)\/?$/,
        h = /^\/quests\/([0-9-]+)\/?$/,
        P = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
        g = w(window.GLOBAL_ENV.INVITE_HOST),
        m = w(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
        y = w(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(S.PRIMARY_DOMAIN)),
        D = w("//canary.".concat(S.PRIMARY_DOMAIN)),
        v = w("//ptb.".concat(S.PRIMARY_DOMAIN)),
        U = w("discordapp.com"),
        M = w("discord.com"),
        G = [_.default.escape(null !== (i = g.host) && void 0 !== i ? i : ""), _.default.escape(null !== (l = m.host) && void 0 !== l ? l : ""), _.default.escape(null !== (u = y.host) && void 0 !== u ? u : ""), _.default.escape(null !== (a = U.host) && void 0 !== a ? a : ""), _.default.escape(null !== (o = M.host) && void 0 !== o ? o : "")].filter(Boolean),
        B = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(G.join("|"), ")"), "g");

    function w(e) {
        if (null == e) return {
            host: null,
            pathPrefix: null
        };
        if (e.indexOf("/") >= 0) {
            let t = (0, s.parse)(e, void 0, !0);
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

    function b(e, t) {
        var n, r, i;
        if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
        let l = null !== (r = t.pathname) && void 0 !== r ? r : "",
            u = null !== (i = e.pathPrefix) && void 0 !== i ? i : "";
        if (!l.startsWith(u)) return null;
        let a = l.substring(u.length);
        return "" === a ? null : a
    }

    function F(e) {
        var t, n, r, i;
        return null !== (i = null !== (r = null !== (n = null !== (t = b(y, e)) && void 0 !== t ? t : b(D, e)) && void 0 !== n ? n : b(v, e)) && void 0 !== r ? r : b(U, e)) && void 0 !== i ? i : b(M, e)
    }

    function V(e) {
        var t, n, r, i;
        let l = k(e);
        if (null == l || null == l.pathname) return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
        let u = b(g, l),
            a = b(m, l),
            o = null !== (i = null !== (r = null !== (n = null !== (t = b(y, l)) && void 0 !== t ? t : b(D, l)) && void 0 !== n ? n : b(v, l)) && void 0 !== r ? r : b(U, l)) && void 0 !== i ? i : b(M, l);
        return {
            url: l,
            inviteHostRemainingPath: u,
            templateHostRemainingPath: a,
            primaryHostRemainingPath: o
        }
    }

    function x(e) {
        if (null == e) return [];
        let t = new Set,
            n = [],
            r = (e = e.replace(B, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e)).match(c.default.URL_REGEX),
            i = e.match(P);
        if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
        for (let e of r) {
            if (n.length >= 10) break;
            let {
                url: r,
                inviteHostRemainingPath: i,
                templateHostRemainingPath: l,
                primaryHostRemainingPath: u
            } = V(e);
            if (null == r || null == r.pathname) continue;
            let a = (e, r) => {
                !t.has(r) && (t.add(r), n.push({
                    type: e,
                    code: r
                }))
            };
            if ((null == i ? void 0 : i.match(T)) != null) {
                let e = (0, d.generateInviteKeyFromUrlParams)(i.substring(1), r.search);
                E.default.getInvite(e), a(I.CodedLinkType.INVITE, e)
            }(null == l ? void 0 : l.match(T)) != null && a(I.CodedLinkType.TEMPLATE, l.substring(1));
            let o = null == u ? void 0 : u.match(p);
            if (null != o) {
                let e = o[1].toUpperCase();
                if (e === I.CodedLinkType.INVITE) {
                    let e = (0, d.generateInviteKeyFromUrlParams)(o[2], r.search);
                    a(I.CodedLinkType.INVITE, e)
                } else a(e, o[2])
            }(null == u ? void 0 : u.match(f)) != null && a(I.CodedLinkType.CHANNEL_LINK, u.replace("/channels/", ""));
            let s = function(e) {
                if (null == e) return null;
                let t = e.match(N);
                return null != t && t.length >= 4 ? {
                    guildId: t[1],
                    guildEventId: t[2],
                    recurrenceId: t[4]
                } : null
            }(r.pathname);
            null != s && a(I.CodedLinkType.EVENT, "".concat(s.guildId, "-").concat(s.guildEventId) + (null != s.recurrenceId ? "-".concat(s.recurrenceId) : ""));
            let _ = null == u ? void 0 : u.match(A);
            if (null != _) {
                let e = _[1];
                a(I.CodedLinkType.APP_DIRECTORY_PROFILE, e)
            }
            let c = null == u ? void 0 : u.match(O);
            if (null != c) {
                let e = c[1];
                a(I.CodedLinkType.CLYDE_PROFILE, e)
            }
            let S = null == u ? void 0 : u.match(R);
            if (null != S) {
                let e = S[1];
                a(I.CodedLinkType.ACTIVITY_BOOKMARK, e)
            }
            let h = null == u ? void 0 : u.match(C);
            null != h && a(I.CodedLinkType.GUILD_PRODUCT, "".concat(h[1], "-").concat(h[2]));
            let P = null == u ? void 0 : u.match(L);
            null != P && a(I.CodedLinkType.SERVER_SHOP, P[1]);
            let g = H(e);
            null != g && a(I.CodedLinkType.QUESTS_EMBED, g)
        }
        return n
    }

    function H(e) {
        var t, n;
        let r = V(e),
            i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(h);
        return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null
    }

    function k(e) {
        try {
            return (0, s.parse)(e)
        } catch (e) {
            return null
        }
    }

    function Y(e) {
        return x(e)[0]
    }
}