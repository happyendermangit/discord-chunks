function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("446674"),
        a = n("292687"),
        s = n("471671"),
        r = n("2770"),
        o = n("45622"),
        u = n("563680"),
        d = n("981913"),
        c = n("782340"),
        f = l.default.connectStores([s.default, a.default], e => {
            let {
                node: t,
                guestWindow: n
            } = e;
            return {
                enabled: (0, u.isFullScreen)(t, null == n ? void 0 : n.document)
            }
        })(function(e) {
            let {
                enabled: t,
                ...n
            } = e, l = t ? c.default.Messages.EXIT_FULL_SCREEN : c.default.Messages.FULL_SCREEN, a = t ? o.default : r.default;
            return (0, i.jsx)(d.default, {
                label: l,
                iconComponent: a,
                ...n
            })
        })
}