function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useRadioGroupState: function() {
            return s
        }
    }), n("222007");
    var r = n("679750"),
        a = n("884691");
    let i = Math.round(1e10 * Math.random()),
        o = 0;

    function s(e) {
        let t = (0, a.useMemo)(() => e.name || "radio-group-".concat(i, "-").concat(++o), [e.name]),
            [n, s] = (0, r.useControlledState)(e.value, e.defaultValue, e.onChange),
            [c, l] = (0, a.useState)(null);
        return {
            name: t,
            selectedValue: n,
            setSelectedValue: t => {
                !e.isReadOnly && !e.isDisabled && s(t)
            },
            lastFocusedValue: c,
            setLastFocusedValue: l,
            isDisabled: e.isDisabled || !1,
            isReadOnly: e.isReadOnly || !1,
            isRequired: e.isRequired || !1,
            validationState: e.validationState || null,
            isInvalid: e.isInvalid || "invalid" === e.validationState
        }
    }
}