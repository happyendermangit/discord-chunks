function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("373469"),
        d = n("42203"),
        c = n("102985"),
        f = n("387111"),
        m = n("158998"),
        p = n("713135"),
        h = n("765698"),
        E = n("906889"),
        g = n("10532"),
        C = n("648149"),
        S = n("915712"),
        T = n("261523"),
        I = n("369869"),
        v = n("545590"),
        _ = n("316095"),
        N = n("802279"),
        A = n("577172"),
        x = n("465215"),
        y = n("301998"),
        O = n("379657"),
        R = n("853780"),
        M = n("574191"),
        L = n("491250"),
        P = n("453649"),
        b = n("49111"),
        j = n("838133"),
        U = n("787678");

    function D(e) {
        var t, n, a;
        let {
            activity: D,
            customStatusActivity: k,
            user: w,
            displayProfile: F,
            guild: G,
            guildMember: B,
            channelId: H,
            onClose: V,
            setNote: K = !1,
            canDM: W,
            hideNote: Y = !1,
            showCopiableUsername: z = !1,
            analyticsParams: Z
        } = e, J = (0, r.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), q = (0, r.useStateFromStores)([p.default], () => {
            var e;
            return null === (e = p.default.getUserProfile(w.id)) || void 0 === e ? void 0 : e.application
        }), X = (0, r.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(w.id)), Q = (0, P.useGetVoiceChannelInfoForVoiceActivitySection)(w.id, null == G ? void 0 : G.id), $ = (null == D ? void 0 : D.type) === b.ActivityTypes.HANG_STATUS, ee = !X && null != Q && !$, {
            showVoiceActivityInProfile: et
        } = h.VoiceActivityProfileExperiment.useExperiment({
            location: "user popout"
        }, {
            autoTrackExposure: ee
        }), en = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(H)), {
            profileTheme: el
        } = (0, E.default)(w, F), ei = i.useRef(null), [ea, es] = i.useState(!0), er = i.useCallback(() => {
            let {
                current: e
            } = ei;
            null != e && es(0 === e.getScrollerState().scrollTop)
        }, []);
        if (i.useLayoutEffect(() => {
                var e;
                let {
                    current: t
                } = ei;
                null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                    top: 0
                }))
            }, []), w.isSystemUser()) return null;
        if (w.isNonUserBot()) return (0, l.jsx)(L.default, {
            user: w,
            nickname: null,
            pronouns: null,
            className: j.usernameSection,
            lastSection: !0
        });
        let eo = null !== (t = f.default.getNickname(null == G ? void 0 : G.id, H, w)) && void 0 !== t ? t : m.default.getName(w),
            eu = {
                location: {
                    page: b.AnalyticsPages.USER_POPOUT,
                    section: b.AnalyticsSections.USER_PROFILE
                }
            };
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(L.default, {
                className: j.usernameSection,
                user: w,
                nickname: eo,
                pronouns: null == F ? void 0 : F.pronouns,
                usernameIcon: w.hasAvatarForGuild(null == G ? void 0 : G.id) && (0, l.jsx)(C.default, {
                    user: w,
                    nickname: eo
                }),
                shouldCopyOnClick: z
            }), (0, l.jsxs)(o.HeadingLevel, {
                children: [(0, l.jsx)(N.default, {
                    className: j.customStatusSection,
                    customStatusActivity: k
                }), (0, l.jsx)(g.default, {
                    className: j.divider
                }), (0, l.jsxs)(o.AdvancedScroller, {
                    className: s(j.scroller, {
                        [j.scrollerSeparator]: !ea
                    }),
                    onScroll: er,
                    ref: ei,
                    children: [(0, l.jsx)(v.default, {
                        user: w,
                        guildId: null == G ? void 0 : G.id
                    }), (0, l.jsx)(I.default, {
                        isUsingGuildBio: null !== (n = null == F ? void 0 : F.isUsingGuildMemberBio()) && void 0 !== n && n,
                        bio: null == F ? void 0 : F.bio,
                        guild: G,
                        hidePersonalInformation: J
                    }), (0, l.jsx)(x.default, {
                        userId: w.id,
                        guild: G,
                        guildMember: B
                    }), et && ee && (0, l.jsx)(P.default, {
                        voiceChannel: Q.voiceChannel,
                        voiceGuild: Q.voiceGuild,
                        onClose: V,
                        color: U.buttonColor
                    }), (0, l.jsx)(S.default, {
                        activity: D,
                        user: w,
                        guild: G,
                        channelId: H,
                        onClose: V,
                        analyticsParams: (null == Z ? void 0 : Z.location) != null ? Z : eu
                    }), (null == q ? void 0 : q.popularApplicationCommandIds) != null && null != en ? (0, l.jsx)(O.default, {
                        applicationId: q.id,
                        commandIds: q.popularApplicationCommandIds,
                        channel: en,
                        guildId: null == G ? void 0 : G.id,
                        onClick: V
                    }) : null, (0, l.jsx)(T.default, {
                        user: w,
                        guildId: null == G ? void 0 : G.id
                    }), (0, l.jsx)(M.default, {
                        user: w,
                        guild: G,
                        guildMember: B,
                        showBorder: null !== (a = null == F ? void 0 : F.canEditThemes) && void 0 !== a && a
                    }), (0, l.jsx)(_.default, {
                        userId: w.id,
                        channelId: H,
                        guild: G,
                        onClose: V,
                        theme: el
                    }), null != q && void 0 !== H && (0, l.jsx)(R.default, {
                        channelId: H,
                        applicationId: q.id
                    }), (0, l.jsx)(y.default, {
                        user: w,
                        setNote: K,
                        autoFocus: !W,
                        lastSection: !W,
                        hideNote: J || Y
                    }), (0, l.jsx)(A.default, {
                        user: w,
                        setNote: K,
                        canDM: W,
                        onClose: V
                    })]
                })]
            })]
        })
    }
}