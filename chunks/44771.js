function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var a = n("37983"),
        i = n("884691"),
        s = n("414456"),
        l = n.n(s),
        o = n("917351"),
        r = n.n(o),
        u = n("77078"),
        d = n("164546"),
        c = n("513196"),
        f = n("42723"),
        g = n("605475"),
        m = n("49111"),
        h = n("782340"),
        _ = n("113037");
    let p = () => [h.default.Messages.APP_ICON_PIRATE, h.default.Messages.APP_ICON_PIRATE_1, h.default.Messages.APP_ICON_PIRATE_2, h.default.Messages.APP_ICON_PIRATE_3, h.default.Messages.APP_ICON_PIRATE_4],
        E = () => {
            var e;
            return null !== (e = r.sample(p())) && void 0 !== e ? e : h.default.Messages.APP_ICON_PIRATE
        };

    function Selection(e) {
        let {
            id: t,
            className: n,
            onSelect: s,
            isSelected: o = !1,
            tabIndex: r,
            children: f
        } = e, [h, p] = i.useState(g.ICONS_BY_ID[t].name), S = t === c.PremiumAppIconIds.PIRATE, T = (0, u.useRadioItem)({
            label: h,
            isSelected: o
        });
        return (0, a.jsx)(u.Tooltip, {
            text: h,
            onTooltipShow: () => S && p(E()),
            children: e => (0, a.jsxs)("div", {
                className: _.appIconSelectionContainer,
                children: [(0, a.jsx)(u.Clickable, {
                    ...e,
                    ...T,
                    tabIndex: null != r ? r : T.tabIndex,
                    className: l(_.appIconSelection, {
                        [_.selected]: o
                    }, n),
                    onClick: o ? m.NOOP : () => null == s ? void 0 : s(t),
                    children: f
                }), o && (0, a.jsx)(d.SelectionCircle, {})]
            })
        })
    }

    function S(e) {
        let {
            icon: t,
            isSelected: n,
            disabled: i,
            tabIndex: s,
            onSelect: l
        } = e;
        return (0, a.jsx)(Selection, {
            onSelect: i ? void 0 : l,
            isSelected: n,
            id: t.id,
            className: i ? _.disabled : void 0,
            tabIndex: s,
            children: (0, a.jsx)(f.default, {
                id: t.id,
                width: g.CUSTOM_BASE_SIZE
            })
        })
    }
}