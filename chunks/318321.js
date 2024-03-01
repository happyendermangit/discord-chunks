function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getForumChannelSessionId: function() {
            return p
        },
        convertSortOrderToReadableString: function() {
            return S
        },
        getForumPostDraftNumAttachments: function() {
            return M
        },
        getForumPostDraftAppliedTagIds: function() {
            return N
        },
        getNumActiveThreads: function() {
            return v
        },
        collectForumAnalyticsMetadata: function() {
            return O
        },
        collectForumPostAnalyticsMetadata: function() {
            return I
        }
    }), n("70102"), n("222007"), n("808653");
    var i = n("335710"),
        a = n("689275"),
        l = n("755624"),
        s = n("800843"),
        r = n("610730"),
        u = n("42203"),
        d = n("474643"),
        o = n("957255"),
        c = n("585722"),
        _ = n("299039"),
        f = n("430475"),
        h = n("446480"),
        E = n("589641"),
        g = n("369814"),
        m = n("49111"),
        A = n("724210"),
        T = n("648564");

    function p(e) {
        return g.default.getForumChannelSessionId(e)
    }

    function S(e) {
        switch (e) {
            case i.ThreadSortOrder.CREATION_DATE:
                return T.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
            case i.ThreadSortOrder.LATEST_ACTIVITY:
                return T.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
            default:
                throw Error("Unexpected sort order ".concat(e))
        }
    }

    function M(e) {
        return c.default.getUploads(e, d.DraftType.FirstThreadMessage).length
    }

    function N(e) {
        var t, n;
        let i = u.default.getChannel(e);
        if (null == i) return [];
        let a = u.default.getChannel(i.parent_id),
            l = null == a ? void 0 : a.availableTags;
        if (null == a || null == l) return [];
        let s = null !== (n = null === (t = d.default.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
            r = new Set(l.map(e => e.id));
        return Array.from(s).filter(e => r.has(e))
    }

    function v(e, t) {
        return Object.keys(a.default.getThreadsForParent(e, t)).length
    }

    function C(e) {
        let {
            loaded: t,
            firstMessage: n
        } = f.default.getMessage(e);
        return t ? n : null
    }

    function O(e) {
        var t, n, i, a;
        let {
            channelId: l,
            sessionId: s
        } = e, r = u.default.getChannel(l);
        return null != r && r.isForumLikeChannel() ? {
            forum_channel_has_guidelines: null != r.topic && r.topic.trim().length > 0,
            forum_channel_default_emoji_reaction_id: null === (t = r.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
            forum_channel_default_emoji_reaction_name: null === (n = r.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
            forum_channel_available_tag_ids: null !== (a = null === (i = r.availableTags) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== a ? a : [],
            forum_channel_tag_required: r.hasFlag(A.ChannelFlags.REQUIRE_TAG),
            forum_channel_can_create_post: o.default.can(m.Permissions.SEND_MESSAGES, r),
            forum_channel_filter_tag_ids: h.default.getFilterTagIdsAnalytics(),
            forum_channel_sort_order: h.default.getSortOrderAnalytics(r.id),
            forum_channel_session_id: null != s ? s : p(r.id),
            forum_channel_layout: h.default.getLayoutAnalytics(r.id),
            forum_channel_default_sort_order: r.defaultSortOrder,
            forum_channel_default_layout: r.defaultForumLayout
        } : null
    }

    function I(e) {
        var t, n, i, a, d, o, c;
        let {
            channelId: f,
            sessionId: h
        } = e, g = u.default.getChannel(f);
        if (null == g || !g.isForumPost()) return null;
        let m = u.default.getChannel(g.parent_id);
        return null != m && m.isForumLikeChannel() ? {
            ...O({
                channelId: m.id,
                sessionId: h
            }),
            thread_approximate_member_count: s.default.getMemberCount(f),
            thread_approximate_message_count: r.default.getCount(f),
            thread_archived: (null === (t = g.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
            thread_locked: null !== (o = null === (n = g.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== o && o,
            thread_auto_archive_duration_minutes: null !== (c = null === (i = g.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== c ? c : 0,
            thread_approximate_creation_date: _.default.extractTimestamp(f),
            forum_post_id: g.id,
            forum_post_first_message_id: _.default.castChannelIdAsMessageId(g.id),
            forum_post_num_reactions: function(e) {
                let t = C(e);
                return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
            }(g.id),
            forum_post_num_unique_reactions: function(e) {
                let t = C(e);
                return null == t ? 0 : t.reactions.length
            }(g.id),
            forum_post_applied_tag_ids: function(e) {
                var t, n;
                let i = u.default.getChannel(e);
                if (null == i) return [];
                let a = u.default.getChannel(i.parent_id),
                    l = null == a ? void 0 : a.availableTags;
                if (null == a || null == l) return [];
                let s = new Set(l.map(e => e.id));
                return null !== (n = null === (t = i.appliedTags) || void 0 === t ? void 0 : t.filter(e => s.has(e))) && void 0 !== n ? n : []
            }(g.id),
            forum_post_is_pinned: g.hasFlag(A.ChannelFlags.PINNED),
            forum_post_is_new: null === (a = E.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === a ? void 0 : a.isNew,
            forum_post_is_unread: null === (d = E.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === d ? void 0 : d.hasUnreads,
            forum_post_is_following: l.default.hasJoined(g.id),
            forum_post_attachment_mimetypes: function(e) {
                let t = C(e);
                return null == t ? [] : t.attachments.map(e => {
                    var t;
                    return null !== (t = e.content_type) && void 0 !== t ? t : "unknown"
                })
            }(g.id)
        } : null
    }
}