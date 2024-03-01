function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DayOfYearParser: function() {
            return f
        }
    }), n("222007"), n("70102"), n("426094"), n("854508");
    var r = n("232985"),
        a = n("272347"),
        o = n("238418");

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
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
        var t, n, r, f, p, h = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r = c(t);
            if (n) {
                var a = c(this).constructor;
                e = Reflect.construct(r, arguments, a)
            } else e = r.apply(this, arguments);
            return function(e, t) {
                return t && ("object" === i(t) || "function" == typeof t) ? t : l(e)
            }(this, e)
        });

        function m() {
            var e;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m);
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return d(l(e = h.call.apply(h, [this].concat(n))), "priority", 90), d(l(e), "subpriority", 1), d(l(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), e
        }
        return r = m, f = [{
            key: "parse",
            value: function(e, t, n) {
                switch (t) {
                    case "D":
                    case "DD":
                        return (0, o.parseNumericPattern)(a.numericPatterns.dayOfYear, e);
                    case "Do":
                        return n.ordinalNumber(e, {
                            unit: "date"
                        });
                    default:
                        return (0, o.parseNDigits)(t.length, e)
                }
            }
        }, {
            key: "validate",
            value: function(e, t) {
                var n = e.getUTCFullYear();
                return (0, o.isLeapYearIndex)(n) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
            }
        }, {
            key: "set",
            value: function(e, t, n) {
                return e.setUTCMonth(0, n), e.setUTCHours(0, 0, 0, 0), e
            }
        }], s(r.prototype, f), p && s(r, p), m
    }(r.Parser)
}