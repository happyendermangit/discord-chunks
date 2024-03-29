function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        graphs: function() {
            return f
        },
        keySection: function() {
            return O
        },
        parseSection: function() {
            return p
        }
    }), n("47120"), n("653041");
    var i, r = n("442837"),
        s = n("46973"),
        a = n("570140"),
        o = n("304680"),
        l = n("131951"),
        u = n("594174"),
        d = n("981631"),
        _ = n("65154");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = O(_.MediaEngineContextTypes.DEFAULT, d.RTCDebugSections.TRANSPORT, 0),
        I = E,
        T = {},
        f = {
            availableOutgoingBitrate: !0,
            bitrate: !0,
            bitrateTarget: !0,
            bytesReceived: !0,
            bytesSent: !0,
            encoderQualityPsnr: !0,
            encoderQualityVmaf: !0,
            encodeUsage: !0,
            frameRateDecode: !0,
            frameRateEncode: !0,
            frameRateInput: !0,
            frameRateNetwork: !0,
            frameRateRender: !0,
            inboundBitrateEstimate: !0,
            packetsLost: !0,
            packetsReceived: !0,
            packetsSent: !0,
            ping: !0
        };

    function S(e, t, n) {
        return "".concat(e, ":").concat(t, ":").concat(n)
    }
    class h {
        static empty() {
            return new h({})
        }
        put(e, t, n, i) {
            if ("" === i) {
                let i = {
                    ...this.state
                };
                return delete i[S(e, t, n)], new h(i)
            }
            return new h({
                [S(e, t, n)]: i,
                ...this.state
            })
        }
        get(e, t, n) {
            let i = this.state[S(e, t, n)];
            return null != i ? i : null
        }
        constructor(e) {
            c(this, "state", void 0), this.state = e
        }
    }
    let A = h.empty(),
        m = !1,
        N = null;

    function O(e, t, n) {
        return "".concat(e, ":").concat(t, ":").concat(n)
    }

    function p(e) {
        let [t, n] = e.split(":");
        return {
            context: t,
            section: n
        }
    }

    function R() {
        Object.values(_.MediaEngineContextTypes).forEach(e => {
            T[e] = {}
        })
    }
    R();

    function C() {
        null != N && (N.destroy(), N = null)
    }
    class g extends(i = r.default.Store) {
        getSection() {
            return I
        }
        getStats() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.MediaEngineContextTypes.DEFAULT;
            return T[e][0]
        }
        getAllStats() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.MediaEngineContextTypes.DEFAULT;
            return Object.values(T[e])
        }
        getVideoStreams() {
            return A
        }
        shouldRecordNextConnection() {
            return m
        }
    }
    c(g, "displayName", "RTCDebugStore"), t.default = new g(a.default, {
        RTC_DEBUG_MODAL_OPEN: function(e) {
            var t;
            I = null !== (t = e.section) && void 0 !== t ? t : E
        },
        RTC_DEBUG_MODAL_CLOSE: function() {
            C()
        },
        RTC_DEBUG_MODAL_SET_SECTION: function(e) {
            I = e.section
        },
        RTC_DEBUG_MODAL_UPDATE: function(e) {
            let {
                context: t,
                stats: n,
                index: i
            } = e, r = T[t];
            if (null != n) {
                let [e, s, a] = I.split(":");
                if (e === t && parseInt(a) === i && null != u.default.getUser(s)) {
                    let {
                        rtp: {
                            inbound: e
                        }
                    } = n;
                    !Object.keys(e).includes(s) && (I = E)
                }
                r[i] = function e(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                        r = {};
                    for (let [s, a] of Object.entries(t)) {
                        let t = n[s];
                        if (Array.isArray(a)) {
                            if ("object" == typeof a[0]) {
                                let n = Array.isArray(t) ? t : [],
                                    o = r[s] = [];
                                for (let t = 0; t < a.length; t++) {
                                    let r = n[t],
                                        s = "object" == typeof r ? r : {};
                                    o.push(e(a[t], s, i))
                                }
                            } else r[s] = a
                        } else if ("object" == typeof a && null !== a) {
                            let n = "object" == typeof t && null !== t ? t : {};
                            r[s] = e(a, n, i)
                        } else if (s in f && "number" == typeof a) {
                            let e = r[s] = Array.isArray(t) ? t : [];
                            e.push({
                                value: a,
                                time: i
                            }), e.length > 600 && e.shift()
                        } else r[s] = a
                    }
                    return r
                }(n, r[i])
            } else delete r[i]
        },
        RTC_DEBUG_MODAL_OPEN_REPLAY: function(e) {
            o.chooseReplayPath()
        },
        RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function(e) {
            let {
                path: t
            } = e, n = l.default.getMediaEngine();
            if (C(), !n.supports(_.Features.CONNECTION_REPLAY) || 0 === t.length) return;
            let i = n.createReplayConnection(_.MediaEngineContextTypes.DEFAULT, t);
            null != i && (N = i, i.on(s.BaseConnectionEvent.Video, (e, t, n, r, s) => {
                a.default.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                    mediaEngineConnectionId: i.mediaEngineConnectionId,
                    userId: e,
                    videoSsrc: null != r ? r : 0,
                    streamId: null != t ? t : ""
                })
            }), a.default.wait(() => o.open()))
        },
        RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function(e) {
            A = A.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId)
        },
        RTC_DEBUG_SET_RECORDING_FLAG: function(e) {
            let {
                value: t
            } = e;
            m = t
        },
        VOICE_CHANNEL_SELECT: function(e) {
            null != e.channelId && R()
        }
    }), l.default.getMediaEngine().on(s.MediaEngineEvent.ConnectionStats, function(e) {
        Object.values(_.MediaEngineContextTypes).forEach(t => {
            e.filter(e => {
                let {
                    connection: n
                } = e;
                return n.context === t
            }).forEach((e, n) => {
                a.default.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE",
                    stats: e.stats,
                    context: t,
                    index: n,
                    mediaEngineConnectionId: e.connection.mediaEngineConnectionId
                })
            })
        })
    })
}