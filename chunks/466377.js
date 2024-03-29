function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ModalCloseButton: function() {
            return M
        },
        ModalContent: function() {
            return D
        },
        ModalFooter: function() {
            return v
        },
        ModalHeader: function() {
            return L
        },
        ModalListContent: function() {
            return y
        },
        ModalRoot: function() {
            return g
        },
        ModalSize: function() {
            return r
        }
    });
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("803997"),
        l = n.n(o),
        u = n("718017"),
        d = n("990547"),
        _ = n("748780"),
        c = n("186325"),
        E = n("693789"),
        I = n("507274"),
        T = n("84735"),
        f = n("337033"),
        S = n("742746"),
        h = n("147479"),
        A = n("285952"),
        m = n("465670"),
        N = n("602091"),
        O = n("231338"),
        p = n("689938"),
        R = n("462278");
    (i = r || (r = {})).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i.DYNAMIC = "dynamic";
    let C = Object.freeze({
        small: R.small,
        medium: R.medium,
        large: R.large,
        dynamic: null
    });

    function g(e) {
        var t;
        let {
            transitionState: n,
            children: i,
            size: r = "small",
            role: o = "dialog",
            className: E,
            fullscreenOnMobile: f = !0,
            hideShadow: S = !1,
            onAnimationEnd: h = O.NOOP,
            returnRef: A,
            ...m
        } = e, p = n === N.ModalTransitionState.ENTERING || n === N.ModalTransitionState.ENTERED, {
            reducedMotion: g
        } = a.useContext(c.AccessibilityPreferencesContext), L = (0, u.useSpring)({
            opacity: p ? 1 : 0,
            transform: p || g.enabled ? "scale(1)" : "scale(0.7)",
            config: {
                duration: p ? 300 : 100,
                easing: p ? _.default.Easing.inOut(_.default.Easing.back()) : _.default.Easing.quad,
                clamp: !0
            },
            onRest: h
        }), D = a.useRef(null), v = null != m["aria-label"], M = null != m["aria-labelledby"], y = a.useId(), P = null !== (t = m["aria-labelledby"]) && void 0 !== t ? t : y, U = a.useMemo(() => ({
            headerId: P,
            headerIdIsManaged: M
        }), [P, M]);
        return (0, s.jsx)(N.ModalContentContext.Provider, {
            value: U,
            children: (0, s.jsx)(I.Dialog, {
                className: R.focusLock,
                role: o,
                returnRef: A,
                impressionType: d.ImpressionTypes.MODAL,
                "aria-labelledby": v ? void 0 : U.headerId,
                ...m,
                children: (0, s.jsx)(u.animated.div, {
                    className: l()(E, R.root, C[r], {
                        [R.fullscreenOnMobile]: f,
                        [R.rootWithShadow]: !S
                    }),
                    ref: D,
                    style: L,
                    children: (0, s.jsx)(T.FocusRingScope, {
                        containerRef: D,
                        children: i
                    })
                })
            })
        })
    }

    function L(e) {
        var t, n, i, r, o;
        let {
            headerId: u,
            headerIdIsManaged: d
        } = a.useContext(N.ModalContentContext);
        return (0, s.jsx)(A.default, {
            grow: 0,
            shrink: 0,
            direction: null !== (t = e.direction) && void 0 !== t ? t : A.default.Direction.HORIZONTAL,
            justify: null !== (n = e.justify) && void 0 !== n ? n : A.default.Justify.START,
            align: null !== (i = e.align) && void 0 !== i ? i : A.default.Align.CENTER,
            wrap: null !== (r = e.wrap) && void 0 !== r ? r : A.default.Wrap.NO_WRAP,
            className: l()(R.header, e.className, {
                [R.separator]: null === (o = e.separator) || void 0 === o || o
            }),
            id: d ? void 0 : u,
            children: e.children
        })
    }

    function D(e) {
        let {
            className: t,
            children: n,
            scrollerRef: i,
            scrollbarType: r,
            ...a
        } = e, o = function(e) {
            switch (null != e ? e : "thin") {
                case "auto":
                    return h.AdvancedScrollerAuto;
                case "none":
                    return h.AdvancedScrollerNone;
                default:
                    return h.AdvancedScrollerThin
            }
        }(r);
        return (0, s.jsx)(o, {
            className: l()(R.content, t),
            ref: i,
            ...a,
            children: (0, s.jsx)(f.HeadingLevel, {
                children: n
            })
        })
    }

    function v(e) {
        var t, n, i, r, a;
        return (0, s.jsx)(A.default, {
            grow: 0,
            shrink: 0,
            direction: null !== (t = e.direction) && void 0 !== t ? t : A.default.Direction.HORIZONTAL_REVERSE,
            justify: null !== (n = e.justify) && void 0 !== n ? n : A.default.Justify.START,
            align: null !== (i = e.align) && void 0 !== i ? i : A.default.Align.STRETCH,
            wrap: null !== (r = e.wrap) && void 0 !== r ? r : A.default.Wrap.NO_WRAP,
            className: l()(R.footer, e.className, {
                [R.footerSeparator]: null === (a = e.separator) || void 0 === a || a
            }),
            children: (0, s.jsx)(f.HeadingLevel, {
                children: e.children
            })
        })
    }

    function M(e) {
        return (0, s.jsx)(E.Button, {
            focusProps: e.focusProps,
            "aria-label": p.default.Messages.CLOSE,
            look: E.Button.Looks.BLANK,
            size: E.Button.Sizes.NONE,
            onClick: e.onClick,
            innerClassName: l()({
                [R.closeWithCircleBackground]: e.withCircleBackground
            }),
            className: l()(e.className, {
                [R.hideOnFullscreen]: e.hideOnFullscreen,
                [R.close]: !e.withCircleBackground
            }),
            children: (0, s.jsx)(m.default, {
                width: 24,
                height: 24,
                className: R.closeIcon
            })
        })
    }

    function y(e) {
        let {
            className: t,
            scrollerRef: n,
            ...i
        } = e;
        return (0, s.jsx)(S.ListThin, {
            className: t,
            ref: n,
            ...i
        })
    }
}