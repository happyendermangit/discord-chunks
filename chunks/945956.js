function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("70102"), n("808653");
    var r = n("446674"),
        a = n("913144"),
        o = n("422791"),
        l = n("241718"),
        u = n("733589"),
        d = n("76393"),
        c = n("122530"),
        f = n("271938"),
        _ = n("316133"),
        h = n("49111"),
        E = n("353927");
    let g = null,
        m = null,
        p = null,
        S = null,
        v = !1,
        T = !1;

    function I(e, t) {
        if (null == s) throw Error("Creating RTCConnection without session.");
        let i = f.default.getId(),
            r = n("997722").default,
            u = new r({
                userId: i,
                sessionId: s,
                guildId: e,
                channelId: t
            });
        return u.on(o.RTCConnectionEvent.State, (e, t, n) => {
            a.default.wait(() => a.default.dispatch({
                type: "RTC_CONNECTION_STATE",
                state: e,
                ...t,
                ...n
            }))
        }), u.on(o.RTCConnectionEvent.Video, (e, t, n, i, s) => {
            a.default.wait(() => a.default.dispatch({
                type: "RTC_CONNECTION_VIDEO",
                guildId: e,
                channelId: t,
                userId: n,
                streamId: i,
                rtcServerId: s,
                context: E.MediaEngineContextTypes.DEFAULT
            }))
        }), u.on(o.RTCConnectionEvent.Ping, (e, t) => {
            a.default.wait(() => a.default.dispatch({
                type: "RTC_CONNECTION_PING",
                pings: e,
                quality: t
            }))
        }), u.on(o.RTCConnectionEvent.OutboundLossRate, e => {
            a.default.wait(() => a.default.dispatch({
                type: "RTC_CONNECTION_LOSS_RATE",
                lossRate: e
            }))
        }), u.on(o.RTCConnectionEvent.Speaking, (e, t) => {
            null == p || p.setSpeaking(e, t)
        }), u.on(o.RTCConnectionEvent.Flags, (e, t) => {
            a.default.wait(() => {
                a.default.dispatch({
                    type: "RTC_CONNECTION_FLAGS",
                    flags: t,
                    userId: e,
                    guildId: u.guildId,
                    channelId: u.channelId,
                    context: u.context
                })
            })
        }), u.on(o.RTCConnectionEvent.Platform, (e, t, n) => {
            a.default.wait(() => {
                a.default.dispatch({
                    type: "RTC_CONNECTION_PLATFORM",
                    platform: t,
                    userId: e,
                    channelId: n
                })
            })
        }), p = new l.default(f.default.getId(), t), S = null, v = !1, T = !1, u
    }

    function C() {
        if (null == i) return !1;
        S = i.getDuration(), i.destroy(), i = null, p = null
    }

    function A() {
        g = null
    }

    function y(e) {
        let {
            channel: t
        } = e;
        if (null == i || i.channelId !== t.id) return !1;
        C()
    }

    function N() {
        return !0
    }
    class R extends r.default.Store {
        initialize() {
            this.waitFor(_.default), (0, c.setVideoToggleAnalyticsParams)(this.getRTCConnectionId, this.getMediaSessionId)
        }
        getRTCConnection() {
            return i
        }
        getState() {
            return null != i ? i.state : h.RTCConnectionStates.DISCONNECTED
        }
        isConnected() {
            return this.getState() === h.RTCConnectionStates.RTC_CONNECTED
        }
        isDisconnected() {
            return this.getState() === h.RTCConnectionStates.DISCONNECTED
        }
        getRemoteDisconnectVoiceChannelId() {
            return g
        }
        getLastSessionVoiceChannelId() {
            return m
        }
        setLastSessionVoiceChannelId(e) {
            m = e
        }
        getGuildId() {
            return null == i ? void 0 : i.guildId
        }
        getChannelId() {
            return null == i ? void 0 : i.channelId
        }
        getHostname() {
            return null != i ? i.hostname : ""
        }
        getQuality() {
            return null != i ? i.quality : h.RTCConnectionQuality.UNKNOWN
        }
        getPings() {
            return null != i ? i.getPings() : []
        }
        getAveragePing() {
            return null != i ? null == i ? void 0 : i.getAveragePing() : 0
        }
        getLastPing() {
            return null == i ? void 0 : i.getLastPing()
        }
        getOutboundLossRate() {
            return null == i ? void 0 : i.getOutboundLossRate()
        }
        getMediaSessionId() {
            return null == i ? void 0 : i.getMediaSessionId()
        }
        getRTCConnectionId() {
            return null == i ? void 0 : i.getRTCConnectionId()
        }
        getDuration() {
            var e;
            return null !== (e = null == i ? void 0 : i.getDuration()) && void 0 !== e ? e : S
        }
        getPacketStats() {
            return null == i ? void 0 : i.getPacketStats()
        }
        getVoiceStateStats() {
            return null == p ? void 0 : p.getStats()
        }
        getWasEverMultiParticipant() {
            return v
        }
        getWasEverRtcConnected() {
            return T
        }
    }
    R.displayName = "RTCConnectionStore";
    let O = new R(a.default, __OVERLAY__ ? {} : {
        CONNECTION_OPEN: function(e) {
            return s = e.sessionId, g = null, m = null, C(), !1
        },
        CONNECTION_CLOSED: function() {
            s = null, g = null, m = null, C()
        },
        RTC_CONNECTION_STATE: function(e) {
            return e.state === h.RTCConnectionStates.RTC_CONNECTED && (T = !0), !0
        },
        RTC_CONNECTION_PING: N,
        RTC_CONNECTION_LOSS_RATE: N,
        RTC_CONNECTION_UPDATE_ID: function(e) {
            return e.connection === i
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                var n, r, a;
                if (null == p || p.updateVoiceStates(t.userId, t.channelId), v = v || (null !== (n = null == p ? void 0 : p.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1, f.default.getId() !== t.userId) return !1;
                if (null != i) {
                    if (t.sessionId === s) null != t.guildId && t.guildId === i.guildId || null == t.guildId && t.channelId === i.channelId ? null == t.channelId ? C() : i.channelId = t.channelId : (t.guildId !== i.guildId && null == t.channelId || C(), null != t.channelId && (g = null, m = null, i = I(t.guildId, t.channelId), v = (null !== (r = null == p ? void 0 : p.getStats().max_voice_state_count) && void 0 !== r ? r : 0) > 1));
                    else if (t.guildId === i.guildId) {
                        let e = null != d.default.getAwaitingRemoteSessionInfo() && null != d.default.getRemoteSessionId();
                        !e && (g = i.channelId), C()
                    }
                } else {
                    if (t.sessionId !== s || null == t.channelId) return e;
                    g = null, m = null, i = I(t.guildId, t.channelId), v = (null !== (a = null == p ? void 0 : p.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1
                }
                return !0
            }, !1)
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == i || null != t && i.channelId === t) return !1;
            C()
        },
        VOICE_SERVER_UPDATE: function(e) {
            if (null == i || null != e.guildId && e.guildId !== i.guildId || null != e.channelId && e.channelId !== i.channelId) return !1;
            i.connect(e.endpoint, e.token)
        },
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: A,
        REMOTE_SESSION_CONNECT: A,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function() {
            m = null
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            if (null == i || i.guildId !== t.id) return !1;
            C()
        },
        CHANNEL_DELETE: y,
        THREAD_DELETE: y,
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            if (null == i || i.channelId !== t) return !1;
            C()
        },
        APP_STATE_UPDATE: function(e) {
            if (null != i) {
                let t = e.state === h.AppStates.BACKGROUND,
                    n = u.default.isEnabled();
                i.setAppBackgrounded(t, n)
            }
            return e.state === h.AppStates.ACTIVE && null != i && i.resetBackoff("App state is active"), !1
        },
        RTC_LOG_MARKER: function(e) {
            if (null == i) {
                console.warn("handleRtcLogMarker: Unexpected state, no rtcConnection.");
                return
            }
            i.setRtcLogMarker(e.marker)
        }
    });
    n.el("599110").then(n.bind(n, "599110")).then(e => {
        let {
            addExtraAnalyticsDecorator: t
        } = e;
        t(e => {
            e.client_rtc_state = O.getState()
        })
    });
    var D = O
}