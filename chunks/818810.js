function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormTitleTags: function() {
            return s
        },
        FormTitle: function() {
            return d
        }
    });
    var i, s, r = n("37983");
    n("884691");
    var a = n("414456"),
        o = n.n(a),
        l = n("860226"),
        u = n("22490");

    function d(e) {
        let t, {
            tag: n = "h5",
            children: i,
            className: s,
            faded: a,
            disabled: d,
            required: c = !1,
            error: _,
            errorId: f,
            ...E
        } = e;
        switch (n) {
            case "legend":
            case "label":
                t = n;
                break;
            default:
                t = l.H
        }
        return (0, r.jsxs)(t, {
            className: o(u[n], "h5" !== n ? u.defaultColor : null, s, {
                [u["defaultMargin".concat(n)]]: null == s,
                [u.faded]: a,
                [u.disabled]: d,
                [u.error]: null != _
            }),
            ...E,
            children: [i, c && null == _ ? (0, r.jsx)("span", {
                className: u.required,
                children: "*"
            }) : null, null != _ ? (0, r.jsxs)("span", {
                id: f,
                className: u.errorMessage,
                children: [null != i ? (0, r.jsx)("span", {
                    className: u.errorSeparator,
                    children: "-"
                }) : null, _]
            }) : null]
        })
    }(i = s || (s = {})).H1 = "h1", i.H2 = "h2", i.H3 = "h3", i.H4 = "h4", i.H5 = "h5", i.LABEL = "label", i.LEGEND = "legend"
}