function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("605250"),
        a = n("871388"),
        s = n("295999"),
        r = n("49111"),
        o = n("782340");

    function u(e) {
        let {
            activity: t,
            user: n,
            look: u,
            color: d
        } = e;
        return (0, a.default)(t, r.ActivityFlags.INSTANCE) ? (0, l.jsx)(s.default, {
            look: u,
            color: d,
            onClick: function() {
                new(0, i.default)("UserActivityActions").log("notify", n.id, t)
            },
            fullWidth: !0,
            children: o.default.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME
        }, "notify") : null
    }
}