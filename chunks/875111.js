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
        dateSelected: e => "".concat(e.date, " izabran"),
        finishRangeSelectionPrompt: "Kliknite da dovršite opseg izabranih datuma",
        maximumDate: "Zadnji raspoloživi datum",
        minimumDate: "Prvi raspoloživi datum",
        next: "Sledeći",
        previous: "Prethodni",
        selectedDateDescription: e => "Izabrani datum: ".concat(e.date),
        selectedRangeDescription: e => "Izabrani period: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Kliknite da započnete opseg izabranih datuma",
        todayDate: e => "Danas, ".concat(e.date),
        todayDateSelected: e => "Danas, izabran ".concat(e.date)
    }
}