function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        ArrowSmallLeftIcon: function() {
            return i
        }
    });
    var r = s("37983");
    s("884691");
    var n = s("669491"),
        l = s("82169");
    let i = e => {
        let {
            width: t = 24,
            height: s = 24,
            color: i = n.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
            ...o
        } = e;
        return (0, r.jsx)("svg", {
            ...(0, l.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: s,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof i ? i : i.css,
                d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
                className: a
            })
        })
    }
}