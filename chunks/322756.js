function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DateInput: function() {
            return E
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        a = n("227645"),
        o = n("130969"),
        l = n("442761"),
        u = n("201959"),
        c = n("943232"),
        d = n("556388"),
        f = n("182893");

    function E(e) {
        let {
            value: t,
            onSelect: n,
            dateFormat: r = "MMM D, YYYY",
            minDate: E,
            maxDate: p,
            disabled: h = !1
        } = e;
        return (0, i.jsx)(l.Popout, {
            renderPopout: function(e) {
                let {
                    closePopout: r
                } = e;
                return (0, i.jsx)(o.Dialog, {
                    children: (0, i.jsx)(u.default, {
                        minDate: E,
                        maxDate: p,
                        value: t,
                        onSelect: e => {
                            n(e), r()
                        },
                        calendarClassName: d.calendarContainer,
                        onClickOutside: r,
                        autoFocus: !0
                    })
                })
            },
            position: "bottom",
            children: e => {
                let {
                    onClick: n,
                    ...o
                } = e;
                return (0, i.jsx)(a.Clickable, {
                    ...o,
                    className: s(f.inputDefault, d.container, {
                        [f.disabled]: h,
                        [d.disabled]: h
                    }),
                    onClick: h ? void 0 : n,
                    "aria-disabled": h,
                    children: (0, i.jsxs)("div", {
                        className: d.content,
                        children: [(0, i.jsx)("div", {
                            className: d.text,
                            children: null == t ? void 0 : t.format(r)
                        }), (0, i.jsx)(c.default, {
                            className: d.icon
                        })]
                    })
                })
            }
        })
    }
}