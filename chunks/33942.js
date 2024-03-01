function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2AuthorizePage: function() {
            return ee
        },
        OAuth2AuthorizeModal: function() {
            return et
        },
        OAuth2Authorize: function() {
            return en
        },
        useOAuth2AuthorizeForm: function() {
            return es
        },
        openOAuth2ModalWithCreateGuildModal: function() {
            return er
        },
        openOAuth2Modal: function() {
            return ea
        },
        getOAuth2AuthorizeProps: function() {
            return eo
        }
    }), n("222007"), n("70102");
    var s, i, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        d = n.n(o),
        u = n("90915"),
        l = n("746379"),
        f = n.n(l),
        _ = n("891189"),
        c = n("316693"),
        g = n("446674"),
        m = n("271841"),
        h = n("551042"),
        v = n("670914"),
        E = n("242670"),
        p = n("437822"),
        y = n("84460"),
        T = n("191225"),
        C = n("716241"),
        I = n("148217"),
        S = n("970254"),
        A = n("442939"),
        D = n("616265"),
        N = n("894887"),
        O = n("393414"),
        P = n("766274"),
        b = n("271938"),
        V = n("760190"),
        R = n("991170"),
        k = n("253981"),
        M = n("872825"),
        w = n("8222"),
        L = n("164386"),
        U = n("978970"),
        G = n("29479"),
        F = n("357974"),
        H = n("580363"),
        B = n("613070"),
        x = n("530487"),
        Y = n("351205"),
        j = n("223934"),
        K = n("315417"),
        W = n("267570"),
        z = n("941281"),
        q = n("891254"),
        X = n("49111"),
        Q = n("954016"),
        Z = n("782340"),
        J = n("169294");
    let $ = "oauth2-authorize-header-id";

    function ee() {
        let e = (0, u.useLocation)(),
            t = a.useMemo(() => (0, M.parseOAuth2AuthorizeProps)(e.search), [e.search]);
        return (0, I.default)(), a.useEffect(() => {
            b.default.isAuthenticated() && p.default.getExperiments()
        }, []), (0, r.jsx)(W.OAuth2Page, {
            children: (0, r.jsx)(en, {
                ...t,
                showLogout: !0
            })
        })
    }

    function et(e) {
        let {
            transitionState: t,
            ...n
        } = e;
        return (0, r.jsx)(W.OAuth2Modal, {
            transitionState: t,
            "aria-labelledby": $,
            children: (0, r.jsx)(en, {
                ...n,
                inApp: !0,
                scrollable: !0
            })
        })
    }

    function en(e) {
        let {
            scrollable: t,
            ...n
        } = e, {
            header: s,
            body: i,
            footer: a,
            nextStep: o,
            appDetails: u
        } = es(n), l = (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: J.content,
                children: [s, i, null == o ? u : null]
            }), a]
        });
        return t ? (0, r.jsx)("div", {
            className: d(J.authorize, {
                [J.inApp]: n.inApp
            }),
            children: (0, r.jsx)(v.ScrollerThin, {
                orientation: "auto",
                children: l
            })
        }) : (0, r.jsx)("div", {
            className: d(J.authorize, {
                [J.inApp]: n.inApp
            }),
            children: (0, r.jsx)("div", {
                children: l
            })
        })
    }

    function es(e) {
        var t, n, s, i, o;
        let d, l, h, v, p, I, {
                clientId: D,
                responseType: N,
                redirectUri: W,
                codeChallenge: ee,
                codeChallengeMethod: et,
                state: en,
                prompt: es,
                authorization: ei,
                scopes: er,
                permissions: ea,
                guildId: eo,
                channelId: ed,
                integrationType: eu,
                disableGuildSelect: el = !1,
                showLogout: ef = !1,
                cancelCompletesFlow: e_ = !0,
                isTrustedName: ec = !1,
                isEmbeddedFlow: eg = !1,
                inApp: em = !1,
                callback: eh,
                callbackWithoutPost: ev,
                onClose: eE
            } = e,
            ep = (0, u.useLocation)(),
            ey = S.default.useExperiment({
                location: "auth web"
            }),
            eT = ey.userAppsTreatment === S.UserAppsTreatment.ALLOWED,
            [eC, eI] = a.useState(null),
            [eS, eA] = a.useState(null),
            [eD, eN] = a.useState(null),
            [eO, eP] = a.useState(!1),
            eb = null == eC ? void 0 : eC.guilds,
            [eV, eR] = a.useState(null != eo ? eo : null),
            [ek, eM] = a.useState(null != ed ? ed : null),
            [ew, eL] = a.useState(R.default.NONE),
            eU = a.useMemo(() => (null == eC ? void 0 : eC.user) != null ? new P.default(eC.user) : null, [null == eC ? void 0 : eC.user]),
            eG = a.useMemo(() => null == eb ? void 0 : eb.find(e => e.id === eV), [eb, eV]),
            [eF, eH] = a.useState(null),
            eB = a.useMemo(() => {
                var e;
                return eT && null == ei && null == eu && (null !== (e = null == er ? void 0 : er.length) && void 0 !== e ? e : 0) === 0 && null == W
            }, [ei, eT, null == er ? void 0 : er.length, W, eu]),
            ex = (0, A.useGetOrFetchApplication)(eB ? D : null),
            eY = a.useMemo(() => {
                var e, t;
                return null == eF ? null : null == ex ? void 0 : null === (t = ex.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eF]) || void 0 === e ? void 0 : e.oauth2InstallParams
            }, [null == ex ? void 0 : ex.integrationTypesConfig, eF]),
            {
                requestedScopes: ej,
                accountScopes: eK
            } = a.useMemo(() => {
                let e = eB ? null == eY ? void 0 : eY.scopes : er,
                    t = (0, M.filterScopes)(null != e ? e : []),
                    n = G.OrderedAccountScopes.filter(e => t.includes(e));
                return {
                    requestedScopes: t,
                    accountScopes: n
                }
            }, [null == eY ? void 0 : eY.scopes, er, eB]),
            eW = a.useMemo(() => {
                var e;
                let t = eB ? c.default.deserialize(null !== (e = null == eY ? void 0 : eY.permissions) && void 0 !== e ? e : 0) : ea;
                return null != t ? t : R.default.NONE
            }, [null == eY ? void 0 : eY.permissions, ea, eB]),
            ez = (0, g.useStateFromStores)([T.default], () => T.default.getCurrentEmbeddedActivity()),
            eq = (0, g.useStateFromStoresObject)([y.default, T.default], () => {
                let e;
                let t = y.default.getIsEnabled();
                if (null != ez) {
                    if (e = T.default.getShelfActivities(ez.guildId).find(e => e.application_id === ez.applicationId), t && void 0 === e) {
                        var n;
                        e = null === (n = y.default.getDeveloperShelfItems().find(e => e.id === ez.applicationId)) || void 0 === n ? void 0 : n.embeddedActivityConfig
                    }
                    if (null != e) return {
                        ...Q.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                        ...e
                    }
                }
                return {}
            }, [ez]),
            eX = Object.keys(eq).length > 0 ? eq : null,
            eQ = a.useCallback(async e => {
                if (null != ev) {
                    ev(e);
                    return
                }
                if (!e && !e_) {
                    null != eh && (eh({
                        application: null == eC ? void 0 : eC.application,
                        guild: eG
                    }), null == eE || eE());
                    return
                }
                if (null == eF) {
                    eN(Error("No integration type was selected."));
                    return
                }
                try {
                    eP(!0);
                    let t = await (0, w.authorize)({
                        authorize: e,
                        clientId: D,
                        scopes: ej,
                        responseType: N,
                        redirectUri: W,
                        codeChallenge: ee,
                        codeChallengeMethod: et,
                        state: en,
                        integrationType: eF,
                        permissions: c.default.remove(eW, ew),
                        guildId: eF === _.ApplicationIntegrationType.GUILD_INSTALL && null != eV ? eV : void 0,
                        channelId: eF === _.ApplicationIntegrationType.GUILD_INSTALL && null != ek ? ek : void 0
                    });
                    if (null != eh) eh({
                        application: null == eC ? void 0 : eC.application,
                        location: t.location,
                        guild: eG
                    }), null == eE || eE();
                    else if (null != t.location) {
                        let {
                            host: e,
                            path: n
                        } = f.parse(t.location);
                        k.default.isDiscordHostname(e) && n === X.Routes.OAUTH2_AUTHORIZED ? (0, O.transitionTo)(X.Routes.OAUTH2_AUTHORIZED, {
                            state: {
                                application: null == eC ? void 0 : eC.application,
                                guild: eG
                            }
                        }) : window.location = t.location
                    } else eP(!1)
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && "" !== e.message ? eN(Error(e.message)) : eN(e), eA(1), eP(!1)
                }
            }, [ev, e_, eh, null == eC ? void 0 : eC.application, eG, eE, D, ej, N, W, ee, et, en, eW, ew, eV, eF, ek]),
            eZ = a.useRef(!1),
            eJ = a.useCallback(async () => {
                if (!b.default.isAuthenticated()) {
                    (0, w.logoutWithRedirect)(ep);
                    return
                }
                if (!eZ.current) {
                    eZ.current = !0;
                    try {
                        let e = null != ei ? ei : await (0, w.fetchAuthorization)({
                            clientId: D,
                            scopes: ej,
                            responseType: N,
                            redirectUri: W,
                            codeChallenge: ee,
                            codeChallengeMethod: et,
                            state: en,
                            userInstall: eF === _.ApplicationIntegrationType.USER_INSTALL
                        });
                        eI((0, L.convertOAuth2Authorization)(e)), es === F.OAuth2Prompts.NONE && e.authorized && eQ(!0), (0, C.trackWithMetadata)(X.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
                            application_id: e.application.id
                        })
                    } catch (n) {
                        let {
                            status: e,
                            body: t
                        } = n;
                        if (401 === e) {
                            (0, w.logoutWithRedirect)(ep);
                            return
                        }
                        eN(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
                    } finally {
                        eZ.current = !1
                    }
                }
            }, [ep, ei, D, ej, N, W, ee, et, en, eF, es, eQ]),
            e$ = a.useMemo(() => {
                var e;
                if (null == ex || !eB) return [];
                let t = Object.entries(null !== (e = ex.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
                    let [t, n] = e;
                    return null != n.oauth2InstallParams
                }).map(e => {
                    let [t, n] = e;
                    return Number(t)
                });
                return t
            }, [ex, eB]);
        if (a.useEffect(() => {
                if (null == eS && (!eB || null != ex) && V.default.hasLoadedExperiments) {
                    if (null != ei) {
                        var e;
                        eH(null !== (e = ei.integration_type) && void 0 !== e ? e : _.ApplicationIntegrationType.GUILD_INSTALL), eA(1)
                    } else e$.length > 1 ? eA(0) : (1 === e$.length ? eH(e$[0]) : eT && null != eu ? eH(eu) : eH(_.ApplicationIntegrationType.GUILD_INSTALL), eA(1))
                }
            }, [ei, e$, ex, eT, eB, eu, eS]), a.useEffect(() => {
                if (null == eF || null != eC || null != eD) return;
                eF === _.ApplicationIntegrationType.USER_INSTALL && (eR(null), eM(null));
                let e = ej.filter(e => !G.ValidScopes.includes(e));
                0 === ej.length ? eN(Error("No scopes were provided.")) : e.length > 0 ? eN(Error("Invalid scope: ".concat(e[0]))) : (0, U.containsDisallowedPermission)(null != eW ? eW : R.default.NONE) ? eN(Error("Invalid permission(s) provided.")) : eJ()
            }, [eJ, ej, eW, eF, eC, eD]), eD instanceof Error) return {
            body: (0, r.jsx)(z.OAuth2Error, {
                message: eD.message
            })
        };
        let e1 = !1,
            e0 = !0,
            e3 = !0,
            e2 = !0;
        switch (eS) {
            case null:
                return {
                    body: (0, r.jsx)(E.Spinner, {})
                };
            case 0:
                if (null == ex) return {
                    body: (0, r.jsx)(E.Spinner, {})
                };
                d = (0, r.jsx)(K.default, {
                    inApp: em,
                    application: ex,
                    onSelect: e => {
                        eH(e), eI(null), eA(1)
                    }
                }), e0 = !1, e3 = !1, e2 = em;
                break;
            case 1:
                if (null == eC || null == eU) return {
                    body: (0, r.jsx)(E.Spinner, {})
                };
                let e4 = null == eD || eD instanceof Error ? {} : eD,
                    e6 = null == eb ? void 0 : eb.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                    e9 = eF === _.ApplicationIntegrationType.GUILD_INSTALL && ej.includes(X.OAuth2Scopes.WEBHOOK_INCOMING),
                    e8 = e9 || eF === _.ApplicationIntegrationType.GUILD_INSTALL && (ej.includes(X.OAuth2Scopes.BOT) || ej.includes(X.OAuth2Scopes.APPLICATIONS_COMMANDS));
                d = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(B.default, {
                        application: eC.application,
                        accountScopes: eK,
                        errors: e4,
                        isTrustedName: ec
                    }), e8 ? (0, r.jsx)(Y.default, {
                        error: (null !== (n = null !== (t = e4[X.OAuth2Scopes.BOT]) && void 0 !== t ? t : e4[X.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                        selectedGuildId: eV,
                        onGuildChange: eR,
                        guilds: null != e6 ? e6 : [],
                        disabled: "" !== eV && null != eV && !0 === el
                    }) : null, e9 ? (0, r.jsx)(q.default, {
                        error: (null !== (s = e4[X.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== s ? s : [])[0],
                        selectedChannelId: ek,
                        selectedGuildId: eV,
                        onChannelChange: eM
                    }) : null]
                }), ej.includes(X.OAuth2Scopes.BOT) && !c.default.equals(eW, R.default.NONE) && (h = 2), e$.length > 1 && (l = 0), e1 = e8 && null == eG || e9 && null == ek;
                break;
            case 2:
                if (null == eC || null == eU) return {
                    body: (0, r.jsx)(E.Spinner, {})
                };
                d = (0, r.jsx)(x.default, {
                    application: eC.application,
                    permissions: null != eW ? eW : R.default.NONE,
                    deniedPermissions: ew,
                    onPermissionsChange: (e, t) => {
                        eL(n => e ? c.default.remove(n, t) : c.default.add(n, t))
                    },
                    guild: eG
                }), l = 1
        }
        if (e0 && null != eC) {
            let e = null === (i = eC.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
            v = (0, r.jsx)(H.default, {
                embeddedActivityConfig: eX,
                application: eC.application,
                scopes: ej,
                redirectUri: null !== (o = eC.redirect_uri) && void 0 !== o ? o : null,
                approximateGuildCount: void 0 !== e ? e : null,
                isEmbeddedFlow: eg
            })
        }
        return e3 && null != eC && null != eU && (p = (0, r.jsx)(j.default, {
            id: $,
            user: eU,
            application: eC.application,
            bot: eC.bot,
            accountScopes: eK,
            showLogout: ef || !1,
            location: ep,
            isTrustedName: ec
        })), e2 && (I = (0, r.jsxs)("div", {
            className: J.footer,
            children: [null != l ? (0, r.jsx)(m.Button, {
                look: m.Button.Looks.LINK,
                color: m.Button.Colors.PRIMARY,
                onClick: () => eA(l),
                children: Z.default.Messages.BACK
            }) : (0, r.jsx)(m.Button, {
                look: m.Button.Looks.LINK,
                color: m.Button.Colors.PRIMARY,
                onClick: () => eQ(!1),
                children: Z.default.Messages.CANCEL
            }), null != h && 0 !== eS ? (0, r.jsx)(m.Button, {
                onClick: () => eA(h),
                disabled: e1,
                children: Z.default.Messages.CONTINUE
            }) : 0 !== eS ? (0, r.jsx)(m.Button, {
                onClick: () => eQ(!0),
                disabled: e1,
                submitting: eO,
                children: Z.default.Messages.AUTHORIZE
            }) : null]
        })), {
            header: p,
            body: d,
            footer: I,
            nextStep: h,
            appDetails: v,
            sendAuthorize: eQ
        }
    }

    function ei(e, t) {
        if (null == t.location || null != e && e(t)) return;
        let {
            host: n,
            path: s,
            query: i
        } = f.parse(t.location, !0), a = k.default.isDiscordHostname(n) || window.location.host === n;
        if (a && s === X.Routes.OAUTH2_AUTHORIZED)(0, h.openModal)(e => (0, r.jsx)(W.OAuth2Modal, {
            ...e,
            "aria-labelledby": $,
            children: (0, r.jsx)(z.OAuth2AuthorizedSuccess, {
                guild: t.guild,
                application: t.application,
                onClose: e.onClose
            })
        }));
        else if (a && (null == s ? void 0 : s.startsWith(X.Routes.OAUTH2_ERROR)))(0, h.openModal)(e => {
            let t = i.error_description || i.error || Z.default.Messages.OAUTH2_UNKNOWN_ERROR;
            return Array.isArray(t) && (t = t[0]), (0, r.jsxs)(W.OAuth2Modal, {
                ...e,
                "aria-labelledby": $,
                children: [(0, r.jsx)(z.OAuth2Error, {
                    message: t,
                    onClose: e.onClose
                }), ";"]
            })
        });
        else {
            var o;
            null === (o = window.open(t.location, "_blank")) || void 0 === o || o.focus()
        }
    }

    function er(e, t) {
        if ((0, N.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
            D.default.openCreateGuildModal({
                onSuccess: n => ea({
                    ...e,
                    guildId: n
                }, t)
            });
            return
        }
        ea(e, t)
    }

    function ea(e, t) {
        (0, h.openModal)(t => (0, r.jsx)(et, {
            ...t,
            ...e,
            cancelCompletesFlow: !1,
            callback: ei.bind(null, e.callback)
        }), {
            onCloseCallback: t
        })
    }

    function eo(e) {
        let {
            hostname: t = "",
            host: n,
            path: s,
            query: i
        } = f.parse(e);
        return null != s && null != i && (k.default.isDiscordHostname(t) || n === window.location.host) && (s.startsWith("/api".concat(X.Endpoints.OAUTH2_AUTHORIZE)) || s.startsWith(X.Routes.OAUTH2_AUTHORIZE)) ? (0, M.parseOAuth2AuthorizeProps)(i) : null
    }(i = s || (s = {}))[i.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", i[i.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", i[i.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
}