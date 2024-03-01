function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTextField: function() {
            return u
        },
        useFormattedTextField: function() {
            return p
        }
    }), n("222007");
    var r = n("884691"),
        a = n("240849"),
        i = n("708966"),
        o = n("113581"),
        s = n("447259"),
        c = n("759840"),
        l = n("444324");

    function u(e, t) {
        let {
            inputElementType: n = "input",
            isDisabled: u = !1,
            isRequired: d = !1,
            isReadOnly: p = !1,
            type: f = "text",
            validationBehavior: m = "aria"
        } = e, [h, v] = (0, i.useControlledState)(e.value, e.defaultValue || "", e.onChange), {
            focusableProps: g
        } = (0, s.useFocusable)(e, t), y = (0, l.useFormValidationState)({
            ...e,
            value: h
        }), {
            isInvalid: b,
            validationErrors: x,
            validationDetails: S
        } = y.displayValidation, {
            labelProps: w,
            fieldProps: D,
            descriptionProps: C,
            errorMessageProps: k
        } = (0, o.useField)({
            ...e,
            isInvalid: b,
            errorMessage: e.errorMessage || x
        }), P = (0, a.filterDOMProps)(e, {
            labelable: !0
        }), E = {
            type: f,
            pattern: e.pattern
        };
        return (0, a.useFormReset)(t, h, v), (0, c.useFormValidation)(e, y, t), (0, r.useEffect)(() => {
            if (t.current instanceof(0, a.getOwnerWindow)(t.current).HTMLTextAreaElement) {
                let e = t.current;
                Object.defineProperty(e, "defaultValue", {
                    get: () => e.value,
                    set: () => {},
                    configurable: !0
                })
            }
        }, [t]), {
            labelProps: w,
            inputProps: (0, a.mergeProps)(P, "input" === n && E, {
                disabled: u,
                readOnly: p,
                required: d && "native" === m,
                "aria-required": d && "aria" === m || void 0,
                "aria-invalid": b || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                value: h,
                onChange: e => v(e.target.value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ...g,
                ...D
            }),
            descriptionProps: C,
            errorMessageProps: k,
            isInvalid: b,
            validationErrors: x,
            validationDetails: S
        }
    }

    function d() {
        return "undefined" != typeof window && window.InputEvent && "function" == typeof InputEvent.prototype.getTargetRanges
    }

    function p(e, t, n) {
        let i = (0, a.useEffectEvent)(e => {
            let r, a = n.current;
            switch (e.inputType) {
                case "historyUndo":
                case "historyRedo":
                    return;
                case "deleteContent":
                case "deleteByCut":
                case "deleteByDrag":
                    r = a.value.slice(0, a.selectionStart) + a.value.slice(a.selectionEnd);
                    break;
                case "deleteContentForward":
                    r = a.selectionEnd === a.selectionStart ? a.value.slice(0, a.selectionStart) + a.value.slice(a.selectionEnd + 1) : a.value.slice(0, a.selectionStart) + a.value.slice(a.selectionEnd);
                    break;
                case "deleteContentBackward":
                    r = a.selectionEnd === a.selectionStart ? a.value.slice(0, a.selectionStart - 1) + a.value.slice(a.selectionStart) : a.value.slice(0, a.selectionStart) + a.value.slice(a.selectionEnd);
                    break;
                case "deleteSoftLineBackward":
                case "deleteHardLineBackward":
                    r = a.value.slice(a.selectionStart);
                    break;
                default:
                    null != e.data && (r = a.value.slice(0, a.selectionStart) + e.data + a.value.slice(a.selectionEnd))
            }(null == r || !t.validate(r)) && e.preventDefault()
        });
        (0, r.useEffect)(() => {
            if (!d()) return;
            let e = n.current;
            return e.addEventListener("beforeinput", i, !1), () => {
                e.removeEventListener("beforeinput", i, !1)
            }
        }, [n, i]);
        let o = d() ? null : e => {
                let n = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
                !t.validate(n) && e.preventDefault()
            },
            {
                labelProps: s,
                inputProps: c,
                descriptionProps: l,
                errorMessageProps: p,
                ...f
            } = u(e, n),
            m = (0, r.useRef)(null);
        return {
            inputProps: (0, a.mergeProps)(c, {
                onBeforeInput: o,
                onCompositionStart() {
                    let {
                        value: e,
                        selectionStart: t,
                        selectionEnd: r
                    } = n.current;
                    m.current = {
                        value: e,
                        selectionStart: t,
                        selectionEnd: r
                    }
                },
                onCompositionEnd() {
                    if (!t.validate(n.current.value)) {
                        let {
                            value: e,
                            selectionStart: r,
                            selectionEnd: a
                        } = m.current;
                        n.current.value = e, n.current.setSelectionRange(r, a), t.setInputValue(e)
                    }
                }
            }),
            labelProps: s,
            descriptionProps: l,
            errorMessageProps: p,
            ...f
        }
    }
}