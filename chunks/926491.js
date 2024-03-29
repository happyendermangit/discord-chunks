function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r, s, a, o = n("956067"),
        l = n("442837"),
        u = n("570140"),
        d = n("287328"),
        _ = n("86670"),
        c = n("856472"),
        E = n("633302"),
        I = n("41776"),
        T = n("93093"),
        f = n("430824"),
        S = n("70956"),
        h = n("373228"),
        A = n("378233");
    let m = 2,
        N = new Map,
        O = new Map,
        p = null,
        R = [],
        C = null,
        g = !1,
        L = new Map,
        D = (e, t) => {
            L = new Map(L.set(e, t))
        },
        v = S.default.Millis.HOUR,
        M = async () => {
            if (0 !== m) return;
            let e = d.default.database();
            if (null == e) return;
            m = 2;
            let t = await (0, _.tryLoadOrResetCacheGatewayAsync)("StickerStore.loadSavedGuildStickers", () => o.default.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getAsync(e)));
            null != t && u.default.dispatch({
                type: "CACHED_STICKERS_LOADED",
                stickers: t
            })
        }, y = function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            O.set(e.id, e), t && P(e, n)
        }, P = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (null == p) return;
            let {
                tags: n
            } = e, i = {
                type: h.StickerMetadataTypes.STICKER_NAME,
                value: e.name.trim().toLocaleLowerCase()
            };
            if ((0, A.isStandardSticker)(e)) {
                let t = R.find(t => t.id === e.pack_id),
                    r = [i, ...(null != n ? n : "").split(",").map(e => ({
                        type: h.StickerMetadataTypes.TAG,
                        value: e.trim().toLocaleLowerCase()
                    }))];
                null != t && r.push({
                    type: h.StickerMetadataTypes.PACK_NAME,
                    value: t.name
                }), p.set(e.id, r)
            } else if ((0, A.isGuildSticker)(e) && null != n) {
                let r = E.default.getByName(n),
                    s = [i, {
                        type: h.StickerMetadataTypes.TAG,
                        value: n.trim().toLocaleLowerCase()
                    }];
                if (null != t) {
                    let e = t.name.trim().toLocaleLowerCase();
                    null != e && "" !== e && s.push({
                        type: h.StickerMetadataTypes.GUILD_NAME,
                        value: e
                    })
                }
                if (null == r) {
                    p.set(e.id, s);
                    return
                }
                s.push({
                    type: h.StickerMetadataTypes.CORRELATED_EMOJI,
                    value: r.surrogates
                }), r.forEachDiversity(e => s.push({
                    type: h.StickerMetadataTypes.CORRELATED_EMOJI,
                    value: e.surrogates
                })), p.set(e.id, s)
            }
        }, U = (e, t, n) => {
            N.set(e.id, e);
            let i = [...R];
            if (t) {
                let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), R = i
            }(t || n) && e.stickers.forEach(e => y(e))
        }, b = () => {
            L.forEach((e, t) => {
                let n = f.default.getGuild(t);
                null != n && e.forEach(e => P(e, n))
            }), R.forEach(e => {
                e.stickers.forEach(e => P(e))
            })
        };

    function G(e) {
        let t = f.default.getGuild(e.id);
        null != t && null != e.stickers && (e.stickers.forEach(e => y(e, !0, t)), D(t.id, e.stickers))
    }
    class w extends(i = l.default.Store) {
        initialize() {
            this.waitFor(d.default, T.default, f.default)
        }
        get isLoaded() {
            return 0 !== m
        }
        get loadState() {
            return m
        }
        get stickerMetadata() {
            return M(), null == p && (p = new Map, b()), p
        }
        get hasLoadedStickerPacks() {
            return null != C && C + v > Date.now()
        }
        get isFetchingStickerPacks() {
            return g
        }
        getStickerById(e) {
            return !O.has(e) && M(), O.get(e)
        }
        getStickerPack(e) {
            return N.get(e)
        }
        getPremiumPacks() {
            return R
        }
        isPremiumPack(e) {
            return R.some(t => t.id === e)
        }
        getRawStickersByGuild() {
            return L
        }
        getAllStickersIterator() {
            return M(), O.values()
        }
        getAllGuildStickers() {
            return M(), L
        }
        getStickersByGuildId(e) {
            return M(), L.get(e)
        }
    }
    a = "StickersStore", (s = "displayName") in(r = w) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new w(u.default, {
        BACKGROUND_SYNC: () => {
            p = null, O = new Map, L = new Map, m = 0
        },
        CONNECTION_OPEN: e => {
            let {
                guilds: t
            } = e;
            p = null, O = new Map, L = new Map, t.forEach(G), m = t.every(e => null != e.stickers) ? 1 : 0
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            !I.default.isLurking(t.id) && (G(t), 1 === m && null == t.stickers && null != t.stickerUpdates && (m = 0))
        },
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e;
            (null !== (t = L.get(n.id)) && void 0 !== t ? t : []).forEach(e => {
                null != p && p.delete(e.id), O.delete(e.id)
            }), L.delete(n.id), L = new Map(L)
        },
        LOGOUT: () => {
            m = 0, R = [], O.clear(), N.clear(), p = null, L.clear(), L = new Map(L), g = !1, C = null
        },
        STICKER_PACKS_FETCH_START: () => {
            g = !0
        },
        STICKER_PACKS_FETCH_SUCCESS: e => {
            let {
                packs: t
            } = e;
            t.forEach(e => U(e, !0)), C = Date.now(), g = !1
        },
        STICKER_PACK_FETCH_SUCCESS: e => {
            let {
                pack: t,
                ingestStickers: n
            } = e;
            U(t, !1, n)
        },
        GUILD_STICKERS_FETCH_SUCCESS: e => {
            let {
                guildId: t,
                stickers: n
            } = e;
            n.forEach(e => y(e)), D(t, n)
        },
        GUILD_STICKERS_CREATE_SUCCESS: e => {
            var t, n;
            let {
                guildId: i,
                sticker: r
            } = e, s = null !== (t = L.get(i)) && void 0 !== t ? t : [];
            D(i, [...null !== (n = s.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), y(r)
        },
        STICKER_FETCH_SUCCESS: e => {
            let {
                sticker: t
            } = e;
            y(t, !1)
        },
        GUILD_STICKERS_UPDATE: e => {
            var t;
            let {
                guildId: n,
                stickers: i
            } = e, r = e => {
                let t;
                let n = O.get(e.id);
                return null != n && (0, A.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                    ...e,
                    user: t
                }
            };
            (null !== (t = L.get(n)) && void 0 !== t ? t : []).filter(e => null == i.find(t => t.id === e.id)).forEach(e => {
                O.delete(e.id), null != p && p.delete(e.id)
            });
            let s = i.map(e => r(e));
            s.forEach(e => y(e)), D(n, s)
        },
        CACHED_STICKERS_LOADED: function(e) {
            let {
                stickers: t
            } = e;
            for (let [e, n] of t)
                if (T.default.isMember(e) && !L.has(e)) {
                    let t = f.default.getGuild(e);
                    for (let e of n) y(e, !0, t);
                    D(e, n)
                }
        }
    })
}