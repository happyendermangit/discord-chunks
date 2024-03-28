function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var r = n("442837"),
        a = n("292556"),
        s = n("695346"),
        i = n("292959"),
        l = n("626135"),
        o = n("378364"),
        u = n("981631"),
        d = n("689938");

    function c() {
        return m() && o.default.experiment.getCurrentConfig({
            location: "holiday_events_is_eligible"
        }, {
            autoTrackExposure: !1
        }).enabled
    }

    function p() {
        let {
            enabled: e
        } = o.default.experiment.useExperiment({
            location: "holiday_events_use_eligible"
        }, {
            autoTrackExposure: !1
        });
        return m() && e
    }

    function f() {
        return null != o.default.ringtone && null != o.default.getRingtoneSettingsLabel
    }

    function m() {
        let e = Date.now();
        return e >= o.default.startTimeMs && e <= o.default.endTimeMs
    }
    t.default = {
        subscribe: function(e) {
            return o.default.experiment.subscribe({
                location: "holiday_events_subscribe"
            }, e)
        },
        isEligible: c,
        isRingtoneDisabled: function() {
            return null == o.default.ringtone || i.default.isSoundDisabled(o.default.ringtone)
        },
        isRingtoneEligible: function() {
            return c() && f()
        },
        onRingtoneSettingValueChange: function(e) {
            let t = i.default.getDisabledSounds();
            if (null == o.default.ringtone) return;
            let n = t.filter(e => e !== o.default.ringtone);
            !e && n.push(o.default.ringtone), a.default.setDisabledSounds(n), l.default.track(u.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
                toggled_on: e,
                sound_name: o.default.ringtone
            })
        },
        useIsEligible: p,
        useIsRingtoneDisabled: function() {
            return (0, r.useStateFromStores)([i.default], () => null == o.default.ringtone || i.default.isSoundDisabled(o.default.ringtone))
        },
        useIsRingtoneEligible: function() {
            return p() && f()
        },
        useRingtoneSettingDescription: function() {
            return s.NativePhoneIntegrationEnabled.useSetting() ? void 0 : d.default.Messages.ENABLE_PHONE_INTEGRATION
        },
        useRingtoneSettingValue: function() {
            let e = (0, r.useStateFromStores)([i.default], () => i.default.getDisabledSounds()),
                t = s.NativePhoneIntegrationEnabled.useSetting();
            return null != o.default.ringtone && t && !e.includes(o.default.ringtone)
        },
        getAppSpinnerSources: function() {
            return m() ? o.default.appSpinnerSources : null
        },
        getLoadingTips: function() {
            var e;
            return m() ? null === (e = o.default.getLoadingTips) || void 0 === e ? void 0 : e.call(o.default) : null
        }
    }
}