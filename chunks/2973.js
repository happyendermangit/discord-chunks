function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("222007");
    var a = n("446674"),
        l = n("913144");
    let s = !1,
        i = new Map,
        r = 0,
        u = new Set,
        d = new Set,
        o = new Set,
        c = new Set,
        E = new Map,
        _ = new Map;

    function f(e, t) {
        i = new Map(i);
        let n = i.get(e);
        null != n && i.set(e, {
            ...n,
            ...t
        })
    }

    function g(e, t) {
        let n = new Map(E);
        n.set(e, t), E = n;
        let a = i.get(e),
            l = null == a ? void 0 : a.userStatus;
        if (null != l && null == l.claimedAt) {
            let n = {
                userStatus: {
                    ...l,
                    claimedAt: t.claimedAt
                }
            };
            f(e, n)
        }
    }

    function S(e) {
        null != _.get(e) && (_ = new Map(_)).delete(e)
    }

    function h(e) {
        let t = new Set(u);
        t.delete(e), u = t
    }

    function m(e) {
        let t = new Set(c);
        t.delete(e), c = t
    }
    class T extends a.default.Store {
        get quests() {
            return i
        }
        get isFetchingCurrentQuests() {
            return s
        }
        get lastFetchedCurrentQuests() {
            return r
        }
        isEnrolling(e) {
            return u.has(e)
        }
        isClaimingRewardCode(e) {
            return d.has(e)
        }
        isFetchingRewardCode(e) {
            return o.has(e)
        }
        isDismissingContent(e) {
            return c.has(e)
        }
        getRewardCode(e) {
            return E.get(e)
        }
        getStreamHeartbeatFailure(e) {
            return _.get(e)
        }
    }
    T.displayName = "QuestsStore";
    var M = new T(l.default, {
        LOGOUT: function() {
            s = !1, i = new Map, r = 0, u = new Set, _ = new Map
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
            r = Date.now(), s = !0
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
            let {
                quests: t
            } = e;
            for (let e of (s = !1, i = new Map, t)) i.set(e.id, e)
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
            r = 0, s = !1
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
            let {
                questId: t,
                streamKey: n,
                userStatus: a
            } = e;
            f(t, {
                userStatus: a
            }), S(n)
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
            let {
                questId: t,
                streamKey: n
            } = e, a = _.get(n);
            null == a && (_ = new Map(_)).set(n, {
                questId: t,
                streamKey: n,
                firstFailedAt: Date.now()
            })
        },
        QUESTS_ENROLL_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(u);
            n.add(t), u = n
        },
        QUESTS_ENROLL_SUCCESS: function(e) {
            let {
                enrolledQuestUserStatus: t
            } = e;
            f(t.questId, {
                userStatus: t
            }), h(t.questId)
        },
        QUESTS_ENROLL_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            h(t)
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(o);
            n.add(t), o = n
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, a = new Set(o);
            a.delete(t), o = a, g(t, n)
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(o);
            n.delete(t), o = n
        },
        QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(d);
            n.add(t), d = n
        },
        QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
            let {
                questId: t,
                rewardCode: n
            } = e, a = new Set(d);
            a.delete(t), d = a, g(t, n)
        },
        QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
            let {
                questId: t
            } = e, n = new Set(d);
            n.delete(t), d = n
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
            let {
                questId: t
            } = e, n = new Set(c);
            n.add(t), c = n
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
            let {
                dismissedQuestUserStatus: t
            } = e;
            f(t.questId, {
                userStatus: t
            }), m(t.questId)
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
            let {
                questId: t
            } = e;
            m(t)
        },
        STREAM_CLOSE: function(e) {
            let {
                streamKey: t
            } = e;
            S(t)
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
            let {
                streamKey: t
            } = e;
            S(t)
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
            let {
                previewQuestUserStatus: t
            } = e;
            f(t.questId, {
                userStatus: t
            }), null == t.claimedAt && (E = new Map(E)).delete(t.questId)
        }
    })
}