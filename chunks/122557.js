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
        s = n("77078"),
        r = n("817963"),
        o = n("151185"),
        u = n("569717"),
        d = n("782340"),
        c = n("484574");

    function f(e) {
        let {
            guild: t,
            focused: n,
            ...i
        } = e, {
            canCreateExpressions: f
        } = (0, r.useManageResourcePermissions)(t);
        return (0, l.jsx)(s.Tooltip, {
            text: d.default.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
            shouldShow: !f,
            children: e => (0, l.jsx)("li", {
                className: c.soundButtonWrapper,
                ...e,
                children: (0, l.jsxs)(s.ClickableContainer, {
                    ...i,
                    "aria-label": d.default.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({
                        guildName: t.name
                    }),
                    className: a(c.soundAddButton, {
                        [c.focused]: n,
                        [c.disabled]: !f
                    }),
                    onClick: () => (0, u.default)(t.id),
                    children: [(0, l.jsx)(o.default, {
                        className: c.soundAddIcon
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: f ? "header-primary" : "text-muted",
                        children: d.default.Messages.SOUNDBOARD_SOUND_ADD_SOUND
                    })]
                })
            })
        })
    }
}