function(e, t, a) {
    "use strict";
    a.r(t), a("47120");
    var d = a("735250");
    a("470079");
    var n = a("525654"),
        c = a.n(n),
        i = a("481060"),
        o = a("570140"),
        r = a("468026"),
        f = a("317770"),
        l = a("63063"),
        s = a("981631"),
        u = a("689938");
    class b extends f.default {
        _initialize() {
            o.default.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
        }
        _terminate() {
            o.default.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
        }
        constructor(...e) {
            var t, a, n;
            super(...e), t = this, a = "handlePermission", n = e => {
                let {
                    kind: t,
                    granted: a
                } = e, n = "Firefox" === c().name ? s.HelpdeskArticles.ENABLE_MIC_FIREFOX : s.HelpdeskArticles.ENABLE_MIC_CHROME;
                if (!a) {
                    let e = "audio" !== t;
                    (0, i.openModal)(t => (0, d.jsx)(r.default, {
                        title: e ? u.default.Messages.NO_CAMERA_TITLE : u.default.Messages.NO_MIC_TITLE,
                        body: e ? u.default.Messages.NO_CAMERA_BODY : u.default.Messages.NO_MIC_BODY,
                        onConfirm: () => window.open(l.default.getArticleURL(n), "_blank"),
                        confirmText: u.default.Messages.HELP_DESK,
                        ...t
                    }))
                }
            }, a in t ? Object.defineProperty(t, a, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[a] = n
        }
    }
    t.default = new b
}