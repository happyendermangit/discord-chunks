function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("258078"),
        o = n("393626");

    function u(e) {
        var t;
        let {
            name: n,
            className: i,
            state: u,
            isInline: d,
            onClick: c
        } = e, f = null, m = r.default.Colors.HEADER_PRIMARY;
        (null == u ? void 0 : u.isActive) && !d ? f = o.active : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? f = o.error : (null == u ? void 0 : u.hasValue) && !d && (f = o.set);
        let p = (0, l.jsx)(r.default, {
            size: d ? r.default.Sizes.SIZE_16 : r.default.Sizes.SIZE_14,
            color: m,
            className: a(o.option, {
                [o.inline]: d
            }, f, i),
            children: n + (d ? ":" : "")
        });
        return null == c ? p : (0, l.jsx)(s.Clickable, {
            className: o.clickable,
            onClick: () => c(n),
            children: p
        })
    }
}