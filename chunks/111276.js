function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return S
        }
    }), E("222007");
    var t = E("689988"),
        o = E("305961"),
        n = E("718517"),
        r = E("299039"),
        i = E("388142"),
        a = E("711454"),
        I = E("578899");
    let s = 0;
    class T extends t.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                IDLE: () => this.handleIdleChange()
            }, this.handleConnectionOpen = e => {
                this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment()
            }, this.handleIdleChange = () => {
                Date.now() - s > n.default.Millis.HOUR && this._attemptDeadchatPrompt()
            }, this._attemptDeadchatPrompt = () => {
                let e = o.default.getGuilds(),
                    _ = r.default.keys(e).filter(e => I.SimpleDeadchatPromptExperiment.getCurrentConfig({
                        guildId: e,
                        location: "manager"
                    }).triggerDeadchat);
                _.length > 0 && (s = Date.now(), (0, i.initiateChannelPrompts)(_))
            }, this._triggerGamingStatsSetupExperiment = () => {
                let e = o.default.getGuilds();
                r.default.keys(e).forEach(e => {
                    a.GamingStatsSetupExperiment.trackExposure({
                        guildId: e,
                        location: "manager"
                    })
                })
            }
        }
    }
    var S = new T
}