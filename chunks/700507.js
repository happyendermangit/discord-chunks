function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        disconnectRemote: function() {
            return S
        },
        connectToRemote: function() {
            return T
        },
        remoteVoiceStateUpdate: function() {
            return v
        },
        remoteDisconnect: function() {
            return I
        },
        remoteAudioSettingsUpdate: function() {
            return A
        },
        fetchDevices: function() {
            return y
        },
        persistSelectedDeviceId: function() {
            return N
        },
        transferToPlayStation: function() {
            return D
        }
    }), n("424973"), n("222007");
    var i = n("30945"),
        s = n("363747"),
        r = n("872717"),
        a = n("913144"),
        o = n("404118"),
        l = n("504385"),
        u = n("945956"),
        d = n("235660"),
        c = n("599110"),
        _ = n("286235"),
        f = n("893243"),
        E = n("76393"),
        h = n("780338"),
        g = n("49111"),
        m = n("782340");

    function p(e, t) {
        var n, i;
        c.default.track(g.AnalyticEvents.REMOTE_COMMAND_SENT, {
            command_type: e,
            remote_platform: null === (i = d.default.getSessionById(t)) || void 0 === i ? void 0 : null === (n = i.clientInfo) || void 0 === n ? void 0 : n.os
        })
    }
    async function S() {
        let e = E.default.getAwaitingRemoteSessionInfo(),
            t = null == e ? void 0 : e.nonce;
        a.default.dispatch({
            type: "REMOTE_SESSION_DISCONNECT"
        });
        let n = [];
        ((null == e ? void 0 : e.type) === g.PlatformTypes.PLAYSTATION || (null == e ? void 0 : e.type) === g.PlatformTypes.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(O(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
            return r.HTTP.del({
                url: g.Endpoints.CONNECT_REQUEST(e)
            })
        }(t));
        try {
            await Promise.all(n)
        } catch (e) {
            o.default.show({
                title: m.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
                body: m.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
            })
        }
    }

    function T(e) {
        a.default.dispatch({
            type: "REMOTE_SESSION_CONNECT",
            sessionId: e
        })
    }

    function v(e, t) {
        let {
            selfMute: n,
            selfDeaf: i
        } = t;
        a.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "VOICE_STATE_UPDATE",
                self_mute: n,
                self_deaf: i
            }
        }), p("VOICE_STATE_UPDATE", e)
    }

    function I(e) {
        a.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "DISCONNECT"
            }
        }), p("DISCONNECT", e), S()
    }

    function A(e, t, n, i) {
        let s = (0, l.coerceAudioContextForProto)(n);
        null != s && (a.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "AUDIO_SETTINGS_UPDATE",
                context: s,
                id: t,
                ...i
            }
        }), p("AUDIO_SETTINGS_UPDATE", e))
    }
    async function C() {
        let e;
        try {
            let t = null != u.default.getRTCConnectionId() ? s.ConsoleHandoffType.TRANSFER_EXISTING_CALL : s.ConsoleHandoffType.CREATE_NEW_CALL,
                n = await r.HTTP.post({
                    url: g.Endpoints.CONNECT_REQUEST_CREATE,
                    body: {
                        analytics_properties: {
                            handoff_type: t
                        }
                    }
                });
            e = n.body.nonce
        } catch (e) {
            _.default.captureException(e)
        }
        return e
    }
    async function y(e) {
        let t;
        a.default.dispatch({
            type: "GAME_CONSOLE_FETCH_DEVICES_START",
            platform: e
        });
        try {
            t = await r.HTTP.get({
                url: g.Endpoints.CONSOLES_DEVICES(e)
            })
        } catch (t) {
            throw a.default.dispatch({
                type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                platform: e,
                error: t
            }), t
        }
        let n = t.body.devices;
        return a.default.dispatch({
            type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
            platform: e,
            devices: n
        }), n
    }

    function N(e, t) {
        a.default.dispatch({
            type: "GAME_CONSOLE_SELECT_DEVICE",
            platform: e,
            deviceId: t
        })
    }
    async function R(e, t, n, s) {
        let o;
        a.default.dispatch({
            type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
            platform: e
        });
        try {
            o = await r.HTTP.post({
                url: g.Endpoints.CONSOLES_DEVICES_COMMANDS(e, t),
                body: {
                    command: i.ConsoleCommands.CONNECT_VOICE,
                    channel_id: n.id,
                    guild_id: n.guild_id,
                    nonce: s
                }
            })
        } catch (t) {
            throw a.default.dispatch({
                type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                platform: e,
                error: t
            }), t
        }
        let l = o.body.id;
        return a.default.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: s,
            channelId: n.id,
            deviceId: t,
            commandId: l
        }), l
    }
    async function O(e, t, n) {
        a.default.dispatch({
            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
            platform: e,
            deviceId: t,
            commandId: n
        });
        try {
            await r.HTTP.del({
                url: g.Endpoints.CONSOLES_DEVICES_COMMAND(e, t, n)
            })
        } catch (i) {
            throw a.default.dispatch({
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                platform: e,
                deviceId: t,
                commandId: n,
                error: i
            }), i
        }
        a.default.dispatch({
            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
            platform: e,
            deviceId: t,
            commandId: n
        })
    }
    async function D(e, t, n) {
        await f.default.maybeShowPTTAlert(e), await S();
        let i = await C();
        await R(e, t, n, i), (0, h.default)(n.id, e)
    }
}