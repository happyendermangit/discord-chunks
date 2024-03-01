function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageLoadingOverlay: function() {
            return _
        }
    }), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("492311"), n("101997");
    var r = n("37983"),
        i = n("884691"),
        l = n("907002"),
        a = n("723251"),
        s = n("77078"),
        o = n("504439"),
        u = n("49111"),
        c = n("366822");
    let d = {
            from: {
                opacity: 1
            },
            enter: {
                opacity: 1
            },
            leave: {
                opacity: 0
            },
            config: {
                duration: 200
            }
        },
        f = {
            ...d,
            config: {
                duration: 50
            }
        },
        m = {
            ...d,
            config: (e, t) => t ? {
                duration: 800
            } : {
                duration: 200
            }
        };

    function _(e) {
        let {
            readyState: t,
            aspectRatio: n,
            placeholder: _,
            placeholderVersion: E,
            placeholderStyle: T,
            children: I
        } = e, C = t === u.ImageReadyStates.LOADING, [p] = i.useState(() => Date.now()), [S] = i.useState(C), [P, R] = i.useState(!1), L = i.useMemo(() => {
            if (S && 1 === E && null != _) {
                let e = Uint8Array.from(atob(_), e => e.charCodeAt(0)),
                    t = (0, o.thumbHashToRGBA)(e, {
                        detail: 1,
                        pop: 1.1
                    }),
                    n = (0, a.rgbaToDataURL)(t.w, t.h, t.rgba);
                return n
            }
        }, [S, _, E]);
        i.useEffect(() => {
            let e = setTimeout(() => {
                R(!0)
            }, 2e3);
            return () => {
                clearTimeout(e)
            }
        }, [S]);
        let O = t === u.ImageReadyStates.READY && Date.now() - p < 200,
            M = (0, l.useTransition)(C && null != L, O ? f : d),
            g = (0, l.useTransition)(C && P, m);
        return (0, r.jsxs)("div", {
            className: c.loadingOverlay,
            style: {
                aspectRatio: n
            },
            children: [I, M((e, t) => t && (0, r.jsx)(l.animated.img, {
                style: {
                    ...T,
                    ...e
                },
                className: c.imagePlaceholder,
                src: L,
                alt: ""
            })), g((e, t) => t && (0, r.jsx)(l.animated.div, {
                style: e,
                className: c.imageLoadingOverlay,
                children: (0, r.jsx)(s.Spinner, {
                    type: s.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: c.cornerLoadingSpinner
                })
            }))]
        })
    }
}