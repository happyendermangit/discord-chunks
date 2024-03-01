function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        PaymentContextProvider: function() {
            return H
        },
        PaymentContext: function() {
            return G
        },
        usePaymentContext: function() {
            return D
        },
        useForwardedPaymentContext: function() {
            return B
        }
    }), n("222007"), n("702976");
    var u = n("37983"),
        i = n("884691"),
        r = n("41092"),
        l = n("775560"),
        a = n("748820"),
        o = n("446674"),
        s = n("191225"),
        c = n("837707"),
        S = n("619935"),
        E = n("991254"),
        d = n("467292"),
        f = n("622839"),
        _ = n("105097"),
        T = n("568734"),
        I = n("719923"),
        A = n("286235"),
        p = n("621746"),
        C = n("854381"),
        P = n("237288"),
        N = n("986681"),
        R = n("702924"),
        U = n("241006"),
        L = n("284797"),
        M = n("383802"),
        O = n("334702"),
        F = n("775325"),
        h = n("403293"),
        m = n("523591"),
        y = n("49111"),
        g = n("646718");
    let [G, D, B] = (0, _.default)();

    function H(t) {
        var e, n;
        let {
            loadId: _,
            activeSubscription: D,
            stepConfigs: B,
            breadcrumbs: H = [],
            skuIDs: K,
            isGift: b = !1,
            children: v,
            defaultPlanId: w,
            purchaseType: Y = y.PurchaseTypes.SUBSCRIPTION,
            applicationId: W,
            referralCode: V
        } = t, k = (0, h.default)(), Z = (0, S.useBlockedPaymentsConfig)(), x = (0, P.default)(), {
            paymentSources: J,
            hasPaymentSources: Q,
            paymentSourceId: X,
            setPaymentSourceId: j,
            hasFetchedPaymentSources: q
        } = (0, N.default)({
            isGift: b,
            activeSubscription: D
        }), z = i.useRef(Q), {
            hasFetchedSubscriptionPlans: $,
            priceOptions: tt,
            setCurrency: te,
            currencyLoading: tn,
            currencies: tu
        } = (0, C.default)({
            activeSubscription: D,
            skuIDs: K,
            paymentSourceId: X,
            isGift: b
        }), ti = (0, M.default)(), [tr, tl] = i.useState(!1), {
            step: ta,
            setStep: to,
            steps: ts,
            breadcrumbsData: tc
        } = (0, F.default)({
            stepConfigs: B,
            breadcrumbs: H
        }), [tS, tE] = (0, L.default)(ta), {
            paymentError: td,
            paymentAuthenticationState: tf
        } = (0, R.default)(), {
            purchaseError: t_,
            purchaseErrorBlockRef: tT,
            setPurchaseError: tI
        } = (0, U.default)(), tA = (0, l.useLazyValue)(() => {
            let t = null != _ ? _ : (0, a.v4)();
            return A.default.addBreadcrumb({
                message: "Checkout session ID: ".concat(t)
            }), {
                loadId: t,
                startTime: Date.now()
            }
        }), {
            selectedSkuId: tp,
            selectedPlan: tC,
            setSelectedSkuId: tP,
            setSelectedPlanId: tN
        } = (0, p.default)(), [tR, tU] = (0, o.useStateFromStoresArray)([d.default], () => [d.default.purchaseTokenAuthState, d.default.purchaseTokenHash]), [tL, tM] = (0, o.useStateFromStoresArray)([m.default], () => [m.default.browserCheckoutState, m.default.loadId]), [tO, tF] = i.useState(null), [th, tm] = i.useState(null), [ty, tg] = i.useState(null), [tG, tD] = i.useState(null), [tB, tH] = i.useState(null), [tK, tb] = i.useState(void 0), [tv, tw] = i.useState([]), tY = i.useMemo(() => null == tC || (0, I.isPremiumSubscriptionPlan)(tC.id), [tC]), tW = i.useRef(null != D ? D.planId : null);
        i.useEffect(() => {
            null == tW.current && null != D && (tW.current = D.planId)
        }, [D]);
        let {
            skusById: tV,
            hasFetchedSkus: tk,
            skuPricePreviewsById: tZ
        } = (0, O.default)({
            applicationId: null != W ? W : g.PREMIUM_SUBSCRIPTION_APPLICATION,
            skuIDs: K,
            currentPaymentSourceId: X,
            isGift: b
        }), tx = i.useMemo(() => {
            if (null == tp) return null;
            let t = tZ[tp];
            if (null == t) return null;
            let e = null != X ? X : f.NO_PAYMENT_SOURCE;
            return t[e]
        }, [tp, tZ, X]), tJ = (0, E.useApplication)(W), tQ = (0, T.hasFlag)(null !== (e = null == tJ ? void 0 : tJ.flags) && void 0 !== e ? e : 0, y.ApplicationFlags.EMBEDDED) && (0, T.hasFlag)(null !== (n = null == tJ ? void 0 : tJ.flags) && void 0 !== n ? n : 0, y.ApplicationFlags.EMBEDDED_IAP), tX = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(t => {
            let {
                applicationId: e
            } = t;
            return e === W
        })), tj = (0, c.default)(tX), tq = tV[null != tp ? tp : ""];
        return (0, u.jsx)(G.Provider, {
            value: {
                stripe: k,
                contextMetadata: tA,
                blockedPayments: Z,
                activeSubscription: D,
                hasFetchedSubscriptions: x,
                hasFetchedSubscriptionPlans: $,
                updatedSubscription: tG,
                setUpdatedSubscription: tD,
                subscriptionMetadataRequest: tB,
                setSubscriptionMetadataRequest: tH,
                hasFetchedPaymentSources: q,
                paymentSources: J,
                hasPaymentSources: Q,
                paymentSourceId: X,
                setPaymentSourceId: j,
                priceOptions: tt,
                setCurrency: te,
                currencyLoading: tn,
                currencies: tu,
                ...ti,
                hasAcceptedTerms: tr,
                setHasAcceptedTerms: tl,
                step: ta,
                setStep: to,
                steps: ts,
                stepConfigs: B,
                breadcrumbs: tc,
                purchaseState: tS,
                setPurchaseState: tE,
                paymentAuthenticationState: tf,
                paymentError: td,
                purchaseError: t_,
                setPurchaseError: tI,
                purchaseErrorBlockRef: tT,
                purchaseTokenAuthState: tR,
                purchaseTokenHash: tU,
                browserCheckoutState: tL,
                browserCheckoutStateLoadId: tM,
                bodyNode: tO,
                setBodyNode: tF,
                footerNode: th,
                setFooterNode: tm,
                modalOverlayNode: ty,
                setModalOverlayNode: tg,
                selectedSkuId: tp,
                selectedPlan: tC,
                setSelectedSkuId: tP,
                setSelectedPlanId: tN,
                readySlideId: tK,
                setReadySlideId: tb,
                defaultPlanId: w,
                isPremium: tY,
                productLine: null == tq ? void 0 : tq.productLine,
                startedPaymentFlowWithPaymentSourcesRef: z,
                startingPremiumSubscriptionPlanIdRef: tW,
                hasFetchedSkus: tk,
                skusById: tV,
                skuPricePreviewsById: tZ,
                selectedSkuPricePreview: tx,
                application: tJ,
                purchaseType: Y,
                isEmbeddedIAP: tQ,
                activitySessionId: tj,
                entitlementsGranted: tv,
                setEntitlementsGranted: tw,
                referralCode: V
            },
            children: (0, u.jsx)(r.Elements, {
                options: y.StripeElementsOptions,
                stripe: k,
                children: v
            })
        })
    }
}