function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsIcon: function() {
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
                fillRule: "evenodd",
                d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
                clipRule: "evenodd",
                className: a
            })
        })
    }
}