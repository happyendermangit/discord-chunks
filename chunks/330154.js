function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var s = n("671725"),
        r = n.n(s),
        a = n("533865"),
        o = n.n(a),
        l = n("953406"),
        u = n.n(l),
        d = n("446674"),
        c = n("913144"),
        f = n("517763"),
        _ = n("91366");
    let E = {},
        h = {},
        g = {},
        m = {},
        p = !1,
        S = !1,
        v = !1;
    class T extends d.default.Store {
        getInvite(e) {
            var t, n;
            let {
                targetType: i,
                targetUserId: s,
                targetApplicationId: r
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return i === _.InviteTargetTypes.STREAM && null != s ? null === (t = h[e]) || void 0 === t ? void 0 : t[s] : i === _.InviteTargetTypes.EMBEDDED_APPLICATION && null != r ? null === (n = g[e]) || void 0 === n ? void 0 : n[r] : E[e]
        }
        getFriendInvite() {
            return i
        }
        getFriendInvitesFetching() {
            return p
        }
        canRevokeFriendInvite() {
            return null != i && !S && !v
        }
    }
    T.displayName = "InstantInviteStore";
    var I = new T(c.default, {
        CONNECTION_OPEN: function() {
            E = {}, h = {}, g = {}, m = {}, i = null, S = !1, v = !1, p = !1
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            delete E[t.id], delete h[t.id], delete g[t.id]
        },
        FRIEND_INVITE_CREATE_SUCCESS: function(e) {
            var t;
            m[e.invite.code] = f.default.createFromServer(e.invite), i = null !== (t = r(o(u(Object.values(m), "createdAt")))) && void 0 !== t ? t : null, v = !1
        },
        FRIEND_INVITE_CREATE_FAILURE: function() {
            v = !1
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
            var t;
            null != e.invites && e.invites.forEach(e => {
                null != m[e.code] && delete m[e.code]
            }), i = null !== (t = r(o(u(Object.values(m), "createdAt")))) && void 0 !== t ? t : null, S = !1
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            let {
                channelId: t,
                invite: n
            } = e, i = f.default.createFromServer(n);
            i.targetType === _.InviteTargetTypes.STREAM && null != i.targetUser ? (null == h[t] && (h[t] = {}), h[t][String(i.targetUser.id)] = i) : i.targetType === _.InviteTargetTypes.EMBEDDED_APPLICATION && null != i.targetApplication ? (null == g[t] && (g[t] = {}), g[t][i.targetApplication.id] = i) : E[t] = i
        },
        INSTANT_INVITE_CREATE_FAILURE: function(e) {
            let {
                channelId: t
            } = e;
            E[t] = null
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
            let {
                channelId: t
            } = e;
            E[t] = null
        },
        FRIEND_INVITE_REVOKE_REQUEST: function() {
            S = !0
        },
        FRIEND_INVITE_CREATE_REQUEST: function() {
            v = !0
        },
        FRIEND_INVITES_FETCH_REQUEST: function() {
            p = !0
        },
        FRIEND_INVITES_FETCH_RESPONSE: function(e) {
            var t;
            m = {}, e.invites.forEach(e => {
                m[e.code] = f.default.createFromServer(e)
            }), i = null !== (t = r(o(u(Object.values(m), "createdAt")))) && void 0 !== t ? t : null, p = !1
        },
        INSTANT_INVITE_CLEAR: function(e) {
            delete E[e.channelId]
        }
    })
}