function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("75196");

    function a(e) {
        let {
            width: t = 16,
            height: n = 16,
            color: a = "currentColor",
            foreground: s,
            ...r
        } = e;
        return (0, l.jsx)("svg", {
            ...(0, i.default)(r),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
                className: s,
                fill: a,
                d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z"
            })
        })
    }
}