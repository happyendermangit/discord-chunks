function(e, t, n) {
    "use strict";

    function i(e) {
        let {
            id: t,
            username: n,
            discriminator: i,
            globalName: s,
            avatar: r,
            avatarDecoration: a,
            bot: o,
            flags: l,
            premiumType: u
        } = e;
        return {
            id: t,
            username: n,
            discriminator: i,
            global_name: s,
            avatar: r,
            avatar_decoration_data: null != a ? {
                asset: a.asset,
                sku_id: a.skuId
            } : null,
            bot: o,
            flags: l,
            premium_type: null != u ? u : 0
        }
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("702976")
}