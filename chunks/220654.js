function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        ClockWarningIcon: function() {
            return n
        }
    });
    var l = i("37983");
    i("884691");
    var r = i("669491"),
        a = i("82169");
    let n = t => {
        let {
            width: e = 24,
            height: i = 24,
            color: n = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: s = "",
            ...o
        } = t;
        return (0, l.jsxs)("svg", {
            ...(0, a.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: i,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                d: "M12 23c.08 0 .14-.08.11-.16a2.88 2.88 0 0 1 .29-2.31l2.2-3.85c.18-.3-.06-.73-.3-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.38c0 .13.05.26.15.35l2.56 2.56c.08.08.22.08.28-.02l.36-.64a3.06 3.06 0 0 1 5.3 0l.3.54c.22.38.78.31.86-.12A11 11 0 1 0 12 23Z",
                className: s
            }), (0, l.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                fillRule: "evenodd",
                d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                clipRule: "evenodd",
                className: s
            })]
        })
    }
}