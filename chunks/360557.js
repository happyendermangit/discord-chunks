function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return N
        }
    }), E("222007");
    var t = E("689988"),
        o = E("271938"),
        n = E("42203"),
        r = E("957255"),
        i = E("800762"),
        a = E("233965"),
        I = E("699209"),
        s = E("32346"),
        T = E("49111");
    class S extends t.default {
        constructor(...e) {
            super(...e), this.actions = {
                VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
                GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
                LOGOUT: () => this.handleLogout()
            }, this.handleVoiceChannelSelect = e => {
                let {
                    channelId: _,
                    guildId: E
                } = e, {
                    enableHangStatus: t,
                    setDefaultStatus: o
                } = I.HangStatusExperiment.getCurrentConfig({
                    guildId: null != E ? E : T.EMPTY_STRING_SNOWFLAKE_ID,
                    location: "HangStatusManager"
                }, {
                    autoTrackExposure: !0
                });
                if (null == E && null == _) {
                    this.handleDisconnectFromVoiceChannel(), this.previousVoiceChannelId = _;
                    return
                }
                if (!t || _ === this.previousVoiceChannelId) return;
                if (this.previousVoiceChannelId = _, null == E || null == _) return;
                let i = n.default.getChannel(_);
                if (null == i || i.type !== T.ChannelTypes.GUILD_VOICE || !r.default.can(T.Permissions.SET_VOICE_CHANNEL_STATUS, i)) return;
                let S = s.default.getCurrentHangStatus();
                if (null != S) return;
                let N = s.default.getCurrentDefaultStatus();
                if ((null == N ? void 0 : N.expiresAt) != null && (null == N ? void 0 : N.expiresAt) >= Date.now()) {
                    if (N.status === T.HangStatusTypes.CUSTOM && null != N.customHangStatus) {
                        let {
                            status: e,
                            emoji: _
                        } = N.customHangStatus;
                        (0, a.updateCustomHangStatus)(e, _);
                        return
                    }
                    if (null == N.status) return;
                    else {
                        (0, a.updateHangStatus)(N.status);
                        return
                    }
                }
                o && (0, a.updateHangStatus)(T.HangStatusTypes.CHILLING)
            }, this.handleGuildMemberUpdate = e => {
                let {
                    user: _,
                    guildId: E
                } = e;
                if (_.id !== o.default.getId()) return;
                let t = i.default.getCurrentClientVoiceChannelId(E);
                if (null == t) return;
                let I = s.default.getCurrentHangStatus();
                if (null == I) return;
                let S = n.default.getChannel(t);
                !r.default.can(T.Permissions.SET_VOICE_CHANNEL_STATUS, S) && (0, a.clearHangStatus)()
            }, this.handleDisconnectFromVoiceChannel = () => {
                (0, a.clearHangStatus)()
            }, this.handleLogout = () => {
                this.handleDisconnectFromVoiceChannel()
            }
        }
    }
    var N = new S
}