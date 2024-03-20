function(e, _, E) {
    "use strict";
    let t, o, n;
    E.r(_), E.d(_, {
        default: function() {
            return M
        }
    }), E("222007");
    var r = E("450911"),
        a = E("267363"),
        i = E("990766"),
        I = E("689988"),
        s = E("161454"),
        T = E("374014"),
        S = E("845579"),
        N = E("271938"),
        O = E("42203"),
        A = E("546463"),
        R = E("18494"),
        l = E("101125"),
        u = E("713726"),
        L = E("9759"),
        C = E("705565"),
        c = E("754493"),
        D = E("49111");
    let d = [];
    class U extends I.default {
        handleRunningGamesChange() {
            let e = s.default.getVisibleGame();
            if (null == e) return;
            let {
                canBroadcast: _
            } = L.default.getCurrentConfig({
                location: "handle_running_games_change"
            }, {
                autoTrackExposure: !1
            }), E = l.default.getBroadcast(), t = (0, u.getGameName)(e), o = null != A.default.getGameByName(t), n = (0, c.getIsBroadcastingToAnyone)();
            if (!_ || null != E || !S.BroadcastAutoBroadcast.getSetting() || !o || !n) return;
            let r = null != d.find(_ => _.pid === e.pid);
            if (r) return;
            d = s.default.getRunningGames();
            let a = (0, C.getCanStartBroadcast)();
            if (!a) return;
            let I = R.default.getVoiceChannelId();
            (0, i.createBroadcastChannelOrStartStream)({
                pid: e.pid,
                channelId: I
            })
        }
        handleStreamCreate(e) {
            let {
                streamKey: _
            } = e;
            (0, u.startBroadcastForStream)(_, t)
        }
        handleStreamStop(e) {
            let {
                streamKey: _
            } = e;
            if (null == t) return;
            let E = (0, T.decodeStreamKey)(_),
                {
                    ownerId: r,
                    channelId: a
                } = E;
            if (null == r || null == a) return;
            let i = N.default.getId();
            if (r !== i) return;
            let I = O.default.getChannel(a),
                s = null != I && I.isBroadcastChannel();
            null != I && r === I.ownerId && s && (t = null, o = null, n = null, (0, u.stopBroadcast)())
        }
        handleStartBroadcastStream(e) {
            let {
                options: _
            } = e;
            t = _.pid, o = _.sourceId, n = _.sourceName
        }
        handleCallCreate(e) {
            let {
                channelId: _
            } = e;
            if (null == _ || null == t && null == o && null == n) return;
            let E = N.default.getId(),
                r = O.default.getChannel(_);
            null != r && E === r.ownerId && r.isBroadcastChannel() && (0, i.startStream)(null, _, {
                pid: t,
                sourceId: o,
                sourceName: n
            })
        }
        handleRTCConnectionState(e) {
            let {
                channelId: _,
                state: E
            } = e;
            if (E !== D.RTCConnectionStates.DISCONNECTED) return;
            let t = R.default.getChannelId(),
                o = O.default.getChannel(_);
            if (null == o || !o.isBroadcastChannel()) return;
            r.default.closePrivateChannel(_, t === _, !0);
            let n = l.default.getBroadcast();
            null != n && o.id === n.channelId && (0, u.stopBroadcast)()
        }
        handleChannelDelete(e) {
            let {
                channel: _
            } = e, E = l.default.getBroadcast();
            null != E && _.id === E.channelId && (0, u.stopBroadcast)()
        }
        handleMessageCreate(e) {
            let {
                channelId: _,
                guildId: E
            } = e;
            if (null != E) return;
            let t = O.default.getChannel(_);
            if (null == t || !t.isBroadcastChannel()) return;
            let o = R.default.getVoiceChannelId(),
                n = o !== t.id;
            n && (0, a.localAck)(_)
        }
        constructor(...e) {
            super(...e), this.actions = {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_STOP: this.handleStreamStop,
                START_BROADCAST_STREAM: this.handleStartBroadcastStream,
                CALL_CREATE: this.handleCallCreate,
                RTC_CONNECTION_STATE: this.handleRTCConnectionState,
                CHANNEL_DELETE: this.handleChannelDelete,
                MESSAGE_CREATE: this.handleMessageCreate
            }
        }
    }
    var M = new U
}