function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        backgroundImagePreloader: function() {
            return u
        }
    }), l("424973");
    var n = l("37983"),
        r = l("884691"),
        s = l("310013"),
        i = l.n(s),
        a = l("407063");
    let o = /url\(['"](.*)['"]\)/,
        c = e => {
            if (null == e || "" === e || "none" === e) return null;
            let t = e.match(o);
            return null != t ? t[1] : e
        };

    function u(e) {
        class t extends r.Component {
            componentDidUpdate(e, t) {
                if (t === this.state) return;
                let {
                    cached: l,
                    loaded: n
                } = this.state, {
                    style: r
                } = this.props, s = null != r ? c(r.backgroundImage) : null;
                null == s && s !== l ? this.setState({
                    loaded: !0,
                    cached: s
                }) : this.cachedURLs.indexOf(s) >= 0 ? this.setState({
                    loaded: !0,
                    cached: s
                }) : null != s && s !== l && !0 === n && this.setState({
                    loaded: !1
                }, () => this.preloadURL(s))
            }
            preloadURL(e) {
                this.canceller && this.canceller(), this.canceller = (0, a.loadImage)(e, t => {
                    this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                        cached: e,
                        loaded: !0
                    }));
                    let {
                        onBackgroundImageLoad: l
                    } = this.props;
                    l && l(t, e)
                })
            }
            componentWillUnmount() {
                this.canceller && this.canceller(), this.cachedURLs.length = 0
            }
            render() {
                let {
                    style: t,
                    onBackgroundImageLoad: l,
                    ...r
                } = this.props, {
                    loaded: s,
                    cached: i
                } = this.state;
                if (!s && null != t) {
                    var a;
                    t = {
                        ...t,
                        backgroundImage: null == (a = i) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
                    }
                }
                return (0, n.jsx)(e, {
                    style: t,
                    ...r
                })
            }
            constructor(e) {
                super(e), this.cachedURLs = [], this.canceller = null;
                let {
                    style: t
                } = e, l = null != t ? c(t.backgroundImage) : null;
                this.cachedURLs = [l], this.state = {
                    cached: l,
                    loaded: !0
                }
            }
        }
        return i(t, e), t
    }
}