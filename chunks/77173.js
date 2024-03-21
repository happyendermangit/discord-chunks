function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("714617"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("42203"),
        l = n("305961"),
        u = n("945956"),
        d = n("18494"),
        c = n("991170"),
        _ = n("488464"),
        f = n("998716"),
        E = n("118033"),
        h = n("834052"),
        g = n("819450"),
        m = n("837979"),
        p = n("49111");
    let S = null;

    function v() {
        let e = function() {
            var e, t, n, i, s, r, a;
            let u = d.default.getVoiceChannelId();
            if (null == u) return null;
            let v = h.default.getStageInstanceByChannel(u);
            if (null == v) return null;
            let T = o.default.getChannel(u);
            if (null == T || !c.canEveryone(p.Permissions.VIEW_CHANNEL, T)) return null;
            let I = l.default.getGuild(T.getGuildId());
            if (null == I || !I.hasFeature(p.GuildFeatures.DISCOVERABLE)) return null;
            let A = (0, E.packStageChannelPartyId)(T, v),
                C = (null == S ? void 0 : null === (e = S.party) || void 0 === e ? void 0 : e.id) === A ? S : null,
                y = _.default.getMutableParticipants(T.id, f.StageChannelParticipantNamedIndex.SPEAKER),
                N = y.filter(e => e.type === f.StageChannelParticipantTypes.STREAM).length,
                R = y.length - N,
                O = _.default.getParticipantCount(u) - N,
                D = (null == C ? void 0 : null === (t = C.party) || void 0 === t ? void 0 : t.size) != null ? C.party.size[1] : 0;
            return {
                application_id: m.STAGE_APPLICATION_ID,
                name: null !== (s = null !== (i = v.topic) && void 0 !== i ? i : T.topic) && void 0 !== s ? s : T.name,
                type: (0, g.getStageHasMedia)(T.id) ? p.ActivityTypes.WATCHING : p.ActivityTypes.LISTENING,
                timestamps: {
                    start: null !== (r = null == C ? void 0 : null === (n = C.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== r ? r : new Date().getTime()
                },
                assets: {
                    small_image: null !== (a = I.icon) && void 0 !== a ? a : void 0,
                    small_text: I.name
                },
                party: {
                    id: A,
                    size: [R, Math.max(O, D)]
                }
            }
        }();
        return !s(e, S) && (S = e, !0)
    }
    class T extends r.default.Store {
        initialize() {
            this.waitFor(o.default, d.default, h.default, u.default)
        }
        getActivity() {
            return S
        }
    }
    T.displayName = "StageChannelSelfRichPresenceStore";
    var I = new T(a.default, {
        CONNECTION_OPEN: v,
        STAGE_INSTANCE_CREATE: v,
        STAGE_INSTANCE_UPDATE: v,
        STAGE_INSTANCE_DELETE: v,
        VOICE_CHANNEL_SELECT: v,
        RTC_CONNECTION_STATE: function(e) {
            var t, n, i;
            let {
                state: s
            } = e, r = null !== (i = null == S ? void 0 : null === (n = S.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== i ? i : 0;
            return s === p.RTCConnectionStates.RTC_CONNECTED && !(r > 0) && v()
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            if (null == S) return;
            let n = (0, E.unpackStageChannelParty)(S);
            null != n && null != t.find(e => e.channelId === n.channelId) && v()
        }
    })
}