function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        KvMessage: function() {
            return i
        }
    }), n("222007"), n("424973");
    var a = n("26989"),
        l = n("697218"),
        s = n("49111");
    class i {
        static fromMessage(e, t, n, a) {
            let [l, s] = i.deriveMemberUsers(e, n);
            return {
                id: n.id,
                channelId: t,
                message: n,
                members: l,
                users: s,
                connectionId: a
            }
        }
        static deriveMemberUsers(e, t) {
            var n, i, r, u;
            let d = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (i = t.interaction) || void 0 === i ? void 0 : i.user.id, ...null !== (u = null === (r = t.mentions) || void 0 === r ? void 0 : r.map(e => e.id)) && void 0 !== u ? u : []]),
                o = [],
                c = [];
            for (let t of d) {
                if (null == t) continue;
                let n = l.default.getUser(t),
                    i = a.default.getTrueMember(null != e ? e : s.EMPTY_STRING_SNOWFLAKE_ID, t);
                null != n && c.push(n), null != i && o.push(i)
            }
            return [o, c]
        }
    }
}