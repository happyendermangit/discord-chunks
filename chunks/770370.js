function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("446674"),
        a = n("926994"),
        s = n("47319"),
        r = n("295999"),
        o = n("782340"),
        u = n("660603");

    function d(e) {
        let {
            color: t,
            look: n,
            platform: d
        } = e, c = (0, i.useStateFromStores)([s.default], () => s.default.getAccounts().some(e => e.type === d.type));
        return c ? null : (0, l.jsx)(r.default, {
            onClick: () => (0, a.default)(d.type, "Activity Action"),
            color: t,
            look: n,
            fullWidth: !0,
            children: (0, l.jsxs)("div", {
                className: u.flex,
                children: [(0, l.jsx)("img", {
                    alt: "",
                    className: u.platformIcon,
                    src: d.icon.whiteSVG
                }), o.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                    platform: d.name
                })]
            })
        }, "connect-platform-activity")
    }
}