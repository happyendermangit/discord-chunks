function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDesktopSourceMetadata: function() {
            return u
        },
        trackWithOverlayMetadata: function() {
            return d
        }
    });
    var i = n("594190"),
        r = n("131951"),
        s = n("449224"),
        a = n("626135"),
        o = n("367907"),
        l = n("981631");

    function u() {
        let e, t, n, s, a;
        let o = r.default.getGoLiveSource();
        if (null != o && (e = o.quality.resolution, t = o.quality.frameRate, null != o.desktopSource)) {
            var l, u;
            n = o.desktopSource.soundshareSession;
            let e = null != o.desktopSource.sourcePid ? i.default.getGameForPID(o.desktopSource.sourcePid) : null;
            s = null !== (l = null == e ? void 0 : e.name) && void 0 !== l ? l : null, a = null !== (u = null == e ? void 0 : e.id) && void 0 !== u ? u : null
        }
        return {
            video_input_resolution: e,
            video_input_frame_rate: t,
            soundshare_session: n,
            share_game_name: s,
            share_game_id: a
        }
    }

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = s.default.getGame();
        switch (t = {
                ...t,
                overlay_game_name: null != i ? i.name : "Unknown Game",
                overlay_app_id: null != i ? i.id : null
            }, e) {
            case l.AnalyticEvents.VOICE_CHANNEL_SELECTED:
            case l.AnalyticEvents.SETTINGS_PANE_VIEWED:
            case l.AnalyticEvents.GUILD_VIEWED:
            case l.AnalyticEvents.CHANNEL_OPENED:
                return (0, o.trackWithMetadata)(e, t, n);
            default:
                return a.default.track(e, t, {
                    flush: n
                })
        }
    }
}