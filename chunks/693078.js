function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("781738");
    var l = n("627445"),
        r = n.n(l),
        a = n("404828"),
        i = n.n(a);
    let u = /\n{2,}$/,
        o = /(?:^|\n)( *)$/,
        s = "(?:[*-]|\\d+\\.)",
        c = "( *)(" + s + ") +",
        d = RegExp("^" + c),
        f = RegExp(c + "[^\\n]*(?:\\n(?!\\1" + s + " )[^\\n]*)*(\n|$)", "gm"),
        p = / *\n$/,
        h = RegExp("^( *)(" + s + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + s + " )|$)"),
        m = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
        g = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
        E = {
            ...i.defaultRules.list,
            requiredFirstCharacters: " *-0123456789".split(""),
            match: (e, t) => {
                if (!t.allowList || t._listLevel >= 11) return null;
                let n = null == t.prevCapture ? "" : t.prevCapture[0],
                    l = o.exec(n);
                return null == l || m.test(l[0]) ? null : h.exec(e)
            },
            parse: (e, t, n) => {
                let l = e[2],
                    a = l.length > 1,
                    i = e[0].replace(u, "\n").match(f);
                r(null != i, "markup list items can not be parsed.");
                let o = !1,
                    s = i.map((e, l) => {
                        let r;
                        let a = d.exec(e),
                            u = null != a ? a[0].length : 0,
                            s = RegExp("^ {1," + u + "}", "gm"),
                            c = e.replace(s, "").replace(d, ""),
                            f = l === i.length - 1,
                            h = -1 !== c.indexOf("\n\n"),
                            m = h || f && o;
                        o = m;
                        let E = n.inline,
                            C = n._list,
                            y = n._listLevel;
                        n._list = !0, n._listLevel = (null != y ? y : 0) + 1, m ? (n.inline = !1, r = c.replace(p, "\n\n")) : (n.inline = !0, r = c.replace(p, ""));
                        let L = g(t(r, {
                            ...n,
                            allowHeading: !1
                        }));
                        return n.inline = E, n._list = C, n._listLevel = y, L
                    });
                return {
                    ordered: a,
                    start: a ? Math.min(1e9, Math.max(1, +l)) : void 0,
                    items: s
                }
            }
        };
    var C = E
}