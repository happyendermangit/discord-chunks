function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("760858"),
        a = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            foreground: s,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            viewBox: "0 0 24 24",
            ...(0, a.default)(o),
            width: t,
            height: n,
            children: (0, i.jsx)("path", {
                fill: r,
                className: s,
                d: "M5.13525 22.0002V1.99023H13.5743C15.1596 1.99023 16.4356 2.45423 17.4023 3.38224C18.3883 4.31024 18.8813 5.5379 18.8813 7.06523C18.8813 8.2639 18.6009 9.23057 18.0403 9.96524C17.4989 10.6806 16.7933 11.2026 15.9233 11.5312C18.4173 12.1306 19.6643 13.7739 19.6643 16.4612C19.6643 18.3366 19.1036 19.7286 17.9823 20.6372C16.8803 21.5459 15.3143 22.0002 13.2843 22.0002H5.13525ZM12.4143 10.2842C14.4829 10.2842 15.5173 9.3949 15.5173 7.61624C15.5173 6.70757 15.2466 6.0309 14.7053 5.58623C14.1639 5.14157 13.4003 4.91923 12.4143 4.91923H8.49925V10.2842H12.4143ZM12.8493 19.0712C13.8933 19.0712 14.7246 18.8392 15.3433 18.3752C15.9813 17.9112 16.3003 17.1669 16.3003 16.1422C16.3003 15.1176 15.9813 14.3732 15.3433 13.9092C14.7246 13.4452 13.8933 13.2132 12.8493 13.2132H8.49925V19.0712H12.8493Z"
            })
        })
    }, s.BoldIcon, void 0, {
        size: 24
    })
}