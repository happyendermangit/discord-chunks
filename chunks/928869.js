function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("195548"),
        a = n("31644"),
        o = n("843279"),
        i = n("986257"),
        s = n("774728"),
        u = n("903751"),
        l = n("796752"),
        c = n("192693"),
        d = n("697309"),
        f = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t, n = e.state,
                    o = e.name,
                    f = e.options,
                    p = n.elements.arrow,
                    h = n.modifiersData.popperOffsets,
                    m = (0, r.default)(n.placement),
                    y = (0, s.default)(m),
                    _ = [(0, d.left), (0, d.right)].indexOf(m) >= 0 ? "height" : "width";
                if (p && h) {
                    var g, v, b = (g = f.padding, v = n, g = "function" == typeof g ? g(Object.assign({}, v.rects, {
                            placement: v.placement
                        })) : g, (0, l.default)("number" != typeof g ? g : (0, c.default)(g, d.basePlacements))),
                        M = (0, a.default)(p),
                        w = "y" === y ? d.top : d.left,
                        k = "y" === y ? d.bottom : d.right,
                        L = n.rects.reference[_] + n.rects.reference[y] - h[y] - n.rects.popper[_],
                        D = h[y] - n.rects.reference[y],
                        T = (0, i.default)(p),
                        S = T ? "y" === y ? T.clientHeight || 0 : T.clientWidth || 0 : 0,
                        Y = b[w],
                        x = S - M[_] - b[k],
                        O = S / 2 - M[_] / 2 + (L / 2 - D / 2),
                        E = (0, u.within)(Y, O, x);
                    n.modifiersData[o] = ((t = {})[y] = E, t.centerOffset = E - O, t)
                }
            },
            effect: function(e) {
                var t = e.state,
                    n = e.options.element,
                    r = void 0 === n ? "[data-popper-arrow]" : n;
                if (null != r && ("string" != typeof r || !!(r = t.elements.popper.querySelector(r))))(0, o.default)(t.elements.popper, r) && (t.elements.arrow = r)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        }
}