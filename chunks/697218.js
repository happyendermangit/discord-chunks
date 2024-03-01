function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        users: function() {
            return _
        },
        ASSISTANT_WUMPUS_VOICE_USER: function() {
            return m
        },
        transformUser: function() {
            return g
        },
        mergeUser: function() {
            return C
        },
        default: function() {
            return eO
        }
    }), n("222007"), n("702976"), n("808653"), n("581081"), n("424973");
    var i = n("917351"),
        r = n("234251"),
        s = n("560208"),
        a = n("400205"),
        o = n("946028"),
        l = n("517001"),
        u = n("766274"),
        c = n("568734"),
        d = n("449008"),
        f = n("271938"),
        E = n("455079"),
        p = n("49111"),
        h = n("646718");
    let _ = {},
        S = 0,
        m = "47835198259242069";

    function T(e, t, n) {
        let i = e;
        i = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), _[e.id] = i;
        let r = e !== i;
        return r && S++, r
    }

    function g(e) {
        let t = e.mfa_enabled;
        null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
        let n = (0, l.getPremiumTypeFromRawValue)(e.premium_type);
        void 0 !== n && (e.premiumType = n, delete e.premium_type);
        let i = e.nsfw_allowed;
        null != i && (e.nsfwAllowed = i, delete e.nsfw_allowed);
        let s = e.public_flags;
        null != s && (e.publicFlags = s, delete e.public_flags);
        let a = e.purchased_flags;
        void 0 !== a && (e.purchasedFlags = a, delete e.purchased_flags);
        let o = e.premium_usage_flags;
        void 0 !== o && (e.premiumUsageFlags = o, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
        let u = e.avatar_decoration_data;
        void 0 !== u && (e.avatarDecorationData = (0, r.parseAvatarDecorationData)(u), delete e.avatar_decoration_data);
        let c = e.global_name;
        return void 0 !== c && (e.globalName = c, delete e.global_name), e
    }

    function I(e) {
        return e.id !== f.default.getId()
    }

    function C(e) {
        let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = _[e.id],
            r = void 0 !== e.id && e.id === f.default.getId();
        if (null == i) void 0 !== (t = (i = new u.default(e)).premiumType) && r && (i.premiumType = v((0, l.isStaffEnv)(i), i.premiumType));
        else if (n) {
            var s;
            let n = g(e);
            void 0 !== (t = null !== (s = n.premium_type) && void 0 !== s ? s : n.premiumType) && r && (0, l.isStaffEnvRawData)(n) && (n = function(e) {
                var t;
                let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
                    i = v((0, l.isStaffEnvRawData)(e), n);
                return void 0 !== e.premiumType ? e.premiumType = i : void 0 !== e.premium_type && (e.premium_type = i), e
            }(n)), i = i.merge(n)
        }(0, l.validatePremiumType)((0, l.isStaffEnv)(i), t, i.premiumType);
        let a = _[e.id] !== i;
        return _[e.id] = i, a && S++, a
    }

    function v(e, t) {
        if (!e) return t;
        let n = a.default.getPremiumTypeOverride(),
            i = a.default.getPremiumTypeActual();
        return n === h.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? i : n
    }

    function A(e, t) {
        var n, i, r, s, a;
        if (null != e.author && "SENDING" !== e.state && I(e.author) && C(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
                I(e) && C(e, t)
            }), (null === (i = e.interaction) || void 0 === i ? void 0 : i.user) != null && I(null === (r = e.interaction) || void 0 === r ? void 0 : r.user) && C(e.interaction.user, t), null === (s = e.attachments) || void 0 === s || s.forEach(e => {
                var n;
                null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
                    I(e) && C(e, t)
                })
            }), (null === (a = e.resolved) || void 0 === a ? void 0 : a.users) != null)
            for (let n in e.resolved.users) {
                let i = e.resolved.users[n];
                I(i) && C(i, t)
            }
    }

    function R(e) {
        null != e.application.bot && C(e.application.bot)
    }

    function N(e) {
        let {
            user: t,
            users: n,
            guilds: i
        } = e;
        delete t.premium, delete t.banner_color, C(t), n.forEach(e => {
            C(e)
        }), i.forEach(e => {
            e.members.forEach(t => {
                let n = _[t.user.id];
                null != n && T(n, e.id, t.avatar)
            })
        });
        let r = _[f.default.getId()];
        null != r && (_[m] = new u.default({
            id: m,
            username: "Wumpus",
            discriminator: "0",
            globalName: "Wumpus",
            avatar: "c1f86b313385cb97985f1b118851c28c"
        }))
    }

    function O(e) {
        let {
            guilds: t,
            lazyPrivateChannels: n
        } = e;
        t.forEach(e => {
            e.members.forEach(t => {
                let n = _[t.user.id];
                null != n && T(n, e.id, t.avatar)
            })
        }), null == n || n.forEach(e => {
            var t;
            null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
                C(e)
            })
        })
    }

    function D(e) {
        return !("incomplete" in e)
    }

    function y(e) {
        if (null != e.users)
            for (let t of e.users) !(t.id in _ && D(t)) && (_[t.id] = new u.default(t))
    }

    function P(e) {
        let {
            user: t
        } = e;
        t.id !== f.default.getId() && C(t)
    }

    function L(e) {
        let {
            user: t
        } = e;
        C(t)
    }

    function b(e) {
        let {
            user: t
        } = e;
        C(t)
    }

    function M(e) {
        let {
            messages: t
        } = e;
        return t.forEach(e => A(e, !0)), !1
    }

    function U(e) {
        let {
            mostRecentMessages: t
        } = e;
        return null == t || t.forEach(e => A(e, !1)), !1
    }

    function G(e) {
        let {
            messages: t
        } = e;
        return t.forEach(e => M({
            messages: e
        })), !1
    }

    function w(e) {
        let {
            data: t
        } = e;
        (0, s.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e, !0))
    }

    function k(e) {
        let {
            firstMessages: t,
            owners: n
        } = e;
        null != t && t.forEach(e => A(e, !0)), null != n && n.forEach(e => C(e.user, !0))
    }

    function x(e) {
        let {
            threads: t
        } = e;
        Object.values(t).forEach(e => {
            let {
                first_message: t,
                most_recent_message: n,
                owner: i
            } = e;
            null != t && A(t, !0), null != n && A(n, !0), null != i && null != i.user && C(i.user, !0)
        })
    }

    function F(e) {
        let {
            supplementalData: t
        } = e;
        Object.values(t).forEach(e => {
            let {
                message_preview: t
            } = e;
            null != t && A(t, !0)
        })
    }

    function V(e) {
        let {
            guildScheduledEventUsers: t,
            guildId: n
        } = e;
        t.forEach(e => {
            let {
                user: t,
                member: i
            } = e;
            if (null == t) return;
            C(t);
            let r = _[t.id],
                s = null == i ? void 0 : i.avatar;
            null != r && null != s && T(r, n, s)
        })
    }

    function B(e) {
        let {
            items: t
        } = e;
        t.forEach(e => {
            null != e.other_user && C(e.other_user)
        })
    }

    function H(e) {
        let {
            item: t
        } = e;
        null != t.other_user && C(t.other_user)
    }

    function Y(e) {
        let {
            message: t
        } = e;
        if (A(t, !0), null != t.flags && c.hasFlag(t.flags, p.MessageFlags.URGENT)) {
            let e = _[f.default.getId()];
            return null != e && (_[f.default.getId()] = e.set("flags", c.setFlag(e.flags, p.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
        }
        return !1
    }

    function j(e) {
        let {
            channel: {
                rawRecipients: t
            }
        } = e;
        return null != t && t.forEach(e => C(e)), !1
    }

    function W(e) {
        let {
            channels: t
        } = e;
        for (let {
                rawRecipients: e
            }
            of t) null != e && e.forEach(e => C(e));
        return !1
    }
    let K = ["username", "avatar", "global_name", "discriminator", "bot"];

    function z(e) {
        let {
            updates: t
        } = e;
        return t.map(e => {
            let t = _[e.user.id];
            if (null == t) return !1;
            let n = K.reduce((n, r) => {
                if (e.user.hasOwnProperty(r)) {
                    let s = t.set((0, i.camelCase)(r), e.user[r]);
                    n = n || s !== t, t = s
                }
                return n
            }, !1);
            return !!n && (_[t.id] = t, n)
        }).some(e => e)
    }

    function q(e) {
        let {
            bans: t
        } = e;
        t.forEach(e => C(e.user))
    }

    function X(e) {
        let {
            bans: t
        } = e;
        t.forEach(e => C(e.user))
    }

    function Q(e) {
        return C(e.user)
    }

    function Z(e) {
        return !!e.isMember && C(e.user)
    }

    function J(e) {
        let t = C(e.user),
            n = _[e.user.id];
        if (null == n) return t;
        let {
            avatar: i,
            guildId: r
        } = e;
        return T(n, r, i) || t
    }

    function $(e) {
        let {
            members: t,
            guildId: n
        } = e;
        return t.reduce((e, t) => {
            let i = C(t.user),
                r = _[t.user.id];
            if (null == r) return i || e;
            let {
                avatar: s
            } = t;
            return T(r, n, s) || i || e
        }, !1)
    }

    function ee(e) {
        var t;
        let n = !1;
        for (let i of null !== (t = e.members) && void 0 !== t ? t : []) C(i.user) && (n = !0), null != _[i.user.id] && T(_[i.user.id], e.guildId, i.avatar) && (n = !0);
        return n
    }

    function et(e) {
        var t;
        let n = !1;
        for (let i of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(_, i.id) && (n = C(i) || n);
        return n
    }

    function en(e) {
        let {
            members: t
        } = e, n = !1;
        return t.forEach(e => {
            null != e.member && C(e.member.user) && (n = !0), null != e.presence && C(e.presence.user) && (n = !0)
        }), n
    }

    function ei(e) {
        let {
            addedMembers: t
        } = e, n = !1;
        return null == t || t.forEach(e => {
            null != e.member && C(e.member.user) && (n = !0), null != e.presence && C(e.presence.user) && (n = !0)
        }), n
    }

    function er(e) {
        let {
            guild: t
        } = e;
        t.members.forEach(e => {
            let {
                user: {
                    id: n,
                    username: i,
                    avatar: r,
                    discriminator: s,
                    bot: a
                },
                avatar: o
            } = e;
            n !== f.default.getId() && C({
                id: n,
                username: i,
                avatar: r,
                discriminator: s,
                bot: a
            });
            let l = _[n];
            null != l && T(l, t.id, o)
        })
    }

    function es(e) {
        return C(e.relationship.user)
    }

    function ea(e) {
        let {
            relationships: t
        } = e;
        return t.reduce((e, t) => C(t.user) || e, !1)
    }

    function eo(e) {
        return C(e.suggestion.suggested_user)
    }

    function el(e) {
        let {
            suggestions: t
        } = e;
        return t.reduce((e, t) => C(t.suggested_user) || e, !1)
    }

    function eu(e) {
        let {
            users: t
        } = e;
        t.forEach(e => {
            null == _[e.id] && (_[e.id] = new u.default(e))
        })
    }

    function ec(e) {
        let {
            lobby: t
        } = e;
        return t.members.reduce((e, t) => C(t.user) || e, !1)
    }

    function ed(e) {
        return C(e.member.user)
    }

    function ef(e) {
        let {
            giftCode: t
        } = e;
        return null != t.user && C(t.user)
    }

    function eE(e) {
        let {
            appliedBoosts: t
        } = e;
        t.forEach(e => {
            let {
                user: t
            } = e;
            null != t && C(t)
        })
    }

    function ep(e) {
        let {
            request: t
        } = e, {
            user: n,
            actioned_by_user: i
        } = t, r = !1;
        return null != n && (r = r || C(n)), null != i && (r = r || C(i)), r
    }

    function eh(e) {
        let {
            user: t
        } = e;
        C(t)
    }

    function e_(e) {
        let {
            integrations: t
        } = e;
        t.forEach(e => R((0, o.createPrivateChannelIntegration)(e)))
    }

    function eS(e) {
        let {
            integration: t
        } = e;
        R((0, o.createPrivateChannelIntegration)(t))
    }

    function em(e) {
        let {
            integration: t
        } = e;
        R((0, o.createPrivateChannelIntegration)(t))
    }

    function eT(e) {
        let {
            users: t,
            familyCenterTeenActivity: n
        } = e, {
            users: i
        } = n, r = [...t, ...i];
        return r.reduce((e, t) => C(t) || e, !1)
    }

    function eg(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => C(t) || e, !1)
    }

    function eI(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => C(t) || e, !1)
    }

    function eC(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => C(t) || e, !1)
    }

    function ev(e) {
        let {
            familyCenterTeenActivity: t
        } = e;
        if (void 0 === t) return;
        let {
            users: n
        } = t;
        return n.reduce((e, t) => C(t) || e, !1)
    }

    function eA(e) {
        let {
            familyCenterTeenActivity: t
        } = e, {
            users: n
        } = t;
        return n.reduce((e, t) => C(t) || e, !1)
    }

    function eR(e) {
        let {
            members: t
        } = e, n = f.default.getId();
        return t.reduce((e, t) => {
            if (t.member.user.id === n) return e;
            let i = C(t.member.user);
            return i || e
        }, !1)
    }
    class eN extends E.default {
        initialize() {
            this.waitFor(f.default)
        }
        takeSnapshot() {
            let e = this.getCurrentUser();
            return {
                version: eN.LATEST_SNAPSHOT_VERSION,
                data: {
                    users: [e].filter(d.isNotNullish)
                }
            }
        }
        handleLoadCache(e) {
            let t = this.readSnapshot(eN.LATEST_SNAPSHOT_VERSION);
            if (null != t)
                for (let e of t.users) _[e.id] = new u.default(e);
            if (null != e.users)
                for (let t of e.users) !(t.id in _ && D(t)) && (_[t.id] = new u.default(t));
            for (let t of e.channels) {
                var n;
                null === (n = t.rawRecipients) || void 0 === n || n.forEach(e => C(e, !1))
            }
        }
        getUserStoreVersion() {
            return S
        }
        getUser(e) {
            if (null != e) return _[e]
        }
        getUsers() {
            return _
        }
        forEach(e) {
            for (let t in _)
                if (!1 === e(_[t])) break
        }
        findByTag(e, t) {
            for (let n in _) {
                let i = _[n];
                if (null != t && i.username === e && i.discriminator === t) return i;
                if (null == t && i.username === e && i.isPomelo()) return i
            }
        }
        filter(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = [];
            for (let t in _) {
                let i = _[t];
                e(i) && n.push(i)
            }
            return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n
        }
        getCurrentUser() {
            return _[f.default.getId()]
        }
        constructor() {
            super({
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: O,
                UPDATE_CLIENT_PREMIUM_TYPE: b,
                OVERLAY_INITIALIZE: y,
                CACHE_LOADED: e => this.handleLoadCache(e),
                USER_UPDATE: P,
                CURRENT_USER_UPDATE: L,
                PRESENCE_UPDATES: z,
                SEARCH_FINISH: G,
                MOD_VIEW_SEARCH_FINISH: G,
                LOAD_MESSAGES_SUCCESS: M,
                LOAD_MESSAGES_AROUND_SUCCESS: M,
                LOAD_PINNED_MESSAGES_SUCCESS: M,
                LOAD_RECENT_MENTIONS_SUCCESS: M,
                THREAD_LIST_SYNC: U,
                MESSAGE_CREATE: Y,
                MESSAGE_UPDATE: Y,
                GUILD_SETTINGS_LOADED_BANS: q,
                GUILD_SETTINGS_LOADED_BANS_BATCH: X,
                GUILD_CREATE: er,
                GUILD_BAN_ADD: Q,
                GUILD_BAN_REMOVE: Q,
                CHANNEL_RECIPIENT_ADD: Z,
                CHANNEL_RECIPIENT_REMOVE: Z,
                GUILD_JOIN_REQUEST_CREATE: ep,
                GUILD_JOIN_REQUEST_UPDATE: ep,
                GUILD_MEMBER_ADD: J,
                GUILD_MEMBER_UPDATE: J,
                GUILD_MEMBERS_CHUNK: $,
                THREAD_MEMBER_LIST_UPDATE: en,
                THREAD_MEMBERS_UPDATE: ei,
                CHANNEL_CREATE: j,
                CHANNEL_UPDATES: W,
                RELATIONSHIP_ADD: es,
                LOAD_RELATIONSHIPS_SUCCESS: ea,
                FRIEND_SUGGESTION_CREATE: eo,
                LOAD_FRIEND_SUGGESTIONS_SUCCESS: el,
                AUDIT_LOG_FETCH_SUCCESS: eu,
                AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eu,
                LOBBY_CREATE: ec,
                LOBBY_MEMBER_CONNECT: ed,
                LOBBY_MEMBER_UPDATE: ed,
                GIFT_CODE_RESOLVE_SUCCESS: ef,
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eE,
                GUILD_FEED_FETCH_SUCCESS: w,
                LOAD_THREADS_SUCCESS: k,
                LOAD_ARCHIVED_THREADS_SUCCESS: k,
                LOAD_FORUM_POSTS: x,
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: V,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: B,
                NOTIFICATION_CENTER_ITEM_CREATE: H,
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: F,
                STORE_APPLICATION_INTERACTION_FAKE_USER: eh,
                PASSIVE_UPDATE_V1: ee,
                LOCAL_MESSAGES_LOADED: et,
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: e_,
                PRIVATE_CHANNEL_INTEGRATION_CREATE: eS,
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: em,
                FAMILY_CENTER_INITIAL_LOAD: eT,
                FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eg,
                FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: ev,
                FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eA,
                FAMILY_CENTER_REQUEST_LINK_SUCCESS: eI,
                FRIEND_FINDER_PYMK_LOADED: eC,
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eR
            })
        }
    }
    eN.displayName = "UserStore", eN.LATEST_SNAPSHOT_VERSION = 1;
    var eO = new eN
}