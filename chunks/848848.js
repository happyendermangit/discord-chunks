function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        getChannelRoleSubscriptionStatus: function() {
            return c
        }
    });
    var l = n("446674"),
        r = n("203288"),
        a = n("42203"),
        i = n("957255"),
        u = n("49111");
    let o = {
        needSubscriptionToAccess: !1,
        isSubscriptionGated: !1
    };

    function s(e) {
        return (0, l.useStateFromStoresObject)([a.default, r.default, i.default], () => c(e, a.default, r.default, i.default), [e])
    }

    function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.default,
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
            s = t.getChannel(e);
        if (null == s ? void 0 : s.isRoleSubscriptionTemplatePreviewChannel()) return {
            isSubscriptionGated: !0,
            needSubscriptionToAccess: !0
        };
        if (null == s || !n.isChannelGated(s.guild_id, s.id)) return o;
        let c = s.isGuildVocal() ? !l.can(u.Permissions.CONNECT, s) : !l.can(u.Permissions.VIEW_CHANNEL, s);
        return {
            isSubscriptionGated: !0,
            needSubscriptionToAccess: c
        }
    }
}