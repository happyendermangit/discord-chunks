function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("626135"),
        a = n("524484"),
        o = n("981631");

    function l(e) {
        switch (e) {
            case a.ShakeLocation.CHAT_INPUT:
                return "chat_input";
            case a.ShakeLocation.MENTION:
                return "mention";
            case a.ShakeLocation.VOICE_USER:
                return "voice_user"
        }
    }

    function u(e) {
        switch (e) {
            case a.ConfettiLocation.CHAT_INPUT:
                return "chat_input";
            case a.ConfettiLocation.MEMBER_USER:
                return "member_user";
            case a.ConfettiLocation.REACTION:
                return "reaction";
            case a.ConfettiLocation.CALL_TILE:
                return "call_tile"
        }
    }

    function d(e, t) {
        return Object.entries(e).filter(e => {
            let [t, n] = e;
            return n
        }).map(e => {
            let [n] = e;
            return t(Number.parseInt(n))
        })
    }
    let _ = r().throttle(e => {
        let {
            enabled: t,
            combosEnabled: n,
            combosRequiredCount: i,
            screenshakeEnabled: r,
            shakeIntensity: a,
            screenshakeEnabledLocations: _,
            confettiEnabled: c,
            confettiSize: E,
            confettiCount: I,
            confettiEnabledLocations: T
        } = e;
        s.default.track(o.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
            enabled: t,
            combos_enabled: n,
            combos_required_count: i,
            screenshake_enabled: r,
            shake_intensity: a,
            screenshake_enabled_locations: d(_, l),
            confetti_enabled: c,
            confetti_size: E,
            confetti_count: I,
            confetti_enabled_locations: d(T, u)
        })
    }, 5e3);
    t.default = _
}