function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showReportModal: function() {
            return i
        }
    }), n("653041");
    var a = n("735250");
    n("470079");
    var l = n("481060"),
        r = n("185625"),
        s = n("186023");
    async function i(e, t, n, i) {
        let d = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
            o = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
            u = arguments.length > 6 ? arguments[6] : void 0,
            c = (0, l.getInteractingModalContext)();
        try {
            let m, _ = o ? await (0, r.getReportMenu)(e, t) : await (0, r.getUnauthenticatedReportMenu)(e, t),
                f = [];
            let E = e => {
                    f.push(e)
                },
                h = e => {
                    m = e, null == n || n()
                };
            (0, l.openModal)(t => (0, a.jsx)(s.default, {
                menu: _,
                reportType: e,
                modalProps: t,
                onNavigate: E,
                onSubmit: h,
                isAuthenticated: o,
                emailToken: u
            }), {
                onCloseCallback: () => {
                    (0, r.trackCloseReportModalAnalytics)(e, f, m), null == i || i(), d && (0, r.showInAppReportsFeedbackModal)(e, null != m ? m : null)
                }
            }, c)
        } catch {}
    }
}