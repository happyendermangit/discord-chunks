function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("325767");

    function s(e) {
        let {
            width: t = 18,
            height: n = 15,
            color: s = "currentColor",
            foreground: a,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, r.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 18 15",
            children: (0, i.jsx)("path", {
                fill: s,
                className: a,
                d: "M11.7943 9.86263L17.9025 7.66483C18.0325 7.55494 18.0325 7.44507 17.9025 7.44507L11.7943 5.13737L9.06497 0.0824176C9.06497 -0.0274725 8.93499 -0.0274725 8.80502 0.0824176L6.20573 5.13737H6.0758L0.0974733 7.44507C-0.0324911 7.44507 -0.0324911 7.55494 0.0974733 7.66483L6.0758 9.86263H6.20573L8.80502 14.9176C8.93499 15.0275 9.06497 15.0275 9.06497 14.9176L11.7943 9.86263Z"
            })
        })
    }
}