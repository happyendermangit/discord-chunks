function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGridState: function() {
            return o
        },
        GridCollection: function() {
            return s
        }
    }), n("222007"), n("424973");
    var r = n("846794"),
        a = n("884691"),
        i = n("72634");

    function o(e) {
        let {
            collection: t,
            focusMode: n
        } = e, o = (0, i.useMultipleSelectionState)(e), s = (0, a.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), c = o.setFocusedKey;
        o.setFocusedKey = (e, a) => {
            if ("cell" === n && null != e) {
                let n = t.getItem(e);
                if ((null == n ? void 0 : n.type) === "item") {
                    var i, o;
                    let s = (0, r.getChildNodes)(n, t);
                    e = "last" === a ? null === (i = (0, r.getLastItem)(s)) || void 0 === i ? void 0 : i.key : null === (o = (0, r.getFirstItem)(s)) || void 0 === o ? void 0 : o.key
                }
            }
            c(e, a)
        };
        let l = (0, a.useMemo)(() => new i.SelectionManager(t, o), [t, o]),
            u = (0, a.useRef)(null);
        return (0, a.useEffect)(() => {
            if (null != o.focusedKey && !t.getItem(o.focusedKey)) {
                let e;
                let n = u.current.getItem(o.focusedKey),
                    a = null != n.parentKey && ("cell" === n.type || "rowheader" === n.type || "column" === n.type) ? u.current.getItem(n.parentKey) : n,
                    i = u.current.rows,
                    s = t.rows,
                    c = i.length - s.length,
                    d = Math.min(c > 1 ? Math.max(a.index - c + 1, 0) : a.index, s.length - 1);
                for (; d >= 0;) {
                    if (!l.isDisabled(s[d].key) && "headerrow" !== s[d].type) {
                        e = s[d];
                        break
                    }
                    d < s.length - 1 ? d++ : (d > a.index && (d = a.index), d--)
                }
                if (e) {
                    let i = e.hasChildNodes ? [...(0, r.getChildNodes)(e, t)] : [],
                        s = e.hasChildNodes && a !== n && n.index < i.length ? i[n.index].key : e.key;
                    o.setFocusedKey(s)
                } else o.setFocusedKey(null)
            }
            u.current = t
        }, [t, l, o, o.focusedKey]), {
            collection: t,
            disabledKeys: s,
            isKeyboardNavigationDisabled: !1,
            selectionManager: l
        }
    }
    class s {
        *[Symbol.iterator]() {
            yield*[...this.rows]
        }
        get size() {
            return [...this.rows].length
        }
        getKeys() {
            return this.keyMap.keys()
        }
        getKeyBefore(e) {
            let t = this.keyMap.get(e);
            return t ? t.prevKey : null
        }
        getKeyAfter(e) {
            let t = this.keyMap.get(e);
            return t ? t.nextKey : null
        }
        getFirstKey() {
            var e;
            return null === (e = [...this.rows][0]) || void 0 === e ? void 0 : e.key
        }
        getLastKey() {
            var e;
            let t = [...this.rows];
            return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key
        }
        getItem(e) {
            return this.keyMap.get(e)
        }
        at(e) {
            let t = [...this.getKeys()];
            return this.getItem(t[e])
        }
        getChildren(e) {
            let t = this.keyMap.get(e);
            return (null == t ? void 0 : t.childNodes) || []
        }
        constructor(e) {
            let t;
            this.keyMap = new Map, this.keyMap = new Map, this.columnCount = null == e ? void 0 : e.columnCount, this.rows = [];
            let n = t => {
                    let a, i = this.keyMap.get(t.key);
                    e.visitNode && (t = e.visitNode(t)), this.keyMap.set(t.key, t);
                    let o = new Set;
                    for (let e of t.childNodes) "cell" === e.type && null == e.parentKey && (e.parentKey = t.key), o.add(e.key), a ? (a.nextKey = e.key, e.prevKey = a.key) : e.prevKey = null, n(e), a = e;
                    if (a && (a.nextKey = null), i)
                        for (let e of i.childNodes) !o.has(e.key) && r(e)
                },
                r = e => {
                    for (let t of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(t.key) === t && r(t)
                };
            e.items.forEach((e, r) => {
                let a = {
                    level: 0,
                    key: "row-" + r,
                    type: "row",
                    value: void 0,
                    hasChildNodes: !0,
                    childNodes: [...e.childNodes],
                    rendered: void 0,
                    textValue: void 0,
                    ...e
                };
                t ? (t.nextKey = a.key, a.prevKey = t.key) : a.prevKey = null, this.rows.push(a), n(a), t = a
            }), t && (t.nextKey = null)
        }
    }
}