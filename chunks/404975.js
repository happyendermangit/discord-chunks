function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Button: function() {
            return u
        },
        Separator: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("481060"),
        o = n("660276");

    function l(e) {
        let {
            className: t
        } = e;
        return (0, i.jsx)("div", {
            className: s()(t, o.separator)
        })
    }

    function u(e) {
        let {
            onClick: t,
            onContextMenu: n,
            className: r,
            selected: l = !1,
            children: u,
            disabled: d = !1,
            dangerous: _,
            ...c
        } = e;
        return (0, i.jsx)(a.Clickable, {
            onClick: d ? void 0 : t,
            onContextMenu: d ? void 0 : n,
            className: s()(r, {
                [o.button]: !0,
                [o.selected]: l,
                [o.disabled]: d,
                [o.dangerous]: _
            }),
            ...c,
            children: u
        })
    }
    t.default = function(e) {
        let {
            className: t,
            children: n
        } = e;
        return (0, i.jsx)("div", {
            className: s()(t, o.wrapper),
            children: n
        })
    }
}