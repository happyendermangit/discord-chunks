function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return u
        }
    });
    var n = i("158998"),
        l = i("450484"),
        a = i("782340");

    function u(t, e, i) {
        switch (e) {
            case l.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                if (t.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
                if (t.playingSameTrack) return a.default.Messages.USER_ACTIVITY_ALREADY_PLAYING;
                if (t.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: l.SPOTIFY_PLATFORM_NAME
                });
                return;
            case l.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                if (t.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                if (t.syncingWithUser || t.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                return a.default.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                    name: null != i ? i : n.default.getName(t.user)
                });
            case l.SpotifyActionTypes.EMBED_SYNC:
                if (t.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                if (t.syncingWithUser || t.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                if (t.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: l.SPOTIFY_PLATFORM_NAME
                });
                return;
            default:
                return
        }
    }
}