function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return c
        }
    });
    var s = t("803182"),
        d = t("308503"),
        n = t("49111");

    function i(e) {
        let a = (0, s.matchPath)(null != e ? e : "", {
            path: n.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
        });
        if (null != a) {
            let {
                guildId: e,
                channelId: t
            } = a.params;
            return {
                guildId: e === n.ME ? null : e,
                channelId: null != t ? t : null
            }
        }
        let t = (0, s.matchPath)(null != e ? e : "", {
            path: n.Routes.GUILD_BOOSTING_MARKETING(":guildId")
        });
        return null != t ? {
            guildId: t.params.guildId,
            channelId: null
        } : {
            guildId: null,
            channelId: null
        }
    }
    var c = (0, d.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(a) {
            let {
                guildId: t,
                channelId: s
            } = i(a);
            e({
                path: a,
                guildId: t,
                channelId: s
            })
        },
        resetPath(a) {
            let {
                guildId: t,
                channelId: s
            } = i(a);
            e({
                path: null,
                guildId: t,
                channelId: s,
                basePath: a
            })
        }
    }))
}