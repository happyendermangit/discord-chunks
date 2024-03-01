function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadErrorCodes: function() {
            return i
        },
        default: function() {
            return u
        }
    });
    var r, i, l = n("782340");
    (r = i || (i = {}))[r.GENERAL = 0] = "GENERAL", r[r.NO_FILE = 1] = "NO_FILE", r[r.PROGRESS = 2] = "PROGRESS", r[r.UPLOAD = 3] = "UPLOAD", r[r.READ = 4] = "READ";
    var u = class e {
        get displayMessage() {
            switch (this.code) {
                case 1:
                    return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                case 2:
                    return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                case 3:
                    return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                case 4:
                    return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                default:
                    return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
            }
        }
        constructor(e) {
            this.code = e
        }
    }
}