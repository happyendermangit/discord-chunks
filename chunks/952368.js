function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IMAGE_GIF_RE: function() {
            return v
        },
        default: function() {
            return a
        }
    }), n("222007");
    var l, i, a, s, r = n("37983"),
        o = n("884691"),
        u = n("917351"),
        d = n("290381"),
        c = n("862205"),
        f = n("407063"),
        m = n("168973"),
        p = n("599110"),
        h = n("315102"),
        E = n("103603"),
        g = n("275623"),
        C = n("594098"),
        S = n("719347"),
        T = n("49111");
    let v = /\.gif($|\?|#)/i,
        I = /\.png($|\?|#)/i;
    (s = i || (i = {})).LOAD = "LOAD", s.PRELOAD = "PRELOAD", s.CLICK = "CLICK", (l = class e extends o.Component {
        static isAnimated(e) {
            let {
                src: t,
                original: n,
                animated: l
            } = e;
            return l || v.test(null != n && "" !== n ? n : t)
        }
        static isSrcPNG(e) {
            let {
                src: t
            } = e;
            return I.test(t)
        }
        componentDidMount() {
            let {
                readyState: t
            } = this.state;
            t === T.ImageReadyStates.LOADING && this.loadImage(this.getSrc(this.getRatio(), e.isAnimated(this.props)), this.handleImageLoad), e.isAnimated(this.props) && this.observeVisibility()
        }
        componentDidUpdate(t) {
            let n = e.isAnimated(this.props),
                l = e.isAnimated(t);
            l !== n && (n ? this.observeVisibility() : this.unobserveVisibility())
        }
        componentWillUnmount() {
            e.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
        }
        getSrc(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                {
                    src: n,
                    width: l,
                    height: i,
                    maxWidth: a,
                    maxHeight: s,
                    mediaLayoutType: r
                } = this.props,
                {
                    format: o,
                    quality: u
                } = this.getFormatQuality(t);
            return (0, f.getImageSrc)({
                src: n,
                width: l,
                height: i,
                ratio: e,
                maxWidth: r === S.MediaLayoutType.MOSAIC ? a : void 0,
                maxHeight: r === S.MediaLayoutType.MOSAIC ? s : void 0,
                format: o,
                quality: u
            })
        }
        getFormatQuality() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = null,
                l = null;
            return h.SUPPORTS_WEBP && (t || !e.isAnimated(this.props)) ? (n = "webp", e.isSrcPNG(this.props) && (l = "lossless")) : t && (n = "png"), {
                format: n,
                quality: l
            }
        }
        getRatio() {
            let {
                width: e,
                height: t,
                maxWidth: n = 400,
                maxHeight: l = 300,
                mediaLayoutType: i,
                useFullWidth: a
            } = this.props;
            return i === S.MediaLayoutType.MOSAIC && a ? (0, E.getCoverRatio)({
                width: e,
                height: t,
                maxWidth: n,
                maxHeight: l
            }) : (0, E.getRatio)({
                width: e,
                height: t,
                maxWidth: n,
                maxHeight: l
            })
        }
        getType() {
            let {
                mediaLayoutType: e,
                responsive: t
            } = this.props;
            return null != e ? e : t ? S.MediaLayoutType.RESPONSIVE : S.MediaLayoutType.STATIC
        }
        loadImage(e, t) {
            let {
                width: n,
                height: l
            } = this.props;
            if (this.startLoadingTime = Date.now(), 1 === n && 1 === l) return;
            let i = (0, f.loadImage)(e, (e, n) => {
                null != i && this._cancellers.delete(i), null == t || t(e, n)
            });
            null != i && this._cancellers.add(i)
        }
        render() {
            let {
                alt: t,
                zoomThumbnailPlaceholder: n,
                onZoom: l,
                shouldLink: i,
                onContextMenu: a,
                autoPlay: s,
                original: o,
                className: d,
                imageClassName: c,
                children: f,
                animated: m,
                shouldAnimate: p,
                width: h,
                height: E,
                minWidth: g,
                minHeight: S,
                maxWidth: v,
                maxHeight: I,
                onClick: _,
                renderAccessory: N,
                tabIndex: A,
                limitResponsiveWidth: x,
                useFullWidth: y,
                placeholder: O,
                placeholderVersion: R
            } = this.props, {
                readyState: M,
                hasMouseOver: L,
                hasFocus: P
            } = this.state, b = null != l, j = this.getRatio(), U = (0, u.clamp)(Math.round(h * j), null != g ? g : 0, null != v ? v : 1 / 0), D = (0, u.clamp)(Math.round(E * j), null != S ? S : 0, null != I ? I : 1 / 0), k = {
                alt: t,
                readyState: M,
                onContextMenu: null != a ? a : void 0,
                zoomable: b,
                className: d,
                imageClassName: c,
                minWidth: g,
                minHeight: S,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: x,
                useFullWidth: y,
                tabIndex: A,
                width: U,
                height: D,
                src: "",
                placeholder: O,
                placeholderVersion: R,
                children: null != f ? e => {
                    let {
                        src: t,
                        size: n,
                        alt: l,
                        mediaLayoutType: i
                    } = e;
                    return f({
                        src: t,
                        size: n,
                        alt: l,
                        mediaLayoutType: i
                    })
                } : void 0,
                onMouseEnter: this.onMouseEnter,
                onFocus: this.onFocus,
                onBlur: this.onBlur
            };
            if (1 === k.width && 1 === k.height) return null;
            switch ((b || null != _) && (k.onClick = this.onClick), i && (k.original = null != o && "" !== o ? o : k.src), M) {
                case T.ImageReadyStates.LOADING:
                    null != n && (k.src = n);
                    break;
                case T.ImageReadyStates.READY:
                    if (e.isAnimated(this.props)) {
                        k.onMouseLeave = this.onMouseLeave;
                        let t = (s || L || P) && (null == p || p) && e.visibilityObserver.isVisible(this);
                        t ? (k.src = this.getSrc(j), k.renderAccessory = N) : (k.src = this.getSrc(j, !m || !s), k.renderAccessory = this.renderAccessory), null != f && (k.children = e => {
                            let {
                                src: n,
                                size: l,
                                alt: i,
                                mediaLayoutType: a
                            } = e;
                            return f({
                                src: n,
                                size: l,
                                animating: t,
                                alt: i,
                                mediaLayoutType: a
                            })
                        })
                    } else k.src = this.getSrc(j)
            }
            return (0, r.jsx)(C.default, {
                ...k
            })
        }
        trackLoadingCompleted(e, t, n) {
            if (!this.imageLoadAnalyticsEnabled) return;
            let l = Date.now() - this.startLoadingTime,
                {
                    format: i,
                    quality: a
                } = this.getFormatQuality();
            p.default.track(T.AnalyticEvents.IMAGE_LOADING_COMPLETED, {
                duration_ms: l,
                requested_height: t.height,
                requested_width: t.width,
                height: this.props.height,
                width: this.props.width,
                original_url: this.props.original,
                url: this.props.src,
                requested_url: t.url,
                format: i,
                quality: a,
                state: e ? T.ImageReadyStates.ERROR : this.state.readyState,
                data_saving_mode: m.default.dataSavingMode,
                low_quality_image_mode: m.default.lowQualityImageMode,
                trigger: n
            })
        }
        constructor(t) {
            super(t), this.imageLoadAnalyticsEnabled = !1, this.state = {
                readyState: T.ImageReadyStates.LOADING,
                hasMouseOver: !1,
                hasFocus: !1
            }, this.startLoadingTime = Date.now(), this._cancellers = new Set, this.observeVisibility = () => {
                e.visibilityObserver.observe(this)
            }, this.unobserveVisibility = () => {
                e.visibilityObserver.unobserve(this)
            }, this.handleImageLoad = (e, t) => {
                this.setState({
                    readyState: e ? T.ImageReadyStates.ERROR : T.ImageReadyStates.READY
                }, () => {
                    var n;
                    return this.trackLoadingCompleted(e, t, null !== (n = this.props.trigger) && void 0 !== n ? n : "LOAD")
                })
            }, this.preloadImage = (e, t) => {
                let {
                    width: n,
                    height: l
                } = e, {
                    width: i,
                    height: a
                } = this.props;
                (1 !== i || 1 !== a) && this.loadImage(this.getSrc((0, E.getRatio)({
                    width: i,
                    height: a,
                    maxWidth: n,
                    maxHeight: l
                })), (e, n) => {
                    this.trackLoadingCompleted(e, n, "PRELOAD"), null == t || t(e, n)
                })
            }, this.onMouseEnter = t => {
                e.isAnimated(this.props) && this.setState({
                    hasMouseOver: !0
                });
                let {
                    onMouseEnter: n
                } = this.props;
                null != n && n(t, {
                    preloadImage: this.preloadImage
                })
            }, this.onFocus = t => {
                e.isAnimated(this.props) && this.setState({
                    hasFocus: !0
                })
            }, this.onBlur = e => {
                let {
                    currentTarget: t,
                    relatedTarget: n
                } = e;
                !t.contains(n) && this.setState({
                    hasFocus: !1
                })
            }, this.onMouseLeave = () => this.setState({
                hasMouseOver: !1
            }), this.onClick = e => {
                let {
                    onZoom: t,
                    onClick: n
                } = this.props;
                null != n ? n(e) : null != t && (e.preventDefault(), t(e, {
                    zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                    trigger: "CLICK"
                }))
            }, this.renderAccessory = () => {
                let {
                    hasMouseOver: e,
                    hasFocus: t
                } = this.state, n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
                return this.props.shouldRenderAccessory ? e || t ? n : (0, r.jsx)(g.default, {}) : null
            }, (0, f.isImageLoaded)(this.getSrc(this.getRatio(), e.isAnimated(this.props))) && (this.state.readyState = T.ImageReadyStates.READY), this.imageLoadAnalyticsEnabled = _.getCurrentConfig({
                location: "lazy_image"
            }).enabled
        }
    }).visibilityObserver = new d.VisibilityObserver({
        threshold: .7
    }), l.defaultProps = {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0
    }, a = l;
    let _ = (0, c.createExperiment)({
        kind: "user",
        id: "2024-02_image_load_metrics",
        label: "Image load metrics Config User Experiment",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Do not send metrics for image load",
            config: {
                enabled: !1
            }
        }, {
            id: 2,
            label: "Send metrics for image load",
            config: {
                enabled: !0
            }
        }]
    })
}