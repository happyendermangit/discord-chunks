function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        renderSystemTag: function() {
            return o
        }
    });
    var a = n("37983");
    n("884691");
    var s = n("25116"),
        r = n("730541"),
        i = n("79798"),
        l = n("356296");

    function o(e) {
        let t, {
            message: n,
            channel: o,
            user: u,
            compact: c,
            isRepliedMessage: d,
            hideIcon: m = !1,
            children: f
        } = e;
        return ((null == n ? void 0 : n.isSystemDM()) ? t = i.default.Types.SYSTEM_DM : null != n && (0, s.default)(n) ? t = (0, r.isPublicSystemMessage)(n) ? i.default.Types.OFFICIAL : i.default.Types.SERVER : (null == u ? void 0 : u.bot) ? t = i.default.Types.BOT : null != o && o.isForumPost() && o.ownerId === (null == u ? void 0 : u.id) && !d && (t = i.default.Types.ORIGINAL_POSTER), null == t) ? null : (0, a.jsx)(i.default, {
            className: c ? l.botTagCompact : l.botTagCozy,
            type: t,
            verified: null == u ? void 0 : u.isVerifiedBot(),
            hideIcon: m,
            useRemSizes: !0,
            children: f
        })
    }
}