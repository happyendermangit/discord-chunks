function(e, t, n) {
    "use strict";
    let s;
    n.r(t), n.d(t, {
        NO_ACTIVITIES: function() {
            return p
        },
        default: function() {
            return B
        }
    }), n("222007"), n("424973"), n("581081");
    var i = n("446674"),
        r = n("913144"),
        a = n("798609"),
        o = n("271938"),
        d = n("42203"),
        u = n("957255"),
        l = n("18494"),
        f = n("697218"),
        _ = n("773336"),
        c = n("711562"),
        g = n("334368"),
        m = n("420444"),
        h = n("272505"),
        v = n("49111");
    let E = {
            seenActivities: new Set,
            everLaunchedActivities: new Set,
            seenNewActivities: {},
            seenUpdatedActivities: {},
            shouldShowNewActivityIndicator: !1,
            usersHavePlayedByApp: new Map
        },
        p = [],
        y = new Map,
        T = new Map,
        C = new Map,
        I = new Map,
        S = !1,
        A = new Map,
        D = new Map,
        N = new Map,
        O = new Map,
        P = new Map,
        b = new Map,
        V = new Map;
    let R = h.ActivityPanelModes.DISCONNECTED,
        k = h.FocusedActivityLayouts.RESIZABLE;

    function M(e) {
        return null != e ? e : "0"
    }

    function w(e) {
        var t, n;
        let {
            guildId: s,
            channelId: i,
            applicationId: a,
            instanceId: l,
            userIds: f,
            activitySessionId: _
        } = e, g = (0, c.default)(a);
        if (null == g) return;
        let m = d.default.getBasicChannel(i),
            h = null != m && u.default.canBasicChannel(v.BasicPermissions.CONNECT, m) || (null == m ? void 0 : m.type) === v.ChannelTypes.DM || (null == m ? void 0 : m.type) === v.ChannelTypes.GROUP_DM;
        if (function(e, t) {
                var n;
                E.usersHavePlayedByApp.set(e, new Set([...null !== (n = E.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : [], ...t]))
            }(a, f), !h) return;
        let p = {
                activitySessionId: null != _ ? _ : l,
                applicationId: a,
                channelId: i,
                guildId: s,
                instanceId: l,
                url: g,
                userIds: new Set(f)
            },
            S = o.default.getId(),
            A = y.get(p.applicationId);
        f.some(e => e === S) && null != A && (y.set(A.applicationId, {
            ...A,
            ...p
        }), r.default.dispatch({
            type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
            channelId: i,
            instanceId: l
        })), null != A && i === A.channelId && !f.some(e => e === S) && Array.from(A.userIds).some(e => e === S) && (I.get(i) === a ? I.delete(i) : y.delete(a));
        let D = null !== (t = C.get(i)) && void 0 !== t ? t : [],
            N = D.filter(e => e.applicationId !== a),
            O = M(s),
            P = null !== (n = T.get(O)) && void 0 !== n ? n : [],
            b = P.filter(e => !(e.applicationId === a && e.channelId === i));
        0 !== f.length && (N.push(p), b.push(p)), C.set(i, N), T.set(O, b)
    }

    function L(e) {
        let t = e.embedded_activities;
        t.forEach(t => {
            let {
                channel_id: n,
                embedded_activity: s,
                connections: i
            } = t;
            w({
                guildId: e.id,
                channelId: n,
                applicationId: s.application_id,
                instanceId: s.activity_id,
                userIds: i.map(e => e.user_id)
            })
        })
    }

    function U() {
        S = !1
    }

    function G(e, t) {
        return "".concat(e, ":").concat(t)
    }
    class F extends i.default.PersistedStore {
        initialize(e) {
            var t, n;
            let s = new Map;
            Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach(e => {
                if (Array.isArray(e)) {
                    let [t, n] = e;
                    "string" == typeof t && Array.isArray(n) && s.set(t, new Set(n))
                }
            }));
            let i = new Set(null !== (t = null == e ? void 0 : e.seenActivities) && void 0 !== t ? t : []),
                r = new Set(null !== (n = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== n ? n : []);
            null != e && (E = {
                ...e,
                seenActivities: i,
                everLaunchedActivities: r,
                usersHavePlayedByApp: s
            })
        }
        getState() {
            return E
        }
        getSelfEmbeddedActivityForChannel(e) {
            var t;
            return null !== (t = Array.from(y.values()).find(t => {
                let {
                    channelId: n
                } = t;
                return e === n
            })) && void 0 !== t ? t : null
        }
        getSelfEmbeddedActivities() {
            return y
        }
        getEmbeddedActivitiesForGuild(e) {
            var t;
            return null !== (t = T.get(e)) && void 0 !== t ? t : p
        }
        getEmbeddedActivitiesForChannel(e) {
            var t;
            return null !== (t = C.get(e)) && void 0 !== t ? t : p
        }
        getEmbeddedActivitiesByChannel() {
            return C
        }
        getEmbeddedActivityDurationMs(e, t) {
            let n = V.get(G(e, t));
            return null == n ? null : Date.now() - n
        }
        isLaunchingActivity() {
            return S
        }
        getShelfActivities(e) {
            var t;
            let n = M(e);
            return null !== (t = A.get(n)) && void 0 !== t ? t : []
        }
        getShelfFetchStatus(e) {
            let t = M(e);
            return D.get(t)
        }
        shouldFetchShelf(e) {
            var t, n;
            let s = M(e),
                i = null !== (t = D.get(s)) && void 0 !== t ? t : {
                    isFetching: !1
                },
                r = Date.now(),
                a = r - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
            return !(null == i ? void 0 : i.isFetching) && a
        }
        getOrientationLockStateForApp(e) {
            var t;
            return null !== (t = N.get(e)) && void 0 !== t ? t : null
        }
        getPipOrientationLockStateForApp(e) {
            var t;
            return null !== (t = O.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
        }
        getGridOrientationLockStateForApp(e) {
            var t, n;
            return null !== (n = null !== (t = P.get(e)) && void 0 !== t ? t : O.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
        }
        getLayoutModeForApp(e) {
            return b.get(e)
        }
        getUsersHavePlayedByApp(e) {
            var t;
            return [...null !== (t = E.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : []]
        }
        getConnectedActivityChannelId() {
            return s
        }
        getActivityPanelMode() {
            return R
        }
        getFocusedLayout() {
            return k
        }
        getCurrentEmbeddedActivity() {
            var e;
            let t = this.getConnectedActivityChannelId();
            if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
        }
        getEmbeddedActivityForUserId(e, t) {
            let n;
            if (void 0 !== t) {
                e: for (let [s, i] of C)
                    for (let s of i)
                        if (s.applicationId === t && s.userIds.has(e)) {
                            n = s;
                            break e
                        }return n
            }
        }
        hasActivityEverBeenLaunched(e) {
            return E.everLaunchedActivities.has(e)
        }
    }
    F.displayName = "EmbeddedActivitiesStore", F.persistKey = "EmbeddedActivities", F.migrations = [e => ({
        ...e,
        seenFeaturedActivities: [],
        shouldShowNewActivityIndicator: !1
    }), e => (delete e.seenFeaturedActivities, {
        ...e,
        seenActivities: []
    }), e => ({
        ...e
    }), e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, {
        ...e
    }), e => {
        var t;
        let n = new Set(null !== (t = e.seenActivities) && void 0 !== t ? t : []);
        return {
            ...e,
            seenActivities: n,
            seenNewActivities: {},
            seenUpdatedActivities: {}
        }
    }, e => {
        var t;
        let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
        return {
            ...e,
            everLaunchedActivities: n
        }
    }];
    let H = new F(r.default, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
            let {
                applicationId: t,
                layoutMode: n
            } = e;
            b.set(t, n)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                guilds: t
            } = e;
            C.clear(), T.clear(), t.forEach(e => L(e))
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            L(t)
        },
        CALL_CREATE: function(e) {
            let {
                channelId: t,
                embeddedActivities: n
            } = e;
            ! function(e, t) {
                t.forEach(e => {
                    let {
                        channel_id: t,
                        embedded_activity: n,
                        connections: s
                    } = e;
                    w({
                        guildId: null,
                        channelId: t,
                        applicationId: n.application_id,
                        instanceId: n.activity_id,
                        userIds: s.map(e => e.user_id)
                    })
                })
            }(0, n)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            C.set(t.id, []);
            let n = t.guild_id;
            if (null != n) {
                var s;
                let e = M(n),
                    i = null !== (s = T.get(e)) && void 0 !== s ? s : [],
                    r = i.filter(e => e.channelId !== t.id);
                T.set(e, r)
            }
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function() {
            S = !0
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
            let {
                applicationId: t
            } = e;
            E.everLaunchedActivities.add(t),
                function() {
                    S = !1
                }()
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function() {
            (function() {
                S = !1
            })()
        },
        EMBEDDED_ACTIVITY_OPEN: function(e) {
            var t, n;
            let {
                channelId: i,
                applicationId: r
            } = e, a = (0, c.default)(r), u = o.default.getSessionId();
            if (null == a || null == u || (null === (t = y.get(r)) || void 0 === t ? void 0 : t.channelId) === i) return !1;
            let _ = d.default.getChannel(i),
                g = null == _ ? void 0 : _.getGuildId(),
                v = f.default.getCurrentUser();
            if (null == g && !(null !== (n = null == _ ? void 0 : _.isPrivate()) && void 0 !== n && n) || null == v) return !1;
            s = i, y.set(r, {
                guildId: g,
                channelId: i,
                applicationId: r,
                url: a,
                userIds: new Set([v.id]),
                connectedSince: Date.now()
            }), R = s !== l.default.getChannelId() || (0, m.default)(i) ? h.ActivityPanelModes.PIP : h.ActivityPanelModes.PANEL, V.set(G(i, r), Date.now())
        },
        EMBEDDED_ACTIVITY_CLOSE: function(e) {
            let {
                applicationId: t
            } = e, n = y.get(t);
            y.delete(t), (null == n ? void 0 : n.channelId) === s && (s = void 0)
        },
        EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
            let {
                guildId: t,
                channelId: n,
                embeddedActivity: s,
                connections: i
            } = e;
            w({
                guildId: t,
                channelId: n,
                applicationId: s.application_id,
                instanceId: s.activity_id,
                userIds: i.map(e => e.user_id)
            })
        },
        EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2: function(e) {
            let {
                activitySessionId: t,
                applicationId: n,
                channelId: s,
                guildId: i,
                instanceId: r,
                userIds: a
            } = e;
            w({
                guildId: i,
                channelId: s,
                applicationId: n,
                instanceId: r,
                userIds: a,
                activitySessionId: t
            })
        },
        LOCAL_ACTIVITY_UPDATE: function(e) {
            var t;
            let {
                activity: n
            } = e;
            if (null == n) return !1;
            let s = y.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
            if (null == s) return !1;
            y.set(s.applicationId, {
                ...s
            })
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
            let {
                applicationId: t,
                config: n
            } = e, s = y.get(t);
            null != s && y.set(s.applicationId, {
                ...s,
                config: n
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
            let {
                guildId: t
            } = e, n = M(t), s = D.get(n);
            D.set(n, {
                isFetching: !0,
                lastFetchTimestampMs: null == s ? void 0 : s.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
            let {
                guildId: t,
                activities: n
            } = e, s = M(t);
            A.set(s, n);
            let i = Date.now();
            ! function(e) {
                let {
                    activities: t,
                    now: n
                } = e;
                t.forEach(e => {
                    let t = e.application_id,
                        s = e.client_platform_config[(0, g.default)((0, _.getOS)())];
                    if (!E.seenActivities.has(t) && (E.shouldShowNewActivityIndicator = !0, E.seenActivities.add(t)), null == s.label_until) return;
                    let i = new Date(s.label_until).getTime();
                    if (i < n) return;
                    let r = E.seenNewActivities[t],
                        o = Object.hasOwn(E.seenNewActivities, t),
                        d = new Date(r).getTime() < i;
                    s.label_type === a.EmbeddedActivityLabelTypes.NEW && (!o || d) && (E.shouldShowNewActivityIndicator = !0, E.seenNewActivities[t] = s.label_until);
                    let u = E.seenUpdatedActivities[t],
                        l = Object.hasOwn(E.seenUpdatedActivities, t),
                        f = new Date(u).getTime() < i;
                    s.label_type === a.EmbeddedActivityLabelTypes.UPDATED && (!l || f) && (E.shouldShowNewActivityIndicator = !0, E.seenUpdatedActivities[t] = s.label_until)
                })
            }({
                activities: n,
                now: i
            }), D.set(s, {
                isFetching: !1,
                lastFetchTimestampMs: i
            })
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
            let {
                guildId: t
            } = e, n = M(t), s = D.get(n);
            D.set(n, {
                isFetching: !1,
                lastFetchTimestampMs: null == s ? void 0 : s.lastFetchTimestampMs
            })
        },
        EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
            E.shouldShowNewActivityIndicator = !1
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
            let {
                applicationId: t,
                lockState: n,
                pictureInPictureLockState: s,
                gridLockState: i
            } = e;
            null == n ? N.delete(t) : N.set(t, n), null === s ? O.delete(t) : void 0 !== s && O.set(t, s), null === i ? P.delete(t) : void 0 !== i && P.set(t, i)
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
            let {
                activityPanelMode: t
            } = e;
            R = t
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
            let {
                focusedActivityLayout: t
            } = e;
            k = t
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            s !== t && R === h.ActivityPanelModes.PANEL && (R = h.ActivityPanelModes.PIP)
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            let {
                channelId: t,
                applicationId: n,
                isRejoiningFromCurrentSession: s
            } = e;
            s && I.set(t, n)
        },
        CONNECTION_INTERRUPTED: function(e) {
            e.code === v.RPCCloseCodes.CLOSE_ABNORMAL && (s = void 0, y.clear(), S = !1, R = h.ActivityPanelModes.DISCONNECTED)
        }
    });
    var B = H
}