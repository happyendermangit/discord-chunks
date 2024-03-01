function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return Q
        }
    }), n("222007"), n("424973");
    var s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        a = n("913144"),
        o = n("233069"),
        d = n("42203"),
        u = n("305961"),
        l = n("660478"),
        f = n("18494"),
        _ = n("299039"),
        c = n("689275"),
        g = n("755624"),
        m = n("984674"),
        h = n("724210");
    let v = {},
        E = {},
        p = {},
        y = {},
        T = {},
        C = {},
        I = null,
        S = {};

    function A() {
        for (let e in v = {}, T = {}, E = {}, p = {}, y = {}, I = f.default.getChannelId(), S) clearTimeout(S[e]);
        S = {}, c.default.forEachGuild(e => {
            N(e)
        }), O()
    }

    function D(e) {
        for (let t in delete v[e], delete T[e], delete E[e], delete p[e], delete y[e], N(e), p[e]) b(e, t)
    }

    function N(e) {
        let t = c.default.getThreadsForGuild(e);
        for (let e in t)
            for (let n in t[e]) {
                F(n);
                let e = d.default.getChannel(n);
                if (null == e) continue;
                let t = g.default.joinTimestamp(n);
                if (null != t) {
                    let n = {
                            channel: e,
                            joinTimestamp: t.getTime()
                        },
                        {
                            isUnread: s,
                            isRelevant: i,
                            isTimedRelevant: r
                        } = U(e);
                    H(v, e, n, !1), H(T, e, i ? n : null, !1), H(E, e, s ? n : null, !1), r && G(e, !0)
                } else {
                    H(p, e, e, !1);
                    let t = l.default.isForumPostUnread(e.id);
                    H(y, e, t ? e : null, !1)
                }
            }
    }

    function O() {
        for (let e in C = {}, p)
            for (let t in p[e]) b(e, t)
    }

    function P(e) {
        let t = d.default.getBasicChannel(e);
        null != t && o.THREADED_CHANNEL_TYPES.has(t.type) && b(t.guild_id, t.id)
    }

    function b(e, t) {
        let n = d.default.getChannel(t);
        if (null == n || !n.isForumLikeChannel()) return;
        if (null == C[e] && (C[e] = {}), C[e][t] = 0, null == p[e] || null == p[e][t]) return;
        let s = u.default.getGuild(e);
        if (null == s) return;
        let i = l.default.getTrackedAckMessageId(t);
        if (null == i) {
            let e = Date.now();
            null != s.joinedAt && (s.joinedAt instanceof Date ? e = s.joinedAt.getTime() : "string" == typeof s.joinedAt && (e = new Date(s.joinedAt).getTime())), i = _.default.fromTimestamp(e)
        }
        for (let n in p[e][t]) t === I ? l.default.isNewForumThread(n, t, s) && C[e][t]++ : _.default.compare(n, i) > 0 && !l.default.hasOpenedThread(n) && C[e][t]++
    }

    function V(e, t, n) {
        if (null == t) return !1;
        let s = d.default.getChannel(n),
            i = g.default.joinTimestamp(n);
        if (null != s && c.default.isActive(e, t, n)) {
            if (null != i) {
                let e = {
                        channel: s,
                        joinTimestamp: i.getTime()
                    },
                    {
                        isUnread: t,
                        isRelevant: n,
                        isTimedRelevant: r
                    } = U(s);
                H(v, s, e, !0), H(T, s, n ? e : null, !0), H(E, s, t ? e : null, !0), H(p, s, null, !0), H(y, s, null, !0), G(s, r)
            } else {
                let e = l.default.isForumPostUnread(s.id);
                H(v, s, null, !0), H(E, s, null, !0), H(T, s, null, !0), H(p, s, s, !0), H(y, s, e ? s : null, !0), F(s.id)
            }
            b(e, t)
        } else B(v, e, t, n), B(T, e, t, n), B(E, e, t, n), B(p, e, t, n), B(y, e, t, n), F(n), b(e, t)
    }

    function R(e) {
        return V(e.channel.guild_id, e.channel.parent_id, e.channel.id)
    }

    function k(e) {
        let t = d.default.getChannel(e.id);
        return !!(null != t && c.default.isActive(e.guildId, t.parent_id, e.id)) && V(t.guild_id, t.parent_id, t.id)
    }

    function M(e) {
        let t = d.default.getChannel(e.channelId);
        if (null == t) w();
        else {
            let {
                guild_id: e,
                parent_id: s
            } = t;
            if (!o.THREAD_CHANNEL_TYPES.has(t.type)) {
                var n;
                return !!(Number(null === (n = C[e]) || void 0 === n ? void 0 : n[t.id]) > 0) && (b(e, t.id), !0)
            }
            if (null == s) return !1;
            if (x(v, t)) {
                let {
                    isUnread: n,
                    isRelevant: i,
                    isTimedRelevant: r
                } = U(t);
                G(t, r);
                let a = x(E, t),
                    o = x(T, t);
                if (n === a && i === o) return !1;
                let d = v[e][s][t.id],
                    u = n ? d : null,
                    l = i ? d : null;
                H(E, t, u, !0), H(T, t, l, !0), b(e, s)
            } else {
                let e = x(y, t),
                    n = l.default.isForumPostUnread(t.id);
                if (n === e) return !1;
                H(y, t, n ? t : null, !0)
            }
        }
    }

    function w() {
        for (let e in E = {}, T = {}, v)
            for (let t in v[e])
                for (let n in v[e][t]) {
                    let s = v[e][t][n],
                        {
                            isUnread: i,
                            isRelevant: r,
                            isTimedRelevant: a
                        } = U(s.channel);
                    i && H(E, s.channel, s, !1), r && H(T, s.channel, s, !1), G(s.channel, a)
                }
        for (let e in y = {}, p)
            for (let t in p[e])
                for (let n in p[e][t]) {
                    let s = p[e][t][n],
                        i = l.default.isForumPostUnread(n);
                    i && H(y, s, s, !1)
                }
        O()
    }

    function L() {
        let e = I;
        if ((I = f.default.getChannelId()) === e) return !1;
        P(e), P(I)
    }

    function U(e) {
        let t = l.default.getMentionCount(e.id) > 0,
            n = l.default.hasUnread(e.id) && (!g.default.isMuted(e.id) || t),
            s = e.hasFlag(h.ChannelFlags.PINNED),
            i = e.isActiveThread(),
            r = i && (0, m.default)(e) > Date.now();
        return {
            isUnread: (i || s) && n,
            isRelevant: r || s || n,
            isTimedRelevant: r
        }
    }

    function G(e, t) {
        F(e.id), t && function(e) {
            S[e.id] = setTimeout(() => {
                let t = d.default.getChannel(e.id);
                null != t && a.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t
                })
            }, (0, m.default)(e) - Date.now() + 1)
        }(e)
    }

    function F(e) {
        e in S && (clearTimeout(S[e]), delete S[e])
    }

    function H(e, t, n, s) {
        let {
            guild_id: r,
            parent_id: a,
            id: o
        } = t;
        null != r && null != a && null != o && (!(r in e) && (e[r] = {}), !(a in e[r]) && (e[r][a] = {}), s && (e[r] = {
            ...e[r],
            [a]: {
                ...e[r][a]
            }
        }), null === n ? (delete e[r][a][o], i.isEmpty(e[r][a]) && delete e[r][a]) : e[r][a][o] = n)
    }

    function B(e, t, n, s) {
        if (null != t && null != n && null != s) Y(e, t, n, s) && (e[t] = {
            ...e[t],
            [n]: {
                ...e[t][n]
            }
        }, delete e[t][n][s], i.isEmpty(e[t][n]) && delete e[t][n])
    }

    function x(e, t) {
        return Y(e, t.guild_id, t.parent_id, t.id)
    }

    function Y(e, t, n, s) {
        return t in e && n in e[t] && s in e[t][n]
    }
    let j = {},
        K = {},
        W = {},
        z = {},
        q = {};
    class X extends r.default.Store {
        initialize() {
            this.waitFor(c.default, d.default, g.default, l.default), this.syncWith([f.default], L)
        }
        hasActiveJoinedUnreadThreads(e, t) {
            return e in E && t in E[e]
        }
        getActiveUnjoinedThreadsForParent(e, t) {
            var n;
            return e in p && null !== (n = p[e][t]) && void 0 !== n ? n : z
        }
        getActiveJoinedThreadsForParent(e, t) {
            var n;
            return e in v && null !== (n = v[e][t]) && void 0 !== n ? n : W
        }
        getActiveJoinedThreadsForGuild(e) {
            var t;
            return null !== (t = v[e]) && void 0 !== t ? t : j
        }
        getActiveJoinedUnreadThreadsForGuild(e) {
            var t;
            return null !== (t = E[e]) && void 0 !== t ? t : j
        }
        getActiveJoinedUnreadThreadsForParent(e, t) {
            var n;
            return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : W
        }
        getActiveJoinedRelevantThreadsForGuild(e) {
            var t;
            return null !== (t = T[e]) && void 0 !== t ? t : j
        }
        getActiveJoinedRelevantThreadsForParent(e, t) {
            var n;
            return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : W
        }
        getActiveUnjoinedThreadsForGuild(e) {
            var t;
            return null !== (t = p[e]) && void 0 !== t ? t : K
        }
        getActiveUnjoinedUnreadThreadsForGuild(e) {
            var t;
            return null !== (t = y[e]) && void 0 !== t ? t : j
        }
        getActiveUnjoinedUnreadThreadsForParent(e, t) {
            var n;
            return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : W
        }
        getNewThreadCountsForGuild(e) {
            var t;
            return null !== (t = C[e]) && void 0 !== t ? t : q
        }
        computeAllActiveJoinedThreads(e) {
            let t = [];
            for (let n in v)
                if (n === e || null == e)
                    for (let e in v[n])
                        for (let s in v[n][e]) t.push(v[n][e][s].channel);
            return t
        }
        getNewThreadCount(e, t) {
            var n, s;
            return null !== (s = null === (n = C[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== s ? s : 0
        }
        getActiveThreadCount(e, t) {
            var n, s, r, a;
            let o = i.size(null !== (r = null === (n = v[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : {}),
                d = i.size(null !== (a = null === (s = p[e]) || void 0 === s ? void 0 : s[t]) && void 0 !== a ? a : {});
            return o + d
        }
    }
    X.displayName = "ActiveJoinedThreadsStore";
    var Q = new X(a.default, {
        CONNECTION_OPEN: A,
        OVERLAY_INITIALIZE: A,
        THREAD_LIST_SYNC: function(e) {
            let {
                guildId: t
            } = e;
            return D(t)
        },
        LOAD_THREADS_SUCCESS: A,
        LOAD_ARCHIVED_THREADS_SUCCESS: A,
        SEARCH_FINISH: A,
        MOD_VIEW_SEARCH_FINISH: A,
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return D(t.id)
        },
        GUILD_DELETE: A,
        CURRENT_USER_UPDATE: A,
        THREAD_CREATE: R,
        THREAD_UPDATE: R,
        THREAD_DELETE: R,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            for (let e of t)
                if (e.isNSFW() !== function(e, t) {
                        if (null == t) return !1;
                        let n = v[e],
                            s = null == n ? null : n[t];
                        if (null != s) {
                            for (let e in s)
                                if (s[e].channel.isNSFW()) return !0
                        }
                        let i = p[e],
                            r = null == i ? null : i[t];
                        if (null != r) {
                            for (let e in r)
                                if (r[e].isNSFW()) return !0
                        }
                        return !1
                    }(e.guild_id, e.parent_id)) {
                    A();
                    return
                } return !1
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e, n = !1;
            return null != t.guild_id && null != t.parent_id && (t.guild_id in v && t.parent_id in v[t.guild_id] && (delete v[t.guild_id][t.parent_id], n = !0), t.guild_id in E && t.parent_id in E[t.guild_id] && (delete E[t.guild_id][t.parent_id], n = !0), t.guild_id in T && t.parent_id in T[t.guild_id] && (_.default.keys(T[t.guild_id][t.parent_id]).forEach(F), delete T[t.guild_id][t.parent_id], n = !0), t.guild_id in p && t.parent_id in p[t.guild_id] && (delete p[t.guild_id][t.parent_id], n = !0), t.guild_id in y && t.parent_id in y[t.guild_id] && (delete y[t.guild_id][t.parent_id], n = !0), n && b(t.guild_id, t.parent_id)), n
        },
        THREAD_MEMBER_UPDATE: k,
        THREAD_MEMBERS_UPDATE: k,
        LOAD_MESSAGES_SUCCESS: M,
        MESSAGE_CREATE: M,
        MESSAGE_DELETE: M,
        MESSAGE_DELETE_BULK: M,
        MESSAGE_ACK: M,
        CHANNEL_ACK: M,
        CHANNEL_LOCAL_ACK: M,
        CHANNEL_SELECT: function(e) {
            M(e), L()
        },
        PASSIVE_UPDATE_V1: function(e) {
            null != e.channels && w()
        },
        WINDOW_FOCUS: w,
        UPDATE_CHANNEL_DIMENSIONS: w,
        DRAWER_OPEN: w,
        DRAWER_CLOSE: w,
        BULK_ACK: w
    })
}