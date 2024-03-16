function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("812204"),
        d = n("685665"),
        c = n("154889"),
        f = n("917247"),
        p = n("956597"),
        m = n("42203"),
        h = n("18494"),
        x = n("791106"),
        E = n("216422"),
        y = n("599110"),
        g = n("49111"),
        S = n("646718"),
        C = n("782340"),
        I = n("936369");

    function T() {
        (0, o.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("532210").then(n.bind(n, "532210"));
            return t => (0, i.jsx)(e, {
                channel: null,
                ...t
            })
        })
    }

    function _(e) {
        var t;
        let {
            className: n,
            iconOnly: a,
            remaining: _
        } = e, v = (0, r.useStateFromStores)([h.default, m.default], () => {
            let e = m.default.getChannel(h.default.getChannelId());
            return (null == e ? void 0 : e.isPrivate()) ? g.AnalyticsPages.DM_CHANNEL : g.AnalyticsPages.GUILD_CHANNEL
        }), {
            analyticsLocations: N
        } = (0, d.default)(u.default.PREMIUM_UPSELL), A = (0, c.usePremiumDiscountOffer)(), O = (0, f.usePremiumTrialOffer)(), R = (0, c.discountOfferHasTier)(A, S.PremiumSubscriptionSKUs.TIER_2), M = (null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.PremiumSubscriptionSKUs.TIER_2;
        return (l.useEffect(() => {
            y.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: {
                    location_page: v,
                    location_section: g.AnalyticsSections.CHANNEL_TEXT_AREA
                },
                location_stack: N
            })
        }, [v, N]), (M || R) && _ < 0) ? (0, i.jsx)(p.default, {
            type: S.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
            subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
            context: _,
            discountOffer: A,
            trialOffer: O,
            children: C.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                onLearnMore: T
            })
        }) : a ? (0, i.jsx)(o.Clickable, {
            className: I.iconOnly,
            onClick: () => T(),
            children: (0, i.jsx)(o.Tooltip, {
                text: C.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
                position: "top",
                children: e => (0, i.jsx)(E.default, {
                    className: I.premium,
                    ...e
                })
            })
        }) : (0, i.jsxs)("div", {
            className: s(I.root, n),
            children: [(0, i.jsx)(E.default, {
                className: I.premium,
                color: x.GradientCssUrls.PREMIUM_TIER_2
            }), (0, i.jsx)(o.Text, {
                className: I.text,
                variant: "text-sm/normal",
                children: C.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                    onLearnMore: T
                })
            })]
        })
    }
}