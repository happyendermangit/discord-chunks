function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEmojiAndSourceGuild: function() {
            return c
        }
    }), n("222007");
    var l = n("884691"),
        i = n("65597"),
        a = n("305961"),
        s = n("385976"),
        r = n("858619"),
        o = n("101263"),
        u = n("49111");
    let d = (e, t, n) => {
            let l = null != n ? e.getCustomEmojiById(n) : null;
            if ((null == l ? void 0 : l.type) === r.EmojiTypes.GUILD) return {
                emoji: l,
                joinedEmojiSourceGuildRecord: t.getGuild(null == l ? void 0 : l.guildId)
            };
            return {
                emoji: null,
                joinedEmojiSourceGuildRecord: null
            }
        },
        c = e => {
            let {
                emojiId: t,
                refreshPositionKey: n
            } = e, {
                joinedEmojiSourceGuildRecord: r,
                emoji: c
            } = (0, i.useStateFromStoresObject)([s.default, a.default], () => d(s.default, a.default, t)), f = null != r, m = null != r && r.hasFeature(u.GuildFeatures.DISCOVERABLE), p = (!f || m) && null != t, [h, E] = l.useState(p), g = null != r ? o.default.createFromGuildRecord(r) : null, [C, S] = l.useState(g);
            return l.useEffect(() => {
                null == n || n();
                let e = async () => {
                    let e = null != t ? await o.default.getGuildFromEmojiId(t) : null;
                    S(e), E(!1), null == n || n()
                };
                if (p) {
                    e();
                    return
                }
                null == n || n()
            }, [t, p]), {
                expressionSourceGuild: C,
                joinedEmojiSourceGuildRecord: r,
                hasJoinedEmojiSourceGuild: f,
                emoji: c,
                isFetching: h
            }
        }
}