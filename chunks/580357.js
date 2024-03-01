function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        default: function() {
            return x
        }
    }), t("222007");
    var C, s, L = t("37983"),
        a = t("884691"),
        r = t("414456"),
        d = t.n(r),
        i = t("77078"),
        n = t("449008"),
        u = t("931138"),
        c = t("928564"),
        f = t("888978"),
        o = t("390864"),
        h = t("486952"),
        E = t("49111"),
        R = t("782340"),
        p = t("816242");
    (s = C || (C = {}))[s.PARTNERED = 0] = "PARTNERED", s[s.STAFF = 1] = "STAFF", s[s.VERIFIED = 2] = "VERIFIED", s[s.VERIFIED_AND_PARTNERED = 3] = "VERIFIED_AND_PARTNERED", s[s.VERIFIED_AND_HUB = 4] = "VERIFIED_AND_HUB", s[s.HUB = 5] = "HUB", s[s.NONE = 6] = "NONE";
    class v extends a.PureComponent {
        renderBadge(e, l, t) {
            let {
                className: C,
                badgeStrokeColor: s,
                tooltipColor: a = i.Tooltip.Colors.BRAND,
                tooltipPosition: r,
                size: c = 16,
                badgeColor: f,
                iconClassName: o,
                flowerStarClassName: h
            } = this.props, E = function(e) {
                switch (e) {
                    case 2:
                        return R.default.Messages.GUILD_VERIFIED;
                    case 0:
                        return R.default.Messages.GUILD_PARTNERED;
                    case 3:
                        return R.default.Messages.GUILD_VERIFIED_AND_PARTNERED;
                    case 4:
                        return R.default.Messages.HUB_VERIFIED_DISCORD_HUB;
                    case 5:
                        return R.default.Messages.HUB_DISCORD_HUB;
                    case 1:
                        return R.default.Messages.INTERNAL_EMPLOYEE_ONLY;
                    case 6:
                        return null;
                    default:
                        (0, n.assertNever)(e)
                }
            }(e);
            return (0, L.jsx)(i.Tooltip, {
                color: a,
                position: r,
                text: E,
                children: a => 5 === e || 4 === e ? (0, L.jsx)("div", {
                    ...a,
                    className: d(t, C),
                    style: {
                        width: c,
                        height: c
                    },
                    children: (0, L.jsx)(l, {
                        className: d(p.icon, o)
                    })
                }) : (0, L.jsx)(u.default, {
                    ...a,
                    className: d(t, C),
                    flowerStarClassName: h,
                    color: f,
                    stroke: s,
                    size: c,
                    children: (0, L.jsx)(l, {
                        className: d(p.icon, o)
                    })
                })
            })
        }
        render() {
            let {
                guild: e
            } = this.props, l = new Set(e.features);
            return l.has(E.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, o.default, p.staff) : l.has(E.GuildFeatures.VERIFIED) && l.has(E.GuildFeatures.HUB) ? this.renderBadge(4, c.default, p.verifiedHub) : l.has(E.GuildFeatures.HUB) ? this.renderBadge(5, c.default, p.hub) : l.has(E.GuildFeatures.VERIFIED) && l.has(E.GuildFeatures.PARTNERED) ? this.renderBadge(3, h.default, p.verified) : l.has(E.GuildFeatures.VERIFIED) ? this.renderBadge(2, h.default, p.verified) : l.has(E.GuildFeatures.PARTNERED) ? this.renderBadge(0, f.default, p.partnered) : null
        }
    }
    var x = v
}