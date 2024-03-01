function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        },
        isPointInCodeBlock: function() {
            return I
        },
        hasOpenPlainTextCodeBlock: function() {
            return _
        }
    }), n("222007"), n("70102"), n("424973"), n("781738");
    var l = n("436443"),
        i = n("693566"),
        a = n.n(i),
        s = n("718517"),
        r = n("86256"),
        o = n("83800"),
        u = n("970153"),
        d = n("939563"),
        c = n("385887"),
        f = n("566819");
    let m = new Set(["line"]),
        p = l.default.listLanguages(),
        h = {};
    for (let e of p) {
        e = e.toLowerCase();
        let t = l.default.getLanguage(e);
        if (null == t) continue;
        let n = t.aliases;
        if (h[e] = e, null != n)
            for (let t of n) h[t.toLowerCase()] = e
    }
    let E = /^[a-z0-9_+\-.#]+$/,
        g = /^[a-z0-9_+\-.#]+$/i;
    for (let e in h)
        if (null == e.match(E)) throw Error("Language name does not match regex: ".concat(e));

    function C(e) {
        let {
            onChange: t
        } = e, n = null;
        return e.onChange = () => {
            c.EditorUtils.richValue(e) !== n && (o.HistoryUtils.withMergedEntry(e, () => {
                c.EditorUtils.withoutNormalizing(e, () => (function(e) {
                    let t = function(e) {
                        let t = [],
                            n = null;
                        for (let l of c.EditorUtils.blocks(e)) {
                            let i = null != n && (n.isInCodeBlock || n.opensCodeBlock),
                                a = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
                                s = null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null;
                            n = function(e, t, n, l, i) {
                                var a;
                                let s = function(e) {
                                        let t;
                                        let [n, l] = e;
                                        if (!m.has(n.type)) return [];
                                        let i = [],
                                            a = /\\|```/g;
                                        for (let e = 0; e < n.children.length; e++) {
                                            let s = n.children[e];
                                            if (c.TextUtils.isText(s))
                                                for (a.lastIndex = 0; null != (t = a.exec(s.text));) {
                                                    if ("\\" === t[0]) {
                                                        a.lastIndex += 1;
                                                        continue
                                                    }
                                                    i.push({
                                                        path: c.PathUtils.child(l, e),
                                                        offset: t.index
                                                    })
                                                }
                                        }
                                        return i
                                    }(t),
                                    r = s[0],
                                    o = s[s.length - 1],
                                    u = null;
                                if (null != o) {
                                    let [t] = c.EditorUtils.node(e, o.path);
                                    u = t.text.substring(o.offset + 3)
                                }
                                let d = n && null != r,
                                    f = n && 0 === s.length,
                                    p = l && 0 === s.length,
                                    E = d ? s.slice(1) : s,
                                    C = E.length % 2 == 1,
                                    S = C && (null == u || "" === u || null != u.match(g)),
                                    T = S && null != u && null !== (a = h[u.toLowerCase()]) && void 0 !== a ? a : null;
                                return {
                                    blockEntry: t,
                                    wasInCodeBlock: n,
                                    isInCodeBlock: f,
                                    isStyledCodeBlockLine: p,
                                    lang: C || d ? T : i,
                                    hljsTypes: null,
                                    closesCodeBlock: d,
                                    opensCodeBlock: C,
                                    opensCodeBlockOnOwnLine: S
                                }
                            }(e, l, i, a, s), t.push(n)
                        }
                        return function(e) {
                            let t = [],
                                n = !1;
                            for (let i of e) {
                                let a = i === e[e.length - 1];
                                if ((i.closesCodeBlock || a) && (n && a && !i.closesCodeBlock && t.push(i), n = !1, t.length > 0)) {
                                    let e = t.map(e => (0, u.serializeDescendant)(e.blockEntry[0])).join("\n"),
                                        n = t[0],
                                        i = n.lang;
                                    if (null != i && null != l.default.getLanguage(i)) {
                                        let n = function(e, t) {
                                            let n = "".concat(e, "-").concat(t),
                                                l = v.get(n);
                                            if (null != l) return l;
                                            let i = r.default.highlight(t, e, !1);
                                            if (null == i || i.illegal) return null;
                                            let a = i.value.split("\n");
                                            return v.set(n, a), a
                                        }(e, i);
                                        if (null != n && n.length === t.length) {
                                            let e = [];
                                            for (let l = 0; l < t.length; l++) {
                                                let i;
                                                let a = n[l].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
                                                    s = [],
                                                    r = 0,
                                                    o = 0;
                                                for (; null != (i = S.exec(a));) {
                                                    let t = i.index + i[0].length,
                                                        n = i.index - o;
                                                    i.index > o && (e.length > 0 && s.push({
                                                        types: [...e],
                                                        start: r,
                                                        end: r + n
                                                    }), r += n), "</span>" === i[0] ? e.pop() : e.push(i[1]), o = t
                                                }
                                                if (e.length > 0) {
                                                    let t = a.length - o;
                                                    s.push({
                                                        types: [...e],
                                                        start: r,
                                                        end: r + t
                                                    })
                                                }
                                                t[l].hljsTypes = s
                                            }
                                        } else
                                            for (let e = 0; e < t.length; e++) t[e].hljsTypes = null
                                    }
                                    t = []
                                }
                                n && t.push(i), i.opensCodeBlock && (n = !0)
                            }
                        }(t), t
                    }(e);
                    (function(e, t) {
                        for (let n of t) {
                            let [t, l] = n.blockEntry, i = function(e) {
                                return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
                                    lang: e.lang,
                                    wasInCodeBlock: e.wasInCodeBlock,
                                    isInCodeBlock: e.isInCodeBlock,
                                    isStyledCodeBlockLine: e.isStyledCodeBlockLine,
                                    hljsTypes: e.hljsTypes
                                } : null
                            }(n);
                            (null == t ? void 0 : t.codeBlockState) != i && d.SlateTransforms.setNodes(e, {
                                codeBlockState: i
                            }, {
                                at: l
                            })
                        }
                    })(e, t)
                })(e))
            }), n = c.EditorUtils.richValue(e)), t()
        }, e
    }
    let S = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
        T = {
            max: 1 / 0,
            maxAge: 1 * s.default.Millis.MINUTE,
            updateAgeOnGet: !0
        },
        v = new a(T);

    function I(e, t) {
        let n = 0;
        for (let i of c.EditorUtils.nodes(e, {
                at: {
                    anchor: {
                        path: f.FIRST_TEXT_PATH,
                        offset: 0
                    },
                    focus: t
                },
                mode: "lowest",
                match: e => c.TextUtils.isText(e)
            })) {
            var l;
            let e = i[0].text;
            c.PathUtils.equals(i[1], t.path) && (e = e.substring(0, t.offset));
            let a = e.match(/```/g);
            n += null !== (l = null == a ? void 0 : a.length) && void 0 !== l ? l : 0
        }
        return n % 2 != 0
    }

    function _(e) {
        if (null == e.selection) return !1;
        let t = c.RangeUtils.start(e.selection);
        return I(e, t)
    }
}