function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        },
        CenterControlButton: function() {
            return x
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("834897"),
        o = n("461380"),
        u = n("587974"),
        d = n("550410"),
        c = n("641568"),
        f = n("782340"),
        m = n("4536");

    function p(e) {
        let {
            label: t,
            onClick: n,
            onKeyDown: l,
            onMouseEnter: r,
            onMouseLeave: o,
            onContextMenu: u,
            className: c,
            wrapperClassName: f,
            iconClassName: p,
            iconComponent: h,
            themeable: x = !1,
            disabled: E = !1,
            isActive: y = !1,
            tooltipPosition: g = "top",
            shouldShowTooltip: S = !0,
            forceTooltipOpen: C = !1,
            buttonRef: T,
            grow: _,
            "aria-label": I
        } = e;
        return (0, i.jsx)(d.default, {
            children: (0, i.jsx)(s.Tooltip, {
                position: g,
                text: t,
                "aria-label": I,
                shouldShow: S,
                forceOpen: C,
                children: e => {
                    let {
                        onClick: t,
                        onContextMenu: d,
                        onMouseEnter: g,
                        onMouseLeave: S,
                        ...C
                    } = e;
                    return (0, i.jsx)(s.Button, {
                        look: s.Button.Looks.BLANK,
                        size: s.Button.Sizes.NONE,
                        onKeyDown: e => {
                            null == l || l(e)
                        },
                        onClick: e => {
                            null == t || t(), null == n || n(e)
                        },
                        onMouseEnter: e => {
                            null == g || g(), null == r || r(e)
                        },
                        onMouseLeave: e => {
                            null == S || S(), null == o || o(e)
                        },
                        onContextMenu: e => {
                            null == d || d(), null == u || u(e)
                        },
                        onFocus: e => {
                            null == g || g(), null == r || r(e)
                        },
                        onBlur: e => {
                            null == S || S(), null == o || o(e)
                        },
                        disabled: E,
                        innerClassName: m.lineHeightReset,
                        className: a({
                            [m.active]: y
                        }, c),
                        wrapperClassName: f,
                        buttonRef: T,
                        grow: _,
                        "aria-label": I,
                        ...C,
                        children: (0, i.jsx)(h, {
                            className: a(m.controlIcon, p, {
                                [m.themeable]: x,
                                [m.active]: y
                            }),
                            color: "currentColor"
                        })
                    })
                }
            })
        })
    }
    let h = {
        red: m.red,
        white: m.white,
        green: m.green,
        yellow: m.yellow,
        primaryDark: m.primaryDark,
        primaryLight: m.primaryLight,
        activeLight: m.activeLight
    };

    function x(e) {
        let {
            color: t,
            isActive: n = !1,
            className: l,
            iconClassName: x,
            onPopoutClick: E,
            popoutOpen: y = !1,
            ...g
        } = e, S = (0, c.default)(t, n), C = (0, r.default)("(max-width: 456px)"), T = (0, i.jsx)(p, {
            ...g,
            grow: !1,
            onContextMenu: E,
            iconClassName: a(x, m.centerIcon),
            className: a(C ? l : null, m.staticButton, m.centerButton, h[S])
        });
        return C ? T : (0, i.jsxs)("div", {
            className: a(l, m.contextMenuContainer),
            children: [(0, i.jsx)(u.default, {
                mask: null == E ? null : u.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                width: 56,
                height: 56,
                children: T
            }), null != E ? (0, i.jsx)(d.default, {
                children: (0, i.jsx)(s.Clickable, {
                    "aria-label": f.default.Messages.MORE_OPTIONS,
                    onClick: E,
                    onContextMenu: E,
                    className: a(m.contextMenuNub, h[S], {
                        [m.active]: y
                    }),
                    children: (0, i.jsx)(o.default, {
                        className: a(m.contextMenuCaret, {
                            [m.open]: y
                        })
                    })
                })
            }) : null]
        })
    }
}