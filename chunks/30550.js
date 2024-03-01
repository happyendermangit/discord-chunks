function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007"), n("424973");
    var l = n("135038"),
        i = n("385887");
    let a = new Set(["line", "blockQuote"]),
        s = [];

    function r(e, t, n) {
        if (i.EditorUtils.areStylesDisabled(e)) return [];
        let [r, o] = t;
        if (1 !== o.length || !i.NodeUtils.isInTypes(r, a)) return s;
        let {
            entries: u,
            serializedChildren: d
        } = i.ElementUtils.markdown(r, n, !0), c = [];
        for (let t = 0; t < u.length; t++) {
            let n = u[t];
            if (n.attributes.length > 0 && n.text.length > 0) {
                let a = u[t - 1],
                    s = u[t + 1],
                    r = (0, l.getPointFromPosition)(e, o, d, n.start),
                    f = (0, l.getPointFromPosition)(e, o, d, n.start + n.text.length),
                    m = {
                        anchor: r,
                        focus: f
                    },
                    p = i.EditorUtils.nodes(e, {
                        at: m,
                        mode: "lowest",
                        voids: !1
                    }),
                    h = {};
                for (let e of n.attributes)
                    if (h[e] = !0, "syntaxBefore" === e && null != s)
                        for (let e of s.attributes) h["before_".concat(e)] = !0;
                    else if ("syntaxAfter" === e && null != a)
                    for (let e of a.attributes) h["after_".concat(e)] = !0;
                for (let [t, n] of p) {
                    if (i.EditorUtils.isVoid(e, t)) continue;
                    let l = {
                        anchor: i.EditorUtils.start(e, n),
                        focus: i.EditorUtils.end(e, n)
                    };
                    i.PointUtils.isBefore(l.anchor, m.anchor) && (l.anchor = m.anchor), i.PointUtils.isAfter(l.focus, m.focus) && (l.focus = m.focus), c.push({
                        ...h,
                        ...l
                    })
                }
            }
        }
        return c
    }
}