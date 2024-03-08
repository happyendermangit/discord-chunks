function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SeasonalGiftingMarketingExperiment: function() {
            return c
        },
        useIsSeasonalGiftingActive: function() {
            return f
        },
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("884691"),
        l = n("866227"),
        a = n.n(l),
        s = n("862337"),
        r = n("296892");
    let o = new Date("2024-01-04T07:59:59.000Z"),
        u = a(o),
        d = (0, r.default)({
            id: "2023-11_seasonal_gifting",
            label: "Seasonal Gifting 2023",
            kind: "user",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        c = (0, r.default)({
            id: "2023-11_seasonal_gifting_marketing_2023",
            label: "Seasonal Gifting Marketing 2023",
            kind: "user",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enabled",
                config: {
                    enabled: !0
                }
            }]
        });

    function f() {
        let [e, t] = i.useState(() => u.isAfter(Date.now()));
        return i.useEffect(() => {
            let n = new s.Timeout,
                i = () => {
                    let e = Math.min(u.diff(Date.now(), "millisecond"), 864e5);
                    null == n || n.start(e, () => {
                        u.isBefore(Date.now()) ? t(!1) : i()
                    })
                };
            return e && i(), () => n.stop()
        }), e
    }
    var p = d
}