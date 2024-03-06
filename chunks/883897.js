function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return u
        }
    });
    var s = t("884691"),
        d = t("817792"),
        n = t("95410"),
        i = t("49671"),
        c = t("599110"),
        r = t("50885"),
        o = t("50361"),
        l = t("49111");

    function f(e) {
        var a;
        return null == e ? void 0 : null === (a = e._state) || void 0 === a ? void 0 : a.lastTestTimestamp
    }

    function u() {
        return s.useEffect(() => {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && !0 !== n.default.get(d.DOMAIN_MIGRATION_SUCCESS_KEY) && r.default.supportsFeature(l.NativeFeatures.USER_DATA_CACHE) && (o.migrate(), i.default.userDataCache.getCached().then(e => {
                if (null == e) {
                    o.failMigration(), c.default.track(l.AnalyticEvents.DOMAIN_MIGRATED, {
                        success: !1,
                        has_data: !1
                    }, {
                        flush: !0
                    });
                    return
                }
                let a = Object.keys(e),
                    t = 0 !== a.length,
                    s = null != e.token,
                    r = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                    u = null == r || null == f(r) || f(r) <= f(n.default.get("RTCRegionStore"));
                t && s && !u && (n.default.clear(), a.forEach(a => {
                    let t = e[a];
                    try {
                        n.default.set(a, JSON.parse(t))
                    } catch (e) {}
                })), c.default.track(l.AnalyticEvents.DOMAIN_MIGRATED, {
                    success: !0,
                    current_is_newer: u,
                    has_data: t
                }, {
                    flush: !0
                }), n.default.set(d.DOMAIN_MIGRATION_SUCCESS_KEY, !0), i.default.userDataCache.deleteCache(), o.finishMigration()
            }))
        }, []), null
    }
}