function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuItem: function() {
            return h
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("227645"),
        l = n("199285"),
        u = n("107728"),
        c = n("697917"),
        d = n("886074"),
        f = n("772280"),
        E = n("389802"),
        p = n("639826");

    function h(e) {
        let {
            color: t = "default",
            label: n,
            icon: s,
            showIconFirst: h = !1,
            imageUrl: _,
            hint: S,
            subtext: m,
            hasSubmenu: T,
            disabled: g,
            isFocused: I,
            menuItemProps: C,
            action: v,
            onClose: A,
            onFocus: R,
            className: N,
            focusedClassName: O,
            subMenuIconClassName: D,
            dontCloseOnActionIfHoldingShiftKey: y,
            iconProps: P,
            sparkle: L
        } = e, b = r.useContext(u.OnMenuSelectContext), M = r.useRef(null), U = r.useCallback(e => {
            if (null == v) return !1;
            !(e.shiftKey && y) && A(), e.persist(), null == b || b(), requestAnimationFrame(() => v(e))
        }, [v, A, b, y]);
        return r.useEffect(() => {
            I && ((0, c.ensureItemVisible)(M), null == R || R())
        }, [I, R]), (0, i.jsxs)(o.Clickable, {
            innerRef: M,
            className: a(p.item, p.labelContainer, E.MENU_ITEM_COLORS[t], N, {
                [p.disabled]: g,
                [p.focused]: I,
                [null != O ? O : ""]: I
            }),
            onClick: g ? void 0 : U,
            "aria-disabled": g,
            ...C,
            "data-menu-item": "true",
            children: [h && null != s && (0, i.jsx)("div", {
                className: p.iconContainerLeft,
                children: (0, i.jsx)(s, {
                    ...P,
                    className: a(p.icon, null == P ? void 0 : P.className),
                    isFocused: I
                })
            }), (0, i.jsxs)("div", {
                className: p.label,
                children: [(0, l.renderSubnode)(n, e), null != m && (0, i.jsx)("div", {
                    className: p.subtext,
                    children: m
                })]
            }), null != S && (0, i.jsx)("div", {
                className: p.hintContainer,
                children: (0, l.renderSubnode)(S, e)
            }), !h && null != s && (0, i.jsx)("div", {
                className: p.iconContainer,
                children: (0, i.jsx)(s, {
                    ...P,
                    className: a(p.icon, null == P ? void 0 : P.className),
                    isFocused: I
                })
            }), null != _ && (0, i.jsx)("div", {
                className: p.imageContainer,
                children: (0, i.jsx)("img", {
                    className: p.image,
                    src: (0, l.renderSubnode)(_, e),
                    alt: ""
                })
            }), T && (0, i.jsxs)("div", {
                className: p.iconContainer,
                children: [(0, i.jsx)(f.default, {
                    className: a(p.caret, D)
                }), L && (0, i.jsx)(d.default, {
                    className: p.sparkles
                })]
            })]
        })
    }
}