function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " — ").concat(e.endDate),
        dateSelected: e => "Вибрано ".concat(e.date),
        finishRangeSelectionPrompt: "Натисніть, щоб завершити вибір діапазону дат",
        maximumDate: "Остання доступна дата",
        minimumDate: "Перша доступна дата",
        next: "Наступний",
        previous: "Попередній",
        selectedDateDescription: e => "Вибрана дата: ".concat(e.date),
        selectedRangeDescription: e => "Вибраний діапазон: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Натисніть, щоб почати вибір діапазону дат",
        todayDate: e => "Сьогодні, ".concat(e.date),
        todayDateSelected: e => "Сьогодні, вибрано ".concat(e.date)
    }
}