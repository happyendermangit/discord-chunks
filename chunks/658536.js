function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var l = n("913144"),
        a = n("689988"),
        i = n("26989"),
        u = n("697218"),
        d = n("509");
    let r = null,
        s = () => {
            let e = i.default.getCommunicationDisabledUserMap();
            Object.keys(e).forEach(t => {
                let n = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
                    l = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
                    a = e[t];
                !(0, d.isCommunicationDisabled)(a) && o(n, l)
            })
        },
        o = (e, t) => {
            var n, a, r, s, o, f;
            let c = i.default.getMember(e, t),
                E = u.default.getUser(t);
            if (null == c || null == E || (0, d.isMemberCommunicationDisabled)(c)) return;
            let C = {
                ...c,
                guildId: e,
                nick: null !== (n = c.nick) && void 0 !== n ? n : E.username,
                avatar: null !== (a = c.avatar) && void 0 !== a ? a : void 0,
                avatarDecoration: null != c.avatarDecoration ? {
                    ...c.avatarDecoration
                } : void 0,
                premiumSince: null !== (r = c.premiumSince) && void 0 !== r ? r : void 0,
                isPending: null !== (s = c.isPending) && void 0 !== s && s,
                user: {
                    ...E,
                    email: null !== (o = E.email) && void 0 !== o ? o : void 0,
                    phone: null !== (f = E.phone) && void 0 !== f ? f : void 0
                },
                communicationDisabledUntil: null
            };
            l.default.dispatch({
                type: "GUILD_MEMBER_UPDATE",
                ...C
            })
        };
    class f extends a.default {
        _initialize() {
            r = setInterval(() => s(), 1e4)
        }
        _terminate() {
            clearInterval(r)
        }
        constructor(...e) {
            super(...e), this.clearGuildMemberTimeout = o
        }
    }
    var c = new f
}