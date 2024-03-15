function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return d
        }
    });
    var n = i("773336"),
        l = i("126939"),
        a = i("501260"),
        r = i("871388"),
        u = i("49111");

    function d(t) {
        let {
            user: e,
            activity: i,
            application: d,
            channelId: s,
            currentUser: o,
            isEmbedded: c,
            ChannelStore: f,
            GuildStore: _,
            GuildMemberCountStore: E,
            RelationshipStore: I,
            SelectedChannelStore: A,
            VoiceStateStore: T,
            PermissionStore: C
        } = t, v = f.getChannel(s), S = (0, l.getIsActivitiesEnabledForCurrentPlatform)(v);
        if (null == e) return !1;
        if (c) return (0, a.default)({
            userId: e.id,
            activity: i,
            channelId: s,
            currentUser: o,
            application: d,
            isActivitiesEnabledForCurrentPlatform: S,
            ChannelStore: f,
            VoiceStateStore: T,
            PermissionStore: C,
            GuildStore: _
        }) === a.EmbeddedActivityJoinability.CAN_JOIN;
        if (!(0, n.isDesktop)()) return !1;
        if ((0, r.default)(i, u.ActivityFlags.PARTY_PRIVACY_FRIENDS) && I.isFriend(e.id)) return !0;
        if ((0, r.default)(i, u.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
            let t = f.getChannel(A.getVoiceChannelId());
            if (null == t || !T.isInChannel(t.id, e.id)) return !1;
            switch (t.type) {
                case u.ChannelTypes.DM:
                case u.ChannelTypes.GROUP_DM:
                    return !0
            }
            let i = _.getGuild(t.getGuildId());
            if (null == i || i.hasFeature(u.GuildFeatures.COMMUNITY)) return !1;
            let n = E.getMemberCount(i.id);
            return null != n && n < 100
        }
        return !1
    }
}