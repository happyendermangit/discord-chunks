function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    }), n("222007"), n("808653");
    var r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        l = n("913144"),
        u = n("628454"),
        d = n("299039"),
        c = n("49111"),
        _ = n("99795");
    let f = 0,
        E = 0,
        h = {},
        g = new Set,
        m = new Map,
        p = {},
        S = {},
        v = {},
        T = {};

    function I(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function A(e, t) {
        let n = e[t];
        return null == n && (n = {}, e[t] = n), n
    }

    function C(e) {
        var t;
        let n = null !== (t = h[c.ME]) && void 0 !== t ? t : {},
            i = {};
        a.each(n, (t, n) => {
            t.channelId !== e && (i[n] = t)
        }), h[c.ME] = i
    }

    function y(e) {
        var t;
        return null !== (t = m.get(e)) && void 0 !== t ? t : new Set
    }

    function N(e, t, n) {
        var i, s, r, a;
        let o = A(h, null != e ? e : c.ME),
            l = o[t],
            u = n(l);
        if (l === u) return [!1, u, l];
        if (null != l) {
            ;
            let n;
            delete o[t], null != l.channelId && (delete A(p, l.channelId)[t], delete A(S, l.channelId)[t]), null != l.sessionId && delete A(v, t)[l.sessionId];
            i = null != e ? e : c.ME, s = t, !(n = y(i)).has(s) || ((n = new Set(n)).delete(s), 0 === n.size ? m.delete(i) : m.set(i, n))
        }
        if (null != u) {
            if (o[t] = u, null != u.channelId && (A(p, u.channelId)[t] = u, u.selfVideo)) {
                ;
                let n;
                A(S, u.channelId)[t] = u;
                r = null != e ? e : c.ME, a = t, (n = y(r)).has(a) || ((n = new Set(n)).add(a), m.set(r, n))
            }
            null != u.sessionId && (A(v, t)[u.sessionId] = u)
        }
        return [!0, u, l]
    }

    function R(e, t) {
        return N(e, t.userId, e => {
            if (null == t.channelId) return null;
            {
                let n = {
                    channelId: t.channelId,
                    deaf: t.deaf,
                    mute: t.mute,
                    requestToSpeakTimestamp: t.requestToSpeakTimestamp,
                    selfDeaf: t.selfDeaf,
                    selfMute: t.selfMute,
                    selfStream: t.selfStream,
                    selfVideo: t.selfVideo,
                    sessionId: t.sessionId,
                    suppress: t.suppress,
                    userId: t.userId
                };
                return null != e ? e.merge(n) : new u.default(n)
            }
        })
    }

    function O(e) {
        let {
            guild: t
        } = e;
        a.forEach(h[t.id], e => {
            N(t.id, e.userId, () => null)
        }), delete h[t.id]
    }
    class D extends o.default.Store {
        getAllVoiceStates() {
            return h
        }
        getVoiceStateVersion() {
            return E
        }
        getVoiceStates(e) {
            return A(h, null != e ? e : c.ME)
        }
        getVoiceStatesForChannel(e) {
            return A(p, e)
        }
        getVideoVoiceStatesForChannel(e) {
            return A(S, e)
        }
        getVoiceState(e, t) {
            return this.getVoiceStates(e)[t]
        }
        getVoiceStateForChannel(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            return null === (t = A(p, e)) || void 0 === t ? void 0 : t[n]
        }
        getVoiceStateForUser(e) {
            return Object.values(A(v, e))[0]
        }
        getVoiceStateForSession(e, t) {
            var n;
            return null != t ? null === (n = A(v, e)) || void 0 === n ? void 0 : n[t] : null
        }
        getUserVoiceChannelId(e, t) {
            var n;
            return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId
        }
        getCurrentClientVoiceChannelId(e) {
            let t = this.getVoiceState(e, i);
            return null != t && null != s && t.sessionId === s ? t.channelId : null
        }
        getUsersWithVideo(e) {
            var t;
            return null !== (t = m.get(e)) && void 0 !== t ? t : g
        }
        isCurrentClientInVoiceChannel() {
            var e;
            return null != s && (null === (e = v[i]) || void 0 === e ? void 0 : e[s]) != null
        }
        isInChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            if (null == e) return !1;
            let n = this.getVoiceStateForChannel(e, t);
            return null != n && (t !== i || null != s && n.sessionId === s)
        }
        hasVideo(e) {
            return Object.values(A(S, e)).length > 0
        }
        getVoicePlatformForChannel(e, t) {
            var n, r;
            let a = null != s && (null === (r = v[i]) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.channelId);
            return t === i && e === a ? _.VoicePlatforms.DESKTOP : T[I(t, e)]
        }
        get userHasBeenMovedVersion() {
            return f
        }
    }
    D.displayName = "VoiceStateStore";
    var P = new D(l.default, {
        CONNECTION_OPEN: function(e) {
            let {
                user: t,
                sessionId: n
            } = e, r = null != i && i !== t.id;
            return r && (h = {}, p = {}, v = {}, S = {}, m.clear()), i = t.id, s = n, r
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function() {
            h = {}, p = {}, v = {}, S = {}, m.clear()
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                voiceStates: t,
                user: n,
                sessionId: r
            } = e;
            for (let [e, n] of(h = {}, p = {}, v = {}, S = {}, Object.entries(t)))
                for (let [t, i] of Object.entries(n)) N(e, t, () => new u.default(i));
            i = n.id, s = r
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e, [s] = N(t, i, e => null == e ? void 0 : e.set("channelId", n));
            return s
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let [n, i, r] = R(t.guildId, t);
                return n ? (t.sessionId === s && null != i && null != r && r.channelId !== i.channelId && (f += 1), E++, !0) : e
            }, !1)
        },
        GUILD_DELETE: O,
        GUILD_CREATE: O,
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            C(t.id)
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            C(t)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t, n;
            let i = !1,
                s = d.default.keys(null !== (t = h[e.guildId]) && void 0 !== t ? t : {}),
                r = new Set(s);
            for (let t of null !== (n = e.voiceStates) && void 0 !== n ? n : []) {
                let [n] = R(e.guildId, t);
                i = i || n, r.delete(t.userId)
            }
            for (let t of r) N(e.guildId, t, () => null), i = !0;
            return i && E++, i
        },
        RTC_CONNECTION_PLATFORM: function(e) {
            let {
                userId: t,
                channelId: n,
                platform: i
            } = e;
            T[I(t, n)] = i
        }
    })
}