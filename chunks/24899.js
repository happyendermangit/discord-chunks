function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CalendarDate: function() {
            return ef
        },
        Time: function() {
            return eh
        },
        GregorianCalendar: function() {
            return l
        },
        toCalendarDate: function() {
            return V
        },
        toCalendarDateTime: function() {
            return z
        },
        toTime: function() {
            return B
        },
        toCalendar: function() {
            return U
        },
        toZoned: function() {
            return H
        },
        isSameDay: function() {
            return d
        },
        isEqualDay: function() {
            return p
        },
        isToday: function() {
            return f
        },
        getDayOfWeek: function() {
            return m
        },
        now: function() {
            return h
        },
        today: function() {
            return v
        },
        getLocalTimeZone: function() {
            return S
        },
        startOfMonth: function() {
            return w
        },
        startOfWeek: function() {
            return E
        },
        startOfYear: function() {
            return C
        },
        endOfMonth: function() {
            return D
        },
        endOfWeek: function() {
            return T
        },
        getMinimumMonthInYear: function() {
            return k
        },
        getMinimumDayInMonth: function() {
            return P
        },
        minDate: function() {
            return R
        },
        maxDate: function() {
            return I
        },
        DateFormatter: function() {
            return eS
        }
    }), n("222007"), n("70102"), n("781738"), n("659510"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790"), n("492311"), n("101997"), n("990131");
    var r = n("599514");

    function a(e, t) {
        return e - t * Math.floor(e / t)
    }

    function i(e, t, n, r) {
        let a = (t = s(e, t)) - 1,
            i = -2;
        return n <= 2 ? i = 0 : o(t) && (i = -1), 1721425 + 365 * a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor((367 * n - 362) / 12 + i + r)
    }

    function o(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
    }

    function s(e, t) {
        return "BC" === e ? 1 - t : t
    }
    let c = {
        standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
    class l {
        fromJulianDay(e) {
            var t;
            let n, r = e - 1721426,
                s = Math.floor(r / 146097),
                c = a(r, 146097),
                l = Math.floor(c / 36524),
                u = a(c, 36524),
                d = Math.floor(u / 1461),
                p = Math.floor(a(u, 1461) / 365);
            let [f, m] = (n = "AD", (t = 400 * s + 100 * l + 4 * d + p + (4 !== l && 4 !== p ? 1 : 0)) <= 0 && (n = "BC", t = 1 - t), [n, t]), h = e - i(f, m, 1, 1), v = 2;
            e < i(f, m, 3, 1) ? v = 0 : o(m) && (v = 1);
            let g = Math.floor(((h + v) * 12 + 373) / 367),
                y = e - i(f, m, g, 1) + 1;
            return new ef(f, m, g, y)
        }
        toJulianDay(e) {
            return i(e.era, e.year, e.month, e.day)
        }
        getDaysInMonth(e) {
            return c[o(e.year) ? "leapyear" : "standard"][e.month - 1]
        }
        getMonthsInYear(e) {
            return 12
        }
        getDaysInYear(e) {
            return o(e.year) ? 366 : 365
        }
        getYearsInEra(e) {
            return 9999
        }
        getEras() {
            return ["BC", "AD"]
        }
        isInverseEra(e) {
            return "BC" === e.era
        }
        balanceDate(e) {
            e.year <= 0 && (e.era = "BC" === e.era ? "AD" : "BC", e.year = 1 - e.year)
        }
        constructor() {
            this.identifier = "gregory"
        }
    }
    let u = {
        "001": 1,
        AD: 1,
        AE: 6,
        AF: 6,
        AI: 1,
        AL: 1,
        AM: 1,
        AN: 1,
        AR: 1,
        AT: 1,
        AU: 1,
        AX: 1,
        AZ: 1,
        BA: 1,
        BE: 1,
        BG: 1,
        BH: 6,
        BM: 1,
        BN: 1,
        BY: 1,
        CH: 1,
        CL: 1,
        CM: 1,
        CN: 1,
        CR: 1,
        CY: 1,
        CZ: 1,
        DE: 1,
        DJ: 6,
        DK: 1,
        DZ: 6,
        EC: 1,
        EE: 1,
        EG: 6,
        ES: 1,
        FI: 1,
        FJ: 1,
        FO: 1,
        FR: 1,
        GB: 1,
        GE: 1,
        GF: 1,
        GP: 1,
        GR: 1,
        HR: 1,
        HU: 1,
        IE: 1,
        IQ: 6,
        IR: 6,
        IS: 1,
        IT: 1,
        JO: 6,
        KG: 1,
        KW: 6,
        KZ: 1,
        LB: 1,
        LI: 1,
        LK: 1,
        LT: 1,
        LU: 1,
        LV: 1,
        LY: 6,
        MC: 1,
        MD: 1,
        ME: 1,
        MK: 1,
        MN: 1,
        MQ: 1,
        MV: 5,
        MY: 1,
        NL: 1,
        NO: 1,
        NZ: 1,
        OM: 6,
        PL: 1,
        QA: 6,
        RE: 1,
        RO: 1,
        RS: 1,
        RU: 1,
        SD: 6,
        SE: 1,
        SI: 1,
        SK: 1,
        SM: 1,
        SY: 6,
        TJ: 1,
        TM: 1,
        TR: 1,
        UA: 1,
        UY: 1,
        UZ: 1,
        VA: 1,
        VN: 1,
        XK: 1
    };

    function d(e, t) {
        return t = U(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    }

    function p(e, t) {
        return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    }

    function f(e, t) {
        return d(e, v(t))
    }

    function m(e, t) {
        let n = Math.ceil(e.calendar.toJulianDay(e) + 1 - function(e) {
            let t = function(e) {
                if (Intl.Locale) {
                    let t = M.get(e);
                    return !t && (t = new Intl.Locale(e).maximize().region) && M.set(e, t), t
                }
                let t = e.split("-")[1];
                return "u" === t ? void 0 : t
            }(e);
            return t && u[t] || 0
        }(t)) % 7;
        return n < 0 && (n += 7), n
    }

    function h(e) {
        return _(Date.now(), e)
    }

    function v(e) {
        return V(h(e))
    }

    function g(e, t) {
        return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t)
    }

    function y(e, t) {
        return b(e) - b(t)
    }

    function b(e) {
        return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond
    }
    let x = null;

    function S() {
        return null == x && (x = new Intl.DateTimeFormat().resolvedOptions().timeZone), x
    }

    function w(e) {
        return e.subtract({
            days: e.day - 1
        })
    }

    function D(e) {
        return e.add({
            days: e.calendar.getDaysInMonth(e) - e.day
        })
    }

    function C(e) {
        return w(e.subtract({
            months: e.month - 1
        }))
    }

    function k(e) {
        return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1
    }

    function P(e) {
        return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1
    }

    function E(e, t) {
        let n = m(e, t);
        return e.subtract({
            days: n
        })
    }

    function T(e, t) {
        return E(e, t).add({
            days: 6
        })
    }
    let M = new Map;

    function R(e, t) {
        return e && t ? 0 >= e.compare(t) ? e : t : e || t
    }

    function I(e, t) {
        return e && t ? e.compare(t) >= 0 ? e : t : e || t
    }

    function O(e) {
        return A(s((e = U(e, new l)).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    }

    function A(e, t, n, r, a, i, o) {
        let s = new Date;
        return s.setUTCHours(r, a, i, o), s.setUTCFullYear(e, t - 1, n), s.getTime()
    }

    function L(e, t) {
        if ("UTC" === t) return 0;
        if (e > 0 && t === S()) return -6e4 * new Date(e).getTimezoneOffset();
        let {
            year: n,
            month: r,
            day: a,
            hour: i,
            minute: o,
            second: s
        } = F(e, t);
        return A(n, r, a, i, o, s, 0) - 1e3 * Math.floor(e / 1e3)
    }
    let N = new Map;

    function F(e, t) {
        let n = N.get(t);
        !n && (n = new Intl.DateTimeFormat("en-US", {
            timeZone: t,
            hour12: !1,
            era: "short",
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        }), N.set(t, n));
        let r = n.formatToParts(new Date(e)),
            a = {};
        for (let e of r) "literal" !== e.type && (a[e.type] = e.value);
        return {
            year: "BC" === a.era || "B" === a.era ? -a.year + 1 : +a.year,
            month: +a.month,
            day: +a.day,
            hour: "24" === a.hour ? 0 : +a.hour,
            minute: +a.minute,
            second: +a.second
        }
    }

    function j(e, t) {
        var n, r, a, i;
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible",
            c = z(e);
        if ("UTC" === t) return O(c);
        if (t === S() && "compatible" === o) {
            c = U(c, new l);
            let e = new Date,
                t = s(c.era, c.year);
            return e.setFullYear(t, c.month - 1, c.day), e.setHours(c.hour, c.minute, c.second, c.millisecond), e.getTime()
        }
        let u = O(c),
            d = L(u - 864e5, t),
            p = L(u + 864e5, t);
        let f = (n = c, r = t, ((a = u - d) == (i = u - p) ? [a] : [a, i]).filter(e => (function(e, t, n) {
            let r = F(n, t);
            return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second
        })(n, r, e)));
        if (1 === f.length) return f[0];
        if (f.length > 1) switch (o) {
            case "compatible":
            case "earlier":
                return f[0];
            case "later":
                return f[f.length - 1];
            case "reject":
                throw RangeError("Multiple possible absolute times found")
        }
        switch (o) {
            case "earlier":
                return Math.min(u - d, u - p);
            case "compatible":
            case "later":
                return Math.max(u - d, u - p);
            case "reject":
                throw RangeError("No such absolute time found")
        }
    }

    function K(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible";
        return new Date(j(e, t, n))
    }

    function _(e, t) {
        let n = L(e, t),
            r = new Date(e + n);
        return new eb(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), t, n, r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds())
    }

    function V(e) {
        return new ef(e.calendar, e.era, e.year, e.month, e.day)
    }

    function z(e, t) {
        let n = 0,
            r = 0,
            a = 0,
            i = 0;
        if ("timeZone" in e)({
            hour: n,
            minute: r,
            second: a,
            millisecond: i
        } = e);
        else if ("hour" in e && !t) return e;
        return t && ({
            hour: n,
            minute: r,
            second: a,
            millisecond: i
        } = t), new eg(e.calendar, e.era, e.year, e.month, e.day, n, r, a, i)
    }

    function B(e) {
        return new eh(e.hour, e.minute, e.second, e.millisecond)
    }

    function U(e, t) {
        if (e.calendar.identifier === t.identifier) return e;
        let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
            r = e.copy();
        return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, Y(r), r
    }

    function H(e, t, n) {
        if (e instanceof eb) return e.timeZone === t ? e : function(e, t) {
            return U(_(O(e) - e.offset, t), e.calendar)
        }(e, t);
        return _(j(e, t, n), t)
    }

    function G(e, t) {
        let n = e.copy(),
            r = "hour" in n ? en(n, t) : 0;
        W(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, q(n), Z(n), n.day += 7 * (t.weeks || 0), n.day += t.days || 0, n.day += r,
            function(e) {
                for (; e.day < 1;) e.month--, q(e), e.day += e.calendar.getDaysInMonth(e);
                for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, q(e)
            }(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
        let a = n.calendar.getYearsInEra(n);
        if (n.year > a) {
            var i, o;
            let e = null === (i = (o = n.calendar).isInverseEra) || void 0 === i ? void 0 : i.call(o, n);
            n.year = a, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n)
        }
        n.month < 1 && (n.month = 1, n.day = 1);
        let s = n.calendar.getMonthsInYear(n);
        return n.month > s && (n.month = s, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n
    }

    function W(e, t) {
        var n, r;
        (null === (n = (r = e.calendar).isInverseEra) || void 0 === n ? void 0 : n.call(r, e)) && (t = -t), e.year += t
    }

    function q(e) {
        for (; e.month < 1;) W(e, -1), e.month += e.calendar.getMonthsInYear(e);
        let t = 0;
        for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, W(e, 1)
    }

    function Z(e) {
        e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
    }

    function Y(e) {
        e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Z(e)
    }

    function X(e) {
        let t = {};
        for (let n in e) "number" == typeof e[n] && (t[n] = -e[n]);
        return t
    }

    function J(e, t) {
        return G(e, X(t))
    }

    function $(e, t) {
        let n = e.copy();
        return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), Y(n), n
    }

    function Q(e, t) {
        let n = e.copy();
        return null != t.hour && (n.hour = t.hour), null != t.minute && (n.minute = t.minute), null != t.second && (n.second = t.second), null != t.millisecond && (n.millisecond = t.millisecond), ee(n), n
    }

    function ee(e) {
        e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23))
    }

    function et(e, t) {
        let n = e % t;
        return n < 0 && (n += t), n
    }

    function en(e, t) {
        var n;
        let r;
        e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0;
        return n = e, n.second += Math.floor(n.millisecond / 1e3), n.millisecond = et(n.millisecond, 1e3), n.minute += Math.floor(n.second / 60), n.second = et(n.second, 60), n.hour += Math.floor(n.minute / 60), n.minute = et(n.minute, 60), r = Math.floor(n.hour / 24), n.hour = et(n.hour, 24), r
    }

    function er(e, t) {
        let n = e.copy();
        return en(n, t), n
    }

    function ea(e, t, n, r) {
        let a = e.copy();
        switch (t) {
            case "era": {
                let t = e.calendar.getEras(),
                    i = t.indexOf(e.era);
                if (i < 0) throw Error("Invalid era: " + e.era);
                i = eo(i, n, 0, t.length - 1, null == r ? void 0 : r.round), a.era = t[i], Y(a);
                break
            }
            case "year":
                var i, o;
                (null === (i = (o = a.calendar).isInverseEra) || void 0 === i ? void 0 : i.call(o, a)) && (n = -n), a.year = eo(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round), a.year === -1 / 0 && (a.year = 1), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
                break;
            case "month":
                a.month = eo(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
                break;
            case "day":
                a.day = eo(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
                break;
            default:
                throw Error("Unsupported field " + t)
        }
        return e.calendar.balanceDate && e.calendar.balanceDate(a), Y(a), a
    }

    function ei(e, t, n, r) {
        let a = e.copy();
        switch (t) {
            case "hour": {
                let t = e.hour,
                    i = 0,
                    o = 23;
                if ((null == r ? void 0 : r.hourCycle) === 12) {
                    let e = t >= 12;
                    i = e ? 12 : 0, o = e ? 23 : 11
                }
                a.hour = eo(t, n, i, o, null == r ? void 0 : r.round);
                break
            }
            case "minute":
                a.minute = eo(e.minute, n, 0, 59, null == r ? void 0 : r.round);
                break;
            case "second":
                a.second = eo(e.second, n, 0, 59, null == r ? void 0 : r.round);
                break;
            case "millisecond":
                a.millisecond = eo(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
                break;
            default:
                throw Error("Unsupported field " + t)
        }
        return a
    }

    function eo(e, t, n, r) {
        let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (a) {
            (e += Math.sign(t)) < n && (e = r);
            let a = Math.abs(t);
            (e = t > 0 ? Math.ceil(e / a) * a : Math.floor(e / a) * a) > r && (e = n)
        } else(e += t) < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
        return e
    }

    function es(e, t) {
        let n;
        if (null != t.years && 0 !== t.years || null != t.months && 0 !== t.months || null != t.weeks && 0 !== t.weeks || null != t.days && 0 !== t.days) {
            let r;
            n = j(G(z(e), {
                years: t.years,
                months: t.months,
                weeks: t.weeks,
                days: t.days
            }), e.timeZone)
        } else n = O(e) - e.offset;
        return U(_(n += (t.milliseconds || 0) + 1e3 * (t.seconds || 0) + 6e4 * (t.minutes || 0) + 36e5 * (t.hours || 0), e.timeZone), e.calendar)
    }

    function ec(e) {
        return "".concat(String(e.hour).padStart(2, "0"), ":").concat(String(e.minute).padStart(2, "0"), ":").concat(String(e.second).padStart(2, "0")).concat(e.millisecond ? String(e.millisecond / 1e3).slice(1) : "")
    }

    function el(e) {
        let t = U(e, new l);
        return "".concat(String(t.year).padStart(4, "0"), "-").concat(String(t.month).padStart(2, "0"), "-").concat(String(t.day).padStart(2, "0"))
    }

    function eu(e) {
        return "".concat(el(e), "T").concat(ec(e))
    }

    function ed(e) {
        let t, n = "object" == typeof e[0] ? e.shift() : new l;
        if ("string" == typeof e[0]) t = e.shift();
        else {
            let e = n.getEras();
            t = e[e.length - 1]
        }
        return [n, t, e.shift(), e.shift(), e.shift()]
    }
    var ep = new WeakMap;
    class ef {
        copy() {
            return this.era ? new ef(this.calendar, this.era, this.year, this.month, this.day) : new ef(this.calendar, this.year, this.month, this.day)
        }
        add(e) {
            return G(this, e)
        }
        subtract(e) {
            var t;
            return t = this, G(t, X(e))
        }
        set(e) {
            return $(this, e)
        }
        cycle(e, t, n) {
            return ea(this, e, t, n)
        }
        toDate(e) {
            return K(this, e)
        }
        toString() {
            return el(this)
        }
        compare(e) {
            return g(this, e)
        }
        constructor(...e) {
            (0, r._)(this, ep, {
                writable: !0,
                value: void 0
            });
            let [t, n, a, i, o] = ed(e);
            this.calendar = t, this.era = n, this.year = a, this.month = i, this.day = o, Y(this)
        }
    }
    var em = new WeakMap;
    class eh {
        copy() {
            return new eh(this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return er(this, e)
        }
        subtract(e) {
            var t;
            return t = this, er(t, X(e))
        }
        set(e) {
            return Q(this, e)
        }
        cycle(e, t, n) {
            return ei(this, e, t, n)
        }
        toString() {
            return ec(this)
        }
        compare(e) {
            var t, n;
            return t = this, n = e, b(t) - b(n)
        }
        constructor(e = 0, t = 0, n = 0, a = 0) {
            (0, r._)(this, em, {
                writable: !0,
                value: void 0
            }), this.hour = e, this.minute = t, this.second = n, this.millisecond = a, ee(this)
        }
    }
    var ev = new WeakMap;
    class eg {
        copy() {
            return this.era ? new eg(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new eg(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return G(this, e)
        }
        subtract(e) {
            var t;
            return t = this, G(t, X(e))
        }
        set(e) {
            return $(Q(this, e), e)
        }
        cycle(e, t, n) {
            switch (e) {
                case "era":
                case "year":
                case "month":
                case "day":
                    return ea(this, e, t, n);
                default:
                    return ei(this, e, t, n)
            }
        }
        toDate(e, t) {
            return K(this, e, t)
        }
        toString() {
            return eu(this)
        }
        compare(e) {
            let t = g(this, e);
            if (0 === t) {
                var n, r;
                return n = this, r = z(e), b(n) - b(r)
            }
            return t
        }
        constructor(...e) {
            (0, r._)(this, ev, {
                writable: !0,
                value: void 0
            });
            let [t, n, a, i, o] = ed(e);
            this.calendar = t, this.era = n, this.year = a, this.month = i, this.day = o, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Y(this)
        }
    }
    var ey = new WeakMap;
    class eb {
        copy() {
            return this.era ? new eb(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new eb(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond)
        }
        add(e) {
            return es(this, e)
        }
        subtract(e) {
            var t;
            return t = this, es(t, X(e))
        }
        set(e, t) {
            var n, r, a;
            let i, o;
            return n = this, r = e, a = t, 0 === (o = Q($(i = z(n), r), r)).compare(i) ? n : U(_(j(o, n.timeZone, a), n.timeZone), n.calendar)
        }
        cycle(e, t, n) {
            return function(e, t, n, r) {
                switch (t) {
                    case "hour": {
                        let t = 0,
                            a = 23;
                        if ((null == r ? void 0 : r.hourCycle) === 12) {
                            let n = e.hour >= 12;
                            t = n ? 12 : 0, a = n ? 23 : 11
                        }
                        let i = z(e),
                            o = U(Q(i, {
                                hour: t
                            }), new l),
                            s = [j(o, e.timeZone, "earlier"), j(o, e.timeZone, "later")].filter(t => _(t, e.timeZone).day === o.day)[0],
                            c = U(Q(i, {
                                hour: a
                            }), new l),
                            u = [j(c, e.timeZone, "earlier"), j(c, e.timeZone, "later")].filter(t => _(t, e.timeZone).day === c.day).pop(),
                            d = O(e) - e.offset,
                            p = Math.floor(d / 36e5),
                            f = d % 36e5;
                        return U(_(d = 36e5 * eo(p, n, Math.floor(s / 36e5), Math.floor(u / 36e5), null == r ? void 0 : r.round) + f, e.timeZone), e.calendar)
                    }
                    case "minute":
                    case "second":
                    case "millisecond":
                        return ei(e, t, n, r);
                    case "era":
                    case "year":
                    case "month":
                    case "day":
                        return U(_(j(ea(z(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
                    default:
                        throw Error("Unsupported field " + t)
                }
            }(this, e, t, n)
        }
        toDate() {
            var e;
            return e = this, new Date(O(e) - e.offset)
        }
        toString() {
            var e, t;
            let n, r, a;
            return e = this, "".concat(eu(e)).concat((n = 0 > Math.sign(t = e.offset) ? "-" : "+", r = Math.floor((t = Math.abs(t)) / 36e5), a = t % 36e5 / 6e4, "".concat(n).concat(String(r).padStart(2, "0"), ":").concat(String(a).padStart(2, "0"))), "[").concat(e.timeZone, "]")
        }
        toAbsoluteString() {
            return this.toDate().toISOString()
        }
        compare(e) {
            return this.toDate().getTime() - H(e, this.timeZone).toDate().getTime()
        }
        constructor(...e) {
            (0, r._)(this, ey, {
                writable: !0,
                value: void 0
            });
            let [t, n, a, i, o] = ed(e), s = e.shift(), c = e.shift();
            this.calendar = t, this.era = n, this.year = a, this.month = i, this.day = o, this.timeZone = s, this.offset = c, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Y(this)
        }
    }
    let ex = new Map;
    class eS {
        format(e) {
            return this.formatter.format(e)
        }
        formatToParts(e) {
            return this.formatter.formatToParts(e)
        }
        formatRange(e, t) {
            if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            return "".concat(this.formatter.format(e), " – ").concat(this.formatter.format(t))
        }
        formatRangeToParts(e, t) {
            if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            let n = this.formatter.formatToParts(e),
                r = this.formatter.formatToParts(t);
            return [...n.map(e => ({
                ...e,
                source: "startRange"
            })), {
                type: "literal",
                value: " – ",
                source: "shared"
            }, ...r.map(e => ({
                ...e,
                source: "endRange"
            }))]
        }
        resolvedOptions() {
            let e = this.formatter.resolvedOptions();
            return function() {
                return null == ek && (ek = "h12" === new Intl.DateTimeFormat("fr", {
                    hour: "numeric",
                    hour12: !1
                }).resolvedOptions().hourCycle), ek
            }() && (!this.resolvedHourCycle && (this.resolvedHourCycle = function(e, t) {
                if (!t.timeStyle && !t.hour) return;
                e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
                let n = eD(e += (e.includes("-u-") ? "" : "-u") + "-nu-latn", {
                        ...t,
                        timeZone: void 0
                    }),
                    r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find(e => "hour" === e.type).value, 10),
                    a = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find(e => "hour" === e.type).value, 10);
                if (0 === r && 23 === a) return "h23";
                if (24 === r && 23 === a) return "h24";
                if (0 === r && 11 === a) return "h11";
                if (12 === r && 11 === a) return "h12";
                throw Error("Unexpected hour cycle result")
            }(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle), "ethiopic-amete-alem" === e.calendar && (e.calendar = "ethioaa"), e
        }
        constructor(e, t = {}) {
            this.formatter = eD(e, t), this.options = t
        }
    }
    let ew = {
        true: {
            ja: "h11"
        },
        false: {}
    };

    function eD(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("boolean" == typeof t.hour12 && function() {
                return null == eC && (eC = "24" === new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    hour12: !1
                }).format(new Date(2020, 2, 3, 0))), eC
            }()) {
            let n = ew[String((t = {
                    ...t
                }).hour12)][e.split("-")[0]],
                r = t.hour12 ? "h12" : "h23";
            t.hourCycle = null != n ? n : r, delete t.hour12
        }
        let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
        if (ex.has(n)) return ex.get(n);
        let r = new Intl.DateTimeFormat(e, t);
        return ex.set(n, r), r
    }
    let eC = null,
        ek = null
}