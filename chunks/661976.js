function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "No ".concat(e.startDate, " līdz ").concat(e.endDate),
        dateSelected: e => "Atlasīts: ".concat(e.date),
        finishRangeSelectionPrompt: "Noklikšķiniet, lai pabeigtu datumu diapazona atlasi",
        maximumDate: "Pēdējais pieejamais datums",
        minimumDate: "Pirmais pieejamais datums",
        next: "Tālāk",
        previous: "Atpakaļ",
        selectedDateDescription: e => "Atlasītais datums: ".concat(e.date),
        selectedRangeDescription: e => "Atlasītais diapazons: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Noklikšķiniet, lai sāktu datumu diapazona atlasi",
        todayDate: e => "Šodien, ".concat(e.date),
        todayDateSelected: e => "Atlasīta šodiena, ".concat(e.date)
    }
}