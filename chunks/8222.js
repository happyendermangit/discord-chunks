function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acceptWhitelist: function() {
            return l
        },
        authorize: function() {
            return u
        },
        fetchAuthorization: function() {
            return d
        },
        fetchChannels: function() {
            return c
        },
        logoutWithRedirect: function() {
            return _
        },
        verifyUserCode: function() {
            return f
        },
        finishUserCode: function() {
            return E
        },
        finishUserCodeTwoWayLinkError: function() {
            return h
        }
    });
    var i = n("891189"),
        s = n("447669"),
        r = n("872717"),
        a = n("437822"),
        o = n("49111");

    function l(e) {
        return r.HTTP.post({
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
            scopes: i,
            responseType: s,
            redirectUri: a,
            codeChallenge: l,
            codeChallengeMethod: u,
            state: d,
            permissions: c,
            guildId: _,
            channelId: f,
            integrationType: E
        } = e, h = await r.HTTP.post({
            url: o.Endpoints.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: s,
                redirect_uri: a,
                code_challenge: l,
                code_challenge_method: u,
                scope: i.join(" "),
                state: d
            },
            body: {
                guild_id: _,
                webhook_channel_id: null != _ && null != f ? f : void 0,
                channel_id: null == _ && null != f ? f : void 0,
                permissions: c,
                authorize: t,
                integration_type: E
            },
            oldFormErrors: !0
        });
        return h.body
    }
    async function d(e) {
        let {
            clientId: t,
            scopes: n,
            responseType: s,
            redirectUri: a,
            codeChallenge: l,
            codeChallengeMethod: u,
            state: d,
            userInstall: c
        } = e, _ = await r.HTTP.get({
            url: o.Endpoints.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: s,
                redirect_uri: a,
                code_challenge: l,
                code_challenge_method: u,
                scope: n.join(" "),
                state: d,
                integration_type: c ? i.ApplicationIntegrationType.USER_INSTALL : i.ApplicationIntegrationType.GUILD_INSTALL
            },
            retries: 3,
            oldFormErrors: !0
        });
        return _.body
    }
    async function c(e) {
        let {
            body: t
        } = await r.HTTP.get({
            url: o.Endpoints.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
            query: {
                guild_id: e
            },
            oldFormErrors: !0
        });
        return t
    }

    function _(e) {
        a.default.logout((0, s.getLoginPath)(e.pathname + e.search, !1))
    }
    async function f(e) {
        return await r.HTTP.post({
            url: o.Endpoints.OAUTH2_DEVICE_VERIFY,
            body: {
                user_code: e
            }
        })
    }
    async function E(e, t) {
        return await r.HTTP.post({
            url: o.Endpoints.OAUTH2_DEVICE_FINISH,
            body: {
                user_code: e,
                result: t
            }
        })
    }
    async function h(e, t, n) {
        return await r.HTTP.post({
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