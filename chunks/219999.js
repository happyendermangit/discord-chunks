function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isFirefox: function() {
            return a
        },
        isSafari: function() {
            return i
        }
    });
    var r = n("988641"),
        a = (0, r.memoize)(function() {
            return /firefox/i.test(navigator.userAgent)
        }),
        i = (0, r.memoize)(function() {
            return !!window.safari
        })
}