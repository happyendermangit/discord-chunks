function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceLowIcon: function() {
            return s
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("669491"),
        a = n("82169");
    let s = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: s = l.default.colors.INTERACTIVE_NORMAL,
            colorClass: r = "",
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, a.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z",
                className: r
            })
        })
    }
}