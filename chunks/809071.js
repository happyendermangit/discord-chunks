function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        updateSubscriptionInvoicePreview: function() {
            return E
        },
        useSubscriptionInvoicePreview: function() {
            return R
        },
        useGetSubscriptionInvoice: function() {
            return I
        },
        getItemUnitPriceWithDiscount: function() {
            return L
        }
    }), r("222007");
    var n = r("884691"),
        i = r("446674"),
        l = r("872717"),
        u = r("448993"),
        s = r("195358"),
        a = r("521012"),
        f = r("719923"),
        o = r("49111");
    async function _(e) {
        let {
            items: t,
            paymentSourceId: r,
            trialId: n,
            code: i,
            applyEntitlements: a = !1,
            currency: _,
            renewal: E,
            metadata: c
        } = e;
        t = (0, f.coerceExistingItemsToNewItemInterval)(t);
        let d = {
            items: t.map(e => {
                let {
                    planId: t,
                    ...r
                } = e;
                return {
                    ...r,
                    plan_id: t
                }
            }),
            payment_source_id: r,
            trial_id: n,
            code: i,
            apply_entitlements: a,
            currency: _,
            renewal: E,
            metadata: c
        };
        try {
            let e = await l.default.post({
                url: o.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                body: d,
                oldFormErrors: !0
            });
            return s.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new u.BillingError(e)
        }
    }
    async function E(e) {
        let {
            subscriptionId: t,
            items: r,
            paymentSourceId: n,
            renewal: i,
            currency: a,
            applyEntitlements: _ = !1,
            analyticsLocations: E,
            analyticsLocation: c,
            userDiscountOfferId: d
        } = e;
        null != r && (r = (0, f.coerceExistingItemsToNewItemInterval)(r));
        let R = {
            items: null == r ? void 0 : r.map(e => {
                let {
                    planId: t,
                    ...r
                } = e;
                return {
                    ...r,
                    plan_id: t
                }
            }),
            payment_source_id: n,
            renewal: i,
            apply_entitlements: _,
            currency: a,
            user_discount_offer_id: d
        };
        try {
            let e = await l.default.patch({
                url: o.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: {
                    location: c,
                    location_stack: E
                },
                body: R,
                oldFormErrors: !0
            });
            return s.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new u.BillingError(e)
        }
    }
    async function c(e) {
        let {
            subscriptionId: t,
            preventFetch: r
        } = e;
        if (r) return null;
        let n = await l.default.get({
            url: o.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
            oldFormErrors: !0
        });
        return s.default.createInvoiceFromServer(n.body)
    }

    function d(e, t) {
        let {
            preventFetch: r = !1
        } = e, [l, u] = (0, n.useState)(null), [s, f] = (0, n.useState)(null), o = (0, i.useStateFromStores)([a.default], () => a.default.getSubscriptions());
        return (0, n.useEffect)(() => {
            let e = !1;
            async function n() {
                try {
                    f(null), u(null);
                    let r = await t();
                    !e && u(r)
                } catch (t) {
                    !e && f(t)
                }
            }
            return !r && n(), () => {
                e = !0
            }
        }, [r, t, o]), [l, s]
    }

    function R(e) {
        if ("subscriptionId" in e && null == e.subscriptionId) {
            let {
                subscriptionId: t,
                ...r
            } = e;
            e = r
        }
        let t = (0, n.useCallback)(() => "subscriptionId" in e ? E(e) : "items" in e ? _(e) : null, [JSON.stringify(e)]);
        return d(e, t)
    }

    function I(e) {
        let t = (0, n.useCallback)(() => c(e), [JSON.stringify(e)]);
        return d(e, t)
    }

    function L(e) {
        let t = e.subscriptionPlanPrice;
        return e.discounts.forEach(r => {
            let n = r.amount / e.quantity;
            t -= n
        }), t
    }
}