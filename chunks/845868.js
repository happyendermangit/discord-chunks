function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("424973"), n("222007"), n("702976"), n("808653");
    var i = n("917351"),
        a = n.n(i),
        s = n("233069"),
        l = n("870691"),
        r = n("42203"),
        o = n("350522"),
        u = n("319781"),
        d = n("957255"),
        c = n("282109"),
        f = n("718517"),
        m = n("568734"),
        h = n("449008"),
        g = n("380353"),
        _ = n("49111"),
        S = n("397336");

    function p(e, t, n, i, m) {
        if (t !== g.Mode.UseGreyDot) return [{
            label: "Setting the guild to a white dot unread",
            apply: (e, t) => {
                T(e, t, !0)
            }
        }];
        let S = [],
            p = Object.values(r.default.getMutableGuildChannelsForGuild(e.id)).filter(e => d.default.can(_.Permissions.VIEW_CHANNEL, e));
        return S.push(... function(e, t) {
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
                    for (let n of a) E(e, t, n.id, e => {
                        e.message_notifications = _.UserNotificationSettings.ONLY_MENTIONS
                    })
                }
            }), i
        }(e, p)), S.push(function(e) {
            let t = c.default.getMessageNotifications(e.id);
            if (t === _.UserNotificationSettings.ALL_MESSAGES) return {
                label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
                apply: e => {
                    e.message_notifications = _.UserNotificationSettings.ONLY_MENTIONS
                }
            }
        }(e)), S.push(function() {
            return {
                label: "Setting the guild to a grey dot unread",
                apply: (e, t) => {
                    T(e, t, !1)
                }
            }
        }()), S.push(... function(e) {
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
        }(p)), S.push(... function(e) {
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
                    for (let i of n) v(e, t, i.id, !1), E(e, t, i.id, e => {
                        e.muted = !1, e.mute_config = null
                    })
                }
            }), t
        }(p)), S.push(... function(e) {
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
        }(p)), o.default.hasConsented(_.Consents.PERSONALIZATION) ? S.push(... function(e, t, n, i, s) {
            let l = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
            if (l) return [];
            let r = new Set(t.map(e => e.id)),
                o = i.filter(e => r.has(e.channel_id)),
                u = a.keyBy(o, "channel_id"),
                d = Math.max(n.messages === g.PainLevel.High ? s.frecency.yearMinOpensLargeServer : s.frecency.yearMinOpensSmallServer, o.reduce((e, t) => {
                    var n;
                    return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                }, 0) * s.frecency.totalOpensPercent),
                f = Math.max(s.frecency.monthMinOpens, o.reduce((e, t) => {
                    var n;
                    return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
                }, 0) * s.frecency.totalOpensPercent),
                m = [],
                h = [];
            t.forEach(e => {
                var t, n, i, a;
                let s = null !== (t = u[e.id]) && void 0 !== t ? t : {};
                Number(null !== (n = s.num_year_opens) && void 0 !== n ? n : 0) > d || Number(null !== (i = s.num_month_opens) && void 0 !== i ? i : 0) > f ? m.push(e) : Number(null !== (a = s.num_three_month_opens) && void 0 !== a ? a : 0) > 2 && h.push(e)
            });
            let _ = [];
            return m.length > 0 && _.push({
                label: "Setting ".concat(m.length, " channels to white-dot since they are recent and frequently viewed"),
                debug: m.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(u[e.id]), ")")).join(""),
                apply: (e, t) => {
                    for (let n of m) v(e, t, n.id, !0)
                }
            }), h.length > 0 && _.push({
                label: "NOT setting ".concat(h.length, " channels to white-dot because they were only viewed a little."),
                debug: h.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(u[e.id]), ")")).join("")
            }), _
        }(e, p, n, i, m)) : S.push(... function(e, t) {
            let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
            if (n) return [];
            let i = [],
                a = new Set(t.map(e => e.id)),
                l = Date.now() - f.default.Millis.DAYS_30,
                r = u.default.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof s.ChannelRecordBase && a.has(e.id)),
                o = r.filter(e => {
                    var t, n;
                    let i = null !== (n = null === (t = u.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                    return 0 !== i.length && i[i.length - 1] >= l
                });
            return o.length > 0 && i.push({
                label: "Setting ".concat(o.length, " channels to white-dot since they are recent and frequently viewed"),
                debug: o.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let n of o) v(e, t, n.id, !0)
                }
            }), i
        }(e, p)), S.filter(h.isNotNullish)
    }

    function T(e, t, n) {
        var i, a;
        e.flags = (0, m.setFlag)(null !== (a = null !== (i = e.flags) && void 0 !== i ? i : t.flags) && void 0 !== a ? a : 0, S.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n), e.flags = (0, m.setFlag)(e.flags, S.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !n)
    }

    function E(e, t, n, i) {
        var s, l, r, o;
        let u = null !== (r = null === (s = e.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== r ? r : {},
            d = null !== (o = null === (l = t.channel_overrides) || void 0 === l ? void 0 : l[n]) && void 0 !== o ? o : {};
        i(u, d), !a.isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = u)
    }

    function v(e, t, n, i) {
        E(e, t, n, (e, t) => {
            var n, a;
            e.flags = (0, m.setFlag)(null !== (a = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== a ? a : 0, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i), e.flags = (0, m.setFlag)(e.flags, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !i)
        })
    }
}