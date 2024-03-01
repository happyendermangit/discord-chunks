function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var s = n("37983"),
        i = n("884691"),
        r = n("316693"),
        a = n("605451"),
        o = n("774811"),
        d = n("577776"),
        u = n("49111"),
        l = n("782340"),
        f = n("590732");

    function _(e) {
        let {
            error: t,
            selectedGuildId: n,
            onGuildChange: _,
            guilds: c,
            disabled: g = !1
        } = e, m = i.useCallback(e => {
            _(e)
        }, [_]), h = i.useMemo(() => c.filter(e => r.default.has(e.permissions, u.Permissions.MANAGE_GUILD)).map(e => ({
            value: e.id,
            label: e.name
        })), [c]);
        return (0, s.jsxs)("div", {
            className: f.selectorGroup,
            children: [(0, s.jsx)(a.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: f.sectionLabel,
                children: l.default.Messages.OAUTH2_ADD_TO_GUILD
            }), null != t && "" !== t ? (0, s.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: t
            }) : null, (0, s.jsx)(o.SearchableSelect, {
                wrapperClassName: f.wrapper,
                className: f.select,
                maxVisibleItems: 5,
                value: n,
                placeholder: l.default.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                options: h,
                onChange: m,
                isDisabled: g
            }), (0, s.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "header-secondary",
                className: f.label,
                children: l.default.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
            })]
        })
    }
}