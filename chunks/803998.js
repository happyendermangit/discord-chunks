function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("470079"),
        r = n("920103");

    function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
            [n] = (0, i.useState)(() => new r.default({
                tension: 200,
                friction: 35,
                mass: 2,
                clamp: !0,
                callback: (n, i) => {
                    let {
                        current: r
                    } = e;
                    if (null == r) return i();
                    "horizontal" === t ? r.scrollLeft = n : r.scrollTop = n
                },
                getNodeWindow: () => {
                    var t, n, i;
                    return null !== (i = null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.defaultView) && void 0 !== i ? i : null
                }
            }));
        return n
    }
}