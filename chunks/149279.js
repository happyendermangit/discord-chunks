function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Separator: function() {
            return o
        },
        Button: function() {
            return u
        },
        default: function() {
            return d
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("323845");

    function o(e) {
        let {
            className: t
        } = e;
        return (0, l.jsx)("div", {
            className: a(t, r.separator)
        })
    }

    function u(e) {
        let {
            onClick: t,
            onContextMenu: n,
            className: i,
            selected: o = !1,
            children: u,
            disabled: d = !1,
            dangerous: c,
            ...f
        } = e;
        return (0, l.jsx)(s.Clickable, {
            onClick: d ? void 0 : t,
            onContextMenu: d ? void 0 : n,
            className: a(i, {
                [r.button]: !0,
                [r.selected]: o,
                [r.disabled]: d,
                [r.dangerous]: c
            }),
            ...f,
            children: u
        })
    }
    var d = function(e) {
        let {
            className: t,
            children: n
        } = e;
        return (0, l.jsx)("div", {
            className: a(t, r.wrapper),
            children: n
        })
    }
}