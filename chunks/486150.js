function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return s
        }
    });
    var n = i("37983");
    i("884691");
    var l = i("77078"),
        a = i("968194"),
        r = i("884385"),
        u = i("170108"),
        d = i("922174");
    async function s(t, e, s) {
        let {
            hasSpotifyAccount: o,
            activity: c,
            user: E
        } = t;
        (0, d.default)(o) && null != c && null != c.sync_id && (await (0, r.ensureSpotifyPlayable)(), await (0, r.ensureSpotifyPremium)().catch(t => ((0, l.openModalLazy)(async () => {
            let {
                default: t
            } = await i.el("775195").then(i.bind(i, "775195"));
            return e => (0, n.jsx)(t, {
                ...e
            })
        }), Promise.reject(t))), a.sync(c, E.id), (0, u.default)(e, E, c, s))
    }
}