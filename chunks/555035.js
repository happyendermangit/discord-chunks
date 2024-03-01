function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007"), n("808653");
    var s = n("446674"),
        i = n("913144"),
        r = n("49111"),
        a = n("353927");
    let o = null,
        d = null,
        u = {};

    function l(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            s = u[e];
        if (null == s) return;
        let i = s[null != t ? t : r.NULL_STRING_GUILD_ID];
        if (null != i) {
            for (let e of Object.values(a.MediaEngineContextTypes))(n === e || null == n) && delete i[e];
            u[e][null != t ? t : r.NULL_STRING_GUILD_ID] = i
        }
    }
    class f extends s.default.Store {
        getStreamId(e, t) {
            var n, s, i;
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.MediaEngineContextTypes.DEFAULT;
            return null === (i = u[e]) || void 0 === i ? void 0 : null === (s = i[null != t ? t : r.NULL_STRING_GUILD_ID]) || void 0 === s ? void 0 : null === (n = s[o]) || void 0 === n ? void 0 : n.streamId
        }
        getUserStreamData(e, t) {
            var n, s;
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.MediaEngineContextTypes.DEFAULT;
            return null === (s = u[e]) || void 0 === s ? void 0 : null === (n = s[null != t ? t : r.NULL_STRING_GUILD_ID]) || void 0 === n ? void 0 : n[i]
        }
    }
    f.displayName = "VideoStreamStore";
    var _ = new f(i.default, {
        CONNECTION_OPEN: function(e) {
            let {
                user: t,
                sessionId: n
            } = e;
            o = t.id, d = n
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                user: t,
                sessionId: n
            } = e;
            o = t.id, d = n
        },
        RTC_CONNECTION_VIDEO: function(e) {
            let {
                userId: t,
                guildId: n,
                streamId: s,
                context: i
            } = e;
            null != s ? ! function(e, t, n, s) {
                var i;
                !(e in u) && (u[e] = {});
                let a = null !== (i = u[e][null != t ? t : r.NULL_STRING_GUILD_ID]) && void 0 !== i ? i : {};
                u[e][null != t ? t : r.NULL_STRING_GUILD_ID] = {
                    ...a,
                    [s]: {
                        streamId: n
                    }
                }
            }(t, n, s, i) : l(t, n, i)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                var n;
                let {
                    userId: s,
                    sessionId: i,
                    channelId: a,
                    guildId: f
                } = t;
                if (null == a && s === o) {
                    if (i !== d) return e;
                    u = {}
                } else {
                    if (null != a || (null === (n = u[s]) || void 0 === n ? void 0 : n[null != f ? f : r.NULL_STRING_GUILD_ID]) == null) return e;
                    l(s, f)
                }
                return !0
            }, !1)
        }
    })
}