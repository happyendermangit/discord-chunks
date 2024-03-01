function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FEATURE_EXPIRES_SECONDS: function() {
            return I
        },
        isGuildFeedFeaturedItem: function() {
            return F
        },
        createGuildFeedItemFromServer: function() {
            return S
        },
        isChannelAvailableInGuildFeed: function() {
            return T
        },
        isMessageAvailableInGuildFeed: function() {
            return g
        },
        createFeatureItemsTimeLabel: function() {
            return G
        },
        getFeatureItemsTimes: function() {
            return A
        },
        getSidebarMessageId: function() {
            return D
        },
        getChannelIdForItem: function() {
            return M
        }
    });
    var d = n("917351"),
        i = n.n(d),
        l = n("611221"),
        r = n("637612"),
        u = n("692038"),
        s = n("233069"),
        a = n("449008"),
        E = n("299039"),
        o = n("2804"),
        c = n("724210"),
        _ = n("782340");
    let I = {
        ONE_DAY: 86400,
        THREE_DAYS: 259200,
        SEVEN_DAYS: 604800
    };

    function f(e) {
        return {
            entityId: e.entity_id,
            entityType: e.entity_type,
            guildId: e.guild_id,
            details: {
                actorUserId: e.details.actor_user_id,
                expiresAt: new Date(e.details.expires_at)
            }
        }
    }

    function m(e) {
        return null != e.featured_item || !1
    }

    function F(e) {
        return null != e.featuredItem || !1
    }

    function S(e, t) {
        var n, d, r, a, E, c, _;
        switch (e.type) {
            case l.GuildFeedItemTypes.FORUM_POST: {
                let i = (0, u.createMessageRecord)(e.message),
                    r = (0, s.createChannelRecordFromServer)(e.thread),
                    a = {
                        type: l.GuildFeedItemTypes.FORUM_POST,
                        id: (0, o.default)(e),
                        sortIndex: t,
                        message: i,
                        thread: r,
                        featured: null !== (n = e.featured) && void 0 !== n && n,
                        highlighted: null !== (d = e.highlighted) && void 0 !== d && d,
                        seen: e.seen,
                        unreadMention: !1
                    };
                return m(e) && (a = {
                    ...a,
                    featuredItem: f(e.featured_item)
                }), a
            }
            case l.GuildFeedItemTypes.MESSAGE:
                let I = (0, u.createMessageRecord)(e.message),
                    F = i.map(e.reference_messages, e => (0, u.createMessageRecord)(e)),
                    S = {
                        type: l.GuildFeedItemTypes.MESSAGE,
                        id: (0, o.default)(e),
                        sortIndex: t,
                        message: I,
                        referenceMessages: F,
                        featured: null !== (r = e.featured) && void 0 !== r && r,
                        highlighted: null !== (a = e.highlighted) && void 0 !== a && a,
                        unreadMention: null !== (E = e.unread_mention) && void 0 !== E && E,
                        seen: e.seen
                    };
                return m(e) && (S = {
                    ...S,
                    featuredItem: f(e.featured_item)
                }), S;
            case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                let T = e.messages.map(e => ({
                    message: (0, u.createMessageRecord)(e.message),
                    referenceMessages: e.reference_messages.map(e => (0, u.createMessageRecord)(e))
                }));
                return {
                    type: l.GuildFeedItemTypes.MESSAGE_BUNDLE, id: e.id, sortIndex: t, messages: T, featured: !1, highlighted: !1, unreadMention: null !== (c = e.unread_mention) && void 0 !== c && c, seen: e.seen
                };
            case l.GuildFeedItemTypes.CONVERSATION:
                let g = function e(t) {
                    let n = t.messages.map(e => (0, u.createMessageRecord)(e.message));
                    return {
                        id: t.id,
                        type: t.type,
                        messages: n,
                        children: t.children.map(t => e(t))
                    }
                }(e.root);
                return {
                    type: l.GuildFeedItemTypes.CONVERSATION, id: e.id, sortIndex: t, root: g, featured: !1, highlighted: !1, unreadMention: null !== (_ = e.unread_mention) && void 0 !== _ && _, seen: e.seen
                };
            default:
                return null
        }
    }

    function T(e) {
        return !(e.hasFlag(c.ChannelFlags.GUILD_FEED_REMOVED) || e.isNSFW()) && !0
    }

    function g(e) {
        return !!r.MessageTypesSets.AVAILABLE_IN_GUILD_FEED.has(e.type) || !1
    }
    let G = e => _.default.Messages.GUILD_FEED_FEATURE_ITEM_MENU_ITEM_TEXT.format({
            timePeriod: e
        }),
        A = () => [{
            value: I.ONE_DAY,
            timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_24_HOURS
        }, {
            value: I.THREE_DAYS,
            timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_THREE_DAYS
        }, {
            value: I.SEVEN_DAYS,
            timePeriod: _.default.Messages.GUILD_FEED_FEATURE_ITEM_SEVEN_DAYS
        }],
        D = (e, t) => null != t && t.isThread() ? E.default.castChannelIdAsMessageId(t.id) : null != e && "details" in e && null != e.details && "initialMessageId" in e.details ? e.details.initialMessageId : null;

    function M(e) {
        switch (e.type) {
            case l.GuildFeedItemTypes.MESSAGE:
            case l.GuildFeedItemTypes.FORUM_POST:
                return e.message.channel_id;
            case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                return e.messages[0].message.channel_id;
            case l.GuildFeedItemTypes.CONVERSATION:
                return e.root.messages[0].channel_id;
            default:
                (0, a.assertNever)(e)
        }
    }
}