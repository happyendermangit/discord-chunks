function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        s = n("802098"),
        a = n("596401");

    function o() {
        let e = new Date().getMinutes();
        return "x=".concat(Math.floor(e / 5))
    }
    t.default = {
        lockChangeLog(e) {
            r.default.dispatch({
                type: "CHANGE_LOG_LOCK",
                key: e
            })
        },
        unlockChangeLog(e) {
            r.default.dispatch({
                type: "CHANGE_LOG_UNLOCK",
                key: e
            })
        },
        markChangelogAsSeen(e, t) {
            r.default.dispatch({
                type: "CHANGE_LOG_MARK_SEEN",
                changelogId: e,
                changelogDate: t
            })
        },
        setChangelogOverride(e) {
            r.default.dispatch({
                type: "CHANGE_LOG_SET_OVERRIDE",
                id: e
            })
        },
        fetchChangelogConfig() {
            let e = a.ChangelogPlatforms.DESKTOP;
            return i.HTTP.get({
                url: "https://cdn.discordapp.com/changelogs/config_".concat(e, ".json?").concat(o())
            })
        },
        async fetchChangelog(e, t) {
            if (null != s.default.getChangelog(e, t)) return null;
            let n = a.ChangelogPlatforms.DESKTOP;
            try {
                let s = await i.HTTP.get({
                    url: "https://cdn.discordapp.com/changelogs/".concat(n, "/").concat(e, "/").concat(t, ".json?").concat(o())
                });
                return r.default.dispatch({
                    type: "CHANGE_LOG_FETCH_SUCCESS",
                    id: e,
                    changelog: s.body
                }), s.body
            } catch {
                if (r.default.dispatch({
                        type: "CHANGE_LOG_FETCH_FAILED",
                        id: e,
                        locale: t
                    }), "en-US" !== t) return await this.fetchChangelog(e, "en-US");
                return null
            }
        }
    }
}