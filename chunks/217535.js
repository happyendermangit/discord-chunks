function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("446674"),
        i = n("697218"),
        a = n("719923"),
        s = n("49111");

    function r() {
        let e = (0, l.useStateFromStores)([i.default], () => a.default.canUseIncreasedMessageLength(i.default.getCurrentUser()));
        return e ? s.MAX_MESSAGE_LENGTH_PREMIUM : s.MAX_MESSAGE_LENGTH
    }
}