function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fromServer: function() {
            return o
        },
        fromBackgroundSync: function() {
            return l
        },
        fromServerUpdate: function() {
            return u
        },
        fromInviteGuild: function() {
            return c
        },
        toServer: function() {
            return d
        },
        fromSerializedGuildRecord: function() {
            return f
        },
        filterRoleDeletes: function() {
            return E
        }
    }), n("222007");
    var i = n("627929"),
        r = n("813006"),
        s = n("605136"),
        a = n("49111");

    function o(e, t) {
        var n, o, l, u, c, d, f, E, p, h, _, S, m;
        let T = {
            id: e.id,
            name: null !== (n = e.properties.name) && void 0 !== n ? n : "",
            description: e.properties.description,
            icon: e.properties.icon,
            splash: e.properties.splash,
            banner: e.properties.banner,
            homeHeader: e.properties.home_header,
            features: new Set(null !== (o = e.properties.features) && void 0 !== o ? o : []),
            preferredLocale: null !== (l = e.properties.preferred_locale) && void 0 !== l ? l : "en-us",
            ownerId: e.properties.owner_id,
            application_id: e.properties.application_id,
            roles: e.roles instanceof Array ? (0, s.sortServerRoles)(e.id, e.roles) : e.roles,
            afkChannelId: e.properties.afk_channel_id,
            afkTimeout: e.properties.afk_timeout,
            systemChannelId: e.properties.system_channel_id,
            joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
            verificationLevel: null !== (u = e.properties.verification_level) && void 0 !== u ? u : a.VerificationLevels.NONE,
            explicitContentFilter: null !== (c = e.properties.explicit_content_filter) && void 0 !== c ? c : a.GuildExplicitContentFilterTypes.DISABLED,
            defaultMessageNotifications: null !== (d = e.properties.default_message_notifications) && void 0 !== d ? d : a.UserNotificationSettings.ALL_MESSAGES,
            mfaLevel: null !== (f = e.properties.mfa_level) && void 0 !== f ? f : a.MFALevels.NONE,
            vanityURLCode: e.properties.vanity_url_code,
            premiumTier: null !== (E = e.properties.premium_tier) && void 0 !== E ? E : a.BoostedGuildTiers.NONE,
            premiumSubscriberCount: null !== (p = e.premium_subscription_count) && void 0 !== p ? p : 0,
            premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
            systemChannelFlags: e.properties.system_channel_flags,
            discoverySplash: e.properties.discovery_splash,
            rulesChannelId: e.properties.rules_channel_id,
            safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
            publicUpdatesChannelId: e.properties.public_updates_channel_id,
            maxStageVideoChannelUsers: null !== (h = e.properties.max_stage_video_channel_users) && void 0 !== h ? h : -1,
            maxVideoChannelUsers: null !== (_ = e.properties.max_video_channel_users) && void 0 !== _ ? _ : -1,
            maxMembers: null !== (S = e.properties.max_members) && void 0 !== S ? S : -1,
            nsfwLevel: null !== (m = e.properties.nsfw_level) && void 0 !== m ? m : a.GuildNSFWContentLevel.DEFAULT,
            hubType: e.properties.hub_type,
            latestOnboardingQuestionId: e.properties.latest_onboarding_question_id
        };
        return null == t ? (0, i.dangerouslyCast)(T, r.default) : t.merge(T)
    }

    function l(e, t) {
        var n, i, r, o, l, u, c, f, p, h, _, S, m;
        let T = null !== (n = e.properties) && void 0 !== n ? n : d(t),
            g = {
                id: e.id,
                name: null !== (i = T.name) && void 0 !== i ? i : "",
                description: T.description,
                icon: T.icon,
                splash: T.splash,
                banner: T.banner,
                homeHeader: T.home_header,
                features: new Set(null !== (r = T.features) && void 0 !== r ? r : []),
                preferredLocale: null !== (o = T.preferred_locale) && void 0 !== o ? o : "en-us",
                ownerId: T.owner_id,
                application_id: T.application_id,
                roles: "partial" === e.data_mode ? E(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids) : (0, s.sortServerRoles)(e.id, e.roles),
                afkChannelId: T.afk_channel_id,
                afkTimeout: T.afk_timeout,
                systemChannelId: T.system_channel_id,
                verificationLevel: null !== (l = T.verification_level) && void 0 !== l ? l : a.VerificationLevels.NONE,
                explicitContentFilter: null !== (u = T.explicit_content_filter) && void 0 !== u ? u : a.GuildExplicitContentFilterTypes.DISABLED,
                defaultMessageNotifications: null !== (c = T.default_message_notifications) && void 0 !== c ? c : a.UserNotificationSettings.ALL_MESSAGES,
                mfaLevel: null !== (f = T.mfa_level) && void 0 !== f ? f : a.MFALevels.NONE,
                vanityURLCode: T.vanity_url_code,
                premiumTier: null !== (p = T.premium_tier) && void 0 !== p ? p : a.BoostedGuildTiers.NONE,
                premiumProgressBarEnabled: T.premium_progress_bar_enabled || !1,
                systemChannelFlags: T.system_channel_flags,
                discoverySplash: T.discovery_splash,
                rulesChannelId: T.rules_channel_id,
                safetyAlertsChannelId: T.safety_alerts_channel_id,
                publicUpdatesChannelId: T.public_updates_channel_id,
                maxStageVideoChannelUsers: null !== (h = T.max_stage_video_channel_users) && void 0 !== h ? h : -1,
                maxVideoChannelUsers: null !== (_ = T.max_video_channel_users) && void 0 !== _ ? _ : -1,
                maxMembers: null !== (S = T.max_members) && void 0 !== S ? S : -1,
                nsfwLevel: null !== (m = T.nsfw_level) && void 0 !== m ? m : a.GuildNSFWContentLevel.DEFAULT,
                hubType: T.hub_type,
                latestOnboardingQuestionId: T.latest_onboarding_question_id
            };
        return t.merge(g)
    }

    function u(e, t) {
        let n = {
            id: e.id,
            name: e.name,
            description: e.description,
            icon: e.icon,
            splash: e.splash,
            banner: e.banner,
            homeHeader: e.home_header,
            features: e.features,
            preferredLocale: e.preferred_locale,
            ownerId: e.owner_id,
            application_id: e.application_id,
            roles: (0, s.sortServerRoles)(e.id, e.roles),
            afkChannelId: e.afk_channel_id,
            afkTimeout: e.afk_timeout,
            systemChannelId: e.system_channel_id,
            joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
            verificationLevel: e.verification_level,
            explicitContentFilter: e.explicit_content_filter,
            defaultMessageNotifications: e.default_message_notifications,
            mfaLevel: e.mfa_level,
            vanityURLCode: e.vanity_url_code,
            premiumTier: e.premium_tier,
            premiumSubscriberCount: e.premium_subscription_count,
            premiumProgressBarEnabled: e.premium_progress_bar_enabled,
            systemChannelFlags: e.system_channel_flags,
            discoverySplash: e.discovery_splash,
            rulesChannelId: e.rules_channel_id,
            safetyAlertsChannelId: e.safety_alerts_channel_id,
            publicUpdatesChannelId: e.public_updates_channel_id,
            maxStageVideoChannelUsers: e.max_stage_video_channel_users,
            maxVideoChannelUsers: e.max_video_channel_users,
            maxMembers: e.max_members,
            nsfwLevel: e.nsfw_level,
            hubType: e.hub_type,
            latestOnboardingQuestionId: e.latest_onboarding_question_id
        };
        return null == t ? new r.default(n) : t.merge(n)
    }

    function c(e) {
        let t = {
            id: e.id,
            name: e.name,
            description: e.description,
            icon: e.icon,
            splash: e.splash,
            banner: e.banner,
            features: e.features,
            verificationLevel: e.verification_level,
            vanityURLCode: e.vanity_url_code,
            premiumSubscriberCount: e.premium_subscription_count,
            nsfwLevel: e.nsfw_level,
            memberCount: e.approximate_member_count
        };
        return new r.default(t)
    }

    function d(e) {
        return {
            id: e.id,
            name: e.name,
            description: e.description,
            icon: e.icon,
            splash: e.splash,
            banner: e.banner,
            home_header: e.homeHeader,
            features: Array.from(e.features),
            preferred_locale: e.preferredLocale,
            owner_id: e.ownerId,
            application_id: e.application_id,
            afk_channel_id: e.afkChannelId,
            afk_timeout: e.afkTimeout,
            system_channel_id: e.systemChannelId,
            verification_level: e.verificationLevel,
            explicit_content_filter: e.explicitContentFilter,
            default_message_notifications: e.defaultMessageNotifications,
            mfa_level: e.mfaLevel,
            vanity_url_code: e.vanityURLCode,
            premium_tier: e.premiumTier,
            premium_progress_bar_enabled: e.premiumProgressBarEnabled,
            system_channel_flags: e.systemChannelFlags,
            discovery_splash: e.discoverySplash,
            rules_channel_id: e.rulesChannelId,
            safety_alerts_channel_id: e.safetyAlertsChannelId,
            public_updates_channel_id: e.publicUpdatesChannelId,
            max_stage_video_channel_users: e.maxStageVideoChannelUsers,
            max_video_channel_users: e.maxVideoChannelUsers,
            unavailable: !1,
            max_members: e.maxMembers,
            nsfw_level: e.nsfwLevel,
            hub_type: e.hubType,
            latest_onboarding_question_id: e.latestOnboardingQuestionId
        }
    }

    function f(e) {
        var t;
        for (let n in null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), e.features = new Set(null !== (t = e.features) && void 0 !== t ? t : []), e.roles)(0, s.fromSerializedGuildRole)(e.roles[n]);
        return (0, i.dangerouslyCast)(e, r.default)
    }

    function E(e, t, n, i) {
        let r = !1;
        if (null != i)
            for (let e of i) delete t[e], r = !0;
        if (null != n && n.length > 0) {
            for (let e of n) t[e.id] = (0, s.fromServerRole)(e);
            r = !0
        }
        return r ? (0, s.sortClientRoles)(e, Object.values(t)) : t
    }
}