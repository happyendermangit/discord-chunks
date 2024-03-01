function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("222007");
    var a = n("446674"),
        i = n("913144"),
        l = n("718517");
    let d = [],
        r = new Set,
        u = 0;
    class s extends a.default.Store {
        initialize() {
            setInterval(() => {
                this.emitChange()
            }, 1 * l.default.Millis.MINUTE)
        }
        getMessageReminders() {
            return d
        }
        isMessageReminder(e) {
            let t = d.find(t => t.messageId === e);
            return null != t && !t.complete
        }
        getOverdueMessageReminderCount() {
            return d.filter(e => null == e.dueAt || new Date > e.dueAt).length
        }
        recentlyFetched() {
            return new Date().getTime() - u < 1 * l.default.Millis.MINUTE
        }
        hasSentNotification(e) {
            return r.has(e)
        }
        getState() {
            return {
                messages: d
            }
        }
    }
    s.displayName = "MessageRemindersStore";
    var o = new s(i.default, {
        SAVED_MESSAGES_UPDATE: function(e) {
            let {
                messages: t
            } = e;
            u = new Date().getTime(), d = t.map(e => ({
                ...e,
                complete: !1
            })), t.forEach(e => {
                null != e.dueAt && e.dueAt > new Date && r.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && r.add(e.messageId)
            })
        },
        MESSAGE_REMINDER_TOGGLE: function(e) {
            let {
                messageId: t,
                complete: n
            } = e, a = d.findIndex(e => e.messageId === t);
            if (-1 === a) return !1;
            d[a] = {
                ...d[a],
                complete: n
            }
        },
        MESSAGE_REMINDER_NOTIFIED: function(e) {
            let {
                messageId: t
            } = e;
            r.add(t)
        }
    })
}