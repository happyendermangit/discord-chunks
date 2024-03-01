function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTableRowGroup: function() {
            return es
        },
        useTable: function() {
            return Q
        },
        useTableColumnHeader: function() {
            return ee
        },
        useTableRow: function() {
            return en
        },
        useTableHeaderRow: function() {
            return er
        },
        useTableCell: function() {
            return ea
        },
        useTableSelectionCheckbox: function() {
            return ei
        },
        useTableSelectAllCheckbox: function() {
            return eo
        }
    }), n("222007"), n("781738"), n("70102");
    var r = n("407304"),
        a = n("586278"),
        i = n("510050"),
        o = n("461902"),
        s = n("879618"),
        c = n("60991"),
        l = n("796207"),
        u = n("493204"),
        d = n("932266"),
        p = n("189305"),
        f = n("655726"),
        m = n("326832"),
        h = n("52456"),
        v = n("336838"),
        g = n("868010"),
        y = n("63877"),
        b = n("956686"),
        x = n("866180"),
        S = n("269442"),
        w = n("156878"),
        D = n("993905"),
        C = n("732812"),
        k = n("770713"),
        P = n("474048"),
        E = n("385884"),
        T = n("591088"),
        M = n("88733"),
        R = n("981230"),
        I = n("785963"),
        O = n("56738"),
        A = n("406143"),
        L = n("990047"),
        N = n("910107"),
        F = n("840223"),
        j = n("721598"),
        K = n("362561"),
        _ = n("240849"),
        V = n("884691"),
        z = n("787100"),
        B = n("564341"),
        U = n("846794"),
        H = n("447259"),
        G = n("388032");

    function W(e) {
        return e && e.__esModule ? e.default : e
    }
    let q = new WeakMap;

    function Z(e) {
        return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e
    }

    function Y(e, t, n) {
        let r = q.get(e);
        if (!r) throw Error("Unknown grid");
        return "".concat(r, "-").concat(Z(t), "-").concat(Z(n))
    }

    function X(e, t) {
        return [...e.collection.rowHeaderColumnKeys].map(n => Y(e, t, n)).join(" ")
    }
    var J = {};
    J = {
        "ar-AE": r.default,
        "bg-BG": a.default,
        "cs-CZ": i.default,
        "da-DK": o.default,
        "de-DE": s.default,
        "el-GR": c.default,
        "en-US": l.default,
        "es-ES": u.default,
        "et-EE": d.default,
        "fi-FI": p.default,
        "fr-FR": f.default,
        "he-IL": m.default,
        "hr-HR": h.default,
        "hu-HU": v.default,
        "it-IT": g.default,
        "ja-JP": y.default,
        "ko-KR": b.default,
        "lt-LT": x.default,
        "lv-LV": S.default,
        "nb-NO": w.default,
        "nl-NL": D.default,
        "pl-PL": C.default,
        "pt-BR": k.default,
        "pt-PT": P.default,
        "ro-RO": E.default,
        "ru-RU": T.default,
        "sk-SK": M.default,
        "sl-SI": R.default,
        "sr-SP": I.default,
        "sv-SE": O.default,
        "tr-TR": A.default,
        "uk-UA": L.default,
        "zh-CN": N.default,
        "zh-TW": F.default
    };
    class $ extends j.GridKeyboardDelegate {
        isCell(e) {
            return "cell" === e.type || "rowheader" === e.type || "column" === e.type
        }
        getKeyBelow(e) {
            let t = this.collection.getItem(e);
            if (t) {
                if ("column" === t.type) {
                    let e = (0, U.getFirstItem)((0, U.getChildNodes)(t, this.collection));
                    if (e) return e.key;
                    let n = this.getFirstKey();
                    if (null == n) return;
                    let r = this.collection.getItem(n);
                    return (0, U.getNthItem)((0, U.getChildNodes)(r, this.collection), t.index).key
                }
                return super.getKeyBelow(e)
            }
        }
        getKeyAbove(e) {
            let t = this.collection.getItem(e);
            if (!t) return;
            if ("column" === t.type) {
                let e = this.collection.getItem(t.parentKey);
                return e && "column" === e.type ? e.key : void 0
            }
            let n = super.getKeyAbove(e);
            return null != n && "headerrow" !== this.collection.getItem(n).type ? n : this.isCell(t) ? this.collection.columns[t.index].key : this.collection.columns[0].key
        }
        findNextColumnKey(e) {
            let t = this.findNextKey(e.key, e => "column" === e.type);
            if (null != t) return t;
            let n = this.collection.headerRows[e.level];
            for (let e of (0, U.getChildNodes)(n, this.collection))
                if ("column" === e.type) return e.key
        }
        findPreviousColumnKey(e) {
            let t = this.findPreviousKey(e.key, e => "column" === e.type);
            if (null != t) return t;
            let n = this.collection.headerRows[e.level],
                r = [...(0, U.getChildNodes)(n, this.collection)];
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("column" === t.type) return t.key
            }
        }
        getKeyRightOf(e) {
            let t = this.collection.getItem(e);
            if (t) return "column" === t.type ? "rtl" === this.direction ? this.findPreviousColumnKey(t) : this.findNextColumnKey(t) : super.getKeyRightOf(e)
        }
        getKeyLeftOf(e) {
            let t = this.collection.getItem(e);
            if (t) return "column" === t.type ? "rtl" === this.direction ? this.findNextColumnKey(t) : this.findPreviousColumnKey(t) : super.getKeyLeftOf(e)
        }
        getKeyForSearch(e, t) {
            if (!this.collator) return null;
            let n = this.collection,
                r = null != t ? t : this.getFirstKey();
            if (null == r) return null;
            let a = n.getItem(r);
            "cell" === a.type && (r = a.parentKey);
            let i = !1;
            for (; null != r;) {
                let o = n.getItem(r);
                for (let r of (0, U.getChildNodes)(o, this.collection)) {
                    let i = n.columns[r.index];
                    if (n.rowHeaderColumnKeys.has(i.key) && r.textValue) {
                        let i = r.textValue.slice(0, e.length);
                        if (0 === this.collator.compare(i, e)) return "cell" === (null != t ? n.getItem(t) : a).type ? r.key : o.key
                    }
                }
                null == (r = this.getKeyBelow(r)) && !i && (r = this.getFirstKey(), i = !0)
            }
            return null
        }
    }

    function Q(e, t, n) {
        let {
            keyboardDelegate: r,
            isVirtualized: a,
            layout: i
        } = e, o = (0, B.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), {
            direction: s
        } = (0, B.useLocale)(), c = t.selectionManager.disabledBehavior, l = (0, V.useMemo)(() => r || new $({
            collection: t.collection,
            disabledKeys: "selection" === c ? new Set : t.disabledKeys,
            ref: n,
            direction: s,
            collator: o,
            layout: i
        }), [r, t.collection, t.disabledKeys, c, n, s, o, i]), u = (0, _.useId)(e.id);
        q.set(t, u);
        let {
            gridProps: d
        } = (0, j.useGrid)({
            ...e,
            id: u,
            keyboardDelegate: l
        }, t, n);
        a && (d["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), (0, z.tableNestedRows)() && "expandedKeys" in t && (d.role = "treegrid");
        let {
            column: p,
            direction: f
        } = t.sortDescriptor || {}, m = (0, B.useLocalizedStringFormatter)(W(J), "@react-aria/table"), h = (0, V.useMemo)(() => {
            var e;
            let n = null === (e = t.collection.columns.find(e => e.key === p)) || void 0 === e ? void 0 : e.textValue;
            return f && p ? m.format("".concat(f, "Sort"), {
                columnName: n
            }) : void 0
        }, [f, p, t.collection.columns]), v = (0, _.useDescription)(h);
        return (0, _.useUpdateEffect)(() => {
            (0, K.announce)(h, "assertive", 500)
        }, [h]), {
            gridProps: (0, _.mergeProps)(d, v, {
                "aria-describedby": [v["aria-describedby"], d["aria-describedby"]].filter(Boolean).join(" ")
            })
        }
    }

    function ee(e, t, n) {
        var r, a;
        let i;
        let {
            node: o
        } = e, s = o.props.allowsSorting, {
            gridCellProps: c
        } = (0, j.useGridCell)({
            ...e,
            focusMode: "child"
        }, t, n), l = o.props.isSelectionCell && "single" === t.selectionManager.selectionMode, {
            pressProps: u
        } = (0, G.usePress)({
            isDisabled: !s || l,
            onPress() {
                t.sort(o.key)
            },
            ref: n
        }), {
            focusableProps: d
        } = (0, H.useFocusable)({}, n), p = null, f = (null === (r = t.sortDescriptor) || void 0 === r ? void 0 : r.column) === o.key, m = null === (a = t.sortDescriptor) || void 0 === a ? void 0 : a.direction;
        o.props.allowsSorting && !(0, _.isAndroid)() && (p = f ? m : "none");
        let h = (0, B.useLocalizedStringFormatter)(W(J), "@react-aria/table");
        s && (i = "".concat(h.format("sortable")), f && m && (0, _.isAndroid)() && (i = "".concat(i, ", ").concat(h.format(m))));
        let v = (0, _.useDescription)(i),
            g = 0 === t.collection.size;
        return (0, V.useEffect)(() => {
            g && t.selectionManager.focusedKey === o.key && t.selectionManager.setFocusedKey(null)
        }, [g, t.selectionManager, o.key]), {
            columnHeaderProps: {
                ...(0, _.mergeProps)(c, u, d, v, g && {
                    tabIndex: -1
                }),
                role: "columnheader",
                id: function(e, t) {
                    let n = q.get(e);
                    if (!n) throw Error("Unknown grid");
                    return "".concat(n, "-").concat(Z(t))
                }(t, o.key),
                "aria-colspan": o.colspan && o.colspan > 1 ? o.colspan : null,
                "aria-sort": p
            }
        }
    }
    let et = {
        expand: {
            ltr: "ArrowRight",
            rtl: "ArrowLeft"
        },
        collapse: {
            ltr: "ArrowLeft",
            rtl: "ArrowRight"
        }
    };

    function en(e, t, n) {
        let {
            node: r,
            isVirtualized: a
        } = e, {
            rowProps: i,
            ...o
        } = (0, j.useGridRow)(e, t, n), {
            direction: s
        } = (0, B.useLocale)();
        a && !((0, z.tableNestedRows)() && "expandedKeys" in t) ? i["aria-rowindex"] = r.index + 1 + t.collection.headerRows.length : delete i["aria-rowindex"];
        let c = {};
        if ((0, z.tableNestedRows)() && "expandedKeys" in t) {
            let e = t.keyMap.get(r.key);
            if (null != e) {
                var l, u, d;
                let n = (null === (l = e.props) || void 0 === l ? void 0 : l.UNSTABLE_childItems) || (null === (d = e.props) || void 0 === d ? void 0 : null === (u = d.children) || void 0 === u ? void 0 : u.length) > t.userColumnCount;
                c = {
                    onKeyDown: r => {
                        r.key === et.expand[s] && t.selectionManager.focusedKey === e.key && n && "all" !== t.expandedKeys && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), r.stopPropagation()) : r.key === et.collapse[s] && t.selectionManager.focusedKey === e.key && n && ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) && (t.toggleKey(e.key), r.stopPropagation())
                    },
                    "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(r.key) : void 0,
                    "aria-level": e.level,
                    "aria-posinset": e.indexOfType + 1,
                    "aria-setsize": e.level > 1 ? (0, U.getLastItem)(t.keyMap.get(null == e ? void 0 : e.parentKey).childNodes).indexOfType + 1 : (0, U.getLastItem)(t.keyMap.get(t.collection.body.key).childNodes).indexOfType + 1
                }
            }
        }
        let p = o.hasAction ? (0, _.getSyntheticLinkProps)(r.props) : {};
        return {
            rowProps: {
                ...(0, _.mergeProps)(i, c, p),
                "aria-labelledby": X(t, r.key)
            },
            ...o
        }
    }

    function er(e, t, n) {
        let {
            node: r,
            isVirtualized: a
        } = e, i = {
            role: "row"
        };
        return a && !((0, z.tableNestedRows)() && "expandedKeys" in t) && (i["aria-rowindex"] = r.index + 1), {
            rowProps: i
        }
    }

    function ea(e, t, n) {
        let {
            gridCellProps: r,
            isPressed: a
        } = (0, j.useGridCell)(e, t, n), i = e.node.column.key;
        return t.collection.rowHeaderColumnKeys.has(i) && (r.role = "rowheader", r.id = Y(t, e.node.parentKey, i)), {
            gridCellProps: r,
            isPressed: a
        }
    }

    function ei(e, t) {
        let {
            key: n
        } = e, {
            checkboxProps: r
        } = (0, j.useGridSelectionCheckbox)(e, t);
        return {
            checkboxProps: {
                ...r,
                "aria-labelledby": "".concat(r.id, " ").concat(X(t, n))
            }
        }
    }

    function eo(e) {
        let {
            isEmpty: t,
            isSelectAll: n,
            selectionMode: r
        } = e.selectionManager, a = (0, B.useLocalizedStringFormatter)(W(J), "@react-aria/table");
        return {
            checkboxProps: {
                "aria-label": a.format("single" === r ? "select" : "selectAll"),
                isSelected: n,
                isDisabled: "multiple" !== r || 0 === e.collection.size,
                isIndeterminate: !t && !n,
                onChange: () => e.selectionManager.toggleSelectAll()
            }
        }
    }

    function es() {
        return (0, j.useGridRowGroup)()
    }
}