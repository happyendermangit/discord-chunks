function(t, e, l) {
    "use strict";
    l.r(e), l.d(e, {
        addAppliedGuildBoosts: function() {
            return S
        }
    }), l("424973"), l("462568"), l("222007");
    var n = l("37983");
    l("884691");
    var r = l("77078"),
        a = l("850068"),
        s = l("583367"),
        o = l("775433"),
        i = l("697218"),
        u = l("625634"),
        d = l("10514"),
        c = l("599110"),
        f = l("427459"),
        _ = l("163732"),
        p = l("49111");
    async function S(t) {
        let {
            analyticsLocations: e,
            analyticsLocation: S,
            analyticsSourceLocation: L,
            numberOfBoostsToAdd: C,
            onClose: h,
            closeLayer: y,
            onSubscriptionConfirmation: E,
            guild: m,
            handleSubscribeModalClose: O,
            disablePremiumUpsell: A,
            inPopout: T,
            applicationId: I
        } = t, g = T ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, U = i.default.getCurrentUser();
        if (null == U) return;
        if (!U.verified) {
            (0, r.openModalLazy)(async () => {
                let {
                    default: t
                } = await l.el("899917").then(l.bind(l, "899917"));
                return e => {
                    let {
                        onClose: l,
                        ...r
                    } = e;
                    return (0, n.jsx)(t, {
                        ...r,
                        onClose: l
                    })
                }
            }, {
                contextKey: g
            });
            return
        }
        let M = [];
        !d.default.isLoadedForPremiumSKUs() && M.push((0, o.fetchPremiumSubscriptionPlans)()), !u.default.hasFetched && (M.push(a.fetchSubscriptions()), M.push((0, s.fetchGuildBoostSlots)())), M.length > 0 && await Promise.allSettled(M);
        let P = (0, f.getAvailableGuildBoostSlots)(u.default.boostSlots),
            w = P.length,
            B = t => {
                null == h || h(), null == O || O(t)
            };
        if (w > 0 && (null == C || w >= C)) {
            let t;
            1 === w ? t = P.slice(0, 1) : null != C && (t = P.slice(0, C));
            let e = await (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await l.el("247760").then(l.bind(l, "247760"));
                return l => {
                    let {
                        onClose: r,
                        ...a
                    } = l;
                    return (0, n.jsx)(e, {
                        ...a,
                        onClose: t => {
                            r(), B(t)
                        },
                        selectedGuild: m,
                        locationSection: p.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                        guildBoostSlots: t
                    })
                }
            }, {
                onCloseRequest: () => {
                    null != e && (0, r.closeModal)(e), B(!1)
                },
                contextKey: g
            })
        } else(0, _.default)({
            analyticsLocations: e,
            analyticsLocation: S,
            analyticsSourceLocation: L,
            guildId: m.id,
            closeLayer: () => {
                null == h || h(), null == y || y(), c.default.track(p.AnalyticEvents.MODAL_DISMISSED, {
                    type: p.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                    location_section: S.section
                })
            },
            totalNumberOfSlotsToAssign: null != C ? C : 1,
            onCloseModal: B,
            disablePremiumUpsell: A,
            onSubscriptionConfirmation: E,
            inPopout: T,
            applicationId: I
        })
    }
}