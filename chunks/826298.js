function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCommandQuery: function() {
            return u
        },
        getIconComponent: function() {
            return o
        },
        pxToRem: function() {
            return l
        }
    });
    var i = n("895924"),
        r = n("809090"),
        s = n("944877"),
        a = n("689079");
    let o = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? s.default : r.default;

    function l(e) {
        return "".concat(e / 16, "rem")
    }

    function u(e, t) {
        let n = t,
            i = !1,
            r = t.indexOf(":");
        if (r >= 0) {
            let e = t.lastIndexOf(" ", r);
            e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, r)
        } else t = t.substring(0, t.length);
        let s = t.split(" ", a.MAX_SUBCOMMAND_LEVEL + 1);
        return s.length > a.MAX_SUBCOMMAND_LEVEL && (i = !0, s.pop()), t = s.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
            text: t,
            parts: s,
            hasSpaceTerminator: i
        }
    }
}