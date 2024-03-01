function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("70102");
    var l, i, a = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        o = n("75196"),
        u = n("774889");
    (i = l || (l = {})).LEFT = "LEFT", i.RIGHT = "RIGHT", i.UP = "UP", i.DOWN = "DOWN", i.UP_LEFT = "UP_LEFT", i.DOWN_RIGHT = "DOWN_RIGHT";
    let d = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: l = "currentColor",
            direction: i,
            foreground: s,
            className: d,
            title: c,
            ...f
        } = e;
        return (0, a.jsxs)("svg", {
            ...(0, o.default)(f),
            width: t,
            height: n,
            className: r(d, function(e) {
                switch (e) {
                    case "LEFT":
                        return u.left;
                    case "RIGHT":
                        return u.right;
                    case "UP":
                        return null;
                    case "DOWN":
                        return u.down;
                    case "UP_LEFT":
                        return u.upLeft;
                    case "DOWN_RIGHT":
                        return u.downRight;
                    default:
                        throw Error("Invalid Direction ".concat(e))
                }
            }(i)),
            viewBox: "0 0 24 24",
            children: [null != c ? (0, a.jsx)("title", {
                children: c
            }) : null, (0, a.jsx)("polygon", {
                className: s,
                fill: l,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
            })]
        })
    };
    d.Directions = l;
    var c = d
}