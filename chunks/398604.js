function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StaticGuildEventIndexes: function() {
            return _
        },
        scheduledEventSort: function() {
            return c
        },
        isGuildScheduledEventActive: function() {
            return y
        },
        isEventUpcoming: function() {
            return D
        },
        isGuildEventEnded: function() {
            return v
        },
        default: function() {
            return M
        }
    }), n("424973"), n("222007");
    var r = n("917351"),
        i = n.n(r),
        l = n("446674"),
        u = n("407846"),
        a = n("913144"),
        o = n("271938"),
        s = n("26989"),
        d = n("299039"),
        E = n("745049");
    let _ = {
        EVENT: "event",
        EVENT_ACTIVE: "active",
        EVENT_UPCOMING: "event-upcoming",
        GUILD_EVENT: e => "".concat(e, "-").concat(_.EVENT),
        GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(_.EVENT_ACTIVE),
        GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(_.EVENT_UPCOMING),
        CHANNEL_EVENT: e => "".concat(e, "-").concat(_.EVENT),
        CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(_.EVENT_ACTIVE),
        CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(_.EVENT_UPCOMING)
    };

    function c(e) {
        let {
            id: t,
            scheduled_start_time: n
        } = e, r = y(e) ? "\x00" : "\x01";
        return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t)
    }
    let I = new u.default(e => {
            let {
                guild_id: t,
                entity_id: n,
                channel_id: r
            } = e, i = [t];
            return null != n && i.push(n), i.push(_.GUILD_EVENT(t)), null != r && i.push(_.CHANNEL_EVENT(r)), y(e) && (i.push(_.EVENT_ACTIVE), i.push(_.GUILD_EVENT_ACTIVE(t)), null != r && i.push(_.CHANNEL_EVENT_ACTIVE(r))), D(e) && (i.push(_.EVENT_UPCOMING), i.push(_.GUILD_EVENT_UPCOMING(t)), null != r && i.push(_.CHANNEL_EVENT_UPCOMING(r))), i
        }, c),
        S = 0,
        T = [],
        f = "SERIES",
        p = {},
        N = {};

    function A(e) {
        I.set(e.id, e), S += 1
    }

    function R(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        I.delete(e), delete p[e], t && delete N[e], S += 1
    }

    function C(e) {
        return null != e ? e : f
    }

    function L(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = e.guild_scheduled_event_id;
        null == p[r] && (p[r] = {});
        let i = C(e.guild_scheduled_event_exception_id);
        null == p[r][i] && (p[r][i] = {}), p[r][i][e.user_id] = e, t && function(e) {
            var t, n;
            let r = C(e.guild_scheduled_event_exception_id),
                i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                l = null != e.guild_scheduled_event_exception_id && e.response === E.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === E.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
            h(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
        }(e), n && (S += 1)
    }

    function O(e) {
        var t, n, r, i;
        let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            u = C(e.guild_scheduled_event_exception_id),
            a = (null === (n = p[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[u]) || void 0 === t ? void 0 : t[e.user_id]) != null,
            s = e.user_id === o.default.getId();
        (a || !s) && (null === (i = p[e.guild_scheduled_event_id]) || void 0 === i || null === (r = i[u]) || void 0 === r || delete r[e.user_id], function(e) {
            var t, n;
            let r = C(e.guild_scheduled_event_exception_id),
                i = null !== (n = null === (t = N[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                l = null != e.guild_scheduled_event_exception_id && e.response === E.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === E.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
            h(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
        }(e), l && (S += 1))
    }

    function h(e, t, n) {
        let r = C(t);
        null == N[e] && (N[e] = {}), N[e][r] = n
    }

    function P(e, t) {
        I.values(_.GUILD_EVENT(e)).forEach(e => R(e.id, t))
    }

    function g(e) {
        let {
            guildScheduledEvent: t
        } = e;
        return A(t), !0
    }

    function m(e) {
        let {
            eventException: t
        } = e, n = I.get(t.event_id);
        if (null == n) return !1;
        let r = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
            i = [...n.guild_scheduled_event_exceptions];
        return r < 0 ? i.push(t) : i[r] = t, A({
            ...n,
            guild_scheduled_event_exceptions: i
        }), !0
    }

    function y(e) {
        var t;
        return null != e && (t = (null == e ? void 0 : e.status) === E.GuildScheduledEventStatus.ACTIVE, t)
    }

    function D(e) {
        return !E.GuildScheduledEventStatusDone.has(e.status)
    }

    function v(e) {
        return null != e && E.GuildScheduledEventStatusDone.has(e.status)
    }
    class U extends l.default.Store {
        getGuildScheduledEvent(e) {
            var t;
            return null == e ? null : null !== (t = I.get(e)) && void 0 !== t ? t : null
        }
        getGuildEventCountByIndex(e) {
            return I.size(e)
        }
        getGuildScheduledEventsForGuild(e) {
            return null == e ? [] : I.values(e)
        }
        getGuildScheduledEventsByIndex(e) {
            return I.values(e)
        }
        getRsvpVersion() {
            return S
        }
        getRsvp(e, t, n) {
            var r, i;
            if (null == e) return null;
            let l = C(t);
            return null === (i = p[e]) || void 0 === i ? void 0 : null === (r = i[l]) || void 0 === r ? void 0 : r[n]
        }
        isInterestedInEventRecurrence(e, t) {
            let n = o.default.getId(),
                r = this.getRsvp(e, null, n),
                i = this.getRsvp(e, t, n),
                l = (null == r ? void 0 : r.response) === E.GuildScheduledEventUserResponses.INTERESTED,
                u = (null == i ? void 0 : i.response) === E.GuildScheduledEventUserResponses.INTERESTED,
                a = (null == i ? void 0 : i.response) === E.GuildScheduledEventUserResponses.UNINTERESTED;
            return l && !a || u
        }
        getUserCount(e, t) {
            var n, r, i, l;
            if (null == e) return 0;
            let u = null !== (i = null === (n = N[e]) || void 0 === n ? void 0 : n[f]) && void 0 !== i ? i : 0;
            if (null == t) return u;
            let a = null !== (l = null === (r = N[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== l ? l : 0;
            return u - a
        }
        hasUserCount(e, t) {
            var n;
            let r = C(t);
            return (null === (n = N[e]) || void 0 === n ? void 0 : n[r]) != null
        }
        isActive(e) {
            return null != e && y(I.get(e))
        }
        getActiveEventByChannel(e) {
            if (null == e) return;
            let t = this.getGuildScheduledEventsByIndex(_.CHANNEL_EVENT_ACTIVE(e));
            return t[0]
        }
        getUsersForGuildEvent(e, t) {
            var n, r;
            if (null == e) return {};
            let i = C(t);
            return null !== (r = null === (n = p[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : {}
        }
    }
    U.displayName = "GuildScheduledEventStore";
    var M = new U(a.default, {
        CONNECTION_OPEN: function(e) {
            let {
                guilds: t
            } = e;
            return I.clear(), S = 0, p = {}, N = {}, T.forEach(A), t.forEach(e => e.guild_scheduled_events.forEach(e => A(e))), !0
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return P(t.id, !1), t.guild_scheduled_events.forEach(e => A(e)), !0
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            return P(t.id, !0), !0
        },
        FETCH_GUILD_EVENT: function(e) {
            let {
                guildScheduledEvent: t
            } = e;
            A(t)
        },
        FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
            let {
                guildId: t,
                guildScheduledEvents: n
            } = e, r = I.values(_.GUILD_EVENT(t), !0).map(e => e.id), l = n.map(e => e.id);
            for (let e of (i.difference(r, l).forEach(e => {
                    R(e)
                }), n)) A(e);
            return !0
        },
        GUILD_SCHEDULED_EVENT_CREATE: g,
        GUILD_SCHEDULED_EVENT_UPDATE: g,
        GUILD_SCHEDULED_EVENT_DELETE: function(e) {
            let {
                guildScheduledEvent: t
            } = e;
            return R(t.id), !0
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
            var t, n;
            let {
                userId: r,
                guildEventId: i,
                guildId: l,
                guildEventExceptionId: u,
                response: a
            } = e, o = C(u), d = null === (n = p[i]) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t[r];
            null != d && O(d, !1);
            let E = s.default.getMember(l, r);
            return L({
                user_id: r,
                guild_scheduled_event_id: i,
                member: null != E ? E : {
                    guildId: l
                },
                guild_scheduled_event_exception_id: u,
                response: a
            }), !0
        },
        GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
            let {
                userId: t,
                guildEventId: n,
                guildEventExceptionId: r,
                response: i
            } = e;
            O({
                user_id: t,
                guild_scheduled_event_id: n,
                guild_scheduled_event_exception_id: r,
                response: i
            })
        },
        GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
            let {
                guildScheduledEventUsers: t
            } = e;
            return t.forEach(e => L(e, !1, !1)), S += 1, !0
        },
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
            let {
                guildScheduledEventUsers: t
            } = e;
            return t.forEach(e => L(e, !1, !1)), S += 1, !0
        },
        GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
            let {
                eventId: t,
                counts: n
            } = e;
            h(t, null, n.eventCount), d.default.forEachKey(n.recurrenceCounts, e => {
                h(t, e, n.eventCount - n.recurrenceCounts[e])
            })
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            let {
                invite: t
            } = e, n = t.guild_scheduled_event;
            return null != n && (A(n), !0)
        },
        GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: m,
        GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: m,
        GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
            let {
                eventException: t
            } = e, n = I.get(t.event_id);
            if (null == n) return !1;
            let r = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
            return A({
                ...n,
                guild_scheduled_event_exceptions: r
            }), !0
        },
        GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
            let {
                eventId: t
            } = e, n = I.get(t);
            return null != n && (A({
                ...n,
                guild_scheduled_event_exceptions: []
            }), !0)
        },
        LOGOUT: function() {
            return I.clear(), !0
        }
    })
}