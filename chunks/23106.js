function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("884691"),
        i = n("446674"),
        a = n("462550"),
        s = n("235004"),
        r = n("78581"),
        o = n("520497"),
        u = n("812809");

    function d(e, t) {
        let {
            currentPreviewRef: n
        } = l.useContext(a.default), d = (0, i.useStateFromStores)([s.default], () => s.default.isPlayingSound(e.soundId), [e]), c = l.useCallback(l => {
            null != n.current && n.current.pause(), null != t && (0, r.playSound)(e, t, l)
        }, [e, n, t]), f = l.useCallback(() => {
            let t = new Audio((0, o.default)(e.soundId));
            null != n.current && n.current.pause(), n.current = t, t.currentTime = 0, t.volume = (0, u.default)(e.volume), t.play()
        }, [e, n]);
        return l.useCallback(() => () => {
            var e;
            return null === (e = n.current) || void 0 === e ? void 0 : e.pause()
        }, [n]), {
            playSoundboardSound: c,
            isPlayingSound: d,
            previewSound: f
        }
    }
}