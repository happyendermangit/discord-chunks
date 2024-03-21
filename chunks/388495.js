function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useModalContext: function() {
            return T
        },
        Modals: function() {
            return A
        }
    }), n("222007"), n("70102"), n("700225");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("917351"),
        l = n.n(o),
        u = n("266491"),
        d = n("244201"),
        c = n("892974"),
        _ = n("983782"),
        f = n("668596"),
        E = n("659500"),
        h = n("551042"),
        g = n("625611"),
        m = n("49111"),
        p = n("934583");
    let S = [_.default, f.default];
    class v extends s.PureComponent {
        render() {
            let {
                render: e,
                LayerComponent: t,
                isTopModal: n,
                instant: s
            } = this.props, {
                transitionState: r
            } = this.state;
            return (r === g.ModalTransitionState.ENTERING || r === g.ModalTransitionState.ENTERED) && !n && (r = g.ModalTransitionState.HIDDEN), s && (r = g.ModalTransitionState.ENTERED), (0, i.jsx)(t, {
                children: (0, i.jsx)("div", {
                    className: a(p.layer, !n && p.hidden),
                    children: e({
                        transitionState: r,
                        onClose: this.close
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                transitionState: null
            }, this.componentWillAppear = e => {
                this.componentWillEnter(e)
            }, this.componentWillEnter = e => {
                let {
                    instant: t
                } = this.props;
                this.setState({
                    transitionState: g.ModalTransitionState.ENTERING
                }), setTimeout(() => {
                    this.setState({
                        transitionState: g.ModalTransitionState.ENTERED
                    }), e()
                }, t ? 0 : g.TRANSITION_DURATION)
            }, this.componentWillLeave = e => {
                let {
                    instant: t
                } = this.props;
                this.setState({
                    transitionState: g.ModalTransitionState.EXITING
                }), setTimeout(() => {
                    this.setState({
                        transitionState: g.ModalTransitionState.EXITED
                    }), e()
                }, t ? 0 : g.TRANSITION_DURATION)
            }, this.close = () => new Promise(e => {
                this.props.closeModal(this.props.modalKey), setTimeout(() => e(), g.TRANSITION_DURATION)
            })
        }
    }

    function T() {
        return (0, h.modalContextFromAppContext)((0, d.useAppContext)())
    }
    let I = [];

    function A() {
        let e = T(),
            t = (0, h.useModalsStore)(t => void 0 !== t[e] ? t[e] : I),
            n = s.useRef();
        s.useLayoutEffect(() => {
            n.current = t[t.length - 1]
        }, [t]);
        let r = t.length > 0;
        s.useLayoutEffect(() => {
            if (!r) return;
            let e = () => {
                let e = n.current;
                null != e && null != e.onCloseRequest && e.onCloseRequest()
            };
            return E.ComponentDispatch.subscribe(m.ComponentActions.MODAL_CLOSE, e), () => {
                E.ComponentDispatch.unsubscribe(m.ComponentActions.MODAL_CLOSE, e)
            }
        }, [r]);
        let a = s.useCallback(() => {
                let e = n.current;
                null != e && null != e.onCloseRequest && e.onCloseRequest()
            }, []),
            o = s.useCallback(t => {
                (0, h.closeModal)(t, e)
            }, [e]),
            d = S.map(e => t.some(t => t.Layer === e || null == t.Layer && e === _.default));
        return (0, i.jsxs)(u.TransitionGroup, {
            component: s.Fragment,
            children: [S.map((e, n) => {
                var s;
                let r = l.findLast(t, t => t.Layer === e || null == t.Layer && e === _.default);
                return (0, i.jsx)(c.default, {
                    isVisible: d[n],
                    backdropStyle: null !== (s = null == r ? void 0 : r.backdropStyle) && void 0 !== s ? s : c.BackdropStyles.DARK,
                    onClose: a,
                    LayerComponent: e,
                    backdropInstant: null == r ? void 0 : r.instant
                }, "layer-".concat(n))
            }), t.map((e, n) => {
                let {
                    key: s,
                    Layer: r,
                    render: a,
                    instant: l
                } = e;
                return (0, i.jsx)(v, {
                    modalKey: s,
                    LayerComponent: null != r ? r : _.default,
                    isTopModal: n === t.length - 1,
                    render: a,
                    closeModal: o,
                    instant: l
                }, s)
            })]
        })
    }
}