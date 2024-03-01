function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var l = n("759843"),
        i = n("872717"),
        r = n("913144"),
        d = n("54239"),
        s = n("605250"),
        u = n("413476"),
        a = n("81732"),
        o = n("479756"),
        E = n("38654"),
        _ = n("267567"),
        S = n("271938"),
        I = n("26989"),
        c = n("305961"),
        T = n("730622"),
        G = n("840707"),
        f = n("900938"),
        p = n("49111"),
        D = n("782340");
    let A = new s.default("GuildSettingsActionCreators"),
        L = {
            init(e, t, n, l) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_INIT",
                    guildId: e,
                    section: t,
                    subsection: l,
                    location: n
                })
            },
            async open(e, t, l, i) {
                var r;
                await n.el("725621").then(n.bind(n, "725621")), (null === (r = c.default.getGuild(e)) || void 0 === r ? void 0 : r.hasFeature(p.GuildFeatures.COMMUNITY)) && (t === p.GuildSettingsSections.GUILD_AUTOMOD && (t = p.GuildSettingsSections.SAFETY, i = p.GuildSettingsSubsections.SAFETY_AUTOMOD), t === p.GuildSettingsSections.MEMBER_VERIFICATION && (t = p.GuildSettingsSections.SAFETY, i = p.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), L.init(e, t, l, i), (0, d.pushLayer)(p.Layers.GUILD_SETTINGS)
            },
            close() {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_CLOSE"
                })
            },
            saveRouteStack(e) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                    state: e
                })
            },
            setSection(e, t) {
                var n;
                let l = f.default.getGuildId();
                null != l && ((null === (n = c.default.getGuild(l)) || void 0 === n ? void 0 : n.hasFeature(p.GuildFeatures.COMMUNITY)) && (e === p.GuildSettingsSections.GUILD_AUTOMOD && (e = p.GuildSettingsSections.SAFETY, t = p.GuildSettingsSubsections.SAFETY_AUTOMOD), e === p.GuildSettingsSections.MEMBER_VERIFICATION && (e = p.GuildSettingsSections.SAFETY, t = p.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), r.default.dispatch({
                    type: "GUILD_SETTINGS_SET_SECTION",
                    section: e,
                    subsection: t
                }))
            },
            setSearchQuery(e) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                    searchQuery: e
                })
            },
            selectRole: (e, t) => r.default.dispatch({
                type: "GUILD_SETTINGS_ROLE_SELECT",
                roleId: e,
                searchQuery: t
            }),
            updateEmbed(e, t, n) {
                i.default.patch({
                    url: p.Endpoints.GUILD_WIDGET(e),
                    body: {
                        enabled: t,
                        channel_id: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    r.default.dispatch({
                        type: "GUILD_SETTINGS_SET_WIDGET",
                        guildId: e,
                        enabled: t.body.enabled,
                        channelId: t.body.channel_id
                    })
                })
            },
            updateMFALevel(e) {
                let {
                    guildId: t,
                    level: n,
                    isEnabled: l
                } = e;
                return (0, T.default)(e => i.default.post({
                    url: p.Endpoints.GUILD_MFA(t),
                    body: {
                        level: n,
                        ...e
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: D.default.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
                        actionText: l ? D.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : D.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
                    },
                    checkEnabled: !1
                }).then(e => r.default.dispatch({
                    type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                    level: e.body.level
                }))
            },
            updateIcon(e, t) {
                i.default.patch({
                    url: p.Endpoints.GUILD(e),
                    body: {
                        icon: t
                    },
                    oldFormErrors: !0
                }).then(() => {
                    r.default.dispatch({
                        type: "GUILD_SETTINGS_UPDATE",
                        icon: t
                    }), a.default.checkGuildTemplateDirty(e)
                }, e => r.default.dispatch({
                    type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                    errors: e.body
                }))
            },
            cancelChanges(e) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_CANCEL_CHANGES",
                    guildId: e
                })
            },
            updateGuild(e) {
                let {
                    safetyAlertsChannelId: t,
                    ...n
                } = e, l = {
                    ...n
                }, i = f.default.getGuildId();
                if (null != i) {
                    var d;
                    let e = null === (d = u.RaidAlertExperiment.getCurrentConfig({
                        guildId: i,
                        location: "be0372_1"
                    })) || void 0 === d ? void 0 : d.enableRaidAlerts;
                    e && null != t && (l.safetyAlertsChannelId = t)
                }
                r.default.dispatch({
                    type: "GUILD_SETTINGS_UPDATE",
                    ...l
                })
            },
            saveGuild(e, t) {
                let {
                    name: n,
                    description: l,
                    icon: d,
                    splash: s,
                    banner: u,
                    homeHeader: o,
                    afkChannelId: E,
                    afkTimeout: _,
                    systemChannelId: S,
                    verificationLevel: I,
                    defaultMessageNotifications: c,
                    explicitContentFilter: T,
                    features: G,
                    systemChannelFlags: f,
                    preferredLocale: D,
                    rulesChannelId: L,
                    safetyAlertsChannelId: N,
                    discoverySplash: U,
                    publicUpdatesChannelId: R,
                    premiumProgressBarEnabled: g
                } = t, C = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, h = {
                    name: n,
                    description: l,
                    icon: d,
                    splash: s,
                    banner: u,
                    home_header: o,
                    features: G,
                    preferred_locale: D,
                    afk_channel_id: E,
                    afk_timeout: _,
                    system_channel_id: S,
                    verification_level: I,
                    default_message_notifications: c,
                    explicit_content_filter: T,
                    system_channel_flags: f,
                    rules_channel_id: L,
                    discovery_splash: U,
                    public_updates_channel_id: R,
                    safety_alerts_channel_id: N,
                    ...null != g ? {
                        premium_progress_bar_enabled: g
                    } : null
                };
                return r.default.dispatch({
                    type: "GUILD_SETTINGS_SUBMIT"
                }), i.default.patch({
                    url: p.Endpoints.GUILD(e),
                    query: {
                        for_discovery: C.isForDiscovery
                    },
                    body: h,
                    oldFormErrors: !0
                }).then(t => {
                    r.default.dispatch({
                        type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                        guild: t.body
                    }), a.default.checkGuildTemplateDirty(e)
                }, e => {
                    if (r.default.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                            errors: e.body
                        }), A.error("Failed to save guild settings", {
                            errors: e.body
                        }), C.throwErr) throw e.body
                })
            },
            updateGuildModeration: (e, t) => i.default.patch({
                url: p.Endpoints.GUILD(e),
                body: {
                    verification_level: t.verificationLevel,
                    explicit_content_filter: t.explicitContentFilter
                },
                oldFormErrors: !0
            }).then(t => (a.default.checkGuildTemplateDirty(e), t)),
            transferOwnership(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return (0, T.default)(r => G.default.patch({
                    url: p.Endpoints.GUILD(e),
                    body: {
                        owner_id: t,
                        code: i,
                        ...r
                    },
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: l.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                        properties: {
                            guild_id: e,
                            verification_type: n
                        }
                    }
                }), {
                    modalProps: {
                        title: D.default.Messages.TRANSFER_OWNERSHIP,
                        actionText: D.default.Messages.TRANSFER_OWNERSHIP
                    },
                    checkEnabled: !1
                })
            },
            sendTransferOwnershipPincode(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return G.default.put({
                    url: p.Endpoints.GUILD_PINCODE(e),
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: l.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                        properties: {
                            guild_id: e,
                            is_resend: t
                        }
                    }
                })
            },
            deleteGuild: (e, t) => (0, T.default)(t => i.default.post({
                url: p.Endpoints.GUILD_DELETE(e),
                body: t,
                oldFormErrors: !0
            }), {
                modalProps: {
                    title: D.default.Messages.DELETE_SERVER_TITLE.format({
                        name: t
                    }),
                    actionText: D.default.Messages.DELETE_SERVER,
                    disallowBackupCodes: !0
                },
                checkEnabled: !1
            }).then(() => {
                L.close()
            }),
            async leaveGuild(e) {
                await i.default.delete({
                    url: p.Endpoints.GUILD_LEAVE(e),
                    body: {
                        lurking: _.default.isLurking(e) || I.default.isCurrentUserGuest(e)
                    },
                    oldFormErrors: !0
                }), L.close()
            },
            async updateMemberRoles(e, t, n, l, d) {
                if (E.default.isFullServerPreview(e) && t === S.default.getId()) {
                    (0, o.updateImpersonatedRoles)(e, n);
                    return
                }
                await i.default.patch({
                    url: p.Endpoints.GUILD_MEMBER(e, t),
                    body: {
                        roles: n
                    },
                    oldFormErrors: !0
                }), l.forEach(n => r.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_ADD",
                    guildId: e,
                    roleId: n,
                    userId: t
                })), d.forEach(n => r.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_REMOVE",
                    guildId: e,
                    roleId: n,
                    userId: t
                }))
            },
            bulkAddMemberRoles: (e, t, n) => i.default.patch({
                url: p.Endpoints.GUILD_ROLE_MEMBERS(e, t),
                body: {
                    member_ids: n
                }
            }).then(n => {
                r.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_BULK_ADD",
                    guildId: e,
                    roleId: t,
                    added: n.body
                })
            }),
            updateRolesEditSection(e) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE",
                    section: e
                })
            },
            enableIntegration: (e, t, n) => i.default.post({
                url: p.Endpoints.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n
                },
                oldFormErrors: !0
            }),
            disableIntegration: (e, t) => i.default.delete({
                url: p.Endpoints.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0
            }),
            updateIntegration: (e, t, n, l, r) => i.default.patch({
                url: p.Endpoints.GUILD_INTEGRATION(e, t),
                body: {
                    expire_behavior: n,
                    expire_grace_period: l,
                    enable_emoticons: r
                },
                oldFormErrors: !0
            }),
            syncIntegration(e, t) {
                i.default.post({
                    url: p.Endpoints.GUILD_INTEGRATION_SYNC(e, t),
                    oldFormErrors: !0
                })
            }
        };
    var N = L
}