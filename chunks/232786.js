function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("235855"),
        o = n("77078"),
        u = n("997289"),
        d = n("685665"),
        c = n("649844"),
        f = n("552917"),
        p = n("843647"),
        m = n("791106"),
        h = n("945330"),
        x = n("216422"),
        E = n("599110"),
        y = n("719923"),
        g = n("49111"),
        S = n("646718"),
        C = n("782340"),
        I = n("230537"),
        T = function(e) {
            let {
                bodyCopy: t = C.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_BODY,
                className: n,
                onDismiss: a,
                onCtaClick: T
            } = e, {
                location: _
            } = (0, u.useAnalyticsContext)(), {
                analyticsLocations: v
            } = (0, d.default)(), {
                isLoading: N,
                suggestedPremiumType: A
            } = (0, p.default)({
                autoTrackExposure: !0,
                experiment: f.default,
                location: S.PremiumUpsellTypes.EMOJI_PICKER_SEARCH
            }), O = l.useRef(!1), M = l.useCallback(() => {
                (0, c.default)({
                    subscriptionTier: y.default.getSkuIdForPremiumType(A),
                    analyticsLocations: v,
                    analyticsObject: {
                        ..._,
                        object: g.AnalyticsObjects.BUTTON_CTA,
                        objectType: g.AnalyticsObjectTypes.TIER_2
                    }
                }), null == T || T()
            }, [v, _, T, A]), k = A === S.PremiumTypes.TIER_0;
            return (0, i.jsx)("div", {
                className: s(I.wrapper, n),
                children: N ? (0, i.jsx)(o.Spinner, {
                    type: o.SpinnerTypes.PULSING_ELLIPSIS
                }) : (0, i.jsx)(r.default, {
                    onChange: e => {
                        e && !O.current && (E.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: S.PremiumUpsellTypes.EMOJI_PICKER_SEARCH,
                            location: _,
                            location_stack: v,
                            sku_id: y.default.getSkuIdForPremiumType(A)
                        }), O.current = !0)
                    },
                    children: (0, i.jsxs)("div", {
                        className: I.upsell,
                        children: [(0, i.jsx)(x.default, {
                            color: k ? m.GradientCssUrls.PREMIUM_TIER_0 : m.GradientCssUrls.PREMIUM_TIER_2,
                            className: I.premiumIcon
                        }), (0, i.jsx)(o.Text, {
                            color: "interactive-normal",
                            className: I.body,
                            variant: "text-sm/normal",
                            children: k ? C.default.Messages.EMOJI_PICKER_PREMIUM_TIER_0_UPSELL_BODY.format({
                                planName: (0, y.getTierDisplayName)(S.SubscriptionPlans.PREMIUM_MONTH_TIER_0)
                            }) : t
                        }), (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.LINK,
                            onClick: M,
                            children: k ? C.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : C.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA
                        }), null != a && (0, i.jsx)(o.Button, {
                            onClick: a,
                            className: I.dismissButton,
                            look: o.Button.Looks.BLANK,
                            size: o.Button.Sizes.ICON,
                            children: (0, i.jsx)(h.default, {
                                className: I.dismissIcon
                            })
                        })]
                    })
                })
            })
        }
}