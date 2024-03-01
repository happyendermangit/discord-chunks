function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("149279"),
        u = n("713815");

    function d(e) {
        let {
            onClick: t,
            children: n,
            tooltip: a,
            dangerous: d = !1,
            className: c,
            "aria-label": f
        } = e;
        return (0, l.jsx)(r.Tooltip, {
            text: a,
            hideOnClick: !0,
            children: e => {
                let {
                    onMouseEnter: r,
                    onMouseLeave: m,
                    onClick: p
                } = e;
                return (0, l.jsx)(o.Button, {
                    onMouseEnter: r,
                    onMouseLeave: m,
                    onClick: e => {
                        e.stopPropagation(), null == p || p(), t(e)
                    },
                    dangerous: d,
                    "aria-label": null != f ? f : a,
                    className: c,
                    children: i.Children.map(n, e => i.isValidElement(e) ? i.cloneElement(e, {
                        className: s(e.props.className, u.actionBarIcon)
                    }) : e)
                })
            }
        })
    }
}