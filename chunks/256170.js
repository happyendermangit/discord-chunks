function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("469563"),
        r = n("384737"),
        o = n("549817"),
        u = (0, s.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: i = "currentColor",
                className: s,
                foreground: r,
                open: u = !1
            } = e;
            return (0, l.jsx)("svg", {
                className: a(o.arrow, s, {
                    [o.open]: u
                }),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    className: r,
                    fill: i,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                })
            })
        }, r.ChevronSmallDownIcon, void 0, {
            size: 24
        })
}