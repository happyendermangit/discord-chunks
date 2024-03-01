function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useField: function() {
            return i
        },
        useLabel: function() {
            return a
        }
    });
    var r = n("240849");

    function a(e) {
        let {
            id: t,
            label: n,
            "aria-labelledby": a,
            "aria-label": i,
            labelElementType: o = "label"
        } = e;
        t = (0, r.useId)(t);
        let s = (0, r.useId)(),
            c = {};
        return n ? (a = a ? "".concat(s, " ").concat(a) : s, c = {
            id: s,
            htmlFor: "label" === o ? t : void 0
        }) : !a && !i && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: c,
            fieldProps: (0, r.useLabels)({
                id: t,
                "aria-label": i,
                "aria-labelledby": a
            })
        }
    }

    function i(e) {
        let {
            description: t,
            errorMessage: n,
            isInvalid: i,
            validationState: o
        } = e, {
            labelProps: s,
            fieldProps: c
        } = a(e), l = (0, r.useSlotId)([!!t, !!n, i, o]), u = (0, r.useSlotId)([!!t, !!n, i, o]);
        return {
            labelProps: s,
            fieldProps: c = (0, r.mergeProps)(c, {
                "aria-describedby": [l, u, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
            }),
            descriptionProps: {
                id: l
            },
            errorMessageProps: {
                id: u
            }
        }
    }
}