function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("176743"),
        a = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            strokeWidth: s = "2.5",
            foreground: o,
            ...l
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, a.default)(l),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            fill: "none",
            children: (0, i.jsx)("path", {
                className: o,
                stroke: r,
                strokeWidth: s,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.25892 16.5936C3.14073 14.7086 2.74913 12.4802 3.15765 10.3269C3.56618 8.17362 4.74672 6.24353 6.47761 4.89906C8.2085 3.55459 10.3707 2.88823 12.5581 3.02511C14.7455 3.16199 16.8077 4.0927 18.3575 5.64247C19.9073 7.19223 20.838 9.25445 20.9749 11.4419C21.1118 13.6293 20.4454 15.7915 19.101 17.5224C17.7565 19.2532 15.8264 20.4338 13.6731 20.8423C11.5198 21.2509 9.29146 20.8593 7.40646 19.7411L7.40648 19.741L4.29805 20.6291C4.16944 20.6659 4.03335 20.6676 3.90387 20.634C3.7744 20.6005 3.65625 20.5329 3.56167 20.4383C3.4671 20.3437 3.39953 20.2256 3.36598 20.0961C3.33243 19.9666 3.33412 19.8306 3.37086 19.7019L4.25898 16.5935L4.25892 16.5936Z"
            })
        })
    }, s.ChatIcon, void 0, {
        size: 24
    })
}