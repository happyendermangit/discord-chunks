function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        getDecorationSizeForAvatarSize: function() {
            return a
        },
        openAvatarDecorationModal: function() {
            return s
        }
    });
    var n = r("37983");
    r("884691");
    var o = r("77078"),
        u = r("393414");
    r("103603");
    var l = r("573135"),
        i = r("49111");

    function a(e) {
        return "number" != typeof e ? (0, o.getAvatarSize)(e) * l.DECORATION_TO_AVATAR_RATIO : e * l.DECORATION_TO_AVATAR_RATIO
    }
    let s = e => {
        let {
            analyticsLocations: t,
            initialSelectedDecoration: l,
            isTryItOutFlow: a,
            guild: s
        } = e;
        (0, o.openModalLazy)(async () => {
            (0, u.getHistory)().location.pathname === i.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, u.transitionTo)(i.Routes.APP);
            let {
                default: e
            } = await r.el("791050").then(r.bind(r, "791050"));
            return r => (0, n.jsx)(e, {
                ...r,
                analyticsLocations: t,
                initialSelectedDecoration: l,
                isTryItOutFlow: a,
                guild: s
            })
        }, {})
    }
}