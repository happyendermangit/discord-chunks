function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        StreamDirector: function() {
            return o
        },
        StreamDirectorActionType: function() {
            return n
        }
    });
    var d, n, c = a("75834");

    function i(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }(d = n || (n = {})).STREAM = "stream", d.PAUSE = "pause", d.STOP = "stop";
    class o {
        onStreamBegin(e, t) {
            let a = (0, c.getInitialStreamTarget)(e, t);
            null == a || null == a.windowHandle ? this.callback({
                type: "stop"
            }) : this._stream(a)
        }
        onStreamKilled() {
            this._kill()
        }
        onStreamEnd() {
            this._stop()
        }
        onDetectionUpdate(e) {
            this._update(e)
        }
        onCaptureEnd(e, t) {
            var a;
            (null === (a = this.application) || void 0 === a ? void 0 : a.windowHandle) === t && this._update(e)
        }
        onCaptureLegacyEnd(e) {
            var t;
            return (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) != null ? this.onCaptureEnd(e, this.application.windowHandle) : this._stop()
        }
        _update(e) {
            let t = (0, c.getStreamTarget)(e, this.application);
            if (null != t) return null == t.windowHandle ? this._pause() : this._stream(t);
            this._stop()
        }
        _stream(e) {
            var t;
            let a = (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) !== e.windowHandle;
            this.active = !0, this.application = Object.assign({}, e), a && this.callback({
                type: "stream",
                sourceId: "window:".concat(this.application.windowHandle)
            })
        }
        _kill() {
            this.active = !1, this.application = null
        }
        _stop() {
            this.active && (this._kill(), this.callback({
                type: "stop"
            }))
        }
        _pause() {
            this.active && (this.application.windowHandle = null, this.callback({
                type: "pause"
            }))
        }
        constructor(e) {
            i(this, "callback", void 0), i(this, "active", void 0), i(this, "application", void 0), this.callback = e, this.active = !1, this.application = null
        }
    }
}