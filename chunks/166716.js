function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " έως ").concat(e.endDate),
        dateSelected: e => "Επιλέχθηκε ".concat(e.date),
        finishRangeSelectionPrompt: "Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών",
        maximumDate: "Τελευταία διαθέσιμη ημερομηνία",
        minimumDate: "Πρώτη διαθέσιμη ημερομηνία",
        next: "Επόμενο",
        previous: "Προηγούμενο",
        selectedDateDescription: e => "Επιλεγμένη ημερομηνία: ".concat(e.date),
        selectedRangeDescription: e => "Επιλεγμένο εύρος: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών",
        todayDate: e => "Σήμερα, ".concat(e.date),
        todayDateSelected: e => "Σήμερα, επιλέχτηκε ".concat(e.date)
    }
}