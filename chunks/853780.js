function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("970755"),
        s = n("252063"),
        r = n("777003"),
        o = n("782340"),
        u = n("356219"),
        d = n("862939");

    function c(e) {
        let {
            applicationId: t,
            channelId: n
        } = e, {
            installedIntegrations: c,
            fetched: f
        } = (0, s.usePrivateChannelIntegrationState)({
            channelId: n
        }), m = f && void 0 !== c.find(e => e.application.id === t);
        return m ? (0, l.jsxs)(r.default, {
            children: [(0, l.jsx)(i.Heading, {
                variant: "eyebrow",
                className: d.title,
                children: o.default.Messages.BOT_PROFILE_MANAGE_PRIVATE_CHANNEL_INTEGRATION
            }), (0, l.jsx)(i.Button, {
                onClick: () => (0, a.deletePrivateChannelIntegration)(n, t),
                size: i.Button.Sizes.ICON,
                color: i.Button.Colors.RED,
                look: i.Button.Looks.LINK,
                className: u.button,
                children: o.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION
            })]
        }) : null
    }
}