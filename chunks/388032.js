function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClearPressResponder: function() {
            return T
        },
        useFocus: function() {
            return I
        },
        isFocusVisible: function() {
            return G
        },
        getInteractionModality: function() {
            return W
        },
        setInteractionModality: function() {
            return q
        },
        useInteractionModality: function() {
            return Z
        },
        useFocusVisibleListener: function() {
            return X
        },
        useFocusWithin: function() {
            return J
        },
        useHover: function() {
            return er
        },
        useInteractOutside: function() {
            return ea
        },
        useKeyboard: function() {
            return es
        },
        useMove: function() {
            return ec
        },
        usePress: function() {
            return y
        },
        useScrollWheel: function() {
            return el
        },
        useLongPress: function() {
            return eu
        }
    }), n("222007");
    var r = n("240849"),
        a = n("884691"),
        i = n("79458"),
        o = n("599514"),
        s = n("686047"),
        c = n("638915");
    let l = "default",
        u = "",
        d = new WeakMap;

    function p(e) {
        if ((0, r.isIOS)()) {
            if ("default" === l) {
                let t = (0, r.getOwnerDocument)(e);
                u = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
            }
            l = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (d.set(e, e.style.userSelect), e.style.userSelect = "none")
    }

    function f(e) {
        if ((0, r.isIOS)()) "disabled" === l && (l = "restoring", setTimeout(() => {
            (0, r.runAfterTransition)(() => {
                if ("restoring" === l) {
                    let t = (0, r.getOwnerDocument)(e);
                    "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = u || ""), u = "", l = "default"
                }
            })
        }, 300));
        else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && d.has(e)) {
            let t = d.get(e);
            "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), d.delete(e)
        }
    }
    let m = a.createContext({
        register: () => {}
    });
    m.displayName = "PressResponderContext";
    var h = new WeakMap;
    class v {
        continuePropagation() {
            (0, s._)(this, h, !1)
        }
        get shouldStopPropagation() {
            return (0, i._)(this, h)
        }
        constructor(e, t, n) {
            (0, o._)(this, h, {
                writable: !0,
                value: void 0
            }), (0, s._)(this, h, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
        }
    }
    let g = Symbol("linkClicked");

    function y(e) {
        let {
            onPress: t,
            onPressChange: n,
            onPressStart: i,
            onPressEnd: o,
            onPressUp: s,
            isDisabled: c,
            isPressed: l,
            preventFocusOnPress: u,
            shouldCancelOnPointerExit: d,
            allowTextSelectionOnPress: h,
            ref: y,
            ...P
        } = function(e) {
            let t = (0, a.useContext)(m);
            if (t) {
                let {
                    register: n,
                    ...a
                } = t;
                e = (0, r.mergeProps)(a, e), n()
            }
            return (0, r.useSyncRef)(t, e.ref), e
        }(e), [E, T] = (0, a.useState)(!1), M = (0, a.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null
        }), {
            addGlobalListener: R,
            removeAllGlobalListeners: I
        } = (0, r.useGlobalListeners)(), O = (0, r.useEffectEvent)((e, t) => {
            let r = M.current;
            if (c || r.didFirePressStart) return !1;
            let a = !0;
            if (r.isTriggeringEvent = !0, i) {
                let n = new v("pressstart", t, e);
                i(n), a = n.shouldStopPropagation
            }
            return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, T(!0), a
        }), A = (0, r.useEffectEvent)(function(e, r) {
            let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = M.current;
            if (!i.didFirePressStart) return !1;
            i.ignoreClickAfterPress = !0, i.didFirePressStart = !1, i.isTriggeringEvent = !0;
            let s = !0;
            if (o) {
                let t = new v("pressend", r, e);
                o(t), s = t.shouldStopPropagation
            }
            if (n && n(!1), T(!1), t && a && !c) {
                let n = new v("press", r, e);
                t(n), s && (s = n.shouldStopPropagation)
            }
            return i.isTriggeringEvent = !1, s
        }), L = (0, r.useEffectEvent)((e, t) => {
            let n = M.current;
            if (c) return !1;
            if (s) {
                n.isTriggeringEvent = !0;
                let r = new v("pressup", t, e);
                return s(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
            }
            return !0
        }), N = (0, r.useEffectEvent)(e => {
            let t = M.current;
            t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && A(w(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, I(), !h && f(t.target))
        }), F = (0, r.useEffectEvent)(e => {
            d && N(e)
        }), j = (0, a.useMemo)(() => {
            let e = M.current,
                t = {
                    onKeyDown(t) {
                        if (x(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                            var a;
                            k(t.target, t.key) && t.preventDefault();
                            let i = !0;
                            !e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, i = O(t, "keyboard"), R((0, r.getOwnerDocument)(t.currentTarget), "keyup", n, !1)), i && t.stopPropagation(), t.metaKey && (0, r.isMac)() && (null === (a = e.metaKeyEvents) || void 0 === a || a.set(t.key, t.nativeEvent))
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map)
                    },
                    onKeyUp(t) {
                        x(t.nativeEvent, t.currentTarget) && !t.repeat && t.currentTarget.contains(t.target) && e.target && L(w(e.target, t), "keyboard")
                    },
                    onClick(t) {
                        if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !r.openLink.isOpening) {
                            let n = !0;
                            if (c && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, r.isVirtualClick)(t.nativeEvent))) {
                                !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget);
                                let e = O(t, "virtual"),
                                    a = L(t, "virtual"),
                                    i = A(t, "virtual");
                                n = e && a && i
                            }
                            e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
                        }
                    }
                },
                n = t => {
                    var n, a, i;
                    if (e.isPressed && e.target && x(t, e.target)) {
                        k(t.target, t.key) && t.preventDefault();
                        let n = t.target,
                            i = A(w(e.target, t), "keyboard", e.target.contains(n));
                        I(), i && t.stopPropagation(), "Enter" !== t.key && b(e.target) && e.target.contains(n) && !t[g] && (t[g] = !0, (0, r.openLink)(e.target, t, !1)), e.isPressed = !1, null === (a = e.metaKeyEvents) || void 0 === a || a.delete(t.key)
                    } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                        let t = e.metaKeyEvents;
                        for (let n of (e.metaKeyEvents = void 0, t.values())) null === (i = e.target) || void 0 === i || i.dispatchEvent(new KeyboardEvent("keyup", n))
                    }
                };
            if ("undefined" != typeof PointerEvent) {
                t.onPointerDown = t => {
                    if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
                    if ((0, r.isVirtualPointerEvent)(t.nativeEvent)) {
                        e.pointerType = "virtual";
                        return
                    }
                    C(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
                    let o = !0;
                    !e.isPressed && (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget), !h && p(e.target), o = O(t, e.pointerType), R((0, r.getOwnerDocument)(t.currentTarget), "pointermove", n, !1), R((0, r.getOwnerDocument)(t.currentTarget), "pointerup", a, !1), R((0, r.getOwnerDocument)(t.currentTarget), "pointercancel", i, !1)), o && t.stopPropagation()
                }, t.onMouseDown = e => {
                    e.currentTarget.contains(e.target) && 0 === e.button && (C(e.currentTarget) && e.preventDefault(), e.stopPropagation())
                }, t.onPointerUp = t => {
                    t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && D(t, t.currentTarget) && L(t, e.pointerType || t.pointerType)
                };
                let n = t => {
                        t.pointerId === e.activePointerId && (e.target && D(t, e.target) ? !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, O(w(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, A(w(e.target, t), e.pointerType, !1), F(t)))
                    },
                    a = t => {
                        t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (D(t, e.target) && null != e.pointerType ? A(w(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && A(w(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, I(), !h && f(e.target))
                    },
                    i = e => {
                        N(e)
                    };
                t.onDragStart = e => {
                    e.currentTarget.contains(e.target) && N(e)
                }
            } else {
                t.onMouseDown = t => {
                    if (0 === t.button && !!t.currentTarget.contains(t.target)) {
                        if (C(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents) {
                            t.stopPropagation();
                            return
                        }
                        e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = (0, r.isVirtualClick)(t.nativeEvent) ? "virtual" : "mouse", !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget), O(t, e.pointerType) && t.stopPropagation(), R((0, r.getOwnerDocument)(t.currentTarget), "mouseup", n, !1)
                    }
                }, t.onMouseEnter = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = !0;
                    e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, n = O(t, e.pointerType)), n && t.stopPropagation()
                }, t.onMouseLeave = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = !0;
                    e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, n = A(t, e.pointerType, !1), F(t)), n && t.stopPropagation()
                }, t.onMouseUp = t => {
                    t.currentTarget.contains(t.target) && !e.ignoreEmulatedMouseEvents && 0 === t.button && L(t, e.pointerType || "mouse")
                };
                let n = t => {
                    if (0 === t.button) {
                        if (e.isPressed = !1, I(), e.ignoreEmulatedMouseEvents) {
                            e.ignoreEmulatedMouseEvents = !1;
                            return
                        }
                        e.target && D(t, e.target) && null != e.pointerType ? A(w(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && A(w(e.target, t), e.pointerType, !1), e.isOverTarget = !1
                    }
                };
                t.onTouchStart = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = function(e) {
                        let {
                            targetTouches: t
                        } = e;
                        return t.length > 0 ? t[0] : null
                    }(t.nativeEvent);
                    if (!!n) e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget), !h && p(e.target), O(t, e.pointerType) && t.stopPropagation(), R((0, r.getOwnerWindow)(t.currentTarget), "scroll", a, !0)
                }, t.onTouchMove = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    if (!e.isPressed) {
                        t.stopPropagation();
                        return
                    }
                    let n = S(t.nativeEvent, e.activePointerId),
                        r = !0;
                    n && D(n, t.currentTarget) ? !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, r = O(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = A(t, e.pointerType, !1), F(t)), r && t.stopPropagation()
                }, t.onTouchEnd = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    if (!e.isPressed) {
                        t.stopPropagation();
                        return
                    }
                    let n = S(t.nativeEvent, e.activePointerId),
                        r = !0;
                    n && D(n, t.currentTarget) && null != e.pointerType ? (L(t, e.pointerType), r = A(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = A(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !h && f(e.target), I()
                }, t.onTouchCancel = t => {
                    t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && N(t))
                };
                let a = t => {
                    e.isPressed && t.target.contains(e.target) && N({
                        currentTarget: e.target,
                        shiftKey: !1,
                        ctrlKey: !1,
                        metaKey: !1,
                        altKey: !1
                    })
                };
                t.onDragStart = e => {
                    e.currentTarget.contains(e.target) && N(e)
                }
            }
            return t
        }, [R, c, u, I, h, N, F, A, O, L]);
        return (0, a.useEffect)(() => () => {
            var e;
            !h && f(null !== (e = M.current.target) && void 0 !== e ? e : void 0)
        }, [h]), {
            isPressed: l || E,
            pressProps: (0, r.mergeProps)(P, j)
        }
    }

    function b(e) {
        return "A" === e.tagName && e.hasAttribute("href")
    }

    function x(e, t) {
        let {
            key: n,
            code: a
        } = e, i = t.getAttribute("role");
        return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === a) && !(t instanceof(0, r.getOwnerWindow)(t).HTMLInputElement && !E(t, n) || t instanceof(0, r.getOwnerWindow)(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === i || !i && b(t)) && "Enter" !== n)
    }

    function S(e, t) {
        let n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
            let r = n[e];
            if (r.identifier === t) return r
        }
        return null
    }

    function w(e, t) {
        return {
            currentTarget: e,
            shiftKey: t.shiftKey,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey
        }
    }

    function D(e, t) {
        var n, r, a;
        let i, o, s = t.getBoundingClientRect();
        let c = (i = 0, o = 0, void 0 !== (n = e).width ? i = n.width / 2 : void 0 !== n.radiusX && (i = n.radiusX), void 0 !== n.height ? o = n.height / 2 : void 0 !== n.radiusY && (o = n.radiusY), {
            top: n.clientY - o,
            right: n.clientX + i,
            bottom: n.clientY + o,
            left: n.clientX - i
        });
        return r = s, a = c, !(r.left > a.right) && !(a.left > r.right) && !(r.top > a.bottom) && !(a.top > r.bottom) && !0
    }

    function C(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute("draggable")
    }

    function k(e, t) {
        return e instanceof HTMLInputElement ? !E(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !b(e) && !0
    }
    let P = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function E(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : P.has(e.type)
    }

    function T(e) {
        let {
            children: t
        } = e, n = (0, a.useMemo)(() => ({
            register: () => {}
        }), []);
        return a.createElement(m.Provider, {
            value: n
        }, t)
    }
    class M {
        isDefaultPrevented() {
            return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
            this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
            this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
            return !1
        }
        persist() {}
        constructor(e, t) {
            this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
        }
    }

    function R(e) {
        let t = (0, a.useRef)({
            isFocused: !1,
            observer: null
        });
        (0, r.useLayoutEffect)(() => {
            let e = t.current;
            return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
            }
        }, []);
        let n = (0, r.useEffectEvent)(t => {
            null == e || e(t)
        });
        return (0, a.useCallback)(e => {
            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target;
                r.addEventListener("focusout", e => {
                    t.current.isFocused = !1, r.disabled && n(new M("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                }, {
                    once: !0
                }), t.current.observer = new MutationObserver(() => {
                    if (t.current.isFocused && r.disabled) {
                        var e;
                        null === (e = t.current.observer) || void 0 === e || e.disconnect();
                        let n = r === document.activeElement ? null : document.activeElement;
                        r.dispatchEvent(new FocusEvent("blur", {
                            relatedTarget: n
                        })), r.dispatchEvent(new FocusEvent("focusout", {
                            bubbles: !0,
                            relatedTarget: n
                        }))
                    }
                }), t.current.observer.observe(r, {
                    attributes: !0,
                    attributeFilter: ["disabled"]
                })
            }
        }, [n])
    }

    function I(e) {
        let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: i
        } = e, o = (0, a.useCallback)(e => {
            if (e.target === e.currentTarget) return r && r(e), i && i(!1), !0
        }, [r, i]), s = R(o), c = (0, a.useCallback)(e => {
            e.target === e.currentTarget && document.activeElement === e.target && (n && n(e), i && i(!0), s(e))
        }, [i, n, s]);
        return {
            focusProps: {
                onFocus: !t && (n || i || r) ? c : void 0,
                onBlur: !t && (r || i) ? o : void 0
            }
        }
    }
    let O = null,
        A = new Set,
        L = !1,
        N = !1,
        F = !1,
        j = {
            Tab: !0,
            Escape: !0
        };

    function K(e, t) {
        for (let n of A) n(e, t)
    }

    function _(e) {
        var t;
        if (N = !0, !((t = e).metaKey || !(0, r.isMac)() && t.altKey || t.ctrlKey || "Control" === t.key || "Shift" === t.key || "Meta" === t.key)) O = "keyboard", K("keyboard", e)
    }

    function V(e) {
        O = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (N = !0, K("pointer", e))
    }

    function z(e) {
        (0, r.isVirtualClick)(e) && (N = !0, O = "virtual")
    }

    function B(e) {
        e.target !== window && e.target !== document && (!N && !F && (O = "virtual", K("virtual", e)), N = !1, F = !1)
    }

    function U() {
        N = !1, F = !0
    }

    function H() {
        if ("undefined" == typeof window || L) return;
        let e = HTMLElement.prototype.focus;
        HTMLElement.prototype.focus = function() {
            N = !0, e.apply(this, arguments)
        }, document.addEventListener("keydown", _, !0), document.addEventListener("keyup", _, !0), document.addEventListener("click", z, !0), window.addEventListener("focus", B, !0), window.addEventListener("blur", U, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", V, !0), document.addEventListener("pointermove", V, !0), document.addEventListener("pointerup", V, !0)) : (document.addEventListener("mousedown", V, !0), document.addEventListener("mousemove", V, !0), document.addEventListener("mouseup", V, !0)), L = !0
    }

    function G() {
        return "pointer" !== O
    }

    function W() {
        return O
    }

    function q(e) {
        O = e, K(e, null)
    }

    function Z() {
        H();
        let [e, t] = (0, a.useState)(O);
        return (0, a.useEffect)(() => {
            let e = () => {
                t(O)
            };
            return A.add(e), () => {
                A.delete(e)
            }
        }, []), (0, c.useIsSSR)() ? null : e
    }
    "undefined" != typeof document && ("loading" !== document.readyState ? H() : document.addEventListener("DOMContentLoaded", H));
    let Y = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function X(e, t, n) {
        H(), (0, a.useEffect)(() => {
            let t = (t, r) => {
                var a, i, o, s;
                if (a = !!(null == n ? void 0 : n.isTextInput), i = t, o = r, !((a = a || (null == o ? void 0 : o.target) instanceof HTMLInputElement && !Y.has(null == o ? void 0 : null === (s = o.target) || void 0 === s ? void 0 : s.type) || (null == o ? void 0 : o.target) instanceof HTMLTextAreaElement || (null == o ? void 0 : o.target) instanceof HTMLElement && (null == o ? void 0 : o.target.isContentEditable)) && "keyboard" === i && o instanceof KeyboardEvent) || j[o.key]) e(G())
            };
            return A.add(t), () => {
                A.delete(t)
            }
        }, t)
    }

    function J(e) {
        let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: i
        } = e, o = (0, a.useRef)({
            isFocusWithin: !1
        }), s = (0, a.useCallback)(e => {
            o.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (o.current.isFocusWithin = !1, n && n(e), i && i(!1))
        }, [n, i, o]), c = R(s), l = (0, a.useCallback)(e => {
            !o.current.isFocusWithin && document.activeElement === e.target && (r && r(e), i && i(!0), o.current.isFocusWithin = !0, c(e))
        }, [r, i, c]);
        return t ? {
            focusWithinProps: {
                onFocus: void 0,
                onBlur: void 0
            }
        } : {
            focusWithinProps: {
                onFocus: l,
                onBlur: s
            }
        }
    }
    let $ = !1,
        Q = 0;

    function ee() {
        $ = !0, setTimeout(() => {
            $ = !1
        }, 50)
    }

    function et(e) {
        "touch" === e.pointerType && ee()
    }

    function en() {
        if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", et) : document.addEventListener("touchend", ee), Q++, () => {
            !(--Q > 0) && ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", et) : document.removeEventListener("touchend", ee))
        }
    }

    function er(e) {
        let {
            onHoverStart: t,
            onHoverChange: n,
            onHoverEnd: r,
            isDisabled: i
        } = e, [o, s] = (0, a.useState)(!1), c = (0, a.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null
        }).current;
        (0, a.useEffect)(en, []);
        let {
            hoverProps: l,
            triggerHoverEnd: u
        } = (0, a.useMemo)(() => {
            let e = (e, r) => {
                    if (c.pointerType = r, i || "touch" === r || c.isHovered || !e.currentTarget.contains(e.target)) return;
                    c.isHovered = !0;
                    let a = e.currentTarget;
                    c.target = a, t && t({
                        type: "hoverstart",
                        target: a,
                        pointerType: r
                    }), n && n(!0), s(!0)
                },
                a = (e, t) => {
                    if (c.pointerType = "", c.target = null, "touch" === t || !c.isHovered) return;
                    c.isHovered = !1;
                    let a = e.currentTarget;
                    r && r({
                        type: "hoverend",
                        target: a,
                        pointerType: t
                    }), n && n(!1), s(!1)
                },
                o = {};
            return "undefined" != typeof PointerEvent ? (o.onPointerEnter = t => {
                (!$ || "mouse" !== t.pointerType) && e(t, t.pointerType)
            }, o.onPointerLeave = e => {
                !i && e.currentTarget.contains(e.target) && a(e, e.pointerType)
            }) : (o.onTouchStart = () => {
                c.ignoreEmulatedMouseEvents = !0
            }, o.onMouseEnter = t => {
                !c.ignoreEmulatedMouseEvents && !$ && e(t, "mouse"), c.ignoreEmulatedMouseEvents = !1
            }, o.onMouseLeave = e => {
                !i && e.currentTarget.contains(e.target) && a(e, "mouse")
            }), {
                hoverProps: o,
                triggerHoverEnd: a
            }
        }, [t, n, r, i, c]);
        return (0, a.useEffect)(() => {
            i && u({
                currentTarget: c.target
            }, c.pointerType)
        }, [i]), {
            hoverProps: l,
            isHovered: o
        }
    }

    function ea(e) {
        let {
            ref: t,
            onInteractOutside: n,
            isDisabled: i,
            onInteractOutsideStart: o
        } = e, s = (0, a.useRef)({
            isPointerDown: !1,
            ignoreEmulatedMouseEvents: !1
        }), c = (0, r.useEffectEvent)(e => {
            n && ei(e, t) && (o && o(e), s.current.isPointerDown = !0)
        }), l = (0, r.useEffectEvent)(e => {
            n && n(e)
        });
        (0, a.useEffect)(() => {
            let e = s.current;
            if (i) return;
            let n = t.current,
                a = (0, r.getOwnerDocument)(n);
            if ("undefined" != typeof PointerEvent) {
                let n = n => {
                    e.isPointerDown && ei(n, t) && l(n), e.isPointerDown = !1
                };
                return a.addEventListener("pointerdown", c, !0), a.addEventListener("pointerup", n, !0), () => {
                    a.removeEventListener("pointerdown", c, !0), a.removeEventListener("pointerup", n, !0)
                }
            } {
                let n = n => {
                        e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : e.isPointerDown && ei(n, t) && l(n), e.isPointerDown = !1
                    },
                    r = n => {
                        e.ignoreEmulatedMouseEvents = !0, e.isPointerDown && ei(n, t) && l(n), e.isPointerDown = !1
                    };
                return a.addEventListener("mousedown", c, !0), a.addEventListener("mouseup", n, !0), a.addEventListener("touchstart", c, !0), a.addEventListener("touchend", r, !0), () => {
                    a.removeEventListener("mousedown", c, !0), a.removeEventListener("mouseup", n, !0), a.removeEventListener("touchstart", c, !0), a.removeEventListener("touchend", r, !0)
                }
            }
        }, [t, i, c, l])
    }

    function ei(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
            let t = e.target.ownerDocument;
            if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
        }
        return t.current && !t.current.contains(e.target)
    }

    function eo(e) {
        if (!e) return;
        let t = !0;
        return n => {
            e({
                ...n,
                preventDefault() {
                    n.preventDefault()
                },
                isDefaultPrevented: () => n.isDefaultPrevented(),
                stopPropagation() {
                    console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
                },
                continuePropagation() {
                    t = !1
                }
            }), t && n.stopPropagation()
        }
    }

    function es(e) {
        return {
            keyboardProps: e.isDisabled ? {} : {
                onKeyDown: eo(e.onKeyDown),
                onKeyUp: eo(e.onKeyUp)
            }
        }
    }

    function ec(e) {
        let {
            onMoveStart: t,
            onMove: n,
            onMoveEnd: i
        } = e, o = (0, a.useRef)({
            didMove: !1,
            lastPosition: null,
            id: null
        }), {
            addGlobalListener: s,
            removeGlobalListener: c
        } = (0, r.useGlobalListeners)(), l = (0, r.useEffectEvent)((e, r, a, i) => {
            (0 !== a || 0 !== i) && (!o.current.didMove && (o.current.didMove = !0, null == t || t({
                type: "movestart",
                pointerType: r,
                shiftKey: e.shiftKey,
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey
            })), null == n || n({
                type: "move",
                pointerType: r,
                deltaX: a,
                deltaY: i,
                shiftKey: e.shiftKey,
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey
            }))
        }), u = (0, r.useEffectEvent)((e, t) => {
            f(), o.current.didMove && (null == i || i({
                type: "moveend",
                pointerType: t,
                shiftKey: e.shiftKey,
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey
            }))
        });
        return {
            moveProps: (0, a.useMemo)(() => {
                let e = {},
                    t = () => {
                        p(), o.current.didMove = !1
                    };
                if ("undefined" == typeof PointerEvent) {
                    let n = e => {
                            if (0 === e.button) {
                                var t, n, r, a;
                                l(e, "mouse", e.pageX - (null !== (r = null === (t = o.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (a = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== a ? a : 0)), o.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                }
                            }
                        },
                        r = e => {
                            0 === e.button && (u(e, "mouse"), c(window, "mousemove", n, !1), c(window, "mouseup", r, !1))
                        };
                    e.onMouseDown = e => {
                        0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), o.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }, s(window, "mousemove", n, !1), s(window, "mouseup", r, !1))
                    };
                    let a = e => {
                            let t = [...e.changedTouches].findIndex(e => {
                                let {
                                    identifier: t
                                } = e;
                                return t === o.current.id
                            });
                            if (t >= 0) {
                                var n, r, a, i;
                                let {
                                    pageX: s,
                                    pageY: c
                                } = e.changedTouches[t];
                                l(e, "touch", s - (null !== (a = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== a ? a : 0), c - (null !== (i = null === (r = o.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== i ? i : 0)), o.current.lastPosition = {
                                    pageX: s,
                                    pageY: c
                                }
                            }
                        },
                        i = e => {
                            [...e.changedTouches].findIndex(e => {
                                let {
                                    identifier: t
                                } = e;
                                return t === o.current.id
                            }) >= 0 && (u(e, "touch"), o.current.id = null, c(window, "touchmove", a), c(window, "touchend", i), c(window, "touchcancel", i))
                        };
                    e.onTouchStart = e => {
                        if (0 === e.changedTouches.length || null != o.current.id) return;
                        let {
                            pageX: n,
                            pageY: r,
                            identifier: c
                        } = e.changedTouches[0];
                        t(), e.stopPropagation(), e.preventDefault(), o.current.lastPosition = {
                            pageX: n,
                            pageY: r
                        }, o.current.id = c, s(window, "touchmove", a, !1), s(window, "touchend", i, !1), s(window, "touchcancel", i, !1)
                    }
                } else {
                    let n = e => {
                            if (e.pointerId === o.current.id) {
                                var t, n, r, a;
                                let i = e.pointerType || "mouse";
                                l(e, i, e.pageX - (null !== (r = null === (t = o.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (a = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== a ? a : 0)), o.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                }
                            }
                        },
                        r = e => {
                            if (e.pointerId === o.current.id) {
                                let t = e.pointerType || "mouse";
                                u(e, t), o.current.id = null, c(window, "pointermove", n, !1), c(window, "pointerup", r, !1), c(window, "pointercancel", r, !1)
                            }
                        };
                    e.onPointerDown = e => {
                        0 === e.button && null == o.current.id && (t(), e.stopPropagation(), e.preventDefault(), o.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }, o.current.id = e.pointerId, s(window, "pointermove", n, !1), s(window, "pointerup", r, !1), s(window, "pointercancel", r, !1))
                    }
                }
                let n = (e, n, r) => {
                    t(), l(e, "keyboard", n, r), u(e, "keyboard")
                };
                return e.onKeyDown = e => {
                    switch (e.key) {
                        case "Left":
                        case "ArrowLeft":
                            e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
                            break;
                        case "Right":
                        case "ArrowRight":
                            e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
                            break;
                        case "Up":
                        case "ArrowUp":
                            e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
                            break;
                        case "Down":
                        case "ArrowDown":
                            e.preventDefault(), e.stopPropagation(), n(e, 0, 1)
                    }
                }, e
            }, [o, s, c, l, u])
        }
    }

    function el(e, t) {
        let {
            onScroll: n,
            isDisabled: i
        } = e, o = (0, a.useCallback)(e => {
            !e.ctrlKey && (e.preventDefault(), e.stopPropagation(), n && n({
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }))
        }, [n]);
        (0, r.useEvent)(t, "wheel", i ? void 0 : o)
    }

    function eu(e) {
        let {
            isDisabled: t,
            onLongPressStart: n,
            onLongPressEnd: i,
            onLongPress: o,
            threshold: s = 500,
            accessibilityDescription: c
        } = e, l = (0, a.useRef)(), {
            addGlobalListener: u,
            removeGlobalListener: d
        } = (0, r.useGlobalListeners)(), {
            pressProps: p
        } = y({
            isDisabled: t,
            onPressStart(e) {
                if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (n && n({
                        ...e,
                        type: "longpressstart"
                    }), l.current = setTimeout(() => {
                        e.target.dispatchEvent(new PointerEvent("pointercancel", {
                            bubbles: !0
                        })), o && o({
                            ...e,
                            type: "longpress"
                        }), l.current = void 0
                    }, s), "touch" === e.pointerType)) {
                    let t = e => {
                        e.preventDefault()
                    };
                    u(e.target, "contextmenu", t, {
                        once: !0
                    }), u(window, "pointerup", () => {
                        setTimeout(() => {
                            d(e.target, "contextmenu", t)
                        }, 30)
                    }, {
                        once: !0
                    })
                }
            },
            onPressEnd(e) {
                l.current && clearTimeout(l.current), i && ("mouse" === e.pointerType || "touch" === e.pointerType) && i({
                    ...e,
                    type: "longpressend"
                })
            }
        }), f = (0, r.useDescription)(o && !t ? c : void 0);
        return {
            longPressProps: (0, r.mergeProps)(p, f)
        }
    }
}