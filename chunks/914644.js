function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToggle: function() {
            return o
        }
    });
    var r = n("240849"),
        a = n("447259"),
        i = n("388032");

    function o(e, t, n) {
        let {
            isDisabled: o = !1,
            isReadOnly: s = !1,
            value: c,
            name: l,
            children: u,
            "aria-label": d,
            "aria-labelledby": p,
            validationState: f = "valid",
            isInvalid: m
        } = e;
        !(null != u) && !(null != d || null != p) && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
        let {
            pressProps: h,
            isPressed: v
        } = (0, i.usePress)({
            isDisabled: o
        }), {
            pressProps: g,
            isPressed: y
        } = (0, i.usePress)({
            isDisabled: o || s,
            onPress() {
                t.toggle()
            }
        }), {
            focusableProps: b
        } = (0, a.useFocusable)(e, n), x = (0, r.mergeProps)(h, b), S = (0, r.filterDOMProps)(e, {
            labelable: !0
        });
        return (0, r.useFormReset)(n, t.isSelected, t.setSelected), {
            labelProps: (0, r.mergeProps)(g, {
                onClick: e => e.preventDefault()
            }),
            inputProps: (0, r.mergeProps)(S, {
                "aria-invalid": m || "invalid" === f || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": s || void 0,
                onChange: e => {
                    e.stopPropagation(), t.setSelected(e.target.checked)
                },
                disabled: o,
                ...null == c ? {} : {
                    value: c
                },
                name: l,
                type: "checkbox",
                ...x
            }),
            isSelected: t.isSelected,
            isPressed: v || y,
            isDisabled: o,
            isReadOnly: s,
            isInvalid: m || "invalid" === f
        }
    }
}