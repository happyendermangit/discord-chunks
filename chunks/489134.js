function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    });
    var u, n = r("407788");
    u = class e extends n.default {
        static fromServer(t) {
            let {
                purchased_at: r,
                purchase_type: u,
                ...n
            } = t;
            return new e({
                ...super.fromServer(n),
                purchaseType: u,
                purchasedAt: null != r ? new Date(r) : r
            })
        }
        constructor(e) {
            super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
        }
    }
}