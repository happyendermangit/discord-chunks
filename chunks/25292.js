function(e, t, n) {
    "use strict";
    let l;
    n.r(t), n.d(t, {
        COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
            return en
        },
        default: function() {
            return eo
        }
    }), n("424973"), n("843762"), n("781738"), n("222007");
    var r = n("448105"),
        a = n.n(r),
        i = n("917351"),
        u = n.n(i),
        o = n("195547"),
        s = n("679653"),
        c = n("454273"),
        d = n("966506"),
        f = n("605250"),
        p = n("385976"),
        h = n("677315"),
        m = n("361776"),
        g = n("290886"),
        E = n("866353"),
        C = n("865372"),
        y = n("364685"),
        L = n("161585"),
        A = n("401690"),
        S = n("872173"),
        _ = n("233069"),
        T = n("766274"),
        I = n("42203"),
        N = n("923959"),
        v = n("26989"),
        R = n("305961"),
        b = n("377253"),
        M = n("957255"),
        x = n("824563"),
        U = n("27618"),
        O = n("18494"),
        D = n("162771"),
        G = n("697218"),
        P = n("552712"),
        w = n("449008"),
        k = n("651879"),
        F = n("991170"),
        q = n("655518"),
        B = n("299039"),
        H = n("159885"),
        V = n("158998"),
        K = n("49111"),
        Y = n("375822"),
        j = n("724210"),
        W = n("782340");
    let Q = new f.default("AutocompleteUtils"),
        z = () => !0,
        X = /(\t|\s)/,
        $ = [];
    l = n("905571").default;
    let J = l.MENTION_EVERYONE,
        Z = l.MENTION_HERE,
        ee = l.LAUNCHABLE_APPLICATIONS;

    function et() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 ? arguments[1] : void 0;
        return 1e3 * e * (null != t ? t : 1)
    }
    let en = [N.GUILD_SELECTABLE_CHANNELS_KEY, N.GUILD_VOCAL_CHANNELS_KEY, K.ChannelTypes.GUILD_CATEGORY];

    function el(e, t) {
        let {
            exactQuery: n,
            containQuery: l,
            queryLower: r,
            isFullMatch: i
        } = t, u = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        try {
            if (n.test(e)) {
                if (e.toLocaleLowerCase() === r) return 10;
                if (!1 === i) {
                    let t = r.length / e.length;
                    return Math.max(1, 7 * t)
                }
                return 7
            }
            if (l.test(e)) return 5;
            if (function(e, t) {
                    let n = e.split(/(?:,| )+/);
                    return n.every(e => {
                        let n = RegExp(q.default.escape(e), "i");
                        return n.test(t)
                    })
                }(r, e)) return 3;
            if (u && a(r, e)) return 1
        } catch (e) {
            Q.error(e)
        }
        return 0
    }

    function er(e) {
        return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
    }

    function ea(e) {
        let {
            query: t,
            members: n,
            limit: l,
            filter: r,
            allowSnowflake: i
        } = e, u = G.default.getUsers(), s = D.default.getGuildId(), c = t.toLocaleLowerCase(), d = (0, H.normalize)(c), f = [], p = [], h = n.length, m = 0, g = 0;
        for (; m < h;) {
            var E, C, y, L, A, S, _, I, N;
            let e, l;
            let o = n[m];
            o instanceof T.default ? (l = o, e = null === (C = v.default.getNick(s, l.id)) || void 0 === C ? void 0 : C.toLocaleLowerCase()) : (e = null === (y = o.nick) || void 0 === y ? void 0 : y.toLocaleLowerCase(), l = u[o.userId]);
            let h = null === (E = V.default.getGlobalName(l)) || void 0 === E ? void 0 : E.toLocaleLowerCase();
            if (null == r || r(l)) {
                let n = l.username.toLocaleLowerCase(),
                    r = (0, H.stripDiacritics)(n),
                    u = (0, H.normalize)(r),
                    o = null != e ? (0, H.stripDiacritics)(e) : null,
                    s = null != o ? (0, H.normalize)(o) : null,
                    m = null != h ? (0, H.stripDiacritics)(h) : null,
                    E = null != m ? (0, H.normalize)(m) : null;
                i && t === l.id || n.substring(0, c.length) === c || r.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == o ? void 0 : o.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == m ? void 0 : m.substring(0, c.length)) === c ? f.push({
                    type: Y.AutocompleterResultTypes.USER,
                    record: l,
                    score: 10,
                    comparator: null !== (L = null != h ? h : e) && void 0 !== L ? L : n,
                    sortable: null !== (A = null != m ? m : o) && void 0 !== A ? A : r
                }) : u.substring(0, d.length) === d || (null == s ? void 0 : s.substring(0, d.length)) === d || (null == E ? void 0 : E.substring(0, d.length)) === d ? f.push({
                    type: Y.AutocompleterResultTypes.USER,
                    record: l,
                    score: 1,
                    comparator: null !== (S = null != h ? h : e) && void 0 !== S ? S : n,
                    sortable: null !== (_ = null != m ? m : o) && void 0 !== _ ? _ : r
                }) : g < 50 && (a(c, r) || a(d, u) || null != o && a(c, o) || null != s && a(d, s) || null != m && a(c, m) || null != E && a(d, E)) && (p.push({
                    type: Y.AutocompleterResultTypes.USER,
                    record: l,
                    score: 1,
                    comparator: null !== (I = null != h ? h : e) && void 0 !== I ? I : n,
                    sortable: null !== (N = null != m ? m : o) && void 0 !== N ? N : r
                }), g += 1)
            }
            m += 1
        }
        return f.sort(o.default), f.length < l && (p.sort(o.default), f = f.concat(p.slice(0, Math.max(0, l - f.length)))), f.length > l && (f.length = l), f
    }

    function ei(e, t, n) {
        let l = 0,
            r = null;
        for (let a of t) {
            let t = el(e, a, n);
            t > l && (l = t, r = a)
        }
        return null != r && (r.isFullMatch ? t.length = 0 : t.splice(t.indexOf(r), 1)), l
    }

    function eu(e, t) {
        let n = I.default.getChannel(e);
        return null == e || null == n ? [] : u(b.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => G.default.getUser(e.author.id)).filter(e => {
            if (null == e || e.isNonUserBot()) return !1;
            let t = n.getGuildId();
            if (null == t) return !0;
            let l = v.default.getMember(t, e.id);
            return er(l)
        }).map(e => {
            var t;
            let l = n.getGuildId(),
                r = null != l ? v.default.getMember(l, e.id) : null;
            return {
                type: Y.AutocompleterResultTypes.USER,
                record: e,
                score: 0,
                comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : V.default.getName(e)
            }
        }).take(t).value()
    }
    var eo = {
        queryFriends(e) {
            let {
                query: t,
                limit: n = 10,
                _fuzzy: l = !0,
                filter: r
            } = e;
            return ea({
                query: t,
                members: U.default.getFriendIDs().map(e => G.default.getUser(e)).filter(w.isNotNullish),
                limit: n,
                filter: r
            })
        },
        queryDMUsers(e) {
            let {
                query: t,
                limit: n = 10,
                filter: l
            } = e;
            return ea({
                query: t,
                members: I.default.getDMUserIds().map(e => G.default.getUser(e)).filter(w.isNotNullish),
                limit: n,
                filter: l
            })
        },
        queryChannelUsers(e) {
            let t, {
                    channelId: n,
                    query: l,
                    limit: r = 10,
                    request: a = !0,
                    checkRecentlyTalkedOnEmptyQuery: i = !0,
                    allowSnowflake: u = !1
                } = e,
                o = I.default.getChannel(n);
            if (null == o) return [];
            let s = o.isThread() ? I.default.getChannel(o.parent_id) : null,
                c = null != s ? s : o;
            if (null == c) return [];
            if (c.isPrivate()) {
                t = c.recipients.map(e => {
                    var t;
                    return {
                        userId: e,
                        nick: null !== (t = U.default.getNickname(e)) && void 0 !== t ? t : null
                    }
                });
                let e = G.default.getCurrentUser();
                null != e && t.push({
                    userId: e.id,
                    nick: null
                })
            } else {
                if (0 === l.length && i) {
                    let e = eu(o.id, r);
                    if (e.length > 0) return e
                }
                t = v.default.getMembers(c.guild_id).filter(er), a && k.default.requestMembers(c.guild_id, l, r)
            }
            return ea({
                query: l,
                members: t,
                limit: r,
                filter: e => c.isPrivate() || F.default.can({
                    permission: K.Permissions.VIEW_CHANNEL,
                    user: e,
                    context: c
                }),
                allowSnowflake: u
            })
        },
        queryGuildUsers(e) {
            let {
                guildId: t,
                query: n,
                limit: l = 10,
                request: r = !0,
                checkRecentlyTalkedOnEmptyQuery: a = !0,
                filter: i,
                allowSnowflake: u
            } = e;
            if (null == R.default.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = eu(O.default.getChannelId(t), l);
                if (e.length > 0) return e
            }
            let o = v.default.getMembers(t).filter(er);
            return r && n.length > 0 && k.default.requestMembers(t, n, l), ea({
                query: n,
                members: o,
                limit: l,
                filter: i,
                allowSnowflake: u
            })
        },
        queryUsers(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                l = arguments.length > 4 ? arguments[4] : void 0;
            return n && e.length > 0 && k.default.requestMembers(null, e, t), ea({
                query: e,
                members: u(G.default.getUsers()).values().value(),
                limit: t,
                filter: l
            })
        },
        queryChannels(e) {
            let t, {
                    query: n,
                    guildId: l,
                    limit: r = K.MAX_AUTOCOMPLETE_RESULTS,
                    fuzzy: a = !0,
                    filter: i = z,
                    type: c = N.GUILD_SELECTABLE_CHANNELS_KEY,
                    allowEmptyQueries: d = !1,
                    requireVocalConnectAccess: f = !0,
                    boosters: p = {},
                    allowSnowflake: h
                } = e,
                m = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.split(" ").filter(e => "" !== e || t).map(e => {
                            let t = e.toLocaleLowerCase();
                            return {
                                queryLower: t,
                                exactQuery: RegExp("^".concat(q.default.escape(t)), "i"),
                                containQuery: RegExp(q.default.escape(t), "i"),
                                isFullMatch: !1
                            }
                        });
                    if (e.includes(" ")) {
                        let t = e.toLocaleLowerCase();
                        n.unshift({
                            queryLower: t,
                            exactQuery: RegExp("^".concat(q.default.escape(t).replace(" ", "( |-)")), "i"),
                            containQuery: RegExp(q.default.escape(t).replace(" ", "( |-)"), "i"),
                            isFullMatch: !0
                        })
                    }
                    return n
                }(n, d);
            t = null != l ? u(N.default.getChannels(l)[c]).map(e => e.channel).concat(A.default.computeAllActiveJoinedThreads(l)).value() : u(I.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(A.default.computeAllActiveJoinedThreads()).value();
            let g = {},
                E = [];
            for (let e of t) {
                var C, y, L, S, T;
                if (C = c, y = e.type, L = null != l, !(C === y || (L || (0, _.isGuildChannelType)(y)) && (C === N.GUILD_SELECTABLE_CHANNELS_KEY ? (0, _.isGuildSelectableChannelType)(y) || (0, _.isGuildVocalChannelType)(y) : C === N.GUILD_VOCAL_CHANNELS_KEY && (0, _.isGuildVocalChannelType)(y))) || (0, _.isGuildChannelType)(e.type) && !M.default.can(f ? e.accessPermissions : K.Permissions.VIEW_CHANNEL, e) || !i(e)) continue;
                let t = [...m],
                    r = e.name.toLocaleLowerCase(),
                    u = h && n === e.id,
                    o = u ? 10 : ei(r, t, a);
                if (0 !== o) {
                    if (t.length > 0) {
                        for (let n of [function(e, t) {
                                if (null == e.guild_id) return;
                                let n = t[e.guild_id];
                                if (null == n) {
                                    var l;
                                    n = t[e.guild_id] = null === (l = R.default.getGuild(e.guild_id)) || void 0 === l ? void 0 : l.toString().toLocaleLowerCase()
                                }
                                return n
                            }(e, g), function(e, t) {
                                if (null == e.parent_id) return;
                                let n = t[e.parent_id];
                                if (null == n) {
                                    var l;
                                    n = t[e.parent_id] = null === (l = I.default.getChannel(e.parent_id)) || void 0 === l ? void 0 : l.name.toLocaleLowerCase()
                                }
                                return n
                            }(e, g)]) {
                            if (null == n || "" === n) continue;
                            let e = ei(n, t, !1);
                            0 !== e && (o += .5 * e)
                        }
                        o = Math.min(6, o)
                    }
                    if (0 !== o && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || u)) {
                        ;
                        if (S = c, T = e.type, S === N.GUILD_SELECTABLE_CHANNELS_KEY && (0, _.isGuildVocalChannelType)(T)) o = Math.max(o - 1, .5);
                        E.push({
                            type: (0, _.isGuildVocalChannelType)(e.type) ? Y.AutocompleterResultTypes.VOICE_CHANNEL : Y.AutocompleterResultTypes.TEXT_CHANNEL,
                            record: e,
                            score: et(o, p[e.id]),
                            comparator: (0, s.computeChannelName)(e, G.default, U.default),
                            sortable: r
                        })
                    }
                }
            }
            return E.sort(o.default), null != r && E.length > r && (E.length = r), E
        },
        queryGuilds(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: l = !0,
                filter: r = z,
                boosters: a = {}
            } = e, i = "" === t ? "" : t.toLocaleLowerCase(), s = {
                exactQuery: RegExp("^".concat(q.default.escape(i)), "i"),
                containQuery: RegExp(q.default.escape(i), "i"),
                queryLower: i
            }, c = [], d = u(R.default.getGuilds()).values().value();
            for (let e of d) {
                if (!r(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = el(t, s, l);
                n > 0 && c.push({
                    type: Y.AutocompleterResultTypes.GUILD,
                    record: e,
                    score: et(n, a[e.id]),
                    comparator: e.toString(),
                    sortable: t
                })
            }
            return c.sort(o.default), c.length > n && (c.length = n), c
        },
        queryGroupDMs(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: l = !0,
                filter: r = z,
                boosters: a = {}
            } = e, i = (0, H.stripDiacritics)((0, H.normalize)(t.toLocaleLowerCase())), c = {
                exactQuery: RegExp("^".concat(q.default.escape(i)), "i"),
                containQuery: RegExp(q.default.escape(i), "i"),
                queryLower: i
            }, d = u(I.default.getMutablePrivateChannels()).values().value(), f = [];
            for (let e of d) {
                if (!e.isMultiUserDM() || !r(e)) continue;
                let t = (0, s.computeChannelName)(e, G.default, U.default).toLocaleLowerCase(),
                    n = (0, H.stripDiacritics)((0, H.normalize)(t)),
                    i = el(n, c, l);
                i > 0 && f.push({
                    type: Y.AutocompleterResultTypes.GROUP_DM,
                    record: e,
                    score: et(i, a[e.id]),
                    comparator: (0, s.computeChannelName)(e, G.default, U.default),
                    sortable: n
                })
            }
            return f.sort(o.default), f.length > n && (f.length = n), f
        },
        queryApplications(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: l = !0,
                filter: r = z
            } = e, a = t.toLocaleLowerCase(), i = {
                exactQuery: RegExp("^".concat(q.default.escape(a)), "i"),
                containQuery: RegExp(q.default.escape(a), "i"),
                queryLower: a
            }, u = ee(), s = [];
            for (let {
                    application: e
                }
                of u) {
                if (!r(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = el(t, i, l);
                n > 0 && s.push({
                    type: Y.AutocompleterResultTypes.APPLICATION,
                    record: e,
                    score: n,
                    comparator: e.name,
                    sortable: t
                })
            }
            return s.sort(o.default), s.length > n && (s.length = n), s
        },
        querySKUs(e) {
            let {
                query: t,
                limit: n = 10,
                fuzzy: l = !0,
                filter: r = z
            } = e, a = t.toLocaleLowerCase(), i = {
                exactQuery: RegExp("^".concat(q.default.escape(a)), "i"),
                containQuery: RegExp(q.default.escape(a), "i"),
                queryLower: a
            }, s = u(P.default.getSKUs()).values().value(), c = [];
            for (let e of s)
                if (e.type === K.SKUTypes.DURABLE_PRIMARY && r(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = el(t, i, l);
                    n > 0 && c.push({
                        type: Y.AutocompleterResultTypes.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    })
                } return c.sort(o.default), c.length > n && (c.length = n), c
        },
        getRecentlyTalked: eu,
        queryMentionResults(e) {
            let {
                query: t,
                channel: n,
                canMentionEveryone: l = !1,
                canMentionHere: r = !0,
                canMentionUsers: i = !0,
                canMentionRoles: o = !0,
                includeAllGuildUsers: s = !1,
                includeNonMentionableRoles: c = !1,
                checkRecentlyTalkedOnEmptyQuery: d = !0,
                limit: f = K.MAX_AUTOCOMPLETE_RESULTS,
                request: p,
                allowSnowflake: h = !1
            } = e, m = i ? (s && null != n.guild_id ? this.queryGuildUsers({
                guildId: n.guild_id,
                query: t,
                limit: f,
                checkRecentlyTalkedOnEmptyQuery: d,
                request: p,
                allowSnowflake: h
            }) : this.queryChannelUsers({
                channelId: n.id,
                query: t,
                limit: f,
                checkRecentlyTalkedOnEmptyQuery: d,
                allowSnowflake: h
            })).map(e => {
                let {
                    record: t,
                    score: l,
                    comparator: r
                } = e;
                return {
                    user: t,
                    score: l,
                    comparator: r,
                    nick: v.default.getNick(n.guild_id, t.id),
                    status: x.default.getStatus(t.id)
                }
            }) : [], g = m.length, E = t.toLowerCase(), C = [];
            if (g < f && o) {
                let e = n.getGuildId(),
                    t = R.default.getGuild(e);
                null != t && (u(t.roles).filter(t => {
                    let {
                        mentionable: n,
                        name: r,
                        id: i
                    } = t;
                    return (n || l || c) && (a(E, r.toLowerCase()) || h && E === i) && i !== B.default.castGuildIdAsEveryoneGuildRoleId(e)
                }).take(f - g).forEach(e => {
                    C.push(e)
                }), g += C.length)
            }
            let y = [];
            return !n.isPrivate() && l && o && (g < f && a(E, J().test) && (y.push(J()), g += 1), r && g < f && a(E, Z().test) && y.push(Z())), {
                users: m,
                globals: y,
                roles: C
            }
        },
        queryGuildMentionResults(e) {
            let {
                query: t,
                guildId: n,
                canMentionEveryone: l = !1,
                canMentionUsers: r = !0,
                canMentionRoles: i = !0,
                canMentionNonMentionableRoles: o = !1
            } = e, s = r ? this.queryGuildUsers({
                guildId: n,
                query: t
            }).map(e => ({
                ...e,
                status: x.default.getStatus(e.record.id)
            })) : [], d = s.length, f = t.toLowerCase(), p = [];
            if (d < K.MAX_AUTOCOMPLETE_RESULTS && i) {
                let e = R.default.getGuild(n);
                null != e && (u(e.roles).filter(e => {
                    let {
                        mentionable: t,
                        name: r,
                        id: i
                    } = e;
                    return (t || l || o) && a(f, r.toLowerCase()) && (0, c.isNotEveryoneRoleId)(n, i)
                }).take(K.MAX_AUTOCOMPLETE_RESULTS - d).forEach(e => {
                    p.push(e)
                }), d += p.length)
            }
            let h = [];
            return l && i && (d < K.MAX_AUTOCOMPLETE_RESULTS && a(f, J().test) && (h.push(J()), d += 1), d < K.MAX_AUTOCOMPLETE_RESULTS && a(f, Z().test) && h.push(Z())), {
                users: s,
                globals: h,
                roles: p
            }
        },
        queryChoice(e) {
            let {
                query: t,
                choices: n,
                limit: l = 10,
                fuzzy: r = !0
            } = e, a = t.toLocaleLowerCase(), i = RegExp("^".concat(q.default.escape(a)), "i"), o = RegExp(q.default.escape(a), "i"), s = u(n).map((e, t) => {
                let n = el(e.displayName.toLocaleLowerCase(), {
                    exactQuery: i,
                    containQuery: o,
                    queryLower: a
                }, r);
                return n > 0 ? {
                    choice: e,
                    score: n,
                    originalIndex: t
                } : null
            }).filter(w.isNotNullish).sortBy(e => -1 * e.score);
            return null !== l && (s = s.take(l)), s.value()
        },
        queryStaticRouteChannels(e) {
            let {
                query: t,
                guild: n
            } = e, l = t.toLocaleLowerCase(), r = {
                exactQuery: RegExp("^".concat(q.default.escape(l)), "i"),
                containQuery: RegExp(q.default.escape(l), "i"),
                queryLower: l
            }, a = ((0, h.canSeeGuildHome)(n.id) || (0, g.canSeeOnboardingHome)(n.id)) && !n.hasFeature(K.GuildFeatures.HUB), i = n.hasFeature(K.GuildFeatures.COMMUNITY), u = (0, m.isGuildOnboardingAvailable)(n) && n.hasFeature(K.GuildFeatures.COMMUNITY), o = [{
                id: j.StaticChannelId.SERVER_GUIDE,
                name: W.default.Messages.SERVER_GUIDE
            }, {
                id: j.StaticChannelId.CHANNEL_BROWSER,
                name: W.default.Messages.CHANNEL_BROWSER_TITLE
            }, {
                id: j.StaticChannelId.CUSTOMIZE_COMMUNITY,
                name: W.default.Messages.CHANNELS_AND_ROLES
            }], s = [];
            for (let e of o) {
                if (e.id === j.StaticChannelId.SERVER_GUIDE && !a || e.id === j.StaticChannelId.CHANNEL_BROWSER && !i || e.id === j.StaticChannelId.CUSTOMIZE_COMMUNITY && !u) continue;
                let t = e.name.toLocaleLowerCase(),
                    l = el(t, r, !1);
                l > 0 && s.push(new _.UnknownChannelRecord({
                    id: e.id,
                    name: e.name,
                    type: K.ChannelTypes.UNKNOWN,
                    guild_id: n.id
                }))
            }
            return s
        },
        queryChannelResults(e) {
            let {
                query: t,
                channel: n,
                type: l = N.GUILD_SELECTABLE_CHANNELS_KEY,
                channelTypes: r
            } = e, a = this.queryChannels({
                query: t,
                guildId: n.getGuildId(),
                limit: void 0,
                fuzzy: void 0,
                filter: e => null == r || r.includes(e.type),
                type: l,
                allowEmptyQueries: !0
            }).map(e => e.record);
            return {
                channels: a
            }
        },
        queryApplicationCommandChannelResults(e) {
            let {
                query: t,
                channel: n,
                channelTypes: l,
                limit: r = K.MAX_AUTOCOMPLETE_RESULTS,
                allowSnowflake: a
            } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == l || l.includes(n.type)) && e.push(n), {
                    channels: e
                }
            }
            let i = [];
            for (let e of en) i = i.concat(this.queryChannels({
                query: t,
                guildId: n.guild_id,
                limit: r,
                fuzzy: !0,
                filter: e => null == l || l.includes(e.type),
                type: e,
                allowEmptyQueries: !0,
                requireVocalConnectAccess: !1,
                allowSnowflake: a
            }));
            return i = i.filter(e => {
                let {
                    record: t
                } = e;
                return "null" !== t.id
            }).sort(d.default), null != r && i.length > r && (i = i.slice(0, r)), {
                channels: i.map(e => e.record)
            }
        },
        queryChoiceResults(e) {
            let {
                query: t,
                choices: n
            } = e, l = this.queryChoice({
                query: t,
                choices: n,
                limit: null
            }).map(e => e.choice);
            return {
                choices: l
            }
        },
        queryEmojiResults(e) {
            let {
                query: t,
                channel: n,
                intention: l,
                maxCount: r = K.MAX_AUTOCOMPLETE_RESULTS,
                matchComparator: a
            } = e;
            S.FrecencyUserSettingsActionCreators.loadIfNecessary();
            let i = p.default.searchWithoutFetchingLatest({
                channel: n,
                query: t,
                count: r,
                intention: l,
                matchComparator: a
            });
            return {
                emojis: i
            }
        },
        queryStickers(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [n, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, z],
                {
                    stickerMetadata: r
                } = y.default,
                a = G.default.getCurrentUser(),
                i = new Set,
                o = [];
            for (let u of (S.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
                if ("" === u) continue;
                let e = u.toLocaleLowerCase(),
                    s = (0, H.stripDiacritics)(e),
                    c = RegExp("^".concat(q.default.escape(s)), "i"),
                    d = RegExp("".concat(q.default.escape(s)), "i");
                r.forEach((r, u) => {
                    let s = 0,
                        f = null,
                        p = y.default.getStickerById(u);
                    if (null == p || !l(p, (0, E.getStickerSendability)(p, a, n))) return;
                    for (let n of r) {
                        let {
                            type: l,
                            value: r
                        } = n, a = function(e) {
                            switch (e) {
                                case L.StickerMetadataTypes.STICKER_NAME:
                                    return 11;
                                case L.StickerMetadataTypes.CORRELATED_EMOJI:
                                    return 6;
                                case L.StickerMetadataTypes.TAG:
                                    return 1;
                                case L.StickerMetadataTypes.GUILD_NAME:
                                case L.StickerMetadataTypes.PACK_NAME:
                                    return 8;
                                default:
                                    return 1
                            }
                        }(l), i = 0;
                        t ? r === e ? i = 10 * a : c.test(r) ? i = 7 * a : (l === L.StickerMetadataTypes.GUILD_NAME || l === L.StickerMetadataTypes.PACK_NAME || l === L.StickerMetadataTypes.STICKER_NAME) && d.test(r) && (i = 5 * a) : r === e && (i = 10 * a, f = r), i > s && (s = i, f = r)
                    }
                    let h = C.default.stickerFrecencyWithoutFetchingLatest.getScore(u);
                    null != h && (s *= h / 100), s > 0 && null != f && !i.has(p.id) && (i.add(p.id), o.push({
                        sticker: p,
                        comparator: f,
                        score: s
                    }))
                })
            }
            return 0 === (o = u(o).sortBy(e => -1 * e.score).value()).length && (o = $), o
        },
        matchSentinel(e, t, n) {
            let l = X.test(t);
            return !l && e === n
        },
        hasSameRoleAsUsername(e, t) {
            var n;
            if (!t.isPomelo()) return !1;
            let l = R.default.getGuild(e.getGuildId()),
                r = null !== (n = null == l ? void 0 : l.roles) && void 0 !== n ? n : {};
            for (let {
                    name: e
                }
                of Object.values(r))
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1
        }
    }
}