function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BicycleIcon: function() {
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
        return (0, i.jsx)("svg", {
            ...(0, s.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                fillRule: "evenodd",
                d: "M15 4a1 1 0 0 0-.95 1.32l.9 2.68h-4.6l-.92-2.36A1 1 0 0 0 8.5 5H5a1 1 0 0 0 0 2h2.82l.5 1.27a1 1 0 0 0-.2.26L6.7 11.16a4.5 4.5 0 1 0 1.76.95l.78-1.45 1.83 4.7a1 1 0 1 0 1.86-.72L11.13 10h4.48l.55 1.65a4.5 4.5 0 1 0 1.9-.63L16.4 6h1.86c.41 0 .75.34.75.75V7a1 1 0 1 0 2 0v-.25A2.75 2.75 0 0 0 18.25 4H15Zm-9.3 9-1.08 2.03a1 1 0 0 0 1.76.94l1.09-2.01A2.5 2.5 0 1 1 5.7 13Zm11.13.64.72 2.18a1 1 0 0 0 1.9-.64l-.73-2.17a2.5 2.5 0 1 1-1.9.63Z",
                clipRule: "evenodd",
                className: o
            })
        })
    }
}