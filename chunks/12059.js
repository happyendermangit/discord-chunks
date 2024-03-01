function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " er ikke valgt."),
        longPressToSelect: "Bruk et langt trykk for \xe5 g\xe5 inn i valgmodus.",
        select: "Velg",
        selectedAll: "Alle elementer er valgt.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Ingen elementer er valgt",
            one: () => "".concat(t.number(e.count), " element er valgt"),
            other: () => "".concat(t.number(e.count), " elementer er valgt")
        }), "."),
        selectedItem: e => "".concat(e.item, " er valgt.")
    }
}