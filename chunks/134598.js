function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openBroadcastingPrivacySettingsModal: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060");

    function s(e, t, s) {
        (0, r.openModalLazy)(async () => {
            let {
                default: r
            } = await Promise.all([n.e("99387"), n.e("10377")]).then(n.bind(n, "137167"));
            return n => (0, i.jsx)(r, {
                headerText: e,
                buttonCTA: t,
                onSave: s,
                ...n
            })
        })
    }
}