function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserActivityTypes: function() {
            return b
        },
        default: function() {
            return P
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("871388"),
        d = n("152311"),
        c = n("632710"),
        f = n("299285"),
        p = n("267196"),
        m = n("945701"),
        h = n("964261"),
        x = n("235932"),
        E = n("78512"),
        y = n("314848"),
        g = n("699209"),
        S = n("769791"),
        C = n("373469"),
        I = n("42203"),
        T = n("305961"),
        _ = n("957255"),
        v = n("800762"),
        N = n("313873"),
        A = n("599110"),
        O = n("474293"),
        M = n("49111"),
        k = n("782340"),
        R = n("970574");

    function L(e) {
        let {
            type: t,
            source: n,
            activity: l,
            applicationStream: a,
            user: s,
            guildId: r,
            channelId: u,
            onAction: f,
            isEmbedded: p = (0, d.default)(l),
            actionColor: m
        } = e;
        return (0, i.jsx)(c.default, {
            className: (0, O.getClass)(R, "actions", t),
            type: t,
            source: n,
            activity: l,
            applicationStream: a,
            user: s,
            guildId: r,
            look: o.Button.Looks.FILLED,
            color: null != m ? m : o.Button.Colors.PRIMARY,
            channelId: u,
            onAction: f,
            isEmbedded: p
        })
    }
    let b = N.default.Types;
    var P = function(e) {
        let {
            activity: t,
            user: n,
            useStoreStream: a = !0,
            showActions: o = !0,
            hideHeader: d = !1,
            analyticsParams: c,
            ...O
        } = e, b = (0, r.useStateFromStores)([v.default, I.default], () => {
            var e;
            return I.default.getChannel(null === (e = v.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
        }), {
            enableHangStatus: P
        } = g.HangStatusExperiment.useExperiment({
            guildId: null == b ? void 0 : b.guild_id,
            location: "UserActivityContainer"
        }, {
            autoTrackExposure: !1
        }), j = (0, r.useStateFromStores)([C.default], () => a ? C.default.getAnyStreamForUser(n.id) : null), U = P && _.default.can(M.Permissions.CONNECT, b), D = (null == t ? void 0 : t.type) === M.ActivityTypes.HANG_STATUS && U ? b : null, w = (0, r.useStateFromStores)([T.default, v.default, I.default], () => {
            var e, i;
            return (0, u.default)(t, M.ActivityFlags.EMBEDDED) ? T.default.getGuild(null === (e = I.default.getChannel(null === (i = v.default.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != D ? T.default.getGuild(D.getGuildId()) : null
        }), F = (0, r.useStateFromStores)([T.default], () => null != j ? T.default.getGuild(j.guildId) : null), B = (0, r.useStateFromStores)([f.default], () => {
            if (null != t) return null != t.application_id ? f.default.getApplication(t.application_id) : f.default.getApplicationByName(t.name);
            return null
        }), G = (0, p.default)(), H = (0, y.default)(n), V = G && null != t && H;
        return (l.useEffect(() => {
            (null == t ? void 0 : t.type) === M.ActivityTypes.HANG_STATUS && U && A.default.track(M.AnalyticEvents.VIEW_HANG_STATUS, {
                source: "UserProfilePopout",
                guild_id: null == D ? void 0 : D.guild_id,
                channel_id: null == D ? void 0 : D.id
            })
        }, [null == t ? void 0 : t.type, U, D]), (null == t ? void 0 : t.type) !== M.ActivityTypes.HANG_STATUS || U) ? (0, i.jsx)(N.default, {
            ...O,
            activity: t,
            user: n,
            application: B,
            hideHeader: d,
            activityGuild: null != w ? w : F,
            showReactions: V,
            renderActions: o ? () => (0, i.jsxs)("div", {
                className: s(V && R.actionsWrapper),
                children: [(0, i.jsx)(L, {
                    ...O,
                    applicationStream: j,
                    activity: t,
                    user: n
                }), V && (0, i.jsx)(m.default, {
                    showReact: !0,
                    showReply: !0,
                    replyHeaderText: k.default.Messages.ACTIVITY_REACTION_REPLY_TITLE.format({
                        activity: t.name
                    }),
                    replyPlaceholder: k.default.Messages.TEXTAREA_PLACEHOLDER.format({
                        channel: "@".concat(n.globalName)
                    }),
                    onInteraction: e => {
                        let {
                            interactionType: i,
                            emoji: l,
                            reply: a
                        } = e;
                        A.default.track(M.AnalyticEvents.ACTIVITY_REACTOR_INTERACTED, {
                            application_id: t.application_id,
                            interaction_type: i,
                            ...c
                        }), i === h.AtomicReactorInteractionTypes.ReactSubmit && null != l && (0, x.sendReactionToActivity)({
                            reaction: l,
                            user: n,
                            activity: t,
                            application: B,
                            altText: (0, E.getActivityAltText)(n, t),
                            stream: j
                        }), i === h.AtomicReactorInteractionTypes.ReplySubmit && null != a && (0, x.sendReplyToActivity)({
                            reply: a,
                            user: n,
                            activity: t,
                            application: B,
                            altText: (0, E.getActivityAltText)(n, t),
                            stream: j
                        })
                    }
                })]
            }) : null,
            onOpenSpotifyTrack: S.openTrack,
            onOpenSpotifyArtist: S.openArtist,
            onOpenSpotifyAlbum: S.openAlbum
        }) : null
    }
}