function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PollsIcon: function() {
            return s
        }
    });
    var a = n("735250");
    n("470079");
    var r = n("692547"),
        i = n("331595");
    let s = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: s = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: l = "",
            ...o
        } = e;
        return (0, a.jsx)("svg", {
            ...(0, i.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
                className: l
            })
        })
    }
}