function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n.d(t, {
        updateIsInTabsUI: function() {
            return d
        }
    });
    var a = n("804098"),
        o = n("20186"),
        l = n("626135"),
        u = n("960048");

    function d(e) {
        i !== e && (i = e, r = e, ! function() {
            let e = s && i && r ? a.DesignIds.YOU_BAR_IA : i ? r ? a.DesignIds.DESIGN_TABS_IA : a.DesignIds.DESIGN_IA : a.DesignIds.CLASSIC_IA;
            l.default.extendSuperProperties({
                design_id: e
            }), o.addGlobalTag("design_id", e), u.default.setTags({
                design_id: "".concat(e)
            })
        }())
    }
}