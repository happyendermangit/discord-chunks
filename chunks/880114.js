function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("65597"),
        a = n("77078"),
        s = n("535013"),
        r = n("915639"),
        o = n("476263"),
        u = n("153769"),
        d = n("299039"),
        c = n("782340"),
        f = n("687941");

    function m(e) {
        let {
            userId: t,
            headingClassName: n,
            textClassName: m,
            guild: p,
            guildMember: h
        } = e, x = (0, l.useStateFromStores)([r.default], () => r.default.locale), E = null != p && null != h;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(a.Heading, {
                variant: "eyebrow",
                className: n,
                children: E ? c.default.Messages.USER_PROFILE_MEMBER_SINCE : c.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
            }), (0, i.jsxs)("div", {
                className: f.memberSinceContainer,
                children: [E && (0, i.jsx)(a.Tooltip, {
                    text: c.default.Messages.DISCORD_NAME,
                    children: e => (0, i.jsx)(u.default, {
                        ...e,
                        className: f.discordIcon
                    })
                }), (0, i.jsx)(a.Text, {
                    className: m,
                    variant: "text-sm/normal",
                    children: (0, s.getCreatedAtDate)(d.default.extractTimestamp(t), x)
                }), null != p && null != h && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: f.divider
                    }), (0, i.jsx)(a.Tooltip, {
                        text: p.name,
                        children: e => (0, i.jsx)(o.default, {
                            ...e,
                            guild: p,
                            size: o.default.Sizes.SMOL
                        })
                    }), (0, i.jsx)(a.Text, {
                        className: m,
                        variant: "text-sm/normal",
                        children: (0, s.getCreatedAtDate)(h.joinedAt, x)
                    })]
                })]
            })]
        })
    }
}