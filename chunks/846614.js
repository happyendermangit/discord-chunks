function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useNewUserDismissibleContent: function() {
            return c
        },
        disableNewUserDismissibleContent: function() {
            return d
        }
    });
    var i = n("65597"),
        r = n("151426"),
        s = n("271938"),
        a = n("718517"),
        o = n("299039");
    let l = {
            [r.DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0,
            [r.DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
            [r.DismissibleContent.SEEN_LAUNCH_WELCOME]: 0,
            [r.DismissibleContent.SEEN_OLD_DESIGN]: 0
        },
        u = a.default.Millis.DAY;

    function c(e) {
        let t = (0, i.default)([s.default], () => s.default.getId()),
            n = null != t ? o.default.age(t) : 0;
        return e.filter(e => {
            var t;
            let i = null !== (t = l[e]) && void 0 !== t ? t : u;
            return n > i
        })
    }

    function d(e) {
        var t;
        let n = null != s.default.getId() ? o.default.age(s.default.getId()) : 0,
            i = null !== (t = l[e]) && void 0 !== t ? t : u;
        return n < i
    }
}