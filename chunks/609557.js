function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTooltip: function() {
            return i
        }
    });
    var r = n("240849"),
        a = n("388032");

    function i(e, t) {
        let n = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: i
            } = (0, a.useHover)({
                onHoverStart: () => null == t ? void 0 : t.open(!0),
                onHoverEnd: () => null == t ? void 0 : t.close()
            });
        return {
            tooltipProps: (0, r.mergeProps)(n, i, {
                role: "tooltip"
            })
        }
    }
    n("884691")
}