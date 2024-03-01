function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var i = n("917351"),
        r = n.n(i),
        s = n("446674"),
        a = n("913144"),
        o = n("299039"),
        l = n("697218"),
        u = n("49111");
    let c = {},
        d = {},
        f = {},
        E = 0,
        p = 0,
        h = 0,
        _ = 0;

    function S() {
        let e = Object.values(c);
        _ = e.length;
        let {
            [u.RelationshipTypes.PENDING_INCOMING]: t = 0, [u.RelationshipTypes.PENDING_OUTGOING]: n = 0, [u.RelationshipTypes.FRIEND]: i = 0
        } = r.countBy(Object.values(c), e => e);
        E = t, p = n, h = i
    }
    class m extends s.default.Store {
        initialize() {
            this.waitFor(l.default)
        }
        isFriend(e) {
            return c[e] === u.RelationshipTypes.FRIEND
        }
        isBlocked(e) {
            return c[e] === u.RelationshipTypes.BLOCKED
        }
        getPendingCount() {
            return E
        }
        getOutgoingCount() {
            return p
        }
        getFriendCount() {
            return h
        }
        getRelationshipCount() {
            return _
        }
        getRelationships() {
            return c
        }
        getRelationshipType(e) {
            let t = c[e];
            return null != t ? t : u.RelationshipTypes.NONE
        }
        getNickname(e) {
            let t = d[e];
            return t
        }
        getSince(e) {
            return f[e]
        }
        getSinces() {
            return f
        }
        getFriendIDs() {
            return o.default.keys(c).filter(e => c[e] === u.RelationshipTypes.FRIEND)
        }
    }
    m.displayName = "RelationshipStore";
    var T = new m(a.default, {
        CONNECTION_OPEN: function(e) {
            c = {}, d = {}, f = {}, e.relationships.forEach(e => {
                c[e.id] = e.type, null != e.nickname && (d[e.id] = e.nickname), null != e.since && (f[e.id] = e.since)
            }), S()
        },
        OVERLAY_INITIALIZE: function(e) {
            c = {
                ...e.relationships
            }, S()
        },
        RELATIONSHIP_ADD: function(e) {
            let t = c[e.relationship.id];
            c = {
                ...c,
                [e.relationship.id]: e.relationship.type
            }, null != e.relationship.nickname && (d = {
                ...d,
                [e.relationship.id]: e.relationship.nickname
            }), null != e.relationship.since && (f = {
                ...f,
                [e.relationship.id]: e.relationship.since
            }), S(), e.relationship.type === u.RelationshipTypes.FRIEND && t === u.RelationshipTypes.PENDING_OUTGOING && a.default.dispatch({
                type: "FRIEND_REQUEST_ACCEPTED",
                user: e.relationship.user
            })
        },
        RELATIONSHIP_REMOVE: function(e) {
            c = {
                ...c
            }, delete c[e.relationship.id], null != d[e.relationship.id] && (d = {
                ...d
            }, delete d[e.relationship.id]), null != f[e.relationship.id] && (f = {
                ...f
            }, delete f[e.relationship.id]), S()
        },
        RELATIONSHIP_UPDATE: function(e) {
            null == e.relationship.since ? delete f[e.relationship.id] : f[e.relationship.id] = e.relationship.since, null == e.relationship.nickname ? delete d[e.relationship.id] : d[e.relationship.id] = e.relationship.nickname
        },
        RELATIONSHIP_PENDING_INCOMING_REMOVED: function(e) {
            c = {
                ...c
            }, o.default.keys(c).forEach(e => {
                c[e] === u.RelationshipTypes.PENDING_INCOMING && delete c[e]
            }), S()
        }
    })
}