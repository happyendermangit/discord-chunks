function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var l = n("446674"),
        i = n("913144"),
        r = n("374363"),
        u = n("305961"),
        a = n("957255"),
        d = n("607620"),
        s = n("299039"),
        o = n("610174"),
        c = n("311161");
    let f = {},
        _ = {};

    function E() {
        var e;
        let t = null !== (e = r.default.getGuildsProto()) && void 0 !== e ? e : {},
            n = u.default.getGuilds(),
            l = s.default.keys(n);
        for (let e of (_ = {}, l))(0, o.getGuildAlertModeEnabled)(e).showAlertMode && (_[e] = {
            guildId: e,
            guildName: n[e].name,
            ...t[e]
        })
    }

    function A(e) {
        return null != e && Object.keys(e).length > 0 ? {
            raidDetectedAt: e.raid_detected_at,
            dmSpamDetectedAt: e.dm_spam_detected_at,
            dmsDisabledUntil: e.dms_disabled_until,
            invitesDisabledUntil: e.invites_disabled_until
        } : null
    }
    class h extends l.default.Store {
        initialize() {
            this.waitFor(r.default, u.default, a.default, d.default), this.syncWith([r.default, u.default, a.default, d.default], E)
        }
        getGuildIncident(e) {
            return f[e]
        }
        getIncidentsByGuild() {
            return f
        }
        getGuildAlertSettings() {
            return _
        }
    }
    h.displayName = "GuildIncidentsStore";
    var I = new h(i.default, {
        CONNECTION_OPEN: function(e) {
            for (let n of (f = {}, e.guilds)) {
                var t;
                let e = A(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
                null != e && ((0, c.hasDetectedActivity)(e) || (0, c.isUnderLockdown)(e)) && (f[n.id] = e)
            }
        },
        GUILD_CREATE: function(e) {
            var t;
            let {
                guild: n
            } = e, l = A(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
            null != l && ((0, c.hasDetectedActivity)(l) || (0, c.isUnderLockdown)(l)) && (f[n.id] = l)
        },
        GUILD_UPDATE: function(e) {
            let {
                guild: t
            } = e, n = A(t.incidents_data);
            null != n && ((0, c.hasDetectedActivity)(n) || (0, c.isUnderLockdown)(n)) ? f[t.id] = n : delete f[t.id]
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete f[t.id]
        },
        LOGOUT: function(e) {
            f = {}
        }
    })
}