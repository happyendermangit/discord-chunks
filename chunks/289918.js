function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return J
        }
    }), n("222007");
    var l, i, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("509043"),
        d = n("446674"),
        c = n("669491"),
        f = n("77078"),
        m = n("79112"),
        p = n("812204"),
        h = n("685665"),
        E = n("462274"),
        g = n("335031"),
        C = n("252063"),
        S = n("38766"),
        T = n("845579"),
        v = n("271938"),
        I = n("42203"),
        _ = n("305961"),
        N = n("18494"),
        A = n("697218"),
        x = n("471671"),
        y = n("275623"),
        O = n("945330"),
        R = n("474571"),
        M = n("216422"),
        L = n("987772"),
        P = n("956089"),
        b = n("599110"),
        j = n("315102"),
        U = n("719923"),
        D = n("713135"),
        k = n("581295"),
        w = n("878569"),
        F = n("236100"),
        G = n("590456"),
        B = n("49111"),
        H = n("646718"),
        V = n("782340"),
        K = n("320399");
    (i = l || (l = {}))[i.SHOULD_LOAD = 0] = "SHOULD_LOAD", i[i.LOADING = 1] = "LOADING", i[i.COMPLETE = 2] = "COMPLETE";
    let W = {
            [G.UserProfileTypes.POPOUT]: 18,
            [G.UserProfileTypes.MODAL]: 24,
            [G.UserProfileTypes.SETTINGS]: 0,
            [G.UserProfileTypes.PANEL]: 18,
            [G.UserProfileTypes.POMELO_POPOUT]: 18,
            [G.UserProfileTypes.CANCEL_MODAL]: 0
        },
        Y = {
            [G.UserProfileTypes.MODAL]: B.AnalyticsPages.USER_PROFILE,
            [G.UserProfileTypes.POPOUT]: B.AnalyticsPages.USER_POPOUT,
            [G.UserProfileTypes.SETTINGS]: B.AnalyticsPages.USER_POPOUT,
            [G.UserProfileTypes.PANEL]: B.AnalyticsPages.DM_CHANNEL,
            [G.UserProfileTypes.POMELO_POPOUT]: B.AnalyticsPages.POMELO_POPOUT,
            [G.UserProfileTypes.CANCEL_MODAL]: B.AnalyticsPages.USER_POPOUT
        };

    function z(e) {
        let {
            type: t,
            shown: l,
            onClick: i
        } = e, r = (0, d.useStateFromStores)([A.default], () => {
            let e = A.default.getCurrentUser();
            return U.default.canUsePremiumProfileCustomization(e)
        }), u = s.useRef(!1), {
            analyticsLocations: c
        } = (0, h.default)(p.default.BADGE);
        return s.useEffect(() => {
            l && !u.current && (u.current = !0, b.default.track(B.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: H.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                location: {
                    page: Y[t],
                    section: B.AnalyticsSections.NITRO_BANNER,
                    object: B.AnalyticsObjects.NITRO_BADGE
                },
                location_stack: c
            }))
        }, [c, l, t]), (0, a.jsx)(f.Tooltip, {
            tooltipContentClassName: K.premiumIconTooltipContent,
            text: r ? V.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : V.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
            children: e => (0, a.jsx)(f.Clickable, {
                ...e,
                onClick: r ? void 0 : () => {
                    var e;
                    e = c, (0, f.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("292890").then(n.bind(n, "292890"));
                        return n => {
                            let {
                                onClose: l,
                                ...i
                            } = n;
                            return (0, a.jsx)(t, {
                                analyticsLocations: e,
                                title: V.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                description: V.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                    onAndMoreWithPremiumClick: () => {
                                        l(), m.default.open(B.UserSettingsSections.PREMIUM, null, {
                                            analyticsLocations: e
                                        })
                                    }
                                }),
                                onClose: l,
                                ...i
                            })
                        }
                    }), null == i || i()
                },
                className: o(K.premiumIconWrapper, {
                    [K.visible]: l,
                    [K.clickable]: !r
                }),
                children: (0, a.jsx)(P.TextBadge, {
                    color: "rgba(32, 34, 37, 0.8)",
                    text: (0, a.jsx)(M.default, {
                        width: 16,
                        height: 16,
                        className: K.premiumIcon
                    })
                })
            })
        })
    }

    function Z(e) {
        let {
            darkenOnHover: t,
            profileType: n,
            profileLabel: l,
            icon: i,
            ...s
        } = e, r = W[n], o = "pencil" === i ? L.default : R.default;
        return (0, a.jsx)(f.Clickable, {
            ...s,
            "aria-label": l,
            className: t ? K.pencilContainerDark : K.pencilContainer,
            children: (0, a.jsx)(f.Tooltip, {
                text: l,
                children: e => (0, a.jsx)(o, {
                    ...e,
                    width: r,
                    height: r,
                    className: K.editIcon
                })
            })
        })
    }

    function J(e) {
        var t, n, l;
        let {
            user: i,
            displayProfile: r,
            bannerSrc: m,
            onClose: p,
            guildId: h,
            profileType: A = G.UserProfileTypes.POPOUT,
            isHovering: R,
            animateOnHover: M,
            allowEdit: L = !0,
            showPremiumBadgeUpsell: P = !0,
            hasProfileEffect: b = !1
        } = e, [W, Y] = s.useState((null == r ? void 0 : r.banner) == null ? 2 : 0), J = (0, d.useStateFromStores)([_.default], () => _.default.getGuild(h)), q = (0, d.useStateFromStores)([v.default], () => v.default.getId()), X = q === i.id && L, Q = U.default.isPremiumAtLeast(null == r ? void 0 : r.premiumType, H.PremiumTypes.TIER_2), [$, ee] = s.useState(!1), et = (0, d.useStateFromStores)([x.default], () => x.default.isFocused()), en = T.GifAutoPlay.getSetting(), el = (0, f.useToken)(c.default.unsafe_rawColors.PRIMARY_800).hex(), ei = (0, f.getAvatarSize)(f.AvatarSizes.SIZE_80), ea = (0, u.hex2int)((0, E.default)(i.getAvatarURL(h, ei), el, !1)), es = (0, g.default)(null !== (t = null == r ? void 0 : r.primaryColor) && void 0 !== t ? t : ea).hsl, er = (0, w.getUserBannerSize)(A), eo = null != m ? m : null == r ? void 0 : r.getBannerURL({
            size: er,
            canAnimate: M || !en ? $ : et
        }), eu = null != eo, ed = (0, d.useStateFromStores)([D.default], () => D.default.getUserProfile(i.id)), ec = I.default.getChannel(N.default.getChannelId()), {
            appsInGDMEnabled: ef,
            availableApplications: em
        } = (0, C.usePrivateChannelIntegrationState)({
            channelId: null !== (n = null == ec ? void 0 : ec.id) && void 0 !== n ? n : B.EMPTY_STRING_SNOWFLAKE_ID
        }), ep = null == ed ? void 0 : ed.application, eh = ef && null != em.find(e => e.id === (null == ep ? void 0 : ep.id));
        (0, s.useEffect)(() => {
            if (eu && Q && 0 === W) {
                Y(1);
                let e = new Image;
                e.src = eo, e.onload = () => Y(2)
            }
        }, [i, eu, Q, eo, W]), s.useEffect(() => {
            if (en || !Q) return;
            let e = null != m ? m : null == r ? void 0 : r.getBannerURL({
                size: er,
                canAnimate: !0
            });
            if (null == e) return;
            let t = new Image;
            t.src = e
        }, [en, Q, m, r, er]);
        let eE = (0, S.default)({
            analyticsLocation: {
                page: B.AnalyticsPages.USER_POPOUT,
                section: B.AnalyticsSections.PROFILE_POPOUT
            }
        });
        return (0, a.jsx)(k.default, {
            isPremium: Q,
            hasThemeColors: null !== (l = null == r ? void 0 : r.canEditThemes) && void 0 !== l && l,
            profileType: A,
            hasBanner: eu,
            hasProfileEffect: b,
            children: (0, a.jsxs)("div", {
                className: o(K.banner, (0, w.getUserBannerStyles)({
                    profileType: A,
                    user: {
                        hasBanner: eu,
                        isPremium: Q,
                        hasProfileEffect: b
                    }
                }), {
                    [K.reducedMotion]: !en
                }),
                onMouseMove: () => ee(!0),
                onMouseLeave: () => ee(!1),
                style: {
                    backgroundImage: eu && Q ? "url(".concat(eo, ")") : void 0,
                    backgroundColor: 2 !== W ? c.default.unsafe_rawColors.PRIMARY_800.css : es
                },
                children: [X ? null == J ? (0, a.jsx)(Z, {
                    darkenOnHover: b && R,
                    profileType: A,
                    profileLabel: V.default.Messages.EDIT_PROFILE,
                    icon: "pencil",
                    onClick: () => {
                        null == p || p(), eE()
                    }
                }) : null == J ? null : (0, a.jsx)(f.Popout, {
                    spacing: 6,
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(F.default, {
                            onClose: t,
                            onSelect: p,
                            guild: J
                        })
                    },
                    children: e => (0, a.jsx)(Z, {
                        darkenOnHover: b && R,
                        profileLabel: V.default.Messages.EDIT_PROFILE,
                        icon: "pencil",
                        ...e,
                        profileType: A
                    })
                }) : (() => {
                    let e = P && eu && A !== G.UserProfileTypes.SETTINGS;
                    return e ? (0, a.jsx)(z, {
                        type: A,
                        shown: void 0 === R ? $ : R,
                        onClick: p
                    }) : null
                })(), eh ? A !== G.UserProfileTypes.MODAL ? null : (0, a.jsx)(f.Clickable, {
                    onClick: p,
                    "aria-label": V.default.Messages.BACK,
                    className: K.pencilContainer,
                    children: (0, a.jsx)(f.Tooltip, {
                        text: V.default.Messages.BACK,
                        children: e => (0, a.jsx)(O.default, {
                            ...e,
                            className: K.closeIcon,
                            color: "white"
                        })
                    })
                }) : null, !en && (0, j.isAnimatedImageURL)(eo) && (0, a.jsx)(y.default, {
                    className: K.gifTag
                })]
            })
        })
    }
}