function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        IdleTransaction: function() {
            return c
        },
        TRACING_DEFAULTS: function() {
            return o
        }
    });
    var r = n("648238"),
        i = n("48950"),
        a = n("912033");
    let o = {
            idleTimeout: 1e3,
            finalTimeout: 3e4,
            heartbeatInterval: 5e3
        },
        s = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
    class u extends i.SpanRecorder {
        constructor(t, e, n, r) {
            super(r), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n
        }
        add(t) {
            t.spanId !== this.transactionSpanId && (t.finish = e => {
                t.endTimestamp = "number" == typeof e ? e : (0, r.timestampInSeconds)(), this._popActivity(t.spanId)
            }, void 0 === t.endTimestamp && this._pushActivity(t.spanId)), super.add(t)
        }
    }
    class c extends a.Transaction {
        __init() {
            this.activities = {}
        }
        __init2() {
            this._heartbeatCounter = 0
        }
        __init3() {
            this._finished = !1
        }
        __init4() {
            this._idleTimeoutCanceledPermanently = !1
        }
        __init5() {
            this._beforeFinishCallbacks = []
        }
        __init6() {
            this._finishReason = "externalFinish"
        }
        constructor(t, e, n = o.idleTimeout, i = o.finalTimeout, a = o.heartbeatInterval, s = !1) {
            super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = i, this._heartbeatInterval = a, this._onScope = s, c.prototype.__init.call(this), c.prototype.__init2.call(this), c.prototype.__init3.call(this), c.prototype.__init4.call(this), c.prototype.__init5.call(this), c.prototype.__init6.call(this), s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`), e.configureScope(t => t.setSpan(this))), this._restartIdleTimeout(), setTimeout(() => {
                !this._finished && (this.setStatus("deadline_exceeded"), this._finishReason = "finalTimeout", this.finish())
            }, this._finalTimeout)
        }
        finish(t = (0, r.timestampInSeconds)()) {
            if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setTag("finishReason", this._finishReason), this.spanRecorder) {
                for (let e of (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op), this._beforeFinishCallbacks)) e(this, t);
                this.spanRecorder.spans = this.spanRecorder.spans.filter(e => {
                    if (e.spanId === this.spanId) return !0;
                    !e.endTimestamp && (e.endTimestamp = t, e.setStatus("cancelled"), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                    let n = e.startTimestamp < t;
                    return !n && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)), n
                }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] flushing IdleTransaction")
            } else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] No active IdleTransaction");
            if (this._onScope) {
                let t = this._idleHub.getScope();
                t.getTransaction() === this && t.setSpan(void 0)
            }
            return super.finish(t)
        }
        registerBeforeFinishCallback(t) {
            this._beforeFinishCallbacks.push(t)
        }
        initSpanRecorder(t) {
            !this.spanRecorder && (this.spanRecorder = new u(t => {
                !this._finished && this._pushActivity(t)
            }, t => {
                !this._finished && this._popActivity(t)
            }, this.spanId, t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("Starting heartbeat"), this._pingHeartbeat()), this.spanRecorder.add(this)
        }
        cancelIdleTimeout(t, {
            restartOnChildSpanChange: e
        } = {
            restartOnChildSpanChange: !0
        }) {
            this._idleTimeoutCanceledPermanently = !1 === e, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = "cancelled", this.finish(t)))
        }
        setFinishReason(t) {
            this._finishReason = t
        }
        _restartIdleTimeout(t) {
            this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
                !this._finished && 0 === Object.keys(this.activities).length && (this._finishReason = "idleTimeout", this.finish(t))
            }, this._idleTimeout)
        }
        _pushActivity(t) {
            this.cancelIdleTimeout(void 0, {
                restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
            }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)
        }
        _popActivity(t) {
            if (this.activities[t] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] popActivity ${t}`), delete this.activities[t], ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
                let t = (0, r.timestampInSeconds)();
                this._idleTimeoutCanceledPermanently ? (this._finishReason = "cancelled", this.finish(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
            }
        }
        _beat() {
            if (this._finished) return;
            let t = Object.keys(this.activities).join("");
            t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = "heartbeatFailed", this.finish()) : this._pingHeartbeat()
        }
        _pingHeartbeat() {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
                this._beat()
            }, this._heartbeatInterval)
        }
    }
}