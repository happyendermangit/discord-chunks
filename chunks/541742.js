function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MoreHorizontalIcon: function() {
            return a
        }
    });
    var r = n("37983");
    n("884691");
    var i = n("669491"),
        l = n("82169");
    let a = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: a = i.default.colors.INTERACTIVE_NORMAL,
            colorClass: u = "",
            ...s
        } = e;
        return (0, r.jsx)("svg", {
            ...(0, l.default)(s),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                fillRule: "evenodd",
                d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                clipRule: "evenodd",
                className: u
            })
        })
    }
}