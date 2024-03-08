function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        },
        useNullableMessageAuthor: function() {
            return _
        },
        getMessageAuthor: function() {
            return h
        },
        useNullableUserAuthor: function() {
            return E
        },
        getUserAuthor: function() {
            return g
        }
    });
    var i = n("627445"),
        s = n.n(i),
        r = n("446674"),
        a = n("42203"),
        o = n("26989"),
        l = n("305961"),
        u = n("27618"),
        d = n("697218"),
        c = n("158998");

    function f(e) {
        let t = _(e);
        return s(null != t, "Result cannot be null because the message is not null"), t
    }

    function _(e) {
        var t;
        let n = (0, r.useStateFromStores)([a.default], () => null == e ? null : a.default.getChannel(e.channel_id)),
            i = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
            s = null == n ? void 0 : n.guild_id,
            f = (0, r.useStateFromStores)([o.default], () => null == s || null == i ? null : o.default.getMember(s, i)),
            _ = (0, r.useStateFromStores)([d.default], () => d.default.getUser(i), [i]),
            h = c.default.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : _),
            {
                guild: E,
                guildRoles: g
            } = (0, r.useStateFromStoresObject)([l.default], () => {
                let e = l.default.getGuild(s),
                    t = null != e ? l.default.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                }
            }, [s]),
            p = (0, r.useStateFromStores)([u.default], () => null != i && (null == n ? void 0 : n.isPrivate()) ? u.default.getNickname(i) : null);
        return null == e ? null : m({
            user: e.author,
            channel: n,
            guild: E,
            guildRoles: g,
            userName: h,
            member: f,
            friendNickname: p
        })
    }

    function h(e) {
        let t = a.default.getChannel(e.channel_id);
        return g(e.author, t)
    }

    function E(e, t) {
        let n = null == e ? void 0 : e.id,
            i = null == t ? void 0 : t.guild_id,
            s = (0, r.useStateFromStores)([o.default], () => null == i || null == n ? null : o.default.getMember(i, n)),
            {
                guild: a,
                guildRoles: d
            } = (0, r.useStateFromStoresObject)([l.default], () => {
                let e = l.default.getGuild(i),
                    t = null != e ? l.default.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                }
            }, [i]),
            f = (0, r.useStateFromStores)([u.default], () => null != n && (null == t ? void 0 : t.isPrivate()) ? u.default.getNickname(n) : null),
            _ = c.default.useName(e);
        return m({
            user: e,
            channel: t,
            guild: a,
            guildRoles: d,
            member: s,
            userName: _,
            friendNickname: f
        })
    }

    function g(e, t) {
        let n = null == e ? void 0 : e.id,
            i = null == t ? void 0 : t.guild_id,
            s = l.default.getGuild(i),
            r = null != i ? l.default.getRoles(i) : void 0,
            a = null == i || null == n ? null : o.default.getMember(i, n),
            d = null != n && null != t && t.isPrivate() ? u.default.getNickname(n) : null;
        return m({
            user: e,
            channel: t,
            guild: s,
            guildRoles: r,
            member: a,
            friendNickname: d
        })
    }

    function m(e) {
        var t, n, i;
        let {
            user: s,
            channel: r,
            guild: a,
            guildRoles: o,
            member: l,
            userName: u,
            friendNickname: d
        } = e, f = null == s ? "???" : null != u ? u : c.default.getName(s);
        return (null == s ? void 0 : s.id) == null || null == r ? {
            nick: f,
            colorString: void 0
        } : (null == a ? void 0 : a.id) == null ? {
            nick: null != d ? d : f,
            colorString: void 0
        } : null == l ? {
            nick: f,
            colorString: void 0
        } : {
            nick: null !== (n = l.nick) && void 0 !== n ? n : f,
            colorString: null !== (i = l.colorString) && void 0 !== i ? i : void 0,
            colorRoleName: null != l.colorRoleId && null != a ? null == o ? void 0 : null === (t = o[l.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
            iconRoleId: l.iconRoleId,
            guildMemberAvatar: l.avatar
        }
    }
}