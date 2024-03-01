function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BackdropStyles: function() {
            return r
        },
        default: function() {
            return p
        }
    });
    var i, r, s = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("907002"),
        c = n("77078"),
        d = n("84339"),
        f = n("816452");
    (i = r || (r = {})).SUBTLE = "SUBTLE", i.DARK = "DARK", i.BLUR = "BLUR";
    let E = a.forwardRef(function(e, t) {
        let {
            backdropStyle: n = "SUBTLE",
            backdropInstant: i = !1,
            zIndexBoost: r = 0,
            LayerComponent: a,
            isVisible: o,
            onClose: E
        } = e, p = function() {
            let e = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
                    opacity: .25
                }),
                t = (0, c.useToken)(c.tokens.colors.BG_BACKDROP).spring();
            return {
                SUBTLE: e,
                DARK: t,
                BLUR: t
            }
        }(), h = p[n], _ = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
            opacity: 0
        }), S = {
            background: _,
            backdropFilter: "blur(0px)"
        }, m = (0, d.default)(i), T = (0, u.useTransition)(o, {
            keys: e => e ? "backdrop" : "empty",
            config: {
                duration: i || m ? 0 : 300
            },
            from: S,
            enter: {
                background: h,
                backdropFilter: "blur(".concat("BLUR" === n ? 8 : 0, "px)")
            },
            leave: S
        });
        if (null == a) {
            let e = {
                zIndex: 1e3 + r
            };
            return T((t, n) => n ? (0, s.jsx)(u.animated.div, {
                className: f.backdrop,
                style: {
                    ...t,
                    ...e
                },
                onClick: E
            }) : null)
        }
        return (0, s.jsx)(a, {
            children: T((e, t) => t ? (0, s.jsx)(u.animated.div, {
                className: l(f.backdrop, f.withLayer),
                style: e,
                onClick: E
            }) : null)
        })
    });
    var p = E
}