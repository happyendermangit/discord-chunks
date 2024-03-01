function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("424973"), n("222007"), n("808653");
    var l = n("446674"),
        i = n("913144"),
        r = n("320954"),
        u = n("379881"),
        a = n("271938"),
        d = n("42203"),
        o = n("923959"),
        s = n("305961"),
        c = n("49111");
    let f = null,
        _ = {},
        E = null;

    function A() {
        return {
            _categories: [],
            null: []
        }
    }
    let h = A();

    function v(e, t) {
        e.index = t
    }

    function L(e) {
        let t = o.default.getChannels(e),
            n = A(),
            l = e => {
                var t;
                let {
                    channel: l
                } = e, i = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                i.push({
                    channel: l,
                    index: -1
                })
            };
        return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let {
                channel: t
            } = e;
            n._categories.push({
                channel: t,
                index: -1
            }), n[t.id] = []
        }), t[0, o.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, o.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, r.default)(n._categories, n).forEach(v), _[e] = n, n
    }

    function I() {
        _ = {}, null != f && L(f)
    }

    function D(e) {
        let {
            guild: {
                id: t
            }
        } = e;
        _[t] = void 0, f === t && L(t)
    }

    function g(e) {
        let {
            channel: {
                guild_id: t
            }
        } = e;
        if (null == t) return !1;
        _[t] = void 0, f === t && L(t)
    }

    function C(e) {
        let {
            guildId: t
        } = e;
        _[t] = void 0, t === f && L(t)
    }

    function S(e, t) {
        if (E = t, null == e || null == e.getGuildId()) return !1;
        let n = e.getGuildId();
        return null != n && (_[n] = void 0, n === f && L(n), !0)
    }

    function N() {
        L(c.FAVORITES)
    }
    class m extends l.default.Store {
        initialize() {
            this.waitFor(o.default, s.default, a.default, d.default, u.default), this.syncWith([u.default], N)
        }
        getCategories(e) {
            return null != e ? function(e) {
                let t = _[e];
                return null != t ? t : L(e)
            }(e) : h
        }
    }
    m.displayName = "GuildCategoryStore";
    var p = new m(i.default, {
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e;
            if (f = null != t ? t : null, null == t || null != _[t]) return !1;
            L(t)
        },
        CONNECTION_OPEN: I,
        OVERLAY_INITIALIZE: I,
        CACHE_LOADED_LAZY: I,
        GUILD_CREATE: D,
        GUILD_UPDATE: D,
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            delete _[t]
        },
        CHANNEL_CREATE: g,
        CHANNEL_DELETE: g,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = !1;
            for (let {
                    guild_id: e
                }
                of t) null != e && (_[e] = void 0, n = !0, f === e && L(e));
            return n
        },
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            if (a.default.getId() !== n.id) return !1;
            _[t] = void 0, t === f && L(t)
        },
        CURRENT_USER_UPDATE: function() {
            if (null == f) return !1;
            L(f)
        },
        GUILD_ROLE_CREATE: C,
        GUILD_ROLE_UPDATE: C,
        GUILD_ROLE_DELETE: C,
        IMPERSONATE_UPDATE: C,
        IMPERSONATE_STOP: C,
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null == t && null != E ? S(d.default.getChannel(E), null) : S(d.default.getChannel(t), t)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    channelId: n,
                    sessionId: l
                } = t;
                return a.default.getSessionId() !== l ? e : S(d.default.getChannel(n), n) || e
            }, !1)
        }
    })
}