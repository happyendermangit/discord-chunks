function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " nepasirinkta."),
        longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
        select: "Pasirinkti",
        selectedAll: "Pasirinkti visi elementai.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Nepasirinktas nė vienas elementas",
            one: () => "Pasirinktas ".concat(t.number(e.count), " elementas"),
            other: () => "Pasirinkta elementų: ".concat(t.number(e.count))
        }), "."),
        selectedItem: e => "Pasirinkta: ".concat(e.item, ".")
    }
}