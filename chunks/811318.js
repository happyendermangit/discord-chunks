function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        ascending: "crescente",
        ascendingSort: e => `classificado pela coluna ${e.columnName} em ordem crescente`,
        columnSize: e => `${e.value} pixels`,
        descending: "decrescente",
        descendingSort: e => `classificado pela coluna ${e.columnName} em ordem decrescente`,
        resizerDescription: `Pressione Enter para come\xe7ar a redimensionar`,
        select: "Selecionar",
        selectAll: "Selecionar tudo",
        sortable: `coluna classific\xe1vel`
    }
}