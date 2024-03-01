function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canStreamInChannel: function() {
            return T
        },
        getStreamCTAString: function() {
            return f
        },
        canWatchStream: function() {
            return p
        },
        useCanWatchStream: function() {
            return N
        },
        getStreamEligibleChannels: function() {
            return A
        }
    }), n("424973"), n("222007");
    var r, i, l = n("446674"),
        u = n("76393"),
        a = n("233069"),
        o = n("923959"),
        s = n("305961"),
        d = n("957255"),
        E = n("800762"),
        _ = n("404008"),
        c = n("49111"),
        I = n("782340");
    let S = (e, t) => (0, a.isPrivate)(e.type) || t.canBasicChannel(c.BasicPermissions.CONNECT | c.BasicPermissions.VIEW_CHANNEL, e);

    function T(e, t, n) {
        var r;
        let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (e.isPrivate()) return !0;
        let l = t.getGuild(e.getGuildId()),
            u = null !== (r = null == l ? void 0 : l.maxStageVideoChannelUsers) && void 0 !== r ? r : 0;
        return (!e.isGuildStageVoice() || !(u <= 0)) && (!i || !!S(e, n)) && !!n.can(c.Permissions.STREAM, e) && null != l && l.afkChannelId !== e.id && !0
    }

    function f(e) {
        switch (e) {
            case 0:
                return I.default.Messages.CONSOLE_STREAM_UNAVAILABLE;
            case 1:
                return I.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
            case 2:
                return I.default.Messages.STREAM_NO_PERMISSION_CTA;
            default:
                return I.default.Messages.WATCH_STREAM
        }
    }

    function p(e, t, n, r, i) {
        let l;
        if (null == e) return [!1, 2];
        let u = t.isInChannel(e.id),
            o = e instanceof a.ChannelRecordBase && (0, _.isChannelFull)(e, t, n),
            s = S(e, r),
            d = null != i.getAwaitingRemoteSessionInfo() || null != i.getRemoteSessionId();
        d ? l = 0 : s || u ? o && !u && (l = 1) : l = 2;
        let E = !__OVERLAY__ && !d && (u || s && !o);
        return [E, l]
    }

    function N(e) {
        return (0, l.useStateFromStoresArray)([E.default, s.default, d.default, u.default], () => p(e, E.default, s.default, d.default, u.default))
    }

    function A(e, t, n) {
        let r = [];
        for (let {
                channel: i
            }
            of e[o.GUILD_VOCAL_CHANNELS_KEY]) T(i, t, n) && r.push(i);
        return r
    }(i = r || (r = {}))[i.REMOTE_MODE = 0] = "REMOTE_MODE", i[i.CHANNEL_FULL = 1] = "CHANNEL_FULL", i[i.NO_PERMISSION = 2] = "NO_PERMISSION"
}