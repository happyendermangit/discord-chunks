function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIconComponent: function() {
            return J
        },
        getChannelIconTooltipText: function() {
            return q
        },
        getSimpleChannelIconComponent: function() {
            return Z
        }
    });
    var i = n("859802"),
        r = n("281956"),
        s = n("271383"),
        a = n("430824"),
        o = n("607744"),
        l = n("594174"),
        u = n("482500"),
        d = n("36082"),
        _ = n("119828"),
        c = n("747380"),
        E = n("648414"),
        I = n("315970"),
        T = n("308540"),
        f = n("814550"),
        S = n("93879"),
        h = n("535321"),
        A = n("277942"),
        m = n("974029"),
        N = n("481479"),
        O = n("160696"),
        p = n("832440"),
        R = n("634648"),
        C = n("356842"),
        g = n("630641"),
        L = n("908434"),
        D = n("74846"),
        v = n("789536"),
        M = n("316949"),
        y = n("133429"),
        P = n("702066"),
        U = n("763300"),
        b = n("883877"),
        G = n("724215"),
        w = n("761529"),
        k = n("308570"),
        B = n("632184"),
        V = n("414896"),
        F = n("398856"),
        x = n("170039"),
        H = n("178695"),
        Y = n("548420"),
        j = n("761374"),
        W = n("435443"),
        K = n("447003"),
        z = n("176505"),
        X = n("981631"),
        Q = n("689938");

    function q(e, t, n, i) {
        if (null == e) return null;
        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return Q.default.Messages.CHANNEL_TOOLTIP_RULES;
        switch (e.type) {
            case X.ChannelTypes.GUILD_TEXT:
                if (i) return Q.default.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
                if (e.isNSFW()) return Q.default.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
                if ((0, K.default)(e)) return Q.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
                return Q.default.Messages.CHANNEL_TOOLTIP_TEXT;
            case X.ChannelTypes.GUILD_FORUM:
                let r = e.isMediaChannel();
                if (e.isNSFW()) return r ? Q.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : Q.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
                if ((0, K.default)(e)) return r ? Q.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : Q.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
                return r ? Q.default.Messages.MEDIA_CHANNEL : Q.default.Messages.FORUM;
            case X.ChannelTypes.GUILD_MEDIA:
                if (e.isNSFW()) return Q.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
                if ((0, K.default)(e)) return Q.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
                return Q.default.Messages.MEDIA_CHANNEL;
            case X.ChannelTypes.GUILD_STAGE_VOICE:
                if (n) return Q.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
                if ((0, K.default)(e)) return Q.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
                return Q.default.Messages.CHANNEL_TOOLTIP_STAGE;
            case X.ChannelTypes.GUILD_VOICE:
                if (n) return Q.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
                if ((0, K.default)(e)) return Q.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
                return Q.default.Messages.CHANNEL_TOOLTIP_VOICE;
            case X.ChannelTypes.GUILD_ANNOUNCEMENT:
                if (e.isNSFW()) return Q.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
                if ((0, K.default)(e)) return Q.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
                return Q.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
            case X.ChannelTypes.GUILD_STORE:
                return Q.default.Messages.CHANNEL_TOOLTIP_STORE;
            case X.ChannelTypes.DM:
                return Q.default.Messages.DM;
            case X.ChannelTypes.GROUP_DM:
                return Q.default.Messages.GROUP_DM;
            case X.ChannelTypes.GUILD_DIRECTORY:
                return Q.default.Messages.CHANNEL_TOOLTIP_DIRECTORY;
            case X.ChannelTypes.PUBLIC_THREAD:
                return Q.default.Messages.THREAD;
            case X.ChannelTypes.PRIVATE_THREAD:
                return Q.default.Messages.PRIVATE_THREAD;
            default:
                return null
        }
    }

    function J(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                locked: Q = !1,
                video: q = !1,
                stream: J = !1,
                hasActiveThreads: Z = !1,
                textFocused: $ = !1
            } = n;
        if (null == e) return null;
        null == t && (t = a.default.getGuild(e.getGuildId()));
        let ee = (0, r.shouldShowMembershipVerificationGate)(null == t ? void 0 : t.id, [a.default, o.default, l.default, s.default]),
            et = null != t && (0, i.canSeeGuildHome)(null == t ? void 0 : t.id);
        if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return f.default;
        switch (e.type) {
            case X.ChannelTypes.GUILD_ANNOUNCEMENT:
                if (Z) {
                    if (e.isNSFW()) return U.default;
                    if ((0, K.default)(e)) return G.default;
                    else return u.default
                }
                if (e.isNSFW()) return P.default;
                if ((0, K.default)(e)) return y.default;
                return M.default;
            case X.ChannelTypes.GUILD_STORE:
                return Y.default;
            case X.ChannelTypes.DM:
            case X.ChannelTypes.GROUP_DM:
                return d.default;
            case X.ChannelTypes.PRIVATE_THREAD:
                return w.default;
            case X.ChannelTypes.ANNOUNCEMENT_THREAD:
            case X.ChannelTypes.PUBLIC_THREAD:
                if (e.isNSFW()) return b.default;
                if (e.isForumPost()) return R.default;
                else return W.default;
            case X.ChannelTypes.GUILD_TEXT:
                if (Z) {
                    if (e.isNSFW()) return b.default;
                    if ((0, K.default)(e)) return w.default;
                    else return W.default
                }
                if (e.isNSFW()) return A.default;
                if ((0, K.default)(e)) return h.default;
                return S.default;
            case X.ChannelTypes.GUILD_FORUM:
                let en = e.isMediaChannel();
                if (e.isNSFW()) return en ? v.default : p.default;
                if ((0, K.default)(e)) return en ? D.default : O.default;
                else return en ? L.default : N.default;
            case X.ChannelTypes.GUILD_MEDIA:
                if (e.isNSFW()) return v.default;
                if ((0, K.default)(e)) return D.default;
                else return L.default;
            case X.ChannelTypes.GUILD_STAGE_VOICE:
                if (ee) return (0, K.default)(e) ? g.default : H.default;
                if (Q) return g.default;
                if ((0, K.default)(e)) return H.default;
                else return x.default;
            case X.ChannelTypes.GUILD_VOICE:
                if ($) return m.default;
                if (e.isNSFW()) return F.default;
                if (J) return j.default;
                if (ee) {
                    if ((0, K.default)(e)) return g.default;
                    return q ? c.default : V.default
                }
                if (Q) return g.default;
                if ((0, K.default)(e)) return q ? c.default : V.default;
                else return q ? _.default : B.default;
            case X.ChannelTypes.GUILD_DIRECTORY:
                return T.default;
            case X.ChannelTypes.GUILD_CATEGORY:
                return I.default;
            default:
                if (z.StaticChannelIds.has(e.id)) {
                    if (e.id === z.StaticChannelId.GUILD_HOME || e.id === z.StaticChannelId.SERVER_GUIDE) {
                        if (et) return C.default;
                        return k.default
                    }
                    if (e.id === z.StaticChannelId.CHANNEL_BROWSER || e.id === z.StaticChannelId.CUSTOMIZE_COMMUNITY) return E.default
                }
                return null
        }
    }

    function Z(e) {
        switch (e) {
            case X.ChannelTypes.GUILD_ANNOUNCEMENT:
                return M.default;
            case X.ChannelTypes.GUILD_STORE:
                return Y.default;
            case X.ChannelTypes.DM:
            case X.ChannelTypes.GROUP_DM:
                return d.default;
            case X.ChannelTypes.PRIVATE_THREAD:
                return w.default;
            case X.ChannelTypes.ANNOUNCEMENT_THREAD:
            case X.ChannelTypes.PUBLIC_THREAD:
                return W.default;
            case X.ChannelTypes.GUILD_TEXT:
            case X.ChannelTypes.GUILD_FORUM:
            case X.ChannelTypes.GUILD_MEDIA:
                return S.default;
            case X.ChannelTypes.GUILD_STAGE_VOICE:
                return x.default;
            case X.ChannelTypes.GUILD_VOICE:
                return B.default;
            case X.ChannelTypes.GUILD_CATEGORY:
                return I.default;
            default:
                return null
        }
    }
}