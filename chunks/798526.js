function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        popperGenerator: function() {
            return p
        }
    }), n("424973");
    var r = n("114716"),
        a = n("31644"),
        o = n("403468"),
        i = n("986257"),
        s = n("394442"),
        u = n("683857"),
        l = n("914997"),
        c = n("753671"),
        d = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };

    function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        })
    }

    function p(e) {
        void 0 === e && (e = {});
        var t = e,
            n = t.defaultModifiers,
            p = void 0 === n ? [] : n,
            h = t.defaultOptions,
            m = void 0 === h ? d : h;
        return function(e, t, n) {
            void 0 === n && (n = m);
            var h = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, d, m),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                y = [],
                _ = !1,
                g = {
                    state: h,
                    setOptions: function(n) {
                        var r = "function" == typeof n ? n(h.options) : n;
                        v(), h.options = Object.assign({}, m, h.options, r), h.scrollParents = {
                            reference: (0, c.isElement)(e) ? (0, o.default)(e) : e.contextElement ? (0, o.default)(e.contextElement) : [],
                            popper: (0, o.default)(t)
                        };
                        var a = (0, s.default)((0, l.default)([].concat(p, h.options.modifiers)));
                        return h.orderedModifiers = a.filter(function(e) {
                                return e.enabled
                            }),
                            function() {
                                h.orderedModifiers.forEach(function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = e.effect;
                                    if ("function" == typeof r) {
                                        var a = r({
                                            state: h,
                                            name: t,
                                            instance: g,
                                            options: void 0 === n ? {} : n
                                        });
                                        y.push(a || function() {})
                                    }
                                })
                            }(), g.update()
                    },
                    forceUpdate: function() {
                        if (!_) {
                            var e = h.elements,
                                t = e.reference,
                                n = e.popper;
                            if (f(t, n)) {
                                h.rects = {
                                    reference: (0, r.default)(t, (0, i.default)(n), "fixed" === h.options.strategy),
                                    popper: (0, a.default)(n)
                                }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(e) {
                                    return h.modifiersData[e.name] = Object.assign({}, e.data)
                                });
                                for (var o = 0; o < h.orderedModifiers.length; o++) {
                                    if (!0 === h.reset) {
                                        h.reset = !1, o = -1;
                                        continue
                                    }
                                    var s = h.orderedModifiers[o],
                                        u = s.fn,
                                        l = s.options,
                                        c = void 0 === l ? {} : l,
                                        d = s.name;
                                    "function" == typeof u && (h = u({
                                        state: h,
                                        options: c,
                                        name: d,
                                        instance: g
                                    }) || h)
                                }
                            }
                        }
                    },
                    update: (0, u.default)(function() {
                        return new Promise(function(e) {
                            g.forceUpdate(), e(h)
                        })
                    }),
                    destroy: function() {
                        v(), _ = !0
                    }
                };
            if (!f(e, t)) return g;
            g.setOptions(n).then(function(e) {
                !_ && n.onFirstUpdate && n.onFirstUpdate(e)
            });

            function v() {
                y.forEach(function(e) {
                    return e()
                }), y = []
            }
            return g
        }
    }
}