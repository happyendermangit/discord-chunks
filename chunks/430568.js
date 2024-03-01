function(i, x, t) {
    "use strict";
    t.r(x), t.d(x, {
        default: function() {
            return b
        }
    }), t("222007"), t("70102"), t("843762"), t("424973");
    var s = t("37983"),
        a = t("884691"),
        o = t("414456"),
        y = t.n(o),
        d = t("817736"),
        k = t.n(d),
        r = t("118810"),
        e = t("446674"),
        p = t("407063"),
        n = t("845579"),
        m = t("901165"),
        c = t("62843"),
        l = t("315102"),
        f = t("402671"),
        _ = t("866190"),
        u = t("115279");
    class h extends a.PureComponent {
        componentWillUnmount() {
            var i;
            null === (i = this.cancelLoadImage) || void 0 === i || i.call(this)
        }
        getSrc() {
            let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                {
                    src: x,
                    emojiId: t,
                    emojiName: s,
                    animated: a,
                    shouldAnimate: o,
                    isFocused: y,
                    isInteracting: d,
                    size: k = "default"
                } = i,
                {
                    hover: r
                } = this.state;
            if (null != x) return x;
            if (null != t) {
                let i = u.EMOJI_SIZE_MAP[k];
                return l.default.getEmojiURL({
                    id: t,
                    animated: y && !0 === a && (!0 === o || r || !0 === d),
                    size: i
                })
            }
            if (null != s) return f.default.getURL(s)
        }
        render() {
            var i;
            let x;
            let {
                emojiName: t,
                animated: o,
                className: d,
                size: k = "default",
                alt: r,
                shouldAnimate: e,
                isFocused: p,
                emojiId: n,
                autoplay: m,
                isInteracting: c,
                ...l
            } = this.props, f = this.getSrc();
            return null == f || "" === f ? (0, s.jsx)("span", {
                className: y("emoji", "emoji-text"),
                children: t
            }) : (o && (x = {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }), (0, a.createElement)("img", {
                ...l,
                key: this.key,
                src: f,
                alt: null !== (i = null != r ? r : t) && void 0 !== i ? i : void 0,
                draggable: !1,
                ...x,
                className: y("emoji", d, {
                    jumboable: "jumbo" === k
                }),
                onError: this.onError,
                "data-type": "emoji",
                ...null != n && "" !== n ? {
                    "data-id": n
                } : {
                    "data-name": t
                }
            }))
        }
        constructor(...i) {
            super(...i), this.state = {
                hover: !1
            }, this.key = void 0, this.onError = () => {
                let i = this.getSrc();
                null != i && (this.cancelLoadImage = (0, p.loadImage)(i, i => {
                    !i && (this.key = Date.now(), this.forceUpdate())
                }))
            }, this.onMouseEnter = i => {
                this.setState({
                    hover: !0
                });
                let {
                    onMouseEnter: x
                } = this.props;
                null != x && x(i)
            }, this.onMouseLeave = i => {
                this.setState({
                    hover: !1
                });
                let {
                    onMouseLeave: x
                } = this.props;
                null != x && x(i)
            }
        }
    }
    h.defaultProps = {
        isInteracting: !1
    };
    let I = function(i) {
        if (null == window.IntersectionObserver) return function(x) {
            return (0, s.jsx)(i, {
                ...x,
                shouldAnimate: x.animated
            })
        };
        let x = [],
            t = [],
            o = new window.IntersectionObserver(i => {
                i.forEach(i => {
                    let s = t.find(x => {
                        let [t] = x;
                        return t === i.target
                    });
                    if (null == s) return;
                    let a = s[1];
                    if (i.intersectionRatio >= .7) {
                        var o, y;
                        if (-1 !== x.indexOf(a)) return;
                        let t = Math.abs(i.intersectionRect.bottom - Number(null === (o = i.rootBounds) || void 0 === o ? void 0 : o.bottom)) < Math.abs(i.intersectionRect.top - Number(null === (y = i.rootBounds) || void 0 === y ? void 0 : y.top));
                        t ? x.unshift(a) : x.push(a), a.forceUpdate(), t && x.length > 100 && x[100].forceUpdate()
                    } else {
                        let i = x.indexOf(a); - 1 !== i && (x.splice(i, 1), a.forceUpdate(), i < 100 && x.length >= 100 && x[99].forceUpdate())
                    }
                })
            }, {
                threshold: .7
            });

        function y(i) {
            let x = k.findDOMNode(i);
            (0, r.isElement)(x) && (t.push([x, i]), o.observe(x))
        }

        function d(i) {
            let s = k.findDOMNode(i);
            o.unobserve(s);
            let a = t.findIndex(x => {
                let [t, s] = x;
                return s === i
            }); - 1 !== a && (t.splice(a, 1), -1 !== (a = x.indexOf(i)) && (x.splice(a, 1), a < 100 && x.length >= 100 && x[99].forceUpdate()))
        }
        return class extends a.Component {
            shouldAutoplay(i) {
                return i.animated && i.autoplay
            }
            componentDidMount() {
                this.shouldAutoplay(this.props) && y(this)
            }
            componentDidUpdate(i) {
                let x = this.shouldAutoplay(i),
                    t = this.shouldAutoplay(this.props);
                t !== x && (t ? y(this) : d(this))
            }
            componentWillUnmount() {
                this.shouldAutoplay(this.props) && d(this)
            }
            render() {
                let t = x.indexOf(this),
                    {
                        autoplay: a,
                        allowAnimatedEmoji: o,
                        ...y
                    } = this.props;
                return (0, s.jsx)(c.MessagesInteractionContext.Consumer, {
                    children: x => (0, s.jsx)(i, {
                        ...y,
                        autoplay: a || !1,
                        shouldAnimate: -1 !== t && t < 100 && !x.disableAnimations && o
                    })
                })
            }
        }
    }(h);

    function b(i) {
        let x = n.AnimateEmoji.useSetting(),
            t = {
                autoplay: null == i.autoplay ? x : i.autoplay,
                allowAnimatedEmoji: x
            },
            a = __OVERLAY__ ? (0, e.useStateFromStores)([m.default], () => m.default.isInstanceFocused()) : (0, _.useIsWindowFocused)();
        return (0, s.jsx)(I, {
            ...i,
            ...t,
            isFocused: a
        })
    }
}