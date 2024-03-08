function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("77078"),
        d = n("272030"),
        c = n("427302"),
        f = n("158998"),
        p = n("305130");

    function m(e) {
        let {
            className: t,
            maxUsers: a,
            users: r,
            guildId: m,
            onFocus: h,
            size: x = u.AvatarSizes.SIZE_24,
            hideOverflowCount: E = !1
        } = e, [y, g] = l.useState(!1);

        function S() {
            return (0, i.jsx)(u.Dialog, {
                className: p.popoutWrapper,
                children: (0, i.jsx)(u.Scroller, {
                    className: p.scroller,
                    children: r.map(e => (0, i.jsx)(c.default, {
                        guildId: m,
                        user: e,
                        nick: f.default.getName(e),
                        onContextMenu: t => (0, d.openContextMenuLazy)(t, async () => {
                            let {
                                default: t
                            } = await n.el("406784").then(n.bind(n, "406784"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                user: e
                            })
                        }, {
                            onClose: () => g(!1)
                        })
                    }, e.id))
                })
            })
        }
        return r.length <= 0 ? null : (0, i.jsx)("div", {
            className: s(t, p.avatars),
            children: function() {
                let e = o(r).take(a).map(e => {
                        let t = f.default.getName(e);
                        return (0, i.jsx)(u.TooltipContainer, {
                            text: t,
                            className: p.avatar,
                            children: (0, i.jsx)(u.Avatar, {
                                src: e.getAvatarURL(m, 24),
                                "aria-label": t,
                                size: x
                            })
                        }, e.id)
                    }).value(),
                    t = r.length - a;
                return t > 0 && !E && (e[e.length - 1] = (0, i.jsx)(u.Popout, {
                    renderPopout: S,
                    shouldShow: y,
                    position: "bottom",
                    onRequestClose: () => g(!1),
                    children: () => (0, i.jsxs)(u.Button, {
                        className: s(p.avatar, p.overflow),
                        onFocus: h,
                        onClick: () => g(!0),
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.NONE,
                        children: ["+", t + 1]
                    })
                }, "overflow")), e
            }()
        })
    }
}