function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "Nie zaznaczono ".concat(e.item, "."),
        longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
        select: "Zaznacz",
        selectedAll: "Wszystkie zaznaczone elementy.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Nie zaznaczono żadnych element\xf3w",
            one: () => "".concat(t.number(e.count), " zaznaczony element"),
            other: () => "".concat(t.number(e.count), " zaznaczonych element\xf3w")
        }), "."),
        selectedItem: e => "Zaznaczono ".concat(e.item, ".")
    }
}