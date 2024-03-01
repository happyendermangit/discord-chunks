function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("702976");
    var s, i = n("201876"),
        r = n("56947"),
        a = n("386045"),
        o = n("18346"),
        d = n("161454"),
        u = n("584687"),
        l = n("103979"),
        f = n("845579"),
        _ = n("373469"),
        c = n("42203"),
        g = n("42887"),
        m = n("590401"),
        h = n("568734"),
        v = n("49111");
    s = class extends i.default {
        get guildId() {
            return this.getState().guildId
        }
        get channelId() {
            return this.getState().channelId
        }
        computeVoiceFlags() {
            var e, t, n;
            let s = 0,
                i = f.ClipsAllowVoiceRecording.getSetting();
            s = (0, h.setFlag)(s, v.VoiceFlags.ALLOW_VOICE_RECORDING, i);
            let c = (0, o.default)(g.default),
                m = (0, r.areClipsEnabled)() && a.default.getSettings().clipsEnabled && ((null === (e = _.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === v.ApplicationStreamStates.ACTIVE || (null === (t = _.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === v.ApplicationStreamStates.PAUSED),
                {
                    enableDecoupledGameClipping: E
                } = u.default.getCurrentConfig({
                    location: "computeVoiceFlags"
                }),
                p = c && a.default.getSettings().decoupledClipsEnabled && (null === (n = d.default.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && E;
            s = (0, h.setFlag)(s, v.VoiceFlags.CLIPS_ENABLED, m || p);
            let {
                enableViewerClipping: y
            } = l.default.getCurrentConfig({
                location: "computeVoiceFlags"
            }, {
                autoTrackExposure: !1
            }), T = y && c && a.default.getSettings().viewerClipsEnabled;
            return s = (0, h.setFlag)(s, v.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS, T)
        }
        getInitialState() {
            return {
                guildId: null,
                channelId: null,
                selfMute: g.default.isSelfMute(),
                selfDeaf: g.default.isSelfDeaf(),
                selfVideo: g.default.isVideoEnabled(),
                preferredRegion: null,
                videoStreamParameters: null,
                flags: 0
            }
        }
        getNextState(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            return {
                guildId: t,
                channelId: n,
                selfMute: g.default.isSelfMute(),
                selfDeaf: g.default.isSelfDeaf(),
                selfVideo: g.default.isVideoEnabled(),
                preferredRegion: m.default.getPreferredRegion(),
                videoStreamParameters: g.default.getVideoStreamParameters(),
                flags: this.computeVoiceFlags()
            }
        }
        shouldCommit() {
            return this.socket.isSessionEstablished()
        }
        didCommit(e) {
            var t;
            let {
                guildId: n,
                channelId: s,
                selfMute: i,
                selfDeaf: r,
                selfVideo: a,
                preferredRegion: o,
                videoStreamParameters: d,
                flags: u = 0
            } = e;
            a && (null === (t = c.default.getChannel(s)) || void 0 === t ? void 0 : t.type) === v.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
                guildId: n,
                channelId: s,
                selfMute: i,
                selfDeaf: r,
                selfVideo: a,
                preferredRegion: o,
                videoStreamParameters: d,
                flags: u
            }) : this.socket.voiceStateUpdate({
                guildId: n,
                channelId: s,
                selfMute: i,
                selfDeaf: r,
                selfVideo: a,
                preferredRegion: o,
                flags: u
            })
        }
        constructor(e) {
            super(), this.socket = e
        }
    }
}