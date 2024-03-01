function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        fetchReferralsRemaining: function() {
            return a
        },
        checkRecipientEligibility: function() {
            return f
        },
        createReferralTrial: function() {
            return o
        },
        resolveReferralTrialOffer: function() {
            return _
        }
    });
    var n = r("872717"),
        i = r("913144"),
        l = r("819689"),
        u = r("18494"),
        s = r("49111");
    let a = () => (i.default.dispatch({
            type: "BILLING_REFERRALS_REMAINING_FETCH_START"
        }), n.default.get({
            url: s.Endpoints.GET_REFERRALS_REMAINING,
            oldFormErrors: !0
        }).then(e => {
            i.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
            })
        }, () => {
            i.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
            })
        })),
        f = e => (i.default.dispatch({
            type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
            recipientId: e
        }), n.default.post({
            url: s.Endpoints.CREATE_REFERRAL_PREVIEW(e),
            oldFormErrors: !0
        }).then(t => {
            i.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                recipientId: e,
                is_eligible: null != t.body && t.body.is_eligible
            })
        }, () => {
            i.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                recipientId: e
            })
        }));
    async function o(e) {
        try {
            var t;
            let r = await n.default.post({
                    url: s.Endpoints.CREATE_REFERRAL(e),
                    oldFormErrors: !0
                }),
                l = null !== (t = r.body) && void 0 !== t ? t : null;
            return i.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_SUCCESS",
                userTrialOffer: l
            }), {
                userTrialOffer: l
            }
        } catch (e) {
            if (i.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_FAIL"
                }), e.body.code === s.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                let t = u.default.getCurrentlySelectedChannelId();
                null != t && l.default.sendClydeError(t, e.body.code)
            }
        }
    }
    async function _(e) {
        try {
            var t;
            let r = await n.default.get({
                    url: s.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                    oldFormErrors: !0
                }),
                l = null !== (t = r.body) && void 0 !== t ? t : null;
            return i.default.dispatch({
                type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                userTrialOffer: l
            }), {
                userTrialOffer: l
            }
        } catch (t) {
            i.default.dispatch({
                type: "BILLING_REFERRAL_RESOLVE_FAIL",
                userTrialOfferId: e
            })
        }
    }
}