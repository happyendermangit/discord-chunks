function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldShowUserPopoutCollectiblesUpsell: function() {
            return x
        }
    }), n("222007");
    var i = n("884691"),
        l = n("627445"),
        a = n.n(l),
        s = n("65597"),
        r = n("151426"),
        o = n("327037"),
        u = n("875212"),
        d = n("619935"),
        c = n("411691"),
        f = n("384997"),
        p = n("697218"),
        m = n("217513"),
        h = n("627601");
    let x = e => {
        let {
            popoutUser: t,
            source: n,
            guildId: l
        } = e, x = "useShouldShowUserPopoutCollectiblesUpsell";
        (0, u.useTriggerDebuggingAA)({
            location: x + "auto on",
            autoTrackExposure: !0
        }), (0, u.useTriggerDebuggingAA)({
            location: x + "auto off",
            autoTrackExposure: !1
        });
        let E = (0, c.default)(x),
            {
                upsellSource: y
            } = (0, h.useUserPopoutCollectiblesUpsellStore)(),
            g = (0, s.default)([p.default], () => p.default.getCurrentUser());
        a(null != g, "currentUser should not be null");
        let S = (0, d.useBlockedPaymentsConfig)(),
            C = (0, m.default)(g.id, l),
            I = (0, m.default)(t.id, l);
        i.useEffect(() => {
            null == C && (0, o.fetchProfile)(g.id)
        }, [C, g]);
        let _ = E !== c.CollectiblesShopMarketingVariants.DEFAULT && (null == g ? void 0 : g.id) !== t.id && !S && !(null != y && y !== n),
            T = _ && (null == g ? void 0 : g.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
            v = _ && null != C && null == C.profileEffectId && (null == I ? void 0 : I.profileEffectId) != null,
            [N, A] = (0, f.useSelectedDismissibleContent)((T, []), void 0, !0);
        return {
            shouldShow: N === r.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
            canShowAvatarDecorationUpsell: T,
            canShowProfileEffectUpsell: v,
            onDismiss: A
        }
    }
}