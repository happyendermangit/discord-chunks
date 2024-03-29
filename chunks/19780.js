function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("411104"), n("724458");
    var s, a, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("437263"),
        c = n("764976"),
        E = n("646047"),
        I = n("258609"),
        T = n("338336"),
        f = n("314897"),
        S = n("938475"),
        h = n("981631"),
        A = n("65154");
    let m = null,
        N = null,
        O = null,
        p = null,
        R = !1,
        C = !1;

    function g(e, t) {
        if (null == r) throw Error("Creating RTCConnection without session.");
        let i = f.default.getId(),
            s = new(n("861687")).default({
                userId: i,
                sessionId: r,
                guildId: e,
                channelId: t
            });
        return s.on(_.RTCConnectionEvent.State, (e, t, n) => {
            d.default.wait(() => d.default.dispatch({
                type: "RTC_CONNECTION_STATE",
                state: e,
                ...t,
                ...n
            }))
        }), s.on(_.RTCConnectionEvent.Video, (e, t, n, i, r) => {
            d.default.wait(() => d.default.dispatch({
                type: "RTC_CONNECTION_VIDEO",
                guildId: e,
                channelId: t,
                userId: n,
                streamId: i,
                rtcServerId: r,
                context: A.MediaEngineContextTypes.DEFAULT
            }))
        }), s.on(_.RTCConnectionEvent.Ping, (e, t) => {
            d.default.wait(() => d.default.dispatch({
                type: "RTC_CONNECTION_PING",
                pings: e,
                quality: t
            }))
        }), s.on(_.RTCConnectionEvent.OutboundLossRate, e => {
            d.default.wait(() => d.default.dispatch({
                type: "RTC_CONNECTION_LOSS_RATE",
                lossRate: e
            }))
        }), s.on(_.RTCConnectionEvent.Speaking, (e, t) => {
            null == O || O.setSpeaking(e, t)
        }), s.on(_.RTCConnectionEvent.Flags, (e, t) => {
            d.default.wait(() => {
                d.default.dispatch({
                    type: "RTC_CONNECTION_FLAGS",
                    flags: t,
                    userId: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context
                })
            })
        }), s.on(_.RTCConnectionEvent.Platform, (e, t, n) => {
            d.default.wait(() => {
                d.default.dispatch({
                    type: "RTC_CONNECTION_PLATFORM",
                    platform: t,
                    userId: e,
                    channelId: n
                })
            })
        }), O = new c.default(f.default.getId(), t), p = null, R = !1, C = !1, s
    }

    function L() {
        if (null == i) return !1;
        p = i.getDuration(), i.destroy(), i = null, O = null
    }

    function D() {
        m = null
    }

    function v(e) {
        let {
            channel: t
        } = e;
        if (null == i || i.channelId !== t.id) return !1;
        L()
    }

    function M() {
        return !0
    }
    class y extends(s = u.default.Store) {
        initialize() {
            this.waitFor(S.default), (0, T.setVideoToggleAnalyticsParams)(this.getRTCConnectionId, this.getMediaSessionId)
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
            return m
        }
        getLastSessionVoiceChannelId() {
            return N
        }
        setLastSessionVoiceChannelId(e) {
            N = e
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
            return null !== (e = null == i ? void 0 : i.getDuration()) && void 0 !== e ? e : p
        }
        getPacketStats() {
            return null == i ? void 0 : i.getPacketStats()
        }
        getVoiceStateStats() {
            return null == O ? void 0 : O.getStats()
        }
        getWasEverMultiParticipant() {
            return R
        }
        getWasEverRtcConnected() {
            return C
        }
    }
    l = "RTCConnectionStore", (o = "displayName") in(a = y) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l;
    let P = new y(d.default, __OVERLAY__ ? {} : {
        CONNECTION_OPEN: function(e) {
            return r = e.sessionId, m = null, N = null, L(), !1
        },
        CONNECTION_CLOSED: function() {
            r = null, m = null, N = null, L()
        },
        RTC_CONNECTION_STATE: function(e) {
            return e.state === h.RTCConnectionStates.RTC_CONNECTED && (C = !0), !0
        },
        RTC_CONNECTION_PING: M,
        RTC_CONNECTION_LOSS_RATE: M,
        RTC_CONNECTION_UPDATE_ID: function(e) {
            return e.connection === i
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                var n, s, a;
                if (null == O || O.updateVoiceStates(t.userId, t.channelId), R = R || (null !== (n = null == O ? void 0 : O.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1, f.default.getId() !== t.userId) return !1;
                if (null != i) t.sessionId === r ? null != t.guildId && t.guildId === i.guildId || null == t.guildId && t.channelId === i.channelId ? null == t.channelId ? L() : i.channelId = t.channelId : (t.guildId !== i.guildId && null == t.channelId || L(), null != t.channelId && (m = null, N = null, i = g(t.guildId, t.channelId), R = (null !== (s = null == O ? void 0 : O.getStats().max_voice_state_count) && void 0 !== s ? s : 0) > 1)) : t.guildId === i.guildId && (!(null != I.default.getAwaitingRemoteSessionInfo() && null != I.default.getRemoteSessionId()) && (m = i.channelId), L());
                else {
                    if (t.sessionId !== r || null == t.channelId) return e;
                    m = null, N = null, i = g(t.guildId, t.channelId), R = (null !== (a = null == O ? void 0 : O.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1
                }
                return !0
            }, !1)
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == i || null != t && i.channelId === t) return !1;
            L()
        },
        VOICE_SERVER_UPDATE: function(e) {
            if (null == i || null != e.guildId && e.guildId !== i.guildId || null != e.channelId && e.channelId !== i.channelId) return !1;
            i.connect(e.endpoint, e.token)
        },
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: D,
        REMOTE_SESSION_CONNECT: D,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function() {
            N = null
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            if (null == i || i.guildId !== t.id) return !1;
            L()
        },
        CHANNEL_DELETE: v,
        THREAD_DELETE: v,
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            if (null == i || i.channelId !== t) return !1;
            L()
        },
        APP_STATE_UPDATE: function(e) {
            if (null != i) {
                let t = e.state === h.AppStates.BACKGROUND,
                    n = E.default.isEnabled();
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
    Promise.resolve().then(n.bind(n, "626135")).then(e => {
        let {
            addExtraAnalyticsDecorator: t
        } = e;
        t(e => {
            e.client_rtc_state = P.getState()
        })
    }), t.default = P
}