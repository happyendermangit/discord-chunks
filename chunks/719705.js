function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSeparator: function() {
            return i
        }
    });
    var r = n("240849");

    function i(e) {
        let t, n = (0, r.filterDOMProps)(e, {
            labelable: !0
        });
        return ("vertical" === e.orientation && (t = "vertical"), "hr" !== e.elementType) ? {
            separatorProps: {
                ...n,
                role: "separator",
                "aria-orientation": t
            }
        } : {
            separatorProps: n
        }
    }
}