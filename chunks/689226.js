function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        getRoleIconData: function() {
            return T
        },
        replaceRoleIconSourceSize: function() {
            return S
        },
        isRoleIconAssetUrl: function() {
            return O
        },
        canGuildUseRoleIcons: function() {
            return A
        }
    }), E("781738");
    var t = E("867805"),
        o = E("407063"),
        n = E("315102"),
        r = E("773336"),
        a = E("49111");
    let i = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        I = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        s = (0, r.isAndroid)(),
        T = (e, _) => {
            if (null == e) return null;
            let E = null != e.unicodeEmoji ? t.default.getByName(t.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
            return {
                customIconSrc: N(e, _),
                unicodeEmoji: null != E ? E : void 0
            }
        },
        S = (e, _) => e.replace(/size=[0-9]+/g, "size=".concat((0, o.getBestMediaProxySize)(_ * (0, o.getDevicePixelRatio)()))),
        N = (e, _) => {
            let {
                id: E,
                icon: t
            } = e;
            if (null == t) return;
            if (t.startsWith("data:")) return t;
            let r = n.SUPPORTS_WEBP ? "webp" : "png",
                T = "",
                S = "quality=lossless";
            return (null != _ && (T = "size=" + (0, o.getBestMediaProxySize)(_ * (0, o.getDevicePixelRatio)()), S = s ? "" : "&" + S), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(i, "/").concat(E, "/").concat(t, ".").concat(r, "?").concat(T).concat(S) : "".concat(I).concat(a.Endpoints.ROLE_ICON(E, t), "?").concat(T)
        },
        O = e => e.startsWith(i) || e.startsWith("".concat(I, "/roles")) && e.includes("/icons/"),
        A = (e, _) => {
            var E;
            let t = (null == _ ? void 0 : null === (E = _.tags) || void 0 === E ? void 0 : E.subscription_listing_id) != null;
            return t || e.features.has(a.GuildFeatures.ROLE_ICONS)
        }
}