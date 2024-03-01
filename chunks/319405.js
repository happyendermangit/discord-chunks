function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return U
        }
    }), E("222007");
    var t = E("689988"),
        o = E("374014"),
        n = E("373469"),
        r = E("271938"),
        i = E("42203"),
        a = E("546463"),
        I = E("945956"),
        s = E("718517"),
        T = E("815496"),
        S = E("448881"),
        N = E("374023"),
        O = E("2973"),
        A = E("227231"),
        R = E("166604"),
        l = E("49111");
    let u = 5 * s.default.Millis.SECOND,
        L = 12 * s.default.Millis.HOUR,
        C = 1 * s.default.Millis.MINUTE,
        D = 30 * s.default.Millis.SECOND;

    function c() {
        var e, _;
        let E = n.default.getStreamerActiveStreamMetadata();
        if ((null == E ? void 0 : E.id) == null) return null;
        let t = a.default.getGameById(E.id);
        if ((null == t ? void 0 : t.id) == null) return null;
        let o = (0, A.getQuestByApplicationId)(O.default.quests, t.id);
        return (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == o ? void 0 : null === (_ = o.userStatus) || void 0 === _ ? void 0 : _.completedAt) != null ? null : o
    }
    class d extends t.default {
        maybeFetchCurrentQuests() {
            (0, N.getIsEligibleForQuests)({
                location: R.QuestsExperimentLocations.QUESTS_MANAGER,
                autoTrackExposure: !1
            }) && !O.default.isFetchingCurrentQuests && (0, S.fetchCurrentQuests)()
        }
        constructor(...e) {
            super(...e), this.instantiatedAt = Date.now(), this.sendHeartbeatTimeoutIds = new Map, this.initiateHeartbeat = e => {
                let {
                    questId: _,
                    streamKey: E,
                    applicationId: t
                } = e;
                this.terminateHeartbeat(E);
                let o = () => {
                    var e;
                    null != n.default.getRTCStream(E) && n.default.getViewerIds(E).length > 0 && (null === (e = c()) || void 0 === e ? void 0 : e.config.applicationId) === t && (0, S.sendHeartbeat)({
                        questId: _,
                        streamKey: E,
                        applicationId: t
                    });
                    let r = this.calculateHeartbeatDurationMs(_);
                    this.sendHeartbeatTimeoutIds.set(E, window.setTimeout(o, r))
                };
                o()
            }, this.calculateHeartbeatDurationMs = e => {
                let _ = O.default.quests.get(e);
                if (null == _ || null == _.config || null == _.userStatus) return C;
                let {
                    streamProgressSeconds: E
                } = _.userStatus, t = 60 * _.config.streamDurationRequirementMinutes;
                return t - E <= .1 * t ? D : C
            }, this.terminateHeartbeat = e => {
                window.clearTimeout(this.sendHeartbeatTimeoutIds.get(e)), this.sendHeartbeatTimeoutIds.delete(e)
            }, this.handleEnrollmentSuccess = e => {
                let {
                    enrolledQuestUserStatus: {
                        questId: _
                    }
                } = e, E = c();
                if (null == E || E.id !== _) return;
                let t = n.default.getCurrentUserActiveStream();
                null != t && this.initiateHeartbeat({
                    streamKey: (0, o.encodeStreamKey)(t),
                    applicationId: E.config.applicationId,
                    questId: E.id
                })
            }, this.handlePostConnectionOpen = () => {
                if (0 === O.default.lastFetchedCurrentQuests) window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * u))
            }, this.handleSendHeartbeatSuccess = e => {
                let {
                    streamKey: _,
                    userStatus: E
                } = e;
                null != E.completedAt && this.terminateHeartbeat(_)
            }, this.handleRunningGamesChange = () => {
                !(this.instantiatedAt + L > Date.now() || O.default.lastFetchedCurrentQuests + L > Date.now()) && this.maybeFetchCurrentQuests()
            }, this.handleStreamUpdate = e => {
                let {
                    streamKey: _,
                    viewerIds: E
                } = e, t = c();
                if (null == t) {
                    this.terminateHeartbeat(_);
                    return
                }
                if (0 === E.length) {
                    this.sendHeartbeatTimeoutIds.has(_) && ((0, S.sendHeartbeat)({
                        questId: t.id,
                        streamKey: _,
                        applicationId: t.config.applicationId
                    }), this.terminateHeartbeat(_));
                    return
                }
                this.initiateHeartbeat({
                    streamKey: _,
                    applicationId: t.config.applicationId,
                    questId: t.id
                })
            }, this.handleStreamStart = e => {
                var _;
                let {
                    streamType: E,
                    guildId: t,
                    channelId: a
                } = e, s = (0, o.encodeStreamKey)({
                    streamType: E,
                    guildId: t,
                    channelId: a,
                    ownerId: r.default.getId()
                }), S = c();
                if (null == S) {
                    this.terminateHeartbeat(s);
                    return
                }(0, T.trackQuestEvent)(S.id, l.AnalyticEvents.QUEST_STREAMING_STARTED, {
                    media_session_id: I.default.getMediaSessionId(),
                    channel_type: null === (_ = i.default.getChannel(a)) || void 0 === _ ? void 0 : _.type,
                    guild_id: t
                }), 0 !== n.default.getViewerIds(s).length && this.initiateHeartbeat({
                    streamKey: s,
                    applicationId: S.config.applicationId,
                    questId: S.id
                })
            }, this.handleStreamClose = e => {
                let {
                    streamKey: _
                } = e;
                this.terminateHeartbeat(_)
            }, this.actions = {
                QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_START: this.handleStreamStart,
                STREAM_CLOSE: this.handleStreamClose,
                STREAM_UPDATE: this.handleStreamUpdate
            }
        }
    }
    var U = new d
}