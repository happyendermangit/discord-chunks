function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("672724"),
        u = n("368121"),
        d = n("570511"),
        c = n("974261"),
        f = n("782340"),
        m = n("851535");
    class p extends i.PureComponent {
        componentDidMount() {
            this.updateMediaBar()
        }
        componentDidUpdate(e) {
            (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar()
        }
        updateMediaBar() {
            let {
                muted: e,
                value: t,
                maxValue: n
            } = this.props, l = this._mediaBar.current;
            null != l && (e ? l.setGrabber(0) : l.setGrabber(t / n))
        }
        render() {
            let {
                iconClassName: e,
                className: t,
                sliderWrapperClassName: n,
                sliderClassName: i,
                currentWindow: a,
                muted: p,
                minValue: h,
                maxValue: E,
                value: g,
                onVolumeShow: C,
                onVolumeHide: S
            } = this.props, {
                hovered: T,
                focused: v,
                dragging: I
            } = this.state, _ = u.default;
            return p || g === h ? _ = d.default : g < E / 2 && (_ = c.default), (0, l.jsxs)("div", {
                className: s(t, m.container),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({
                        hovered: !0
                    }), null == C || C()
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
                        this.setState({
                            hovered: !1
                        }), null == S || S()
                    }, 150)
                },
                onFocus: () => this.setState({
                    focused: !0
                }),
                onBlur: () => this.setState({
                    focused: !1
                }),
                onKeyDown: this.handleKeyDown,
                children: [(0, l.jsx)("div", {
                    className: s(m.volumeButtonSlider, n, {
                        [m.sliderVisible]: T || v || I
                    }),
                    onMouseEnter: () => {
                        clearTimeout(this._hoverTimeout), this.setState({
                            hovered: !0
                        })
                    },
                    onMouseLeave: () => {
                        clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => this.setState({
                            hovered: !1
                        }), 150)
                    },
                    children: (0, l.jsx)(o.default, {
                        sliderClassName: i,
                        type: o.default.Types.VOLUME,
                        value: g / E,
                        onDrag: this.handleValueChange,
                        onDragStart: this.handleDragStart,
                        onDragEnd: this.handleDragEnd,
                        currentWindow: a,
                        ref: this._mediaBar
                    })
                }), (0, l.jsx)(r.Button, {
                    className: m.volumeButton,
                    "aria-label": f.default.Messages.CONTROL_VOLUME,
                    size: r.Button.Sizes.NONE,
                    look: r.Button.Looks.BLANK,
                    onClick: this.handleToggleMute,
                    children: (0, l.jsx)(_, {
                        className: e
                    })
                })]
            })
        }
        constructor(...e) {
            super(...e), this._mediaBar = i.createRef(), this.state = {
                hovered: !1,
                focused: !1,
                dragging: !1
            }, this.handleValueChange = e => {
                let {
                    maxValue: t,
                    onValueChange: n
                } = this.props;
                null == n || n(e * t)
            }, this.handleToggleMute = () => {
                let {
                    onToggleMute: e
                } = this.props;
                null == e || e()
            }, this.handleKeyDown = e => {
                let {
                    minValue: t,
                    value: n,
                    maxValue: l,
                    onValueChange: i
                } = this.props, a = .05 * (l - t);
                switch (e.key) {
                    case "ArrowUp":
                        e.stopPropagation(), e.preventDefault(), null == i || i(Math.min(l, n + a));
                        break;
                    case "ArrowDown":
                        e.stopPropagation(), e.preventDefault(), null == i || i(Math.max(t, n - a))
                }
            }, this.handleDragStart = () => {
                this.setState({
                    dragging: !0
                })
            }, this.handleDragEnd = () => {
                this.setState({
                    dragging: !1
                })
            }, this.blur = () => {
                this.setState({
                    focused: !1
                })
            }
        }
    }
    p.defaultProps = {
        minValue: 0,
        maxValue: 100,
        handleSize: 16
    };
    var h = p
}