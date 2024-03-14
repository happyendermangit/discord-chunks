function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return I
        }
    }), r("222007");
    var n = r("37983"),
        u = r("884691"),
        o = r("414456"),
        l = r.n(o),
        i = r("446674"),
        a = r("206230"),
        s = r("471671"),
        c = r("76047"),
        f = r("859498"),
        d = r("687682"),
        E = r("525808"),
        T = r("465523"),
        A = r("417675"),
        R = r("188645"),
        m = r("484304");
    let p = e => {
            let {
                bannerAdjustment: t = 0,
                maxLoops: r,
                resetOnHover: o = !1,
                isHovering: i = !1,
                useOpacityOnHover: a = !0,
                autoPlay: s = !0,
                restartMethod: T,
                urlQueryString: R,
                profileEffectConfig: p,
                noBorderRadius: v = !1,
                introDelay: I = c.ENTRY_DELAY
            } = e, _ = u.useRef(null), [S, N] = u.useState([]);
            (0, A.default)(p);
            let [h, O] = u.useState(0), [C, y] = u.useState(0), {
                accessibilityLabel: F
            } = p, [g, L] = u.useState(-I), {
                stop: P,
                reset: D,
                ticking: x
            } = (0, d.default)(e => {
                L(t => t + e)
            });
            u.useEffect(() => {
                L(-I), N((0, E.sortEffectLayers)(p.effects))
            }, [p]), u.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                S.forEach(r => {
                    let n = r.start + r.duration;
                    n > e && (e = n), r.loop && r.start < t && (t = r.start)
                }), O(t), y(e)
            }, [y, S]);
            let [M, b] = u.useState(!1);
            return u.useEffect(() => {
                !0 !== s && !i && (P(), L(0)), !i && M && x.current && (P(), L(0)), o && i && !x.current && (D(), p.animationType === f.AnimationTypes.PERSISTENT ? L(T === f.RestartMethod.FromStart ? 0 : h) : L(0))
            }, [i, M, h, o, P, D, x, p.animationType, s, T]), (0, n.jsx)("div", {
                ref: _,
                className: l(m.profileEffects, {
                    [m.hovered]: i && a
                }),
                children: (0, n.jsx)("div", {
                    className: v ? m.innerNoRadius : m.inner,
                    children: S.map((e, u) => {
                        var o, l, i, a, d, E, T, A;
                        if (!x.current) {
                            if (p.animationType === f.AnimationTypes.PERSISTENT && null != p.staticFrameSrc && 0 === u && !0 === s) {
                                let {
                                    staticFrameSrc: r
                                } = p;
                                return (0, n.jsx)("img", {
                                    className: m.effect,
                                    style: {
                                        top: null !== (d = null === (i = e.position) || void 0 === i ? void 0 : i.y) && void 0 !== d ? d : 0 - t,
                                        left: null !== (E = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== E ? E : 0
                                    },
                                    src: r,
                                    alt: F
                                }, e.src + u)
                            }
                            return (0, n.jsx)("img", {
                                src: c.RESET,
                                alt: F
                            }, e.src + u)
                        }
                        if (g < e.start || !e.loop && g > e.duration + e.start) return (0, n.jsx)("img", {
                            src: c.RESET,
                            alt: F
                        }, e.src + u);
                        if (p.animationType === f.AnimationTypes.PERSISTENT && !M && null != r && g >= C && b(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                            let t = e.duration + e.loopDelay,
                                o = Math.floor((g - e.start) / t);
                            if (g - e.start - o * t > e.duration) return p.animationType === f.AnimationTypes.INTERMITTENT && !M && null != r && o >= r && b(!0), (0, n.jsx)("img", {
                                src: c.RESET,
                                alt: F
                            }, e.src + u)
                        }
                        return (0, n.jsx)("img", {
                            src: null != R ? "".concat(e.src, "?query=").concat(R) : e.src,
                            className: m.effect,
                            style: {
                                top: (null !== (T = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== T ? T : 0) - t,
                                left: null !== (A = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== A ? A : 0
                            },
                            alt: F
                        }, e.src + u)
                    })
                })
            })
        },
        v = e => {
            let {
                config: t,
                useThumbnail: r,
                bannerAdjustment: u = 0,
                noBorderRadius: o,
                isHovering: i = !1,
                useOpacityOnHover: a = !0
            } = e, {
                reducedMotionSrc: s,
                thumbnailPreviewSrc: c,
                accessibilityLabel: f
            } = t;
            return (0, n.jsx)("div", {
                className: l(m.profileEffects, {
                    [m.hovered]: i && a
                }),
                children: (0, n.jsx)("div", {
                    className: o ? m.innerNoRadius : m.inner,
                    children: (0, n.jsx)("img", {
                        src: r && !i ? c : s,
                        className: m.effect,
                        style: {
                            top: 0 - u
                        },
                        alt: f
                    })
                })
            })
        };
    var I = e => {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.isFocused()),
            r = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion),
            [o, l] = u.useState(!1),
            {
                preset: c
            } = (0, R.default)(e.profileEffectId, () => l(!1));
        return null != c && (t || e.shopPreview || c.config.animationType !== f.AnimationTypes.INTERMITTENT) ? !t && e.shopPreview || !t && c.config.animationType === f.AnimationTypes.PERSISTENT || r || !1 === e.autoPlay && !1 === e.isHovering ? (0, n.jsx)(v, {
            useThumbnail: e.useThumbnail,
            config: c.config,
            bannerAdjustment: e.bannerAdjustment,
            noBorderRadius: e.noBorderRadius,
            isHovering: e.isHovering,
            useOpacityOnHover: e.useOpacityOnHover
        }) : o ? (0, n.jsx)(p, {
            profileEffectConfig: c.config,
            ...e
        }) : (0, n.jsx)(T.default, {
            profileEffectConfig: c.config,
            onReady: () => {
                l(!0)
            }
        }) : null
    }
}