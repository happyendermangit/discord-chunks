function(e, t, n) {
    "use strict";
    let i, r, o;
    n.r(t), n.d(t, {
        AnalyticsActionHandlers: function() {
            return E
        },
        analyticsTrackingStoreMaker: function() {
            return h
        }
    }), n("860677"), n("843762"), n("222007"), n("424973"), n("704744");
    var s, l = n("391679"),
        a = n("446674"),
        u = n("872717"),
        c = n("166745");
    let d = 1500,
        _ = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : e => setImmediate(() => e()),
        f = new c.default,
        E = {
            handleConnectionOpen: () => {},
            handleConnectionClosed: () => {},
            handleFingerprint: () => {},
            handleTrack: () => {}
        },
        S = [],
        g = () => Promise.resolve({
            sessionId: void 0
        }),
        h = e => {
            let {
                dispatcher: t,
                actionHandler: n,
                getFingerprint: s,
                getSessionId: c = g,
                TRACKING_URL: h,
                drainTimeoutOverride: m,
                waitFor: p
            } = e;
            d = null != m ? m : 1500;

            function I() {
                return 0 !== S.length && (null != r ? null != i : null != s())
            }

            function T() {
                null == o && I() && (o = _(v, {
                    timeout: d
                }))
            }

            function v() {
                if (o = null, !I()) return;
                let e = S.slice();
                S = [];
                let t = A(e);
                t.then(() => {
                    e.forEach(e => {
                        var t;
                        null === (t = e.resolve) || void 0 === t || t.call(e)
                    })
                }, t => {
                    S.unshift(...e);
                    let {
                        message: n
                    } = t.body || t;
                    console.warn("[AnalyticsTrackingStore] Track:", n)
                })
            }

            function A(e) {
                let t = Date.now(),
                    n = e.map(e => ({
                        ...e,
                        properties: {
                            ...e.properties,
                            client_send_timestamp: t
                        }
                    }));
                return u.default.post({
                    url: h,
                    body: {
                        token: i,
                        events: n
                    },
                    retries: 3
                })
            }
            E.handleConnectionOpen = function(e) {
                let {
                    analyticsToken: t,
                    user: n
                } = e;
                return null != t && (i = t), null != n.id && (r = n.id), T(), !1
            }, E.handleConnectionClosed = function() {
                return v(), i = null, r = null, !1
            }, E.handleFingerprint = function() {
                return v(), !1
            }, E.handleTrack = function(e) {
                let {
                    event: t,
                    properties: n,
                    flush: i,
                    fingerprint: o,
                    resolve: a
                } = e;
                return c().then(e => {
                    let {
                        sessionId: u
                    } = e, c = {
                        type: t,
                        fingerprint: o,
                        properties: {
                            client_track_timestamp: Date.now(),
                            client_heartbeat_session_id: u,
                            ...n
                        },
                        resolve: a
                    }, d = function(e) {
                        if (null != r) return r;
                        let t = e.fingerprint || s();
                        return null != t ? (0, l.extractId)(t) : null
                    }(c);
                    null != d && (c.properties.client_uuid = f.generate(d)), S.push(c), S.length > 1e4 && (S = S.slice(-1e4)), i ? v() : T()
                }), !1
            };
            class N extends a.default.Store {
                initialize() {
                    null != p && this.waitFor(...p)
                }
                constructor(...e) {
                    super(...e), this.submitEventsImmediately = A
                }
            }
            return N.displayName = "AnalyticsTrackingStore", new N(t, n)
        }
}