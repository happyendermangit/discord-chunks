function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCachedCommand: function() {
            return E
        },
        getCachedApplicationSection: function() {
            return N
        },
        getCachedResults: function() {
            return g
        },
        getChangeKeys: function() {
            return h
        },
        useDiscovery: function() {
            return S
        },
        executeQuery: function() {
            return O
        },
        useQuery: function() {
            return M
        },
        useCommand: function() {
            return v
        },
        useCommandsForApplication: function() {
            return y
        },
        useSearchOpenState: function() {
            return D
        },
        isInIndexExperiment: function() {
            return R
        }
    }), n("222007"), n("424973"), n("808653");
    var i = n("884691"),
        l = n("446674"),
        a = n("938767"),
        o = n("305961"),
        r = n("697218"),
        s = n("449008"),
        u = n("507217"),
        d = n("589777"),
        c = n("14090"),
        p = n("988721"),
        f = n("972620"),
        m = n("216193"),
        _ = n("166004"),
        I = n("524768"),
        C = n("389153"),
        T = n("317041"),
        A = n("49111");

    function E(e, t) {
        var n, i, l, a;
        if (null == t) return {
            application: void 0,
            command: void 0
        };
        if (!R({
                location: "getCachedCommand"
            })) {
            let e = m.default.getCommand(t),
                n = m.default.getApplication(null == e ? void 0 : e.applicationId);
            return {
                command: e,
                application: n
            }
        }
        let o = p.default.getUserState(),
            r = p.default.getContextState(e),
            s = Object.values(null !== (l = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}).concat(Object.values(null !== (a = null === (i = r.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {}));
        for (let e of s) {
            let n = e.commands[t];
            if (null != n) return {
                application: e.descriptor.application,
                command: n
            }
        }
        return {
            application: void 0,
            command: void 0
        }
    }

    function N(e, t, n) {
        var i, l, a, o, r, s;
        if (!R({
                location: "getCachedApplicationSection"
            })) return null === (r = _.default.getApplicationSections(e.id, t)) || void 0 === r ? void 0 : r.find(e => e.id === n);
        let u = p.default.getUserState(),
            d = p.default.getContextState(e),
            c = null !== (s = null === (l = u.result) || void 0 === l ? void 0 : null === (i = l.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== s ? s : null === (o = d.result) || void 0 === o ? void 0 : null === (a = o.sections) || void 0 === a ? void 0 : a[n];
        return null == c ? void 0 : c.descriptor
    }

    function g(e, t, n) {
        if (!R({
                location: "getCachedResults"
            })) {
            var i, l;
            return {
                commands: null !== (i = _.default.getQueryCommands(e.id, t, n)) && void 0 !== i ? i : [],
                sections: null !== (l = _.default.getApplicationSections(e.id, t)) && void 0 !== l ? l : []
            }
        }
        let a = p.default.query(e, {
            commandType: t,
            text: n
        }, {
            scoreMethod: f.ScoreMethod.COMMAND_OR_APPLICATION,
            allowFetch: !1
        });
        return {
            commands: a.commands,
            sections: a.descriptors
        }
    }

    function h(e, t, n) {
        if (!R({
                location: "getChangeKeys"
            }, {
                autoTrackExposure: !1
            })) return [_.default.getQueryCommands(e.id, t, n)];
        let i = p.default.getUserState(),
            l = p.default.getContextState(e);
        return [null == i ? void 0 : i.result, null == l ? void 0 : l.result]
    }

    function S(e, t, n) {
        if (!L({
                location: "useDiscovery"
            })) {
            var a, r;
            return (0, _.useDiscoveryState)(e, t.commandType, null !== (a = n.placeholderCount) && void 0 !== a ? a : 0, null !== (r = n.limit) && void 0 !== r ? r : 10, {
                canOnlyUseTextCommands: t.builtIns === f.BuiltInCommandFilter.ONLY_TEXT,
                canUseFrecency: n.includeFrecency
            })
        }
        let s = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
            {
                descriptors: u,
                commands: c,
                sectionedCommands: m,
                loading: I
            } = (0, p.useDiscoveryState)(e, s, t, {
                ...n,
                allowFetch: !0
            }),
            [C, E] = i.useState(null),
            N = i.useRef(!1);
        N.current = I;
        let g = i.useMemo(() => {
            let e = [];
            if (null != n.placeholderCount)
                for (let i = 0; i < n.placeholderCount; i++) e.push(U(i, t.commandType));
            return e
        }, [t.commandType, n.placeholderCount]);
        return i.useMemo(() => {
            let e = {
                loading: N,
                commands: c,
                activeSections: u,
                commandsByActiveSection: m,
                filteredSectionId: C,
                hasMoreAfter: !1,
                placeholders: I ? g : [],
                sectionDescriptors: u,
                filterSection: e => {
                    E(e)
                },
                scrollDown: A.NOOP
            };
            if (null != C) {
                let t = m.find(e => e.section.id === C);
                e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
            }
            if (I) {
                let t = m[0];
                if (null != t) e.commandsByActiveSection = [{
                    section: t.section,
                    data: [...t.data, ...g]
                }, ...m.slice(1)];
                else {
                    let t = d.BUILT_IN_SECTIONS[T.BuiltInSectionId.BUILT_IN];
                    e.activeSections = [t], e.commandsByActiveSection = [{
                        section: t,
                        data: g
                    }]
                }
                e.commands = [...c, ...g]
            }
            return e
        }, [c, u, C, m, I, g])
    }

    function O(e, t, n) {
        if (!R({
                location: "executeQuery"
            })) {
            var i, l, o, r, s;
            return !0 === n.allowFetch && u.querySearchManager((0, a.getCommandContext)(e), null !== (i = t.text) && void 0 !== i ? i : "", null !== (l = n.limit) && void 0 !== l ? l : 10, t.commandType), {
                commands: null !== (r = _.default.getQueryCommands(e.id, t.commandType, null !== (o = t.text) && void 0 !== o ? o : "")) && void 0 !== r ? r : [],
                sections: null !== (s = _.default.getApplicationSections(e.id, t.commandType)) && void 0 !== s ? s : []
            }
        }
        let {
            descriptors: c,
            commands: f,
            loading: m
        } = p.default.query(e, t, n), I = [];
        if (null != n.placeholderCount && m)
            for (let e = 0; e < n.placeholderCount; e++) I.push(U(e, t.commandType));
        return {
            commands: m ? [...f, ...I] : f,
            sections: m && 0 === c.length ? [d.BUILT_IN_SECTIONS[T.BuiltInSectionId.BUILT_IN]] : c
        }
    }

    function M(e, t, n) {
        if (!L({
                location: "useQuery"
            })) {
            var l, a;
            return (0, _.useQueryState)(e, t.commandType, null !== (l = t.text) && void 0 !== l ? l : "", null !== (a = n.limit) && void 0 !== a ? a : 10)
        }
        let {
            descriptors: o,
            commands: r,
            loading: s
        } = (0, p.useQueryState)(e, t, {
            ...n,
            allowFetch: !0
        }), u = i.useMemo(() => {
            let e = [];
            if (null != n.placeholderCount)
                for (let i = 0; i < n.placeholderCount; i++) e.push(U(i, t.commandType));
            return e
        }, [t.commandType, n.placeholderCount]);
        return i.useMemo(() => ({
            commands: s ? [...r, ...u] : r,
            sections: s && 0 === o.length ? [d.BUILT_IN_SECTIONS[T.BuiltInSectionId.BUILT_IN]] : o,
            scrollDown: A.NOOP
        }), [s, r, o, u])
    }

    function v(e, t) {
        if (!L({
                location: "useCommand"
            })) {
            var n;
            let a = (0, l.useStateFromStores)([r.default], () => {
                    if (null == e ? void 0 : e.isDM()) {
                        let t = e.getRecipientId(),
                            n = r.default.getUser(t);
                        if (null != n && n.bot) return n
                    }
                    return null
                }, [e]),
                {
                    command: o,
                    application: s
                } = (0, l.useStateFromStoresObject)([m.default], () => {
                    let e = null != t ? m.default.getCommand(t) : void 0,
                        n = m.default.getApplication(null == e ? void 0 : e.applicationId);
                    return {
                        command: e,
                        application: n
                    }
                });
            return (i.useEffect(() => {
                null != e && null == o && (null != a ? u.fetchCommandsForApplication({
                    guildId: null,
                    channelId: e.id,
                    applicationId: a.id
                }) : null != e.guild_id && null != t && u.fetchCommand(e.guild_id, e.id, t))
            }, [a, e, o, t]), null == e || null == e.guild_id && (null == a || null == s || a.id !== (null === (n = s.bot) || void 0 === n ? void 0 : n.id))) ? {
                command: void 0,
                application: void 0
            } : {
                command: o,
                application: s
            }
        }
        let a = (0, p.useUserIndexState)(!0, !0),
            o = (0, p.useContextIndexState)(e, !0, !0);
        return i.useMemo(() => {
            if (null != t) {
                var e, n, i, l;
                let r = Object.values(null !== (i = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}).concat(Object.values(null !== (l = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}));
                for (let e of r) {
                    let n = e.commands[t];
                    if (null != n) return {
                        command: n,
                        application: e.descriptor.application
                    }
                }
            }
            return {
                command: void 0,
                application: void 0
            }
        }, [o.result, a.result, t])
    }

    function y(e, t, n) {
        if (!L({
                location: "useCommandsForApplication"
            })) return i.useEffect(() => {
            u.fetchCommands(e.guild_id, e.id, n)
        }, [n, e]), (0, l.useStateFromStoresObject)([m.default], () => {
            let i = m.default.getApplication(t),
                l = m.default.getCommands(n, e.id);
            return {
                commands: l,
                application: i
            }
        });
        let a = (0, p.useUserIndexState)(!0, !0),
            o = (0, p.useContextIndexState)(e, !0, !0);
        return i.useMemo(() => {
            var e, i, l, r, u, d;
            let c = null !== (u = null === (i = a.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (l = o.result) || void 0 === l ? void 0 : l.sections[t],
                p = Object.values(null !== (d = null == c ? void 0 : c.commands) && void 0 !== d ? d : {}).map(e => null == e.rootCommand ? e : (0, C.buildCommand)({
                    rootCommand: e.rootCommand,
                    command: e.rootCommand,
                    applicationId: e.applicationId
                })).reduce((e, t) => (e[t.id] = t, e), {});
            return {
                application: null == c ? void 0 : null === (r = c.descriptor) || void 0 === r ? void 0 : r.application,
                commands: n.map(e => p[e]).filter(s.isNotNullish)
            }
        }, [null == a ? void 0 : a.result, null == o ? void 0 : o.result, t, n])
    }

    function D() {
        !L({
            location: "useSearchOpenState"
        }) && (0, _.useSearchStoreOpenState)()
    }

    function R(e, t) {
        return c.default.getCurrentConfig(e, t).enabled
    }

    function L(e, t) {
        let [n] = i.useState(R(e, t));
        return n
    }
    let P = {
        id: "placeholder-section",
        type: I.ApplicationCommandSectionType.APPLICATION,
        name: ""
    };

    function U(e, t) {
        return {
            type: t,
            inputType: I.ApplicationCommandInputType.PLACEHOLDER,
            id: "placeholder-".concat(e),
            name: "",
            displayName: "",
            description: "",
            displayDescription: "",
            applicationId: "",
            section: P
        }
    }
}