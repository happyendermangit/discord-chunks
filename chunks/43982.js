function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("70102");
    var i = n("44170"),
        s = n("597755"),
        r = n.n(s),
        a = n("522632"),
        o = n("748820"),
        l = n("872717"),
        u = n("861309"),
        d = n("49111");
    let c = d.RPC_STARTING_PORT + d.RPC_PORT_RANGE - 1;

    function f(e, t) {
        if (null == e || null == t) throw Error("cmd and name required");
        return "".concat(e, ":").concat(t)
    }
    let _ = a.parse(location.search.slice(1)),
        h = parseInt(null != _.rpc && "" !== _.rpc ? _.rpc : d.RPC_STARTING_PORT, 10),
        E = null;
    class g extends i.EventEmitter {
        get port() {
            return h
        }
        get connected() {
            return null != E && E.readyState === WebSocket.OPEN
        }
        connect() {
            if (null == E) {
                if (h > c) {
                    h = d.RPC_STARTING_PORT, this.emit("disconnected");
                    return
                }
                try {
                    E = new WebSocket("ws://127.0.0.1:".concat(this.port, "/?v=").concat(d.RPC_VERSION))
                } catch (e) {
                    this.disconnect({
                        code: d.RPCCloseCodes.CLOSE_ABNORMAL
                    });
                    return
                }
                null != E && (E.onmessage = e => {
                    let t;
                    try {
                        if ("string" == typeof e.data) t = JSON.parse(e.data);
                        else throw Error("payload data not a string")
                    } catch (e) {
                        this.emit("error", e), this.disconnect();
                        return
                    }
                    let {
                        cmd: n,
                        evt: i,
                        nonce: s,
                        data: r
                    } = t;
                    if (n === d.RPCCommands.DISPATCH) {
                        if (i === d.RPCEvents.READY) {
                            this.emit("connected");
                            return
                        }
                        if (i === d.RPCEvents.ERROR) {
                            this.emit("error", new u.default({
                                errorCode: r.code
                            }, r.message)), this.disconnect();
                            return
                        }
                        this.emit(f(n, i), r);
                        return
                    }
                    let a = null;
                    i === d.RPCEvents.ERROR && (a = new u.default({
                        errorCode: r.code
                    }, r.message), r = null), this.emit(f(n, s), a, r)
                }, E.onclose = E.onerror = e => this.disconnect(e))
            }
        }
        disconnect(e) {
            if (null != e && "code" in e && [d.RPCCloseCodes.CLOSE_ABNORMAL, d.RPCCloseCodes.INVALID_CLIENTID].includes(e.code)) {
                h++, E = null, this.connect();
                return
            }
            null != E && (this.emit("disconnected"), E.close(), E = null)
        }
        subscribe(e, t, n) {
            return this.on(f(d.RPCCommands.DISPATCH, e), n), this.request(d.RPCCommands.SUBSCRIBE, t, e)
        }
        unsubscribe(e, t, n) {
            return this.removeListener(f(d.RPCCommands.DISPATCH, e), n), this.request(d.RPCCommands.UNSUBSCRIBE, t, e)
        }
        request(e, t, n) {
            return new Promise((i, s) => {
                if (!this.connected) {
                    this.once("connected", () => {
                        this.removeAllListeners("disconnected"), i(this.request(e, t, n))
                    }), this.once("disconnected", () => {
                        this.removeAllListeners("connected"), s(Error("disconnected during request"))
                    }), this.connect();
                    return
                }
                let r = (0, o.v4)(),
                    a = JSON.stringify({
                        cmd: e,
                        args: t,
                        evt: n,
                        nonce: r
                    });
                this.once(f(e, r), (e, t) => null != e ? s(e) : i(t)), null == E || E.send(a)
            })
        }
        requestOnce(e, t, n) {
            return l.default.post({
                url: "http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(d.RPC_VERSION),
                body: {
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, o.v4)()
                }
            }).then(e => {
                let {
                    body: {
                        evt: t,
                        data: n
                    }
                } = e;
                if (t === d.RPCEvents.ERROR) throw new u.default({
                    errorCode: n.code
                }, n.message);
                return n
            })
        }
        requestRedirect(e, t, n) {
            if ("Chrome" === r.name && parseInt(r.version, 10) >= 58) return this.requestOnce(e, t, n);
            let i = encodeURIComponent(JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, o.v4)()
                })),
                s = encodeURIComponent("".concat(location.protocol, "//").concat(location.host).concat(location.pathname, "?done=true"));
            return window.open("http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(d.RPC_VERSION, "&payload=").concat(i, "&callback=").concat(s), "_self"), new Promise(() => null)
        }
    }
    var m = new g
}