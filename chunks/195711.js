function(e, t, n) {
    "use strict";
    let r;
    n.r(t), n.d(t, {
        useOverlayPosition: function() {
            return el
        },
        useOverlayTrigger: function() {
            return ep
        },
        OverlayContainer: function() {
            return ek
        },
        DismissButton: function() {
            return eE
        },
        ariaHideOutside: function() {
            return eR
        },
        usePopover: function() {
            return eI
        },
        useModalOverlay: function() {
            return eN
        },
        Overlay: function() {
            return eA
        },
        useOverlayFocusContain: function() {
            return eL
        }
    }), n("222007"), n("781738"), n("424973"), n("70102");
    var a = n("273493"),
        i = n("983220"),
        o = n("530067"),
        s = n("998132"),
        c = n("891983"),
        l = n("835032"),
        u = n("965560"),
        d = n("180569"),
        p = n("767290"),
        f = n("795848"),
        m = n("494017"),
        h = n("402096"),
        v = n("921094"),
        g = n("26553"),
        y = n("700484"),
        b = n("229152"),
        x = n("983080"),
        S = n("965845"),
        w = n("332538"),
        D = n("674430"),
        C = n("889173"),
        k = n("243469"),
        P = n("869505"),
        E = n("380445"),
        T = n("990973"),
        M = n("274031"),
        R = n("243342"),
        I = n("983322"),
        O = n("484273"),
        A = n("725681"),
        L = n("473662"),
        N = n("433809"),
        F = n("156551"),
        j = n("147336"),
        K = n("884691"),
        _ = n("240849"),
        V = n("564341"),
        z = n("447259"),
        B = n("388032"),
        U = n("817736"),
        H = n("638915"),
        G = n("828551");
    let W = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        },
        q = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        },
        Z = {
            top: "left",
            left: "top"
        },
        Y = {
            top: "height",
            left: "width"
        },
        X = {
            width: "totalWidth",
            height: "totalHeight"
        },
        J = {},
        $ = "undefined" != typeof document && window.visualViewport;

    function Q(e) {
        let t = 0,
            n = 0,
            r = 0,
            a = 0,
            i = 0,
            o = 0,
            s = {};
        if ("BODY" === e.tagName) {
            var c, l;
            let i = document.documentElement;
            r = i.clientWidth, a = i.clientHeight, t = null !== (c = null == $ ? void 0 : $.width) && void 0 !== c ? c : r, n = null !== (l = null == $ ? void 0 : $.height) && void 0 !== l ? l : a, s.top = i.scrollTop || e.scrollTop, s.left = i.scrollLeft || e.scrollLeft
        } else({
            width: t,
            height: n,
            top: i,
            left: o
        } = ea(e)), s.top = e.scrollTop, s.left = e.scrollLeft, r = t, a = n;
        return {
            width: t,
            height: n,
            totalWidth: r,
            totalHeight: a,
            scroll: s,
            top: i,
            left: o
        }
    }

    function ee(e, t, n, r, a, i) {
        let o = a.scroll[e],
            s = r[Y[e]],
            c = t - i - o,
            l = t + i - o + n;
        return c < 0 ? -c : l > s ? Math.max(s - l, -c) : 0
    }

    function et(e) {
        if (J[e]) return J[e];
        let [t, n] = e.split(" "), r = W[t] || "right", a = Z[r];
        !W[n] && (n = "center");
        let i = Y[r],
            o = Y[a];
        return J[e] = {
            placement: t,
            crossPlacement: n,
            axis: r,
            crossAxis: a,
            size: i,
            crossSize: o
        }, J[e]
    }

    function en(e, t, n, r, a, i, o, s, c, l) {
        let {
            placement: u,
            crossPlacement: d,
            axis: p,
            crossAxis: f,
            size: m,
            crossSize: h
        } = r, v = {};
        v[f] = e[f], "center" === d ? v[f] += (e[h] - n[h]) / 2 : d !== f && (v[f] += e[h] - n[h]), v[f] += i;
        let g = e[f] - n[h] + c + l,
            y = e[f] + e[h] - c - l;
        if (v[f] = (0, _.clamp)(v[f], g, y), u === p) {
            let n = s ? o[m] : t[X[m]];
            v[q[p]] = Math.floor(n - e[p] + a)
        } else v[p] = Math.floor(e[p] + e[m] + a);
        return v
    }

    function er(e, t, n, r, a, i) {
        let {
            placement: o,
            axis: s,
            size: c
        } = i;
        return o === s ? Math.max(0, n[s] - e[s] - e.scroll[s] + t[s] - r[s] - r[q[s]] - a) : Math.max(0, e[c] + e[s] + e.scroll[s] - t[s] - n[s] - n[c] - r[s] - r[q[s]] - a)
    }

    function ea(e) {
        let {
            top: t,
            left: n,
            width: r,
            height: a
        } = e.getBoundingClientRect(), {
            scrollTop: i,
            scrollLeft: o,
            clientTop: s,
            clientLeft: c
        } = document.documentElement;
        return {
            top: t + i - s,
            left: n + o - c,
            width: r,
            height: a
        }
    }

    function ei(e, t) {
        let n, r = window.getComputedStyle(e);
        if ("fixed" === r.position) {
            let {
                top: t,
                left: r,
                width: a,
                height: i
            } = e.getBoundingClientRect();
            n = {
                top: t,
                left: r,
                width: a,
                height: i
            }
        } else {
            n = ea(e);
            let r = ea(t),
                a = window.getComputedStyle(t);
            r.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= r.top, n.left -= r.left
        }
        return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n
    }

    function eo(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    let es = new WeakMap,
        ec = "undefined" != typeof document && window.visualViewport;

    function el(e) {
        let {
            direction: t
        } = (0, V.useLocale)(), {
            arrowSize: n = 0,
            targetRef: r,
            overlayRef: a,
            scrollRef: i = a,
            placement: o = "bottom",
            containerPadding: s = 12,
            shouldFlip: c = !0,
            boundaryElement: l = "undefined" != typeof document ? document.body : null,
            offset: u = 0,
            crossOffset: d = 0,
            shouldUpdatePosition: p = !0,
            isOpen: f = !0,
            onClose: m,
            maxHeight: h,
            arrowBoundaryOffset: v = 0
        } = e, [g, y] = (0, K.useState)({
            position: {},
            arrowOffsetLeft: void 0,
            arrowOffsetTop: void 0,
            maxHeight: void 0,
            placement: void 0
        }), b = [p, o, a.current, r.current, i.current, s, c, l, u, d, f, t, h, v, n], x = (0, K.useCallback)(() => {
            if (!1 === p || !f || !a.current || !r.current || !i.current || !l) return;
            let e = function(e) {
                var t, n;
                let r, {
                        placement: a,
                        targetNode: i,
                        overlayNode: o,
                        scrollNode: s,
                        padding: c,
                        shouldFlip: l,
                        boundaryElement: u,
                        offset: d,
                        crossOffset: p,
                        maxHeight: f,
                        arrowSize: m = 0,
                        arrowBoundaryOffset: h = 0
                    } = e,
                    v = o instanceof HTMLElement ? function(e) {
                        let t = e.offsetParent;
                        if (t && t === document.body && "static" === window.getComputedStyle(t).position && !eo(t) && (t = document.documentElement), null == t)
                            for (t = e.parentElement; t && !eo(t);) t = t.parentElement;
                        return t || document.documentElement
                    }(o) : document.documentElement,
                    g = v === document.documentElement,
                    y = window.getComputedStyle(v).position,
                    b = g ? ea(i) : ei(i, v);
                if (!g) {
                    let {
                        marginTop: e,
                        marginLeft: t
                    } = window.getComputedStyle(i);
                    b.top += parseInt(e, 10) || 0, b.left += parseInt(t, 10) || 0
                }
                let x = ea(o);
                let S = (t = o, {
                    top: parseInt((r = window.getComputedStyle(t)).marginTop, 10) || 0,
                    bottom: parseInt(r.marginBottom, 10) || 0,
                    left: parseInt(r.marginLeft, 10) || 0,
                    right: parseInt(r.marginRight, 10) || 0
                });
                return x.width += S.left + S.right, x.height += S.top + S.bottom,
                    function(e, t, n, r, a, i, o, s, c, l, u, d, p, f, m, h) {
                        var v, g, y, b, x, S;
                        let w = et(e),
                            {
                                size: D,
                                crossAxis: C,
                                crossSize: k,
                                placement: P,
                                crossPlacement: E
                            } = w,
                            T = en(t, s, n, w, u, d, l, p, m, h),
                            M = u,
                            R = er(s, l, t, a, i + u, w);
                        if (o && r[D] > R) {
                            let e = et("".concat(q[P], " ").concat(E)),
                                r = en(t, s, n, e, u, d, l, p, m, h);
                            er(s, l, t, a, i + u, e) > R && (w = e, T = r, M = u)
                        }
                        let I = ee(C, T[C], n[k], s, c, i);
                        T[C] += I;
                        let O = (v = T, g = s, y = l, b = t, x = a, S = i, null != v.top ? Math.max(0, g.height + g.top + g.scroll.top - (y.top + v.top) - (x.top + x.bottom + S)) : Math.max(0, b.top + y.top - (g.top + g.scroll.top) - (x.top + x.bottom + S)));
                        f && f < O && (O = f), n.height = Math.min(n.height, O), I = ee(C, (T = en(t, s, n, w, M, d, l, p, m, h))[C], n[k], s, c, i), T[C] += I;
                        let A = {},
                            L = t[C] + .5 * t[k] - n[C],
                            N = m / 2 + h,
                            F = n[k] - m / 2 - h,
                            j = t[C] - n[C] + m / 2,
                            K = t[C] + t[k] - n[C] - m / 2,
                            V = (0, _.clamp)(L, j, K);
                        return A[C] = (0, _.clamp)(V, N, F), {
                            position: T,
                            maxHeight: O,
                            arrowOffsetLeft: A.left,
                            arrowOffsetTop: A.top,
                            placement: w.placement
                        }
                    }(a, b, x, {
                        top: (n = s).scrollTop,
                        left: n.scrollLeft,
                        width: n.scrollWidth,
                        height: n.scrollHeight
                    }, S, c, l, Q(u), Q(v), "BODY" === u.tagName ? ea(v) : ei(v, u), d, p, !!y && "static" !== y, f, m, h)
            }({
                placement: function(e, t) {
                    return "rtl" === t ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")
                }(o, t),
                overlayNode: a.current,
                targetNode: r.current,
                scrollNode: i.current,
                padding: s,
                shouldFlip: c,
                boundaryElement: l,
                offset: u,
                crossOffset: d,
                maxHeight: h,
                arrowSize: n,
                arrowBoundaryOffset: v
            });
            Object.keys(e.position).forEach(t => a.current.style[t] = e.position[t] + "px"), a.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + "px" : void 0, y(e)
        }, b);
        (0, _.useLayoutEffect)(x, b),
        function(e) {
            (0, _.useLayoutEffect)(() => (window.addEventListener("resize", e, !1), () => {
                window.removeEventListener("resize", e, !1)
            }), [e])
        }(x), (0, _.useResizeObserver)({
            ref: a,
            onResize: x
        });
        let S = (0, K.useRef)(!1);
        (0, _.useLayoutEffect)(() => {
            let e;
            let t = () => {
                S.current = !0, clearTimeout(e), e = setTimeout(() => {
                    S.current = !1
                }, 500), x()
            };
            return null == ec || ec.addEventListener("resize", t), null == ec || ec.addEventListener("scroll", t), () => {
                null == ec || ec.removeEventListener("resize", t), null == ec || ec.removeEventListener("scroll", t)
            }
        }, [x]);
        let w = (0, K.useCallback)(() => {
            !S.current && m()
        }, [m, S]);
        return ! function(e) {
            let {
                triggerRef: t,
                isOpen: n,
                onClose: r
            } = e;
            (0, K.useEffect)(() => {
                if (!n || null === r) return;
                let e = e => {
                    let n = e.target;
                    if (!t.current || n instanceof Node && !n.contains(t.current)) return;
                    let a = r || es.get(t.current);
                    a && a()
                };
                return window.addEventListener("scroll", e, !0), () => {
                    window.removeEventListener("scroll", e, !0)
                }
            }, [n, r, t])
        }({
            triggerRef: r,
            isOpen: f,
            onClose: m && w
        }), {
            overlayProps: {
                style: {
                    position: "absolute",
                    zIndex: 1e5,
                    ...g.position,
                    maxHeight: g.maxHeight
                }
            },
            placement: g.placement,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: g.arrowOffsetLeft,
                    top: g.arrowOffsetTop
                }
            },
            updatePosition: x
        }
    }
    let eu = [];

    function ed(e, t) {
        let {
            onClose: n,
            shouldCloseOnBlur: r,
            isOpen: a,
            isDismissable: i = !1,
            isKeyboardDismissDisabled: o = !1,
            shouldCloseOnInteractOutside: s
        } = e;
        (0, K.useEffect)(() => (a && eu.push(t), () => {
            let e = eu.indexOf(t);
            e >= 0 && eu.splice(e, 1)
        }), [a, t]);
        let c = () => {
            eu[eu.length - 1] === t && n && n()
        };
        (0, B.useInteractOutside)({
            ref: t,
            onInteractOutside: i && a ? e => {
                (!s || s(e.target)) && (eu[eu.length - 1] === t && (e.stopPropagation(), e.preventDefault()), c())
            } : null,
            onInteractOutsideStart: e => {
                (!s || s(e.target)) && eu[eu.length - 1] === t && (e.stopPropagation(), e.preventDefault())
            }
        });
        let {
            focusWithinProps: l
        } = (0, B.useFocusWithin)({
            isDisabled: !r,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, z.isElementInChildOfActiveScope)(e.relatedTarget)) && (!s || s(e.relatedTarget)) && n()
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" === e.key && !o && (e.stopPropagation(), e.preventDefault(), c())
                },
                ...l
            },
            underlayProps: {
                onPointerDown: e => {
                    e.target === e.currentTarget && e.preventDefault()
                }
            }
        }
    }

    function ep(e, t, n) {
        let r, {
                type: a
            } = e,
            {
                isOpen: i
            } = t;
        (0, K.useEffect)(() => {
            n && n.current && es.set(n.current, t.close)
        });
        "menu" === a ? r = !0 : "listbox" === a && (r = "listbox");
        let o = (0, _.useId)();
        return {
            triggerProps: {
                "aria-haspopup": r,
                "aria-expanded": i,
                "aria-controls": i ? o : null,
                onPress: t.toggle
            },
            overlayProps: {
                id: o
            }
        }
    }
    let ef = "undefined" != typeof document && window.visualViewport,
        em = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        eh = 0;

    function ev() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                isDisabled: t
            } = e;
        (0, _.useLayoutEffect)(() => {
            if (!t) return 1 == ++eh && (r = (0, _.isIOS)() ? function() {
                let e, t;
                let n = null,
                    r = () => {
                        if (n) return;
                        let e = window.pageXOffset,
                            t = window.pageYOffset;
                        n = (0, _.chain)(ey(window, "scroll", () => {
                            window.scrollTo(0, 0)
                        }), eg(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px")), eg(document.documentElement, "overflow", "hidden"), eg(document.body, "marginTop", "-".concat(t, "px")), () => {
                            window.scrollTo(e, t)
                        }), window.scrollTo(0, 0)
                    },
                    a = (0, _.chain)(ey(document, "touchstart", n => {
                        ((e = (0, _.getScrollParent)(n.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && "auto" === window.getComputedStyle(e).overscrollBehavior && (t = eg(e, "overscrollBehavior", "contain"))
                    }, {
                        passive: !1,
                        capture: !0
                    }), ey(document, "touchmove", t => {
                        if (!e || e === document.documentElement || e === document.body) {
                            t.preventDefault();
                            return
                        }
                        e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
                    }, {
                        passive: !1,
                        capture: !0
                    }), ey(document, "touchend", e => {
                        let n = e.target;
                        ex(n) && n !== document.activeElement && (e.preventDefault(), r(), n.style.transform = "translateY(-2000px)", n.focus(), requestAnimationFrame(() => {
                            n.style.transform = ""
                        })), t && t()
                    }, {
                        passive: !1,
                        capture: !0
                    }), ey(document, "focus", e => {
                        let t = e.target;
                        ex(t) && (r(), t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                            t.style.transform = "", ef && (ef.height < window.innerHeight ? requestAnimationFrame(() => {
                                eb(t)
                            }) : ef.addEventListener("resize", () => eb(t), {
                                once: !0
                            }))
                        }))
                    }, !0));
                return () => {
                    null == t || t(), null == n || n(), a()
                }
            }() : function() {
                return (0, _.chain)(eg(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px")), eg(document.documentElement, "overflow", "hidden"))
            }()), () => {
                0 == --eh && r()
            }
        }, [t])
    }

    function eg(e, t, n) {
        let r = e.style[t];
        return e.style[t] = n, () => {
            e.style[t] = r
        }
    }

    function ey(e, t, n, r) {
        return e.addEventListener(t, n, r), () => {
            e.removeEventListener(t, n, r)
        }
    }

    function eb(e) {
        let t = document.scrollingElement || document.documentElement;
        for (; e && e !== t;) {
            let t = (0, _.getScrollParent)(e);
            if (t !== document.documentElement && t !== document.body && t !== e) {
                let n = t.getBoundingClientRect().top,
                    r = e.getBoundingClientRect().top;
                r > n + e.clientHeight && (t.scrollTop += r - n)
            }
            e = t.parentElement
        }
    }

    function ex(e) {
        return e instanceof HTMLInputElement && !em.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
    }
    let eS = K.createContext(null);

    function ew(e) {
        let {
            children: t
        } = e, n = (0, K.useContext)(eS), [r, a] = (0, K.useState)(0), i = (0, K.useMemo)(() => ({
            parent: n,
            modalCount: r,
            addModal() {
                a(e => e + 1), n && n.addModal()
            },
            removeModal() {
                a(e => e - 1), n && n.removeModal()
            }
        }), [n, r]);
        return K.createElement(eS.Provider, {
            value: i
        }, t)
    }

    function eD(e) {
        let t;
        let {
            modalProviderProps: n
        } = {
            modalProviderProps: {
                "aria-hidden": !!(t = (0, K.useContext)(eS)) && t.modalCount > 0 || null
            }
        };
        return K.createElement("div", {
            "data-overlay-container": !0,
            ...e,
            ...n
        })
    }

    function eC(e) {
        return K.createElement(ew, null, K.createElement(eD, e))
    }

    function ek(e) {
        let t = (0, H.useIsSSR)(),
            {
                portalContainer: n = t ? null : document.body,
                ...r
            } = e;
        if (K.useEffect(() => {
                if (null == n ? void 0 : n.closest("[data-overlay-container]")) throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")
            }, [n]), !n) return null;
        let a = K.createElement(eC, r);
        return U.createPortal(a, n)
    }
    var eP = {};

    function eE(e) {
        var t;
        let {
            onDismiss: n,
            ...r
        } = e;
        let a = (0, V.useLocalizedStringFormatter)((t = eP) && t.__esModule ? t.default : t, "@react-aria/overlays"),
            i = (0, _.useLabels)(r, a.format("dismiss"));
        return K.createElement(G.VisuallyHidden, null, K.createElement("button", {
            ...i,
            tabIndex: -1,
            onClick: () => {
                n && n()
            },
            style: {
                width: 1,
                height: 1
            }
        }))
    }
    eP = {
        "ar-AE": a.default,
        "bg-BG": i.default,
        "cs-CZ": o.default,
        "da-DK": s.default,
        "de-DE": c.default,
        "el-GR": l.default,
        "en-US": u.default,
        "es-ES": d.default,
        "et-EE": p.default,
        "fi-FI": f.default,
        "fr-FR": m.default,
        "he-IL": h.default,
        "hr-HR": v.default,
        "hu-HU": g.default,
        "it-IT": y.default,
        "ja-JP": b.default,
        "ko-KR": x.default,
        "lt-LT": S.default,
        "lv-LV": w.default,
        "nb-NO": D.default,
        "nl-NL": C.default,
        "pl-PL": k.default,
        "pt-BR": P.default,
        "pt-PT": E.default,
        "ro-RO": T.default,
        "ru-RU": M.default,
        "sk-SK": R.default,
        "sl-SI": I.default,
        "sr-SP": O.default,
        "sv-SE": A.default,
        "tr-TR": L.default,
        "uk-UA": N.default,
        "zh-CN": F.default,
        "zh-TW": j.default
    };
    let eT = new WeakMap,
        eM = [];

    function eR(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body,
            n = new Set(e),
            r = new Set,
            a = e => {
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) n.add(t);
                let t = e => {
                        if (n.has(e) || r.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of n)
                            if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    o = t(e);
                if (o === NodeFilter.FILTER_ACCEPT && i(e), o !== NodeFilter.FILTER_REJECT) {
                    let e = a.nextNode();
                    for (; null != e;) i(e), e = a.nextNode()
                }
            },
            i = e => {
                var t;
                let n = null !== (t = eT.get(e)) && void 0 !== t ? t : 0;
                ("true" !== e.getAttribute("aria-hidden") || 0 !== n) && (0 === n && e.setAttribute("aria-hidden", "true"), r.add(e), eT.set(e, n + 1))
            };
        eM.length && eM[eM.length - 1].disconnect(), a(t);
        let o = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type && 0 !== t.addedNodes.length && ![...n, ...r].some(e => e.contains(t.target))) {
                    for (let e of t.removedNodes) e instanceof Element && (n.delete(e), r.delete(e));
                    for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && a(e)
                }
        });
        o.observe(t, {
            childList: !0,
            subtree: !0
        });
        let s = {
            observe() {
                o.observe(t, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                o.disconnect()
            }
        };
        return eM.push(s), () => {
            for (let e of (o.disconnect(), r)) {
                let t = eT.get(e);
                1 === t ? (e.removeAttribute("aria-hidden"), eT.delete(e)) : eT.set(e, t - 1)
            }
            s === eM[eM.length - 1] ? (eM.pop(), eM.length && eM[eM.length - 1].observe()) : eM.splice(eM.indexOf(s), 1)
        }
    }

    function eI(e, t) {
        let {
            triggerRef: n,
            popoverRef: r,
            isNonModal: a,
            isKeyboardDismissDisabled: i,
            shouldCloseOnInteractOutside: o,
            ...s
        } = e, {
            overlayProps: c,
            underlayProps: l
        } = ed({
            isOpen: t.isOpen,
            onClose: t.close,
            shouldCloseOnBlur: !0,
            isDismissable: !a,
            isKeyboardDismissDisabled: i,
            shouldCloseOnInteractOutside: o
        }, r), {
            overlayProps: u,
            arrowProps: d,
            placement: p
        } = el({
            ...s,
            targetRef: n,
            overlayRef: r,
            isOpen: t.isOpen,
            onClose: a ? t.close : null
        });
        return ev({
            isDisabled: a || !t.isOpen
        }), (0, _.useLayoutEffect)(() => {
            if (t.isOpen && !a && r.current) return eR([r.current])
        }, [a, t.isOpen, r]), {
            popoverProps: (0, _.mergeProps)(c, u),
            arrowProps: d,
            underlayProps: l,
            placement: p
        }
    }
    let eO = K.createContext(null);

    function eA(e) {
        let t = (0, H.useIsSSR)(),
            {
                portalContainer: n = t ? null : document.body,
                isExiting: r
            } = e,
            [a, i] = (0, K.useState)(!1),
            o = (0, K.useMemo)(() => ({
                contain: a,
                setContain: i
            }), [a, i]);
        if (!n) return null;
        let s = e.children;
        return !e.disableFocusManagement && (s = K.createElement(z.FocusScope, {
            restoreFocus: !0,
            contain: a && !r
        }, s)), s = K.createElement(eO.Provider, {
            value: o
        }, K.createElement(B.ClearPressResponder, null, s)), U.createPortal(s, n)
    }

    function eL() {
        let e = (0, K.useContext)(eO),
            t = null == e ? void 0 : e.setContain;
        (0, _.useLayoutEffect)(() => {
            null == t || t(!0)
        }, [t])
    }

    function eN(e, t, n) {
        let {
            overlayProps: r,
            underlayProps: a
        } = ed({
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        }, n);
        return ev({
            isDisabled: !t.isOpen
        }), eL(), (0, K.useEffect)(() => {
            if (t.isOpen) return eR([n.current])
        }, [t.isOpen, n]), {
            modalProps: (0, _.mergeProps)(r),
            underlayProps: a
        }
    }
}