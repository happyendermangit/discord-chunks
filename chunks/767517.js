function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return d
        }
    });
    var a = s("872717"),
        l = s("913144"),
        n = s("619443"),
        r = s("239380"),
        u = s("305961"),
        E = s("49111"),
        d = {
            acceptGuildTemplate: (e, t, s) => (l.default.dispatch({
                type: "GUILD_TEMPLATE_ACCEPT",
                code: e
            }), new Promise((d, i) => {
                a.default.post({
                    url: E.Endpoints.UNRESOLVED_GUILD_TEMPLATE(e),
                    body: {
                        name: t,
                        icon: s
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let s = t.body;
                    l.default.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                        code: e,
                        guild: s
                    }), n.default.isConnected() ? u.default.addConditionalChangeListener(() => {
                        if (null != u.default.getGuild(s.id)) return (0, r.transitionToGuild)(s.id), d(s), !1
                    }) : ((0, r.transitionToGuild)(s.id), d(s))
                }, t => {
                    l.default.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                        code: e
                    }), i(t.body)
                })
            }))
        }
}