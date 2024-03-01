function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        calendar: "달력",
        day: "일",
        dayPeriod: "오전/오후",
        endDate: "종료일",
        era: "연호",
        hour: "시",
        minute: "분",
        month: "월",
        second: "초",
        selectedDateDescription: e => "선택 일자: ".concat(e.date),
        selectedRangeDescription: e => "선택 범위: ".concat(e.startDate, " ~ ").concat(e.endDate),
        selectedTimeDescription: e => "선택 시간: ".concat(e.time),
        startDate: "시작일",
        timeZoneName: "시간대",
        weekday: "요일",
        year: "년"
    }
}