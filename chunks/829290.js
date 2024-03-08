function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldShowPTONotice: function() {
            return E
        },
        StaffPTOBar: function() {
            return y
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("446674"),
        a = n("77078"),
        s = n("913144"),
        r = n("42203"),
        o = n("26989"),
        u = n("18494"),
        d = n("697218"),
        c = n("381546"),
        f = n("782340"),
        p = n("376202");
    let m = new Set;
    class h extends l.default.PersistedStore {
        initialize(e) {
            null != e && (m = new Set(e))
        }
        hasId(e) {
            return m.has(e)
        }
        getState() {
            return [...m]
        }
    }
    h.displayName = "PTOStore", h.persistKey = "PTOStore";
    let x = new h(s.default, {}),
        E = e => (0, l.useStateFromStores)([o.default, d.default, x], () => {
            let t = d.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = d.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let i = o.default.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
            return i ? !x.hasId(n.id) && i : (m.delete(n.id) && x.emitChange(), !1)
        }),
        y = () => (0, i.jsxs)("div", {
            className: p.bar,
            children: [f.default.Messages.STAFF_PTO_NOTICE, (0, i.jsx)(a.Clickable, {
                className: p.closeButton,
                onClick: () => {
                    let e = u.default.getChannelId();
                    if (null == e) return;
                    let t = r.default.getChannel(e);
                    null != t && t.isPrivate() && !m.has(t.getRecipientId()) && (m.add(t.getRecipientId()), x.emitChange())
                },
                children: (0, i.jsx)(c.default, {
                    className: p.closeIcon
                })
            })]
        })
}