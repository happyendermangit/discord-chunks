function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RESTRICTIONS: function() {
            return s
        }
    });
    var l = n("551006"),
        i = n("49111"),
        a = n("782340");
    let s = [{
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let i = l.default.extractEveryoneRole(e, t);
            if (null == i || !l.default.shouldShowEveryoneGuard(i, t)) return !1;
            let s = l.default.everyoneMemberCount(i, t),
                r = Math.pow(10, Math.floor(Math.log10(s))),
                o = a.default.Messages.EVERYONE_POPOUT_BODY;
            return t.isForumPost() ? o = a.default.Messages.EVERYONE_POPOUT_BODY_FORUM_POST : t.isThread() && (o = a.default.Messages.EVERYONE_POPOUT_BODY_THREAD), {
                body: o.format({
                    role: i,
                    count: (Math.trunc(s / r) * r).toLocaleString()
                }),
                footer: a.default.Messages.EVERYONE_POPOUT_FOOTER
            }
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => n.el("878809").then(n.t.bind(n, "878809", 19)),
            light: () => n.el("390594").then(n.t.bind(n, "390594", 19))
        }
    }, {
        check: e => !!i.TOKEN_REGEX.test(e) && {
            body: a.default.Messages.TOKEN_POPOUT_BODY
        },
        analyticsType: "API Token Warning"
    }]
}