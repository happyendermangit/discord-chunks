function(t, r, n) {
    "use strict";
    var e = n("145661"),
        i = n("868822"),
        u = n("64980"),
        o = n("78117"),
        c = n("664144"),
        a = n("418855"),
        s = n("125359"),
        f = n("551544"),
        l = n("969708"),
        p = n("113806"),
        v = n("998270"),
        x = n("590455"),
        h = n("474172"),
        d = n("47361"),
        g = n("87078"),
        y = n("622279"),
        E = n("174669")("replace"),
        b = Math.max,
        I = Math.min,
        R = u([].concat),
        k = u([].push),
        m = u("".indexOf),
        S = u("".slice),
        $ = "$0" === "a".replace(/./, "$0"),
        A = !!/./ [E] && "" === /./ [E]("a", "$0");
    o("replace", function(t, r, n) {
        var u = A ? "$" : "$0";
        return [function(t, n) {
            var e = x(this),
                u = f(t) ? void 0 : d(t, E);
            return u ? i(u, t, e, n) : i(r, v(e), t, n)
        }, function(t, i) {
            var o = a(this),
                c = v(t);
            if ("string" == typeof i && -1 === m(i, u) && -1 === m(i, "$<")) {
                var f = n(r, o, c, i);
                if (f.done) return f.value
            }
            var x = s(i);
            !x && (i = v(i));
            var d = o.global;
            d && (w = o.unicode, o.lastIndex = 0);
            for (var E = []; null !== (O = y(o, c));) {
                ;
                if (k(E, O), !d) break;
                "" === v(O[0]) && (o.lastIndex = h(c, p(o.lastIndex), w))
            }
            for (var $ = "", A = 0, T = 0; T < E.length; T++) {
                for (var C, w, O, _, j = v((O = E[T])[0]), M = b(I(l(O.index), c.length), 0), N = [], U = 1; U < O.length; U++) {
                    ;
                    k(N, void 0 === (C = O[U]) ? C : String(C))
                }
                var z = O.groups;
                if (x) {
                    var K = R([j], N, M, c);
                    void 0 !== z && k(K, z), _ = v(e(i, void 0, K))
                } else _ = g(j, c, M, N, z, i);
                M >= A && ($ += S(c, A, M) + _, A = M + j.length)
            }
            return $ + S(c, A)
        }]
    }, !!c(function() {
        var t = /./;
        return t.exec = function() {
            var t = [];
            return t.groups = {
                a: "7"
            }, t
        }, "7" !== "".replace(t, "$<a>")
    }) || !$ || A)
}