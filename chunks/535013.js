function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        officialApplicationIds: function() {
            return m
        },
        ConnectionConfigurationRuleOperator: function() {
            return s
        },
        getCallbackParamsFromURL: function() {
            return p
        },
        getConnectionsCheckText: function() {
            return S
        },
        isVerifiedRolesChannelVisible: function() {
            return v
        },
        getVisibleConnectionsRole: function() {
            return T
        },
        getCreatedAtDate: function() {
            return I
        }
    });
    var i, s, r = n("627445"),
        a = n.n(r),
        o = n("917351"),
        l = n.n(o),
        u = n("746379"),
        d = n.n(u),
        c = n("429030");
    n("151426");
    var f = n("98309");
    n("10641");
    var _ = n("305961");
    n("957255");
    var h = n("214509"),
        E = n("49111"),
        g = n("782340");
    let m = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];

    function p(e) {
        let {
            query: t
        } = d.parse(e, !0), {
            code: n,
            state: i,
            error: s,
            error_description: r
        } = t;
        return a(!Array.isArray(n), "Received multiple query param values for code"), a(!Array.isArray(i), "Received multiple query param values for state"), a(!Array.isArray(s), "Received multiple query param values for error"), a(!Array.isArray(r), "Received multiple query param values for error_description"), {
            code: n,
            state: i,
            error: s,
            errorDescription: r
        }
    }

    function S(e) {
        let {
            connectionType: t,
            connectionMetadataField: n,
            operator: i,
            operatorText: s,
            value: r
        } = e, a = null, o = Math.round(Number(r));
        switch (i) {
            case h.OperatorTypes.EQUAL:
                a = g.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE, t === E.PlatformTypes.PAYPAL && n === h.MetadataFields.PAYPAL_VERIFIED && (a = g.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
                break;
            case h.OperatorTypes.NOT_EQUAL:
                a = g.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
                break;
            case h.OperatorTypes.LESS_THAN:
                a = g.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST, o = Math.max(0, o - 1);
                break;
            case h.OperatorTypes.GREATER_THAN:
                a = g.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST, o = Math.max(0, o + 1);
                break;
            case void 0:
            case null:
                return null
        }
        if (null != s && (a = s), a instanceof c.FormattedMessage && null != i) switch (t) {
            case E.PlatformTypes.REDDIT:
                switch (n) {
                    case h.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case h.MetadataFields.REDDIT_TOTAL_KARMA:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
                                karma: o
                            })
                        });
                        break;
                    case h.MetadataFields.REDDIT_GOLD:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
                        });
                        break;
                    case h.MetadataFields.REDDIT_MOD:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.STEAM:
                switch (n) {
                    case h.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case h.MetadataFields.STEAM_GAME_COUNT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
                                count: o
                            })
                        });
                        break;
                    case h.MetadataFields.STEAM_ITEM_COUNT_TF2:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
                                count: o
                            })
                        });
                        break;
                    case h.MetadataFields.STEAM_ITEM_COUNT_DOTA2:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.TWITTER:
                switch (n) {
                    case h.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case h.MetadataFields.TWITTER_VERIFIED:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
                        });
                        break;
                    case h.MetadataFields.TWITTER_FOLLOWERS_COUNT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
                                count: o
                            })
                        });
                        break;
                    case h.MetadataFields.TWITTER_STATUSES_COUNT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.PAYPAL:
                switch (n) {
                    case h.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case h.MetadataFields.PAYPAL_VERIFIED:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.EBAY:
                switch (n) {
                    case h.MetadataFields.CREATED_AT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                days: o
                            })
                        });
                        break;
                    case h.MetadataFields.EBAY_TOP_RATED_SELLER:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                        });
                        break;
                    case h.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
                                value: o
                            })
                        });
                        break;
                    case h.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    case h.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            case E.PlatformTypes.TIKTOK:
                switch (n) {
                    case h.MetadataFields.TIKTOK_VERIFIED:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
                        });
                        break;
                    case h.MetadataFields.TIKTOK_FOLLOWER_COUNT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    case h.MetadataFields.TIKTOK_FOLLOWING_COUNT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    case h.MetadataFields.TIKTOK_LIKES_COUNT:
                        a = a.format({
                            platformQuantityHook: () => g.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
                                count: o
                            })
                        });
                        break;
                    default:
                        return null
                }
                break;
            default:
                return null
        }
        return a
    }

    function v(e) {
        return Object.values(e.roles).some(e => {
            var t;
            return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
        })
    }

    function T(e) {
        var t, n;
        let {
            guildMember: i,
            guild: s,
            channel: r,
            onlyChannelConnectionRoles: o = !1
        } = e;
        if (null == i) return null;
        if (null == s && null != r && (s = _.default.getGuild(r.getGuildId())), null == s) return null;
        let u = i.roles.map(e => {
                var t;
                return null == s ? void 0 : null === (t = s.roles) || void 0 === t ? void 0 : t[e]
            }).filter(e => {
                var t;
                return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
            }).sort((e, t) => (a(null != e && null != t, "roleA or roleB is null"), t.position - e.position)),
            d = l.intersection(u, (0, f.default)(r));
        return d.length > 0 ? null !== (t = d[0]) && void 0 !== t ? t : null : o ? null : null !== (n = u[0]) && void 0 !== n ? n : null
    }

    function I(e, t) {
        if (null == e || "" === e) return null;
        let n = new Date(e);
        return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
    }(i = s || (s = {}))[i.AND = 0] = "AND", i[i.OR = 1] = "OR"
}