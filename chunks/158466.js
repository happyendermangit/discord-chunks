function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("724458"), n("653041");
    var i = n("878604");

    function r(e) {
        return e / 32768
    }

    function s(e) {
        var t, n, i, r, s, a, o, l, u, d, _, c, E, I, T, f, S, h, A, m, N;
        let O = (null !== (d = null == e ? void 0 : e.headerBytes) && void 0 !== d ? d : 0) + (null !== (_ = null == e ? void 0 : e.payloadBytes) && void 0 !== _ ? _ : 0) + (null !== (c = null == e ? void 0 : e.paddingBytes) && void 0 !== c ? c : 0);
        return (null !== (E = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== E ? E : 0) + (null !== (I = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== I ? I : 0) + (null !== (T = null == e ? void 0 : null === (i = e.fec) || void 0 === i ? void 0 : i.paddingBytes) && void 0 !== T ? T : 0) + (null !== (f = null == e ? void 0 : null === (r = e.retransmitted) || void 0 === r ? void 0 : r.headerBytes) && void 0 !== f ? f : 0) + (null !== (S = null == e ? void 0 : null === (s = e.retransmitted) || void 0 === s ? void 0 : s.payloadBytes) && void 0 !== S ? S : 0) + (null !== (h = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.paddingBytes) && void 0 !== h ? h : 0) + (null !== (A = null == e ? void 0 : null === (o = e.transmitted) || void 0 === o ? void 0 : o.headerBytes) && void 0 !== A ? A : 0) + (null !== (m = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) && void 0 !== m ? m : 0) + (null !== (N = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.paddingBytes) && void 0 !== N ? N : 0) + O
    }

    function a(e) {
        var t, n, i, r, s, a, o;
        let l = null !== (r = null == e ? void 0 : e.packets) && void 0 !== r ? r : 0;
        return (null !== (s = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== s ? s : 0) + (null !== (a = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== a ? a : 0) + (null !== (o = null == e ? void 0 : null === (i = e.transmitted) || void 0 === i ? void 0 : i.packets) && void 0 !== o ? o : 0) + l
    }

    function o(e) {
        let t = {};
        for (let i in e) {
            var n;
            t[i] = null != (n = e[i]) ? {
                last: Math.round(1e3 * n.last),
                mean: Math.round(1e3 * n.mean),
                p75: Math.round(1e3 * n.p75),
                p95: Math.round(1e3 * n.p95),
                p99: Math.round(1e3 * n.p99),
                max: Math.round(1e3 * n.max)
            } : null
        }
        return t
    }

    function l(e, t) {
        var n, r, o, l, u, d, _, c, E, I, T, f, S, h;
        let A = e.substreams.find(e => !e.isRTX && !e.isFlexFEC);
        if (null == A) return;
        let m = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0),
            N = e.substreams.reduce((e, t) => e + a(t.rtpStats), 0);
        return {
            type: "video",
            ssrc: A.ssrc,
            sinkWant: (0, i.formatSinkWantStat)(t, A.ssrc, !0),
            sinkWantAsInt: (0, i.formatSinkWantAsInt)(t, A.ssrc),
            codec: {
                id: e.codecPayloadType,
                name: e.codecName
            },
            keyFrameInterval: e.keyFrameInterval,
            bytesSent: m,
            packetsSent: N,
            packetsLost: null !== (c = null === (n = A.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== c ? c : 0,
            fractionLost: null !== (E = null === (r = A.rtcpStats) || void 0 === r ? void 0 : r.fractionLost) && void 0 !== E ? E : 0,
            bitrate: e.mediaBitrate,
            bitrateTarget: e.targetMediaBitrate,
            encoderImplementationName: e.encoderImplementationName,
            encodeUsage: e.encodeUsage,
            averageEncodeTime: e.avgEncodeTime,
            resolution: {
                height: A.height,
                width: A.width
            },
            framesSent: A.frameCounts.keyFrames + A.frameCounts.deltaFrames,
            keyFramesEncoded: A.frameCounts.keyFrames,
            framesEncoded: e.framesEncoded,
            frameRateInput: e.inputFrameRate,
            frameRateEncode: e.encodeFrameRate,
            firCount: null !== (I = null === (o = A.rtcpStats) || void 0 === o ? void 0 : o.firPackets) && void 0 !== I ? I : 0,
            nackCount: null !== (T = null === (l = A.rtcpStats) || void 0 === l ? void 0 : l.nackPackets) && void 0 !== T ? T : 0,
            pliCount: null !== (f = null === (u = A.rtcpStats) || void 0 === u ? void 0 : u.pliPackets) && void 0 !== f ? f : 0,
            qpSum: e.qpSum,
            bandwidthLimitedResolution: e.bwLimitedResolution,
            framesDroppedRateLimiter: e.framesDroppedRateLimiter,
            framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
            framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
            cpuLimitedResolution: e.cpuLimitedResolution,
            encoderQualityVmaf: null !== (S = null === (d = A.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityVmaf_v061) && void 0 !== S ? S : void 0,
            encoderQualityPsnr: null !== (h = null === (_ = A.encoderQualityStats) || void 0 === _ ? void 0 : _.imageQualityWebrtcPsnrDb) && void 0 !== h ? h : void 0,
            filter: e.filter,
            passthroughCount: e.passthroughCount,
            encryptSuccessCount: e.encryptSuccessCount,
            encryptFailureCount: e.encryptFailureCount,
            encryptDuration: e.encryptDuration,
            encryptAttempts: e.encryptAttempts,
            encryptMaxAttempts: e.encryptMaxAttempts
        }
    }

    function u(e, t, n, r) {
        var l, u;
        let d = s(e.rtpStats),
            _ = a(e.rtpStats);
        return {
            type: "video",
            ssrc: e.ssrc,
            sinkWant: (0, i.formatSinkWantStat)(t, e.ssrc, !0),
            sinkWantAsInt: (0, i.formatSinkWantAsInt)(t, e.ssrc),
            sinkWantLocal: (0, i.formatSinkWantStat)(n, e.ssrc, !0),
            codec: {
                id: e.codecPayloadType,
                name: e.codecName
            },
            bytesReceived: d,
            packetsReceived: _,
            packetsLost: null !== (l = e.rtpStats.packetsLost) && void 0 !== l ? l : e.rtcpStats.packetsLost,
            fractionLost: e.rtcpStats.fractionLost,
            bitrate: e.totalBitrate,
            jitterBuffer: e.jitterBuffer,
            currentDelay: e.currentDelay,
            targetDelay: e.targetDelay,
            minPlayoutDelay: e.minPlayoutDelay,
            renderDelay: e.renderDelay,
            averageDecodeTime: e.decode,
            resolution: {
                height: e.height,
                width: e.width
            },
            decoderImplementationName: e.decoderImplementationName,
            framesDecoded: e.framesDecoded,
            framesDropped: e.framesDropped,
            framesDecodeErrors: e.framesDecodeErrors,
            framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
            networkFramesDropped: null !== (u = e.networkFramesDropped) && void 0 !== u ? u : 0,
            keyFramesDecoded: e.frameCounts.keyFrames,
            frameRateDecode: e.decodeFrameRate,
            frameRateNetwork: e.networkFrameRate,
            frameRateRender: e.renderFrameRate,
            firCount: e.rtcpStats.firPackets,
            nackCount: e.rtcpStats.nackPackets,
            pliCount: e.rtcpStats.pliPackets,
            qpSum: e.qpSum,
            freezeCount: e.freezeCount,
            pauseCount: e.pauseCount,
            totalFreezesDuration: e.totalFreezesDuration,
            totalPausesDuration: e.totalPausesDuration,
            totalFramesDuration: e.totalFramesDuration,
            sumOfSquaredFramesDurations: e.sumOfSquaredFramesDurations,
            passthroughCount: e.passthroughCount,
            decryptSuccessCount: e.decryptSuccessCount,
            decryptFailureCount: e.decryptFailureCount,
            decryptDuration: e.decryptDuration,
            decryptAttempts: e.decryptAttempts,
            ...null != r ? o({
                videoJitterBuffer: r.videoJitterBuffer,
                videoJitterDelay: r.videoJitterDelay,
                videoJitterTarget: r.videoJitterTarget
            }) : {}
        }
    }

    function d(e, t, n, r) {
        var a, d, _, c, E;
        let I = null,
            T = null,
            f = "string" == typeof t ? JSON.parse(t) : t,
            S = [];
        if (null != f.outbound) {
            let {
                audio: e,
                video: t,
                videos: r
            } = f.outbound;
            if (null != e) T = (null != T ? T : 0) + e.bytesSent, S.push({
                type: "audio",
                ssrc: e.ssrc,
                sinkWant: (0, i.formatSinkWantStat)(n, e.ssrc, !1),
                sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, e.ssrc),
                codec: {
                    id: e.codecPayloadType,
                    name: e.codecName
                },
                bytesSent: e.bytesSent,
                packetsSent: e.packetsSent,
                packetsLost: Math.max(0, e.packetsLost),
                fractionLost: 100 * e.fractionLost,
                audioLevel: e.audioLevel / 32768,
                audioDetected: e.speaking,
                framesCaptured: e.framesCaptured,
                framesRendered: e.framesRendered,
                noiseCancellerProcessTime: e.noiseCancellerProcessTime,
                voiceActivityDetectorProcessTime: e.voiceActivityDetectorProcessTime,
                passthroughCount: e.passthroughCount,
                encryptSuccessCount: e.encryptSuccessCount,
                encryptFailureCount: e.encryptFailureCount,
                encryptDuration: e.encryptDuration,
                encryptAttempts: e.encryptAttempts,
                encryptMaxAttempts: e.encryptMaxAttempts
            });
            if (null != r) r.forEach(e => {
                let t = l(e, n);
                null != t && (T = (null != T ? T : 0) + t.bytesSent, S.push(t))
            });
            else if (null != t) {
                let e = l(t, n);
                null != e && (T = (null != T ? T : 0) + e.bytesSent, S.push(e))
            }
        }
        let h = {};
        null != f.inbound && f.inbound.forEach(e => {
            let {
                id: t,
                audio: a,
                video: l,
                videos: d,
                playout: _
            } = e;
            if (h[t] = [], null != a) I = (null != I ? I : 0) + a.bytesReceived, h[t].push({
                type: "audio",
                ssrc: a.ssrc,
                sinkWant: (0, i.formatSinkWantStat)(n, a.ssrc, !1),
                sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, a.ssrc),
                codec: {
                    id: a.codecPayloadType,
                    name: a.codecName
                },
                bytesReceived: a.bytesReceived,
                packetsReceived: a.packetsReceived,
                packetsLost: a.packetsLost,
                fractionLost: 100 * a.fractionLost,
                fecPacketsReceived: a.fecPacketsReceived,
                fecPacketsDiscarded: a.fecPacketsDiscarded,
                audioLevel: a.audioLevel / 32768,
                audioDetected: a.speaking,
                jitter: a.jitter,
                jitterBuffer: a.jitterBuffer,
                jitterBufferPreferred: a.jitterBufferPreferred,
                decodingCNG: a.decodingCNG,
                decodingMutedOutput: a.decodingMutedOutput,
                decodingNormal: a.decodingNormal,
                decodingPLC: a.decodingPLC,
                decodingPLCCNG: a.decodingPLCCNG,
                accelerateRate: 100 * a.accelerateRate,
                expandRate: 100 * a.expandRate,
                preemptiveExpandRate: 100 * a.preemptiveExpandRate,
                speechExpandRate: 100 * a.speechExpandRate,
                secondaryDecodedRate: 100 * a.secondaryDecodedRate,
                opSilence: a.opSilence,
                opNormal: a.opNormal,
                opMerge: a.opMerge,
                opExpand: a.opExpand,
                opAccelerate: a.opAccelerate,
                opPreemptiveExpand: a.opPreemptiveExpand,
                opCNG: a.opCNG,
                delayEstimate: a.delayEstimate,
                passthroughCount: a.passthroughCount,
                decryptSuccessCount: a.decryptSuccessCount,
                decryptFailureCount: a.decryptFailureCount,
                decryptDuration: a.decryptDuration,
                decryptAttempts: a.decryptAttempts,
                ...null != _ ? o({
                    audioJitterBuffer: _.audioJitterBuffer,
                    audioJitterDelay: _.audioJitterDelay,
                    audioJitterTarget: _.audioJitterTarget,
                    audioPlayoutUnderruns: _.audioPlayoutUnderruns,
                    relativeReceptionDelay: _.relativeReceptionDelay,
                    relativePlayoutDelay: _.relativePlayoutDelay
                }) : {}
            });
            if (null != d) d.forEach(e => {
                let i = u(e, n, r, _);
                if (null != i) {
                    let n = s(e.rtpStats);
                    I = (null != I ? I : 0) + n, h[t].push(i)
                }
            });
            else if (null != l) {
                let e = u(l, n, r, _);
                if (null != e) {
                    let n = s(l.rtpStats);
                    I = (null != I ? I : 0) + n, h[t].push(e)
                }
            }
        });
        let {
            transport: A,
            clips: m
        } = f, N = {};
        null != A && (N.availableOutgoingBitrate = A.sendBandwidth, N.ping = A.rtt, N.decryptionFailures = A.decryptionFailures, null != A.routingFailures && (N.routingFailures = A.routingFailures), N.localAddress = A.localAddress, N.pacerDelay = A.pacerDelay, null != A.receiverReports && (N.receiverReports = A.receiverReports), N.receiverBitrateEstimate = A.receiverBitrateEstimate, N.outboundBitrateEstimate = A.outboundBitrateEstimate, N.inboundBitrateEstimate = null !== (a = A.inboundBitrateEstimate) && void 0 !== a ? a : 0, N.packetsReceived = A.packetsReceived, N.packetsSent = A.packetsSent, null != A.secureFramesProtocolVersion && (N.secureFramesProtocolVersion = A.secureFramesProtocolVersion)), ((null == A ? void 0 : A.bytesReceived) != null || null != I && !Number.isNaN(I)) && (N.bytesReceived = null !== (_ = null !== (d = null == A ? void 0 : A.bytesReceived) && void 0 !== d ? d : I) && void 0 !== _ ? _ : void 0), ((null == A ? void 0 : A.bytesSent) != null || null != T && !Number.isNaN(T)) && (N.bytesSent = null !== (E = null !== (c = null == A ? void 0 : A.bytesSent) && void 0 !== c ? c : T) && void 0 !== E ? E : void 0);
        let {
            screenshare: O,
            camera: p
        } = f;
        return {
            mediaEngineConnectionId: e,
            transport: N,
            screenshare: O,
            camera: null != p ? {
                capturedFramesDropped: p.capturedFramesDropped,
                capturedFramesCount: p.capturedFramesCount,
                capturedFramesMean: p.capturedFramesMean,
                capturedFramesStdev: p.capturedFramesStdev
            } : null,
            clips: m,
            rtp: {
                inbound: h,
                outbound: S
            }
        }
    }
}