function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return o
        }
    });
    var n = r("37983");
    r("884691");
    var u = r("833395"),
        o = e => {
            let {
                profileEffectConfig: t,
                onReady: r
            } = e, {
                pendingRef: o,
                setPending: l
            } = (0, u.default)(t.effects, r);
            return (0, n.jsx)("div", {
                children: t.effects.map(e => (0, n.jsx)("img", {
                    src: e.src,
                    alt: "Preload Profile Effect Asset",
                    "aria-hidden": !0,
                    style: {
                        opacity: 0,
                        position: "absolute"
                    },
                    onLoad: () => {
                        l(o.current - 1), o.current = o.current - 1
                    }
                }, e.src))
            })
        }
}