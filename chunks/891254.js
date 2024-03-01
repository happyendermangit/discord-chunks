function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var s = n("37983"),
        i = n("884691"),
        r = n("605451"),
        a = n("774811"),
        o = n("577776"),
        d = n("8222"),
        u = n("782340"),
        l = n("590732");

    function f(e) {
        let {
            selectedGuildId: t,
            selectedChannelId: n,
            onChannelChange: f,
            error: _
        } = e, [c, g] = i.useState(null), m = i.useRef(!1);
        i.useEffect(() => {
            async function e(e) {
                let n = await (0, d.fetchChannels)(e);
                t === e && (g({
                    guildId: e,
                    channels: n
                }), m.current = !0)
            }
            g(null), null == t ? f(null) : e(t)
        }, [f, t]), i.useEffect(() => {
            if (!!m.current) null == c ? null != n && f(null) : !c.channels.some(e => e.id === n) && f(null)
        }, [c, f, n, t]);
        let h = i.useMemo(() => {
            var e;
            return (null !== (e = null == c ? void 0 : c.channels) && void 0 !== e ? e : []).map(e => ({
                value: e.id,
                label: e.name
            }))
        }, [null == c ? void 0 : c.channels]);
        return null == t ? null : (0, s.jsxs)("div", {
            className: l.selectorGroup,
            children: [(0, s.jsx)(r.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: l.sectionLabel,
                children: u.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
            }), null != _ && "" !== _ ? (0, s.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: _
            }) : null, (0, s.jsx)(a.SearchableSelect, {
                wrapperClassName: l.wrapper,
                className: l.select,
                maxVisibleItems: 5,
                onChange: f,
                placeholder: u.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                value: (null == c ? void 0 : c.guildId) === t ? n : null,
                options: h,
                isDisabled: null == c
            }, null == c ? void 0 : c.guildId), (0, s.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: l.label,
                children: u.default.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
            })]
        })
    }
}