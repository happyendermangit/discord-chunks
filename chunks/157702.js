function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSlider: function() {
            return d
        },
        useSliderThumb: function() {
            return p
        }
    }), n("222007"), n("70102");
    var r = n("240849"),
        a = n("884691"),
        i = n("388032"),
        o = n("113581"),
        s = n("564341"),
        c = n("447259");
    let l = new WeakMap;

    function u(e, t) {
        let n = l.get(e);
        if (!n) throw Error("Unknown slider state");
        return "".concat(n.id, "-").concat(t)
    }

    function d(e, t, n) {
        var c;
        let {
            labelProps: d,
            fieldProps: p
        } = (0, o.useLabel)(e), f = "vertical" === e.orientation;
        l.set(t, {
            id: null !== (c = d.id) && void 0 !== c ? c : p.id,
            "aria-describedby": e["aria-describedby"],
            "aria-details": e["aria-details"]
        });
        let {
            direction: m
        } = (0, s.useLocale)(), {
            addGlobalListener: h,
            removeGlobalListener: v
        } = (0, r.useGlobalListeners)(), g = (0, a.useRef)(null), y = "rtl" === m, b = (0, a.useRef)(null), {
            moveProps: x
        } = (0, i.useMove)({
            onMoveStart() {
                b.current = null
            },
            onMove(e) {
                let {
                    deltaX: a,
                    deltaY: i
                } = e, {
                    height: o,
                    width: s
                } = n.current.getBoundingClientRect(), c = f ? o : s;
                null == b.current && (b.current = t.getThumbPercent(g.current) * c);
                let l = f ? i : a;
                if ((f || y) && (l = -l), b.current += l, null != g.current && n.current) {
                    let e = (0, r.clamp)(b.current / c, 0, 1);
                    t.setThumbPercent(g.current, e)
                }
            },
            onMoveEnd() {
                null != g.current && (t.setThumbDragging(g.current, !1), g.current = null)
            }
        }), S = (0, a.useRef)(void 0), w = (r, a, i, o) => {
            if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                let e, {
                        height: s,
                        width: c,
                        top: l,
                        left: u
                    } = n.current.getBoundingClientRect(),
                    d = ((f ? o : i) - (f ? l : u)) / (f ? s : c);
                ("rtl" === m || f) && (d = 1 - d);
                let p = t.getPercentValue(d),
                    v = t.values.findIndex(e => p - e < 0);
                (e = 0 === v ? v : -1 === v ? t.values.length - 1 : Math.abs(t.values[v - 1] - p) < Math.abs(t.values[v] - p) ? v - 1 : v) >= 0 && t.isThumbEditable(e) ? (r.preventDefault(), g.current = e, t.setFocusedThumb(e), S.current = a, t.setThumbDragging(g.current, !0), t.setThumbValue(e, p), h(window, "mouseup", D, !1), h(window, "touchend", D, !1), h(window, "pointerup", D, !1)) : g.current = null
            }
        }, D = e => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === S.current && (null != g.current && (t.setThumbDragging(g.current, !1), g.current = null), v(window, "mouseup", D, !1), v(window, "touchend", D, !1), v(window, "pointerup", D, !1))
        };
        return "htmlFor" in d && d.htmlFor && (delete d.htmlFor, d.onClick = () => {
            var e;
            null === (e = document.getElementById(u(t, 0))) || void 0 === e || e.focus(), (0, i.setInteractionModality)("keyboard")
        }), {
            labelProps: d,
            groupProps: {
                role: "group",
                ...p
            },
            trackProps: (0, r.mergeProps)({
                onMouseDown(e) {
                    0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && w(e, void 0, e.clientX, e.clientY)
                },
                onPointerDown(e) {
                    ("mouse" !== e.pointerType || 0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey) && w(e, e.pointerId, e.clientX, e.clientY)
                },
                onTouchStart(e) {
                    w(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY)
                },
                style: {
                    position: "relative",
                    touchAction: "none"
                }
            }, x),
            outputProps: {
                htmlFor: t.values.map((e, n) => u(t, n)).join(" "),
                "aria-live": "off"
            }
        }
    }

    function p(e, t) {
        var n;
        let {
            index: d = 0,
            isRequired: p,
            validationState: f,
            isInvalid: m,
            trackRef: h,
            inputRef: v,
            orientation: g = t.orientation,
            name: y
        } = e, b = e.isDisabled || t.isDisabled, x = "vertical" === g, {
            direction: S
        } = (0, s.useLocale)(), {
            addGlobalListener: w,
            removeGlobalListener: D
        } = (0, r.useGlobalListeners)(), C = l.get(t), {
            labelProps: k,
            fieldProps: P
        } = (0, o.useLabel)({
            ...e,
            id: u(t, d),
            "aria-labelledby": "".concat(C.id, " ").concat(null !== (n = e["aria-labelledby"]) && void 0 !== n ? n : "").trim()
        }), E = t.values[d], T = (0, a.useCallback)(() => {
            v.current && (0, r.focusWithoutScrolling)(v.current)
        }, [v]), M = t.focusedThumb === d;
        (0, a.useEffect)(() => {
            M && T()
        }, [M, T]);
        let R = "rtl" === S,
            I = (0, a.useRef)(null),
            {
                keyboardProps: O
            } = (0, i.useKeyboard)({
                onKeyDown(e) {
                    let {
                        getThumbMaxValue: n,
                        getThumbMinValue: r,
                        decrementThumb: a,
                        incrementThumb: i,
                        setThumbValue: o,
                        setThumbDragging: s,
                        pageSize: c
                    } = t;
                    if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                        e.continuePropagation();
                        return
                    }
                    switch (e.preventDefault(), s(d, !0), e.key) {
                        case "PageUp":
                            i(d, c);
                            break;
                        case "PageDown":
                            a(d, c);
                            break;
                        case "Home":
                            o(d, r(d));
                            break;
                        case "End":
                            o(d, n(d))
                    }
                    s(d, !1)
                }
            }),
            {
                moveProps: A
            } = (0, i.useMove)({
                onMoveStart() {
                    I.current = null, t.setThumbDragging(d, !0)
                },
                onMove(e) {
                    let {
                        deltaX: n,
                        deltaY: a,
                        pointerType: i,
                        shiftKey: o
                    } = e, {
                        getThumbPercent: s,
                        setThumbPercent: c,
                        decrementThumb: l,
                        incrementThumb: u,
                        step: p,
                        pageSize: f
                    } = t, {
                        width: m,
                        height: v
                    } = h.current.getBoundingClientRect(), g = x ? v : m;
                    if (null == I.current && (I.current = s(d) * g), "keyboard" === i) n > 0 && R || n < 0 && !R || a > 0 ? l(d, o ? f : p) : u(d, o ? f : p);
                    else {
                        let e = x ? a : n;
                        (x || R) && (e = -e), I.current += e, c(d, (0, r.clamp)(I.current / g, 0, 1))
                    }
                },
                onMoveEnd() {
                    t.setThumbDragging(d, !1)
                }
            });
        t.setThumbEditable(d, !b);
        let {
            focusableProps: L
        } = (0, c.useFocusable)((0, r.mergeProps)(e, {
            onFocus: () => t.setFocusedThumb(d),
            onBlur: () => t.setFocusedThumb(void 0)
        }), v), N = (0, a.useRef)(void 0), F = e => {
            T(), N.current = e, t.setThumbDragging(d, !0), w(window, "mouseup", j, !1), w(window, "touchend", j, !1), w(window, "pointerup", j, !1)
        }, j = e => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === N.current && (T(), t.setThumbDragging(d, !1), D(window, "mouseup", j, !1), D(window, "touchend", j, !1), D(window, "pointerup", j, !1))
        }, K = t.getThumbPercent(d);
        (x || "rtl" === S) && (K = 1 - K);
        let _ = b ? {} : (0, r.mergeProps)(O, A, {
            onMouseDown: e => {
                0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && F()
            },
            onPointerDown: e => {
                0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && F(e.pointerId)
            },
            onTouchStart: e => {
                F(e.changedTouches[0].identifier)
            }
        });
        return (0, r.useFormReset)(v, E, e => {
            t.setThumbValue(d, e)
        }), {
            inputProps: (0, r.mergeProps)(L, P, {
                type: "range",
                tabIndex: b ? void 0 : 0,
                min: t.getThumbMinValue(d),
                max: t.getThumbMaxValue(d),
                step: t.step,
                value: E,
                name: y,
                disabled: b,
                "aria-orientation": g,
                "aria-valuetext": t.getThumbValueLabel(d),
                "aria-required": p || void 0,
                "aria-invalid": m || "invalid" === f || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-describedby": [C["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
                "aria-details": [C["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
                onChange: e => {
                    t.setThumbValue(d, parseFloat(e.target.value))
                }
            }),
            thumbProps: {
                ..._,
                style: {
                    position: "absolute",
                    [x ? "top" : "left"]: "".concat(100 * K, "%"),
                    transform: "translate(-50%, -50%)",
                    touchAction: "none"
                }
            },
            labelProps: k,
            isDragging: t.isThumbDragging(d),
            isDisabled: b,
            isFocused: M
        }
    }
}