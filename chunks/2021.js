function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("37983"),
        a = n("884691"),
        i = n("90915"),
        r = n("266491");
    class l extends a.Component {
        render() {
            let {
                children: e,
                location: t,
                history: n,
                staticContext: l,
                match: o,
                ...u
            } = this.props, d = null, c = null;
            return a.Children.forEach(e, e => {
                if (null == d && a.isValidElement(e)) {
                    let {
                        component: s,
                        render: r,
                        ...o
                    } = e.props, u = o.path || o.from;
                    null != (d = null != u ? (0, i.matchPath)(t.pathname, {
                        ...o,
                        path: u
                    }) : null) && (o = {
                        ...o,
                        key: u,
                        location: t,
                        match: d,
                        history: n,
                        staticContext: l
                    }, null != s ? c = a.createElement(s, o) : null != r && (c = r(o)))
                }
            }), (0, s.jsx)(r.TransitionGroup, {
                ...u,
                children: c
            })
        }
    }
    var o = (0, i.withRouter)(l)
}