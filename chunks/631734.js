function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RPCError: function() {
            return i
        }
    }), n("70102");
    class i extends Error {
        constructor(e, t) {
            super(t), "closeCode" in e ? (this.code = e.closeCode, this.closeCode = e.closeCode) : (this.code = e.errorCode, this.errorCode = e.errorCode), this.message = t, this.name = "RPCError"
        }
    }
}