function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        ImagesIcon: function() {
            return a
        }
    });
    var r = s("37983");
    s("884691");
    var o = s("669491"),
        l = s("82169");
    let a = e => {
        let {
            width: t = 24,
            height: s = 24,
            color: a = o.default.colors.INTERACTIVE_NORMAL,
            colorClass: n = "",
            ...i
        } = e;
        return (0, r.jsxs)("svg", {
            ...(0, l.default)(i),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: s,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M4 8v7.5a.5.5 0 0 1-.5.5H3a1 1 0 0 1-1-1V8a6 6 0 0 1 6-6h7a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H8a4 4 0 0 0-4 4Z",
                className: n
            }), (0, r.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                fillRule: "evenodd",
                d: "M6 9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm13.8 9.79L16.82 15a2 2 0 0 0-3.14 0l-2.09 2.65-.13-.16a1.5 1.5 0 0 0-2.36.05l-.95 1.26a.75.75 0 0 0 .6 1.2h10.46c.62 0 .97-.72.59-1.21ZM11.73 8.3c.57-.56 1.52-.01 1.33.77a.8.8 0 0 0 .55.96c.77.22.77 1.3 0 1.53a.8.8 0 0 0-.55.96c.19.77-.76 1.32-1.33.76a.8.8 0 0 0-1.1 0c-.58.56-1.53.01-1.33-.76a.8.8 0 0 0-.56-.96c-.77-.22-.77-1.31 0-1.53a.8.8 0 0 0 .56-.96c-.2-.78.75-1.33 1.32-.77.31.3.8.3 1.11 0Z",
                clipRule: "evenodd",
                className: n
            })]
        })
    }
}