function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        UNUSUAL_DM_COMPARISON_DELTA: function() {
            return u
        },
        createMemberSearchCursor: function() {
            return a
        },
        OrderBy: function() {
            return n
        }
    });
    var i, n, s = r("718517");
    let u = 2 * s.default.Millis.DAY;

    function a(e) {
        let {
            joinedAt: t,
            userId: r
        } = e;
        if (null == t) return null;
        let i = new Date(t).getTime();
        return {
            guild_joined_at: i,
            user_id: r
        }
    }(i = n || (n = {}))[i.ORDER_BY_UNSPECIFIED = 0] = "ORDER_BY_UNSPECIFIED", i[i.ORDER_BY_GUILD_JOINED_AT_DESC = 1] = "ORDER_BY_GUILD_JOINED_AT_DESC", i[i.ORDER_BY_GUILD_JOINED_AT_ASC = 2] = "ORDER_BY_GUILD_JOINED_AT_ASC", i[i.ORDER_BY_USER_ID_DESC = 3] = "ORDER_BY_USER_ID_DESC", i[i.ORDER_BY_USER_ID_ASC = 4] = "ORDER_BY_USER_ID_ASC"
}