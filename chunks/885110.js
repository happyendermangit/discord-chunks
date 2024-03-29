function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120");
    var s, a, o, l, u = n("348327"),
        d = n.n(u),
        _ = n("392711"),
        c = n.n(_),
        E = n("442837"),
        I = n("570140"),
        T = n("503438"),
        f = n("860852"),
        S = n("768419"),
        h = n("695346"),
        A = n("581883"),
        m = n("131704"),
        N = n("780570"),
        O = n("314897"),
        p = n("77498"),
        R = n("517100"),
        C = n("283595"),
        g = n("293273"),
        L = n("158776"),
        D = n("797258"),
        v = n("981631");
    let M = !1,
        y = v.StatusTypes.ONLINE,
        P = v.StatusTypes.UNKNOWN,
        U = 0,
        b = [],
        G = !1,
        w = !0,
        k = Object.freeze([]),
        B = [];

    function V(e) {
        return (0, N.shouldShareApplicationActivity)(e, C.default)
    }

    function F(e) {
        switch (e.type) {
            case v.ActivityTypes.LISTENING:
                if ((0, T.default)(e)) return S.default.shouldShowActivity();
                if (null != e.application_id) return V(e.application_id);
                return !1;
            case v.ActivityTypes.PLAYING:
                return null != e.application_id ? V(e.application_id) : function(e) {
                    let t = p.default.getGameByName(e);
                    return null != t ? V(t.id) : h.ShowCurrentGame.getSetting()
                }(e.name);
            case v.ActivityTypes.STREAMING:
            case v.ActivityTypes.WATCHING:
            default:
                return null == e.application_id || V(e.application_id)
        }
    }

    function x() {
        var e;
        if (U = null !== (e = R.default.getIdleSince()) && void 0 !== e ? e : 0, G = R.default.isAFK(), w) y = P, H();
        else if (M) y = v.StatusTypes.INVISIBLE;
        else {
            let e = h.StatusSetting.getSetting();
            y = e !== v.StatusTypes.UNKNOWN ? e : v.StatusTypes.ONLINE
        }
        y === v.StatusTypes.ONLINE && U > 0 && (y = v.StatusTypes.IDLE);
        let t = !1,
            n = w || y === v.StatusTypes.INVISIBLE ? [] : g.default.getActivities().filter(F);
        !d()(b, n) && (b = n, t = !0);
        let i = D.default.getRemoteActivities();
        if (k !== i && (k = i, t = !0), t) {
            let e = b.find(e => e.type === v.ActivityTypes.CUSTOM_STATUS);
            B = b.filter(e => e.type !== v.ActivityTypes.CUSTOM_STATUS).length > 0 ? b : null != e ? [e, ...c()(k).filter(e => e.type !== v.ActivityTypes.CUSTOM_STATUS).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()] : c().uniqBy(k, e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
        }
    }

    function H() {
        i = void 0, r = void 0
    }

    function Y() {
        w = !1, P = v.StatusTypes.UNKNOWN, x(), L.default.setCurrentUserOnConnectionOpen(y, B)
    }
    class j extends(s = E.default.Store) {
        initialize() {
            this.waitFor(R.default, A.default, g.default, D.default, C.default, p.default), this.syncWith([g.default], x)
        }
        getLocalPresence() {
            return {
                status: y,
                since: U,
                activities: b,
                afk: G,
                broadcast: r
            }
        }
        getStatus() {
            return y
        }
        getActivities() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return e ? B : b
        }
        getPrimaryActivity() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return e ? B[0] : b[0]
        }
        getApplicationActivity(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return this.findActivity(t => t.application_id === e, t)
        }
        findActivity(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return this.getActivities(t).find(e)
        }
        getBroadcast() {
            return i
        }
    }
    l = "SelfPresenceStore", (o = "displayName") in(a = j) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new j(I.default, {
        START_SESSION: x,
        CONNECTION_OPEN: function() {
            Y()
        },
        CONNECTION_OPEN_SUPPLEMENTAL: Y,
        OVERLAY_INITIALIZE: Y,
        CONNECTION_CLOSED: x,
        IDLE: x,
        AFK: x,
        RUNNING_GAMES_CHANGE: x,
        STREAMING_UPDATE: x,
        USER_SETTINGS_PROTO_UPDATE: x,
        LOCAL_ACTIVITY_UPDATE: x,
        SPOTIFY_PLAYER_STATE: x,
        SPOTIFY_PLAYER_PLAY: x,
        USER_CONNECTIONS_UPDATE: x,
        SESSIONS_REPLACE: x,
        RPC_APP_DISCONNECTED: x,
        LIBRARY_FETCH_SUCCESS: x,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: x,
        LOGOUT: function() {
            w = !0, P = y, x()
        },
        EMBEDDED_ACTIVITY_CLOSE: x,
        EMBEDDED_ACTIVITY_OPEN: x,
        FORCE_INVISIBLE: function(e) {
            return M = e.invisible, x()
        },
        WINDOW_FOCUS: function() {
            return M = !1, x()
        },
        BROADCAST_START: function(e) {
            i = e.broadcast, r = (0, f.broadcastToServer)(e.broadcast)
        },
        BROADCAST_STOP: H,
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            t instanceof m.ChannelRecordBase && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === O.default.getId() && (i = void 0, r = void 0)
        }
    })
}