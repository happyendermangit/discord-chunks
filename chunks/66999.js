function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        getChannelRoleSubscriptionStatus: function() {
            return d
        }
    });
    var i = n("442837"),
        r = n("430198"),
        s = n("592125"),
        a = n("496675"),
        o = n("981631");
    let l = {
        needSubscriptionToAccess: !1,
        isSubscriptionGated: !1
    };

    function u(e) {
        return (0, i.useStateFromStoresObject)([s.default, r.default, a.default], () => d(e, s.default, r.default, a.default), [e])
    }

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.default,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
            u = t.getChannel(e);
        return (null == u ? void 0 : u.isRoleSubscriptionTemplatePreviewChannel()) ? {
            isSubscriptionGated: !0,
            needSubscriptionToAccess: !0
        } : null != u && n.isChannelGated(u.guild_id, u.id) ? {
            isSubscriptionGated: !0,
            needSubscriptionToAccess: u.isGuildVocal() ? !i.can(o.Permissions.CONNECT, u) : !i.can(o.Permissions.VIEW_CHANNEL, u)
        } : l
    }
}