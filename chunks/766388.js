function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        BoostTier2SimpleIcon: function() {
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
                d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
                className: a
            })
        })
    }
}