function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCommandBlock: function() {
            return h
        },
        getCurrentCommandOption: function() {
            return E
        },
        getOptionNames: function() {
            return g
        },
        getOptionValues: function() {
            return C
        },
        optionToValues: function() {
            return S
        },
        validateOptionValues: function() {
            return T
        },
        validateOption: function() {
            return v
        },
        findTextOptions: function() {
            return I
        }
    }), n("424973"), n("222007");
    var l = n("798609"),
        i = n("507217"),
        a = n("383018"),
        s = n("343952"),
        r = n("474643"),
        o = n("18494"),
        u = n("585722"),
        d = n("149022"),
        c = n("970153"),
        f = n("385887"),
        m = n("566819");
    let p = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

    function h(e) {
        let t = f.EditorUtils.richValue(e)[0];
        return null == t || "applicationCommand" !== t.type ? null : [t, m.FIRST_BLOCK_PATH]
    }

    function E(e) {
        var t, n;
        if (null == e.selection) return null;
        let l = null !== (t = f.EditorUtils.above(e, {
            at: e.selection.focus,
            match: e => f.NodeUtils.isType(e, "applicationCommandOption")
        })) && void 0 !== t ? t : null;
        if (null != l || f.RangeUtils.isCollapsed(e.selection)) return l;
        let i = null !== (n = f.EditorUtils.above(e, {
            at: e.selection.anchor,
            match: e => f.NodeUtils.isType(e, "applicationCommandOption")
        })) && void 0 !== n ? n : null;
        return i
    }

    function g(e) {
        let t = h(e),
            n = [],
            l = null == t ? void 0 : t[0].children;
        if (null != l)
            for (let e of l) f.NodeUtils.isType(e, "applicationCommandOption") && n.push(e.optionName);
        return n
    }

    function C(e, t) {
        let n = {};
        if (null == t.options) return {};
        let l = h(e),
            i = Object.fromEntries(t.options.map(e => [e.name, e])),
            a = null == l ? void 0 : l[0].children;
        if (null != a) {
            for (let t of a)
                if (f.NodeUtils.isType(t, "applicationCommandOption")) {
                    let l = i[t.optionName];
                    null != l && (n[t.optionName] = S(e, l, t))
                }
        }
        return n
    }

    function S(e, t, n) {
        let i = o.default.getCurrentlySelectedChannelId(),
            a = n.children.map(n => {
                if (t.type === l.ApplicationCommandOptionType.ATTACHMENT) {
                    let e = u.default.getUpload(i, t.name, r.DraftType.SlashCommand);
                    if (null != e) {
                        var a;
                        return {
                            type: "text",
                            text: null !== (a = e.filename) && void 0 !== a ? a : ""
                        }
                    }
                }
                if (f.TextUtils.isText(n)) return {
                    type: "text",
                    text: n.text
                };
                if (f.EditorUtils.isVoid(e, n)) {
                    let e = (0, d.voidToOptionValue)(n);
                    if (null != e) return e
                }
                return {
                    type: "text",
                    text: (0, c.serializeDescendant)(n, {
                        mode: "raw"
                    })
                }
            });
        if (t.type !== l.ApplicationCommandOptionType.STRING) {
            for (; a.length > 0 && "text" === a[0].type && "" === a[0].text.trim();) a.shift();
            for (; a.length > 0 && "text" === a[a.length - 1].type && "" === a[a.length - 1].text.trim();) a.pop()
        }
        return a
    }

    function T(e, t, n, l, a) {
        if (null == e.options) return {};
        let r = Object.fromEntries(e.options.map(e => {
            var i;
            return [e.name, s.validateOptionContent({
                option: e,
                content: null !== (i = l[e.name]) && void 0 !== i ? i : null,
                guildId: t,
                channelId: n,
                allowEmptyValues: a
            })]
        }));
        return i.updateOptionValidationStates(n, r), r
    }

    function v(e, t, n, l, r) {
        var o;
        let [u] = l, d = a.default.getActiveCommand(n), c = null == d ? void 0 : null === (o = d.options) || void 0 === o ? void 0 : o.find(e => e.name === u.optionName);
        if (null == c) return;
        let f = S(e, c, u),
            m = s.validateOptionContent({
                option: c,
                content: f,
                guildId: t,
                channelId: n,
                allowEmptyValues: r
            });
        return i.updateOptionStates(n, {
            [u.optionName]: {
                lastValidationResult: m
            }
        }), m
    }

    function I(e, t) {
        if (null == t.options || 0 === t.options.length) return [];
        let n = f.EditorUtils.richValue(e),
            l = [],
            i = new Set(g(e)),
            a = {},
            s = new Set;
        for (let e of t.options) a[e.displayName] = e, !i.has(e.name) && s.add(e.displayName);
        let r = null;
        for (let t = 0; t < n.length; t++) {
            let i = n[t];
            if ("line" === i.type || "applicationCommand" === i.type)
                for (let u = 0; u < i.children.length; u++) {
                    let d;
                    let m = i.children[u],
                        h = [t, u];
                    if (f.NodeUtils.isType(m, "applicationCommandOption")) {
                        if (null != r) {
                            var o;
                            r.valueRange.focus = null !== (o = f.EditorUtils.before(e, h)) && void 0 !== o ? o : f.EditorUtils.start(e, []), r.text = (0, c.toTextValue)(n, {
                                mode: "raw",
                                range: r.valueRange
                            }).trim(), l.push(r), r = null
                        }
                        continue
                    }
                    if (!!f.TextUtils.isText(m))
                        for (p.lastIndex = 0; null != (d = p.exec(m.text));) {
                            if (0 !== d.index && null == m.text.charAt(d.index - 1).match(/(\t|\s)/)) continue;
                            let e = d[1];
                            if (!s.has(e)) continue;
                            s.delete(e);
                            let t = a[e];
                            if (null == t) continue;
                            let i = {
                                    path: h,
                                    offset: d.index
                                },
                                o = {
                                    path: h,
                                    offset: i.offset + d[0].length
                                },
                                u = {
                                    path: h,
                                    offset: o.offset
                                },
                                f = {
                                    name: t.name,
                                    displayName: t.displayName,
                                    type: t.type,
                                    keyRange: {
                                        anchor: i,
                                        focus: o
                                    },
                                    valueRange: {
                                        anchor: u,
                                        focus: u
                                    },
                                    text: ""
                                };
                            null != r && (r.valueRange.focus = f.keyRange.anchor, r.text = (0, c.toTextValue)(n, {
                                mode: "raw",
                                range: r.valueRange
                            }).trim(), l.push(r)), r = f
                        }
                }
        }
        return null != r && (r.valueRange.focus = f.EditorUtils.end(e, []), r.text = (0, c.toTextValue)(n, {
            mode: "raw",
            range: r.valueRange
        }).trim(), l.push(r)), l
    }
}