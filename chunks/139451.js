function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        FolderIcon: function() {
            return r
        }
    });
    var n = t("37983");
    t("884691");
    var s = t("669491"),
        a = t("82169");
    let r = e => {
        let {
            width: l = 24,
            height: t = 24,
            color: r = s.default.colors.INTERACTIVE_NORMAL,
            colorClass: i = "",
            ...c
        } = e;
        return (0, n.jsx)("svg", {
            ...(0, a.default)(c),
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: t,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, n.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M2 5a3 3 0 0 1 3-3h3.93a2 2 0 0 1 1.66.9L12 5h7a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z",
                className: i
            })
        })
    }
}