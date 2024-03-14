function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("145873"),
        o = n("548122");
    let l = Object.freeze({
            STANDARD: a.colorStandard,
            MUTED: a.colorMuted,
            ERROR: a.colorError,
            BRAND: a.colorBrand,
            LINK: a.colorLink,
            HEADER_PRIMARY: a.colorHeaderPrimary,
            HEADER_SECONDARY: a.colorHeaderSecondary,
            STATUS_YELLOW: a.colorStatusYellow,
            STATUS_GREEN: a.colorStatusGreen,
            STATUS_RED: a.colorStatusRed,
            INTERACTIVE_ACTIVE: a.colorInteractiveActive,
            INTERACTIVE_NORMAL: a.colorInteractiveNormal,
            ALWAYS_WHITE: a.colorWhite,
            CUSTOM: null
        }),
        u = Object.freeze({
            SIZE_10: o.size10,
            SIZE_12: o.size12,
            SIZE_14: o.size14,
            SIZE_16: o.size16,
            SIZE_20: o.size20,
            SIZE_24: o.size24,
            SIZE_32: o.size32
        }),
        d = e => {
            let {
                className: t,
                color: n = l.STANDARD,
                size: s = u.SIZE_14,
                tag: o = "div",
                selectable: d = !1,
                strong: c = !1,
                children: f,
                style: _,
                "aria-label": h,
                ...E
            } = e;
            return (0, i.jsx)(o, {
                "aria-label": h,
                className: r(n, s, t, {
                    [a.selectable]: d,
                    [a.strong]: c
                }),
                style: _,
                ...E,
                children: f
            })
        };
    d.Colors = l, d.Sizes = u;
    var c = d
}