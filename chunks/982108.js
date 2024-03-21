function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
            return p
        },
        isViewChannelSidebar: function() {
            return N
        },
        default: function() {
            return L
        }
    });
    var i = n("394846"),
        s = n("446674"),
        r = n("913144"),
        a = n("582713"),
        o = n("659500"),
        l = n("299039"),
        u = n("42203"),
        d = n("957255"),
        c = n("744983"),
        _ = n("18494"),
        f = n("162771"),
        E = n("697218"),
        h = n("49111"),
        g = n("724210"),
        m = n("843455");
    let p = "message_requests",
        S = !1,
        T = !1,
        v = !0,
        I = !1,
        A = {},
        C = {};

    function y(e) {
        if (null == e) return null;
        if ((0, g.isStaticChannelRoute)(e)) {
            let t = f.default.getGuildId();
            return null == t ? null : (0, g.buildGuildStaticChannelId)(e, t)
        }
        return e
    }

    function N(e) {
        return [a.SidebarType.VIEW_CHANNEL, a.SidebarType.VIEW_THREAD, a.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
    }

    function R(e) {
        let t = !1;
        I && (I = !1, t = !0);
        let n = y(_.default.getChannelId());
        return null != n && n in A && (delete A[n], t = !0), t && e ? e : !e
    }

    function O() {
        let e = !1;
        for (let t in A) {
            let n = A[t];
            if (n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL) {
                let i = u.default.getChannel(n.channelId);
                (null == i || !d.default.can(m.Permissions.VIEW_CHANNEL, i)) && (delete A[t], e = !0)
            }
        }
        return e
    }

    function D() {
        if (I === c.default.isActive()) return !1;
        I = c.default.isActive()
    }
    class P extends s.default.PersistedStore {
        initialize(e) {
            if (null != e) {
                var t, n, i, s, r;
                S = null !== (t = e.isMembersOpen) && void 0 !== t && t, T = null !== (n = e.isSummariesOpen) && void 0 !== n && n, v = null === (i = e.isProfileOpen) || void 0 === i || i, A = null !== (s = e.sidebars) && void 0 !== s ? s : {}, C = null !== (r = e.guildSidebars) && void 0 !== r ? r : {}
            }
            this.syncWith([c.default], D), this.syncWith([d.default], O)
        }
        getState() {
            return {
                isMembersOpen: S,
                isSummariesOpen: T,
                isProfileOpen: v,
                sidebars: A,
                guildSidebars: C
            }
        }
        getSection(e, t) {
            if (I) return h.ChannelSections.SEARCH;
            let n = y(e);
            return null != n && null != A[n] ? h.ChannelSections.SIDEBAR_CHAT : t && v ? h.ChannelSections.PROFILE : T ? h.ChannelSections.SUMMARIES : S ? h.ChannelSections.MEMBERS : h.ChannelSections.NONE
        }
        getSidebarState(e) {
            let t = y(e);
            return null == t ? void 0 : A[t]
        }
        getGuildSidebarState(e) {
            return null == e ? void 0 : C[e]
        }
        getCurrentSidebarChannelId(e) {
            let t = y(e);
            if (null == t || I) return null;
            let n = A[t];
            return null == n ? null : n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL ? n.channelId : null
        }
        getCurrentSidebarMessageId(e) {
            var t;
            let n = y(e);
            if (null == n || I) return null;
            let i = A[n];
            return null == i ? null : i.type === a.SidebarType.VIEW_THREAD || i.type === a.SidebarType.VIEW_CHANNEL ? null === (t = i.details) || void 0 === t ? void 0 : t.initialMessageId : null
        }
    }
    P.displayName = "ChannelSectionStore", P.persistKey = "ChannelSectionStore2";
    var L = new P(r.default, {
        CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
            T && (T = R(T)), S = R(S)
        },
        PROFILE_PANEL_TOGGLE_SECTION: function() {
            !v && o.ComponentDispatch.dispatch(h.ComponentActions.SEARCH_RESULTS_CLOSE), v = R(v)
        },
        CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
            S && (S = R(S)), T = R(T)
        },
        SIDEBAR_VIEW_CHANNEL: function(e) {
            let {
                sidebarType: t,
                baseChannelId: n,
                channelId: i,
                details: s
            } = e;
            I = !1;
            let r = y(n);
            return null != r && (A[r] = {
                type: t,
                channelId: i,
                details: s
            }, !0)
        },
        SIDEBAR_VIEW_GUILD: function(e) {
            let {
                sidebarType: t,
                guildId: n,
                baseChannelId: i,
                details: s
            } = e;
            I = !1;
            let r = y(i);
            return null != r && (C[n] = {
                type: t,
                baseChannelId: r,
                guildId: n,
                details: s
            }, !0)
        },
        SIDEBAR_CREATE_THREAD: function(e) {
            let {
                parentChannelId: t,
                parentMessageId: n,
                location: i
            } = e;
            I = !1;
            let s = y(t);
            null != s && (A[s] = {
                type: a.SidebarType.CREATE_THREAD,
                parentChannelId: t,
                parentMessageId: n,
                location: i
            })
        },
        SIDEBAR_CLOSE: function(e) {
            let {
                baseChannelId: t
            } = e, n = y(t);
            null != n && delete A[n]
        },
        SIDEBAR_CLOSE_GUILD: function(e) {
            let {
                guildId: t
            } = e;
            return null != C[t] && (delete C[t], !0)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (t.id in A) return delete A[t.id], !0;
            let n = !1;
            for (let e in A) {
                let i = A[e];
                null != i && i.type === a.SidebarType.VIEW_CHANNEL && i.channelId === t.id && (delete A[e], n = !0)
            }
            return n
        },
        CHANNEL_SELECT: function() {
            i.isMobile && S && (S = !1, T = !1)
        },
        THREAD_CREATE: function(e) {
            var t;
            let {
                channel: n
            } = e;
            if (n.ownerId === (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            let i = A[n.parent_id];
            null != i && i.type === a.SidebarType.CREATE_THREAD && i.parentMessageId === l.default.castChannelIdAsMessageId(n.id) && (A[n.parent_id] = {
                type: a.SidebarType.VIEW_THREAD,
                channelId: n.id
            })
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e, n = A[t.parent_id];
            if (null == n || n.type !== a.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
            delete A[t.parent_id]
        }
    })
}