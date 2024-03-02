function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("70102"), n("794252");
    var l = n("37983");
    n("884691");
    var i = n("506838"),
        a = n("769846"),
        s = n("77078"),
        r = n("606292"),
        o = n("476765"),
        u = n("159885"),
        d = n("878569"),
        c = n("590456"),
        f = n("573135"),
        m = n("201974");
    let p = {
        [c.UserProfileTypes.POPOUT]: s.AvatarSizes.SIZE_80,
        [c.UserProfileTypes.MODAL]: s.AvatarSizes.SIZE_120,
        [c.UserProfileTypes.SETTINGS]: s.AvatarSizes.SIZE_80,
        [c.UserProfileTypes.PANEL]: s.AvatarSizes.SIZE_80,
        [c.UserProfileTypes.POMELO_POPOUT]: s.AvatarSizes.SIZE_80,
        [c.UserProfileTypes.CANCEL_MODAL]: s.AvatarSizes.SIZE_56
    };

    function h(e) {
        let {
            children: t,
            profileType: n,
            isPremium: h,
            hasThemeColors: E,
            hasBanner: g,
            forProfileEffectModal: C,
            hasProfileEffect: S = !1
        } = e, T = p[n], I = (0, o.useUID)(), v = function(e) {
            let {
                profileType: t,
                avatarSize: n,
                hasBanner: l,
                isPremium: o,
                hasThemeColors: m,
                hasProfileEffect: p
            } = e, h = f.AvatarDecorationBorderSizes[n];
            if (null == h) throw Error("Unsupported avatar size for banner mask");
            let E = (0, r.getDecorationSizeForAvatarSize)(n),
                {
                    size: g,
                    stroke: C
                } = (0, s.getAvatarSpecs)(n),
                S = {
                    avatarSize: g,
                    avatarBorderSize: C,
                    avatarDecorationSize: E,
                    avatarDecorationBorderSize: h,
                    avatarDecorationOffsetY: -(E + 2 * h) / 2,
                    bannerHeight: (0, d.getUserBannerHeight)({
                        profileType: t,
                        user: {
                            hasBanner: l,
                            isPremium: o,
                            hasProfileEffect: p
                        }
                    })
                };
            return (0, i.match)(t).with(c.UserProfileTypes.POPOUT, () => {
                let e = m ? (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                return {
                    ...S,
                    bannerWidth: (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                    offsetX: 16 - e,
                    offsetY: 4 + e,
                    avatarDecorationOffsetX: 4
                }
            }).with(c.UserProfileTypes.MODAL, () => ({
                ...S,
                bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.MODAL),
                offsetX: 14,
                offsetY: 5,
                avatarDecorationOffsetX: 2
            })).with(c.UserProfileTypes.SETTINGS, () => ({
                ...S,
                bannerWidth: 660,
                offsetX: 16,
                offsetY: -22,
                avatarDecorationOffsetX: 8
            })).with(c.UserProfileTypes.PANEL, () => {
                let e = (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                return {
                    ...S,
                    bannerWidth: (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                    offsetX: 16 - e,
                    offsetY: 4 + e,
                    avatarDecorationOffsetX: 4
                }
            }).with(c.UserProfileTypes.POMELO_POPOUT, () => ({
                ...S,
                bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.POMELO_POPOUT),
                offsetX: 20,
                offsetY: -20,
                avatarDecorationOffsetX: 10
            })).with(c.UserProfileTypes.CANCEL_MODAL, () => ({
                ...S,
                bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.CANCEL_MODAL),
                offsetX: 8,
                offsetY: 2,
                avatarDecorationOffsetX: 8
            })).exhaustive()
        }({
            profileType: n,
            avatarSize: T,
            hasBanner: g,
            isPremium: h,
            hasThemeColors: E,
            hasProfileEffect: S
        });
        C && (v.bannerWidth = (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
        let _ = v.avatarSize / 2 + v.avatarBorderSize,
            N = v.bannerHeight - v.offsetY;
        return (0, l.jsxs)("svg", {
            className: m.bannerSVGWrapper,
            viewBox: "0 0 ".concat(v.bannerWidth, " ").concat(v.bannerHeight),
            style: {
                minWidth: v.bannerWidth,
                minHeight: v.bannerHeight
            },
            children: [(0, l.jsxs)("mask", {
                id: I,
                children: [(0, l.jsx)("rect", {
                    fill: "white",
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%"
                }), (0, l.jsx)("circle", {
                    fill: "black",
                    cx: v.offsetX + _,
                    cy: N,
                    r: _
                })]
            }), (0, l.jsx)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: "url(#".concat(I, ")"),
                children: t
            })]
        })
    }
}