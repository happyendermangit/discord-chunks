function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        getMemberSupplementalByGuildId: function() {
            return s
        },
        syncMemberSupplemental: function() {
            return u
        }
    });
    var i = r("835257");
    let n = {};

    function s(e) {
        return null == n[e] && (n[e] = {}), n[e]
    }

    function u(e, t) {
        if (0 === t.length) return !1;
        let r = s(e);
        return t.forEach(e => {
            var t, n, s, u, a, l, d, h;
            let o = r[e.userId],
                m = null !== (n = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == o ? void 0 : o.joinSourceType) && void 0 !== n ? n : null;
            (null == m || m === i.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (m = i.JoinSourceType.INVITE), r[e.userId] = {
                userId: e.userId,
                sourceInviteCode: null !== (u = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == o ? void 0 : o.sourceInviteCode) && void 0 !== u ? u : null,
                joinSourceType: m,
                inviterId: null !== (l = null !== (a = e.inviterId) && void 0 !== a ? a : null == o ? void 0 : o.inviterId) && void 0 !== l ? l : null,
                integrationType: null !== (h = null !== (d = e.integrationType) && void 0 !== d ? d : null == o ? void 0 : o.integrationType) && void 0 !== h ? h : null
            }
        }), !0
    }
}