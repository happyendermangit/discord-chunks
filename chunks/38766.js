function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("884691"),
        r = n("79112"),
        s = n("685665"),
        l = n("929423");
    n("424562");
    var a = n("49111"),
        o = n("397336");

    function u(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: c,
            openWithoutBackstack: d = !1
        } = e, {
            analyticsLocations: f
        } = (0, s.default)(), h = (0, i.useCallback)(() => {
            null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : f), r.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                scrollPosition: n,
                analyticsLocation: u,
                analyticsLocations: c,
                openWithoutBackstack: d
            })
        }, [t, n, u, c, d, f]);
        return h
    }
}