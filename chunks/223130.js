function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StaffBadgeIcon: function() {
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
                d: "M2 20.59V19.4a1 1 0 0 1 .3-.7l2.4-2.42a1 1 0 0 1 .71-.29H6l9-9-.85-.85a1 1 0 0 1-.23-.34l-1.49-3.73a.5.5 0 0 1 .65-.65l3.73 1.5a1 1 0 0 1 .34.22l.64.64a1 1 0 0 1 1.42 0l1 1a1 1 0 0 1 0 1.42l1.58 1.58a1 1 0 0 1 0 1.42l-1.58 1.58a1 1 0 0 1-1.42 0L17 9l-9 9v.59a1 1 0 0 1-.3.7l-2.4 2.42a1 1 0 0 1-.71.29H3.4a1 1 0 0 1-.7-.3l-.42-.4a1 1 0 0 1-.29-.71Z",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M8.23 10.23c.2.2.51.2.7 0l1.3-1.3a.5.5 0 0 0 0-.7L6.5 4.5l.3-.3a1 1 0 0 0 0-1.4l-.5-.5c-.2-.2-.45-.3-.7-.22-.43.14-1.17.49-2.1 1.42a5.37 5.37 0 0 0-1.42 2.1c-.08.25.03.5.21.7l.5.5a1 1 0 0 0 1.42 0l.29-.3 3.73 3.73ZM13.77 15.06a.5.5 0 0 0 0 .7l1.73 1.74 1.44 2.4a1 1 0 0 0 .15.19l1.73 1.73c.1.1.26.1.36 0l2.64-2.64c.1-.1.1-.26 0-.36L20.1 17.1a1 1 0 0 0-.2-.15L17.5 15.5l-1.73-1.73a.5.5 0 0 0-.7 0l-1.3 1.3Z",
                className: o
            })]
        })
    }
}