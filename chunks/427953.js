function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActivityInTextSupportedForChannelType: function() {
            return u
        },
        isActivitiesInTextEnabled: function() {
            return f
        },
        useIsActivitiesInTextEnabled: function() {
            return _
        },
        useActivitiesInTextButtonVisibility: function() {
            return c
        }
    });
    var s = n("298386"),
        i = n("446674"),
        r = n("862205"),
        a = n("42203");
    let o = (0, r.createExperiment)({
            kind: "user",
            id: "2023-08_activities_in_text",
            label: "Activities in Text User",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "enable Activities in text channels",
                config: {
                    enabled: !0,
                    showInOmniButtonMenu: !0,
                    showChatInputButton: !1
                }
            }, {
                id: 3,
                label: "enable Activities in text with the rocket button in chat input",
                config: {
                    enabled: !0,
                    showInOmniButtonMenu: !1,
                    showChatInputButton: !0
                }
            }]
        }),
        d = (0, r.createExperiment)({
            kind: "guild",
            id: "2023-11_activities_in_text_guild",
            label: "Activities in Text Guild",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "enable Activities in text channels",
                config: {
                    enabled: !0,
                    showInOmniButtonMenu: !0,
                    showChatInputButton: !1
                }
            }, {
                id: 3,
                label: "enable Activities in text with the rocket button in chat input",
                config: {
                    enabled: !0,
                    showInOmniButtonMenu: !1,
                    showChatInputButton: !0
                }
            }]
        });

    function u(e) {
        return [s.ChannelTypes.GUILD_TEXT, s.ChannelTypes.GROUP_DM, s.ChannelTypes.DM].includes(e)
    }

    function l(e) {
        return null != e && u(e.type)
    }

    function f(e, t) {
        if (null == e) return !1;
        let n = u(e.type);
        return (null == e ? void 0 : e.guild_id) != null ? d.getCurrentConfig({
            guildId: e.guild_id,
            location: t
        }, {
            autoTrackExposure: !0
        }).enabled && n : o.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !0
        }).enabled && n
    }

    function _(e, t) {
        let n = (0, i.useStateFromStores)([a.default], () => a.default.getChannel(e)),
            s = l(n),
            r = (null == n ? void 0 : n.guild_id) != null ? d : o,
            u = r.useExperiment({
                guildId: null == n ? void 0 : n.guild_id,
                location: t
            }, {
                autoTrackExposure: !0
            });
        return u.enabled && s
    }

    function c(e, t) {
        let n = (0, i.useStateFromStores)([a.default], () => a.default.getChannel(e)),
            s = l(n),
            r = (null == n ? void 0 : n.guild_id) != null ? d : o,
            u = r.useExperiment({
                guildId: null == n ? void 0 : n.guild_id,
                location: t
            }, {
                autoTrackExposure: !0
            });
        return u.enabled && s ? {
            showInOmniButtonMenu: u.showInOmniButtonMenu,
            showChatInputButton: u.showChatInputButton
        } : null
    }
}