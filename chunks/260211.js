function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("446674"),
        r = n("77078"),
        o = n("206230"),
        u = n("154889"),
        d = n("917247"),
        c = n("956597"),
        f = n("635956"),
        m = n("945330"),
        p = n("216422"),
        h = n("58608"),
        E = n("49111"),
        g = n("646718"),
        C = n("782340"),
        S = n("257833");

    function T(e) {
        var t, n;
        let {
            onDismiss: i
        } = e, T = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), I = C.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, v = (0, d.usePremiumTrialOffer)(), _ = (0, u.usePremiumDiscountOffer)(), N = (null == v ? void 0 : v.subscription_trial) != null, A = N || null != _, x = {
            object: E.AnalyticsObjects.BUTTON_CTA,
            section: E.AnalyticsSections.SUPER_REACTION_PICKER
        };
        return (0, l.jsxs)("div", {
            className: S.wrapper,
            children: [(0, l.jsx)(r.Clickable, {
                onClick: i,
                className: S.closeButton,
                "aria-label": C.default.Messages.DISMISS,
                children: (0, l.jsx)(m.default, {
                    width: 24,
                    height: 24
                })
            }), (0, l.jsxs)("div", {
                className: S.content,
                children: [(0, l.jsx)("div", {
                    className: S.contentFill,
                    children: (0, l.jsx)(h.default, {
                        className: a(S.banner, {
                            [S.hasTrialOffer]: A
                        }),
                        src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
                        loop: !0,
                        autoPlay: !T,
                        muted: !0,
                        controls: !0
                    })
                }), A ? (0, l.jsx)(c.default, {
                    type: g.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL,
                    subscriptionTier: null !== (n = null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : g.PremiumSubscriptionSKUs.TIER_2,
                    headingText: C.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
                    analyticsLocationObject: x,
                    discountOffer: _,
                    trialOffer: v,
                    children: I
                }) : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: S.header,
                        children: [(0, l.jsx)(p.default, {
                            className: S.nitroWheel,
                            width: 32,
                            height: 32
                        }), (0, l.jsx)(r.Heading, {
                            className: S.headerText,
                            variant: "heading-xl/bold",
                            children: C.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
                        })]
                    }), (0, l.jsx)(r.Text, {
                        className: S.subheaderText,
                        variant: "text-md/normal",
                        children: I
                    }), (0, l.jsx)("div", {
                        className: S.ctaActionWrapper,
                        children: (0, l.jsx)(f.default, {
                            subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                            buttonText: C.default.Messages.UNLOCK_WITH_NITRO
                        })
                    })]
                })]
            })]
        })
    }
}