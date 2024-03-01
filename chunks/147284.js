function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "С ".concat(e.startDate, " по ").concat(e.endDate),
        dateSelected: e => "Выбрано ".concat(e.date),
        finishRangeSelectionPrompt: "Щелкните, чтобы завершить выбор диапазона дат",
        maximumDate: "Последняя доступная дата",
        minimumDate: "Первая доступная дата",
        next: "Далее",
        previous: "Назад",
        selectedDateDescription: e => "Выбранная дата: ".concat(e.date),
        selectedRangeDescription: e => "Выбранный диапазон: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Щелкните, чтобы начать выбор диапазона дат",
        todayDate: e => "Сегодня, ".concat(e.date),
        todayDateSelected: e => "Сегодня, выбрано ".concat(e.date)
    }
}