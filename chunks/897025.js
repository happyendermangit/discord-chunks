function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TaskFactory: function() {
            return a
        }
    });
    var r = n("732115");
    class a {
        create(e) {
            let t = this.freeTasks,
                n = t.length ? t.pop() : new r.RawTask(this.onError, e => t[t.length] = e);
            return n.task = e, n
        }
        constructor(e) {
            this.onError = e, this.freeTasks = []
        }
    }
}