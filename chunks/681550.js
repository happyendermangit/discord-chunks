function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DateParser: function() {
            return h
        }
    });
    var r = n("846042"),
        i = n("717029"),
        a = n("25487");

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        p = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        h = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && u(e, t)
            }(_, e);
            var t, n, i, h, m, g = (t = _, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r = l(t);
                if (n) {
                    var i = l(this).constructor;
                    e = Reflect.construct(r, arguments, i)
                } else e = r.apply(this, arguments);
                return function(e, t) {
                    return t && ("object" === o(t) || "function" == typeof t) ? t : c(e)
                }(this, e)
            });

            function _() {
                var e;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, _);
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return d(c(e = g.call.apply(g, [this].concat(n))), "priority", 90), d(c(e), "subPriority", 1), d(c(e), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), e
            }
            return i = _, h = [{
                key: "parse",
                value: function(e, t, n) {
                    switch (t) {
                        case "d":
                            return (0, r.parseNumericPattern)(a.numericPatterns.date, e);
                        case "do":
                            return n.ordinalNumber(e, {
                                unit: "date"
                            });
                        default:
                            return (0, r.parseNDigits)(t.length, e)
                    }
                }
            }, {
                key: "validate",
                value: function(e, t) {
                    var n = e.getUTCFullYear(),
                        i = (0, r.isLeapYearIndex)(n),
                        a = e.getUTCMonth();
                    return i ? t >= 1 && t <= p[a] : t >= 1 && t <= f[a]
                }
            }, {
                key: "set",
                value: function(e, t, n) {
                    return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e
                }
            }], s(i.prototype, h), m && s(i, m), _
        }(i.Parser)
}