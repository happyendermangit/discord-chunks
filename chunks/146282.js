function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = new Map,
        d = !1;
    class _ extends(i = o.default.Store) {
        getFeed(e) {
            return u.get(e)
        }
        getFeedRequestId(e) {
            var t;
            return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id
        }
        get hidden() {
            return d
        }
    }
    a = "ContentInventoryStore", (s = "displayName") in(r = _) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new _(l.default, {
        CONNECTION_OPEN: function() {
            u.clear(), d = !1
        },
        CONTENT_INVENTORY_SET_FEED: function(e) {
            let {
                feedId: t,
                feed: n
            } = e;
            u.set(t, n)
        },
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function() {
            d = !d
        }
    })
}