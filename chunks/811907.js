function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return l
        }
    }), i("222007");
    var l, r = i("906932"),
        n = i("315102"),
        u = i("719923"),
        o = i("646718");

    function s(e, t) {
        return null == t || "" === t ? e : t
    }
    l = class {
        get premiumSince() {
            return this._userProfile.premiumSince
        }
        get premiumGuildSince() {
            return this._userProfile.premiumGuildSince
        }
        get premiumType() {
            return this._userProfile.premiumType
        }
        get primaryColor() {
            var e, t;
            return null !== (t = null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : this.accentColor
        }
        get canUsePremiumProfileCustomization() {
            return u.default.isPremiumAtLeast(this.premiumType, o.PremiumTypes.TIER_2)
        }
        get canEditThemes() {
            return this.canUsePremiumProfileCustomization
        }
        get application() {
            return this._userProfile.application
        }
        hasThemeColors() {
            var e, t;
            return (null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) != null || (null === (t = this.themeColors) || void 0 === t ? void 0 : t[1]) != null
        }
        hasPremiumCustomization() {
            return this.isUsingGuildMemberBanner() || this.isUsingGuildMemberBio() || null != this.banner || this.hasThemeColors() || null != this.popoutAnimationParticleType
        }
        hasFullProfile() {
            return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile)
        }
        isUsingGuildMemberBanner() {
            var e;
            return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.banner) != null
        }
        isUsingGuildMemberBio() {
            var e, t;
            return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.bio) != null && (null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.bio) !== ""
        }
        isUsingGuildMemberPronouns() {
            var e, t;
            return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.pronouns) != null && (null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.pronouns) !== ""
        }
        getBannerURL(e) {
            let {
                canAnimate: t,
                size: i
            } = e;
            return null != this.guildId && this.isUsingGuildMemberBanner() ? (0, n.getGuildMemberBannerURL)({
                id: this.userId,
                guildId: this.guildId,
                banner: this.banner,
                canAnimate: t,
                size: i
            }) : (0, n.getUserBannerURL)({
                id: this.userId,
                banner: this.banner,
                canAnimate: t,
                size: i
            })
        }
        getPreviewBanner(e, t) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
            return null != e ? e : null === e ? this.isUsingGuildMemberBanner() ? (0, n.getUserBannerURL)({
                id: this.userId,
                banner: this._userProfile.banner,
                canAnimate: t,
                size: i
            }) : null : this.getBannerURL({
                canAnimate: t,
                size: 480
            })
        }
        getPreviewBio(e) {
            var t;
            return (0, r.getProfilePreviewField)(e, null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.bio, this._userProfile.bio, null != this.guildId)
        }
        getPreviewThemeColors(e) {
            return (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors
        }
        getBadges() {
            var e, t, i;
            return [...null !== (t = this._userProfile.badges) && void 0 !== t ? t : [], ...null !== (i = null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.badges) && void 0 !== i ? i : []]
        }
        getLegacyUsername() {
            return this._userProfile.legacyUsername
        }
        constructor(e, t) {
            var i, l, r, n;
            this.userId = e.userId, this.guildId = null == t ? void 0 : t.guildId, this.banner = null !== (i = null == t ? void 0 : t.banner) && void 0 !== i ? i : e.banner, this.bio = s(e.bio, null == t ? void 0 : t.bio), this.pronouns = s(e.pronouns, null == t ? void 0 : t.pronouns), this.accentColor = e.accentColor, this.themeColors = null !== (l = null == t ? void 0 : t.themeColors) && void 0 !== l ? l : e.themeColors, this.popoutAnimationParticleType = null !== (r = null == t ? void 0 : t.popoutAnimationParticleType) && void 0 !== r ? r : e.popoutAnimationParticleType, this.profileEffectId = null !== (n = null == t ? void 0 : t.profileEffectId) && void 0 !== n ? n : e.profileEffectId, this._userProfile = e, this._guildMemberProfile = t
        }
    }
}