function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " до ").concat(e.endDate),
        dateSelected: e => "Избрано е ".concat(e.date),
        finishRangeSelectionPrompt: "Натиснете, за да довършите избора на времеви интервал",
        maximumDate: "Последна налична дата",
        minimumDate: "Първа налична дата",
        next: "Напред",
        previous: "Назад",
        selectedDateDescription: e => "Избрана дата: ".concat(e.date),
        selectedRangeDescription: e => "Избран диапазон: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Натиснете, за да пристъпите към избора на времеви интервал",
        todayDate: e => "Днес, ".concat(e.date),
        todayDateSelected: e => "Днес, ".concat(e.date, " са избрани")
    }
}