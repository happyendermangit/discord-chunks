function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("689938");

    function a() {
        function e() {
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("61418")]).then(n.bind(n, "431583"));
                return t => (0, i.jsx)(e, {
                    source: "Screenshare Unavailable",
                    ...t
                })
            })
        }(0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("67753")]).then(n.bind(n, "873809"));
            return n => (0, i.jsx)(t, {
                ...n,
                header: s.default.Messages.SCREENSHARE_UNAVAILABLE,
                body: s.default.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
                confirmText: s.default.Messages.DOWNLOAD_APP,
                onConfirm: e
            })
        })
    }
}