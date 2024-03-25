function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("819855"),
        o = n("77078"),
        u = n("997289"),
        d = n("841098"),
        c = n("812204"),
        f = n("685665"),
        p = n("626301"),
        m = n("635956"),
        h = n("599110"),
        x = n("719923"),
        E = n("23106"),
        y = n("553372"),
        g = n("49111"),
        S = n("646718"),
        C = n("782340"),
        _ = n("163448"),
        T = n("187971");

    function I(e) {
        var t;
        let {
            onClose: a,
            closePopout: I,
            sound: v,
            channel: A
        } = e, N = (0, d.default)(), [R, O] = l.useState(!1), {
            location: M
        } = (0, u.useAnalyticsContext)(), k = l.useMemo(() => ({
            ...M,
            section: g.AnalyticsSections.SOUNDBOARD_SOUND_PICKER
        }), [M]), {
            analyticsLocations: L
        } = (0, f.default)(c.default.PREMIUM_UPSELL), {
            previewSound: P
        } = (0, E.default)(v, null !== (t = null == A ? void 0 : A.id) && void 0 !== t ? t : null), b = (0, y.PreviewButton)({
            sound: v,
            previewSound: P,
            tooltipPosition: "left"
        }), j = (0, r.isThemeLight)(N) ? n("602291") : n("609708");
        l.useEffect(() => {
            h.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: S.PremiumUpsellTypes.SOUND_PICKER_SOUND_CLICKED,
                is_external: !0,
                location: {
                    ...k,
                    object: g.AnalyticsObjects.SOUNDBOARD_SOUND
                },
                location_stack: L,
                sku_id: x.default.getSkuIdForPremiumType(S.PremiumTypes.TIER_2)
            })
        }, [L, k]);
        let U = l.useCallback(() => {
            h.default.track(g.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                location_section: g.AnalyticsSections.SOUNDBOARD_SOUND_PICKER_UPSELL
            }), (0, p.navigateToPremiumMarketingPage)(), I()
        }, [I]);
        return (0, i.jsxs)("div", {
            className: s(T.premiumPromo, _.container),
            children: [(0, i.jsx)(o.Clickable, {
                className: T.premiumPromoClose,
                onClick: a,
                children: C.default.Messages.CLOSE
            }), (0, i.jsx)("img", {
                "aria-hidden": !0,
                alt: "",
                className: s(T.premiumPromoImage, T.premiumPromoImageSmaller, _.image),
                src: j
            }), (0, i.jsx)(o.Heading, {
                variant: "heading-lg/normal",
                color: "header-primary",
                className: T.premiumPromoTitle,
                children: C.default.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: T.premiumPromoDescription,
                children: C.default.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
                    onClick: U
                })
            }), (0, i.jsxs)("div", {
                className: _.buttonContainer,
                children: [(0, i.jsx)("div", {
                    className: _.previewButtonContainer,
                    children: b
                }), (0, i.jsx)(m.default, {
                    subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
                    submitting: R,
                    premiumModalAnalyticsLocation: {
                        section: g.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
                        object: g.AnalyticsObjects.BUTTON_CTA
                    },
                    size: o.Button.Sizes.SMALL,
                    color: o.Button.Colors.GREEN,
                    onClick: () => {
                        O(!0)
                    },
                    onSubscribeModalClose: e => {
                        O(!1), e && a()
                    }
                })]
            })]
        })
    }
}