function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " do ").concat(e.endDate),
        dateSelected: e => "Wybrano ".concat(e.date),
        finishRangeSelectionPrompt: "Kliknij, aby zakończyć wyb\xf3r zakresu dat",
        maximumDate: "Ostatnia dostępna data",
        minimumDate: "Pierwsza dostępna data",
        next: "Dalej",
        previous: "Wstecz",
        selectedDateDescription: e => "Wybrana data: ".concat(e.date),
        selectedRangeDescription: e => "Wybrany zakres: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Kliknij, aby rozpocząć wyb\xf3r zakresu dat",
        todayDate: e => "Dzisiaj, ".concat(e.date),
        todayDateSelected: e => "Dzisiaj wybrano ".concat(e.date)
    }
}