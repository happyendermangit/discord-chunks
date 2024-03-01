function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSourceClientOffset: function() {
            return a
        },
        getDifferenceFromInitialOffset: function() {
            return i
        }
    });

    function r(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }

    function a(e) {
        var t, n, a = e.clientOffset,
            i = e.initialClientOffset,
            o = e.initialSourceClientOffset;
        if (!a || !i || !o) return null;
        return r((t = a, n = o, {
            x: t.x + n.x,
            y: t.y + n.y
        }), i)
    }

    function i(e) {
        var t = e.clientOffset,
            n = e.initialClientOffset;
        return t && n ? r(t, n) : null
    }
}