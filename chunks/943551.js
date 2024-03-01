function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldTrackMessage: function() {
            return m
        },
        default: function() {
            return A
        }
    }), n("222007");
    var a = n("446674"),
        l = n("407846"),
        s = n("862337"),
        i = n("913144"),
        r = n("271938"),
        u = n("18494"),
        d = n("659500"),
        o = n("880731"),
        c = n("119035"),
        E = n("39141"),
        _ = n("49111");
    let f = new Set,
        g = new l.default(function(e) {
            let {
                userId: t,
                channelId: n
            } = e;
            return [t, n]
        }, function(e) {
            let {
                userId: t,
                channelId: n
            } = e;
            return "".concat(n, "-").concat(t)
        }),
        S = new l.default(function(e) {
            let {
                messageId: t,
                channelId: n,
                combo: {
                    userId: a
                }
            } = e;
            return [t, n, a]
        }, function(e) {
            let {
                messageId: t,
                channelId: n,
                combo: {
                    userId: a
                }
            } = e;
            return "".concat(n, "-").concat(a, "-").concat(t)
        }),
        h = e => {
            let {
                userId: t,
                channelId: n
            } = e;
            return "".concat(t, "-").concat(n)
        };

    function m(e, t, n, a) {
        if (e !== t) return !1;
        let l = null == n;
        return !(l || a.has(n)) && (a.add(n), !0)
    }
    class T extends a.default.Store {
        initialize() {
            this.waitFor(r.default, u.default)
        }
        getComboScore(e, t) {
            let n = g.get(h({
                userId: e,
                channelId: t
            }));
            return null == n ? 0 : (0, c.getComboScore)(n)
        }
        getUserCombo(e, t) {
            return g.get(h({
                userId: e,
                channelId: t
            }))
        }
        isComboing(e, t) {
            var n;
            let a = this.getUserCombo(e, t);
            return null != a && a.value >= o.default.combosRequiredCount && null != (n = a) && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
        }
        getMessageCombo(e) {
            var t;
            let n = S.get(e);
            return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
        }
        getMostRecentMessageCombo(e) {
            let t = S.values(e);
            return t[t.length - 1]
        }
        getUserComboShakeIntensity(e, t, n, a) {
            let l = this.getUserCombo(e, t);
            return null != l ? (0, c.getComboShakeIntensity)(l, a) * n : 0
        }
    }
    T.displayName = "PoggermodeStore";
    let M = new T(i.default, {
        POGGERMODE_UPDATE_COMBO: function(e) {
            let {
                type: t,
                ...n
            } = e;
            if (!o.default.isEnabled()) return !1;
            ! function e(t) {
                var n, a, l, i, r, u;
                let d = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    o = g.get(h(t)),
                    c = {
                        ...o,
                        ...t,
                        value: null !== (a = null !== (n = t.value) && void 0 !== n ? n : null == o ? void 0 : o.value) && void 0 !== a ? a : 0,
                        multiplier: Math.min(null !== (i = null !== (l = t.multiplier) && void 0 !== l ? l : null == o ? void 0 : o.multiplier) && void 0 !== i ? i : 1, 7),
                        decayInterval: null !== (r = null == o ? void 0 : o.decayInterval) && void 0 !== r ? r : new s.Interval
                    };
                g.set(h(t), c), d && (null === (u = c.decayInterval) || void 0 === u || u.start(1e3, () => {
                    let t = g.get(h(c));
                    if (null != t) {
                        let a = c.multiplier !== t.multiplier && c.value !== t.value;
                        if (t.value <= 0 || a) {
                            var n;
                            null === (n = t.decayInterval) || void 0 === n || n.stop(), t.value <= 0 && (e({
                                ...t,
                                value: 0,
                                multiplier: 1
                            }), M.emitChange())
                        } else e({
                            ...t,
                            value: t.value - 1
                        }), M.emitChange()
                    }
                }))
            }(n)
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
            var t;
            let {
                comboMessage: n
            } = e;
            if (!o.default.isEnabled()) return !1;
            t = n, S.set(t.messageId, t)
        },
        MESSAGE_CREATE: function(e) {
            var t, n;
            let {
                channelId: a,
                message: {
                    mentions: l,
                    author: s,
                    nonce: i
                }
            } = e;
            if (!o.default.isEnabled()) return !1;
            let u = r.default.getId();
            if (!m(null == s ? void 0 : s.id, u, i, f)) return !1;
            let S = g.get(h({
                userId: null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "???",
                channelId: a
            }));
            if (o.default.screenshakeEnabled && o.default.screenshakeEnabledLocations[E.ShakeLocation.MENTION] && null != l && null != l.find(e => e.id === u)) {
                let e = null != S ? null !== (n = (0, c.getComboShakeIntensity)(S, E.ShakeLevel.LEVEL_4)) && void 0 !== n ? n : .001 : 4 * Math.random();
                return d.ComponentDispatch.dispatch(_.ComponentActions.SHAKE_APP, {
                    duration: 1e3,
                    intensity: e
                }), !0
            }
            return !1
        }
    });
    var A = M
}