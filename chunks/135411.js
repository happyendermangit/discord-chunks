function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormNoticeTypes: function() {
            return c
        },
        FormNoticeImagePositions: function() {
            return f
        },
        FormNotice: function() {
            return _
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("659397"),
        o = n("145131"),
        l = n("329272"),
        u = n("818810"),
        d = n("468701");
    let c = a.Card.Types,
        f = {
            LEFT: "left",
            RIGHT: "right"
        };

    function _(e) {
        let t, n, {
                type: s = a.Card.Types.DANGER,
                imageData: c,
                button: _,
                className: h,
                iconClassName: E,
                title: g,
                body: m,
                style: p,
                align: S = o.default.Align.START
            } = e,
            v = o.default.Direction.HORIZONTAL;
        if (null != c) {
            let {
                position: e,
                ...n
            } = c;
            t = (0, i.jsx)(o.default.Child, {
                grow: 0,
                shrink: 0,
                children: (0, i.jsx)("img", {
                    alt: "",
                    className: r(d.icon, E),
                    ...n
                })
            }), e === f.RIGHT && (v = o.default.Direction.HORIZONTAL_REVERSE)
        } else null != _ && (n = _);
        let T = !0;
        return s === a.Card.Types.PRIMARY && (T = !1), (0, i.jsx)(a.Card, {
            className: r(d.formNotice, h),
            type: s,
            style: p,
            children: (0, i.jsxs)(o.default, {
                direction: v,
                align: S,
                children: [t, (0, i.jsxs)(o.default.Child, {
                    children: [null != g && "" !== g ? (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        className: r(d.formNoticeTitle, {
                            [d.whiteText]: T
                        }),
                        faded: !0,
                        children: g
                    }) : null, (0, i.jsx)(l.FormText, {
                        className: r(d.formNoticeBody, {
                            [d.whiteText]: T
                        }),
                        children: m
                    }), n]
                })]
            })
        })
    }
    _.Types = a.Card.Types
}