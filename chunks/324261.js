function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var a = n("446674"),
        i = n("913144"),
        l = n("692038"),
        d = n("42203"),
        r = n("697218"),
        u = n("449008"),
        s = n("299039");
    let o = {};

    function c(e) {
        var t;
        let n = d.default.getChannel(null == e ? void 0 : e.channel_id);
        if (null == n || !n.isForumPost()) return !1;
        let a = o[n.id];
        return s.default.compare(null == e ? void 0 : e.id, null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) > -1
    }

    function f(e, t) {
        let n = null == t ? null : (0, l.createMessageRecord)(t);
        return o[e] = {
            loaded: !0,
            message: n
        }, !0
    }

    function g(e) {
        return o[e]
    }

    function p(e) {
        var t;
        return null === (t = o[e]) || void 0 === t ? void 0 : t.message
    }

    function _(e) {
        let {
            threads: t,
            mostRecentMessages: n
        } = e;
        t.forEach(e => f(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
            f(e.channel_id, e)
        })
    }
    class m extends a.default.Store {
        initialize() {
            this.waitFor(d.default, r.default)
        }
        getMessageState(e) {
            return !(e in o) && (o[e] = {
                loaded: !1,
                message: null
            }), o[e]
        }
    }
    m.displayName = "ForumPostRecentMessageStore";
    var E = new m(i.default, {
        CONNECTION_OPEN: function() {
            o = {}
        },
        MESSAGE_CREATE: function(e) {
            if (e.isPushNotification || !c(e.message)) return !1;
            e.message.channel_id === s.default.castMessageIdAsChannelId(e.message.id) ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
        },
        MESSAGE_UPDATE: function(e) {
            if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
            ! function(e, t) {
                let n = function(e) {
                        return o[e]
                    }(e),
                    a = p(e);
                null != n && null != a && (o[e] = {
                    ...n,
                    message: (0, l.updateMessageRecord)(a, t)
                })
            }(e.message.channel_id, e.message)
        },
        MESSAGE_DELETE: function(e) {
            return function(e, t) {
                let n = p(e);
                return (null == n ? void 0 : n.id) === t && (delete o[e], !0)
            }(e.channelId, e.id)
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            for (let e in t) f(e, t[e].most_recent_message)
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: _,
        LOAD_THREADS_SUCCESS: _
    })
}