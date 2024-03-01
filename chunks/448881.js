function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchCurrentQuests: function() {
            return d
        },
        sendHeartbeat: function() {
            return c
        },
        enrollInQuest: function() {
            return f
        },
        claimQuestRewardCode: function() {
            return E
        },
        fetchQuestRewardCode: function() {
            return _
        },
        dismissQuestContent: function() {
            return S
        },
        dismissProgressTrackingFailureNotice: function() {
            return T
        },
        completeQuestPreview: function() {
            return p
        },
        resetQuestPreviewStatus: function() {
            return C
        },
        resetQuestDismissibilityStatus: function() {
            return g
        }
    });
    var s = n("872717"),
        i = n("913144"),
        r = n("599417"),
        a = n("815496"),
        u = n("2973"),
        l = n("227231"),
        o = n("49111");
    async function d() {
        if (!u.default.isFetchingCurrentQuests) {
            i.default.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
            });
            try {
                let e = await s.default.get({
                        url: o.Endpoints.QUESTS_CURRENT_QUESTS
                    }),
                    t = e.body.quests.map(e => (0, l.questWithUserStatusFromServer)(e)),
                    n = t.filter(e => {
                        var t;
                        return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || e.config.rewardCodePlatforms.length > 0
                    });
                i.default.dispatch({
                    type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                    quests: n
                })
            } catch (e) {
                i.default.dispatch({
                    type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                    error: new r.default(e)
                })
            }
        }
    }
    async function c(e) {
        let {
            questId: t,
            streamKey: n,
            applicationId: a
        } = e;
        try {
            let e = await s.default.post({
                url: o.Endpoints.QUESTS_HEARTBEAT(t),
                body: {
                    stream_key: n,
                    application_id: a
                }
            });
            i.default.dispatch({
                type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
                userStatus: (0, l.questUserStatusFromServer)(e.body),
                applicationId: a,
                questId: t,
                streamKey: n
            })
        } catch (e) {
            i.default.dispatch({
                type: "QUESTS_SEND_HEARTBEAT_FAILURE",
                error: new r.default(e),
                questId: t,
                streamKey: n
            })
        }
    }
    async function f(e, t) {
        null != t.questContentCTA && (0, a.trackQuestContentClicked)(e, t.questContent, t.questContentCTA);
        let n = u.default.isEnrolling(e);
        if (!n) {
            i.default.dispatch({
                type: "QUESTS_ENROLL_BEGIN",
                questId: e
            });
            try {
                let n = await s.default.post({
                    url: o.Endpoints.QUESTS_ENROLL(e),
                    body: {
                        location: t.questContent
                    }
                });
                i.default.dispatch({
                    type: "QUESTS_ENROLL_SUCCESS",
                    enrolledQuestUserStatus: (0, l.questUserStatusFromServer)(n.body)
                })
            } catch (t) {
                i.default.dispatch({
                    type: "QUESTS_ENROLL_FAILURE",
                    questId: e
                })
            }
        }
    }
    async function E(e, t, n) {
        let a = u.default.isClaimingRewardCode(e);
        if (!a) {
            i.default.dispatch({
                type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
                questId: e
            });
            try {
                let r = await s.default.post({
                    url: o.Endpoints.QUESTS_REWARD_CODE(e),
                    body: {
                        platform: t,
                        location: n
                    }
                });
                i.default.dispatch({
                    type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
                    questId: e,
                    rewardCode: (0, l.questsRewardCodeFromServer)(r.body)
                })
            } catch (t) {
                throw i.default.dispatch({
                    type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
                    error: new r.default(t),
                    questId: e
                }), t
            }
        }
    }
    async function _(e) {
        let t = u.default.isFetchingRewardCode(e);
        if (!t) {
            i.default.dispatch({
                type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
                questId: e
            });
            try {
                let t = await s.default.get({
                    url: o.Endpoints.QUESTS_REWARD_CODE(e)
                });
                i.default.dispatch({
                    type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                    questId: e,
                    rewardCode: (0, l.questsRewardCodeFromServer)(t.body)
                })
            } catch (t) {
                throw i.default.dispatch({
                    type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
                    error: new r.default(t),
                    questId: e
                }), t
            }
        }
    }
    async function S(e, t) {
        let n = u.default.isDismissingContent(e);
        if (!n) {
            i.default.dispatch({
                type: "QUESTS_DISMISS_CONTENT_BEGIN",
                questId: e,
                content: t
            });
            try {
                let n = await s.default.post({
                    url: o.Endpoints.QUESTS_DISMISS_CONTENT(e, t),
                    body: {}
                });
                i.default.dispatch({
                    type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                    dismissedQuestUserStatus: (0, l.questUserStatusFromServer)(n.body)
                })
            } catch (t) {
                i.default.dispatch({
                    type: "QUESTS_DISMISS_CONTENT_FAILURE",
                    error: new r.default(t),
                    questId: e
                })
            }
        }
    }

    function T(e) {
        i.default.dispatch({
            type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
            streamKey: e
        })
    }
    async function p(e) {
        try {
            let t = await s.default.post({
                url: o.Endpoints.QUESTS_PREVIEW_COMPLETE(e),
                body: {}
            });
            i.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                previewQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
            })
        } catch (t) {
            i.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                error: new r.default(t),
                questId: e
            })
        }
    }
    async function C(e) {
        try {
            let t = await s.default.delete({
                url: o.Endpoints.QUESTS_PREVIEW_STATUS(e),
                body: {}
            });
            i.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                previewQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
            })
        } catch (t) {
            i.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                error: new r.default(t),
                questId: e
            })
        }
    }
    async function g(e) {
        try {
            let t = await s.default.delete({
                url: o.Endpoints.QUESTS_PREVIEW_DISMISSIBILITY(e),
                body: {}
            });
            i.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                previewQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
            })
        } catch (t) {
            i.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                error: new r.default(t),
                questId: e
            })
        }
    }
}