function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("77078"),
        s = n("86678"),
        r = n("538282"),
        o = n("882641"),
        u = n("848471"),
        d = n("958706"),
        c = n("681426");

    function f(e) {
        var t;
        let {
            editorRef: n,
            options: f,
            channel: m
        } = e, p = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(), h = l.useCallback((e, t) => {
            let i = n.current;
            null != e && null != i && i.insertEmoji(e, t, !1), t && (0, r.closeExpressionPicker)()
        }, [n]);
        return null == p ? null : (0, i.jsxs)("div", {
            id: "slate-toolbar",
            className: c.staticToolbar,
            children: [(0, i.jsx)("div", {
                className: c.staticButtons,
                children: (0, i.jsx)(u.ToolbarButtons, {
                    editorRef: n,
                    options: f,
                    iconClassName: c.staticIcon,
                    dividerClassName: c.staticDivider
                })
            }), (0, i.jsx)(a.Popout, {
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsx)(s.default, {
                        persistSearch: !0,
                        channel: m,
                        closePopout: t,
                        onSelectEmoji: (e, n) => {
                            h(e, n), n && t()
                        },
                        pickerIntention: d.EmojiIntention.COMMUNITY_CONTENT
                    })
                },
                position: "bottom",
                animation: a.Popout.Animation.NONE,
                align: "left",
                children: (e, t) => {
                    let {
                        isShown: n
                    } = t;
                    return (0, i.jsx)(o.default, {
                        ...e,
                        active: n,
                        className: c.emojiButton,
                        tabIndex: 0
                    })
                }
            })]
        })
    }
}