function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("446674"),
        s = n("77078"),
        r = n("260365"),
        o = n("823411"),
        u = n("987317"),
        d = n("997289"),
        c = n("685665"),
        f = n("442939"),
        p = n("860285"),
        m = n("42203"),
        h = n("86878"),
        x = n("525065"),
        E = n("305961"),
        y = n("686470"),
        g = n("957255"),
        S = n("27618"),
        C = n("18494"),
        I = n("697218"),
        T = n("800762"),
        _ = n("953998"),
        v = n("535974"),
        N = n("773336"),
        A = n("602043"),
        O = n("191225"),
        k = n("706508"),
        M = n("612696"),
        R = n("126808"),
        L = n("871388"),
        b = n("407908"),
        P = n("141962"),
        j = n("295999"),
        U = n("954016"),
        D = n("49111"),
        w = n("782340");

    function F(e) {
        let {
            activity: t,
            currentEmbeddedApplication: n,
            isCurrentUser: F,
            color: B,
            look: G,
            hover: H,
            user: V,
            isEmbedded: K = !1
        } = e, {
            analyticsLocations: W
        } = (0, c.default)(), [Y, z] = l.useState(!1), Z = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), J = null == t ? void 0 : t.application_id, q = (0, a.useStateFromStores)([O.default], () => K ? O.default.getEmbeddedActivityForUserId(V.id, J) : null, [V.id, K, J]), X = (0, R.default)({
            channelId: null == q ? void 0 : q.channelId,
            userId: V.id,
            activity: t
        }), Q = (0, a.useStateFromStores)([y.default, p.default, v.default, h.default], () => K || (null == t ? void 0 : t.application_id) != null && (0, A.isLaunchable)({
            LibraryApplicationStore: y.default,
            LaunchableGameStore: p.default,
            DispatchApplicationStore: v.default,
            ConnectedAppsStore: h.default,
            applicationId: t.application_id
        })), $ = (0, a.useStateFromStores)([O.default], () => Array.from(O.default.getSelfEmbeddedActivities().values()).some(e => {
            let {
                applicationId: n,
                channelId: i
            } = e;
            return n === (null == t ? void 0 : t.application_id) && i === X
        })), ee = (0, a.useStateFromStores)([_.default], () => null != t && null != t.application_id && _.default.getState(t.application_id, D.ActivityActionTypes.JOIN) === D.ActivityActionStates.LOADING), [et] = (0, f.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), en = (0, a.useStateFromStores)([m.default, E.default, x.default, S.default, C.default, T.default, g.default], () => (0, M.default)({
            user: V,
            activity: t,
            application: et,
            channelId: X,
            currentUser: Z,
            isEmbedded: K,
            ChannelStore: m.default,
            GuildStore: E.default,
            GuildMemberCountStore: x.default,
            RelationshipStore: S.default,
            SelectedChannelStore: C.default,
            VoiceStateStore: T.default,
            PermissionStore: g.default
        })), ei = (0, d.useAnalyticsContext)(), el = !N.isPlatformEmbedded, ea = (0, L.default)(t, D.ActivityFlags.JOIN) || K;
        if (null == t || !ea || null == t.application_id) return null;
        let es = !F && (el || Q) && !Y && !$ && (!K || en),
            er = null;
        F ? er = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !el && !Q && (er = w.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
            name: t.name
        }));
        let eo = async (e, t) => {
            var n;
            null != t.session_id && null != t.application_id && (await o.default.join({
                userId: e.id,
                sessionId: t.session_id,
                applicationId: t.application_id,
                channelId: C.default.getVoiceChannelId(),
                messageId: null,
                intent: U.ActivityIntent.PLAY,
                embedded: (0, L.default)(t, D.ActivityFlags.EMBEDDED)
            }), (0, b.default)({
                type: D.AnalyticsGameOpenTypes.JOIN,
                userId: e.id,
                applicationId: t.application_id,
                partyId: null === (n = t.party) || void 0 === n ? void 0 : n.id,
                locationObject: ei.location,
                analyticsLocations: W
            }))
        }, eu = async () => {
            let e = !1;
            if (K) {
                if (!en || null == X || null == t.application_id) return;
                e = await (0, k.default)({
                    applicationId: t.application_id,
                    currentEmbeddedApplication: n,
                    activityChannelId: X,
                    locationObject: ei.location,
                    embeddedActivitiesManager: P.default,
                    analyticsLocations: W
                })
            }
            if (!e) {
                en && eo(V, t), z(!0);
                let e = await r.default.sendActivityInviteUser({
                    type: D.ActivityActionTypes.JOIN_REQUEST,
                    userId: V.id,
                    activity: t,
                    location: D.AnalyticsLocations.PROFILE_POPOUT
                });
                null != e && u.default.selectPrivateChannel(e.id)
            }
        }, ed = en ? w.default.Messages.JOIN : w.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
        return K && (ed = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), (0, i.jsx)(s.Tooltip, {
            text: er,
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: n
                } = e;
                return (0, i.jsx)(j.default, {
                    onClick: eu,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    color: B,
                    look: G,
                    hover: H,
                    disabled: !es,
                    submitting: ee,
                    fullWidth: !0,
                    children: ed
                })
            }
        }, "join")
    }
}