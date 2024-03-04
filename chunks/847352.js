function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("118810"),
        o = n("446674"),
        u = n("551042"),
        d = n("77078"),
        c = n("901582"),
        f = n("244201"),
        m = n("983782"),
        p = n("659500"),
        h = n("791776"),
        E = n("82372"),
        g = n("426969"),
        C = n("105571"),
        S = n("634114"),
        T = n("49111"),
        v = n("13030"),
        I = n("942838"),
        _ = i.memo(function(e) {
            let {
                positionTargetRef: t,
                channel: n,
                closeOnModalOuterClick: a = !1,
                parentModalKey: _
            } = e, N = i.useRef(null), A = i.useRef(null), {
                renderWindow: x,
                windowDispatch: y
            } = i.useContext(f.default), O = null != _, R = (0, u.useIsModalAtTop)(null != _ ? _ : ""), M = () => {
                E.dismissAppLauncherPopup()
            }, L = i.useCallback(e => {
                var t;
                if (!O && (0, u.hasAnyModalOpen)() || O && !(R && a)) return;
                let {
                    target: n
                } = e;
                if ((0, r.isElement)(n) && null != n.closest("." + v.CHAT_INPUT_BUTTON_CLASSNAME)) return;
                for (;
                    (0, r.isElement)(n);) {
                    if (n === A.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                    n = n.parentNode
                }
                M();
                let l = null === (t = (0, h.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == l || "BODY" === l.tagName) && p.ComponentDispatch.dispatchToLastSubscribed(T.ComponentActions.TEXTAREA_FOCUS)
            }, [a, R, O]), P = i.useCallback(() => {
                M()
            }, []);
            i.useLayoutEffect(() => (x.addEventListener("mousedown", L), x.addEventListener("contextmenu", L), y.subscribe(T.ComponentActions.POPOUT_CLOSE, P), () => {
                x.removeEventListener("mousedown", L), x.removeEventListener("contextmenu", L), y.unsubscribe(T.ComponentActions.POPOUT_CLOSE, P)
            }), [P, L, x, y]), (0, d.useFocusLock)(N), i.useEffect(() => {
                (!O && (0, u.hasAnyModalOpen)() || O && !R) && M()
            }, [R, O]);
            let b = (0, o.useStateFromStores)([g.default], () => g.default.getCurrentAppDetail());
            return (0, l.jsx)(c.default, {
                section: T.AnalyticsSections.EXPRESSION_PICKER,
                children: (0, l.jsx)(m.AppReferencePositionLayer, {
                    className: I.positionLayer,
                    reference: t,
                    position: "top",
                    align: "left",
                    spacing: 8,
                    autoInvert: !0,
                    children: e => {
                        let {
                            isPositioned: t
                        } = e;
                        return (0, l.jsx)("section", {
                            className: s(I.positionContainer),
                            ref: N,
                            role: "dialog",
                            "aria-label": "Application Launcher",
                            children: t ? (0, l.jsxs)("div", {
                                className: I.drawerSizingWrapper,
                                ref: A,
                                children: [(0, l.jsx)("div", {
                                    className: I.resizeHandle
                                }), (0, l.jsxs)("div", {
                                    className: I.contentWrapper,
                                    children: [(0, l.jsx)(S.default, {
                                        channel: n,
                                        isAppDetailPresent: null != b
                                    }), null != b ? (0, l.jsx)(C.default, {
                                        channel: n,
                                        appDetail: b
                                    }, b.id) : null]
                                })]
                            }) : null
                        })
                    }
                })
            })
        })
}