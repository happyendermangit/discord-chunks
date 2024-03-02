function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return H
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("627445"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("901582"),
        d = n("252744"),
        c = n("340066"),
        f = n("750560"),
        m = n("575365"),
        p = n("502651"),
        h = n("812204"),
        E = n("685665"),
        g = n("299285"),
        C = n("442939"),
        S = n("373469"),
        T = n("26989"),
        I = n("305961"),
        v = n("824563"),
        _ = n("27618"),
        N = n("697218"),
        A = n("599110"),
        x = n("713135"),
        y = n("561845"),
        O = n("217513"),
        R = n("641055"),
        M = n("430312"),
        L = n("763866"),
        P = n("789321"),
        b = n("627601"),
        j = n("935409"),
        U = n("849674"),
        D = n("590456"),
        k = n("49111"),
        w = n("450484"),
        F = n("154477");

    function G(e) {
        e.stopPropagation()
    }

    function B(e) {
        let {
            user: t,
            guildId: n,
            channelId: a,
            setNote: s,
            closePopout: N,
            setPopoutRef: B,
            disableUserProfileLink: H = __OVERLAY__,
            analyticsParams: V = {}
        } = e, K = i.useRef(null), W = (0, O.default)(t.id, n), Y = (0, d.default)(K), z = (0, r.useStateFromStores)([x.default], () => {
            var e;
            return null === (e = x.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), {
            AnalyticsLocationProvider: Z
        } = (0, E.default)(h.default.PROFILE_POPOUT), J = (0, r.useStateFromStores)([I.default], () => null != n ? I.default.getGuild(n) : null), q = (0, r.useStateFromStores)([T.default], () => null != n ? T.default.getMember(n, t.id) : null), X = t.isNonUserBot(), {
            activity: Q,
            customStatusActivity: $,
            status: ee,
            isMobile: et,
            isApplicationStreaming: en
        } = (0, r.useStateFromStoresObject)([S.default, v.default], () => {
            let e = null != S.default.getAnyStreamForUser(t.id);
            return {
                activity: v.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === k.ActivityTypes.PLAYING : n !== k.ActivityTypes.CUSTOM_STATUS
                }),
                customStatusActivity: v.default.findActivity(t.id, e => {
                    let {
                        type: t
                    } = e;
                    return t === k.ActivityTypes.CUSTOM_STATUS
                }),
                status: X ? null : v.default.getStatus(t.id),
                isMobile: v.default.isMobileOnline(t.id),
                isApplicationStreaming: e
            }
        }), [el, ei] = i.useState(!1), ea = i.useMemo(() => null != n ? {
            [n]: [t.id]
        } : {}, [n, t.id]);
        (0, f.useSubscribeGuildMembers)(ea);
        let es = (0, y.default)(t.id, n),
            er = (0, U.useShouldShowUserPopoutCollectiblesUpsell)({
                popoutUser: t,
                source: b.UserPopoutUpsellSource.USER_POPOUT,
                guildId: n
            }),
            [eo, eu] = i.useState(!1);
        (0, c.default)(() => eu(!0), er.shouldShow ? 250 : null);
        let ed = (0, C.useGetOrFetchApplication)(null == Q ? void 0 : Q.application_id);
        return i.useEffect(() => {
            null == B || B(null == K ? void 0 : K.current)
        }, [K, B]), i.useEffect(() => {
            if (!el)((null == Q ? void 0 : Q.application_id) == null || null != ed) && (null == n || (null == q ? void 0 : q.fullProfileLoadedTimestamp) != null) && (function() {
                var e;
                let l, i, s;
                null != Q && (l = Q.party, i = Q.assets, s = null != Q.application_id ? g.default.getApplication(Q.application_id) : null);
                let r = ee;
                ee === k.StatusTypes.ONLINE && (r = et ? k.AnalyticsUserStatusTypes.ONLINE_MOBILE : k.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                let o = null != q ? {
                        has_nickname: !!(null == q ? void 0 : q.nick),
                        has_guild_member_avatar: !!(null == q ? void 0 : q.avatar),
                        has_guild_member_banner: !!(null == W ? void 0 : W.isUsingGuildMemberBanner()),
                        has_guild_member_bio: !!(null == W ? void 0 : W.isUsingGuildMemberBio())
                    } : {},
                    u = null != z ? {
                        other_application_id: null == z ? void 0 : z.id,
                        other_application_name: t.toString()
                    } : {};
                A.default.track(k.AnalyticEvents.OPEN_POPOUT, {
                    type: "Profile Popout",
                    guild_id: n,
                    channel_id: a,
                    other_user_id: t.id,
                    application_id: null != Q ? Q.application_id : void 0,
                    application_name: null != Q ? Q.name : void 0,
                    sku_id: null != s ? s.primarySkuId : null,
                    is_friend: _.default.isFriend(t.id),
                    has_images: !!(null !== (e = null == i ? void 0 : i.large_image) && void 0 !== e ? e : null == i ? void 0 : i.small_image),
                    party_max: null != l && null != l.size ? l.size[1] : void 0,
                    party_id: null != l ? l.id : void 0,
                    party_platform: null != l && (0, w.isSpotifyParty)(l.id) ? k.PlatformTypes.SPOTIFY : null,
                    game_platform: (0, m.default)(Q),
                    profile_user_status: r,
                    is_streaming: en,
                    has_custom_status: null != $,
                    has_avatar_decoration: null != t.avatarDecoration,
                    has_profile_effect: (null == W ? void 0 : W.profileEffectId) != null,
                    profile_has_nitro_customization: null != W && (null == W ? void 0 : W.hasPremiumCustomization()),
                    profile_has_theme_color_customized: null != W && W.hasThemeColors(),
                    profile_has_theme_animation: (null == W ? void 0 : W.popoutAnimationParticleType) != null,
                    ...o,
                    ...u,
                    ...V
                })
            }(), ei(!0))
        }, [q, null == Q ? void 0 : Q.application_id, ed, el, n]), (0, l.jsx)(Z, {
            children: (0, l.jsx)(u.default, {
                section: k.AnalyticsSections.PROFILE_POPOUT,
                children: (0, l.jsx)(o.Dialog, {
                    ref: K,
                    "aria-label": t.username,
                    onClick: G,
                    onContextMenu: G,
                    style: er.shouldShow ? {
                        marginTop: P.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
                    } : void 0,
                    children: (0, l.jsxs)(M.default, {
                        user: t,
                        guildId: n,
                        profileType: D.UserProfileTypes.POPOUT,
                        className: er.shouldShow ? F.hasCollectiblesUpsell : void 0,
                        showOutOfBoundaryComponents: eo,
                        children: [(0, l.jsx)(j.default, {
                            user: t,
                            displayProfile: W,
                            guildId: n,
                            channelId: a,
                            onClose: () => null == N ? void 0 : N(),
                            isMobile: et,
                            isStreaming: (0, p.default)(Q),
                            status: ee,
                            disableUserProfileLink: H,
                            isHovering: Y,
                            upsell: er.shouldShow ? (0, l.jsx)(P.default, {
                                user: t,
                                upsellSource: b.UserPopoutUpsellSource.USER_POPOUT,
                                displayProfile: W,
                                onClose: N,
                                ...er
                            }) : void 0
                        }), (0, l.jsxs)(M.default.Inner, {
                            children: [(0, l.jsx)(R.default, {
                                onTooltipClose: N
                            }), (0, l.jsx)(L.default, {
                                activity: Q,
                                customStatusActivity: $,
                                displayProfile: W,
                                user: t,
                                guild: J,
                                guildMember: q,
                                channelId: a,
                                onClose: N,
                                setNote: s,
                                canDM: es,
                                analyticsParams: V
                            })]
                        })]
                    })
                })
            })
        })
    }
    var H = i.memo(function(e) {
        let {
            userId: t,
            user: n,
            ...i
        } = e, a = (0, r.useStateFromStores)([N.default], () => N.default.getUser(t), [t]), o = null != n ? n : a;
        return s(null != o, "Unexpected missing user"), (0, l.jsx)(B, {
            user: o,
            ...i
        })
    })
}