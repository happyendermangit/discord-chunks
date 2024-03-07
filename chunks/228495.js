function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return S
        }
    }), E("222007");
    var t = E("913144"),
        o = E("776156"),
        n = E("689988"),
        r = E("915639"),
        a = E("299039"),
        i = E("34966"),
        I = E("473006"),
        T = E("788434");
    class s extends n.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
            }, this.handleConnectionOpen = async e => {
                let _ = await o.default.fetchChangelogConfig(),
                    E = _.body,
                    n = (0, I.getClientVersionForChangelog)(),
                    s = function(e, _) {
                        let E = 0,
                            t = null;
                        for (var [o, {
                                min_version: n
                            }] of Object.entries(e)) n <= _ && n > E && (E = n, t = o);
                        return t
                    }(E, n);
                if (t.default.dispatch({
                        type: "CHANGE_LOG_SET_CONFIG",
                        config: _.body,
                        latestChangelogId: s
                    }), null == s || !0 !== E[s].show_on_startup) return;
                let S = i.default.lastSeenChangelogId(),
                    N = i.default.lastSeenChangelogDate();
                if (null != S && 0 >= a.default.compare(s, S)) return;
                let O = await o.default.fetchChangelog(s, r.default.locale);
                if (null != O) {
                    if (null == N || null == i.default.lastSeenChangelogDate()) {
                        o.default.markChangelogAsSeen(s, O.date);
                        return
                    }!i.default.isLocked() && new Date(O.date) > new Date(N) && (0, T.openChangelog)()
                }
            }
        }
    }
    var S = new s
}