function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useRegisteredDragSource: function() {
            return u
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("29150"),
        i = n("634115"),
        o = n("65714"),
        s = n("119076"),
        a = n("345635");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t, n) {
        var u = (0, s.useDragDropManager)(),
            d = (0, o.useDragSource)(e, t, n),
            l = (0, a.useDragType)(e);
        (0, i.useIsomorphicLayoutEffect)(function() {
            if (null != l) {
                var e, i, o = (i = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(e = (0, r.registerSource)(l, d, u)) || function(e, t) {
                        var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var o = [],
                                s = !0,
                                a = !1;
                            try {
                                for (i = i.call(e); !(s = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                            } catch (e) {
                                a = !0, r = e
                            } finally {
                                try {
                                    !s && null != i.return && i.return()
                                } finally {
                                    if (a) throw r
                                }
                            }
                            return o
                        }
                    }(e, i) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return c(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                        }
                    }(e, i) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    s = o[0],
                    a = o[1];
                return t.receiveHandlerId(s), n.receiveHandlerId(s), a
            }
        }, [u, t, n, d, l])
    }
}