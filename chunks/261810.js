function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("884691"),
        a = n("275370"),
        i = n.n(a),
        o = {};

    function s(e, t) {
        void 0 === t && (t = i);
        var n = (0, r.useRef)(o),
            a = n.current;
        return (0, r.useEffect)(function() {
            n.current = a
        }), n.current !== o && t(e, n.current) || (a = e), a
    }
}