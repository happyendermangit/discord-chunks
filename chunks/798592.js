function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("884691"),
        i = n("65597"),
        a = n("526887"),
        s = n("880731");

    function r() {
        let {
            createMultipleConfettiAt: e
        } = l.useContext(a.ConfettiCannonContext), t = (0, i.default)([s.default], () => s.default.getState()), n = l.useCallback(e => ({
            size: {
                type: "static-random",
                minValue: e.confettiSize - 7,
                maxValue: e.confettiSize + 7
            }
        }), []), r = l.useMemo(() => ({
            fire: (l, i, a) => {
                var s, r;
                let o = (null == a ? void 0 : a.settings) != null ? {
                        ...t,
                        ...a.settings
                    } : t,
                    u = n(o);
                e(l, i, u, (null !== (s = null == a ? void 0 : a.count) && void 0 !== s ? s : o.confettiCount) * (null !== (r = null == a ? void 0 : a.countMultiplier) && void 0 !== r ? r : 1), {
                    sprite: null == a ? void 0 : a.sprite
                })
            }
        }), [e, n, t]);
        return r
    }
}