function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        changeStreamRegion: function() {
            return V
        },
        closeStream: function() {
            return G
        },
        createBroadcastChannelOrStartStream: function() {
            return x
        },
        fetchStreamPreview: function() {
            return w
        },
        joinPrivateChannelAndWatchStream: function() {
            return H
        },
        notifyStreamStart: function() {
            return k
        },
        setStreamPaused: function() {
            return v
        },
        startStream: function() {
            return D
        },
        stopOwnStream: function() {
            return F
        },
        stopStream: function() {
            return b
        },
        toggleSelfStreamHidden: function() {
            return P
        },
        updateStreamSettings: function() {
            return B
        },
        watchStream: function() {
            return y
        },
        watchStreamAndTransitionToStream: function() {
            return U
        }
    });
    var i = n("512722"),
        r = n.n(i),
        s = n("990547"),
        a = n("544891"),
        o = n("570140"),
        l = n("258609"),
        u = n("569545"),
        d = n("525925"),
        _ = n("522474"),
        c = n("199902"),
        E = n("314897"),
        I = n("592125"),
        T = n("430824"),
        f = n("944486"),
        S = n("979651"),
        h = n("934415"),
        A = n("70956"),
        m = n("557457"),
        N = n("573261"),
        O = n("26151"),
        p = n("493683"),
        R = n("475179"),
        C = n("287734"),
        g = n("981631"),
        L = n("70722");

    function D(e, t, n) {
        o.default.dispatch({
            type: "STREAM_START",
            streamType: null != e ? L.StreamTypes.GUILD : L.StreamTypes.CALL,
            guildId: e,
            channelId: t,
            appContext: __OVERLAY__ ? g.AppContext.OVERLAY : g.AppContext.APP,
            ...n
        })
    }

    function v(e, t) {
        let n = (0, u.encodeStreamKey)(e);
        o.default.dispatch({
            type: "STREAM_SET_PAUSED",
            streamKey: n,
            paused: t
        })
    }

    function M(e, t) {
        let n = I.default.getChannel(t);
        return r()(null != n, "Cannot join a null voice channel"), !S.default.isInChannel(t) && (0, h.isChannelFull)(n, S.default, T.default)
    }

    function y(e, t) {
        if (null != l.default.getRemoteSessionId()) return;
        let {
            guildId: n,
            channelId: i
        } = e;
        if (null != n && M(n, i)) return;
        let r = (0, u.encodeStreamKey)(e),
            s = (null == t ? void 0 : t.forceMultiple) || c.default.getAllActiveStreamsForChannel(i).filter(e => {
                let {
                    ownerId: t
                } = e;
                return t !== E.default.getId()
            }).length >= 2;
        o.default.dispatch({
            type: "STREAM_WATCH",
            streamKey: r,
            allowMultiple: s
        }), !s && (null == t || !t.noFocus) && R.default.selectParticipant(e.channelId, r)
    }

    function P(e, t) {
        o.default.dispatch({
            type: "STREAM_UPDATE_SELF_HIDDEN",
            channelId: e,
            selfStreamHidden: t
        })
    }

    function U(e, t) {
        let {
            guildId: n,
            channelId: i
        } = e;
        if (null != n && M(n, i)) return;
        y(e, t);
        let r = _.default.getWindowOpen(g.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
            s = f.default.getVoiceChannelId();
        (!r || s !== i) && (0, d.default)(e)
    }

    function b(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        G(e, t), o.default.dispatch({
            type: "STREAM_STOP",
            streamKey: e,
            appContext: __OVERLAY__ ? g.AppContext.OVERLAY : g.AppContext.APP
        })
    }

    function G(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        o.default.dispatch({
            type: "STREAM_CLOSE",
            streamKey: e,
            canShowFeedback: t
        })
    }
    async function w(e, t, n) {
        let i = (0, u.encodeStreamKey)({
            streamType: null != e ? L.StreamTypes.GUILD : L.StreamTypes.CALL,
            guildId: e,
            channelId: t,
            ownerId: n
        });
        o.default.dispatch({
            type: "STREAM_PREVIEW_FETCH_START",
            streamKey: i
        });
        try {
            let e = await a.HTTP.get({
                url: g.Endpoints.STREAM_PREVIEW(i),
                query: {
                    version: Date.now()
                },
                oldFormErrors: !0
            });
            o.default.dispatch({
                type: "STREAM_PREVIEW_FETCH_SUCCESS",
                streamKey: i,
                previewURL: e.body.url
            })
        } catch (t) {
            let e;
            429 === t.status && (e = t.body.retry_after * A.default.Millis.SECOND), o.default.dispatch({
                type: "STREAM_PREVIEW_FETCH_FAIL",
                streamKey: i,
                retryAfter: e
            })
        }
    }
    async function k(e) {
        try {
            await N.default.post({
                url: g.Endpoints.STREAM_NOTIFY(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: s.NetworkActionNames.STREAM_NOTIFY
                }
            })
        } catch (e) {}
    }

    function B(e) {
        (0, m.trackStreamSettingsUpdate)(e.preset, e.resolution, e.frameRate), o.default.dispatch({
            type: "STREAM_UPDATE_SETTINGS",
            ...e
        })
    }

    function V(e, t) {
        a.HTTP.patch({
            url: g.Endpoints.STREAM(e),
            body: {
                region: t
            },
            oldFormErrors: !0
        })
    }

    function F() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = c.default.getCurrentUserActiveStream();
        null != t && b((0, u.encodeStreamKey)(t), e)
    }

    function x(e) {
        let {
            channelId: t,
            pid: n,
            sourceId: i,
            sourceName: r
        } = e;
        (null != n || null != i || null != r) && (o.default.dispatch({
            type: "START_BROADCAST_STREAM",
            options: {
                pid: n,
                sourceId: i,
                sourceName: r
            }
        }), null == t ? p.default.createBroadcastPrivateChannel() : D(null, t, {
            pid: n,
            sourceId: i,
            sourceName: r
        }))
    }

    function H(e, t) {
        let n = E.default.getId(),
            i = (0, u.decodeStreamKey)(t),
            r = f.default.getVoiceChannelId();
        null != r && r !== e && C.default.disconnect(), p.default.addRecipient(e, n, void 0, () => {
            O.default.call(e, !1, !1, null, () => {
                U(i)
            })
        })
    }
}