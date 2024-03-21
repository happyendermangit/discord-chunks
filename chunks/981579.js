function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Sequencer: function() {
            return E
        }
    }), n("222007");
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("458960"),
        d = n("266491"),
        c = n("413197"),
        _ = n("86337");
    (s = i || (i = {}))[s.ENTERING = 0] = "ENTERING", s[s.LEAVING = 1] = "LEAVING", s[s.APPEARING = 2] = "APPEARING", s[s.STATIC = 3] = "STATIC";
    class f extends a.PureComponent {
        componentDidMount() {
            if (null != this._measureRef.current) {
                let {
                    height: e
                } = this._measureRef.current.getBoundingClientRect();
                this.setState({
                    targetHeight: e,
                    baseHeight: this.props.getBaseHeight()
                })
            }
        }
        componentDidUpdate(e, t) {
            t.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight)
        }
        componentWillAppear(e) {
            this.setState({
                animationState: 2
            }), e()
        }
        componentDidAppear() {
            let {
                animationProgress: e,
                targetHeight: t
            } = this.state;
            e.setValue(2), this.setState({
                animationState: 3,
                baseHeight: t
            })
        }
        componentWillEnter(e) {
            let {
                duration: t
            } = this.props, {
                animationProgress: n
            } = this.state;
            this.setState({
                animationState: 0
            }), this.props.setHeight(this.state.targetHeight), u.default.timing(n, {
                toValue: 2,
                duration: t,
                delay: t / 2
            }).start(e)
        }
        componentDidEnter() {
            this.setState({
                animationState: 3
            })
        }
        componentWillLeave(e) {
            let {
                animationProgress: t
            } = this.state, {
                duration: n,
                getDirection: i
            } = this.props;
            this.direction = i(), this.setState({
                animationState: 1
            }), u.default.timing(t, {
                toValue: 0,
                duration: n
            }).start(e)
        }
        componentDidLeave() {
            this.setState({
                animationState: 3
            })
        }
        getAnimatedStyle() {
            var e, t;
            let {
                reducedMotion: n
            } = this.context, {
                fillParent: i
            } = this.props, {
                animationProgress: s,
                animationState: r,
                baseHeight: a,
                targetHeight: o
            } = this.state, l = null !== (e = this.props.sideMargin) && void 0 !== e ? e : 0, d = null !== (t = this.props.verticalMargin) && void 0 !== t ? t : 0, c = 1 === r, _ = 0 === r, f = (c ? -1 : 1) * this.direction, E = {
                transform: [{
                    translateX: s.interpolate({
                        inputRange: [0, 2],
                        outputRange: ["".concat(150 * f, "%"), "0%"],
                        extrapolate: "clamp",
                        easing: u.default.Easing.inOut(u.default.Easing.ease)
                    })
                }]
            };
            return {
                overflow: _ || c ? "hidden" : "visible",
                position: c ? "absolute" : void 0,
                top: c ? d : void 0,
                left: c ? l : void 0,
                right: c ? l : void 0,
                bottom: c ? d : void 0,
                ...n.enabled ? null : E,
                opacity: s.interpolate({
                    inputRange: [0, 2],
                    outputRange: [0, 1],
                    extrapolate: "clamp",
                    easing: u.default.Easing.inOut(u.default.Easing.ease)
                }),
                height: _ ? s.interpolate({
                    inputRange: [0, 1],
                    outputRange: [a, o],
                    extrapolate: "clamp",
                    easing: u.default.Easing.inOut(u.default.Easing.ease)
                }) : i ? "100%" : "auto"
            }
        }
        render() {
            let {
                fillParent: e,
                className: t,
                animatedNodeClassName: n,
                staticClassName: i
            } = this.props, {
                animationState: s
            } = this.state;
            return e ? (0, r.jsx)("div", {
                ref: this._measureRef,
                className: l(_.measurementFill, t, {
                    [l(_.measurementFillStatic, i)]: 3 === s
                }),
                children: (0, r.jsx)(u.default.div, {
                    className: l(_.animatedNode, n),
                    style: this.getAnimatedStyle(),
                    children: this.props.children
                })
            }) : (0, r.jsx)("div", {
                ref: this._measureRef,
                className: l(_.measurement, t),
                children: (0, r.jsx)(u.default.div, {
                    className: l(_.animatedNode, n),
                    style: this.getAnimatedStyle(),
                    children: this.props.children
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                animationProgress: new u.default.Value(0),
                targetHeight: 0,
                baseHeight: 0,
                animationState: null
            }, this.direction = this.props.getDirection(), this._measureRef = a.createRef()
        }
    }
    f.contextType = c.AccessibilityPreferencesContext, f.defaultProps = {
        duration: 300
    };
    class E extends a.Component {
        componentDidMount() {
            this.setPrevSteps()
        }
        componentDidUpdate() {
            this.setPrevSteps()
        }
        setPrevSteps() {
            let {
                step: e,
                steps: t
            } = this.props;
            this.prevStep = e, this.prevSteps = t
        }
        render() {
            let {
                step: e,
                className: t,
                innerClassName: n,
                animatedNodeClassName: i,
                staticClassName: s,
                sideMargin: a,
                verticalMargin: o,
                children: u,
                fillParent: c
            } = this.props;
            return (0, r.jsx)(d.TransitionGroup, {
                component: "div",
                className: l(_.transitionGroup, t),
                children: (0, r.jsx)(f, {
                    fillParent: c,
                    sideMargin: a,
                    verticalMargin: o,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: n,
                    animatedNodeClassName: i,
                    staticClassName: s,
                    setHeight: this.setHeight,
                    children: u
                }, "".concat(e))
            })
        }
        constructor(...e) {
            super(...e), this.stepHeights = {}, this.prevStep = null, this.prevSteps = [], this.getBaseHeight = () => null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0, this.getDirection = () => {
                let {
                    steps: e,
                    step: t
                } = this.props, n = null != this.prevStep ? e.indexOf(this.prevStep) : -1, i = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1, s = e.indexOf(t);
                return Math.max(n, i) > s ? -1 : 1
            }, this.setHeight = e => {
                let {
                    step: t
                } = this.props;
                this.stepHeights[t] = e
            }
        }
    }
    E.defaultProps = {
        fillParent: !1
    }
}