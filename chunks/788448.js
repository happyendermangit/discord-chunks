function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("446674"),
        i = n("77078"),
        o = n("987317"),
        r = n("442939"),
        s = n("713726"),
        d = n("503417"),
        u = n("162236"),
        c = n("101125"),
        p = n("953109"),
        f = n("474571"),
        m = n("782340"),
        h = n("766855");

    function v() {
        let e = (0, l.useStateFromStores)([c.default], () => c.default.getBroadcast()),
            t = (0, r.useGetOrFetchApplication)(null == e ? void 0 : e.applicationId);
        if (null == e) return null;
        let n = () => {
                (0, u.openBroadcastingPrivacySettingsModal)()
            },
            v = () => {
                (0, s.stopBroadcast)(), o.default.disconnect()
            };
        return (0, a.jsxs)("div", {
            className: h.container,
            children: [null != t && (0, a.jsx)(p.default, {
                game: t,
                size: p.default.Sizes.LARGE
            }), (0, a.jsxs)("div", {
                className: h.content,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: m.default.Messages.BROADCASTING_CAPTURE_PAUSED
                }), (0, a.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: m.default.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
                }), (0, a.jsxs)("div", {
                    className: h.actions,
                    children: [(0, a.jsx)(i.Tooltip, {
                        text: m.default.Messages.BROADCASTING_SETTINGS,
                        children: e => (0, a.jsx)(i.Clickable, {
                            ...e,
                            onClick: n,
                            children: (0, a.jsx)(f.default, {
                                className: h.button,
                                width: 20,
                                height: 20
                            })
                        })
                    }), (0, a.jsx)(i.Tooltip, {
                        text: m.default.Messages.STOP_BROADCASTING,
                        children: e => (0, a.jsx)(i.Clickable, {
                            ...e,
                            onClick: v,
                            children: (0, a.jsx)(d.default, {
                                className: h.button,
                                width: 20,
                                height: 20
                            })
                        })
                    })]
                })]
            })]
        })
    }
}