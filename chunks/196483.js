function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("53529"),
        r = n("887490");

    function s(e, t) {
        let {
            apply: n,
            deleteBackward: s,
            deleteForward: o,
            deleteFragment: l,
            insertData: u,
            insertText: d,
            onChange: _
        } = e;

        function c(n) {
            let r = i.HistoryUtils.currentEntry(e);
            if (null != r && (r.mergeable = !1), n >= e.history.stack.length) return;
            e.history.index = n;
            let s = i.HistoryUtils.currentEntry(e);
            t({
                newValue: s.value,
                newSelection: s.selection
            })
        }
        e.history = {
            index: 0,
            stack: []
        }, e.onChange = () => {
            let {
                history: t
            } = e;
            0 === t.stack.length && (t.stack = [a(e)], t.index = 0), null != e.selection && (i.HistoryUtils.currentEntry(e).selection = e.selection), I = null, _()
        }, e.undo = () => {
            e.history.index > 0 && c(e.history.index - 1)
        }, e.redo = () => {
            e.history.index < e.history.stack.length - 1 && c(e.history.index + 1)
        };
        let E = null,
            I = null,
            T = null;
        return e.apply = t => {
            let {
                history: s
            } = e;
            n(t);
            let o = r.EditorUtils.richValue(e);
            o !== T && (0 === s.stack.length && (s.stack = [a(e)], s.index = 0), i.HistoryUtils.isSaving(e) && (function(e, t, n) {
                let r;
                let {
                    selection: s
                } = e, a = i.HistoryUtils.currentEntry(e), o = !0, l = !0;
                if ("insert_text" === t.type && 1 === t.text.length ? (r = "insert", l = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? void 0 : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? r = "insert" : "remove_text" === t.type && 1 === t.text.length ? r = "delete" : (r = "other", o = !1, l = !1), "set_selection" === t.type && null != a) {
                    a.selection = s;
                    return
                }
                o && function(e, t) {
                    return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= 4e3) && !0
                }(a, r) ? i.HistoryUtils.insertOrMergeEntry(e, r, l) : i.HistoryUtils.insertEntry(e, r, l)
            }(e, t, E), E = t), I = t, T = o)
        }, e.deleteBackward = t => {
            i.HistoryUtils.withSingleEntry(e, () => s(t))
        }, e.deleteForward = t => {
            i.HistoryUtils.withSingleEntry(e, () => o(t))
        }, e.deleteFragment = t => {
            i.HistoryUtils.withSingleEntry(e, () => l(t))
        }, e.insertText = t => {
            1 === t.length && (null == I ? void 0 : I.type) === "remove_text" ? i.HistoryUtils.withMergedEntry(e, () => d(t)) : null != e.selection && r.RangeUtils.isExpanded(e.selection) ? i.HistoryUtils.withSingleEntry(e, () => d(t)) : d(t)
        }, e.insertData = t => {
            (null == I ? void 0 : I.type) === "remove_text" ? i.HistoryUtils.withMergedEntry(e, () => u(t)): i.HistoryUtils.withSingleEntry(e, () => u(t))
        }, e
    }

    function a(e) {
        return {
            type: "other",
            mergeable: !1,
            createdAt: Date.now(),
            value: r.EditorUtils.richValue(e),
            selection: e.selection
        }
    }
}