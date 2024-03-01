function(e, t, n) {
    "use strict";
    let i, r, s, a;
    n.r(t), n.d(t, {
        default: function() {
            return t_
        }
    }), n("222007"), n("808653"), n("506083"), n("424973"), n("256955");
    var o, l, u = n("627445"),
        c = n.n(u),
        d = n("917351"),
        f = n.n(d),
        E = n("570277"),
        p = n.n(E),
        h = n("446674"),
        _ = n("773364"),
        S = n("95410"),
        m = n("862337"),
        T = n("913144"),
        g = n("49671"),
        I = n("6193"),
        C = n("965068"),
        v = n("386045"),
        A = n("18346"),
        R = n("605250"),
        N = n("808122"),
        O = n("733589"),
        D = n("161454"),
        y = n("933034"),
        P = n("746800"),
        L = n("584687"),
        b = n("705500"),
        M = n("797323"),
        U = n("238847"),
        G = n("981699"),
        w = n("140622"),
        k = n("16001"),
        x = n("631508"),
        F = n("368765"),
        V = n("403770"),
        B = n("940146"),
        H = n("353500"),
        Y = n("103979"),
        j = n("665862"),
        W = n("122530"),
        K = n("928609"),
        z = n("891760"),
        q = n("536692"),
        X = n("374363"),
        Q = n("599110"),
        Z = n("922932"),
        J = n("718517"),
        $ = n("773336"),
        ee = n("286235"),
        et = n("50885"),
        en = n("13798"),
        ei = n("271938"),
        er = n("366679"),
        es = n("533222"),
        ea = n("42203"),
        eo = n("760190"),
        el = n("855867"),
        eu = n("945956"),
        ec = n("123647"),
        ed = n("49111"),
        ef = n("706530"),
        eE = n("180524"),
        ep = n("397336"),
        eh = n("353927"),
        e_ = n("782340");
    let eS = new R.default("MediaEngineStore");
    (l = o || (o = {}))[l.DETACHED = 0] = "DETACHED", l[l.WAITING = 1] = "WAITING", l[l.ATTACHED = 2] = "ATTACHED", l[l.STARTED = 3] = "STARTED", l[l.PLAYING = 4] = "PLAYING", l[l.SILENCE = 5] = "SILENCE";
    let em = "MediaEngineStore",
        eT = {
            left: 1,
            right: 1
        };

    function eg() {
        let e = {
            mode: ed.InputModes.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -60,
                autoThreshold: $.isPlatformEmbedded || __OVERLAY__,
                vadUseKrisp: !0,
                vadLeading: 5,
                vadTrailing: 25,
                delay: 20,
                shortcut: []
            },
            vadUseKrispSettingVersion: 0,
            ncUseKrispSettingVersion: 0,
            ncUseKrispjsSettingVersion: 0,
            av1EnabledSettingVersion: 0,
            mute: !1,
            deaf: !1,
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            experimentalEncoders: !1,
            hardwareH264: !0,
            hardwareEnabledVersion: 0,
            silenceWarning: !0,
            attenuation: 0,
            attenuateWhileSpeakingSelf: !1,
            attenuateWhileSpeakingOthers: !0,
            localMutes: {},
            disabledLocalVideos: {},
            videoToggleStateMap: {},
            localVolumes: {},
            localPans: {},
            inputVolume: eh.DEFAULT_VOLUME,
            outputVolume: eh.DEFAULT_VOLUME,
            inputDeviceId: eh.DEFAULT_DEVICE_ID,
            outputDeviceId: eh.DEFAULT_DEVICE_ID,
            videoDeviceId: eh.DEFAULT_DEVICE_ID,
            qos: !1,
            qosMigrated: !1,
            videoHook: eI.supports(eh.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            av1Enabled: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        };
        return e
    }
    let eI = (0, _.initializeMediaEngine)((0, _.determineMediaEngine)()),
        eC = {},
        ev = new Set([eh.MediaEngineContextTypes.DEFAULT]),
        eA = eI.supports(eh.Features.AUTO_ENABLE),
        eR = !1,
        eN = eh.MediaEngineContextTypes.STREAM,
        eO = {
            [eh.DEFAULT_DEVICE_ID]: ti(e_.default.Messages.NO_INPUT_DEVICES)
        },
        eD = {
            [eh.DEFAULT_DEVICE_ID]: ti(e_.default.Messages.NO_OUTPUT_DEVICES)
        },
        ey = {
            [eh.DEFAULT_DEVICE_ID]: ti(e_.default.Messages.NO_VIDEO_DEVICES)
        },
        eP = !1,
        eL = !1,
        eb = !1,
        eM = !1,
        eU = !1,
        eG = eh.DISABLED_DEVICE_ID,
        ew = !1,
        ek = !1,
        ex = !1,
        eF = null,
        eV = !1,
        eB = !1,
        eH = !1,
        eY = !1,
        ej = !1,
        eW = null,
        eK = !1,
        ez = !1,
        eq = !1;
    K.default.hasPermission(eE.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), K.default.hasPermission(eE.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    let eX = new Set,
        eQ = !1,
        eZ = !1,
        eJ = {},
        e$ = {},
        e0 = 5 * J.default.Millis.SECOND;

    function e1() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT,
            t = eC[e];
        return null == t && (t = eg(), eC[e] = t), t
    }

    function e2(e) {
        let t = e1(e.context);
        e.setInputMode(t.mode, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                return ej || !1
            }(),
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: t.modeOptions.delay
        })
    }

    function e4(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.DEFAULT_VOLUME;
        return f.clamp(e, 0, t)
    }

    function e3(e) {
        let t = e1(e.context),
            n = !eA || t.mute || t.deaf;
        e.context === eh.MediaEngineContextTypes.DEFAULT && (n = n || eP || eL || eb || !K.default.didHavePermission(eE.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
    }

    function e6() {
        var e, t, n;
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
            o = s;
        if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, $.isWindows)() && I.cancelAttachToProcess(o.desktopSource.soundshareId), eI.setGoLiveSource(null, eN)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eI.setGoLiveSource(null, eN), (eU || r) && (eG = (eU = r) ? ts(ey, e1().videoDeviceId) : eh.DISABLED_DEVICE_ID, eI.setVideoInputDevice(eG)), s = a, null != a) {
            let e = {
                resolution: a.quality.resolution,
                frameRate: a.quality.frameRate
            };
            if (null != a.desktopSource) {
                let {
                    useQuartzCapturer: t
                } = x.default.getCurrentConfig({
                    location: "f627ab_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    hdrCaptureMode: n
                } = G.default.getCurrentConfig({
                    location: "f627ab_2"
                }, {
                    autoTrackExposure: !1
                }), r = e1().videoHook, s = eI.supports(eh.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                    videoHookStaleFrameTimeoutMs: o
                } = B.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
                    graphicsCaptureStaleFrameTimeoutMs: l
                } = j.default.getConfig(s && e8(), "e225cfdf5_wgc2", !0);
                eI.setGoLiveSource({
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: e8(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: t,
                        allowScreenCaptureKit: e9(!0),
                        videoHookStaleFrameTimeoutMs: o,
                        graphicsCaptureStaleFrameTimeoutMs: l,
                        hdrCaptureMode: n
                    },
                    quality: e
                }, eN)
            }
            null != a.cameraSource && eI.setGoLiveSource({
                cameraDescription: {
                    videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: a.cameraSource.audioDeviceGuid
                },
                quality: e
            }, eN)
        }
    }

    function e5(e, t, n, i) {
        var r;
        let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
        null == e$[s] && (e$[s] = new Set);
        let a = null != t && !e$[s].has(t);
        a && e$[s].add(t), (null == t || a) && Q.default.track(ed.AnalyticEvents.SOUNDSHARE_FAILED, {
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: i,
            ...(0, y.default)(e)
        })
    }

    function e7(e) {
        let t = e1(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(es.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(es.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(es.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, $.isWeb)()) {
            let n = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(n)
        }
    }

    function e8() {
        return (0, $.isWindows)() && p.satisfies(null === g.default || void 0 === g.default ? void 0 : g.default.os.release, ef.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function e9(e) {
        return !!((0, $.isMac)() && eI.supports(eh.Features.SCREEN_CAPTURE_KIT) && p.satisfies(null === g.default || void 0 === g.default ? void 0 : g.default.os.release, ef.DARWIN_SCKIT_VERSION)) && F.default.getCurrentConfig({
            location: "screenCaptureKitEnabled"
        }, {
            autoTrackExposure: e
        }).allowScreenCaptureKit
    }
    let te = new class {
        start() {
            !this.started && (this.started = !0, eI.on(_.MediaEngineEvent.Silence, this.handleSilence))
        }
        stop() {
            this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eI.removeListener(_.MediaEngineEvent.Silence, this.handleSilence), T.default.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null
            }))
        }
        update() {
            let e = e1();
            !eV && eu.default.getState() === ed.RTCConnectionStates.RTC_CONNECTED && e.mode === ed.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
        }
        reset() {
            this.stop(), this.update()
        }
        constructor() {
            this.noVoiceTimeout = 5e3, this.voiceTimeout = 1500, this.started = !1, this.handleSilence = e => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
                    this.stateChangeTimeout = null, this.started && (T.default.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: t
                    }), e && (eB = !0))
                }, t ? this.voiceTimeout : this.noVoiceTimeout)
            }
        }
    };

    function tt(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e1(t);
        return Object.assign(i, e), !__OVERLAY__ && n && S.default.set(em, eC), i
    }

    function tn() {
        !eA && eI.enable().then(() => T.default.dispatch({
            type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
            enabled: !0,
            unmute: !1
        }))
    }

    function ti(e) {
        return {
            id: eh.DEFAULT_DEVICE_ID,
            index: 0,
            name: e,
            disabled: !0
        }
    }

    function tr(e, t) {
        if (0 === e.length) {
            let e = ti(t);
            return {
                [e.id]: e
            }
        }
        return f(e).map(e => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1
        })).keyBy("id").value()
    }

    function ts(e, t) {
        var n;
        let i = null !== (n = e[t]) && void 0 !== n ? n : f(e).values().first();
        return null != i ? i.id : t
    }

    function ta() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = null !== (e = X.default.settings.audioContextSettings) && void 0 !== e ? e : {
                user: {},
                stream: {}
            };
        for (let e of Object.keys(i)) {
            let r = e === ep.ProtoAudioSettingsContextTypes.USER ? eh.MediaEngineContextTypes.DEFAULT : eh.MediaEngineContextTypes.STREAM,
                s = r === eh.MediaEngineContextTypes.STREAM ? eh.DEFAULT_STREAM_VOLUME : eh.DEFAULT_VOLUME,
                a = null !== (t = i[e]) && void 0 !== t ? t : {},
                {
                    localMutes: o,
                    localVolumes: l
                } = e1(r);
            for (let [e, t] of Object.entries(a)) null == (0, q.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eI.eachConnection(n => {
                n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
            }, r));
            if (n) {
                let e = new Set([...Object.keys(o), ...Object.keys(l)]);
                for (let t of e) null == a[t] && (delete o[t], delete l[t], eI.eachConnection(e => {
                    e.setLocalVolume(t, s), e.setLocalMute(t, !1)
                }, r))
            }
            tt({
                localMutes: o,
                localVolumes: l
            }, r)
        }
    }

    function to(e) {
        if (null == i) return eS.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
            soundshareId: null,
            soundshareSession: ""
        };
        {
            let t = i.getExperimentalSoundshare() ? e : Z.default.getAudioPid(e),
                n = "";
            return null != t && (n = Z.default.generateSessionFromPid(t)), {
                soundshareId: t,
                soundshareSession: n
            }
        }
    }

    function tl(e, t) {
        (0, $.isWindows)() && I.attachToProcess(e, {
            soundshare_session: t
        }).then(t => {
            null != t && !D.default.shouldContinueWithoutElevatedProcessForPID(e) && T.default.wait(() => {
                T.default.dispatch({
                    type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                    errorMessage: t
                })
            })
        })
    }

    function tu() {
        let e = eh.MediaEngineContextTypes.DEFAULT,
            {
                videoToggleStateMap: t
            } = e1(e);
        for (let [e, n] of Object.entries(t)) n === ed.VideoToggleState.AUTO_PROBING && delete t[e];
        tt({
            videoToggleStateMap: t
        }, e, !1)
    }

    function tc(e) {
        let t = e1();
        Q.default.track(ed.AnalyticEvents.VOICE_PROCESSING, {
            echo_cancellation: t.echoCancellation,
            noise_cancellation: t.noiseCancellation,
            noise_suppression: t.noiseSuppression,
            automatic_gain_control: t.automaticGainControl,
            location: e
        })
    }

    function td() {
        let e = e1(),
            t = e.inputDeviceId,
            n = es.default.hasEchoCancellation(t) || e.echoCancellation,
            i = es.default.hasNoiseSuppression(t) || e.noiseSuppression,
            r = es.default.hasAutomaticGainControl(t) || e.automaticGainControl,
            s = e.noiseCancellation;
        eI.setLoopback(eZ, {
            echoCancellation: n,
            noiseSuppression: i,
            automaticGainControl: r,
            noiseCancellation: s
        })
    }

    function tf() {
        return ej || !1
    }
    async function tE() {
        try {
            await et.default.ensureModule("discord_krisp"), et.default.requireModule("discord_krisp"), ej = !0, i.emitChange()
        } catch (t) {
            eS.warn("Failed to load Krisp module: ".concat(t.message)), ee.default.captureException(t);
            let e = eh.NoiseCancellerError.INITIALIZED;
            if (t.message.includes(": ")) {
                let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                e = isNaN(n) || 0 === n ? eh.NoiseCancellerError.INITIALIZED : n
            }
            Q.default.track(ed.AnalyticEvents.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), tt({
                noiseCancellation: !1
            })
        } finally {
            eY = !1
        }
    }

    function tp(e) {
        let {
            section: t
        } = e;
        return t === ed.UserSettingsSections.VOICE && tn(), !1
    }
    class th extends h.default.Store {
        initialize() {
            eI.on(_.MediaEngineEvent.Connection, e => {
                let {
                    maxSyncDelayOverride: t
                } = k.default.getCurrentConfig({
                    location: "f627ab_3"
                }, {
                    autoTrackExposure: !1
                });
                t > 0 && eI.setMaxSyncDelayOverride(t), e2(e), e3(e), e7(e);
                let n = e1();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                let {
                    useExperimentalRateControl: r
                } = H.default.getCurrentConfig({
                    location: "f627ab_4"
                }, {
                    autoTrackExposure: !1
                });
                r && e.setExperimentFlag(eh.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                {
                    (0, $.isWindows)() && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
                    let {
                        signalH265SupportNvenc: t
                    } = U.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportAMD: n
                    } = M.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    n && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportMacOS: i
                    } = b.default.getCurrentConfig({
                        location: "f627ab_8"
                    }, {
                        autoTrackExposure: !0
                    });
                    i && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
                }
                let {
                    signalAV1Support: a
                } = P.default.getCurrentConfig({
                    location: "f627ab_10"
                }, {
                    autoTrackExposure: !0
                });
                a && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                let {
                    allowSettingFullbandAndroid: o
                } = w.default.getCurrentConfig({
                    location: "f627ab_14"
                }, {
                    autoTrackExposure: !0
                });
                if (o && eI.setHasFullbandPerformance((0, N.hasPerformanceForKrispFullband)()), (0, A.default)(i)) {
                    let t = v.default.getSettings();
                    e.setExperimentFlag(eh.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                    let {
                        enableViewerClipping: n
                    } = Y.default.getCurrentConfig({
                        location: "f627ab_15"
                    }, {
                        autoTrackExposure: !1
                    });
                    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.VIEWERSIDE_CLIP_KFI_MS);
                    let {
                        allowQualityDecoupling: i
                    } = C.default.getCurrentConfig({
                        location: "MediaEngineStore_setupMediaEngine"
                    }, {
                        autoTrackExposure: !0
                    });
                    e.setQualityDecoupling(i)
                }
                for (let t of (n = e1(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== ei.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                for (let t of Object.keys(n.localVolumes)) t !== ei.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right)
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(_.BaseConnectionEvent.Speaking, (t, n) => {
                    T.default.dispatch({
                        type: "SPEAKING",
                        context: e.context,
                        userId: t,
                        speakingFlags: n
                    })
                }), e.context === eh.MediaEngineContextTypes.DEFAULT && (ew = !1, e.on(_.BaseConnectionEvent.SpeakingWhileMuted, () => {
                    ew = !0, i.emitChange()
                })), e.on(_.BaseConnectionEvent.DesktopSourceEnd, () => {
                    T.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context
                        }
                    })
                }), e.on(_.BaseConnectionEvent.SoundshareAttached, () => {
                    (null == s ? void 0 : s.desktopSource) != null && Q.default.track(ed.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, y.default)(null == s ? void 0 : s.desktopSource))
                }), e.on(_.BaseConnectionEvent.SoundshareFailed, e => {
                    let {
                        failureCode: t,
                        failureReason: n,
                        willRetry: i
                    } = e;
                    e5(null == s ? void 0 : s.desktopSource, t, n, i)
                }), e.on(_.BaseConnectionEvent.SoundshareSpeaking, () => {
                    (null == s ? void 0 : s.desktopSource) != null && (Q.default.track(ed.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, y.default)(null == s ? void 0 : s.desktopSource)), null != el.default.getHookError(ed.MediaEngineHookTypes.SOUND) && T.default.wait(() => T.default.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                    })))
                });
                let l = new m.Timeout;
                e.on(_.BaseConnectionEvent.SoundshareTrace, e => {
                    switch (e.type) {
                        case "soundshare_attach_requested":
                            l.start(e0, () => {
                                T.default.dispatch({
                                    type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                    errorMessage: "Sound Hook Failed"
                                })
                            });
                            break;
                        case "soundshare_recv_failed":
                            let t = e.reason,
                                n = e.code,
                                i = e.retry;
                            (null == s ? void 0 : s.desktopSource) != null && (e5(null == s ? void 0 : s.desktopSource, n, t, i), !i && (l.stop(), T.default.wait(() => T.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                errorMessage: t,
                                errorCode: n
                            }))));
                            break;
                        case "soundshare_state_transition":
                            4 === e.newState && (l.stop(), T.default.wait(() => T.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                            })))
                    }
                }), e.on(_.BaseConnectionEvent.InteractionRequired, e => {
                    T.default.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: e
                    })
                }), e.on(_.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, a) => {
                    (null == s ? void 0 : s.desktopSource) != null && Q.default.track(ed.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: r,
                        reinitialization: a,
                        ...(0, y.default)(null == s ? void 0 : s.desktopSource)
                    })
                }), e.on(_.BaseConnectionEvent.NoiseCancellationError, e => {
                    eS.warn("noisecancellererror event: ".concat(e)), eK = !0, Q.default.track(ed.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), T.default.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: !0
                    }), T.default.dispatch({
                        type: "AUDIO_SET_NOISE_CANCELLATION",
                        enabled: !1
                    }), T.default.dispatch({
                        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                        code: e
                    })
                }), e.on(_.BaseConnectionEvent.VoiceActivityDetectorError, e => {
                    eS.warn("voiceactivitydetectorerror event: ".concat(e)), Q.default.track(ed.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), T.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eh.MediaEngineContextTypes.DEFAULT,
                        mode: ed.InputModes.VOICE_ACTIVITY,
                        options: {
                            ...e1(eh.MediaEngineContextTypes.DEFAULT).modeOptions,
                            vadUseKrisp: !1
                        }
                    }), T.default.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e
                    })
                }), e.on(_.BaseConnectionEvent.VideoState, t => {
                    T.default.dispatch({
                        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                        videoState: t,
                        context: e.context
                    })
                }), e.on(_.BaseConnectionEvent.Destroy, () => {
                    l.stop()
                }), e.setBitRate(er.default.bitrate), e.applyVideoQualityMode(ec.default.mode)
            }), eI.on(_.MediaEngineEvent.DeviceChange, (e, t, n) => {
                T.default.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                })
            }), eI.on(_.MediaEngineEvent.VolumeChange, (e, t) => {
                T.default.dispatch({
                    type: "AUDIO_VOLUME_CHANGE",
                    inputVolume: e,
                    outputVolume: t
                })
            }), eI.on(_.MediaEngineEvent.DesktopSourceEnd, () => {
                T.default.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: null
                })
            }), eI.on(_.MediaEngineEvent.AudioPermission, e => {
                eq = !0, T.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e
                })
            }), eI.on(_.MediaEngineEvent.VideoPermission, e => {
                T.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "video",
                    granted: e
                })
            }), eI.on(_.MediaEngineEvent.WatchdogTimeout, async () => {
                let e;
                try {
                    await Z.default.submitLiveCrashReport({
                        message: {
                            message: "Voice Watchdog Timeout"
                        }
                    })
                } catch (t) {
                    "number" == typeof t.status && (e = t.status)
                }
                eS.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Q.default.track(ed.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e
                })
            }), eI.on(_.MediaEngineEvent.VideoInputInitialized, e => {
                Q.default.track(ed.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.default.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                })
            }), eI.on(_.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
                T.default.dispatch({
                    type: "CLIPS_RESTART"
                })
            }), eI.on(_.MediaEngineEvent.ClipsInitFailure, (e, t) => {
                T.default.wait(() => {
                    T.default.dispatch({
                        type: "CLIPS_INIT_FAILURE",
                        errMsg: e,
                        applicationName: t
                    })
                })
            }), eI.on(_.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
                var n, i;
                (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && I.cancelAttachToProcess(t), a = null)
            }), te.reset(), ! function() {
                var e;
                let t = S.default.get("audio");
                null != t && (S.default.set(em, {
                        [eh.MediaEngineContextTypes.DEFAULT]: t
                    }), S.default.remove("audio")), eC = null !== (e = S.default.get(em)) && void 0 !== e ? e : {}, f.each(eC, e => {
                        if (f.defaultsDeep(e, eg()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, en.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, $.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        let e = e1();
                        eI.setAudioInputDevice(e.inputDeviceId), eI.setAudioOutputDevice(e.outputDeviceId), e6(), eI.setInputVolume(e.inputVolume), eI.setOutputVolume(e.outputVolume), eI.setH264Enabled(e.openH264), eI.setAv1Enabled(e.av1Enabled), eI.setAecDump(e.aecDumpEnabled)
                    }()
            }(), !(0, $.isDesktop)() || __OVERLAY__ || eY || ej ? (0, $.isWeb)() && eI.supports(eh.Features.NOISE_CANCELLATION) ? (ej = !0, i.emitChange()) : (0, $.isWeb)() && tt({
                noiseCancellation: !1
            }) : (eY = !0, tE()), tu(), eJ = {
                [eh.Features.VIDEO]: eI.supports(eh.Features.VIDEO),
                [eh.Features.DESKTOP_CAPTURE]: eI.supports(eh.Features.DESKTOP_CAPTURE),
                [eh.Features.HYBRID_VIDEO]: eI.supports(eh.Features.HYBRID_VIDEO)
            }, this.waitFor(ei.default, es.default, ea.default, el.default, eu.default, D.default, K.default.storage, X.default, eo.default, v.default)
        }
        supports(e) {
            return eI.supports(e)
        }
        supportsInApp(e) {
            return eJ[e] || eI.supports(e)
        }
        isSupported() {
            return eI.supported()
        }
        isExperimentalEncodersSupported() {
            return eI.supports(eh.Features.EXPERIMENTAL_ENCODERS)
        }
        isNoiseSuppressionSupported() {
            return eI.supports(eh.Features.NOISE_SUPPRESSION)
        }
        isNoiseCancellationSupported() {
            return ej || !1
        }
        isNoiseCancellationError() {
            return eK
        }
        isAutomaticGainControlSupported() {
            return eI.supports(eh.Features.AUTOMATIC_GAIN_CONTROL)
        }
        isAdvancedVoiceActivitySupported() {
            return ej || !1
        }
        isAecDumpSupported() {
            return eI.supports(eh.Features.AEC_DUMP)
        }
        isSimulcastSupported() {
            return eI.supports(eh.Features.VIDEO) && eI.supports(eh.Features.SIMULCAST)
        }
        getAecDump() {
            return e1().aecDumpEnabled
        }
        getMediaEngine() {
            return eI
        }
        getVideoComponent() {
            return eI.supports(eh.Features.DIRECT_VIDEO) && eI.setUseDirectVideo(!0), eI.Video
        }
        getCameraComponent() {
            return eI.supports(eh.Features.DIRECT_VIDEO) && eI.setUseDirectVideo(!0), eI.Camera
        }
        isEnabled() {
            return eA
        }
        isMute() {
            return this.isSelfMute() || eP
        }
        isDeaf() {
            return this.isSelfDeaf() || eM
        }
        hasContext(e) {
            return null != eC[e]
        }
        isSelfMutedTemporarily() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
            return e === eh.MediaEngineContextTypes.DEFAULT && eL
        }
        isSelfMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
            return !this.isEnabled() || e1(e).mute || !K.default.didHavePermission(eE.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eh.MediaEngineContextTypes.DEFAULT && eb
        }
        isHardwareMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
            return !this.isMute() && !this.isSelfMutedTemporarily(e) && es.default.isHardwareMute(this.getInputDeviceId())
        }
        isSelfDeaf() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
            return !this.isSupported() || e1(e).deaf
        }
        isVideoEnabled() {
            return eU && ex
        }
        isVideoAvailable() {
            return Object.values(ey).some(e => {
                let {
                    disabled: t
                } = e;
                return !t
            })
        }
        isScreenSharing() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.STREAM;
            return eN === e && null != s
        }
        isSoundSharing() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.STREAM;
            return eN === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
        }
        isLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
            return e !== ei.default.getId() && (e1(t).localMutes[e] || !1)
        }
        supportsDisableLocalVideo() {
            return eI.supports(eh.Features.DISABLE_VIDEO)
        }
        isLocalVideoDisabled(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e1(n).disabledLocalVideos[e]) && void 0 !== t && t
        }
        getVideoToggleState(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e1(n).videoToggleStateMap[e]) && void 0 !== t ? t : ed.VideoToggleState.NONE
        }
        isLocalVideoAutoDisabled(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
            return t === eh.MediaEngineContextTypes.DEFAULT && eX.has(e)
        }
        isAnyLocalVideoAutoDisabled() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
            return e === eh.MediaEngineContextTypes.DEFAULT && eX.size > 0
        }
        isMediaFilterSettingLoading() {
            return ez
        }
        isNativeAudioPermissionReady() {
            return eq
        }
        getGoLiveSource() {
            return s
        }
        getGoLiveContext() {
            return eN
        }
        getLocalPan(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT,
                n = e1(t).localPans[e];
            return null != n ? n : eT
        }
        getLocalVolume(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT,
                n = t === eh.MediaEngineContextTypes.STREAM,
                i = n ? eh.DEFAULT_STREAM_VOLUME : eh.DEFAULT_VOLUME,
                r = e1(t).localVolumes[e];
            return null != r ? r : i
        }
        getInputVolume() {
            return e1().inputVolume
        }
        getOutputVolume() {
            return e1().outputVolume
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
            return e1(e).mode
        }
        getModeOptions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
            return e1(e).modeOptions
        }
        getShortcuts() {
            let e = {};
            return f.each(eC, (t, n) => {
                let {
                    mode: i,
                    modeOptions: {
                        shortcut: r
                    }
                } = t;
                i === ed.InputModes.PUSH_TO_TALK && ev.has(n) && (e[n] = r)
            }), e
        }
        getInputDeviceId() {
            return ts(eO, e1().inputDeviceId)
        }
        getOutputDeviceId() {
            return ts(eD, e1().outputDeviceId)
        }
        getVideoDeviceId() {
            return ts(ey, e1().videoDeviceId)
        }
        getInputDevices() {
            return eO
        }
        getOutputDevices() {
            return eD
        }
        getVideoDevices() {
            return ey
        }
        getEchoCancellation() {
            let e = e1();
            return es.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
        }
        getH265Enabled() {
            return e1().h265Enabled
        }
        getLoopback() {
            return eI.getLoopback()
        }
        getNoiseSuppression() {
            let e = e1();
            return es.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
        }
        getAutomaticGainControl() {
            let e = e1();
            return es.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
        }
        getNoiseCancellation() {
            return e1().noiseCancellation
        }
        getExperimentalEncoders() {
            return e1().experimentalEncoders
        }
        getHardwareH264() {
            return e1().hardwareH264
        }
        getEnableSilenceWarning() {
            return e1().silenceWarning
        }
        getDebugLogging() {
            return eI.getDebugLogging()
        }
        getQoS() {
            return e1().qos
        }
        getAttenuation() {
            return e1().attenuation
        }
        getAttenuateWhileSpeakingSelf() {
            return e1().attenuateWhileSpeakingSelf
        }
        getAttenuateWhileSpeakingOthers() {
            return e1().attenuateWhileSpeakingOthers
        }
        getAudioSubsystem() {
            return eI.getAudioSubsystem()
        }
        getSettings() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
            return e1(e)
        }
        getState() {
            return {
                settingsByContext: eC,
                inputDevices: eO,
                outputDevices: eD,
                appSupported: eJ,
                krispModuleLoaded: ej,
                goLiveSource: s,
                goLiveContext: eN
            }
        }
        getInputDetected() {
            return eF
        }
        getNoInputDetectedNotice() {
            return eB
        }
        getPacketDelay() {
            return $.isPlatformEmbedded || this.getMode() !== ed.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
        }
        setCanHavePriority(e, t) {
            eI.eachConnection(n => n.setCanHavePriority(e, t))
        }
        isInteractionRequired() {
            return eR
        }
        getVideoHook() {
            return e1().videoHook
        }
        supportsVideoHook() {
            return eI.supports(eh.Features.VIDEO_HOOK)
        }
        getExperimentalSoundshare() {
            let e = e1().experimentalSoundshare2;
            return this.supportsExperimentalSoundshare() && (null == e || e)
        }
        supportsExperimentalSoundshare() {
            return eI.supports(eh.Features.EXPERIMENTAL_SOUNDSHARE) && p.satisfies(null === g.default || void 0 === g.default ? void 0 : g.default.os.release, ef.WINDOWS_SOUNDSHARE_VERSION)
        }
        getOpenH264() {
            return e1().openH264
        }
        getAv1Enabled() {
            return e1().av1Enabled
        }
        getEverSpeakingWhileMuted() {
            return ew
        }
        supportsScreenSoundshare() {
            return (0, $.isMac)() && eI.supports(eh.Features.SOUNDSHARE) && p.satisfies(null === g.default || void 0 === g.default ? void 0 : g.default.os.release, ef.DARWIN_SCKIT_AUDIO_VERSION) && e9(!1) || (0, $.isWindows)() && eI.supports(eh.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
        }
        getVideoStreamParameters() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT,
                t = this.supports(eh.Features.VIDEO) ? [{
                    rid: "100",
                    type: e === eh.MediaEngineContextTypes.DEFAULT ? eh.MediaTypes.VIDEO : eh.MediaTypes.SCREEN,
                    quality: 100
                }] : [];
            return this.isSimulcastSupported() && e === eh.MediaEngineContextTypes.DEFAULT && t.push({
                rid: "50",
                type: eh.MediaTypes.VIDEO,
                quality: 50
            }), t
        }
        getSupportedSecureFramesProtocolVersion(e) {
            var t;
            let n = eI.getSupportedSecureFramesProtocolVersion(),
                i = V.SecureFramesUserExperiment.getCurrentConfig({
                    location: "MediaEngineStore"
                }),
                r = null != e ? V.SecureFramesGuildExperiment.getCurrentConfig({
                    guildId: e,
                    location: "MediaEngineStore"
                }) : null,
                s = i.canSupportSecureFrames || (null == r ? void 0 : r.canSupportSecureFrames),
                a = i.canSupportMls || (null == r ? void 0 : r.canSupportMls),
                o = Math.max(i.protocolVersionFloor, null !== (t = null == r ? void 0 : r.protocolVersionFloor) && void 0 !== t ? t : 0);
            return s && n % 100 >= o ? a ? n : n % 100 : 0
        }
        hasClipsSource() {
            return null != a
        }
    }
    th.displayName = "MediaEngineStore";
    var t_ = i = new th(T.default, {
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n,
                currentVoiceChannelId: i,
                video: r
            } = e;
            if (i !== n && e6(r, null), null != t || null == n) {
                eH = !1;
                return
            }
            if (eH) return;
            eH = !0;
            let s = e1();
            (s.mute || s.deaf) && (tt({
                deaf: !1,
                mute: !1
            }), eI.eachConnection(e3))
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                if (r === t.sessionId) {
                    eP = t.mute || t.suppress, eM = t.deaf, eI.eachConnection(e3);
                    let e = null != t.guildId && null != t.channelId && null != eW && eW !== t.channelId,
                        n = !e && eU;
                    return e6(n), eW = t.channelId, !0
                }
                return !__OVERLAY__ && t.userId === ei.default.getId() && null == eu.default.getChannelId() && e6(!1, null), e
            }, !1)
        },
        CONNECTION_OPEN: function(e) {
            r = e.sessionId, eP = !1, eM = !1, (0, z.shouldReadWriteAudioSettings)() && ta()
        },
        CONNECTION_CLOSED: function() {
            r = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case ed.RTCConnectionStates.CONNECTING:
                    tn();
                    break;
                case ed.RTCConnectionStates.RTC_CONNECTING:
                    eV = !1, eB = !1;
                    break;
                case ed.RTCConnectionStates.RTC_CONNECTED:
                    e6();
                    break;
                case ed.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 === eX.size) return;
                        let e = eh.MediaEngineContextTypes.DEFAULT,
                            {
                                disabledLocalVideos: t
                            } = e1(e);
                        eX.forEach(n => {
                            c(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eI.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                        }), eX.clear(), tt({
                            disabledLocalVideos: t
                        }, e, !1)
                    })(), tu()
            }
            te.update()
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
            let {
                mute: t
            } = e;
            eL = t, eI.eachConnection(e3)
        },
        AUDIO_TOGGLE_SELF_MUTE: function(e) {
            let {
                context: t
            } = e, {
                mute: n,
                deaf: i
            } = e1(t);
            if (t === eh.MediaEngineContextTypes.DEFAULT && (K.default.requestPermission(eE.NativePermissionTypes.AUDIO), eb)) return !1;
            !(n = !i && !n) && (i = !1), tt({
                mute: n,
                deaf: i
            }, t), eI.eachConnection(e3)
        },
        AUDIO_TOGGLE_SELF_DEAF: function(e) {
            let {
                context: t
            } = e, n = e1(t);
            tt({
                deaf: !n.deaf
            }, t), eI.eachConnection(e3)
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
            let {
                context: t,
                userId: n
            } = e;
            if (n === ei.default.getId()) return;
            let {
                localMutes: i
            } = e1(t);
            i[n] ? delete i[n] : i[n] = !0, tt({
                localMutes: i
            }, t), eI.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
            var t, n, i, r, s, a, o;
            let {
                context: l,
                userId: u,
                videoToggleState: d,
                persist: f,
                isAutomatic: E
            } = e;
            c(!(f && E), "These are not allowed to both be true.");
            let p = d === ed.VideoToggleState.DISABLED,
                {
                    disabledLocalVideos: h
                } = e1(l),
                _ = null !== (t = h[u]) && void 0 !== t && t,
                S = eX.has(u),
                m = d === ed.VideoToggleState.AUTO_ENABLED || d === ed.VideoToggleState.MANUAL_ENABLED;
            eS.info("disableVideo=".concat(p, " currentlyDisabled=").concat(_, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(m)), c(!(S && !_), "If you are auto-disabled, then you are also disabled.");
            let T = p !== _,
                g = l === eh.MediaEngineContextTypes.DEFAULT,
                I = E && T && g,
                C = f && T && g;
            eS.info("changed=".concat(T, " isDefaultContext=").concat(g, " isUpdateCausedByVideoHealthManager=").concat(I, " isManualToggleByUser=").concat(C));
            let {
                videoToggleStateMap: v
            } = e1(l);
            if (v[u] === ed.VideoToggleState.AUTO_PROBING && d === ed.VideoToggleState.AUTO_ENABLED && (0, W.default)(u, p ? eh.VideoToggleReason.AUTO_DISABLE : eh.VideoToggleReason.AUTO_ENABLE, m), v[u] = d, tt({
                    videoToggleStateMap: v
                }, l, f), d === ed.VideoToggleState.AUTO_PROBING ? null === (n = eu.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eu.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !eQ && (eS.info("isAutoDisableAllowed=".concat(eQ, " - disabling VideoHealthManager")), null === (s = eu.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), I) {
                if (!p && !S || p && !eQ) return;
                (0, W.default)(u, p ? eh.VideoToggleReason.AUTO_DISABLE : eh.VideoToggleReason.AUTO_ENABLE, m), p ? eX.add(u) : eX.delete(u)
            } else C && (S && !p ? (eS.info("disallowing auto-disable for this session because of manual override by user"), eQ = !1, null === (o = eu.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, W.default)(u, eh.VideoToggleReason.MANUAL_REENABLE, m)) : (0, W.default)(u, p ? eh.VideoToggleReason.MANUAL_DISABLE : eh.VideoToggleReason.MANUAL_ENABLE, m));
            g && !p && eX.delete(u), p ? h[u] = !0 : delete h[u], tt({
                disabledLocalVideos: h
            }, l, f), eI.eachConnection(e => {
                var t;
                return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t)
            }, l)
        },
        AUDIO_SET_LOCAL_VOLUME: function(e) {
            let {
                context: t,
                userId: n,
                volume: i
            } = e;
            if (n === ei.default.getId()) return;
            let r = t === eh.MediaEngineContextTypes.STREAM,
                s = r ? eh.DEFAULT_STREAM_VOLUME : eh.DEFAULT_VOLUME,
                {
                    localVolumes: a
                } = e1(t);
            i === s ? delete a[n] : a[n] = i, tt({
                localVolumes: a
            }, t), eI.eachConnection(e => e.setLocalVolume(n, i), t)
        },
        AUDIO_SET_LOCAL_PAN: function(e) {
            let {
                context: t,
                userId: n,
                left: i,
                right: r
            } = e, {
                localPans: s
            } = e1(t);
            s[n] = {
                left: i,
                right: r
            }, tt({
                localPans: s
            }, t), eI.eachConnection(e => e.setLocalPan(n, i, r), t)
        },
        AUDIO_SET_MODE: function(e) {
            let {
                context: t,
                mode: n,
                options: i
            } = e;
            tt({
                mode: n,
                modeOptions: i
            }, t), eI.eachConnection(e2), te.update()
        },
        AUDIO_SET_INPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            tt({
                inputVolume: e4(t)
            }), eI.setInputVolume(t)
        },
        AUDIO_SET_OUTPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            tt({
                outputVolume: t
            }), eI.setOutputVolume(t)
        },
        AUDIO_SET_INPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            tt({
                inputDeviceId: t = ts(eO, t)
            }), eI.setAudioInputDevice(t)
        },
        AUDIO_SET_OUTPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            tt({
                outputDeviceId: t = ts(eD, t)
            }), eI.setAudioOutputDevice(t)
        },
        AUDIO_SET_ECHO_CANCELLATION: function(e) {
            let t = tt({
                echoCancellation: e.enabled
            });
            eI.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), td(), tc(e.location)
        },
        MEDIA_ENGINE_SET_H265: function(e) {
            let t = tt({
                h265Enabled: e.enabled
            });
            eI.setH265Enabled(t.h265Enabled)
        },
        AUDIO_SET_LOOPBACK: function(e) {
            let {
                enabled: t
            } = e;
            return eZ = t, td()
        },
        AUDIO_SET_NOISE_SUPPRESSION: function(e) {
            let t = tt({
                noiseSuppression: e.enabled
            });
            eI.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), td(), tc(e.location)
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
            let t = tt({
                automaticGainControl: e.enabled
            });
            eI.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), td(), tc(e.location)
        },
        AUDIO_SET_NOISE_CANCELLATION: function(e) {
            let t = tt({
                noiseCancellation: e.enabled
            });
            eI.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), td(), tc(e.location)
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
            tt({
                silenceWarning: e.enabled
            }), te.update()
        },
        AUDIO_SET_DEBUG_LOGGING: function(e) {
            eI.setDebugLogging(e.enabled)
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
            tt({
                videoHook: e.enabled
            })
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
            tt({
                experimentalSoundshare2: e.enabled
            })
        },
        AUDIO_SET_ATTENUATION: function(e) {
            let {
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            } = e, r = tt({
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            });
            eI.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
        },
        AUDIO_SET_QOS: function(e) {
            let {
                enabled: t
            } = e;
            tt({
                qos: t
            }), eI.eachConnection(e => e.setQoS(t))
        },
        MEDIA_ENGINE_DEVICES: function(e) {
            let {
                inputDevices: t,
                outputDevices: n,
                videoDevices: i
            } = e;
            ! function(e) {
                let t = eO;
                if (eO = tr(e, e_.default.Messages.NO_INPUT_DEVICES), !f.isEqual(eO, t)) {
                    let e = e1(),
                        t = ts(eO, e.inputDeviceId);
                    eI.setAudioInputDevice(t)
                }
            }(t), ! function(e) {
                let t = eD;
                if (eD = tr(e, e_.default.Messages.NO_OUTPUT_DEVICES), !f.isEqual(eD, t)) {
                    let e = e1(),
                        t = ts(eD, e.outputDeviceId);
                    eI.setAudioOutputDevice(t)
                }
            }(n), ! function(e) {
                ex = e.length > 0;
                let t = ey;
                if (ey = tr(e, e_.default.Messages.NO_VIDEO_DEVICES), eU && !f.isEqual(ey, t)) {
                    var n;
                    let e = void 0 !== ey[eG],
                        i = eG === eh.DEFAULT_DEVICE_ID && (null === (n = t[eh.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                    e6(e || i)
                }
            }(i)
        },
        AUDIO_VOLUME_CHANGE: function(e) {
            let {
                inputVolume: t,
                outputVolume: n
            } = e;
            tt({
                inputVolume: e4(t),
                outputVolume: n
            })
        },
        AUDIO_RESET: function() {
            S.default.remove(em), location.reload()
        },
        AUDIO_INPUT_DETECTED: function(e) {
            let {
                inputDetected: t
            } = e;
            eF = t, !eV && eF && (eV = !0, te.update())
        },
        AUDIO_SET_SUBSYSTEM: function(e) {
            eI.setAudioSubsystem(e.subsystem)
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
            eA = e.enabled, e.unmute && tt({
                mute: !1,
                deaf: !1
            }), eI.eachConnection(e3)
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            K.default.requestPermission(eE.NativePermissionTypes.CAMERA), e6(t)
        },
        MEDIA_ENGINE_PERMISSION: function(e) {
            let {
                kind: t,
                granted: n
            } = e;
            if (!n) switch (t) {
                case "audio":
                    eA = !1, eI.eachConnection(e3);
                    break;
                case "video":
                    e6(!1)
            }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            var t, n, i, r, a;
            let {
                settings: o
            } = e;
            if ((null == o ? void 0 : o.desktopSettings) != null) {
                ;
                let e = null,
                    i = null,
                    {
                        sourceId: r,
                        sound: l
                    } = o.desktopSettings,
                    u = null !== (t = o.context) && void 0 !== t ? t : eh.MediaEngineContextTypes.DEFAULT,
                    c = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
                        resolution: 720,
                        frameRate: 30
                    },
                    d = Z.default.getPidFromDesktopSource(r);
                $.isPlatformEmbedded && !0 === l && ({
                    soundshareId: e,
                    soundshareSession: i
                } = to(d), null != e && tl(e, i)), (a = u) !== eN && (null != s && eI.setGoLiveSource(null, eN), eN = a);
                let f = u === eh.MediaEngineContextTypes.STREAM && eU;
                e6(f, {
                    desktopSource: {
                        id: r,
                        sourcePid: d,
                        soundshareId: e,
                        soundshareSession: i
                    },
                    quality: {
                        resolution: c.resolution,
                        frameRate: c.frameRate
                    }
                })
            } else if ((null == o ? void 0 : o.cameraSettings) != null) {
                let e = null !== (i = o.context) && void 0 !== i ? i : eh.MediaEngineContextTypes.DEFAULT,
                    {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    } = o.cameraSettings,
                    s = e === eh.MediaEngineContextTypes.STREAM && eU,
                    a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
                        resolution: 720,
                        frameRate: 30
                    };
                e6(s, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: a.resolution,
                        frameRate: a.frameRate
                    }
                })
            } else e6(eU, null)
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
            let {
                id: t
            } = e;
            tt({
                videoDeviceId: t = ts(ey, t)
            }), e6()
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
            let t = tt({
                experimentalEncoders: e.enabled
            });
            eI.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
            return eR !== e.required && (eR = e.required, !e.required && eI.interact(), !0)
        },
        USER_SETTINGS_MODAL_INIT: tp,
        USER_SETTINGS_MODAL_SET_SECTION: tp,
        CERTIFIED_DEVICES_SET: function() {
            return eI.eachConnection(e7), !1
        },
        RPC_APP_CONNECTED: function(e) {
            let {
                application: t
            } = e;
            ev.add(t.id)
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                application: t
            } = e;
            ev.delete(t.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                mediaEngineState: t
            } = e;
            eC = t.settingsByContext, eO = t.inputDevices, eD = t.outputDevices, eJ = t.appSupported, ej = t.krispModuleLoaded, eN = t.goLiveContext
        },
        MEDIA_ENGINE_SET_OPEN_H264: function(e) {
            let {
                enabled: t
            } = e, n = tt({
                openH264: t
            });
            eI.setH264Enabled(n.openH264)
        },
        MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
            let {
                enabled: t
            } = e, n = tt({
                hardwareH264: t
            });
            eI.eachConnection(e => e.setHardwareH264(n.hardwareH264))
        },
        MEDIA_ENGINE_SET_AV1: function(e) {
            let {
                enabled: t
            } = e, n = tt({
                av1Enabled: t
            });
            eI.setAv1Enabled(n.av1Enabled)
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e, n = O.default.isEnabled();
            if (t === ed.AppStates.BACKGROUND && eU && !n) ek = !0, e6(!1);
            else {
                if (t !== ed.AppStates.ACTIVE || !ek) return !1;
                ek = !1, e6(!0)
            }
            return !0
        },
        SET_CHANNEL_BITRATE: function(e) {
            eI.eachConnection(t => t.setBitRate(e.bitrate))
        },
        SET_VAD_PERMISSION: function(e) {
            let {
                hasPermission: t
            } = e, n = !t;
            if (n === eb) return !1;
            eb = n, eI.eachConnection(e3)
        },
        SET_NATIVE_PERMISSION: function(e) {
            let {
                state: t,
                permissionType: n
            } = e, i = t === eE.NativePermissionStates.ACCEPTED;
            switch (n) {
                case eE.NativePermissionTypes.AUDIO:
                    eq = !0, eI.eachConnection(e3);
                    break;
                case eE.NativePermissionTypes.CAMERA:
                    !i && eU && e6(!1);
                    break;
                default:
                    return !1
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            eI.eachConnection(t => t.applyVideoQualityMode(e.mode))
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
            let {
                enabled: t
            } = e, n = tt({
                aecDumpEnabled: t
            });
            eI.setAecDump(n.aecDumpEnabled)
        },
        CHANNEL_DELETE: function() {
            if (!eU && null == s || null != eu.default.getRTCConnectionId()) return !1;
            e6(!1, null)
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
            return !!eK && (eK = !1, !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            eI.applyMediaFilterSettings(t).finally(() => {
                ez = !1, i.emitChange()
            })
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
            ez = !0
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
            ez = !1
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                local: n,
                wasSaved: i
            } = e;
            if (!(0, z.shouldReadWriteAudioSettings)() || t !== ep.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
            ta(!0)
        },
        CLIPS_INIT: function(e) {
            let {
                sourceId: t,
                applicationName: n,
                quality: r
            } = e, {
                enableDecoupledGameClipping: s
            } = L.default.getCurrentConfig({
                location: "handleClipsInit"
            }, {
                autoTrackExposure: !0
            }), o = v.default.getSettings().decoupledClipsEnabled;
            if (!s || !o || null == g.default) return;
            let l = null,
                u = null,
                c = Z.default.getPidFromDesktopSource(t);
            ({
                soundshareId: l,
                soundshareSession: u
            } = to(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: r
            };
            null != a && a.desktopSource.id !== d.desktopSource.id && (eI.setClipsSource(null), (0, $.isWindows)() && null != a.desktopSource.soundshareId && I.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tl(l, u), a = d;
            let {
                useQuartzCapturer: f
            } = x.default.getCurrentConfig({
                location: "f627ab_11"
            }, {
                autoTrackExposure: !1
            }), {
                hdrCaptureMode: E
            } = G.default.getCurrentConfig({
                location: "f627ab_12"
            }, {
                autoTrackExposure: !1
            }), p = e1().videoHook, h = eI.supports(eh.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                videoHookStaleFrameTimeoutMs: _
            } = B.default.getConfig(h && p, "e225cfdf5_vh2", !1), {
                graphicsCaptureStaleFrameTimeoutMs: S
            } = j.default.getConfig(h && e8(), "e225cfdf5_wgc2", !1);
            eI.setClipsSource({
                desktopDescription: {
                    id: a.desktopSource.id,
                    soundshareId: a.desktopSource.soundshareId,
                    useVideoHook: p,
                    useGraphicsCapture: e8(),
                    useLoopback: i.getExperimentalSoundshare(),
                    useQuartzCapturer: f,
                    allowScreenCaptureKit: e9(!1),
                    videoHookStaleFrameTimeoutMs: _,
                    graphicsCaptureStaleFrameTimeoutMs: S,
                    hdrCaptureMode: E
                },
                quality: r,
                applicationName: n
            })
        },
        CLIPS_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            !1 === t.decoupledClipsEnabled && (a = null, eI.setClipsSource(null))
        }
    })
}