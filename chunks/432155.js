function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ANIMATED_EMOJIS: function() {
            return c
        },
        EMOJIS_EVERYWHERE: function() {
            return _
        },
        STICKERS_EVERYWHERE: function() {
            return f
        },
        SOUNDBOARD_EVERYWHERE: function() {
            return E
        },
        CUSTOM_CALL_SOUNDS: function() {
            return h
        },
        ANIMATED_AVATAR: function() {
            return g
        },
        CUSTOM_DISCRIMINATOR: function() {
            return m
        },
        PREMIUM_GUILD_MEMBER_PROFILE: function() {
            return p
        },
        PROFILE_BADGES: function() {
            return S
        },
        PROFILE_PREMIUM_FEATURES: function() {
            return T
        },
        COLLECTIBLES: function() {
            return v
        },
        APP_ICONS: function() {
            return I
        },
        CLIENT_THEMES: function() {
            return A
        },
        BOOST_DISCOUNT: function() {
            return C
        },
        FREE_BOOSTS: function() {
            return y
        },
        STREAM_MID_QUALITY: function() {
            return N
        },
        STREAM_HIGH_QUALITY: function() {
            return R
        },
        FANCY_VOICE_CHANNEL_REACTIONS: function() {
            return O
        },
        INSTALL_PREMIUM_APPLICATIONS: function() {
            return D
        },
        REDEEM_PREMIUM_PERKS: function() {
            return P
        },
        VIDEO_FILTER_ASSETS: function() {
            return L
        },
        INCREASED_GUILD_LIMIT: function() {
            return M
        },
        INCREASED_MESSAGE_LENGTH: function() {
            return b
        },
        INCREASED_VIDEO_UPLOAD_QUALITY: function() {
            return U
        },
        UPLOAD_LARGE_FILES: function() {
            return w
        },
        canUserUse: function() {
            return V
        }
    });
    var i = n("605250"),
        s = n("886551"),
        r = n("45120"),
        a = n("715757"),
        o = n("646718");
    let l = new i.default("ProductCatalog.tsx"),
        u = Object.freeze({
            [o.PremiumTypes.TIER_0]: o.PremiumSubscriptionSKUs.TIER_0,
            [o.PremiumTypes.TIER_1]: o.PremiumSubscriptionSKUs.TIER_1,
            [o.PremiumTypes.TIER_2]: o.PremiumSubscriptionSKUs.TIER_2
        });
    class d extends r.default {
        constructor(e, t) {
            super(e, e => (function(e, t) {
                if (null == t || null == t.premiumType) return !1;
                try {
                    let n = u[t.premiumType];
                    if (null == n) return l.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
                    let i = k[n];
                    if (null == i) return l.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
                    return i.skuFeatures.includes(e)
                } catch (e) {
                    var n;
                    l.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
                }
                return !1
            })(this, e), t)
        }
    }
    let c = new d("animatedEmojis"),
        _ = new d("emojisEverywhere"),
        f = new d("stickersEverywhere"),
        E = new d("soundboardEverywhere"),
        h = new d("customCallSounds"),
        g = new d("animatedAvatar"),
        m = new d("customDiscriminator"),
        p = new d("premiumGuildMemberProfile"),
        S = new d("profileBadges"),
        T = new d("profilePremiumFeatures", "custom banner and avatar decoration"),
        v = new d("collectibles"),
        I = new d("appIcons"),
        A = new d("clientThemes"),
        C = new d("boostDiscount"),
        y = new d("freeBoosts"),
        N = new d("streamMidQuality"),
        R = new d("streamHighQuality"),
        O = new d("fancyVoiceChannelReactions"),
        D = new d("installPremiumApplications"),
        P = new d("redeemPremiumPerks"),
        L = new d("videoFilterAssets");
    new r.default("increasedFileUploadSize", s.getUserMaxFileSize);
    let M = new d("increasedGuildLimit"),
        b = new d("increasedMessageLength"),
        U = new d("increasedVideoUploadQuality"),
        w = new d("uploadLargeFiles"),
        k = Object.freeze({
            [o.PremiumSubscriptionSKUs.TIER_0]: new a.default(o.PremiumSubscriptionSKUs.TIER_0, [c, _, f, S, L, U, w, I]),
            [o.PremiumSubscriptionSKUs.TIER_1]: new a.default(o.PremiumSubscriptionSKUs.TIER_1, [c, _, g, m, S, C, N, O, U, w, I]),
            [o.PremiumSubscriptionSKUs.TIER_2]: new a.default(o.PremiumSubscriptionSKUs.TIER_2, [c, _, f, E, h, g, m, p, S, T, A, C, y, N, R, O, D, P, L, M, b, U, w, I, v])
        });

    function V(e, t) {
        return e.getFeatureValue(t)
    }
}