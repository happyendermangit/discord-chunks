function(e, t, n) {
    "use strict";
    let i, r, u, o, _, l, E, T, d, a, S, c, I, s;
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var f = n("265586"),
        N = n("446674"),
        A = n("913144"),
        U = n("49111");
    let p = U.FormStates.CLOSED,
        R = {},
        D = !1;

    function G() {
        p = U.FormStates.OPEN, R = {}
    }

    function C() {
        p = U.FormStates.CLOSED, R = {}
    }

    function O() {
        P(), g(), R = {}
    }

    function P() {
        i = void 0, r = void 0, u = void 0, o = void 0
    }

    function g() {
        _ = void 0, l = void 0, E = void 0, T = void 0, d = void 0, o = void 0
    }

    function v() {
        S = void 0, c = void 0, I = void 0, s = void 0, a = void 0
    }
    class L extends N.default.Store {
        getFormState() {
            return p
        }
        getErrors() {
            return R
        }
        showNotice() {
            return void 0 !== i || void 0 !== _ || void 0 !== l || void 0 !== E || void 0 !== T || void 0 !== d || void 0 !== u || void 0 !== o || void 0 !== r
        }
        getPendingAvatar() {
            return i
        }
        getPendingGlobalName() {
            return r
        }
        getPendingBanner() {
            return _
        }
        getPendingBio() {
            return l
        }
        getPendingPronouns() {
            return E
        }
        getPendingAccentColor() {
            return T
        }
        getPendingThemeColors() {
            return d
        }
        getPendingAvatarDecoration() {
            return u
        }
        getPendingProfileEffectId() {
            return o
        }
        getAllPending() {
            return {
                pendingAvatar: i,
                pendingBanner: _,
                pendingBio: l,
                pendingPronouns: E,
                pendingAccentColor: T,
                pendingThemeColors: d,
                pendingAvatarDecoration: u,
                pendingProfileEffectId: o,
                pendingGlobalName: r
            }
        }
        getTryItOutThemeColors() {
            return a
        }
        getTryItOutAvatar() {
            return S
        }
        getTryItOutAvatarDecoration() {
            return c
        }
        getTryItOutProfileEffectId() {
            return I
        }
        getTryItOutBanner() {
            return s
        }
        getAllTryItOut() {
            return {
                tryItOutThemeColors: a,
                tryItOutAvatar: S,
                tryItOutAvatarDecoration: c,
                tryItOutProfileEffectId: I,
                tryItOutBanner: s
            }
        }
        getIsDisableSubmit() {
            return D
        }
    }
    L.displayName = "UserSettingsAccountStore";
    var m = new L(A.default, {
        USER_SETTINGS_ACCOUNT_INIT: G,
        USER_SETTINGS_MODAL_INIT: G,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: G,
        USER_SETTINGS_MODAL_SET_SECTION: function(e) {
            let {
                section: t
            } = e;
            return t === U.UserSettingsSections.ACCOUNT && G()
        },
        USER_SETTINGS_ACCOUNT_CLOSE: C,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
            O(), v(), C()
        },
        USER_SETTINGS_ACCOUNT_SUBMIT: function() {
            p = U.FormStates.SUBMITTING, R = {}
        },
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
            var t;
            if (p !== U.FormStates.SUBMITTING) return !1;
            p = U.FormStates.OPEN, R = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
            let {
                avatar: t
            } = e;
            i = t, S = void 0
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
            let {
                globalName: t
            } = e;
            r = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
            let {
                avatarDecoration: t
            } = e;
            u = t
        },
        USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
            let {
                item: t
            } = e;
            (null == t ? void 0 : t.type) === f.CollectiblesItemType.PROFILE_EFFECT ? (c = null, I = null == t ? void 0 : t.id) : (I = null, c = t)
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
            let {
                profileEffectId: t
            } = e;
            o = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
            let {
                banner: t
            } = e;
            _ = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
            let {
                bio: t
            } = e;
            l = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
            let {
                pronouns: t
            } = e;
            E = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
            let {
                color: t
            } = e;
            T = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
            let {
                themeColors: t
            } = e;
            d = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
            let {
                avatar: t
            } = e;
            S = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
            let {
                avatarDecoration: t
            } = e;
            c = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
            let {
                profileEffectId: t
            } = e;
            I = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
            let {
                banner: t
            } = e;
            s = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
            let {
                themeColors: t
            } = e;
            a = t
        },
        USER_SETTINGS_CLEAR_ERRORS: function() {
            R = {}
        },
        USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: P,
        USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
        USER_SETTINGS_RESET_ALL_PENDING: O,
        USER_SETTINGS_RESET_ALL_TRY_IT_OUT: v,
        USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
            u = void 0
        },
        LOGOUT: function() {
            i = void 0
        },
        USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
            let {
                disable: t
            } = e;
            D = t
        }
    })
}