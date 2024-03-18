function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("424973"), n("222007"), n("702976"), n("808653");
    var i = n("917351"),
        a = n.n(i),
        s = n("233069"),
        l = n("870691"),
        o = n("42203"),
        r = n("350522"),
        u = n("319781"),
        d = n("957255"),
        c = n("282109"),
        f = n("718517"),
        g = n("568734"),
        m = n("449008"),
        h = n("380353"),
        _ = n("49111"),
        p = n("397336");

    function E(e, t, n, i, g) {
        if (t !== h.Mode.UseGreyDot) return [{
            label: "Setting the guild to a white dot unread",
            apply: (e, t) => {
                S(e, t, !0)
            }
        }];
        let p = [],
            E = Object.values(o.default.getMutableGuildChannelsForGuild(e.id)).filter(e => d.default.can(_.Permissions.VIEW_CHANNEL, e));
        return p.push(... function(e, t) {
            let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
            if (!n) return [];
            let i = [{
                    label: "Unmuting the guild and marking it as read",
                    apply: e => {
                        e.muted = !1, e.mute_config = null
                    },
                    needsMarkedAsRead: !0
                }],
                a = t.filter(t => c.default.getChannelMessageNotifications(e.id, t.id) === _.UserNotificationSettings.ALL_MESSAGES);
            return a.length > 0 && i.push({
                label: "Setting ".concat(a.length, " to mentions-only since they were all-messages and we are unmuting the guild"),
                debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let n of a) T(e, t, n.id, e => {
                        e.message_notifications = _.UserNotificationSettings.ONLY_MENTIONS
                    })
                }
            }), i
        }(e, E)), p.push(function(e) {
            let t = c.default.getMessageNotifications(e.id);
            if (t === _.UserNotificationSettings.ALL_MESSAGES) return {
                label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
                apply: e => {
                    e.message_notifications = _.UserNotificationSettings.ONLY_MENTIONS
                }
            }
        }(e)), p.push(function() {
            return {
                label: "Setting the guild to a grey dot unread",
                apply: (e, t) => {
                    S(e, t, !1)
                }
            }
        }()), p.push(... function(e) {
            let t = [],
                [n, i] = a(e).filter(e => e.type === _.ChannelTypes.GUILD_ANNOUNCEMENT).partition(e => c.default.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && c.default.isChannelMuted(e.guild_id, e.parent_id)).value();
            return n.length > 0 && t.push({
                label: "Not touching ".concat(n.length, " announcement channels since they are muted"),
                debug: n.map(e => "\n    - #".concat(e.name)).join("")
            }), i.length > 0 && t.push({
                label: "Setting ".concat(i.length, " announcement channels to white-dot"),
                debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let n of i) v(e, t, n.id, !0)
                }
            }), t
        }(E)), p.push(... function(e) {
            let t = [],
                n = [];
            for (let t of e)
                if (c.default.isChannelMuted(t.guild_id, t.id) && t.isCategory()) {
                    let e = l.default.isCollapsed(t.id);
                    !e && n.push(t)
                } return n.length > 0 && t.push({
                label: "Unmuting ".concat(n.length, " categories and setting to grey-dot"),
                debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let i of n) v(e, t, i.id, !1), T(e, t, i.id, e => {
                        e.muted = !1, e.mute_config = null
                    })
                }
            }), t
        }(E)), p.push(... function(e) {
            let t = [],
                n = [],
                i = [];
            return e.forEach(e => {
                if (c.default.isChannelMuted(e.guild_id, e.id)) return;
                let t = c.default.getChannelMessageNotifications(e.guild_id, e.id);
                t === _.UserNotificationSettings.ALL_MESSAGES ? n.push(e) : t === _.UserNotificationSettings.ONLY_MENTIONS && i.push(e)
            }), n.length > 0 && t.push({
                label: "Setting ".concat(n.length, " channels to white-dot since they were explicitly All Messages"),
                debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let i of n) v(e, t, i.id, !0)
                }
            }), i.length > 0 && t.push({
                label: "Setting ".concat(i.length, " channels to grey-dot since they were explicitly Mentions Only"),
                debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let n of i) v(e, t, n.id, !1)
                }
            }), t
        }(E)), r.default.hasConsented(_.Consents.PERSONALIZATION) ? p.push(... function(e, t, n, i, s) {
            let l = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
            if (l) return [];
            let o = new Set(t.map(e => e.id)),
                r = i.filter(e => o.has(e.channel_id)),
                u = a.keyBy(r, "channel_id"),
                d = Math.max(n.messages === h.PainLevel.High ? s.frecency.yearMinOpensLargeServer : s.frecency.yearMinOpensSmallServer, r.reduce((e, t) => {
                    var n;
                    return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                }, 0) * s.frecency.totalOpensPercent),
                f = Math.max(s.frecency.monthMinOpens, r.reduce((e, t) => {
                    var n;
                    return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
                }, 0) * s.frecency.totalOpensPercent),
                g = [],
                m = [];
            t.forEach(e => {
                var t, n, i, a;
                let s = null !== (t = u[e.id]) && void 0 !== t ? t : {};
                Number(null !== (n = s.num_year_opens) && void 0 !== n ? n : 0) > d || Number(null !== (i = s.num_month_opens) && void 0 !== i ? i : 0) > f ? g.push(e) : Number(null !== (a = s.num_three_month_opens) && void 0 !== a ? a : 0) > 2 && m.push(e)
            });
            let _ = [];
            return g.length > 0 && _.push({
                label: "Setting ".concat(g.length, " channels to white-dot since they are recent and frequently viewed"),
                debug: g.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(u[e.id]), ")")).join(""),
                apply: (e, t) => {
                    for (let n of g) v(e, t, n.id, !0)
                }
            }), m.length > 0 && _.push({
                label: "NOT setting ".concat(m.length, " channels to white-dot because they were only viewed a little."),
                debug: m.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(u[e.id]), ")")).join("")
            }), _
        }(e, E, n, i, g)) : p.push(... function(e, t) {
            let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
            if (n) return [];
            let i = [],
                a = new Set(t.map(e => e.id)),
                l = Date.now() - f.default.Millis.DAYS_30,
                o = u.default.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof s.ChannelRecordBase && a.has(e.id)),
                r = o.filter(e => {
                    var t, n;
                    let i = null !== (n = null === (t = u.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                    return 0 !== i.length && i[i.length - 1] >= l
                });
            return r.length > 0 && i.push({
                label: "Setting ".concat(r.length, " channels to white-dot since they are recent and frequently viewed"),
                debug: r.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let n of r) v(e, t, n.id, !0)
                }
            }), i
        }(e, E)), p.filter(m.isNotNullish)
    }

    function S(e, t, n) {
        var i, a;
        e.flags = (0, g.setFlag)(null !== (a = null !== (i = e.flags) && void 0 !== i ? i : t.flags) && void 0 !== a ? a : 0, p.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n), e.flags = (0, g.setFlag)(e.flags, p.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !n)
    }

    function T(e, t, n, i) {
        var s, l, o, r;
        let u = null !== (o = null === (s = e.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== o ? o : {},
            d = null !== (r = null === (l = t.channel_overrides) || void 0 === l ? void 0 : l[n]) && void 0 !== r ? r : {};
        i(u, d), !a.isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = u)
    }

    function v(e, t, n, i) {
        T(e, t, n, (e, t) => {
            var n, a;
            e.flags = (0, g.setFlag)(null !== (a = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== a ? a : 0, p.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i), e.flags = (0, g.setFlag)(e.flags, p.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !i)
        })
    }
}