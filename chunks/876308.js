function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("206230"),
        d = n("806135"),
        c = n("170113"),
        f = n("316680"),
        p = n("830837"),
        m = n("132755"),
        h = n("659500"),
        x = n("718517"),
        E = n("829536"),
        y = n("534107"),
        g = n("49111"),
        S = n("782340"),
        C = n("722552");
    let I = l.lazy(() => n.el("403130").then(n.bind(n, "403130")));

    function T(e) {
        let {
            played: t,
            duration: n,
            currentTime: l
        } = e, a = null == n ? "--:--" : t ? (0, c.convertSecondsToClockFormat)(Math.ceil(n - l)) : (0, c.convertSecondsToClockFormat)(Math.ceil(n));
        return (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: C.duration,
            tabularNumbers: !0,
            children: a
        })
    }
    var _ = l.memo(function(e) {
        var t, n, a, c, _, v;
        let N, {
                src: A,
                volume: O = 1,
                onVolumeChange: k,
                onMute: M,
                waveform: R,
                durationSecs: L,
                onVolumeShow: b,
                onVolumeHide: P,
                onPlay: j,
                onPause: U,
                onError: D
            } = e,
            w = l.useRef(null),
            [F, B] = l.useState(0),
            [G, H] = l.useState(L),
            [V, K] = l.useState(!1),
            [W, Y] = l.useState(!1),
            [z, Z] = l.useState(!1),
            [J, q] = l.useState(!1),
            [X, Q] = l.useState("none"),
            [$, ee] = l.useState(() => "function" == typeof O ? O() : O),
            et = l.useRef(void 0),
            en = l.useCallback(() => {
                Y(e => !e)
            }, []),
            ei = l.useCallback(() => {
                Q("metadata")
            }, []),
            el = l.useCallback(e => {
                let t = e.currentTarget.duration;
                !isNaN(t) && H(t)
            }, []),
            ea = l.useCallback(() => {
                Y(!1), null == et.current && (et.current = setTimeout(() => {
                    q(!1), et.current = void 0
                }, 500))
            }, []),
            es = l.useCallback(() => {
                !z && ea()
            }, [ea, z]),
            er = l.useCallback(() => {
                let e = w.current;
                if (null == e) return;
                let t = e.error;
                null == D || D(t)
            }, [D]),
            eo = l.useCallback(e => {
                let t = (0, E.perceptualToAmplitude)(e, 1);
                K(0 === t), ee(t), null == k || k(t)
            }, [k]),
            eu = l.useCallback(() => {
                K(!V), null == M || M(!V)
            }, [V, M]),
            ed = l.useCallback(() => {
                Z(!0)
            }, []),
            ec = l.useCallback(() => {
                Z(!1), F === G && ea()
            }, [F, G, ea]),
            ef = l.useCallback(e => {
                let t = w.current;
                if (null == G || null == t) return;
                let n = e * G;
                B(n), t.currentTime = n, q(!0), clearTimeout(et.current), et.current = void 0
            }, [G]);
        l.useEffect(() => {
            !J && W && q(!0)
        }, [W, J]);
        let ep = l.useRef(null);
        l.useEffect(() => {
            if (J || W) {
                if (W) {
                    var e, t;
                    ep.current = performance.now(), null == j || j(!1, F, (null !== (t = null === (e = w.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * x.default.Millis.SECOND)
                } else {
                    let e = performance.now(),
                        t = ep.current;
                    null == U || U(F, null != t ? (e - t) / 1e3 : 0), ep.current = null
                }
            }
        }, [W]), t = w, n = W, a = B, l.useEffect(() => {
            let e;
            return ! function i() {
                let l = t.current;
                if (null != l) a(l.currentTime), n && (e = requestAnimationFrame(i))
            }(), () => {
                null != e && cancelAnimationFrame(e)
            }
        }, [t, n, a]), c = A, _ = W, v = Y, l.useEffect(() => {
            if (_) return h.ComponentDispatch.dispatch(g.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, {
                src: c
            }), h.ComponentDispatch.subscribe(g.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
                h.ComponentDispatch.unsubscribe(g.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e)
            };

            function e(e) {
                let {
                    src: t
                } = e;
                c !== t && v(!1)
            }
        }, [c, _, v]);
        let em = W ? p.default : m.default,
            eh = W ? S.default.Messages.PAUSE : S.default.Messages.PLAY;
        N = "Safari" === platform.name ? (0, i.jsx)(l.Suspense, {
            children: (0, i.jsx)(I, {
                ref: w,
                className: C.audioElement,
                src: A,
                preload: X,
                playing: W && !z,
                onEnded: es,
                onLoadedMetadata: el,
                onError: er,
                muted: V,
                volume: $
            })
        }) : (0, i.jsx)(d.default, {
            ref: w,
            className: C.audioElement,
            controls: !1,
            preload: X,
            onEnded: es,
            onLoadedMetadata: el,
            onError: er,
            muted: V,
            volume: $,
            playing: W && !z,
            children: (0, i.jsx)("source", {
                src: A
            })
        });
        let ex = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion),
            {
                enabled: eE
            } = (0, o.useRedesignIconContext)();
        return (0, i.jsxs)("div", {
            className: s(C.container, {
                [C.playing]: W
            }),
            onMouseEnter: ei,
            children: [(0, i.jsx)("div", {
                className: C.rippleContainer,
                children: (0, i.jsx)("div", {
                    className: s(C.ripple, {
                        [C.reducedMotion]: ex
                    })
                })
            }), (0, i.jsx)(o.Clickable, {
                className: C.playButtonContainer,
                onClick: en,
                "aria-label": eh,
                children: (0, i.jsx)(em, {
                    className: s(C.playIcon, {
                        [C.oldPlayIconSpacing]: !eE && !W
                    }),
                    width: 18,
                    height: 18
                })
            }), (0, i.jsx)(y.default, {
                className: C.waveform,
                waveform: R,
                currentTime: F,
                duration: null != G ? G : 1,
                playing: W,
                played: J,
                onDrag: ef,
                onDragStart: ed,
                onDragEnd: ec
            }), (0, i.jsx)(T, {
                played: J,
                currentTime: F,
                duration: G
            }), (0, i.jsx)(f.default, {
                className: C.volumeButton,
                iconClassName: C.volumeButtonIcon,
                sliderWrapperClassName: C.volumeSlider,
                muted: V,
                value: (0, E.amplitudeToPerceptual)($, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: eo,
                onToggleMute: eu,
                onVolumeShow: b,
                onVolumeHide: P
            }), N]
        })
    })
}