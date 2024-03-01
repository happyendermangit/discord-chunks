function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Table: function() {
            return e9
        },
        Row: function() {
            return tr
        },
        Cell: function() {
            return ta
        },
        Column: function() {
            return tt
        },
        TableHeader: function() {
            return te
        },
        TableBody: function() {
            return tn
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("597287"),
        a = n("290895"),
        i = n("884691"),
        o = n("313067"),
        s = n("817736"),
        c = n("611434"),
        l = n("336468"),
        u = n("219528"),
        d = n("581555");
    class p {
        get childNodes() {
            throw Error("childNodes is not supported")
        }
        clone() {
            let e = new p(this.type, this.key);
            return e.value = this.value, e.level = this.level, e.hasChildNodes = this.hasChildNodes, e.rendered = this.rendered, e.textValue = this.textValue, e["aria-label"] = this["aria-label"], e.index = this.index, e.parentKey = this.parentKey, e.prevKey = this.prevKey, e.nextKey = this.nextKey, e.firstChildKey = this.firstChildKey, e.lastChildKey = this.lastChildKey, e.props = this.props, e
        }
        constructor(e, t) {
            (0, o.default)(this, "value", null), (0, o.default)(this, "level", 0), (0, o.default)(this, "hasChildNodes", !1), (0, o.default)(this, "rendered", null), (0, o.default)(this, "textValue", ""), (0, o.default)(this, "aria-label", void 0), (0, o.default)(this, "index", 0), (0, o.default)(this, "parentKey", null), (0, o.default)(this, "prevKey", null), (0, o.default)(this, "nextKey", null), (0, o.default)(this, "firstChildKey", null), (0, o.default)(this, "lastChildKey", null), (0, o.default)(this, "props", {}), this.type = e, this.key = t
        }
    }
    let f = Symbol.iterator;
    class m {
        *[f]() {
            let e = this.firstChild;
            for (; e;) yield e, e = e.nextSibling
        }
        get firstChild() {
            return this._firstChild
        }
        set firstChild(e) {
            this._firstChild = e, this.ownerDocument.markDirty(this)
        }
        get lastChild() {
            return this._lastChild
        }
        set lastChild(e) {
            this._lastChild = e, this.ownerDocument.markDirty(this)
        }
        get previousSibling() {
            return this._previousSibling
        }
        set previousSibling(e) {
            this._previousSibling = e, this.ownerDocument.markDirty(this)
        }
        get nextSibling() {
            return this._nextSibling
        }
        set nextSibling(e) {
            this._nextSibling = e, this.ownerDocument.markDirty(this)
        }
        get parentNode() {
            return this._parentNode
        }
        set parentNode(e) {
            this._parentNode = e, this.ownerDocument.markDirty(this)
        }
        appendChild(e) {
            this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), null == this.firstChild && (this.firstChild = e), this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
        }
        insertBefore(e, t) {
            if (null == t) return this.appendChild(e);
            this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), e.nextSibling = t, e.previousSibling = t.previousSibling, e.index = t.index, this.firstChild === t ? this.firstChild = e : t.previousSibling && (t.previousSibling.nextSibling = e), t.previousSibling = e, e.parentNode = t.parentNode;
            let n = t;
            for (; n;) n.index++, n = n.nextSibling;
            e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
        }
        removeChild(e) {
            if (e.parentNode !== this) return;
            this.ownerDocument.startTransaction();
            let t = e.nextSibling;
            for (; t;) t.index--, t = t.nextSibling;
            e.nextSibling && (e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.removeNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
        }
        addEventListener() {}
        removeEventListener() {}
        constructor(e) {
            (0, o.default)(this, "_firstChild", null), (0, o.default)(this, "_lastChild", null), (0, o.default)(this, "_previousSibling", null), (0, o.default)(this, "_nextSibling", null), (0, o.default)(this, "_parentNode", null), this.ownerDocument = e
        }
    }
    let h = 0;
    class v extends m {
        get index() {
            return this._index
        }
        set index(e) {
            this._index = e, this.ownerDocument.markDirty(this)
        }
        get level() {
            return this.parentNode instanceof v ? this.parentNode.level + ("item" === this.node.type ? 1 : 0) : 0
        }
        updateNode() {
            var e, t, n, r, a, i, o, s;
            let c = this.ownerDocument.getMutableNode(this);
            c.index = this.index, c.level = this.level, c.parentKey = this.parentNode instanceof v ? this.parentNode.node.key : null, c.prevKey = null !== (a = null === (e = this.previousSibling) || void 0 === e ? void 0 : e.node.key) && void 0 !== a ? a : null, c.nextKey = null !== (i = null === (t = this.nextSibling) || void 0 === t ? void 0 : t.node.key) && void 0 !== i ? i : null, c.hasChildNodes = !!this.firstChild, c.firstChildKey = null !== (o = null === (n = this.firstChild) || void 0 === n ? void 0 : n.node.key) && void 0 !== o ? o : null, c.lastChildKey = null !== (s = null === (r = this.lastChild) || void 0 === r ? void 0 : r.node.key) && void 0 !== s ? s : null
        }
        setProps(e, t, n) {
            let r = this.ownerDocument.getMutableNode(this),
                {
                    value: a,
                    textValue: i,
                    id: o,
                    ...s
                } = e;
            if (s.ref = t, r.props = s, r.rendered = n, r.value = a, r.textValue = i || ("string" == typeof n ? n : "") || e["aria-label"] || "", null != o && o !== r.key) {
                if (this.hasSetProps) throw Error("Cannot change the id of an item");
                r.key = o
            }!this.hasSetProps && (this.ownerDocument.addNode(this), this.ownerDocument.endTransaction(), this.hasSetProps = !0), this.ownerDocument.queueUpdate()
        }
        get style() {
            return {}
        }
        hasAttribute() {}
        setAttribute() {}
        setAttributeNS() {}
        removeAttribute() {}
        constructor(e, t) {
            super(t), (0, o.default)(this, "nodeType", 8), (0, o.default)(this, "_index", 0), (0, o.default)(this, "hasSetProps", !1), this.node = new p(e, "react-aria-".concat(++h)), this.ownerDocument.startTransaction()
        }
    }
    let g = Symbol.iterator;
    class y {
        get size() {
            return this.keyMap.size
        }
        getKeys() {
            return this.keyMap.keys()
        }*[g]() {
            let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
            for (; e;) yield e, e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0
        }
        getChildren(e) {
            let t = this.keyMap;
            return {
                *[Symbol.iterator]() {
                    let n = t.get(e),
                        r = (null == n ? void 0 : n.firstChildKey) != null ? t.get(n.firstChildKey) : null;
                    for (; r;) yield r, r = null != r.nextKey ? t.get(r.nextKey) : void 0
                }
            }
        }
        getKeyBefore(e) {
            let t = this.keyMap.get(e);
            if (!t) return null;
            if (null != t.prevKey) {
                var n;
                for (t = this.keyMap.get(t.prevKey); t && "item" !== t.type && null != t.lastChildKey;) t = this.keyMap.get(t.lastChildKey);
                return null !== (n = null == t ? void 0 : t.key) && void 0 !== n ? n : null
            }
            return t.parentKey
        }
        getKeyAfter(e) {
            let t = this.keyMap.get(e);
            if (!t) return null;
            if ("item" !== t.type && null != t.firstChildKey) return t.firstChildKey;
            for (; t;) {
                if (null != t.nextKey) return t.nextKey;
                if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
                else break
            }
            return null
        }
        getFirstKey() {
            return this.firstKey
        }
        getLastKey() {
            var e;
            let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
            for (;
                (null == t ? void 0 : t.lastChildKey) != null;) t = this.keyMap.get(t.lastChildKey);
            return null !== (e = null == t ? void 0 : t.key) && void 0 !== e ? e : null
        }
        getItem(e) {
            var t;
            return null !== (t = this.keyMap.get(e)) && void 0 !== t ? t : null
        }
        at() {
            throw Error("Not implemented")
        }
        clone() {
            let e = new this.constructor;
            return e.keyMap = new Map(this.keyMap), e.firstKey = this.firstKey, e.lastKey = this.lastKey, e
        }
        addNode(e) {
            if (this.frozen) throw Error("Cannot add a node to a frozen collection");
            this.keyMap.set(e.key, e)
        }
        removeNode(e) {
            if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
            this.keyMap.delete(e)
        }
        commit(e, t) {
            if (this.frozen) throw Error("Cannot commit a frozen collection");
            this.firstKey = e, this.lastKey = t, this.frozen = !0
        }
        constructor() {
            (0, o.default)(this, "keyMap", new Map), (0, o.default)(this, "firstKey", null), (0, o.default)(this, "lastKey", null), (0, o.default)(this, "frozen", !1)
        }
    }
    class b extends m {
        createElement(e) {
            return new v(e, this)
        }
        getMutableNode(e) {
            let t = e.node;
            return !this.mutatedNodes.has(e) && (t = e.node.clone(), this.mutatedNodes.add(e), e.node = t), this.markDirty(e), t
        }
        getMutableCollection() {
            return !this.collectionMutated && (this.collection = this.collection.clone(), this.collectionMutated = !0), this.collection
        }
        markDirty(e) {
            this.dirtyNodes.add(e)
        }
        startTransaction() {
            this.transactionCount++
        }
        endTransaction() {
            this.transactionCount--
        }
        addNode(e) {
            let t = this.getMutableCollection();
            if (!t.getItem(e.node.key))
                for (let n of (t.addNode(e.node), e)) this.addNode(n);
            this.markDirty(e)
        }
        removeNode(e) {
            for (let t of e) t.parentNode = null, this.removeNode(t);
            this.getMutableCollection().removeNode(e.node.key), this.markDirty(e)
        }
        getCollection() {
            if (this.transactionCount > 0) return this.collection;
            for (let e of this.dirtyNodes) e instanceof v && e.parentNode && e.updateNode();
            if (this.dirtyNodes.clear(), this.mutatedNodes.size) {
                var e, t, n, r;
                let a = this.getMutableCollection();
                for (let e of this.mutatedNodes) e.parentNode && a.addNode(e.node);
                a.commit(null !== (n = null === (e = this.firstChild) || void 0 === e ? void 0 : e.node.key) && void 0 !== n ? n : null, null !== (r = null === (t = this.lastChild) || void 0 === t ? void 0 : t.node.key) && void 0 !== r ? r : null), this.mutatedNodes.clear()
            }
            return this.collectionMutated = !1, this.collection
        }
        queueUpdate() {
            if (0 !== this.dirtyNodes.size && !(this.transactionCount > 0))
                for (let e of this.subscriptions) e()
        }
        subscribe(e) {
            return this.subscriptions.add(e), () => this.subscriptions.delete(e)
        }
        constructor(e) {
            super(null), (0, o.default)(this, "nodeType", 11), (0, o.default)(this, "ownerDocument", this), (0, o.default)(this, "dirtyNodes", new Set), (0, o.default)(this, "mutatedNodes", new Set), (0, o.default)(this, "subscriptions", new Set), (0, o.default)(this, "transactionCount", 0), this.collection = e, this.collectionMutated = !0
        }
    }

    function x(e) {
        let {
            children: t,
            items: n,
            idScope: r,
            addIdAndValue: a
        } = e, o = (0, i.useMemo)(() => new WeakMap, []);
        return (0, i.useMemo)(() => {
            if (!n || "function" != typeof t) return t;
            {
                let c = [];
                for (let l of n) {
                    let n = o.get(l);
                    if (!n) {
                        if (null == (n = t(l)).key) {
                            var e, s;
                            let t = null !== (s = null !== (e = n.props.id) && void 0 !== e ? e : l.key) && void 0 !== s ? s : l.id;
                            if (null == t) throw Error("Could not determine key for item");
                            r && (t = r + ":" + t), n = (0, i.cloneElement)(n, a ? {
                                key: t,
                                id: t,
                                value: l
                            } : {
                                key: t
                            })
                        }
                        o.set(l, n)
                    }
                    c.push(n)
                }
                return c
            }
        }, [t, n, o, r, a])
    }

    function S(e) {
        return x({
            ...e,
            addIdAndValue: !0
        })
    }
    let w = (0, i.createContext)(!1);

    function D(e, t) {
        let n = (0, i.useMemo)(() => new b(t || new y), [t]),
            a = (0, i.useCallback)(e => n.subscribe(e), [n]),
            o = (0, i.useCallback)(() => n.getCollection(), [n]),
            l = (0, c.useSyncExternalStore)(a, o, o),
            u = S(e),
            d = (0, i.useMemo)(() => i.createElement(w.Provider, {
                value: !0
            }, u), [u]);
        return {
            portal: (0, r.useIsSSR)() ? null : (0, s.createPortal)(d, n),
            collection: l
        }
    }

    function C(Element, e, t) {
        let n = (0, i.useContext)(w);
        return (t = k(e, t, e.children), n) ? i.createElement(Element, {
            ref: t
        }) : null
    }

    function k(e, t, n) {
        return (0, i.useCallback)(r => {
            null == r || r.setProps(e, t, n)
        }, [e, t, n])
    }
    let P = (0, i.forwardRef)(function(e, t) {
            return i.createElement("item", {
                ref: k(e, t, e.children)
            })
        }),
        E = (0, i.createContext)(null),
        T = (0, i.createContext)(null),
        M = Symbol("callback"),
        R = Symbol("default");

    function I(e) {
        let {
            values: t,
            children: n
        } = e;
        for (let [e, r] of t) n = i.createElement(e.Provider, {
            value: r
        }, n);
        return n
    }

    function O(e) {
        let {
            className: t,
            style: n,
            children: r,
            defaultClassName: a,
            defaultChildren: o,
            values: s
        } = e;
        return (0, i.useMemo)(() => {
            let e, i, c;
            return e = "function" == typeof t ? t(s) : t, i = "function" == typeof n ? n(s) : n, {
                className: null != e ? e : a,
                style: i,
                children: c = "function" == typeof r ? r(s) : null == r ? o : r
            }
        }, [t, n, r, a, o, s])
    }

    function A(e, t, n) {
        let r = (0, i.useContext)(n) || {};
        if ("slots" in r && r.slots) {
            if (!e.slot && !r.slots[R]) throw Error("A slot prop is required");
            let t = e.slot || R;
            if (!r.slots[t]) throw Error('Invalid slot "'.concat(e.slot, '". Valid slot names are ') + new Intl.ListFormat().format(Object.keys(r.slots).map(e => '"'.concat(e, '"'))) + ".");
            r = r.slots[t]
        }
        let {
            ref: o,
            [M]: s,
            ...c
        } = r, l = (0, a.useObjectRef)((0, a.mergeRefs)(t, o)), u = (0, a.mergeProps)(c, e);
        return (0, i.useEffect)(() => {
            s && s(e)
        }, [s, e]), [u, l]
    }

    function L() {
        let [e, t] = (0, i.useState)(!0), n = (0, i.useRef)(!1), r = (0, i.useCallback)(e => {
            n.current = !0, t(!!e)
        }, []);
        return (0, a.useLayoutEffect)(() => {
            !n.current && t(!1)
        }, []), [r, e]
    }

    function N(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [n, r] = (0, i.useState)(!0);
        return j(e, n && t, (0, i.useCallback)(() => r(!1), [])), n && t
    }

    function F(e, t) {
        let [n, r] = (0, i.useState)(!1), a = (0, i.useRef)("idle");
        return !t && e.current && "idle" === a.current && (n = !0, r(!0), a.current = "exiting"), !e.current && "exited" === a.current && (a.current = "idle"), j(e, n, (0, i.useCallback)(() => {
            a.current = "exited", r(!1)
        }, [])), n
    }

    function j(e, t, n) {
        let r = (0, i.useRef)(null);
        t && e.current && (r.current = window.getComputedStyle(e.current).animation), (0, a.useLayoutEffect)(() => {
            if (t && e.current) {
                let t = window.getComputedStyle(e.current);
                if ("none" !== t.animationName && t.animation !== r.current) {
                    let t = a => {
                            a.target === e.current && (r.removeEventListener("animationend", t), s.flushSync(() => {
                                n()
                            }))
                        },
                        r = e.current;
                    return r.addEventListener("animationend", t), () => {
                        r.removeEventListener("animationend", t)
                    }
                }
                n()
            }
        }, [e, t, n])
    }
    let K = (0, i.createContext)(!1),
        _ = (0, i.createContext)({}),
        V = (0, i.createContext)(null),
        z = (0, i.createContext)(null);

    function B(e) {
        var t;
        let {
            node: n,
            isCurrent: r,
            isDisabled: o
        } = e;
        return i.createElement("li", {
            ...(0, a.filterDOMProps)(n.props),
            style: n.props.style,
            className: null !== (t = n.props.className) && void 0 !== t ? t : "react-aria-Item"
        }, i.createElement(I, {
            values: [
                [V, {
                    "aria-current": r ? "page" : null,
                    isDisabled: o || r
                }],
                [_, r ? {
                    "aria-current": "page"
                } : null]
            ]
        }, n.rendered))
    }
    let U = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]),
        H = (0, i.createContext)({}),
        G = (0, i.createContext)({}),
        W = (0, i.createContext)({}),
        q = (0, i.createContext)({}),
        Z = (0, i.createContext)(null),
        Y = (0, i.createContext)(null),
        X = (0, i.forwardRef)(function(e, t) {
            let {
                children: n,
                style: r,
                className: o
            } = e, {
                headerProps: s,
                weekDays: c
            } = (0, i.useContext)(Y);
            return i.createElement("thead", {
                ...(0, a.filterDOMProps)(e),
                ...s,
                ref: t,
                style: r,
                className: o || "react-aria-CalendarGridHeader"
            }, i.createElement("tr", null, c.map((e, t) => i.cloneElement(n(e), {
                key: t
            }))))
        }),
        J = (0, i.forwardRef)(function(e, t) {
            let {
                children: n,
                style: r,
                className: o
            } = e;
            return i.createElement("th", {
                ...(0, a.filterDOMProps)(e),
                ref: t,
                style: r,
                className: o || "react-aria-CalendarHeaderCell"
            }, n)
        }),
        $ = (0, i.forwardRef)(function(e, t) {
            let {
                children: n,
                style: o,
                className: s
            } = e, c = (0, i.useContext)(Z), {
                startDate: u
            } = (0, i.useContext)(Y), {
                locale: d
            } = (0, r.useLocale)(), p = (0, l.getWeeksInMonth)(u, d);
            return i.createElement("tbody", {
                ...(0, a.filterDOMProps)(e),
                ref: t,
                style: o,
                className: s || "react-aria-CalendarGridBody"
            }, [...Array(p).keys()].map(e => i.createElement("tr", {
                key: e
            }, c.getDatesInWeek(e, u).map((e, t) => e ? i.cloneElement(n(e), {
                key: t
            }) : i.createElement("td", {
                key: t
            })))))
        }),
        Q = (0, i.createContext)({}),
        ee = (0, i.createContext)(null),
        et = (0, i.createContext)(null),
        en = (0, i.createContext)(null),
        er = (0, i.createContext)({}),
        ea = (0, i.createContext)(null),
        ei = (0, i.forwardRef)(function(e, t) {
            let {
                render: n
            } = (0, i.useContext)(ea);
            return i.createElement(i.Fragment, null, n(e, t))
        }),
        eo = (0, i.createContext)({}),
        es = (0, i.forwardRef)(function(e, t) {
            [e, t] = A(e, t, eo);
            let n = C("header", e, t);
            return n ? n : i.createElement("header", {
                className: "react-aria-Header",
                ...e,
                ref: t
            }, e.children)
        }),
        ec = (0, i.createContext)({}),
        el = (0, i.forwardRef)(function(e, t) {
            [e, t] = A(e, t, ec);
            let {
                elementType: n,
                orientation: o,
                style: s,
                className: c
            } = e, Element = n || "hr";
            "hr" === Element && "vertical" === o && (Element = "div");
            let {
                separatorProps: l
            } = (0, r.useSeparator)({
                elementType: n,
                orientation: o
            }), u = C("separator", e, t);
            return u ? u : i.createElement(Element, {
                ...(0, a.filterDOMProps)(e),
                ...l,
                style: s,
                className: null != c ? c : "react-aria-Separator",
                ref: t,
                slot: e.slot
            })
        }),
        eu = (0, i.createContext)(null),
        ed = (0, i.createContext)(null);

    function ep(e) {
        let {
            props: t,
            listBoxRef: n
        } = e, {
            portal: r,
            collection: a
        } = D(t);
        t = {
            ...t,
            collection: a,
            children: null,
            items: null
        };
        let o = (0, u.useListState)(t);
        return i.createElement(i.Fragment, null, r, i.createElement(ef, {
            state: o,
            props: t,
            listBoxRef: n
        }))
    }

    function ef(e) {
        let t, n, o, {
                state: s,
                props: c,
                listBoxRef: l
            } = e,
            {
                dragAndDropHooks: u
            } = c,
            {
                collection: d,
                selectionManager: p
            } = s,
            f = !!(null == u ? void 0 : u.useDraggableCollectionState),
            m = !!(null == u ? void 0 : u.useDroppableCollectionState),
            {
                listBoxProps: h
            } = (0, r.useListBox)({
                ...c,
                shouldSelectOnPressUp: f || c.shouldSelectOnPressUp
            }, s, l),
            v = x({
                items: d,
                children: e => {
                    switch (e.type) {
                        case "section":
                            return i.createElement(em, {
                                section: e
                            });
                        case "separator":
                            return i.createElement(el, e.props);
                        case "item":
                            return i.createElement(eh, {
                                item: e
                            });
                        default:
                            throw Error("Unsupported node type in Menu: " + e.type)
                    }
                }
            }),
            g = (0, i.useRef)(f),
            y = (0, i.useRef)(m);
        g.current !== f && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), y.current !== m && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
        let b = !1,
            S = null,
            w = (0, i.useRef)(null);
        if (f && u) {
            t = u.useDraggableCollectionState({
                collection: d,
                selectionManager: p,
                preview: u.renderDragPreview ? w : void 0
            }), u.useDraggableCollection({}, t, l);
            let e = u.DragPreview;
            S = u.renderDragPreview ? i.createElement(e, {
                ref: w
            }, u.renderDragPreview) : null
        }
        if (m && u) {
            n = u.useDroppableCollectionState({
                collection: d,
                selectionManager: p
            });
            let e = c.keyboardDelegate || new r.ListKeyboardDelegate(d, "selection" === p.disabledBehavior ? new Set : p.disabledKeys, l),
                t = u.dropTargetDelegate || new u.ListDropTargetDelegate(d, l);
            o = u.useDroppableCollection({
                keyboardDelegate: e,
                dropTargetDelegate: t
            }, n, l), b = n.isDropTarget({
                type: "root"
            })
        }
        let {
            focusProps: D,
            isFocused: C,
            isFocusVisible: k
        } = (0, r.useFocusRing)(), P = O({
            className: c.className,
            style: c.style,
            defaultClassName: "react-aria-ListBox",
            values: {
                isDropTarget: b,
                isEmpty: 0 === s.collection.size,
                isFocused: C,
                isFocusVisible: k
            }
        }), E = null;
        return 0 === s.collection.size && c.renderEmptyState && (E = i.createElement("div", {
            role: "option",
            style: {
                display: "contents"
            }
        }, c.renderEmptyState())), i.createElement(r.FocusScope, null, i.createElement("div", {
            ...(0, a.filterDOMProps)(c),
            ...(0, r.mergeProps)(h, D, null == o ? void 0 : o.collectionProps),
            ...P,
            ref: l,
            slot: c.slot,
            "data-drop-target": b || void 0,
            "data-empty": 0 === s.collection.size || void 0,
            "data-focused": C || void 0,
            "data-focus-visible": k || void 0
        }, i.createElement(I, {
            values: [
                [ed, {
                    state: s,
                    shouldFocusOnHover: c.shouldFocusOnHover,
                    dragAndDropHooks: u,
                    dragState: t,
                    dropState: n
                }],
                [ec, {
                    elementType: "li"
                }],
                [ea, {
                    render: ev
                }]
            ]
        }, v), E, S))
    }

    function em(e) {
        var t, n, o;
        let {
            section: s,
            className: c,
            style: l,
            ...u
        } = e, {
            state: d
        } = (0, i.useContext)(ed), [p, f] = L(), {
            headingProps: m,
            groupProps: h
        } = (0, r.useListBoxSection)({
            heading: f,
            "aria-label": null !== (o = s["aria-label"]) && void 0 !== o ? o : void 0
        }), v = x({
            items: d.collection.getChildren(s.key),
            children: e => {
                switch (e.type) {
                    case "header": {
                        let {
                            ref: t,
                            ...n
                        } = e.props;
                        return i.createElement(es, {
                            ...m,
                            ...n,
                            ref: (0, a.mergeRefs)(p, t)
                        }, e.rendered)
                    }
                    case "item":
                        return i.createElement(eh, {
                            item: e
                        });
                    default:
                        throw Error("Unsupported element type in Section: " + e.type)
                }
            }
        });
        return i.createElement("section", {
            ...(0, a.filterDOMProps)(u),
            ...h,
            className: c || (null === (t = s.props) || void 0 === t ? void 0 : t.className) || "react-aria-Section",
            style: l || (null === (n = s.props) || void 0 === n ? void 0 : n.style),
            ref: s.props.ref
        }, v)
    }

    function eh(e) {
        let {
            item: t
        } = e, n = (0, a.useObjectRef)(t.props.ref), {
            state: o,
            shouldFocusOnHover: s,
            dragAndDropHooks: c,
            dragState: l,
            dropState: u
        } = (0, i.useContext)(ed), {
            optionProps: d,
            labelProps: p,
            descriptionProps: f,
            ...m
        } = (0, r.useOption)({
            key: t.key
        }, o, n), {
            hoverProps: h,
            isHovered: v
        } = (0, r.useHover)({
            isDisabled: s || !m.allowsSelection && !m.hasAction
        });
        s && (h = {}, v = m.isFocused);
        let g = null;
        l && c && (g = c.useDraggableItem({
            key: t.key
        }, l));
        let y = null;
        u && c && (y = c.useDroppableItem({
            target: {
                type: "item",
                key: t.key,
                dropPosition: "on"
            }
        }, u, n));
        let b = t.props,
            x = l && l.isDragging(t.key),
            S = O({
                ...b,
                id: void 0,
                children: t.rendered,
                defaultClassName: "react-aria-Item",
                values: {
                    ...m,
                    isHovered: v,
                    selectionMode: o.selectionManager.selectionMode,
                    selectionBehavior: o.selectionManager.selectionBehavior,
                    allowsDragging: !!l,
                    isDragging: x,
                    isDropTarget: null == y ? void 0 : y.isDropTarget
                }
            }),
            w = (null == c ? void 0 : c.renderDropIndicator) || (e => i.createElement(ei, {
                target: e
            }));
        return (0, i.useEffect)(() => {
            !t.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
        }, [t.textValue]), i.createElement(i.Fragment, null, (null == c ? void 0 : c.useDropIndicator) && w({
            type: "item",
            key: t.key,
            dropPosition: "before"
        }), i.createElement("div", {
            ...(0, r.mergeProps)((0, a.filterDOMProps)(b), d, h, null == g ? void 0 : g.dragProps, null == y ? void 0 : y.dropProps),
            ...S,
            ref: n,
            "data-hovered": v || void 0,
            "data-focused": m.isFocused || void 0,
            "data-focus-visible": m.isFocusVisible || void 0,
            "data-pressed": m.isPressed || void 0,
            "data-dragging": x || void 0,
            "data-drop-target": (null == y ? void 0 : y.isDropTarget) || void 0
        }, i.createElement(I, {
            values: [
                [G, {
                    slots: {
                        label: p,
                        description: f
                    }
                }]
            ]
        }, S.children)), (null == c ? void 0 : c.useDropIndicator) && null == o.collection.getKeyAfter(t.key) && w({
            type: "item",
            key: t.key,
            dropPosition: "after"
        }))
    }

    function ev(e, t) {
        t = (0, a.useObjectRef)(t);
        let {
            dragAndDropHooks: n,
            dropState: r
        } = (0, i.useContext)(ed), {
            dropIndicatorProps: o,
            isHidden: s,
            isDropTarget: c
        } = n.useDropIndicator(e, r, t);
        return s ? null : i.createElement(eg, {
            ...e,
            dropIndicatorProps: o,
            isDropTarget: c,
            ref: t
        })
    }
    let eg = (0, i.forwardRef)(function(e, t) {
            let {
                dropIndicatorProps: n,
                isDropTarget: r,
                ...a
            } = e, o = O({
                ...a,
                defaultClassName: "react-aria-DropIndicator",
                values: {
                    isDropTarget: r
                }
            });
            return i.createElement("div", {
                ...n,
                ...o,
                role: "option",
                ref: t,
                "data-drop-target": r || void 0
            })
        }),
        ey = (0, i.createContext)(null),
        eb = (0, i.createContext)(null);

    function ex(e) {
        var t;
        let {
            state: n,
            isExiting: o,
            ...s
        } = e, {
            popoverProps: c,
            underlayProps: l,
            arrowProps: u,
            placement: d
        } = (0, r.usePopover)({
            ...s,
            offset: null !== (t = s.offset) && void 0 !== t ? t : 8
        }, n), p = s.popoverRef, f = N(p, !!d), m = O({
            ...s,
            defaultClassName: "react-aria-Popover",
            values: {
                placement: d,
                isEntering: f,
                isExiting: o
            }
        }), h = {
            ...m.style,
            ...c.style
        };
        return i.createElement(r.Overlay, null, !s.isNonModal && i.createElement("div", {
            ...l,
            style: {
                position: "fixed",
                inset: 0
            }
        }), i.createElement("div", {
            ...(0, a.mergeProps)((0, a.filterDOMProps)(s), c),
            ...m,
            ref: p,
            slot: s.slot,
            style: h,
            "data-placement": d,
            "data-entering": f || void 0,
            "data-exiting": o || void 0
        }, !s.isNonModal && i.createElement(r.DismissButton, {
            onDismiss: n.close
        }), i.createElement(ey.Provider, {
            value: {
                arrowProps: u,
                placement: d
            }
        }, m.children), i.createElement(r.DismissButton, {
            onDismiss: n.close
        })))
    }
    let eS = (0, i.createContext)(null),
        ew = (0, i.createContext)(null),
        eD = (0, i.createContext)(null),
        eC = (0, i.createContext)(null),
        ek = (0, i.createContext)(null),
        eP = (0, i.createContext)(null),
        eE = (0, i.createContext)(null),
        eT = (0, i.forwardRef)((e, t) => {
            var n;
            let r = (0, i.useContext)(eP),
                o = null !== (n = null == r ? void 0 : r.state) && void 0 !== n ? n : (0, u.useOverlayTriggerState)(e),
                s = (0, a.useObjectRef)(t),
                c = (0, i.useRef)(null),
                l = F(s, o.isOpen),
                d = F(c, o.isOpen),
                p = l || d;
            return o.isOpen || p ? i.createElement(eM, {
                ...e,
                state: o,
                isExiting: p,
                overlayRef: s,
                modalRef: c
            }) : null
        });

    function eM(e) {
        let t = e.modalRef,
            {
                state: n
            } = e,
            {
                modalProps: o,
                underlayProps: s
            } = (0, r.useModalOverlay)(e, n, t),
            c = N(e.overlayRef),
            l = O({
                ...e,
                defaultClassName: "react-aria-ModalOverlay",
                values: {
                    isEntering: c,
                    isExiting: e.isExiting
                }
            }),
            u = (0, a.useViewportSize)(),
            d = {
                ...l.style,
                "--visual-viewport-height": u.height + "px"
            };
        return i.createElement(r.Overlay, null, i.createElement("div", {
            ...(0, a.mergeProps)((0, a.filterDOMProps)(e), s),
            ...l,
            style: d,
            ref: e.overlayRef,
            "data-entering": c || void 0,
            "data-exiting": e.isExiting || void 0
        }, i.createElement(eE.Provider, {
            value: {
                modalProps: o,
                modalRef: t,
                state: n,
                isExiting: e.isExiting,
                isDismissable: e.isDismissable
            }
        }, l.children)))
    }

    function eR(e) {
        let {
            modalProps: t,
            modalRef: n,
            isExiting: o,
            isDismissable: s,
            state: c
        } = (0, i.useContext)(eE), l = (0, i.useMemo)(() => (0, a.mergeRefs)(e.modalRef, n), [e.modalRef, n]), u = (0, a.useObjectRef)(l), d = N(u), p = O({
            ...e,
            defaultClassName: "react-aria-Modal",
            values: {
                isEntering: d,
                isExiting: o
            }
        });
        return i.createElement("div", {
            ...(0, a.mergeProps)((0, a.filterDOMProps)(e), t),
            ...p,
            ref: u,
            "data-entering": d || void 0,
            "data-exiting": o || void 0
        }, s && i.createElement(r.DismissButton, {
            onDismiss: c.close
        }), p.children)
    }
    let eI = (0, i.createContext)(null),
        eO = (0, i.createContext)({}),
        eA = (0, i.createContext)(null),
        eL = (0, i.createContext)(null),
        eN = (0, i.createContext)(null),
        eF = (0, i.createContext)(null);

    function ej(e) {
        let {
            item: t
        } = e, {
            state: n,
            dragAndDropHooks: o,
            dragState: s,
            dropState: c
        } = (0, i.useContext)(eF), l = (0, a.useObjectRef)(t.props.ref), {
            rowProps: u,
            gridCellProps: d,
            descriptionProps: p,
            ...f
        } = (0, r.useGridListItem)({
            node: t,
            shouldSelectOnPressUp: !!s
        }, n, l), {
            hoverProps: m,
            isHovered: h
        } = (0, r.useHover)({
            isDisabled: !f.allowsSelection && !f.hasAction
        }), {
            isFocusVisible: v,
            focusProps: g
        } = (0, r.useFocusRing)(), {
            checkboxProps: y
        } = (0, r.useGridListSelectionCheckbox)({
            key: t.key
        }, n), b = null;
        s && o && (b = o.useDraggableItem({
            key: t.key,
            hasDragButton: !0
        }, s));
        let x = null,
            S = (0, i.useRef)(null),
            {
                visuallyHiddenProps: w
            } = (0, r.useVisuallyHidden)();
        c && o && (x = o.useDropIndicator({
            target: {
                type: "item",
                key: t.key,
                dropPosition: "on"
            }
        }, c, S));
        let D = t.props,
            C = s && s.isDragging(t.key),
            k = O({
                ...D,
                id: void 0,
                children: t.rendered,
                defaultClassName: "react-aria-Item",
                values: {
                    ...f,
                    isHovered: h,
                    isFocusVisible: v,
                    selectionMode: n.selectionManager.selectionMode,
                    selectionBehavior: n.selectionManager.selectionBehavior,
                    allowsDragging: !!s,
                    isDragging: C,
                    isDropTarget: null == x ? void 0 : x.isDropTarget
                }
            }),
            P = (null == o ? void 0 : o.renderDropIndicator) || (e => i.createElement(ei, {
                target: e
            })),
            E = (0, i.useRef)(null);
        return (0, i.useEffect)(() => {
            s && !E.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
        }, []), (0, i.useEffect)(() => {
            !t.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
        }, [t.textValue]), i.createElement(i.Fragment, null, (null == o ? void 0 : o.useDropIndicator) && P({
            type: "item",
            key: t.key,
            dropPosition: "before"
        }), x && !x.isHidden && i.createElement("div", {
            role: "row",
            style: {
                position: "absolute"
            }
        }, i.createElement("div", {
            role: "gridcell"
        }, i.createElement("div", {
            role: "button",
            ...w,
            ...null == x ? void 0 : x.dropIndicatorProps,
            ref: S
        }))), i.createElement("div", {
            ...(0, r.mergeProps)((0, a.filterDOMProps)(D), u, g, m, null == b ? void 0 : b.dragProps),
            ...k,
            ref: l,
            "data-hovered": h || void 0,
            "data-focused": f.isFocused || void 0,
            "data-focus-visible": v || void 0,
            "data-pressed": f.isPressed || void 0,
            "data-dragging": C || void 0,
            "data-drop-target": (null == x ? void 0 : x.isDropTarget) || void 0
        }, i.createElement("div", d, i.createElement(I, {
            values: [
                [en, y],
                [H, {
                    slots: {
                        [R]: {},
                        drag: {
                            ...null == b ? void 0 : b.dragButtonProps,
                            ref: E,
                            style: {
                                pointerEvents: "none"
                            }
                        }
                    }
                }],
                [G, {
                    slots: {
                        description: p
                    }
                }]
            ]
        }, k.children))), (null == o ? void 0 : o.useDropIndicator) && null == n.collection.getKeyAfter(t.key) && P({
            type: "item",
            key: t.key,
            dropPosition: "after"
        }))
    }

    function eK(e, t) {
        t = (0, a.useObjectRef)(t);
        let {
            dragAndDropHooks: n,
            dropState: r
        } = (0, i.useContext)(eF), o = (0, i.useRef)(null), {
            dropIndicatorProps: s,
            isHidden: c,
            isDropTarget: l
        } = n.useDropIndicator(e, r, o);
        return c ? null : i.createElement(e_, {
            ...e,
            dropIndicatorProps: s,
            isDropTarget: l,
            buttonRef: o,
            ref: t
        })
    }
    let e_ = (0, i.forwardRef)(function(e, t) {
        let {
            dropIndicatorProps: n,
            isDropTarget: a,
            buttonRef: o,
            ...s
        } = e, {
            visuallyHiddenProps: c
        } = (0, r.useVisuallyHidden)(), l = O({
            ...s,
            defaultClassName: "react-aria-DropIndicator",
            values: {
                isDropTarget: a
            }
        });
        return i.createElement("div", {
            ...l,
            role: "row",
            ref: t,
            "data-drop-target": a || void 0
        }, i.createElement("div", {
            role: "gridcell"
        }, i.createElement("div", {
            ...c,
            role: "button",
            ...n,
            ref: o
        })))
    });

    function eV() {
        let {
            dragAndDropHooks: e,
            dropState: t
        } = (0, i.useContext)(eF), n = (0, i.useRef)(null), {
            dropIndicatorProps: a
        } = e.useDropIndicator({
            target: {
                type: "root"
            }
        }, t, n), o = t.isDropTarget({
            type: "root"
        }), {
            visuallyHiddenProps: s
        } = (0, r.useVisuallyHidden)();
        return !o && a["aria-hidden"] ? null : i.createElement("div", {
            role: "row",
            "aria-hidden": a["aria-hidden"],
            style: {
                position: "absolute"
            }
        }, i.createElement("div", {
            role: "gridcell"
        }, i.createElement("div", {
            role: "button",
            ...s,
            ...a,
            ref: n
        })))
    }
    let ez = (0, i.createContext)({}),
        eB = (0, i.createContext)(null),
        eU = (0, i.createContext)(null);

    function eH(e) {
        var t;
        let {
            props: n,
            collection: o,
            menuRef: s
        } = e, c = (0, u.useTreeState)({
            ...n,
            collection: o,
            children: void 0
        }), {
            menuProps: l
        } = (0, r.useMenu)(n, c, s), d = x({
            items: c.collection,
            children: e => {
                switch (e.type) {
                    case "section":
                        return i.createElement(eG, {
                            section: e
                        });
                    case "separator":
                        return i.createElement(el, e.props);
                    case "item":
                        return i.createElement(eW, {
                            item: e
                        });
                    default:
                        throw Error("Unsupported node type in Menu: " + e.type)
                }
            }
        });
        return i.createElement("div", {
            ...(0, a.filterDOMProps)(n),
            ...l,
            ref: s,
            slot: n.slot,
            style: n.style,
            className: null !== (t = n.className) && void 0 !== t ? t : "react-aria-Menu"
        }, i.createElement(I, {
            values: [
                [eU, c],
                [ec, {
                    elementType: "div"
                }]
            ]
        }, d))
    }

    function eG(e) {
        var t, n, o;
        let {
            section: s,
            className: c,
            style: l,
            ...u
        } = e, d = (0, i.useContext)(eU), [p, f] = L(), {
            headingProps: m,
            groupProps: h
        } = (0, r.useMenuSection)({
            heading: f,
            "aria-label": null !== (o = s["aria-label"]) && void 0 !== o ? o : void 0
        }), v = x({
            items: d.collection.getChildren(s.key),
            children: e => {
                switch (e.type) {
                    case "header": {
                        let {
                            ref: t,
                            ...n
                        } = e.props;
                        return i.createElement(es, {
                            ...m,
                            ...n,
                            ref: (0, a.mergeRefs)(p, t)
                        }, e.rendered)
                    }
                    case "item":
                        return i.createElement(eW, {
                            item: e
                        });
                    default:
                        throw Error("Unsupported element type in Section: " + e.type)
                }
            }
        });
        return i.createElement("section", {
            ...(0, a.filterDOMProps)(u),
            ...h,
            className: c || (null === (t = s.props) || void 0 === t ? void 0 : t.className) || "react-aria-Section",
            style: l || (null === (n = s.props) || void 0 === n ? void 0 : n.style),
            ref: s.props.ref
        }, v)
    }

    function eW(e) {
        let {
            item: t
        } = e, n = (0, i.useContext)(eU), o = (0, a.useObjectRef)(t.props.ref), {
            menuItemProps: s,
            labelProps: c,
            descriptionProps: l,
            keyboardShortcutProps: u,
            ...d
        } = (0, r.useMenuItem)({
            key: t.key
        }, n, o), p = t.props, {
            isFocusVisible: f,
            focusProps: m
        } = (0, r.useFocusRing)(), h = O({
            ...p,
            id: void 0,
            children: t.rendered,
            defaultClassName: "react-aria-Item",
            values: {
                ...d,
                isHovered: d.isFocused,
                isFocusVisible: f,
                selectionMode: n.selectionManager.selectionMode,
                selectionBehavior: n.selectionManager.selectionBehavior
            }
        }), v = (0, a.filterDOMProps)(p);
        return delete v.id, i.createElement("div", {
            ...(0, r.mergeProps)(v, s, m),
            ...h,
            ref: o,
            "data-hovered": d.isFocused || void 0,
            "data-focused": d.isFocused || void 0,
            "data-focus-visible": f || void 0,
            "data-pressed": d.isPressed || void 0
        }, i.createElement(I, {
            values: [
                [G, {
                    slots: {
                        label: c,
                        description: l
                    }
                }],
                [ez, u]
            ]
        }, h.children))
    }
    let eq = (0, i.createContext)(null),
        eZ = (0, i.createContext)(null),
        eY = (0, i.createContext)(null),
        eX = (0, i.createContext)(null),
        eJ = (0, i.createContext)(null),
        e$ = (0, i.createContext)(null),
        eQ = (0, i.createContext)(null),
        e0 = (0, i.createContext)(null),
        e1 = (0, i.createContext)(null),
        e2 = (0, i.createContext)(null),
        e4 = (0, i.createContext)(null),
        e3 = Symbol.iterator;
    class e8 extends y {
        addNode(e) {
            super.addNode(e), this.columnsDirty || (this.columnsDirty = "column" === e.type), "tableheader" === e.type && (this.head = e), "tablebody" === e.type && (this.body = e)
        }
        commit(e, t) {
            this.updateColumns(), super.commit(e, t)
        }
        updateColumns() {
            if (!this.columnsDirty) return;
            this.rowHeaderColumnKeys = new Set, this.columns = [];
            let e = new Map,
                t = n => {
                    if ("column" === n.type) e.set(n.key, n), !n.hasChildNodes && (n.index = this.columns.length, this.columns.push(n), n.props.isRowHeader && this.rowHeaderColumnKeys.add(n.key));
                    for (let e of this.getChildren(n.key)) t(e)
                };
            for (let e of this.getChildren(this.head.key)) t(e);
            if (this.headerRows = (0, d.buildHeaderRows)(e, this.columns), this.columnsDirty = !1, 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0) throw Error("A table must have at least one Column with the isRowHeader prop set to true")
        }
        get columnCount() {
            return this.columns.length
        }
        get rows() {
            return [...this.getChildren(this.body.key)]
        }*[e3]() {
            yield* this.getChildren(this.body.key)
        }
        get size() {
            return [...this.getChildren(this.body.key)].length
        }
        getFirstKey() {
            var e;
            return null === (e = [...this.getChildren(this.body.key)][0]) || void 0 === e ? void 0 : e.key
        }
        getLastKey() {
            var e;
            let t = [...this.getChildren(this.body.key)];
            return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key
        }
        getKeyAfter(e) {
            var t;
            let n = this.getItem(e);
            return (null == n ? void 0 : n.type) === "column" ? null !== (t = n.nextKey) && void 0 !== t ? t : null : super.getKeyAfter(e)
        }
        getKeyBefore(e) {
            var t, n;
            let r = this.getItem(e);
            if ((null == r ? void 0 : r.type) === "column") return null !== (n = r.prevKey) && void 0 !== n ? n : null;
            let a = super.getKeyBefore(e);
            return null != a && (null === (t = this.getItem(a)) || void 0 === t ? void 0 : t.type) === "tablebody" ? null : a
        }
        getChildren(e) {
            if (!this.getItem(e)) {
                for (let t of this.headerRows)
                    if (t.key === e) return t.childNodes
            }
            return super.getChildren(e)
        }
        clone() {
            let e = super.clone();
            return e.headerRows = this.headerRows, e.columns = this.columns, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e.body = this.body, e
        }
        getTextValue(e) {
            let t = this.getItem(e);
            if (!t) return "";
            if (t.textValue) return t.textValue;
            let n = this.rowHeaderColumnKeys,
                r = [];
            for (let t of this.getChildren(e)) {
                let e = this.columns[t.index];
                if (n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size) break
            }
            return r.join(" ")
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "headerRows", []), (0, o.default)(this, "columns", []), (0, o.default)(this, "rowHeaderColumnKeys", new Set), (0, o.default)(this, "head", new p("tableheader", -1)), (0, o.default)(this, "body", new p("tablebody", -2)), (0, o.default)(this, "columnsDirty", !0)
        }
    }
    let e6 = (0, i.createContext)(null),
        e5 = (0, i.createContext)(null),
        e9 = (0, i.forwardRef)(function(e, t) {
            let n, o, s;
            [e, t] = A(e, t, e6);
            let {
                portal: c,
                collection: l
            } = D(e, (0, i.useMemo)(() => new e8, [])), d = (0, u.useTableState)({
                ...e,
                collection: l,
                children: void 0
            }), {
                gridProps: p
            } = (0, r.useTable)(e, d, t), {
                dragAndDropHooks: f
            } = e, m = d.selectionManager, h = !!(null == f ? void 0 : f.useDraggableCollectionState), v = !!(null == f ? void 0 : f.useDroppableCollectionState), g = (0, i.useRef)(h), y = (0, i.useRef)(v);
            g.current !== h && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), y.current !== v && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
            let b = !1,
                x = null,
                S = (0, i.useRef)(null);
            if (h && f) {
                n = f.useDraggableCollectionState({
                    collection: l,
                    selectionManager: m,
                    preview: f.renderDragPreview ? S : void 0
                }), f.useDraggableCollection({}, n, t);
                let e = f.DragPreview;
                x = f.renderDragPreview ? i.createElement(e, {
                    ref: S
                }, f.renderDragPreview) : null
            }
            if (v && f) {
                o = f.useDroppableCollectionState({
                    collection: l,
                    selectionManager: m
                });
                let e = new r.ListKeyboardDelegate(l, "selection" === m.disabledBehavior ? new Set : m.disabledKeys, t),
                    n = f.dropTargetDelegate || new f.ListDropTargetDelegate(l, t);
                s = f.useDroppableCollection({
                    keyboardDelegate: e,
                    dropTargetDelegate: n
                }, o, t), b = o.isDropTarget({
                    type: "root"
                })
            }
            let {
                focusProps: w,
                isFocused: C,
                isFocusVisible: k
            } = (0, r.useFocusRing)(), P = O({
                className: e.className,
                style: e.style,
                defaultClassName: "react-aria-Table",
                values: {
                    isDropTarget: b,
                    isFocused: C,
                    isFocusVisible: k
                }
            }), {
                selectionBehavior: E,
                selectionMode: T,
                disallowEmptySelection: M
            } = d.selectionManager, R = (0, i.useMemo)(() => ({
                selectionBehavior: "none" === T ? null : E,
                selectionMode: T,
                disallowEmptySelection: M,
                allowsDragging: h
            }), [E, T, M, h]);
            return i.createElement(i.Fragment, null, i.createElement(I, {
                values: [
                    [e5, {
                        state: d,
                        dragAndDropHooks: f,
                        dragState: n,
                        dropState: o
                    }],
                    [ea, {
                        render: td
                    }]
                ]
            }, i.createElement(r.FocusScope, null, i.createElement("table", {
                ...(0, a.filterDOMProps)(e),
                ...P,
                ...(0, r.mergeProps)(p, w, null == s ? void 0 : s.collectionProps),
                ref: t,
                slot: e.slot,
                "data-drop-target": b || void 0,
                "data-focused": C || void 0,
                "data-focus-visible": k || void 0
            }, i.createElement(ti, {
                collection: l
            }), i.createElement(to, {
                collection: l,
                isDroppable: v
            }))), x), i.createElement(e7.Provider, {
                value: R
            }, c))
        }),
        e7 = (0, i.createContext)(null),
        te = (0, i.forwardRef)(function(e, t) {
            let n = S({
                    children: e.children,
                    items: e.columns
                }),
                r = "function" == typeof e.children ? e.children : null;
            return i.createElement(T.Provider, {
                value: r
            }, i.createElement("tableheader", {
                ref: k(e, t)
            }, n))
        }),
        tt = (0, i.forwardRef)(function(e, t) {
            var n;
            let r = (0, i.useContext)(T),
                a = "function" == typeof r ? r : e.children,
                o = S({
                    children: e.title || e.childColumns ? a : null,
                    items: e.childColumns
                });
            return i.createElement("column", {
                ref: k(e, t, null !== (n = e.title) && void 0 !== n ? n : e.children)
            }, o)
        }),
        tn = (0, i.forwardRef)(function(e, t) {
            let n = S(e);
            return i.createElement("tablebody", {
                ref: k(e, t)
            }, n)
        }),
        tr = (0, i.forwardRef)(function(e, t) {
            let n = S({
                    children: e.children,
                    items: e.columns,
                    idScope: e.id
                }),
                r = (0, i.useMemo)(() => ({
                    idScope: e.id
                }), [e.id]);
            return i.createElement("item", {
                ref: k(e, t)
            }, i.createElement(E.Provider, {
                value: r
            }, n))
        }),
        ta = (0, i.forwardRef)(function(e, t) {
            return i.createElement("cell", {
                ref: k(e, t, e.children)
            })
        });

    function ti(e) {
        var t;
        let {
            collection: n
        } = e, o = x({
            items: n.headerRows,
            children: (0, i.useCallback)(e => {
                if ("headerrow" === e.type) return i.createElement(ts, {
                    item: e
                });
                throw Error("Unsupported node type in TableHeader: " + e.type)
            }, [])
        }), {
            rowGroupProps: s
        } = (0, r.useTableRowGroup)();
        return i.createElement("thead", {
            ...(0, a.filterDOMProps)(n.head.props),
            ...s,
            ref: n.head.props.ref,
            className: null !== (t = n.head.props.className) && void 0 !== t ? t : "react-aria-TableHeader",
            style: n.head.props.style
        }, o)
    }

    function to(e) {
        let t, {
                collection: n,
                isDroppable: o
            } = e,
            s = x({
                items: n.rows,
                children: (0, i.useCallback)(e => {
                    if ("item" === e.type) return i.createElement(tl, {
                        item: e
                    });
                    throw Error("Unsupported node type in TableBody: " + e.type)
                }, [])
            }),
            c = n.body.props,
            l = O({
                ...c,
                id: void 0,
                children: void 0,
                defaultClassName: "react-aria-TableBody",
                values: {
                    isEmpty: 0 === n.size
                }
            });
        0 === n.size && c.renderEmptyState && (t = i.createElement("tr", {
            role: "row"
        }, i.createElement("td", {
            role: "gridcell",
            colSpan: n.columnCount
        }, c.renderEmptyState())));
        let {
            rowGroupProps: u
        } = (0, r.useTableRowGroup)();
        return i.createElement("tbody", {
            ...(0, r.mergeProps)((0, a.filterDOMProps)(c), u),
            ...l,
            ref: n.body.props.ref,
            "data-empty": 0 === n.size || void 0
        }, o && i.createElement(tf, null), s, t)
    }

    function ts(e) {
        let {
            item: t
        } = e, n = (0, i.useRef)(null), {
            state: a
        } = (0, i.useContext)(e5), {
            rowProps: o
        } = (0, r.useTableHeaderRow)({
            node: t
        }, a, n), {
            checkboxProps: s
        } = (0, r.useTableSelectAllCheckbox)(a), c = x({
            items: a.collection.getChildren(t.key),
            children: e => {
                if ("column" === e.type) return i.createElement(tc, {
                    column: e
                });
                throw Error("Unsupported node type in Row: " + e.type)
            }
        });
        return i.createElement("tr", {
            ...o,
            ref: n
        }, i.createElement(I, {
            values: [
                [en, {
                    slots: {
                        selection: s
                    }
                }]
            ]
        }, c))
    }

    function tc(e) {
        var t;
        let {
            column: n
        } = e, o = (0, a.useObjectRef)(n.props.ref), {
            state: s
        } = (0, i.useContext)(e5), {
            columnHeaderProps: c
        } = (0, r.useTableColumnHeader)({
            node: n
        }, s, o), {
            isFocused: l,
            isFocusVisible: u,
            focusProps: d
        } = (0, r.useFocusRing)(), p = n.props, f = O({
            ...p,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Column",
            values: {
                isFocused: l,
                isFocusVisible: u,
                allowsSorting: n.props.allowsSorting,
                sortDirection: (null === (t = s.sortDescriptor) || void 0 === t ? void 0 : t.column) === n.key ? s.sortDescriptor.direction : void 0
            }
        });
        return i.createElement("th", {
            ...(0, r.mergeProps)((0, a.filterDOMProps)(p), c, d),
            ...f,
            colSpan: n.colspan,
            ref: o,
            "data-focused": l || void 0,
            "data-focus-visible": u || void 0
        }, f.children)
    }

    function tl(e) {
        let t, n, {
                item: o
            } = e,
            s = (0, a.useObjectRef)(o.props.ref),
            {
                state: c,
                dragAndDropHooks: l,
                dragState: u,
                dropState: d
            } = (0, i.useContext)(e5),
            {
                rowProps: p,
                ...f
            } = (0, r.useTableRow)({
                node: o,
                shouldSelectOnPressUp: !!u
            }, c, s),
            {
                isFocused: m,
                isFocusVisible: h,
                focusProps: v
            } = (0, r.useFocusRing)(),
            {
                hoverProps: g,
                isHovered: y
            } = (0, r.useHover)({
                isDisabled: !f.allowsSelection && !f.hasAction
            }),
            {
                checkboxProps: b
            } = (0, r.useTableSelectionCheckbox)({
                key: o.key
            }, c);
        u && l && (t = l.useDraggableItem({
            key: o.key,
            hasDragButton: !0
        }, u));
        let S = (0, i.useRef)(null),
            {
                visuallyHiddenProps: w
            } = (0, r.useVisuallyHidden)();
        d && l && (n = l.useDropIndicator({
            target: {
                type: "item",
                key: o.key,
                dropPosition: "on"
            }
        }, d, S));
        let D = (null == l ? void 0 : l.renderDropIndicator) || (e => i.createElement(ei, {
                target: e
            })),
            C = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            u && !C.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
        }, []);
        let k = o.props,
            P = u && u.isDragging(o.key),
            E = O({
                ...k,
                id: void 0,
                defaultClassName: "react-aria-Row",
                values: {
                    ...f,
                    isHovered: y,
                    isFocused: m,
                    isFocusVisible: h,
                    selectionMode: c.selectionManager.selectionMode,
                    selectionBehavior: c.selectionManager.selectionBehavior,
                    isDragging: P,
                    isDropTarget: null == n ? void 0 : n.isDropTarget
                }
            }),
            T = x({
                items: c.collection.getChildren(o.key),
                children: e => {
                    if ("cell" === e.type) return i.createElement(tu, {
                        cell: e
                    });
                    throw Error("Unsupported node type in Row: " + e.type)
                }
            });
        return i.createElement(i.Fragment, null, (null == l ? void 0 : l.useDropIndicator) && D({
            type: "item",
            key: o.key,
            dropPosition: "before"
        }), n && !n.isHidden && i.createElement("tr", {
            role: "row",
            style: {
                height: 0
            }
        }, i.createElement("td", {
            role: "gridcell",
            colSpan: c.collection.columnCount,
            style: {
                padding: 0
            }
        }, i.createElement("div", {
            role: "button",
            ...w,
            ...n.dropIndicatorProps,
            ref: S
        }))), i.createElement("tr", {
            ...(0, r.mergeProps)((0, a.filterDOMProps)(k), p, v, g, null == t ? void 0 : t.dragProps),
            ...E,
            ref: s,
            "data-hovered": y || void 0,
            "data-focused": f.isFocused || void 0,
            "data-focus-visible": h || void 0,
            "data-pressed": f.isPressed || void 0,
            "data-dragging": P || void 0,
            "data-drop-target": (null == n ? void 0 : n.isDropTarget) || void 0
        }, i.createElement(I, {
            values: [
                [en, {
                    slots: {
                        selection: b
                    }
                }],
                [H, {
                    slots: {
                        [R]: {},
                        drag: {
                            ...null == t ? void 0 : t.dragButtonProps,
                            ref: C,
                            style: {
                                pointerEvents: "none"
                            }
                        }
                    }
                }]
            ]
        }, T)), (null == l ? void 0 : l.useDropIndicator) && null == c.collection.getKeyAfter(o.key) && D({
            type: "item",
            key: o.key,
            dropPosition: "after"
        }))
    }

    function tu(e) {
        let {
            cell: t
        } = e, n = (0, a.useObjectRef)(t.props.ref), {
            state: o,
            dragState: s
        } = (0, i.useContext)(e5);
        t.column = o.collection.columns[t.index];
        let {
            gridCellProps: c,
            isPressed: l
        } = (0, r.useTableCell)({
            node: t,
            shouldSelectOnPressUp: !!s
        }, o, n), {
            isFocused: u,
            isFocusVisible: d,
            focusProps: p
        } = (0, r.useFocusRing)(), f = t.props, m = O({
            ...f,
            id: void 0,
            defaultClassName: "react-aria-Cell",
            values: {
                isFocused: u,
                isFocusVisible: d,
                isPressed: l
            }
        });
        return i.createElement("td", {
            ...(0, r.mergeProps)((0, a.filterDOMProps)(f), c, p),
            ...m,
            ref: n,
            "data-focused": u || void 0,
            "data-focus-visible": d || void 0,
            "data-pressed": l || void 0
        }, m.children)
    }

    function td(e, t) {
        t = (0, a.useObjectRef)(t);
        let {
            dragAndDropHooks: n,
            dropState: r
        } = (0, i.useContext)(e5), o = (0, i.useRef)(null), {
            dropIndicatorProps: s,
            isHidden: c,
            isDropTarget: l
        } = n.useDropIndicator(e, r, o);
        return c ? null : i.createElement(tp, {
            ...e,
            dropIndicatorProps: s,
            isDropTarget: l,
            buttonRef: o,
            ref: t
        })
    }
    let tp = (0, i.forwardRef)(function(e, t) {
        let {
            dropIndicatorProps: n,
            isDropTarget: o,
            buttonRef: s,
            ...c
        } = e, {
            state: l
        } = (0, i.useContext)(e5), {
            visuallyHiddenProps: u
        } = (0, r.useVisuallyHidden)(), d = O({
            ...c,
            defaultClassName: "react-aria-DropIndicator",
            values: {
                isDropTarget: o
            }
        });
        return i.createElement("tr", {
            ...(0, a.filterDOMProps)(e),
            ...d,
            role: "row",
            ref: t,
            "data-drop-target": o || void 0
        }, i.createElement("td", {
            role: "gridcell",
            colSpan: l.collection.columnCount,
            style: {
                padding: 0
            }
        }, i.createElement("div", {
            ...u,
            role: "button",
            ...n,
            ref: s
        })))
    });

    function tf() {
        let {
            state: e,
            dragAndDropHooks: t,
            dropState: n
        } = (0, i.useContext)(e5), a = (0, i.useRef)(null), {
            dropIndicatorProps: o
        } = t.useDropIndicator({
            target: {
                type: "root"
            }
        }, n, a), s = n.isDropTarget({
            type: "root"
        }), {
            visuallyHiddenProps: c
        } = (0, r.useVisuallyHidden)();
        return !s && o["aria-hidden"] ? null : i.createElement("tr", {
            role: "row",
            "aria-hidden": o["aria-hidden"],
            style: {
                height: 0
            }
        }, i.createElement("td", {
            role: "gridcell",
            colSpan: e.collection.columnCount,
            style: {
                padding: 0
            }
        }, i.createElement("div", {
            role: "button",
            ...c,
            ...o,
            ref: a
        })))
    }
    let tm = (0, i.createContext)(null),
        th = (0, i.createContext)(null);

    function tv(e) {
        let {
            item: t,
            state: n
        } = e, {
            key: o
        } = t, s = (0, a.useObjectRef)(t.props.ref), {
            tabProps: c,
            isSelected: l,
            isDisabled: u,
            isPressed: d
        } = (0, r.useTab)({
            key: o
        }, n, s), {
            focusProps: p,
            isFocused: f,
            isFocusVisible: m
        } = (0, r.useFocusRing)(), {
            hoverProps: h,
            isHovered: v
        } = (0, r.useHover)({
            isDisabled: u
        }), g = O({
            ...t.props,
            children: t.rendered,
            defaultClassName: "react-aria-Tab",
            values: {
                isSelected: l,
                isDisabled: u,
                isFocused: f,
                isFocusVisible: m,
                isPressed: d,
                isHovered: v
            }
        }), y = (0, a.filterDOMProps)(t.props);
        return delete y.id, i.createElement("div", {
            ...(0, r.mergeProps)(y, c, p, h, g),
            ref: s,
            "data-focus-visible": m || void 0,
            "data-pressed": d || void 0,
            "data-hovered": v || void 0
        })
    }
    let tg = (0, i.createContext)(null),
        ty = (0, i.createContext)({}),
        tb = (0, i.createContext)(null);

    function tx(e) {
        let {
            state: t,
            triggerRef: n,
            tooltipProps: o
        } = (0, i.useContext)(tb), s = (0, i.useRef)(null), {
            overlayProps: c,
            arrowProps: l,
            placement: u
        } = (0, r.useOverlayPosition)({
            placement: e.placement || "top",
            targetRef: n,
            overlayRef: s,
            offset: e.offset,
            crossOffset: e.crossOffset,
            isOpen: t.isOpen
        }), d = N(s, !!u), p = O({
            ...e,
            defaultClassName: "react-aria-Tooltip",
            values: {
                placement: u,
                isEntering: d,
                isExiting: e.isExiting
            }
        });
        e = (0, r.mergeProps)(e, c);
        let {
            tooltipProps: f
        } = (0, r.useTooltip)(e, t);
        return i.createElement("div", {
            ...(0, r.mergeProps)(o, f),
            ref: (0, a.mergeRefs)(s, e.tooltipRef),
            ...p,
            style: {
                ...p.style,
                ...c.style
            },
            "data-placement": u,
            "data-entering": d || void 0,
            "data-exiting": e.isExiting || void 0
        }, i.createElement(ey.Provider, {
            value: {
                arrowProps: l,
                placement: u
            }
        }, p.children))
    }
}