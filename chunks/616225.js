function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("469563"),
        a = n("816607"),
        s = n("75196"),
        r = (0, i.replaceIcon)(function(e) {
            let {
                width: t = 16,
                height: n = 16,
                color: i = "currentColor",
                foreground: a,
                ...r
            } = e;
            return (0, l.jsx)("svg", {
                ...(0, s.default)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: i,
                    className: a,
                    d: "M11.8 14a6.1 6.1 0 0 0 0 6H3v-2c0-2.7 5.3-4 8-4h.8zm-.8-2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6 1c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-1 6.2l3-2.2-3-2.2v4.4z"
                })
            })
        }, a.UserPlayIcon, void 0, {
            size: 16
        })
}