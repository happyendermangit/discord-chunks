function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("446674"),
        s = n("577776"),
        r = n("77078"),
        o = n("355263"),
        u = n("368639"),
        d = n("82372"),
        c = n("426969"),
        f = n("231383");

    function p(e) {
        var t;
        let {
            channel: n,
            applicationSection: p
        } = e, m = (0, o.getIconComponent)(p), h = l.useMemo(() => {
            var e, t;
            return (0, u.parseBioReactWithoutScrolling)(null !== (t = null === (e = p.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
        }, [null === (t = p.application) || void 0 === t ? void 0 : t.description]), x = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentAppDetail()), E = l.useCallback(e => {
            e.stopPropagation(), (null == x ? void 0 : x.id) === p.id ? d.dismissAppDetail() : d.showAppDetail(p)
        }, [p, x]);
        return (0, i.jsxs)("li", {
            className: f.application,
            onClick: E,
            children: [(0, i.jsx)(m, {
                className: f.applicationIcon,
                channel: n,
                section: p,
                width: 32,
                height: 32
            }), (0, i.jsxs)("div", {
                className: f.applicationDetails,
                children: [(0, i.jsx)(r.Heading, {
                    variant: "heading-md/medium",
                    children: p.name
                }), (0, i.jsx)(s.Text, {
                    className: f.applicationDescription,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: h
                })]
            })]
        })
    }

    function m(e) {
        let {
            channel: t,
            applications: n
        } = e, a = n.slice(0, 50), r = l.useMemo(() => a.map(e => (0, i.jsx)(p, {
            channel: t,
            applicationSection: e
        }, e.id)), [t, a]);
        return 0 === a.length ? null : (0, i.jsxs)("div", {
            children: [(0, i.jsx)(s.Text, {
                className: f.listHeading,
                variant: "text-sm/semibold",
                children: "Server Apps"
            }), (0, i.jsx)("ul", {
                className: f.applicationList,
                children: r
            })]
        })
    }
}