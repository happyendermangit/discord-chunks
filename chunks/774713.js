function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("446674"),
        r = n("716214"),
        o = n("800762"),
        u = n("295999"),
        d = n("782340"),
        c = n("560772"),
        f = e => {
            let {
                guildId: t,
                channelId: n,
                color: i,
                look: f,
                isProfile: m
            } = e, p = (0, s.useStateFromStores)([o.default], () => o.default.isInChannel(n), [n]);
            return (0, l.jsx)(u.default, {
                className: a(c.button, {
                    [c.popout]: !m
                }),
                color: i,
                look: f,
                disabled: p,
                onClick: () => r.connectOrLurkStage(t, n),
                fullWidth: !0,
                children: d.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
            }, "stage")
        }
}