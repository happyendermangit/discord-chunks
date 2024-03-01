function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClipsLengthSettings: function() {
            return o
        },
        ClipsViewerConnectivitySettings: function() {
            return l
        },
        ClipSaveTypes: function() {
            return u
        },
        ClipsUserEducationType: function() {
            return c
        },
        DEFAULT_KEYBIND: function() {
            return E
        },
        CLIPS_TOAST_DURATION: function() {
            return p
        },
        ClipsLogger: function() {
            return h
        },
        CLIPS_EXPORT_FILENAME: function() {
            return _
        },
        CURRENT_CLIP_METADATA_VERSION: function() {
            return S
        },
        CLIPS_HARDWARE_CLASSIFICATION_VERSION: function() {
            return m
        },
        WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: function() {
            return T
        },
        WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
            return g
        },
        OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
            return I
        },
        MIN_CLIP_DURATION_SECONDS: function() {
            return C
        },
        CLIP_PLAYING_DEBOUNCE_MS: function() {
            return v
        },
        CLIP_NAME_MIN_CHAR_LENGTH: function() {
            return A
        },
        CLIP_NAME_MAX_CHAR_LENGTH: function() {
            return R
        },
        CLIPS_EDIT_MODAL_KEY: function() {
            return N
        },
        CLIPS_GALLERY_MODAL_KEY: function() {
            return O
        },
        CLIPS_THUMBNAIL_MAX_WIDTH: function() {
            return D
        },
        CLIPS_THUMBNAIL_MAX_HEIGHT: function() {
            return y
        },
        CLIPS_MAX_PARTICIPANTS: function() {
            return P
        },
        CLIP_NAME_TEMPLATE: function() {
            return L
        },
        MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: function() {
            return b
        },
        CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY: function() {
            return M
        },
        SEEK_DENOMINATOR: function() {
            return U
        },
        SEEK_SHIFT_MODIFIER: function() {
            return G
        },
        CLIPS_EDUCATION_COOLDOWN: function() {
            return w
        },
        CLIPS_EDUCATION_GAME_LAUNCH_THRESHOLD: function() {
            return k
        },
        CLIPS_EDUCATION_MAX_DISMISSALS_ENABLED: function() {
            return x
        },
        CLIPS_EDUCATION_MAX_DISMISSALS_DISABLED: function() {
            return F
        }
    });
    var i, r, s, a, o, l, u, c, d = n("605250"),
        f = n("718517");
    (i = o || (o = {}))[i.SECONDS_30 = 30 * f.default.Millis.SECOND] = "SECONDS_30", i[i.MINUTES_1 = f.default.Millis.MINUTE] = "MINUTES_1", i[i.MINUTES_2 = 2 * f.default.Millis.MINUTE] = "MINUTES_2", (r = l || (l = {}))[r.ALL = 0] = "ALL", r[r.FRIENDS = 1] = "FRIENDS", (s = u || (u = {})).DECOUPLED = "decoupled", s.VIEWER = "viewer", s.STREAMER = "streamer", (a = c || (c = {}))[a.Error = 0] = "Error", a[a.Disabled = 1] = "Disabled", a[a.Enabled = 2] = "Enabled";
    let E = "alt+c",
        p = 6 * f.default.Millis.SECOND,
        h = new d.default("Clips"),
        _ = e => "Discord_Clip_".concat(e, ".mp4"),
        S = 3,
        m = 1,
        T = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
        g = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
        I = /(Apple M[12].*)/,
        C = .1,
        v = 25,
        A = 0,
        R = 200,
        N = "clips-edit",
        O = "clips-gallery",
        D = 640,
        y = 360,
        P = 100,
        L = e => "Clip - ".concat(new Date(e).toLocaleString()),
        b = 15,
        M = 3e4,
        U = 30,
        G = 10,
        w = 14 * f.default.Millis.DAY,
        k = 5,
        x = 5,
        F = 1
}