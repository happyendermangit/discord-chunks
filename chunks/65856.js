function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("733860"), n("653041"), n("411104"), n("47120");
    var i = n("512722"),
        r = n.n(i),
        s = n("392711"),
        a = n.n(s),
        o = n("626135"),
        l = n("70956"),
        u = n("189800"),
        d = n("996106"),
        _ = n("863141"),
        c = n("34954"),
        E = n("186901"),
        I = n("981631");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let f = "RPC_STORE_WAIT",
        S = [];
    class h {
        registerTransport(e) {
            e.on("connect", e => this.handleConnect(e)), e.on("request", (e, t) => this.handleRequest(e, t)), e.on("disconnect", (e, t) => this.handleDisconnect(e, t))
        }
        handleConnect(e) {
            this.sockets.add(e), this.onConnect(e);
            let t = {
                v: e.version,
                config: {
                    cdn_host: window.GLOBAL_ENV.CDN_HOST,
                    api_endpoint: window.GLOBAL_ENV.API_ENDPOINT,
                    environment: "production"
                }
            };
            if (e.transport === E.TransportTypes.IPC) {
                let n = this.getCurrentUser();
                if (null == n) {
                    e.close(I.RPCCloseCodes.CLOSE_NORMAL, "User logged out");
                    return
                }
                t.user = (0, _.default)(n)
            }
            this.dispatch(e, null, I.RPCCommands.DISPATCH, I.RPCEvents.READY, t)
        }
        handleDisconnect(e, t) {
            this.removeSubscriptions(e), this.sockets.delete(e), this.onDisconnect(e, t)
        }
        handleRequest(e, t) {
            new Promise(n => {
                if (null == t.nonce || "" === t.nonce) throw new d.default({
                    errorCode: I.RPCErrors.INVALID_PAYLOAD
                }, "Payload requires a nonce");
                let i = t.cmd,
                    r = this.commands[i];
                if (null == r) throw new d.default({
                    errorCode: I.RPCErrors.INVALID_COMMAND
                }, "Invalid command: ".concat(t.cmd));
                if (!(0, c.default)(e.authorization.scopes, r.scope)) throw new d.default({
                    errorCode: I.RPCErrors.INVALID_PERMISSIONS
                }, "Not authenticated or invalid scope");
                u.ExperimentRPCServerAnalyticsKillswitch.getCurrentConfig({
                    location: "RPCServer"
                }).enabled && o.default.track(I.AnalyticEvents.RPC_COMMAND_SENT, {
                    command: i,
                    scope: "object" == typeof r.scope ? JSON.stringify(r.scope) : r.scope,
                    application_id: e.application.id,
                    socket_scope: e.authorization.scopes.toString()
                }), n(r)
            }).then(e => new Promise(async (n, i) => {
                if (null != e.validation) {
                    let s = await this.getJoi();
                    r()(null != e.validation, "command.validation must not be null"), s.validate(t.args, e.validation(s), {
                        convert: !1
                    }, t => {
                        if (null != t) {
                            i(new d.default({
                                errorCode: I.RPCErrors.INVALID_PAYLOAD
                            }, t.message));
                            return
                        }
                        n(e)
                    })
                } else n(e)
            })).then(n => {
                var i;
                return n.handler({
                    socket: e,
                    server: this,
                    cmd: t.cmd,
                    evt: t.evt,
                    nonce: t.nonce,
                    args: null !== (i = t.args) && void 0 !== i ? i : {},
                    isSocketConnected: () => this.sockets.has(e)
                })
            }).then(n => this.dispatch(e, t.nonce, t.cmd, null, n)).catch(n => {
                let {
                    code: i,
                    message: r
                } = n;
                return this.error(e, t.nonce, t.cmd, i, r)
            })
        }
        setCommandHandler(e, t) {
            this.commands[e] = t
        }
        setEventHandler(e, t) {
            this.events[e] = t
        }
        dispatch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.RPCCommands.DISPATCH,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            e.send({
                cmd: n,
                data: r,
                evt: i,
                nonce: t
            })
        }
        error(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.RPCCommands.DISPATCH,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I.RPCErrors.UNKNOWN_ERROR,
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Unknown Error";
            o.default.track(I.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT, {
                command: n,
                code: i,
                message: r
            }), this.dispatch(e, t, n, I.RPCEvents.ERROR, {
                code: i,
                message: r
            })
        }
        isSubscribed(e, t) {
            return void 0 !== this.subscriptions.find(n => n.socket.application.id === e && n.evt === t)
        }
        getSubscription(e, t, n) {
            return this.subscriptions.find(i => i.socket === e && i.evt === t && a().isEqual(i.args, n))
        }
        addSubscription(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                r = this.dispatch.bind(this, e, null, I.RPCCommands.DISPATCH, t);
            null == this.getSubscription(e, t, n) && this.subscriptions.push({
                update: i,
                dispatch: r,
                prevState: i ? i({
                    prevState: null,
                    dispatch: r
                }) : null,
                socket: e,
                evt: t,
                args: n
            })
        }
        removeSubscription(e, t, n) {
            a().remove(this.subscriptions, i => i.socket === e && i.evt === t && a().isEqual(i.args, n))
        }
        removeSubscriptions(e) {
            a().remove(this.subscriptions, t => t.socket === e)
        }
        dispatchToSubscriptions(e, t, n, i) {
            var r;
            if (!(null != i && "" !== i && (r = i, S.includes(r) || (S.unshift(r), S.splice(50), 0)))) this.subscriptions.forEach(i => {
                var r, s, o;
                if (i.evt === e) {
                    if (("function" != typeof t || t(i)) && ("object" != typeof t || (s = t, o = null !== (r = i.args) && void 0 !== r ? r : {}, a().isEqual(s, a().pick(o, Object.keys(s)))))) this.dispatch(i.socket, null, I.RPCCommands.DISPATCH, i.evt, n)
                }
            })
        }
        updateSubscriptions() {
            this.subscriptions.forEach(e => {
                e.update && (e.prevState = e.update(e))
            })
        }
        storeWait(e, t, n) {
            let i = t();
            if (i || 0 === n) return Promise.resolve(i);
            let r = a().uniqueId(),
                s = () => this.removeSubscription(e, f, {
                    uniqueId: r
                });
            return new Promise((i, a) => {
                let o = setTimeout(() => {
                    s(), a(Error("timeout"))
                }, n * l.default.Millis.SECOND);
                this.addSubscription(e, f, {
                    uniqueId: r
                }, () => {
                    let e = t();
                    e && (clearTimeout(o), i(e))
                })
            }).then(e => (s(), e))
        }
        constructor(e) {
            T(this, "getCurrentUser", () => null), T(this, "onConnect", () => {}), T(this, "onDisconnect", () => {}), T(this, "getJoi", void 0), T(this, "events", {}), T(this, "commands", {}), T(this, "sockets", new Set), T(this, "subscriptions", []), this.getJoi = e
        }
    }
}