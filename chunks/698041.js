function(e, t, n) {
    "use strict";
    let l;
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007"), n("70102");
    var i = n("446674"),
        a = n("913144"),
        s = n("915639"),
        r = n("928460"),
        o = n("449008");
    let u = {},
        d = {},
        c = {},
        f = {};

    function m(e) {
        let t = e.id,
            n = e.sku.id,
            l = u[t],
            i = r.default.createFromServer(e);
        !(null != l && !l.isSlimDirectoryVersion() && i.isSlimDirectoryVersion()) && (!1 === e.published ? (null == c[n] && (c[n] = new Set), c[n].add(t)) : f[n] = t, u[t] = i)
    }

    function p(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function h(e) {
        let {
            storeListings: t
        } = e;
        for (let e of t) m(e)
    }

    function E() {
        u = {}, f = {}, c = {}, d = {}
    }

    function g() {
        if (l === s.default.locale) return !1;
        E(), l = s.default.locale
    }
    class C extends i.default.Store {
        initialize() {
            this.waitFor(s.default), this.syncWith([s.default], g), l = s.default.locale
        }
        get(e) {
            return u[e]
        }
        getForSKU(e, t) {
            let n = f[e];
            return null != t ? d[p(t, e)] : null != n ? u[n] : null
        }
        getUnpublishedForSKU(e) {
            let t = c[e];
            return null == t ? [] : Array.from(t).map(e => u[e]).filter(o.isNotNullish)
        }
        getForChannel(e, t) {
            return d[p(e, t)]
        }
        getStoreListing(e) {
            let {
                storeListingId: t,
                skuId: n,
                channelId: l,
                isTestMode: i
            } = e;
            if (i && null != n) {
                let e = this.getUnpublishedForSKU(n);
                if (null != e && e.length > 0) return e[0]
            }
            if (null != t) return this.get(t);
            if (null != l) {
                if (null == n) throw Error("getStoreListing with channel expects a skuId");
                return this.getForChannel(l, n)
            }
            if (null != n) return this.getForSKU(n);
            return null
        }
    }
    C.displayName = "StoreListingStore";
    var S = new C(a.default, {
        STORE_LISTINGS_FETCH_SUCCESS: h,
        APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: h,
        STORE_LISTING_FETCH_SUCCESS: function(e) {
            let {
                storeListing: t,
                channelId: n
            } = e;
            if (null != n) {
                let e = r.default.createFromServer(t);
                d[p(n, e.skuId)] = e, f[e.skuId] = e.id
            } else m(t)
        },
        USER_SETTINGS_PROTO_UPDATE: g,
        APPLICATION_STORE_CLEAR_DATA: E,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            if (null == t.store_listing) return !1;
            m(t.store_listing)
        }
    })
}