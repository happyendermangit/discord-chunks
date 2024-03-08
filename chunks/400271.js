function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildEventStatus: function() {
            return _
        },
        GuildEventDetails: function() {
            return D
        },
        default: function() {
            return L
        }
    });
    var l = n("37983");
    n("884691");
    var a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        u = n("77078"),
        i = n("26989"),
        c = n("155207"),
        d = n("158998"),
        o = n("398604"),
        E = n("397680"),
        f = n("466148"),
        v = n("18284"),
        h = n("189443"),
        T = n("822516"),
        N = n("909151"),
        m = n("255050"),
        g = n("393745"),
        x = n("745049"),
        C = n("782340"),
        S = n("502249");

    function _(e) {
        let {
            className: t,
            creator: n,
            guildId: a,
            isNew: N,
            isHub: m = !1,
            guildEventId: _,
            eventPreview: D,
            recurrenceId: L
        } = e, R = (0, r.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(_)), I = (0, v.default)(a, _, L), p = null != R ? R : D, A = (0, r.useStateFromStores)([i.default], () => i.default.getNick(a, null == n ? void 0 : n.id), [a, n]);
        L = null == p || null != L ? L : (0, T.getNextRecurrenceIdInEvent)(p);
        let {
            startTime: w
        } = (0, f.default)(_, L, D), j = (0, E.default)(L, _), M = null != j ? j.is_canceled ? x.GuildScheduledEventStatus.CANCELED : x.GuildScheduledEventStatus.SCHEDULED : null;
        if (null == p) return null;
        let {
            entity_type: G,
            status: O,
            recurrence_rule: V
        } = p;
        return (0, l.jsxs)("div", {
            className: s(S.statusContainer, t),
            children: [(0, l.jsx)(g.GuildEventTimeStatus, {
                startTime: w.toISOString(),
                status: null != M ? M : O,
                eventType: G,
                isNew: N,
                recurrenceRule: (0, h.recurrenceRuleFromServer)(V),
                guildEventId: _,
                recurrenceId: L
            }), (0, l.jsx)("div", {
                className: S.spacer
            }), !m && null != n && (0, l.jsx)(u.Tooltip, {
                text: C.default.Messages.GUILD_EVENT_CREATED_BY.format({
                    username: null != A ? A : d.default.getName(n)
                }),
                children: e => (0, l.jsx)(u.Avatar, {
                    ...e,
                    src: n.getAvatarURL(a, 20),
                    size: u.AvatarSizes.SIZE_20,
                    "aria-label": null != A ? A : n.username,
                    className: S.creator
                })
            }), (0, l.jsx)(u.Tooltip, {
                text: C.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                    count: I
                }),
                children: e => (0, l.jsxs)("div", {
                    className: S.rsvpCount,
                    ...e,
                    children: [(0, l.jsx)(c.default, {
                        width: 12,
                        height: 12,
                        className: S.rsvpIcon
                    }), (0, l.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: I
                    })]
                })
            })]
        })
    }

    function D(e) {
        let {
            headerVariant: t = "heading-lg/medium",
            descriptionClassName: n,
            name: a,
            description: r,
            truncate: i,
            guildId: c,
            imageSource: d
        } = e;
        return (0, l.jsxs)("div", {
            className: s({
                [S.withThumbnail]: null != d
            }),
            children: [(0, l.jsxs)("div", {
                className: s({
                    [S.descriptionWithThumbnail]: null != d
                }),
                children: [(0, l.jsx)(u.Heading, {
                    variant: t,
                    selectable: !0,
                    className: S.eventName,
                    children: a
                }), null != r && (0, l.jsx)(N.default, {
                    description: r,
                    className: s(n, S.description),
                    truncate: i,
                    guildId: c
                })]
            }), null != d && (0, l.jsx)("div", {
                className: S.thumbnailContainer,
                children: (0, l.jsx)(m.default, {
                    source: d,
                    className: S.thumbnail
                })
            })]
        })
    }

    function L(e) {
        let {
            headerVariant: t,
            descriptionClassName: n,
            creator: a,
            name: s,
            description: r,
            imageSource: u,
            isHub: i = !1,
            truncate: c,
            guildId: d,
            isNew: o,
            guildEventId: E,
            eventPreview: f,
            recurrenceId: v
        } = e;
        return (0, l.jsxs)("div", {
            className: S.container,
            children: [(0, l.jsx)(_, {
                className: S.eventInfoStatusContainer,
                creator: a,
                guildId: d,
                isHub: i,
                isNew: o,
                guildEventId: E,
                eventPreview: f,
                recurrenceId: v
            }), (0, l.jsx)(D, {
                name: s,
                description: r,
                headerVariant: t,
                descriptionClassName: n,
                truncate: c,
                guildId: d,
                imageSource: u
            })]
        })
    }
}