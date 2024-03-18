function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return I
        }
    }), s("222007");
    var i = s("37983"),
        r = s("884691"),
        a = s("146606"),
        l = s("446674"),
        o = s("206230"),
        n = s("427459"),
        u = s("651971"),
        d = s("903921"),
        c = s("49111"),
        E = s("782340"),
        _ = s("782050");
    let T = [c.BoostedGuildTiers.NONE, c.BoostedGuildTiers.TIER_1, c.BoostedGuildTiers.TIER_2, c.BoostedGuildTiers.TIER_3];

    function I(e) {
        let {
            guild: t
        } = e, s = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), [I, N] = r.useState(!1), [f, R] = r.useState(0), g = r.useRef(null), m = Math.min(c.BoostedGuildTiers.TIER_3, t.premiumTier + 1), S = c.AppliedGuildBoostsRequiredForBoostedGuildTier[t.premiumTier], M = c.AppliedGuildBoostsRequiredForBoostedGuildTier[m], G = (t.premiumSubscriberCount - S) / (M - S), h = d.TierMarkerPositions[t.premiumTier], O = d.TierMarkerPositions[m], p = t.premiumTier === c.BoostedGuildTiers.TIER_3, C = I || s, {
            progressBarFillWidthFactor: A,
            isProgressBarAnimationComplete: B,
            setShouldFireConfetti: x,
            shouldFireConfetti: v,
            tierMarkerAnimationPosition: P
        } = function(e) {
            let {
                fillFactor: t,
                guildBoostCount: s,
                premiumTier: i,
                isRevealed: l,
                useReducedMotion: o
            } = e, [n, u] = r.useState(o ? i : -1), [E, _] = r.useState(0 === s), [T, I] = r.useState(!1), N = r.useRef(!0), {
                widthFactor: f
            } = (0, a.useSpring)({
                from: {
                    widthFactor: 0
                },
                to: {
                    widthFactor: l ? t : 0
                },
                config: {
                    tension: 15,
                    friction: 7,
                    clamp: !0
                },
                immediate: o,
                onChange: function(e) {
                    let {
                        widthFactor: t
                    } = e;
                    for (let [e, s] of Object.entries(d.TierMarkerPositions).reverse())
                        if (t >= s - .02727272727272727) {
                            u(Number(e));
                            break
                        }
                },
                onStart: () => {
                    _(!1)
                },
                onRest: () => {
                    _(!0), i === c.BoostedGuildTiers.TIER_3 && (I(!0), window.setTimeout(() => {
                        N.current && I(!1)
                    }, 200))
                }
            });
            return r.useEffect(() => () => {
                N.current = !1
            }, []), {
                isProgressBarAnimationComplete: E,
                progressBarFillWidthFactor: f,
                setShouldFireConfetti: I,
                shouldFireConfetti: T,
                tierMarkerAnimationPosition: n
            }
        }({
            fillFactor: p ? 1 : G * (O - h) + h,
            isRevealed: C,
            useReducedMotion: s,
            premiumTier: t.premiumTier,
            guildBoostCount: t.premiumSubscriberCount
        });
        return r.useEffect(() => {
            let e = window.setTimeout(() => {
                N(!0)
            }, 250);
            return () => {
                window.clearTimeout(e)
            }
        }, []), (0, i.jsxs)("div", {
            className: _.progressBar,
            role: "progressbar",
            "aria-valuenow": t.premiumSubscriberCount,
            "aria-valuetext": t.premiumTier === c.BoostedGuildTiers.NONE ? E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({
                numSubscriptionsApplied: t.premiumSubscriberCount
            }) : E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
                numSubscriptionsApplied: t.premiumSubscriberCount,
                tierName: (0, n.getTierName)(t.premiumTier, {
                    useLevels: !1
                })
            }),
            children: [(0, i.jsxs)("div", {
                className: _.progressBarScrubber,
                children: [(0, i.jsx)(a.animated.div, {
                    className: _.progressBarFill,
                    style: {
                        width: A.to({
                            range: [0, 1],
                            output: [0, 100]
                        }).to(e => "".concat(e, "%"))
                    }
                }), (0, i.jsx)("div", {
                    className: _.progressBarTrack
                })]
            }), T.map(e => (0, i.jsx)(d.default, {
                confettiTriggerRef: g,
                guild: t,
                isProgressBarAnimationComplete: B,
                setConfettiCount: R,
                setShouldFireConfetti: x,
                tier: e,
                tierMarkerAnimationPosition: P,
                children: (0, n.getTierName)(e)
            }, e)), (0, i.jsx)(u.default, {
                confettiCount: f,
                confettiTriggerRef: g,
                isFiring: v
            })]
        })
    }
}