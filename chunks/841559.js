function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("75196");

    function a(e) {
        let {
            width: t = 8,
            height: n = 13,
            color: a = "currentColor",
            foreground: s,
            ...r
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, l.default)(r),
            width: t,
            height: n,
            viewBox: "0 0 8 13",
            children: (0, i.jsx)("path", {
                className: null != s ? s : void 0,
                stroke: a,
                fill: "transparent",
                d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z"
            })
        })
    }
}