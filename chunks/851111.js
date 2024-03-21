function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("866227"),
        s = n.n(a),
        r = n("446674"),
        o = n("95410"),
        u = n("77078"),
        d = n("850068"),
        c = n("79112"),
        f = n("521012"),
        p = n("791106"),
        m = n("945330"),
        h = n("216422"),
        x = n("719923"),
        E = n("788506"),
        y = n("49111"),
        g = n("646718"),
        S = n("782340"),
        C = n("669821");
    let T = "premiumRetentionEmojiPickerNotice",
        _ = o.default.get(T);
    var I = e => {
        let {
            closePopout: t,
            channel: n
        } = e, [a, I] = l.useState(!1), {
            subscription: v,
            hasFetchedSubscriptions: N
        } = (0, r.useStateFromStoresObject)([f.default], () => ({
            subscription: f.default.getPremiumSubscription(),
            hasFetchedSubscriptions: f.default.hasFetchedSubscriptions()
        }));
        if (l.useEffect(() => {
                !N && (0, d.fetchSubscriptions)()
            }, [N]), null == v || !(0, x.isSubscriptionStatusFailedPayment)(v.status) || a) return null;
        let A = v.status === y.SubscriptionStatusTypes.PAST_DUE ? (0, x.getBillingGracePeriodDays)(v) : g.MAX_ACCOUNT_HOLD_DAYS,
            O = s(v.currentPeriodStart).add(A, "days"),
            R = "".concat(v.id, ":").concat(O.toISOString());
        if (_ === R) return null;
        let M = x.default.getPremiumType(v.planId) === g.PremiumTypes.TIER_0 ? p.GradientCssUrls.PREMIUM_TIER_0 : x.default.getPremiumType(v.planId) === g.PremiumTypes.TIER_1 ? p.GradientCssUrls.PREMIUM_TIER_1 : p.GradientCssUrls.PREMIUM_TIER_2;
        return (0, i.jsxs)("div", {
            className: C.premiumRetentionNotice,
            children: [(0, i.jsx)(h.default, {
                className: C.premiumRetentionNoticeIcon,
                color: M
            }), (0, i.jsxs)("div", {
                className: C.premiumRetentionNoticeContent,
                children: [(0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    children: S.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
                        planName: x.default.getDisplayPremiumType(v.planId),
                        endsAt: O
                    })
                }), (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.Anchor, {
                        onClick: () => {
                            (0, E.trackPremiumSettingsPaneOpened)(n), t(), c.default.open(y.UserSettingsSections.PREMIUM)
                        },
                        children: S.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
                    })
                })]
            }), (0, i.jsx)(u.Clickable, {
                onClick: () => {
                    o.default.set(T, R), _ = R, I(!0)
                },
                children: (0, i.jsx)(m.default, {
                    className: C.premiumRetentionNoticeClose
                })
            })]
        })
    }
}