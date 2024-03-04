function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SPOTIFY_APP_PROTOCOL: function() {
            return d
        },
        SPOTIFY_PARTY_PREFIX: function() {
            return c
        },
        SPOTIFY_PLATFORM_NAME: function() {
            return f
        },
        isSpotifyParty: function() {
            return _
        },
        SpotifyResourceTypes: function() {
            return r
        },
        SpotifyActionTypes: function() {
            return a
        },
        SPOTIFY_HOSTNAMES: function() {
            return h
        },
        SpotifyEndpoints: function() {
            return m
        }
    });
    var i, s, r, a, o = n("376556"),
        l = n("773336"),
        u = n("49111");
    let d = "spotify",
        c = "spotify:",
        f = o.default.get(u.PlatformTypes.SPOTIFY).name;

    function _(e) {
        return null != e && e.startsWith(c)
    }(i = r || (r = {})).TRACK = "track", i.ARTIST = "artist", i.ALBUM = "album", i.PLAYLIST = "playlist", (s = a || (a = {})).USER_ACTIVITY_PLAY = "user_activity_play", s.USER_ACTIVITY_SYNC = "user_activity_sync", s.EMBED_SYNC = "embed_sync";
    let h = ["open.spotify.com", "www.spotify.com"],
        E = "https://api.spotify.com/v1",
        g = e => "?utm_source=discord&utm_medium=".concat(e),
        m = Object.freeze({
            PROFILE: "".concat(E, "/me"),
            NOTIFICATIONS_PLAYER: "".concat(E, "/me/notifications/player"),
            PLAYER: "".concat(E, "/me/player"),
            PLAYER_DEVICES: "".concat(E, "/me/player/devices"),
            PLAYER_PLAY: "".concat(E, "/me/player/play"),
            PLAYER_PAUSE: "".concat(E, "/me/player/pause"),
            PLAYER_REPEAT: "".concat(E, "/me/player/repeat"),
            WEB_OPEN: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
                return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(g(n))
            },
            EMBED: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
                return "https://open.spotify.com/embed".concat(e).concat(g(t))
            },
            PLAYER_OPEN: function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
                return "".concat(d, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? g(i) : "")
            },
            PREMIUM_SITE: "https://www.spotify.com/premium/".concat(g("desktop")),
            INSTALL_ATTRIBUTION: e => "https://app.adjust.com/bdyga9?campaign=".concat(e),
            APP_STORE: (0, l.isAndroid)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
            IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
        })
}