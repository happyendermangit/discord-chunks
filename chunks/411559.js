function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " n\xe3o selecionado."),
        longPressToSelect: "Prima continuamente para entrar no modo de sele\xe7\xe3o.",
        select: "Selecionar",
        selectedAll: "Todos os itens selecionados.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Nenhum item selecionado",
            one: () => "".concat(t.number(e.count), " item selecionado"),
            other: () => "".concat(t.number(e.count), " itens selecionados")
        }), "."),
        selectedItem: e => "".concat(e.item, " selecionado.")
    }
}