function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("376341"),
        a = n.n(i),
        s = n("77078"),
        r = n("145131"),
        o = n("936629"),
        u = n("996866"),
        d = n("8626");

    function c(e) {
        let {
            activity: t,
            user: n,
            source: i,
            ...c
        } = e, {
            label: f,
            tooltip: m,
            loading: p,
            disabled: h,
            onClick: E
        } = (0, u.useSpotifyPlayAction)(t, n, i);
        return (0, l.jsx)(s.Tooltip, {
            text: m,
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: n
                } = e;
                return (0, l.jsx)(s.Button, {
                    ...a(c, ["channelId", "guildId"]),
                    onClick: E,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    disabled: h,
                    submitting: p,
                    children: (0, l.jsxs)(r.default, {
                        align: r.default.Align.CENTER,
                        children: [(0, l.jsx)(o.default, {
                            className: d.spotifyButtonLogo
                        }), f]
                    })
                })
            }
        })
    }
}