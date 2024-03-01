function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FREQUENCY_ITEM_LIMIT: function() {
            return c
        },
        default: function() {
            return C
        }
    }), n("424973");
    var i = n("917351"),
        l = n.n(i),
        a = n("446674"),
        o = n("913144"),
        r = n("798609"),
        s = n("80507"),
        u = n("374363"),
        d = n("397336");
    let c = 250,
        p = {
            pendingUsages: []
        },
        f = new s.default({
            computeBonus: () => 100,
            computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0,
            lookupKey: e => e,
            afterCompute: () => {},
            numFrequentlyItems: c
        });

    function m(e) {
        p.pendingUsages.push({
            key: e,
            timestamp: Date.now()
        }), f.track(e), f.compute()
    }

    function _() {
        var e, t;
        let n = u.default.frecencyWithoutFetchingLatest,
            i = null !== (t = null === (e = n.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
        f.overwriteHistory(l.mapValues(i, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), p.pendingUsages)
    }
    class I extends a.default.PersistedStore {
        initialize(e) {
            null != e && (p = e), this.syncWith([u.default], _)
        }
        getState() {
            return p
        }
        hasPendingUsage() {
            return p.pendingUsages.length > 0
        }
        getApplicationFrecencyWithoutLoadingLatest() {
            return f
        }
        getScoreWithoutLoadingLatest(e) {
            var t;
            return null !== (t = f.getScore(e)) && void 0 !== t ? t : 0
        }
        getTopApplicationsWithoutLoadingLatest() {
            return f.frequently
        }
    }
    I.displayName = "ApplicationFrecencyStore", I.persistKey = "ApplicationFrecency";
    var C = new I(o.default, {
        APPLICATION_COMMAND_USED: function(e) {
            let {
                command: t
            } = e;
            if (t.type !== r.ApplicationCommandType.CHAT) return !1;
            m(t.applicationId)
        },
        EMBEDDED_ACTIVITY_OPEN: function(e) {
            let {
                applicationId: t
            } = e;
            m(t)
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            p.pendingUsages = []
        }
    })
}