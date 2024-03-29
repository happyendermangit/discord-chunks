function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CollectiblesShopMarketingVariants: function() {
            return r
        }
    });
    var i, r, s = n("818083");
    (i = r || (r = {}))[i.DEFAULT = 0] = "DEFAULT", i[i.WINTER_2023_DROP = 1] = "WINTER_2023_DROP", i[i.MONSTER_DROP = 2] = "MONSTER_DROP", i[i.SPRINGTOONS = 4] = "SPRINGTOONS", i[i.SHY = 5] = "SHY";
    let a = (0, s.createExperiment)({
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
        }, {
            id: 4,
            label: "Springtoons 2024",
            config: {
                variant: 4
            }
        }, {
            id: 5,
            label: "Shy 2024",
            config: {
                variant: 5
            }
        }]
    });
    t.default = e => a.useExperiment({
        location: e
    }).variant
}