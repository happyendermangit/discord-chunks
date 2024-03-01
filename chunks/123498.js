function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " не выбрано."),
        longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
        select: "Выбрать",
        selectedAll: "Выбраны все элементы.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Нет выбранных элементов",
            one: () => "".concat(t.number(e.count), " элемент выбран"),
            other: () => "".concat(t.number(e.count), " элементов выбрано")
        }), "."),
        selectedItem: e => "".concat(e.item, " выбрано.")
    }
}