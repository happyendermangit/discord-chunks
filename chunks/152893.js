function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        StarIcon: function() {
            return a
        }
    });
    var r = s("37983");
    s("884691");
    var o = s("669491"),
        l = s("82169");
    let a = e => {
        let {
            width: t = 24,
            height: s = 24,
            color: a = o.default.colors.INTERACTIVE_NORMAL,
            colorClass: n = "",
            ...i
        } = e;
        return (0, r.jsx)("svg", {
            ...(0, l.default)(i),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: s,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M10.81 2.86c.38-1.15 2-1.15 2.38 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4L12 18.16l-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83Z",
                className: n
            })
        })
    }
}