function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOutboundPromotions: function() {
            return _
        },
        useUnseenOutboundPromotions: function() {
            return E
        },
        useBogoPromotion: function() {
            return T
        }
    }), n("222007");
    var r = n("884691"),
        i = n("446674"),
        l = n("913144"),
        a = n("697218"),
        s = n("719923"),
        o = n("324878"),
        u = n("44678"),
        c = n("538620"),
        d = n("807345"),
        f = n("646718");

    function m() {
        let e = (0, i.useStateFromStoresArray)([d.default], () => d.default.outboundPromotions),
            t = (0, i.useStateFromStores)([d.default], () => d.default.consumedInboundPromotionId),
            n = r.useMemo(() => e.filter(e => {
                let {
                    id: n
                } = e;
                return n !== t
            }), [e, t]);
        return n
    }

    function _() {
        let e = (0, i.useStateFromStores)([d.default], () => d.default.lastFetchedActivePromotions),
            t = m(),
            n = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
            _ = (0, o.useHasActiveTrial)(),
            [E, T] = r.useState(!1),
            [I, C] = r.useState([]);
        r.useEffect(() => {
            null != e && l.default.wait(() => c.default.markOutboundPromotionsSeen())
        }, [e]);
        let p = r.useCallback(e => {
                C(t => t.some(t => {
                    let {
                        promotion: n
                    } = t;
                    return n.id === e.promotion.id
                }) ? t : [...t, e])
            }, []),
            S = (0, s.isPremiumExactly)(n, f.PremiumTypes.TIER_2);
        r.useEffect(() => {
            l.default.wait(() => {
                S && null == e && c.default.fetchActiveOutboundPromotions()
            })
        }, [e, S]), r.useEffect(() => {
            l.default.wait(() => {
                (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                    C(e), T(!0)
                }).catch(() => {
                    C([]), T(!0)
                })
            })
        }, []);
        let P = {};
        for (let {
                code: e,
                promotion: t
            }
            of I) P[t.id] = e;
        let R = new Set(t.map(e => {
                let {
                    id: t
                } = e;
                return t
            })),
            L = I.filter(e => {
                let {
                    promotion: t
                } = e;
                return !R.has(t.id)
            }),
            O = E && (!S || null != e);
        return {
            promotionsLoaded: O,
            activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!_ || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, P))),
            claimedEndedOutboundPromotions: L.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
            claimedOutboundPromotionCodeMap: P,
            addClaimedOutboundPromotionCode: p
        }
    }

    function E() {
        let e = (0, i.useStateFromStores)([d.default], () => d.default.lastSeenOutboundPromotionStartDate),
            t = (0, o.useHasActiveTrial)(),
            n = m(),
            l = r.useMemo(() => {
                if (null == e) return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
                let r = n.filter(t => {
                    let {
                        startDate: n
                    } = t;
                    return new Date(n) > new Date(e)
                });
                return t ? r.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : r
            }, [n, e, t]);
        return l.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
    }

    function T() {
        let e = (0, i.useStateFromStores)([d.default], () => d.default.bogoPromotion);
        return {
            promotion: e
        }
    }
}