function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("222007"), n("424973");
    var s = n("714617"),
        i = n.n(s),
        r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        d = n("913144"),
        u = n("309570"),
        l = n("32346"),
        f = n("299039"),
        _ = n("271938"),
        c = n("697218"),
        g = n("49111");
    let m = Object.freeze([]),
        h = {},
        v = {},
        E = {},
        p = {},
        y = {};

    function T(e, t) {
        let n = h[e];
        return null != n ? n[t] : null
    }
    let C = e => {
            switch (e.type) {
                case g.ActivityTypes.CUSTOM_STATUS:
                    return 4;
                case g.ActivityTypes.COMPETING:
                    return 3;
                case g.ActivityTypes.STREAMING:
                    return 2;
                case g.ActivityTypes.PLAYING:
                    return 1;
                default:
                    return 0
            }
        },
        I = e => (0, u.default)(e) ? 1 : 0;

    function S(e, t) {
        var n, s, i, r, a;
        return n = e, C(t) - C(n) || (s = e, I(t) - I(s)) || (i = e, (null !== (r = t.created_at) && void 0 !== r ? r : 0) - (null !== (a = i.created_at) && void 0 !== a ? a : 0))
    }

    function A(e) {
        if (delete v[e], delete E[e], delete p[e], null == h[e]) return;
        let [t] = a.sortBy(h[e], e => -e.timestamp);
        t.status !== g.StatusTypes.OFFLINE ? (v[e] = t.status, E[e] = t.activities, null != t.clientStatus && (p[e] = t.clientStatus)) : a.every(h[e], e => e.status === g.StatusTypes.OFFLINE) && delete h[e]
    }

    function D(e) {
        let t = h[e];
        if (null == t) return;
        let n = a.maxBy(Object.values(t), e => e.timestamp);
        n.status !== g.StatusTypes.OFFLINE && (v[e] = n.status, E[e] = n.activities, null != n.clientStatus && (p[e] = n.clientStatus))
    }

    function N(e) {
        let {
            guildId: t,
            userId: n,
            status: s,
            clientStatus: r,
            activities: a
        } = e;
        if (n === _.default.getId()) return !1;
        let o = h[n];
        if (null == o) {
            if (s === g.StatusTypes.OFFLINE) return !1;
            o = h[n] = {}
        }
        if (s === g.StatusTypes.OFFLINE) o[t] = {
            status: s,
            clientStatus: r,
            activities: m,
            timestamp: Date.now()
        };
        else {
            let e = a.length > 1 ? [...a].sort(S) : a,
                n = o[t];
            a = null != n && i(n.activities, e) ? n.activities : e, o[t] = {
                status: s,
                clientStatus: r,
                activities: a,
                timestamp: Date.now()
            }
        }
        return delete y[n], A(n), !0
    }

    function O(e) {
        let {
            guildId: t,
            userId: n,
            status: s,
            clientStatus: i,
            activities: r,
            timestamp: a
        } = e;
        if (n === _.default.getId()) return;
        let o = h[n];
        if (null == o) {
            if (s === g.StatusTypes.OFFLINE) return;
            o = h[n] = {}
        }
        if (s === g.StatusTypes.OFFLINE) o[t] = {
            status: s,
            clientStatus: i,
            activities: m,
            timestamp: Date.now()
        };
        else {
            let e = r.length > 1 ? [...r].sort(S) : r;
            o[t] = {
                status: s,
                clientStatus: i,
                activities: e,
                timestamp: a
            }
        }
    }

    function P(e, t) {
        if (t === _.default.getId()) return !1;
        let n = h[t];
        if (null == n || null == n[e]) return !1;
        delete n[e], 0 === Object.keys(n).length && delete h[t], A(t)
    }

    function b(e) {
        for (let t of f.default.keys(h)) P(e, t)
    }
    class V extends o.default.Store {
        initialize() {
            this.waitFor(_.default, l.default)
        }
        setCurrentUserOnConnectionOpen(e, t) {
            v[_.default.getId()] = e, E[_.default.getId()] = t
        }
        getStatus(e) {
            var t, n;
            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.StatusTypes.OFFLINE,
                r = c.default.getUser(e);
            if (null != r && r.hasFlag(g.UserFlags.BOT_HTTP_INTERACTIONS) && (i = g.StatusTypes.UNKNOWN), null == r ? void 0 : r.isClyde()) return g.StatusTypes.ONLINE;
            if (null == s) return null !== (t = v[e]) && void 0 !== t ? t : i;
            let a = T(e, s);
            return null !== (n = null == a ? void 0 : a.status) && void 0 !== n ? n : i
        }
        getActivities(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (null == t) {
                var n;
                return null !== (n = E[e]) && void 0 !== n ? n : m
            }
            let s = T(e, t);
            return null == s || null == s.activities ? m : s.activities
        }
        getPrimaryActivity(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = this.getActivities(e, t).filter(e => e.type !== g.ActivityTypes.HANG_STATUS);
            return n[0]
        }
        getAllApplicationActivities(e) {
            let t = [];
            for (let n of f.default.keys(E)) {
                let s = E[n];
                for (let i of s) i.application_id === e && t.push({
                    userId: n,
                    activity: i
                })
            }
            return t
        }
        getApplicationActivity(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this.findActivity(e, e => e.application_id === t, n)
        }
        findActivity(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this.getActivities(e, n).find(t)
        }
        getActivityMetadata(e) {
            return y[e]
        }
        getUserIds() {
            return f.default.keys(E)
        }
        isMobileOnline(e) {
            let t = p[e];
            return null != t && t[g.ClientTypes.MOBILE] === g.StatusTypes.ONLINE && t[g.ClientTypes.DESKTOP] !== g.StatusTypes.ONLINE
        }
        getClientStatus(e) {
            return p[e]
        }
        getState() {
            return {
                presencesForGuilds: h,
                statuses: v,
                activities: E,
                activityMetadata: y,
                clientStatuses: p
            }
        }
    }
    V.displayName = "PresenceStore";
    var R = new V(d.default, {
        CONNECTION_OPEN: function() {
            return !0
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                guilds: t,
                presences: n
            } = e, s = _.default.getId();
            h = {}, y = {}, v = {
                [s]: v[s]
            }, E = {
                [s]: E[s]
            }, p = {
                [s]: {}
            };
            let i = new Set,
                r = Date.now();
            t.forEach(e => {
                e.presences.forEach(t => {
                    let {
                        user: n,
                        status: s,
                        clientStatus: a,
                        activities: o
                    } = t;
                    O({
                        guildId: e.id,
                        userId: n.id,
                        status: s,
                        clientStatus: a,
                        activities: o,
                        timestamp: r
                    }), i.add(n.id)
                })
            }), n.forEach(e => {
                let {
                    user: t,
                    status: n,
                    clientStatus: s,
                    activities: a
                } = e;
                null != t && (O({
                    guildId: g.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: s,
                    activities: a,
                    timestamp: r
                }), i.add(t.id))
            }), i.delete(s), i.forEach(D)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                presences: t
            } = e;
            h = t.presencesForGuilds, v = t.statuses, E = t.activities, y = t.activityMetadata
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            t.presences.forEach(e => {
                let {
                    user: n,
                    status: s,
                    clientStatus: i,
                    activities: r
                } = e;
                N({
                    guildId: t.id,
                    userId: n.id,
                    status: s,
                    clientStatus: i,
                    activities: r
                })
            })
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            b(t.id)
        },
        GUILD_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            return P(t, n.id)
        },
        PRESENCE_UPDATES: function(e) {
            let {
                updates: t
            } = e;
            return t.map(e => {
                let {
                    guildId: t,
                    user: n,
                    status: s,
                    clientStatus: i,
                    activities: r
                } = e;
                return N({
                    guildId: null != t ? t : g.ME,
                    userId: n.id,
                    status: s,
                    clientStatus: i,
                    activities: r
                })
            }).some(e => e)
        },
        PRESENCES_REPLACE: function(e) {
            let {
                presences: t
            } = e;
            b(g.ME), t.forEach(e => {
                let {
                    user: t,
                    status: n,
                    clientStatus: s,
                    activities: i
                } = e;
                null != t && N({
                    guildId: g.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: s,
                    activities: i
                })
            })
        },
        ACTIVITY_METADATA_UPDATE: function(e) {
            let {
                userId: t,
                metadata: n
            } = e;
            return y[t] = n, !1
        },
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            n.forEach(e => {
                null != e.presence && N({
                    guildId: t,
                    userId: e.user_id,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                })
            })
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            let {
                guildId: t,
                addedMembers: n
            } = e;
            null == n || n.forEach(e => {
                null != e.presence && N({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                })
            })
        },
        SELF_PRESENCE_STORE_UPDATE: function(e) {
            let t = _.default.getId();
            if (v[t] === e.status && E[t] === e.activities) return !1;
            v[t] = e.status, E[t] = e.activities, delete y[t]
        }
    })
}