function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("778043"),
        l = n("82946"),
        i = n("492249"),
        r = function(e) {
            let {
                match: t,
                location: n
            } = e, r = async (e, t) => {
                await (0, a.deepLinkRouteIfLandedAndNotAuthed)(i.RPCDeepLinks.PICK_GUILD_SETTINGS, {
                    section: e.params.section,
                    subsection: e.params.subsection,
                    search: t.search
                })
            };
            return (0, s.jsx)(l.default, {
                match: t,
                location: n,
                attemptDeepLink: r
            })
        }
}