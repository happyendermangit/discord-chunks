function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var l = n("884691"),
        i = n("509043"),
        a = n("446674"),
        s = n("841098"),
        r = n("206230"),
        o = n("388491"),
        u = n("528438");
    let d = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

    function c(e, t, n) {
        var l;
        null == e || null === (l = e.current) || void 0 === l || l.style.setProperty(t, null != n ? n : null)
    }

    function f(e, t) {
        let {
            themeElementRef: n,
            pendingThemeColors: f,
            isPreview: m,
            useDefaultClientTheme: p
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [h, E] = (0, u.default)(e, t, {
            pendingThemeColors: f,
            isPreview: m
        }), [g, C, S] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.desaturateUserColors, r.default.saturation, r.default.syncProfileThemeWithUserTheme]), T = (0, s.default)(), I = l.useCallback(() => S || p ? T : (0, o.getProfileTheme)(h), [p, S, T, h]), [v, _] = l.useState(I()), N = (0, o.useProfileThemeValues)(v), A = (0, o.useDividerColor)(v, h), x = (0, o.useMessageInputBorderColor)(v, E), y = l.useCallback((e, t) => (0, i.int2hsl)(e, g, null, t), [g]);
        l.useEffect(() => {
            _(I())
        }, [h, S, T, p, I]);
        let O = (0, o.useAvatarBorderColor)(v, h, S),
            R = null != O ? (0, i.int2hsl)(O, !1, g ? C : null) : null,
            M = e => d.forEach(t => {
                e.style.removeProperty(t)
            });
        return l.useEffect(() => {
            if (null != h && null != E && null != v && null != O && null != A && null != x) {
                let e = S && v !== T ? null == N ? void 0 : N.overlaySyncedWithUserTheme : null == N ? void 0 : N.overlay;
                c(n, "--profile-gradient-primary-color", y(h)), c(n, "--profile-gradient-secondary-color", y(E)), c(n, "--profile-gradient-button-color", y((0, o.calculateButtonColor)(h))), c(n, "--profile-gradient-overlay-color", e), c(n, "--profile-body-background-color", null == N ? void 0 : N.sectionBox), c(n, "--profile-body-background-hover", null == N ? void 0 : N.profileBodyBackgroundHover), c(n, "--profile-body-divider-color", y(A, null == N ? void 0 : N.dividerOpacity)), c(n, "--profile-avatar-border-color", y(O)), c(n, "--profile-message-input-border-color", y(x)), c(n, "--profile-note-background-color", null == N ? void 0 : N.noteBackgroundColor), c(n, "--profile-role-pill-background-color", null == N ? void 0 : N.rolePillBackgroundColor), c(n, "--profile-role-pill-border-color", null == N ? void 0 : N.rolePillBorderColor)
            } else(null == n ? void 0 : n.current) != null && M(null == n ? void 0 : n.current)
        }, [h, E, O, v, T, n, y, S, A, null == N ? void 0 : N.overlaySyncedWithUserTheme, null == N ? void 0 : N.overlay, null == N ? void 0 : N.sectionBox, null == N ? void 0 : N.profileBodyBackgroundHover, null == N ? void 0 : N.dividerOpacity, null == N ? void 0 : N.noteBackgroundColor, null == N ? void 0 : N.rolePillBackgroundColor, null == N ? void 0 : N.rolePillBorderColor, x]), {
            profileTheme: null != v ? v : T,
            primaryProfileColor: h,
            avatarBorderColor: R
        }
    }
}