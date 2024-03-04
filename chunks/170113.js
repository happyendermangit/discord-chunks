function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertSecondsToClockFormat: function() {
            return b
        },
        default: function() {
            return F
        }
    }), n("424973"), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("458960"),
        d = n("77078"),
        c = n("95032"),
        f = n("718517"),
        m = n("829536"),
        p = n("563680"),
        h = n("725962"),
        E = n("672724"),
        g = n("392284"),
        C = n("468482"),
        S = n("316680"),
        T = n("830837"),
        v = n("132755"),
        I = n("73034"),
        _ = n("58608"),
        N = n("719347"),
        A = n("49111"),
        x = n("782340"),
        y = n("273818"),
        O = n("125047");
    let R = "-:--",
        M = {
            friction: 14,
            tension: 200
        },
        L = {
            VIDEO: "VIDEO",
            AUDIO: "AUDIO"
        },
        P = {
            width: "100%",
            height: "100%",
            backgroundColor: "black"
        };

    function b(e) {
        let t = 0 | e,
            n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
    }
    let j = e => {
        let {
            current: t,
            duration: n
        } = e, i = null != t ? b(t) : R, a = null != n ? b(n) : R;
        return i = i.padStart(a.length, "0"), (0, l.jsxs)("div", {
            className: y.durationTimeWrapper,
            children: [(0, l.jsx)("span", {
                className: y.durationTimeDisplay,
                children: i
            }), (0, l.jsx)("span", {
                className: y.durationTimeSeparator,
                children: "/"
            }), (0, l.jsx)("span", {
                className: y.durationTimeDisplay,
                children: a
            })]
        })
    };
    class U extends i.Component {
        componentDidMount() {
            this.state.translateY.setValue(this.props.autoPlay ? 1 : 0)
        }
        componentDidUpdate(e) {
            let {
                hide: t,
                playing: n
            } = this.props;
            if (t && !e.hide) {
                var l;
                this.animateControls(1, n), null === (l = this.volumeButton) || void 0 === l || l.blur()
            } else !t && e.hide && this.animateControls(0, n)
        }
        updateProgress(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                {
                    durationBar: n
                } = this;
            null != n && n.setGrabber(e, t)
        }
        animateControls(e, t) {
            let {
                translateY: n
            } = this.state;
            t ? u.default.spring(n, {
                toValue: e,
                ...M
            }).start() : n.setValue(e)
        }
        getAnimatedStyle() {
            let {
                translateY: e
            } = this.state;
            return {
                transform: [{
                    translateY: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "100%"]
                    })
                }]
            }
        }
        renderPlayIcon() {
            let {
                playing: e,
                currentTime: t,
                duration: n,
                onPause: i,
                onPlay: a,
                disabled: s
            } = this.props;
            return e ? (0, l.jsx)(d.Clickable, {
                className: y.videoButton,
                onClick: i,
                tabIndex: s ? -1 : 0,
                "aria-label": x.default.Messages.PAUSE,
                children: (0, l.jsx)(T.default, {
                    className: y.controlIcon
                }, "pause")
            }) : null != t && t === n ? (0, l.jsx)(d.Clickable, {
                className: y.videoButton,
                onClick: a,
                tabIndex: s ? -1 : 0,
                "aria-label": x.default.Messages.PLAY_AGAIN,
                children: (0, l.jsx)(I.default, {
                    className: y.controlIcon
                }, "replay")
            }) : (0, l.jsx)(d.Clickable, {
                className: y.videoButton,
                onClick: a,
                tabIndex: s ? -1 : 0,
                "aria-label": x.default.Messages.PLAY,
                children: (0, l.jsx)(v.default, {
                    className: y.controlIcon
                }, "play")
            })
        }
        render() {
            let {
                buffers: e,
                children: t,
                currentTime: n,
                duration: i,
                muted: a,
                onDrag: s,
                onDragEnd: r,
                onDragStart: o,
                onToggleMuted: d,
                onVolumeShow: c,
                onVolumeHide: f,
                width: m,
                volume: p,
                type: h
            } = this.props;
            return (0, l.jsxs)(u.default.div, {
                className: h === L.VIDEO ? y.videoControls : y.audioControls,
                onClick: e => e.stopPropagation(),
                onDoubleClick: e => e.stopPropagation(),
                style: this.getAnimatedStyle(),
                children: [this.renderPlayIcon(), "string" == typeof m || m > 250 ? (0, l.jsx)(j, {
                    current: n,
                    duration: i
                }) : null, (0, l.jsx)(E.default, {
                    buffers: e,
                    value: null != i ? i : 0,
                    onDrag: s,
                    onDragEnd: r,
                    onDragStart: o,
                    type: E.default.Types.DURATION,
                    ref: this.setDurationRef
                }), (0, l.jsx)("div", {
                    className: O.flex,
                    children: (0, l.jsx)(S.default, {
                        ref: this.setVolumeButtonRef,
                        muted: a,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: e => s(e, E.default.Types.VOLUME),
                        onToggleMute: d,
                        onVolumeShow: c,
                        onVolumeHide: f,
                        iconClassName: y.controlIcon,
                        sliderWrapperClassName: y.volumeSliderWrapper
                    })
                }), t]
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                translateY: new u.default.Value(0)
            }, this.setDurationRef = e => {
                this.durationBar = e
            }, this.setVolumeButtonRef = e => {
                this.volumeButton = e
            }
        }
    }

    function D(e) {
        let {
            fileName: t,
            fileSize: n,
            src: i,
            disabled: a,
            mimeType: s,
            hideDownloadButton: r
        } = e;
        return (0, l.jsxs)("div", {
            className: y.audioMetadata,
            children: [(0, l.jsxs)("div", {
                className: y.metadataContent,
                children: [a ? t : (0, l.jsx)(h.default, {
                    href: i,
                    className: y.metadataDownload,
                    iconClassName: y.metadataIcon,
                    mimeType: s,
                    fileName: t
                }), (0, l.jsx)("div", {
                    className: y.metadataSize,
                    children: n
                })]
            }), !r && (0, l.jsx)(h.default, {
                href: i,
                className: y.metadataDownload,
                iconClassName: y.metadataIcon,
                mimeType: s
            })]
        })
    }
    U.defaultProps = {
        disabled: !1
    };
    class k extends i.Component {
        pop() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.setState({
                play: e
            }, this.popAnimation)
        }
        getAnimatedStyle() {
            let {
                opacity: e,
                scale: t
            } = this.state;
            return u.default.accelerate({
                opacity: e.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, .8]
                }),
                transform: [{
                    scale: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 2]
                    })
                }]
            })
        }
        render() {
            let {
                play: e
            } = this.state, t = e ? v.default : T.default;
            return (0, l.jsx)(u.default.div, {
                className: y.playPausePop,
                style: this.getAnimatedStyle(),
                children: (0, l.jsx)(t, {
                    className: y.playPausePopIcon
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                play: !1,
                scale: new u.default.Value(0),
                opacity: new u.default.Value(0)
            }, this.popAnimation = () => {
                let {
                    opacity: e,
                    scale: t
                } = this.state;
                t.setValue(0), e.setValue(0), u.default.parallel([u.default.sequence([u.default.timing(e, {
                    toValue: 1,
                    duration: 200
                }), u.default.timing(e, {
                    toValue: 0,
                    duration: 200
                })]), u.default.spring(t, {
                    toValue: 1.5,
                    ...M,
                    friction: 80
                })]).start()
            }
        }
    }
    class w extends i.PureComponent {
        static getDerivedStateFromProps(e, t) {
            return !e.playable && t.playing ? {
                playing: !1,
                hideControls: !1
            } : null
        }
        componentDidMount() {
            let {
                playing: e,
                muted: t,
                volume: n
            } = this.state, {
                current: l
            } = this.mediaRef;
            null != l && (t && (l.muted = t), e && (this.play(!0), this.handleUIUpdate()), l.volume = n)
        }
        componentDidUpdate(e, t) {
            let {
                props: {
                    onPause: n,
                    onVolumeChange: l,
                    onMute: i
                },
                state: {
                    playing: a,
                    fullscreen: s,
                    muted: r,
                    dragging: o,
                    volume: u
                }
            } = this, {
                current: d
            } = this.mediaRef, {
                current: c
            } = this.playPausePopRef;
            if (null == d) return;
            a && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == c || c.pop(a))) : !a && t.playing && (d.pause(), null == c || c.pop(a), null == n || n());
            let f = (0, p.getFullScreenNode)(d.parentNode, d);
            s && !t.fullscreen && null != f ? ((0, p.requestFullScreen)(f), f.addEventListener(p.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit)) : !s && t.fullscreen && null != f && (f.removeEventListener(p.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, p.exitFullScreen)(f)), o === E.default.Types.DURATION && t.dragging !== E.default.Types.DURATION && a ? d.pause() : o !== E.default.Types.DURATION && t.dragging === E.default.Types.DURATION && a && d.play(), r !== t.muted && (d.muted = r, null == i || i(r)), u !== t.volume && (d.volume = u, null == l || l(u))
        }
        componentWillUnmount() {
            this._unmounted = !0;
            let {
                current: e
            } = this.mediaRef;
            if (null == e) return;
            let t = (0, p.getFullScreenNode)(e.parentNode, e);
            null != t && (t.removeEventListener(p.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, p.exitFullScreen)(t))
        }
        play() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                {
                    onPlay: t,
                    volume: n,
                    autoMute: l
                } = this.props,
                {
                    current: i
                } = this.mediaRef;
            if (null != i) {
                let a = {};
                if ("function" == typeof n) {
                    let e = n();
                    e !== this.state.volume && (i.volume = e, a.volume = e)
                }
                if ("function" == typeof l) {
                    let e = l();
                    e !== this.state.muted && (i.muted = e, a.muted = e)
                }
                this.setState(a), i.play(), null == t || t(e, i.currentTime * f.default.Millis.SECOND, i.duration * f.default.Millis.SECOND)
            }
        }
        getWidth() {
            let {
                width: e
            } = this.props;
            return "100%" === e ? e : Math.max(e, w.minWidth)
        }
        getHeight() {
            let {
                height: e
            } = this.props;
            return "100%" === e ? e : Math.max(e, w.minHeight)
        }
        updateValue(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                {
                    current: n
                } = this.controlsRef;
            null != n && n.updateProgress(e, t)
        }
        updateTime(e, t) {
            let n = 0 | e,
                l = 0 | t;
            (this.state.currentTime !== n || this.state.duration !== l) && this.setState({
                currentTime: n,
                duration: l
            })
        }
        updateControlsVisibility() {
            let {
                dragging: e,
                fullscreen: t
            } = this.state, n = Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
            n !== this.state.hideControls && null == e && this.setState({
                hideControls: n
            })
        }
        renderVideo() {
            let {
                src: e,
                poster: t,
                forceExternal: n,
                onError: i,
                responsive: a,
                mediaLayoutType: s
            } = this.props, {
                playing: r,
                fullscreen: o
            } = this.state, u = this.getWidth(), d = this.getHeight();
            return n ? (0, l.jsx)(_.default, {
                className: y.video,
                controls: !1,
                height: d,
                poster: t,
                width: u,
                responsive: a && !o,
                mediaLayoutType: s,
                playsInline: !0,
                autoPlay: r
            }) : (0, l.jsx)(_.default, {
                className: y.video,
                controls: !1,
                playsInline: !0,
                autoPlay: r,
                height: d,
                responsive: a && !o,
                mediaLayoutType: o ? N.MediaLayoutType.STATIC : s,
                onClick: this.handleVideoClick,
                onEnded: this.handleEnded,
                onError: i,
                onLoadedMetadata: this.handleLoaded,
                onProgress: this.handleBuffer,
                poster: t,
                preload: this.state.preload,
                ref: this.mediaRef,
                width: u,
                src: e
            })
        }
        renderAudio() {
            return (0, l.jsx)("audio", {
                className: y.audio,
                controls: !1,
                onClick: this.handleVideoClick,
                onEnded: this.handleEnded,
                onLoadedMetadata: this.handleLoaded,
                onProgress: this.handleBuffer,
                preload: this.state.preload,
                ref: this.mediaRef,
                children: (0, l.jsx)("source", {
                    src: this.props.src
                })
            })
        }
        renderControls() {
            let {
                current: e
            } = this.mediaRef, {
                props: {
                    type: t,
                    autoPlay: n,
                    playable: i = !0,
                    onVolumeShow: a,
                    onVolumeHide: s
                },
                state: {
                    buffers: r,
                    currentTime: o,
                    duration: u,
                    hasClickedPlay: d,
                    hideControls: f,
                    muted: h,
                    playing: E,
                    fullscreen: C,
                    volume: S,
                    dragging: T
                }
            } = this, v = this.getWidth();
            return d || n || t === L.AUDIO ? (0, l.jsx)(U, {
                buffers: r,
                currentTime: o,
                duration: u,
                volume: (0, m.amplitudeToPerceptual)(S, 1),
                hide: t === L.VIDEO && f,
                muted: h,
                autoPlay: n,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                onDragStart: this.handleDragStart,
                onPause: () => this.setPlay(!1),
                onPlay: () => this.setPlay(!0),
                onToggleMuted: this.toggleMuted,
                onVolumeShow: a,
                onVolumeHide: s,
                playing: E,
                dragging: T,
                type: t,
                ref: this.controlsRef,
                width: C ? window.screen.width : v,
                disabled: !i,
                children: t === L.VIDEO ? (0, l.jsx)(c.default, {
                    "aria-label": x.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                    className: y.videoButton,
                    guestWindow: window,
                    onClick: this.toggleFullscreen,
                    node: (0, p.getFullScreenNode)(null == e ? void 0 : e.parentNode, e)
                }) : null
            }) : (0, l.jsx)(g.default, {
                onPlay: this.handleVideoClick,
                inactive: !i
            })
        }
        renderMetadata() {
            let {
                fileName: e,
                fileSize: t,
                src: n,
                type: i,
                playable: a,
                mimeType: s
            } = this.props;
            return null == e || null == t ? null : i === L.AUDIO ? (0, l.jsx)(D, {
                fileName: e,
                fileSize: t,
                src: n,
                disabled: !a,
                mimeType: s,
                hideDownloadButton: !0
            }) : null
        }
        renderPlayPausePop() {
            return (0, l.jsx)(k, {
                ref: this.playPausePopRef
            })
        }
        getMediaStyle() {
            let {
                responsive: e,
                type: t,
                height: n
            } = this.props, {
                fullscreen: l
            } = this.state, i = this.getWidth();
            return l ? P : t === L.AUDIO ? {
                width: void 0,
                height: "auto"
            } : e ? void 0 : {
                width: i,
                height: n
            }
        }
        render() {
            let {
                height: e,
                type: t,
                src: n,
                forceExternal: i,
                className: a,
                renderLinkComponent: r,
                responsive: o,
                mediaLayoutType: u,
                renderOverlayContent: d
            } = this.props, {
                fullscreen: c,
                hideControls: f,
                playing: m
            } = this.state, p = y.wrapperPaused;
            if (t === L.AUDIO ? p = y.wrapperAudio : f ? p = y.wrapperControlsHidden : m && (p = y.wrapperPlaying), i && t === L.VIDEO) {
                let t = this.getWidth();
                return (0, l.jsxs)("div", {
                    className: s(p, {
                        [y.wrapperMediaMosaic]: u === N.MediaLayoutType.MOSAIC
                    }),
                    style: o ? void 0 : {
                        width: t,
                        height: e
                    },
                    children: [this.renderMetadata(), this.renderVideo(), (0, l.jsx)("div", {
                        className: y.playCenter,
                        children: (0, l.jsx)(C.default, {
                            className: y.playButton,
                            externalURL: n,
                            renderLinkComponent: r
                        })
                    })]
                })
            }
            return (0, l.jsxs)("div", {
                className: s(p, y.newMosaicStyle, a, {
                    [y.wrapperMediaMosaic]: u === N.MediaLayoutType.MOSAIC
                }),
                "data-fullscreen": c,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                onMouseMove: m ? this.handleMouseMove : void 0,
                onKeyDown: this.handleKeyDown,
                style: this.getMediaStyle(),
                children: [this.renderMetadata(), t === L.AUDIO ? this.renderAudio() : this.renderVideo(), this.renderControls(), t === L.VIDEO ? this.renderPlayPausePop() : null, null != d ? (0, l.jsx)("div", {
                    className: s({
                        [y.overlayContentHidden]: m || c
                    }),
                    children: d()
                }) : null]
            })
        }
        constructor(e) {
            var t;
            super(e), t = this, this._unmounted = !1, this._lastMove = 0, this.mediaRef = i.createRef(), this.controlsRef = i.createRef(), this.playPausePopRef = i.createRef(), this.handleFullScreenExit = () => {
                let {
                    current: e
                } = this.mediaRef;
                if (null == e) return;
                let t = (0, p.getFullScreenNode)(e.parentNode, e);
                (null == t || !(0, p.isFullScreen)(t)) && this.setState({
                    fullscreen: !1
                })
            }, this.toggleFullscreen = () => {
                let e = !this.state.fullscreen;
                this.setState({
                    fullscreen: e
                })
            }, this.setMuted = e => {
                this.setState({
                    muted: e
                })
            }, this.toggleMuted = () => {
                this.setMuted(!this.state.muted)
            }, this.setTime = function(e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        current: l
                    } = t.mediaRef;
                null != l && isFinite(l.duration) && isFinite(l.currentTime) && (l.currentTime = e, t.updateValue(e / l.duration, n), t.updateTime(e, l.duration))
            }, this.handleUIUpdate = () => {
                if (!this.state.playing || this._unmounted) return;
                let {
                    current: e
                } = this.mediaRef;
                null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate))
            }, this.handleDrag = (e, t) => {
                let {
                    current: n
                } = this.mediaRef;
                if (t === E.default.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === E.default.Types.VOLUME) {
                    let t = (0, m.perceptualToAmplitude)(e, 1);
                    0 === t ? this.setState({
                        muted: !0,
                        volume: t
                    }) : this.state.muted && t > 0 ? this.setState({
                        muted: !1,
                        volume: t
                    }) : this.setState({
                        volume: t
                    })
                }
            }, this.handleLoaded = () => {
                let {
                    current: e
                } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
                    hasLoadedMetadata: !0,
                    currentTime: e.currentTime,
                    duration: e.duration
                }))
            }, this.handleDurationChange = () => {
                let {
                    current: e
                } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
                    duration: e.duration
                }))
            }, this.handleBuffer = o.debounce(() => {
                let {
                    current: e
                } = this.mediaRef;
                if (null == e) {
                    this.setState({
                        buffers: []
                    });
                    return
                }
                this.setState({
                    buffers: function(e) {
                        let t = [],
                            {
                                duration: n
                            } = e;
                        for (let l = 0; l < e.buffered.length; l++) {
                            let i = e.buffered.start(l),
                                a = e.buffered.end(l);
                            if (a - i < 1) continue;
                            let s = (a - i) / n,
                                r = i / n;
                            t.push([r, s])
                        }
                        return t
                    }(e)
                })
            }, 400), this.handleEnded = e => {
                let {
                    onEnded: t
                } = this.props;
                this.setState({
                    playing: !1,
                    hideControls: !1
                }), null != t && t(e)
            }, this.handleMouseMove = () => {
                this._lastMove = Date.now()
            }, this.handleMouseLeave = () => {
                this.state.playing && (this._lastMove = 0), this.setState({
                    hovering: !1
                })
            }, this.handleMouseEnter = () => {
                "none" === this.state.preload && this.setState({
                    preload: "metadata"
                }), this.setState({
                    hovering: !0
                })
            }, this.handleVideoClick = e => {
                let {
                    state: {
                        hasClickedPlay: t,
                        playing: n
                    },
                    props: {
                        onClick: l,
                        autoPlay: i,
                        autoMute: a
                    }
                } = this;
                if (null != l) {
                    l(e);
                    return
                }
                e.stopPropagation(), i && !t && n && a ? this.setState({
                    muted: !1,
                    hasClickedPlay: !0
                }) : this.setPlay(!this.state.playing)
            }, this.setPlay = e => {
                let {
                    props: {
                        autoMute: t
                    },
                    state: {
                        hasClickedPlay: n,
                        muted: l
                    }
                } = this;
                e !== this.state.playing && (e ? this.setState({
                    playing: e,
                    hasClickedPlay: !0,
                    muted: (!!n || !t) && l
                }) : this.setState({
                    playing: !1,
                    hideControls: !1
                }))
            }, this.handleDragStart = e => {
                this.setState({
                    dragging: e
                })
            }, this.handleDragEnd = () => {
                this.setState({
                    dragging: null
                }), this._lastMove = Date.now()
            }, this.handleKeyDown = e => {
                let {
                    current: t
                } = this.mediaRef;
                if (e.which === A.KeyboardKeys.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                else if (e.which >= A.KeyboardKeys.DIGIT_0 && e.which <= A.KeyboardKeys.DIGIT_9 && null != t) {
                    e.preventDefault();
                    let n = (e.which - A.KeyboardKeys.DIGIT_0) / 10;
                    t.currentTime = t.duration * n, this.setPlay(!0)
                }
            };
            let {
                autoPlay: n,
                autoMute: l,
                volume: a,
                playable: s
            } = this.props, r = "function" == typeof a ? a() : a, u = "function" == typeof l ? l() : l;
            this.state = {
                buffers: [],
                currentTime: null,
                dragging: null,
                duration: null,
                fullscreen: !1,
                hasClickedPlay: !1,
                hasLoadedMetadata: !1,
                hideControls: !s,
                muted: u,
                volume: r,
                playing: n,
                preload: "none",
                width: w.minWidth,
                height: w.minHeight,
                hovering: !1
            }
        }
    }
    w.Types = L, w.defaultProps = {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }, w.minWidth = 150, w.minHeight = 110;
    var F = w
}