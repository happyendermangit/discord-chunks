function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acceptWhitelist: function() {
            return d
        },
        authorize: function() {
            return u
        },
        fetchAuthorization: function() {
            return l
        },
        fetchChannels: function() {
            return f
        },
        logoutWithRedirect: function() {
            return _
        },
        verifyUserCode: function() {
            return c
        },
        finishUserCode: function() {
            return g
        },
        finishUserCodeTwoWayLinkError: function() {
            return m
        }
    });
    var s = n("891189"),
        i = n("447669"),
        r = n("872717"),
        a = n("437822"),
        o = n("49111");

    function d(e) {
        return r.default.post({
            url: o.Endpoints.OAUTH2_WHITELIST_ACCEPT,
            query: {
                token: e
            },
            oldFormErrors: !0
        })
    }
    async function u(e) {
        let {
            authorize: t,
            clientId: n,
            scopes: s,
            responseType: i,
            redirectUri: a,
            codeChallenge: d,
            codeChallengeMethod: u,
            state: l,
            permissions: f,
            guildId: _,
            channelId: c,
            integrationType: g
        } = e, m = await r.default.post({
            url: o.Endpoints.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: i,
                redirect_uri: a,
                code_challenge: d,
                code_challenge_method: u,
                scope: s.join(" "),
                state: l
            },
            body: {
                guild_id: _,
                webhook_channel_id: null != _ && null != c ? c : void 0,
                channel_id: null == _ && null != c ? c : void 0,
                permissions: f,
                authorize: t,
                integration_type: g
            },
            oldFormErrors: !0
        });
        return m.body
    }
    async function l(e) {
        let {
            clientId: t,
            scopes: n,
            responseType: i,
            redirectUri: a,
            codeChallenge: d,
            codeChallengeMethod: u,
            state: l,
            userInstall: f
        } = e, _ = await r.default.get({
            url: o.Endpoints.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: i,
                redirect_uri: a,
                code_challenge: d,
                code_challenge_method: u,
                scope: n.join(" "),
                state: l,
                integration_type: f ? s.ApplicationIntegrationType.USER_INSTALL : s.ApplicationIntegrationType.GUILD_INSTALL
            },
            retries: 3,
            oldFormErrors: !0
        });
        return _.body
    }
    async function f(e) {
        let {
            body: t
        } = await r.default.get({
            url: o.Endpoints.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
            query: {
                guild_id: e
            },
            oldFormErrors: !0
        });
        return t
    }

    function _(e) {
        a.default.logout((0, i.getLoginPath)(e.pathname + e.search, !1))
    }
    async function c(e) {
        return await r.default.post({
            url: o.Endpoints.OAUTH2_DEVICE_VERIFY,
            body: {
                user_code: e
            }
        })
    }
    async function g(e, t) {
        return await r.default.post({
            url: o.Endpoints.OAUTH2_DEVICE_FINISH,
            body: {
                user_code: e,
                result: t
            }
        })
    }
    async function m(e, t, n) {
        return await r.default.post({
            url: o.Endpoints.OAUTH2_DEVICE_FINISH,
            body: {
                user_code: e,
                result: "two_way_link_error",
                error_code: t,
                error_source: n
            }
        })
    }
}