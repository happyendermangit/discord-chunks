function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SpinnerTypes: function() {
            return r
        },
        Spinner: function() {
            return _
        }
    });
    var i, r, o = n("37983"),
        s = n("884691"),
        l = n("414456"),
        a = n.n(l),
        u = n("413197"),
        c = n("782340"),
        d = n("333365");
    (i = r || (r = {})).WANDERING_CUBES = "wanderingCubes", i.CHASING_DOTS = "chasingDots", i.PULSING_ELLIPSIS = "pulsingEllipsis", i.SPINNING_CIRCLE = "spinningCircle", i.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple", i.LOW_MOTION = "lowMotion";

    function _(e) {
        let {
            type: t = "wanderingCubes",
            animated: n = !0,
            className: i,
            itemClassName: r,
            "aria-label": l,
            ..._
        } = e, {
            reducedMotion: f
        } = s.useContext(u.AccessibilityPreferencesContext), S = f.enabled ? function(e) {
            switch (e) {
                case "wanderingCubes":
                case "chasingDots":
                    return "lowMotion";
                default:
                    return e
            }
        }(t) : t;
        if (l = null != l ? l : c.default.Messages.LOADING, "spinningCircle" === S || "spinningCircleSimple" === S) return (0, o.jsx)("div", {
            className: a(d.spinner, d[S], i, {
                [d.stopAnimation]: !n
            }),
            role: "img",
            "aria-label": l,
            ..._,
            children: (0, o.jsx)("div", {
                className: d.spinningCircleInner,
                children: (0, o.jsxs)("svg", {
                    className: d.circular,
                    viewBox: "25 25 50 50",
                    children: ["spinningCircle" === S && (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("circle", {
                            className: a(d.path, d.path3, r),
                            cx: "50",
                            cy: "50",
                            r: "20"
                        }), (0, o.jsx)("circle", {
                            className: a(d.path, d.path2, r),
                            cx: "50",
                            cy: "50",
                            r: "20"
                        })]
                    }), (0, o.jsx)("circle", {
                        className: a(d.path, r),
                        cx: "50",
                        cy: "50",
                        r: "20"
                    })]
                })
            })
        });
        let E = a(d.item, r);
        return (0, o.jsx)("span", {
            className: a(d.spinner, i, {
                [d.stopAnimation]: !n
            }),
            role: "img",
            "aria-label": l,
            ..._,
            children: (0, o.jsxs)("span", {
                className: a(d.inner, d[S]),
                children: [(0, o.jsx)("span", {
                    className: E
                }), (0, o.jsx)("span", {
                    className: E
                }), "pulsingEllipsis" === S || "lowMotion" === S ? (0, o.jsx)("span", {
                    className: E
                }) : null]
            })
        })
    }
    _.Type = r
}