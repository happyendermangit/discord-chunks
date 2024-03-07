function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("627445"),
        s = n.n(a),
        r = n("446674"),
        o = n("913144"),
        u = n("775433"),
        d = n("685665"),
        c = n("598981"),
        f = n("426380"),
        m = n("697218"),
        p = n("10514"),
        h = n("991254"),
        E = n("129408"),
        g = n("713536"),
        S = n("449809"),
        C = n("49111"),
        T = n("782340"),
        v = e => {
            var t;
            let n, {
                    listing: a,
                    guildId: v,
                    groupListingId: I,
                    analyticsLocation: _,
                    showBenefitsFirst: N,
                    onComplete: A,
                    forcesTransitionToGuild: x
                } = e,
                y = null == a ? void 0 : a.subscription_plans[0],
                O = null == a ? void 0 : a.application_id,
                R = null == y ? void 0 : y.id,
                M = (null == a ? void 0 : a.published) === !0,
                L = null == y ? void 0 : y.sku_id,
                P = (0, r.useStateFromStores)([p.default], () => null != R ? p.default.get(R) : null),
                b = (0, h.useApplication)(O),
                j = (0, h.useSubscriptionListingsForGroup)(I, {
                    includeSoftDeleted: !0
                }),
                U = j.map(e => e.subscription_plans[0].id),
                {
                    analyticsLocations: D
                } = (0, d.default)(),
                {
                    activeSubscription: k,
                    activeEntitlement: w
                } = (0, h.useActiveSubscriptionListingForApplication)(O, v),
                F = (0, h.useEligibleApplicationSubscriptionGuilds)(O, v),
                G = (0, c.default)(),
                B = null != a && (0, E.isApplicationUserSubscription)(a.sku_flags),
                H = null != w && w.userId === (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                V = null == w || H,
                K = null == w || U.length > 1,
                W = null != v || F.length > 0,
                Y = B && H,
                z = null != P && null != b && V && K && (W || B) && !Y;
            V ? W ? Y && null != P && (n = T.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
                tierName: P.name
            })) : n = T.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = T.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, i.useEffect(() => {
                M && null != L && G && o.default.wait(() => {
                    (0, u.fetchSubscriptionPlansForSKU)(L)
                })
            }, [M, L, G]);
            let Z = i.useCallback(() => {
                s(null != a, "No subscription listing"), s(null != b, "No application"), s(null != y, "No subscription plan"), s(M, "Cannot purchase this unpublished plan");
                let e = () => {
                    (0, f.openApplicationSubscriptionPaymentModal)({
                        activeSubscription: k,
                        analyticsSubscriptionType: C.SubscriptionTypes.APPLICATION,
                        analyticsLocations: D,
                        analyticsLocation: _,
                        renderHeader: (e, t, n) => (0, l.jsx)(g.PurchaseHeader, {
                            step: n,
                            onClose: () => t(!1)
                        }),
                        initialPlanId: y.id,
                        skuId: y.sku_id,
                        guildId: v,
                        eligibleApplicationSubscriptionGuilds: F,
                        planGroup: U,
                        listing: a,
                        application: b,
                        showBenefitsFirst: N,
                        onComplete: A,
                        forcesTransitionToGuild: x
                    })
                };
                !W && B ? (0, S.confirmNoSharedServerSubscribeWarningModal)({
                    application: b,
                    onConfirm: e,
                    onCancel: () => {}
                }) : e()
            }, [M, a, y, U, b, v, W, B, D, _, k, N, F, A, x]);
            return {
                openModal: Z,
                canOpenModal: z,
                cannotOpenReason: n
            }
        }
}