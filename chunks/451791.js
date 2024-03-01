function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useNumberFieldState: function() {
            return o
        }
    }), n("222007");
    var r = n("679750"),
        a = n("546262"),
        i = n("884691");

    function o(e) {
        let {
            minValue: t,
            maxValue: n,
            step: o,
            formatOptions: c,
            value: l,
            defaultValue: u,
            onChange: d,
            locale: p,
            isDisabled: f,
            isReadOnly: m
        } = e, [h, v] = (0, r.useControlledState)(l, isNaN(u) ? NaN : u, d), [g, y] = (0, i.useState)(() => isNaN(h) ? "" : new(0, a.NumberFormatter)(p, c).format(h)), b = (0, i.useMemo)(() => new a.NumberParser(p, c), [p, c]), x = (0, i.useMemo)(() => b.getNumberingSystem(g), [b, g]), S = (0, i.useMemo)(() => new a.NumberFormatter(p, {
            ...c,
            numberingSystem: x
        }), [p, c, x]), w = (0, i.useMemo)(() => S.resolvedOptions(), [S]), D = (0, i.useCallback)(e => isNaN(e) || null === e ? "" : S.format(e), [S]), C = isNaN(o) ? 1 : o;
        "percent" === w.style && isNaN(o) && (C = .01);
        let [k, P] = (0, i.useState)(h), [E, T] = (0, i.useState)(p), [M, R] = (0, i.useState)(c);
        (!Object.is(h, k) || p !== E || c !== M) && (y(D(h)), P(h), T(p), R(c));
        let I = (0, i.useMemo)(() => b.parse(g), [b, g]),
            O = (e, a) => {
                if (isNaN(I)) {
                    let e = isNaN(a) ? 0 : a;
                    return (0, r.snapValueToStep)(e, t, n, C)
                } {
                    let a = (0, r.snapValueToStep)(I, t, n, C);
                    return "+" === e && a > I || "-" === e && a < I ? a : (0, r.snapValueToStep)(s(e, I, C), t, n, C)
                }
            },
            A = (0, i.useMemo)(() => !f && !m && (isNaN(I) || isNaN(n) || (0, r.snapValueToStep)(I, t, n, C) > I || s("+", I, C) <= n), [f, m, t, n, C, I]),
            L = (0, i.useMemo)(() => !f && !m && (isNaN(I) || isNaN(t) || (0, r.snapValueToStep)(I, t, n, C) < I || s("-", I, C) >= t), [f, m, t, n, C, I]);
        return {
            validate: e => b.isValidPartialNumber(e, t, n),
            increment: () => {
                let e = O("+", t);
                e === h && y(D(e)), v(e)
            },
            incrementToMax: () => {
                null != n && v((0, r.snapValueToStep)(n, t, n, C))
            },
            decrement: () => {
                let e = O("-", n);
                e === h && y(D(e)), v(e)
            },
            decrementToMin: () => {
                null != t && v(t)
            },
            canIncrement: A,
            canDecrement: L,
            minValue: t,
            maxValue: n,
            numberValue: I,
            setNumberValue: v,
            setInputValue: y,
            inputValue: g,
            commit: () => {
                let e;
                if (!g.length) {
                    v(NaN), y(void 0 === l ? "" : D(h));
                    return
                }
                if (isNaN(I)) {
                    y(D(h));
                    return
                }
                e = isNaN(o) ? (0, r.clamp)(I, t, n) : (0, r.snapValueToStep)(I, t, n, o), v(e = b.parse(D(e))), y(D(void 0 === l ? e : h))
            }
        }
    }

    function s(e, t, n) {
        let r = "+" === e ? t + n : t - n;
        if (t % 1 != 0 || n % 1 != 0) {
            let a = t.toString().split("."),
                i = n.toString().split("."),
                o = a[1] && a[1].length || 0,
                s = i[1] && i[1].length || 0,
                c = Math.pow(10, Math.max(o, s));
            t = Math.round(t * c), n = Math.round(n * c), r = ("+" === e ? t + n : t - n) / c
        }
        return r
    }
}