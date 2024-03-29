function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMenu: function() {
            return $
        },
        useMenuItem: function() {
            return W
        },
        useMenuSection: function() {
            return K
        },
        useMenuTrigger: function() {
            return G
        }
    });
    var r = n("956250"),
        i = n("283182"),
        a = n("973967"),
        o = n("595292"),
        s = n("857374"),
        u = n("721935"),
        c = n("564643"),
        l = n("217108"),
        d = n("979862"),
        f = n("700870"),
        p = n("310452"),
        h = n("929004"),
        m = n("76263"),
        g = n("873843"),
        _ = n("902503"),
        b = n("332572"),
        v = n("193032"),
        y = n("557354"),
        E = n("4112"),
        S = n("300613"),
        x = n("27890"),
        w = n("245814"),
        T = n("278558"),
        C = n("26024"),
        D = n("884688"),
        O = n("502991"),
        M = n("991386"),
        A = n("838246"),
        k = n("987707"),
        R = n("967379"),
        N = n("111899"),
        I = n("261161"),
        L = n("311129"),
        P = n("681861"),
        F = n("182823"),
        B = n("602607"),
        U = n("612001"),
        Y = n("99997"),
        j = n("457283"),
        z = n("275857");
    n("470079");
    var H = {};

    function G(e, t, n) {
        var r;
        let {
            type: i = "menu",
            isDisabled: a,
            trigger: o = "press"
        } = e, s = (0, F.useId)(), {
            triggerProps: u,
            overlayProps: c
        } = (0, Y.useOverlayTrigger)({
            type: i
        }, t, n);
        let l = (0, B.useLocalizedStringFormatter)((r = H) && r.__esModule ? r.default : r, "@react-aria/menu"),
            {
                longPressProps: d
            } = (0, U.useLongPress)({
                isDisabled: a || "longPress" !== o,
                accessibilityDescription: l.format("longPressMessage"),
                onLongPressStart() {
                    t.close()
                },
                onLongPress() {
                    t.open("first")
                }
            });
        return delete u.onPress, {
            menuTriggerProps: {
                ...u,
                ..."press" === o ? {
                    onPressStart(e) {
                        "touch" !== e.pointerType && "keyboard" !== e.pointerType && !a && t.toggle("virtual" === e.pointerType ? "first" : null)
                    },
                    onPress(e) {
                        "touch" === e.pointerType && !a && t.toggle()
                    }
                } : d,
                id: s,
                onKeyDown: e => {
                    if (!a) {
                        if (("longPress" !== o || e.altKey) && n && n.current) switch (e.key) {
                            case "Enter":
                            case " ":
                                if ("longPress" === o) return;
                            case "ArrowDown":
                                !("continuePropagation" in e) && e.stopPropagation(), e.preventDefault(), t.toggle("first");
                                break;
                            case "ArrowUp":
                                !("continuePropagation" in e) && e.stopPropagation(), e.preventDefault(), t.toggle("last");
                                break;
                            default:
                                "continuePropagation" in e && e.continuePropagation()
                        }
                    }
                }
            },
            menuProps: {
                ...c,
                "aria-labelledby": s,
                autoFocus: t.focusStrategy || !0,
                onClose: t.close
            }
        }
    }
    H = {
        "ar-AE": r.default,
        "bg-BG": i.default,
        "cs-CZ": a.default,
        "da-DK": o.default,
        "de-DE": s.default,
        "el-GR": u.default,
        "en-US": c.default,
        "es-ES": l.default,
        "et-EE": d.default,
        "fi-FI": f.default,
        "fr-FR": p.default,
        "he-IL": h.default,
        "hr-HR": m.default,
        "hu-HU": g.default,
        "it-IT": _.default,
        "ja-JP": b.default,
        "ko-KR": v.default,
        "lt-LT": y.default,
        "lv-LV": E.default,
        "nb-NO": S.default,
        "nl-NL": x.default,
        "pl-PL": w.default,
        "pt-BR": T.default,
        "pt-PT": C.default,
        "ro-RO": D.default,
        "ru-RU": O.default,
        "sk-SK": M.default,
        "sl-SI": A.default,
        "sr-SP": k.default,
        "sv-SE": R.default,
        "tr-TR": N.default,
        "uk-UA": I.default,
        "zh-CN": L.default,
        "zh-TW": P.default
    };
    let V = new WeakMap;

    function $(e, t, n) {
        let {
            shouldFocusWrap: r = !0,
            onKeyDown: i,
            onKeyUp: a,
            ...o
        } = e;
        !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
        let s = (0, F.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                listProps: u
            } = (0, j.useSelectableList)({
                ...o,
                ref: n,
                selectionManager: t.selectionManager,
                collection: t.collection,
                disabledKeys: t.disabledKeys,
                shouldFocusWrap: r,
                linkBehavior: "override"
            });
        return V.set(t, {
            onClose: e.onClose,
            onAction: e.onAction
        }), {
            menuProps: (0, F.mergeProps)(s, {
                onKeyDown: i,
                onKeyUp: a
            }, {
                role: "menu",
                ...u,
                onKeyDown: e => {
                    "Escape" !== e.key && u.onKeyDown(e)
                }
            })
        }
    }

    function W(e, t, n) {
        var r, i, a;
        let {
            key: o,
            closeOnSelect: s,
            isVirtualized: u,
            "aria-haspopup": c,
            onPressStart: l,
            onPressUp: d,
            onPress: f,
            onPressChange: p,
            onPressEnd: h,
            onHoverStart: m,
            onHoverChange: g,
            onHoverEnd: _,
            onKeyDown: b,
            onKeyUp: v,
            onFocus: y,
            onFocusChange: E,
            onBlur: S
        } = e, x = !!c, w = null !== (i = e.isDisabled) && void 0 !== i ? i : t.disabledKeys.has(o), T = null !== (a = e.isSelected) && void 0 !== a ? a : t.selectionManager.isSelected(o), C = V.get(t), D = e.onClose || C.onClose, O = x ? () => {} : e.onAction || C.onAction, M = (0, F.useRouter)(), A = e => {
            O && O(o), e.target instanceof HTMLAnchorElement && M.open(e.target, e)
        }, k = "menuitem";
        !x && ("single" === t.selectionManager.selectionMode ? k = "menuitemradio" : "multiple" === t.selectionManager.selectionMode && (k = "menuitemcheckbox"));
        let R = (0, F.useSlotId)(),
            N = (0, F.useSlotId)(),
            I = (0, F.useSlotId)(),
            L = {
                "aria-disabled": w || void 0,
                role: k,
                "aria-label": e["aria-label"],
                "aria-labelledby": R,
                "aria-describedby": [N, I].filter(Boolean).join(" ") || void 0,
                "aria-controls": e["aria-controls"],
                "aria-haspopup": c,
                "aria-expanded": e["aria-expanded"]
            };
        "none" !== t.selectionManager.selectionMode && !x && (L["aria-checked"] = T);
        let P = t.collection.getItem(o);
        u && (L["aria-posinset"] = null == P ? void 0 : P.index, L["aria-setsize"] = (0, z.getItemCount)(t.collection));
        let {
            itemProps: B,
            isFocused: Y
        } = (0, j.useSelectableItem)({
            selectionManager: t.selectionManager,
            key: o,
            ref: n,
            shouldSelectOnPressUp: !0,
            allowsDifferentPressOrigin: !0,
            linkBehavior: "none"
        }), {
            pressProps: H,
            isPressed: G
        } = (0, U.usePress)({
            onPressStart: e => {
                "keyboard" === e.pointerType && A(e), null == l || l(e)
            },
            onPress: f,
            onPressUp: e => {
                "keyboard" !== e.pointerType && (A(e), !x && D && (null != s ? s : "multiple" !== t.selectionManager.selectionMode || t.selectionManager.isLink(o)) && D()), null == d || d(e)
            },
            onPressChange: p,
            onPressEnd: h,
            isDisabled: w
        }), {
            hoverProps: $
        } = (0, U.useHover)({
            isDisabled: w,
            onHoverStart(e) {
                !(0, U.isFocusVisible)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(o)), null == m || m(e)
            },
            onHoverChange: g,
            onHoverEnd: _
        }), {
            keyboardProps: W
        } = (0, U.useKeyboard)({
            onKeyDown: e => {
                if (e.repeat) {
                    e.continuePropagation();
                    return
                }
                switch (e.key) {
                    case " ":
                        !w && "none" === t.selectionManager.selectionMode && !x && !1 !== s && D && D();
                        break;
                    case "Enter":
                        !w && !1 !== s && !x && D && D();
                        break;
                    default:
                        !x && e.continuePropagation(), null == b || b(e)
                }
            },
            onKeyUp: v
        }), {
            focusProps: K
        } = (0, U.useFocus)({
            onBlur: S,
            onFocus: y,
            onFocusChange: E
        }), q = (0, F.filterDOMProps)(P.props, {
            isLink: !!(null == P ? void 0 : null === (r = P.props) || void 0 === r ? void 0 : r.href)
        });
        return delete q.id, {
            menuItemProps: {
                ...L,
                ...(0, F.mergeProps)(q, x ? {
                    onFocus: B.onFocus
                } : B, H, $, W, K),
                tabIndex: null != B.tabIndex ? -1 : void 0
            },
            labelProps: {
                id: R
            },
            descriptionProps: {
                id: N
            },
            keyboardShortcutProps: {
                id: I
            },
            isFocused: Y,
            isSelected: T,
            isPressed: G,
            isDisabled: w
        }
    }

    function K(e) {
        let {
            heading: t,
            "aria-label": n
        } = e, r = (0, F.useId)();
        return {
            itemProps: {
                role: "presentation"
            },
            headingProps: t ? {
                id: r,
                role: "presentation"
            } : {},
            groupProps: {
                role: "group",
                "aria-label": n,
                "aria-labelledby": t ? r : void 0
            }
        }
    }
}