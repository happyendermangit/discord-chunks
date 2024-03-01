function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        mergeProps: function() {
            return s
        },
        mergeRefs: function() {
            return c
        },
        filterDOMProps: function() {
            return p
        },
        useObjectRef: function() {
            return v
        },
        useLayoutEffect: function() {
            return i
        },
        useResizeObserver: function() {
            return g
        },
        useViewportSize: function() {
            return b
        },
        isIOS: function() {
            return D
        },
        isWebKit: function() {
            return C
        }
    }), n("222007"), n("424973");
    var r = n("884691"),
        a = n("38736");
    let i = "undefined" != typeof document ? r.useLayoutEffect : () => {},
        o = new Map;

    function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = {
            ...t[0]
        };
        for (let e = 1; e < t.length; e++) {
            let n = t[e];
            for (let e in n) {
                let t = r[e],
                    i = n[e];
                "function" == typeof t && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? r[e] = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function() {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        for (let e of t) "function" == typeof e && e(...n)
                    }
                }(t, i) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof t && "string" == typeof i ? r[e] = (0, a.default)(t, i) : "id" === e && t && i ? r.id = function(e, t) {
                    if (e === t) return e;
                    let n = o.get(e);
                    if (n) return n(t), t;
                    let r = o.get(t);
                    return r ? (r(e), e) : t
                }(t, i) : r[e] = void 0 !== i ? i : t
            }
        }
        return r
    }

    function c() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 1 === t.length ? t[0] : e => {
            for (let n of t) "function" == typeof n ? n(e) : null != n && (n.current = e)
        }
    }
    let l = new Set(["id"]),
        u = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        d = /^(data-.*)$/;

    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                labelable: n,
                propNames: r
            } = t,
            a = {};
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (l.has(t) || n && u.has(t) || (null == r ? void 0 : r.has(t)) || d.test(t)) && (a[t] = e[t]);
        return a
    }
    let f = new Map,
        m = new Set;

    function h() {
        if ("undefined" == typeof window) return;
        let e = t => {
            let n = f.get(t.target);
            if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), f.delete(t.target)), 0 === f.size)) {
                for (let e of m) e();
                m.clear()
            }
        };
        document.body.addEventListener("transitionrun", t => {
            let n = f.get(t.target);
            !n && (n = new Set, f.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
        }), document.body.addEventListener("transitionend", e)
    }

    function v(e) {
        let t = (0, r.useRef)();
        return (0, r.useMemo)(() => ({
            get current() {
                return t.current
            },
            set current(value) {
                t.current = value, "function" == typeof e ? e(value) : e && (e.current = value)
            }
        }), [e])
    }
    "undefined" != typeof document && ("loading" !== document.readyState ? h() : document.addEventListener("DOMContentLoaded", h));

    function g(e) {
        let {
            ref: t,
            onResize: n
        } = e;
        (0, r.useEffect)(() => {
            let e = null == t ? void 0 : t.current;
            if (e) {
                if (!(void 0 !== window.ResizeObserver)) return window.addEventListener("resize", n, !1), () => {
                    window.removeEventListener("resize", n, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && n()
                    });
                    return t.observe(e), () => {
                        e && t.unobserve(e)
                    }
                }
            }
        }, [n, t])
    }
    let y = "undefined" != typeof document && window.visualViewport;

    function b() {
        let [e, t] = (0, r.useState)(() => x());
        return (0, r.useEffect)(() => {
            let e = () => {
                t(e => {
                    let t = x();
                    return t.width === e.width && t.height === e.height ? e : t
                })
            };
            return y ? y.addEventListener("resize", e) : window.addEventListener("resize", e), () => {
                y ? y.removeEventListener("resize", e) : window.removeEventListener("resize", e)
            }
        }, []), e
    }

    function x() {
        return {
            width: (null == y ? void 0 : y.width) || window.innerWidth,
            height: (null == y ? void 0 : y.height) || window.innerHeight
        }
    }

    function S(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
    }

    function w(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
    }

    function D() {
        return w(/^iPhone/i) || w(/^iPad/i) || w(/^Mac/i) && navigator.maxTouchPoints > 1
    }

    function C() {
        return S(/AppleWebKit/i) && ! function() {
            return S(/Chrome/i)
        }()
    }
}