function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    }), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("177593");
    var i = n("512722"),
        r = n.n(i),
        s = n("457854"),
        a = n("261470"),
        o = n("956067"),
        l = n("286379"),
        u = n("442837"),
        d = n("544891"),
        _ = n("570140"),
        c = n("406966"),
        E = n("795513"),
        I = n("266750"),
        T = n("250407"),
        f = n("710845"),
        S = n("797614"),
        h = n("218543"),
        A = n("857192"),
        m = n("626135"),
        N = n("12647"),
        O = n("70956"),
        p = n("358085"),
        R = n("960048"),
        C = n("138859"),
        g = n("14639"),
        L = n("639655"),
        D = n("610308"),
        v = n("91247"),
        M = n("508569"),
        y = n("183139"),
        P = n("645436"),
        U = n("833508"),
        b = n("981631");

    function G(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n("420491");
    let w = new f.default("GatewaySocket"),
        k = new D.default;

    function B() {}
    let V = 30 * O.default.Millis.SECOND,
        F = 3 * O.default.Millis.MINUTE,
        x = 1 * O.default.Millis.MINUTE;

    function H(e) {
        return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
    }
    let Y = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
    class j extends y.default {
        get connectionState() {
            return this.connectionState_
        }
        set connectionState(e) {
            w.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
        }
        addAnalytics(e) {
            this.analytics = {
                ...this.analytics,
                ...e
            }
        }
        setResumeUrl(e) {
            null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && w.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
        }
        _connect() {
            var e, t;
            let n;
            if (!this.willReconnect()) {
                w.verbose("Skipping _connect because willReconnect is false");
                return
            }
            if (P.getIsPaused()) {
                w.info("Skipping _connect because socket is paused");
                return
            }
            this.connectionState = C.default.CONNECTING, this.nextReconnectIsImmediate = !1, this.compressionHandler.recomputeAlgorithm();
            let i = this.compressionHandler.getAlgorithm(),
                r = k.getName(),
                s = this._getGatewayUrl(),
                a = window.GLOBAL_ENV.API_VERSION;
            o.default.mark("\uD83C\uDF10", "Socket._connect"), w.info("[CONNECT] ".concat(s, ", ") + "encoding: ".concat(r, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != i ? i : "none")), null !== this.webSocket && (w.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
            }, V);
            let l = new URL(s);
            l.searchParams.append("encoding", r), l.searchParams.append("v", a.toString()), null != i && l.searchParams.append("compress", i);
            ! function(e) {
                let t, {
                        gatewayURL: n,
                        newCallback: i,
                        onOpen: r,
                        onMessage: s,
                        onError: a,
                        onClose: o
                    } = e,
                    l = window._ws,
                    u = !1,
                    d = !1,
                    _ = null,
                    c = null;
                if (window._ws = null, null != l) {
                    if (t = l.ws, l.state.gateway !== n) w.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(l.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
                    else {
                        var E;
                        let e = {
                            ...l.state
                        };
                        null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
                            ...e,
                            data: e.data.substring(0, 100)
                        } : e)), w.log("[FAST CONNECT] successfully took over websocket, state:", {
                            ...e,
                            messages: null === (E = e.messages) || void 0 === E ? void 0 : E.length
                        }), u = l.state.open, d = l.state.identify, _ = l.state.messages, c = l.state.clientState
                    }
                }
                null == t && ((t = (0, U.default)(n)).binaryType = "arraybuffer"), i(t), u && r(d, c), null != _ && _.forEach(s), t.onopen = () => r(d, c), t.onmessage = s, t.onclose = o, t.onerror = a
            }({
                gatewayURL: l.toString(),
                newCallback: e => {
                    this.webSocket = e, this.compressionHandler.bindWebSocket(e)
                },
                onOpen: e => {
                    o.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    w.info("[CONNECTED] ".concat(l.toString(), " in ").concat(t, " ms")), this.isFastConnect = e, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
                },
                onMessage: (e = this.compressionHandler, t = (e, t) => {
                    let n = Date.now(),
                        {
                            op: i,
                            s: r,
                            t: s,
                            d: a
                        } = k.unpack(e);
                    i !== y.Opcode.DISPATCH && o.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(i, " ").concat(y.Opcode[i]));
                    let l = Date.now() - n;
                    switch ("READY" === s ? h.default.parseReady.set(n, l) : "READY_SUPPLEMENTAL" === s ? h.default.parseReadySupplemental.set(n, l) : l > 10 && o.default.mark("\uD83C\uDF10", "Parse " + s, l), null != r && (this.seq = r), i) {
                        case y.Opcode.HELLO:
                            this._clearHelloTimeout(), this._handleHello(a);
                            break;
                        case y.Opcode.RECONNECT:
                            this._handleReconnect();
                            break;
                        case y.Opcode.INVALID_SESSION:
                            this._handleInvalidSession(a);
                            break;
                        case y.Opcode.HEARTBEAT:
                            this._sendHeartbeat();
                            break;
                        case y.Opcode.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(a);
                            break;
                        case y.Opcode.DISPATCH:
                            this._handleDispatch(a, s, "READY" === s ? {
                                compressed_byte_size: t,
                                uncompressed_byte_size: H(e),
                                compression_algorithm: this.compressionHandler.getAlgorithm(),
                                packing_algorithm: k.getName(),
                                unpack_duration_ms: l
                            } : null);
                            break;
                        default:
                            w.info("Unhandled op ".concat(i))
                    }
                }, n = 0, e.dataReady(e => {
                    try {
                        return t(e, n)
                    } finally {
                        n = 0
                    }
                }), t => {
                    let i = t.data;
                    null != t.raw_length ? n += t.raw_length : n += H(i), e.feed(i)
                }),
                onError: () => {
                    this.setResumeUrl(null), N.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
                },
                onClose: e => {
                    let {
                        wasClean: t,
                        code: n,
                        reason: i
                    } = e;
                    return this._handleClose(t, n, i)
                }
            })
        }
        _handleHello(e) {
            let t = this.heartbeatInterval = e.heartbeat_interval,
                n = Date.now() - this.connectionStartTime;
            w.verbose("[HELLO] via ".concat((0, v.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
        }
        _handleReconnect() {
            w.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = C.default.WILL_RECONNECT, this._connect()
        }
        _handleInvalidSession(e) {
            w.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
        }
        _handleDispatch(e, t, n) {
            let i = Date.now() - this.connectionStartTime;
            if ("READY" === t) {
                let t = e.session_id;
                this.sessionId = t;
                let n = (0, v.getConnectionPath)(e);
                o.default.setServerTrace(n), w.info("[READY] took ".concat(i, "ms, as ").concat(t)), w.verbose("".concat(n)), this.connectionState = C.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
            } else "READY_SUPPLEMENTAL" === t ? (w.info("[READY_SUPPLEMENTAL] took ".concat(i, "ms")), this.connectionState = C.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (w.verbose((0, v.getConnectionPath)(e)), this.connectionState = C.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
            this.dispatcher.receiveDispatch(e, t, n)
        }
        handleResumeDispatched() {
            let e = Date.now() - this.connectionStartTime;
            w.info("[RESUMED] took ".concat(e, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
        }
        handleReadyDispatched() {
            this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0
        }
        _getGatewayUrl() {
            return null != this.resumeUrl ? this.resumeUrl : Y
        }
        _handleHeartbeatAck(e) {
            this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, w.verbose("Expedited heartbeat succeeded"))
        }
        _handleHeartbeatTimeout() {
            this._cleanup(e => e.close(4e3)), this.connectionState = C.default.WILL_RECONNECT;
            let e = this.gatewayBackoff.fail(() => this._connect());
            w.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
        }
        _handleClose(e, t, n) {
            if (e = e || !1, this._cleanup(), this.emit("close", {
                    code: t,
                    reason: n
                }), 4004 === t) return this.connectionState = C.default.CLOSED, w.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
            if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = C.default.WILL_RECONNECT, this.nextReconnectIsImmediate) w.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
            else {
                let i = this.gatewayBackoff.fail(() => this._connect());
                w.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((i / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
            }
        }
        _tryDetectInvalidIOSToken(e, t, n) {
            (0, p.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && d.HTTP.get({
                url: b.Endpoints.ME,
                headers: {
                    authorization: this.token
                }
            }).then(e => {
                let {
                    status: t
                } = e;
                m.default.track(b.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                    api_status_code: t
                })
            }, e => {
                let {
                    status: t
                } = e;
                401 === t && (this.connectionState = C.default.CLOSED, w.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, 4004, "invalid token manually detected")), m.default.track(b.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                    api_status_code: t
                })
            }))
        }
        _reset(e, t, n) {
            this.sessionId = null, this.seq = 0, w.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
                wasClean: e,
                code: t,
                reason: n
            })
        }
        _startHeartbeater() {
            let {
                heartbeatInterval: e
            } = this;
            r()(null != e, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null);
            let t = () => {
                this.heartbeatAck ? (this.heartbeatAck = !1, this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout()
            };
            this.initialHeartbeatTimeout = setTimeout(() => {
                this.initialHeartbeatTimeout = null, this.heartbeatAck = !0, this.heartbeater = setInterval(t, e), t()
            }, Math.floor(Math.random() * e))
        }
        _stopHeartbeater() {
            null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), this.initialHeartbeatTimeout = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
        }
        _clearHelloTimeout() {
            null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
        }
        _cleanup(e) {
            u.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
            let t = this.webSocket;
            this.webSocket = null, null != t && (t.onopen = B, t.onmessage = B, t.onerror = B, t.onclose = B, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new L.default(k)
        }
        _doResume() {
            var e;
            this.connectionState = C.default.RESUMING, this.dispatcher.resumeAnalytics = (0, v.createResumeAnalytics)(Date.now() - this.connectionStartTime), w.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(y.Opcode.RESUME, {
                token: this.token,
                session_id: this.sessionId,
                seq: this.seq
            }, !1)
        }
        async _doIdentify() {
            this.seq = 0, this.sessionId = null;
            let e = this.handleIdentify();
            if (null === e) {
                this._handleClose(!0, 4004, "No connection info provided");
                return
            }
            this.connectionState = C.default.IDENTIFYING;
            let t = Date.now();
            this.identifyStartTime = t;
            let [n, i, r] = await Promise.all([(0, T.isCacheEnabled)() ? c.default.getCommittedVersions() : {}, (0, T.isCacheEnabled)() ? I.default.getCommittedVersions() : {}, !!(0, T.isCacheEnabled)() && E.default.canUseGuildVersions()]), a = r ? {
                guild_versions: n,
                highest_last_message_id: i.highest_last_message_id,
                read_state_version: i.read_state_version,
                user_guild_settings_version: i.user_guild_settings_version,
                user_settings_version: i.user_settings_version,
                private_channels_version: i.private_channels_version,
                api_code_version: i.api_code_version,
                initial_guild_id: i.initial_guild_id
            } : {
                guild_versions: {}
            };
            if (this.connectionState !== C.default.IDENTIFYING || this.identifyStartTime !== t) {
                w.warn("Skipping identify because connectionState or identifyStartTime has changed");
                return
            }
            let {
                token: o,
                properties: l = {},
                presence: u
            } = e;
            this.token = o, w.verbose("[IDENTIFY]");
            let d = {
                    token: o,
                    capabilities: g.default,
                    properties: l,
                    presence: u,
                    compress: this.compressionHandler.usesLegacyCompression(),
                    client_state: a
                },
                _ = JSON.stringify(d);
            this.identifyUncompressedByteSize = _.length, this.identifyCompressedByteSize = s.deflate(_).length, this.identifyCount += 1, this.send(y.Opcode.IDENTIFY, d, !1)
        }
        _doFastConnectIdentify() {
            this.seq = 0, this.sessionId = null;
            let e = this.handleIdentify();
            if (null === e) {
                this._handleClose(!0, 4004, "No connection info provided");
                return
            }
            let {
                token: t
            } = e;
            this.token = t, this.connectionState = C.default.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, w.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
        }
        _doResumeOrIdentify() {
            let e = Date.now();
            null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= F) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
        }
        _updateLastHeartbeatAckTime() {
            this.lastHeartbeatAckTime = Date.now()
        }
        _sendHeartbeat() {
            this.send(y.Opcode.HEARTBEAT, this.seq, !1)
        }
        getLogger() {
            return w
        }
        willReconnect() {
            return this.connectionState === C.default.WILL_RECONNECT
        }
        isClosed() {
            return this.connectionState === C.default.CLOSED
        }
        isSessionEstablished() {
            return this.connectionState === C.default.SESSION_ESTABLISHED || this.connectionState === C.default.RESUMING
        }
        isConnected() {
            return this.connectionState === C.default.IDENTIFYING || this.connectionState === C.default.RESUMING || this.connectionState === C.default.SESSION_ESTABLISHED
        }
        connect() {
            return this.isClosed() ? (w.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = C.default.WILL_RECONNECT, this._connect(), !0) : (w.error("Cannot start a new connection, connection state is not closed"), !1)
        }
        resetSocketOnError(e) {
            let {
                action: t,
                error: n
            } = e;
            w.error("resetSocketOnError during ".concat(t, ": ").concat(n.message), n.stack), S.default.increment({
                name: l.MetricEvents.SOCKET_CRASHED,
                tags: ["action:".concat(t)]
            }, !0), !1 !== e.sentry && R.default.captureException(n, {
                tags: {
                    socketCrashedAction: t
                }
            }), m.default.track(b.AnalyticEvents.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                action: t
            }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = C.default.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel();
            let i = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
            0 === this.dispatchExceptionBackoff._fails ? (w.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), i && (this.didForceClearGuildHashes = !0, _.default.dispatch({
                type: "CLEAR_CACHES",
                reason: "Socket reset during ".concat(t)
            })), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * x)
        }
        resetSocketOnDispatchError(e) {
            let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
            this.resetSocketOnError({
                ...e,
                sentry: !t,
                clearCache: t
            })
        }
        close() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.isClosed()) {
                w.verbose("close() called, but socket is already closed.");
                return
            }
            w.info("Closing connection, current state is ".concat(this.connectionState));
            let t = e ? 4e3 : void 0;
            this._cleanup(e => e.close(t)), this.connectionState = C.default.CLOSED, !e && setImmediate(() => {
                this._reset(!0, 1e3, "Disconnect requested by user")
            })
        }
        networkStateChange(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            this.expeditedHeartbeat(e, t, n, !1)
        }
        expeditedHeartbeat(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            if (!this.isClosed()) {
                if (this.isConnected()) {
                    w.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
                        this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
                    }, e);
                    return
                }
                n ? this.resetBackoff(t, i) : w.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
            }
        }
        resetBackoff() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            w.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== C.default.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
        }
        constructor() {
            super(), G(this, "gatewayBackoff", void 0), G(this, "handleIdentify", void 0), G(this, "dispatchExceptionBackoff", new a.default(1e3, x)), G(this, "dispatchSuccessTimer", 0), G(this, "connectionState_", void 0), G(this, "webSocket", void 0), G(this, "seq", void 0), G(this, "sessionId", void 0), G(this, "token", void 0), G(this, "initialHeartbeatTimeout", void 0), G(this, "expeditedHeartbeatTimeout", void 0), G(this, "heartbeatInterval", void 0), G(this, "helloTimeout", void 0), G(this, "heartbeater", void 0), G(this, "lastHeartbeatAckTime", void 0), G(this, "heartbeatAck", void 0), G(this, "connectionStartTime", void 0), G(this, "identifyStartTime", void 0), G(this, "nextReconnectIsImmediate", void 0), G(this, "compressionHandler", void 0), G(this, "hasConnectedOnce", void 0), G(this, "isFastConnect", void 0), G(this, "didForceClearGuildHashes", !1), G(this, "identifyUncompressedByteSize", 0), G(this, "identifyCompressedByteSize", 0), G(this, "analytics", {}), G(this, "identifyCount", 0), G(this, "resumeUrl", null), G(this, "iosGoingAwayEventCount", 0), G(this, "dispatcher", void 0), G(this, "send", (e, t, n) => {
                A.default.isLoggingGatewayEvents && w.verboseDangerously("~>", e, t);
                let i = k.pack({
                    op: e,
                    d: t
                });
                if (!n || this.isSessionEstablished()) try {
                    null != this.webSocket ? this.webSocket.send(i) : w.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
                } catch (e) {} else w.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
            }), this.dispatcher = new M.default(this), this.gatewayBackoff = new a.default(1e3, 6e4), this.connectionState_ = C.default.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new L.default(k), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
        }
    }
}