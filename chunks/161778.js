function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    });
    var r, s = n("446674"),
        a = n("151426"),
        o = n("669491"),
        l = n("819855"),
        u = n("913144"),
        c = n("206230"),
        d = n("253539");
    n("21121");
    var f = n("228803");
    n("831588");
    var E = n("922932"),
        p = n("773336"),
        h = n("737292"),
        _ = n("168973"),
        S = n("374363"),
        m = n("116319"),
        T = n("49111"),
        g = n("941719");
    let I = null !== (r = (0, f.default)()) && void 0 !== r ? r : T.ThemeTypes.DARK,
        C = I,
        v = null,
        A = !1;

    function R() {
        let e = function() {
            var e, t;
            if (__OVERLAY__) return T.ThemeTypes.DARK;
            if (c.default.syncForcedColors && "active" === c.default.systemForcedColors && null != i) return i;
            let n = _.default.useSystemTheme;
            if (n === m.SystemThemeState.ON && null != i) return i;
            let r = null === (e = h.default.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
            if (null != r) return r;
            let s = null === (t = S.default.settings.appearance) || void 0 === t ? void 0 : t.theme;
            return null == s ? C : s === a.Theme.LIGHT ? T.ThemeTypes.LIGHT : T.ThemeTypes.DARK
        }();
        return e
    }

    function N() {
        return D()
    }

    function O() {
        return D()
    }

    function D() {
        let e = R();
        return e !== C && (C = e, !0)
    }
    class y extends s.default.PersistedStore {
        initialize(e) {
            (null == e ? void 0 : e.theme) != null && (C = e.theme), this.waitFor(_.default, h.default, S.default, c.default)
        }
        getState() {
            return {
                theme: this.theme
            }
        }
        get darkSidebar() {
            return (0, l.isThemeLight)(this.theme) && _.default.darkSidebar && !A
        }
        get theme() {
            return R()
        }
        get systemTheme() {
            return v
        }
        get systemPrefersColorScheme() {
            return i
        }
        get isSystemThemeAvailable() {
            return null !== v
        }
    }
    y.displayName = "ThemeStore", y.persistKey = "ThemeStore", y.migrations = [e => {
        let t = e.theme;
        return "amoled" === t && (t = "midnight"), {
            ...e,
            theme: t
        }
    }];
    var P = new y(u.default, {
        CACHE_LOADED: N,
        CONNECTION_OPEN: N,
        LOGOUT: function(e) {
            return !e.isSwitchingAccount && C !== T.ThemeTypes.DARK && (C = T.ThemeTypes.DARK, function() {
                !__OVERLAY__ && p.isPlatformEmbedded && E.default.setApplicationBackgroundColor((0, l.isThemeDark)(R()) ? o.default.unsafe_rawColors.PRIMARY_700.resolve({
                    saturation: c.default.saturation
                }).hsl() : o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: c.default.saturation
                }).hsl())
            }(), D())
        },
        OVERLAY_INITIALIZE: N,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: O,
        UNSYNCED_USER_SETTINGS_UPDATE: O,
        USER_SETTINGS_PROTO_UPDATE: N,
        UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
            var t, n;
            let {
                presetId: i
            } = e;
            C = null != i && null !== (n = null === (t = g.BACKGROUND_GRADIENT_PRESETS_MAP[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : R();
            let r = null != i;
            return A !== r ? (A = r, !0) : function() {
                let e = R();
                return !(0, d.areThemesEqualForGradientThemes)(C, e) && (C = e, !0)
            }()
        },
        RESET_PREVIEW_CLIENT_THEME: N,
        SYSTEM_THEME_CHANGE: function(e) {
            let {
                systemTheme: t
            } = e;
            return v = t, D()
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
            return i = e.systemPrefersColorScheme, D()
        },
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
            return (0, l.isThemeLight)(R())
        }
    })
}