function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        maybeGetEmojiCaptionsForUser: function() {
            return i
        }
    });
    var t = E("697218"),
        o = E("558986"),
        n = E("802461"),
        r = E("269579");
    async function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
            _ = t.default.getCurrentUser();
        if (null == _) return;
        let {
            isEmojiCaptionsEnabled: E
        } = r.default.getCurrentConfig({
            location: e
        });
        if (!E) {
            n.default.hasPersistedState() && n.default.clear();
            return
        }
        if (n.default.getIsFetching()) return;
        let i = n.default.getEmojiCaptionsTTL();
        !(null != i && Date.now() < i) && await (0, o.getEmojiCaptionsForUser)()
    }
}