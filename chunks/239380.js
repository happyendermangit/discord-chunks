function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIdForGuildTransition: function() {
            return E
        },
        transitionToGuild: function() {
            return p
        }
    });
    var i = n("471706"),
        r = n("290886"),
        s = n("21121"),
        a = n("934306"),
        o = n("42203"),
        l = n("923959"),
        u = n("18494"),
        c = n("393414"),
        d = n("49111"),
        f = n("724210");

    function E(e) {
        var t;
        let n = u.default.getChannelId(e),
            s = null === (t = l.default.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
        if (n === f.StaticChannelRoute.GUILD_ONBOARDING && !i.default.shouldShowOnboarding(e) || n === f.StaticChannelRoute.GUILD_HOME && !(0, r.canSeeOnboardingHome)(e)) return s;
        let a = o.default.getChannel(n);
        return null == a || a.isGuildVocal() ? s : n
    }

    function p(e, t) {
        let n = !(0, s.isInMainTabsExperiment)() || (0, a.shouldHandleNewPanelsRoute)(e) ? E(e) : void 0;
        (0, c.transitionTo)(d.Routes.CHANNEL(e, n), {
            navigationReplace: (0, a.shouldHandleNewPanelsRoute)(e),
            ...t
        })
    }
}