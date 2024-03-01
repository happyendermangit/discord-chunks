function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        serializePushNotificationLogs: function() {
            return r
        },
        getPushNotificationLogs: function() {
            return i
        }
    });
    var o = n("95410"),
        a = n("271938"),
        l = n("49111");

    function r(t, e) {
        if (0 === t.length) return "No logs";
        let n = o.default.get(l.DEVICE_TOKEN),
            a = o.default.get(l.DEVICE_VOIP_TOKEN),
            r = t.map(t => {
                let n = t.silent ? "Silent" : "Displayed",
                    o = e ? "".concat(t.channelId, " - ").concat(t.messageId) : "".concat(t.title, " - ").concat(t.content);
                return "".concat(new Date(t.receivedTimestamp).toISOString(), " [").concat(t.type, "] ").concat(n, " - ").concat(o)
            }).join("\n");
        return "".concat(null != n ? "Device Token: ".concat(n) : "", "\n").concat(null != a ? "Device Voip Token: ".concat(a) : "", "\n\n").concat(r)
    }
    async function i() {
        let t = a.default.getId(),
            e = [];
        return e
    }
}