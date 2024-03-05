function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateAllowVoiceRecording: function() {
            return b
        },
        updateClipsEnabled: function() {
            return O
        },
        updateDecoupledClipsEnabled: function() {
            return w
        },
        updateRemindersEnabled: function() {
            return P
        },
        updateClipsStorageLocation: function() {
            return U
        },
        updateClipsQuality: function() {
            return G
        },
        updateClipsLength: function() {
            return F
        },
        updateViewerClipsEnabled: function() {
            return V
        },
        saveClip: function() {
            return q
        },
        dismissSaveClipAnimation: function() {
            return H
        },
        updateClipMetadata: function() {
            return W
        },
        clearClipsSession: function() {
            return K
        },
        clearNewClipIds: function() {
            return B
        },
        loadClipsDirectory: function() {
            return J
        },
        deleteClip: function() {
            return j
        },
        exportClip: function() {
            return z
        },
        dismissClipsUserEducation: function() {
            return Y
        }
    }), n("222007"), n("424973");
    var a = n("773364"),
        i = n("784063"),
        l = n("750028"),
        d = n("913144"),
        r = n("49671"),
        s = n("44642"),
        u = n("161454"),
        o = n("374014"),
        c = n("584687"),
        f = n("103979"),
        g = n("872173"),
        p = n("268491"),
        _ = n("373469"),
        m = n("271938"),
        E = n("42887"),
        S = n("205817"),
        h = n("555035"),
        v = n("599110"),
        I = n("773336"),
        y = n("709681"),
        C = n("386045"),
        A = n("13136"),
        T = n("881095"),
        D = n("997942"),
        N = n("310238"),
        M = n("430481"),
        R = n("80028"),
        L = n("49111");

    function b(e) {
        let {
            allowVoiceRecording: t
        } = e;
        g.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
            e.allowVoiceRecording = l.BoolValue.create({
                value: t
            })
        }, g.UserSettingsDelay.INFREQUENT_USER_ACTION), v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            allow_voice_recording: t
        })
    }
    async function O(e) {
        let {
            clipsEnabled: t,
            guildId: n,
            trackAnalytics: a = !1
        } = e;
        await d.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsEnabled: t,
                ...!t && {
                    decoupledClipsEnabled: !1
                }
            }
        }), a && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            clips_enabled: t,
            guild_id: n,
            ...!t && {
                decoupled_clips_enabled: !1
            }
        })
    }

    function w(e) {
        let {
            enabled: t,
            trackAnalytics: n = !1
        } = e;
        d.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                ...t && {
                    clipsEnabled: !0
                },
                decoupledClipsEnabled: t
            }
        }), n && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            ...t && {
                clips_enabled: !0
            },
            decoupled_clips_enabled: t
        })
    }

    function P(e) {
        d.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                remindersEnabled: e
            }
        })
    }

    function U(e) {
        d.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                storageLocation: e
            }
        })
    }

    function G(e) {
        d.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsQuality: e
            }
        })
    }

    function F(e) {
        d.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsLength: e
            }
        })
    }

    function V(e) {
        let {
            enabled: t,
            trackAnalytics: n = !1
        } = e;
        d.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                viewerClipsEnabled: t
            }
        }), n && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            viewer_clips_enabled: t
        })
    }

    function x(e, t) {
        var n, a, i, l, d, r, u, o, c, f;
        let g = new Map;
        for (let e in t.framesEncodedByEncoder) {
            let a = t.framesEncodedByEncoder[e],
                i = (0, s.parseEncoder)(e),
                l = null !== (n = g.get(i)) && void 0 !== n ? n : 0;
            g.set(i, l + a)
        }
        return {
            ...e,
            frames_encoded_nvidia_cuda: null !== (a = g.get(s.Encoders.NVIDIA_CUDA)) && void 0 !== a ? a : 0,
            frames_encoded_nvidia_direct3d: null !== (i = g.get(s.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
            frames_encoded_openh264: null !== (l = g.get(s.Encoders.OPENH264)) && void 0 !== l ? l : 0,
            frames_encoded_videotoolbox: null !== (d = g.get(s.Encoders.VIDEOTOOLBOX)) && void 0 !== d ? d : 0,
            frames_encoded_amd_direct3d: null !== (r = g.get(s.Encoders.AMD_DIRECT_3D)) && void 0 !== r ? r : 0,
            frames_encoded_intel: null !== (u = g.get(s.Encoders.INTEL)) && void 0 !== u ? u : 0,
            frames_encoded_intel_direct3d: null !== (o = g.get(s.Encoders.INTEL_DIRECT_3D)) && void 0 !== o ? o : 0,
            frames_encoded_uncategorized: null !== (c = g.get(s.Encoders.UNCATEGORIZED)) && void 0 !== c ? c : 0,
            frames_encoded_unknown: null !== (f = g.get(s.Encoders.UNKNOWN)) && void 0 !== f ? f : 0,
            frames_submitted: t.framesSubmitted,
            frames_submitted_during_clip: t.framesSubmittedDuringClip,
            frames_encoded: t.framesEncoded,
            frames_encoded_during_clip: t.framesEncodedDuringClip,
            frames_dropped: t.framesDropped,
            frames_dropped_during_clip: t.framesDroppedDuringClip,
            clip_duration_setting: C.default.getSettings().clipsLength,
            clip_duration: t.clipDuration,
            clip_resolution_width: t.clipResolutionWidth,
            clip_resolution_height: t.clipResolutionHeight,
            min_fps: t.minFps,
            max_fps: t.maxFps,
            submitted_fps: t.submittedFps,
            target_fps: p.default.getState().fps,
            audio_track_count: t.audioTrackCount,
            saved_at: t.savedAt
        }
    }
    async function k(e) {
        let t = C.default.getSettings(),
            n = t.storageLocation,
            a = (0, T.default)(e),
            i = "".concat((0, A.default)(a.applicationName.substring(0, 20)), "_").concat(a.id, ".mp4"),
            l = r.default.fileManager.join(n, i),
            s = E.default.getMediaEngine(),
            u = JSON.stringify(a),
            c = null != e ? (0, o.decodeStreamKey)(e).ownerId : void 0,
            f = function(e) {
                var t;
                let n, a, i;
                if (null != e) {
                    n = null != e ? S.default.getRTCConnection(e) : null;
                    let t = (0, o.decodeStreamKey)(e);
                    a = t.guildId, i = t.channelId
                } else {
                    let e = m.default.getId(),
                        t = _.default.getActiveStreamForUser(e, null);
                    n = null != t ? S.default.getRTCConnection((0, o.encodeStreamKey)(t)) : null, a = null == t ? void 0 : t.guildId, i = null == t ? void 0 : t.channelId
                }
                let l = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
                return {
                    rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
                    media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                    parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                    guild_id: a,
                    channel_id: i,
                    application_id: null == l ? void 0 : l.id,
                    application_name: null == l ? void 0 : l.name
                }
            }(e);
        null != e && d.default.dispatch({
            type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
            clip: {
                ...a,
                filepath: l
            }
        });
        try {
            var g;
            let {
                duration: e,
                clipStats: t
            } = await (null != c ? s.saveClipForUser(c, l, u) : s.saveClip(l, u)), n = x(f, t);
            n.clip_save_time_ms = t.clipSaveTimeMs, n.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (n.decode_fps_during_clip = t.viewerDecodeFps, n.encode_fps_during_clip = t.viewerEncodeFps, n.target_fps = null), v.default.track(L.AnalyticEvents.CLIP_SAVED, n);
            let i = await (0, M.createThumbnailFromVideo)(r.default.clips.getClipProtocolURLFromPath(l), 0);
            return a.thumbnail = i, a.length = e, R.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (g = null == i ? void 0 : i.length) && void 0 !== g ? g : 0, " bytes thumbnail.")), await s.updateClipMetadata(l, JSON.stringify(a)), {
                ...a,
                filepath: l
            }
        } catch (n) {
            if (null != e && d.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                    clipId: a.id
                }), !("errorMessage" in n)) throw v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, f), n;
            let t = x(f, n);
            throw t.error_at = n.errorAt, t.error_message = n.errorMessage, v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, t), n.errorMessage
        }
    }
    async function q(e) {
        var t;
        let {
            enableDecoupledGameClipping: n
        } = c.default.getCurrentConfig({
            location: "8ac9d1_1"
        }, {
            autoTrackExposure: !1
        }), {
            enableViewerClipping: l
        } = f.default.getCurrentConfig({
            location: "SaveClip"
        }, {
            autoTrackExposure: !1
        });
        if (C.default.getIsAtMaxSaveClipOperations()) return;
        let r = C.default.getSettings().clipsEnabled && null != _.default.getCurrentUserActiveStream(),
            s = n && C.default.getSettings().decoupledClipsEnabled && (null === (t = u.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && E.default.hasClipsSource(),
            g = null != e && null != _.default.getActiveStreamForStreamKey(e) && l;
        if (!r && !s && !g) return;
        let p = _.default.getCurrentUserActiveStream(),
            S = null != p ? (0, o.encodeStreamKey)(p) : void 0,
            v = null != e ? e : S,
            I = (() => {
                let e = null != v ? (0, o.decodeStreamKey)(v).ownerId : void 0;
                return e === m.default.getId() ? R.ClipSaveTypes.STREAMER : null != e ? R.ClipSaveTypes.VIEWER : R.ClipSaveTypes.DECOUPLED
            })(),
            A = await (async () => {
                if (null == v) return;
                let {
                    ownerId: e,
                    guildId: t
                } = (0, o.decodeStreamKey)(v), n = h.default.getStreamId(e, t, a.MediaEngineContextTypes.STREAM);
                if (null != n) try {
                    let e = (0, i.getVoiceEngine)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, M.createImageFromImageData)(t)
                } catch (e) {
                    return
                }
            })();
        d.default.dispatch({
            type: "CLIPS_SAVE_CLIP_START",
            clipType: I,
            streamKey: v,
            thumbnail: A
        });
        let T = (0, y.playSound)("clip_save", .5),
            D = performance.now();
        try {
            let e = await k(v);
            d.default.dispatch({
                type: "CLIPS_SAVE_CLIP",
                clip: e
            })
        } catch (e) {
            R.ClipsLogger.error("Clip Failed to Save", e), null == T || T.stop(), (0, y.playSound)("clip_error", .5), d.default.dispatch({
                type: "CLIPS_SAVE_CLIP_ERROR"
            })
        }
        R.ClipsLogger.info("".concat(C.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - D), "ms"))
    }

    function H(e, t) {
        d.default.dispatch({
            type: "CLIPS_SAVE_ANIMATION_END",
            streamKey: e,
            timestamp: t
        })
    }
    async function W(e, t) {
        let n = C.default.getClips().find(t => t.id === e);
        if (null == n) return;
        let a = {
                ...n,
                ...t
            },
            i = await (0, D.validateClipMetadata)(a);
        null != i && (await E.default.getMediaEngine().updateClipMetadata(a.filepath, JSON.stringify(a)), v.default.track(L.AnalyticEvents.CLIP_EDITED, {
            clip_id: a.id
        }), d.default.dispatch({
            type: "CLIPS_UPDATE_METADATA",
            clip: a
        }))
    }

    function K() {
        d.default.dispatch({
            type: "CLIPS_CLEAR_CLIPS_SESSION"
        })
    }

    function B() {
        d.default.dispatch({
            type: "CLIPS_CLEAR_NEW_CLIP_IDS"
        })
    }
    async function J(e) {
        var t;
        if (!(0, I.isDesktop)() || (null === (t = r.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
        let n = await r.default.clips.loadClipsDirectory(e),
            a = [];
        for (let e of n) {
            let t = await (0, D.validateClipMetadata)({
                ...e.metadata,
                filepath: e.filepath
            });
            null != t && a.push(t)
        }
        d.default.dispatch({
            type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
            clips: a
        })
    }
    async function j(e) {
        var t;
        (0, I.isDesktop)() && (null === (t = r.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await r.default.clips.deleteClip(e), d.default.dispatch({
            type: "CLIPS_DELETE_CLIP",
            filepath: e
        }))
    }
    async function z(e, t) {
        let n = E.default.getMediaEngine(),
            a = await n.exportClip(e.filepath, t);
        return (0, N.default)(a)
    }

    function Y(e) {
        d.default.dispatch({
            type: "CLIPS_DISMISS_EDUCATION",
            educationType: e
        })
    }
}