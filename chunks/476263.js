function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        default: function() {
            return w
        }
    });
    var n = l("37983"),
        r = l("884691"),
        s = l("414456"),
        i = l.n(s),
        a = l("90915"),
        o = l("446674"),
        c = l("669491"),
        u = l("77078"),
        d = l("80300"),
        h = l("471671"),
        f = l("103603"),
        p = l("474293"),
        L = l("580357"),
        v = l("356659");
    let g = {
            SMOL: "Smol",
            MINI: "Mini",
            SMALLER: "Smaller",
            SMALL: "Small",
            MEDIUM: "Medium",
            LARGE: "Large",
            LARGER: "Larger",
            XLARGE: "XLarge"
        },
        x = {
            [g.SMOL]: 16,
            [g.MINI]: 20,
            [g.SMALLER]: 24,
            [g.SMALL]: 30,
            [g.MEDIUM]: 40,
            [g.LARGE]: 50,
            [g.LARGER]: 64,
            [g.XLARGE]: 100
        },
        m = {
            [g.SMOL]: [10, 10, 8, 6, 6, 4],
            [g.MINI]: [12, 12, 10, 10, 8, 6, 4],
            [g.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
            [g.SMALL]: [14, 14, 12, 12, 10, 8, 6],
            [g.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
            [g.LARGE]: [18, 18, 16, 16, 14, 12, 10],
            [g.LARGER]: [19, 19, 17, 17, 15, 13, 11],
            [g.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
        };
    class I extends r.PureComponent {
        renderAcronym() {
            let {
                guild: e,
                iconSrc: t
            } = this.props;
            return null != e.icon || null != t ? null : (0, n.jsx)("div", {
                className: v.acronym,
                children: e.acronym
            })
        }
        renderBadge() {
            let {
                showBadge: e,
                guild: t,
                badgeStrokeColor: l
            } = this.props;
            return e && null != t.hasFeature ? (0, n.jsx)(L.default, {
                className: v.guildIconBadge,
                guild: t,
                badgeStrokeColor: l
            }) : null
        }
        renderIcon() {
            var e, t;
            let {
                guild: l,
                className: r,
                showBadge: s,
                active: a,
                size: o,
                style: c = {},
                textScale: d,
                showTooltip: h,
                tooltipPosition: f,
                onClick: L,
                to: g,
                badgeStrokeColor: x,
                animate: I,
                tabIndex: M,
                iconSrc: R,
                "aria-hidden": w,
                ...j
            } = this.props, A = m[o], S = null != L ? u.Clickable : "div";
            return (0, n.jsxs)(S, {
                className: i(v.icon, r, (0, p.getClass)(v, "iconSize", o), {
                    [null !== (e = (0, p.getClass)(v, "iconActive", o)) && void 0 !== e ? e : ""]: a,
                    [v.iconInactive]: !a,
                    [v.noIcon]: null == l.icon
                }),
                "aria-hidden": w,
                style: null == l.icon ? {
                    fontSize: (null !== (t = A[l.acronym.length]) && void 0 !== t ? t : A[A.length - 1]) * d,
                    ...c
                } : c,
                onClick: null != g || null == L ? void 0 : L,
                tabIndex: M,
                ...j,
                children: [this.renderAcronym(), this.renderBadge()]
            })
        }
        renderTooltip() {
            let {
                guild: e,
                showTooltip: t,
                tooltipPosition: l
            } = this.props;
            return t ? (0, n.jsx)(u.Tooltip, {
                text: e.name,
                position: l,
                "aria-label": !1,
                children: e => r.cloneElement(r.Children.only(this.renderIcon()), {
                    ...e
                })
            }) : this.renderIcon()
        }
        render() {
            let {
                to: e,
                guild: t,
                source: l,
                tabIndex: r,
                "aria-hidden": s
            } = this.props;
            return null != e ? (0, n.jsx)(a.Link, {
                "aria-hidden": s,
                to: {
                    pathname: e,
                    state: null != l ? {
                        analyticsSource: l
                    } : null
                },
                "aria-label": t.toString(),
                tabIndex: r,
                children: this.renderTooltip()
            }) : this.renderTooltip()
        }
    }
    let M = o.default.connectStores([h.default], e => {
        let {
            guild: t,
            animate: l,
            iconSrc: n,
            style: r,
            size: s
        } = e;
        return {
            style: {
                ...r,
                backgroundImage: (0, f.makeCssUrlString)(null != n ? n : t.getIconURL(x[s], l && h.default.isFocused()))
            }
        }
    })((0, d.backgroundImagePreloader)(e => (0, n.jsx)(I, {
        ...e
    })));
    class R extends r.PureComponent {
        render() {
            return (0, n.jsx)(M, {
                ...this.props
            })
        }
    }
    R.Sizes = g, R.defaultProps = {
        size: g.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: c.default.unsafe_rawColors.WHITE_500.css,
        animate: !1
    };
    var w = R
}