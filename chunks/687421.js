function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MonthParser: function() {
            return f
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
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && u(e, t)
        }(m, e);
        var t, n, i, f, p, h = (t = m, n = function() {
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

        function m() {
            var e;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m);
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return d(c(e = h.call.apply(h, [this].concat(n))), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), d(c(e), "priority", 110), e
        }
        return i = m, f = [{
            key: "parse",
            value: function(e, t, n) {
                var i = function(e) {
                    return e - 1
                };
                switch (t) {
                    case "M":
                        return (0, r.mapValue)((0, r.parseNumericPattern)(a.numericPatterns.month, e), i);
                    case "MM":
                        return (0, r.mapValue)((0, r.parseNDigits)(2, e), i);
                    case "Mo":
                        return (0, r.mapValue)(n.ordinalNumber(e, {
                            unit: "month"
                        }), i);
                    case "MMM":
                        return n.month(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.month(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMMM":
                        return n.month(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return n.month(e, {
                            width: "wide",
                            context: "formatting"
                        }) || n.month(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.month(e, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            }
        }, {
            key: "validate",
            value: function(e, t) {
                return t >= 0 && t <= 11
            }
        }, {
            key: "set",
            value: function(e, t, n) {
                return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e
            }
        }], s(i.prototype, f), p && s(i, p), m
    }(i.Parser)
}