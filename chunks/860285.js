function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var l = n("446674"),
        r = n("913144");
    let a = new Set,
        i = {};

    function u(e) {
        let {
            applicationId: t
        } = e;
        a.add(t)
    }

    function o(e) {
        let {
            applicationId: t
        } = e;
        a.delete(t)
    }
    class s extends l.default.Store {
        get launchingGames() {
            return a
        }
        get launchableGames() {
            return i
        }
        isLaunchable(e) {
            return null != i[e] ? i[e] : (i[e] = !1, r.default.dispatch({
                type: "CHECK_LAUNCHABLE_GAME",
                gameId: e
            }), !1)
        }
    }
    s.displayName = "LaunchableGameStore";
    var c = new s(r.default, {
        GAME_LAUNCHABLE_UPDATE: function(e) {
            let {
                gameId: t,
                isLaunchable: n
            } = e;
            i[t] = n
        },
        GAME_CLOUD_SYNC_START: u,
        GAME_LAUNCH_START: u,
        GAME_LAUNCH_SUCCESS: o,
        GAME_LAUNCH_FAIL: o,
        GAME_CLOUD_SYNC_CONFLICT: o,
        GAME_CLOUD_SYNC_ERROR: o,
        GAME_CLOUD_SYNC_COMPLETE: o
    })
}