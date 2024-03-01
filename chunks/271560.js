function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStoreListingLocation: function() {
            return S
        },
        getApplicationStoreListingLocation: function() {
            return A
        },
        getAssetURL: function() {
            return D
        },
        httpGetWithCountryCodeQuery: function() {
            return N
        },
        nativePlatformTypeToSKUOperatingSystem: function() {
            return O
        },
        skuOperatingSystemToText: function() {
            return P
        },
        getPrimarySKUForApplication: function() {
            return b
        },
        getSocialRecommendationReasons: function() {
            return R
        },
        getNonSocialRecommendationReasons: function() {
            return M
        }
    }), n("424973"), n("462568"), n("222007"), n("70102"), n("702976");
    var s = n("917351"),
        i = n.n(s),
        r = n("866227"),
        a = n.n(r),
        o = n("642852"),
        d = n.n(o),
        u = n("394846"),
        l = n("872717"),
        f = n("850068"),
        _ = n("407063"),
        c = n("160299"),
        g = n("357957"),
        m = n("521012"),
        h = n("560528"),
        v = n("568734"),
        E = n("449008"),
        p = n("773336"),
        y = n("299039"),
        T = n("49111"),
        C = n("782340");
    d.shim();
    let I = !u.isMobile && !u.isTablet && -1 !== (0, h.getChromeVersion)();

    function S(e, t) {
        let {
            analyticsSource: n,
            analyticsProperties: s,
            storeListingId: i,
            slug: r,
            channelId: a,
            guildId: o
        } = t;
        return {
            pathname: null != a && null != o ? T.Routes.CHANNEL(o, a, e) : T.Routes.APPLICATION_STORE_LISTING_SKU(e, r),
            state: {
                analyticsSource: n,
                analyticsProperties: s
            },
            search: null != i ? "?store_listing_id=".concat(i) : ""
        }
    }

    function A(e, t) {
        let {
            analyticsSource: n,
            analyticsProperties: s,
            slug: i
        } = t;
        return {
            pathname: T.Routes.APPLICATION_STORE_LISTING_APPLICATION(e, i),
            state: {
                analyticsSource: n,
                analyticsProperties: s
            }
        }
    }

    function D(e, t, n, s) {
        var i;
        let r;
        let a = window.GLOBAL_ENV.CDN_HOST;
        if (null == s) switch (t.mimeType || t.mime_type) {
            case "video/quicktime":
            case "video/mp4":
                s = "mp4";
                break;
            case "image/gif":
                s = "gif";
                break;
            default:
                s = "webp"
        }
        "webp" === s && !I && (s = "png");
        let o = "string" == typeof t ? t : t.id,
            d = (i = "https:", "https:");
        return r = null != a ? "".concat(d, "//").concat(a, "/app-assets/").concat(e, "/store/").concat(o, ".").concat(s) : "".concat(d).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(T.Endpoints.STORE_ASSET(e, o, s)), null != n && (r += "?size=".concat((0, _.getBestMediaProxySize)(n * (0, _.getDevicePixelRatio)()))), r
    }
    async function N(e) {
        var t, n, s, i;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (r) {
            let e = [];
            !g.default.hasFetchedPaymentSources && e.push(null !== (n = c.default.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, f.fetchPaymentSources)()), !c.default.ipCountryCodeLoaded && e.push((0, f.fetchIpCountryCode)()), e.push(new Promise(async e => {
                if (m.default.hasFetchedSubscriptions()) e();
                else if (c.default.isSubscriptionFetching) {
                    let t = () => {
                        c.default.isSubscriptionFetching ? setTimeout(t, 50) : e()
                    };
                    t()
                } else await (0, f.fetchSubscriptions)(), e()
            })), await Promise.allSettled(e)
        }
        let a = g.default.getDefaultBillingCountryCode(),
            o = null !== (s = null === (t = g.default.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null,
            d = m.default.getPremiumTypeSubscription();
        null != d && null != d.paymentSourceId && (o = d.paymentSourceId), null === a && (a = null !== (i = c.default.ipCountryCode) && void 0 !== i ? i : null);
        let u = {};
        if (null != a && (u.country_code = a), null != o && (u.payment_source_id = o), null != a || null != o) {
            if ("string" == typeof e) {
                let t = {
                    url: e,
                    oldFormErrors: !0
                };
                e = t
            }
            if ("string" == typeof e.query) throw Error("string query not supported");
            e.query = {
                ...u,
                ...e.query
            }
        }
        return l.default.get(e)
    }

    function O(e) {
        switch (e) {
            case p.PlatformTypes.WINDOWS:
                return T.OperatingSystems.WINDOWS;
            case p.PlatformTypes.OSX:
                return T.OperatingSystems.MACOS;
            case p.PlatformTypes.LINUX:
                return T.OperatingSystems.LINUX;
            default:
                return null
        }
    }

    function P(e) {
        switch (e) {
            case T.OperatingSystems.WINDOWS:
                return C.default.Messages.WINDOWS;
            case T.OperatingSystems.MACOS:
                return C.default.Messages.MACOS;
            case T.OperatingSystems.LINUX:
                return C.default.Messages.LINUX
        }
        throw Error("Unknown operating system value: ".concat(e))
    }

    function b(e, t, n) {
        let s = t.getApplication(e);
        return null == s || null == s.primarySkuId ? null : n.get(s.primarySkuId)
    }
    let V = [];

    function R(e, t, n, s, r) {
        let a = t.get(e);
        if (null == a) return V;
        let o = a.applicationId,
            d = [],
            u = [],
            l = function(e, t, n) {
                var s;
                let i = null !== (s = n.getNowPlaying(e)) && void 0 !== s ? s : {},
                    r = y.default.keys(i),
                    a = r.map(e => {
                        let n = t.getUser(e);
                        return null == n ? null : {
                            user: n,
                            startTime: i[n.id].startedPlaying
                        }
                    }).filter(E.isNotNullish).sort((e, t) => t.startTime - e.startTime);
                return 0 === a.length ? null : {
                    type: T.StoreRecommendationTypes.NOW_PLAYING,
                    userInfo: a
                }
            }(o, n, s);
        null != l && (d.push(l), u = l.userInfo.map(e => {
            let {
                user: t
            } = e;
            return t.id
        }));
        let f = r.getStatisticsForApplication(o);
        if (null != f) {
            let e = f.map(e => e.user_id);
            if (i.difference(e, u).length > 0) {
                let e = function(e, t, n) {
                    let s = n.getStatisticsForApplication(e);
                    if (null == s) return null;
                    let i = s.map(e => {
                        let n = t.getUser(e.user_id);
                        return null == n ? null : {
                            user: n,
                            endTime: Date.parse(e.last_played_at)
                        }
                    }).filter(E.isNotNullish).sort((e, t) => t.endTime - e.endTime);
                    return 0 === i.length ? null : {
                        type: T.StoreRecommendationTypes.EVER_PLAYED,
                        userInfo: i
                    }
                }(o, n, r);
                null != e && d.push(e)
            }
        }
        return d
    }
    let k = [];

    function M(e, t, n) {
        let s = t.get(e),
            i = n.getForSKU(e);
        if (null == s || null == i) return k;
        let r = [];
        (0, v.hasFlag)(s.flags, T.SKUFlags.HAS_FREE_PREMIUM_CONTENT) && r.push({
            type: T.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT
        });
        let o = s.releaseDate;
        return null != o && 3 > a().diff(o, "months") && (s.accessType === T.SKUAccessTypes.EARLY_ACCESS ? r.push({
            type: T.StoreRecommendationTypes.EARLY_ACCESS,
            releaseDate: o
        }) : r.push({
            type: T.StoreRecommendationTypes.RECENT_RELEASE_DATE,
            releaseDate: o
        })), null != i.flavorText && r.push({
            type: T.StoreRecommendationTypes.FLAVOR_TEXT,
            flavorText: i.flavorText
        }), r
    }
}