function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("860677");
    var s, i = n("627445"),
        r = n.n(i),
        a = n("181905"),
        o = n("981980"),
        d = n("102053"),
        u = n("432710"),
        l = n("446674"),
        f = n("872717"),
        _ = n("913144"),
        c = n("105059"),
        g = n("849365"),
        m = n("11275"),
        h = n("400683"),
        v = n("605250"),
        E = n("155084"),
        p = n("410912"),
        y = n("313915"),
        T = n("599110"),
        C = n("922932"),
        I = n("718517"),
        S = n("773336"),
        A = n("286235"),
        D = n("41642"),
        N = n("265912"),
        O = n("799600"),
        P = n("705215"),
        b = n("342797"),
        V = n("123265"),
        R = n("340115"),
        k = n("571420"),
        M = n("797785"),
        w = n("49111");
    let L = new v.default("GatewaySocket"),
        U = new P.default;

    function G() {}
    let F = 30 * I.default.Millis.SECOND,
        H = 3 * I.default.Millis.MINUTE,
        B = 1 * I.default.Millis.MINUTE;

    function x(e) {
        return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
    }
    let Y = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
    s = class extends R.default {
        get connectionState() {
            return this.connectionState_
        }
        set connectionState(e) {
            L.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
        }
        addAnalytics(e) {
            this.analytics = {
                ...this.analytics,
                ...e
            }
        }
        setResumeUrl(e) {
            null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && L.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
        }
        _connect() {
            var e, t;
            let n;
            if (!this.willReconnect()) {
                L.verbose("Skipping _connect because willReconnect is false");
                return
            }
            if (k.getIsPaused()) {
                L.info("Skipping _connect because socket is paused");
                return
            }
            this.connectionState = D.default.CONNECTING, this.nextReconnectIsImmediate = !1;
            let s = this.compressionHandler.getAlgorithm(),
                i = U.getName(),
                r = this._getGatewayUrl(),
                a = window.GLOBAL_ENV.API_VERSION;
            d.default.mark("\uD83C\uDF10", "Socket._connect"), L.info("[CONNECT] ".concat(r, ", ") + "encoding: ".concat(i, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != s ? s : "none")), null !== this.webSocket && (L.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
            }, F);
            let o = new URL(r);
            o.searchParams.append("encoding", i), o.searchParams.append("v", a.toString()), null != s && o.searchParams.append("compress", s);
            ! function(e) {
                let t, {
                        gatewayURL: n,
                        newCallback: s,
                        onOpen: i,
                        onMessage: r,
                        onError: a,
                        onClose: o
                    } = e,
                    d = window._ws,
                    u = !1,
                    l = !1,
                    f = null,
                    _ = null;
                if (window._ws = null, null != d) {
                    if (t = d.ws, d.state.gateway !== n) L.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(d.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
                    else {
                        var c;
                        let e = {
                            ...d.state
                        };
                        null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
                            ...e,
                            data: e.data.substring(0, 100)
                        } : e)), L.log("[FAST CONNECT] successfully took over websocket, state:", {
                            ...e,
                            messages: null === (c = e.messages) || void 0 === c ? void 0 : c.length
                        }), u = d.state.open, l = d.state.identify, f = d.state.messages, _ = d.state.clientState
                    }
                }
                null == t && ((t = (0, M.default)(n)).binaryType = "arraybuffer"), s(t), u && i(l, _), null != f && f.forEach(r), t.onopen = () => i(l, _), t.onmessage = r, t.onclose = o, t.onerror = a
            }({
                gatewayURL: o.toString(),
                newCallback: e => {
                    this.webSocket = e, this.compressionHandler.bindWebSocket(e)
                },
                onOpen: e => {
                    d.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    L.info("[CONNECTED] ".concat(o.toString(), " in ").concat(t, " ms")), this.isFastConnect = e, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
                },
                onMessage: (e = this.compressionHandler, t = (e, t) => {
                    let n = Date.now(),
                        {
                            op: s,
                            s: i,
                            t: r,
                            d: a
                        } = U.unpack(e);
                    s !== R.Opcode.DISPATCH && d.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(s, " ").concat(R.Opcode[s]));
                    let o = Date.now() - n;
                    switch ("READY" === r ? p.default.parseReady.set(n, o) : "READY_SUPPLEMENTAL" === r ? p.default.parseReadySupplemental.set(n, o) : o > 10 && d.default.mark("\uD83C\uDF10", "Parse " + r, o), null != i && (this.seq = i), s) {
                        case R.Opcode.HELLO:
                            this._clearHelloTimeout(), this._handleHello(a);
                            break;
                        case R.Opcode.RECONNECT:
                            this._handleReconnect();
                            break;
                        case R.Opcode.INVALID_SESSION:
                            this._handleInvalidSession(a);
                            break;
                        case R.Opcode.HEARTBEAT:
                            this._sendHeartbeat();
                            break;
                        case R.Opcode.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(a);
                            break;
                        case R.Opcode.DISPATCH:
                            this._handleDispatch(a, r, "READY" === r ? {
                                compressed_byte_size: t,
                                uncompressed_byte_size: x(e),
                                compression_algorithm: this.compressionHandler.getAlgorithm(),
                                packing_algorithm: U.getName(),
                                unpack_duration_ms: o
                            } : null);
                            break;
                        default:
                            L.info("Unhandled op ".concat(s))
                    }
                }, n = 0, e.dataReady(e => {
                    try {
                        return t(e, n)
                    } finally {
                        n = 0
                    }
                }), t => {
                    let s = t.data;
                    null != t.raw_length ? n += t.raw_length : n += x(s), e.feed(s)
                }),
                onError: () => {
                    this.setResumeUrl(null), C.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
                },
                onClose: e => {
                    let {
                        wasClean: t,
                        code: n,
                        reason: s
                    } = e;
                    return this._handleClose(t, n, s)
                }
            })
        }
        _handleHello(e) {
            let t = this.heartbeatInterval = e.heartbeat_interval,
                n = Date.now() - this.connectionStartTime;
            L.verbose("[HELLO] via ".concat((0, b.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
        }
        _handleReconnect() {
            L.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = D.default.WILL_RECONNECT, this._connect()
        }
        _handleInvalidSession(e) {
            L.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
        }
        _handleDispatch(e, t, n) {
            let s = Date.now() - this.connectionStartTime;
            if ("READY" === t) {
                let t = e.session_id;
                this.sessionId = t;
                let n = (0, b.getConnectionPath)(e);
                d.default.setServerTrace(n), L.info("[READY] took ".concat(s, "ms, as ").concat(t)), L.verbose("".concat(n)), this.connectionState = D.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
            } else "READY_SUPPLEMENTAL" === t ? (L.info("[READY_SUPPLEMENTAL] took ".concat(s, "ms")), this.connectionState = D.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (L.verbose((0, b.getConnectionPath)(e)), this.connectionState = D.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
            this.dispatcher.receiveDispatch(e, t, n)
        }
        handleResumeDispatched() {
            let e = Date.now() - this.connectionStartTime;
            L.info("[RESUMED] took ".concat(e, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
        }
        handleReadyDispatched() {
            this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0
        }
        _getGatewayUrl() {
            return null != this.resumeUrl ? this.resumeUrl : Y
        }
        _handleHeartbeatAck(e) {
            this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, L.verbose("Expedited heartbeat succeeded"))
        }
        _handleHeartbeatTimeout() {
            this._cleanup(e => e.close(4e3)), this.connectionState = D.default.WILL_RECONNECT;
            let e = this.gatewayBackoff.fail(() => this._connect());
            L.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
        }
        _handleClose(e, t, n) {
            if (e = e || !1, this._cleanup(), this.emit("close", {
                    code: t,
                    reason: n
                }), 4004 === t) return this.connectionState = D.default.CLOSED, L.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
            if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = D.default.WILL_RECONNECT, this.nextReconnectIsImmediate) L.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
            else {
                let s = this.gatewayBackoff.fail(() => this._connect());
                L.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((s / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
            }
        }
        _tryDetectInvalidIOSToken(e, t, n) {
            (0, S.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && f.default.get({
                url: w.Endpoints.ME,
                headers: {
                    authorization: this.token
                }
            }).then(e => {
                let {
                    status: t
                } = e;
                T.default.track(w.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                    api_status_code: t
                })
            }, e => {
                let {
                    status: t
                } = e;
                401 === t && (this.connectionState = D.default.CLOSED, L.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, 4004, "invalid token manually detected")), T.default.track(w.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                    api_status_code: t
                })
            }))
        }
        _reset(e, t, n) {
            this.sessionId = null, this.seq = 0, L.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
                wasClean: e,
                code: t,
                reason: n
            })
        }
        _startHeartbeater() {
            let {
                heartbeatInterval: e
            } = this;
            r(null != e, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null);
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
            l.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
            let t = this.webSocket;
            this.webSocket = null, null != t && (t.onopen = G, t.onmessage = G, t.onerror = G, t.onclose = G, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new O.default(U)
        }
        _doResume() {
            var e;
            this.connectionState = D.default.RESUMING, this.dispatcher.resumeAnalytics = (0, b.createResumeAnalytics)(Date.now() - this.connectionStartTime), L.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(R.Opcode.RESUME, {
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
            this.connectionState = D.default.IDENTIFYING;
            let t = Date.now();
            this.identifyStartTime = t;
            let [n, s, i] = await Promise.all([(0, h.isCacheEnabled)() ? c.default.getCommittedVersions() : {}, (0, h.isCacheEnabled)() ? m.default.getCommittedVersions() : {}, !!(0, h.isCacheEnabled)() && g.default.canUseGuildVersions()]), r = i ? {
                guild_versions: n,
                highest_last_message_id: s.highest_last_message_id,
                read_state_version: s.read_state_version,
                user_guild_settings_version: s.user_guild_settings_version,
                user_settings_version: s.user_settings_version,
                private_channels_version: s.private_channels_version,
                api_code_version: s.api_code_version,
                initial_guild_id: s.initial_guild_id
            } : {
                guild_versions: {}
            };
            if (this.connectionState !== D.default.IDENTIFYING || this.identifyStartTime !== t) {
                L.warn("Skipping identify because connectionState or identifyStartTime has changed");
                return
            }
            let {
                token: o,
                properties: d = {},
                presence: u
            } = e;
            this.token = o, L.verbose("[IDENTIFY]");
            let l = {
                    token: o,
                    capabilities: N.default,
                    properties: d,
                    presence: u,
                    compress: this.compressionHandler.usesLegacyCompression(),
                    client_state: r
                },
                f = JSON.stringify(l);
            this.identifyUncompressedByteSize = f.length, this.identifyCompressedByteSize = a.deflate(f).length, this.identifyCount += 1, this.send(R.Opcode.IDENTIFY, l, !1)
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
            this.token = t, this.connectionState = D.default.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, L.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
        }
        _doResumeOrIdentify() {
            let e = Date.now(),
                t = null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= H);
            t ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
        }
        _updateLastHeartbeatAckTime() {
            this.lastHeartbeatAckTime = Date.now()
        }
        _sendHeartbeat() {
            this.send(R.Opcode.HEARTBEAT, this.seq, !1)
        }
        getLogger() {
            return L
        }
        willReconnect() {
            return this.connectionState === D.default.WILL_RECONNECT
        }
        isClosed() {
            return this.connectionState === D.default.CLOSED
        }
        isSessionEstablished() {
            return this.connectionState === D.default.SESSION_ESTABLISHED || this.connectionState === D.default.RESUMING
        }
        isConnected() {
            return this.connectionState === D.default.IDENTIFYING || this.connectionState === D.default.RESUMING || this.connectionState === D.default.SESSION_ESTABLISHED
        }
        connect() {
            return this.isClosed() ? (L.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = D.default.WILL_RECONNECT, this._connect(), !0) : (L.error("Cannot start a new connection, connection state is not closed"), !1)
        }
        resetSocketOnError(e) {
            let {
                action: t,
                error: n
            } = e;
            L.error("resetSocketOnError during ".concat(t, ": ").concat(n.message), n.stack), E.default.increment({
                name: u.MetricEvents.SOCKET_CRASHED,
                tags: ["action:".concat(t)]
            }, !0), !1 !== e.sentry && A.default.captureException(n, {
                tags: {
                    socketCrashedAction: t
                }
            }), T.default.track(w.AnalyticEvents.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                action: t
            }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = D.default.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel();
            let s = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
            0 === this.dispatchExceptionBackoff._fails ? (L.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), s && (this.didForceClearGuildHashes = !0, _.default.dispatch({
                type: "CLEAR_CACHES",
                reason: "Socket reset during ".concat(t)
            })), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * B)
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
            if (this.isClosed()) {
                L.verbose("close() called, but socket is already closed.");
                return
            }
            L.info("Closing connection, current state is ".concat(this.connectionState)), this._cleanup(e => e.close()), this.connectionState = D.default.CLOSED, setImmediate(() => {
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
                s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            if (!this.isClosed()) {
                if (this.isConnected()) {
                    L.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
                        this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
                    }, e);
                    return
                }
                n ? this.resetBackoff(t, s) : L.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
            }
        }
        resetBackoff() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            L.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== D.default.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
        }
        constructor() {
            super(), this.dispatchExceptionBackoff = new o.default(1e3, B), this.dispatchSuccessTimer = 0, this.didForceClearGuildHashes = !1, this.identifyUncompressedByteSize = 0, this.identifyCompressedByteSize = 0, this.analytics = {}, this.identifyCount = 0, this.resumeUrl = null, this.iosGoingAwayEventCount = 0, this.send = (e, t, n) => {
                y.default.isLoggingGatewayEvents && L.verboseDangerously("~>", e, t);
                let s = U.pack({
                    op: e,
                    d: t
                });
                if (!n || this.isSessionEstablished()) try {
                    null != this.webSocket ? this.webSocket.send(s) : L.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
                } catch (e) {} else L.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
            }, this.dispatcher = new V.default(this), this.gatewayBackoff = new o.default(1e3, 6e4), this.connectionState_ = D.default.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new O.default(U), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
        }
    }
}