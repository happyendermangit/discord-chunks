function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("316693"),
        a = n("685698"),
        o = n("577776"),
        l = n("945330"),
        u = n("978970"),
        d = n("782340"),
        c = n("981009");

    function f(e) {
        let {
            application: t,
            permissions: n,
            deniedPermissions: f,
            onPermissionsChange: _,
            guild: h
        } = e, E = s.useMemo(() => r.default.invert(h.permissions), [h.permissions]);
        s.useEffect(() => {
            _(!1, r.default.filter(n, E))
        }, [E, _, n]);
        let g = u.OrderedPermissions.filter(e => r.default.has(n, e)),
            m = g.filter(e => !r.default.has(E, e)).map(e => {
                let t = (0, u.getPermissionName)(e),
                    n = !r.default.has(f, e);
                return (0, i.jsx)("li", {
                    className: c.permission,
                    children: (0, i.jsx)(a.Checkbox, {
                        value: n,
                        onChange: (t, n) => _(n, e),
                        type: a.Checkbox.Types.INVERTED,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: t
                        })
                    })
                }, String(e))
            }),
            p = g.filter(e => r.default.has(E, e)).map(e => {
                let t = (0, u.getPermissionName)(e);
                return (0, i.jsxs)("li", {
                    className: c.permission,
                    children: [(0, i.jsx)("div", {
                        className: c.disabledPermissionIcon,
                        children: (0, i.jsx)(l.default, {
                            className: c.icon
                        })
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: t
                    })]
                }, String(e))
            });
        return (0, i.jsxs)("div", {
            className: c.botPermissions,
            children: [m.length > 0 ? (0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                className: c.permissionsLabel,
                children: d.default.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
                    applicationName: t.name,
                    guildName: h.name
                })
            }) : null, (0, i.jsx)("ul", {
                className: c.permissionsList,
                children: m
            }), p.length > 0 ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: c.disabledPermissionsLabel,
                    children: d.default.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
                        applicationName: t.name
                    })
                }), (0, i.jsx)("ul", {
                    className: c.permissionsList,
                    children: p
                })]
            }) : null]
        })
    }
}