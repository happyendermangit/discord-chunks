function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("446674"),
        i = n("27618"),
        a = n("697218"),
        s = n("49111"),
        r = e => {
            let t = (0, l.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
                n = (0, l.useStateFromStores)([i.default], () => i.default.getRelationshipType(e.id)),
                r = e.isNonUserBot();
            return e.id !== (null == t ? void 0 : t.id) && n !== s.RelationshipTypes.BLOCKED && !r
        }
}