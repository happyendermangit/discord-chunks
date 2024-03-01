function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " tot ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " geselecteerd"),
        finishRangeSelectionPrompt: "Klik om de selectie van het datumbereik te voltooien",
        maximumDate: "Laatste beschikbare datum",
        minimumDate: "Eerste beschikbare datum",
        next: "Volgende",
        previous: "Vorige",
        selectedDateDescription: e => "Geselecteerde datum: ".concat(e.date),
        selectedRangeDescription: e => "Geselecteerd bereik: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Klik om het datumbereik te selecteren",
        todayDate: e => "Vandaag, ".concat(e.date),
        todayDateSelected: e => "Vandaag, ".concat(e.date, " geselecteerd")
    }
}