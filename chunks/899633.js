function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        getIsSpeaking: function() {
            return d
        }
    });
    var i = n("446674"),
        s = n("235004"),
        r = n("18494"),
        a = n("280168"),
        o = n("800762");

    function l(e, t, n) {
        return e || t || n
    }

    function u(e) {
        var t, n, l;
        let {
            userId: u,
            checkSoundSharing: d = !1,
            checkSoundboardSounds: c = !0,
            checkIsMuted: f = !1,
            context: _
        } = e, E = (0, i.useStateFromStores)([o.default, r.default], () => {
            let e = r.default.getVoiceChannelId();
            return null != e ? o.default.getVoiceStateForChannel(e, u) : null
        }), h = f && ((null == E ? void 0 : E.mute) || (null == E ? void 0 : E.selfMute)), g = (0, i.useStateFromStores)([a.default], () => a.default.isSpeaking(u, _) && !h), m = (0, i.useStateFromStores)([a.default], () => a.default.isSoundSharing(u) && d), p = (0, i.useStateFromStores)([s.default], () => s.default.isUserPlayingSounds(u) && c);
        return t = g, n = p, l = m, t || n || l
    }

    function d(e) {
        var t, n, i;
        let {
            userId: l,
            checkSoundSharing: u = !1,
            checkSoundboardSounds: d = !0,
            checkIsMuted: c = !1,
            context: f
        } = e, _ = r.default.getVoiceChannelId(), E = null != _ ? o.default.getVoiceStateForChannel(_, l) : null, h = c && ((null == E ? void 0 : E.mute) || (null == E ? void 0 : E.selfMute)), g = a.default.isSpeaking(l, f) && !h, m = a.default.isSoundSharing(l) && u, p = s.default.isUserPlayingSounds(l) && d;
        return t = g, n = p, i = m, t || n || i
    }
}