function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CollectiblesShopMarketingVariants: function() {
            return i
        },
        default: function() {
            return r
        }
    });
    var l, i, a = n("862205");
    (l = i || (i = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.WINTER_2023_DROP = 1] = "WINTER_2023_DROP", l[l.MONSTER_DROP = 2] = "MONSTER_DROP";
    let s = (0, a.createExperiment)({
        kind: "user",
        id: "2023-12_collectibles_shop_marketing",
        label: "Collectibles Shop Marketing Variations",
        defaultConfig: {
            variant: 0
        },
        treatments: [{
            id: 1,
            label: "Winter 2023",
            config: {
                variant: 1
            }
        }, {
            id: 2,
            label: "Jan 2024",
            config: {
                variant: 2
            }
        }]
    });
    var r = e => s.useExperiment({
        location: e
    }).variant
}