function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return o
        }
    });
    var s = t("37983"),
        d = t("884691"),
        n = t("703809"),
        c = t("90915"),
        i = t("1501"),
        r = t("393414");

    function o(e) {
        let {
            children: a
        } = e;
        return d.useEffect(() => (i.default.initialize(), () => i.default.cleanup()), []), (0, s.jsx)(n.HelmetProvider, {
            children: (0, s.jsx)(c.Router, {
                history: (0, r.getHistory)(),
                children: a
            })
        })
    }
}