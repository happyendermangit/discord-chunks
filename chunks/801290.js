function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return p
        }
    }), E("222007");
    var t = E("917351"),
        o = E.n(t),
        n = E("938850"),
        r = E("151426"),
        i = E("95410"),
        a = E("689988"),
        I = E("700507"),
        s = E("76393"),
        T = E("235004"),
        S = E("271938"),
        N = E("42887"),
        O = E("299039"),
        A = E("891760"),
        R = E("536692"),
        l = E("504385"),
        u = E("872173"),
        L = E("353927");
    let C = e => "AudioContextSettingsMigrated:".concat(e),
        D = e => e === L.MediaEngineContextTypes.STREAM ? n.AudioSettingsDefaultVolumes.STREAM : n.AudioSettingsDefaultVolumes.USER;

    function c() {
        (0, A.shouldReadWriteAudioSettings)() && ! function() {
            let e = i.default.get(C(S.default.getId()));
            !e && u.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
                let _ = !1;
                for (let [E, t] of Object.entries(N.default.getState().settingsByContext)) {
                    let o = (0, l.coerceAudioContextForProto)(E);
                    if (null == o) continue;
                    let n = e[o],
                        r = String(Date.now()),
                        i = {};
                    for (let [e, _] of Object.entries(t.localMutes)) i[e] = {
                        muted: _,
                        volume: D(E),
                        modifiedAt: r,
                        soundboardMuted: !1
                    };
                    for (let [e, _] of Object.entries(t.localVolumes)) i[e] = {
                        muted: !1,
                        modifiedAt: r,
                        ...i[e],
                        volume: (0, l.snapVolumeToDefault)(_, E)
                    };
                    let a = Object.keys(n).length;
                    for (let [e, [E, t]] of Object.entries(i).entries()) {
                        let o = 300 - a - (e + 1) <= 0;
                        if (o) break;
                        null == n[E] && (_ = !0, n[E] = t)
                    }
                }
                return i.default.set(C(S.default.getId()), !0), _
            }, u.UserSettingsDelay.AUTOMATED)
        }()
    }
    let d = o.debounce(() => {
            M()
        }, 2e3),
        U = o.debounce(I.remoteAudioSettingsUpdate, 500, {
            maxWait: 500
        });

    function M() {
        u.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
            let _ = !1;
            return (0, R.drainPendingAudioSettings)((E, t, o) => {
                let n = function(e, _, E, t) {
                    var o, n, i, a, I;
                    let s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        T = (0, l.coerceAudioContextForProto)(E);
                    if (null == T) return !1;
                    let S = e[T];
                    if (S[_] = null !== (o = S[_]) && void 0 !== o ? o : (n = E, r.AudioContextSetting.create({
                            muted: !1,
                            volume: D(n)
                        })), t(S[_]), S[_].modifiedAt = String(Date.now()), s) {
                        ;
                        i = S, a = _, I = E, i[a].volume !== D(I) || i[a].muted || i[a].soundboardMuted || delete i[a]
                    }
                    return ! function(e) {
                        let _ = O.default.entries(e),
                            E = _.length;
                        if (E <= 300) return;
                        let t = _.sort((e, _) => {
                                let [E, {
                                    modifiedAt: t
                                }] = e, [o, {
                                    modifiedAt: n
                                }] = _;
                                return Number(t) - Number(n)
                            }),
                            o = E - 300;
                        for (let _ = 0; _ < o; _++) {
                            let [E] = t[_];
                            delete e[E]
                        }
                    }(S), !0
                }(e, t, E, e => {
                    Object.assign(e, o)
                });
                _ = _ || n
            }), _
        }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function h(e) {
        var _, E, t;
        let {
            context: o,
            userId: n,
            volume: r
        } = e;
        if (n === S.default.getId() || !(0, A.shouldReadWriteAudioSettings)()) return;
        let i = s.default.getRemoteSessionId();
        null != i && U(i, n, o, {
            muted: N.default.isLocalMute(n, o),
            volume: r
        }), _ = o, E = n, t = r, (0, R.updatePendingSettings)(_, E, {
            volume: t
        }), d()
    }

    function P(e) {
        let {
            context: _,
            userId: E
        } = e;
        if (E !== S.default.getId()) {
            if ((0, A.shouldReadWriteAudioSettings)()) {
                var t, o, n;
                t = _, o = E, n = N.default.isLocalMute(E, _), (0, R.updatePendingSettings)(t, o, {
                    muted: n
                }), d.cancel(), M()
            }
        }
    }

    function m(e) {
        let {
            context: _,
            userId: E
        } = e;
        if (E !== S.default.getId()) {
            if ((0, A.shouldReadWriteAudioSettings)()) {
                var t, o, n;
                t = _, o = E, n = T.default.isLocalSoundboardMuted(E), (0, R.updatePendingSettings)(t, o, {
                    soundboardMuted: n
                }), d.cancel(), M()
            }
        }
    }
    class G extends a.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: c,
                AUDIO_SET_LOCAL_VOLUME: h,
                AUDIO_TOGGLE_LOCAL_MUTE: P,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: m
            }
        }
    }
    var p = new G
}