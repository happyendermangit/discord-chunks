function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LocationIcon: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var a = n("669491"),
        s = n("82169");
    let r = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: r = a.default.colors.INTERACTIVE_NORMAL,
            colorClass: u = "",
            ...i
        } = e;
        return (0, l.jsx)("svg", {
            ...(0, s.default)(i),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                fillRule: "evenodd",
                d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                clipRule: "evenodd",
                className: u
            })
        })
    }
}