function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "Kohdetta ".concat(e.item, " ei valittu."),
        longPressToSelect: "Siirry valintatilaan painamalla pitk\xe4\xe4n.",
        select: "Valitse",
        selectedAll: "Kaikki kohteet valittu.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Ei yht\xe4\xe4n kohdetta valittu",
            one: () => "".concat(t.number(e.count), " kohde valittu"),
            other: () => "".concat(t.number(e.count), " kohdetta valittu")
        }), "."),
        selectedItem: e => "".concat(e.item, " valittu.")
    }
}