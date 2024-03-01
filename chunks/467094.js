function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        fetchStickerPack: function() {
            return k
        },
        fetchStickerPacks: function() {
            return C
        },
        fetchSticker: function() {
            return v
        },
        fetchGuildStickers: function() {
            return g
        },
        deleteGuildSticker: function() {
            return y
        },
        createGuildSticker: function() {
            return _
        },
        updateGuildSticker: function() {
            return R
        },
        addStickerPreview: function() {
            return T
        },
        clearStickerPreview: function() {
            return L
        },
        favoriteSticker: function() {
            return A
        },
        unfavoriteSticker: function() {
            return P
        }
    }), i("424973");
    var r = i("917351"),
        n = i.n(r),
        s = i("872717"),
        l = i("913144"),
        a = i("404118"),
        u = i("619443"),
        c = i("915639"),
        d = i("872173"),
        o = i("766274"),
        f = i("341542"),
        S = i("697218"),
        h = i("271560"),
        m = i("364685"),
        E = i("49111"),
        p = i("397336"),
        I = i("782340");
    let k = async (e, t) => {
        let {
            body: i
        } = await (0, h.httpGetWithCountryCodeQuery)(E.Endpoints.STICKER_PACK(e));
        return l.default.dispatch({
            type: "STICKER_PACK_FETCH_SUCCESS",
            packId: e,
            pack: i,
            ingestStickers: t
        }), i
    }, C = async function() {
        let {
            locale: e = c.default.locale
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (m.default.isFetchingStickerPacks || m.default.hasLoadedStickerPacks) return;
        l.default.wait(() => {
            l.default.dispatch({
                type: "STICKER_PACKS_FETCH_START"
            })
        });
        let {
            body: {
                sticker_packs: t
            }
        } = await s.default.get({
            url: E.Endpoints.STICKER_PACKS,
            query: {
                locale: e
            }
        });
        l.default.dispatch({
            type: "STICKER_PACKS_FETCH_SUCCESS",
            packs: t
        })
    }, v = async e => {
        let {
            body: t
        } = await s.default.get({
            url: E.Endpoints.STICKER(e)
        });
        l.default.dispatch({
            type: "STICKER_FETCH_SUCCESS",
            sticker: t
        })
    }, g = async e => {
        let {
            body: t
        } = await s.default.get({
            url: E.Endpoints.GUILD_STICKER_PACKS(e)
        });
        l.default.dispatch({
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: e,
            stickers: t.map(e => null != e.user ? {
                ...e,
                user: new o.default(e.user)
            } : e)
        })
    }, y = async e => {
        await s.default.delete({
            url: E.Endpoints.GUILD_STICKER(e.guild_id, e.id)
        })
    }, _ = async (e, t) => {
        let i = await s.default.post({
            url: E.Endpoints.GUILD_STICKER_PACKS(e),
            body: t
        });
        return l.default.dispatch({
            type: "GUILD_STICKERS_CREATE_SUCCESS",
            guildId: e,
            sticker: {
                ...i.body,
                user: S.default.getCurrentUser()
            }
        }), i.body
    }, R = async (e, t, i) => {
        let r = await s.default.patch({
            url: E.Endpoints.GUILD_STICKER(e, t),
            body: i
        });
        return r.body
    };

    function T(e, t, i) {
        l.default.dispatch({
            type: "ADD_STICKER_PREVIEW",
            channelId: e,
            sticker: t,
            draftType: i
        })
    }

    function L(e, t) {
        l.default.dispatch({
            type: "CLEAR_STICKER_PREVIEW",
            channelId: e,
            draftType: t
        })
    }

    function x(e) {
        return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != m.default.getStickerById(e))
    }

    function A(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = x(t.stickerIds), n.size(t.stickerIds) >= p.MAX_FAVORITES) ? (a.default.show({
            title: I.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
            body: I.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                count: p.MAX_FAVORITES
            })
        }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), p.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function P(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
            t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = x(t.stickerIds)
        }, p.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}