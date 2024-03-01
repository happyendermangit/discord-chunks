function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusScope: function() {
            return l
        },
        getFocusableTreeWalker: function() {
            return w
        },
        createFocusManager: function() {
            return D
        },
        isElementInChildOfActiveScope: function() {
            return y
        },
        useFocusable: function() {
            return R
        },
        useFocusRing: function() {
            return T
        },
        focusSafely: function() {
            return o
        },
        useHasTabbableChild: function() {
            return I
        }
    }), n("424973"), n("222007");
    var r = n("240849"),
        a = n("884691"),
        i = n("388032");

    function o(e) {
        let t = (0, r.getOwnerDocument)(e);
        if ("virtual" === (0, i.getInteractionModality)()) {
            let n = t.activeElement;
            (0, r.runAfterTransition)(() => {
                t.activeElement === n && e.isConnected && (0, r.focusWithoutScrolling)(e)
            })
        } else(0, r.focusWithoutScrolling)(e)
    }
    n("493427");
    let s = a.createContext(null),
        c = null;

    function l(e) {
        let {
            children: t,
            contain: n,
            restoreFocus: i,
            autoFocus: o
        } = e, l = (0, a.useRef)(null), u = (0, a.useRef)(null), d = (0, a.useRef)([]), {
            parentNode: p
        } = (0, a.useContext)(s) || {}, h = (0, a.useMemo)(() => new P({
            scopeRef: d
        }), [d]);
        (0, r.useLayoutEffect)(() => {
            let e = p || E.root;
            if (E.getTreeNode(e.scopeRef) && c && !b(c, e.scopeRef)) {
                let t = E.getTreeNode(c);
                t && (e = t)
            }
            e.addChild(h), E.addNode(h)
        }, [h, p]), (0, r.useLayoutEffect)(() => {
            let e = E.getTreeNode(d);
            e && (e.contain = !!n)
        }, [n]), (0, r.useLayoutEffect)(() => {
            var e;
            let t = null === (e = l.current) || void 0 === e ? void 0 : e.nextSibling,
                n = [];
            for (; t && t !== u.current;) n.push(t), t = t.nextSibling;
            d.current = n
        }, [t]),
        function(e, t, n) {
            (0, r.useLayoutEffect)(() => {
                if (t || n) return;
                let a = e.current,
                    i = (0, r.getOwnerDocument)(a ? a[0] : void 0),
                    o = t => {
                        let n = t.target;
                        if (v(n, e.current)) c = e;
                        else if (!g(n)) c = null
                    };
                return i.addEventListener("focusin", o, !1), null == a || a.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                    i.removeEventListener("focusin", o, !1), null == a || a.forEach(e => e.removeEventListener("focusin", o, !1))
                }
            }, [e, t, n])
        }(d, i, n),
        function(e, t) {
            let n = (0, a.useRef)(),
                i = (0, a.useRef)();
            (0, r.useLayoutEffect)(() => {
                let a = e.current;
                if (!t) {
                    i.current && (cancelAnimationFrame(i.current), i.current = void 0);
                    return
                }
                let o = (0, r.getOwnerDocument)(a ? a[0] : void 0),
                    s = t => {
                        if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !m(e)) return;
                        let n = o.activeElement,
                            r = e.current;
                        if (!r || !v(n, r)) return;
                        let a = w(f(r), {
                            tabbable: !0
                        }, r);
                        if (!n) return;
                        a.currentNode = n;
                        let i = t.shiftKey ? a.previousNode() : a.nextNode();
                        !i && (a.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, i = t.shiftKey ? a.previousNode() : a.nextNode()), t.preventDefault(), i && x(i, !0)
                    },
                    l = t => {
                        (!c || b(c, e)) && v(t.target, e.current) ? (c = e, n.current = t.target) : m(e) && !g(t.target, e) ? n.current ? n.current.focus() : c && c.current && S(c.current) : m(e) && (n.current = t.target)
                    },
                    u = t => {
                        i.current && cancelAnimationFrame(i.current), i.current = requestAnimationFrame(() => {
                            if (o.activeElement && m(e) && !g(o.activeElement, e)) {
                                if (c = e, o.body.contains(t.target)) {
                                    var r;
                                    n.current = t.target, null === (r = n.current) || void 0 === r || r.focus()
                                } else c.current && S(c.current)
                            }
                        })
                    };
                return o.addEventListener("keydown", s, !1), o.addEventListener("focusin", l, !1), null == a || a.forEach(e => e.addEventListener("focusin", l, !1)), null == a || a.forEach(e => e.addEventListener("focusout", u, !1)), () => {
                    o.removeEventListener("keydown", s, !1), o.removeEventListener("focusin", l, !1), null == a || a.forEach(e => e.removeEventListener("focusin", l, !1)), null == a || a.forEach(e => e.removeEventListener("focusout", u, !1))
                }
            }, [e, t]), (0, r.useLayoutEffect)(() => () => {
                i.current && cancelAnimationFrame(i.current)
            }, [i])
        }(d, n),
        function(e, t, n) {
            let i = (0, a.useRef)("undefined" != typeof document ? (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0).activeElement : null);
            (0, r.useLayoutEffect)(() => {
                let a = e.current,
                    i = (0, r.getOwnerDocument)(a ? a[0] : void 0);
                if (!t || n) return;
                let o = () => {
                    (!c || b(c, e)) && v(i.activeElement, e.current) && (c = e)
                };
                return i.addEventListener("focusin", o, !1), null == a || a.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                    i.removeEventListener("focusin", o, !1), null == a || a.forEach(e => e.removeEventListener("focusin", o, !1))
                }
            }, [e, n]), (0, r.useLayoutEffect)(() => {
                let a = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let i = t => {
                    if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !m(e)) return;
                    let n = a.activeElement;
                    if (!v(n, e.current)) return;
                    let r = E.getTreeNode(e);
                    if (!r) return;
                    let i = r.nodeToRestore,
                        o = w(a.body, {
                            tabbable: !0
                        });
                    o.currentNode = n;
                    let s = t.shiftKey ? o.previousNode() : o.nextNode();
                    if ((!i || !a.body.contains(i) || i === a.body) && (i = void 0, r.nodeToRestore = void 0), (!s || !v(s, e.current)) && i) {
                        o.currentNode = i;
                        do s = t.shiftKey ? o.previousNode() : o.nextNode(); while (v(s, e.current));
                        if (t.preventDefault(), t.stopPropagation(), s) x(s, !0);
                        else if (g(i)) x(i, !0);
                        else n.blur()
                    }
                };
                return !n && a.addEventListener("keydown", i, !0), () => {
                    !n && a.removeEventListener("keydown", i, !0)
                }
            }, [e, t, n]), (0, r.useLayoutEffect)(() => {
                var n;
                let a = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let o = E.getTreeNode(e);
                if (o) return o.nodeToRestore = null !== (n = i.current) && void 0 !== n ? n : void 0, () => {
                    let n = E.getTreeNode(e);
                    if (!n) return;
                    let r = n.nodeToRestore;
                    if (t && r && (v(a.activeElement, e.current) || a.activeElement === a.body && function(e) {
                            let t = E.getTreeNode(c);
                            for (; t && t.scopeRef !== e;) {
                                if (t.nodeToRestore) return !1;
                                t = t.parent
                            }
                            return (null == t ? void 0 : t.scopeRef) === e
                        }(e))) {
                        let t = E.clone();
                        requestAnimationFrame(() => {
                            if (a.activeElement === a.body) {
                                let n = t.getTreeNode(e);
                                for (; n;) {
                                    if (n.nodeToRestore && n.nodeToRestore.isConnected) {
                                        x(n.nodeToRestore);
                                        return
                                    }
                                    n = n.parent
                                }
                                for (n = t.getTreeNode(e); n;) {
                                    if (n.scopeRef && n.scopeRef.current && E.getTreeNode(n.scopeRef)) {
                                        S(n.scopeRef.current, !0);
                                        return
                                    }
                                    n = n.parent
                                }
                            }
                        })
                    }
                }
            }, [e, t])
        }(d, i, n),
        function(e, t) {
            let n = a.useRef(t);
            (0, a.useEffect)(() => {
                if (n.current) {
                    c = e;
                    let t = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
                    !v(t.activeElement, c.current) && e.current && S(e.current)
                }
                n.current = !1
            }, [e])
        }(d, o), (0, a.useEffect)(() => {
            let e = (0, r.getOwnerDocument)(d.current ? d.current[0] : void 0).activeElement,
                t = null;
            if (v(e, d.current)) {
                for (let n of E.traverse()) n.scopeRef && v(e, n.scopeRef.current) && (t = n);
                t === E.getTreeNode(d) && (c = t.scopeRef)
            }
        }, [d]), (0, r.useLayoutEffect)(() => () => {
            var e, t, n;
            let r = null !== (n = null === (t = E.getTreeNode(d)) || void 0 === t ? void 0 : null === (e = t.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null;
            (d === c || b(d, c)) && (!r || E.getTreeNode(r)) && (c = r), E.removeTreeNode(d)
        }, [d]);
        let y = (0, a.useMemo)(() => (function(e) {
                return {
                    focusNext() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.current,
                            {
                                from: a,
                                tabbable: i,
                                wrap: o,
                                accept: s
                            } = t,
                            c = a || (0, r.getOwnerDocument)(n[0]).activeElement,
                            l = n[0].previousElementSibling,
                            u = w(f(n), {
                                tabbable: i,
                                accept: s
                            }, n);
                        u.currentNode = v(c, n) ? c : l;
                        let d = u.nextNode();
                        return !d && o && (u.currentNode = l, d = u.nextNode()), d && x(d, !0), d
                    },
                    focusPrevious() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.current,
                            {
                                from: a,
                                tabbable: i,
                                wrap: o,
                                accept: s
                            } = t,
                            c = a || (0, r.getOwnerDocument)(n[0]).activeElement,
                            l = n[n.length - 1].nextElementSibling,
                            u = w(f(n), {
                                tabbable: i,
                                accept: s
                            }, n);
                        u.currentNode = v(c, n) ? c : l;
                        let d = u.previousNode();
                        return !d && o && (u.currentNode = l, d = u.previousNode()), d && x(d, !0), d
                    },
                    focusFirst() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.current,
                            {
                                tabbable: r,
                                accept: a
                            } = t,
                            i = w(f(n), {
                                tabbable: r,
                                accept: a
                            }, n);
                        i.currentNode = n[0].previousElementSibling;
                        let o = i.nextNode();
                        return o && x(o, !0), o
                    },
                    focusLast() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.current,
                            {
                                tabbable: r,
                                accept: a
                            } = t,
                            i = w(f(n), {
                                tabbable: r,
                                accept: a
                            }, n);
                        i.currentNode = n[n.length - 1].nextElementSibling;
                        let o = i.previousNode();
                        return o && x(o, !0), o
                    }
                }
            })(d), []),
            D = (0, a.useMemo)(() => ({
                focusManager: y,
                parentNode: h
            }), [h, y]);
        return a.createElement(s.Provider, {
            value: D
        }, a.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: l
        }), t, a.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: u
        }))
    }
    let u = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        d = u.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
    u.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
    let p = u.join(':not([hidden]):not([tabindex="-1"]),');

    function f(e) {
        return e[0].parentElement
    }

    function m(e) {
        let t = E.getTreeNode(c);
        for (; t && t.scopeRef !== e;) {
            if (t.contain) return !1;
            t = t.parent
        }
        return !0
    }

    function h(e) {
        return g(e)
    }

    function v(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
    }

    function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
        for (let {
                scopeRef: n
            }
            of E.traverse(E.getTreeNode(t)))
            if (n && v(e, n.current)) return !0;
        return !1
    }

    function y(e) {
        return g(e, c)
    }

    function b(e, t) {
        var n;
        let r = null === (n = E.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
        for (; r;) {
            if (r.scopeRef === e) return !0;
            r = r.parent
        }
        return !1
    }

    function x(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e || t) {
            if (null != e) try {
                e.focus()
            } catch (e) {}
        } else try {
            o(e)
        } catch (e) {}
    }

    function S(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e[0].previousElementSibling,
            r = f(e),
            a = w(r, {
                tabbable: t
            }, e);
        a.currentNode = n;
        let i = a.nextNode();
        t && !i && ((a = w(r = f(e), {
            tabbable: !1
        }, e)).currentNode = n, i = a.nextNode()), x(i)
    }

    function w(e, t, n) {
        let a = (null == t ? void 0 : t.tabbable) ? p : d,
            i = (0, r.getOwnerDocument)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode(e) {
                    var i;
                    return (null == t ? void 0 : null === (i = t.from) || void 0 === i ? void 0 : i.contains(e)) ? NodeFilter.FILTER_REJECT : e.matches(a) && function e(t, n) {
                        var a, i;
                        return "#comment" !== t.nodeName && function(e) {
                            let t = (0, r.getOwnerWindow)(e);
                            if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                            let {
                                display: n,
                                visibility: a
                            } = e.style, i = "none" !== n && "hidden" !== a && "collapse" !== a;
                            if (i) {
                                let {
                                    getComputedStyle: t
                                } = e.ownerDocument.defaultView, {
                                    display: n,
                                    visibility: r
                                } = t(e);
                                i = "none" !== n && "hidden" !== r && "collapse" !== r
                            }
                            return i
                        }(t) && (a = t, i = n, !a.hasAttribute("hidden") && ("DETAILS" !== a.nodeName || !i || "SUMMARY" === i.nodeName || a.hasAttribute("open"))) && (!t.parentElement || e(t.parentElement, t))
                    }(e) && (!n || v(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
        return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i
    }

    function D(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
            focusNext() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = e.current;
                if (!a) return null;
                let {
                    from: i,
                    tabbable: o = t.tabbable,
                    wrap: s = t.wrap,
                    accept: c = t.accept
                } = n, l = i || (0, r.getOwnerDocument)(a).activeElement, u = w(a, {
                    tabbable: o,
                    accept: c
                });
                a.contains(l) && (u.currentNode = l);
                let d = u.nextNode();
                return !d && s && (u.currentNode = a, d = u.nextNode()), d && x(d, !0), d
            },
            focusPrevious() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                    a = e.current;
                if (!a) return null;
                let {
                    from: i,
                    tabbable: o = t.tabbable,
                    wrap: s = t.wrap,
                    accept: c = t.accept
                } = n, l = i || (0, r.getOwnerDocument)(a).activeElement, u = w(a, {
                    tabbable: o,
                    accept: c
                });
                if (a.contains(l)) u.currentNode = l;
                else {
                    let e = C(u);
                    return e && x(e, !0), null != e ? e : null
                }
                let d = u.previousNode();
                if (!d && s) {
                    u.currentNode = a;
                    let e = C(u);
                    if (!e) return null;
                    d = e
                }
                return d && x(d, !0), null != d ? d : null
            },
            focusFirst() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                    r = e.current;
                if (!r) return null;
                let {
                    tabbable: a = t.tabbable,
                    accept: i = t.accept
                } = n, o = w(r, {
                    tabbable: a,
                    accept: i
                }).nextNode();
                return o && x(o, !0), o
            },
            focusLast() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                    r = e.current;
                if (!r) return null;
                let {
                    tabbable: a = t.tabbable,
                    accept: i = t.accept
                } = n, o = C(w(r, {
                    tabbable: a,
                    accept: i
                }));
                return o && x(o, !0), null != o ? o : null
            }
        }
    }

    function C(e) {
        let t, n;
        do(t = e.lastChild()) && (n = t); while (t);
        return n
    }
    class k {
        get size() {
            return this.fastMap.size
        }
        getTreeNode(e) {
            return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
            let r = this.fastMap.get(null != t ? t : null);
            if (!r) return;
            let a = new P({
                scopeRef: e
            });
            r.addChild(a), a.parent = r, this.fastMap.set(e, a), n && (a.nodeToRestore = n)
        }
        addNode(e) {
            this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
            if (null === e) return;
            let t = this.fastMap.get(e);
            if (!t) return;
            let n = t.parent;
            for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && v(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
            let r = t.children;
            n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.root;
            if (null != e.scopeRef && (yield e), e.children.size > 0)
                for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
            var e, t;
            let n = new k;
            for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null !== (t = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, r.nodeToRestore);
            return n
        }
        constructor() {
            this.fastMap = new Map, this.root = new P({
                scopeRef: null
            }), this.fastMap.set(null, this.root)
        }
    }
    class P {
        addChild(e) {
            this.children.add(e), e.parent = this
        }
        removeChild(e) {
            this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
            this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
    }
    let E = new k;

    function T() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                autoFocus: t = !1,
                isTextInput: n,
                within: r
            } = e,
            o = (0, a.useRef)({
                isFocused: !1,
                isFocusVisible: t || (0, i.isFocusVisible)()
            }),
            [s, c] = (0, a.useState)(!1),
            [l, u] = (0, a.useState)(() => o.current.isFocused && o.current.isFocusVisible),
            d = (0, a.useCallback)(() => u(o.current.isFocused && o.current.isFocusVisible), []),
            p = (0, a.useCallback)(e => {
                o.current.isFocused = e, c(e), d()
            }, [d]);
        (0, i.useFocusVisibleListener)(e => {
            o.current.isFocusVisible = e, d()
        }, [], {
            isTextInput: n
        });
        let {
            focusProps: f
        } = (0, i.useFocus)({
            isDisabled: r,
            onFocusChange: p
        }), {
            focusWithinProps: m
        } = (0, i.useFocusWithin)({
            isDisabled: !r,
            onFocusWithinChange: p
        });
        return {
            isFocused: s,
            isFocusVisible: l,
            focusProps: r ? m : f
        }
    }
    let M = a.createContext(null);

    function R(e, t) {
        let {
            focusProps: n
        } = (0, i.useFocus)(e), {
            keyboardProps: s
        } = (0, i.useKeyboard)(e), c = (0, r.mergeProps)(n, s), l = function(e) {
            let t = (0, a.useContext)(M) || {};
            (0, r.useSyncRef)(t, e);
            let {
                ref: n,
                ...i
            } = t;
            return i
        }(t), u = e.isDisabled ? {} : l, d = (0, a.useRef)(e.autoFocus);
        return (0, a.useEffect)(() => {
            d.current && t.current && o(t.current), d.current = !1
        }, [t]), {
            focusableProps: (0, r.mergeProps)({
                ...c,
                tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
            }, u)
        }
    }

    function I(e, t) {
        let n = null == t ? void 0 : t.isDisabled,
            [i, o] = (0, a.useState)(!1);
        return (0, r.useLayoutEffect)(() => {
            if ((null == e ? void 0 : e.current) && !n) {
                let t = () => {
                    e.current && o(!!w(e.current, {
                        tabbable: !0
                    }).nextNode())
                };
                t();
                let n = new MutationObserver(t);
                return n.observe(e.current, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeFilter: ["tabIndex", "disabled"]
                }), () => {
                    n.disconnect()
                }
            }
        }), !n && i
    }
}