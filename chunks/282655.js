function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return R
        }
    }), E("222007");
    var t = E("689988"),
        o = E("716241"),
        n = E("651057"),
        r = E("299285"),
        i = E("271938"),
        a = E("42203"),
        I = E("18494"),
        s = E("101125"),
        T = E("774539"),
        S = E("49111");
    async function N(e) {
        await n.default.fetchApplications(e, !1)
    }
    async function O(e) {
        if (null == e) return;
        let _ = a.default.getChannel(e);
        if (null == _ || !(0, T.isVoiceUserGameActivityEnabled)("running_games_change", !1)) return;
        let E = s.default.getActivities();
        if (0 === E.length) return;
        let t = [...E].filter(e => e.type === S.ActivityTypes.PLAYING && e.application_id).map(e => e.application_id);
        await N([...t]);
        let n = r.default.getApplication(t[0]);
        null != n && o.default.trackWithMetadata(S.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: _.guild_id,
            game_name: n.name,
            user_id: i.default.getId()
        })
    }
    class A extends t.default {
        handleRunningGamesChange() {
            let e = I.default.getVoiceChannelId();
            O(e)
        }
        handleVoiceChannelSelect(e) {
            let {
                channelId: _
            } = e;
            O(_)
        }
        constructor(...e) {
            super(...e), this.actions = {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            }
        }
    }
    var R = new A
}