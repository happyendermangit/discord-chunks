function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var l = n("884691");

    function i(e, t) {
        let n = l.useRef(e);
        return l.useEffect(() => {
            function e(e) {
                null != n.current && !n.current.contains(e.target) && t()
            }
            return document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e)
            }
        }, [n, t]), n
    }
}