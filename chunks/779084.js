function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " bis ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " ausgew\xe4hlt"),
        finishRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beenden",
        maximumDate: "Letztes verf\xfcgbares Datum",
        minimumDate: "Erstes verf\xfcgbares Datum",
        next: "Weiter",
        previous: "Zur\xfcck",
        selectedDateDescription: e => "Ausgew\xe4hltes Datum: ".concat(e.date),
        selectedRangeDescription: e => "Ausgew\xe4hlter Bereich: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beginnen",
        todayDate: e => "Heute, ".concat(e.date),
        todayDateSelected: e => "Heute, ".concat(e.date, " ausgew\xe4hlt")
    }
}