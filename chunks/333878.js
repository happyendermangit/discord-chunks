function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        ModuleMetadata: function() {
            return a
        }
    });
    var r = n("648238"),
        i = n("274484");
    class a {
        constructor() {
            a.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "ModuleMetadata"
        }
        __init() {
            this.name = a.id
        }
        setupOnce(t, e) {
            let n = e().getClient();
            if (!n || "function" != typeof n.on) return;
            n.on("beforeEnvelope", t => {
                (0, r.forEachEnvelopeItem)(t, (t, e) => {
                    if ("event" === e) {
                        let e = Array.isArray(t) ? t[1] : void 0;
                        e && ((0, i.stripMetadataFromStackFrames)(e), t[1] = e)
                    }
                })
            });
            let a = n.getOptions().stackParser;
            t(t => ((0, i.addMetadataToStackFrames)(a, t), t))
        }
    }
    a.__initStatic()
}