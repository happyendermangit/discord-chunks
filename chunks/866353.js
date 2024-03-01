function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StickerSendability: function() {
            return s
        },
        getStickerSendability: function() {
            return u
        },
        isSendableSticker: function() {
            return c
        }
    });
    var i, s, r = n("991170"),
        l = n("719923"),
        o = n("24373"),
        a = n("49111");
    (i = s || (s = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
    let u = (e, t, n) => {
            if (null == t) return 2;
            let i = l.default.canUseCustomStickersEverywhere(t);
            if ((0, o.isStandardSticker)(e)) return 0;
            if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || r.default.can({
                permission: a.Permissions.USE_EXTERNAL_STICKERS,
                user: t,
                context: n
            }) ? i ? 0 : 1 : 2 : 3;
            return 2
        },
        c = (e, t, n) => 0 === u(e, t, n)
}