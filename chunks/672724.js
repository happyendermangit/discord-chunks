function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("458960"),
        o = n("702747");
    let u = {
            friction: 14,
            tension: 200
        },
        d = {
            DURATION: "DURATION",
            VOLUME: "VOLUME"
        };

    function c(e) {
        let t = 0 | e,
            n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
    }
    class f extends i.Component {
        componentDidMount() {
            let {
                previewWidth: e,
                animatedProgress: t
            } = this.state;
            this._previewId = e.addListener(this.handlePreviewChange), this._progressId = t.addListener(this.handleAnimatedChange)
        }
        componentWillUnmount() {
            let {
                previewWidth: e,
                animatedProgress: t
            } = this.state;
            e.removeListener(this._previewId), t.removeListener(this._progressId), window.removeEventListener("mouseup", this.handleDragEnd, !1), window.removeEventListener("mousemove", this.handleDragMove, !1)
        }
        componentDidUpdate(e, t) {
            let {
                dragging: n,
                previewWidth: l,
                animatedProgress: i
            } = this.state;
            !n && t.dragging && l.setValue(i._value)
        }
        setGrabber(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                {
                    animatedProgress: n
                } = this.state;
            t ? r.default.spring(n, {
                toValue: e,
                ...u
            }).start() : n.setValue(e)
        }
        calculatePercentage(e, t) {
            let {
                wrapper: n,
                props: {
                    type: l
                }
            } = this;
            if (null == n) return 0;
            let {
                left: i,
                width: a,
                bottom: s,
                height: r
            } = n.getBoundingClientRect(), o = l === d.VOLUME ? (s - t) / r : (e - i) / a;
            return Math.min(1, Math.max(0, o))
        }
        render() {
            let {
                buffers: e,
                type: t,
                className: n,
                sliderClassName: i
            } = this.props, {
                dragging: a,
                previewWidth: u,
                animatedProgress: c
            } = this.state;
            return (0, l.jsx)("div", {
                className: s(n, t === d.VOLUME ? o.vertical : o.horizontal),
                children: (0, l.jsx)("div", {
                    className: s(i, a ? o.mediaBarInteractionDragging : o.mediaBarInteraction, t === d.VOLUME ? o.mediaBarInteractionVolume : null),
                    onMouseDown: this.handleDragStart,
                    onMouseMove: this.handleMouseMove,
                    ref: e => this.wrapper = e,
                    children: (0, l.jsxs)("div", {
                        className: s(o.mediaBarWrapper, t === d.VOLUME ? o.mediaBarWrapperVolume : null),
                        children: [null != e ? e.map((e, t) => {
                            let [n, i] = e;
                            return (0, l.jsx)("div", {
                                className: o.buffer,
                                style: {
                                    width: "".concat(100 * i, "%"),
                                    left: "".concat(100 * n, "%")
                                }
                            }, t)
                        }) : null, t === d.DURATION ? (0, l.jsx)(r.default.div, {
                            className: o.mediaBarPreview,
                            style: {
                                width: u.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"]
                                })
                            }
                        }) : null, (0, l.jsx)(r.default.div, {
                            className: o.mediaBarProgress,
                            style: {
                                width: c.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"]
                                })
                            },
                            children: (0, l.jsx)("span", {
                                className: o.mediaBarGrabber
                            })
                        }), t === d.DURATION ? (0, l.jsx)(r.default.div, {
                            ref: this.setBubbleRef,
                            className: o.bubble,
                            style: {
                                left: (a ? c : u).interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"]
                                })
                            }
                        }) : null]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                animatedProgress: new r.default.Value(0),
                dragging: !1,
                offsetLeft: 0,
                offsetWidth: 0,
                previewWidth: new r.default.Value(0)
            }, this.handlePreviewChange = () => {
                let {
                    bubble: e,
                    state: {
                        dragging: t,
                        previewWidth: n
                    },
                    props: {
                        value: l
                    }
                } = this;
                !t && null != e && (e.innerText = c(n._value * l))
            }, this.handleAnimatedChange = () => {
                let {
                    bubble: e,
                    state: {
                        dragging: t,
                        animatedProgress: n
                    },
                    props: {
                        value: l
                    }
                } = this;
                t && null != e && (e.innerText = c(n._value * l))
            }, this.handleMouseMove = e => {
                let {
                    dragging: t,
                    previewWidth: n
                } = this.state;
                if (t) return;
                let {
                    clientX: l,
                    clientY: i
                } = e;
                n.setValue(this.calculatePercentage(l, i))
            }, this.handleDragMove = e => {
                let {
                    onDrag: t,
                    type: n
                } = this.props, {
                    clientX: l,
                    clientY: i
                } = e;
                t(this.calculatePercentage(l, i), n)
            }, this.handleDragStart = e => {
                let {
                    onDragStart: t,
                    onDrag: n,
                    type: l,
                    currentWindow: i
                } = this.props, {
                    clientX: a,
                    clientY: s
                } = e;
                if (e.preventDefault(), null == this.wrapper) return;
                let {
                    left: r,
                    width: o
                } = this.wrapper.getBoundingClientRect();
                this.setState({
                    dragging: !0,
                    offsetLeft: r,
                    offsetWidth: o
                }, () => {
                    t(l), n(this.calculatePercentage(a, s), l), i.removeEventListener("mouseup", this.handleDragEnd, !1), i.removeEventListener("mousemove", this.handleDragMove, !1), i.addEventListener("mouseup", this.handleDragEnd, !1), i.addEventListener("mousemove", this.handleDragMove, !1)
                })
            }, this.handleDragEnd = () => {
                let {
                    onDragEnd: e,
                    currentWindow: t
                } = this.props;
                e(), t.removeEventListener("mouseup", this.handleDragEnd, !1), t.removeEventListener("mousemove", this.handleDragMove, !1), this.setState({
                    dragging: !1
                })
            }, this.setBubbleRef = e => {
                null == e ? this.bubble = null : null != e.componentRef ? this.bubble = e.componentRef : null != e.refs && (this.bubble = e.refs.node)
            }
        }
    }
    f.Types = d, f.defaultProps = {
        currentWindow: window
    };
    var m = f
}