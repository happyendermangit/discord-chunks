function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("446674"),
        s = n("77078"),
        r = n("260365"),
        o = n("823411"),
        u = n("987317"),
        d = n("997289"),
        c = n("685665"),
        f = n("442939"),
        m = n("860285"),
        p = n("42203"),
        h = n("86878"),
        E = n("525065"),
        g = n("305961"),
        C = n("686470"),
        S = n("957255"),
        T = n("27618"),
        v = n("18494"),
        I = n("697218"),
        _ = n("800762"),
        N = n("953998"),
        A = n("535974"),
        x = n("773336"),
        y = n("602043"),
        O = n("191225"),
        R = n("706508"),
        M = n("612696"),
        L = n("126808"),
        P = n("871388"),
        b = n("407908"),
        j = n("141962"),
        U = n("295999"),
        D = n("954016"),
        k = n("49111"),
        w = n("782340");

    function F(e) {
        let {
            activity: t,
            currentEmbeddedApplication: n,
            isCurrentUser: F,
            color: G,
            look: B,
            hover: H,
            user: V,
            isEmbedded: K = !1
        } = e, {
            analyticsLocations: W
        } = (0, c.default)(), [Y, z] = i.useState(!1), Z = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), J = null == t ? void 0 : t.application_id, q = (0, a.useStateFromStores)([O.default], () => K ? O.default.getEmbeddedActivityForUserId(V.id, J) : null, [V.id, K, J]), X = (0, L.default)({
            channelId: null == q ? void 0 : q.channelId,
            userId: V.id,
            activity: t
        }), Q = (0, a.useStateFromStores)([C.default, m.default, A.default, h.default], () => K || (null == t ? void 0 : t.application_id) != null && (0, y.isLaunchable)({
            LibraryApplicationStore: C.default,
            LaunchableGameStore: m.default,
            DispatchApplicationStore: A.default,
            ConnectedAppsStore: h.default,
            applicationId: t.application_id
        })), $ = (0, a.useStateFromStores)([O.default], () => Array.from(O.default.getSelfEmbeddedActivities().values()).some(e => {
            let {
                applicationId: n,
                channelId: l
            } = e;
            return n === (null == t ? void 0 : t.application_id) && l === X
        })), ee = (0, a.useStateFromStores)([N.default], () => null != t && null != t.application_id && N.default.getState(t.application_id, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING), [et] = (0, f.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), en = (0, a.useStateFromStores)([p.default, g.default, E.default, T.default, v.default, _.default, S.default], () => (0, M.default)({
            user: V,
            activity: t,
            application: et,
            channelId: X,
            currentUser: Z,
            isEmbedded: K,
            ChannelStore: p.default,
            GuildStore: g.default,
            GuildMemberCountStore: E.default,
            RelationshipStore: T.default,
            SelectedChannelStore: v.default,
            VoiceStateStore: _.default,
            PermissionStore: S.default
        })), el = (0, d.useAnalyticsContext)(), ei = !x.isPlatformEmbedded, ea = (0, P.default)(t, k.ActivityFlags.JOIN) || K;
        if (null == t || !ea || null == t.application_id) return null;
        let es = !F && (ei || Q) && !Y && !$ && (!K || en),
            er = null;
        F ? er = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !ei && !Q && (er = w.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
            name: t.name
        }));
        let eo = async (e, t) => {
            var n;
            null != t.session_id && null != t.application_id && (await o.default.join({
                userId: e.id,
                sessionId: t.session_id,
                applicationId: t.application_id,
                channelId: v.default.getVoiceChannelId(),
                messageId: null,
                intent: D.ActivityIntent.PLAY,
                embedded: (0, P.default)(t, k.ActivityFlags.EMBEDDED)
            }), (0, b.default)({
                type: k.AnalyticsGameOpenTypes.JOIN,
                userId: e.id,
                applicationId: t.application_id,
                partyId: null === (n = t.party) || void 0 === n ? void 0 : n.id,
                locationObject: el.location,
                analyticsLocations: W
            }))
        }, eu = async () => {
            let e = !1;
            if (K) {
                if (!en || null == X || null == t.application_id) return;
                e = await (0, R.default)({
                    applicationId: t.application_id,
                    currentEmbeddedApplication: n,
                    activityChannelId: X,
                    locationObject: el.location,
                    embeddedActivitiesManager: j.default,
                    analyticsLocations: W
                })
            }
            if (!e) {
                en && eo(V, t), z(!0);
                let e = await r.default.sendActivityInviteUser({
                    type: k.ActivityActionTypes.JOIN_REQUEST,
                    userId: V.id,
                    activity: t,
                    location: k.AnalyticsLocations.PROFILE_POPOUT
                });
                null != e && u.default.selectPrivateChannel(e.id)
            }
        }, ed = en ? w.default.Messages.JOIN : w.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
        return K && (ed = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), (0, l.jsx)(s.Tooltip, {
            text: er,
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: n
                } = e;
                return (0, l.jsx)(U.default, {
                    onClick: eu,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    color: G,
                    look: B,
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