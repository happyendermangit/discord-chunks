function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("77078");
    async function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        await (0, i.openModalLazy)(async () => {
            let {
                default: i
            } = await n.el("892845").then(n.bind(n, "892845"));
            return n => (0, s.jsx)(i, {
                source: e,
                oneClickFlow: t,
                ...n
            })
        })
    }
}