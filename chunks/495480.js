function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " 至 ").concat(e.endDate),
        dateSelected: e => "已選取 ".concat(e.date),
        finishRangeSelectionPrompt: "按一下以完成選取日期範圍",
        maximumDate: "最後一個可用日期",
        minimumDate: "第一個可用日期",
        next: "下一頁",
        previous: "上一頁",
        selectedDateDescription: e => "選定的日期：".concat(e.date),
        selectedRangeDescription: e => "選定的範圍：".concat(e.dateRange),
        startRangeSelectionPrompt: "按一下以開始選取日期範圍",
        todayDate: e => "今天，".concat(e.date),
        todayDateSelected: e => "已選取今天，".concat(e.date)
    }
}