function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("161454"),
        i = n("42203"),
        a = n("945956"),
        s = n("18494"),
        r = n("599110"),
        o = n("846325"),
        u = n("49111"),
        d = n("646718");

    function c(e, t, n, c) {
        var f, m, p;
        let h = i.default.getChannel(s.default.getVoiceChannelId()),
            E = null == h ? void 0 : h.getGuildId(),
            g = a.default.getMediaSessionId(),
            C = a.default.getRTCConnectionId(),
            S = null === (f = l.default.getCurrentGameForAnalytics()) || void 0 === f ? void 0 : f.name,
            T = E !== n.guildId && n.guildId !== o.DEFAULT_SOUND_GUILD_ID;
        let v = (m = n, p = T, m.guildId === o.DEFAULT_SOUND_GUILD_ID ? "default" : p ? "custom-external" : "custom");
        r.default.track(u.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
            feature_name: d.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
            feature_tier: T ? d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : d.AnalyticsPremiumFeatureTiers.FREE,
            guild_id: E,
            location_stack: e,
            rtc_connection_id: C,
            media_session_id: g,
            in_overlay: t,
            application_name: S,
            emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
            feature_selection: v,
            feature_selection_id: n.soundId,
            sound_type: c,
            is_broadcast: null != h && h.isBroadcastChannel()
        })
    }
}