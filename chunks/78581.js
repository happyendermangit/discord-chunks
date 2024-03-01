function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAmplitudinalSoundboardVolume: function() {
            return _
        },
        canUseSoundboardSound: function() {
            return A
        },
        playSound: function() {
            return x
        },
        maybePlayCustomJoinSound: function() {
            return y
        },
        useSoundBoardDismissContentTypes: function() {
            return O
        },
        removeCustomJoinSound: function() {
            return R
        },
        updateCustomJoinSound: function() {
            return M
        },
        trackCustomCallSoundExternallyDeleted: function() {
            return P
        }
    }), n("424973");
    var l = n("65597"),
        i = n("151426"),
        a = n("880553"),
        s = n("845579"),
        r = n("872173"),
        o = n("374363"),
        u = n("229502"),
        d = n("233069"),
        c = n("957255"),
        f = n("697218"),
        m = n("599110"),
        p = n("719923"),
        h = n("158998"),
        E = n("305122"),
        g = n("235004"),
        C = n("389480"),
        S = n("245463"),
        T = n("675961"),
        v = n("846325"),
        I = n("49111");

    function _() {
        var e;
        let t = s.SoundboardSettings.getSetting();
        return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100
    }

    function N(e, t) {
        return (null == t ? void 0 : t.guild_id) == null || c.default.can(I.Permissions.USE_EXTERNAL_SOUNDS, t) || e.guildId === v.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == t ? void 0 : t.guild_id)
    }

    function A(e, t, n) {
        let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return (p.default.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === v.DEFAULT_SOUND_GUILD_ID) && N(t, n) && (!l || t.available)
    }

    function x(e, t, n) {
        (0, E.playSoundLocally)(t, e, C.LocalSoundTrigger.SOUNDBOARD), (0, u.sendVoiceChannelSoundboardEffect)(t, e, __OVERLAY__, n)
    }
    async function y(e) {
        let t = f.default.getCurrentUser(),
            n = (0, a.default)(),
            l = (0, T.getCustomJoinSound)(e);
        if (null == n || d.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n.type) || null == l || !p.default.canUseCustomCallSounds(t) || !(0, S.canSelectedVoiceChannelUseSoundboard)()) return;
        await (0, E.maybeFetchSoundboardSounds)();
        let i = l.guildId === v.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? v.DEFAULT_SOUND_GUILD_ID : l.guildId,
            s = g.default.getSound(i, l.soundId);
        if (null != s) {
            var r, o;
            if (!N(s, n) || !A(t, s, n, !0)) return null;
            r = s, o = n.id, (0, E.playSoundLocally)(o, r, C.LocalSoundTrigger.JOINED_VOICE_CHANNEL), (0, u.sendVoiceChannelCustomCallSoundEffect)(o, r, __OVERLAY__)
        }
    }

    function O(e) {
        let {
            isSoundboardButtonDisabled: t = !1
        } = e, n = (0, l.default)([f.default], () => f.default.getCurrentUser()), a = [i.DismissibleContent.SOUNDBOARD_EDUCATION];
        if (!t && ! function() {
                var e, t;
                let n = null !== (t = null === (e = o.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
                return Object.values(n).some(e => null != e.joinSound)
            }()) {
            a.push(i.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
            let e = (0, h.ageEligibleForPremiumUpsell)(n);
            (p.default.canUseCustomCallSounds(n) || e) && a.push(i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
        }
        return a
    }

    function R(e, t) {
        (0, r.updateUserGuildSettings)(e, n => {
            n.joinSound = void 0, L({
                guildId: e,
                changeType: C.AnalyticsChangeType.REMOVED,
                soundType: C.AnalyticsSoundType.ENTRY,
                location: t
            })
        }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function M(e, t, n) {
        (0, r.updateUserGuildSettings)(e, l => {
            let i = t.guildId === v.DEFAULT_SOUND_GUILD_ID,
                a = i ? C.AnalyticsSoundSource.DEFAULT : C.AnalyticsSoundSource.CUSTOM,
                s = null != l.joinSound ? C.AnalyticsChangeType.UPDATED : C.AnalyticsChangeType.ADDED;
            l.joinSound = {
                soundId: t.soundId,
                guildId: i ? v.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : t.guildId
            }, L({
                guildId: e,
                changeType: s,
                soundSource: a,
                soundType: C.AnalyticsSoundType.ENTRY,
                location: n
            })
        }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function L(e) {
        let {
            guildId: t,
            changeType: n,
            soundType: l,
            soundSource: i,
            location: a
        } = e;
        m.default.track(I.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
            location_stack: a,
            guild_id: "" === t ? 0 : Number(t),
            change_type: n,
            sound_type: l,
            sound_source: i
        })
    }

    function P(e) {
        let {
            location: t
        } = e;
        m.default.track(I.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
            location_stack: t
        })
    }
}