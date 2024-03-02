function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StickersPremiumUpsell: function() {
            return N
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("812204"),
        u = n("685665"),
        d = n("154889"),
        c = n("917247"),
        f = n("956597"),
        m = n("945330"),
        p = n("599110"),
        h = n("719923"),
        E = n("570759"),
        g = n("281072"),
        C = n("49111"),
        S = n("646718"),
        T = n("782340"),
        I = n("350327"),
        v = n("481927");
    let _ = () => (0, E.setShowPremiumUpsell)(!1),
        N = e => {
            var t, n, a;
            let {
                onLearnMore: E
            } = e, {
                analyticsLocations: N
            } = (0, u.default)(o.default.PREMIUM_UPSELL);
            i.useEffect(() => {
                p.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    location_section: C.AnalyticsSections.STICKER_PICKER_UPSELL,
                    type: S.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                    location_stack: N
                })
            }, [N]);
            let A = (0, c.usePremiumTrialOffer)(),
                x = (0, d.usePremiumDiscountOffer)(),
                y = (null == A ? void 0 : null === (t = A.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.PremiumSubscriptionSKUs.TIER_0,
                O = null != A || null != x;
            return (0, l.jsxs)("div", {
                className: s(I.upsellWrapper, {
                    [I.unifyTrialUpsell]: O
                }),
                children: [O ? (0, l.jsx)(f.default, {
                    trialOffer: A,
                    discountOffer: x,
                    onClose: _,
                    type: S.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                    subscriptionTier: null !== (a = null == A ? void 0 : null === (n = A.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : S.PremiumSubscriptionSKUs.TIER_2,
                    children: y ? T.default.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
                        planName: (0, h.getTierDisplayName)(S.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                        onClick: E
                    }) : T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                        onClick: E
                    })
                }) : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("img", {
                        className: I.upsellImage,
                        src: v,
                        alt: T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                    }), (0, l.jsx)(r.Text, {
                        className: I.upsellTitle,
                        color: "header-primary",
                        variant: "text-lg/semibold",
                        children: T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                    }), (0, l.jsx)(r.Text, {
                        className: I.upsellDescription,
                        variant: "text-md/normal",
                        children: T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                            onClick: E
                        })
                    })]
                }), !O && (0, l.jsx)(g.default, {
                    analyticsSection: C.AnalyticsSections.EXPRESSION_PICKER,
                    buttonText: O ? y ? T.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : T.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
                }), (0, l.jsx)(r.Clickable, {
                    className: I.upsellClose,
                    onClick: _,
                    children: (0, l.jsx)(m.default, {})
                })]
            })
        }
}