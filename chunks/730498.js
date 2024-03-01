function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PrivateThreadMode: function() {
            return i
        },
        usePrivateThreadMode: function() {
            return D
        },
        getIsPrivate: function() {
            return R
        },
        getDefaultThreadName: function() {
            return L
        },
        useCreateThreadCommon: function() {
            return P
        },
        createThread: function() {
            return U
        },
        useCreateForumPostCommon: function() {
            return F
        }
    }), n("781738"), n("424973"), n("222007");
    var i, l, a = n("884691"),
        o = n("872717"),
        r = n("913144"),
        s = n("404118"),
        u = n("295426"),
        d = n("819689"),
        c = n("81594"),
        p = n("670902"),
        f = n("867965"),
        m = n("884351"),
        _ = n("804888"),
        I = n("42203"),
        C = n("474643"),
        T = n("377253"),
        A = n("401848"),
        E = n("718517"),
        N = n("568734"),
        g = n("299039"),
        h = n("252862"),
        S = n("300322"),
        O = n("24337"),
        M = n("648564"),
        v = n("49111"),
        y = n("782340");

    function D(e) {
        let t = (0, S.useCanStartPublicThread)(e),
            n = (0, S.useCanStartPrivateThread)(e);
        return n ? t ? 2 : 3 : 1
    }

    function R(e, t) {
        var n;
        if (3 === t) return !0;
        return null !== (n = e.isPrivate) && void 0 !== n && n
    }

    function L(e, t) {
        var n, i, l, a;
        let o = null == t ? null : T.default.getMessage(e.id, t),
            r = null !== (l = null == o ? void 0 : null === (i = o.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== l ? l : "";
        if ("" !== r) return r.length > 40 ? r.substring(0, 40) + "..." : r;
        {
            let t = m.default.unparse(null !== (a = null == o ? void 0 : o.content) && void 0 !== a ? a : "", e.id, !0),
                n = (0, O.default)(t.split("\n")[0], !0);
            n = n.replace(/^[ #-]+/, "");
            let i = [];
            for (;;) {
                let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
                if (null == e || null == e.index) {
                    i.push(n);
                    break
                }
                i.push(n.substring(0, e.index)), i.push(e[0]), n = n.substring(e.index + e[0].length)
            }
            let l = i[0];
            for (let e = 1; e < i.length; e++) {
                let t = l + i[e];
                if (t.length > 40) break;
                l = t
            }
            return l.length > 40 && (l = l.substring(0, 40) + "..."), l
        }
    }

    function P(e) {
        let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            privateThreadMode: l,
            location: r,
            onThreadCreated: s,
            useDefaultThreadName: p,
            uploadHandler: f
        } = e;
        return a.useCallback(async (e, a, _) => {
            var T;
            let A = null == n,
                E = R(i, l),
                N = null !== (T = i.name) && void 0 !== T ? T : "";
            if ("" === N && p) {
                let e = L(t, n);
                N = "" !== e ? e : y.default.Messages.THREAD
            }
            let S = (0, h.getAutoArchiveDuration)(t),
                O = I.default.getChannel(g.default.castMessageIdAsChannelId(n)),
                M = await b(t, () => {
                    let e = null != n ? v.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : v.Endpoints.CHANNEL_THREADS(t.id);
                    return o.default.post({
                        url: e,
                        body: {
                            name: N,
                            type: E ? v.ChannelTypes.PRIVATE_THREAD : t.type === v.ChannelTypes.GUILD_ANNOUNCEMENT ? v.ChannelTypes.ANNOUNCEMENT_THREAD : v.ChannelTypes.PUBLIC_THREAD,
                            auto_archive_duration: S,
                            location: r
                        }
                    })
                });
            M !== O && (u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), null == s || s(M), (A || e.length > 0 || null != a && a.length > 0 || null != _ && _.length > 0) && function(e, t, n, i, l) {
                if (null != l && null != i && i.length > 0) l(e, i, t, n);
                else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
                else d.default.sendMessage(e.id, m.default.parse(e, t))
            }(M, e, a, _, f)), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage)
        }, [t, n, i, s, l, r, p, f])
    }

    function U(e, t, n, i, l) {
        return b(e, () => o.default.post({
            url: v.Endpoints.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: i,
                location: l
            }
        }))
    }

    function F(e) {
        let {
            parentChannel: t,
            name: n,
            appliedTags: i,
            onThreadCreated: l,
            upload: r
        } = e;
        return a.useCallback(async (e, a, s) => {
            let d = 0,
                [p, m] = (0, _.default)(e);
            p && (e = m, d = (0, N.addFlag)(d, v.MessageFlags.SUPPRESS_NOTIFICATIONS));
            let I = (0, h.getAutoArchiveDuration)(t, null),
                T = v.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                A = {
                    name: n,
                    auto_archive_duration: I,
                    applied_tags: i,
                    message: {
                        content: e,
                        sticker_ids: a,
                        flags: 0 !== d ? d : void 0
                    }
                },
                E = await b(t, () => null != s && s.length > 0 ? r(T, A, s) : o.default.post({
                    url: T,
                    body: A
                }));
            return u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
                guildId: t.guild_id,
                channelId: t.id,
                postId: E.id
            }), null == l || l(E), E
        }, [t, n, l, i, r])
    }(l = i || (i = {}))[l.Disabled = 1] = "Disabled", l[l.Enabled = 2] = "Enabled", l[l.PrivateOnly = 3] = "PrivateOnly";
    async function b(e, t) {
        let n;
        let i = e.isForumLikeChannel();
        try {
            n = await t(), null == n.body ? s.default.show({
                title: y.default.Messages.ERROR,
                body: y.default.Messages.ERROR_OCCURRED_TRY_AGAIN
            }) : (r.default.dispatch({
                type: "SLOWMODE_RESET_COOLDOWN",
                slowmodeType: A.SlowmodeType.CreateThread,
                channelId: e.id
            }), r.default.dispatch({
                type: "THREAD_CREATE_LOCAL",
                channelId: n.body.id
            }))
        } catch (t) {
            var l, a, o, u, d, c;
            if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === v.AbortCodes.TOO_MANY_THREADS) s.default.show({
                title: i ? y.default.Messages.CANNOT_CREATE_FORUM_POST : y.default.Messages.CANNOT_CREATE_THREAD,
                body: i ? y.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : y.default.Messages.TOO_MANY_THREADS_MESSAGE
            });
            else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === v.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) s.default.show({
                title: y.default.Messages.CANNOT_CREATE_THREAD,
                body: y.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
            });
            else if ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === v.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
                n > 0 && r.default.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: A.SlowmodeType.CreateThread,
                    cooldownMs: n * E.default.Millis.SECOND
                })
            } else if (429 === t.status) s.default.show({
                title: i ? y.default.Messages.CANNOT_CREATE_FORUM_POST : y.default.Messages.CANNOT_CREATE_THREAD,
                body: y.default.Messages.RATE_LIMITED
            });
            else if (M.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
            else {
                if (M.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
                    null == t.body && n(), p.default.addConditionalChangeListener(() => {
                        let t = p.default.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != t) {
                            let i = I.default.getChannel(t);
                            return r.default.wait(() => {
                                null == i ? n() : e(i)
                            }), !1
                        }
                    })
                });
                s.default.show({
                    title: y.default.Messages.ERROR,
                    body: y.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                })
            }
        }
        return new Promise((e, t) => {
            null == n.body && t(), I.default.addConditionalChangeListener(() => {
                let t = I.default.getChannel(n.body.id);
                if (null != t) return r.default.wait(() => {
                    e(t)
                }), !1
            })
        })
    }
}