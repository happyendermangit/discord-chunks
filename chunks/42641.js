function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        ArrowSmallLeftIcon: function() {
            return i
        }
    });
    var s = r("37983");
    r("884691");
    var n = r("669491"),
        l = r("82169");
    let i = e => {
        let {
            width: t = 24,
            height: r = 24,
            color: i = n.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
            ...o
        } = e;
        return (0, s.jsx)("svg", {
            ...(0, l.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: r,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, s.jsx)("path", {
                fill: "string" == typeof i ? i : i.css,
                d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
                className: a
            })
        })
    }
}