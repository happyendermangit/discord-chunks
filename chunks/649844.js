function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("748820"),
        s = n("77078"),
        l = n("112679"),
        a = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        E = n("646718");

    function v(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: v,
            onClose: C,
            onComplete: p,
            onSubscriptionConfirmation: _,
            analyticsLocations: I,
            analyticsObject: m,
            analyticsLocation: N,
            analyticsSourceLocation: T,
            isGift: g = !1,
            giftMessage: S,
            subscriptionTier: M,
            trialId: R,
            postSuccessGuild: x,
            openInvoiceId: A,
            applicationId: y,
            referralTrialOfferId: b,
            giftRecipient: w,
            returnRef: V,
            subscription: L,
            skipConfirm: P
        } = null != e ? e : {}, O = !1, j = (0, r.v4)(), U = u.default.getCurrentUser(), D = (0, f.isPremiumExactly)(U, E.PremiumTypes.TIER_2);
        (0, s.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
                let {
                    onClose: r,
                    ...s
                } = n;
                return (0, i.jsx)(e, {
                    ...s,
                    loadId: j,
                    subscriptionTier: M,
                    skuId: (0, f.castPremiumSubscriptionAsSkuId)(M),
                    isGift: g,
                    giftMessage: S,
                    giftRecipient: w,
                    initialPlanId: t,
                    followupSKUInfo: v,
                    onClose: (e, t) => {
                        r(), null == C || C(e), e && (null == _ || _(), !g && null != t && t === E.PremiumSubscriptionSKUs.TIER_2 && !D && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                    },
                    onComplete: () => {
                        O = !0, null == p || p(), !g && (0, o.setCanPlayWowMoment)(!0)
                    },
                    onSubscriptionConfirmation: _,
                    analyticsLocations: I,
                    analyticsObject: m,
                    analyticsLocation: N,
                    analyticsSourceLocation: T,
                    trialId: R,
                    postSuccessGuild: x,
                    planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: A,
                    applicationId: y,
                    referralTrialOfferId: b,
                    returnRef: V,
                    subscription: L,
                    skipConfirm: !!P
                })
            }
        }, {
            modalKey: "payment-modal",
            onCloseCallback: () => {
                !O && c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                    load_id: j,
                    payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                    location: null != N ? N : m,
                    source: T,
                    subscription_type: h.SubscriptionTypes.PREMIUM,
                    is_gift: g,
                    eligible_for_trial: null != R,
                    application_id: y,
                    location_stack: I
                }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == C || C(O), O && (null == _ || _())
            }
        })
    }
}