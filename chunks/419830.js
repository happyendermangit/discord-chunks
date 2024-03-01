function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        getChannelIconTooltipText: function() {
            return q
        },
        getChannelIconComponent: function() {
            return J
        },
        getSimpleChannelIconComponent: function() {
            return Q
        }
    });
    var n = t("677315"),
        s = t("157186"),
        a = t("26989"),
        r = t("305961"),
        i = t("88093"),
        c = t("697218"),
        u = t("290182"),
        d = t("116320"),
        o = t("437825"),
        f = t("972894"),
        C = t("446685"),
        h = t("978499"),
        v = t("617559"),
        L = t("213523"),
        p = t("593195"),
        H = t("361777"),
        M = t("497757"),
        g = t("109264"),
        x = t("991497"),
        N = t("393621"),
        V = t("905999"),
        I = t("660074"),
        w = t("223383"),
        T = t("45029"),
        Z = t("990745"),
        m = t("190986"),
        R = t("721618"),
        j = t("733160"),
        E = t("990864"),
        A = t("274652"),
        _ = t("357077"),
        O = t("133661"),
        y = t("841307"),
        D = t("846254"),
        B = t("620193"),
        U = t("368121"),
        S = t("944633"),
        G = t("468507"),
        P = t("228427"),
        z = t("697468"),
        F = t("547896"),
        W = t("619911"),
        k = t("404158"),
        X = t("656038"),
        Y = t("724210"),
        b = t("49111"),
        K = t("782340");

    function q(e, l, t, n) {
        if (null == e) return null;
        if (e.id === (null == l ? void 0 : l.rulesChannelId)) return K.default.Messages.CHANNEL_TOOLTIP_RULES;
        switch (e.type) {
            case b.ChannelTypes.GUILD_TEXT:
                if (n) return K.default.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
                if (e.isNSFW()) return K.default.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
                if ((0, X.default)(e)) return K.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
                return K.default.Messages.CHANNEL_TOOLTIP_TEXT;
            case b.ChannelTypes.GUILD_FORUM:
                let s = e.isMediaChannel();
                if (e.isNSFW()) return s ? K.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : K.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
                if ((0, X.default)(e)) return s ? K.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : K.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
                return s ? K.default.Messages.MEDIA_CHANNEL : K.default.Messages.FORUM;
            case b.ChannelTypes.GUILD_MEDIA:
                if (e.isNSFW()) return K.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
                if ((0, X.default)(e)) return K.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
                return K.default.Messages.MEDIA_CHANNEL;
            case b.ChannelTypes.GUILD_STAGE_VOICE:
                if (t) return K.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
                if ((0, X.default)(e)) return K.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
                return K.default.Messages.CHANNEL_TOOLTIP_STAGE;
            case b.ChannelTypes.GUILD_VOICE:
                if (t) return K.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
                if ((0, X.default)(e)) return K.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
                return K.default.Messages.CHANNEL_TOOLTIP_VOICE;
            case b.ChannelTypes.GUILD_ANNOUNCEMENT:
                if (e.isNSFW()) return K.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
                if ((0, X.default)(e)) return K.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
                return K.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
            case b.ChannelTypes.GUILD_STORE:
                return K.default.Messages.CHANNEL_TOOLTIP_STORE;
            case b.ChannelTypes.DM:
                return K.default.Messages.DM;
            case b.ChannelTypes.GROUP_DM:
                return K.default.Messages.GROUP_DM;
            case b.ChannelTypes.GUILD_DIRECTORY:
                return K.default.Messages.CHANNEL_TOOLTIP_DIRECTORY;
            case b.ChannelTypes.PUBLIC_THREAD:
                return K.default.Messages.THREAD;
            case b.ChannelTypes.PRIVATE_THREAD:
                return K.default.Messages.PRIVATE_THREAD;
            default:
                return null
        }
    }

    function J(e, l) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                locked: K = !1,
                video: q = !1,
                stream: J = !1,
                hasActiveThreads: Q = !1,
                textFocused: $ = !1
            } = t;
        if (null == e) return null;
        null == l && (l = r.default.getGuild(e.getGuildId()));
        let ee = (0, s.shouldShowMembershipVerificationGate)(null == l ? void 0 : l.id, [r.default, i.default, c.default, a.default]),
            el = null != l && (0, n.canSeeGuildHome)(null == l ? void 0 : l.id);
        if ((null == e ? void 0 : e.id) === (null == l ? void 0 : l.rulesChannelId)) return L.default;
        switch (e.type) {
            case b.ChannelTypes.GUILD_ANNOUNCEMENT:
                if (Q) {
                    if (e.isNSFW()) return _.default;
                    if ((0, X.default)(e)) return y.default;
                    else return u.default
                }
                if (e.isNSFW()) return A.default;
                if ((0, X.default)(e)) return E.default;
                return j.default;
            case b.ChannelTypes.GUILD_STORE:
                return F.default;
            case b.ChannelTypes.DM:
            case b.ChannelTypes.GROUP_DM:
                return d.default;
            case b.ChannelTypes.PRIVATE_THREAD:
                return D.default;
            case b.ChannelTypes.ANNOUNCEMENT_THREAD:
            case b.ChannelTypes.PUBLIC_THREAD:
                if (e.isNSFW()) return O.default;
                if (e.isForumPost()) return I.default;
                else return k.default;
            case b.ChannelTypes.GUILD_TEXT:
                if (Q) {
                    if (e.isNSFW()) return O.default;
                    if ((0, X.default)(e)) return D.default;
                    else return k.default
                }
                if (e.isNSFW()) return M.default;
                if ((0, X.default)(e)) return H.default;
                return p.default;
            case b.ChannelTypes.GUILD_FORUM:
                let et = e.isMediaChannel();
                if (e.isNSFW()) return et ? R.default : V.default;
                if ((0, X.default)(e)) return et ? m.default : N.default;
                else return et ? Z.default : x.default;
            case b.ChannelTypes.GUILD_MEDIA:
                if (e.isNSFW()) return R.default;
                if ((0, X.default)(e)) return m.default;
                else return Z.default;
            case b.ChannelTypes.GUILD_STAGE_VOICE:
                if (ee) return (0, X.default)(e) ? T.default : z.default;
                if (K) return T.default;
                if ((0, X.default)(e)) return z.default;
                else return P.default;
            case b.ChannelTypes.GUILD_VOICE:
                if ($) return g.default;
                if (e.isNSFW()) return G.default;
                if (J) return W.default;
                if (ee) {
                    if ((0, X.default)(e)) return T.default;
                    return q ? f.default : S.default
                }
                if (K) return T.default;
                if ((0, X.default)(e)) return q ? f.default : S.default;
                else return q ? o.default : U.default;
            case b.ChannelTypes.GUILD_DIRECTORY:
                return v.default;
            case b.ChannelTypes.GUILD_CATEGORY:
                return h.default;
            default:
                if (Y.StaticChannelIds.has(e.id)) {
                    if (e.id === Y.StaticChannelId.GUILD_HOME || e.id === Y.StaticChannelId.SERVER_GUIDE) {
                        if (el) return w.default;
                        return B.default
                    }
                    if (e.id === Y.StaticChannelId.CHANNEL_BROWSER || e.id === Y.StaticChannelId.CUSTOMIZE_COMMUNITY) return C.default
                }
                return null
        }
    }

    function Q(e) {
        switch (e) {
            case b.ChannelTypes.GUILD_ANNOUNCEMENT:
                return j.default;
            case b.ChannelTypes.GUILD_STORE:
                return F.default;
            case b.ChannelTypes.DM:
            case b.ChannelTypes.GROUP_DM:
                return d.default;
            case b.ChannelTypes.PRIVATE_THREAD:
                return D.default;
            case b.ChannelTypes.ANNOUNCEMENT_THREAD:
            case b.ChannelTypes.PUBLIC_THREAD:
                return k.default;
            case b.ChannelTypes.GUILD_TEXT:
            case b.ChannelTypes.GUILD_FORUM:
            case b.ChannelTypes.GUILD_MEDIA:
                return p.default;
            case b.ChannelTypes.GUILD_STAGE_VOICE:
                return P.default;
            case b.ChannelTypes.GUILD_VOICE:
                return U.default;
            case b.ChannelTypes.GUILD_CATEGORY:
                return h.default;
            default:
                return null
        }
    }
}