function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CollectiblesShopMarketingVariants: function() {
            return l
        },
        default: function() {
            return r
        }
    });
    var i, l, a = n("862205");
    (i = l || (l = {}))[i.DEFAULT = 0] = "DEFAULT", i[i.WINTER_2023_DROP = 1] = "WINTER_2023_DROP", i[i.MONSTER_DROP = 2] = "MONSTER_DROP";
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