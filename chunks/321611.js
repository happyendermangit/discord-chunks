function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        registerBackgroundTabDetection: function() {
            return o
        }
    });
    var r = n("91320"),
        i = n("648238"),
        a = n("607190");

    function o() {
        a.WINDOW && a.WINDOW.document ? a.WINDOW.document.addEventListener("visibilitychange", () => {
            let t = (0, r.getActiveTransaction)();
            if (a.WINDOW.document.hidden && t) {
                let e = "cancelled";
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`), !t.status && t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
            }
        }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document")
    }
}