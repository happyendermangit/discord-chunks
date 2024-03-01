function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSelectionText: function() {
            return a
        },
        contextMenuCallbackNative: function() {
            return s
        },
        contextMenuCallbackWeb: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("272030");

    function a() {
        let e;
        if (null != window.getSelection) {
            var t;
            e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString()
        } else null != document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text);
        return null != e ? e : ""
    }

    function s(e) {
        let t = a(),
            s = e.target;
        if ((null == s ? void 0 : s.tagName) === "TEXTAREA" || (null == s ? void 0 : s.tagName) === "INPUT") {
            if ((null == s ? void 0 : s.type) !== "checkbox") return (0, i.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("604288").then(n.bind(n, "604288"));
                return n => (0, l.jsx)(e, {
                    ...n,
                    text: t
                })
            }, {
                enableSpellCheck: !0
            })
        } else if ("none" === window.getComputedStyle(s).getPropertyValue("-webkit-user-select")) {
            e.preventDefault();
            return
        } else {
            let a, s, r, o = e.target;
            for (; null != o;) "src" in o && null != o.src && (s = o.src), "href" in o && null != o.href && (a = o.href, r = o.textContent), o = null == o ? void 0 : o.parentNode;
            if (null != s) return (0, i.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("467592").then(n.bind(n, "467592"));
                return t => (0, l.jsx)(e, {
                    ...t,
                    src: null != s ? s : ""
                })
            });
            if (null != a) return (0, i.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("399758").then(n.bind(n, "399758"));
                return t => (0, l.jsx)(e, {
                    ...t,
                    href: a,
                    textContent: r
                })
            });
            else if (null != t && "" !== t) return (0, i.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("622618").then(n.bind(n, "622618"));
                return n => (0, l.jsx)(e, {
                    ...n,
                    text: t
                })
            })
        }
        return e.preventDefault(), null
    }

    function r(e) {
        let t = !1,
            n = e.target;
        if ((null == n ? void 0 : n.tagName) === "INPUT" || (null == n ? void 0 : n.tagName) === "TEXTAREA") t = !0;
        else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest("[contenteditable=true]")) != null) t = !0;
        else if (null != a() && "" !== a()) t = !0;
        else {
            let n, l, i = e.target;
            for (; null != i;) "src" in i && null != i.src && (l = i.src), "href" in i && null != i.href && (n = i.href), i = null == i ? void 0 : i.parentNode;
            (null != n || null != l) && (t = !0)
        }!t && e.preventDefault()
    }
}