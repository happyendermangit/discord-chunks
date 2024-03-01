function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("862337"),
        o = n("145131"),
        u = n("140546");

    function d(e) {
        let {
            percentage: t,
            isSingleLine: n
        } = e;
        return (0, l.jsx)("div", {
            className: s({
                [u.bar]: n,
                [u.barInMultiLine]: !n
            }),
            children: (0, l.jsx)("div", {
                className: u.barInner,
                style: {
                    width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
                }
            })
        })
    }

    function c(e) {
        return String(e).padStart(2, "0")
    }

    function f(e) {
        let {
            time: t,
            padLargestUnit: n
        } = e, l = Math.floor(t) % 60, i = Math.floor(t / 60) % 60, a = Math.floor(t / 3600);
        return 0 === a ? n ? "".concat(c(i), ":").concat(c(l)) : "".concat(i, ":").concat(c(l)) : n ? "".concat(c(a), ":").concat(c(i), ":").concat(c(l)) : "".concat(a, ":").concat(c(i), ":").concat(c(l))
    }
    class m extends i.PureComponent {
        componentDidMount() {
            this.timer.start(500, () => {
                this.setState({
                    now: Date.now()
                })
            })
        }
        componentWillUnmount() {
            this.timer.stop()
        }
        render() {
            let {
                start: e,
                end: t,
                className: n,
                themed: i,
                singleLine: a = !1
            } = this.props, {
                now: r
            } = this.state, c = (t - e) / 1e3, m = Math.max(Math.min((r - e) / 1e3, c), 0);
            return a ? (0, l.jsxs)("div", {
                className: s(n, {
                    [u.themed]: i
                }, u.singleLineContainer),
                children: [(0, l.jsx)("div", {
                    className: u.textLeftInSingleLine,
                    children: f({
                        time: m,
                        padLargestUnit: !0
                    })
                }), (0, l.jsx)("div", {
                    className: u.barInSingleLine,
                    children: (0, l.jsx)(d, {
                        percentage: m / c,
                        isSingleLine: !0
                    })
                }), (0, l.jsx)("div", {
                    className: u.textRight,
                    children: f({
                        time: c,
                        padLargestUnit: !0
                    })
                })]
            }) : (0, l.jsxs)("div", {
                className: s(n, {
                    [u.themed]: i
                }),
                children: [(0, l.jsx)(d, {
                    percentage: m / c,
                    isSingleLine: !1
                }), (0, l.jsxs)(o.default, {
                    children: [(0, l.jsx)(o.default.Child, {
                        grow: 1,
                        className: u.textLeft,
                        children: f({
                            time: m,
                            padLargestUnit: !1
                        })
                    }), (0, l.jsx)(o.default.Child, {
                        grow: 0,
                        className: u.textRight,
                        children: f({
                            time: c,
                            padLargestUnit: !1
                        })
                    })]
                })]
            })
        }
        constructor(...e) {
            super(...e), this.timer = new r.Interval, this.state = {
                now: Date.now()
            }
        }
    }
    m.defaultProps = {
        themed: !1
    };
    var p = m
}