function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return i
        },
        getChannelVideoLimit: function() {
            return r
        }
    });
    var s = t("446674"),
        d = t("305961"),
        n = t("316133"),
        c = t("49111");

    function i(e) {
        return (0, s.useStateFromStoresObject)([n.default, d.default], () => {
            let a = n.default.countVoiceStatesForChannel(e.id),
                t = d.default.getGuild(e.getGuildId());
            return null == t ? {
                reachedLimit: !1,
                limit: -1
            } : e.type === c.ChannelTypes.GUILD_STAGE_VOICE ? {
                reachedLimit: a > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers
            } : {
                reachedLimit: t.maxVideoChannelUsers > 0 && a > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers
            }
        }, [e])
    }

    function r(e) {
        let a = n.default.countVoiceStatesForChannel(e.id),
            t = d.default.getGuild(e.getGuildId());
        return null == t ? {
            reachedLimit: !1,
            limit: -1
        } : e.type === c.ChannelTypes.GUILD_STAGE_VOICE ? {
            reachedLimit: a > t.maxStageVideoChannelUsers,
            limit: t.maxStageVideoChannelUsers
        } : {
            reachedLimit: t.maxVideoChannelUsers > 0 && a > t.maxVideoChannelUsers,
            limit: t.maxVideoChannelUsers
        }
    }
}