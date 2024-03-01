function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        maybeJoinEmbeddedActivity: function() {
            return C
        }
    });
    var n = i("404118"),
        l = i("651057"),
        a = i("299285"),
        u = i("645999"),
        r = i("653047"),
        d = i("42203"),
        s = i("305961"),
        o = i("957255"),
        c = i("697218"),
        f = i("800762"),
        _ = i("191225"),
        E = i("706508"),
        I = i("126939"),
        A = i("501260"),
        T = i("782340");
    async function C(e) {
        var t;
        let {
            channelId: i,
            applicationId: C,
            instanceId: v,
            inputApplication: S,
            analyticsLocations: N,
            embeddedActivitiesManager: p
        } = e, h = _.default.getEmbeddedActivitiesForChannel(i), y = h.find(e => e.applicationId === C && (null == v || e.instanceId === v)), D = S;
        if (null == D) {
            let e = await l.default.fetchApplication(C);
            D = r.default.createFromServer(e)
        }
        if (null == y || null == D) return;
        let O = c.default.getCurrentUser(),
            L = d.default.getChannel(i),
            g = (0, A.default)({
                userId: null == O ? void 0 : O.id,
                application: D,
                channelId: i,
                currentUser: O,
                isActivitiesEnabledForCurrentPlatform: (0, I.getIsActivitiesEnabledForCurrentPlatform)(L),
                ChannelStore: d.default,
                VoiceStateStore: f.default,
                PermissionStore: o.default,
                GuildStore: s.default
            }),
            m = _.default.getSelfEmbeddedActivityForChannel(i),
            P = null == m ? void 0 : m.applicationId,
            M = null != P && null !== (t = a.default.getApplication(P)) && void 0 !== t ? t : void 0;
        ! function(e) {
            let {
                embeddedActivityJoinability: t,
                handleCanJoin: i
            } = e;
            switch (t) {
                case A.EmbeddedActivityJoinability.CAN_JOIN:
                    null == i || i();
                    break;
                case A.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                    (0, u.showActivitiesInvalidPermissionsAlert)();
                    break;
                case A.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                    n.default.show({
                        title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: T.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                        hideActionSheet: !1
                    });
                    break;
                case A.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                    n.default.show({
                        title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: T.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                        hideActionSheet: !1
                    });
                    break;
                case A.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                    n.default.show({
                        title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                        hideActionSheet: !1
                    });
                    break;
                case A.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                case A.EmbeddedActivityJoinability.CHANNEL_FULL:
                case A.EmbeddedActivityJoinability.NO_CHANNEL:
                case A.EmbeddedActivityJoinability.NO_USER:
                    n.default.show({
                        title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: T.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                        hideActionSheet: !1
                    })
            }
        }({
            embeddedActivityJoinability: g,
            handleCanJoin: async function e() {
                null != y && await (0, E.default)({
                    applicationId: y.applicationId,
                    currentEmbeddedApplication: M,
                    activityChannelId: i,
                    locationObject: {},
                    embeddedActivitiesManager: p,
                    analyticsLocations: N
                })
            }
        })
    }
}