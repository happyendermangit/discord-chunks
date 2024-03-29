function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Select: function() {
            return y
        },
        SingleSelect: function() {
            return b
        },
        multiSelect: function() {
            return g
        },
        singleSelect: function() {
            return D
        },
        toggleSelect: function() {
            return L
        },
        useMultiSelectState: function() {
            return R
        },
        useSingleSelectState: function() {
            return p
        },
        useVariableSelect: function() {
            return C
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("924826"),
        l = n("1561"),
        u = n("597442"),
        d = n("235874"),
        _ = n("147479"),
        c = n("481060"),
        E = n("393238"),
        I = n("434650"),
        T = n("98650"),
        f = n("86813"),
        S = n("826026"),
        h = n("441674"),
        A = n("465670"),
        m = n("748585"),
        N = n("689938"),
        O = n("60772");

    function p(e) {
        let {
            value: t,
            onChange: n,
            serialize: i = e => String(e)
        } = e;
        return {
            select: e => n(e),
            isSelected: e => e === t,
            clear: () => n(null),
            serialize: i
        }
    }

    function R(e) {
        let {
            value: t,
            onChange: n,
            serialize: i = e => String(e)
        } = e;
        return {
            select: e => {
                let i = new Set(t);
                i.has(e) ? i.delete(e) : i.add(e), n(i)
            },
            isSelected: e => {
                var n;
                return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
            },
            clear: () => n(new Set),
            serialize: i
        }
    }

    function C(e) {
        let {
            value: t,
            onChange: n,
            onSelectInteraction: i,
            serialize: r = e => String(e)
        } = e;
        return {
            select: e => {
                let {
                    newValues: r,
                    updated: s
                } = i(e, t);
                s && n(r)
            },
            isSelected: e => {
                var n;
                return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
            },
            clear: () => n(new Set),
            serialize: r
        }
    }

    function g(e, t) {
        let n = new Set(t);
        return n.has(e) ? n.delete(e) : n.add(e), {
            newValues: n,
            updated: !0
        }
    }

    function L(e, t) {
        return t.has(e) ? {
            newValues: new Set,
            updated: !0
        } : {
            newValues: new Set([e]),
            updated: !0
        }
    }

    function D(e, t) {
        return t.has(e) ? {
            newValues: t,
            updated: !1
        } : {
            newValues: new Set([e]),
            updated: !0
        }
    }

    function v(e) {
        return null == e ? void 0 : e.label
    }

    function M(e) {
        return e.map(e => v(e)).join(", ")
    }

    function y(e) {
        let {
            options: t,
            placeholder: n = N.default.Messages.SELECT,
            className: s,
            isDisabled: o = !1,
            maxVisibleItems: u = 7,
            autoFocus: _ = !1,
            popoutWidth: T,
            clearable: h = !1,
            look: p = m.SelectLooks.FILLED,
            onClose: R,
            onOpen: C,
            renderOptionLabel: g = v,
            renderOptionValue: L = M,
            popoutClassName: D,
            popoutPosition: y = "bottom",
            popoutLayerContext: U,
            optionClassName: b,
            closeOnSelect: G,
            select: w,
            isSelected: k,
            serialize: B,
            clear: V,
            hideIcon: F = !1,
            "aria-label": x,
            "aria-labelledby": H
        } = e, [Y, j] = r.useState(!1), {
            ref: W,
            width: K,
            height: z
        } = (0, E.default)(), X = r.useCallback(e => {
            Y !== e && !o && (j(e), e ? null == C || C() : null == R || R())
        }, [o, R, C, Y]), Q = r.useCallback(e => {
            Y && !e && X(!1)
        }, [X, Y]), q = (0, I.useIsVisible)(Q), J = r.useCallback(e => {
            if (w(e), G) {
                var t;
                null === (t = W.current) || void 0 === t || t.focus()
            }
        }, [w, G]), Z = r.useCallback(e => {
            e.stopPropagation(), null == V || V()
        }, [V]), $ = t.filter(e => k(e.value));
        r.useLayoutEffect(() => {
            if (_) {
                var e;
                null === (e = W.current) || void 0 === e || e.focus()
            }
        }, [_]);
        let ee = (0, c.useRedesignIconContext)().enabled;
        return (0, i.jsx)(d.Popout, {
            spacing: 0,
            animation: d.Popout.Animation.NONE,
            shouldShow: Y,
            onRequestOpen: () => {
                X(!0)
            },
            onRequestClose: () => {
                X(!1)
            },
            renderPopout: e => {
                let {
                    closePopout: n,
                    position: r,
                    updatePosition: s
                } = e;
                return (0, i.jsx)(P, {
                    className: D,
                    closeOnSelect: G,
                    maxVisibleItems: u,
                    width: null != T ? T : K,
                    isSelected: k,
                    closePopout: n,
                    buttonHeight: null != z ? z : 0,
                    onSelect: J,
                    options: t,
                    serialize: B,
                    renderOptionLabel: g,
                    optionClassName: b,
                    updatePosition: s,
                    popoutPosition: r
                })
            },
            position: y,
            layerContext: U,
            children: (e, t) => {
                let {
                    onClick: r,
                    onKeyDown: u,
                    ...d
                } = e, {
                    isShown: _,
                    position: c
                } = t, E = _ ? S.default : f.default, I = ee ? 18 : 24;
                return (0, i.jsxs)(l.Clickable, {
                    role: "button",
                    "aria-disabled": o,
                    innerRef: e => {
                        W.current = e, q.current = e
                    },
                    onClick: o ? void 0 : e => {
                        r(e), X(!Y)
                    },
                    onKeyDown: e => {
                        "ArrowDown" === e.key ? X(!0) : "Escape" === e.key && (e.stopPropagation(), X(!1)), u(e)
                    },
                    ...d,
                    className: a()(O.select, s, {
                        [O.open]: _,
                        [O.disabled]: o,
                        [O.selectPositionTop]: "top" === c,
                        [O.lookFilled]: p === m.SelectLooks.FILLED
                    }),
                    "aria-haspopup": "listbox",
                    "aria-expanded": _,
                    "aria-label": x,
                    "aria-labelledby": H,
                    children: [$.length > 0 ? (0, i.jsx)("span", {
                        className: O.value,
                        children: L($)
                    }) : (0, i.jsx)("span", {
                        className: O.placeholder,
                        children: n
                    }), (0, i.jsxs)("div", {
                        className: O.icons,
                        children: [h ? (0, i.jsx)(l.Clickable, {
                            role: "button",
                            "aria-disabled": o,
                            onClick: Z,
                            "aria-label": N.default.Messages.CLEAR,
                            children: (0, i.jsx)(A.default, {
                                width: 16,
                                height: 16,
                                className: O.clear
                            })
                        }) : null, F ? null : (0, i.jsx)(E, {
                            width: I,
                            height: I
                        })]
                    })]
                })
            }
        })
    }

    function P(e) {
        let {
            className: t,
            onSelect: n,
            closePopout: s,
            closeOnSelect: l = !0,
            isSelected: d,
            options: c,
            width: E,
            maxVisibleItems: I,
            renderOptionLabel: f,
            serialize: S,
            optionClassName: h,
            buttonHeight: A,
            updatePosition: m,
            popoutPosition: N
        } = e, [p, R] = r.useState(0), C = r.useRef(null), g = r.useId(), L = (0, o.default)({
            id: g,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !0,
            wrap: !0
        }), D = r.useRef(null);
        (0, u.useFocusLock)(D), r.useLayoutEffect(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.focus()
        }, []), r.useEffect(() => {
            A > 0 && m()
        }, [A, m]), (0, T.default)(m), r.useLayoutEffect(() => {
            var e, t;
            let n = null === (t = C.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
            null != n && R(n)
        }, [I]), r.useEffect(() => {
            m()
        }, [m, p]);
        let v = r.useCallback(e => {
                n(e), l && s()
            }, [s, n, l]),
            M = c.map((e, t) => {
                var n;
                return (0, i.jsx)(U, {
                    isSelected: d(e.value),
                    value: e.value,
                    label: f(e),
                    onSelect: v,
                    className: h,
                    isDisabled: e.disabled,
                    serialize: S
                }, null !== (n = e.key) && void 0 !== n ? n : t)
            }),
            y = c.length <= I ? _.AdvancedScrollerNone : _.AdvancedScrollerThin;
        return (0, i.jsx)(o.ListNavigatorProvider, {
            navigator: L,
            children: (0, i.jsx)(o.ListNavigatorContainer, {
                children: e => {
                    let {
                        ref: n,
                        ...r
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(y, {
                            className: a()(O.popout, t, {
                                [O.popoutPositionTop]: "top" === N
                            }),
                            style: {
                                width: E,
                                maxHeight: p
                            },
                            ref: e => {
                                var t;
                                let i = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
                                n.current = i, D.current = i
                            },
                            ...r,
                            role: "listbox",
                            children: M
                        }), (0, i.jsx)("div", {
                            "aria-hidden": !0,
                            ref: C,
                            className: O.measurement,
                            children: M.slice(0, I)
                        })]
                    })
                }
            })
        })
    }

    function U(e) {
        let {
            className: t,
            value: n,
            label: r,
            onSelect: s,
            isSelected: u,
            isDisabled: d,
            serialize: _
        } = e, c = (0, o.useListItem)(_(n));
        return (0, i.jsxs)(l.Clickable, {
            focusProps: {
                enabled: !1
            },
            className: a()(O.option, t),
            onClick: () => !d && s(n),
            ...c,
            "aria-selected": u,
            "aria-disabled": d,
            role: "option",
            children: [r, u && (0, i.jsx)(h.default, {
                backgroundColor: "white",
                className: O.selectedIcon,
                width: 20,
                height: 20
            })]
        })
    }

    function b(e) {
        let {
            value: t,
            onChange: n,
            ...r
        } = e, s = p({
            value: t,
            onChange: n
        });
        return (0, i.jsx)(y, {
            ...r,
            ...s
        })
    }
}