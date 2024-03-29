function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TierMarkerPositions: function() {
            return A
        }
    }), n("411104");
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("718017"),
        o = n("399606"),
        l = n("481060"),
        u = n("607070"),
        d = n("906732"),
        _ = n("471885"),
        c = n("263704"),
        E = n("267642"),
        I = n("879892"),
        T = n("198466"),
        f = n("981631"),
        S = n("689938"),
        h = n("90952");
    let A = {
        [f.BoostedGuildTiers.NONE]: 0,
        [f.BoostedGuildTiers.TIER_1]: 1 / 3,
        [f.BoostedGuildTiers.TIER_2]: 2 / 3,
        [f.BoostedGuildTiers.TIER_3]: 1
    };
    t.default = function(e) {
        let {
            children: t,
            confettiTriggerRef: n,
            guild: r,
            isProgressBarAnimationComplete: m,
            setConfettiCount: N,
            setShouldFireConfetti: O,
            tier: p,
            tierMarkerAnimationPosition: R
        } = e, C = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), {
            analyticsLocations: g
        } = (0, d.default)(), L = f.AppliedGuildBoostsRequiredForBoostedGuildTier[p] - r.premiumSubscriberCount, D = p <= R || m, v = D && p <= r.premiumTier, M = D && p < r.premiumTier, y = D && p === r.premiumTier, {
            scaleFactor: P
        } = (0, a.useSpring)({
            from: {
                scaleFactor: 0
            },
            to: {
                scaleFactor: R >= p || m && R + 1 === p || m && -1 === R && p === f.BoostedGuildTiers.NONE ? 1 : 0
            },
            config: {
                tension: 360,
                friction: 12
            },
            immediate: C
        }), U = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(a.animated.div, {
                className: h.progressBarMarkerIndicator,
                style: {
                    transform: P.to(e => "translate(-50%, -50%) scale(".concat(e, ")"))
                }
            }), p !== f.BoostedGuildTiers.NONE && (0, i.jsx)(_.default, {
                tier: p,
                className: h.boostedTierIcon
            })]
        }), b = v ? "div" : l.Clickable, G = v ? {} : {
            onClick: function() {
                D && (0, I.addAppliedGuildBoosts)({
                    analyticsLocations: g,
                    analyticsLocation: {
                        page: f.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                        section: f.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: f.AnalyticsObjects.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: function(e) {
                            switch (e) {
                                case f.BoostedGuildTiers.TIER_3:
                                    return f.AnalyticsObjectTypes.TIER_3;
                                case f.BoostedGuildTiers.TIER_2:
                                    return f.AnalyticsObjectTypes.TIER_2;
                                case f.BoostedGuildTiers.TIER_1:
                                    return f.AnalyticsObjectTypes.TIER_1;
                                default:
                                    throw Error("Unsupported Boosting tier: ".concat(e))
                            }
                        }(p)
                    },
                    numberOfBoostsToAdd: L,
                    guild: r
                })
            }
        };
        return (0, i.jsx)(l.Tooltip, {
            text: v ? S.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({
                tierName: (0, E.getTierName)(p, {
                    useLevels: !1
                })
            }) : S.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
                numBoostsRequired: L,
                tierName: (0, E.getTierName)(p, {
                    useLevels: !1
                })
            }),
            shouldShow: p !== f.BoostedGuildTiers.NONE,
            children: e => (0, i.jsxs)(b, {
                className: s()(h.progressBarMarker, {
                    [h.progressBarMarkerUnlocked]: v,
                    [h.progressBarMarkerLocked]: !v,
                    [h.progressBarMarkerLower]: M,
                    [h.progressBarMarkerCurrent]: y
                }),
                style: {
                    left: "".concat(100 * A[p], "%")
                },
                ...e,
                ...G,
                children: [!v && (0, i.jsx)("div", {
                    className: h.boostedTierIconBackground
                }), v && p === f.BoostedGuildTiers.TIER_3 ? (0, i.jsx)(T.ProgressBarConfettiTrigger, {
                    confettiTriggerRef: n,
                    setConfettiCount: N,
                    setShouldFireConfetti: O,
                    children: U
                }) : U, (0, i.jsxs)(l.Text, {
                    className: h.progressBarMarkerLabel,
                    variant: "text-md/normal",
                    children: [v && p !== f.BoostedGuildTiers.NONE && (0, i.jsx)(c.default, {
                        className: h.progressBarMarkerUnlockedIcon
                    }), t]
                })]
            })
        })
    }
}