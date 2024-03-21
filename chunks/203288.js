function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("222007");
    var i = n("316693"),
        s = n("446674"),
        r = n("913144"),
        a = n("7331"),
        o = n("736271"),
        l = n("858560"),
        u = n("808388"),
        d = n("828674"),
        c = n("866595"),
        _ = n("38654"),
        f = n("42203"),
        E = n("26989"),
        h = n("305961"),
        g = n("697218"),
        m = n("49111");
    let p = {},
        S = new Set;

    function T(e) {
        let {
            guildId: t,
            role: n,
            isPreviewingRoles: i
        } = e;
        return !!(0, d.isSubscriptionRole)(n) && (!!(i || (0, d.isSubscriptionRoleAvailableForPurchase)(null != n ? n : void 0) || function(e, t) {
            if (null == e) return !1;
            let n = g.default.getCurrentUser();
            if (null == n) return !1;
            let i = E.default.getMember(t, n.id);
            return null != i && i.roles.includes(e.id)
        }(n, t)) || !1)
    }

    function v(e, t) {
        if (!t.hasFeature(m.GuildFeatures.CREATOR_MONETIZABLE) && !t.hasFeature(m.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
        let n = _.default.isViewingServerShop(t.id);
        for (let i of Object.keys(e.permissionOverwrites)) {
            let s = h.default.getRole(t.id, i);
            if (!T({
                    guildId: t.id,
                    role: s,
                    isPreviewingRoles: n
                })) continue;
            let r = e.permissionOverwrites[i];
            if ((0, c.isChannelAccessGrantedBy)(e, r)) return !0
        }
        let s = h.default.getRole(t.id, t.getEveryoneRoleId()),
            r = null != s && !i.has(s.permissions, m.Permissions.VIEW_CHANNEL),
            a = (0, c.isChannelAccessDeniedBy)(e, e.permissionOverwrites[t.id]);
        if (r && !a) {
            for (let e of Object.values(h.default.getRoles(t.id)))
                if (T({
                        guildId: t.id,
                        role: e,
                        isPreviewingRoles: n
                    }) && (0, c.isAllChannelsRole)(e)) return !0
        }
        return !1
    }

    function I(e, t) {
        let n = p[e];
        if (null == n) return !1;
        let i = f.default.getChannel(t);
        if (null == i) return !1;
        let s = h.default.getGuild(i.getGuildId());
        if (null == s) return !1;
        let r = n.has(t),
            a = v(i, s);
        return r !== a && (a ? n.add(t) : n.delete(t), !0)
    }

    function A() {
        p = {}, S.clear()
    }

    function C(e) {
        let {
            guild: t
        } = e;
        delete p[t.id]
    }

    function y(e) {
        let {
            guildId: t
        } = e;
        delete p[t]
    }

    function N(e) {
        let {
            channel: t
        } = e;
        return null != t.guild_id && I(t.guild_id, t.id)
    }
    class R extends s.default.Store {
        initialize() {
            this.waitFor(h.default, f.default, _.default), l.GuildRoleSubscriptionUsersExperiment.subscribe({
                location: "1"
            }, () => A())
        }
        isChannelGated(e, t) {
            if (null == e) return !1;
            let n = p[e];
            return null == n && (! function(e) {
                let t = h.default.getGuild(e);
                if (null == t) return;
                let n = p[e] = new Set;
                if (!t.hasFeature(m.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) || !(0, u.isGuildEligibleForRoleSubscriptions)(e) && !(0, a.isExpeditedMonetizationOnboardingGuild)(t)) return;
                let i = f.default.getMutableGuildChannelsForGuild(e);
                for (let e in i) {
                    let s = i[e];
                    v(s, t) && n.add(s.id)
                }
            }(e), n = p[e]), null != n && n.has(t)
        }
        isChannelGatedAndVisible(e, t) {
            return null != e && this.isChannelGated(e, t) && !S.has(e)
        }
    }
    R.displayName = "GatedChannelStore";
    var O = new R(r.default, {
        CONNECTION_OPEN: A,
        OVERLAY_INITIALIZE: A,
        CACHE_LOADED_LAZY: A,
        GUILD_CREATE: C,
        GUILD_UPDATE: C,
        GUILD_DELETE: C,
        GUILD_ROLE_CREATE: y,
        GUILD_ROLE_UPDATE: y,
        GUILD_ROLE_DELETE: y,
        IMPERSONATE_UPDATE: y,
        IMPERSONATE_STOP: y,
        CHANNEL_CREATE: N,
        CHANNEL_DELETE: N,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = !1;
            for (let e of t) null != e.guild_id && I(e.guild_id, e.id) && (n = !0);
            return n
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
            let {
                guildId: t,
                restrictions: n
            } = e;
            (0, o.isRestrictedFromShowingGuildPurchaseEntryPoints)(n) ? S.add(t): S.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
            let {
                guildId: t
            } = e;
            S.add(t)
        }
    })
}