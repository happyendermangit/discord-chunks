function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("974889"),
        s = n("954016"),
        r = n("49111");

    function o(e) {
        let {
            channel: t,
            guildId: o,
            locationObject: u,
            openInPopout: d,
            initialSelectedApplicationId: c,
            initialSlide: f = s.ActivityShelfSlides.DIRECTORY,
            enableSelectedTextChannelInvite: m = !1,
            analyticsLocations: p
        } = e;
        d && (0, a.default)(r.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
        let h = d ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
        return (0, i.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("605455").then(n.bind(n, "605455"));
            return n => (0, l.jsx)(e, {
                ...n,
                channel: t,
                guildId: o,
                locationObject: u,
                initialSlide: f,
                initialSelectedApplicationId: c,
                enableSelectedTextChannelInvite: m,
                analyticsLocations: p
            })
        }, {
            modalKey: s.ACTIVITY_SHELF_WEB_MODAL_KEY,
            contextKey: h
        })
    }
}