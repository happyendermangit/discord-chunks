function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return n
        }
    });
    var d = a("272423");

    function n(e) {
        let t = (0, d.coerceChannelRoute)(e);
        if (null != t) return [t.params.guildId, t.params.channelId];
        let a = (0, d.coerceGuildsRoute)(e);
        if (null != a) {
            var n, c;
            return [null === (n = a.params) || void 0 === n ? void 0 : n.guildId, null === (c = a.params) || void 0 === c ? void 0 : c.channelId]
        }
        return [void 0, void 0]
    }
}