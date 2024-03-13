function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    }), n("222007"), n("424973");
    var i = n("102053"),
        s = n("446674"),
        r = n("913144"),
        a = n("802493"),
        o = n("595525"),
        l = n("212084"),
        u = n("867805"),
        d = n("267567"),
        c = n("778689"),
        f = n("305961"),
        _ = n("718517"),
        h = n("161585"),
        E = n("24373");
    let g = 2,
        m = new Map,
        p = new Map,
        S = null,
        v = [],
        T = null,
        I = !1,
        C = new Map,
        A = (e, t) => {
            C = new Map(C.set(e, t))
        },
        y = _.default.Millis.HOUR,
        N = async () => {
            if (0 !== g) return;
            let e = a.default.database();
            if (null == e) return;
            g = 2;
            let t = await (0, o.tryLoadOrResetCacheGatewayAsync)("StickerStore.loadSavedGuildStickers", () => i.default.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => l.default.getAsync(e)));
            null != t && r.default.dispatch({
                type: "CACHED_STICKERS_LOADED",
                stickers: t
            })
        }, R = function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            p.set(e.id, e), t && O(e, n)
        }, O = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (null == S) return;
            let {
                tags: n
            } = e, i = {
                type: h.StickerMetadataTypes.STICKER_NAME,
                value: e.name.trim().toLocaleLowerCase()
            };
            if ((0, E.isStandardSticker)(e)) {
                let t = v.find(t => t.id === e.pack_id),
                    s = [i, ...(null != n ? n : "").split(",").map(e => ({
                        type: h.StickerMetadataTypes.TAG,
                        value: e.trim().toLocaleLowerCase()
                    }))];
                null != t && s.push({
                    type: h.StickerMetadataTypes.PACK_NAME,
                    value: t.name
                }), S.set(e.id, s)
            } else if ((0, E.isGuildSticker)(e) && null != n) {
                let s = u.default.getByName(n),
                    r = {
                        type: h.StickerMetadataTypes.TAG,
                        value: n.trim().toLocaleLowerCase()
                    },
                    a = [i, r];
                if (null != t) {
                    let e = t.name.trim().toLocaleLowerCase();
                    null != e && "" !== e && a.push({
                        type: h.StickerMetadataTypes.GUILD_NAME,
                        value: e
                    })
                }
                if (null == s) {
                    S.set(e.id, a);
                    return
                }
                a.push({
                    type: h.StickerMetadataTypes.CORRELATED_EMOJI,
                    value: s.surrogates
                }), s.forEachDiversity(e => a.push({
                    type: h.StickerMetadataTypes.CORRELATED_EMOJI,
                    value: e.surrogates
                })), S.set(e.id, a)
            }
        }, D = (e, t, n) => {
            m.set(e.id, e);
            let i = [...v];
            if (t) {
                let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), v = i
            }(t || n) && e.stickers.forEach(e => R(e))
        }, P = () => {
            C.forEach((e, t) => {
                let n = f.default.getGuild(t);
                null != n && e.forEach(e => O(e, n))
            }), v.forEach(e => {
                e.stickers.forEach(e => O(e))
            })
        };

    function M(e) {
        let t = f.default.getGuild(e.id);
        null != t && null != e.stickers && (e.stickers.forEach(e => R(e, !0, t)), A(t.id, e.stickers))
    }
    class L extends s.default.Store {
        initialize() {
            this.waitFor(a.default, c.default, f.default)
        }
        get isLoaded() {
            return 0 !== g
        }
        get loadState() {
            return g
        }
        get stickerMetadata() {
            return N(), null == S && (S = new Map, P()), S
        }
        get hasLoadedStickerPacks() {
            return null != T && T + y > Date.now()
        }
        get isFetchingStickerPacks() {
            return I
        }
        getStickerById(e) {
            return !p.has(e) && N(), p.get(e)
        }
        getStickerPack(e) {
            return m.get(e)
        }
        getPremiumPacks() {
            return v
        }
        isPremiumPack(e) {
            return v.some(t => t.id === e)
        }
        getRawStickersByGuild() {
            return C
        }
        getAllStickersIterator() {
            return N(), p.values()
        }
        getAllGuildStickers() {
            return N(), C
        }
        getStickersByGuildId(e) {
            return N(), C.get(e)
        }
    }
    L.displayName = "StickersStore";
    var b = new L(r.default, {
        BACKGROUND_SYNC: () => {
            S = null, p = new Map, C = new Map, g = 0
        },
        CONNECTION_OPEN: e => {
            let {
                guilds: t
            } = e;
            S = null, p = new Map, C = new Map, t.forEach(M), g = t.every(e => null != e.stickers) ? 1 : 0
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            !d.default.isLurking(t.id) && (M(t), 1 === g && null == t.stickers && null != t.stickerUpdates && (g = 0))
        },
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e, i = null !== (t = C.get(n.id)) && void 0 !== t ? t : [];
            i.forEach(e => {
                null != S && S.delete(e.id), p.delete(e.id)
            }), C.delete(n.id), C = new Map(C)
        },
        LOGOUT: () => {
            g = 0, v = [], p.clear(), m.clear(), S = null, C.clear(), C = new Map(C), I = !1, T = null
        },
        STICKER_PACKS_FETCH_START: () => {
            I = !0
        },
        STICKER_PACKS_FETCH_SUCCESS: e => {
            let {
                packs: t
            } = e;
            t.forEach(e => D(e, !0)), T = Date.now(), I = !1
        },
        STICKER_PACK_FETCH_SUCCESS: e => {
            let {
                pack: t,
                ingestStickers: n
            } = e;
            D(t, !1, n)
        },
        GUILD_STICKERS_FETCH_SUCCESS: e => {
            let {
                guildId: t,
                stickers: n
            } = e;
            n.forEach(e => R(e)), A(t, n)
        },
        GUILD_STICKERS_CREATE_SUCCESS: e => {
            var t, n;
            let {
                guildId: i,
                sticker: s
            } = e, r = null !== (t = C.get(i)) && void 0 !== t ? t : [];
            A(i, [...null !== (n = r.filter(e => e.id !== s.id)) && void 0 !== n ? n : [], s]), R(s)
        },
        STICKER_FETCH_SUCCESS: e => {
            let {
                sticker: t
            } = e;
            R(t, !1)
        },
        GUILD_STICKERS_UPDATE: e => {
            var t;
            let {
                guildId: n,
                stickers: i
            } = e, s = e => {
                let t;
                let n = p.get(e.id);
                return null != n && (0, E.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                    ...e,
                    user: t
                }
            }, r = null !== (t = C.get(n)) && void 0 !== t ? t : [], a = r.filter(e => null == i.find(t => t.id === e.id));
            a.forEach(e => {
                p.delete(e.id), null != S && S.delete(e.id)
            });
            let o = i.map(e => s(e));
            o.forEach(e => R(e)), A(n, o)
        },
        CACHED_STICKERS_LOADED: function(e) {
            let {
                stickers: t
            } = e;
            for (let [e, n] of t)
                if (c.default.isMember(e) && !C.has(e)) {
                    let t = f.default.getGuild(e);
                    for (let e of n) R(e, !0, t);
                    A(e, n)
                }
        }
    })
}