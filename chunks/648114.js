function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ThemeSelectionGroupType: function() {
            return i
        },
        trackClientThemeUpdated: function() {
            return H
        },
        default: function() {
            return Y
        }
    }), n("794252"), n("222007");
    var i, a, s = n("37983"),
        l = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("506838"),
        d = n("446674"),
        c = n("151426"),
        f = n("819855"),
        m = n("77078"),
        h = n("452804"),
        g = n("206230"),
        _ = n("812204"),
        S = n("685665"),
        p = n("626301"),
        T = n("917247"),
        E = n("956597"),
        v = n("891653"),
        I = n("505093"),
        N = n("161778"),
        y = n("168973"),
        C = n("491605"),
        O = n("476765"),
        A = n("599110"),
        M = n("32531"),
        P = n("714657"),
        b = n("164546"),
        R = n("941719"),
        w = n("49111"),
        D = n("646718"),
        G = n("116319"),
        x = n("397336"),
        L = n("843455"),
        U = n("782340"),
        j = n("845797");
    (a = i || (i = {})).EDITOR = "EDITOR", a.SETTINGS = "SETTINGS";
    let k = Object.freeze({
            EDITOR: x.UserSettingsDelay.SLOW_USER_ACTION,
            SETTINGS: x.UserSettingsDelay.INFREQUENT_USER_ACTION
        }),
        F = l.createContext({}),
        H = e => {
            let {
                isPersisted: t,
                themeName: n,
                analyticsLocations: i
            } = e;
            A.default.track(w.AnalyticEvents.CLIENT_THEME_UPDATED, {
                feature_name: D.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                theme_name: n,
                is_persisted: t,
                location_stack: i
            })
        },
        B = e => {
            let {
                type: t,
                isPreview: n,
                isCoachmark: i
            } = e, a = (0, u.match)({
                type: t,
                isPreview: n,
                isCoachmark: i
            }).with({
                type: "EDITOR",
                isCoachmark: !0,
                isPreview: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                type: "EDITOR",
                isCoachmark: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => U.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
            return (0, s.jsxs)("div", {
                className: j.title,
                children: [(0, s.jsx)(m.Heading, {
                    "aria-label": a,
                    variant: "text-md/medium",
                    children: a
                }), (0, s.jsx)(v.default, {
                    className: j.premiumIcon
                })]
            })
        },
        W = e => {
            var t, n;
            let {
                type: i,
                isPreview: a,
                isCoachmark: l
            } = e, r = (null === (n = (0, T.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
            if (r && a) return null;
            let o = (0, u.match)({
                type: i,
                isPreview: a,
                isCoachmark: l
            }).with({
                type: "EDITOR",
                isPreview: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                onPremiumClick: p.navigateToPremiumMarketingPage
            })).with({
                type: "EDITOR",
                isCoachmark: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                type: "EDITOR",
                isPreview: !1
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                isPreview: !0
            }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                onPremiumClick: p.navigateToPremiumMarketingPage
            })).otherwise(() => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
            return (0, s.jsx)(m.Heading, {
                variant: "text-sm/normal",
                children: o
            })
        },
        K = e => {
            let {
                type: t,
                children: n
            } = e, i = (0, O.useUID)(), a = (0, m.useRadioGroup)({
                orientation: "horizontal",
                labelledBy: i
            }), r = l.useMemo(() => ({
                type: t,
                delay: k[t]
            }), [t]);
            return (0, s.jsx)(F.Provider, {
                value: r,
                children: (0, s.jsx)("div", {
                    ...a,
                    className: j.container,
                    children: n
                })
            })
        };
    K.Basic = e => {
        let {
            className: t
        } = e, {
            delay: n
        } = l.useContext(F), {
            analyticsLocations: i
        } = (0, S.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [a, r, u] = (0, d.useStateFromStoresArray)([N.default, y.default, P.default], () => [N.default.theme, null == P.default.gradientPreset, y.default.useSystemTheme === G.SystemThemeState.ON]), c = e => {
            (0, M.resetBackgroundGradientPreset)(), H({
                isPersisted: !0,
                analyticsLocations: i,
                themeName: "default ".concat(e)
            }), (0, h.saveClientTheme)({
                theme: e
            }, n)
        };
        return (0, s.jsxs)("section", {
            className: o(j.presets, t),
            children: [(0, s.jsx)(b.DefaultThemeSelection, {
                theme: L.ThemeTypes.LIGHT,
                isSelected: r && !u && (0, f.isThemeLight)(a),
                onSelect: () => c(L.ThemeTypes.LIGHT)
            }), (0, s.jsx)(b.DefaultThemeSelection, {
                theme: L.ThemeTypes.DARK,
                isSelected: r && !u && (0, f.isThemeDark)(a),
                onSelect: () => c(L.ThemeTypes.DARK)
            }), (0, s.jsx)(b.DefaultThemeSelection, {
                theme: "system",
                isSelected: r && u,
                onSelect: () => c("system")
            })]
        })
    }, K.Gradient = e => {
        var t, i;
        let {
            className: a,
            renderCTAButtons: r,
            disabled: o = !1
        } = e, {
            type: u,
            delay: f
        } = l.useContext(F), {
            analyticsLocations: m
        } = (0, S.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [v, N, y] = (0, d.useStateFromStoresArray)([P.default], () => {
            var e;
            return [P.default.isPreview, P.default.isCoachmark, null === (e = P.default.gradientPreset) || void 0 === e ? void 0 : e.id]
        }), [O, A] = l.useState(!1), [w, x] = l.useState(-1), L = (0, d.useStateFromStores)([g.default], () => g.default.useReducedMotion), k = (null === (i = (0, T.usePremiumTrialOffer)()) || void 0 === i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
        l.useEffect(() => {
            (w === R.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || y === c.BackgroundGradientPresetId.EASTER_EGG) && A(!0)
        }, [w, u, y]);
        let K = (e, t) => {
            if ((0, M.updateBackgroundGradientPreset)(e.id), H({
                    isPersisted: !v,
                    analyticsLocations: m,
                    themeName: c.BackgroundGradientPresetId[e.id]
                }), v) {
                (0, I.setUseSystemTheme)(G.SystemThemeState.OFF);
                return
            }
            if ((0, h.saveClientTheme)({
                    backgroundGradientPresetId: e.id,
                    theme: e.theme
                }, f), null != t) {
                if (O && A(!1), t <= w || 0 === t) {
                    x(0);
                    return
                }
                x(e => e + 1)
            }
        };
        return (0, s.jsxs)("section", {
            className: a,
            children: ["EDITOR" === u && v && k ? (0, s.jsx)(E.default, {
                type: D.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                children: U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                    onPremiumClick: p.navigateToPremiumMarketingPage
                })
            }) : (0, s.jsxs)("div", {
                className: j.header,
                children: [(0, s.jsxs)("div", {
                    className: j.headings,
                    children: [(0, s.jsx)(B, {
                        type: u,
                        isPreview: v,
                        isCoachmark: N
                    }), (0, s.jsx)(W, {
                        type: u,
                        isPreview: v,
                        isCoachmark: N
                    })]
                }), null == r ? void 0 : r()]
            }), (0, s.jsxs)("div", {
                className: j.presets,
                children: [R.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                    let {
                        id: t
                    } = e;
                    return t !== c.BackgroundGradientPresetId.EASTER_EGG
                }).map((e, t) => (0, s.jsx)(b.GradientThemeSelection, {
                    preset: e,
                    isSelected: y === e.id,
                    onSelect: () => K(e, t),
                    disabled: o,
                    tabIndex: 0 !== t || o ? void 0 : 0
                }, e.id)), (() => {
                    if (!O) return null;
                    let e = R.BACKGROUND_GRADIENT_PRESETS_MAP[c.BackgroundGradientPresetId.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let {
                            default: e
                        } = await n.el("922510").then(n.t.bind(n, "922510", 19));
                        return e
                    }
                    return (0, s.jsxs)("div", {
                        className: j.easterEggSelection,
                        children: [(0, s.jsx)(b.GradientThemeSelection, {
                            preset: e,
                            isSelected: y === c.BackgroundGradientPresetId.EASTER_EGG,
                            onSelect: () => K(e)
                        }), (0, s.jsx)(C.default, {
                            importData: t,
                            shouldAnimate: !L,
                            className: j.sparkles
                        })]
                    })
                })()]
            })]
        })
    };
    var Y = K
}