function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PencilIcon: function() {
            return u
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("669491"),
        r = n("82169");
    let u = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: u = i.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
            ...d
        } = e;
        return (0, l.jsx)("svg", {
            ...(0, r.default)(d),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z",
                className: a
            })
        })
    }
}