function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        MinusIcon: function() {
            return i
        }
    });
    var n = l("37983");
    l("884691");
    var r = l("669491"),
        s = l("82169");
    let i = e => {
        let {
            width: t = 24,
            height: l = 24,
            color: i = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
            ...o
        } = e;
        return (0, n.jsx)("svg", {
            ...(0, s.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, n.jsx)("path", {
                fill: "string" == typeof i ? i : i.css,
                fillRule: "evenodd",
                d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
                clipRule: "evenodd",
                className: a
            })
        })
    }
}