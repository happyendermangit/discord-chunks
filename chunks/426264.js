function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuItem: function() {
            return E
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("227645"),
        l = n("199285"),
        u = n("107728"),
        d = n("697917"),
        c = n("886074"),
        f = n("772280"),
        _ = n("389802"),
        h = n("639826");

    function E(e) {
        let {
            color: t = "default",
            label: n,
            icon: r,
            showIconFirst: E = !1,
            imageUrl: g,
            hint: m,
            subtext: p,
            hasSubmenu: S,
            disabled: v,
            isFocused: T,
            menuItemProps: I,
            action: C,
            onClose: A,
            onFocus: y,
            className: N,
            focusedClassName: R,
            subMenuIconClassName: O,
            dontCloseOnActionIfHoldingShiftKey: D,
            dontCloseOnAction: P,
            iconProps: M,
            sparkle: L
        } = e, b = s.useContext(u.OnMenuSelectContext), U = s.useRef(null), w = s.useCallback(e => {
            if (null == C) return !1;
            !(e.shiftKey && D) && !P && A(), e.persist(), null == b || b(), requestAnimationFrame(() => C(e))
        }, [C, A, b, D, P]);
        return s.useEffect(() => {
            T && ((0, d.ensureItemVisible)(U), null == y || y())
        }, [T, y]), (0, i.jsxs)(o.Clickable, {
            innerRef: U,
            className: a(h.item, h.labelContainer, _.MENU_ITEM_COLORS[t], N, {
                [h.disabled]: v,
                [h.focused]: T,
                [null != R ? R : ""]: T
            }),
            onClick: v ? void 0 : w,
            "aria-disabled": v,
            ...I,
            "data-menu-item": "true",
            children: [E && null != r && (0, i.jsx)("div", {
                className: h.iconContainerLeft,
                children: (0, i.jsx)(r, {
                    ...M,
                    className: a(h.icon, null == M ? void 0 : M.className),
                    isFocused: T
                })
            }), (0, i.jsxs)("div", {
                className: h.label,
                children: [(0, l.renderSubnode)(n, e), null != p && (0, i.jsx)("div", {
                    className: h.subtext,
                    children: p
                })]
            }), null != m && (0, i.jsx)("div", {
                className: h.hintContainer,
                children: (0, l.renderSubnode)(m, e)
            }), !E && null != r && (0, i.jsx)("div", {
                className: h.iconContainer,
                children: (0, i.jsx)(r, {
                    ...M,
                    className: a(h.icon, null == M ? void 0 : M.className),
                    isFocused: T
                })
            }), null != g && (0, i.jsx)("div", {
                className: h.imageContainer,
                children: (0, i.jsx)("img", {
                    className: h.image,
                    src: (0, l.renderSubnode)(g, e),
                    alt: ""
                })
            }), S && (0, i.jsxs)("div", {
                className: h.iconContainer,
                children: [(0, i.jsx)(f.default, {
                    className: a(h.caret, O)
                }), L && (0, i.jsx)(c.default, {
                    className: h.sparkles
                })]
            })]
        })
    }
}