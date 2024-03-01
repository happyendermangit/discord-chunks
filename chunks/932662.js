function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useListBox: function() {
            return u
        },
        useOption: function() {
            return d
        },
        useListBoxSection: function() {
            return p
        },
        listData: function() {
            return c
        },
        getItemId: function() {
            return l
        }
    }), n("222007"), n("781738"), n("70102");
    var r = n("240849"),
        a = n("388032"),
        i = n("113581"),
        o = n("932165"),
        s = n("846794");
    let c = new WeakMap;

    function l(e, t) {
        var n;
        let r = c.get(e);
        if (!r) throw Error("Unknown list");
        return "".concat(r.id, "-option-").concat("string" == typeof(n = t) ? n.replace(/\s*/g, "") : "" + n)
    }

    function u(e, t, n) {
        let s = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            l = e.selectionBehavior || "toggle",
            u = e.linkBehavior || ("replace" === l ? "action" : "override");
        "toggle" === l && "action" === u && (u = "override");
        let {
            listProps: d
        } = (0, o.useSelectableList)({
            ...e,
            ref: n,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            linkBehavior: u
        }), {
            focusWithinProps: p
        } = (0, a.useFocusWithin)({
            onFocusWithin: e.onFocus,
            onBlurWithin: e.onBlur,
            onFocusWithinChange: e.onFocusChange
        }), f = (0, r.useId)(e.id);
        c.set(t, {
            id: f,
            shouldUseVirtualFocus: e.shouldUseVirtualFocus,
            shouldSelectOnPressUp: e.shouldSelectOnPressUp,
            shouldFocusOnHover: e.shouldFocusOnHover,
            isVirtualized: e.isVirtualized,
            onAction: e.onAction,
            linkBehavior: u
        });
        let {
            labelProps: m,
            fieldProps: h
        } = (0, i.useLabel)({
            ...e,
            id: f,
            labelElementType: "span"
        });
        return {
            labelProps: m,
            listBoxProps: (0, r.mergeProps)(s, p, "multiple" === t.selectionManager.selectionMode ? {
                "aria-multiselectable": "true"
            } : {}, {
                role: "listbox",
                ...(0, r.mergeProps)(h, d)
            })
        }
    }

    function d(e, t, n) {
        var i, u, d, p, f, m, h;
        let {
            key: v
        } = e, g = c.get(t), y = null !== (u = e.isDisabled) && void 0 !== u ? u : t.disabledKeys.has(v), b = null !== (d = e.isSelected) && void 0 !== d ? d : t.selectionManager.isSelected(v), x = null !== (p = e.shouldSelectOnPressUp) && void 0 !== p ? p : null == g ? void 0 : g.shouldSelectOnPressUp, S = null !== (f = e.shouldFocusOnHover) && void 0 !== f ? f : null == g ? void 0 : g.shouldFocusOnHover, w = null !== (m = e.shouldUseVirtualFocus) && void 0 !== m ? m : null == g ? void 0 : g.shouldUseVirtualFocus, D = null !== (h = e.isVirtualized) && void 0 !== h ? h : null == g ? void 0 : g.isVirtualized, C = (0, r.useSlotId)(), k = (0, r.useSlotId)(), P = {
            role: "option",
            "aria-disabled": y || void 0,
            "aria-selected": "none" !== t.selectionManager.selectionMode ? b : void 0
        };
        !((0, r.isMac)() && (0, r.isWebKit)()) && (P["aria-label"] = e["aria-label"], P["aria-labelledby"] = C, P["aria-describedby"] = k);
        let E = t.collection.getItem(v);
        if (D) {
            let e = Number(null == E ? void 0 : E.index);
            P["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, P["aria-setsize"] = (0, s.getItemCount)(t.collection)
        }
        let {
            itemProps: T,
            isPressed: M,
            isFocused: R,
            hasAction: I,
            allowsSelection: O
        } = (0, o.useSelectableItem)({
            selectionManager: t.selectionManager,
            key: v,
            ref: n,
            shouldSelectOnPressUp: x,
            allowsDifferentPressOrigin: x && S,
            isVirtualized: D,
            shouldUseVirtualFocus: w,
            isDisabled: y,
            onAction: (null == g ? void 0 : g.onAction) ? () => {
                var e;
                return null == g ? void 0 : null === (e = g.onAction) || void 0 === e ? void 0 : e.call(g, v)
            } : void 0,
            linkBehavior: null == g ? void 0 : g.linkBehavior
        }), {
            hoverProps: A
        } = (0, a.useHover)({
            isDisabled: y || !S,
            onHoverStart() {
                !(0, a.isFocusVisible)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(v))
            }
        }), L = (0, r.filterDOMProps)(null == E ? void 0 : E.props, {
            isLink: !!(null == E ? void 0 : null === (i = E.props) || void 0 === i ? void 0 : i.href)
        });
        return delete L.id, {
            optionProps: {
                ...P,
                ...(0, r.mergeProps)(L, T, A),
                id: l(t, v)
            },
            labelProps: {
                id: C
            },
            descriptionProps: {
                id: k
            },
            isFocused: R,
            isFocusVisible: R && (0, a.isFocusVisible)(),
            isSelected: b,
            isDisabled: y,
            isPressed: M,
            allowsSelection: O,
            hasAction: I
        }
    }

    function p(e) {
        let {
            heading: t,
            "aria-label": n
        } = e, a = (0, r.useId)();
        return {
            itemProps: {
                role: "presentation"
            },
            headingProps: t ? {
                id: a,
                role: "presentation"
            } : {},
            groupProps: {
                role: "group",
                "aria-label": n,
                "aria-labelledby": t ? a : void 0
            }
        }
    }
}