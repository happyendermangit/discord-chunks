function(t, e, l) {
    "use strict";
    l.r(e), l.d(e, {
        default: function() {
            return a
        }
    });
    var n = l("37983");
    l("884691");
    var r = l("75196");

    function a(t) {
        let {
            width: e = 24,
            height: l = 24,
            color: a = "currentColor",
            foreground: s,
            ...o
        } = t;
        return (0, n.jsxs)("svg", {
            ...(0, r.default)(o),
            width: e,
            height: l,
            viewBox: "0 0 8 12",
            children: [(0, n.jsx)("path", {
                d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                fill: a,
                className: s
            }), (0, n.jsx)("path", {
                d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                fill: a,
                className: s
            })]
        })
    }
}