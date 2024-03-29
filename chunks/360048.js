function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("613828"),
        l = n("481060"),
        u = n("892090");
    let d = r.forwardRef(function(e, t) {
        var n;
        let {
            avatar: r,
            name: s,
            children: d,
            subText: _,
            decorators: c,
            onClick: E,
            selected: I,
            muted: T,
            to: f,
            avatarClassName: S,
            selectedClassName: h,
            innerClassName: A,
            wrapContent: m,
            highlighted: N,
            focusProps: O,
            ...p
        } = e;
        p.className = a()(p.className, u.container, {
            [u.selected]: I,
            [u.highlighted]: N,
            [null != h ? h : ""]: I,
            [u.clickable]: !I && (null != f || null != E)
        }), p["aria-selected"] = null !== (n = p["aria-selected"]) && void 0 !== n ? n : I;
        let R = (0, i.jsxs)("div", {
            className: a()(A, u.layout, {
                [u.muted]: !I && T,
                [u.wrappedLayout]: m
            }),
            children: [(0, i.jsx)("div", {
                className: a()(u.avatar, S),
                children: r
            }), (0, i.jsxs)("div", {
                className: u.content,
                children: [(0, i.jsxs)("div", {
                    className: u.nameAndDecorators,
                    children: [(0, i.jsx)("div", {
                        className: a()(u.name, {
                            [u.wrappedName]: m
                        }),
                        children: s
                    }), c]
                }), null != _ ? (0, i.jsx)("div", {
                    className: u.subText,
                    children: _
                }) : null]
            }), null != d ? (0, i.jsx)("div", {
                className: u.children,
                children: d
            }) : null]
        });
        return null != f ? (0, i.jsx)(l.FocusRing, {
            ...O,
            children: (0, i.jsx)(o.Link, {
                to: f,
                onClick: E,
                ...p,
                role: "listitem",
                ref: t,
                children: R
            })
        }) : null != E ? (0, i.jsx)(l.Clickable, {
            onClick: E,
            focusProps: O,
            ...p,
            role: "listitem",
            innerRef: t,
            children: R
        }) : (0, i.jsx)(l.FocusRing, {
            ...O,
            children: (0, i.jsx)("div", {
                ...p,
                role: "listitem",
                ref: t,
                children: R
            })
        })
    });
    t.default = d
}