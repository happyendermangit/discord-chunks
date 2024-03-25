function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("118810"),
        o = n("446674"),
        u = n("551042"),
        d = n("77078"),
        c = n("901582"),
        f = n("244201"),
        p = n("983782"),
        m = n("659500"),
        h = n("791776"),
        x = n("82372"),
        E = n("426969"),
        y = n("105571"),
        g = n("634114"),
        S = n("49111"),
        C = n("13030"),
        _ = n("942838"),
        T = l.memo(function(e) {
            let {
                positionTargetRef: t,
                channel: n,
                closeOnModalOuterClick: a = !1,
                parentModalKey: T
            } = e, I = l.useRef(null), v = l.useRef(null), {
                renderWindow: A,
                windowDispatch: N
            } = l.useContext(f.default), R = null != T, O = (0, u.useIsModalAtTop)(null != T ? T : ""), M = () => {
                x.dismissAppLauncherPopup()
            }, k = l.useCallback(e => {
                var t;
                if (!R && (0, u.hasAnyModalOpen)() || R && !(O && a)) return;
                let {
                    target: n
                } = e;
                if ((0, r.isElement)(n) && null != n.closest("." + C.CHAT_INPUT_BUTTON_CLASSNAME)) return;
                for (;
                    (0, r.isElement)(n);) {
                    if (n === v.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                    n = n.parentNode
                }
                M();
                let i = null === (t = (0, h.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == i || "BODY" === i.tagName) && m.ComponentDispatch.dispatchToLastSubscribed(S.ComponentActions.TEXTAREA_FOCUS)
            }, [a, O, R]), L = l.useCallback(() => {
                M()
            }, []);
            l.useLayoutEffect(() => (A.addEventListener("mousedown", k), A.addEventListener("contextmenu", k), N.subscribe(S.ComponentActions.POPOUT_CLOSE, L), () => {
                A.removeEventListener("mousedown", k), A.removeEventListener("contextmenu", k), N.unsubscribe(S.ComponentActions.POPOUT_CLOSE, L)
            }), [L, k, A, N]), (0, d.useFocusLock)(I), l.useEffect(() => {
                (!R && (0, u.hasAnyModalOpen)() || R && !O) && M()
            }, [O, R]);
            let P = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentAppDetail());
            return (0, i.jsx)(c.default, {
                section: S.AnalyticsSections.EXPRESSION_PICKER,
                children: (0, i.jsx)(p.AppReferencePositionLayer, {
                    className: _.positionLayer,
                    reference: t,
                    position: "top",
                    align: "left",
                    spacing: 8,
                    autoInvert: !0,
                    children: e => {
                        let {
                            isPositioned: t
                        } = e;
                        return (0, i.jsx)("section", {
                            className: s(_.positionContainer),
                            ref: I,
                            role: "dialog",
                            "aria-label": "Application Launcher",
                            children: t ? (0, i.jsxs)("div", {
                                className: _.drawerSizingWrapper,
                                ref: v,
                                children: [(0, i.jsx)("div", {
                                    className: _.resizeHandle
                                }), (0, i.jsxs)("div", {
                                    className: _.contentWrapper,
                                    children: [(0, i.jsx)(g.default, {
                                        channel: n,
                                        isAppDetailPresent: null != P
                                    }), null != P ? (0, i.jsx)(y.default, {
                                        channel: n,
                                        appDetail: P
                                    }, P.id) : null]
                                })]
                            }) : null
                        })
                    }
                })
            })
        })
}