function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculatePointerPosition: function() {
            return i
        }
    });
    let r = (e, t) => ({
            x: e.x - t.x,
            y: e.y - t.y
        }),
        a = e => {
            let t = e.getInitialClientOffset(),
                n = e.getInitialSourceClientOffset();
            return null === t || null === n ? {
                x: 0,
                y: 0
            } : r(t, n)
        },
        i = (e, t) => {
            let n = e.getClientOffset();
            if (null === n) return null;
            if (!t.current || !t.current.getBoundingClientRect) return r(n, a(e));
            let i = t.current.getBoundingClientRect(),
                o = {
                    x: i.width / 2,
                    y: i.height / 2
                };
            return r(n, o)
        }
}