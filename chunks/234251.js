function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAnimatedAvatarDecoration: function() {
            return i
        },
        isEqualAvatarDecoration: function() {
            return s
        },
        parseAvatarDecorationData: function() {
            return r
        },
        hasGlobalDefaultAvatarDecoration: function() {
            return a
        }
    });
    let i = e => e.split("_", 2).includes("a"),
        s = (e, t) => null == e || null == t ? e === t : e.asset === t.asset && e.skuId === t.skuId,
        r = e => "object" == typeof e && null != e && "asset" in e && "string" == typeof e.asset ? "sku_id" in e && "string" == typeof e.sku_id ? {
            asset: e.asset,
            skuId: e.sku_id
        } : "skuId" in e && "string" == typeof e.skuId ? {
            asset: e.asset,
            skuId: e.skuId
        } : {
            asset: e.asset
        } : null,
        a = (e, t) => {
            var n;
            return null != t && (null == e ? void 0 : null === (n = e.avatarDecoration) || void 0 === n ? void 0 : n.asset) != null
        }
}