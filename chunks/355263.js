function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIconComponent: function() {
            return s
        },
        pxToRem: function() {
            return r
        },
        getCommandQuery: function() {
            return u
        }
    });
    var i = n("524768"),
        l = n("991630"),
        a = n("943161"),
        o = n("317041");
    let s = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? a.default : l.default;

    function r(e) {
        return "".concat(e / 16, "rem")
    }

    function u(e, t) {
        let n = t,
            i = !1,
            l = t.indexOf(":");
        if (l >= 0) {
            let e = t.lastIndexOf(" ", l);
            e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, l)
        } else t = t.substring(0, t.length);
        let a = t.split(" ", o.MAX_SUBCOMMAND_LEVEL + 1);
        return a.length > o.MAX_SUBCOMMAND_LEVEL && (i = !0, a.pop()), t = a.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
            text: t,
            parts: a,
            hasSpaceTerminator: i
        }
    }
}