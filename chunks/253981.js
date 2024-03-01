function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return u
        }
    }), E("222007"), E("511434"), E("313619"), E("654714"), E("287168"), E("956660");
    var t = E("943224"),
        o = E.n(t),
        n = E("917351"),
        r = E.n(n),
        i = E("746379"),
        a = E("49111");
    let I = /(?:^|\.)(?:discordapp|discord)\.com$/i,
        s = o.v4().source,
        T = "(?:".concat("(?:(?:[a-z]+:)?//)", "|www\\.)").concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|").concat(s, "|").concat("(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+").concat("(?:(?:[a-z\\u00a1-\\uffff]{2,}))", ")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?'),
        S = RegExp(T, "ig"),
        N = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);

    function O(e) {
        var _;
        let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return !1;
        return I.test(e) || E && (_ = e, N.has(_.toLowerCase()))
    }

    function A(e) {
        return null != e && "discord:" === e
    }

    function R(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && O(i.parse(e).hostname, _)
    }

    function l(e) {
        return null != e && A(i.parse(e).protocol)
    }
    var u = {
        URL_REGEX: S,
        isDiscordHostname: O,
        isDiscordLocalhost: function(e, _) {
            return null != e && null != _ && (window.location.host === e || !1)
        },
        isDiscordProtocol: A,
        isDiscordUrl: R,
        isDiscordUri: l,
        isDiscordCdnUrl: function(e) {
            return null != e && i.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
        },
        isDiscordUrlOrUri: e => R(e) || l(e),
        isAppRoute: e => {
            let _ = e.toLowerCase();
            return _.startsWith("/channels/") || _.startsWith(a.Routes.APPLICATION_STORE) || _.startsWith(a.Routes.APPLICATION_LIBRARY) || _.startsWith(a.Routes.MESSAGE_REQUESTS) || _.startsWith(a.Routes.ACTIVITIES) || _.startsWith(a.Routes.COLLECTIBLES_SHOP) || _.startsWith(a.Routes.ACTIVITY)
        },
        format: e => i.format(e),
        formatPathWithQuery: (e, _) => i.format({
            pathname: e,
            query: r.pickBy(_)
        }),
        formatSearch: e => i.format({
            query: r.pickBy(e)
        }),
        safeParseWithQuery(e) {
            try {
                return i.parse(e, !0)
            } catch (e) {
                return null
            }
        },
        toURLSafe(e, _) {
            try {
                return new URL(e, _)
            } catch (e) {
                return null
            }
        },
        makeUrl: function(e) {
            let _ = __DEV__ ? window.GLOBAL_ENV.INVITE_HOST : location.host;
            return "".concat(location.protocol, "//").concat(_).concat(e)
        }
    }
}