function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        SUPPORTS_COPY: function() {
            return r
        },
        copy: function() {
            return a
        }
    }), E("70102");
    var t = E("281071"),
        o = E("773336"),
        n = E("50885");
    let r = (() => {
        if (o.isPlatformEmbedded) return null != n.default.copy;
        try {
            return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
        } catch (e) {
            return !1
        }
    })();

    function a(e) {
        return !!r && (o.isPlatformEmbedded ? (n.default.copy(e), !0) : t.copy(e))
    }
}