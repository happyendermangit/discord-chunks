function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("484815");

    function o(e) {
        let {
            children: t,
            className: n,
            size: i = s.Button.Sizes.SMALL,
            ...o
        } = e;
        return (0, l.jsx)(s.Button, {
            ...o,
            size: i,
            className: a(r.button, n),
            children: t
        })
    }
}