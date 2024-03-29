function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("374470"),
        l = n("442837"),
        u = n("952265"),
        d = n("481060"),
        _ = n("410575"),
        c = n("40851"),
        E = n("153850"),
        I = n("585483"),
        T = n("5967"),
        f = n("499254"),
        S = n("541099"),
        h = n("481370"),
        A = n("361917"),
        m = n("981631"),
        N = n("957825"),
        O = n("470774");
    t.default = r.memo(function(e) {
        let {
            positionTargetRef: t,
            channel: n,
            closeOnModalOuterClick: s = !1,
            parentModalKey: p
        } = e, R = r.useRef(null), C = r.useRef(null), {
            renderWindow: g,
            windowDispatch: L
        } = r.useContext(c.default), D = null != p, v = (0, u.useIsModalAtTop)(null != p ? p : ""), M = () => {
            f.dismissAppLauncherPopup()
        }, y = r.useCallback(e => {
            var t;
            if (!D && (0, u.hasAnyModalOpen)() || D && !(v && s)) return;
            let {
                target: n
            } = e;
            if ((0, o.isElement)(n) && null != n.closest("." + N.CHAT_INPUT_BUTTON_CLASSNAME)) return;
            for (;
                (0, o.isElement)(n);) {
                if (n === C.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                n = n.parentNode
            }
            M();
            let i = null === (t = (0, T.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
            (null == i || "BODY" === i.tagName) && I.ComponentDispatch.dispatchToLastSubscribed(m.ComponentActions.TEXTAREA_FOCUS)
        }, [s, v, D]), P = r.useCallback(() => {
            M()
        }, []);
        r.useLayoutEffect(() => (g.addEventListener("mousedown", y), g.addEventListener("contextmenu", y), L.subscribe(m.ComponentActions.POPOUT_CLOSE, P), () => {
            g.removeEventListener("mousedown", y), g.removeEventListener("contextmenu", y), L.unsubscribe(m.ComponentActions.POPOUT_CLOSE, P)
        }), [P, y, g, L]), (0, d.useFocusLock)(R), r.useEffect(() => {
            (!D && (0, u.hasAnyModalOpen)() || D && !v) && M()
        }, [v, D]);
        let U = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentAppDetail());
        return (0, i.jsx)(_.default, {
            section: m.AnalyticsSections.EXPRESSION_PICKER,
            children: (0, i.jsx)(E.AppReferencePositionLayer, {
                className: O.positionLayer,
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
                        className: a()(O.positionContainer),
                        ref: R,
                        role: "dialog",
                        "aria-label": "Application Launcher",
                        children: t ? (0, i.jsxs)("div", {
                            className: O.drawerSizingWrapper,
                            ref: C,
                            children: [(0, i.jsx)("div", {
                                className: O.resizeHandle
                            }), (0, i.jsxs)("div", {
                                className: O.contentWrapper,
                                children: [(0, i.jsx)(A.default, {
                                    channel: n,
                                    isAppDetailPresent: null != U
                                }), null != U ? (0, i.jsx)(h.default, {
                                    channel: n,
                                    appDetail: U
                                }, U.id) : null]
                            })]
                        }) : null
                    })
                }
            })
        })
    })
}