function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ensureItemVisible: function() {
            return s
        }
    });
    var i = n("206230");

    function s(e) {
        var t;
        i.default.keyboardModeEnabled && (null === (t = e.current) || void 0 === t || t.scrollIntoView({
            block: "nearest"
        }))
    }
}