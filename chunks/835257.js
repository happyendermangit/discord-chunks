function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        registerFetchedSupplementals: function() {
            return v
        },
        JoinSourceType: function() {
            return i
        },
        getJoinSourceTypeLabel: function() {
            return p
        },
        getIntegrationLabel: function() {
            return g
        },
        useGetIntegrationIconString: function() {
            return R
        },
        fetchMemberSupplemental: function() {
            return S
        }
    }), n("424973");
    var r, i, l, a, u, s, o = n("872717"),
        c = n("819855"),
        d = n("841098"),
        f = n("376556"),
        E = n("572943"),
        _ = n("49111"),
        I = n("782340");
    let T = {};

    function M(e, t) {
        return e + t
    }

    function N(e, t) {
        return t.map(t => e + t)
    }

    function h(e) {
        return e.split("-")[1]
    }(a = r || (r = {}))[a.FAILED = 0] = "FAILED", a[a.UNFETCHED = 1] = "UNFETCHED", a[a.PENDING = 2] = "PENDING", a[a.SUCCEEDED = 3] = "SUCCEEDED", a[a.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

    function C(e, t) {
        e.forEach(e => {
            T[e] = t
        })
    }

    function v(e, t) {
        t.forEach(t => (function(e, t, n) {
            T[e + t] = 3
        })(e, t, 3))
    }(u = i || (i = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.BOT = 1] = "BOT", u[u.INTEGRATION = 2] = "INTEGRATION", u[u.DISCOVERY = 3] = "DISCOVERY", u[u.HUB = 4] = "HUB", u[u.INVITE = 5] = "INVITE", u[u.VANITY_URL = 6] = "VANITY_URL";
    let p = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
            case 2:
                return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
            case 3:
                return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
            case 4:
                return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
            case 5:
                return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
            case 6:
                if (null != t && !n) return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                    vanityUrl: t
                });
                return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
            default:
                return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
        }
    };
    (s = l || (l = {})).DISCORD = "discord", s.TWITCH = "twitch", s.YOUTUBE = "youtube", s.GUILD_SUBSCRIPTION = "guild_subscription";
    let g = e => {
            switch (e) {
                case "twitch":
                    return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                case "youtube":
                    return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                default:
                    return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
            }
        },
        R = e => {
            let t = f.default.get((0, E.useLegacyPlatformType)(e)),
                n = (0, d.default)();
            return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
        };

    function m(e) {
        return {
            userId: e.user_id,
            sourceInviteCode: e.source_invite_code,
            joinSourceType: e.join_source_type,
            inviterId: e.inviter_id,
            integrationType: e.integration_type
        }
    }
    async function S(e, t) {
        let n = N(e, t),
            r = n.filter(e => T[e] <= 1).map(h);
        if (0 === r.length) return [];
        C(n, 2);
        try {
            let t = await o.default.post({
                url: _.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                body: {
                    user_ids: r
                }
            });
            if (!Array.isArray(t.body)) return C(n, 0), [];
            let i = t.body.map(m),
                l = [];
            i.forEach(e => {
                let {
                    userId: t
                } = e;
                return l.push(t)
            });
            let a = N(e, l),
                u = r.filter(e => !l.includes(e)),
                s = N(e, u);
            return C(a, 3), C(s, 0), i
        } catch (e) {
            C(n, 0)
        }
        return []
    }
}