function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("968194"),
        a = n("128259"),
        s = n("253981"),
        r = n("295999");

    function o(e) {
        let {
            activity: t,
            color: n,
            user: o,
            look: u
        } = e;
        if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
        async function d(e, t, n) {
            try {
                let l = await (0, i.getMetadata)(e, t);
                if (l.button_urls.length <= n) return;
                let r = l.button_urls[n];
                if ("string" != typeof r) return;
                let o = s.default.safeParseWithQuery(r);
                if (null == o || null == o.protocol || null == o.hostname) return;
                (0, a.handleClick)({
                    href: s.default.format(o),
                    trusted: !1
                })
            } catch (e) {}
        }
        return (0, l.jsx)(l.Fragment, {
            children: t.buttons.map((e, i) => (0, l.jsx)(r.default, {
                color: n,
                look: u,
                onClick: () => d(t, o.id, i),
                children: e
            }, "customButton-".concat(i)))
        })
    }
}