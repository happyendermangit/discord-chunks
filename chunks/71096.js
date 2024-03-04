function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Menu: function() {
            return S
        },
        MenuSpinner: function() {
            return v
        }
    }), n("881410"), n("808653"), n("424973"), n("222007"), n("70102");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("714617"),
        l = n.n(o),
        u = n("880317"),
        d = n("311720"),
        c = n("670914"),
        f = n("242670"),
        _ = n("180748"),
        h = n("206230"),
        E = n("155823"),
        g = n("107728"),
        m = n("537011"),
        p = n("639826");

    function S(e) {
        var t;
        let {
            navId: n,
            variant: r = "flexible",
            hideScroller: o = !1,
            className: f,
            children: S,
            onClose: v,
            onSelect: I
        } = e, C = function e(t) {
            return (function e(t) {
                return null == t ? [] : s.Children.toArray(t).flatMap(t => {
                    var n;
                    return null == t ? [] : Array.isArray(t) ? e(t) : t.type === s.Fragment ? null !== (n = e(t.props.children)) && void 0 !== n ? n : [] : [t]
                })
            })(t).reduce((t, n) => {
                var i, s;
                if (n.type === E.MenuSeparator) return t.push({
                    type: "separator",
                    navigable: !1
                }), t;
                if (n.type === E.MenuGroup) {
                    let i = e(n.props.children);
                    return i.length > 0 && (t.push({
                        type: "groupstart",
                        length: i.length,
                        navigable: !1,
                        props: n.props
                    }), t.push(...i), t.push({
                        type: "groupend",
                        length: i.length,
                        navigable: !1,
                        props: n.props
                    })), t
                }
                if (n.type === E.MenuItem) return t.push(null != n.props.render ? {
                    type: "customitem",
                    key: n.props.id,
                    navigable: null == n.props.navigable || n.props.navigable,
                    render: n.props.render,
                    props: n.props
                } : {
                    type: "item",
                    key: n.props.id,
                    navigable: !0,
                    label: n.props.label,
                    children: n.props.children ? e(n.props.children) : void 0,
                    onChildrenScroll: n.props.onChildrenScroll,
                    props: n.props,
                    childRowHeight: n.props.childRowHeight,
                    listClassName: n.props.listClassName,
                    subMenuClassName: n.props.subMenuClassName
                }), t;
                else if (n.type === E.MenuCheckboxItem) return t.push({
                    type: "checkbox",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }), t;
                else if (n.type === E.MenuRadioItem) return t.push({
                    type: "radio",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }), t;
                else if (n.type === E.MenuControlItem) return t.push(null != n.props.control ? {
                    type: "control",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                } : {
                    type: "compositecontrol",
                    key: n.props.id,
                    navigable: !1 !== n.props.interactive,
                    children: n.props.children,
                    props: n.props
                }), t;
                throw Error("Menu API only allows Items and groups of Items as children. Received ".concat(null !== (s = null !== (i = null == n ? void 0 : n.type) && void 0 !== i ? i : n) && void 0 !== s ? s : typeof n, " (").concat(typeof n, ") instead"))
            }, [])
        }(S), A = function e(t) {
            return t.reduce((t, n) => n.navigable ? (t.push({
                key: n.key,
                children: "item" === n.type && null != n.children ? e(n.children) : void 0
            }), t) : t, [])
        }(C), y = s.useRef([]);
        !l(y.current, A) && (y.current = A);
        let N = null === (t = C.find(e => null != e.key)) || void 0 === t ? void 0 : t.key,
            R = (0, u.useMenuNavigator)({
                navId: n,
                items: y.current,
                initialFocusPath: h.default.keyboardModeEnabled && null != N ? [N] : [],
                closeMenu: v
            });
        s.useEffect(() => {
            R.isUsingKeyboardNavigation ? !h.default.keyboardModeEnabled && (0, _.enableKeyboardMode)() : h.default.keyboardModeEnabled && (0, _.disableKeyboardMode)()
        }, [R.isUsingKeyboardNavigation]);
        let O = s.useRef(null);
        (0, d.useFocusLock)(O);
        let D = o ? c.ScrollerNone : c.ScrollerThin;
        return (0, i.jsx)(g.OnMenuSelectContext.Provider, {
            value: I,
            children: (0, i.jsx)("div", {
                className: a(p.menu, p[r], f),
                ...R.getContainerProps(),
                ref: O,
                "aria-label": e["aria-label"],
                children: (0, i.jsxs)(D, {
                    className: p.scroller,
                    children: [0 === C.length && (0, i.jsx)(m.Item, {
                        disabled: !0,
                        label: () => (0, i.jsx)(T, {}),
                        menuItemProps: R.getItemProps({
                            path: ["empty"]
                        }),
                        isFocused: !1,
                        onFocus: () => {},
                        onClose: v
                    }), C.length > 0 && function e(t, n, s, r) {
                        let a = 0,
                            o = [];
                        return t.reduce((t, l, u) => {
                            let d = o.length > 0 ? o[o.length - 1] : t;
                            switch (l.type) {
                                case "separator":
                                    d.push((0, i.jsx)(m.Separator, {}, "separator-".concat(u))), a = 0;
                                    break;
                                case "groupstart":
                                    a > 0 && l.length > 0 && (d.push((0, i.jsx)(m.Separator, {}, "separator-".concat(u))), a = 0), o.push([]);
                                    break;
                                case "groupend":
                                    o.length > 0 && t.push((0, i.jsx)(m.Group, {
                                        contents: o.pop(),
                                        ...l.props
                                    }, "group-".concat(u)));
                                    break;
                                case "item": {
                                    let {
                                        children: t,
                                        childRowHeight: o,
                                        onChildrenScroll: u,
                                        listClassName: c,
                                        subMenuClassName: f
                                    } = l, _ = null != t, h = [...s, l.key], E = n.isFocused(h), g = (0, i.jsx)(m.Item, {
                                        ...l.props,
                                        label: l.label,
                                        hasSubmenu: null != t,
                                        isFocused: E,
                                        menuItemProps: {
                                            ...n.getItemProps({
                                                path: h,
                                                hasSubmenu: _
                                            }),
                                            ...null != t ? {
                                                "aria-haspopup": !0
                                            } : {}
                                        },
                                        onClose: r
                                    }, l.key);
                                    _ ? null != o ? d.push((0, i.jsx)(m.SubmenuListItem, {
                                        ...l.props,
                                        parentItem: g,
                                        isFocused: E,
                                        menuSubmenuProps: n.getSubmenuProps({
                                            path: h
                                        }),
                                        rows: e(t, n, h, r),
                                        rowHeight: o,
                                        onScroll: u,
                                        listClassName: c
                                    }, "".concat(l.key, "-submenu"))) : d.push((0, i.jsx)(m.SubmenuItem, {
                                        ...l.props,
                                        subMenuClassName: f,
                                        parentItem: g,
                                        isFocused: E,
                                        menuSubmenuProps: n.getSubmenuProps({
                                            path: h
                                        }),
                                        renderSubmenu: () => e(t, n, h, r)
                                    }, "".concat(l.key, "-submenu"))) : d.push(g), a++;
                                    break
                                }
                                case "customitem": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.CustomItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e
                                        }),
                                        onClose: r,
                                        children: l.render
                                    }, l.key)), a++;
                                    break
                                }
                                case "checkbox": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.CheckboxItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e,
                                            role: "menuitemcheckbox"
                                        })
                                    }, l.key)), a++;
                                    break
                                }
                                case "radio": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.RadioItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e,
                                            role: "menuitemradio"
                                        })
                                    }, l.key)), a++;
                                    break
                                }
                                case "control": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.ControlItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e
                                        }),
                                        onClose: r
                                    }, l.key)), a++;
                                    break
                                }
                                case "compositecontrol": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.CompositeControlItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e
                                        }),
                                        onClose: r,
                                        children: l.children
                                    }, l.key)), a++
                                }
                            }
                            return t
                        }, [])
                    }(C, R, [], v)]
                })
            })
        })
    }

    function v() {
        return (0, i.jsx)("div", {
            className: a(p.menu, p.loader, p.flexible),
            children: (0, i.jsx)(f.Spinner, {})
        })
    }

    function T() {
        let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
            [t, n] = s.useState(e);
        return s.useEffect(() => {
            if (h.default.useReducedMotion) return;
            let t = setInterval(() => {
                n(t => t === e ? "♫ ⊂(｡◕‿‿◕｡⊂) ♪" : e)
            }, 700);
            return () => clearInterval(t)
        }, []), (0, i.jsx)("div", {
            style: {
                width: "100%",
                textAlign: "center"
            },
            children: t
        })
    }
}