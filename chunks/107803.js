function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " не е избран."),
        longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
        select: "Изберете",
        selectedAll: "Всички елементи са избрани.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Няма избрани елементи",
            one: () => "".concat(t.number(e.count), " избран елемент"),
            other: () => "".concat(t.number(e.count), " избрани елементи")
        }), "."),
        selectedItem: e => "".concat(e.item, " избран.")
    }
}