function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationBenefitsModalIcon: function() {
            return d
        },
        ApplicationBenefitsModalHeading: function() {
            return c
        },
        ApplicationBenefitsModalDivider: function() {
            return f
        },
        ApplicationBenefitsModalDescription: function() {
            return m
        },
        ApplicationBenefitsModalBenefits: function() {
            return p
        },
        ApplicationBenefitsModalContent: function() {
            return h
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("167007"),
        o = n("139737"),
        u = n("678598");
    let d = e => {
            let {
                application: t,
                asset: n,
                className: i,
                ...a
            } = e;
            return (0, l.jsx)(r.default, {
                application: t,
                size: r.ApplicationIconSize.MEDIUM,
                asset: n,
                className: i,
                ...a
            })
        },
        c = e => {
            let {
                children: t,
                className: n,
                id: i,
                ...r
            } = e;
            return (0, l.jsx)(s.Heading, {
                className: a(u.header, n),
                variant: "heading-xl/extrabold",
                id: i,
                ...r,
                children: t
            })
        };

    function f() {
        return (0, l.jsx)("hr", {
            className: u.divider
        })
    }
    let m = e => {
            let {
                className: t,
                title: n,
                description: i,
                ...a
            } = e;
            return (0, l.jsxs)("div", {
                className: t,
                ...a,
                children: [(0, l.jsx)(s.Heading, {
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: n
                }), (0, l.jsx)(s.Heading, {
                    variant: "heading-sm/normal",
                    color: "header-secondary",
                    children: i
                })]
            })
        },
        p = e => {
            let {
                applicationId: t,
                storeListingBenefits: n,
                skuBenefits: i,
                className: s,
                ...r
            } = e;
            return (0, l.jsx)("div", {
                className: a(u.benefitsContainer, s),
                ...r,
                children: (0, l.jsx)(o.SubscriptionListingBenefits, {
                    applicationId: t,
                    storeListingBenefits: n,
                    skuBenefits: i,
                    className: u.benefit
                })
            })
        },
        h = e => {
            let {
                children: t,
                className: n,
                ...i
            } = e;
            return (0, l.jsx)("div", {
                className: a(u.container, n),
                ...i,
                children: t
            })
        }
}