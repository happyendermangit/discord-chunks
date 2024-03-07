function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("759843"),
        a = n("446674"),
        s = n("819855"),
        r = n("77078"),
        o = n("841098"),
        u = n("812204"),
        d = n("685665"),
        c = n("428958"),
        f = n("393414"),
        m = n("305961"),
        p = n("191814"),
        h = n("945330"),
        E = n("256941"),
        g = n("270295"),
        S = n("49111"),
        C = n("724210"),
        T = n("782340"),
        v = n("560158");
    let I = () => {
        let e = (0, o.default)();
        return (0, s.isThemeLight)(e) ? n("602291") : n("609708")
    };

    function _(e) {
        let {
            onClose: t,
            guildId: n,
            emojiId: s
        } = e, o = I(), {
            analyticsLocations: _
        } = (0, d.default)(u.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
        (0, c.default)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
            properties: {
                location_stack: _,
                emoji_guild_id: n,
                emoji_id: null != s ? s : null
            }
        });
        let N = (0, a.useStateFromStores)([m.default], () => m.default.getGuild(n)),
            A = (0, a.useStateFromStores)([E.default], () => null != n && E.default.getUserSubscriptionRoles(n).size > 0),
            x = A ? T.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPGRADE_UPSELL_DESCRIPTION : T.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_PURCHASE_UPSELL_DESCRIPTION.format({
                serverName: null == N ? void 0 : N.name
            }),
            y = A ? T.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_UPGRADE_CTA : T.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_PURCHASE_CTA;
        return (0, l.jsxs)("div", {
            className: v.container,
            children: [(0, l.jsx)("div", {
                className: v.background
            }), (0, l.jsxs)("div", {
                className: v.content,
                children: [(0, l.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.ICON,
                    className: v.closeButton,
                    onClick: t,
                    children: (0, l.jsx)(h.default, {
                        "aria-label": T.default.Messages.CLOSE,
                        width: 16,
                        height: 16,
                        className: v.closeButtonIcon
                    })
                }), (0, l.jsx)("img", {
                    alt: "",
                    src: o,
                    className: v.upsellImage
                }), (0, l.jsx)(p.default, {
                    size: 22
                }), (0, l.jsx)(r.Heading, {
                    color: "header-primary",
                    variant: "heading-lg/extrabold",
                    className: v.header,
                    children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_TITLE
                }), (0, l.jsx)(p.default, {
                    size: 4
                }), (0, l.jsx)(r.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: v.description,
                    children: x
                }), (0, l.jsx)(p.default, {
                    size: 24
                }), (0, l.jsx)(g.default, {
                    onClick: () => {
                        (0, f.transitionTo)(S.Routes.CHANNEL(n, C.StaticChannelRoute.ROLE_SUBSCRIPTIONS), void 0, void 0, _)
                    },
                    children: y
                })]
            })]
        })
    }
}