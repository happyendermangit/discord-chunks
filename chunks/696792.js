function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useButton: function() {
            return o
        },
        useToggleButton: function() {
            return s
        }
    });
    var r = n("240849"),
        a = n("447259"),
        i = n("388032");

    function o(e, t) {
        let n, {
            elementType: o = "button",
            isDisabled: s,
            onPress: c,
            onPressStart: l,
            onPressEnd: u,
            onPressUp: d,
            onPressChange: p,
            preventFocusOnPress: f,
            allowFocusWhenDisabled: m,
            onClick: h,
            href: v,
            target: g,
            rel: y,
            type: b = "button"
        } = e;
        n = "button" === o ? {
            type: b,
            disabled: s
        } : {
            role: "button",
            tabIndex: s ? void 0 : 0,
            href: "a" === o && s ? void 0 : v,
            target: "a" === o ? g : void 0,
            type: "input" === o ? b : void 0,
            disabled: "input" === o ? s : void 0,
            "aria-disabled": s && "input" !== o ? s : void 0,
            rel: "a" === o ? y : void 0
        };
        let {
            pressProps: x,
            isPressed: S
        } = (0, i.usePress)({
            onPressStart: l,
            onPressEnd: u,
            onPressChange: p,
            onPress: c,
            onPressUp: d,
            isDisabled: s,
            preventFocusOnPress: f,
            ref: t
        }), {
            focusableProps: w
        } = (0, a.useFocusable)(e, t);
        m && (w.tabIndex = s ? -1 : w.tabIndex);
        let D = (0, r.mergeProps)(w, x, (0, r.filterDOMProps)(e, {
            labelable: !0
        }));
        return {
            isPressed: S,
            buttonProps: (0, r.mergeProps)(n, D, {
                "aria-haspopup": e["aria-haspopup"],
                "aria-expanded": e["aria-expanded"],
                "aria-controls": e["aria-controls"],
                "aria-pressed": e["aria-pressed"],
                onClick: e => {
                    h && (h(e), console.warn("onClick is deprecated, please use onPress"))
                }
            })
        }
    }

    function s(e, t, n) {
        let {
            isSelected: a
        } = t, {
            isPressed: i,
            buttonProps: s
        } = o({
            ...e,
            onPress: (0, r.chain)(t.toggle, e.onPress)
        }, n);
        return {
            isPressed: i,
            buttonProps: (0, r.mergeProps)(s, {
                "aria-pressed": a
            })
        }
    }
}