function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObjectIcon: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        s = n("331595");
    let a = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: a = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...l
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M10.41 3.59 11.6 2.4a2 2 0 0 1 2.82 0l1.3 1.3a1 1 0 0 0 .7.29h4.18a1.41 1.41 0 0 1 1 2.41L14.4 13.6a1.41 1.41 0 0 1-2.41-1V8.4l-3.11 3.12a2 2 0 0 0-.53 1.87L9.9 20H15a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h4.86L6.4 13.86a4 4 0 0 1 1.06-3.75L10.8 6.8l-.38-.38a2 2 0 0 1 0-2.82Z",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M16.99 12.43c-.21.2-.2.55.06.7a3 3 0 0 0 4.08-4.08c-.15-.26-.5-.27-.7-.06l-3.44 3.44Z",
                className: o
            })]
        })
    }
}