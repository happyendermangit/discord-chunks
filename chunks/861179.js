function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " \xe0 ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " s\xe9lectionn\xe9"),
        finishRangeSelectionPrompt: "Cliquer pour finir de s\xe9lectionner la plage de dates",
        maximumDate: "Derni\xe8re date disponible",
        minimumDate: "Premi\xe8re date disponible",
        next: "Suivant",
        previous: "Pr\xe9c\xe9dent",
        selectedDateDescription: e => "Date s\xe9lectionn\xe9e\xa0: ".concat(e.date),
        selectedRangeDescription: e => "Plage s\xe9lectionn\xe9e\xa0: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Cliquer pour commencer \xe0 s\xe9lectionner la plage de dates",
        todayDate: e => "Aujourd'hui, ".concat(e.date),
        todayDateSelected: e => "Aujourd’hui, ".concat(e.date, " s\xe9lectionn\xe9")
    }
}