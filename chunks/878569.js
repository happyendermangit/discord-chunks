function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildGetPremiumUserBannerStyles: function() {
            return o
        },
        getUserBannerStyles: function() {
            return u
        },
        getUserBannerHeight: function() {
            return d
        },
        getUserBannerSize: function() {
            return f
        }
    }), n("794252");
    var l = n("506838"),
        i = n("617258"),
        a = n("769846"),
        s = n("590456"),
        r = n("320399");
    let o = e => t => {
            if (t.hasBanner && t.isPremium || t.hasProfileEffect) return e.premiumUserWithBanner;
            if (t.isPremium) {
                var n;
                return null !== (n = e.premiumUserWithoutBanner) && void 0 !== n ? n : e.default
            }
            return e.default
        },
        u = e => {
            let {
                profileType: t,
                user: n
            } = e;
            return (0, l.match)(t).with(s.UserProfileTypes.POPOUT, s.UserProfileTypes.POMELO_POPOUT, () => {
                let e = o({
                    premiumUserWithBanner: r.popoutBannerPremium,
                    premiumUserWithoutBanner: r.popoutNoBannerPremium,
                    default: r.popoutBanner
                });
                return e(n)
            }).with(s.UserProfileTypes.MODAL, () => {
                let e = o({
                    premiumUserWithBanner: r.profileBannerPremium,
                    premiumUserWithoutBanner: r.profileBanner,
                    default: r.profileBanner
                });
                return e(n)
            }).with(s.UserProfileTypes.SETTINGS, () => r.settingsBanner).with(s.UserProfileTypes.PANEL, () => r.panelBanner).with(s.UserProfileTypes.CANCEL_MODAL, () => r.cancelModalBanner).exhaustive()
        },
        d = e => {
            let {
                profileType: t,
                user: n
            } = e, r = (0, l.match)(t).with(s.UserProfileTypes.POPOUT, () => {
                let e = o({
                    premiumUserWithBanner: a.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                    premiumUserWithoutBanner: a.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                    default: a.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                });
                return e(n)
            }).with(s.UserProfileTypes.MODAL, () => {
                let e = o({
                    premiumUserWithBanner: a.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                    premiumUserWithoutBanner: a.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                    default: a.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                });
                return e(n)
            }).with(s.UserProfileTypes.POMELO_POPOUT, () => a.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(s.UserProfileTypes.SETTINGS, () => a.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(s.UserProfileTypes.PANEL, () => a.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(s.UserProfileTypes.CANCEL_MODAL, () => a.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
            return (0, i.cssValueToNumber)(r)
        },
        c = Object.freeze({
            [s.UserProfileTypes.POPOUT]: 480,
            [s.UserProfileTypes.PANEL]: 480,
            [s.UserProfileTypes.MODAL]: 600,
            [s.UserProfileTypes.SETTINGS]: 600,
            [s.UserProfileTypes.POMELO_POPOUT]: 432,
            [s.UserProfileTypes.CANCEL_MODAL]: 172
        }),
        f = e => c[e]
}