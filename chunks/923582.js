function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("551305"),
        o = n("164424"),
        u = n("782340"),
        d = n("984990"),
        c = i.memo(function(e) {
            let {
                onClick: t,
                disabled: n = !1
            } = e;
            return (0, l.jsx)("div", {
                className: d.separator,
                children: (0, l.jsx)("div", {
                    className: d.buttonContainer,
                    children: (0, l.jsx)(r.default, {
                        className: d.button,
                        innerClassName: d.innerButton,
                        childClassName: s(d.buttonChild, {
                            [d.disabled]: n,
                            [d.activeButtonChild]: !n
                        }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        "aria-label": u.default.Messages.SEND_MESSAGE,
                        children: (0, l.jsx)(o.default, {
                            className: d.sendIcon
                        })
                    })
                })
            })
        })
}