function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return z
        },
        useContextIndexState: function() {
            return K
        },
        useGuildIndexState: function() {
            return X
        },
        useUserIndexState: function() {
            return Q
        },
        useDiscoveryState: function() {
            return Z
        },
        useQueryState: function() {
            return $
        }
    }), n("222007"), n("424973"), n("881410");
    var i, l, a = n("884691"),
        o = n("627445"),
        r = n.n(o),
        s = n("811022"),
        u = n("446674"),
        d = n("913144"),
        c = n("851387");
    n("798609");
    var p = n("605393"),
        f = n("892692"),
        m = n("915639"),
        _ = n("872173"),
        I = n("42203"),
        C = n("305961"),
        T = n("162771"),
        A = n("697218"),
        E = n("599110"),
        N = n("589777"),
        g = n("369010"),
        h = n("342564"),
        S = n("9566"),
        O = n("972620"),
        M = n("524768"),
        v = n("389153"),
        y = n("123373"),
        D = n("217946"),
        R = n("317041"),
        L = n("49111");
    let P = new s.default("ApplicationCommandIndexStore"),
        U = Symbol("currentUser"),
        F = Symbol("stale"),
        b = Symbol("current"),
        H = Object.freeze({
            descriptors: [],
            commands: [],
            sectionedCommands: [],
            loading: !0
        }),
        x = Object.freeze({
            serverVersion: b,
            fetchState: {
                fetching: !1
            },
            result: {
                sections: {},
                sectionIdsByBotId: {},
                version: b
            }
        }),
        B = Object.freeze({
            serverVersion: F,
            fetchState: {
                fetching: !1
            }
        }),
        w = {
            sensitivity: "accent",
            numeric: !0
        };

    function G(e) {
        switch (e.type) {
            case "guild":
                return e.guildId;
            case "channel":
                return e.channelId;
            case "user":
                return U
        }
    }

    function k(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = G(e),
            l = q.indices[i];
        return null != l ? ("fetchState" in t && l.fetchState.fetching && l.fetchState.abort.abort(), q.indices[i] = {
            ...l,
            ...t
        }) : n && (q.indices[i] = {
            serverVersion: F,
            fetchState: {
                fetching: !1
            },
            ...t
        }), l
    }

    function Y(e) {
        let t = G(e),
            n = q.indices[t];
        (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete q.indices[t]
    }

    function W() {
        for (let e of Object.values(q.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
        q.indices = {}
    }

    function V() {
        k({
            type: "user"
        }, {
            serverVersion: F
        })
    }
    class j extends u.default.Store {
        initialize() {
            this.waitFor(m.default), this.syncWith([m.default], () => {
                ! function() {
                    let e = m.default.locale;
                    e !== q.oldLocale && (W(), q.collator = new Intl.Collator(e, {
                        sensitivity: "accent",
                        numeric: !0
                    }), q.oldLocale = e)
                }()
            })
        }
        getContextState(e) {
            var t, n;
            return null != e && en(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : B : x
        }
        getUserState() {
            var e;
            let t = T.default.getGuildId();
            return (0, v.isInUserAppExperiment)(t, {
                location: "getUserState"
            }, {
                autoTrackExposure: !1
            }) ? null !== (e = this.indices[U]) && void 0 !== e ? e : B : x
        }
        query(e, t, n) {
            let i = A.default.getCurrentUser();
            if (null == i) return H;
            let l = this.getContextState(e),
                a = this.getUserState(),
                o = (0, y.buildPermissionContext)(e, t.commandType),
                r = !1 !== t.applicationCommands && o.hasBaseAccessPermissions,
                s = !1;
            if (n.allowFetch) {
                let t = r && en(e);
                t && (E.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == l.result,
                    size: Object.keys(q.indices).length
                }), ei(l) && (null != e.guild_id ? (0, S.requestApplicationCommandIndex)({
                    type: "guild",
                    guildId: e.guild_id
                }) : (0, S.requestApplicationCommandIndex)({
                    type: "channel",
                    channelId: e.id
                }), s = !0)), (0, v.isInUserAppExperiment)(e.guild_id, {
                    location: "query"
                }) && ei(a) && ((0, S.requestApplicationCommandIndex)({
                    type: "user"
                }), s = !0)
            }
            let u = ee({
                permissionContext: o,
                text: t.text,
                allowApplicationCommands: r,
                builtIns: t.builtIns,
                scoreMethod: n.scoreMethod,
                allowEmptySections: n.allowEmptySections,
                contextState: l,
                userState: a
            });
            return u.loading = u.loading || s, u
        }
        constructor(...e) {
            super(...e), this.indices = {}, this.oldLocale = m.default.locale, this.collator = new Intl.Collator(m.default.locale, w)
        }
    }
    j.displayName = "ApplicationCommandIndexStore";
    let q = new j(d.default, {
        LOGOUT: W,
        CONNECTION_OPEN: function() {
            for (let e of Object.values(q.indices)) e.serverVersion = F
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
            var t;
            let {
                target: n,
                start: i
            } = e;
            if (ei(null !== (t = q.indices[G(n)]) && void 0 !== t ? t : B)) {
                let e = new AbortController;
                k(n, {
                    fetchState: {
                        fetching: !0,
                        abort: e
                    }
                }, !0), (0, S.fetchApplicationCommandIndex)(n, i, e)
            }
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
            var t, n;
            let {
                target: i,
                index: l
            } = e, a = null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == a) return !1;
            let o = {},
                r = {},
                s = new Set;
            for (let e of l.applications) {
                if (null == e.bot && null != e.bot_id) {
                    r[e.bot_id] = e.id;
                    let t = A.default.getUser(e.bot_id);
                    null != t ? e.bot = t : s.add(e.bot_id)
                } else null != e.bot && (r[e.bot.id] = e.id);
                let t = {
                    descriptor: {
                        ...(0, v.getApplicationCommandSection)(function(e) {
                            return {
                                description: e.description,
                                icon: e.icon,
                                id: e.id,
                                name: e.name,
                                bot: e.bot
                            }
                        }(e)),
                        permissions: null != e.permissions ? (0, f.keyPermissions)(eo(e.permissions, a)) : void 0,
                        botId: e.bot_id
                    },
                    commands: {}
                };
                o[e.id] = t
            }
            for (let e of ("guild" === i.type && s.size > 0 && c.default.requestMembersById(i.guildId, [...s]), (0, v.buildApplicationCommands)(l.application_commands.map(e => (function(e, t) {
                    var n, i, l, a, o;
                    let r = {
                        ...e,
                        description: null !== (l = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== l ? l : "",
                        dm_permission: void 0,
                        name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                        options: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.map(el)) && void 0 !== o ? o : [],
                        permissions: null != e.permissions ? eo(e.permissions, t) : void 0
                    };
                    return e.description !== e.description_default && (r.description_localized = e.description), e.name !== e.name_default && (r.name_localized = e.name), r
                })(e, a)), !0))) {
                let t = o[e.applicationId];
                if (null == t) {
                    P.error("Command has no matching application");
                    continue
                }
                t.commands[e.id] = e
            }
            let u = null !== (n = l.version) && void 0 !== n ? n : b;
            k(i, {
                serverVersion: u,
                result: {
                    sections: o,
                    sectionIdsByBotId: r,
                    version: u
                },
                fetchState: {
                    fetching: !1
                }
            })
        },
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
            let {
                target: t
            } = e;
            k(t, {
                fetchState: {
                    fetching: !1,
                    retryAfter: Date.now() + 5e3
                }
            })
        },
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
            let t, {
                channelId: n,
                guildId: i
            } = e;
            k(t = null != i ? {
                type: "guild",
                guildId: i
            } : {
                type: "channel",
                channelId: n
            }, {
                serverVersion: F
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            Y({
                type: "channel",
                channelId: t.id
            })
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            Y({
                type: "guild",
                guildId: t.id
            })
        },
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
            var t;
            let {
                guildId: n,
                version: i
            } = e, l = k({
                type: "guild",
                guildId: n
            }, {
                serverVersion: null != i ? i : F
            }), a = null == l ? void 0 : null === (t = l.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
            if (null != a)
                for (let e in a) {
                    let t = I.default.getDMFromUserId(e);
                    null != t && k({
                        type: "channel",
                        channelId: t
                    }, {
                        serverVersion: F
                    })
                }
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            var t;
            let {
                guildId: n,
                members: i
            } = e, l = G({
                type: "guild",
                guildId: n
            }), a = null === (t = q.indices[l]) || void 0 === t ? void 0 : t.result;
            if (null == a) return !1;
            let o = !1;
            return i.forEach(e => {
                let t = a.sectionIdsByBotId[e.user.id];
                if (null != t) {
                    let n = a.sections[t];
                    r(null != n, "Bot has no matching index section"), r(null != n.descriptor.application, "Bot's index section has no application info");
                    let i = n.descriptor.application;
                    i.bot = e.user, n.descriptor = {
                        ...n.descriptor,
                        ...(0, v.getApplicationCommandSection)(i)
                    }, o = !0
                }
            }), o
        },
        USER_APPLICATION_UPDATE: V,
        USER_APPLICATION_REMOVE: V
    });
    var z = q;

    function K(e, t, n) {
        let [i, l] = a.useState(!0), o = (0, u.useStateFromStoresObject)([q], () => q.getContextState(e));
        return a.useEffect(() => {
            if (i && null != e) {
                if (n) {
                    let n = t && en(e);
                    n && (E.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == o.result,
                        size: Object.keys(q.indices).length
                    }), ei(o) && (null != e.guild_id ? (0, S.requestApplicationCommandIndex)({
                        type: "guild",
                        guildId: e.guild_id
                    }) : (0, S.requestApplicationCommandIndex)({
                        type: "channel",
                        channelId: e.id
                    })))
                }
                l(!1)
            }
        }, [o, n, e, t, i]), o
    }

    function X(e, t) {
        let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([q], () => {
            var t;
            return null !== (t = q.indices[e]) && void 0 !== t ? t : B
        });
        return a.useEffect(() => {
            n && null != e && (t && (E.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == l.result,
                size: Object.keys(q.indices).length
            }), ei(l) && (0, S.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e
            })), i(!1))
        }, [l, t, e, n]), l
    }

    function Q(e, t) {
        let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([q], () => q.getUserState()), o = (0, u.useStateFromStores)([T.default], T.default.getGuildId), r = (0, v.useIsInUserAppExperiment)(o, {
            location: "useUserIndexState"
        });
        return a.useEffect(() => {
            n && (t && ei(l) && e && r && (0, S.requestApplicationCommandIndex)({
                type: "user"
            }), i(!1))
        }, [l, t, e, r, n]), l
    }

    function Z(e, t, n, i) {
        let {
            descriptors: l,
            commands: o,
            sectionedCommands: r,
            loading: s
        } = $(e, n, i), u = (0, g.useTopCommands)({
            channel: e,
            guild: t
        });
        return a.useMemo(() => {
            if (!i.includeFrecency || 0 === u.length) return {
                descriptors: l,
                commands: o,
                sectionedCommands: r,
                loading: s
            };
            let n = {
                    channel: e,
                    guild: t
                },
                a = o.filter(e => u.includes(e.id)).sort((e, t) => {
                    let i = h.default.getScoreWithoutLoadingLatest(n, e),
                        l = h.default.getScoreWithoutLoadingLatest(n, t);
                    return l - i
                }).splice(0, R.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
            return 0 === a.length ? {
                descriptors: l,
                commands: o,
                sectionedCommands: r,
                loading: s
            } : {
                descriptors: [N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY], ...l],
                commands: a.concat(o),
                sectionedCommands: [{
                    section: N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY],
                    data: a
                }, ...r],
                loading: s
            }
        }, [s, i.includeFrecency, u, e, t, o, l, r])
    }
    let J = Object.freeze({
        applications: {
            useFrecency: !1,
            useScore: !1
        },
        commands: {
            useFrecency: !0,
            useScore: !0
        }
    });

    function $(e, t, n) {
        let i = (0, y.usePermissionContext)(e, t.commandType),
            l = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
            o = K(e, l, n.allowFetch),
            r = Q(l, n.allowFetch);
        return a.useMemo(() => ee({
            permissionContext: i,
            text: t.text,
            allowApplicationCommands: l,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: o,
            userState: r,
            sortOptions: n.sortOptions
        }), [i, t.text, t.builtIns, l, n.scoreMethod, n.allowEmptySections, n.sortOptions, o, r])
    }

    function ee(e) {
        let {
            permissionContext: t,
            contextState: n,
            userState: i,
            text: l,
            builtIns: a = O.BuiltInCommandFilter.ALLOW,
            allowApplicationCommands: o = !0,
            allowEmptySections: s = !1,
            scoreMethod: u = O.ScoreMethod.NONE,
            sortOptions: d = J
        } = e, {
            commandType: c
        } = t, f = null == l ? void 0 : l.toLowerCase(), m = null == f ? void 0 : f.split(" "), I = a === O.BuiltInCommandFilter.ONLY_TEXT, T = a !== O.BuiltInCommandFilter.DENY ? (0, N.getBuiltInCommands)(c, !0, I) : [], A = [], E = {
            permissionContext: t,
            query: f,
            splitQuery: m,
            allowEmptySections: s,
            scoreMethod: u
        };
        if (o) {
            var g, S, M, v;
            let e = null !== (M = null === (g = n.result) || void 0 === g ? void 0 : g.sections) && void 0 !== M ? M : {},
                t = null !== (v = null === (S = i.result) || void 0 === S ? void 0 : S.sections) && void 0 !== v ? v : {},
                l = [...Object.keys(e), ...Object.keys(t).filter(t => !(t in e))];
            for (let n of l) {
                let i, l;
                let a = e[n],
                    o = t[n];
                if (null != a && null != o) {
                    for (let e in i = o.descriptor, l = [], o.commands) {
                        let t = o.commands[e];
                        l.push(t)
                    }
                    for (let e in a.commands)
                        if (!(e in o.commands)) {
                            let t = a.commands[e];
                            l.push(t)
                        }
                } else null != a ? (i = a.descriptor, l = Object.values(a.commands)) : null != o && (i = o.descriptor, l = Object.values(o.commands));
                r(null != i, "Failed to select application descriptor"), r(null != l, "Failed to select list of application commands");
                let s = et(i, l, E);
                null != s && A.push(s)
            }
            d.applications.useFrecency && _.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
                if (d.applications.useScore && u === O.ScoreMethod.APPLICATION_ONLY) {
                    var n, i, l, a;
                    let o = null !== (l = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== l ? l : Number.MAX_VALUE,
                        r = null !== (a = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : Number.MAX_VALUE;
                    if (o !== r) return o - r
                }
                if (d.applications.useFrecency) {
                    let n = p.default.getScoreWithoutLoadingLatest(e.section.id),
                        i = p.default.getScoreWithoutLoadingLatest(t.section.id);
                    if (n !== i) return i - n
                }
                return er(e.section.name, t.section.name)
            })
        }
        if (T.length > 0 || !0 === s) {
            let e = et(N.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN], T, E);
            null != e && A.push(e)
        }
        let y = A.flatMap(e => e.data.map(t => ({
            ...t,
            section: e.section
        })));
        if (u === O.ScoreMethod.COMMAND_ONLY || u === O.ScoreMethod.COMMAND_OR_APPLICATION) {
            let e = t.context,
                n = C.default.getGuild(t.context.guild_id);
            d.commands.useFrecency && _.FrecencyUserSettingsActionCreators.loadIfNecessary(), y.sort((t, i) => {
                if (d.commands.useScore) {
                    var l, a;
                    let e = null !== (l = t.score) && void 0 !== l ? l : 0,
                        n = null !== (a = i.score) && void 0 !== a ? a : 0;
                    if (e !== n) return e - n
                }
                if (d.commands.useFrecency) {
                    let l = h.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, t),
                        a = h.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, i);
                    if (l !== a) return a - l
                }
                return er(t.displayName, i.displayName)
            })
        }
        return {
            commands: y,
            descriptors: A.map(e => e.section),
            sectionedCommands: A,
            loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
        }
    }

    function et(e, t, n) {
        let i, {
                query: l,
                splitQuery: a,
                allowEmptySections: o,
                scoreMethod: r,
                permissionContext: s
            } = n,
            {
                context: u,
                userId: d,
                roleIds: c,
                isImpersonating: p
            } = s,
            f = null != u.guild_id ? D.computeAllowedForUser(e.permissions, u.guild_id, d, c, p) : null,
            m = null != u.guild_id ? D.computeAllowedForChannel(e.permissions, u, u.guild_id) : null,
            _ = [];
        for (let n of t) {
            let t = D.hasAccess(n, s, f, m, e.botId);
            t === D.HasAccessResult.ALLOWED && _.push(n)
        }
        return 0 !== (i = r !== O.ScoreMethod.NONE && null != l && null != a ? function(e, t, n, i, l) {
            let a;
            let o = [];
            if (l === O.ScoreMethod.APPLICATION_ONLY || l === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                let t = i.name.toLocaleLowerCase();
                t.startsWith(e) ? a = 5 : t.includes(e) && (a = 6)
            }
            let r = t[0],
                s = t.slice(1).join(" ");
            for (let t of n) {
                let n;
                if (l === O.ScoreMethod.COMMAND_ONLY || l === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                    var u;
                    n = null !== (u = function(e, t, n, i) {
                        var l;
                        let a = e.name,
                            o = e.displayName;
                        if (a.startsWith(t) || o.startsWith(t)) return 0;
                        if (a.startsWith(n)) {
                            let e = a.split(" ").slice(1).join(" ");
                            if (e.startsWith(i)) return 1
                        }
                        if (o.startsWith(n)) {
                            let e = o.split(" ").slice(1).join(" ");
                            if (e.startsWith(i)) return 1
                        }
                        if (a.includes(t) || (null == o ? void 0 : o.includes(t))) return 2;
                        let r = !1;
                        for (let {
                                name: n,
                                serverLocalizedName: i
                            }
                            of null !== (l = e.options) && void 0 !== l ? l : []) {
                            if (n.startsWith(t) || "".concat(a, " ").concat(n).startsWith(t) || null != o && "".concat(o, " ").concat(n).startsWith(t) || null != i && (i.startsWith(t) || "".concat(a, " ").concat(i).startsWith(t) || null != o && "".concat(o, " ").concat(i).startsWith(t))) return 3;
                            (n.includes(t) || (null == i ? void 0 : i.includes(t))) && (r = !0)
                        }
                        if (r) return 4
                    }(t, e, r, s)) && void 0 !== u ? u : a
                } else n = a;
                void 0 !== n && o.push({
                    ...t,
                    score: n
                })
            }
            return o
        }(l, a, _, e, r) : _).length || o ? ((r === O.ScoreMethod.NONE || r === O.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => er(e.displayName, t.displayName)), {
            section: e,
            data: i
        }) : null
    }

    function en(e) {
        var t;
        return null != e.guild_id || e.type === L.ChannelTypes.DM && (null === (t = A.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
    }

    function ei(e) {
        return !! function(e) {
            var t;
            return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
        }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    }

    function el(e) {
        var t, n, i, l;
        let a = {
            ...e,
            choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(ea),
            description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
            name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
            options: null === (n = e.options) || void 0 === n ? void 0 : n.map(el)
        };
        return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
    }

    function ea(e) {
        var t;
        let n = {
            ...e,
            name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
        };
        return e.name !== e.name_default && (n.name_localized = e.name), n
    }

    function eo(e, t) {
        let n = [];
        if (null != e.user && n.push({
                type: M.ApplicationCommandPermissionType.USER,
                id: t,
                permission: e.user
            }), null != e.channels)
            for (let [t, i] of Object.entries(e.channels)) n.push({
                type: M.ApplicationCommandPermissionType.CHANNEL,
                id: t,
                permission: i
            });
        if (null != e.roles)
            for (let [t, i] of Object.entries(e.roles)) n.push({
                type: M.ApplicationCommandPermissionType.ROLE,
                id: t,
                permission: i
            });
        return n
    }(l = i || (i = {}))[l.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", l[l.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", l[l.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", l[l.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", l[l.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", l[l.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", l[l.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

    function er(e, t) {
        return q.collator.compare(e, t)
    }
}