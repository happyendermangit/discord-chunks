function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("411104"), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("710845"),
        a = n("374023"),
        o = n("420491");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let {
        NativeModules: u
    } = {}, d = [];
    class _ {
        static canUse() {
            return !1
        }
        bindWebSocket(e) {}
        feed(e) {}
        recomputeAlgorithm() {}
        dataReady(e) {
            this._onDataReady = e
        }
        constructor(e) {
            l(this, "_onDataReady", void 0), l(this, "_gatewayEncoding", void 0), this._onDataReady = null, this._gatewayEncoding = e
        }
    }
    d.push(class extends _ {
        static canUse() {
            return void 0 !== window.Uint8Array
        }
        getAlgorithm() {
            return "zlib-stream"
        }
        usesLegacyCompression() {
            return !1
        }
        feed(e) {
            let t = this._pako,
                n = this._inflate;
            if (null == n) throw Error("Trying to feed to closed compression adapter");
            if (null === this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
            if (e instanceof ArrayBuffer) {
                let i = new DataView(e),
                    r = i.byteLength >= 4 && 65535 === i.getUint32(i.byteLength - 4, !1);
                n.push(e, !!r && t.Z_SYNC_FLUSH)
            } else throw Error("Expected array buffer, but got " + typeof e)
        }
        close() {
            null != this._inflate && (this._inflate.onEnd = null, this._inflate.chunks = []), this._inflate = null
        }
        handleFlushEnd(e) {
            let t;
            let n = this._pako,
                i = this._inflate;
            if (null == i) {
                new s.default("GatewayCompressionHandler").error("flush end happened on closed compression adapter");
                return
            }
            if (e !== n.Z_OK) throw Error("zlib error, ".concat(e, ", ").concat(i.strm.msg));
            let {
                chunks: r
            } = i, a = r.length;
            if (this._gatewayEncoding.wantsString()) t = a > 1 ? r.join("") : r[0];
            else if (a > 1) {
                let e = 0;
                for (let t = 0; t < a; t++) e += r[t].length;
                let n = new Uint8Array(e),
                    i = 0;
                for (let e = 0; e < a; e++) {
                    let t = r[e];
                    n.set(t, i), i += t.length
                }
                t = n
            } else t = r[0];
            r.length = 0, null != this._onDataReady && this._onDataReady(t)
        }
        constructor(e) {
            super(e), l(this, "_inflate", void 0), l(this, "_pako", n("457854"));
            let t = this._pako;
            (this._inflate = new t.Inflate({
                chunkSize: 65536,
                to: this._gatewayEncoding.wantsString() ? "string" : ""
            })).onEnd = this.handleFlushEnd.bind(this)
        }
    }), d.push(class extends _ {
        static canUse() {
            return !0
        }
        getAlgorithm() {
            return null
        }
        usesLegacyCompression() {
            return !0
        }
        feed(e) {
            let t = this._pako;
            if (e instanceof ArrayBuffer && this._gatewayEncoding.wantsString() && (e = t.inflate(e, {
                    to: "string"
                })), null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
            this._onDataReady(e)
        }
        close() {}
        constructor(...e) {
            super(...e), l(this, "_pako", n("457854"))
        }
    }), d.push(class extends _ {
        static canUse() {
            return !1
        }
        bindWebSocket(e) {
            this.close(), this._socketId = e._socketId, this._usesZstd ? u.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0) : u.DCDCompressionManager.enableZlibStreamSupport(this._socketId)
        }
        recomputeAlgorithm() {
            this._usesZstd = o.default.shouldUseZstd()
        }
        getAlgorithm() {
            return this._usesZstd ? "zstd-stream" : "zlib-stream"
        }
        usesLegacyCompression() {
            return !1
        }
        feed(e) {
            if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
            null !== e && this._onDataReady(e)
        }
        close() {
            let e = this._socketId;
            this._socketId = null, null !== e && u.DCDCompressionManager.disableZlibStreamSupport(e)
        }
        constructor(e) {
            super(e), l(this, "_socketId", void 0), l(this, "_usesZstd", void 0), this._usesZstd = !1, this._socketId = null
        }
    });
    class c extends _ {
        static canUse() {
            return !0
        }
        getAlgorithm() {
            return null
        }
        usesLegacyCompression() {
            return !1
        }
        feed(e) {
            if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
            this._onDataReady(e)
        }
        close() {}
    }
    d.push(c);
    let E = r().find(d, e => e.canUse());
    a.ProcessArgs.isDiscordGatewayPlaintextSet() && (E = c), t.default = E
}