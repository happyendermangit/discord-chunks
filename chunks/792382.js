function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    });
    var u, n = r("656280"),
        i = r.n(n),
        s = r("509043"),
        E = r("666038");
    let l = e => null == e ? e : {
        backgroundColors: e.background_colors.map(e => i((0, s.int2hex)(e))),
        buttonColors: e.button_colors.map(e => i((0, s.int2hex)(e))),
        confettiColors: e.confetti_colors.map(e => i((0, s.int2hex)(e)))
    };
    u = class e extends E.default {
        static fromServer(t) {
            let {
                store_listing_id: r,
                sku_id: u,
                unpublished_at: n,
                styles: i,
                ...s
            } = t, E = null != n ? new Date(n) : null;
            return new e({
                ...s,
                storeListingId: r,
                skuId: u,
                unpublishedAt: E,
                styles: l(i)
            })
        }
        constructor(e) {
            super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt, this.styles = e.styles
        }
    }
}