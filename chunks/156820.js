function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return b
        }
    }), t("222007");
    var s = t("37983");
    t("884691");
    var d = t("597755"),
        n = t.n(d),
        c = t("77078"),
        i = t("913144"),
        r = t("135230"),
        o = t("316272"),
        l = t("701909"),
        f = t("49111"),
        u = t("782340");
    class p extends o.default {
        _initialize() {
            i.default.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
        }
        _terminate() {
            i.default.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
        }
        constructor(...e) {
            super(...e), this.handlePermission = e => {
                let {
                    kind: a,
                    granted: t
                } = e, d = "Firefox" === n.name ? f.HelpdeskArticles.ENABLE_MIC_FIREFOX : f.HelpdeskArticles.ENABLE_MIC_CHROME;
                if (!t) {
                    let e = "audio" !== a;
                    (0, c.openModal)(a => (0, s.jsx)(r.default, {
                        title: e ? u.default.Messages.NO_CAMERA_TITLE : u.default.Messages.NO_MIC_TITLE,
                        body: e ? u.default.Messages.NO_CAMERA_BODY : u.default.Messages.NO_MIC_BODY,
                        onConfirm: () => window.open(l.default.getArticleURL(d), "_blank"),
                        confirmText: u.default.Messages.HELP_DESK,
                        ...a
                    }))
                }
            }
        }
    }
    var b = new p
}