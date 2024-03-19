function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return E
        }
    });
    var n = i("446674"),
        l = i("862337"),
        a = i("913144"),
        u = i("49111");
    let r = {},
        d = {};

    function s(t, e, i) {
        var n;
        let {
            applicationId: s
        } = i, o = null !== (n = r[s]) && void 0 !== n ? n : {};
        if (o[e] = t, r[s] = o, !__OVERLAY__ && t === u.ActivityActionStates.FAILED) {
            null != d[s] && d[s].stop();
            let t = new l.Timeout;
            t.start(12e4, () => a.default.dispatch({
                type: "ACTIVITY_LAUNCH_FAIL",
                applicationId: s,
                activityType: e
            })), d[s] = t
        }
    }

    function o(t) {
        return s(u.ActivityActionStates.COMPLETE, u.ActivityActionTypes.JOIN, t)
    }
    class c extends n.default.Store {
        getState(t, e) {
            let i = r[t];
            return null == i ? void 0 : i[e]
        }
        getStates() {
            return r
        }
    }
    c.displayName = "ActivityLauncherStore";
    var E = new c(a.default, {
        OVERLAY_INITIALIZE: function(t) {
            let {
                activityLauncherStates: e
            } = t;
            r = {
                ...e
            }
        },
        ACTIVITY_JOIN_LOADING: t => s(u.ActivityActionStates.LOADING, u.ActivityActionTypes.JOIN, t),
        ACTIVITY_JOIN_FAILED: t => s(u.ActivityActionStates.FAILED, u.ActivityActionTypes.JOIN, t),
        ACTIVITY_JOIN: o,
        EMBEDDED_ACTIVITY_CLOSE: o,
        ACTIVITY_LAUNCH_FAIL: function(t) {
            let {
                applicationId: e,
                activityType: i
            } = t, n = r[e];
            if (null == n || n[i] !== u.ActivityActionStates.FAILED) return !1;
            delete n[i]
        }
    })
}