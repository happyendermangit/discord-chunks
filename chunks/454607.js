function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        a: function() {
            return i
        },
        d: function() {
            return a
        },
        e: function() {
            return o
        }
    }), r("222007");
    var n = r("884691");
    r("144734");
    var i = function(e, t) {
        var r, i = (r = (0, n.useRef)(!0)).current ? (r.current = !1, !0) : r.current;
        (0, n.useEffect)(function() {
            if (!i) return e()
        }, t)
    };
    "u" > typeof window && window;
    var o = (0, n.createContext)(null).Provider,
        a = (e, t, r) => {
            let [i, o] = (0, n.useState)(() => r());
            return (0, n.useEffect)(() => {
                let r = e(() => {
                    o(t())
                });
                return () => {
                    r()
                }
            }, [e]), i
        }
}