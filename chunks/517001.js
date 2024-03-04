function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        validatePremiumType: function() {
            return l
        },
        isStaffEnv: function() {
            return d
        },
        isStaffEnvRawData: function() {
            return c
        },
        getPremiumTypeFromRawValue: function() {
            return f
        }
    }), n("702976");
    var i = n("627445"),
        s = n.n(i),
        r = n("568734"),
        a = n("963903"),
        o = n("49111");

    function l(e, t, n) {
        !e && void 0 !== t && s(n === t, "Premium type should not change for non-staff users")
    }

    function u(e) {
        return "production" === a.Environments.TEST && null != e ? e : "production"
    }

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = u(t) === a.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === a.Environments.STAGING;
        if (n) return !0;
        if (null == e) return !1;
        let i = e.isStaff() || e.isStaffPersonal();
        return i
    }

    function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = u(t) === a.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === a.Environments.STAGING;
        return !!n || null != e && (!!(null != e.flags && (0, r.hasFlag)(e.flags, o.UserFlags.STAFF)) || null != e.personal_connection_id)
    }

    function f(e) {
        return void 0 !== e ? e === o.PREMIUM_TYPE_NONE ? null : e : e
    }
}