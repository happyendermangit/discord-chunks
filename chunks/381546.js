function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("469563"),
        r = n("505088"),
        l = n("75196"),
        o = (0, s.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: s = "currentColor",
                foreground: r,
                backgroundColor: o,
                ...a
            } = e;
            return (0, i.jsxs)("svg", {
                ...(0, l.default)(a),
                width: t,
                height: n,
                viewBox: "0 0 14 14",
                children: [null != o ? (0, i.jsx)("circle", {
                    r: 5,
                    cx: 7,
                    cy: 7,
                    fill: o
                }) : null, (0, i.jsx)("path", {
                    fill: s,
                    className: r,
                    d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                })]
            })
        }, r.CircleXIcon, void 0, {
            size: 24
        })
}