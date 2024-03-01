function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        default: function() {
            return ed
        }
    }), n("222007"), n("860677"), n("424973"), n("70102");
    var s = n("627445"),
        a = n.n(s),
        o = n("171718"),
        l = n("391679"),
        u = n("446674"),
        c = n("872717"),
        d = n("95410"),
        f = n("913144"),
        E = n("798609"),
        p = n("91131"),
        h = n("821316"),
        _ = n("605250"),
        S = n("393414"),
        m = n("705873"),
        T = n("599110"),
        g = n("831588"),
        I = n("286235"),
        C = n("72177"),
        v = n("455079"),
        A = n("49111"),
        R = n("586391");
    let N = n("551042").hasModalOpen,
        O = new _.default("AuthenticationStore"),
        D = "fingerprint",
        y = "email_cache",
        P = "user_id_cache",
        L = null,
        b = null,
        M = null,
        U = null,
        G = null,
        w = null,
        k = null,
        x = A.LoginStates.NONE,
        F = A.RegistrationStates.NONE,
        V = !1,
        B = [],
        H = "",
        Y = !1,
        j = null,
        W = !1,
        K = !1,
        z = "",
        q = !1,
        X = !1,
        Q = {},
        Z = {},
        J = null,
        $ = null,
        ee = null,
        et = null;

    function en(e) {
        let t = null != o.default.getToken(),
            n = null != d.default.get(A.TOKEN_KEY);
        O.verbose(e, {
            tokenManagerHasToken: t,
            storageHasToken: n
        })
    }

    function ei() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (G = d.default.get(D), null != $) return $;
        let t = null != G ? G : o.default.getToken();
        !(!(0, S.isValidFingerprintRoute)() || !e && null != t || C.default.isHandoffAvailable()) && er({
            withGuildExperiments: !0
        })
    }

    function er(e) {
        let {
            withGuildExperiments: t
        } = e, n = {}, i = T.default.getSuperPropertiesBase64();
        null != i && (n["X-Super-Properties"] = i), null != G && (n["X-Fingerprint"] = G), $ = c.default.get({
            url: A.Endpoints.EXPERIMENTS,
            query: {
                with_guild_experiments: t
            },
            headers: n,
            context: {
                location: (0, S.getFingerprintLocation)()
            },
            retries: 3,
            oldFormErrors: !0
        }).then(e => {
            let {
                fingerprint: t,
                assignments: n,
                guild_experiments: i
            } = e.body;
            t && f.default.dispatch({
                type: "FINGERPRINT",
                fingerprint: t
            }), f.default.dispatch({
                type: "EXPERIMENTS_FETCH_SUCCESS",
                fingerprint: t,
                experiments: n,
                guildExperiments: i
            }), $ = null
        }, () => {
            $ = null, f.default.dispatch({
                type: "EXPERIMENTS_FETCH_FAILURE"
            })
        })
    }

    function es() {
        w = G, G = null, d.default.remove(D)
    }

    function ea(e, t) {
        en("setAuthToken called."), o.default.setToken(e, t)
    }

    function eo() {
        en("removeAuthToken called."), o.default.removeToken()
    }

    function el() {
        V = !0, eu(), f.default.wait(() => {
            (0, S.transitionTo)(A.Routes.REGISTER)
        })
    }

    function eu(e) {
        en("handleLogout called."), eo(), es(), !(null == e ? void 0 : e.isSwitchingAccount) && ei(), u.default.PersistedStore.clearAll({
            omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
        }), v.default.clearAll(), h.clear(), I.default.clearUser(), d.default.remove(P), L = null, x = (null == e ? void 0 : e.isSwitchingAccount) ? A.LoginStates.LOGGING_IN : A.LoginStates.NONE, F = A.RegistrationStates.NONE, H = "", z = "", j = null, Y = !1, q = !1, X = !1, Q = {}, Z = {}
    }
    class ec extends u.default.Store {
        initialize() {
            L = d.default.get(P), b = d.default.get(y), ee = d.default.get("login_cache"), null == o.default.getToken() && ei(), this.addChangeListener(() => (0, p.setClientState)(L))
        }
        getEmail() {
            return b
        }
        getLogin() {
            return ee
        }
        didVerifyFail() {
            return q
        }
        getVerifyErrors() {
            return Q
        }
        didVerifySucceed() {
            return X
        }
        getLoginStatus() {
            return x
        }
        getRegisterStatus() {
            return F
        }
        getId() {
            return L
        }
        getSessionId() {
            return M
        }
        getAuthSessionIdHash() {
            return U
        }
        getToken() {
            return (0, g.getToken)()
        }
        isAuthenticated() {
            return (0, g.isAuthenticated)()
        }
        getFingerprint() {
            return G
        }
        getAnalyticsToken() {
            return k
        }
        getErrors() {
            return Z
        }
        getMFATicket() {
            return H
        }
        getMFASMS() {
            return Y
        }
        getMFATotp() {
            return W
        }
        getMFABackup() {
            return K
        }
        getMFAWebAuthn() {
            return j
        }
        getMFAMethods() {
            let e = [];
            return null != j && e.push({
                type: "webauthn",
                challenge: j
            }), W && e.push({
                type: "totp",
                backup_codes_allowed: K
            }), K && e.push({
                type: "backup"
            }), Y && e.push({
                type: "sms"
            }), e
        }
        hasTOTPEnabled() {
            return B.includes(E.AuthenticatorType.TOTP)
        }
        hasSMSEnabled() {
            return B.includes(E.AuthenticatorType.SMS)
        }
        hasWebAuthnEnabled() {
            return B.includes(E.AuthenticatorType.WEBAUTHN)
        }
        getMaskedPhone() {
            return z
        }
        getCredentials() {
            if (null == i) throw Error("no credentials");
            return i
        }
        getVerifyingUserId() {
            return J
        }
        getCurrentRegistrationOptions() {
            return r
        }
        allowLogoutRedirect() {
            return !V
        }
        getWebAuthnChallenge() {
            return j
        }
        getSuspendedUserToken() {
            return et
        }
    }
    ec.displayName = "AuthenticationStore";
    var ed = new ec(f.default, {
        CONNECTION_OPEN: function(e) {
            var t;
            let {
                user: n,
                sessionId: i,
                authSessionIdHash: r,
                analyticsToken: s,
                auth: a
            } = e;
            en("handleConnectionOpen called"), I.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, m.default)(n)), M = i, U = r, k = s, L = n.id, b = n.email, void 0 !== a && (B = a.authenticator_types), d.default.set(y, n.email), d.default.set(P, n.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            let {
                user: n,
                sessionId: i,
                analyticsToken: r,
                token: s
            } = e;
            I.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, m.default)(n)), M = i, k = r, ea(s), es(), L = n.id, d.default.set(P, n.id)
        },
        CONNECTION_CLOSED: function(e) {
            let {
                code: t
            } = e;
            if (en("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
                if (V || N(R.NEW_USER_AGE_GATE_MODAL_KEY) || N(R.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
                    el();
                    return
                }
                T.default.track(A.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
                    user_id: d.default.get(P)
                }), eu(), setImmediate(() => (0, S.transitionTo)(A.Routes.DEFAULT_LOGGED_OUT))
            }
        },
        AUTH_SESSION_CHANGE: function(e) {
            let {
                authSessionIdHash: t
            } = e;
            null != t && (U = t)
        },
        LOGIN: function(e) {
            Z = {}, x = A.LoginStates.LOGGING_IN, z = "", r = null, null != e.login && (ee = e.login)
        },
        LOGIN_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            x = A.LoginStates.NONE, ea(t), es(), H = "", Y = !1, j = null, z = ""
        },
        LOGIN_FAILURE: function(e) {
            let {
                error: t
            } = e;
            H = "", Y = !1, j = null, x = null != (Z = function(e) {
                if (Object.keys(e.fields).length > 0) return e.fields;
                let t = {
                    message: e.message
                };
                return null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t)).date_of_birth ? A.LoginStates.LOGIN_AGE_GATE : A.LoginStates.NONE
        },
        LOGIN_MFA_STEP: function(e) {
            let {
                ticket: t,
                sms: n,
                webauthn: i,
                backup: r,
                totp: s
            } = e;
            null != t && (H = t, Y = n, z = "", j = null != i ? i : null, K = r, W = s), Z = {}, x = A.LoginStates.MFA_STEP
        },
        LOGIN_MFA: function() {
            x = A.LoginStates.LOGGING_IN_MFA
        },
        LOGIN_MFA_FAILURE: function(e) {
            let {
                message: t
            } = e;
            x = A.LoginStates.MFA_STEP, Z = {
                code: t
            }
        },
        LOGIN_MFA_SMS: function() {
            x = A.LoginStates.LOGGING_IN_MFA_SMS
        },
        LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
            let {
                phone: t
            } = e;
            x = A.LoginStates.MFA_SMS_STEP, z = t
        },
        LOGIN_MFA_SMS_FAILURE: function(e) {
            let {
                message: t
            } = e;
            x = A.LoginStates.MFA_SMS_STEP, Z = {
                code: t
            }
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
            x = A.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
        },
        LOGIN_ACCOUNT_DISABLED: function(e) {
            x = A.LoginStates.ACCOUNT_DISABLED, i = e.credentials
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
            x = A.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
            x = A.LoginStates.PHONE_IP_AUTHORIZATION
        },
        LOGIN_RESET: function(e) {
            let {
                isMultiAccount: t
            } = e;
            Z = {}, x = A.LoginStates.NONE, H = "", Y = !1, j = null, r = null, i = null, !t && (eo(), ei(!1))
        },
        LOGIN_STATUS_RESET: function() {
            x = A.LoginStates.NONE
        },
        LOGIN_SUSPENDED_USER: function(e) {
            let {
                suspendedUserToken: t
            } = e;
            et = t, setImmediate(() => (0, S.transitionTo)(A.Routes.ACCOUNT_STANDING))
        },
        SET_LOGIN_CREDENTIALS: function(e) {
            let {
                login: t,
                password: n
            } = e;
            i = {
                login: t,
                password: n
            }
        },
        LOGOUT: eu,
        FINGERPRINT: function(e) {
            let t = e.fingerprint;
            null == G ? null != t ? (T.default.track(A.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
                old_fingerprint: null != w ? (0, l.extractId)(w) : null,
                new_fingerprint: (0, l.extractId)(t)
            }), G = t, w = t, d.default.set(D, G)) : ei() : null != t && G !== t && T.default.track(A.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
                fingerprint: (0, l.extractId)(G),
                dropped_fingerprint: (0, l.extractId)(t)
            })
        },
        REGISTER_SAVE_FORM: function(e) {
            let {
                form: t
            } = e;
            r = t, F = A.RegistrationStates.REGISTER_AGE_GATE
        },
        REGISTER: function(e) {
            let {
                birthday: t
            } = e;
            Z = {}, null != t && (a(null != r, "Got birthday in multistep registration without existing form"), r = {
                ...r,
                birthday: t
            }), F = A.RegistrationStates.REGISTERING
        },
        REGISTER_SUCCESS: function(e) {
            let {
                token: t
            } = e;
            F = A.RegistrationStates.NONE, r = null, ea(t), es()
        },
        REGISTER_FAILURE: function(e) {
            let {
                error: t
            } = e;
            Z = function(e) {
                let t = {};
                if (t.error_code = e.code, null != e.errors) {
                    for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
                    return t
                }
                return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
            }(t), F = null != t.getFieldErrors("date_of_birth") ? A.RegistrationStates.REGISTER_AGE_GATE : A.RegistrationStates.REGISTER_WITH_ERROR
        },
        VERIFY_FAILURE: function(e) {
            let {
                errors: t
            } = e;
            q = !0, X = !1, Q = null != t ? t : {}
        },
        VERIFY_SUCCESS: function(e) {
            X = !0, q = !1, Q = {}, J = e.verifyingUserId
        },
        START_SESSION: function() {
            if (0 === Object.keys(Z).length) return !1;
            Z = {}
        },
        FORGOT_PASSWORD_REQUEST: function() {
            x = A.LoginStates.FORGOT_PASSWORD, Z = {}
        },
        FORGOT_PASSWORD_SENT: function() {
            x = A.LoginStates.NONE, Z = {}
        },
        UPDATE_TOKEN: function(e) {
            let {
                token: t,
                userId: n
            } = e;
            en("handleUpdateToken called"), ea(t, n), es()
        },
        EXPERIMENTS_FETCH: er,
        CURRENT_USER_UPDATE: function(e) {
            let {
                user: t
            } = e;
            L = t.id, b = t.email, void 0 !== t.authenticator_types && (B = t.authenticator_types), d.default.set(y, t.email), d.default.set(P, t.id)
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: el,
        CLEAR_AUTHENTICATION_ERRORS: function() {
            Z = {}
        },
        CLOSE_SUSPENDED_USER: function() {
            et = null, x = A.LoginStates.NONE, eu(), setImmediate(() => (0, S.transitionTo)(A.Routes.DEFAULT_LOGGED_OUT))
        }
    }, f.DispatchBand.Early)
}