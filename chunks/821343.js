function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        PAGE_SIZE: function() {
            return m
        },
        default: function() {
            return L
        }
    }), n("222007");
    var a = n("917351"),
        l = n.n(a),
        s = n("335710"),
        r = n("446674"),
        u = n("913144"),
        d = n("786742"),
        o = n("867965"),
        c = n("233069"),
        _ = n("42203"),
        f = n("660478"),
        h = n("449008"),
        E = n("299039"),
        g = n("755624");
    let m = 25,
        A = !1,
        T = !0,
        p = !1,
        S = !1,
        M = null,
        N = s.ThreadSortOrder.LATEST_ACTIVITY,
        v = [],
        C = 0;

    function O() {
        A = !1, T = !0, p = !1, S = !1, M = null, N = s.ThreadSortOrder.LATEST_ACTIVITY, i = new Set, C = 0, v = []
    }

    function I(e, t) {
        return t === s.ThreadSortOrder.LATEST_ACTIVITY ? f.default.lastMessageId(e.id) : e.id
    }

    function R() {
        if (null == M) return !1;
        let e = !p,
            t = _.default.getChannel(v[v.length - 1]),
            n = null == t ? null : I(t, N);
        v = l(_.default.getAllThreadsForParent(M)).filter(e => e.isArchivedThread()).filter(t => {
            var a;
            if (0 !== i.size && (null === (a = t.appliedTags) || void 0 === a ? void 0 : a.some(e => i.has(e))) !== !0) return !1;
            if (e || null == n) return !0;
            {
                let e = null == t ? null : I(t, N);
                return null != e && E.default.compare(e, n) >= 0
            }
        }).sort((e, t) => E.default.compare(I(e, N), I(t, N))).map(e => e.id).reverse().value()
    }

    function b(e) {
        if (!(v.indexOf(e) >= 0)) return !1;
        v = v.filter(t => t !== e)
    }
    let D = [];
    class y extends r.default.Store {
        initialize() {
            this.waitFor(_.default, g.default, f.default)
        }
        get canLoadMore() {
            return p && !A && !S
        }
        get nextOffset() {
            return C
        }
        get isInitialLoad() {
            return T
        }
        isLoading(e, t, n) {
            return M === e && N === t && (0, h.areSetsEqual)(i, n) ? A : (O(), !1)
        }
        getThreads(e, t, n) {
            return M === e && N === t && (0, h.areSetsEqual)(i, n) ? v : D
        }
    }
    y.displayName = "ArchivedThreadsStore";
    var L = new y(u.default, {
        CONNECTION_OPEN: O,
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return b(t.id)
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            return M === t.parent_id && !!(0, d.isForumPostPinned)(t.id) && void b(t.id)
        },
        CHANNEL_DELETE: function(e) {
            if (e.channel.id !== M) return !1;
            O()
        },
        LOAD_ARCHIVED_THREADS: function(e) {
            (e.channelId !== M || e.sortOrder !== N || !(0, h.areSetsEqual)(e.tagFilter, i)) && O(), M = e.channelId, N = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), A = !0, T = !1
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            if (e.channelId !== M || e.sortOrder !== N || !(0, h.areSetsEqual)(e.tagFilter, i)) return !1;
            let t = e.threads.filter(e => c.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
            v = v.concat(t);
            let n = _.default.getChannel(M);
            null != n && n.isForumLikeChannel() && (0, o.trackForumMorePostsLoaded)({
                guildId: n.guild_id,
                channelId: n.id,
                numArchivedThreads: v.length,
                hasMoreThreads: e.hasMore,
                filterTagIds: Array.from(e.tagFilter),
                sortOrder: e.sortOrder
            }), R(), p = e.hasMore, C = e.offset + m, A = !1, T = !1
        },
        LOAD_ARCHIVED_THREADS_FAIL: function(e) {
            if (e.channelId !== M || e.sortOrder !== N || !(0, h.areSetsEqual)(e.tagFilter, i)) return !1;
            A = !1, S = !0, T = !1
        },
        RESORT_THREADS: function(e) {
            return (null == M || null == e.channelId || M === e.channelId) && R()
        }
    })
}