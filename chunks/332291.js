function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("37983"),
        i = n("884691"),
        l = n("414456"),
        a = n.n(l),
        s = n("446674"),
        o = n("77078"),
        u = n("106435"),
        c = n("446488"),
        d = n("782340"),
        f = n("808559");

    function m() {
        let e = (0, s.useStateFromStores)([c.default], () => c.default.affinities.slice(0, 3)),
            t = e[0],
            {
                avatarSrc: n,
                eventHandlers: l
            } = (0, u.default)({
                user: t,
                size: o.AvatarSizes.SIZE_24,
                animateOnHover: !0
            }),
            m = e => null != e.globalName ? e.globalName : e.username,
            _ = i.useMemo(() => e.length >= 2 ? d.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
                username: m(e[0])
            }) : 1 === e.length ? d.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
                username: m(e[0])
            }) : "", [e]);
        return 0 === e.length ? null : (0, r.jsxs)("div", {
            className: f.container,
            children: [(0, r.jsx)(o.Avatar, {
                className: f.icon,
                src: n,
                "aria-label": t.username,
                size: o.AvatarSizes.SIZE_24,
                ...l
            }), (0, r.jsx)(o.Text, {
                className: a(f.text),
                variant: "text-sm/normal",
                color: "always-white",
                children: _
            })]
        })
    }
}