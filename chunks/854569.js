function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        createClientReportEnvelope: function() {
            return a
        }
    });
    var r = n("50074"),
        i = n("868145");

    function a(t, e, n) {
        let a = [{
            type: "client_report"
        }, {
            timestamp: n || (0, i.dateTimestampInSeconds)(),
            discarded_events: t
        }];
        return (0, r.createEnvelope)(e ? {
            dsn: e
        } : {}, [a])
    }
}