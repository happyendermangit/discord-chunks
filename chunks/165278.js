function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCheckbox: function() {
            return u
        },
        useCheckboxGroup: function() {
            return p
        },
        useCheckboxGroupItem: function() {
            return f
        }
    }), n("222007");
    var r = n("884691"),
        a = n("759840"),
        i = n("444324"),
        o = n("914644"),
        s = n("240849"),
        c = n("113581"),
        l = n("223986");

    function u(e, t, n) {
        let s = (0, i.useFormValidationState)({
                ...e,
                value: t.isSelected
            }),
            {
                isInvalid: c,
                validationErrors: l,
                validationDetails: u
            } = s.displayValidation,
            {
                labelProps: d,
                inputProps: p,
                isSelected: f,
                isPressed: m,
                isDisabled: h,
                isReadOnly: v
            } = (0, o.useToggle)({
                ...e,
                isInvalid: c
            }, t, n);
        (0, a.useFormValidation)(e, s, n);
        let {
            isIndeterminate: g,
            isRequired: y,
            validationBehavior: b = "aria"
        } = e;
        return (0, r.useEffect)(() => {
            n.current && (n.current.indeterminate = !!g)
        }), {
            labelProps: d,
            inputProps: {
                ...p,
                checked: f,
                "aria-required": y && "aria" === b || void 0,
                required: y && "native" === b
            },
            isSelected: f,
            isPressed: m,
            isDisabled: h,
            isReadOnly: v,
            isInvalid: c,
            validationErrors: l,
            validationDetails: u
        }
    }
    let d = new WeakMap;

    function p(e, t) {
        let {
            isDisabled: n,
            name: r,
            validationBehavior: a = "aria"
        } = e, {
            isInvalid: i,
            validationErrors: o,
            validationDetails: l
        } = t.displayValidation, {
            labelProps: u,
            fieldProps: p,
            descriptionProps: f,
            errorMessageProps: m
        } = (0, c.useField)({
            ...e,
            labelElementType: "span",
            isInvalid: i,
            errorMessage: e.errorMessage || o
        });
        d.set(t, {
            name: r,
            descriptionId: f.id,
            errorMessageId: m.id,
            validationBehavior: a
        });
        let h = (0, s.filterDOMProps)(e, {
            labelable: !0
        });
        return {
            groupProps: (0, s.mergeProps)(h, {
                role: "group",
                "aria-disabled": n || void 0,
                ...p
            }),
            labelProps: u,
            descriptionProps: f,
            errorMessageProps: m,
            isInvalid: i,
            validationErrors: o,
            validationDetails: l
        }
    }

    function f(e, t, n) {
        var a, o;
        let s = (0, l.useToggleState)({
                isReadOnly: e.isReadOnly || t.isReadOnly,
                isSelected: t.isSelected(e.value),
                onChange(n) {
                    n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n)
                }
            }),
            {
                name: c,
                descriptionId: p,
                errorMessageId: f,
                validationBehavior: m
            } = d.get(t);
        m = null !== (a = e.validationBehavior) && void 0 !== a ? a : m;
        let {
            realtimeValidation: h
        } = (0, i.useFormValidationState)({
            ...e,
            value: s.isSelected,
            name: void 0,
            validationBehavior: "aria"
        }), v = (0, r.useRef)(i.DEFAULT_VALIDATION_RESULT), g = () => {
            t.setInvalid(e.value, h.isInvalid ? h : v.current)
        };
        (0, r.useEffect)(g);
        let y = t.realtimeValidation.isInvalid ? t.realtimeValidation : h,
            b = "native" === m ? t.displayValidation : y,
            x = u({
                ...e,
                isReadOnly: e.isReadOnly || t.isReadOnly,
                isDisabled: e.isDisabled || t.isDisabled,
                name: e.name || c,
                isRequired: null !== (o = e.isRequired) && void 0 !== o ? o : t.isRequired,
                validationBehavior: m,
                [i.privateValidationStateProp]: {
                    realtimeValidation: y,
                    displayValidation: b,
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation,
                    updateValidation(e) {
                        v.current = e, g()
                    }
                }
            }, s, n);
        return {
            ...x,
            inputProps: {
                ...x.inputProps,
                "aria-describedby": [e["aria-describedby"], t.isInvalid ? f : null, p].filter(Boolean).join(" ") || void 0
            }
        }
    }
}