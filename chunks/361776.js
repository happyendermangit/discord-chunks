function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        },
        isGuildOnboardingAvailable: function() {
            return u
        }
    });
    var l = n("446674"),
        r = n("38654"),
        a = n("49111");

    function i(e) {
        let t = (0, l.useStateFromStores)([r.default], () => {
            if ((null == e ? void 0 : e.id) == null) return !1;
            let t = r.default.isFullServerPreview(e.id),
                n = r.default.isOnboardingEnabled(e.id);
            return t && n
        });
        return t || (null == e ? void 0 : e.hasFeature(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
    }

    function u(e) {
        if (null == e) return !1;
        let t = r.default.isFullServerPreview(e.id),
            n = r.default.isOnboardingEnabled(e.id);
        return t && n || e.hasFeature(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
    }
}