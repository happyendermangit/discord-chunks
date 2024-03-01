function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPopoutType: function() {
            return s
        },
        getEmojiPopoutData: function() {
            return f
        }
    });
    var l, i, a, s, r = n("505233"),
        o = n("782340");
    (l = a || (a = {})).DEFAULT = "Custom Emoji Popout", l.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", l.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", l.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", l.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", l.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (i = s || (s = {})).GET_PREMIUM = "GET_PREMIUM", i.JOIN_GUILD = "JOIN_GUILD", i.UNAVAILABLE = "UNAVAILABLE";
    let u = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: l,
                emojiComesFromCurrentGuild: i,
                isDiscoverable: a
            } = e, s = "Custom Emoji Popout";
            return t && !n && a ? s = "Custom Emoji Popout (Cross-Server)" : t || !n || l ? !t && !n && (s = a ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : s = i ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", s
        },
        d = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: l,
                isDiscoverable: i,
                emojiComesFromCurrentGuild: a,
                userIsRoleSubscriber: s,
                isRoleSubscriptionEmoji: u,
                shouldHideRoleSubscriptionCTA: d,
                onOpenPremiumSettings: c
            } = e, f = null;
            if (t) {
                if (n) {
                    if (u) f = d && l ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : l ? s ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION;
                    else {
                        let {
                            enabled: e
                        } = r.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                            location: "_getEmojiPopoutDescription_1"
                        });
                        f = e ? a ? o.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION_V2 : o.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION_V2 : a ? o.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION
                    }
                } else {
                    let e = r.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                        location: "_getEmojiPopoutDescription_2"
                    }, {
                        disable: i,
                        autoTrackExposure: !i
                    }).enabled ? o.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION_V2 : o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION;
                    f = i ? o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : e
                }
            } else if (n) f = d && l ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : l ? s ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : a ? o.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION;
            else {
                let e = r.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                    location: "_getEmojiPopoutDescription_3"
                }, {
                    disable: i,
                    autoTrackExposure: !i
                }).enabled ? o.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION_V2 : o.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                    openPremiumSettings: c
                });
                f = i ? o.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : e
            }
            return f
        },
        c = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: l,
                isDiscoverable: i
            } = e, a = !n && i, s = !t && (n && !l || r.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                location: "_getTypeTextDescription"
            }).enabled || a);
            return t && a ? {
                type: "JOIN_GUILD",
                text: o.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                description: null
            } : s ? {
                type: "GET_PREMIUM",
                text: o.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                description: null
            } : {
                type: "UNAVAILABLE",
                text: null,
                description: null
            }
        },
        f = e => {
            let t = d(e),
                n = u(e),
                l = c(e);
            return {
                ...l,
                emojiDescription: t,
                analyticsType: n
            }
        }
}