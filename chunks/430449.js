function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o, l, u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140");
    (s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCH_SUCCESS = 2] = "FETCH_SUCCESS";
    let E = {},
        I = {};
    class T extends(r = _.default.Store) {
        getApplicationAssetFetchState(e) {
            var t;
            return null !== (t = E[e]) && void 0 !== t ? t : 0
        }
        getFetchingIds() {
            return [...Object.entries(E).filter(e => {
                let [, t] = e;
                return 1 === t
            }).map(e => {
                let [t] = e;
                return t
            })]
        }
        getApplicationAssets(e) {
            return I[e]
        }
    }
    l = "ApplicationAssetsStore", (o = "displayName") in(a = T) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new T(c.default, {
        APPLICATION_ASSETS_FETCH: function(e) {
            let {
                applicationId: t
            } = e;
            E = {
                ...E,
                [t]: 1
            }
        },
        APPLICATION_ASSETS_FETCH_SUCCESS: function(e) {
            let {
                applicationId: t
            } = e;
            E = {
                ...E,
                [t]: 2
            }
        },
        APPLICATION_ASSETS_UPDATE: function(e) {
            let {
                applicationId: t,
                assets: n
            } = e;
            if (null != n) {
                var i;
                I[t] = {
                    assets: null !== (i = d().keyBy(n, "name")) && void 0 !== i ? i : {},
                    lastUpdated: Date.now()
                }
            } else delete I[t]
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
            let {
                assets: t
            } = e, n = {
                ...E
            };
            for (let e in t) {
                var i;
                let r = t[e];
                n[e] = 2, I[e] = {
                    assets: null !== (i = d().keyBy(r, "name")) && void 0 !== i ? i : {},
                    lastUpdated: Date.now()
                }
            }
            E = n
        }
    })
}